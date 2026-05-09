(function () {
  const B = {
      'YzdTR': function (L, x) {
        return L(x);
      },
      'Weake': function (L, N) {
        return L === N;
      },
      'IqFsN': function (L, N) {
        return L + N;
      }
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
    let L = answers;
    return L = L['map'](x => {
      const N = x;
      return Object['keys'](x)['forEach'](b => {
        const t = {
            'BwCuL': function (l, n) {
              return l + n;
            }
          },
          g = x[b],
          V = g['split'](''),
          P = (l, n) => {
            if (n['match'](/[0-9]/)) return l + String["fromCharCode"](t['BwCuL'](+n, 33));
            if (n['match'](/[a-zA-Z]/)) {
              const j = n['charCodeAt'](0);
              return l + j['toString']();
            }
            return l + n;
          },
          Y = V['reduce'](P, '');
        N[b] = Y;
      }), N;
    }), L = L['map'](x => {
      const N = x;
      return Object['keys'](x)['forEach'](b => {
        const t = x[b];
        let g = t['replace'](/[^a-zA-Z0-9_$]/g, '');
        !/^[a-zA-Z_$]/['test'](g) && (g = '_' + g), N[g] = b;
      }), N;
    }), L = L['map'](x => {
      const N = x;
      return Object['keys'](x)['forEach'](b => {
        const t = x[b],
          g = t['split'](''),
          V = (Y, l) => {
            if (l['match'](/[0-9]/)) return Y + String["fromCharCode"](+l + 33);
            if (l['match'](/[a-zA-Z]/)) {
              const n = l['charCodeAt'](0);
              return Y + n['toString']();
            }
            return Y + l;
          },
          P = g['reduce'](V, '');
        N[b] = P;
      }), N;
    }), L = L['map'](x => {
      const N = x;
      return Object['keys'](x)['forEach'](b => {
        const t = x[b];
        let g = t['replace'](/[^a-zA-Z0-9_$]/g, '');
        !/^[a-zA-Z_$]/['test'](g) && (g = '_' + g), N[g] = b;
      }), N;
    }), L;
  }
  function u(L, x) {
    const N = f(this, function () {
      return N['toString']()['search']("(((.+)+)+)+$")['toString']()["constructor"](N)['search']("(((.+)+)+)+$");
    });
    N();
    const b = L['map'](g => {
      const V = g;
      return Object['keys'](g)['forEach'](P => {
        const Y = g[P]['toString']();
        V[P] = g[P]['toString']();
      }), V;
    });
    let t = B['YzdTR'](v, b);
    return t = t['map'](answer => {
      const g = {
          'bqMkd': function (V, P) {
            return V + P;
          }
        },
        ianswer = answer;
      return Object['keys'](answer)['forEach'](V => {
        let P = ianswer[V];
        P = g['bqMkd'](P, x ? x : ''), ianswer[V] = P;
      }), ianswer;
    }), a(t);
  }
  try {
    var Z = window['document'],
      U = undefined;
    (Object['prototype']['toString']['call'](typeof process !== 'undefined' ? process : 0) === "[object process]" || Z['hidden'] && Z["visibilityState"] === 'prerender' && B['Weake'](typeof window["requestAnimationFrame"], 'undefined') && typeof window["cancelAnimationFrame"] === 'undefined' || !(Z["activeElement"] instanceof Object)) && (U = String["fromCharCode"](B['IqFsN'](Math['random']() * 26, 65)));
    const answer = window['parent']['ae']['answer'];
    u(answer, U);
  } catch (L) {
    a(L);
  }
})();