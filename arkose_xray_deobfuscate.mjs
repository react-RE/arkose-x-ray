#!/usr/bin/env node
import * as parser from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";
import fs from "fs";
import path from "path";

const traverse = _traverse.default;
const generate = _generate.default;

const OBF_PATTERN = /^_0x[a-f0-9]+$/i;

function warn(msg) {
  process.stderr.write(`[arkose-xray] ${msg}\n`);
}

function deobfuscate(filePath, outputPath) {
  if (!fs.existsSync(filePath)) throw new Error(`File not found: ${filePath}`);

  const startTime = Date.now();
  const rawCode = fs.readFileSync(filePath, "utf-8");
  const originalSize = rawCode.length;
  warn(`Loaded: ${filePath} (${(originalSize / 1024).toFixed(1)} KB)`);

  const code = rawCode;

  let ast;
  try {
    ast = parser.parse(code, {
      sourceType: "unambiguous",
      errorRecovery: true,
      plugins: ["jsx", "typescript"],
      allowImportExportEverywhere: true,
      allowAwaitOutsideFunction: true,
      allowReturnOutsideFunction: true,
      allowSuperOutsideMethod: true,
      allowUndeclaredExports: true,
    });
  } catch (e) {
    ast = parser.parse(code, { sourceType: "script", errorRecovery: true });
  }

  const decMap = buildDecryptorMap(ast, code);

  let strCount = 0;
  if (decMap.size > 0) {
    strCount = replaceDecryptorCalls(ast, decMap);
    warn(`String decryption: ${strCount} replacements`);
  } else {
    warn("No decryptors found");
  }

  hexToDecimal(ast);

  let cfCount = 0;
  for (let i = 0; i < 2; i++) {
    cfCount += constantFold(ast);
  }
  warn(`Constant folding: ${cfCount} replaced`);

  const rnCount = renameVars(ast);
  warn(`Variable renaming: ${rnCount} renamed`);

  deadCode(ast);

  const result = generate(ast, {
    retainLines: false,
    compact: false,
    concise: false,
    comments: true,
    jsescOption: { minimal: true },
  }).code;

  const resultSize = result.length;
  const reduction = originalSize > 0 ? ((1 - resultSize / originalSize) * 100).toFixed(1) : 0;
  const elapsed = Date.now() - startTime;

  if (outputPath) {
    const outDir = path.dirname(outputPath);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outputPath, result, "utf-8");
    return [
      `Deobfuscation complete.`,
      `  Input:  ${filePath} (${(originalSize / 1024).toFixed(1)} KB)`,
      `  Output: ${outputPath} (${(resultSize / 1024).toFixed(1)} KB)`,
      `  Strings decrypted: ${strCount}`,
      `  Constants folded: ${cfCount}`,
      `  Vars renamed: ${rnCount}`,
      `  Reduction: ${reduction}%`,
      `  Time: ${elapsed}ms`,
    ].join("\n");
  }
  return result;
}

