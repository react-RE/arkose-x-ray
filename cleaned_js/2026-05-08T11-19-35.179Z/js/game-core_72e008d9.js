/*! bootstrap_1.34.1 */!function () {
  var t = {
      9354: function (t, e) {
        "use strict";

        e.f = undefined, function (t) {
          t.SETUP_SESSION = "gt", t.GET_GAME = "gfct/", t.CHECK_ANSWER = "ca/", t.GET_ENCRYPTION_KEY = "ekey/", t.ANALYTICS = "a/";
        }(e.f || (e.f = {}));
      },
      4188: function (t, e) {
        "use strict";

        e.y2 = e.B1 = e.GV = e.D$ = e.Zt = e.Ow = undefined, function (t) {
          t.Answered = "correct", t.NotAnswered = "incorrect";
        }(e.Ow || (e.Ow = {})), function (t) {
          t.Answered = "answered", t.NotAnswered = "not answered";
        }(e.Zt || (e.Zt = {})), function (t) {
          t[t.Type101 = 101] = "Type101", t[t.AudioGame = 101] = "AudioGame", t[t.AudioMode = 2] = "AudioMode", t[t.TileGame = 3] = "TileGame", t[t.MatchGame = 4] = "MatchGame";
        }(e.D$ || (e.D$ = {})), function (t) {
          t.Verify = "VERIFY", t.Game = "GAME", t.Checking = "CHECKING", t.Loading = "LOADING", t.Victory = "VICTORY", t.Error = "ERROR", t.AttemptLimit = "ATTEMPT_LIMIT";
        }(e.GV || (e.GV = {})), function (t) {
          t.Integer = "integer";
        }(e.B1 || (e.B1 = {})), function (t) {
          t.NoJS = "noJS", t.LiteJS = "liteJS", t.Canvas = "canvas";
        }(e.y2 || (e.y2 = {}));
      },
      1047: function (t, e) {
        "use strict";

        e.u = undefined;
        e.u = function () {
          var t = Date.now().toString(10).substring(0, 7),
            e = Date.now().toString(10).substring(7, 13);
          return "".concat(t, "00").concat(e);
        };
      },
      8423: function () {
        !function (t) {
          !function (e) {
            var r = "undefined" != typeof globalThis && globalThis || undefined !== t && t || undefined !== r && r,
              n = "URLSearchParams" in r,
              o = "Symbol" in r && "iterator" in Symbol,
              i = "FileReader" in r && "Blob" in r && function () {
                try {
                  return new Blob(), true;
                } catch (t) {
                  return false;
                }
              }(),
              a = "FormData" in r,
              u = "ArrayBuffer" in r;
            if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
              s = ArrayBuffer.isView || function (t) {
                return t && c.indexOf(Object.prototype.toString.call(t)) > -1;
              };
            function f(t) {
              if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"');
              return t.toLowerCase();
            }
            function l(t) {
              return "string" != typeof t && (t = String(t)), t;
            }
            function h(t) {
              var e = {
                next: function () {
                  var e = t.shift();
                  return {
                    done: undefined === e,
                    value: e
                  };
                }
              };
              return o && (e[Symbol.iterator] = function () {
                return e;
              }), e;
            }
            function p(t) {
              this.map = {}, t instanceof p ? t.forEach(function (t, e) {
                this.append(e, t);
              }, this) : Array.isArray(t) ? t.forEach(function (t) {
                this.append(t[0], t[1]);
              }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
                this.append(e, t[e]);
              }, this);
            }
            function v(t) {
              if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
              t.bodyUsed = true;
            }
            function y(t) {
              return new Promise(function (e, r) {
                t.onload = function () {
                  e(t.result);
                }, t.onerror = function () {
                  r(t.error);
                };
              });
            }
            function d(t) {
              var e = new FileReader(),
                r = y(e);
              return e.readAsArrayBuffer(t), r;
            }
            function g(t) {
              if (t.slice) return t.slice(0);
              var e = new Uint8Array(t.byteLength);
              return e.set(new Uint8Array(t)), e.buffer;
            }
            function m() {
              return this.bodyUsed = false, this._initBody = function (t) {
                var e;
                this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : i && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : a && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : u && i && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = g(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(t) || s(t)) ? this._bodyArrayBuffer = g(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
              }, i && (this.blob = function () {
                var t = v(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }, this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var t = v(this);
                  return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
                }
                return this.blob().then(d);
              }), this.text = function () {
                var t,
                  e,
                  r,
                  n = v(this);
                if (n) return n;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader(), r = y(e), e.readAsText(t), r;
                if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
                  for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                  return r.join("");
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }, a && (this.formData = function () {
                return this.text().then(x);
              }), this.json = function () {
                return this.text().then(JSON.parse);
              }, this;
            }
            p.prototype.append = function (t, e) {
              t = f(t), e = l(e);
              var r = this.map[t];
              this.map[t] = r ? r + ", " + e : e;
            }, p.prototype.delete = function (t) {
              delete this.map[f(t)];
            }, p.prototype.get = function (t) {
              return t = f(t), this.has(t) ? this.map[t] : null;
            }, p.prototype.has = function (t) {
              return this.map.hasOwnProperty(f(t));
            }, p.prototype.set = function (t, e) {
              this.map[f(t)] = l(e);
            }, p.prototype.forEach = function (t, e) {
              for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
            }, p.prototype.keys = function () {
              var t = [];
              return this.forEach(function (e, r) {
                t.push(r);
              }), h(t);
            }, p.prototype.values = function () {
              var t = [];
              return this.forEach(function (e) {
                t.push(e);
              }), h(t);
            }, p.prototype.entries = function () {
              var t = [];
              return this.forEach(function (e, r) {
                t.push([r, e]);
              }), h(t);
            }, o && (p.prototype[Symbol.iterator] = p.prototype.entries);
            var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function w(t, e) {
              if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
              var r,
                n,
                o = (e = e || {}).body;
              if (t instanceof w) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = true);
              } else this.url = String(t);
              if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = (r = e.method || this.method || "GET", n = r.toUpperCase(), b.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
              if (this._initBody(o), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
                var i = /([?&])_=[^&]*/;
                if (i.test(this.url)) this.url = this.url.replace(i, "$1_=" + new Date().getTime());else {
                  this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
                }
              }
            }
            function x(t) {
              var e = new FormData();
              return t.trim().split("&").forEach(function (t) {
                if (t) {
                  var r = t.split("="),
                    n = r.shift().replace(/\+/g, " "),
                    o = r.join("=").replace(/\+/g, " ");
                  e.append(decodeURIComponent(n), decodeURIComponent(o));
                }
              }), e;
            }
            function E(t, e) {
              if (!(this instanceof E)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
              e || (e = {}), this.type = "default", this.status = undefined === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = undefined === e.statusText ? "" : "" + e.statusText, this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t);
            }
            w.prototype.clone = function () {
              return new w(this, {
                body: this._bodyInit
              });
            }, m.call(w.prototype), m.call(E.prototype), E.prototype.clone = function () {
              return new E(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new p(this.headers),
                url: this.url
              });
            }, E.error = function () {
              var t = new E(null, {
                status: 0,
                statusText: ""
              });
              return t.type = "error", t;
            };
            var S = [301, 302, 303, 307, 308];
            E.redirect = function (t, e) {
              if (-1 === S.indexOf(e)) throw new RangeError("Invalid status code");
              return new E(null, {
                status: e,
                headers: {
                  location: t
                }
              });
            }, e.DOMException = r.DOMException;
            try {
              new e.DOMException();
            } catch (t) {
              e.DOMException = function (t, e) {
                this.message = t, this.name = e;
                var r = Error(t);
                this.stack = r.stack;
              }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException;
            }
            function O(t, n) {
              return new Promise(function (o, a) {
                var c = new w(t, n);
                if (c.signal && c.signal.aborted) return a(new e.DOMException("Aborted", "AbortError"));
                var s = new XMLHttpRequest();
                function f() {
                  s.abort();
                }
                s.onload = function () {
                  var t,
                    e,
                    r = {
                      status: s.status,
                      statusText: s.statusText,
                      headers: (t = s.getAllResponseHeaders() || "", e = new p(), t.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function (t) {
                        return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t;
                      }).forEach(function (t) {
                        var r = t.split(":"),
                          n = r.shift().trim();
                        if (n) {
                          var o = r.join(":").trim();
                          e.append(n, o);
                        }
                      }), e)
                    };
                  r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                  var n = "response" in s ? s.response : s.responseText;
                  setTimeout(function () {
                    o(new E(n, r));
                  }, 0);
                }, s.onerror = function () {
                  setTimeout(function () {
                    a(new TypeError("Network request failed"));
                  }, 0);
                }, s.ontimeout = function () {
                  setTimeout(function () {
                    a(new TypeError("Network request failed"));
                  }, 0);
                }, s.onabort = function () {
                  setTimeout(function () {
                    a(new e.DOMException("Aborted", "AbortError"));
                  }, 0);
                }, s.open(c.method, function (t) {
                  try {
                    return "" === t && r.location.href ? r.location.href : t;
                  } catch (e) {
                    return t;
                  }
                }(c.url), true), "include" === c.credentials ? s.withCredentials = true : "omit" === c.credentials && (s.withCredentials = false), "responseType" in s && (i ? s.responseType = "blob" : u && c.headers.get("Content-Type") && -1 !== c.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")), !n || "object" != typeof n.headers || n.headers instanceof p ? c.headers.forEach(function (t, e) {
                  s.setRequestHeader(e, t);
                }) : Object.getOwnPropertyNames(n.headers).forEach(function (t) {
                  s.setRequestHeader(t, l(n.headers[t]));
                }), c.signal && (c.signal.addEventListener("abort", f), s.onreadystatechange = function () {
                  4 === s.readyState && c.signal.removeEventListener("abort", f);
                }), s.send(undefined === c._bodyInit ? null : c._bodyInit);
              });
            }
            O.polyfill = true, r.fetch || (r.fetch = O, r.Headers = p, r.Request = w, r.Response = E), e.Headers = p, e.Request = w, e.Response = E, e.fetch = O;
          }({});
        }("undefined" != typeof self ? self : this);
      },
      1575: function (t, e, r) {
        "use strict";

        var n = r(5893),
          o = r(5545),
          i = TypeError;
        t.exports = function (t) {
          if (n(t)) return t;
          throw new i(o(t) + " is not a function");
        };
      },
      7329: function (t, e, r) {
        "use strict";

        var n = r(5434),
          o = r(5545),
          i = TypeError;
        t.exports = function (t) {
          if (n(t)) return t;
          throw new i(o(t) + " is not a constructor");
        };
      },
      9272: function (t, e, r) {
        "use strict";

        var n = r(5893),
          o = String,
          i = TypeError;
        t.exports = function (t) {
          if ("object" == typeof t || n(t)) return t;
          throw new i("Can't set " + o(t) + " as a prototype");
        };
      },
      9408: function (t, e, r) {
        "use strict";

        var n = r(7936),
          o = r(9464),
          i = r(7144).f,
          a = n("unscopables"),
          u = Array.prototype;
        undefined === u[a] && i(u, a, {
          configurable: true,
          value: o(null)
        }), t.exports = function (t) {
          u[a][t] = true;
        };
      },
      9384: function (t, e, r) {
        "use strict";

        var n = r(8373).charAt;
        t.exports = function (t, e, r) {
          return e + (r ? n(t, e).length : 1);
        };
      },
      9064: function (t, e, r) {
        "use strict";

        var n = r(2075),
          o = TypeError;
        t.exports = function (t, e) {
          if (n(e, t)) return t;
          throw new o("Incorrect invocation");
        };
      },
      9972: function (t, e, r) {
        "use strict";

        var n = r(5287),
          o = String,
          i = TypeError;
        t.exports = function (t) {
          if (n(t)) return t;
          throw new i(o(t) + " is not an object");
        };
      },
      5679: function (t, e, r) {
        "use strict";

        var n = r(6767).forEach,
          o = r(519)("forEach");
        t.exports = o ? [].forEach : function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : undefined);
        };
      },
      993: function (t, e, r) {
        "use strict";

        var n = r(5898),
          o = r(1550),
          i = r(5864),
          a = r(608),
          u = r(2943),
          c = r(5434),
          s = r(9969),
          f = r(6968),
          l = r(3159),
          h = r(5536),
          p = Array;
        t.exports = function (t) {
          var e = i(t),
            r = c(this),
            v = arguments.length,
            y = v > 1 ? arguments[1] : undefined,
            d = undefined !== y;
          d && (y = n(y, v > 2 ? arguments[2] : undefined));
          var g,
            m,
            b,
            w,
            x,
            E,
            S = h(e),
            O = 0;
          if (!S || this === p && u(S)) for (g = s(e), m = r ? new this(g) : p(g); g > O; O++) E = d ? y(e[O], O) : e[O], f(m, O, E);else for (x = (w = l(e, S)).next, m = r ? new this() : []; !(b = o(x, w)).done; O++) E = d ? a(w, y, [b.value, O], true) : b.value, f(m, O, E);
          return m.length = O, m;
        };
      },
      2971: function (t, e, r) {
        "use strict";

        var n = r(9405),
          o = r(9961),
          i = r(9969),
          a = function (t) {
            return function (e, r, a) {
              var u,
                c = n(e),
                s = i(c),
                f = o(a, s);
              if (t && r != r) {
                for (; s > f;) if ((u = c[f++]) != u) return true;
              } else for (; s > f; f++) if ((t || f in c) && c[f] === r) return t || f || 0;
              return !t && -1;
            };
          };
        t.exports = {
          includes: a(true),
          indexOf: a(false)
        };
      },
      6767: function (t, e, r) {
        "use strict";

        var n = r(5898),
          o = r(6406),
          i = r(5366),
          a = r(5864),
          u = r(9969),
          c = r(5008),
          s = o([].push),
          f = function (t) {
            var e = 1 === t,
              r = 2 === t,
              o = 3 === t,
              f = 4 === t,
              l = 6 === t,
              h = 7 === t,
              p = 5 === t || l;
            return function (v, y, d, g) {
              for (var m, b, w = a(v), x = i(w), E = n(y, d), S = u(x), O = 0, L = g || c, j = e ? L(v, S) : r || h ? L(v, 0) : undefined; S > O; O++) if ((p || O in x) && (b = E(m = x[O], O, w), t)) if (e) j[O] = b;else if (b) switch (t) {
                case 3:
                  return true;
                case 5:
                  return m;
                case 6:
                  return O;
                case 2:
                  s(j, m);
              } else switch (t) {
                case 4:
                  return false;
                case 7:
                  s(j, m);
              }
              return l ? -1 : o || f ? f : j;
            };
          };
        t.exports = {
          forEach: f(0),
          map: f(1),
          filter: f(2),
          some: f(3),
          every: f(4),
          find: f(5),
          findIndex: f(6),
          filterReject: f(7)
        };
      },
      6251: function (t, e, r) {
        "use strict";

        var n = r(5306),
          o = r(7936),
          i = r(7245),
          a = o("species");
        t.exports = function (t) {
          return i >= 51 || !n(function () {
            var e = [];
            return (e.constructor = {})[a] = function () {
              return {
                foo: 1
              };
            }, 1 !== e[t](Boolean).foo;
          });
        };
      },
      519: function (t, e, r) {
        "use strict";

        var n = r(5306);
        t.exports = function (t, e) {
          var r = [][t];
          return !!r && n(function () {
            r.call(null, e || function () {
              return 1;
            }, 1);
          });
        };
      },
      9813: function (t, e, r) {
        "use strict";

        var n = r(1575),
          o = r(5864),
          i = r(5366),
          a = r(9969),
          u = TypeError,
          c = function (t) {
            return function (e, r, c, s) {
              n(r);
              var f = o(e),
                l = i(f),
                h = a(f),
                p = t ? h - 1 : 0,
                v = t ? -1 : 1;
              if (c < 2) for (;;) {
                if (p in l) {
                  s = l[p], p += v;
                  break;
                }
                if (p += v, t ? p < 0 : h <= p) throw new u("Reduce of empty array with no initial value");
              }
              for (; t ? p >= 0 : h > p; p += v) p in l && (s = r(s, l[p], p, f));
              return s;
            };
          };
        t.exports = {
          left: c(false),
          right: c(true)
        };
      },
      8576: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(5289),
          i = TypeError,
          a = Object.getOwnPropertyDescriptor,
          u = n && !function () {
            if (undefined !== this) return true;
            try {
              Object.defineProperty([], "length", {
                writable: false
              }).length = 1;
            } catch (t) {
              return t instanceof TypeError;
            }
          }();
        t.exports = u ? function (t, e) {
          if (o(t) && !a(t, "length").writable) throw new i("Cannot set read only .length");
          return t.length = e;
        } : function (t, e) {
          return t.length = e;
        };
      },
      7665: function (t, e, r) {
        "use strict";

        var n = r(9961),
          o = r(9969),
          i = r(6968),
          a = Array,
          u = Math.max;
        t.exports = function (t, e, r) {
          for (var c = o(t), s = n(e, c), f = n(undefined === r ? c : r, c), l = a(u(f - s, 0)), h = 0; s < f; s++, h++) i(l, h, t[s]);
          return l.length = h, l;
        };
      },
      39: function (t, e, r) {
        "use strict";

        var n = r(6406);
        t.exports = n([].slice);
      },
      8377: function (t, e, r) {
        "use strict";

        var n = r(7665),
          o = Math.floor,
          i = function (t, e) {
            var r = t.length,
              c = o(r / 2);
            return r < 8 ? a(t, e) : u(t, i(n(t, 0, c), e), i(n(t, c), e), e);
          },
          a = function (t, e) {
            for (var r, n, o = t.length, i = 1; i < o;) {
              for (n = i, r = t[i]; n && e(t[n - 1], r) > 0;) t[n] = t[--n];
              n !== i++ && (t[n] = r);
            }
            return t;
          },
          u = function (t, e, r, n) {
            for (var o = e.length, i = r.length, a = 0, u = 0; a < o || u < i;) t[a + u] = a < o && u < i ? n(e[a], r[u]) <= 0 ? e[a++] : r[u++] : a < o ? e[a++] : r[u++];
            return t;
          };
        t.exports = i;
      },
      7866: function (t, e, r) {
        "use strict";

        var n = r(5289),
          o = r(5434),
          i = r(5287),
          a = r(7936)("species"),
          u = Array;
        t.exports = function (t) {
          var e;
          return n(t) && (e = t.constructor, (o(e) && (e === u || n(e.prototype)) || i(e) && null === (e = e[a])) && (e = undefined)), undefined === e ? u : e;
        };
      },
      5008: function (t, e, r) {
        "use strict";

        var n = r(7866);
        t.exports = function (t, e) {
          return new (n(t))(0 === e ? 0 : e);
        };
      },
      608: function (t, e, r) {
        "use strict";

        var n = r(9972),
          o = r(6335);
        t.exports = function (t, e, r, i) {
          try {
            return i ? e(n(r)[0], r[1]) : e(r);
          } catch (e) {
            o(t, "throw", e);
          }
        };
      },
      7246: function (t, e, r) {
        "use strict";

        var n = r(7936)("iterator"),
          o = false;
        try {
          var i = 0,
            a = {
              next: function () {
                return {
                  done: !!i++
                };
              },
              return: function () {
                o = true;
              }
            };
          a[n] = function () {
            return this;
          }, Array.from(a, function () {
            throw 2;
          });
        } catch (t) {}
        t.exports = function (t, e) {
          try {
            if (!e && !o) return false;
          } catch (t) {
            return false;
          }
          var r = false;
          try {
            var i = {};
            i[n] = function () {
              return {
                next: function () {
                  return {
                    done: r = true
                  };
                }
              };
            }, t(i);
          } catch (t) {}
          return r;
        };
      },
      3048: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = n({}.toString),
          i = n("".slice);
        t.exports = function (t) {
          return i(o(t), 8, -1);
        };
      },
      5683: function (t, e, r) {
        "use strict";

        var n = r(6623),
          o = r(5893),
          i = r(3048),
          a = r(7936)("toStringTag"),
          u = Object,
          c = "Arguments" === i(function () {
            return arguments;
          }());
        t.exports = n ? i : function (t) {
          var e, r, n;
          return undefined === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          }(e = u(t), a)) ? r : c ? i(e) : "Object" === (n = i(e)) && o(e.callee) ? "Arguments" : n;
        };
      },
      779: function (t, e, r) {
        "use strict";

        var n = r(4130),
          o = r(6627),
          i = r(10),
          a = r(7144);
        t.exports = function (t, e, r) {
          for (var u = o(e), c = a.f, s = i.f, f = 0; f < u.length; f++) {
            var l = u[f];
            n(t, l) || r && n(r, l) || c(t, l, s(e, l));
          }
        };
      },
      187: function (t, e, r) {
        "use strict";

        var n = r(7936)("match");
        t.exports = function (t) {
          var e = /./;
          try {
            "/./"[t](e);
          } catch (r) {
            try {
              return e[n] = false, "/./"[t](e);
            } catch (t) {}
          }
          return false;
        };
      },
      9494: function (t, e, r) {
        "use strict";

        var n = r(5306);
        t.exports = !n(function () {
          function t() {}
          return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
        });
      },
      9523: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(6762),
          i = r(2755),
          a = /"/g,
          u = n("".replace);
        t.exports = function (t, e, r, n) {
          var c = i(o(t)),
            s = "<" + e;
          return "" !== r && (s += " " + r + '="' + u(i(n), a, "&quot;") + '"'), s + ">" + c + "</" + e + ">";
        };
      },
      4160: function (t) {
        "use strict";

        t.exports = function (t, e) {
          return {
            value: t,
            done: e
          };
        };
      },
      9251: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(7144),
          i = r(9637);
        t.exports = n ? function (t, e, r) {
          return o.f(t, e, i(1, r));
        } : function (t, e, r) {
          return t[e] = r, t;
        };
      },
      9637: function (t) {
        "use strict";

        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          };
        };
      },
      6968: function (t, e, r) {
        "use strict";

        var n = r(3662),
          o = r(7144),
          i = r(9637);
        t.exports = function (t, e, r) {
          var a = n(e);
          a in t ? o.f(t, a, i(0, r)) : t[a] = r;
        };
      },
      5938: function (t, e, r) {
        "use strict";

        var n = r(9972),
          o = r(1253),
          i = TypeError;
        t.exports = function (t) {
          if (n(this), "string" === t || "default" === t) t = "string";else if ("number" !== t) throw new i("Incorrect hint");
          return o(this, t);
        };
      },
      5023: function (t, e, r) {
        "use strict";

        var n = r(3911),
          o = r(7144);
        t.exports = function (t, e, r) {
          return r.get && n(r.get, e, {
            getter: true
          }), r.set && n(r.set, e, {
            setter: true
          }), o.f(t, e, r);
        };
      },
      7205: function (t, e, r) {
        "use strict";

        var n = r(5893),
          o = r(7144),
          i = r(3911),
          a = r(3630);
        t.exports = function (t, e, r, u) {
          u || (u = {});
          var c = u.enumerable,
            s = undefined !== u.name ? u.name : e;
          if (n(r) && i(r, s, u), u.global) c ? t[e] = r : a(e, r);else {
            try {
              u.unsafe ? t[e] && (c = true) : delete t[e];
            } catch (t) {}
            c ? t[e] = r : o.f(t, e, {
              value: r,
              enumerable: false,
              configurable: !u.nonConfigurable,
              writable: !u.nonWritable
            });
          }
          return t;
        };
      },
      9990: function (t, e, r) {
        "use strict";

        var n = r(7205);
        t.exports = function (t, e, r) {
          for (var o in e) n(t, o, e[o], r);
          return t;
        };
      },
      3630: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = Object.defineProperty;
        t.exports = function (t, e) {
          try {
            o(n, t, {
              value: e,
              configurable: true,
              writable: true
            });
          } catch (r) {
            n[t] = e;
          }
          return e;
        };
      },
      3877: function (t, e, r) {
        "use strict";

        var n = r(5306);
        t.exports = !n(function () {
          return 7 !== Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            }
          })[1];
        });
      },
      811: function (t) {
        "use strict";

        var e = "object" == typeof document && document.all,
          r = undefined === e && undefined !== e;
        t.exports = {
          all: e,
          IS_HTMLDDA: r
        };
      },
      9800: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(5287),
          i = n.document,
          a = o(i) && o(i.createElement);
        t.exports = function (t) {
          return a ? i.createElement(t) : {};
        };
      },
      9060: function (t) {
        "use strict";

        var e = TypeError;
        t.exports = function (t) {
          if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
          return t;
        };
      },
      3136: function (t) {
        "use strict";

        t.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      },
      2823: function (t, e, r) {
        "use strict";

        var n = r(9800)("span").classList,
          o = n && n.constructor && n.constructor.prototype;
        t.exports = o === Object.prototype ? undefined : o;
      },
      1405: function (t, e, r) {
        "use strict";

        var n = r(3279),
          o = r(6576);
        t.exports = !n && !o && "object" == typeof window && "object" == typeof document;
      },
      3279: function (t) {
        "use strict";

        t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version;
      },
      2914: function (t, e, r) {
        "use strict";

        var n = r(2626);
        t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
      },
      7580: function (t, e, r) {
        "use strict";

        var n = r(2626);
        t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
      },
      6576: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(3048);
        t.exports = "process" === o(n.process);
      },
      6862: function (t, e, r) {
        "use strict";

        var n = r(2626);
        t.exports = /web0s(?!.*chrome)/i.test(n);
      },
      2626: function (t) {
        "use strict";

        t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
      },
      7245: function (t, e, r) {
        "use strict";

        var n,
          o,
          i = r(7802),
          a = r(2626),
          u = i.process,
          c = i.Deno,
          s = u && u.versions || c && c.version,
          f = s && s.v8;
        f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]), t.exports = o;
      },
      4286: function (t) {
        "use strict";

        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      },
      3939: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = Error,
          i = n("".replace),
          a = String(new o("zxcasd").stack),
          u = /\n\s*at [^:]*:[^\n]*/,
          c = u.test(a);
        t.exports = function (t, e) {
          if (c && "string" == typeof t && !o.prepareStackTrace) for (; e--;) t = i(t, u, "");
          return t;
        };
      },
      3452: function (t, e, r) {
        "use strict";

        var n = r(9251),
          o = r(3939),
          i = r(4815),
          a = Error.captureStackTrace;
        t.exports = function (t, e, r, u) {
          i && (a ? a(t, e) : n(t, "stack", o(r, u)));
        };
      },
      4815: function (t, e, r) {
        "use strict";

        var n = r(5306),
          o = r(9637);
        t.exports = !n(function () {
          var t = new Error("a");
          return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack);
        });
      },
      1303: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(5306),
          i = r(9972),
          a = r(3819),
          u = Error.prototype.toString,
          c = o(function () {
            if (n) {
              var t = Object.create(Object.defineProperty({}, "name", {
                get: function () {
                  return this === t;
                }
              }));
              if ("true" !== u.call(t)) return true;
            }
            return "2: 1" !== u.call({
              message: 1,
              name: 2
            }) || "Error" !== u.call({});
          });
        t.exports = c ? function () {
          var t = i(this),
            e = a(t.name, "Error"),
            r = a(t.message);
          return e ? r ? e + ": " + r : e : r;
        } : u;
      },
      2390: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(10).f,
          i = r(9251),
          a = r(7205),
          u = r(3630),
          c = r(779),
          s = r(5031);
        t.exports = function (t, e) {
          var r,
            f,
            l,
            h,
            p,
            v = t.target,
            y = t.global,
            d = t.stat;
          if (r = y ? n : d ? n[v] || u(v, {}) : (n[v] || {}).prototype) for (f in e) {
            if (h = e[f], l = t.dontCallGetSet ? (p = o(r, f)) && p.value : r[f], !s(y ? f : v + (d ? "." : "#") + f, t.forced) && undefined !== l) {
              if (typeof h == typeof l) continue;
              c(h, l);
            }
            (t.sham || l && l.sham) && i(h, "sham", true), a(r, f, h, t);
          }
        };
      },
      5306: function (t) {
        "use strict";

        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return true;
          }
        };
      },
      3282: function (t, e, r) {
        "use strict";

        r(9139);
        var n = r(8717),
          o = r(7205),
          i = r(3351),
          a = r(5306),
          u = r(7936),
          c = r(9251),
          s = u("species"),
          f = RegExp.prototype;
        t.exports = function (t, e, r, l) {
          var h = u(t),
            p = !a(function () {
              var e = {};
              return e[h] = function () {
                return 7;
              }, 7 !== ""[t](e);
            }),
            v = p && !a(function () {
              var e = false,
                r = /a/;
              return "split" === t && ((r = {}).constructor = {}, r.constructor[s] = function () {
                return r;
              }, r.flags = "", r[h] = /./[h]), r.exec = function () {
                return e = true, null;
              }, r[h](""), !e;
            });
          if (!p || !v || r) {
            var y = n(/./[h]),
              d = e(h, ""[t], function (t, e, r, o, a) {
                var u = n(t),
                  c = e.exec;
                return c === i || c === f.exec ? p && !a ? {
                  done: true,
                  value: y(e, r, o)
                } : {
                  done: true,
                  value: u(r, e, o)
                } : {
                  done: false
                };
              });
            o(String.prototype, t, d[0]), o(f, h, d[1]);
          }
          l && c(f[h], "sham", true);
        };
      },
      6415: function (t, e, r) {
        "use strict";

        var n = r(7219),
          o = Function.prototype,
          i = o.apply,
          a = o.call;
        t.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function () {
          return a.apply(i, arguments);
        });
      },
      5898: function (t, e, r) {
        "use strict";

        var n = r(8717),
          o = r(1575),
          i = r(7219),
          a = n(n.bind);
        t.exports = function (t, e) {
          return o(t), undefined === e ? t : i ? a(t, e) : function () {
            return t.apply(e, arguments);
          };
        };
      },
      7219: function (t, e, r) {
        "use strict";

        var n = r(5306);
        t.exports = !n(function () {
          var t = function () {}.bind();
          return "function" != typeof t || t.hasOwnProperty("prototype");
        });
      },
      1550: function (t, e, r) {
        "use strict";

        var n = r(7219),
          o = Function.prototype.call;
        t.exports = n ? o.bind(o) : function () {
          return o.apply(o, arguments);
        };
      },
      9656: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(4130),
          i = Function.prototype,
          a = n && Object.getOwnPropertyDescriptor,
          u = o(i, "name"),
          c = u && "something" === function () {}.name,
          s = u && (!n || n && a(i, "name").configurable);
        t.exports = {
          EXISTS: u,
          PROPER: c,
          CONFIGURABLE: s
        };
      },
      8692: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(1575);
        t.exports = function (t, e, r) {
          try {
            return n(o(Object.getOwnPropertyDescriptor(t, e)[r]));
          } catch (t) {}
        };
      },
      8717: function (t, e, r) {
        "use strict";

        var n = r(3048),
          o = r(6406);
        t.exports = function (t) {
          if ("Function" === n(t)) return o(t);
        };
      },
      6406: function (t, e, r) {
        "use strict";

        var n = r(7219),
          o = Function.prototype,
          i = o.call,
          a = n && o.bind.bind(i, i);
        t.exports = n ? a : function (t) {
          return function () {
            return i.apply(t, arguments);
          };
        };
      },
      1570: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(5893);
        t.exports = function (t, e) {
          return arguments.length < 2 ? (r = n[t], o(r) ? r : undefined) : n[t] && n[t][e];
          var r;
        };
      },
      5536: function (t, e, r) {
        "use strict";

        var n = r(5683),
          o = r(6628),
          i = r(7707),
          a = r(9921),
          u = r(7936)("iterator");
        t.exports = function (t) {
          if (!i(t)) return o(t, u) || o(t, "@@iterator") || a[n(t)];
        };
      },
      3159: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(1575),
          i = r(9972),
          a = r(5545),
          u = r(5536),
          c = TypeError;
        t.exports = function (t, e) {
          var r = arguments.length < 2 ? u(t) : e;
          if (o(r)) return i(n(r, t));
          throw new c(a(t) + " is not iterable");
        };
      },
      6695: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5289),
          i = r(5893),
          a = r(3048),
          u = r(2755),
          c = n([].push);
        t.exports = function (t) {
          if (i(t)) return t;
          if (o(t)) {
            for (var e = t.length, r = [], n = 0; n < e; n++) {
              var s = t[n];
              "string" == typeof s ? c(r, s) : "number" != typeof s && "Number" !== a(s) && "String" !== a(s) || c(r, u(s));
            }
            var f = r.length,
              l = true;
            return function (t, e) {
              if (l) return l = false, e;
              if (o(this)) return e;
              for (var n = 0; n < f; n++) if (r[n] === t) return e;
            };
          }
        };
      },
      6628: function (t, e, r) {
        "use strict";

        var n = r(1575),
          o = r(7707);
        t.exports = function (t, e) {
          var r = t[e];
          return o(r) ? undefined : n(r);
        };
      },
      5338: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5864),
          i = Math.floor,
          a = n("".charAt),
          u = n("".replace),
          c = n("".slice),
          s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          f = /\$([$&'`]|\d{1,2})/g;
        t.exports = function (t, e, r, n, l, h) {
          var p = r + t.length,
            v = n.length,
            y = f;
          return undefined !== l && (l = o(l), y = s), u(h, y, function (o, u) {
            var s;
            switch (a(u, 0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return c(e, 0, r);
              case "'":
                return c(e, p);
              case "<":
                s = l[c(u, 1, -1)];
                break;
              default:
                var f = +u;
                if (0 === f) return o;
                if (f > v) {
                  var h = i(f / 10);
                  return 0 === h ? o : h <= v ? undefined === n[h - 1] ? a(u, 1) : n[h - 1] + a(u, 1) : o;
                }
                s = n[f - 1];
            }
            return undefined === s ? "" : s;
          });
        };
      },
      7802: function (t, e, r) {
        "use strict";

        var n = function (t) {
          return t && t.Math === Math && t;
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || n("object" == typeof this && this) || function () {
          return this;
        }() || Function("return this")();
      },
      4130: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5864),
          i = n({}.hasOwnProperty);
        t.exports = Object.hasOwn || function (t, e) {
          return i(o(t), e);
        };
      },
      3421: function (t) {
        "use strict";

        t.exports = {};
      },
      4419: function (t) {
        "use strict";

        t.exports = function (t, e) {
          try {
            1 === arguments.length ? console.error(t) : console.error(t, e);
          } catch (t) {}
        };
      },
      2343: function (t, e, r) {
        "use strict";

        var n = r(1570);
        t.exports = n("document", "documentElement");
      },
      3075: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(5306),
          i = r(9800);
        t.exports = !n && !o(function () {
          return 7 !== Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            }
          }).a;
        });
      },
      5366: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5306),
          i = r(3048),
          a = Object,
          u = n("".split);
        t.exports = o(function () {
          return !a("z").propertyIsEnumerable(0);
        }) ? function (t) {
          return "String" === i(t) ? u(t, "") : a(t);
        } : a;
      },
      1074: function (t, e, r) {
        "use strict";

        var n = r(5893),
          o = r(5287),
          i = r(1126);
        t.exports = function (t, e, r) {
          var a, u;
          return i && n(a = e.constructor) && a !== r && o(u = a.prototype) && u !== r.prototype && i(t, u), t;
        };
      },
      5088: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5893),
          i = r(4830),
          a = n(Function.toString);
        o(i.inspectSource) || (i.inspectSource = function (t) {
          return a(t);
        }), t.exports = i.inspectSource;
      },
      1281: function (t, e, r) {
        "use strict";

        var n = r(5287),
          o = r(9251);
        t.exports = function (t, e) {
          n(e) && "cause" in e && o(t, "cause", e.cause);
        };
      },
      9930: function (t, e, r) {
        "use strict";

        var n,
          o,
          i,
          a = r(5585),
          u = r(7802),
          c = r(5287),
          s = r(9251),
          f = r(4130),
          l = r(4830),
          h = r(139),
          p = r(3421),
          v = "Object already initialized",
          y = u.TypeError,
          d = u.WeakMap;
        if (a || l.state) {
          var g = l.state || (l.state = new d());
          g.get = g.get, g.has = g.has, g.set = g.set, n = function (t, e) {
            if (g.has(t)) throw new y(v);
            return e.facade = t, g.set(t, e), e;
          }, o = function (t) {
            return g.get(t) || {};
          }, i = function (t) {
            return g.has(t);
          };
        } else {
          var m = h("state");
          p[m] = true, n = function (t, e) {
            if (f(t, m)) throw new y(v);
            return e.facade = t, s(t, m, e), e;
          }, o = function (t) {
            return f(t, m) ? t[m] : {};
          }, i = function (t) {
            return f(t, m);
          };
        }
        t.exports = {
          set: n,
          get: o,
          has: i,
          enforce: function (t) {
            return i(t) ? o(t) : n(t, {});
          },
          getterFor: function (t) {
            return function (e) {
              var r;
              if (!c(e) || (r = o(e)).type !== t) throw new y("Incompatible receiver, " + t + " required");
              return r;
            };
          }
        };
      },
      2943: function (t, e, r) {
        "use strict";

        var n = r(7936),
          o = r(9921),
          i = n("iterator"),
          a = Array.prototype;
        t.exports = function (t) {
          return undefined !== t && (o.Array === t || a[i] === t);
        };
      },
      5289: function (t, e, r) {
        "use strict";

        var n = r(3048);
        t.exports = Array.isArray || function (t) {
          return "Array" === n(t);
        };
      },
      5893: function (t, e, r) {
        "use strict";

        var n = r(811),
          o = n.all;
        t.exports = n.IS_HTMLDDA ? function (t) {
          return "function" == typeof t || t === o;
        } : function (t) {
          return "function" == typeof t;
        };
      },
      5434: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5306),
          i = r(5893),
          a = r(5683),
          u = r(1570),
          c = r(5088),
          s = function () {},
          f = [],
          l = u("Reflect", "construct"),
          h = /^\s*(?:class|function)\b/,
          p = n(h.exec),
          v = !h.test(s),
          y = function (t) {
            if (!i(t)) return false;
            try {
              return l(s, f, t), true;
            } catch (t) {
              return false;
            }
          },
          d = function (t) {
            if (!i(t)) return false;
            switch (a(t)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return false;
            }
            try {
              return v || !!p(h, c(t));
            } catch (t) {
              return true;
            }
          };
        d.sham = true, t.exports = !l || o(function () {
          var t;
          return y(y.call) || !y(Object) || !y(function () {
            t = true;
          }) || t;
        }) ? d : y;
      },
      5031: function (t, e, r) {
        "use strict";

        var n = r(5306),
          o = r(5893),
          i = /#|\.prototype\./,
          a = function (t, e) {
            var r = c[u(t)];
            return r === f || r !== s && (o(e) ? n(e) : !!e);
          },
          u = a.normalize = function (t) {
            return String(t).replace(i, ".").toLowerCase();
          },
          c = a.data = {},
          s = a.NATIVE = "N",
          f = a.POLYFILL = "P";
        t.exports = a;
      },
      7707: function (t) {
        "use strict";

        t.exports = function (t) {
          return null == t;
        };
      },
      5287: function (t, e, r) {
        "use strict";

        var n = r(5893),
          o = r(811),
          i = o.all;
        t.exports = o.IS_HTMLDDA ? function (t) {
          return "object" == typeof t ? null !== t : n(t) || t === i;
        } : function (t) {
          return "object" == typeof t ? null !== t : n(t);
        };
      },
      99: function (t) {
        "use strict";

        t.exports = false;
      },
      8210: function (t, e, r) {
        "use strict";

        var n = r(5287),
          o = r(3048),
          i = r(7936)("match");
        t.exports = function (t) {
          var e;
          return n(t) && (undefined !== (e = t[i]) ? !!e : "RegExp" === o(t));
        };
      },
      103: function (t, e, r) {
        "use strict";

        var n = r(1570),
          o = r(5893),
          i = r(2075),
          a = r(345),
          u = Object;
        t.exports = a ? function (t) {
          return "symbol" == typeof t;
        } : function (t) {
          var e = n("Symbol");
          return o(e) && i(e.prototype, u(t));
        };
      },
      2003: function (t, e, r) {
        "use strict";

        var n = r(5898),
          o = r(1550),
          i = r(9972),
          a = r(5545),
          u = r(2943),
          c = r(9969),
          s = r(2075),
          f = r(3159),
          l = r(5536),
          h = r(6335),
          p = TypeError,
          v = function (t, e) {
            this.stopped = t, this.result = e;
          },
          y = v.prototype;
        t.exports = function (t, e, r) {
          var d,
            g,
            m,
            b,
            w,
            x,
            E,
            S = r && r.that,
            O = !(!r || !r.AS_ENTRIES),
            L = !(!r || !r.IS_RECORD),
            j = !(!r || !r.IS_ITERATOR),
            _ = !(!r || !r.INTERRUPTED),
            k = n(e, S),
            P = function (t) {
              return d && h(d, "normal", t), new v(true, t);
            },
            A = function (t) {
              return O ? (i(t), _ ? k(t[0], t[1], P) : k(t[0], t[1])) : _ ? k(t, P) : k(t);
            };
          if (L) d = t.iterator;else if (j) d = t;else {
            if (!(g = l(t))) throw new p(a(t) + " is not iterable");
            if (u(g)) {
              for (m = 0, b = c(t); b > m; m++) if ((w = A(t[m])) && s(y, w)) return w;
              return new v(false);
            }
            d = f(t, g);
          }
          for (x = L ? t.next : d.next; !(E = o(x, d)).done;) {
            try {
              w = A(E.value);
            } catch (t) {
              h(d, "throw", t);
            }
            if ("object" == typeof w && w && s(y, w)) return w;
          }
          return new v(false);
        };
      },
      6335: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(9972),
          i = r(6628);
        t.exports = function (t, e, r) {
          var a, u;
          o(t);
          try {
            if (!(a = i(t, "return"))) {
              if ("throw" === e) throw r;
              return r;
            }
            a = n(a, t);
          } catch (t) {
            u = true, a = t;
          }
          if ("throw" === e) throw r;
          if (u) throw a;
          return o(a), r;
        };
      },
      3691: function (t, e, r) {
        "use strict";

        var n = r(4760).IteratorPrototype,
          o = r(9464),
          i = r(9637),
          a = r(3581),
          u = r(9921),
          c = function () {
            return this;
          };
        t.exports = function (t, e, r, s) {
          var f = e + " Iterator";
          return t.prototype = o(n, {
            next: i(+!s, r)
          }), a(t, f, false, true), u[f] = c, t;
        };
      },
      7227: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1550),
          i = r(99),
          a = r(9656),
          u = r(5893),
          c = r(3691),
          s = r(6900),
          f = r(1126),
          l = r(3581),
          h = r(9251),
          p = r(7205),
          v = r(7936),
          y = r(9921),
          d = r(4760),
          g = a.PROPER,
          m = a.CONFIGURABLE,
          b = d.IteratorPrototype,
          w = d.BUGGY_SAFARI_ITERATORS,
          x = v("iterator"),
          E = "keys",
          S = "values",
          O = "entries",
          L = function () {
            return this;
          };
        t.exports = function (t, e, r, a, v, d, j) {
          c(r, e, a);
          var _,
            k,
            P,
            A = function (t) {
              if (t === v && F) return F;
              if (!w && t && t in R) return R[t];
              switch (t) {
                case E:
                case S:
                case O:
                  return function () {
                    return new r(this, t);
                  };
              }
              return function () {
                return new r(this);
              };
            },
            T = e + " Iterator",
            I = false,
            R = t.prototype,
            N = R[x] || R["@@iterator"] || v && R[v],
            F = !w && N || A(v),
            C = "Array" === e && R.entries || N;
          if (C && (_ = s(C.call(new t()))) !== Object.prototype && _.next && (i || s(_) === b || (f ? f(_, b) : u(_[x]) || p(_, x, L)), l(_, T, true, true), i && (y[T] = L)), g && v === S && N && N.name !== S && (!i && m ? h(R, "name", S) : (I = true, F = function () {
            return o(N, this);
          })), v) if (k = {
            values: A(S),
            keys: d ? F : A(E),
            entries: A(O)
          }, j) for (P in k) (w || I || !(P in R)) && p(R, P, k[P]);else n({
            target: e,
            proto: true,
            forced: w || I
          }, k);
          return i && !j || R[x] === F || p(R, x, F, {
            name: v
          }), y[e] = F, k;
        };
      },
      4760: function (t, e, r) {
        "use strict";

        var n,
          o,
          i,
          a = r(5306),
          u = r(5893),
          c = r(5287),
          s = r(9464),
          f = r(6900),
          l = r(7205),
          h = r(7936),
          p = r(99),
          v = h("iterator"),
          y = false;
        [].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : y = true), !c(n) || a(function () {
          var t = {};
          return n[v].call(t) !== t;
        }) ? n = {} : p && (n = s(n)), u(n[v]) || l(n, v, function () {
          return this;
        }), t.exports = {
          IteratorPrototype: n,
          BUGGY_SAFARI_ITERATORS: y
        };
      },
      9921: function (t) {
        "use strict";

        t.exports = {};
      },
      9969: function (t, e, r) {
        "use strict";

        var n = r(9099);
        t.exports = function (t) {
          return n(t.length);
        };
      },
      3911: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5306),
          i = r(5893),
          a = r(4130),
          u = r(3877),
          c = r(9656).CONFIGURABLE,
          s = r(5088),
          f = r(9930),
          l = f.enforce,
          h = f.get,
          p = String,
          v = Object.defineProperty,
          y = n("".slice),
          d = n("".replace),
          g = n([].join),
          m = u && !o(function () {
            return 8 !== v(function () {}, "length", {
              value: 8
            }).length;
          }),
          b = String(String).split("String"),
          w = t.exports = function (t, e, r) {
            "Symbol(" === y(p(e), 0, 7) && (e = "[" + d(p(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!a(t, "name") || c && t.name !== e) && (u ? v(t, "name", {
              value: e,
              configurable: true
            }) : t.name = e), m && r && a(r, "arity") && t.length !== r.arity && v(t, "length", {
              value: r.arity
            });
            try {
              r && a(r, "constructor") && r.constructor ? u && v(t, "prototype", {
                writable: false
              }) : t.prototype && (t.prototype = undefined);
            } catch (t) {}
            var n = l(t);
            return a(n, "source") || (n.source = g(b, "string" == typeof e ? e : "")), t;
          };
        Function.prototype.toString = w(function () {
          return i(this) && h(this).source || s(this);
        }, "toString");
      },
      1402: function (t) {
        "use strict";

        var e = Math.ceil,
          r = Math.floor;
        t.exports = Math.trunc || function (t) {
          var n = +t;
          return (n > 0 ? r : e)(n);
        };
      },
      3700: function (t, e, r) {
        "use strict";

        var n,
          o,
          i,
          a,
          u,
          c = r(7802),
          s = r(5898),
          f = r(10).f,
          l = r(1998).set,
          h = r(7687),
          p = r(7580),
          v = r(2914),
          y = r(6862),
          d = r(6576),
          g = c.MutationObserver || c.WebKitMutationObserver,
          m = c.document,
          b = c.process,
          w = c.Promise,
          x = f(c, "queueMicrotask"),
          E = x && x.value;
        if (!E) {
          var S = new h(),
            O = function () {
              var t, e;
              for (d && (t = b.domain) && t.exit(); e = S.get();) try {
                e();
              } catch (t) {
                throw S.head && n(), t;
              }
              t && t.enter();
            };
          p || d || y || !g || !m ? !v && w && w.resolve ? ((a = w.resolve(undefined)).constructor = w, u = s(a.then, a), n = function () {
            u(O);
          }) : d ? n = function () {
            b.nextTick(O);
          } : (l = s(l, c), n = function () {
            l(O);
          }) : (o = true, i = m.createTextNode(""), new g(O).observe(i, {
            characterData: true
          }), n = function () {
            i.data = o = !o;
          }), E = function (t) {
            S.head || n(), S.add(t);
          };
        }
        t.exports = E;
      },
      7117: function (t, e, r) {
        "use strict";

        var n = r(1575),
          o = TypeError,
          i = function (t) {
            var e, r;
            this.promise = new t(function (t, n) {
              if (undefined !== e || undefined !== r) throw new o("Bad Promise constructor");
              e = t, r = n;
            }), this.resolve = n(e), this.reject = n(r);
          };
        t.exports.f = function (t) {
          return new i(t);
        };
      },
      3819: function (t, e, r) {
        "use strict";

        var n = r(2755);
        t.exports = function (t, e) {
          return undefined === t ? arguments.length < 2 ? "" : e : n(t);
        };
      },
      4107: function (t, e, r) {
        "use strict";

        var n = r(8210),
          o = TypeError;
        t.exports = function (t) {
          if (n(t)) throw new o("The method doesn't accept regular expressions");
          return t;
        };
      },
      9982: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(5306),
          i = r(6406),
          a = r(2755),
          u = r(3959).trim,
          c = r(8662),
          s = n.parseInt,
          f = n.Symbol,
          l = f && f.iterator,
          h = /^[+-]?0x/i,
          p = i(h.exec),
          v = 8 !== s(c + "08") || 22 !== s(c + "0x16") || l && !o(function () {
            s(Object(l));
          });
        t.exports = v ? function (t, e) {
          var r = u(a(t));
          return s(r, e >>> 0 || (p(h, r) ? 16 : 10));
        } : s;
      },
      3087: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(6406),
          i = r(1550),
          a = r(5306),
          u = r(1008),
          c = r(6855),
          s = r(1940),
          f = r(5864),
          l = r(5366),
          h = Object.assign,
          p = Object.defineProperty,
          v = o([].concat);
        t.exports = !h || a(function () {
          if (n && 1 !== h({
            b: 1
          }, h(p({}, "a", {
            enumerable: true,
            get: function () {
              p(this, "b", {
                value: 3,
                enumerable: false
              });
            }
          }), {
            b: 2
          })).b) return true;
          var t = {},
            e = {},
            r = Symbol("assign detection"),
            o = "abcdefghijklmnopqrst";
          return t[r] = 7, o.split("").forEach(function (t) {
            e[t] = t;
          }), 7 !== h({}, t)[r] || u(h({}, e)).join("") !== o;
        }) ? function (t, e) {
          for (var r = f(t), o = arguments.length, a = 1, h = c.f, p = s.f; o > a;) for (var y, d = l(arguments[a++]), g = h ? v(u(d), h(d)) : u(d), m = g.length, b = 0; m > b;) y = g[b++], n && !i(p, d, y) || (r[y] = d[y]);
          return r;
        } : h;
      },
      9464: function (t, e, r) {
        "use strict";

        var n,
          o = r(9972),
          i = r(3872),
          a = r(4286),
          u = r(3421),
          c = r(2343),
          s = r(9800),
          f = r(139),
          l = "prototype",
          h = "script",
          p = f("IE_PROTO"),
          v = function () {},
          y = function (t) {
            return "<" + h + ">" + t + "</" + h + ">";
          },
          d = function (t) {
            t.write(y("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e;
          },
          g = function () {
            try {
              n = new ActiveXObject("htmlfile");
            } catch (t) {}
            var t, e, r;
            g = "undefined" != typeof document ? document.domain && n ? d(n) : (e = s("iframe"), r = "java" + h + ":", e.style.display = "none", c.appendChild(e), e.src = String(r), (t = e.contentWindow.document).open(), t.write(y("document.F=Object")), t.close(), t.F) : d(n);
            for (var o = a.length; o--;) delete g[l][a[o]];
            return g();
          };
        u[p] = true, t.exports = Object.create || function (t, e) {
          var r;
          return null !== t ? (v[l] = o(t), r = new v(), v[l] = null, r[p] = t) : r = g(), undefined === e ? r : i.f(r, e);
        };
      },
      3872: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(7475),
          i = r(7144),
          a = r(9972),
          u = r(9405),
          c = r(1008);
        e.f = n && !o ? Object.defineProperties : function (t, e) {
          a(t);
          for (var r, n = u(e), o = c(e), s = o.length, f = 0; s > f;) i.f(t, r = o[f++], n[r]);
          return t;
        };
      },
      7144: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(3075),
          i = r(7475),
          a = r(9972),
          u = r(3662),
          c = TypeError,
          s = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          l = "enumerable",
          h = "configurable",
          p = "writable";
        e.f = n ? i ? function (t, e, r) {
          if (a(t), e = u(e), a(r), "function" == typeof t && "prototype" === e && "value" in r && p in r && !r[p]) {
            var n = f(t, e);
            n && n[p] && (t[e] = r.value, r = {
              configurable: h in r ? r[h] : n[h],
              enumerable: l in r ? r[l] : n[l],
              writable: false
            });
          }
          return s(t, e, r);
        } : s : function (t, e, r) {
          if (a(t), e = u(e), a(r), o) try {
            return s(t, e, r);
          } catch (t) {}
          if ("get" in r || "set" in r) throw new c("Accessors not supported");
          return "value" in r && (t[e] = r.value), t;
        };
      },
      10: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(1550),
          i = r(1940),
          a = r(9637),
          u = r(9405),
          c = r(3662),
          s = r(4130),
          f = r(3075),
          l = Object.getOwnPropertyDescriptor;
        e.f = n ? l : function (t, e) {
          if (t = u(t), e = c(e), f) try {
            return l(t, e);
          } catch (t) {}
          if (s(t, e)) return a(!o(i.f, t, e), t[e]);
        };
      },
      2348: function (t, e, r) {
        "use strict";

        var n = r(3048),
          o = r(9405),
          i = r(7397).f,
          a = r(7665),
          u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
          return u && "Window" === n(t) ? function (t) {
            try {
              return i(t);
            } catch (t) {
              return a(u);
            }
          }(t) : i(o(t));
        };
      },
      7397: function (t, e, r) {
        "use strict";

        var n = r(5079),
          o = r(4286).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
          return n(t, o);
        };
      },
      6855: function (t, e) {
        "use strict";

        e.f = Object.getOwnPropertySymbols;
      },
      6900: function (t, e, r) {
        "use strict";

        var n = r(4130),
          o = r(5893),
          i = r(5864),
          a = r(139),
          u = r(9494),
          c = a("IE_PROTO"),
          s = Object,
          f = s.prototype;
        t.exports = u ? s.getPrototypeOf : function (t) {
          var e = i(t);
          if (n(e, c)) return e[c];
          var r = e.constructor;
          return o(r) && e instanceof r ? r.prototype : e instanceof s ? f : null;
        };
      },
      2075: function (t, e, r) {
        "use strict";

        var n = r(6406);
        t.exports = n({}.isPrototypeOf);
      },
      5079: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(4130),
          i = r(9405),
          a = r(2971).indexOf,
          u = r(3421),
          c = n([].push);
        t.exports = function (t, e) {
          var r,
            n = i(t),
            s = 0,
            f = [];
          for (r in n) !o(u, r) && o(n, r) && c(f, r);
          for (; e.length > s;) o(n, r = e[s++]) && (~a(f, r) || c(f, r));
          return f;
        };
      },
      1008: function (t, e, r) {
        "use strict";

        var n = r(5079),
          o = r(4286);
        t.exports = Object.keys || function (t) {
          return n(t, o);
        };
      },
      1940: function (t, e) {
        "use strict";

        var r = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          o = n && !r.call({
            1: 2
          }, 1);
        e.f = o ? function (t) {
          var e = n(this, t);
          return !!e && e.enumerable;
        } : r;
      },
      1126: function (t, e, r) {
        "use strict";

        var n = r(8692),
          o = r(9972),
          i = r(9272);
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
          var t,
            e = false,
            r = {};
          try {
            (t = n(Object.prototype, "__proto__", "set"))(r, []), e = r instanceof Array;
          } catch (t) {}
          return function (r, n) {
            return o(r), i(n), e ? t(r, n) : r.__proto__ = n, r;
          };
        }() : undefined);
      },
      9181: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(5306),
          i = r(6406),
          a = r(6900),
          u = r(1008),
          c = r(9405),
          s = i(r(1940).f),
          f = i([].push),
          l = n && o(function () {
            var t = Object.create(null);
            return t[2] = 2, !s(t, 2);
          }),
          h = function (t) {
            return function (e) {
              for (var r, o = c(e), i = u(o), h = l && null === a(o), p = i.length, v = 0, y = []; p > v;) r = i[v++], n && !(h ? r in o : s(o, r)) || f(y, t ? [r, o[r]] : o[r]);
              return y;
            };
          };
        t.exports = {
          entries: h(true),
          values: h(false)
        };
      },
      2789: function (t, e, r) {
        "use strict";

        var n = r(6623),
          o = r(5683);
        t.exports = n ? {}.toString : function () {
          return "[object " + o(this) + "]";
        };
      },
      1253: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(5893),
          i = r(5287),
          a = TypeError;
        t.exports = function (t, e) {
          var r, u;
          if ("string" === e && o(r = t.toString) && !i(u = n(r, t))) return u;
          if (o(r = t.valueOf) && !i(u = n(r, t))) return u;
          if ("string" !== e && o(r = t.toString) && !i(u = n(r, t))) return u;
          throw new a("Can't convert object to primitive value");
        };
      },
      6627: function (t, e, r) {
        "use strict";

        var n = r(1570),
          o = r(6406),
          i = r(7397),
          a = r(6855),
          u = r(9972),
          c = o([].concat);
        t.exports = n("Reflect", "ownKeys") || function (t) {
          var e = i.f(u(t)),
            r = a.f;
          return r ? c(e, r(t)) : e;
        };
      },
      9533: function (t, e, r) {
        "use strict";

        var n = r(7802);
        t.exports = n;
      },
      1945: function (t) {
        "use strict";

        t.exports = function (t) {
          try {
            return {
              error: false,
              value: t()
            };
          } catch (t) {
            return {
              error: true,
              value: t
            };
          }
        };
      },
      8545: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(3825),
          i = r(5893),
          a = r(5031),
          u = r(5088),
          c = r(7936),
          s = r(1405),
          f = r(3279),
          l = r(99),
          h = r(7245),
          p = o && o.prototype,
          v = c("species"),
          y = false,
          d = i(n.PromiseRejectionEvent),
          g = a("Promise", function () {
            var t = u(o),
              e = t !== String(o);
            if (!e && 66 === h) return true;
            if (l && (!p.catch || !p.finally)) return true;
            if (!h || h < 51 || !/native code/.test(t)) {
              var r = new o(function (t) {
                  t(1);
                }),
                n = function (t) {
                  t(function () {}, function () {});
                };
              if ((r.constructor = {})[v] = n, !(y = r.then(function () {}) instanceof n)) return true;
            }
            return !e && (s || f) && !d;
          });
        t.exports = {
          CONSTRUCTOR: g,
          REJECTION_EVENT: d,
          SUBCLASSING: y
        };
      },
      3825: function (t, e, r) {
        "use strict";

        var n = r(7802);
        t.exports = n.Promise;
      },
      7093: function (t, e, r) {
        "use strict";

        var n = r(9972),
          o = r(5287),
          i = r(7117);
        t.exports = function (t, e) {
          if (n(t), o(e) && e.constructor === t) return e;
          var r = i.f(t);
          return (0, r.resolve)(e), r.promise;
        };
      },
      1292: function (t, e, r) {
        "use strict";

        var n = r(3825),
          o = r(7246),
          i = r(8545).CONSTRUCTOR;
        t.exports = i || !o(function (t) {
          n.all(t).then(undefined, function () {});
        });
      },
      6296: function (t, e, r) {
        "use strict";

        var n = r(7144).f;
        t.exports = function (t, e, r) {
          r in t || n(t, r, {
            configurable: true,
            get: function () {
              return e[r];
            },
            set: function (t) {
              e[r] = t;
            }
          });
        };
      },
      7687: function (t) {
        "use strict";

        var e = function () {
          this.head = null, this.tail = null;
        };
        e.prototype = {
          add: function (t) {
            var e = {
                item: t,
                next: null
              },
              r = this.tail;
            r ? r.next = e : this.head = e, this.tail = e;
          },
          get: function () {
            var t = this.head;
            if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
          }
        }, t.exports = e;
      },
      7771: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(9972),
          i = r(5893),
          a = r(3048),
          u = r(3351),
          c = TypeError;
        t.exports = function (t, e) {
          var r = t.exec;
          if (i(r)) {
            var s = n(r, t, e);
            return null !== s && o(s), s;
          }
          if ("RegExp" === a(t)) return n(u, t, e);
          throw new c("RegExp#exec called on incompatible receiver");
        };
      },
      3351: function (t, e, r) {
        "use strict";

        var n,
          o,
          i = r(1550),
          a = r(6406),
          u = r(2755),
          c = r(3137),
          s = r(9688),
          f = r(9231),
          l = r(9464),
          h = r(9930).get,
          p = r(8880),
          v = r(2901),
          y = f("native-string-replace", String.prototype.replace),
          d = RegExp.prototype.exec,
          g = d,
          m = a("".charAt),
          b = a("".indexOf),
          w = a("".replace),
          x = a("".slice),
          E = (o = /b*/g, i(d, n = /a/, "a"), i(d, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
          S = s.BROKEN_CARET,
          O = undefined !== /()??/.exec("")[1];
        (E || O || S || p || v) && (g = function (t) {
          var e,
            r,
            n,
            o,
            a,
            s,
            f,
            p = this,
            v = h(p),
            L = u(t),
            j = v.raw;
          if (j) return j.lastIndex = p.lastIndex, e = i(g, j, L), p.lastIndex = j.lastIndex, e;
          var _ = v.groups,
            k = S && p.sticky,
            P = i(c, p),
            A = p.source,
            T = 0,
            I = L;
          if (k && (P = w(P, "y", ""), -1 === b(P, "g") && (P += "g"), I = x(L, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== m(L, p.lastIndex - 1)) && (A = "(?: " + A + ")", I = " " + I, T++), r = new RegExp("^(?:" + A + ")", P)), O && (r = new RegExp("^" + A + "$(?!\\s)", P)), E && (n = p.lastIndex), o = i(d, k ? r : p, I), k ? o ? (o.input = x(o.input, T), o[0] = x(o[0], T), o.index = p.lastIndex, p.lastIndex += o[0].length) : p.lastIndex = 0 : E && o && (p.lastIndex = p.global ? o.index + o[0].length : n), O && o && o.length > 1 && i(y, o[0], r, function () {
            for (a = 1; a < arguments.length - 2; a++) undefined === arguments[a] && (o[a] = undefined);
          }), o && _) for (o.groups = s = l(null), a = 0; a < _.length; a++) s[(f = _[a])[0]] = o[f[1]];
          return o;
        }), t.exports = g;
      },
      3137: function (t, e, r) {
        "use strict";

        var n = r(9972);
        t.exports = function () {
          var t = n(this),
            e = "";
          return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
        };
      },
      8163: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(4130),
          i = r(2075),
          a = r(3137),
          u = RegExp.prototype;
        t.exports = function (t) {
          var e = t.flags;
          return undefined !== e || "flags" in u || o(t, "flags") || !i(u, t) ? e : n(a, t);
        };
      },
      9688: function (t, e, r) {
        "use strict";

        var n = r(5306),
          o = r(7802).RegExp,
          i = n(function () {
            var t = o("a", "y");
            return t.lastIndex = 2, null !== t.exec("abcd");
          }),
          a = i || n(function () {
            return !o("a", "y").sticky;
          }),
          u = i || n(function () {
            var t = o("^r", "gy");
            return t.lastIndex = 2, null !== t.exec("str");
          });
        t.exports = {
          BROKEN_CARET: u,
          MISSED_STICKY: a,
          UNSUPPORTED_Y: i
        };
      },
      8880: function (t, e, r) {
        "use strict";

        var n = r(5306),
          o = r(7802).RegExp;
        t.exports = n(function () {
          var t = o(".", "s");
          return !(t.dotAll && t.test("\n") && "s" === t.flags);
        });
      },
      2901: function (t, e, r) {
        "use strict";

        var n = r(5306),
          o = r(7802).RegExp;
        t.exports = n(function () {
          var t = o("(?<a>b)", "g");
          return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
        });
      },
      6762: function (t, e, r) {
        "use strict";

        var n = r(7707),
          o = TypeError;
        t.exports = function (t) {
          if (n(t)) throw new o("Can't call method on " + t);
          return t;
        };
      },
      820: function (t) {
        "use strict";

        t.exports = Object.is || function (t, e) {
          return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        };
      },
      7001: function (t, e, r) {
        "use strict";

        var n = r(1570),
          o = r(5023),
          i = r(7936),
          a = r(3877),
          u = i("species");
        t.exports = function (t) {
          var e = n(t);
          a && e && !e[u] && o(e, u, {
            configurable: true,
            get: function () {
              return this;
            }
          });
        };
      },
      3581: function (t, e, r) {
        "use strict";

        var n = r(7144).f,
          o = r(4130),
          i = r(7936)("toStringTag");
        t.exports = function (t, e, r) {
          t && !r && (t = t.prototype), t && !o(t, i) && n(t, i, {
            configurable: true,
            value: e
          });
        };
      },
      139: function (t, e, r) {
        "use strict";

        var n = r(9231),
          o = r(6350),
          i = n("keys");
        t.exports = function (t) {
          return i[t] || (i[t] = o(t));
        };
      },
      4830: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(3630),
          i = "__core-js_shared__",
          a = n[i] || o(i, {});
        t.exports = a;
      },
      9231: function (t, e, r) {
        "use strict";

        var n = r(99),
          o = r(4830);
        (t.exports = function (t, e) {
          return o[t] || (o[t] = undefined !== e ? e : {});
        })("versions", []).push({
          version: "3.33.3",
          mode: n ? "pure" : "global",
          copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      },
      6759: function (t, e, r) {
        "use strict";

        var n = r(9972),
          o = r(7329),
          i = r(7707),
          a = r(7936)("species");
        t.exports = function (t, e) {
          var r,
            u = n(t).constructor;
          return undefined === u || i(r = n(u)[a]) ? e : o(r);
        };
      },
      5980: function (t, e, r) {
        "use strict";

        var n = r(5306);
        t.exports = function (t) {
          return n(function () {
            var e = ""[t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3;
          });
        };
      },
      8373: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(5930),
          i = r(2755),
          a = r(6762),
          u = n("".charAt),
          c = n("".charCodeAt),
          s = n("".slice),
          f = function (t) {
            return function (e, r) {
              var n,
                f,
                l = i(a(e)),
                h = o(r),
                p = l.length;
              return h < 0 || h >= p ? t ? "" : undefined : (n = c(l, h)) < 55296 || n > 56319 || h + 1 === p || (f = c(l, h + 1)) < 56320 || f > 57343 ? t ? u(l, h) : n : t ? s(l, h, h + 2) : f - 56320 + (n - 55296 << 10) + 65536;
            };
          };
        t.exports = {
          codeAt: f(false),
          charAt: f(true)
        };
      },
      716: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = 2147483647,
          i = /[^\0-\u007E]/,
          a = /[.\u3002\uFF0E\uFF61]/g,
          u = "Overflow: input needs wider integers to process",
          c = RangeError,
          s = n(a.exec),
          f = Math.floor,
          l = String.fromCharCode,
          h = n("".charCodeAt),
          p = n([].join),
          v = n([].push),
          y = n("".replace),
          d = n("".split),
          g = n("".toLowerCase),
          m = function (t) {
            return t + 22 + 75 * (t < 26);
          },
          b = function (t, e, r) {
            var n = 0;
            for (t = r ? f(t / 700) : t >> 1, t += f(t / e); t > 455;) t = f(t / 35), n += 36;
            return f(n + 36 * t / (t + 38));
          },
          w = function (t) {
            var e = [];
            t = function (t) {
              for (var e = [], r = 0, n = t.length; r < n;) {
                var o = h(t, r++);
                if (o >= 55296 && o <= 56319 && r < n) {
                  var i = h(t, r++);
                  56320 == (64512 & i) ? v(e, ((1023 & o) << 10) + (1023 & i) + 65536) : (v(e, o), r--);
                } else v(e, o);
              }
              return e;
            }(t);
            var r,
              n,
              i = t.length,
              a = 128,
              s = 0,
              y = 72;
            for (r = 0; r < t.length; r++) (n = t[r]) < 128 && v(e, l(n));
            var d = e.length,
              g = d;
            for (d && v(e, "-"); g < i;) {
              var w = o;
              for (r = 0; r < t.length; r++) (n = t[r]) >= a && n < w && (w = n);
              var x = g + 1;
              if (w - a > f((o - s) / x)) throw new c(u);
              for (s += (w - a) * x, a = w, r = 0; r < t.length; r++) {
                if ((n = t[r]) < a && ++s > o) throw new c(u);
                if (n === a) {
                  for (var E = s, S = 36;;) {
                    var O = S <= y ? 1 : S >= y + 26 ? 26 : S - y;
                    if (E < O) break;
                    var L = E - O,
                      j = 36 - O;
                    v(e, l(m(O + L % j))), E = f(L / j), S += 36;
                  }
                  v(e, l(m(E))), y = b(s, x, g === d), s = 0, g++;
                }
              }
              s++, a++;
            }
            return p(e, "");
          };
        t.exports = function (t) {
          var e,
            r,
            n = [],
            o = d(y(g(t), a, "."), ".");
          for (e = 0; e < o.length; e++) r = o[e], v(n, s(i, r) ? "xn--" + w(r) : r);
          return p(n, ".");
        };
      },
      3959: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = r(6762),
          i = r(2755),
          a = r(8662),
          u = n("".replace),
          c = RegExp("^[" + a + "]+"),
          s = RegExp("(^|[^" + a + "])[" + a + "]+$"),
          f = function (t) {
            return function (e) {
              var r = i(o(e));
              return 1 & t && (r = u(r, c, "")), 2 & t && (r = u(r, s, "$1")), r;
            };
          };
        t.exports = {
          start: f(1),
          end: f(2),
          trim: f(3)
        };
      },
      4053: function (t, e, r) {
        "use strict";

        var n = r(7245),
          o = r(5306),
          i = r(7802).String;
        t.exports = !!Object.getOwnPropertySymbols && !o(function () {
          var t = Symbol("symbol detection");
          return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41;
        });
      },
      652: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(1570),
          i = r(7936),
          a = r(7205);
        t.exports = function () {
          var t = o("Symbol"),
            e = t && t.prototype,
            r = e && e.valueOf,
            u = i("toPrimitive");
          e && !e[u] && a(e, u, function (t) {
            return n(r, this);
          }, {
            arity: 1
          });
        };
      },
      1999: function (t, e, r) {
        "use strict";

        var n = r(4053);
        t.exports = n && !!Symbol.for && !!Symbol.keyFor;
      },
      1998: function (t, e, r) {
        "use strict";

        var n,
          o,
          i,
          a,
          u = r(7802),
          c = r(6415),
          s = r(5898),
          f = r(5893),
          l = r(4130),
          h = r(5306),
          p = r(2343),
          v = r(39),
          y = r(9800),
          d = r(7443),
          g = r(7580),
          m = r(6576),
          b = u.setImmediate,
          w = u.clearImmediate,
          x = u.process,
          E = u.Dispatch,
          S = u.Function,
          O = u.MessageChannel,
          L = u.String,
          j = 0,
          _ = {},
          k = "onreadystatechange";
        h(function () {
          n = u.location;
        });
        var P = function (t) {
            if (l(_, t)) {
              var e = _[t];
              delete _[t], e();
            }
          },
          A = function (t) {
            return function () {
              P(t);
            };
          },
          T = function (t) {
            P(t.data);
          },
          I = function (t) {
            u.postMessage(L(t), n.protocol + "//" + n.host);
          };
        b && w || (b = function (t) {
          d(arguments.length, 1);
          var e = f(t) ? t : S(t),
            r = v(arguments, 1);
          return _[++j] = function () {
            c(e, undefined, r);
          }, o(j), j;
        }, w = function (t) {
          delete _[t];
        }, m ? o = function (t) {
          x.nextTick(A(t));
        } : E && E.now ? o = function (t) {
          E.now(A(t));
        } : O && !g ? (a = (i = new O()).port2, i.port1.onmessage = T, o = s(a.postMessage, a)) : u.addEventListener && f(u.postMessage) && !u.importScripts && n && "file:" !== n.protocol && !h(I) ? (o = I, u.addEventListener("message", T, false)) : o = k in y("script") ? function (t) {
          p.appendChild(y("script"))[k] = function () {
            p.removeChild(this), P(t);
          };
        } : function (t) {
          setTimeout(A(t), 0);
        }), t.exports = {
          set: b,
          clear: w
        };
      },
      2269: function (t, e, r) {
        "use strict";

        var n = r(6406);
        t.exports = n(1..valueOf);
      },
      9961: function (t, e, r) {
        "use strict";

        var n = r(5930),
          o = Math.max,
          i = Math.min;
        t.exports = function (t, e) {
          var r = n(t);
          return r < 0 ? o(r + e, 0) : i(r, e);
        };
      },
      9405: function (t, e, r) {
        "use strict";

        var n = r(5366),
          o = r(6762);
        t.exports = function (t) {
          return n(o(t));
        };
      },
      5930: function (t, e, r) {
        "use strict";

        var n = r(1402);
        t.exports = function (t) {
          var e = +t;
          return e != e || 0 === e ? 0 : n(e);
        };
      },
      9099: function (t, e, r) {
        "use strict";

        var n = r(5930),
          o = Math.min;
        t.exports = function (t) {
          return t > 0 ? o(n(t), 9007199254740991) : 0;
        };
      },
      5864: function (t, e, r) {
        "use strict";

        var n = r(6762),
          o = Object;
        t.exports = function (t) {
          return o(n(t));
        };
      },
      6090: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(5287),
          i = r(103),
          a = r(6628),
          u = r(1253),
          c = r(7936),
          s = TypeError,
          f = c("toPrimitive");
        t.exports = function (t, e) {
          if (!o(t) || i(t)) return t;
          var r,
            c = a(t, f);
          if (c) {
            if (undefined === e && (e = "default"), r = n(c, t, e), !o(r) || i(r)) return r;
            throw new s("Can't convert object to primitive value");
          }
          return undefined === e && (e = "number"), u(t, e);
        };
      },
      3662: function (t, e, r) {
        "use strict";

        var n = r(6090),
          o = r(103);
        t.exports = function (t) {
          var e = n(t, "string");
          return o(e) ? e : e + "";
        };
      },
      6623: function (t, e, r) {
        "use strict";

        var n = {};
        n[r(7936)("toStringTag")] = "z", t.exports = "[object z]" === String(n);
      },
      2755: function (t, e, r) {
        "use strict";

        var n = r(5683),
          o = String;
        t.exports = function (t) {
          if ("Symbol" === n(t)) throw new TypeError("Cannot convert a Symbol value to a string");
          return o(t);
        };
      },
      5545: function (t) {
        "use strict";

        var e = String;
        t.exports = function (t) {
          try {
            return e(t);
          } catch (t) {
            return "Object";
          }
        };
      },
      6350: function (t, e, r) {
        "use strict";

        var n = r(6406),
          o = 0,
          i = Math.random(),
          a = n(1..toString);
        t.exports = function (t) {
          return "Symbol(" + (undefined === t ? "" : t) + ")_" + a(++o + i, 36);
        };
      },
      506: function (t, e, r) {
        "use strict";

        var n = r(5306),
          o = r(7936),
          i = r(3877),
          a = r(99),
          u = o("iterator");
        t.exports = !n(function () {
          var t = new URL("b?a=1&b=2&c=3", "http://a"),
            e = t.searchParams,
            r = new URLSearchParams("a=1&a=2&b=3"),
            n = "";
          return t.pathname = "c%20d", e.forEach(function (t, r) {
            e.delete("b"), n += r + t;
          }), r.delete("a", 2), r.delete("b", undefined), a && (!t.toJSON || !r.has("a", 1) || r.has("a", 2) || !r.has("a", undefined) || r.has("b")) || !e.size && (a || !i) || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[u] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", undefined).host;
        });
      },
      345: function (t, e, r) {
        "use strict";

        var n = r(4053);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      7475: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(5306);
        t.exports = n && o(function () {
          return 42 !== Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: false
          }).prototype;
        });
      },
      7443: function (t) {
        "use strict";

        var e = TypeError;
        t.exports = function (t, r) {
          if (t < r) throw new e("Not enough arguments");
          return t;
        };
      },
      5585: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(5893),
          i = n.WeakMap;
        t.exports = o(i) && /native code/.test(String(i));
      },
      1012: function (t, e, r) {
        "use strict";

        var n = r(9533),
          o = r(4130),
          i = r(4618),
          a = r(7144).f;
        t.exports = function (t) {
          var e = n.Symbol || (n.Symbol = {});
          o(e, t) || a(e, t, {
            value: i.f(t)
          });
        };
      },
      4618: function (t, e, r) {
        "use strict";

        var n = r(7936);
        e.f = n;
      },
      7936: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(9231),
          i = r(4130),
          a = r(6350),
          u = r(4053),
          c = r(345),
          s = n.Symbol,
          f = o("wks"),
          l = c ? s.for || s : s && s.withoutSetter || a;
        t.exports = function (t) {
          return i(f, t) || (f[t] = u && i(s, t) ? s[t] : l("Symbol." + t)), f[t];
        };
      },
      8662: function (t) {
        "use strict";

        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
      },
      5357: function (t, e, r) {
        "use strict";

        var n = r(1570),
          o = r(4130),
          i = r(9251),
          a = r(2075),
          u = r(1126),
          c = r(779),
          s = r(6296),
          f = r(1074),
          l = r(3819),
          h = r(1281),
          p = r(3452),
          v = r(3877),
          y = r(99);
        t.exports = function (t, e, r, d) {
          var g = "stackTraceLimit",
            m = d ? 2 : 1,
            b = t.split("."),
            w = b[b.length - 1],
            x = n.apply(null, b);
          if (x) {
            var E = x.prototype;
            if (!y && o(E, "cause") && delete E.cause, !r) return x;
            var S = n("Error"),
              O = e(function (t, e) {
                var r = l(d ? e : t, undefined),
                  n = d ? new x(t) : new x();
                return undefined !== r && i(n, "message", r), p(n, O, n.stack, 2), this && a(E, this) && f(n, this, O), arguments.length > m && h(n, arguments[m]), n;
              });
            if (O.prototype = E, "Error" !== w ? u ? u(O, S) : c(O, S, {
              name: true
            }) : v && g in x && (s(O, x, g), s(O, x, "prepareStackTrace")), c(O, x), !y) try {
              E.name !== w && i(E, "name", w), E.constructor = O;
            } catch (t) {}
            return O;
          }
        };
      },
      1344: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5864),
          i = r(9969),
          a = r(5930),
          u = r(9408);
        n({
          target: "Array",
          proto: true
        }, {
          at: function (t) {
            var e = o(this),
              r = i(e),
              n = a(t),
              u = n >= 0 ? n : r + n;
            return u < 0 || u >= r ? undefined : e[u];
          }
        }), u("at");
      },
      4159: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5306),
          i = r(5289),
          a = r(5287),
          u = r(5864),
          c = r(9969),
          s = r(9060),
          f = r(6968),
          l = r(5008),
          h = r(6251),
          p = r(7936),
          v = r(7245),
          y = p("isConcatSpreadable"),
          d = v >= 51 || !o(function () {
            var t = [];
            return t[y] = false, t.concat()[0] !== t;
          }),
          g = function (t) {
            if (!a(t)) return false;
            var e = t[y];
            return undefined !== e ? !!e : i(t);
          };
        n({
          target: "Array",
          proto: true,
          arity: 1,
          forced: !d || !h("concat")
        }, {
          concat: function (t) {
            var e,
              r,
              n,
              o,
              i,
              a = u(this),
              h = l(a, 0),
              p = 0;
            for (e = -1, n = arguments.length; e < n; e++) if (g(i = -1 === e ? a : arguments[e])) for (o = c(i), s(p + o), r = 0; r < o; r++, p++) r in i && f(h, p, i[r]);else s(p + 1), f(h, p++, i);
            return h.length = p, h;
          }
        });
      },
      2663: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(6767).filter;
        n({
          target: "Array",
          proto: true,
          forced: !r(6251)("filter")
        }, {
          filter: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : undefined);
          }
        });
      },
      1270: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(993);
        n({
          target: "Array",
          stat: true,
          forced: !r(7246)(function (t) {
            Array.from(t);
          })
        }, {
          from: o
        });
      },
      6066: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(2971).includes,
          i = r(5306),
          a = r(9408);
        n({
          target: "Array",
          proto: true,
          forced: i(function () {
            return !Array(1).includes();
          })
        }, {
          includes: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : undefined);
          }
        }), a("includes");
      },
      4901: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(8717),
          i = r(2971).indexOf,
          a = r(519),
          u = o([].indexOf),
          c = !!u && 1 / u([1], 1, 0) < 0;
        n({
          target: "Array",
          proto: true,
          forced: c || !a("indexOf")
        }, {
          indexOf: function (t) {
            var e = arguments.length > 1 ? arguments[1] : undefined;
            return c ? u(this, t, e) || 0 : i(this, t, e);
          }
        });
      },
      3227: function (t, e, r) {
        "use strict";

        var n = r(9405),
          o = r(9408),
          i = r(9921),
          a = r(9930),
          u = r(7144).f,
          c = r(7227),
          s = r(4160),
          f = r(99),
          l = r(3877),
          h = "Array Iterator",
          p = a.set,
          v = a.getterFor(h);
        t.exports = c(Array, "Array", function (t, e) {
          p(this, {
            type: h,
            target: n(t),
            index: 0,
            kind: e
          });
        }, function () {
          var t = v(this),
            e = t.target,
            r = t.index++;
          if (!e || r >= e.length) return t.target = undefined, s(undefined, true);
          switch (t.kind) {
            case "keys":
              return s(r, false);
            case "values":
              return s(e[r], false);
          }
          return s([r, e[r]], false);
        }, "values");
        var y = i.Arguments = i.Array;
        if (o("keys"), o("values"), o("entries"), !f && l && "values" !== y.name) try {
          u(y, "name", {
            value: "values"
          });
        } catch (t) {}
      },
      9034: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(6406),
          i = r(5366),
          a = r(9405),
          u = r(519),
          c = o([].join);
        n({
          target: "Array",
          proto: true,
          forced: i !== Object || !u("join", ",")
        }, {
          join: function (t) {
            return c(a(this), undefined === t ? "," : t);
          }
        });
      },
      6626: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(6767).map;
        n({
          target: "Array",
          proto: true,
          forced: !r(6251)("map")
        }, {
          map: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : undefined);
          }
        });
      },
      3517: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5864),
          i = r(9969),
          a = r(8576),
          u = r(9060);
        n({
          target: "Array",
          proto: true,
          arity: 1,
          forced: r(5306)(function () {
            return 4294967297 !== [].push.call({
              length: 4294967296
            }, 1);
          }) || !function () {
            try {
              Object.defineProperty([], "length", {
                writable: false
              }).push();
            } catch (t) {
              return t instanceof TypeError;
            }
          }()
        }, {
          push: function (t) {
            var e = o(this),
              r = i(e),
              n = arguments.length;
            u(r + n);
            for (var c = 0; c < n; c++) e[r] = arguments[c], r++;
            return a(e, r), r;
          }
        });
      },
      2815: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(9813).left,
          i = r(519),
          a = r(7245);
        n({
          target: "Array",
          proto: true,
          forced: !r(6576) && a > 79 && a < 83 || !i("reduce")
        }, {
          reduce: function (t) {
            var e = arguments.length;
            return o(this, t, e, e > 1 ? arguments[1] : undefined);
          }
        });
      },
      1162: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(6406),
          i = r(5289),
          a = o([].reverse),
          u = [1, 2];
        n({
          target: "Array",
          proto: true,
          forced: String(u) === String(u.reverse())
        }, {
          reverse: function () {
            return i(this) && (this.length = this.length), a(this);
          }
        });
      },
      8646: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5289),
          i = r(5434),
          a = r(5287),
          u = r(9961),
          c = r(9969),
          s = r(9405),
          f = r(6968),
          l = r(7936),
          h = r(6251),
          p = r(39),
          v = h("slice"),
          y = l("species"),
          d = Array,
          g = Math.max;
        n({
          target: "Array",
          proto: true,
          forced: !v
        }, {
          slice: function (t, e) {
            var r,
              n,
              l,
              h = s(this),
              v = c(h),
              m = u(t, v),
              b = u(undefined === e ? v : e, v);
            if (o(h) && (r = h.constructor, (i(r) && (r === d || o(r.prototype)) || a(r) && null === (r = r[y])) && (r = undefined), r === d || undefined === r)) return p(h, m, b);
            for (n = new (undefined === r ? d : r)(g(b - m, 0)), l = 0; m < b; m++, l++) m in h && f(n, l, h[m]);
            return n.length = l, n;
          }
        });
      },
      5916: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5306),
          i = r(5864),
          a = r(6090);
        n({
          target: "Date",
          proto: true,
          arity: 1,
          forced: o(function () {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
              toISOString: function () {
                return 1;
              }
            });
          })
        }, {
          toJSON: function (t) {
            var e = i(this),
              r = a(e, "number");
            return "number" != typeof r || isFinite(r) ? e.toISOString() : null;
          }
        });
      },
      5822: function (t, e, r) {
        "use strict";

        var n = r(4130),
          o = r(7205),
          i = r(5938),
          a = r(7936)("toPrimitive"),
          u = Date.prototype;
        n(u, a) || o(u, a, i);
      },
      1683: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(7802),
          i = r(6415),
          a = r(5357),
          u = "WebAssembly",
          c = o[u],
          s = 7 !== new Error("e", {
            cause: 7
          }).cause,
          f = function (t, e) {
            var r = {};
            r[t] = a(t, e, s), n({
              global: true,
              constructor: true,
              arity: 1,
              forced: s
            }, r);
          },
          l = function (t, e) {
            if (c && c[t]) {
              var r = {};
              r[t] = a(u + "." + t, e, s), n({
                target: u,
                stat: true,
                constructor: true,
                arity: 1,
                forced: s
              }, r);
            }
          };
        f("Error", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), f("EvalError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), f("RangeError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), f("ReferenceError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), f("SyntaxError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), f("TypeError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), f("URIError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), l("CompileError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), l("LinkError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }), l("RuntimeError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        });
      },
      6266: function (t, e, r) {
        "use strict";

        var n = r(7205),
          o = r(1303),
          i = Error.prototype;
        i.toString !== o && n(i, "toString", o);
      },
      8949: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(9656).EXISTS,
          i = r(6406),
          a = r(5023),
          u = Function.prototype,
          c = i(u.toString),
          s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          f = i(s.exec);
        n && !o && a(u, "name", {
          configurable: true,
          get: function () {
            try {
              return f(s, c(this))[1];
            } catch (t) {
              return "";
            }
          }
        });
      },
      8983: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1570),
          i = r(6415),
          a = r(1550),
          u = r(6406),
          c = r(5306),
          s = r(5893),
          f = r(103),
          l = r(39),
          h = r(6695),
          p = r(4053),
          v = String,
          y = o("JSON", "stringify"),
          d = u(/./.exec),
          g = u("".charAt),
          m = u("".charCodeAt),
          b = u("".replace),
          w = u(1..toString),
          x = /[\uD800-\uDFFF]/g,
          E = /^[\uD800-\uDBFF]$/,
          S = /^[\uDC00-\uDFFF]$/,
          O = !p || c(function () {
            var t = o("Symbol")("stringify detection");
            return "[null]" !== y([t]) || "{}" !== y({
              a: t
            }) || "{}" !== y(Object(t));
          }),
          L = c(function () {
            return '"\\udf06\\ud834"' !== y("\udf06\ud834") || '"\\udead"' !== y("\udead");
          }),
          j = function (t, e) {
            var r = l(arguments),
              n = h(e);
            if (s(n) || undefined !== t && !f(t)) return r[1] = function (t, e) {
              if (s(n) && (e = a(n, this, v(t), e)), !f(e)) return e;
            }, i(y, null, r);
          },
          _ = function (t, e, r) {
            var n = g(r, e - 1),
              o = g(r, e + 1);
            return d(E, t) && !d(S, o) || d(S, t) && !d(E, n) ? "\\u" + w(m(t, 0), 16) : t;
          };
        y && n({
          target: "JSON",
          stat: true,
          arity: 3,
          forced: O || L
        }, {
          stringify: function (t, e, r) {
            var n = l(arguments),
              o = i(O ? j : y, null, n);
            return L && "string" == typeof o ? b(o, x, _) : o;
          }
        });
      },
      1632: function (t, e, r) {
        "use strict";

        var n = r(7802);
        r(3581)(n.JSON, "JSON", true);
      },
      7337: function (t, e, r) {
        "use strict";

        r(3581)(Math, "Math", true);
      },
      1908: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(99),
          i = r(3877),
          a = r(7802),
          u = r(9533),
          c = r(6406),
          s = r(5031),
          f = r(4130),
          l = r(1074),
          h = r(2075),
          p = r(103),
          v = r(6090),
          y = r(5306),
          d = r(7397).f,
          g = r(10).f,
          m = r(7144).f,
          b = r(2269),
          w = r(3959).trim,
          x = "Number",
          E = a[x],
          S = u[x],
          O = E.prototype,
          L = a.TypeError,
          j = c("".slice),
          _ = c("".charCodeAt),
          k = function (t) {
            var e,
              r,
              n,
              o,
              i,
              a,
              u,
              c,
              s = v(t, "number");
            if (p(s)) throw new L("Cannot convert a Symbol value to a number");
            if ("string" == typeof s && s.length > 2) if (s = w(s), 43 === (e = _(s, 0)) || 45 === e) {
              if (88 === (r = _(s, 2)) || 120 === r) return NaN;
            } else if (48 === e) {
              switch (_(s, 1)) {
                case 66:
                case 98:
                  n = 2, o = 49;
                  break;
                case 79:
                case 111:
                  n = 8, o = 55;
                  break;
                default:
                  return +s;
              }
              for (a = (i = j(s, 2)).length, u = 0; u < a; u++) if ((c = _(i, u)) < 48 || c > o) return NaN;
              return parseInt(i, n);
            }
            return +s;
          },
          P = s(x, !E(" 0o1") || !E("0b1") || E("+0x1")),
          A = function (t) {
            var e,
              r = arguments.length < 1 ? 0 : E(function (t) {
                var e = v(t, "number");
                return "bigint" == typeof e ? e : k(e);
              }(t));
            return h(O, e = this) && y(function () {
              b(e);
            }) ? l(Object(r), this, A) : r;
          };
        A.prototype = O, P && !o && (O.constructor = A), n({
          global: true,
          constructor: true,
          wrap: true,
          forced: P
        }, {
          Number: A
        });
        var T = function (t, e) {
          for (var r, n = i ? d(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++) f(e, r = n[o]) && !f(t, r) && m(t, r, g(e, r));
        };
        o && S && T(u[x], S), (P || o) && T(u[x], E);
      },
      6655: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(3877),
          i = r(3872).f;
        n({
          target: "Object",
          stat: true,
          forced: Object.defineProperties !== i,
          sham: !o
        }, {
          defineProperties: i
        });
      },
      3096: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(3877),
          i = r(7144).f;
        n({
          target: "Object",
          stat: true,
          forced: Object.defineProperty !== i,
          sham: !o
        }, {
          defineProperty: i
        });
      },
      1413: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(9181).entries;
        n({
          target: "Object",
          stat: true
        }, {
          entries: function (t) {
            return o(t);
          }
        });
      },
      6225: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5306),
          i = r(9405),
          a = r(10).f,
          u = r(3877);
        n({
          target: "Object",
          stat: true,
          forced: !u || o(function () {
            a(1);
          }),
          sham: !u
        }, {
          getOwnPropertyDescriptor: function (t, e) {
            return a(i(t), e);
          }
        });
      },
      4567: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(3877),
          i = r(6627),
          a = r(9405),
          u = r(10),
          c = r(6968);
        n({
          target: "Object",
          stat: true,
          sham: !o
        }, {
          getOwnPropertyDescriptors: function (t) {
            for (var e, r, n = a(t), o = u.f, s = i(n), f = {}, l = 0; s.length > l;) undefined !== (r = o(n, e = s[l++])) && c(f, e, r);
            return f;
          }
        });
      },
      2487: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(4053),
          i = r(5306),
          a = r(6855),
          u = r(5864);
        n({
          target: "Object",
          stat: true,
          forced: !o || i(function () {
            a.f(1);
          })
        }, {
          getOwnPropertySymbols: function (t) {
            var e = a.f;
            return e ? e(u(t)) : [];
          }
        });
      },
      9574: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5306),
          i = r(5864),
          a = r(6900),
          u = r(9494);
        n({
          target: "Object",
          stat: true,
          forced: o(function () {
            a(1);
          }),
          sham: !u
        }, {
          getPrototypeOf: function (t) {
            return a(i(t));
          }
        });
      },
      3127: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(5864),
          i = r(1008);
        n({
          target: "Object",
          stat: true,
          forced: r(5306)(function () {
            i(1);
          })
        }, {
          keys: function (t) {
            return i(o(t));
          }
        });
      },
      497: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(5023),
          i = r(5287),
          a = r(5864),
          u = r(6762),
          c = Object.getPrototypeOf,
          s = Object.setPrototypeOf,
          f = Object.prototype,
          l = "__proto__";
        if (n && c && s && !(l in f)) try {
          o(f, l, {
            configurable: true,
            get: function () {
              return c(a(this));
            },
            set: function (t) {
              var e = u(this);
              (i(t) || null === t) && i(e) && s(e, t);
            }
          });
        } catch (t) {}
      },
      3908: function (t, e, r) {
        "use strict";

        r(2390)({
          target: "Object",
          stat: true
        }, {
          setPrototypeOf: r(1126)
        });
      },
      1414: function (t, e, r) {
        "use strict";

        var n = r(6623),
          o = r(7205),
          i = r(2789);
        n || o(Object.prototype, "toString", i, {
          unsafe: true
        });
      },
      4112: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(9982);
        n({
          global: true,
          forced: parseInt !== o
        }, {
          parseInt: o
        });
      },
      2509: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1550),
          i = r(1575),
          a = r(7117),
          u = r(1945),
          c = r(2003);
        n({
          target: "Promise",
          stat: true,
          forced: r(1292)
        }, {
          allSettled: function (t) {
            var e = this,
              r = a.f(e),
              n = r.resolve,
              s = r.reject,
              f = u(function () {
                var r = i(e.resolve),
                  a = [],
                  u = 0,
                  s = 1;
                c(t, function (t) {
                  var i = u++,
                    c = false;
                  s++, o(r, e, t).then(function (t) {
                    c || (c = true, a[i] = {
                      status: "fulfilled",
                      value: t
                    }, --s || n(a));
                  }, function (t) {
                    c || (c = true, a[i] = {
                      status: "rejected",
                      reason: t
                    }, --s || n(a));
                  });
                }), --s || n(a);
              });
            return f.error && s(f.value), r.promise;
          }
        });
      },
      3721: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1550),
          i = r(1575),
          a = r(7117),
          u = r(1945),
          c = r(2003);
        n({
          target: "Promise",
          stat: true,
          forced: r(1292)
        }, {
          all: function (t) {
            var e = this,
              r = a.f(e),
              n = r.resolve,
              s = r.reject,
              f = u(function () {
                var r = i(e.resolve),
                  a = [],
                  u = 0,
                  f = 1;
                c(t, function (t) {
                  var i = u++,
                    c = false;
                  f++, o(r, e, t).then(function (t) {
                    c || (c = true, a[i] = t, --f || n(a));
                  }, s);
                }), --f || n(a);
              });
            return f.error && s(f.value), r.promise;
          }
        });
      },
      4183: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(99),
          i = r(8545).CONSTRUCTOR,
          a = r(3825),
          u = r(1570),
          c = r(5893),
          s = r(7205),
          f = a && a.prototype;
        if (n({
          target: "Promise",
          proto: true,
          forced: i,
          real: true
        }, {
          catch: function (t) {
            return this.then(undefined, t);
          }
        }), !o && c(a)) {
          var l = u("Promise").prototype.catch;
          f.catch !== l && s(f, "catch", l, {
            unsafe: true
          });
        }
      },
      3663: function (t, e, r) {
        "use strict";

        var n,
          o,
          i,
          a = r(2390),
          u = r(99),
          c = r(6576),
          s = r(7802),
          f = r(1550),
          l = r(7205),
          h = r(1126),
          p = r(3581),
          v = r(7001),
          y = r(1575),
          d = r(5893),
          g = r(5287),
          m = r(9064),
          b = r(6759),
          w = r(1998).set,
          x = r(3700),
          E = r(4419),
          S = r(1945),
          O = r(7687),
          L = r(9930),
          j = r(3825),
          _ = r(8545),
          k = r(7117),
          P = "Promise",
          A = _.CONSTRUCTOR,
          T = _.REJECTION_EVENT,
          I = _.SUBCLASSING,
          R = L.getterFor(P),
          N = L.set,
          F = j && j.prototype,
          C = j,
          U = F,
          G = s.TypeError,
          M = s.document,
          D = s.process,
          B = k.f,
          H = B,
          q = !!(M && M.createEvent && s.dispatchEvent),
          W = "unhandledrejection",
          $ = function (t) {
            var e;
            return !(!g(t) || !d(e = t.then)) && e;
          },
          Y = function (t, e) {
            var r,
              n,
              o,
              i = e.value,
              a = 1 === e.state,
              u = a ? t.ok : t.fail,
              c = t.resolve,
              s = t.reject,
              l = t.domain;
            try {
              u ? (a || (2 === e.rejection && X(e), e.rejection = 1), true === u ? r = i : (l && l.enter(), r = u(i), l && (l.exit(), o = true)), r === t.promise ? s(new G("Promise-chain cycle")) : (n = $(r)) ? f(n, r, c, s) : c(r)) : s(i);
            } catch (t) {
              l && !o && l.exit(), s(t);
            }
          },
          V = function (t, e) {
            t.notified || (t.notified = true, x(function () {
              for (var r, n = t.reactions; r = n.get();) Y(r, t);
              t.notified = false, e && !t.rejection && J(t);
            }));
          },
          z = function (t, e, r) {
            var n, o;
            q ? ((n = M.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, false, true), s.dispatchEvent(n)) : n = {
              promise: e,
              reason: r
            }, !T && (o = s["on" + t]) ? o(n) : t === W && E("Unhandled promise rejection", r);
          },
          J = function (t) {
            f(w, s, function () {
              var e,
                r = t.facade,
                n = t.value;
              if (K(t) && (e = S(function () {
                c ? D.emit("unhandledRejection", n, r) : z(W, r, n);
              }), t.rejection = c || K(t) ? 2 : 1, e.error)) throw e.value;
            });
          },
          K = function (t) {
            return 1 !== t.rejection && !t.parent;
          },
          X = function (t) {
            f(w, s, function () {
              var e = t.facade;
              c ? D.emit("rejectionHandled", e) : z("rejectionhandled", e, t.value);
            });
          },
          Z = function (t, e, r) {
            return function (n) {
              t(e, n, r);
            };
          },
          Q = function (t, e, r) {
            t.done || (t.done = true, r && (t = r), t.value = e, t.state = 2, V(t, true));
          },
          tt = function (t, e, r) {
            if (!t.done) {
              t.done = true, r && (t = r);
              try {
                if (t.facade === e) throw new G("Promise can't be resolved itself");
                var n = $(e);
                n ? x(function () {
                  var r = {
                    done: false
                  };
                  try {
                    f(n, e, Z(tt, r, t), Z(Q, r, t));
                  } catch (e) {
                    Q(r, e, t);
                  }
                }) : (t.value = e, t.state = 1, V(t, false));
              } catch (e) {
                Q({
                  done: false
                }, e, t);
              }
            }
          };
        if (A && (U = (C = function (t) {
          m(this, U), y(t), f(n, this);
          var e = R(this);
          try {
            t(Z(tt, e), Z(Q, e));
          } catch (t) {
            Q(e, t);
          }
        }).prototype, (n = function (t) {
          N(this, {
            type: P,
            done: false,
            notified: false,
            parent: false,
            reactions: new O(),
            rejection: false,
            state: 0,
            value: undefined
          });
        }).prototype = l(U, "then", function (t, e) {
          var r = R(this),
            n = B(b(this, C));
          return r.parent = true, n.ok = !d(t) || t, n.fail = d(e) && e, n.domain = c ? D.domain : undefined, 0 === r.state ? r.reactions.add(n) : x(function () {
            Y(n, r);
          }), n.promise;
        }), o = function () {
          var t = new n(),
            e = R(t);
          this.promise = t, this.resolve = Z(tt, e), this.reject = Z(Q, e);
        }, k.f = B = function (t) {
          return t === C || undefined === t ? new o(t) : H(t);
        }, !u && d(j) && F !== Object.prototype)) {
          i = F.then, I || l(F, "then", function (t, e) {
            var r = this;
            return new C(function (t, e) {
              f(i, r, t, e);
            }).then(t, e);
          }, {
            unsafe: true
          });
          try {
            delete F.constructor;
          } catch (t) {}
          h && h(F, U);
        }
        a({
          global: true,
          constructor: true,
          wrap: true,
          forced: A
        }, {
          Promise: C
        }), p(C, P, false, true), v(P);
      },
      7666: function (t, e, r) {
        "use strict";

        r(3663), r(3721), r(4183), r(7286), r(7127), r(4197);
      },
      7286: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1550),
          i = r(1575),
          a = r(7117),
          u = r(1945),
          c = r(2003);
        n({
          target: "Promise",
          stat: true,
          forced: r(1292)
        }, {
          race: function (t) {
            var e = this,
              r = a.f(e),
              n = r.reject,
              s = u(function () {
                var a = i(e.resolve);
                c(t, function (t) {
                  o(a, e, t).then(r.resolve, n);
                });
              });
            return s.error && n(s.value), r.promise;
          }
        });
      },
      7127: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1550),
          i = r(7117);
        n({
          target: "Promise",
          stat: true,
          forced: r(8545).CONSTRUCTOR
        }, {
          reject: function (t) {
            var e = i.f(this);
            return o(e.reject, undefined, t), e.promise;
          }
        });
      },
      4197: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1570),
          i = r(99),
          a = r(3825),
          u = r(8545).CONSTRUCTOR,
          c = r(7093),
          s = o("Promise"),
          f = i && !u;
        n({
          target: "Promise",
          stat: true,
          forced: i || u
        }, {
          resolve: function (t) {
            return c(f && this === s ? a : this, t);
          }
        });
      },
      5439: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(7802),
          i = r(6406),
          a = r(5031),
          u = r(1074),
          c = r(9251),
          s = r(7397).f,
          f = r(2075),
          l = r(8210),
          h = r(2755),
          p = r(8163),
          v = r(9688),
          y = r(6296),
          d = r(7205),
          g = r(5306),
          m = r(4130),
          b = r(9930).enforce,
          w = r(7001),
          x = r(7936),
          E = r(8880),
          S = r(2901),
          O = x("match"),
          L = o.RegExp,
          j = L.prototype,
          _ = o.SyntaxError,
          k = i(j.exec),
          P = i("".charAt),
          A = i("".replace),
          T = i("".indexOf),
          I = i("".slice),
          R = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
          N = /a/g,
          F = /a/g,
          C = new L(N) !== N,
          U = v.MISSED_STICKY,
          G = v.UNSUPPORTED_Y,
          M = n && (!C || U || E || S || g(function () {
            return F[O] = false, L(N) !== N || L(F) === F || "/a/i" !== String(L(N, "i"));
          }));
        if (a("RegExp", M)) {
          for (var D = function (t, e) {
              var r,
                n,
                o,
                i,
                a,
                s,
                v = f(j, this),
                y = l(t),
                d = undefined === e,
                g = [],
                w = t;
              if (!v && y && d && t.constructor === D) return t;
              if ((y || f(j, t)) && (t = t.source, d && (e = p(w))), t = undefined === t ? "" : h(t), e = undefined === e ? "" : h(e), w = t, E && "dotAll" in N && (n = !!e && T(e, "s") > -1) && (e = A(e, /s/g, "")), r = e, U && "sticky" in N && (o = !!e && T(e, "y") > -1) && G && (e = A(e, /y/g, "")), S && (i = function (t) {
                for (var e, r = t.length, n = 0, o = "", i = [], a = {}, u = false, c = false, s = 0, f = ""; n <= r; n++) {
                  if ("\\" === (e = P(t, n))) e += P(t, ++n);else if ("]" === e) u = false;else if (!u) switch (true) {
                    case "[" === e:
                      u = true;
                      break;
                    case "(" === e:
                      k(R, I(t, n + 1)) && (n += 2, c = true), o += e, s++;
                      continue;
                    case ">" === e && c:
                      if ("" === f || m(a, f)) throw new _("Invalid capture group name");
                      a[f] = true, i[i.length] = [f, s], c = false, f = "";
                      continue;
                  }
                  c ? f += e : o += e;
                }
                return [o, i];
              }(t), t = i[0], g = i[1]), a = u(L(t, e), v ? this : j, D), (n || o || g.length) && (s = b(a), n && (s.dotAll = true, s.raw = D(function (t) {
                for (var e, r = t.length, n = 0, o = "", i = false; n <= r; n++) "\\" !== (e = P(t, n)) ? i || "." !== e ? ("[" === e ? i = true : "]" === e && (i = false), o += e) : o += "[\\s\\S]" : o += e + P(t, ++n);
                return o;
              }(t), r)), o && (s.sticky = true), g.length && (s.groups = g)), t !== w) try {
                c(a, "source", "" === w ? "(?:)" : w);
              } catch (t) {}
              return a;
            }, B = s(L), H = 0; B.length > H;) y(D, L, B[H++]);
          j.constructor = D, D.prototype = j, d(o, "RegExp", D, {
            constructor: true
          });
        }
        w("RegExp");
      },
      5486: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(8880),
          i = r(3048),
          a = r(5023),
          u = r(9930).get,
          c = RegExp.prototype,
          s = TypeError;
        n && o && a(c, "dotAll", {
          configurable: true,
          get: function () {
            if (this !== c) {
              if ("RegExp" === i(this)) return !!u(this).dotAll;
              throw new s("Incompatible receiver, RegExp required");
            }
          }
        });
      },
      9139: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(3351);
        n({
          target: "RegExp",
          proto: true,
          forced: /./.exec !== o
        }, {
          exec: o
        });
      },
      9892: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(9688).MISSED_STICKY,
          i = r(3048),
          a = r(5023),
          u = r(9930).get,
          c = RegExp.prototype,
          s = TypeError;
        n && o && a(c, "sticky", {
          configurable: true,
          get: function () {
            if (this !== c) {
              if ("RegExp" === i(this)) return !!u(this).sticky;
              throw new s("Incompatible receiver, RegExp required");
            }
          }
        });
      },
      74: function (t, e, r) {
        "use strict";

        r(9139);
        var n,
          o,
          i = r(2390),
          a = r(1550),
          u = r(5893),
          c = r(9972),
          s = r(2755),
          f = (n = false, (o = /[ac]/).exec = function () {
            return n = true, /./.exec.apply(this, arguments);
          }, true === o.test("abc") && n),
          l = /./.test;
        i({
          target: "RegExp",
          proto: true,
          forced: !f
        }, {
          test: function (t) {
            var e = c(this),
              r = s(t),
              n = e.exec;
            if (!u(n)) return a(l, e, r);
            var o = a(n, e, r);
            return null !== o && (c(o), true);
          }
        });
      },
      4134: function (t, e, r) {
        "use strict";

        var n = r(9656).PROPER,
          o = r(7205),
          i = r(9972),
          a = r(2755),
          u = r(5306),
          c = r(8163),
          s = "toString",
          f = RegExp.prototype[s],
          l = u(function () {
            return "/a/b" !== f.call({
              source: "a",
              flags: "b"
            });
          }),
          h = n && f.name !== s;
        (l || h) && o(RegExp.prototype, s, function () {
          var t = i(this);
          return "/" + a(t.source) + "/" + a(c(t));
        }, {
          unsafe: true
        });
      },
      6614: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(6406),
          i = r(6762),
          a = r(5930),
          u = r(2755),
          c = r(5306),
          s = o("".charAt);
        n({
          target: "String",
          proto: true,
          forced: c(function () {
            return "\ud842" !== "𠮷".at(-2);
          })
        }, {
          at: function (t) {
            var e = u(i(this)),
              r = e.length,
              n = a(t),
              o = n >= 0 ? n : r + n;
            return o < 0 || o >= r ? undefined : s(e, o);
          }
        });
      },
      4690: function (t, e, r) {
        "use strict";

        var n,
          o = r(2390),
          i = r(8717),
          a = r(10).f,
          u = r(9099),
          c = r(2755),
          s = r(4107),
          f = r(6762),
          l = r(187),
          h = r(99),
          p = i("".endsWith),
          v = i("".slice),
          y = Math.min,
          d = l("endsWith");
        o({
          target: "String",
          proto: true,
          forced: !!(h || d || (n = a(String.prototype, "endsWith"), !n || n.writable)) && !d
        }, {
          endsWith: function (t) {
            var e = c(f(this));
            s(t);
            var r = arguments.length > 1 ? arguments[1] : undefined,
              n = e.length,
              o = undefined === r ? n : y(u(r), n),
              i = c(t);
            return p ? p(e, i, o) : v(e, o - i.length, o) === i;
          }
        });
      },
      3370: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(6406),
          i = r(4107),
          a = r(6762),
          u = r(2755),
          c = r(187),
          s = o("".indexOf);
        n({
          target: "String",
          proto: true,
          forced: !c("includes")
        }, {
          includes: function (t) {
            return !!~s(u(a(this)), u(i(t)), arguments.length > 1 ? arguments[1] : undefined);
          }
        });
      },
      4011: function (t, e, r) {
        "use strict";

        var n = r(8373).charAt,
          o = r(2755),
          i = r(9930),
          a = r(7227),
          u = r(4160),
          c = "String Iterator",
          s = i.set,
          f = i.getterFor(c);
        a(String, "String", function (t) {
          s(this, {
            type: c,
            string: o(t),
            index: 0
          });
        }, function () {
          var t,
            e = f(this),
            r = e.string,
            o = e.index;
          return o >= r.length ? u(undefined, true) : (t = n(r, o), e.index += t.length, u(t, false));
        });
      },
      1597: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(3282),
          i = r(9972),
          a = r(7707),
          u = r(9099),
          c = r(2755),
          s = r(6762),
          f = r(6628),
          l = r(9384),
          h = r(7771);
        o("match", function (t, e, r) {
          return [function (e) {
            var r = s(this),
              o = a(e) ? undefined : f(e, t);
            return o ? n(o, e, r) : new RegExp(e)[t](c(r));
          }, function (t) {
            var n = i(this),
              o = c(t),
              a = r(e, n, o);
            if (a.done) return a.value;
            if (!n.global) return h(n, o);
            var s = n.unicode;
            n.lastIndex = 0;
            for (var f, p = [], v = 0; null !== (f = h(n, o));) {
              var y = c(f[0]);
              p[v] = y, "" === y && (n.lastIndex = l(o, u(n.lastIndex), s)), v++;
            }
            return 0 === v ? null : p;
          }];
        });
      },
      6028: function (t, e, r) {
        "use strict";

        var n = r(6415),
          o = r(1550),
          i = r(6406),
          a = r(3282),
          u = r(5306),
          c = r(9972),
          s = r(5893),
          f = r(7707),
          l = r(5930),
          h = r(9099),
          p = r(2755),
          v = r(6762),
          y = r(9384),
          d = r(6628),
          g = r(5338),
          m = r(7771),
          b = r(7936)("replace"),
          w = Math.max,
          x = Math.min,
          E = i([].concat),
          S = i([].push),
          O = i("".indexOf),
          L = i("".slice),
          j = "$0" === "a".replace(/./, "$0"),
          _ = !!/./[b] && "" === /./[b]("a", "$0");
        a("replace", function (t, e, r) {
          var i = _ ? "$" : "$0";
          return [function (t, r) {
            var n = v(this),
              i = f(t) ? undefined : d(t, b);
            return i ? o(i, t, n, r) : o(e, p(n), t, r);
          }, function (t, o) {
            var a = c(this),
              u = p(t);
            if ("string" == typeof o && -1 === O(o, i) && -1 === O(o, "$<")) {
              var f = r(e, a, u, o);
              if (f.done) return f.value;
            }
            var v = s(o);
            v || (o = p(o));
            var d,
              b = a.global;
            b && (d = a.unicode, a.lastIndex = 0);
            for (var j, _ = []; null !== (j = m(a, u)) && (S(_, j), b);) {
              "" === p(j[0]) && (a.lastIndex = y(u, h(a.lastIndex), d));
            }
            for (var k, P = "", A = 0, T = 0; T < _.length; T++) {
              for (var I, R = p((j = _[T])[0]), N = w(x(l(j.index), u.length), 0), F = [], C = 1; C < j.length; C++) S(F, undefined === (k = j[C]) ? k : String(k));
              var U = j.groups;
              if (v) {
                var G = E([R], F, N, u);
                undefined !== U && S(G, U), I = p(n(o, undefined, G));
              } else I = g(R, u, N, F, U, o);
              N >= A && (P += L(u, A, N) + I, A = N + R.length);
            }
            return P + L(u, A);
          }];
        }, !!u(function () {
          var t = /./;
          return t.exec = function () {
            var t = [];
            return t.groups = {
              a: "7"
            }, t;
          }, "7" !== "".replace(t, "$<a>");
        }) || !j || _);
      },
      8075: function (t, e, r) {
        "use strict";

        var n = r(1550),
          o = r(3282),
          i = r(9972),
          a = r(7707),
          u = r(6762),
          c = r(820),
          s = r(2755),
          f = r(6628),
          l = r(7771);
        o("search", function (t, e, r) {
          return [function (e) {
            var r = u(this),
              o = a(e) ? undefined : f(e, t);
            return o ? n(o, e, r) : new RegExp(e)[t](s(r));
          }, function (t) {
            var n = i(this),
              o = s(t),
              a = r(e, n, o);
            if (a.done) return a.value;
            var u = n.lastIndex;
            c(u, 0) || (n.lastIndex = 0);
            var f = l(n, o);
            return c(n.lastIndex, u) || (n.lastIndex = u), null === f ? -1 : f.index;
          }];
        });
      },
      8349: function (t, e, r) {
        "use strict";

        var n,
          o = r(2390),
          i = r(8717),
          a = r(10).f,
          u = r(9099),
          c = r(2755),
          s = r(4107),
          f = r(6762),
          l = r(187),
          h = r(99),
          p = i("".startsWith),
          v = i("".slice),
          y = Math.min,
          d = l("startsWith");
        o({
          target: "String",
          proto: true,
          forced: !!(h || d || (n = a(String.prototype, "startsWith"), !n || n.writable)) && !d
        }, {
          startsWith: function (t) {
            var e = c(f(this));
            s(t);
            var r = u(y(arguments.length > 1 ? arguments[1] : undefined, e.length)),
              n = c(t);
            return p ? p(e, n, r) : v(e, r, r + n.length) === n;
          }
        });
      },
      4838: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(9523);
        n({
          target: "String",
          proto: true,
          forced: r(5980)("sup")
        }, {
          sup: function () {
            return o(this, "sup", "", "");
          }
        });
      },
      9883: function (t, e, r) {
        "use strict";

        r(1012)("asyncIterator");
      },
      1693: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(7802),
          i = r(1550),
          a = r(6406),
          u = r(99),
          c = r(3877),
          s = r(4053),
          f = r(5306),
          l = r(4130),
          h = r(2075),
          p = r(9972),
          v = r(9405),
          y = r(3662),
          d = r(2755),
          g = r(9637),
          m = r(9464),
          b = r(1008),
          w = r(7397),
          x = r(2348),
          E = r(6855),
          S = r(10),
          O = r(7144),
          L = r(3872),
          j = r(1940),
          _ = r(7205),
          k = r(5023),
          P = r(9231),
          A = r(139),
          T = r(3421),
          I = r(6350),
          R = r(7936),
          N = r(4618),
          F = r(1012),
          C = r(652),
          U = r(3581),
          G = r(9930),
          M = r(6767).forEach,
          D = A("hidden"),
          B = "Symbol",
          H = "prototype",
          q = G.set,
          W = G.getterFor(B),
          $ = Object[H],
          Y = o.Symbol,
          V = Y && Y[H],
          z = o.RangeError,
          J = o.TypeError,
          K = o.QObject,
          X = S.f,
          Z = O.f,
          Q = x.f,
          tt = j.f,
          et = a([].push),
          rt = P("symbols"),
          nt = P("op-symbols"),
          ot = P("wks"),
          it = !K || !K[H] || !K[H].findChild,
          at = function (t, e, r) {
            var n = X($, e);
            n && delete $[e], Z(t, e, r), n && t !== $ && Z($, e, n);
          },
          ut = c && f(function () {
            return 7 !== m(Z({}, "a", {
              get: function () {
                return Z(this, "a", {
                  value: 7
                }).a;
              }
            })).a;
          }) ? at : Z,
          ct = function (t, e) {
            var r = rt[t] = m(V);
            return q(r, {
              type: B,
              tag: t,
              description: e
            }), c || (r.description = e), r;
          },
          st = function (t, e, r) {
            t === $ && st(nt, e, r), p(t);
            var n = y(e);
            return p(r), l(rt, n) ? (r.enumerable ? (l(t, D) && t[D][n] && (t[D][n] = false), r = m(r, {
              enumerable: g(0, false)
            })) : (l(t, D) || Z(t, D, g(1, {})), t[D][n] = true), ut(t, n, r)) : Z(t, n, r);
          },
          ft = function (t, e) {
            p(t);
            var r = v(e),
              n = b(r).concat(vt(r));
            return M(n, function (e) {
              c && !i(lt, r, e) || st(t, e, r[e]);
            }), t;
          },
          lt = function (t) {
            var e = y(t),
              r = i(tt, this, e);
            return !(this === $ && l(rt, e) && !l(nt, e)) && (!(r || !l(this, e) || !l(rt, e) || l(this, D) && this[D][e]) || r);
          },
          ht = function (t, e) {
            var r = v(t),
              n = y(e);
            if (r !== $ || !l(rt, n) || l(nt, n)) {
              var o = X(r, n);
              return !o || !l(rt, n) || l(r, D) && r[D][n] || (o.enumerable = true), o;
            }
          },
          pt = function (t) {
            var e = Q(v(t)),
              r = [];
            return M(e, function (t) {
              l(rt, t) || l(T, t) || et(r, t);
            }), r;
          },
          vt = function (t) {
            var e = t === $,
              r = Q(e ? nt : v(t)),
              n = [];
            return M(r, function (t) {
              !l(rt, t) || e && !l($, t) || et(n, rt[t]);
            }), n;
          };
        s || (Y = function () {
          if (h(V, this)) throw new J("Symbol is not a constructor");
          var t = arguments.length && undefined !== arguments[0] ? d(arguments[0]) : undefined,
            e = I(t),
            r = function (t) {
              var n = undefined === this ? o : this;
              n === $ && i(r, nt, t), l(n, D) && l(n[D], e) && (n[D][e] = false);
              var a = g(1, t);
              try {
                ut(n, e, a);
              } catch (t) {
                if (!(t instanceof z)) throw t;
                at(n, e, a);
              }
            };
          return c && it && ut($, e, {
            configurable: true,
            set: r
          }), ct(e, t);
        }, _(V = Y[H], "toString", function () {
          return W(this).tag;
        }), _(Y, "withoutSetter", function (t) {
          return ct(I(t), t);
        }), j.f = lt, O.f = st, L.f = ft, S.f = ht, w.f = x.f = pt, E.f = vt, N.f = function (t) {
          return ct(R(t), t);
        }, c && (k(V, "description", {
          configurable: true,
          get: function () {
            return W(this).description;
          }
        }), u || _($, "propertyIsEnumerable", lt, {
          unsafe: true
        }))), n({
          global: true,
          constructor: true,
          wrap: true,
          forced: !s,
          sham: !s
        }, {
          Symbol: Y
        }), M(b(ot), function (t) {
          F(t);
        }), n({
          target: B,
          stat: true,
          forced: !s
        }, {
          useSetter: function () {
            it = true;
          },
          useSimple: function () {
            it = false;
          }
        }), n({
          target: "Object",
          stat: true,
          forced: !s,
          sham: !c
        }, {
          create: function (t, e) {
            return undefined === e ? m(t) : ft(m(t), e);
          },
          defineProperty: st,
          defineProperties: ft,
          getOwnPropertyDescriptor: ht
        }), n({
          target: "Object",
          stat: true,
          forced: !s
        }, {
          getOwnPropertyNames: pt
        }), C(), U(Y, B), T[D] = true;
      },
      8690: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(3877),
          i = r(7802),
          a = r(6406),
          u = r(4130),
          c = r(5893),
          s = r(2075),
          f = r(2755),
          l = r(5023),
          h = r(779),
          p = i.Symbol,
          v = p && p.prototype;
        if (o && c(p) && (!("description" in v) || undefined !== p().description)) {
          var y = {},
            d = function () {
              var t = arguments.length < 1 || undefined === arguments[0] ? undefined : f(arguments[0]),
                e = s(v, this) ? new p(t) : undefined === t ? p() : p(t);
              return "" === t && (y[e] = true), e;
            };
          h(d, p), d.prototype = v, v.constructor = d;
          var g = "Symbol(description detection)" === String(p("description detection")),
            m = a(v.valueOf),
            b = a(v.toString),
            w = /^Symbol\((.*)\)[^)]+$/,
            x = a("".replace),
            E = a("".slice);
          l(v, "description", {
            configurable: true,
            get: function () {
              var t = m(this);
              if (u(y, t)) return "";
              var e = b(t),
                r = g ? E(e, 7, -1) : x(e, w, "$1");
              return "" === r ? undefined : r;
            }
          }), n({
            global: true,
            constructor: true,
            forced: true
          }, {
            Symbol: d
          });
        }
      },
      4681: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1570),
          i = r(4130),
          a = r(2755),
          u = r(9231),
          c = r(1999),
          s = u("string-to-symbol-registry"),
          f = u("symbol-to-string-registry");
        n({
          target: "Symbol",
          stat: true,
          forced: !c
        }, {
          for: function (t) {
            var e = a(t);
            if (i(s, e)) return s[e];
            var r = o("Symbol")(e);
            return s[e] = r, f[r] = e, r;
          }
        });
      },
      9228: function (t, e, r) {
        "use strict";

        r(1012)("iterator");
      },
      6187: function (t, e, r) {
        "use strict";

        r(1693), r(4681), r(864), r(8983), r(2487);
      },
      864: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(4130),
          i = r(103),
          a = r(5545),
          u = r(9231),
          c = r(1999),
          s = u("symbol-to-string-registry");
        n({
          target: "Symbol",
          stat: true,
          forced: !c
        }, {
          keyFor: function (t) {
            if (!i(t)) throw new TypeError(a(t) + " is not a symbol");
            if (o(s, t)) return s[t];
          }
        });
      },
      6031: function (t, e, r) {
        "use strict";

        var n = r(1012),
          o = r(652);
        n("toPrimitive"), o();
      },
      753: function (t, e, r) {
        "use strict";

        var n = r(1570),
          o = r(1012),
          i = r(3581);
        o("toStringTag"), i(n("Symbol"), "Symbol");
      },
      7134: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(3136),
          i = r(2823),
          a = r(5679),
          u = r(9251),
          c = function (t) {
            if (t && t.forEach !== a) try {
              u(t, "forEach", a);
            } catch (e) {
              t.forEach = a;
            }
          };
        for (var s in o) o[s] && c(n[s] && n[s].prototype);
        c(i);
      },
      1431: function (t, e, r) {
        "use strict";

        var n = r(7802),
          o = r(3136),
          i = r(2823),
          a = r(3227),
          u = r(9251),
          c = r(7936),
          s = c("iterator"),
          f = c("toStringTag"),
          l = a.values,
          h = function (t, e) {
            if (t) {
              if (t[s] !== l) try {
                u(t, s, l);
              } catch (e) {
                t[s] = l;
              }
              if (t[f] || u(t, f, e), o[e]) for (var r in a) if (t[r] !== a[r]) try {
                u(t, r, a[r]);
              } catch (e) {
                t[r] = a[r];
              }
            }
          };
        for (var p in o) h(n[p] && n[p].prototype, p);
        h(i, "DOMTokenList");
      },
      9280: function (t, e, r) {
        "use strict";

        r(3227);
        var n = r(2390),
          o = r(7802),
          i = r(1550),
          a = r(6406),
          u = r(3877),
          c = r(506),
          s = r(7205),
          f = r(5023),
          l = r(9990),
          h = r(3581),
          p = r(3691),
          v = r(9930),
          y = r(9064),
          d = r(5893),
          g = r(4130),
          m = r(5898),
          b = r(5683),
          w = r(9972),
          x = r(5287),
          E = r(2755),
          S = r(9464),
          O = r(9637),
          L = r(3159),
          j = r(5536),
          _ = r(4160),
          k = r(7443),
          P = r(7936),
          A = r(8377),
          T = P("iterator"),
          I = "URLSearchParams",
          R = I + "Iterator",
          N = v.set,
          F = v.getterFor(I),
          C = v.getterFor(R),
          U = Object.getOwnPropertyDescriptor,
          G = function (t) {
            if (!u) return o[t];
            var e = U(o, t);
            return e && e.value;
          },
          M = G("fetch"),
          D = G("Request"),
          B = G("Headers"),
          H = D && D.prototype,
          q = B && B.prototype,
          W = o.RegExp,
          $ = o.TypeError,
          Y = o.decodeURIComponent,
          V = o.encodeURIComponent,
          z = a("".charAt),
          J = a([].join),
          K = a([].push),
          X = a("".replace),
          Z = a([].shift),
          Q = a([].splice),
          tt = a("".split),
          et = a("".slice),
          rt = /\+/g,
          nt = Array(4),
          ot = function (t) {
            return nt[t - 1] || (nt[t - 1] = W("((?:%[\\da-f]{2}){" + t + "})", "gi"));
          },
          it = function (t) {
            try {
              return Y(t);
            } catch (e) {
              return t;
            }
          },
          at = function (t) {
            var e = X(t, rt, " "),
              r = 4;
            try {
              return Y(e);
            } catch (t) {
              for (; r;) e = X(e, ot(r--), it);
              return e;
            }
          },
          ut = /[!'()~]|%20/g,
          ct = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
          },
          st = function (t) {
            return ct[t];
          },
          ft = function (t) {
            return X(V(t), ut, st);
          },
          lt = p(function (t, e) {
            N(this, {
              type: R,
              target: F(t).entries,
              index: 0,
              kind: e
            });
          }, I, function () {
            var t = C(this),
              e = t.target,
              r = t.index++;
            if (!e || r >= e.length) return t.target = undefined, _(undefined, true);
            var n = e[r];
            switch (t.kind) {
              case "keys":
                return _(n.key, false);
              case "values":
                return _(n.value, false);
            }
            return _([n.key, n.value], false);
          }, true),
          ht = function (t) {
            this.entries = [], this.url = null, undefined !== t && (x(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === z(t, 0) ? et(t, 1) : t : E(t)));
          };
        ht.prototype = {
          type: I,
          bindURL: function (t) {
            this.url = t, this.update();
          },
          parseObject: function (t) {
            var e,
              r,
              n,
              o,
              a,
              u,
              c,
              s = this.entries,
              f = j(t);
            if (f) for (r = (e = L(t, f)).next; !(n = i(r, e)).done;) {
              if (a = (o = L(w(n.value))).next, (u = i(a, o)).done || (c = i(a, o)).done || !i(a, o).done) throw new $("Expected sequence with length 2");
              K(s, {
                key: E(u.value),
                value: E(c.value)
              });
            } else for (var l in t) g(t, l) && K(s, {
              key: l,
              value: E(t[l])
            });
          },
          parseQuery: function (t) {
            if (t) for (var e, r, n = this.entries, o = tt(t, "&"), i = 0; i < o.length;) (e = o[i++]).length && (r = tt(e, "="), K(n, {
              key: at(Z(r)),
              value: at(J(r, "="))
            }));
          },
          serialize: function () {
            for (var t, e = this.entries, r = [], n = 0; n < e.length;) t = e[n++], K(r, ft(t.key) + "=" + ft(t.value));
            return J(r, "&");
          },
          update: function () {
            this.entries.length = 0, this.parseQuery(this.url.query);
          },
          updateURL: function () {
            this.url && this.url.update();
          }
        };
        var pt = function () {
            y(this, vt);
            var t = N(this, new ht(arguments.length > 0 ? arguments[0] : undefined));
            u || (this.size = t.entries.length);
          },
          vt = pt.prototype;
        if (l(vt, {
          append: function (t, e) {
            var r = F(this);
            k(arguments.length, 2), K(r.entries, {
              key: E(t),
              value: E(e)
            }), u || this.length++, r.updateURL();
          },
          delete: function (t) {
            for (var e = F(this), r = k(arguments.length, 1), n = e.entries, o = E(t), i = r < 2 ? undefined : arguments[1], a = undefined === i ? i : E(i), c = 0; c < n.length;) {
              var s = n[c];
              if (s.key !== o || undefined !== a && s.value !== a) c++;else if (Q(n, c, 1), undefined !== a) break;
            }
            u || (this.size = n.length), e.updateURL();
          },
          get: function (t) {
            var e = F(this).entries;
            k(arguments.length, 1);
            for (var r = E(t), n = 0; n < e.length; n++) if (e[n].key === r) return e[n].value;
            return null;
          },
          getAll: function (t) {
            var e = F(this).entries;
            k(arguments.length, 1);
            for (var r = E(t), n = [], o = 0; o < e.length; o++) e[o].key === r && K(n, e[o].value);
            return n;
          },
          has: function (t) {
            for (var e = F(this).entries, r = k(arguments.length, 1), n = E(t), o = r < 2 ? undefined : arguments[1], i = undefined === o ? o : E(o), a = 0; a < e.length;) {
              var u = e[a++];
              if (u.key === n && (undefined === i || u.value === i)) return true;
            }
            return false;
          },
          set: function (t, e) {
            var r = F(this);
            k(arguments.length, 1);
            for (var n, o = r.entries, i = false, a = E(t), c = E(e), s = 0; s < o.length; s++) (n = o[s]).key === a && (i ? Q(o, s--, 1) : (i = true, n.value = c));
            i || K(o, {
              key: a,
              value: c
            }), u || (this.size = o.length), r.updateURL();
          },
          sort: function () {
            var t = F(this);
            A(t.entries, function (t, e) {
              return t.key > e.key ? 1 : -1;
            }), t.updateURL();
          },
          forEach: function (t) {
            for (var e, r = F(this).entries, n = m(t, arguments.length > 1 ? arguments[1] : undefined), o = 0; o < r.length;) n((e = r[o++]).value, e.key, this);
          },
          keys: function () {
            return new lt(this, "keys");
          },
          values: function () {
            return new lt(this, "values");
          },
          entries: function () {
            return new lt(this, "entries");
          }
        }, {
          enumerable: true
        }), s(vt, T, vt.entries, {
          name: "entries"
        }), s(vt, "toString", function () {
          return F(this).serialize();
        }, {
          enumerable: true
        }), u && f(vt, "size", {
          get: function () {
            return F(this).entries.length;
          },
          configurable: true,
          enumerable: true
        }), h(pt, I), n({
          global: true,
          constructor: true,
          forced: !c
        }, {
          URLSearchParams: pt
        }), !c && d(B)) {
          var yt = a(q.has),
            dt = a(q.set),
            gt = function (t) {
              if (x(t)) {
                var e,
                  r = t.body;
                if (b(r) === I) return e = t.headers ? new B(t.headers) : new B(), yt(e, "content-type") || dt(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), S(t, {
                  body: O(0, E(r)),
                  headers: O(0, e)
                });
              }
              return t;
            };
          if (d(M) && n({
            global: true,
            enumerable: true,
            dontCallGetSet: true,
            forced: true
          }, {
            fetch: function (t) {
              return M(t, arguments.length > 1 ? gt(arguments[1]) : {});
            }
          }), d(D)) {
            var mt = function (t) {
              return y(this, H), new D(t, arguments.length > 1 ? gt(arguments[1]) : {});
            };
            H.constructor = mt, mt.prototype = H, n({
              global: true,
              constructor: true,
              dontCallGetSet: true,
              forced: true
            }, {
              Request: mt
            });
          }
        }
        t.exports = {
          URLSearchParams: pt,
          getState: F
        };
      },
      9875: function (t, e, r) {
        "use strict";

        var n = r(7205),
          o = r(6406),
          i = r(2755),
          a = r(7443),
          u = URLSearchParams,
          c = u.prototype,
          s = o(c.append),
          f = o(c.delete),
          l = o(c.forEach),
          h = o([].push),
          p = new u("a=1&a=2&b=3");
        p.delete("a", 1), p.delete("b", undefined), p + "" != "a=2" && n(c, "delete", function (t) {
          var e = arguments.length,
            r = e < 2 ? undefined : arguments[1];
          if (e && undefined === r) return f(this, t);
          var n = [];
          l(this, function (t, e) {
            h(n, {
              key: e,
              value: t
            });
          }), a(e, 1);
          for (var o, u = i(t), c = i(r), p = 0, v = 0, y = false, d = n.length; p < d;) o = n[p++], y || o.key === u ? (y = true, f(this, o.key)) : v++;
          for (; v < d;) (o = n[v++]).key === u && o.value === c || s(this, o.key, o.value);
        }, {
          enumerable: true,
          unsafe: true
        });
      },
      6819: function (t, e, r) {
        "use strict";

        var n = r(7205),
          o = r(6406),
          i = r(2755),
          a = r(7443),
          u = URLSearchParams,
          c = u.prototype,
          s = o(c.getAll),
          f = o(c.has),
          l = new u("a=1");
        !l.has("a", 2) && l.has("a", undefined) || n(c, "has", function (t) {
          var e = arguments.length,
            r = e < 2 ? undefined : arguments[1];
          if (e && undefined === r) return f(this, t);
          var n = s(this, t);
          a(e, 1);
          for (var o = i(r), u = 0; u < n.length;) if (n[u++] === o) return true;
          return false;
        }, {
          enumerable: true,
          unsafe: true
        });
      },
      2904: function (t, e, r) {
        "use strict";

        r(9280);
      },
      785: function (t, e, r) {
        "use strict";

        var n = r(3877),
          o = r(6406),
          i = r(5023),
          a = URLSearchParams.prototype,
          u = o(a.forEach);
        n && !("size" in a) && i(a, "size", {
          get: function () {
            var t = 0;
            return u(this, function () {
              t++;
            }), t;
          },
          configurable: true,
          enumerable: true
        });
      },
      6447: function (t, e, r) {
        "use strict";

        r(4011);
        var n,
          o = r(2390),
          i = r(3877),
          a = r(506),
          u = r(7802),
          c = r(5898),
          s = r(6406),
          f = r(7205),
          l = r(5023),
          h = r(9064),
          p = r(4130),
          v = r(3087),
          y = r(993),
          d = r(7665),
          g = r(8373).codeAt,
          m = r(716),
          b = r(2755),
          w = r(3581),
          x = r(7443),
          E = r(9280),
          S = r(9930),
          O = S.set,
          L = S.getterFor("URL"),
          j = E.URLSearchParams,
          _ = E.getState,
          k = u.URL,
          P = u.TypeError,
          A = u.parseInt,
          T = Math.floor,
          I = Math.pow,
          R = s("".charAt),
          N = s(/./.exec),
          F = s([].join),
          C = s(1..toString),
          U = s([].pop),
          G = s([].push),
          M = s("".replace),
          D = s([].shift),
          B = s("".split),
          H = s("".slice),
          q = s("".toLowerCase),
          W = s([].unshift),
          $ = "Invalid scheme",
          Y = "Invalid host",
          V = "Invalid port",
          z = /[a-z]/i,
          J = /[\d+-.a-z]/i,
          K = /\d/,
          X = /^0x/i,
          Z = /^[0-7]+$/,
          Q = /^\d+$/,
          tt = /^[\da-f]+$/i,
          et = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
          rt = /[\0\t\n\r #/:<>?@[\\\]^|]/,
          nt = /^[\u0000-\u0020]+/,
          ot = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
          it = /[\t\n\r]/g,
          at = function (t) {
            var e, r, n, o;
            if ("number" == typeof t) {
              for (e = [], r = 0; r < 4; r++) W(e, t % 256), t = T(t / 256);
              return F(e, ".");
            }
            if ("object" == typeof t) {
              for (e = "", n = function (t) {
                for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > r && (e = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
                return o > r && (e = n, r = o), e;
              }(t), r = 0; r < 8; r++) o && 0 === t[r] || (o && (o = false), n === r ? (e += r ? ":" : "::", o = true) : (e += C(t[r], 16), r < 7 && (e += ":")));
              return "[" + e + "]";
            }
            return t;
          },
          ut = {},
          ct = v({}, ut, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
          }),
          st = v({}, ct, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
          }),
          ft = v({}, st, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
          }),
          lt = function (t, e) {
            var r = g(t, 0);
            return r > 32 && r < 127 && !p(e, t) ? t : encodeURIComponent(t);
          },
          ht = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
          },
          pt = function (t, e) {
            var r;
            return 2 === t.length && N(z, R(t, 0)) && (":" === (r = R(t, 1)) || !e && "|" === r);
          },
          vt = function (t) {
            var e;
            return t.length > 1 && pt(H(t, 0, 2)) && (2 === t.length || "/" === (e = R(t, 2)) || "\\" === e || "?" === e || "#" === e);
          },
          yt = function (t) {
            return "." === t || "%2e" === q(t);
          },
          dt = {},
          gt = {},
          mt = {},
          bt = {},
          wt = {},
          xt = {},
          Et = {},
          St = {},
          Ot = {},
          Lt = {},
          jt = {},
          _t = {},
          kt = {},
          Pt = {},
          At = {},
          Tt = {},
          It = {},
          Rt = {},
          Nt = {},
          Ft = {},
          Ct = {},
          Ut = function (t, e, r) {
            var n,
              o,
              i,
              a = b(t);
            if (e) {
              if (o = this.parse(a)) throw new P(o);
              this.searchParams = null;
            } else {
              if (undefined !== r && (n = new Ut(r, true)), o = this.parse(a, null, n)) throw new P(o);
              (i = _(new j())).bindURL(this), this.searchParams = i;
            }
          };
        Ut.prototype = {
          type: "URL",
          parse: function (t, e, r) {
            var o,
              i,
              a,
              u,
              c,
              s = this,
              f = e || dt,
              l = 0,
              h = "",
              v = false,
              g = false,
              m = false;
            for (t = b(t), e || (s.scheme = "", s.username = "", s.password = "", s.host = null, s.port = null, s.path = [], s.query = null, s.fragment = null, s.cannotBeABaseURL = false, t = M(t, nt, ""), t = M(t, ot, "$1")), t = M(t, it, ""), o = y(t); l <= o.length;) {
              switch (i = o[l], f) {
                case dt:
                  if (!i || !N(z, i)) {
                    if (e) return $;
                    f = mt;
                    continue;
                  }
                  h += q(i), f = gt;
                  break;
                case gt:
                  if (i && (N(J, i) || "+" === i || "-" === i || "." === i)) h += q(i);else {
                    if (":" !== i) {
                      if (e) return $;
                      h = "", f = mt, l = 0;
                      continue;
                    }
                    if (e && (s.isSpecial() !== p(ht, h) || "file" === h && (s.includesCredentials() || null !== s.port) || "file" === s.scheme && !s.host)) return;
                    if (s.scheme = h, e) return void (s.isSpecial() && ht[s.scheme] === s.port && (s.port = null));
                    h = "", "file" === s.scheme ? f = Pt : s.isSpecial() && r && r.scheme === s.scheme ? f = bt : s.isSpecial() ? f = St : "/" === o[l + 1] ? (f = wt, l++) : (s.cannotBeABaseURL = true, G(s.path, ""), f = Nt);
                  }
                  break;
                case mt:
                  if (!r || r.cannotBeABaseURL && "#" !== i) return $;
                  if (r.cannotBeABaseURL && "#" === i) {
                    s.scheme = r.scheme, s.path = d(r.path), s.query = r.query, s.fragment = "", s.cannotBeABaseURL = true, f = Ct;
                    break;
                  }
                  f = "file" === r.scheme ? Pt : xt;
                  continue;
                case bt:
                  if ("/" !== i || "/" !== o[l + 1]) {
                    f = xt;
                    continue;
                  }
                  f = Ot, l++;
                  break;
                case wt:
                  if ("/" === i) {
                    f = Lt;
                    break;
                  }
                  f = Rt;
                  continue;
                case xt:
                  if (s.scheme = r.scheme, i === n) s.username = r.username, s.password = r.password, s.host = r.host, s.port = r.port, s.path = d(r.path), s.query = r.query;else if ("/" === i || "\\" === i && s.isSpecial()) f = Et;else if ("?" === i) s.username = r.username, s.password = r.password, s.host = r.host, s.port = r.port, s.path = d(r.path), s.query = "", f = Ft;else {
                    if ("#" !== i) {
                      s.username = r.username, s.password = r.password, s.host = r.host, s.port = r.port, s.path = d(r.path), s.path.length--, f = Rt;
                      continue;
                    }
                    s.username = r.username, s.password = r.password, s.host = r.host, s.port = r.port, s.path = d(r.path), s.query = r.query, s.fragment = "", f = Ct;
                  }
                  break;
                case Et:
                  if (!s.isSpecial() || "/" !== i && "\\" !== i) {
                    if ("/" !== i) {
                      s.username = r.username, s.password = r.password, s.host = r.host, s.port = r.port, f = Rt;
                      continue;
                    }
                    f = Lt;
                  } else f = Ot;
                  break;
                case St:
                  if (f = Ot, "/" !== i || "/" !== R(h, l + 1)) continue;
                  l++;
                  break;
                case Ot:
                  if ("/" !== i && "\\" !== i) {
                    f = Lt;
                    continue;
                  }
                  break;
                case Lt:
                  if ("@" === i) {
                    v && (h = "%40" + h), v = true, a = y(h);
                    for (var w = 0; w < a.length; w++) {
                      var x = a[w];
                      if (":" !== x || m) {
                        var E = lt(x, ft);
                        m ? s.password += E : s.username += E;
                      } else m = true;
                    }
                    h = "";
                  } else if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && s.isSpecial()) {
                    if (v && "" === h) return "Invalid authority";
                    l -= y(h).length + 1, h = "", f = jt;
                  } else h += i;
                  break;
                case jt:
                case _t:
                  if (e && "file" === s.scheme) {
                    f = Tt;
                    continue;
                  }
                  if (":" !== i || g) {
                    if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && s.isSpecial()) {
                      if (s.isSpecial() && "" === h) return Y;
                      if (e && "" === h && (s.includesCredentials() || null !== s.port)) return;
                      if (u = s.parseHost(h)) return u;
                      if (h = "", f = It, e) return;
                      continue;
                    }
                    "[" === i ? g = true : "]" === i && (g = false), h += i;
                  } else {
                    if ("" === h) return Y;
                    if (u = s.parseHost(h)) return u;
                    if (h = "", f = kt, e === _t) return;
                  }
                  break;
                case kt:
                  if (!N(K, i)) {
                    if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && s.isSpecial() || e) {
                      if ("" !== h) {
                        var S = A(h, 10);
                        if (S > 65535) return V;
                        s.port = s.isSpecial() && S === ht[s.scheme] ? null : S, h = "";
                      }
                      if (e) return;
                      f = It;
                      continue;
                    }
                    return V;
                  }
                  h += i;
                  break;
                case Pt:
                  if (s.scheme = "file", "/" === i || "\\" === i) f = At;else {
                    if (!r || "file" !== r.scheme) {
                      f = Rt;
                      continue;
                    }
                    switch (i) {
                      case n:
                        s.host = r.host, s.path = d(r.path), s.query = r.query;
                        break;
                      case "?":
                        s.host = r.host, s.path = d(r.path), s.query = "", f = Ft;
                        break;
                      case "#":
                        s.host = r.host, s.path = d(r.path), s.query = r.query, s.fragment = "", f = Ct;
                        break;
                      default:
                        vt(F(d(o, l), "")) || (s.host = r.host, s.path = d(r.path), s.shortenPath()), f = Rt;
                        continue;
                    }
                  }
                  break;
                case At:
                  if ("/" === i || "\\" === i) {
                    f = Tt;
                    break;
                  }
                  r && "file" === r.scheme && !vt(F(d(o, l), "")) && (pt(r.path[0], true) ? G(s.path, r.path[0]) : s.host = r.host), f = Rt;
                  continue;
                case Tt:
                  if (i === n || "/" === i || "\\" === i || "?" === i || "#" === i) {
                    if (!e && pt(h)) f = Rt;else if ("" === h) {
                      if (s.host = "", e) return;
                      f = It;
                    } else {
                      if (u = s.parseHost(h)) return u;
                      if ("localhost" === s.host && (s.host = ""), e) return;
                      h = "", f = It;
                    }
                    continue;
                  }
                  h += i;
                  break;
                case It:
                  if (s.isSpecial()) {
                    if (f = Rt, "/" !== i && "\\" !== i) continue;
                  } else if (e || "?" !== i) {
                    if (e || "#" !== i) {
                      if (i !== n && (f = Rt, "/" !== i)) continue;
                    } else s.fragment = "", f = Ct;
                  } else s.query = "", f = Ft;
                  break;
                case Rt:
                  if (i === n || "/" === i || "\\" === i && s.isSpecial() || !e && ("?" === i || "#" === i)) {
                    if (".." === (c = q(c = h)) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (s.shortenPath(), "/" === i || "\\" === i && s.isSpecial() || G(s.path, "")) : yt(h) ? "/" === i || "\\" === i && s.isSpecial() || G(s.path, "") : ("file" === s.scheme && !s.path.length && pt(h) && (s.host && (s.host = ""), h = R(h, 0) + ":"), G(s.path, h)), h = "", "file" === s.scheme && (i === n || "?" === i || "#" === i)) for (; s.path.length > 1 && "" === s.path[0];) D(s.path);
                    "?" === i ? (s.query = "", f = Ft) : "#" === i && (s.fragment = "", f = Ct);
                  } else h += lt(i, st);
                  break;
                case Nt:
                  "?" === i ? (s.query = "", f = Ft) : "#" === i ? (s.fragment = "", f = Ct) : i !== n && (s.path[0] += lt(i, ut));
                  break;
                case Ft:
                  e || "#" !== i ? i !== n && ("'" === i && s.isSpecial() ? s.query += "%27" : s.query += "#" === i ? "%23" : lt(i, ut)) : (s.fragment = "", f = Ct);
                  break;
                case Ct:
                  i !== n && (s.fragment += lt(i, ct));
              }
              l++;
            }
          },
          parseHost: function (t) {
            var e, r, n;
            if ("[" === R(t, 0)) {
              if ("]" !== R(t, t.length - 1)) return Y;
              if (e = function (t) {
                var e,
                  r,
                  n,
                  o,
                  i,
                  a,
                  u,
                  c = [0, 0, 0, 0, 0, 0, 0, 0],
                  s = 0,
                  f = null,
                  l = 0,
                  h = function () {
                    return R(t, l);
                  };
                if (":" === h()) {
                  if (":" !== R(t, 1)) return;
                  l += 2, f = ++s;
                }
                for (; h();) {
                  if (8 === s) return;
                  if (":" !== h()) {
                    for (e = r = 0; r < 4 && N(tt, h());) e = 16 * e + A(h(), 16), l++, r++;
                    if ("." === h()) {
                      if (0 === r) return;
                      if (l -= r, s > 6) return;
                      for (n = 0; h();) {
                        if (o = null, n > 0) {
                          if (!("." === h() && n < 4)) return;
                          l++;
                        }
                        if (!N(K, h())) return;
                        for (; N(K, h());) {
                          if (i = A(h(), 10), null === o) o = i;else {
                            if (0 === o) return;
                            o = 10 * o + i;
                          }
                          if (o > 255) return;
                          l++;
                        }
                        c[s] = 256 * c[s] + o, 2 != ++n && 4 !== n || s++;
                      }
                      if (4 !== n) return;
                      break;
                    }
                    if (":" === h()) {
                      if (l++, !h()) return;
                    } else if (h()) return;
                    c[s++] = e;
                  } else {
                    if (null !== f) return;
                    l++, f = ++s;
                  }
                }
                if (null !== f) for (a = s - f, s = 7; 0 !== s && a > 0;) u = c[s], c[s--] = c[f + a - 1], c[f + --a] = u;else if (8 !== s) return;
                return c;
              }(H(t, 1, -1)), !e) return Y;
              this.host = e;
            } else if (this.isSpecial()) {
              if (t = m(t), N(et, t)) return Y;
              if (e = function (t) {
                var e,
                  r,
                  n,
                  o,
                  i,
                  a,
                  u,
                  c = B(t, ".");
                if (c.length && "" === c[c.length - 1] && c.length--, (e = c.length) > 4) return t;
                for (r = [], n = 0; n < e; n++) {
                  if ("" === (o = c[n])) return t;
                  if (i = 10, o.length > 1 && "0" === R(o, 0) && (i = N(X, o) ? 16 : 8, o = H(o, 8 === i ? 1 : 2)), "" === o) a = 0;else {
                    if (!N(10 === i ? Q : 8 === i ? Z : tt, o)) return t;
                    a = A(o, i);
                  }
                  G(r, a);
                }
                for (n = 0; n < e; n++) if (a = r[n], n === e - 1) {
                  if (a >= I(256, 5 - e)) return null;
                } else if (a > 255) return null;
                for (u = U(r), n = 0; n < r.length; n++) u += r[n] * I(256, 3 - n);
                return u;
              }(t), null === e) return Y;
              this.host = e;
            } else {
              if (N(rt, t)) return Y;
              for (e = "", r = y(t), n = 0; n < r.length; n++) e += lt(r[n], ut);
              this.host = e;
            }
          },
          cannotHaveUsernamePasswordPort: function () {
            return !this.host || this.cannotBeABaseURL || "file" === this.scheme;
          },
          includesCredentials: function () {
            return "" !== this.username || "" !== this.password;
          },
          isSpecial: function () {
            return p(ht, this.scheme);
          },
          shortenPath: function () {
            var t = this.path,
              e = t.length;
            !e || "file" === this.scheme && 1 === e && pt(t[0], true) || t.length--;
          },
          serialize: function () {
            var t = this,
              e = t.scheme,
              r = t.username,
              n = t.password,
              o = t.host,
              i = t.port,
              a = t.path,
              u = t.query,
              c = t.fragment,
              s = e + ":";
            return null !== o ? (s += "//", t.includesCredentials() && (s += r + (n ? ":" + n : "") + "@"), s += at(o), null !== i && (s += ":" + i)) : "file" === e && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + F(a, "/") : "", null !== u && (s += "?" + u), null !== c && (s += "#" + c), s;
          },
          setHref: function (t) {
            var e = this.parse(t);
            if (e) throw new P(e);
            this.searchParams.update();
          },
          getOrigin: function () {
            var t = this.scheme,
              e = this.port;
            if ("blob" === t) try {
              return new Gt(t.path[0]).origin;
            } catch (t) {
              return "null";
            }
            return "file" !== t && this.isSpecial() ? t + "://" + at(this.host) + (null !== e ? ":" + e : "") : "null";
          },
          getProtocol: function () {
            return this.scheme + ":";
          },
          setProtocol: function (t) {
            this.parse(b(t) + ":", dt);
          },
          getUsername: function () {
            return this.username;
          },
          setUsername: function (t) {
            var e = y(b(t));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.username = "";
              for (var r = 0; r < e.length; r++) this.username += lt(e[r], ft);
            }
          },
          getPassword: function () {
            return this.password;
          },
          setPassword: function (t) {
            var e = y(b(t));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.password = "";
              for (var r = 0; r < e.length; r++) this.password += lt(e[r], ft);
            }
          },
          getHost: function () {
            var t = this.host,
              e = this.port;
            return null === t ? "" : null === e ? at(t) : at(t) + ":" + e;
          },
          setHost: function (t) {
            this.cannotBeABaseURL || this.parse(t, jt);
          },
          getHostname: function () {
            var t = this.host;
            return null === t ? "" : at(t);
          },
          setHostname: function (t) {
            this.cannotBeABaseURL || this.parse(t, _t);
          },
          getPort: function () {
            var t = this.port;
            return null === t ? "" : b(t);
          },
          setPort: function (t) {
            this.cannotHaveUsernamePasswordPort() || ("" === (t = b(t)) ? this.port = null : this.parse(t, kt));
          },
          getPathname: function () {
            var t = this.path;
            return this.cannotBeABaseURL ? t[0] : t.length ? "/" + F(t, "/") : "";
          },
          setPathname: function (t) {
            this.cannotBeABaseURL || (this.path = [], this.parse(t, It));
          },
          getSearch: function () {
            var t = this.query;
            return t ? "?" + t : "";
          },
          setSearch: function (t) {
            "" === (t = b(t)) ? this.query = null : ("?" === R(t, 0) && (t = H(t, 1)), this.query = "", this.parse(t, Ft)), this.searchParams.update();
          },
          getSearchParams: function () {
            return this.searchParams.facade;
          },
          getHash: function () {
            var t = this.fragment;
            return t ? "#" + t : "";
          },
          setHash: function (t) {
            "" !== (t = b(t)) ? ("#" === R(t, 0) && (t = H(t, 1)), this.fragment = "", this.parse(t, Ct)) : this.fragment = null;
          },
          update: function () {
            this.query = this.searchParams.serialize() || null;
          }
        };
        var Gt = function (t) {
            var e = h(this, Mt),
              r = x(arguments.length, 1) > 1 ? arguments[1] : undefined,
              n = O(e, new Ut(t, false, r));
            i || (e.href = n.serialize(), e.origin = n.getOrigin(), e.protocol = n.getProtocol(), e.username = n.getUsername(), e.password = n.getPassword(), e.host = n.getHost(), e.hostname = n.getHostname(), e.port = n.getPort(), e.pathname = n.getPathname(), e.search = n.getSearch(), e.searchParams = n.getSearchParams(), e.hash = n.getHash());
          },
          Mt = Gt.prototype,
          Dt = function (t, e) {
            return {
              get: function () {
                return L(this)[t]();
              },
              set: e && function (t) {
                return L(this)[e](t);
              },
              configurable: true,
              enumerable: true
            };
          };
        if (i && (l(Mt, "href", Dt("serialize", "setHref")), l(Mt, "origin", Dt("getOrigin")), l(Mt, "protocol", Dt("getProtocol", "setProtocol")), l(Mt, "username", Dt("getUsername", "setUsername")), l(Mt, "password", Dt("getPassword", "setPassword")), l(Mt, "host", Dt("getHost", "setHost")), l(Mt, "hostname", Dt("getHostname", "setHostname")), l(Mt, "port", Dt("getPort", "setPort")), l(Mt, "pathname", Dt("getPathname", "setPathname")), l(Mt, "search", Dt("getSearch", "setSearch")), l(Mt, "searchParams", Dt("getSearchParams")), l(Mt, "hash", Dt("getHash", "setHash"))), f(Mt, "toJSON", function () {
          return L(this).serialize();
        }, {
          enumerable: true
        }), f(Mt, "toString", function () {
          return L(this).serialize();
        }, {
          enumerable: true
        }), k) {
          var Bt = k.createObjectURL,
            Ht = k.revokeObjectURL;
          Bt && f(Gt, "createObjectURL", c(Bt, k)), Ht && f(Gt, "revokeObjectURL", c(Ht, k));
        }
        w(Gt, "URL"), o({
          global: true,
          constructor: true,
          forced: !a,
          sham: !i
        }, {
          URL: Gt
        });
      },
      5735: function (t, e, r) {
        "use strict";

        r(6447);
      },
      1365: function (t, e, r) {
        "use strict";

        var n = r(2390),
          o = r(1550);
        n({
          target: "URL",
          proto: true,
          enumerable: true
        }, {
          toJSON: function () {
            return o(URL.prototype.toString, this);
          }
        });
      },
      4908: function (t) {
        "use strict";

        t.exports = JSON.parse('{"game-core":"1.34.1","audio-game":"1.34.1","audio-mode":"1.33.1","match-game":"1.34.1","tile-game":"1.34.1"}');
      }
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (undefined !== o) return o.exports;
    var i = e[n] = {
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, r), i.exports;
  }
  r.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  }(), function () {
    "use strict";

    r(6187), r(8690), r(9883), r(9228), r(753), r(1683), r(6266), r(4159), r(1270), r(3227), r(3517), r(1162), r(8646), r(8949), r(1632), r(7337), r(3096), r(9574), r(497), r(3908), r(1414), r(7666), r(9139), r(74), r(4134), r(4011), r(4838), r(7134), r(1431), r(8423);
    var t = r(9354),
      e = (r(1344), r(9034), r(4112), r(6614), r(2815), r(3127), r(8075), r(2904), r(9875), r(6819), r(785), function (t) {
        return Boolean(parseInt(t));
      }),
      n = function (t) {
        return function (t) {
          var r;
          if (!t.pk || !t.session || !t.r) throw new Error("Token data is missing required field(s)");
          var n = {
            surl: null !== (r = t.surl) && undefined !== r ? r : "",
            dm: !!t.dm && e(t.dm),
            skipverify: !!t.skipverify && e(t.skipverify),
            tfb: t.tfb ? parseInt(t.tfb) : 2e4,
            sup: !!t.sup && e(t.sup),
            dc: !!t.dc && e(t.dc),
            pk: t.pk,
            session: t.session,
            r: t.r,
            lang: t.lang
          };
          return t.durl && (n.durl = t.durl), t.lurl && (n.lurl = t.lurl), t.cdn_url && (n.cdn_url = t.cdn_url), t.smurl && (n.smurl = t.smurl), t.pl && (n.pl = parseInt(t.pl)), t.ag && (n.ag = parseInt(t.ag)), t.at && (n.at = parseInt(t.at)), t.atp && (n.atp = parseInt(t.atp)), n;
        }(function (t) {
          for (var e, r = t.split("+").join(" "), n = {}, o = /[?&]?([^=]+)=([^&]*)/g; e = o.exec(r);) n[decodeURIComponent(e[1])] = decodeURIComponent(e[2]);
          return n;
        }(t));
      };
    r(6626), r(1413);
    function o(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
          var n,
            o,
            i,
            a,
            u = [],
            c = true,
            s = false;
          try {
            if (i = (r = r.call(t)).next, 0 === e) {
              if (Object(r) !== r) return;
              c = false;
            } else for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = true);
          } catch (t) {
            s = true, o = t;
          } finally {
            try {
              if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return;
            } finally {
              if (s) throw o;
            }
          }
          return u;
        }
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return i(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function i(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var a = function (t, e) {
        var r = "__jsonp_" + Date.now();
        window[r] = function () {}, function (t, e, r) {
          var n = r ? Object.entries(r).map(function (t) {
              var e = o(t, 2),
                r = e[0],
                n = e[1];
              return "".concat(r, "=").concat(n);
            }).join("&") : "",
            i = document.createElement("script");
          i.src = "".concat(t, "?callback=").concat(e).concat(n ? "&".concat(n) : ""), document.head.appendChild(i), document.head.removeChild(i);
        }(t, r, e);
      },
      u = {
        proceed: [195, 13],
        up: [211, 203, 38],
        down: [212, 204, 40],
        right: [213, 206, 39],
        left: [214, 205, 37]
      },
      c = function (t) {
        return ["proceed", "down", "up", "left", "right"].reduce(function (e, r) {
          return u[r].forEach(function (t) {
            e[t] = r;
          }), null != t && t[r] && Array.isArray(t[r]) && t[r].forEach(function (t) {
            e[t] = r;
          }), e;
        }, {});
      },
      s = "game-core-frame",
      f = function (t) {
        var e,
          r = l();
        null == r || null === (e = r.contentWindow) || undefined === e || e.postMessage(t, "*");
      },
      l = function () {
        return document.querySelector("iframe#".concat(s));
      },
      h = (r(4901), r(5439), r(5486), r(9892), function (t) {
        return t[t.Default = 1] = "Default", t[t.ManualForce = 2] = "ManualForce", t[t.JSEventsNotTriggering = 10] = "JSEventsNotTriggering", t[t.GameLoadTimeExceed = 11] = "GameLoadTimeExceed", t[t.Blacklist = 20] = "Blacklist", t[t.LowFrameRate = 23] = "LowFrameRate", t[t.Error = 24] = "Error", t;
      }({}));
    function p(t, e) {
      var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (!r) {
        if (Array.isArray(t) || (r = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return v(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === r && t.constructor && (r = t.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(t);
          if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e);
        }(t)) || e && t && "number" == typeof t.length) {
          r && (t = r);
          var n = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return n >= t.length ? {
                done: true
              } : {
                done: false,
                value: t[n++]
              };
            },
            e: function (t) {
              throw t;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i,
        a = true,
        u = false;
      return {
        s: function () {
          r = r.call(t);
        },
        n: function () {
          var t = r.next();
          return a = t.done, t;
        },
        e: function (t) {
          u = true, i = t;
        },
        f: function () {
          try {
            a || null == r.return || r.return();
          } finally {
            if (u) throw i;
          }
        }
      };
    }
    function v(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var y = function () {
        return document.getElementById("verification-token");
      },
      d = function () {
        return document.getElementById("FunCaptcha-Token");
      },
      g = function () {
        var t,
          e,
          r,
          n = p(null !== (t = null === (e = "ArkoseEnforcement,FunCaptcha") ? undefined : e.split(",")) && undefined !== t ? t : ["EnforcementWrapper"]);
        try {
          for (n.s(); !(r = n.n()).done;) {
            var o = r.value,
              i = document.getElementById(o);
            if (i) return i;
          }
        } catch (t) {
          n.e(t);
        } finally {
          n.f();
        }
      },
      m = function (t) {
        var e = y();
        e && (e.value = t);
        var r = d();
        r && (r.value = t);
      },
      b = (r(6066), r(3370), r(1597), r(6028), function (t) {
        return t[t.Allow = 1] = "Allow", t[t.Blacklist = 2] = "Blacklist", t[t.Force = 3] = "Force", t;
      }({})),
      w = function () {
        return (t = navigator.userAgent.toLowerCase()).includes("edge/") && !t.includes("edg/");
        var t;
      };
    r(4690), r(8349);
    function x(t) {
      return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, x(t);
    }
    function E() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */E = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new I(n || []);
        return o(a, "_invoke", {
          value: k(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var S = Object.getPrototypeOf,
        O = S && S(S(R([])));
      O && O !== r && n.call(O, a) && (w = O);
      var L = b.prototype = g.prototype = Object.create(w);
      function j(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function _(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == x(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function k(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = P(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function P(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, P(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function A(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function T(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function I(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(A, this), this.reset(true);
      }
      function R(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(x(e) + " is not iterable");
      }
      return m.prototype = b, o(L, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(L), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, j(_.prototype), s(_.prototype, u, function () {
        return this;
      }), e.AsyncIterator = _, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new _(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, j(L), s(L, c, "Generator"), s(L, a, function () {
        return this;
      }), s(L, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = R, I.prototype = {
        constructor: I,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                T(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: R(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function S(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    var O = function (t, e) {
        return t.dm && t.durl ? t.durl : t.surl;
      },
      L = function () {
        var t = y() || d();
        if (t) {
          var e = t.getAttribute("value");
          if (e) return e.split("|").join("&");
        }
        return null;
      },
      j = function () {
        return r(4908);
      },
      _ = function (t, e, r, n) {
        return "".concat(t).concat("", "/fc/assets/ec-game-core/").concat(e, "/").concat(r, "/").concat(n);
      },
      k = function (t) {
        var e = undefined === document.createElement("script").noModule,
          r = window.location.search.includes("compat=true"),
          n = t.pl === b.Force,
          o = true;
        return null != window.crypto && (o = !window.crypto.subtle), e || r || n || o;
      },
      P = function (t) {
        var e = !!window.ae.compatibility_mode_enabled && !window.ae.force_standard_mode;
        return k(t) && e;
      },
      A = function (t) {
        var e = window.ae.compatibility_mode_enabled && window.ae.force_standard_mode;
        return k(t) && e;
      },
      T = function (t, e, r) {
        var o = "session=".concat(e),
          i = n("?".concat(o));
        r && (o += "&basePath=".concat(r));
        var a = P(i),
          u = j()["game-core"],
          c = _(t, "game-core", u, a ? "compat" : "standard");
        return "".concat(c, "/index.html?").concat(o);
      },
      I = function () {
        var t = document.getElementById("string-table");
        if (t) {
          var e = t.getAttribute("value");
          if (e) try {
            return JSON.parse(e);
          } catch (t) {
            return {};
          }
        }
        return {};
      },
      R = function () {
        var t = document.getElementById("pow-enabled");
        if (t) {
          var e = t.getAttribute("value");
          if (e) try {
            return "true" === e;
          } catch (t) {
            return false;
          }
        }
        return false;
      },
      N = function () {
        var t = document.getElementById("base-path");
        if (t) {
          var e = t.getAttribute("value");
          if (e) return function (t) {
            if (!/^[a-zA-Z0-9/_.-]+$/.test(t)) throw new Error("Invalid base path");
            return t.startsWith("/") || (t = "/".concat(t)), t.endsWith("/") && (t = t.replace(/\/+$/, "")), t;
          }(e);
        }
        return "";
      },
      F = function (t) {
        if ("string" != typeof t) return false;
        var e = t.match(/^(?:http|https):\/\/(\S+)$/);
        if (!e) return false;
        var r = e[1];
        return !!r && (/^localhost\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(r) || /^[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(r));
      },
      C = function () {
        var t,
          e = (t = E().mark(function t(e, r) {
            var n, o;
            return E().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return n = new Promise(function (t) {
                    return setTimeout(function () {
                      return t(null);
                    }, r);
                  }), t.next = 3, Promise.race([e, n]);
                case 3:
                  return o = t.sent, t.abrupt("return", o);
                case 5:
                case "end":
                  return t.stop();
              }
            }, t);
          }), function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                S(i, n, o, a, u, "next", t);
              }
              function u(t) {
                S(i, n, o, a, u, "throw", t);
              }
              a(undefined);
            });
          });
        return function (t, r) {
          return e.apply(this, arguments);
        };
      }(),
      U = function (t, e, r) {
        var n = "";
        return G(e, r.skipverify) && (n += "&skipverify=1"), "".concat(t, "/fc/api/nojs/?pkey=").concat(r.pk, "&litejs=1&fb_type=").concat(e, "&session=").concat(r.session, "&r=").concat(r.r, "&lang=").concat(r.lang).concat(n);
      },
      G = function (t, e) {
        return t === h.ManualForce || e;
      },
      M = function (t, e) {
        var r,
          n,
          o = I(),
          i = document.createElement("iframe");
        i.setAttribute("id", s), i.setAttribute("src", t), i.setAttribute("aria-label", null !== (r = o["meta.visual_challenge_frame_title"]) && undefined !== r ? r : "Visual Challenge"), i.setAttribute("title", null !== (n = o["meta.visual_challenge_frame_title"]) && undefined !== n ? n : "Visual Challenge"), i.setAttribute("frameborder", "0"), i.setAttribute("scrolling", "no"), i.style.width = "308px", i.style.height = "408px", i.style.borderStyle = "none", i.onload = e;
        var a = g();
        if (!a) throw new Error("Iframe wrapper could not be found.");
        a.innerHTML = "", a.appendChild(i);
      },
      D = function (t, e, r, n, o, i) {
        return function a(u) {
          var c;
          if (u.data && function (t) {
            for (var e, r = t.origin, n = "arkoselabs.com,funcaptcha.com".split(","), o = -1 !== n.map(function (t) {
                return "https://".concat(t);
              }).indexOf(r), i = false, a = 0; a < n.length; a++) new RegExp("\\." + n[a] + "$").exec(r) && (i = true);
            var u = document.getElementById(s),
              c = -1 !== (null == u || null === (e = u.getAttribute("src")) || undefined === e ? undefined : e.indexOf(r));
            return o || i || c;
          }(u)) {
            var l,
              p,
              v,
              y,
              d = u.data;
            try {
              "string" == typeof d && (d = JSON.parse(d));
            } catch (t) {}
            if ("string" == typeof d) switch (d) {
              case "session_timeout":
                window.removeEventListener(null !== (c = "FunCaptcha-Action") ? c : "Enforcement-Action", n), window.removeEventListener("message", a);
                break;
              case "js_ready":
                o(), window.clearTimeout(t);
                break;
              case "finished_loading_game":
                window.clearTimeout(t), H(e);
                break;
              case "focus_iframe":
                q();
                break;
              case "load_biometrics_settings":
                f({
                  message: "biometrics_settings",
                  data: {
                    mouse_biometrics: V("mouse_biometrics"),
                    touch_biometrics: V("touch_biometrics"),
                    keyboard_biometrics: V("keyboard_biometrics")
                  }
                });
            } else if ("msg" in d) switch (d.msg) {
              case "changeIframeSize":
                W(d.width, d.height);
                break;
              case "replace_fc":
                $(r, i, +d.data || h.Default);
                break;
              case "populate_nojs":
                m(d.data);
                break;
              case "offline_verify_status":
                l = d.data, v = (p = r).session, y = p.r, m(v + "|r=" + y + "|offline_verify=" + l);
                break;
              case "update_frame_attributes":
                B(d);
                break;
              case "proxy_keydown":
                var g = d.data,
                  b = new KeyboardEvent("keydown");
                Object.defineProperty(b, "keyIdentifier", {
                  get: function () {
                    return g.keyIdentifier;
                  }
                }), Object.defineProperty(b, "key", {
                  get: function () {
                    return g.key;
                  }
                }), document.body.dispatchEvent(b);
            }
          }
        };
      },
      B = function (t) {
        var e = l();
        e && t && t.data && (e.setAttribute("title", t.data.title), e.setAttribute("aria-label", t.data.title));
      },
      H = function (t) {
        t++;
        var e = document.querySelectorAll("iframe#".concat(s));
        e.length > 0 && e.forEach(function (e) {
          var r;
          null === (r = e.contentWindow) || undefined === r || r.postMessage({
            msg: "load_count",
            value: t
          }, "*");
        });
      },
      q = function () {
        var t = l();
        t && t.focus();
      },
      W = function (t, e) {
        var r = l();
        r && (t && (r.style.width = t + "px"), e && (r.style.height = e + "px"));
      },
      $ = function (t, e) {
        var r = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : h.Default;
        var n = U(O(t), r, t);
        M(n, e);
      },
      Y = function (t, e) {
        window.ae || (window.ae = {}), window.ae[t] = e;
      },
      V = function (t) {
        return window.ae || (window.ae = {}), window.ae[t];
      },
      z = function (t) {
        if (window) if (window.document.documentMode) {
          var e = document.createEvent("CustomEvent");
          e.initCustomEvent(t, false, false, undefined), window.dispatchEvent(e);
        } else {
          var r = new Event(t);
          window.dispatchEvent(r);
        }
      },
      J = function (t, e, r, n, o) {
        var i,
          a = function (t) {
            f({
              message: "Enforcement-Action",
              data: t.detail.action
            });
          },
          u = D(t, e, r, a, n, o);
        Y("arrowKeyBind", a), Y("receiveMessage", u), window.addEventListener(null !== (i = "FunCaptcha-Action") ? i : "Enforcement-Action", a), window.addEventListener("message", u);
      };
    r(6031), r(2663), r(5822), r(1908), r(6655), r(6225), r(4567), r(5735), r(1365), r(5916), r(8983);
    function K(t) {
      return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, K(t);
    }
    function X() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */X = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == K(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(K(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function Z(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function Q(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            Z(i, n, o, a, u, "next", t);
          }
          function u(t) {
            Z(i, n, o, a, u, "throw", t);
          }
          a(undefined);
        });
      };
    }
    var tt = function () {
        var t = Q(X().mark(function t(e, r, n) {
          var o, i, a;
          return X().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return o = nt(3), (i = new URL("".concat(e).concat("/setup"))).searchParams.append("session_token", r), n && i.searchParams.append("compat", "true"), t.next = 6, o(0, i.toString());
              case 6:
                return a = t.sent, t.abrupt("return", a);
              case 8:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e, r, n) {
          return t.apply(this, arguments);
        };
      }(),
      et = function () {
        var t = Q(X().mark(function t(e, r) {
          var n;
          return X().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return n = nt(3), t.abrupt("return", n(0, "".concat(e).concat("/check"), {
                  method: "post",
                  body: JSON.stringify(r)
                }));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e, r) {
          return t.apply(this, arguments);
        };
      }(),
      rt = "Bad Request",
      nt = function (t) {
        var e = function () {
          var r = Q(X().mark(function r(n, o, i) {
            var a, u, c;
            return X().wrap(function (r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  if (n || (n = 0), !(n >= t)) {
                    r.next = 3;
                    break;
                  }
                  throw new Error("Failed ".concat(t, " times"));
                case 3:
                  if (!((a = Math.min(100 * (n * n - 1), 5e3)) > 0)) {
                    r.next = 7;
                    break;
                  }
                  return r.next = 7, ot(a);
                case 7:
                  return r.prev = 7, r.next = 10, fetch(o, i);
                case 10:
                  if (400 !== (u = r.sent).status) {
                    r.next = 13;
                    break;
                  }
                  throw new Error(rt);
                case 13:
                  if (200 === u.status) {
                    r.next = 17;
                    break;
                  }
                  return r.next = 16, e(n + 1, o, i);
                case 16:
                  return r.abrupt("return", r.sent);
                case 17:
                  return r.next = 19, u.json();
                case 19:
                  return c = r.sent, r.abrupt("return", c);
                case 23:
                  if (r.prev = 23, r.t0 = r.catch(7), "object" !== K(r.t0) || !r.t0 || !("message" in r.t0) || r.t0.message !== rt) {
                    r.next = 27;
                    break;
                  }
                  throw r.t0;
                case 27:
                  return r.abrupt("return", e(n + 1, o, i));
                case 28:
                case "end":
                  return r.stop();
              }
            }, r, null, [[7, 23]]);
          }));
          return function (t, e, n) {
            return r.apply(this, arguments);
          };
        }();
        return e;
      },
      ot = function () {
        var t = Q(X().mark(function t(e) {
          return X().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.abrupt("return", new Promise(function (t) {
                  setTimeout(t, e);
                }));
              case 1:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e) {
          return t.apply(this, arguments);
        };
      }(),
      it = function (t) {
        return t.PASS = "pass", t.CHALLENGE = "challenge", t.BLOCK = "block", t.NEXT = "next", t;
      }({});
    function at(t) {
      return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, at(t);
    }
    function ut() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ut = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == at(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(at(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function ct(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function st(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            ct(i, n, o, a, u, "next", t);
          }
          function u(t) {
            ct(i, n, o, a, u, "throw", t);
          }
          a(undefined);
        });
      };
    }
    var ft = function (t) {
        return "".concat(t, "/pows");
      },
      lt = function (t) {
        return t.pl === b.Force || undefined === document.createElement("script").noModule || navigator.userAgent.includes("Edge/") || /iPhone OS (?:[1-9]|1[0-3])_|iPad.*OS (?:[1-9]|1[0-3])_|iPod.*OS (?:[1-9]|1[0-3])_/.test(navigator.userAgent);
      },
      ht = function () {
        var t = st(ut().mark(function t() {
          var e, r;
          return ut().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if ("undefined" != typeof Worker) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return", false);
              case 2:
                return t.prev = 2, e = new Worker(function () {
                  return (document.currentScript || document.querySelector('script[src*="game_core_bootstrap.js"]')).src;
                }().replace("game_core_bootstrap", "pow.game_core_bootstrap")), t.next = 7, new Promise(function (t) {
                  e.onmessage = function (e) {
                    t(e.data.supported);
                  }, e.onerror = function () {
                    t(false);
                  }, e.postMessage("start");
                });
              case 7:
                return r = t.sent, e.terminate(), t.abrupt("return", r);
              case 12:
                return t.prev = 12, t.t0 = t.catch(2), t.abrupt("return", false);
              case 15:
              case "end":
                return t.stop();
            }
          }, t, null, [[2, 12]]);
        }));
        return function () {
          return t.apply(this, arguments);
        };
      }(),
      pt = function () {
        var t = st(ut().mark(function t() {
          var e;
          return ut().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, ht();
              case 2:
                return e = t.sent, t.abrupt("return", !e);
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function () {
          return t.apply(this, arguments);
        };
      }();
    function vt(t) {
      return vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, vt(t);
    }
    function yt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), r.push.apply(r, n);
      }
      return r;
    }
    function dt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? yt(Object(r), true).forEach(function (e) {
          gt(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : yt(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
      }
      return t;
    }
    function gt(t, e, r) {
      var n;
      return n = function (t, e) {
        if ("object" != vt(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (undefined !== r) {
          var n = r.call(t, e || "default");
          if ("object" != vt(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }(e, "string"), (e = "symbol" == vt(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r, t;
    }
    function mt() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */mt = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == vt(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(vt(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function bt(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function wt(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            bt(i, n, o, a, u, "next", t);
          }
          function u(t) {
            bt(i, n, o, a, u, "throw", t);
          }
          a(undefined);
        });
      };
    }
    var xt = function () {
        var t = document.getElementById("pow-iframe");
        if (!t) throw new Error("#pow-iframe not found");
        if (!("contentWindow" in t) || !t.contentWindow) throw new Error("#pow-iframe is not an iframe");
        return t;
      },
      Et = function () {
        var t = function () {},
          e = function () {},
          r = new Promise(function (r, n) {
            t = r, e = n;
          });
        return {
          resolve: t,
          reject: e,
          promise: r
        };
      },
      St = function (t, e, r) {
        var n = Et(),
          o = n.resolve,
          i = n.reject,
          a = n.promise,
          u = setTimeout(function () {
            i("load_timeout");
          }, r);
        return window.addEventListener("message", function r(n) {
          n.origin === new URL(e).origin && (true === n.data["".concat(t, "Loaded")] ? (clearTimeout(u), window.removeEventListener("message", r), o()) : false === n.data["".concat(t, "Loaded")] && (console.error("Error from ".concat(t, " before loaded"), n.data.error), clearTimeout(u), window.removeEventListener("message", r), i("runtime_error")));
        }), a;
      },
      Ot = function (t) {
        try {
          var e;
          null === (e = t.parentNode) || undefined === e || e.removeChild(t);
        } catch (t) {}
      },
      Lt = function () {
        var t = wt(mt().mark(function t(e, r) {
          var n, o, i;
          return mt().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (e && "" !== e) {
                  t.next = 2;
                  break;
                }
                throw new Error("pow url is required");
              case 2:
                return (n = document.createElement("iframe")).id = "pow-iframe", n.style.visibility = r ? "hidden" : "visible", n.setAttribute("data-transparent", r.toString()), n.style.minWidth = "300px", n.style.maxWidth = "400px", n.style.width = "100vw", n.style.minHeight = "250px", n.style.maxHeight = "450px", n.style.height = "100vh", n.style.border = "none", n.setAttribute("src", e), n.onload = function () {
                  var t,
                    e = I();
                  null === (t = n.contentWindow) || undefined === t || t.postMessage({
                    type: "stringTable",
                    stringTable: e
                  }, "*");
                }, o = St("runner", e, 1e4), null == (i = g()) || i.appendChild(n), t.abrupt("return", o);
              case 19:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e, r) {
          return t.apply(this, arguments);
        };
      }(),
      jt = function (t, e, r) {
        t.contentWindow.postMessage({
          type: "setupData",
          setupData: {
            requestData: dt(dt({}, e), {}, {
              session_token: r
            })
          }
        }, e.url);
      },
      _t = function () {
        var t = wt(mt().mark(function t(e) {
          var r, n, o, i, a, u;
          return mt().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = Et(), n = r.resolve, o = r.reject, i = r.promise, 1e3, a = setTimeout(function () {
                  o({
                    failureReason: "work_timeout"
                  });
                }, e.timeout + 1e3), u = function t(r) {
                  r.origin === new URL(e.url).origin && "object" === vt(r.data) && (r.data.failureReason || r.data.pow_token) && (clearTimeout(a), "failureReason" in r.data && "string" == typeof r.data.failureReason && "" !== r.data.failureReason && (window.removeEventListener("message", t), o(r.data)), r.data.pow_token && (window.removeEventListener("message", t), n(r.data)));
                }, window.addEventListener("message", u), t.abrupt("return", i);
              case 6:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e) {
          return t.apply(this, arguments);
        };
      }(),
      kt = function () {
        var t = wt(mt().mark(function t(e, r, n, o, i) {
          var a, u, c, s, f;
          return mt().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return a = {
                  session_token: r
                }, t.prev = 1, t.next = 4, tt(e, r, n);
              case 4:
                u = t.sent, o(u), t.next = 12;
                break;
              case 8:
                return t.prev = 8, t.t0 = t.catch(1), a.fail_reason = "runtime_error", t.abrupt("return", et(e, a));
              case 12:
                return a.pow_token = u.pow_token, t.prev = 13, n && ((l = u).url = l.url.replace("standard", "compat")), t.next = 17, Lt(u.url, Boolean(u.transparent));
              case 17:
                t.next = 24;
                break;
              case 19:
                return t.prev = 19, t.t1 = t.catch(13), console.error(t.t1), a.fail_reason = t.t1, t.abrupt("return", et(e, a));
              case 24:
                return c = xt(), t.next = 27, i(c, Boolean(u.transparent));
              case 27:
                return window.postMessage("finished_loading_game", "*"), jt(c, u, r), t.prev = 29, t.next = 32, St("worker", u.url, 5e3);
              case 32:
                t.next = 39;
                break;
              case 34:
                return t.prev = 34, t.t2 = t.catch(29), console.error("Failed to load the worker script"), a.fail_reason = "load_timeout", t.abrupt("return", et(e, a));
              case 39:
                return t.prev = 39, t.next = 42, _t(u);
              case 42:
                a = t.sent, t.next = 48;
                break;
              case 45:
                t.prev = 45, t.t3 = t.catch(39), "object" === vt(t.t3) && t.t3 && "failureReason" in t.t3 && "string" == typeof t.t3.failureReason && (f = t.t3, (a = {}).session_token = r, a.pow_token = u.pow_token, a.fail_reason = f.failureReason, f.hashRate && (a.hash_rate = f.hashRate));
              case 48:
                return t.next = 50, et(e, a);
              case 50:
                (s = t.sent).action === it.NEXT && c.contentWindow.postMessage({
                  type: "setupData",
                  setupData: {
                    requestData: dt(dt({}, s), {}, {
                      session_token: r
                    })
                  }
                }, u.url);
              case 52:
                if (s.action === it.NEXT) {
                  t.next = 39;
                  break;
                }
              case 53:
                return t.abrupt("return", s);
              case 54:
              case "end":
                return t.stop();
            }
            var l;
          }, t, null, [[1, 8], [13, 19], [29, 34], [39, 45]]);
        }));
        return function (e, r, n, o, i) {
          return t.apply(this, arguments);
        };
      }();
    function Pt(t) {
      return Pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Pt(t);
    }
    function At() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */At = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == Pt(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(Pt(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function Tt(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function It(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            Tt(i, n, o, a, u, "next", t);
          }
          function u(t) {
            Tt(i, n, o, a, u, "throw", t);
          }
          a(undefined);
        });
      };
    }
    var Rt = function () {
        var t = It(At().mark(function t(e, r, n) {
          return At().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.abrupt("return", {
                  accessibilitySettings: V("accessibilitySettings"),
                  targetVersions: j(),
                  sessionData: {
                    token: e,
                    stringTable: I(),
                    styling: n.styleManagerStyling,
                    preloadingGame: true,
                    customStyle: n.styleSheet,
                    customAssets: n.assets,
                    isSkipVictoryScreenEnabled: false
                  },
                  gameData: r
                });
              case 1:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e, r, n) {
          return t.apply(this, arguments);
        };
      }(),
      Nt = function () {
        var t = It(At().mark(function t(e) {
          return At().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                f({
                  message: "accessibility_settings",
                  data: e.accessibilitySettings
                }), f({
                  message: "target_versions",
                  data: e.targetVersions
                }), f({
                  message: "assign_session_data",
                  data: e.sessionData
                }), e.gameData ? f({
                  message: "assign_game_data",
                  data: e.gameData
                }) : f({
                  message: "game_preload_error",
                  data: {
                    error: "GAME_SETUP_ERROR"
                  }
                });
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e) {
          return t.apply(this, arguments);
        };
      }(),
      Ft = function () {
        var t = It(At().mark(function t(e, r, n, o, i) {
          var a, u;
          return At().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return a = null, t.prev = 1, t.next = 4, r;
              case 4:
                a = t.sent, t.next = 10;
                break;
              case 7:
                t.prev = 7, t.t0 = t.catch(1), console.error("Failed to preload game data:", t.t0);
              case 10:
                return t.next = 12, Rt(e, a, {
                  styleSheet: n,
                  assets: o,
                  styleManagerStyling: i
                });
              case 12:
                return u = t.sent, t.next = 15, Nt(u);
              case 15:
              case "end":
                return t.stop();
            }
          }, t, null, [[1, 7]]);
        }));
        return function (e, r, n, o, i) {
          return t.apply(this, arguments);
        };
      }(),
      Ct = function (t, e, r, n, o, i) {
        var a = 0,
          u = O(e);
        if (e.pl === b.Force && !window.ae.compatibility_mode_enabled) return J(0, 0, e, o, i), void M(U(u, h.Default, e), i);
        a = window.setTimeout(function () {
          M(U(u, h.JSEventsNotTriggering, e), i);
        }, e.tfb), J(a, 0, e, o, i);
        var c = function (t, e) {
            var r,
              n,
              o = e.height,
              i = e.width,
              a = I(),
              u = document.createElement("iframe");
            u.setAttribute("frameBorder", "0"), u.setAttribute("id", s), u.setAttribute("class", s), u.setAttribute("aria-label", null !== (r = a["meta.visual_challenge_frame_title"]) && undefined !== r ? r : "Visual Challenge"), u.setAttribute("title", null !== (n = a["meta.visual_challenge_frame_title"]) && undefined !== n ? n : "Visual Challenge"), u.style.display = "none", u.style.minWidth = "300px", u.style.maxWidth = "".concat(i, "px"), u.style.width = "100vw", u.style.minHeight = "250px", u.style.maxHeight = "".concat(o, "px"), u.style.height = "100vh";
            var c = new URL(t).href;
            if (!F(c)) throw new Error("Invalid game-core Url");
            return u.setAttribute("src", t), u;
          }(r, n),
          f = g();
        return null == f || f.appendChild(c), a;
      };
    function Ut(t) {
      return Ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Ut(t);
    }
    function Gt(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, Mt(n.key), n);
      }
    }
    function Mt(t) {
      var e = function (t, e) {
        if ("object" != Ut(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (undefined !== r) {
          var n = r.call(t, e || "default");
          if ("object" != Ut(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }(t, "string");
      return "symbol" == Ut(e) ? e : e + "";
    }
    var Dt = function () {
        return t = function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.hasRequestedUI = false, this.isEnabled = true;
        }, (e = [{
          key: "enable",
          value: function () {
            this.isEnabled = true;
          }
        }, {
          key: "disable",
          value: function () {
            this.isEnabled = false;
          }
        }, {
          key: "notify",
          value: function () {
            !this.hasRequestedUI && this.isEnabled && (z("fc_shown"), this.hasRequestedUI = true);
          }
        }]) && Gt(t.prototype, e), r && Gt(t, r), Object.defineProperty(t, "prototype", {
          writable: false
        }), t;
        var t, e, r;
      }(),
      Bt = function (t) {
        try {
          var e = xt();
          if (!Ht(e)) throw new Error("POW iframe is not visible");
          e.contentWindow.postMessage({
            type: "error",
            error: t.error
          }, "*"), window.postMessage({
            type: "warn",
            payload: t
          }, "*");
        } catch (e) {
          window.postMessage({
            type: "error",
            payload: t
          }, "*");
        }
      },
      Ht = function (t) {
        var e = t.getAttribute("data-transparent");
        return null === e && console.warn("POW iframe is missing the data-transparent attribute"), "false" === e;
      },
      qt = r(4188),
      Wt = r(1047);
    function $t(t) {
      return $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, $t(t);
    }
    function Yt() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Yt = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == $t(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError($t(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function Vt(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function zt(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            Vt(i, n, o, a, u, "next", t);
          }
          function u(t) {
            Vt(i, n, o, a, u, "throw", t);
          }
          a(undefined);
        });
      };
    }
    function Jt(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, Kt(n.key), n);
      }
    }
    function Kt(t) {
      var e = function (t, e) {
        if ("object" != $t(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (undefined !== r) {
          var n = r.call(t, e || "default");
          if ("object" != $t(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }(t, "string");
      return "symbol" == $t(e) ? e : e + "";
    }
    var Xt = function () {
      return e = function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.hostUrl = e;
      }, r = [{
        key: "getECURL",
        value: function () {
          return this.hostUrl;
        }
      }, {
        key: "callECApi",
        value: function (t, e) {
          var r = e.data,
            n = (0, Wt.u)();
          e.disableCookies || (document.cookie = "timestamp=".concat(n, ";path=/;secure;samesite=none"));
          var o = {
              Accept: "*/*",
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              "X-NewRelic-Timestamp": n
            },
            i = this.getECURL(),
            a = new URLSearchParams(r).toString(),
            u = function () {
              var t = zt(Yt().mark(function t(e, r, n) {
                var o;
                return Yt().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0, t.next = 3, window.fetch(e, r);
                    case 3:
                      if ((o = t.sent).ok) {
                        t.next = 6;
                        break;
                      }
                      throw new Error("Request failed with status " + o.status);
                    case 6:
                      return t.next = 8, o.json();
                    case 8:
                      return t.t0 = t.sent, t.abrupt("return", {
                        data: t.t0
                      });
                    case 12:
                      if (t.prev = 12, t.t1 = t.catch(0), 1 !== n) {
                        t.next = 16;
                        break;
                      }
                      throw t.t1;
                    case 16:
                      return t.abrupt("return", u(e, r, n - 1));
                    case 17:
                    case "end":
                      return t.stop();
                  }
                }, t, null, [[0, 12]]);
              }));
              return function (e, r, n) {
                return t.apply(this, arguments);
              };
            }();
          return u("".concat(i, "/fc/").concat(t), {
            method: "POST",
            headers: o,
            body: a
          }, 3);
        }
      }, {
        key: "createNewGame",
        value: (o = zt(Yt().mark(function e(r) {
          var n, o, i, a, u, c, s, f, l, h, p;
          return Yt().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = r.sessionToken, i = r.region, a = r.userPreferredSupportedLang, u = r.renderType, c = r.disableCookies, s = r.analyticsTier, f = r.apiBreakerVersion, l = r.isCompatibilityMode, h = {
                  token: o,
                  sid: i,
                  render_type: u,
                  lang: a,
                  isAudioGame: "false",
                  is_compatibility_mode: l ? "true" : "false"
                }, f && (h.apiBreakerVersion = f), s && (h.analytics_tier = s.toString()), e.next = 6, this.callECApi(t.f.GET_GAME, {
                  sessionToken: o,
                  data: h,
                  disableCookies: c
                });
              case 6:
                if (!(p = e.sent).data.error) {
                  e.next = 9;
                  break;
                }
                throw new Error(p.data.error);
              case 9:
                return e.abrupt("return", null !== (n = p.data) && undefined !== n ? n : {});
              case 10:
              case "end":
                return e.stop();
            }
          }, e, this);
        })), function (t) {
          return o.apply(this, arguments);
        })
      }], r && Jt(e.prototype, r), n && Jt(e, n), Object.defineProperty(e, "prototype", {
        writable: false
      }), e;
      var e, r, n, o;
    }();
    function Zt(t) {
      return Zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Zt(t);
    }
    function Qt() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Qt = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == Zt(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(Zt(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function te(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    N();
    var ee = function () {
        var t,
          e = (t = Qt().mark(function t(e) {
            var r, n;
            return Qt().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = O(e), t.next = 4, fetch("".concat(r, "/fc/init-load/?session_token=").concat(e.session)).catch(function (t) {
                    return console.error(t);
                  });
                case 4:
                  return n = new Xt(r), t.abrupt("return", n.createNewGame({
                    sessionToken: e.session,
                    region: e.r,
                    disableCookies: e.dc,
                    userPreferredSupportedLang: e.lang || "",
                    renderType: qt.y2.Canvas,
                    analyticsTier: e.at,
                    apiBreakerVersion: "green",
                    isCompatibilityMode: P(e)
                  }));
                case 6:
                case "end":
                  return t.stop();
              }
            }, t);
          }), function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                te(i, n, o, a, u, "next", t);
              }
              function u(t) {
                te(i, n, o, a, u, "throw", t);
              }
              a(undefined);
            });
          });
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
      re = function (t) {
        var e = I(),
          r = "".concat(t, "/compatModeErrorScreen.html?").concat(encodeURIComponent(e["meta.compat_mode_error_string"])),
          n = document.createElement("iframe");
        n.setAttribute("frameBorder", "0"), n.setAttribute("id", "".concat(s, "-error")), n.setAttribute("class", "".concat(s, "-error")), n.setAttribute("aria-label", "Failed to Load Compat Mode"), n.setAttribute("title", "compat-mode-error-screen"), n.style.minWidth = "300px", n.style.maxWidth = "450px", n.style.width = "100vw", n.style.minHeight = "250px", n.style.maxHeight = "450px", n.style.height = "100vh", n.style.border = "1px solid black";
        var o = new URL(r).href;
        if (!F(o)) throw new Error("Invalid Compat Error Screen URL");
        return n.setAttribute("src", r), n;
      },
      ne = (r(2509), function (t) {
        return new Promise(function (e, r) {
          var n = new FileReader();
          n.onloadend = function () {
            "string" == typeof n.result ? e(n.result) : r();
          }, n.onerror = r, n.readAsDataURL(t);
        });
      });
    function oe(t) {
      return oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, oe(t);
    }
    function ie(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
          var n,
            o,
            i,
            a,
            u = [],
            c = true,
            s = false;
          try {
            if (i = (r = r.call(t)).next, 0 === e) {
              if (Object(r) !== r) return;
              c = false;
            } else for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = true);
          } catch (t) {
            s = true, o = t;
          } finally {
            try {
              if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return;
            } finally {
              if (s) throw o;
            }
          }
          return u;
        }
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return ae(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ae(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function ae(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function ue(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), r.push.apply(r, n);
      }
      return r;
    }
    function ce(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ue(Object(r), true).forEach(function (e) {
          se(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
      }
      return t;
    }
    function se(t, e, r) {
      var n;
      return n = function (t, e) {
        if ("object" != oe(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (undefined !== r) {
          var n = r.call(t, e || "default");
          if ("object" != oe(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }(e, "string"), (e = "symbol" == oe(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r, t;
    }
    function fe() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */fe = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == oe(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(oe(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function le(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function he(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            le(i, n, o, a, u, "next", t);
          }
          function u(t) {
            le(i, n, o, a, u, "throw", t);
          }
          a(undefined);
        });
      };
    }
    var pe = function () {
        var t = he(fe().mark(function t(e) {
          var r, n;
          return fe().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, fetch(e, {
                  method: "get"
                });
              case 2:
                if (r = t.sent, !((n = r.status) < 200 || n >= 400)) {
                  t.next = 6;
                  break;
                }
                throw new Error('Failed to fetch text from "'.concat(e, '", status: ').concat(n));
              case 6:
                return t.abrupt("return", r.text());
              case 7:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e) {
          return t.apply(this, arguments);
        };
      }(),
      ve = function () {
        var t = he(fe().mark(function t(e) {
          var r, n;
          return fe().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, fetch(e, {
                  method: "get"
                });
              case 2:
                if (r = t.sent, !((n = r.status) < 200 || n >= 400)) {
                  t.next = 6;
                  break;
                }
                throw new Error('Failed to fetch blob from "'.concat(e, '", status: ').concat(n));
              case 6:
                return t.abrupt("return", r.blob());
              case 7:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e) {
          return t.apply(this, arguments);
        };
      }(),
      ye = function (t, e) {
        var r = t.map(function (t) {
            var r = t.style;
            if (!r || !r.id) return Promise.reject(new Error("Invalid style or missing style ID"));
            var n = "".concat(e, "/styles/").concat(r.id, ".css");
            return pe(n);
          }),
          n = t.reduce(function (t, e) {
            return e.assets && 0 !== Object.keys(e.assets).length ? ce(ce({}, t), e.assets) : t;
          }, {});
        return [r, Object.entries(n).map(function (t) {
          var r = ie(t, 2),
            n = r[0],
            o = r[1];
          if (!o) return Promise.reject(new Error("Invalid asset path for key: ".concat(n)));
          var i = "".concat(e, "/assets/").concat(o);
          return ve(i).then(function (t) {
            return {
              id: n,
              asset: t
            };
          });
        })];
      },
      de = function () {
        var t = he(fe().mark(function t(e, r) {
          var n, o, i, a, u, c, s, f, l, h;
          return fe().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return n = ye(r.styles, e), o = ie(n, 2), i = o[0], a = o[1], t.next = 3, C(Promise.all([Promise.allSettled(i), Promise.allSettled(a)]), 3e3);
              case 3:
                if (null !== (u = t.sent)) {
                  t.next = 7;
                  break;
                }
                return console.error("Timed out loading custom style"), t.abrupt("return", ["", []]);
              case 7:
                return c = ie(u, 2), s = c[0], f = c[1], l = s.filter(function (t) {
                  return "fulfilled" === t.status;
                }).map(function (t) {
                  return t.value;
                }).join("\n"), t.next = 11, Promise.all(f.filter(function (t) {
                  return "fulfilled" === t.status;
                }).map(function (t) {
                  return t.value;
                }).map(function () {
                  var t = he(fe().mark(function t(e) {
                    var r;
                    return fe().wrap(function (t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.prev = 0, t.next = 3, ne(e.asset);
                        case 3:
                          return r = t.sent, t.abrupt("return", {
                            id: e.id,
                            base64: r
                          });
                        case 7:
                          return t.prev = 7, t.t0 = t.catch(0), console.error("Invalid asset. Unable to base64 encode:", e.id), t.abrupt("return", null);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                    }, t, null, [[0, 7]]);
                  }));
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                }())).then(function (t) {
                  return t.filter(function (t) {
                    return null !== t;
                  });
                });
              case 11:
                return h = t.sent, t.abrupt("return", [l, h]);
              case 13:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function (e, r) {
          return t.apply(this, arguments);
        };
      }(),
      ge = function (t, e) {
        var r = t.smurl;
        if (!r) throw new Error("Style manager URL not found");
        if (function (t) {
          return t && "";
        }(e)) {
          var n = r.replace(/^https?:\/\/[^/]+/, "");
          r = "".concat(document.location.origin).concat(e).concat(n);
        }
        return r;
      },
      me = function () {
        var t,
          e,
          r,
          n,
          o,
          i,
          a = be();
        if (a) return e = [], r = (t = a).styles, n = t.iframe_width, o = t.iframe_height, i = t.disable_default_styling, r && Array.isArray(r) && (e = r), {
          styles: e,
          disableDefaultStyling: Boolean(i),
          iframeWidth: n || undefined,
          iframeHeight: o || undefined
        };
      },
      be = function () {
        var t = document.getElementById("style-manager-styling");
        if (t) {
          var e = t.getAttribute("value");
          if (e) try {
            return JSON.parse(e);
          } catch (t) {
            console.error(t);
          }
        }
        return null;
      },
      we = function (t) {
        return !!t && "" !== t && "default" !== t;
      },
      xe = function (t, e) {
        var r,
          n = null !== (r = null == e ? undefined : e.styles.length) && undefined !== r ? r : 0;
        if (n > 0 && function (t) {
          return !we(t) && !!w();
        }(t)) {
          var o,
            i,
            a = n - 1;
          return null !== (o = null == e || null === (i = e.styles[a]) || undefined === i ? undefined : i.theme) && undefined !== o ? o : null;
        }
        return null != t ? t : null;
      },
      Ee = function (t, e) {
        return we(e) ? t.filter(function (t) {
          return !t.theme || t.theme === e;
        }) : t;
      },
      Se = function (t, e) {
        var r = t.iframeWidth,
          n = t.iframeHeight,
          o = {
            matchKeyFail: []
          };
        return e.forEach(function (t) {
          t.iframeWidth && (r = t.iframeWidth), t.iframeHeight && (n = t.iframeHeight), t.layoutOrder && t.layoutOrder.matchKeyFail && (o.matchKeyFail = t.layoutOrder.matchKeyFail);
        }), {
          iframeWidth: r,
          iframeHeight: n,
          layoutOrder: o
        };
      };
    function Oe(t) {
      return Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Oe(t);
    }
    function Le() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Le = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == Oe(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(Oe(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function je(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
          var n,
            o,
            i,
            a,
            u = [],
            c = true,
            s = false;
          try {
            if (i = (r = r.call(t)).next, 0 === e) {
              if (Object(r) !== r) return;
              c = false;
            } else for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = true);
          } catch (t) {
            s = true, o = t;
          } finally {
            try {
              if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return;
            } finally {
              if (s) throw o;
            }
          }
          return u;
        }
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return _e(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _e(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function _e(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function ke(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function Pe(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, Ae(n.key), n);
      }
    }
    function Ae(t) {
      var e = function (t, e) {
        if ("object" != Oe(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (undefined !== r) {
          var n = r.call(t, e || "default");
          if ("object" != Oe(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }(t, "string");
      return "symbol" == Oe(e) ? e : e + "";
    }
    var Te = function () {
      return t = function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.styleManagerUrl = e, this.stylesheetAndAssetsPromise = null, this.style = null, this.styleSheet = null, this.assets = null, this.isLoading = false, this.hasLoaded = false, this.loadError = null;
      }, e = [{
        key: "beginLoad",
        value: function () {
          var t,
            e = me();
          if (!function (t, e) {
            return undefined !== t && !e;
          }(e, false)) return null;
          if (this.isLoading || this.hasLoaded) return this.style;
          var r,
            n,
            o,
            i,
            a,
            u,
            c,
            s = xe(null === (t = window.ae) || undefined === t ? undefined : t.styleTheme, e);
          return this.style = (n = s, o = (r = e).styles, i = r.iframeWidth, a = r.iframeHeight, u = Ee(Array.isArray(o) ? o : [], n), c = Se({
            iframeWidth: i,
            iframeHeight: a
          }, u), {
            styles: u,
            iframeWidth: c.iframeWidth,
            iframeHeight: c.iframeHeight,
            layoutOrder: c.layoutOrder
          }), this.isLoading = true, this.stylesheetAndAssetsPromise = de(this.styleManagerUrl, this.style), this.style;
        }
      }, {
        key: "finishLoad",
        value: (n = Le().mark(function t() {
          var e, r, n, o;
          return Le().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (this.stylesheetAndAssetsPromise) {
                  t.next = 2;
                  break;
                }
                throw new Error("Has not begun loading custom stylesheet and assets yet");
              case 2:
                if (!this.hasLoaded) {
                  t.next = 4;
                  break;
                }
                return t.abrupt("return", [this.styleSheet, this.assets]);
              case 4:
                return t.prev = 4, t.next = 7, this.stylesheetAndAssetsPromise;
              case 7:
                return e = t.sent, r = je(e, 2), n = r[0], o = r[1], this.styleSheet = n, this.assets = o, this.hasLoaded = true, this.loadError = null, t.abrupt("return", [this.styleSheet, this.assets]);
              case 18:
                throw t.prev = 18, t.t0 = t.catch(4), this.loadError = t.t0, this.loadError;
              case 22:
                return t.prev = 22, this.isLoading = false, t.finish(22);
              case 25:
              case "end":
                return t.stop();
            }
          }, t, this, [[4, 18, 22, 25]]);
        }), o = function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(t, e);
            function a(t) {
              ke(i, r, o, a, u, "next", t);
            }
            function u(t) {
              ke(i, r, o, a, u, "throw", t);
            }
            a(undefined);
          });
        }, function () {
          return o.apply(this, arguments);
        })
      }], e && Pe(t.prototype, e), r && Pe(t, r), Object.defineProperty(t, "prototype", {
        writable: false
      }), t;
      var t, e, r, n, o;
    }();
    function Ie(t) {
      return Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Ie(t);
    }
    function Re() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Re = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }), t[e];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var i = e && e.prototype instanceof g ? e : g,
          a = Object.create(i.prototype),
          u = new A(n || []);
        return o(a, "_invoke", {
          value: j(t, r, u)
        }), a;
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = f;
      var h = "suspendedStart",
        p = "suspendedYield",
        v = "executing",
        y = "completed",
        d = {};
      function g() {}
      function m() {}
      function b() {}
      var w = {};
      s(w, a, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(T([])));
      E && E !== r && n.call(E, a) && (w = E);
      var S = b.prototype = g.prototype = Object.create(w);
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(t, e) {
        function r(o, i, a, u) {
          var c = l(t[o], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == Ie(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
              r("next", t, a, u);
            }, function (t) {
              r("throw", t, a, u);
            }) : e.resolve(f).then(function (t) {
              s.value = t, a(s);
            }, function (t) {
              return r("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, n) {
            function o() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return i = i ? i.then(o, o) : o();
          }
        });
      }
      function j(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === v) throw Error("Generator is already running");
          if (o === y) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: true
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = _(u, n);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = y, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = v;
            var s = l(e, r, n);
            if ("normal" === s.type) {
              if (o = n.done ? y : p, s.arg === d) continue;
              return {
                value: s.arg,
                done: n.done
              };
            }
            "throw" === s.type && (o = y, n.method = "throw", n.arg = s.arg);
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d);
      }
      function k(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function A(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(k, this), this.reset(true);
      }
      function T(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = false, r;
                return r.value = t, r.done = true, r;
              };
            return i.next = i;
          }
        }
        throw new TypeError(Ie(e) + " is not iterable");
      }
      return m.prototype = b, o(S, "constructor", {
        value: b,
        configurable: true
      }), o(b, "constructor", {
        value: m,
        configurable: true
      }), m.displayName = s(b, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, O(L.prototype), s(L.prototype, u, function () {
        return this;
      }), e.AsyncIterator = L, e.async = function (t, r, n, o, i) {
        undefined === i && (i = Promise);
        var a = new L(f(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, O(S), s(S, c, "Generator"), s(S, a, function () {
        return this;
      }), s(S, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = false, t;
          }
          return t.done = true, t;
        };
      }, e.values = T, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = true;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return u.type = "throw", u.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                s = n.call(a, "finallyLoc");
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, true);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: T(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), d;
        }
      }, e;
    }
    function Ne(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
          var n,
            o,
            i,
            a,
            u = [],
            c = true,
            s = false;
          try {
            if (i = (r = r.call(t)).next, 0 === e) {
              if (Object(r) !== r) return;
              c = false;
            } else for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = true);
          } catch (t) {
            s = true, o = t;
          } finally {
            try {
              if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return;
            } finally {
              if (s) throw o;
            }
          }
          return u;
        }
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return Fe(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fe(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Fe(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function Ce(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function Ue(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            Ce(i, n, o, a, u, "next", t);
          }
          function u(t) {
            Ce(i, n, o, a, u, "throw", t);
          }
          a(undefined);
        });
      };
    }
    var Ge = N();
    Ue(Re().mark(function e() {
      var r, o, i, u, s, h, p, v, y, d, m, b, w, x, E, S, k, P, N, F, C, U, G, M, D, B, H, q, W;
      return Re().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = L()) {
              e.next = 3;
              break;
            }
            throw new Error("No token value found");
          case 3:
            if (o = n("?session=".concat(r)), (i = V("inject_script_url")) && (u = V("inject_script_integrity"), J = i, K = u, X = undefined, Z = undefined, X = document.getElementsByTagName("head")[0], (Z = document.createElement("script")).type = "text/javascript", Z.src = J, Z.async = true, K && (Z.crossOrigin = "anonymous", Z.integrity = K), X.appendChild(Z)), s = new Dt(), h = R(), p = O(o), !o.sup) {
              e.next = 16;
              break;
            }
            return z("fc_suppressed"), y = V("configData"), d = null == y || null === (v = y.siteData) || undefined === v || null === (v = v.location) || undefined === v ? undefined : v.origin, m = d && encodeURIComponent(d), a("".concat(p, "/fc/").concat(t.f.ANALYTICS), {
              category: "loaded",
              action: "game loaded",
              session_token: o.session,
              "data[public_key]": o.pk,
              "data[site]": m
            }), e.abrupt("return");
          case 16:
            if (b = new Te(ge(o, Ge)), !h) {
              e.next = 58;
              break;
            }
            if (e.prev = 18, w = ft(p), x = false, e.t0 = lt(o), e.t0) {
              e.next = 26;
              break;
            }
            return e.next = 25, pt();
          case 25:
            e.t0 = e.sent;
          case 26:
            if (!e.t0) {
              e.next = 28;
              break;
            }
            x = true;
          case 28:
            return E = function (t) {
              t.transparent ? s.disable() : (b.beginLoad(), s.enable());
            }, S = function () {
              var t = Ue(Re().mark(function t(e, r) {
                var n, o, i, a, u, c, f, l;
                return Re().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (i = I(), null === (n = e.contentWindow) || undefined === n || n.postMessage({
                        type: "stringTable",
                        stringTable: i
                      }, "*"), !r) {
                        t.next = 5;
                        break;
                      }
                      return null === (a = e.contentWindow) || undefined === a || a.postMessage({
                        type: "customStyle",
                        style: "",
                        assets: []
                      }, "*"), t.abrupt("return");
                    case 5:
                      return t.next = 7, b.finishLoad();
                    case 7:
                      u = t.sent, c = Ne(u, 2), f = c[0], l = c[1], null === (o = e.contentWindow) || undefined === o || o.postMessage({
                        type: "customStyle",
                        style: f,
                        assets: l
                      }, "*"), s.notify();
                    case 13:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
              return function (e, r) {
                return t.apply(this, arguments);
              };
            }(), e.prev = 30, e.next = 33, kt(w, o.session, x, E, S);
          case 33:
            k = e.sent, P = xt(), e.t1 = k.action, e.next = e.t1 === it.BLOCK ? 38 : e.t1 === it.CHALLENGE ? 42 : e.t1 === it.PASS ? 43 : 46;
            break;
          case 38:
            return window.postMessage("session_failed", "*"), window.postMessage({
              type: "session_failed",
              payload: {
                reason: "POW_FAILED"
              }
            }, "*"), Ot(P), e.abrupt("return");
          case 42:
            return e.abrupt("break", 46);
          case 43:
            return window.postMessage("complete", "*"), P.contentWindow.postMessage({
              type: "result",
              result: it.PASS
            }, "*"), e.abrupt("return");
          case 46:
            e.next = 52;
            break;
          case 48:
            return e.prev = 48, e.t2 = e.catch(30), Bt({
              error: "POW_ERROR",
              isCompatibilityMode: x
            }), e.abrupt("return");
          case 52:
            e.next = 58;
            break;
          case 54:
            return e.prev = 54, e.t3 = e.catch(18), window.postMessage("error", "*"), e.abrupt("return");
          case 58:
            if (s.enable(), N = ee(o), F = b.beginLoad(), C = function () {
              try {
                var t = xt();
                Ot(t);
              } catch (t) {}
            }, U = function () {
              C();
              var t = l();
              t && (t.style.display = "inline"), s.notify();
            }, G = function () {
              var t = Ue(Re().mark(function t() {
                var e, r, n, i;
                return Re().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, b.finishLoad();
                    case 2:
                      return e = t.sent, r = Ne(e, 2), n = r[0], i = r[1], t.next = 8, Ft(o, N, n, i, null != F ? F : undefined);
                    case 8:
                      U();
                    case 9:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
              return function () {
                return t.apply(this, arguments);
              };
            }(), M = {
              height: (null == ($ = null != F ? F : undefined) ? undefined : $.iframeHeight) || 450,
              width: (null == $ ? undefined : $.iframeWidth) || 400
            }, D = T(p, r, Ge), !A(o)) {
              e.next = 75;
              break;
            }
            return B = g(), H = j()["game-core"], q = _(p, "bootstrap", H, "standard"), W = re(q), null == B || B.appendChild(W), U(), window.postMessage("finished_loading_game", "*"), e.abrupt("return");
          case 75:
            Ct(0, o, D, M, G, U), Y("enableDirectionalInput", function (t) {
              var e;
              f({
                message: "enable_spatial_navigation",
                data: t
              }), null === (e = l()) || undefined === e || e.focus();
              var r = c(t);
              window.addEventListener("keydown", function (t) {
                r[t.keyCode] && f({
                  message: "Enforcement-Action",
                  data: "focus"
                });
              });
            });
          case 77:
          case "end":
            return e.stop();
        }
        var $, J, K, X, Z;
      }, e, null, [[18, 54], [30, 48]]);
    }))();
  }();
}();