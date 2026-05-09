(function () {
  const B = {
      'ipVdV': function (L) {
        return L();
      },
      'BdPrd': function (L, x) {
        return L(x);
      },
      'pnoLJ': "[object process]",
      'rrqux': function (L, N) {
        return L === N;
      },
      'khjXN': 'undefined'
    },
    f = function () {
      let L = !![];
      return function (x, N) {
        const b = L ? function () {
          if (N) {
            const t = N['apply'](x, arguments);
            return N = null, t;
          }
        } : function () {};
        return L = ![], b;
      };
    }();
  function a(tanswer) {
    window['parent']['ae']["dapibReceive"]({
      'tanswer': tanswer
    });
  }
  function v(answers) {
    const L = {
      'ClqkG': function (N, b) {
        return N + b;
      }
    };
    let x = answers;
    return x = x['map'](N => {
      const b = N;
      return Object['keys'](N)['forEach'](t => {
        const g = N[t];
        let V = g['replace'](/[^a-zA-Z0-9_$]/g, '');
        !/^[a-zA-Z_$]/['test'](V) && (V = '_' + V), b[V] = t;
      }), b;
    }), x = x['map'](N => {
      const b = {
          'WiCBI': function (g, V) {
            return L['ClqkG'](g, V);
          }
        },
        t = N;
      return Object['keys'](N)['forEach'](g => {
        const V = N[g],
          P = V['split'](''),
          Y = (n, j) => {
            if (j['match'](/[0-9]/)) return n + String["fromCharCode"](+j + 33);
            if (j['match'](/[a-zA-Z]/)) {
              const c = j['charCodeAt'](0);
              return b['WiCBI'](n, c['toString']());
            }
            return n + j;
          },
          l = P['reduce'](Y, '');
        t[g] = l;
      }), t;
    }), x = x['map'](N => {
      const b = N;
      return Object['keys'](N)['forEach'](t => {
        const g = N[t];
        let V = g['replace'](/[^a-zA-Z0-9_$]/g, '');
        !/^[a-zA-Z_$]/['test'](V) && (V = '_' + V), b[V] = t;
      }), b;
    }), x = x['map'](N => {
      const b = {
          'uTVix': function (g, V) {
            return g >= V;
          },
          'WxcdK': function (g, V) {
            return g >= V;
          }
        },
        t = N;
      return Object['keys'](N)['forEach'](g => {
        const V = N[g],
          P = V['split'](''),
          Y = P['map'](l => {
            const n = l['charCodeAt'](0);
            if (b['uTVix'](n, 65) && n <= 90) return String["fromCharCode"](n + 32);
            if (b['WxcdK'](n, 97) && n <= 122) return String["fromCharCode"](n - 32);
            return l;
          });
        t[g] = Y['join']('');
      }), t;
    }), x;
  }
  function u(L, x) {
    const N = {
        'kqYxn': "(((.+)+)+)+$"
      },
      b = f(this, function () {
        return b['toString']()['search']("(((.+)+)+)+$")['toString']()["constructor"](b)['search'](N['kqYxn']);
      });
    B['ipVdV'](b);
    const t = L['map'](V => {
      const P = V;
      return Object['keys'](V)['forEach'](Y => {
        const l = V[Y]['toString']();
        P[Y] = V[Y]['toString']();
      }), P;
    });
    let g = v(t);
    return g = g['map'](answer => {
      const ianswer = answer;
      return Object['keys'](answer)['forEach'](V => {
        let P = ianswer[V];
        P = P + (x ? x : ''), ianswer[V] = P;
      }), ianswer;
    }), B['BdPrd'](a, g);
  }
  try {
    var Z = window['document'],
      U = undefined;
    (Object['prototype']['toString']['call'](typeof process !== 'undefined' ? process : 0) === B['pnoLJ'] || Z['hidden'] && B['rrqux'](Z["visibilityState"], 'prerender') && B['rrqux'](typeof window["requestAnimationFrame"], B['khjXN']) && typeof window["cancelAnimationFrame"] === 'undefined' || !(Z["activeElement"] instanceof Object)) && (U = String["fromCharCode"](Math['random']() * 26 + 65));
    const answer = window['parent']['ae']['answer'];
    u(answer, U);
  } catch (L) {
    a(L);
  }
})();