function buildDecryptorMap(ast, fullCode) {
  const map = new Map();

  const stringArrays = collectStringArrays(ast);
  if (stringArrays.size === 0) return map;

  for (const [varName, arr] of stringArrays) {
    map.set(varName, { type: "array", arr });
    warn(`String array: ${varName}[${arr.length}]`);
  }

  const funcToArray = new Map();
  traverse(ast, {
    FunctionDeclaration(path) {
      const name = path.node.id?.name;
      if (!name) return;
      let foundArr = null;
      path.traverse({
        VariableDeclarator(inner) {
          if (!t.isIdentifier(inner.node.id)) return;
          const key = `${name}$${inner.node.id.name}`;
          if (stringArrays.has(key)) foundArr = key;
        },
      });
      if (foundArr) funcToArray.set(name, foundArr);
    },
  });

  const decryptorFuncs = findDecFuncs(ast);

  for (const dec of decryptorFuncs) {
    const { name, path: decPath } = dec;
    let offset = 0;
    let arrVarName = null;
    const localAliases = {};

    decPath.traverse({
      VariableDeclarator(inner) {
        if (!t.isIdentifier(inner.node.id)) return;
        const id = inner.node.id.name;
        const init = inner.node.init;
        if (t.isCallExpression(init) && t.isIdentifier(init.callee)) {
          const called = init.callee.name;
          if (stringArrays.has(called)) {
            localAliases[id] = called;
          } else if (funcToArray.has(called)) {
            localAliases[id] = funcToArray.get(called);
          }
        }
      },

      AssignmentExpression(inner) {
        const n = inner.node;
        if (t.isIdentifier(n.left) && n.operator === "=" && t.isBinaryExpression(n.right) && n.right.operator === "-" && t.isIdentifier(n.right.left) && t.isNumericLiteral(n.right.right)) {
          if (n.left.name === n.right.left.name && n.right.right.value > 50) {
            offset = n.right.right.value;
          }
        }
      },

      MemberExpression(inner) {
        if (!t.isIdentifier(inner.node.object)) return;
        const objName = inner.node.object.name;
        const resolved = localAliases[objName] || objName;
        if (!stringArrays.has(resolved) || !inner.node.computed) return;

        if (t.isAssignmentExpression(inner.node.property) && inner.node.property.operator === "-=" && t.isNumericLiteral(inner.node.property.right)) {
          offset = inner.node.property.right.value;
        }
        arrVarName = resolved;
      },
    });

    if (arrVarName && offset > 0) {
      const arr = stringArrays.get(arrVarName);
      map.set(name, { type: "decryptor", arr, offset, sourceArray: arrVarName });
      warn(`Decryptor: ${name}(idx - ${offset}) → ${arrVarName}[${arr.length} strings]`);
    }
  }

  propagateAliases(ast, map);

  return map;
}

function collectStringArrays(ast) {
  const arrs = new Map();

  traverse(ast, {
    VariableDeclarator(path) {
      if (!t.isIdentifier(path.node.id) || !t.isArrayExpression(path.node.init)) return;
      const elements = path.node.init.elements;
      if (elements.length < 3) return;
      const allStr = elements.every(
        (e) => t.isStringLiteral(e) || t.isNullLiteral(e) || (t.isIdentifier(e) && e.name === "undefined"),
      );
      if (!allStr) return;
      const fnScope = findEnclosingFunctionName(path);
      const key = fnScope ? `${fnScope}$${path.node.id.name}` : path.node.id.name;
      arrs.set(key, elements.map((e) => (t.isStringLiteral(e) ? e.value : null)));
    },
  });

  return arrs;
}

function findEnclosingFunctionName(path) {
  let p = path.parentPath;
  while (p) {
    if (p.isFunctionDeclaration() && p.node.id) return p.node.id.name;
    if (p.isVariableDeclarator() && t.isIdentifier(p.node.id)) return p.node.id.name;
    p = p.parentPath;
  }
  return null;
}

function findDecFuncs(ast) {
  const funcs = [];

  traverse(ast, {
    FunctionDeclaration(path) {
      const node = path.node;
      if (!node.id) return;
      if (node.params.length < 1) return;
      if (!t.isIdentifier(node.params[0])) return;

      let hasOffset = false;
      path.traverse({
        AssignmentExpression(inner) {
          const n = inner.node;
          if (n.operator === "=" && t.isIdentifier(n.left) && t.isBinaryExpression(n.right) && n.right.operator === "-" && t.isIdentifier(n.right.left) && t.isNumericLiteral(n.right.right) && n.right.right.value > 50 && n.left.name === n.right.left.name) {
            hasOffset = true;
          }
          if (n.operator === "-=" && t.isIdentifier(n.left) && t.isNumericLiteral(n.right) && n.right.value > 50) {
            hasOffset = true;
          }
        },
        BinaryExpression(inner) {
          const n = inner.node;
          if (n.operator === "-" && t.isIdentifier(n.left) && t.isNumericLiteral(n.right) && n.right.value > 50) {
            hasOffset = true;
          }
        },
      });

      if (hasOffset) {
        funcs.push({ name: node.id.name, path });
      }
    },
  });

  return funcs;
}

