const fs = require('fs');

const code = fs.readFileSync('/home/void0x14/Documents/ihsan-agama-verilen-destek/RE-react/arkose-x-ray/cleaned_js/2026-05-08T11-45-52.679Z/js/enforcement_120fcc72.js', 'utf8');

const lines = code.split('\n');
const rnLine = lines.find(l => l.includes('var rn = ['));
if (!rnLine) {
  console.log("rn line not found");
  process.exit(1);
}

const rnLineStr = rnLine.trim();
const toEval = rnLineStr.endsWith(',') ? rnLineStr.slice(0, -1) : rnLineStr;
eval(toEval); // creates var rn

function decode(t, e) {
  return t.split("").map(function (t, n) {
    return String.fromCharCode(t.charCodeAt(0) ^ e.charCodeAt(n % e.length));
  }).join("");
}

// Extract Je array and rotation
const jeMatch = code.match(/function Je\(\) \{\s*var t = (\[.*?\]);\s*return \(Je = function \(\) \{\s*return t;\s*\}\)\(\);\s*\}/s);
if (jeMatch) {
    let t_array;
    eval("t_array = " + jeMatch[1]);
    
    // We can just use the rotation logic from the file
    const rotationRegex = /!function \(t, e\) \{.*?\}\(Je\);/s;
    const rotationMatch = code.match(rotationRegex);
    if (rotationMatch) {
        let rotationCode = rotationMatch[0];
        rotationCode = rotationCode.replace('Je', 'function(){return t_array;}');
        // Define Ze to match what rotation expects
        function Ze(t, e) {
            return t_array[t - 220];
        }
        rotationCode = rotationCode.replace('Ze', 'Ze');
        eval(rotationCode);
        
        const key = Ze(243);
        console.log("Key: " + key);
        
        let hasRSA = false;
        rn.forEach((str, i) => {
            let decoded = decode(str, key);
            if (decoded.length > 50) {
                console.log(`[${i}] LONG: ${decoded.substring(0, 50)}...`);
            }
            if (decoded.toLowerCase().includes("rsa") || decoded.includes("BEGIN") || decoded.includes("public")) {
                console.log(`[${i}] RSA MATCH: ${decoded}`);
                hasRSA = true;
            }
        });
        if (!hasRSA) console.log("No RSA key found in rn bytecode.");
    } else {
        console.log("Rotation logic not found");
    }
}

