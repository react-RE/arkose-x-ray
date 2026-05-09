/*! For license information please see main.3476dc949e20122fa446.js.LICENSE.txt */
(() => {
  "use strict";

  var e,
    t,
    n,
    r,
    o,
    i,
    u,
    a,
    s,
    _,
    l,
    c = {},
    f = [],
    p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    d = Array.isArray;
  function h(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function v(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function m(t, n, r) {
    var o,
      i,
      u,
      a = {};
    for (u in n) "key" == u ? o = n[u] : "ref" == u ? i = n[u] : a[u] = n[u];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? e.call(arguments, 2) : r), "function" == typeof t && null != t.defaultProps) for (u in t.defaultProps) undefined === a[u] && (a[u] = t.defaultProps[u]);
    return y(t, a, o, i, null);
  }
  function y(e, r, o, i, u) {
    var a = {
      type: e,
      props: r,
      key: o,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: undefined,
      __v: null == u ? ++n : u,
      __i: -1,
      __u: 0
    };
    return null == u && null != t.vnode && t.vnode(a), a;
  }
  function g(e) {
    return e.children;
  }
  function b(e, t) {
    this.props = e, this.context = t;
  }
  function w(e, t) {
    if (null == t) return e.__ ? w(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? w(e) : null;
  }
  function k(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
      return k(e);
    }
  }
  function E(e) {
    (!e.__d && (e.__d = true) && r.push(e) && !S.__r++ || o !== t.debounceRendering) && ((o = t.debounceRendering) || i)(S);
  }
  function S() {
    for (var e, n, o, i, a, s, _, l = 1; r.length;) r.length > l && r.sort(u), e = r.shift(), l = r.length, e.__d && (o = undefined, a = (i = (n = e).__v).__e, s = [], _ = [], n.__P && ((o = h({}, i)).__v = i.__v + 1, t.vnode && t.vnode(o), H(n.__P, o, i, n.__n, n.__P.namespaceURI, 32 & i.__u ? [a] : null, s, null == a ? w(i) : a, !!(32 & i.__u), _), o.__v = i.__v, o.__.__k[o.__i] = o, R(s, o, _), o.__e != a && k(o)));
    S.__r = 0;
  }
  function T(e, t, n, r, o, i, u, a, s, _, l) {
    var p,
      d,
      h,
      v,
      m,
      y,
      g = r && r.__k || f,
      b = t.length;
    for (s = x(n, t, g, s, b), p = 0; p < b; p++) null != (h = n.__k[p]) && (d = -1 === h.__i ? c : g[h.__i] || c, h.__i = p, y = H(e, h, d, o, i, u, a, s, _, l), v = h.__e, h.ref && d.ref != h.ref && (d.ref && I(d.ref, null, h), l.push(h.ref, h.__c || v, h)), null == m && null != v && (m = v), 4 & h.__u || d.__k === h.__k ? s = O(h, s, e) : "function" == typeof h.type && undefined !== y ? s = y : v && (s = v.nextSibling), h.__u &= -7);
    return n.__e = m, s;
  }
  function x(e, t, n, r, o) {
    var i,
      u,
      a,
      s,
      _,
      l = n.length,
      c = l,
      f = 0;
    for (e.__k = new Array(o), i = 0; i < o; i++) null != (u = t[i]) && "boolean" != typeof u && "function" != typeof u ? (s = i + f, (u = e.__k[i] = "string" == typeof u || "number" == typeof u || "bigint" == typeof u || u.constructor == String ? y(null, u, null, null, null) : d(u) ? y(g, {
      children: u
    }, null, null, null) : undefined === u.constructor && u.__b > 0 ? y(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u).__ = e, u.__b = e.__b + 1, a = null, -1 !== (_ = u.__i = P(u, n, s, c)) && (c--, (a = n[_]) && (a.__u |= 2)), null == a || null === a.__v ? (-1 == _ && (o > l ? f-- : o < l && f++), "function" != typeof u.type && (u.__u |= 4)) : _ != s && (_ == s - 1 ? f-- : _ == s + 1 ? f++ : (_ > s ? f-- : f++, u.__u |= 4))) : e.__k[i] = null;
    if (c) for (i = 0; i < l; i++) null != (a = n[i]) && !(2 & a.__u) && (a.__e == r && (r = w(a)), U(a, a));
    return r;
  }
  function O(e, t, n) {
    var r, o;
    if ("function" == typeof e.type) {
      for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = O(r[o], t, n));
      return t;
    }
    e.__e != t && (t && e.type && !n.contains(t) && (t = w(e)), n.insertBefore(e.__e, t || null), t = e.__e);
    do {
      t = t && t.nextSibling;
    } while (null != t && 8 == t.nodeType);
    return t;
  }
  function L(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (d(e) ? e.some(function (e) {
      L(e, t);
    }) : t.push(e)), t;
  }
  function P(e, t, n, r) {
    var o,
      i,
      u = e.key,
      a = e.type,
      s = t[n];
    if (null === s && null == e.key || s && u == s.key && a === s.type && !(2 & s.__u)) return n;
    if (r > (null == s || 2 & s.__u ? 0 : 1)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length;) {
      if (o >= 0) {
        if ((s = t[o]) && !(2 & s.__u) && u == s.key && a === s.type) return o;
        o--;
      }
      if (i < t.length) {
        if ((s = t[i]) && !(2 & s.__u) && u == s.key && a === s.type) return i;
        i++;
      }
    }
    return -1;
  }
  function N(e, t, n) {
    "-" == t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px";
  }
  function A(e, t, n, r, o) {
    var i;
    e: if ("style" == t) {
      if ("string" == typeof n) e.style.cssText = n;else {
        if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || N(e.style, t, "");
        if (n) for (t in n) r && n[t] === r[t] || N(e.style, t, n[t]);
      }
    } else if ("o" == t[0] && "n" == t[1]) i = t != (t = t.replace(a, "$1")), t = t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.t = r.t : (n.t = s, e.addEventListener(t, i ? l : _, i)) : e.removeEventListener(t, i ? l : _, i);else {
      if ("http://www.w3.org/2000/svg" == o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
      "function" == typeof n || (null == n || false === n && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
    }
  }
  function j(e) {
    return function (n) {
      if (this.l) {
        var r = this.l[n.type + e];
        if (null == n.u) n.u = s++;else if (n.u < r.t) return;
        return r(t.event ? t.event(n) : n);
      }
    };
  }
  function H(e, n, r, o, i, u, a, s, _, l) {
    var c,
      f,
      p,
      m,
      y,
      w,
      k,
      E,
      S,
      x,
      O,
      L,
      P,
      N,
      A,
      j,
      H,
      R = n.type;
    if (undefined !== n.constructor) return null;
    128 & r.__u && (_ = !!(32 & r.__u), u = [s = n.__e = r.__e]), (c = t.__b) && c(n);
    e: if ("function" == typeof R) try {
      if (E = n.props, S = "prototype" in R && R.prototype.render, x = (c = R.contextType) && o[c.__c], O = c ? x ? x.props.value : c.__ : o, r.__c ? k = (f = n.__c = r.__c).__ = f.__E : (S ? n.__c = f = new R(E, O) : (n.__c = f = new b(E, O), f.constructor = R, f.render = M), x && x.sub(f), f.props = E, f.state || (f.state = {}), f.context = O, f.__n = o, p = f.__d = true, f.__h = [], f._sb = []), S && null == f.__s && (f.__s = f.state), S && null != R.getDerivedStateFromProps && (f.__s == f.state && (f.__s = h({}, f.__s)), h(f.__s, R.getDerivedStateFromProps(E, f.__s))), m = f.props, y = f.state, f.__v = n, p) S && null == R.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), S && null != f.componentDidMount && f.__h.push(f.componentDidMount);else {
        if (S && null == R.getDerivedStateFromProps && E !== m && null != f.componentWillReceiveProps && f.componentWillReceiveProps(E, O), !f.__e && (null != f.shouldComponentUpdate && false === f.shouldComponentUpdate(E, f.__s, O) || n.__v == r.__v)) {
          for (n.__v != r.__v && (f.props = E, f.state = f.__s, f.__d = false), n.__e = r.__e, n.__k = r.__k, n.__k.some(function (e) {
            e && (e.__ = n);
          }), L = 0; L < f._sb.length; L++) f.__h.push(f._sb[L]);
          f._sb = [], f.__h.length && a.push(f);
          break e;
        }
        null != f.componentWillUpdate && f.componentWillUpdate(E, f.__s, O), S && null != f.componentDidUpdate && f.__h.push(function () {
          f.componentDidUpdate(m, y, w);
        });
      }
      if (f.context = O, f.props = E, f.__P = e, f.__e = false, P = t.__r, N = 0, S) {
        for (f.state = f.__s, f.__d = false, P && P(n), c = f.render(f.props, f.state, f.context), A = 0; A < f._sb.length; A++) f.__h.push(f._sb[A]);
        f._sb = [];
      } else do {
        f.__d = false, P && P(n), c = f.render(f.props, f.state, f.context), f.state = f.__s;
      } while (f.__d && ++N < 25);
      f.state = f.__s, null != f.getChildContext && (o = h(h({}, o), f.getChildContext())), S && !p && null != f.getSnapshotBeforeUpdate && (w = f.getSnapshotBeforeUpdate(m, y)), j = c, null != c && c.type === g && null == c.key && (j = D(c.props.children)), s = T(e, d(j) ? j : [j], n, r, o, i, u, a, s, _, l), f.base = n.__e, n.__u &= -161, f.__h.length && a.push(f), k && (f.__E = f.__ = null);
    } catch (e) {
      if (n.__v = null, _ || null != u) {
        if (e.then) {
          for (n.__u |= _ ? 160 : 128; s && 8 == s.nodeType && s.nextSibling;) s = s.nextSibling;
          u[u.indexOf(s)] = null, n.__e = s;
        } else for (H = u.length; H--;) v(u[H]);
      } else n.__e = r.__e, n.__k = r.__k;
      t.__e(e, n, r);
    } else null == u && n.__v == r.__v ? (n.__k = r.__k, n.__e = r.__e) : s = n.__e = C(r.__e, n, r, o, i, u, a, _, l);
    return (c = t.diffed) && c(n), 128 & n.__u ? undefined : s;
  }
  function R(e, n, r) {
    for (var o = 0; o < r.length; o++) I(r[o], r[++o], r[++o]);
    t.__c && t.__c(n, e), e.some(function (n) {
      try {
        e = n.__h, n.__h = [], e.some(function (e) {
          e.call(n);
        });
      } catch (e) {
        t.__e(e, n.__v);
      }
    });
  }
  function D(e) {
    return "object" != typeof e || null == e ? e : d(e) ? e.map(D) : h({}, e);
  }
  function C(n, r, o, i, u, a, s, _, l) {
    var f,
      p,
      h,
      m,
      y,
      g,
      b,
      k = o.props,
      E = r.props,
      S = r.type;
    if ("svg" == S ? u = "http://www.w3.org/2000/svg" : "math" == S ? u = "http://www.w3.org/1998/Math/MathML" : u || (u = "http://www.w3.org/1999/xhtml"), null != a) for (f = 0; f < a.length; f++) if ((y = a[f]) && "setAttribute" in y == !!S && (S ? y.localName == S : 3 == y.nodeType)) {
      n = y, a[f] = null;
      break;
    }
    if (null == n) {
      if (null == S) return document.createTextNode(E);
      n = document.createElementNS(u, S, E.is && E), _ && (t.__m && t.__m(r, a), _ = false), a = null;
    }
    if (null === S) k === E || _ && n.data === E || (n.data = E);else {
      if (a = a && e.call(n.childNodes), k = o.props || c, !_ && null != a) for (k = {}, f = 0; f < n.attributes.length; f++) k[(y = n.attributes[f]).name] = y.value;
      for (f in k) if (y = k[f], "children" == f) ;else if ("dangerouslySetInnerHTML" == f) h = y;else if (!(f in E)) {
        if ("value" == f && "defaultValue" in E || "checked" == f && "defaultChecked" in E) continue;
        A(n, f, null, y, u);
      }
      for (f in E) y = E[f], "children" == f ? m = y : "dangerouslySetInnerHTML" == f ? p = y : "value" == f ? g = y : "checked" == f ? b = y : _ && "function" != typeof y || k[f] === y || A(n, f, y, k[f], u);
      if (p) _ || h && (p.__html === h.__html || p.__html === n.innerHTML) || (n.innerHTML = p.__html), r.__k = [];else if (h && (n.innerHTML = ""), T("template" === r.type ? n.content : n, d(m) ? m : [m], r, o, i, "foreignObject" == S ? "http://www.w3.org/1999/xhtml" : u, a, s, a ? a[0] : o.__k && w(o, 0), _, l), null != a) for (f = a.length; f--;) v(a[f]);
      _ || (f = "value", "progress" == S && null == g ? n.removeAttribute("value") : undefined !== g && (g !== n[f] || "progress" == S && !g || "option" == S && g !== k[f]) && A(n, f, g, k[f], u), f = "checked", undefined !== b && b !== n[f] && A(n, f, b, k[f], u));
    }
    return n;
  }
  function I(e, n, r) {
    try {
      if ("function" == typeof e) {
        var o = "function" == typeof e.__u;
        o && e.__u(), o && null == n || (e.__u = e(n));
      } else e.current = n;
    } catch (e) {
      t.__e(e, r);
    }
  }
  function U(e, n, r) {
    var o, i;
    if (t.unmount && t.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || I(o, null, n)), null != (o = e.__c)) {
      if (o.componentWillUnmount) try {
        o.componentWillUnmount();
      } catch (e) {
        t.__e(e, n);
      }
      o.base = o.__P = null;
    }
    if (o = e.__k) for (i = 0; i < o.length; i++) o[i] && U(o[i], n, r || "function" != typeof e.type);
    r || v(e.__e), e.__c = e.__ = e.__e = undefined;
  }
  function M(e, t, n) {
    return this.constructor(e, n);
  }
  e = f.slice, t = {
    __e: function (e, t, n, r) {
      for (var o, i, u; t = t.__;) if ((o = t.__c) && !o.__) try {
        if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), u = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), u = o.__d), u) return o.__E = o;
      } catch (t) {
        e = t;
      }
      throw e;
    }
  }, n = 0, b.prototype.setState = function (e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this._sb.push(t), E(this));
  }, b.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = true, e && this.__h.push(e), E(this));
  }, b.prototype.render = g, r = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }, S.__r = 0, a = /(PointerCapture)$|Capture$/i, s = 0, _ = j(false), l = j(true);
  var G,
    F,
    W,
    q,
    $ = function (e) {
      return /^data:image\/(png|jpg|jpeg|gif|svg\+xml);base64,[A-Za-z0-9+/]+={0,2}$/.test(e);
    },
    B = 0,
    Z = [],
    V = t,
    z = V.__b,
    J = V.__r,
    X = V.diffed,
    Y = V.__c,
    K = V.unmount,
    Q = V.__;
  function ee(e, t) {
    V.__h && V.__h(F, e, B || t), B = 0;
    var n = F.__H || (F.__H = {
      __: [],
      __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function te(e) {
    return B = 1, function (e, t, n) {
      var r = ee(G++, 2);
      if (r.t = e, !r.__c && (r.__ = [n ? n(t) : ae(undefined, t), function (e) {
        var t = r.__N ? r.__N[0] : r.__[0],
          n = r.t(t, e);
        t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}));
      }], r.__c = F, !F.__f)) {
        var o = function (e, t, n) {
          if (!r.__c.__H) return true;
          var o = r.__c.__H.__.filter(function (e) {
            return !!e.__c;
          });
          if (o.every(function (e) {
            return !e.__N;
          })) return !i || i.call(this, e, t, n);
          var u = r.__c.props !== e;
          return o.forEach(function (e) {
            if (e.__N) {
              var t = e.__[0];
              e.__ = e.__N, e.__N = undefined, t !== e.__[0] && (u = true);
            }
          }), i && i.call(this, e, t, n) || u;
        };
        F.__f = true;
        var i = F.shouldComponentUpdate,
          u = F.componentWillUpdate;
        F.componentWillUpdate = function (e, t, n) {
          if (this.__e) {
            var r = i;
            i = undefined, o(e, t, n), i = r;
          }
          u && u.call(this, e, t, n);
        }, F.shouldComponentUpdate = o;
      }
      return r.__N || r.__;
    }(ae, e);
  }
  function ne() {
    for (var e; e = Z.shift();) if (e.__P && e.__H) try {
      e.__H.__h.forEach(ie), e.__H.__h.forEach(ue), e.__H.__h = [];
    } catch (t) {
      e.__H.__h = [], V.__e(t, e.__v);
    }
  }
  V.__b = function (e) {
    F = null, z && z(e);
  }, V.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Q && Q(e, t);
  }, V.__r = function (e) {
    J && J(e), G = 0;
    var t = (F = e.__c).__H;
    t && (W === F ? (t.__h = [], F.__h = [], t.__.forEach(function (e) {
      e.__N && (e.__ = e.__N), e.u = e.__N = undefined;
    })) : (t.__h.forEach(ie), t.__h.forEach(ue), t.__h = [], G = 0)), W = F;
  }, V.diffed = function (e) {
    X && X(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (1 !== Z.push(t) && q === V.requestAnimationFrame || ((q = V.requestAnimationFrame) || oe)(ne)), t.__H.__.forEach(function (e) {
      e.u && (e.__H = e.u), e.u = undefined;
    })), W = F = null;
  }, V.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(ie), e.__h = e.__h.filter(function (e) {
          return !e.__ || ue(e);
        });
      } catch (n) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }), t = [], V.__e(n, e.__v);
      }
    }), Y && Y(e, t);
  }, V.unmount = function (e) {
    K && K(e);
    var t,
      n = e.__c;
    n && n.__H && (n.__H.__.forEach(function (e) {
      try {
        ie(e);
      } catch (e) {
        t = e;
      }
    }), n.__H = undefined, t && V.__e(t, n.__v));
  };
  var re = "function" == typeof requestAnimationFrame;
  function oe(e) {
    var t,
      n = function () {
        clearTimeout(r), re && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    re && (t = requestAnimationFrame(n));
  }
  function ie(e) {
    var t = F,
      n = e.__c;
    "function" == typeof n && (e.__c = undefined, n()), F = t;
  }
  function ue(e) {
    var t = F;
    e.__c = e.__(), F = t;
  }
  function ae(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function se(e, t) {
    for (var n in e) if ("__source" !== n && !(n in t)) return true;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return true;
    return false;
  }
  function _e(e, t) {
    this.props = e, this.context = t;
  }
  (_e.prototype = new b()).isPureReactComponent = true, _e.prototype.shouldComponentUpdate = function (e, t) {
    return se(this.props, e) || se(this.state, t);
  };
  var le = t.__b;
  t.__b = function (e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), le && le(e);
  }, "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
  var ce = t.__e;
  t.__e = function (e, t, n, r) {
    if (e.then) for (var o, i = t; i = i.__;) if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
    ce(e, t, n, r);
  };
  var fe = t.unmount;
  function pe(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function (e) {
      "function" == typeof e.__c && e.__c();
    }), e.__c.__H = null), null != (e = function (e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function (e) {
      return pe(e, t, n);
    })), e;
  }
  function de(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function (e) {
      return de(e, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = true, e.__c.__P = n)), e;
  }
  function he() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function ve(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function me() {
    this.i = null, this.l = null;
  }
  t.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), fe && fe(e);
  }, (he.prototype = new b()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    null == r.o && (r.o = []), r.o.push(n);
    var o = ve(r.__v),
      i = false,
      u = function () {
        i || (i = true, n.__R = null, o ? o(a) : a());
      };
    n.__R = u;
    var a = function () {
      if (! --r.__u) {
        if (r.state.__a) {
          var e = r.state.__a;
          r.__v.__k[0] = de(e, e.__c.__P, e.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.o.pop();) t.forceUpdate();
      }
    };
    r.__u++ || 32 & t.__u || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), e.then(u, u);
  }, he.prototype.componentWillUnmount = function () {
    this.o = [];
  }, he.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = pe(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var o = t.__a && m(g, null, e.fallback);
    return o && (o.__u &= -33), [m(g, null, t.__a ? null : e.children), o];
  };
  var ye = function (e, t, n) {
    if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size)) for (n = e.i; n;) {
      for (; n.length > 3;) n.pop()();
      if (n[1] < n[0]) break;
      e.i = n = n[2];
    }
  };
  (me.prototype = new b()).__a = function (e) {
    var t = this,
      n = ve(t.__v),
      r = t.l.get(e);
    return r[0]++, function (o) {
      var i = function () {
        t.props.revealOrder ? (r.push(o), ye(t, e, r)) : o();
      };
      n ? n(i) : i();
    };
  }, me.prototype.render = function (e) {
    this.i = null, this.l = new Map();
    var t = L(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.l.set(t[n], this.i = [1, 0, this.i]);
    return e.children;
  }, me.prototype.componentDidUpdate = me.prototype.componentDidMount = function () {
    var e = this;
    this.l.forEach(function (t, n) {
      ye(e, n, t);
    });
  };
  var ge = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    be = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    we = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    ke = /[A-Z0-9]/g,
    Ee = "undefined" != typeof document,
    Se = function (e) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e);
    };
  b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
    Object.defineProperty(b.prototype, e, {
      configurable: true,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: true,
          writable: true,
          value: t
        });
      }
    });
  });
  var Te = t.event;
  function xe() {}
  function Oe() {
    return this.cancelBubble;
  }
  function Le() {
    return this.defaultPrevented;
  }
  t.event = function (e) {
    return Te && (e = Te(e)), e.persist = xe, e.isPropagationStopped = Oe, e.isDefaultPrevented = Le, e.nativeEvent = e;
  };
  var Pe = {
      enumerable: false,
      configurable: true,
      get: function () {
        return this.class;
      }
    },
    Ne = t.vnode;
  t.vnode = function (e) {
    "string" == typeof e.type && function (e) {
      var t = e.props,
        n = e.type,
        r = {},
        o = -1 === n.indexOf("-");
      for (var i in t) {
        var u = t[i];
        if (!("value" === i && "defaultValue" in t && null == u || Ee && "children" === i && "noscript" === n || "class" === i || "className" === i)) {
          var a = i.toLowerCase();
          "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && true === u ? u = "" : "translate" === a && "no" === u ? u = false : "o" === a[0] && "n" === a[1] ? "ondoubleclick" === a ? i = "ondblclick" : "onchange" !== a || "input" !== n && "textarea" !== n || Se(t.type) ? "onfocus" === a ? i = "onfocusin" : "onblur" === a ? i = "onfocusout" : we.test(i) && (i = a) : a = i = "oninput" : o && be.test(i) ? i = i.replace(ke, "-$&").toLowerCase() : null === u && (u = undefined), "oninput" === a && r[i = a] && (i = "oninputCapture"), r[i] = u;
        }
      }
      "select" == n && r.multiple && Array.isArray(r.value) && (r.value = L(t.children).forEach(function (e) {
        e.props.selected = -1 != r.value.indexOf(e.props.value);
      })), "select" == n && null != r.defaultValue && (r.value = L(t.children).forEach(function (e) {
        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value;
      })), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", Pe)) : (t.className && !t.class || t.class && t.className) && (r.class = r.className = t.className), e.props = r;
    }(e), e.$$typeof = ge, Ne && Ne(e);
  };
  var Ae = t.__r;
  t.__r = function (e) {
    Ae && Ae(e), e.__c;
  };
  var je = t.diffed;
  t.diffed = function (e) {
    je && je(e);
    var t = e.props,
      n = e.__e;
    null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value);
  };
  var He = 0;
  function Re(e, n, r, o, i, u) {
    n || (n = {});
    var a,
      s,
      _ = n;
    if ("ref" in _) for (s in _ = {}, n) "ref" == s ? a = n[s] : _[s] = n[s];
    var l = {
      type: e,
      props: _,
      key: r,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: undefined,
      __v: --He,
      __i: -1,
      __u: 0,
      __source: i,
      __self: u
    };
    if ("function" == typeof e && (a = e.defaultProps)) for (s in a) undefined === _[s] && (_[s] = a[s]);
    return t.vnode && t.vnode(l), l;
  }
  Array.isArray;
  var De = function (e) {
      var t = e.name,
        n = e.children;
      return Re("div", {
        className: "container pow",
        children: Re("div", {
          className: "screen".concat(t ? " ".concat(t) : ""),
          children: n
        })
      });
    },
    Ce = function (e) {
      return Re("p", {
        id: "session-token",
        className: "text embeddedSessionID",
        children: e.sessionId
      });
    },
    Ie = function (e) {
      var t = e.image,
        n = e.text,
        r = e.sessionToken,
        o = e.embeddedSessionIdEnabled;
      return Re(De, {
        name: "loading",
        children: [Re("div", {
          id: "loading-icon",
          className: "icon loading spinning",
          children: t && $(t) ? Re("img", {
            src: t
          }) : Re("svg", {
            width: "60",
            height: "60",
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            children: Re("circle", {
              cx: "50",
              cy: "50",
              r: "47",
              stroke: "#888888",
              strokeWidth: "6",
              fill: "none",
              strokeDasharray: "283",
              strokeDashoffset: "140"
            })
          })
        }), Re("p", {
          id: "text-loading",
          className: "text loading",
          children: n
        }), o ? Re(Ce, {
          sessionId: r
        }) : ""]
      });
    },
    Ue = function (e) {
      var t = e.image,
        n = e.text,
        r = e.sessionToken,
        o = e.embeddedSessionIdEnabled;
      return Re(De, {
        name: "success",
        children: [Re("div", {
          id: "success-icon",
          className: "icon success",
          children: t && $(t) ? Re("img", {
            src: t
          }) : Re("svg", {
            width: "60",
            height: "60",
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            children: [Re("circle", {
              cx: "50",
              cy: "50",
              r: "47",
              stroke: "#888888",
              strokeWidth: "6",
              fill: "#888888"
            }), Re("path", {
              d: "M30 50 L45 65 L70 35",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "100",
              strokeDashoffset: "0"
            })]
          })
        }), Re("p", {
          id: "text-success",
          className: "text success",
          children: n
        }), o ? Re(Ce, {
          sessionId: r
        }) : ""]
      });
    },
    Me = function (e) {
      var t = e.text,
        n = e.buttonText,
        r = e.sessionToken,
        o = e.embeddedSessionIdEnabled;
      return Re(De, {
        name: "error box",
        children: [Re("h2", {
          id: "text-error",
          className: "text error",
          children: t
        }), Re("button", {
          id: "button-error",
          className: "button error",
          onClick: function () {
            window.parent.postMessage("CAPI_RELOAD_EC", "*");
          },
          children: n
        }), o ? Re(Ce, {
          sessionId: r
        }) : ""]
      });
    };
  function Ge(e) {
    return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Ge(e);
  }
  function Fe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function We(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Fe(Object(n), true).forEach(function (t) {
        qe(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fe(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function qe(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != Ge(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (undefined !== t) {
          var n = t.call(e, "string");
          if ("object" != Ge(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == Ge(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  var $e = function (e) {
    var t = e.body;
    return Re("style", We(We({}, {
      nonce: "MfIH3gn0of06B4ek8vpnbH"
    }), {}, {
      children: t
    }));
  };
  function Be(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Ze(e) {
    var t,
      n,
      r = e.stringTable,
      o = e.customStyle,
      i = e.customAssets,
      u = e.sessionToken,
      a = e.embeddedSessionIdEnabled,
      s = (t = te("loading"), n = 2, function (e) {
        if (Array.isArray(e)) return e;
      }(t) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r,
            o,
            i,
            u,
            a = [],
            s = true,
            _ = false;
          try {
            if (i = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              s = false;
            } else for (; !(s = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); s = true);
          } catch (e) {
            _ = true, o = e;
          } finally {
            try {
              if (!s && null != n.return && (u = n.return(), Object(u) !== u)) return;
            } finally {
              if (_) throw o;
            }
          }
          return a;
        }
      }(t, n) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return Be(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Be(e, t) : undefined;
        }
      }(t, n) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()),
      _ = s[0],
      l = s[1];
    return function (e, t) {
      var n = ee(G++, 3);
      !V.__s && function (e, t) {
        return !e || e.length !== t.length || t.some(function (t, n) {
          return t !== e[n];
        });
      }(n.__H, t) && (n.__ = e, n.u = t, F.__H.__h.push(n));
    }(function () {
      var e,
        t,
        n,
        r,
        o = (e = function () {
          return l("success");
        }, t = function (n) {
          "result" === n.data.type && ("pass" === n.data.result && e(), window.removeEventListener("message", t));
        }),
        i = (n = function () {
          return l("error");
        }, r = function (e) {
          "error" === e.data.type && (n(e.data.error), window.removeEventListener("message", r));
        });
      return window.addEventListener("message", o), window.addEventListener("message", i), function () {
        window.removeEventListener("message", o), window.removeEventListener("message", i);
      };
    }, []), Re(g, {
      children: ["loading" === _ && Re(Ie, {
        image: i["loading.spinner"],
        text: r["pow.loading_info"],
        sessionToken: u,
        embeddedSessionIdEnabled: a
      }), "success" === _ && Re(Ue, {
        image: i["victory.tick"],
        text: r["pow.verification_complete"],
        sessionToken: u,
        embeddedSessionIdEnabled: a
      }), "error" === _ && Re(Me, {
        text: r["meta.generic_error"],
        buttonText: r["meta.reload_challenge"],
        sessionToken: u,
        embeddedSessionIdEnabled: a
      }), Re($e, {
        body: o
      })]
    });
  }
  var Ve = function (n) {
      var r = n.stringTable,
        o = n.customStyle,
        i = n.customAssets,
        u = n.sessionToken,
        a = n.embeddedSessionIdEnabled,
        s = document.getElementById("app");
      if (!s) throw new Error("#app not found");
      !function (n, r, o) {
        var i, u, a, s;
        r == document && (r = document.documentElement), t.__ && t.__(n, r), u = (i = "function" == typeof o) ? null : o && o.__k || r.__k, a = [], s = [], H(r, n = (!i && o || r).__k = m(g, null, [n]), u || c, c, r.namespaceURI, !i && o ? [o] : u ? null : r.firstChild ? e.call(r.childNodes) : null, a, !i && o ? o : u ? u.__e : r.firstChild, i, s), R(a, n, s);
      }(Re(Ze, {
        stringTable: r,
        customStyle: o,
        customAssets: i,
        sessionToken: u,
        embeddedSessionIdEnabled: a
      }), s);
    },
    ze = function (e) {
      return e[e.LEADING_ZERO = 0] = "LEADING_ZERO", e[e.TARGET_HASH = 1] = "TARGET_HASH", e;
    }({}),
    Je = function (e) {
      return e.START = "start", e.CANCEL = "cancel", e;
    }({}),
    Xe = function (e) {
      return e.LOADED = "loaded", e.RUNNING = "running", e.DONE = "done", e.ERROR = "error", e.SPLIT_DONE = "split_done", e;
    }({}),
    Ye = function (e, t, n) {
      var r = {
        pow_token: n,
        session_token: t
      };
      r.hash_rate = e.hashRate;
      var o = e;
      switch (r.execution_time = o.time, r.transform = o.finalTransform, o.type) {
        case ze.TARGET_HASH:
          r.result = o.targetHashData.map(function (e) {
            return {
              target_hash: e.targetHash,
              attempt_count: e.iterations
            };
          });
          break;
        case ze.LEADING_ZERO:
          r.result = {
            result: o.nonce,
            iteration_count: o.iterations
          };
      }
      return r;
    },
    Ke = function (e) {
      switch (e.work_type) {
        case ze.LEADING_ZERO:
          return {
            sessionToken: (t = e).session_token,
            powToken: t.pow_token,
            workType: t.work_type,
            url: t.url,
            timeout: t.timeout,
            sequence: t.sequence,
            embeddedSessionIdEnabled: t.embedded_session_id_enabled,
            workConfig: {
              seed: t.work_config.seed,
              count: t.work_config.count
            }
          };
        case ze.TARGET_HASH:
          return function (e) {
            var t = {
              sessionToken: e.session_token,
              powToken: e.pow_token,
              workType: e.work_type,
              url: e.url,
              timeout: e.timeout,
              sequence: e.sequence,
              embeddedSessionIdEnabled: e.embedded_session_id_enabled,
              workConfig: {
                seed: e.work_config.seed,
                startingNonce: e.work_config.starting_nonce,
                splits: e.work_config.splits.map(function (e) {
                  return {
                    targetHash: e.target_hash
                  };
                })
              }
            };
            return e.work_config.report_splits && (t.workConfig.reportSplits = e.work_config.report_splits), t;
          }(e);
        default:
          throw new Error("Invalid work type in setup response");
      }
      var t;
    };
  function Qe(e) {
    return Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Qe(e);
  }
  function et(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function tt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? et(Object(n), true).forEach(function (t) {
        nt(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function nt(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != Qe(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (undefined !== t) {
          var n = t.call(e, "string");
          if ("object" != Qe(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == Qe(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  var rt = function (e) {
      return e.stringTable && e.customStyle && e.customAssets && e.sessionToken;
    },
    ot = function (e) {
      var t = {
          stringTable: false,
          customStyle: false,
          customAssets: false,
          sessionToken: false
        },
        n = {
          stringTable: {},
          customStyle: "",
          customAssets: {},
          sessionToken: "",
          embeddedSessionIdEnabled: true
        },
        r = function (o) {
          switch (o.data.type) {
            case "customStyle":
              n.customStyle = o.data.style, t.customStyle = true;
              var i = o.data.assets;
              n.customAssets = null == i ? undefined : i.reduce(function (e, t) {
                return tt(tt({}, e), {}, nt({}, t.id, t.base64));
              }, {}), t.customAssets = true;
              break;
            case "stringTable":
              n.stringTable = o.data.stringTable, t.stringTable = true;
          }
          rt(t) && (window.removeEventListener("message", r), e(n));
        };
      return window.addEventListener("message", r), function (o, i) {
        t.sessionToken = true, n.sessionToken = o, n.embeddedSessionIdEnabled = i, rt(t) && (window.removeEventListener("message", r), e(n));
      };
    };
  function it(e) {
    window.parent.postMessage(e, "*");
  }
  function ut() {
    return new Promise(function (e, t) {
      var n = function (r) {
        if ("setupData" === r.data.type) {
          var o = r.data.setupData.requestData;
          o.work_config || (t({
            message: "Missing work config",
            event: r
          }), window.removeEventListener("message", n)), e(o), window.removeEventListener("message", n);
        }
      };
      window.addEventListener("message", n);
    });
  }
  function at() {
    at = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = Object.defineProperty || function (e, t, n) {
        e[t] = n.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      u = i.iterator || "@@iterator",
      a = i.asyncIterator || "@@asyncIterator",
      s = i.toStringTag || "@@toStringTag";
    function _(e, t, n) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }), e[t];
    }
    try {
      _({}, "");
    } catch (e) {
      _ = function (e, t, n) {
        return e[t] = n;
      };
    }
    function l(e, t, n, r) {
      var i = t && t.prototype instanceof m ? t : m,
        u = Object.create(i.prototype),
        a = new N(r || []);
      return o(u, "_invoke", {
        value: x(e, n, a)
      }), u;
    }
    function c(e, t, n) {
      try {
        return {
          type: "normal",
          arg: e.call(t, n)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }
    t.wrap = l;
    var f = "suspendedStart",
      p = "suspendedYield",
      d = "executing",
      h = "completed",
      v = {};
    function m() {}
    function y() {}
    function g() {}
    var b = {};
    _(b, u, function () {
      return this;
    });
    var w = Object.getPrototypeOf,
      k = w && w(w(A([])));
    k && k !== n && r.call(k, u) && (b = k);
    var E = g.prototype = m.prototype = Object.create(b);
    function S(e) {
      ["next", "throw", "return"].forEach(function (t) {
        _(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function T(e, t) {
      function n(o, i, u, a) {
        var s = c(e[o], e, i);
        if ("throw" !== s.type) {
          var _ = s.arg,
            l = _.value;
          return l && "object" == st(l) && r.call(l, "__await") ? t.resolve(l.__await).then(function (e) {
            n("next", e, u, a);
          }, function (e) {
            n("throw", e, u, a);
          }) : t.resolve(l).then(function (e) {
            _.value = e, u(_);
          }, function (e) {
            return n("throw", e, u, a);
          });
        }
        a(s.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return i = i ? i.then(o, o) : o();
        }
      });
    }
    function x(t, n, r) {
      var o = f;
      return function (i, u) {
        if (o === d) throw Error("Generator is already running");
        if (o === h) {
          if ("throw" === i) throw u;
          return {
            value: e,
            done: true
          };
        }
        for (r.method = i, r.arg = u;;) {
          var a = r.delegate;
          if (a) {
            var s = O(a, r);
            if (s) {
              if (s === v) continue;
              return s;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
            if (o === f) throw o = h, r.arg;
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = d;
          var _ = c(t, n, r);
          if ("normal" === _.type) {
            if (o = r.done ? h : p, _.arg === v) continue;
            return {
              value: _.arg,
              done: r.done
            };
          }
          "throw" === _.type && (o = h, r.method = "throw", r.arg = _.arg);
        }
      };
    }
    function O(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
      var i = c(o, t.iterator, n.arg);
      if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, v;
      var u = i.arg;
      return u ? u.done ? (n[t.resultName] = u.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, v) : u : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v);
    }
    function L(e) {
      var t = {
        tryLoc: e[0]
      };
      1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    }
    function P(e) {
      var t = e.completion || {};
      t.type = "normal", delete t.arg, e.completion = t;
    }
    function N(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }], e.forEach(L, this), this.reset(true);
    }
    function A(t) {
      if (t || "" === t) {
        var n = t[u];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length;) if (r.call(t, o)) return n.value = t[o], n.done = false, n;
              return n.value = e, n.done = true, n;
            };
          return i.next = i;
        }
      }
      throw new TypeError(st(t) + " is not iterable");
    }
    return y.prototype = g, o(E, "constructor", {
      value: g,
      configurable: true
    }), o(g, "constructor", {
      value: y,
      configurable: true
    }), y.displayName = _(g, s, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
      var t = "function" == typeof e && e.constructor;
      return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name));
    }, t.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, _(e, s, "GeneratorFunction")), e.prototype = Object.create(E), e;
    }, t.awrap = function (e) {
      return {
        __await: e
      };
    }, S(T.prototype), _(T.prototype, a, function () {
      return this;
    }), t.AsyncIterator = T, t.async = function (e, n, r, o, i) {
      undefined === i && (i = Promise);
      var u = new T(l(e, n, r, o), i);
      return t.isGeneratorFunction(n) ? u : u.next().then(function (e) {
        return e.done ? e.value : u.next();
      });
    }, S(E), _(E, s, "Generator"), _(E, u, function () {
      return this;
    }), _(E, "toString", function () {
      return "[object Generator]";
    }), t.keys = function (e) {
      var t = Object(e),
        n = [];
      for (var r in t) n.push(r);
      return n.reverse(), function e() {
        for (; n.length;) {
          var r = n.pop();
          if (r in t) return e.value = r, e.done = false, e;
        }
        return e.done = true, e;
      };
    }, t.values = A, N.prototype = {
      constructor: N,
      reset: function (t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = false, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
      },
      stop: function () {
        this.done = true;
        var e = this.tryEntries[0].completion;
        if ("throw" === e.type) throw e.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var n = this;
        function o(r, o) {
          return a.type = "throw", a.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var u = this.tryEntries[i],
            a = u.completion;
          if ("root" === u.tryLoc) return o("end");
          if (u.tryLoc <= this.prev) {
            var s = r.call(u, "catchLoc"),
              _ = r.call(u, "finallyLoc");
            if (s && _) {
              if (this.prev < u.catchLoc) return o(u.catchLoc, true);
              if (this.prev < u.finallyLoc) return o(u.finallyLoc);
            } else if (s) {
              if (this.prev < u.catchLoc) return o(u.catchLoc, true);
            } else {
              if (!_) throw Error("try statement without catch or finally");
              if (this.prev < u.finallyLoc) return o(u.finallyLoc);
            }
          }
        }
      },
      abrupt: function (e, t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var o = this.tryEntries[n];
          if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
        var u = i ? i.completion : {};
        return u.type = e, u.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(u);
      },
      complete: function (e, t) {
        if ("throw" === e.type) throw e.arg;
        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v;
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), v;
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.tryLoc === e) {
            var r = n.completion;
            if ("throw" === r.type) {
              var o = r.arg;
              P(n);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (t, n, r) {
        return this.delegate = {
          iterator: A(t),
          resultName: n,
          nextLoc: r
        }, "next" === this.method && (this.arg = e), v;
      }
    }, t;
  }
  function st(e) {
    return st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, st(e);
  }
  function _t(e, t, n, r, o, i, u) {
    try {
      var a = e[i](u),
        s = a.value;
    } catch (e) {
      return void n(e);
    }
    a.done ? t(s) : Promise.resolve(s).then(r, o);
  }
  function lt(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function u(e) {
          _t(i, r, o, u, a, "next", e);
        }
        function a(e) {
          _t(i, r, o, u, a, "throw", e);
        }
        u(undefined);
      });
    };
  }
  var ct = 0,
    ft = function (e, t, n) {
      var r = new XMLHttpRequest(),
        o = {
          session_token: e.sessionToken,
          pow_token: e.powToken,
          round: n,
          time: Date.now()
        },
        i = window.location.origin + "/pows/started";
      r.open("POST", i), r.setRequestHeader("Content-Type", "application/json");
      var u = function (e) {
        if (!e.workConfig.seed.length) throw new Error("workConfig.seed must be defined");
        switch (e.workType) {
          case ze.LEADING_ZERO:
            return function (e) {
              var t = e.workConfig;
              return {
                type: Je.START,
                data: {
                  type: ze.LEADING_ZERO,
                  itimeout: e.timeout,
                  seed: t.seed,
                  difficulty: t.count
                }
              };
            }(e);
          case ze.TARGET_HASH:
            return function (e) {
              return {
                type: Je.START,
                data: {
                  type: ze.TARGET_HASH,
                  itimeout: e.timeout,
                  seed: e.workConfig.seed,
                  startingNonce: e.workConfig.startingNonce,
                  targetHashData: e.workConfig.splits.map(function (e) {
                    return {
                      targetHashData: e.targetHash
                    };
                  })
                }
              };
            }(e);
        }
      }(e);
      t.postMessage(u), r.send(JSON.stringify(o));
    },
    pt = function (e, t, n) {
      var r = new XMLHttpRequest(),
        o = {
          session_token: e.sessionToken,
          pow_token: e.powToken,
          round: n,
          time: Date.now(),
          split_num: t.data.splitNum,
          execution_time: t.data.executionTime,
          hash_rate: t.data.hashRate,
          result: t.data.result
        },
        i = window.location.origin + "/pows/split";
      r.open("POST", i), r.setRequestHeader("Content-Type", "application/json"), r.send(JSON.stringify(o));
    },
    dt = function () {
      var e = lt(at().mark(function e() {
        var t, n, r, o, i, u;
        return at().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return t = ot(function (e) {
                return Ve(e);
              }), i = false, e.prev = 2, window.parent.postMessage({
                runnerLoaded: true
              }, "*"), e.t0 = Ke, e.next = 7, ut();
            case 7:
              e.t1 = e.sent, n = (0, e.t0)(e.t1), t(n.sessionToken, n.embeddedSessionIdEnabled), u = new URL(n.sequence), o = window.setTimeout(function () {
                i || it({
                  failureReason: "load_timeout"
                });
              }, 1e4);
              try {
                (r = new Worker(u)).onerror = function (e) {
                  var t;
                  i || (it({
                    failureReason: "load_timeout"
                  }), window.clearTimeout(o)), t = e.error, window.parent.postMessage({
                    workerLoaded: false,
                    error: t
                  }, "*");
                }, r.onmessage = function () {
                  var e = lt(at().mark(function e(t) {
                    var u, a;
                    return at().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          e.prev = 0, u = t.data, e.t0 = u.type, e.next = e.t0 === Xe.LOADED ? 5 : e.t0 === Xe.DONE ? 10 : e.t0 === Xe.ERROR ? 21 : e.t0 === Xe.SPLIT_DONE ? 25 : 26;
                          break;
                        case 5:
                          return window.parent.postMessage({
                            workerLoaded: true
                          }, "*"), i = true, window.clearTimeout(o), ft(n, r, ct), e.abrupt("break", 26);
                        case 10:
                          return u.data.type = n.workType, it(Ye(u.data, n.sessionToken, n.powToken)), e.t1 = Ke, e.next = 16, ut();
                        case 16:
                          return e.t2 = e.sent, n = (0, e.t1)(e.t2), ct++, ft(n, r, ct), e.abrupt("break", 26);
                        case 21:
                          return a = {
                            failureReason: u.data.error.type
                          }, "object" === st(u.data.error.data) && null != u.data.error.data.hashRate && (a.hashRate = u.data.error.data.hashRate), it(a), e.abrupt("break", 26);
                        case 25:
                          n.workConfig.hasOwnProperty("reportSplits") && n.workConfig.reportSplits.includes(u.data.splitNum) && pt(n, u, ct);
                        case 26:
                          e.next = 32;
                          break;
                        case 28:
                          e.prev = 28, e.t3 = e.catch(0), it({
                            failureReason: "runtime_error"
                          });
                        case 32:
                        case "end":
                          return e.stop();
                      }
                    }, e, null, [[0, 28]]);
                  }));
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                }();
              } catch (e) {
                it({
                  failureReason: "load_timeout"
                }), window.clearTimeout(o);
              }
              e.next = 21;
              break;
            case 15:
              return e.prev = 15, e.t2 = e.catch(2), it({
                failureReason: "runtime_error"
              }), window.clearTimeout(o), e.abrupt("return");
            case 21:
            case "end":
              return e.stop();
          }
        }, e, null, [[2, 15]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  "complete" === document.readyState && dt(), window.onload = dt;
})();