function propagateAliases(ast, map) {
  traverse(ast, {
    VariableDeclarator(path) {
      if (!t.isIdentifier(path.node.id) || !t.isIdentifier(path.node.init)) return;
      const src = path.node.init.name;
      if (map.has(src) && map.get(src).type === "decryptor") {
        map.set(path.node.id.name, { ...map.get(src) });
      }
    },
    AssignmentExpression(path) {
      if (!t.isIdentifier(path.node.left) || !t.isIdentifier(path.node.right)) return;
      const src = path.node.right.name;
      if (map.has(src) && map.get(src).type === "decryptor") {
        map.set(path.node.left.name, { ...map.get(src) });
      }
    },
  });
}

function replaceDecryptorCalls(ast, decMap) {
  if (decMap.size === 0) return 0;
  let count = 0;

  const activeNames = new Set();
  for (const [name, data] of decMap) {
    if (data.type === "decryptor" && data.arr) activeNames.add(name);
  }

  const objValues = {};
  traverse(ast, {
    VariableDeclarator(path) {
      if (!t.isIdentifier(path.node.id) || !t.isObjectExpression(path.node.init)) return;
      const vals = {};
      for (const prop of path.node.init.properties) {
        if (t.isIdentifier(prop.key) && t.isNumericLiteral(prop.value)) {
          vals[prop.key.name] = prop.value.value;
        }
      }
      if (Object.keys(vals).length > 0) objValues[path.node.id.name] = vals;
    },
  });

  traverse(ast, {
    CallExpression(path) {
      const callee = path.node.callee;
      let calleeName = null;

      if (t.isIdentifier(callee)) {
        calleeName = callee.name;
      } else if (t.isMemberExpression(callee) && t.isIdentifier(callee.object)) {
        const obj = callee.object.name;
        if (activeNames.has(obj)) return;
        return;
      } else {
        return;
      }

      if (!calleeName || !activeNames.has(calleeName)) return;

      const args = path.node.arguments;
      if (args.length < 1) return;

      const decData = decMap.get(calleeName);
      if (!decData || decData.type !== "decryptor") return;

      let rawIndex = null;
      const arg = args[0];

      if (t.isNumericLiteral(arg)) {
        rawIndex = arg.value;
      } else if (t.isMemberExpression(arg) && !arg.computed && t.isIdentifier(arg.object) && t.isIdentifier(arg.property)) {
        const ovals = objValues[arg.object.name];
        if (ovals) rawIndex = ovals[arg.property.name];
      } else if (t.isStringLiteral(arg)) {
        rawIndex = parseInt(arg.value, 10);
        if (isNaN(rawIndex)) rawIndex = null;
      }

      if (rawIndex === null || typeof rawIndex !== "number") return;

      const actual = rawIndex - decData.offset;
      const arr = decData.arr;
      if (actual < 0 || actual >= arr.length) return;

      const str = arr[actual];
      if (typeof str === "string") {
        if (path.parent.type === "ExpressionStatement" && path.parent.expression === path.node) {
          path.remove();
        } else {
          path.replaceWith(t.stringLiteral(str));
        }
        count++;
      }
    },
  });

  return count;
}

function hexToDecimal(ast) {
  traverse(ast, {
    NumericLiteral(path) {
      if (path.node.extra?.raw?.startsWith("0x")) delete path.node.extra;
    },
  });
}

function evalLit(node) {
  if (t.isStringLiteral(node)) return node.value;
  if (t.isNumericLiteral(node)) return node.value;
  if (t.isBooleanLiteral(node)) return node.value;
  if (t.isNullLiteral(node)) return null;
  if (t.isIdentifier(node) && node.name === "undefined") return undefined;
  return null;
}

function constantFold(ast) {
  let count = 0;

  traverse(ast, {
    BinaryExpression(p) {
      const { left, right, operator } = p.node;
      const l = evalLit(left);
      const r = evalLit(right);
      if (l === null || r === null) return;

      let result;
      switch (operator) {
        case "+": result = l + r; break;
        case "-": result = l - r; break;
        case "*": result = l * r; break;
        case "/": if (r === 0) return; result = l / r; break;
        case "%": if (r === 0) return; result = l % r; break;
        case "===": result = l === r; break;
        case "!==": result = l !== r; break;
        case "==": result = l == r; break;
        case "!=": result = l != r; break;
        case "<": result = l < r; break;
        case ">": result = l > r; break;
        case "<=": result = l <= r; break;
        case ">=": result = l >= r; break;
        case "<<": result = l << r; break;
        case ">>": result = l >> r; break;
        case ">>>": result = l >>> r; break;
        case "&": result = l & r; break;
        case "|": result = l | r; break;
        case "^": result = l ^ r; break;
        default: return;
      }
      replLit(p, result);
      count++;
    },
    UnaryExpression(p) {
      const { operator, argument } = p.node;
      const val = evalLit(argument);
      if (val === null) return;

      let result;
      switch (operator) {
        case "!": result = !val; break;
        case "-": result = -val; break;
        case "+": result = +val; break;
        case "~": result = ~val; break;
        case "typeof": result = typeof val; break;
        case "void": count++; replLit(p, undefined); return;
        default: return;
      }
      count++;
      replLit(p, result);
    },
  });
  return count;
}

function replLit(path, val) {
  if (val === undefined) path.replaceWith(t.identifier("undefined"));
  else if (val === null) path.replaceWith(t.nullLiteral());
  else if (typeof val === "string") path.replaceWith(t.stringLiteral(val));
  else if (typeof val === "boolean") path.replaceWith(t.booleanLiteral(val));
  else path.replaceWith(t.numericLiteral(val));
}

function renameVars(ast) {
  let count = 0;
  const scopeNames = {};

  function next(base, uid) {
    if (!scopeNames[uid]) scopeNames[uid] = {};
    if (!scopeNames[uid][base]) scopeNames[uid][base] = 0;
    const n = scopeNames[uid][base]++;
    return n === 0 ? base : `${base}${n}`;
  }

  traverse(ast, {
    Identifier(p) {
      const name = p.node.name;
      if (!OBF_PATTERN.test(name)) return;
      const binding = p.scope.getBinding(name);
      if (!binding) return;

      const scopeId = binding.scope.uid;
      const parent = binding.path.parent;
      let newName;

      if (t.isFunctionDeclaration(parent) && parent.id === binding.path.node) {
        newName = next("fn", scopeId);
      } else if (t.isVariableDeclarator(parent)) {
        const init = parent.init;
        if (t.isFunctionExpression(init) || t.isArrowFunctionExpression(init)) newName = next("fn", scopeId);
        else if (t.isArrayExpression(init)) newName = next("arr", scopeId);
        else if (t.isObjectExpression(init)) newName = next("obj", scopeId);
        else newName = next("var", scopeId);
      } else return;

      if (!newName || newName === name) return;
      try { p.scope.rename(name, newName); count++; } catch (e) {}
    },
  });
  return count;
}

function deadCode(ast) {
  traverse(ast, {
    IfStatement(p) {
      if (!t.isBooleanLiteral(p.node.test)) return;
      if (p.node.test.value && p.node.consequent) {
        t.isBlockStatement(p.node.consequent) ? p.replaceWithMultiple(p.node.consequent.body) : p.replaceWith(p.node.consequent);
      } else if (!p.node.test.value) {
        if (p.node.alternate) t.isBlockStatement(p.node.alternate) ? p.replaceWithMultiple(p.node.alternate.body) : p.replaceWith(p.node.alternate);
        else p.remove();
      }
    },
    ConditionalExpression(p) {
      if (t.isBooleanLiteral(p.node.test)) p.replaceWith(p.node.test.value ? p.node.consequent : p.node.alternate);
    },
  });
}

const args = process.argv.slice(2);
const inputPath = args[0];
const outputPath = args[1] || null;

if (!inputPath) {
  console.error("Usage: node arkose_xray_deobfuscate.mjs <filePath> [outputPath]");
  process.exit(1);
}

try {
  const result = deobfuscate(inputPath, outputPath);
  process.stdout.write(result);
  process.exit(0);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.stderr.write(err.stack + "\n");
  process.exit(1);
}
