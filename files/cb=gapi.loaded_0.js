gapi.loaded_0(function (_) {
  var window = this;
  _._F_toggles_initialize = function (a) {
    (typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
      ? self
      : this
    )._F_toggles = a || [];
  };
  (0, _._F_toggles_initialize)([0x200000]);
  var aa, fa, ha, na, oa, ta, va, xa;
  aa = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  };
  fa =
    typeof Object.defineProperties == "function"
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  ha = function (a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("a");
  };
  _.ma = ha(this);
  na = function (a, b) {
    if (b)
      a: {
        var c = _.ma;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          b != null &&
          fa(c, a, { configurable: !0, writable: !0, value: b });
      }
  };
  na("Symbol", function (a) {
    if (a) return a;
    var b = function (f, h) {
      this.G1 = f;
      fa(this, "description", { configurable: !0, writable: !0, value: h });
    };
    b.prototype.toString = function () {
      return this.G1;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  na("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = _.ma[b[c]];
      typeof d === "function" &&
        typeof d.prototype[a] != "function" &&
        fa(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return oa(aa(this));
          },
        });
    }
    return a;
  });
  oa = function (a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  };
  _.sa = function (a) {
    var b =
      typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if (typeof a.length == "number") return { next: aa(a) };
    throw Error("b`" + String(a));
  };
  ta = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  va =
    typeof Object.assign == "function"
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) ta(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  na("Object.assign", function (a) {
    return a || va;
  });
  _.wa =
    typeof Object.create == "function"
      ? Object.create
      : function (a) {
          var b = function () {};
          b.prototype = a;
          return new b();
        };
  if (typeof Object.setPrototypeOf == "function") xa = Object.setPrototypeOf;
  else {
    var ya;
    a: {
      var Aa = { a: !0 },
        Ba = {};
      try {
        Ba.__proto__ = Aa;
        ya = Ba.a;
        break a;
      } catch (a) {}
      ya = !1;
    }
    xa = ya
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  _.Da = xa;
  na("Promise", function (a) {
    function b() {
      this.Jf = null;
    }
    function c(h) {
      return h instanceof e
        ? h
        : new e(function (k) {
            k(h);
          });
    }
    if (a) return a;
    b.prototype.wP = function (h) {
      if (this.Jf == null) {
        this.Jf = [];
        var k = this;
        this.xP(function () {
          k.Q7();
        });
      }
      this.Jf.push(h);
    };
    var d = _.ma.setTimeout;
    b.prototype.xP = function (h) {
      d(h, 0);
    };
    b.prototype.Q7 = function () {
      for (; this.Jf && this.Jf.length; ) {
        var h = this.Jf;
        this.Jf = [];
        for (var k = 0; k < h.length; ++k) {
          var l = h[k];
          h[k] = null;
          try {
            l();
          } catch (m) {
            this.nq(m);
          }
        }
      }
      this.Jf = null;
    };
    b.prototype.nq = function (h) {
      this.xP(function () {
        throw h;
      });
    };
    var e = function (h) {
      this.Ga = 0;
      this.Bf = void 0;
      this.Qr = [];
      this.GV = !1;
      var k = this.qF();
      try {
        h(k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    e.prototype.qF = function () {
      function h(m) {
        return function (n) {
          l || ((l = !0), m.call(k, n));
        };
      }
      var k = this,
        l = !1;
      return { resolve: h(this.iea), reject: h(this.cK) };
    };
    e.prototype.iea = function (h) {
      if (h === this)
        this.cK(new TypeError("A Promise cannot resolve to itself"));
      else if (h instanceof e) this.Nfa(h);
      else {
        a: switch (typeof h) {
          case "object":
            var k = h != null;
            break a;
          case "function":
            k = !0;
            break a;
          default:
            k = !1;
        }
        k ? this.hea(h) : this.LS(h);
      }
    };
    e.prototype.hea = function (h) {
      var k = void 0;
      try {
        k = h.then;
      } catch (l) {
        this.cK(l);
        return;
      }
      typeof k == "function" ? this.Ofa(k, h) : this.LS(h);
    };
    e.prototype.cK = function (h) {
      this.w_(2, h);
    };
    e.prototype.LS = function (h) {
      this.w_(1, h);
    };
    e.prototype.w_ = function (h, k) {
      if (this.Ga != 0) throw Error("c`" + h + "`" + k + "`" + this.Ga);
      this.Ga = h;
      this.Bf = k;
      this.Ga === 2 && this.xea();
      this.R7();
    };
    e.prototype.xea = function () {
      var h = this;
      d(function () {
        if (h.qca()) {
          var k = _.ma.console;
          typeof k !== "undefined" && k.error(h.Bf);
        }
      }, 1);
    };
    e.prototype.qca = function () {
      if (this.GV) return !1;
      var h = _.ma.CustomEvent,
        k = _.ma.Event,
        l = _.ma.dispatchEvent;
      if (typeof l === "undefined") return !0;
      typeof h === "function"
        ? (h = new h("unhandledrejection", { cancelable: !0 }))
        : typeof k === "function"
        ? (h = new k("unhandledrejection", { cancelable: !0 }))
        : ((h = _.ma.document.createEvent("CustomEvent")),
          h.initCustomEvent("unhandledrejection", !1, !0, h));
      h.promise = this;
      h.reason = this.Bf;
      return l(h);
    };
    e.prototype.R7 = function () {
      if (this.Qr != null) {
        for (var h = 0; h < this.Qr.length; ++h) f.wP(this.Qr[h]);
        this.Qr = null;
      }
    };
    var f = new b();
    e.prototype.Nfa = function (h) {
      var k = this.qF();
      h.qy(k.resolve, k.reject);
    };
    e.prototype.Ofa = function (h, k) {
      var l = this.qF();
      try {
        h.call(k, l.resolve, l.reject);
      } catch (m) {
        l.reject(m);
      }
    };
    e.prototype.then = function (h, k) {
      function l(q, t) {
        return typeof q == "function"
          ? function (v) {
              try {
                m(q(v));
              } catch (u) {
                n(u);
              }
            }
          : t;
      }
      var m,
        n,
        p = new e(function (q, t) {
          m = q;
          n = t;
        });
      this.qy(l(h, m), l(k, n));
      return p;
    };
    e.prototype.catch = function (h) {
      return this.then(void 0, h);
    };
    e.prototype.qy = function (h, k) {
      function l() {
        switch (m.Ga) {
          case 1:
            h(m.Bf);
            break;
          case 2:
            k(m.Bf);
            break;
          default:
            throw Error("d`" + m.Ga);
        }
      }
      var m = this;
      this.Qr == null ? f.wP(l) : this.Qr.push(l);
      this.GV = !0;
    };
    e.resolve = c;
    e.reject = function (h) {
      return new e(function (k, l) {
        l(h);
      });
    };
    e.race = function (h) {
      return new e(function (k, l) {
        for (var m = _.sa(h), n = m.next(); !n.done; n = m.next())
          c(n.value).qy(k, l);
      });
    };
    e.all = function (h) {
      var k = _.sa(h),
        l = k.next();
      return l.done
        ? c([])
        : new e(function (m, n) {
            function p(v) {
              return function (u) {
                q[v] = u;
                t--;
                t == 0 && m(q);
              };
            }
            var q = [],
              t = 0;
            do
              q.push(void 0),
                t++,
                c(l.value).qy(p(q.length - 1), n),
                (l = k.next());
            while (!l.done);
          });
    };
    return e;
  });
  var Ea = function (a, b, c) {
    if (a == null)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined"
      );
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression"
      );
    return a + "";
  };
  na("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ea(this, b, "startsWith"),
            e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var h = 0; h < f && c < e; ) if (d[c++] != b[h++]) return !1;
          return h >= f;
        };
  });
  na("WeakMap", function (a) {
    function b() {}
    function c(l) {
      var m = typeof l;
      return (m === "object" && l !== null) || m === "function";
    }
    function d(l) {
      if (!ta(l, f)) {
        var m = new b();
        fa(l, f, { value: m });
      }
    }
    function e(l) {
      var m = Object[l];
      m &&
        (Object[l] = function (n) {
          if (n instanceof b) return n;
          Object.isExtensible(n) && d(n);
          return m(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [l, 2],
              [m, 3],
            ]);
          if (n.get(l) != 2 || n.get(m) != 3) return !1;
          n.delete(l);
          n.set(m, 4);
          return !n.has(l) && n.get(m) == 4;
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var h = 0,
      k = function (l) {
        this.Ha = (h += Math.random() + 1).toString();
        if (l) {
          l = _.sa(l);
          for (var m; !(m = l.next()).done; )
            (m = m.value), this.set(m[0], m[1]);
        }
      };
    k.prototype.set = function (l, m) {
      if (!c(l)) throw Error("e");
      d(l);
      if (!ta(l, f)) throw Error("f`" + l);
      l[f][this.Ha] = m;
      return this;
    };
    k.prototype.get = function (l) {
      return c(l) && ta(l, f) ? l[f][this.Ha] : void 0;
    };
    k.prototype.has = function (l) {
      return c(l) && ta(l, f) && ta(l[f], this.Ha);
    };
    k.prototype.delete = function (l) {
      return c(l) && ta(l, f) && ta(l[f], this.Ha) ? delete l[f][this.Ha] : !1;
    };
    return k;
  });
  na("Map", function (a) {
    if (
      (function () {
        if (
          !a ||
          typeof a != "function" ||
          !a.prototype.entries ||
          typeof Object.seal != "function"
        )
          return !1;
        try {
          var k = Object.seal({ x: 4 }),
            l = new a(_.sa([[k, "s"]]));
          if (
            l.get(k) != "s" ||
            l.size != 1 ||
            l.get({ x: 4 }) ||
            l.set({ x: 4 }, "t") != l ||
            l.size != 2
          )
            return !1;
          var m = l.entries(),
            n = m.next();
          if (n.done || n.value[0] != k || n.value[1] != "s") return !1;
          n = m.next();
          return n.done ||
            n.value[0].x != 4 ||
            n.value[1] != "t" ||
            !m.next().done
            ? !1
            : !0;
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (k) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (k) {
          k = _.sa(k);
          for (var l; !(l = k.next()).done; )
            (l = l.value), this.set(l[0], l[1]);
        }
      };
    c.prototype.set = function (k, l) {
      k = k === 0 ? 0 : k;
      var m = d(this, k);
      m.list || (m.list = this[0][m.id] = []);
      m.jf
        ? (m.jf.value = l)
        : ((m.jf = {
            next: this[1],
            Yk: this[1].Yk,
            head: this[1],
            key: k,
            value: l,
          }),
          m.list.push(m.jf),
          (this[1].Yk.next = m.jf),
          (this[1].Yk = m.jf),
          this.size++);
      return this;
    };
    c.prototype.delete = function (k) {
      k = d(this, k);
      return k.jf && k.list
        ? (k.list.splice(k.index, 1),
          k.list.length || delete this[0][k.id],
          (k.jf.Yk.next = k.jf.next),
          (k.jf.next.Yk = k.jf.Yk),
          (k.jf.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].Yk = f();
      this.size = 0;
    };
    c.prototype.has = function (k) {
      return !!d(this, k).jf;
    };
    c.prototype.get = function (k) {
      return (k = d(this, k).jf) && k.value;
    };
    c.prototype.entries = function () {
      return e(this, function (k) {
        return [k.key, k.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (k) {
        return k.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (k) {
        return k.value;
      });
    };
    c.prototype.forEach = function (k, l) {
      for (var m = this.entries(), n; !(n = m.next()).done; )
        (n = n.value), k.call(l, n[1], n[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (k, l) {
        var m = l && typeof l;
        m == "object" || m == "function"
          ? b.has(l)
            ? (m = b.get(l))
            : ((m = "" + ++h), b.set(l, m))
          : (m = "p_" + l);
        var n = k[0][m];
        if (n && ta(k[0], m))
          for (k = 0; k < n.length; k++) {
            var p = n[k];
            if ((l !== l && p.key !== p.key) || l === p.key)
              return { id: m, list: n, index: k, jf: p };
          }
        return { id: m, list: n, index: -1, jf: void 0 };
      },
      e = function (k, l) {
        var m = k[1];
        return oa(function () {
          if (m) {
            for (; m.head != k[1]; ) m = m.Yk;
            for (; m.next != m.head; )
              return (m = m.next), { done: !1, value: l(m) };
            m = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var k = {};
        return (k.Yk = k.next = k.head = k);
      },
      h = 0;
    return c;
  });
  na("Symbol.dispose", function (a) {
    return a ? a : Symbol("Symbol.dispose");
  });
  na("String.prototype.endsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ea(this, b, "endsWith");
          c === void 0 && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; e > 0 && c > 0; )
            if (d[--c] != b[--e]) return !1;
          return e <= 0;
        };
  });
  var Ga = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  na("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Ga(this, function (b) {
            return b;
          });
        };
  });
  na("Set", function (a) {
    if (
      (function () {
        if (
          !a ||
          typeof a != "function" ||
          !a.prototype.entries ||
          typeof Object.seal != "function"
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(_.sa([c]));
          if (
            !d.has(c) ||
            d.size != 1 ||
            d.add(c) != d ||
            d.size != 1 ||
            d.add({ x: 4 }) != d ||
            d.size != 2
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == c ||
            f.value[0].x != 4 ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (h) {
          return !1;
        }
      })()
    )
      return a;
    var b = function (c) {
      this.Da = new Map();
      if (c) {
        c = _.sa(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.Da.size;
    };
    b.prototype.add = function (c) {
      c = c === 0 ? 0 : c;
      this.Da.set(c, c);
      this.size = this.Da.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.Da.delete(c);
      this.size = this.Da.size;
      return c;
    };
    b.prototype.clear = function () {
      this.Da.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.Da.has(c);
    };
    b.prototype.entries = function () {
      return this.Da.entries();
    };
    b.prototype.values = function () {
      return this.Da.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.Da.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  na("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return Ga(this, function (b, c) {
            return [b, c];
          });
        };
  });
  var Ja = function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      if (b.call(c, f, e, a)) return { NU: e, ID: f };
    }
    return { NU: -1, ID: void 0 };
  };
  na("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          return Ja(this, b, c).ID;
        };
  });
  na("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return typeof b !== "number"
            ? !1
            : !isNaN(b) && b !== Infinity && b !== -Infinity;
        };
  });
  na("String.prototype.repeat", function (a) {
    return a
      ? a
      : function (b) {
          var c = Ea(this, null, "repeat");
          if (b < 0 || b > 1342177279)
            throw new RangeError("Invalid count value");
          b |= 0;
          for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  });
  na("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return Ga(this, function (b, c) {
            return c;
          });
        };
  });
  na("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            c != null
              ? c
              : function (k) {
                  return k;
                };
          var e = [],
            f =
              typeof Symbol != "undefined" &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if (typeof f == "function") {
            b = f.call(b);
            for (var h = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, h++));
          } else
            for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
          return e;
        };
  });
  na("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ta(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  na("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ta(b, d) && c.push(b[d]);
          return c;
        };
  });
  na("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  na("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  na("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return Ea(this, b, "includes").indexOf(b, c || 0) !== -1;
        };
  });
  na("Promise.prototype.finally", function (a) {
    return a
      ? a
      : function (b) {
          return this.then(
            function (c) {
              return Promise.resolve(b()).then(function () {
                return c;
              });
            },
            function (c) {
              return Promise.resolve(b()).then(function () {
                throw c;
              });
            }
          );
        };
  });
  na("Array.prototype.flat", function (a) {
    return a
      ? a
      : function (b) {
          b = b === void 0 ? 1 : b;
          var c = [];
          Array.prototype.forEach.call(this, function (d) {
            Array.isArray(d) && b > 0
              ? ((d = Array.prototype.flat.call(d, b - 1)), c.push.apply(c, d))
              : c.push(d);
          });
          return c;
        };
  });
  na("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  na("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  na("Number.isSafeInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
        };
  });
  na("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
            return b;
          var c = Math.floor(Math.abs(b));
          return b < 0 ? -c : c;
        };
  });
  na("Number.isNaN", function (a) {
    return a
      ? a
      : function (b) {
          return typeof b === "number" && isNaN(b);
        };
  });
  var La = function (a) {
    a = Math.trunc(a) || 0;
    a < 0 && (a += this.length);
    if (!(a < 0 || a >= this.length)) return this[a];
  };
  na("Array.prototype.at", function (a) {
    return a ? a : La;
  });
  var Oa = function (a) {
    return a ? a : La;
  };
  na("Int8Array.prototype.at", Oa);
  na("Uint8Array.prototype.at", Oa);
  na("Uint8ClampedArray.prototype.at", Oa);
  na("Int16Array.prototype.at", Oa);
  na("Uint16Array.prototype.at", Oa);
  na("Int32Array.prototype.at", Oa);
  na("Uint32Array.prototype.at", Oa);
  na("Float32Array.prototype.at", Oa);
  na("Float64Array.prototype.at", Oa);
  na("String.prototype.at", function (a) {
    return a ? a : La;
  });
  na("String.prototype.replaceAll", function (a) {
    return a
      ? a
      : function (b, c) {
          if (b instanceof RegExp && !b.global)
            throw new TypeError(
              "String.prototype.replaceAll called with a non-global RegExp argument."
            );
          return b instanceof RegExp
            ? this.replace(b, c)
            : this.replace(
                new RegExp(
                  String(b)
                    .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                    .replace(/\x08/g, "\\x08"),
                  "g"
                ),
                c
              );
        };
  });
  na("Array.prototype.findIndex", function (a) {
    return a
      ? a
      : function (b, c) {
          return Ja(this, b, c).NU;
        };
  });
  na("String.fromCodePoint", function (a) {
    return a
      ? a
      : function (b) {
          for (var c = "", d = 0; d < arguments.length; d++) {
            var e = Number(arguments[d]);
            if (e < 0 || e > 1114111 || e !== Math.floor(e))
              throw new RangeError("invalid_code_point " + e);
            e <= 65535
              ? (c += String.fromCharCode(e))
              : ((e -= 65536),
                (c += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                (c += String.fromCharCode((e & 1023) | 56320)));
          }
          return c;
        };
  });
  na("String.prototype.codePointAt", function (a) {
    return a
      ? a
      : function (b) {
          var c = Ea(this, null, "codePointAt"),
            d = c.length;
          b = Number(b) || 0;
          if (b >= 0 && b < d) {
            b |= 0;
            var e = c.charCodeAt(b);
            if (e < 55296 || e > 56319 || b + 1 === d) return e;
            b = c.charCodeAt(b + 1);
            return b < 56320 || b > 57343 ? e : (e - 55296) * 1024 + b + 9216;
          }
        };
  });
  na("globalThis", function (a) {
    return a || _.ma;
  });
  na("Math.imul", function (a) {
    return a
      ? a
      : function (b, c) {
          b = Number(b);
          c = Number(c);
          var d = b & 65535,
            e = c & 65535;
          return (
            (d * e +
              (((((b >>> 16) & 65535) * e + d * ((c >>> 16) & 65535)) << 16) >>>
                0)) |
            0
          );
        };
  });
  na("String.prototype.padStart", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ea(this, null, "padStart");
          b -= d.length;
          c = c !== void 0 ? String(c) : " ";
          return (
            (b > 0 && c
              ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
              : "") + d
          );
        };
  });
  _.Pa = {}; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  _.Ra = _.Ra || {};
  _.Sa = this || self;
  _.Wa = _.Sa._F_toggles || [];
  _.Za = "closure_uid_" + ((Math.random() * 1e9) >>> 0);
  _.$a = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  };
  _.r = function (a, b) {
    a = a.split(".");
    var c = _.Sa;
    a[0] in c ||
      typeof c.execScript == "undefined" ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || b === void 0
        ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
        : (c[d] = b);
  };
  _.bb = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.N = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.wt = function (d, e, f) {
      for (
        var h = Array(arguments.length - 2), k = 2;
        k < arguments.length;
        k++
      )
        h[k - 2] = arguments[k];
      return b.prototype[e].apply(d, h);
    };
  };
  _.eb = window.osapi = window.osapi || {};
  window.___jsl = window.___jsl || {};
  (window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: { parsetags: "explicit" },
    appsapi: { plus_one_service: "/plus/v1" },
    csi: { rate: 0.01 },
    poshare: { hangoutContactPickerServer: "https://plus.google.com" },
    gappsutil: {
      required_scopes: [
        "https://www.googleapis.com/auth/plus.me",
        "https://www.googleapis.com/auth/plus.people.recommended",
      ],
      display_on_page_ready: !1,
    },
    appsutil: {
      required_scopes: [
        "https://www.googleapis.com/auth/plus.me",
        "https://www.googleapis.com/auth/plus.people.recommended",
      ],
      display_on_page_ready: !1,
    },
    "oauth-flow": {
      authUrl: "https://accounts.google.com/o/oauth2/auth",
      proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
      redirectUri: "postmessage",
    },
    iframes: {
      sharebox: {
        params: { json: "&" },
        url: ":socialhost:/:session_prefix:_/sharebox/dialog",
      },
      plus: {
        url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1",
      },
      ":socialhost:": "https://apis.google.com",
      ":im_socialhost:": "https://plus.googleapis.com",
      domains_suggest: { url: "https://domains.google.com/suggest/flow" },
      card: {
        params: { s: "#", userid: "&" },
        url: ":socialhost:/:session_prefix:_/hovercard/internalcard",
      },
      ":signuphost:": "https://plus.google.com",
      ":gplus_url:": "https://plus.google.com",
      plusone: {
        url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1",
      },
      plus_share: {
        url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1",
      },
      plus_circle: {
        url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1",
      },
      plus_followers: {
        url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1",
      },
      configurator: {
        url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1",
      },
      appcirclepicker: {
        url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker",
      },
      page: {
        url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1",
      },
      person: {
        url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1",
      },
      community: {
        url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1",
      },
      follow: {
        url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1",
      },
      commentcount: {
        url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1",
      },
      comments: {
        url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
      },
      blogger: {
        url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
      },
      youtube: {
        url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
      },
      reportabuse: {
        url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1",
      },
      additnow: { url: ":socialhost:/additnow/additnow.html" },
      appfinder: {
        url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1",
      },
      ":source:": "1p",
    },
    poclient: { update_session: "google.updateSessionCallback" },
    "googleapis.config": {
      rpc: "/rpc",
      root: "https://content.googleapis.com",
      "root-1p": "https://clients6.google.com",
      useGapiForXd3: !0,
      xd3: "/static/proxy.html",
      auth: { useInterimAuth: !1 },
    },
    report: {
      apis: [
        "iframes\\..*",
        "gadgets\\..*",
        "gapi\\.appcirclepicker\\..*",
        "gapi\\.client\\..*",
      ],
      rate: 1e-4,
    },
    client: { perApiBatch: !0 },
  });
  var hb, lb;
  _.gb = function (a) {
    return function () {
      return _.fb[a].apply(this, arguments);
    };
  };
  _.fb = [];
  hb = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  };
  lb = function (a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  };
  _.z = function (a, b, c) {
    _.z =
      Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf("native code") != -1
        ? hb
        : lb;
    return _.z.apply(null, arguments);
  };
  /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Hb, Mb, ac, pc, Bc, Dc, Hc, Kc, Mc, Nc, Rc, Sc, Vc;
  _.nb = function (a, b) {
    return (_.fb[a] = b);
  };
  _.rb = function (a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, _.rb);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b);
    this.SY = !0;
  };
  _.tb = function (a, b) {
    return (0, _.sb)(a, b) >= 0;
  };
  _.ub = function (a, b) {
    b = (0, _.sb)(a, b);
    var c;
    (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
    return c;
  };
  _.vb = function (a) {
    var b = a.length;
    if (b > 0) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  };
  _.wb = function (a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  };
  _.xb = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  };
  _.yb = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  };
  _.zb = function (a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  };
  _.Bb = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Ab.length; f++)
        (c = Ab[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  };
  _.Gb = function (a) {
    var b = arguments.length;
    if (b == 1 && Array.isArray(arguments[0]))
      return _.Gb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c;
  };
  Hb = function (a) {
    return { valueOf: a }.valueOf();
  };
  _.Kb = function (a) {
    if (a instanceof _.Jb) return a.wY;
    throw Error("m");
  };
  Mb = function (a) {
    return new Lb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  };
  _.Pb = function (a) {
    var b = b === void 0 ? Nb : b;
    a: if (((b = b === void 0 ? Nb : b), !(a instanceof _.Jb))) {
      for (var c = 0; c < b.length; ++c) {
        var d = b[c];
        if (d instanceof Lb && d.Dj(a)) {
          a = new _.Jb(a);
          break a;
        }
      }
      a = void 0;
    }
    return a || _.Ob;
  };
  _.Sb = function (a) {
    if (Qb.test(a)) return a;
  };
  _.Tb = function (a) {
    return a instanceof _.Jb ? _.Kb(a) : _.Sb(a);
  };
  _.Wb = function (a, b) {
    b = b === void 0 ? {} : b;
    if (a instanceof _.Ub) return a;
    a = String(a)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
    b.lra && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
    b.wda && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
    b.mra &&
      (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
    return _.Vb(a);
  };
  _.Xb = function () {
    var a = _.Sa.navigator;
    return a && (a = a.userAgent) ? a : "";
  };
  ac = function (a) {
    return _.Yb
      ? _.Zb
        ? _.Zb.brands.some(function (b) {
            return (b = b.brand) && _.$b(b, a);
          })
        : !1
      : !1;
  };
  _.bc = function (a) {
    return _.$b(_.Xb(), a);
  };
  _.cc = function (a) {
    for (
      var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"),
        c = [],
        d;
      (d = b.exec(a));

    )
      c.push([d[1], d[2], d[3] || void 0]);
    return c;
  };
  _.dc = function () {
    return _.Yb ? !!_.Zb && _.Zb.brands.length > 0 : !1;
  };
  _.ec = function () {
    return _.dc() ? !1 : _.bc("Opera");
  };
  _.fc = function () {
    return _.dc() ? !1 : _.bc("Trident") || _.bc("MSIE");
  };
  _.gc = function () {
    return _.dc() ? !1 : _.bc("Edge");
  };
  _.hc = function () {
    return _.dc() ? ac("Microsoft Edge") : _.bc("Edg/");
  };
  _.ic = function () {
    return _.dc() ? ac("Opera") : _.bc("OPR");
  };
  _.jc = function () {
    return _.bc("Firefox") || _.bc("FxiOS");
  };
  _.lc = function () {
    return (
      _.bc("Safari") &&
      !(
        _.kc() ||
        (_.dc() ? 0 : _.bc("Coast")) ||
        _.ec() ||
        _.gc() ||
        _.hc() ||
        _.ic() ||
        _.jc() ||
        _.bc("Silk") ||
        _.bc("Android")
      )
    );
  };
  _.kc = function () {
    return _.dc()
      ? ac("Chromium")
      : ((_.bc("Chrome") || _.bc("CriOS")) && !_.gc()) || _.bc("Silk");
  };
  _.mc = function () {
    return _.bc("Android") && !(_.kc() || _.jc() || _.ec() || _.bc("Silk"));
  };
  _.nc = function (a) {
    var b = {};
    a.forEach(function (c) {
      b[c[0]] = c[1];
    });
    return function (c) {
      return (
        b[
          c.find(function (d) {
            return d in b;
          })
        ] || ""
      );
    };
  };
  _.oc = function (a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) return b[1];
    b = "";
    var c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])
      if (((a = /Trident\/(\d.\d)/.exec(a)), c[1] == "7.0"))
        if (a && a[1])
          switch (a[1]) {
            case "4.0":
              b = "8.0";
              break;
            case "5.0":
              b = "9.0";
              break;
            case "6.0":
              b = "10.0";
              break;
            case "7.0":
              b = "11.0";
          }
        else b = "7.0";
      else b = c[1];
    return b;
  };
  pc = function () {
    return _.Yb ? !!_.Zb && !!_.Zb.platform : !1;
  };
  _.qc = function () {
    return pc() ? _.Zb.platform === "Android" : _.bc("Android");
  };
  _.rc = function () {
    return _.bc("iPhone") && !_.bc("iPod") && !_.bc("iPad");
  };
  _.sc = function () {
    return _.rc() || _.bc("iPad") || _.bc("iPod");
  };
  _.tc = function () {
    return pc() ? _.Zb.platform === "macOS" : _.bc("Macintosh");
  };
  _.uc = function () {
    return pc() ? _.Zb.platform === "Windows" : _.bc("Windows");
  };
  _.vc = function () {
    return pc() ? _.Zb.platform === "Chrome OS" : _.bc("CrOS");
  };
  _.xc = function (a, b) {
    if (a.nodeType === 1) {
      var c = a.tagName;
      if (c === "SCRIPT" || c === "STYLE") throw Error("m");
    }
    a.innerHTML = _.wc(b);
  };
  _.yc = function (a) {
    var b = typeof a;
    return (b == "object" && a != null) || b == "function";
  };
  _.zc = function (a) {
    if (!(a instanceof Array)) {
      a = _.sa(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  };
  _.A = function (a, b) {
    a.prototype = (0, _.wa)(b.prototype);
    a.prototype.constructor = a;
    if (_.Da) (0, _.Da)(a, b);
    else
      for (var c in b)
        if (c != "prototype")
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.N = b.prototype;
  };
  _.Ac = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  };
  _.Cc = function (a, b) {
    a = a.split(".");
    b = b || _.Sa;
    for (var c = 0; c < a.length; c++)
      if (((b = b[a[c]]), b == null)) return null;
    return b;
  };
  Dc = function (a, b) {
    var c = _.Cc("WIZ_global_data.oxN3nb");
    a = c && c[a];
    return a != null ? a : b;
  };
  _.Fc = function (a) {
    var b = typeof a;
    return b != "object" ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  };
  _.Gc = function (a) {
    var b = _.Fc(a);
    return b == "array" || (b == "object" && typeof a.length == "number");
  };
  Hc = 0;
  _.Ic = function (a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, _.Za) && a[_.Za]) ||
      (a[_.Za] = ++Hc)
    );
  };
  _.Jc = function () {
    return Date.now();
  };
  Kc = function (a) {
    return a;
  };
  _.bb(_.rb, Error);
  _.rb.prototype.name = "CustomError";
  Mc = {};
  Nc = {};
  _.Oc = function (a, b) {
    this.h0 = (a === Mc && b) || "";
    this.h5 = Nc;
  };
  _.Oc.prototype.toString = function () {
    return this.h0;
  };
  _.Pc = function (a) {
    return a instanceof _.Oc && a.constructor === _.Oc && a.h5 === Nc
      ? a.h0
      : "type_error:Const";
  };
  _.Qc = function (a) {
    return new _.Oc(Mc, a);
  };
  Sc = function () {
    if (Rc === void 0) {
      var a = null,
        b = _.Sa.trustedTypes;
      if (b && b.createPolicy)
        try {
          a = b.createPolicy("goog#html", {
            createHTML: Kc,
            createScript: Kc,
            createScriptURL: Kc,
          });
        } catch (c) {
          _.Sa.console && _.Sa.console.error(c.message);
        }
      Rc = a;
    }
    return Rc;
  };
  _.Tc = function (a) {
    this.uY = a;
  };
  _.Tc.prototype.toString = function () {
    return this.uY + "";
  };
  _.Uc = function (a) {
    if (a instanceof _.Tc && a.constructor === _.Tc) return a.uY;
    _.Fc(a);
    return "type_error:TrustedResourceUrl";
  };
  Vc = {};
  _.Xc = function (a) {
    var b = Sc();
    a = b ? b.createScriptURL(a) : a;
    return new _.Tc(a, Vc);
  };
  _.Yc = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  _.sb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  _.Zc = Array.prototype.lastIndexOf
    ? function (a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1);
      }
    : function (a, b) {
        var c = a.length - 1;
        c < 0 && (c = Math.max(0, a.length + c));
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1
            ? -1
            : a.lastIndexOf(b, c);
        for (; c >= 0; c--) if (c in a && a[c] === b) return c;
        return -1;
      };
  _.$c = Array.prototype.forEach
    ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c);
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0;
          f < d;
          f++
        )
          f in e && b.call(c, e[f], f, a);
      };
  _.ad = Array.prototype.filter
    ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0);
      }
    : function (a, b) {
        for (
          var c = a.length,
            d = [],
            e = 0,
            f = typeof a === "string" ? a.split("") : a,
            h = 0;
          h < c;
          h++
        )
          if (h in f) {
            var k = f[h];
            b.call(void 0, k, h, a) && (d[e++] = k);
          }
        return d;
      };
  _.bd = Array.prototype.map
    ? function (a, b, c) {
        return Array.prototype.map.call(a, b, c);
      }
    : function (a, b, c) {
        for (
          var d = a.length,
            e = Array(d),
            f = typeof a === "string" ? a.split("") : a,
            h = 0;
          h < d;
          h++
        )
          h in f && (e[h] = b.call(c, f[h], h, a));
        return e;
      };
  _.cd = Array.prototype.reduce
    ? function (a, b, c) {
        return Array.prototype.reduce.call(a, b, c);
      }
    : function (a, b, c) {
        var d = c;
        (0, _.$c)(a, function (e, f) {
          d = b.call(void 0, d, e, f, a);
        });
        return d;
      };
  _.dd = Array.prototype.some
    ? function (a, b, c) {
        return Array.prototype.some.call(a, b, c);
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0;
          f < d;
          f++
        )
          if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1;
      };
  _.ed = Array.prototype.every
    ? function (a, b, c) {
        return Array.prototype.every.call(a, b, c);
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0;
          f < d;
          f++
        )
          if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0;
      };
  var Ab =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  var jd, kd, ld, md, nd, od, id, qd;
  _.fd = function (a, b) {
    return a.lastIndexOf(b, 0) == 0;
  };
  _.gd = function (a) {
    return /^[\s\xa0]*$/.test(a);
  };
  _.hd = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  _.pd = function (a) {
    if (!id.test(a)) return a;
    a.indexOf("&") != -1 && (a = a.replace(jd, "&amp;"));
    a.indexOf("<") != -1 && (a = a.replace(kd, "&lt;"));
    a.indexOf(">") != -1 && (a = a.replace(ld, "&gt;"));
    a.indexOf('"') != -1 && (a = a.replace(md, "&quot;"));
    a.indexOf("'") != -1 && (a = a.replace(nd, "&#39;"));
    a.indexOf("\x00") != -1 && (a = a.replace(od, "&#0;"));
    return a;
  };
  jd = /&/g;
  kd = /</g;
  ld = />/g;
  md = /"/g;
  nd = /'/g;
  od = /\x00/g;
  id = /[\x00&<>"']/;
  _.$b = function (a, b) {
    return a.indexOf(b) != -1;
  };
  _.rd = function (a, b) {
    var c = 0;
    a = (0, _.hd)(String(a)).split(".");
    b = (0, _.hd)(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
      var f = a[e] || "",
        h = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
        if (f[0].length == 0 && h[0].length == 0) break;
        c =
          qd(
            f[1].length == 0 ? 0 : parseInt(f[1], 10),
            h[1].length == 0 ? 0 : parseInt(h[1], 10)
          ) ||
          qd(f[2].length == 0, h[2].length == 0) ||
          qd(f[2], h[2]);
        f = f[3];
        h = h[3];
      } while (c == 0);
    }
    return c;
  };
  qd = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  _.Jb = function (a) {
    this.wY = a;
  };
  _.Jb.prototype.toString = function () {
    return this.wY;
  };
  _.Ob = new _.Jb("about:invalid#zClosurez");
  var Lb, Nb, Qb;
  Lb = function (a) {
    this.Dj = a;
  };
  Nb = [
    Mb("data"),
    Mb("http"),
    Mb("https"),
    Mb("mailto"),
    Mb("ftp"),
    new Lb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  _.sd = Hb(function () {
    return typeof URL === "function";
  });
  Qb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  _.td = {};
  _.ud = function (a) {
    this.tY = a;
  };
  _.ud.prototype.toString = function () {
    return this.tY.toString();
  };
  _.vd = new _.ud("", _.td);
  _.wd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
  _.xd = RegExp(
    "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
    "g"
  );
  _.yd = RegExp(
    "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
    "g"
  );
  var Cd;
  _.Ad = {};
  _.Bd = function (a) {
    this.sY = a;
  };
  _.Bd.prototype.toString = function () {
    return this.sY.toString();
  };
  _.Dd = function (a) {
    a = _.Pc(a);
    return a.length === 0 ? Cd : new _.Bd(a, _.Ad);
  };
  Cd = new _.Bd("", _.Ad);
  var Ed;
  Ed = {};
  _.Ub = function (a) {
    this.rY = a;
  };
  _.Ub.prototype.toString = function () {
    return this.rY.toString();
  };
  _.wc = function (a) {
    if (a instanceof _.Ub && a.constructor === _.Ub) return a.rY;
    _.Fc(a);
    return "type_error:SafeHtml";
  };
  _.Fd = function (a) {
    return a instanceof _.Ub ? a : _.Vb(_.pd(String(a)));
  };
  _.Vb = function (a) {
    var b = Sc();
    a = b ? b.createHTML(a) : a;
    return new _.Ub(a, Ed);
  };
  _.Id = new _.Ub((_.Sa.trustedTypes && _.Sa.trustedTypes.emptyHTML) || "", Ed);
  var Kd = function (a, b, c, d) {
    var e = new Map(Jd);
    this.c6 = a;
    this.rR = e;
    this.d6 = b;
    this.R9 = c;
    this.NT = d;
  };
  var Ld =
      "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(
        " "
      ),
    Jd = [
      ["A", new Map([["href", { Bd: 2 }]])],
      ["AREA", new Map([["href", { Bd: 2 }]])],
      [
        "LINK",
        new Map([
          [
            "href",
            {
              Bd: 5,
              conditions: new Map([
                [
                  "rel",
                  new Set(
                    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
                      " "
                    )
                  ),
                ],
              ]),
            },
          ],
        ]),
      ],
      [
        "SOURCE",
        new Map([
          ["src", { Bd: 5 }],
          ["srcset", { Bd: 6 }],
        ]),
      ],
      [
        "IMG",
        new Map([
          ["src", { Bd: 5 }],
          ["srcset", { Bd: 6 }],
        ]),
      ],
      ["VIDEO", new Map([["src", { Bd: 5 }]])],
      ["AUDIO", new Map([["src", { Bd: 5 }]])],
    ],
    Md =
      "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(
        " "
      ),
    Nd = [
      [
        "dir",
        {
          Bd: 3,
          conditions: Hb(function () {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]]);
          }),
        },
      ],
      [
        "async",
        {
          Bd: 3,
          conditions: Hb(function () {
            return new Map([["async", new Set(["async"])]]);
          }),
        },
      ],
      ["cite", { Bd: 2 }],
      [
        "loading",
        {
          Bd: 3,
          conditions: Hb(function () {
            return new Map([["loading", new Set(["eager", "lazy"])]]);
          }),
        },
      ],
      ["poster", { Bd: 2 }],
      [
        "target",
        {
          Bd: 3,
          conditions: Hb(function () {
            return new Map([["target", new Set(["_self", "_blank"])]]);
          }),
        },
      ],
    ],
    Pd = new Kd(new Set(Ld), new Set(Md), new Map(Nd)),
    Qd = new Kd(
      new Set(Ld.concat(["BUTTON", "INPUT"])),
      new Set(
        Hb(function () {
          return Md.concat(["class", "id", "name"]);
        })
      ),
      new Map(
        Hb(function () {
          return Nd.concat([["style", { Bd: 1 }]]);
        })
      )
    ),
    Rd = new Kd(
      new Set(
        Hb(function () {
          return Ld.concat(
            "STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" ")
          );
        })
      ),
      new Set(
        Hb(function () {
          return Md.concat([
            "class",
            "id",
            "tabindex",
            "contenteditable",
            "name",
          ]);
        })
      ),
      new Map(
        Hb(function () {
          return Nd.concat([["style", { Bd: 1 }]]);
        })
      ),
      new Set(["data-", "aria-"])
    );
  var Sd = function (a) {
    this.lZ = a;
  };
  Sd.prototype.createTextNode = function (a) {
    return document.createTextNode(a);
  };
  _.Td = Hb(function () {
    return new Sd(Pd);
  });
  _.Ud = Hb(function () {
    return new Sd(Qd);
  });
  _.Vd = Hb(function () {
    return new Sd(Rd);
  });
  var Wd = !!(_.Wa[0] & 1024),
    Xd = !!(_.Wa[0] & 32),
    Yd = !!(_.Wa[0] & 2048),
    Zd = !!(_.Wa[0] & 16),
    $d = !!(_.Wa[0] & 8);
  var ae;
  ae = Dc(1, !0);
  _.Yb = Wd ? Yd : Dc(610401301, !1);
  _.be = Wd ? Xd || !Zd : Dc(188588736, ae);
  _.ce = Wd ? Xd || !$d : Dc(645172343, ae);
  var de;
  de = _.Sa.navigator;
  _.Zb = de ? de.userAgentData || null : null;
  var ee = function (a) {
    ee[" "](a);
    return a;
  };
  ee[" "] = function () {};
  _.fe = function (a, b) {
    try {
      return ee(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var ve, we, Be;
  _.ge = _.ec();
  _.he = _.fc();
  _.ie = _.bc("Edge");
  _.je = _.ie || _.he;
  _.ke =
    _.bc("Gecko") &&
    !(_.$b(_.Xb().toLowerCase(), "webkit") && !_.bc("Edge")) &&
    !(_.bc("Trident") || _.bc("MSIE")) &&
    !_.bc("Edge");
  _.le = _.$b(_.Xb().toLowerCase(), "webkit") && !_.bc("Edge");
  _.me = _.le && _.bc("Mobile");
  _.ne = _.tc();
  _.oe = _.uc();
  _.pe = (pc() ? _.Zb.platform === "Linux" : _.bc("Linux")) || _.vc();
  _.qe = _.qc();
  _.re = _.rc();
  _.se = _.bc("iPad");
  _.te = _.bc("iPod");
  _.ue = _.sc();
  ve = function () {
    var a = _.Sa.document;
    return a ? a.documentMode : void 0;
  };
  a: {
    var xe = "",
      ye = (function () {
        var a = _.Xb();
        if (_.ke) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (_.ie) return /Edge\/([\d\.]+)/.exec(a);
        if (_.he) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (_.le) return /WebKit\/(\S+)/.exec(a);
        if (_.ge) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    ye && (xe = ye ? ye[1] : "");
    if (_.he) {
      var ze = ve();
      if (ze != null && ze > parseFloat(xe)) {
        we = String(ze);
        break a;
      }
    }
    we = xe;
  }
  _.Ae = we;
  if (_.Sa.document && _.he) {
    var De = ve();
    Be = De ? De : parseInt(_.Ae, 10) || void 0;
  } else Be = void 0;
  _.Ee = Be;
  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (a) {}
  var Fe, He;
  Fe = _.Yc(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = _.wc(_.Id);
    return !b.parentElement;
  });
  _.Ge = function (a, b) {
    if (Fe()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = _.wc(b);
  };
  He = /^[\w+/_-]+[=]{0,2}$/;
  _.Ie = function (a, b) {
    b = (b || _.Sa).document;
    return b.querySelector
      ? (a = b.querySelector(a)) &&
        (a = a.nonce || a.getAttribute("nonce")) &&
        He.test(a)
        ? a
        : ""
      : "";
  };
  _.Je = function (a, b) {
    this.width = a;
    this.height = b;
  };
  _.Ke = function (a, b) {
    return a == b
      ? !0
      : a && b
      ? a.width == b.width && a.height == b.height
      : !1;
  };
  _.g = _.Je.prototype;
  _.g.clone = function () {
    return new _.Je(this.width, this.height);
  };
  _.g.Vx = function () {
    return this.width * this.height;
  };
  _.g.aspectRatio = function () {
    return this.width / this.height;
  };
  _.g.isEmpty = function () {
    return !this.Vx();
  };
  _.g.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  _.g.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  _.g.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  _.g.scale = function (a, b) {
    this.width *= a;
    this.height *= typeof b === "number" ? b : a;
    return this;
  };
  _.Le = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      };
  _.Me = (Math.random() * 2147483648) | 0;
  var Se, $e, Ze;
  _.Pe = function (a) {
    return a ? new _.Ne(_.Oe(a)) : Bc || (Bc = new _.Ne());
  };
  _.Qe = function (a, b) {
    return typeof b === "string" ? a.getElementById(b) : b;
  };
  _.Re = function (a, b, c, d) {
    a = d || a;
    b = b && b != "*" ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c))
      return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, f = 0, h; (h = a[f]); f++)
          b == h.nodeName && (d[e++] = h);
        d.length = e;
        return d;
      }
      return a;
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (f = e = 0; (h = a[f]); f++)
        (b = h.className),
          typeof b.split == "function" &&
            _.tb(b.split(/\s+/), c) &&
            (d[e++] = h);
      d.length = e;
      return d;
    }
    return a;
  };
  _.Te = function (a, b) {
    _.wb(b, function (c, d) {
      d == "style"
        ? (a.style.cssText = c)
        : d == "class"
        ? (a.className = c)
        : d == "for"
        ? (a.htmlFor = c)
        : Se.hasOwnProperty(d)
        ? a.setAttribute(Se[d], c)
        : _.fd(d, "aria-") || _.fd(d, "data-")
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  };
  Se = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };
  _.Ve = function (a) {
    return _.Ue(a || window);
  };
  _.Ue = function (a) {
    a = a.document;
    a = _.We(a) ? a.documentElement : a.body;
    return new _.Je(a.clientWidth, a.clientHeight);
  };
  _.Ye = function (a) {
    return a ? a.parentWindow || a.defaultView : window;
  };
  _.af = function (a, b) {
    var c = b[1],
      d = Ze(a, String(b[0]));
    c &&
      (typeof c === "string"
        ? (d.className = c)
        : Array.isArray(c)
        ? (d.className = c.join(" "))
        : _.Te(d, c));
    b.length > 2 && $e(a, d, b, 2);
    return d;
  };
  $e = function (a, b, c, d) {
    function e(k) {
      k && b.appendChild(typeof k === "string" ? a.createTextNode(k) : k);
    }
    for (; d < c.length; d++) {
      var f = c[d];
      if (!_.Gc(f) || (_.yc(f) && f.nodeType > 0)) e(f);
      else {
        a: {
          if (f && typeof f.length == "number") {
            if (_.yc(f)) {
              var h = typeof f.item == "function" || typeof f.item == "string";
              break a;
            }
            if (typeof f === "function") {
              h = typeof f.item == "function";
              break a;
            }
          }
          h = !1;
        }
        _.$c(h ? _.vb(f) : f, e);
      }
    }
  };
  _.bf = function (a) {
    return Ze(document, a);
  };
  Ze = function (a, b) {
    b = String(b);
    a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
    return a.createElement(b);
  };
  _.We = function (a) {
    return a.compatMode == "CSS1Compat";
  };
  _.cf = function (a) {
    if (a.nodeType != 1) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  _.df = function (a, b) {
    $e(_.Oe(a), a, arguments, 1);
  };
  _.ef = function (a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b);
  };
  _.ff = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b);
  };
  _.gf = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  _.hf = function (a) {
    return a.children != void 0
      ? a.children
      : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1;
        });
  };
  _.jf = function (a) {
    return _.yc(a) && a.nodeType == 1;
  };
  _.kf = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
    if (typeof a.compareDocumentPosition != "undefined")
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  _.Oe = function (a) {
    return a.nodeType == 9 ? a : a.ownerDocument || a.document;
  };
  _.lf = function (a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (a.nodeType == 3) a.data = String(b);
    else if (a.firstChild && a.firstChild.nodeType == 3) {
      for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
      a.firstChild.data = String(b);
    } else _.ef(a), a.appendChild(_.Oe(a).createTextNode(String(b)));
  };
  _.Ne = function (a) {
    this.Rb = a || _.Sa.document || document;
  };
  _.g = _.Ne.prototype;
  _.g.Ja = _.Pe;
  _.g.bL = _.gb(0);
  _.g.Ab = function () {
    return this.Rb;
  };
  _.g.O = _.gb(1);
  _.g.getElementsByTagName = function (a, b) {
    return (b || this.Rb).getElementsByTagName(String(a));
  };
  _.g.lH = _.gb(2);
  _.g.wa = function (a, b, c) {
    return _.af(this.Rb, arguments);
  };
  _.g.createElement = function (a) {
    return Ze(this.Rb, a);
  };
  _.g.createTextNode = function (a) {
    return this.Rb.createTextNode(String(a));
  };
  _.g.getWindow = function () {
    var a = this.Rb;
    return a.parentWindow || a.defaultView;
  };
  _.g.appendChild = function (a, b) {
    a.appendChild(b);
  };
  _.g.append = _.df;
  _.g.canHaveChildren = _.cf;
  _.g.Ae = _.ef;
  _.g.jV = _.ff;
  _.g.removeNode = _.gf;
  _.g.vG = _.hf;
  _.g.isElement = _.jf;
  _.g.contains = _.kf;
  _.g.NG = _.Oe;
  _.g.Bj = _.gb(3);
  _.mf = function (a) {
    var b = _.Ac.apply(1, arguments);
    if (b.length === 0) return _.Xc(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return _.Xc(c);
  };
  _.nf = function (a) {
    var b, c;
    return (a =
      (c = (b = a.document).querySelector) == null
        ? void 0
        : c.call(b, "script[nonce]"))
      ? a.nonce || a.getAttribute("nonce") || ""
      : "";
  };
  _.of = function (a, b) {
    a.src = _.Uc(b);
    (b = _.nf((a.ownerDocument && a.ownerDocument.defaultView) || window)) &&
      a.setAttribute("nonce", b);
  };
  _.pf = function (a) {
    return (a.raw = a);
  };
  /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  _.qf = function (a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  };
  _.rf = window;
  _.sf = document;
  _.tf = _.rf.location;
  _.uf = /\[native code\]/;
  _.vf = function (a, b, c) {
    return (a[b] = a[b] || c);
  };
  _.wf = function () {
    var a;
    if ((a = Object.create) && _.uf.test(a)) a = a(null);
    else {
      a = {};
      for (var b in a) a[b] = void 0;
    }
    return a;
  };
  _.xf = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  _.Af = function (a, b) {
    a = a || {};
    for (var c in a) _.xf(a, c) && (b[c] = a[c]);
  };
  _.Bf = _.vf(_.rf, "gapi", {});
  _.Cf = function (a, b, c) {
    var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
    b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
    if ((a = a && (d.exec(a) || b.exec(a))))
      try {
        c = decodeURIComponent(a[2]);
      } catch (e) {}
    return c;
  };
  _.Df = new RegExp(
    /^/.source +
      /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source +
      /(\/\/[^\/?#]*)?/.source +
      /([^?#]*)?/.source +
      /(\?([^#]*))?/.source +
      /(#((#|[^#])*))?/.source +
      /$/.source
  );
  _.Ef = new RegExp(
    /(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source +
      /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
    "g"
  );
  _.Ff = new RegExp(
    /\/?\??#?/.source +
      "(" +
      /[\/?#]/i.source +
      "|" +
      /[\uD800-\uDBFF]/i.source +
      "|" +
      /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source +
      "|" +
      /%[0-9a-f]?/i.source +
      ")$",
    "i"
  );
  _.Hf = function (a, b, c) {
    _.Gf(a, b, c, "add", "at");
  };
  _.Gf = function (a, b, c, d, e) {
    if (a[d + "EventListener"]) a[d + "EventListener"](b, c, !1);
    else if (a[e + "tachEvent"]) a[e + "tachEvent"]("on" + b, c);
  };
  _.If = {};
  _.If = _.vf(_.rf, "___jsl", _.wf());
  _.vf(_.If, "I", 0);
  _.vf(_.If, "hel", 10);
  var Jf, Kf, Lf, Mf, Pf, Nf, Of, Qf, Rf;
  Jf = function (a) {
    var b = (window.___jsl = window.___jsl || {});
    b[a] = b[a] || [];
    return b[a];
  };
  Kf = function (a) {
    var b = (window.___jsl = window.___jsl || {});
    b.cfg = (!a && b.cfg) || {};
    return b.cfg;
  };
  Lf = function (a) {
    return typeof a === "object" && /\[native code\]/.test(a.push);
  };
  Mf = function (a, b, c) {
    if (b && typeof b === "object")
      for (var d in b)
        !Object.prototype.hasOwnProperty.call(b, d) ||
          (c && d === "___goc" && typeof b[d] === "undefined") ||
          (a[d] &&
          b[d] &&
          typeof a[d] === "object" &&
          typeof b[d] === "object" &&
          !Lf(a[d]) &&
          !Lf(b[d])
            ? Mf(a[d], b[d])
            : b[d] && typeof b[d] === "object"
            ? ((a[d] = Lf(b[d]) ? [] : {}), Mf(a[d], b[d]))
            : (a[d] = b[d]));
  };
  Pf = function (a, b) {
    if (a && !/^\s+$/.test(a)) {
      for (; a.charCodeAt(a.length - 1) == 0; )
        a = a.substring(0, a.length - 1);
      var c = a,
        d = Jf("dm");
      d.push(20);
      try {
        var e = window.JSON.parse(a);
      } catch (h) {}
      if (typeof e === "object") return d.push(21), e;
      try {
        e = window.JSON.parse("{" + a + "}");
      } catch (h) {}
      if (typeof e === "object") return d.push(22), e;
      a = a.replace(
        RegExp("([^\"',{}\\s]+?)\\s*:\\s*(.*?)[,}\\s]", "g"),
        function (h, k, l) {
          l = l.startsWith('"') ? "%DOUBLE_QUOTE%" + l.substring(1) : l;
          l = l.endsWith('"') ? l.slice(0, -1) + "%DOUBLE_QUOTE%" : l;
          return "%DOUBLE_QUOTE%" + k + "%DOUBLE_QUOTE%:" + l;
        }
      );
      a = a.replace(/\\'/g, "%SINGLE_QUOTE%");
      a = a.replace(/"/g, '\\"');
      a = a.replace(/'/g, '"');
      a = a.replace(/%SINGLE_QUOTE%/g, "'");
      a = a.replace(/%DOUBLE_QUOTE%/g, '"');
      try {
        e = window.JSON.parse(a);
      } catch (h) {}
      if (typeof e === "object") return d.push(23), e;
      try {
        e = window.JSON.parse("{" + a + "}");
      } catch (h) {}
      if (typeof e === "object") return d.push(24), e;
      a = document.getElementsByTagName("script") || [];
      var f;
      a.length > 0 && (f = a[0].nonce || a[0].getAttribute("nonce"));
      if ((f && f === b) || (!f && Nf()))
        if (((e = Of(c)), d.push(25), typeof e === "object")) return e;
      return {};
    }
  };
  Nf = function () {
    var a = window.location.hostname;
    return a
      ? /(^|\.)(2mdn|ampproject|android|appspot|blogger|blogspot|chrome|chromium|doubleclick|gcpnode|ggpht|gmail|google|google-analytics|googleadservices|googleapis|googleapis-cn|googleoptimize|googlers|googlesource|googlesyndication|googletagmanager|googletagservices|googleusercontent|googlevideo|gstatic|tiltbrush|waze|withgoogle|youtube|ytimg)(\.com?|\.net|\.org)?(\.[a-z][a-z]|\.cat)?$/.test(
          a
        )
      : !1;
  };
  Of = function (a) {
    try {
      var b = new Function("return (" + a + "\n)")();
    } catch (c) {}
    if (typeof b === "object") return b;
    try {
      b = new Function("return ({" + a + "\n})")();
    } catch (c) {}
    return b;
  };
  Qf = function (a, b) {
    var c = { ___goc: void 0 };
    a.length &&
      a[a.length - 1] &&
      Object.hasOwnProperty.call(a[a.length - 1], "___goc") &&
      typeof a[a.length - 1].___goc === "undefined" &&
      (c = a.pop());
    Mf(c, b);
    a.push(c);
  };
  Rf = function (a) {
    Kf(!0);
    var b = window.___gcfg,
      c = Jf("cu"),
      d = window.___gu;
    b && b !== d && (Qf(c, b), (window.___gu = b));
    b = Jf("cu");
    var e = document.getElementsByTagName("script") || [];
    d = [];
    var f = [];
    f.push.apply(f, Jf("us"));
    for (var h = 0; h < e.length; ++h)
      for (var k = e[h], l = 0; l < f.length; ++l)
        k.src && k.src.indexOf(f[l]) == 0 && d.push(k);
    d.length == 0 &&
      e.length > 0 &&
      e[e.length - 1].src &&
      d.push(e[e.length - 1]);
    for (e = 0; e < d.length; ++e)
      d[e].getAttribute("gapi_processed") ||
        (d[e].setAttribute("gapi_processed", !0),
        (f = d[e])
          ? ((h = f.nodeType),
            (f = h == 3 || h == 4 ? f.nodeValue : f.textContent || ""))
          : (f = void 0),
        (h = d[e].nonce || d[e].getAttribute("nonce")),
        (f = Pf(f, h)) && b.push(f));
    a && Qf(c, a);
    d = Jf("cd");
    a = 0;
    for (b = d.length; a < b; ++a) Mf(Kf(), d[a], !0);
    d = Jf("ci");
    a = 0;
    for (b = d.length; a < b; ++a) Mf(Kf(), d[a], !0);
    a = 0;
    for (b = c.length; a < b; ++a) Mf(Kf(), c[a], !0);
  };
  _.Sf = function (a, b) {
    var c = Kf();
    if (!a) return c;
    a = a.split("/");
    for (var d = 0, e = a.length; c && typeof c === "object" && d < e; ++d)
      c = c[a[d]];
    return d === a.length && c !== void 0 ? c : b;
  };
  _.Tf = function (a, b) {
    var c;
    if (typeof a === "string") {
      var d = (c = {});
      a = a.split("/");
      for (var e = 0, f = a.length; e < f - 1; ++e) {
        var h = {};
        d = d[a[e]] = h;
      }
      d[a[e]] = b;
    } else c = a;
    Rf(c);
  };
  var Uf = function () {
    var a = window.__GOOGLEAPIS;
    a &&
      (a.googleapis &&
        !a["googleapis.config"] &&
        (a["googleapis.config"] = a.googleapis),
      _.vf(_.If, "ci", []).push(a),
      (window.__GOOGLEAPIS = void 0));
  };
  Uf && Uf();
  Rf();
  _.r("gapi.config.get", _.Sf);
  _.r("gapi.config.update", _.Tf);
  var Vf, Wf, Xf, Yf, Zf, $f, bg, fg, gg, hg, ig, cg, dg;
  Vf = function (a, b) {
    var c = b.createRange();
    c.selectNode(b.body);
    a = _.Vb(a);
    return c.createContextualFragment(_.wc(a));
  };
  Wf = function (a) {
    a = a.nodeName;
    return typeof a === "string" ? a : "FORM";
  };
  Xf = function (a) {
    a = a.nodeType;
    return a === 1 || typeof a !== "number";
  };
  Yf = function (a, b, c) {
    a.setAttribute(b, c);
  };
  Zf = function (a, b) {
    var c = new XMLHttpRequest();
    c.open("POST", a);
    c.setRequestHeader("Content-Type", "application/json");
    c.send(b);
  };
  $f = function (a, b) {
    (typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.sendBeacon !== void 0
      ? navigator.sendBeacon.bind(navigator)
      : Zf)(
      "https://csp.withgoogle.com/csp/lcreport/" + a.hK,
      JSON.stringify({
        host: window.location.hostname,
        type: b,
        additionalData: void 0,
      })
    );
  };
  bg = function (a, b) {
    try {
      _.ag(_.Vd, a);
    } catch (c) {
      return $f(b, "H_SLSANITIZE"), !0;
    }
    try {
      _.ag(_.Ud, a);
    } catch (c) {
      return $f(b, "H_RSANITIZE"), !0;
    }
    try {
      _.ag(_.Td, a);
    } catch (c) {
      return $f(b, "H_SANITIZE"), !0;
    }
    return !1;
  };
  _.eg = function (a, b) {
    a = _.qf(a);
    var c;
    if ((c = b)) {
      var d, e;
      c =
        Math.random() <
        ((e = (d = b.Fra) != null ? d : cg[b.hK[0]]) != null ? e : 0);
    }
    if (
      c &&
      window.SAFEVALUES_REPORTING !== !1 &&
      "DocumentFragment" in window
    ) {
      var f, h;
      Math.random() <
        ((h = (f = b.uqa) != null ? f : dg[b.hK[0]]) != null ? h : 0) &&
        $f(b, "HEARTBEAT");
      bg(a, b) || (_.Wb(a).toString() !== a && $f(b, "H_ESCAPE"));
    }
    return _.Vb(a);
  };
  fg = ["data:", "http:", "https:", "mailto:", "ftp:"];
  gg = function (a, b, c) {
    c = a.rR.get(c);
    return (c == null ? 0 : c.has(b))
      ? c.get(b)
      : a.d6.has(b)
      ? { Bd: 1 }
      : (c = a.R9.get(b))
      ? c
      : a.NT &&
        [].concat(_.zc(a.NT)).some(function (d) {
          return b.indexOf(d) === 0;
        })
      ? { Bd: 1 }
      : { Bd: 0 };
  };
  hg = function (a, b, c) {
    var d = Wf(b);
    c = c.createElement(d);
    b = b.attributes;
    for (var e = _.sa(b), f = e.next(); !f.done; f = e.next()) {
      var h = f.value;
      f = h.name;
      h = h.value;
      var k = gg(a.lZ, f, d),
        l;
      a: {
        if ((l = k.conditions)) {
          l = _.sa(l);
          for (var m = l.next(); !m.done; m = l.next()) {
            var n = _.sa(m.value);
            m = n.next().value;
            n = n.next().value;
            var p = void 0;
            if (
              (m = (p = b.getNamedItem(m)) == null ? void 0 : p.value) &&
              !n.has(m)
            ) {
              l = !1;
              break a;
            }
          }
        }
        l = !0;
      }
      if (l)
        switch (k.Bd) {
          case 1:
            Yf(c, f, h);
            break;
          case 2:
            a: if (((k = void 0), _.sd)) {
              try {
                k = new URL(h);
              } catch (q) {
                k = "https:";
                break a;
              }
              k = k.protocol;
            } else
              b: {
                k = document.createElement("a");
                try {
                  k.href = h;
                } catch (q) {
                  k = void 0;
                  break b;
                }
                k = k.protocol;
                k = k === ":" || k === "" ? "https:" : k;
              }
            Yf(
              c,
              f,
              k !== void 0 && fg.indexOf(k.toLowerCase()) !== -1
                ? h
                : "about:invalid#zClosurez"
            );
            break;
          case 3:
            Yf(c, f, h.toLowerCase());
            break;
          case 4:
            Yf(c, f, h);
            break;
          case 5:
            Yf(c, f, h);
            break;
          case 6:
            Yf(c, f, h);
        }
    }
    return c;
  };
  ig = function (a, b, c) {
    b = Vf(b, c);
    b = document.createTreeWalker(b, 5, function (k) {
      if (k.nodeType === 3) k = 1;
      else if (Xf(k))
        if (((k = Wf(k)), k === null)) k = 2;
        else {
          var l = a.lZ;
          k = k !== "FORM" && (l.c6.has(k) || l.rR.has(k)) ? 1 : 2;
        }
      else k = 2;
      return k;
    });
    for (
      var d = b.nextNode(), e = c.createDocumentFragment(), f = e;
      d !== null;

    ) {
      var h = void 0;
      if (d.nodeType === 3) h = a.createTextNode(d.data);
      else if (Xf(d)) h = hg(a, d, c);
      else throw Error("m");
      f.appendChild(h);
      if ((d = b.firstChild())) f = h;
      else
        for (; !(d = b.nextSibling()) && (d = b.parentNode()); )
          f = f.parentNode;
    }
    return e;
  };
  _.ag = function (a, b) {
    var c = document.implementation.createHTMLDocument("");
    a = ig(a, b, c);
    c = c.body;
    c.appendChild(a);
    c = new XMLSerializer().serializeToString(c);
    c = c.slice(c.indexOf(">") + 1, c.lastIndexOf("</"));
    return _.Vb(c);
  };
  cg = { 0: 1, 1: 1 };
  dg = { 0: 0.1, 1: 0.1 };
  _.Kh = (window.gapi || {}).load;
  _.To = _.vf(_.If, "rw", _.wf());
  var Uo = function (a, b) {
    (a = _.To[a]) && a.state < b && (a.state = b);
  };
  var Vo = function (a) {
    a = (a = _.To[a]) ? a.oid : void 0;
    if (a) {
      var b = _.sf.getElementById(a);
      b && b.parentNode.removeChild(b);
      delete _.To[a];
      Vo(a);
    }
  };
  _.Wo = function (a) {
    a = a.container;
    typeof a === "string" && (a = document.getElementById(a));
    return a;
  };
  _.Xo = function (a) {
    var b = a.clientWidth;
    return (
      "position:absolute;top:-10000px;width:" +
      (b ? b + "px" : a.style.width || "300px") +
      ";margin:0px;border-style:none;"
    );
  };
  _.Yo = function (a, b) {
    var c = {},
      d = a.Ac(),
      e = b && b.width,
      f = b && b.height,
      h = b && b.verticalAlign;
    h && (c.verticalAlign = h);
    e || (e = d.width || a.width);
    f || (f = d.height || a.height);
    d.width = c.width = e;
    d.height = c.height = f;
    d = a.getIframeEl();
    e = a.getId();
    Uo(e, 2);
    a: {
      e = a.getSiteEl();
      c = c || {};
      if (_.If.oa) {
        var k = d.id;
        if (k) {
          f = (f = _.To[k]) ? f.state : void 0;
          if (f === 1 || f === 4) break a;
          Vo(k);
        }
      }
      (f = e.nextSibling) &&
        f.dataset &&
        f.dataset.gapistub &&
        (e.parentNode.removeChild(f), (e.style.cssText = ""));
      f = c.width;
      h = c.height;
      var l = e.style;
      l.textIndent = "0";
      l.margin = "0";
      l.padding = "0";
      l.background = "transparent";
      l.borderStyle = "none";
      l.cssFloat = "none";
      l.styleFloat = "none";
      l.lineHeight = "normal";
      l.fontSize = "1px";
      l.verticalAlign = "baseline";
      e = e.style;
      e.display = "inline-block";
      d = d.style;
      d.position = "static";
      d.left = "0";
      d.top = "0";
      d.visibility = "visible";
      f && (e.width = d.width = f + "px");
      h && (e.height = d.height = h + "px");
      c.verticalAlign && (e.verticalAlign = c.verticalAlign);
      k && Uo(k, 3);
    }
    (k = b ? b.title : null) && a.getIframeEl().setAttribute("title", k);
    (b = b ? b.ariaLabel : null) &&
      a.getIframeEl().setAttribute("aria-label", b);
  };
  _.Zo = function (a) {
    var b = a.getSiteEl();
    b && b.removeChild(a.getIframeEl());
  };
  _.$o = function (a) {
    a.where = _.Wo(a);
    var b = (a.messageHandlers = a.messageHandlers || {}),
      c = function (e) {
        _.Yo(this, e);
      };
    b._ready = c;
    b._renderstart = c;
    var d = a.onClose;
    a.onClose = function (e) {
      d && d.call(this, e);
      _.Zo(this);
    };
    a.onCreate = function (e) {
      e = e.getIframeEl();
      e.style.cssText = _.Xo(e);
    };
  };
  _.ng = (function () {
    var a =
      window.gadgets && window.gadgets.config && window.gadgets.config.get;
    a && _.Tf(a());
    return {
      register: function (b, c, d) {
        d && d(_.Sf());
      },
      get: function (b) {
        return _.Sf(b);
      },
      update: function (b, c) {
        if (c) throw "Config replacement is not supported";
        _.Tf(b);
      },
      zd: function () {},
    };
  })();
  _.r("gadgets.config.register", _.ng.register);
  _.r("gadgets.config.get", _.ng.get);
  _.r("gadgets.config.init", _.ng.zd);
  _.r("gadgets.config.update", _.ng.update);
  var og,
    pg,
    qg,
    rg,
    sg,
    tg,
    ug,
    vg,
    wg,
    xg,
    yg,
    zg,
    Ag,
    Cg,
    Dg,
    Eg,
    Fg,
    Gg,
    Hg,
    Ig,
    Jg,
    Kg,
    Lg,
    Mg,
    Ng,
    Og,
    Pg,
    Qg,
    Rg,
    Sg,
    Tg,
    Wg,
    Xg;
  qg = void 0;
  rg = function (a) {
    try {
      return _.Sa.JSON.parse.call(_.Sa.JSON, a);
    } catch (b) {
      return !1;
    }
  };
  sg = function (a) {
    return Object.prototype.toString.call(a);
  };
  tg = sg(0);
  ug = sg(new Date(0));
  vg = sg(!0);
  wg = sg("");
  xg = sg({});
  yg = sg([]);
  zg = function (a, b) {
    if (b)
      for (var c = 0, d = b.length; c < d; ++c)
        if (a === b[c])
          throw new TypeError("Converting circular structure to JSON");
    d = typeof a;
    if (d !== "undefined") {
      c = Array.prototype.slice.call(b || [], 0);
      c[c.length] = a;
      b = [];
      var e = sg(a);
      if (
        a != null &&
        typeof a.toJSON === "function" &&
        (Object.prototype.hasOwnProperty.call(a, "toJSON") ||
          ((e !== yg ||
            (a.constructor !== Array && a.constructor !== Object)) &&
            (e !== xg ||
              (a.constructor !== Array && a.constructor !== Object)) &&
            e !== wg &&
            e !== tg &&
            e !== vg &&
            e !== ug))
      )
        return zg(a.toJSON.call(a), c);
      if (a == null) b[b.length] = "null";
      else if (e === tg)
        (a = Number(a)),
          isNaN(a) || isNaN(a - a)
            ? (a = "null")
            : a === -0 && 1 / a < 0 && (a = "-0"),
          (b[b.length] = String(a));
      else if (e === vg) b[b.length] = String(!!Number(a));
      else {
        if (e === ug) return zg(a.toISOString.call(a), c);
        if (e === yg && sg(a.length) === tg) {
          b[b.length] = "[";
          var f = 0;
          for (d = Number(a.length) >> 0; f < d; ++f)
            f && (b[b.length] = ","), (b[b.length] = zg(a[f], c) || "null");
          b[b.length] = "]";
        } else if (e == wg && sg(a.length) === tg) {
          b[b.length] = '"';
          f = 0;
          for (c = Number(a.length) >> 0; f < c; ++f)
            (d = String.prototype.charAt.call(a, f)),
              (e = String.prototype.charCodeAt.call(a, f)),
              (b[b.length] =
                d === "\b"
                  ? "\\b"
                  : d === "\f"
                  ? "\\f"
                  : d === "\n"
                  ? "\\n"
                  : d === "\r"
                  ? "\\r"
                  : d === "\t"
                  ? "\\t"
                  : d === "\\" || d === '"'
                  ? "\\" + d
                  : e <= 31
                  ? "\\u" + (e + 65536).toString(16).substr(1)
                  : e >= 32 && e <= 65535
                  ? d
                  : "\ufffd");
          b[b.length] = '"';
        } else if (d === "object") {
          b[b.length] = "{";
          d = 0;
          for (f in a)
            Object.prototype.hasOwnProperty.call(a, f) &&
              ((e = zg(a[f], c)),
              e !== void 0 &&
                (d++ && (b[b.length] = ","),
                (b[b.length] = zg(f)),
                (b[b.length] = ":"),
                (b[b.length] = e)));
          b[b.length] = "}";
        } else return;
      }
      return b.join("");
    }
  };
  Ag = /[\0-\x07\x0b\x0e-\x1f]/;
  Cg = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
  Dg = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
  Eg =
    /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
  Fg = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
  Gg = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
  Hg = /[ \t\n\r]+/g;
  Ig = /[^"]:/;
  Jg = /""/g;
  Kg = /true|false|null/g;
  Lg = /00/;
  Mg = /[\{]([^0\}]|0[^:])/;
  Ng = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
  Og = /[^\[,:][\[\{]/;
  Pg = /^(\{|\}|\[|\]|,|:|0)+/;
  Qg = /\u2028/g;
  Rg = /\u2029/g;
  Sg = function (a) {
    a = String(a);
    if (Ag.test(a) || Cg.test(a) || Dg.test(a) || Eg.test(a)) return !1;
    var b = a.replace(Fg, '""');
    b = b.replace(Gg, "0");
    b = b.replace(Hg, "");
    if (Ig.test(b)) return !1;
    b = b.replace(Jg, "0");
    b = b.replace(Kg, "0");
    if (
      Lg.test(b) ||
      Mg.test(b) ||
      Ng.test(b) ||
      Og.test(b) ||
      !b ||
      (b = b.replace(Pg, ""))
    )
      return !1;
    a = a.replace(Qg, "\\u2028").replace(Rg, "\\u2029");
    b = void 0;
    try {
      b = qg
        ? [rg(a)]
        : eval(
            "(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" +
              a +
              "\n)"
          );
    } catch (c) {
      return !1;
    }
    return b && b.length === 1 ? b[0] : !1;
  };
  Tg = function () {
    var a = ((_.Sa.document || {}).scripts || []).length;
    if ((og === void 0 || qg === void 0 || pg !== a) && pg !== -1) {
      og = qg = !1;
      pg = -1;
      try {
        try {
          qg =
            !!_.Sa.JSON &&
            _.Sa.JSON.stringify.call(_.Sa.JSON, {
              a: [3, !0, new Date(0)],
              c: function () {},
            }) === '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' &&
            rg("true") === !0 &&
            rg('[{"a":3}]')[0].a === 3;
        } catch (b) {}
        og =
          qg && !rg("[00]") && !rg('"\u0007"') && !rg('"\\0"') && !rg('"\\v"');
      } finally {
        pg = a;
      }
    }
  };
  _.Ug = function (a) {
    if (pg === -1) return !1;
    Tg();
    return (og ? rg : Sg)(a);
  };
  _.Vg = function (a) {
    if (pg !== -1)
      return Tg(), qg ? _.Sa.JSON.stringify.call(_.Sa.JSON, a) : zg(a);
  };
  Wg =
    !Date.prototype.toISOString ||
    typeof Date.prototype.toISOString !== "function" ||
    new Date(0).toISOString() !== "1970-01-01T00:00:00.000Z";
  Xg = function () {
    var a = Date.prototype.getUTCFullYear.call(this);
    return [
      a < 0
        ? "-" + String(1e6 - a).substr(1)
        : a <= 9999
        ? String(1e4 + a).substr(1)
        : "+" + String(1e6 + a).substr(1),
      "-",
      String(101 + Date.prototype.getUTCMonth.call(this)).substr(1),
      "-",
      String(100 + Date.prototype.getUTCDate.call(this)).substr(1),
      "T",
      String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
      ":",
      String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1),
      ":",
      String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1),
      ".",
      String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
      "Z",
    ].join("");
  };
  Date.prototype.toISOString = Wg ? Xg : Date.prototype.toISOString;
  _.r("gadgets.json.stringify", _.Vg);
  _.r("gadgets.json.parse", _.Ug);
  (function () {
    function a(e, f) {
      if (!(e < c) && d)
        if (e === 2 && d.warn) d.warn(f);
        else if (e === 3 && d.error)
          try {
            d.error(f);
          } catch (h) {}
        else d.log && d.log(f);
    }
    var b = function (e) {
      a(1, e);
    };
    _.kg = function (e) {
      a(2, e);
    };
    _.lg = function (e) {
      a(3, e);
    };
    _.mg = function () {};
    b.INFO = 1;
    b.WARNING = 2;
    b.NONE = 4;
    var c = 1,
      d = window.console
        ? window.console
        : window.opera
        ? window.opera.postError
        : void 0;
    return b;
  })();
  _.jg = _.jg || {};
  _.jg = _.jg || {};
  (function () {
    var a = [];
    _.jg.qra = function (b) {
      a.push(b);
    };
    _.jg.Dra = function () {
      for (var b = 0, c = a.length; b < c; ++b) a[b]();
    };
  })();
  _.jg = _.jg || {};
  (function () {
    function a(c) {
      var d = typeof c === "undefined";
      if (b !== null && d) return b;
      var e = {};
      c = c || window.location.href;
      var f = c.indexOf("?"),
        h = c.indexOf("#");
      c = (
        h === -1
          ? c.substr(f + 1)
          : [c.substr(f + 1, h - f - 1), "&", c.substr(h + 1)].join("")
      ).split("&");
      f = window.decodeURIComponent ? decodeURIComponent : unescape;
      h = 0;
      for (var k = c.length; h < k; ++h) {
        var l = c[h].indexOf("=");
        if (l !== -1) {
          var m = c[h].substring(0, l);
          l = c[h].substring(l + 1);
          l = l.replace(/\+/g, " ");
          try {
            e[m] = f(l);
          } catch (n) {}
        }
      }
      d && (b = e);
      return e;
    }
    var b = null;
    _.jg.jh = a;
    a();
  })();
  _.r("gadgets.util.getUrlParameters", _.jg.jh);
  var Yg = function () {
    this.Sg = window.console;
  };
  Yg.prototype.log = function (a) {
    this.Sg && this.Sg.log && this.Sg.log(a);
  };
  Yg.prototype.error = function (a) {
    this.Sg &&
      (this.Sg.error ? this.Sg.error(a) : this.Sg.log && this.Sg.log(a));
  };
  Yg.prototype.warn = function (a) {
    this.Sg && (this.Sg.warn ? this.Sg.warn(a) : this.Sg.log && this.Sg.log(a));
  };
  Yg.prototype.debug = function () {};
  _.Zg = new Yg();
  _.$g = function () {
    var a = _.sf.readyState;
    return (
      a === "complete" ||
      (a === "interactive" && navigator.userAgent.indexOf("MSIE") == -1)
    );
  };
  _.ah = function (a) {
    if (_.$g()) a();
    else {
      var b = !1,
        c = function () {
          if (!b) return (b = !0), a.apply(this, arguments);
        };
      _.rf.addEventListener
        ? (_.rf.addEventListener("load", c, !1),
          _.rf.addEventListener("DOMContentLoaded", c, !1))
        : _.rf.attachEvent &&
          (_.rf.attachEvent("onreadystatechange", function () {
            _.$g() && c.apply(this, arguments);
          }),
          _.rf.attachEvent("onload", c));
    }
  };
  _.bh = function (a, b) {
    var c = _.vf(_.If, "watt", _.wf());
    _.vf(c, a, b);
  };
  _.Cf(_.rf.location.href, "rpctoken") && _.Hf(_.sf, "unload", function () {});
  var ch = ch || {};
  ch.hZ = null;
  ch.YW = null;
  ch.vA = null;
  ch.frameElement = null;
  ch = ch || {};
  ch.EN ||
    (ch.EN = (function () {
      function a(f, h, k) {
        typeof window.addEventListener != "undefined"
          ? window.addEventListener(f, h, k)
          : typeof window.attachEvent != "undefined" &&
            window.attachEvent("on" + f, h);
        f === "message" &&
          ((window.___jsl = window.___jsl || {}),
          (f = window.___jsl),
          (f.RPMQ = f.RPMQ || []),
          f.RPMQ.push(h));
      }
      function b(f) {
        var h = _.Ug(f.data);
        if (h && h.f) {
          _.mg();
          var k = _.dh.Do(h.f);
          e &&
          (typeof f.origin !== "undefined"
            ? f.origin !== k
            : f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1])
            ? _.lg(
                "Invalid rpc message origin. " + k + " vs " + (f.origin || "")
              )
            : c(h, f.origin);
        }
      }
      var c,
        d,
        e = !0;
      return {
        ZS: function () {
          return "wpm";
        },
        pba: function () {
          return !0;
        },
        zd: function (f, h) {
          _.ng.register("rpc", null, function (k) {
            String(((k && k.rpc) || {}).disableForceSecure) === "true" &&
              (e = !1);
          });
          c = f;
          d = h;
          a("message", b, !1);
          d("..", !0);
          return !0;
        },
        Ob: function (f) {
          d(f, !0);
          return !0;
        },
        call: function (f, h, k) {
          var l = _.dh.Do(f),
            m = _.dh.KO(f);
          l
            ? window.setTimeout(function () {
                var n = _.Vg(k);
                _.mg();
                m && "postMessage" in m && m.postMessage(n, l);
              }, 0)
            : f != ".." &&
              _.lg(
                "No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message"
              );
          return !0;
        },
      };
    })());
  if (window.gadgets && window.gadgets.rpc)
    (typeof _.dh != "undefined" && _.dh) ||
      ((_.dh = window.gadgets.rpc),
      (_.dh.config = _.dh.config),
      (_.dh.register = _.dh.register),
      (_.dh.unregister = _.dh.unregister),
      (_.dh.MY = _.dh.registerDefault),
      (_.dh.U0 = _.dh.unregisterDefault),
      (_.dh.FS = _.dh.forceParentVerifiable),
      (_.dh.call = _.dh.call),
      (_.dh.Ju = _.dh.getRelayUrl),
      (_.dh.Xj = _.dh.setRelayUrl),
      (_.dh.HC = _.dh.setAuthToken),
      (_.dh.zw = _.dh.setupReceiver),
      (_.dh.ko = _.dh.getAuthToken),
      (_.dh.gK = _.dh.removeReceiver),
      (_.dh.xT = _.dh.getRelayChannel),
      (_.dh.IY = _.dh.receive),
      (_.dh.JY = _.dh.receiveSameDomain),
      (_.dh.getOrigin = _.dh.getOrigin),
      (_.dh.Do = _.dh.getTargetOrigin),
      (_.dh.KO = _.dh._getTargetWin),
      (_.dh.N5 = _.dh._parseSiblingId));
  else {
    _.dh = (function () {
      function a(B, ea) {
        if (!W[B]) {
          var T = cb;
          ea || (T = Ya);
          W[B] = T;
          ea = J[B] || [];
          for (var ua = 0; ua < ea.length; ++ua) {
            var za = ea[ua];
            za.t = C[B];
            T.call(B, za.f, za);
          }
          J[B] = [];
        }
      }
      function b() {
        function B() {
          Eb = !0;
        }
        Fb ||
          (typeof window.addEventListener != "undefined"
            ? window.addEventListener("unload", B, !1)
            : typeof window.attachEvent != "undefined" &&
              window.attachEvent("onunload", B),
          (Fb = !0));
      }
      function c(B, ea, T, ua, za) {
        (C[ea] && C[ea] === T) ||
          (_.lg("Invalid gadgets.rpc token. " + C[ea] + " vs " + T), ob(ea, 2));
        za.onunload = function () {
          P[ea] && !Eb && (ob(ea, 1), _.dh.gK(ea));
        };
        b();
        ua = _.Ug(decodeURIComponent(ua));
      }
      function d(B, ea) {
        if (
          B &&
          typeof B.s === "string" &&
          typeof B.f === "string" &&
          B.a instanceof Array
        )
          if (
            (C[B.f] &&
              C[B.f] !== B.t &&
              (_.lg("Invalid gadgets.rpc token. " + C[B.f] + " vs " + B.t),
              ob(B.f, 2)),
            B.s === "__ack")
          )
            window.setTimeout(function () {
              a(B.f, !0);
            }, 0);
          else {
            B.c &&
              (B.callback = function (Y) {
                _.dh.call(B.f, (B.g ? "legacy__" : "") + "__cb", null, B.c, Y);
              });
            if (ea) {
              var T = e(ea);
              B.origin = ea;
              var ua = B.r;
              try {
                var za = e(ua);
              } catch (Y) {}
              (ua && za == T) || (ua = ea);
              B.referer = ua;
            }
            ea = (w[B.s] || w[""]).apply(B, B.a);
            B.c &&
              typeof ea !== "undefined" &&
              _.dh.call(B.f, "__cb", null, B.c, ea);
          }
      }
      function e(B) {
        if (!B) return "";
        B = B.split("#")[0].split("?")[0];
        B = B.toLowerCase();
        B.indexOf("//") == 0 && (B = window.location.protocol + B);
        B.indexOf("://") == -1 && (B = window.location.protocol + "//" + B);
        var ea = B.substring(B.indexOf("://") + 3),
          T = ea.indexOf("/");
        T != -1 && (ea = ea.substring(0, T));
        B = B.substring(0, B.indexOf("://"));
        if (
          B !== "http" &&
          B !== "https" &&
          B !== "chrome-extension" &&
          B !== "file" &&
          B !== "android-app" &&
          B !== "chrome-search" &&
          B !== "chrome-untrusted" &&
          B !== "chrome" &&
          B !== "devtools"
        )
          throw Error("t");
        T = "";
        var ua = ea.indexOf(":");
        if (ua != -1) {
          var za = ea.substring(ua + 1);
          ea = ea.substring(0, ua);
          if ((B === "http" && za !== "80") || (B === "https" && za !== "443"))
            T = ":" + za;
        }
        return B + "://" + ea + T;
      }
      function f(B) {
        if (B.charAt(0) == "/") {
          var ea = B.indexOf("|"),
            T = ea > 0 ? B.substring(1, ea) : B.substring(1);
          B = ea > 0 ? B.substring(ea + 1) : null;
          return { id: T, origin: B };
        }
        return null;
      }
      function h(B) {
        if (typeof B === "undefined" || B === "..") return window.parent;
        var ea = f(B);
        if (ea) return k(window.top.frames[ea.id]);
        B = String(B);
        return (ea = window.frames[B])
          ? k(ea)
          : (ea = document.getElementById(B)) && ea.contentWindow
          ? ea.contentWindow
          : null;
      }
      function k(B) {
        return B
          ? "postMessage" in B
            ? B
            : B instanceof HTMLIFrameElement &&
              "contentWindow" in B &&
              B.contentWindow != null &&
              "postMessage" in B.contentWindow
            ? B.contentWindow
            : null
          : null;
      }
      function l(B, ea) {
        if (P[B] !== !0) {
          typeof P[B] === "undefined" && (P[B] = 0);
          var T = h(B);
          (B !== ".." && T == null) || cb.Ob(B, ea) !== !0
            ? P[B] !== !0 && P[B]++ < 10
              ? window.setTimeout(function () {
                  l(B, ea);
                }, 500)
              : ((W[B] = Ya), (P[B] = !0))
            : (P[B] = !0);
        }
      }
      function m(B) {
        (B = y[B]) &&
          B.substring(0, 1) === "/" &&
          (B =
            B.substring(1, 2) === "/"
              ? document.location.protocol + B
              : document.location.protocol + "//" + document.location.host + B);
        return B;
      }
      function n(B, ea, T) {
        ea &&
          !/http(s)?:\/\/.+/.test(ea) &&
          (ea.indexOf("//") == 0
            ? (ea = window.location.protocol + ea)
            : ea.charAt(0) == "/"
            ? (ea = window.location.protocol + "//" + window.location.host + ea)
            : ea.indexOf("://") == -1 &&
              (ea = window.location.protocol + "//" + ea));
        y[B] = ea;
        typeof T !== "undefined" && (D[B] = !!T);
      }
      function p(B, ea) {
        ea = ea || "";
        C[B] = String(ea);
        l(B, ea);
      }
      function q(B) {
        B = (B.passReferrer || "").split(":", 2);
        O = B[0] || "none";
        ja = B[1] || "origin";
      }
      function t(B) {
        String(B.useLegacyProtocol) === "true" &&
          ((cb = ch.vA || Ya), cb.zd(d, a));
      }
      function v(B, ea) {
        function T(ua) {
          ua = (ua && ua.rpc) || {};
          q(ua);
          var za = ua.parentRelayUrl || "";
          za = e(la.parent || ea) + za;
          n("..", za, String(ua.useLegacyProtocol) === "true");
          t(ua);
          p("..", B);
        }
        !la.parent && ea ? T({}) : _.ng.register("rpc", null, T);
      }
      function u(B, ea, T) {
        if (B === "..") v(T || la.rpctoken || la.ifpctok || "", ea);
        else
          a: {
            var ua = null;
            if (B.charAt(0) != "/") {
              if (!_.jg) break a;
              ua = document.getElementById(B);
              if (!ua) throw Error("u`" + B);
            }
            ua = ua && ua.src;
            ea = ea || e(ua);
            n(B, ea);
            ea = _.jg.jh(ua);
            p(B, T || ea.rpctoken);
          }
      }
      var w = {},
        y = {},
        D = {},
        C = {},
        I = 0,
        L = {},
        P = {},
        la = {},
        W = {},
        J = {},
        O = null,
        ja = null,
        pa = window.top !== window.self,
        Ha = window.name,
        ob = function () {},
        ab = window.console,
        pb =
          (ab &&
            ab.log &&
            function (B) {
              ab.log(B);
            }) ||
          function () {},
        Ya = (function () {
          function B(ea) {
            return function () {
              pb(ea + ": call ignored");
            };
          }
          return {
            ZS: function () {
              return "noop";
            },
            pba: function () {
              return !0;
            },
            zd: B("init"),
            Ob: B("setup"),
            call: B("call"),
          };
        })();
      _.jg && (la = _.jg.jh());
      var Eb = !1,
        Fb = !1,
        cb = (function () {
          if (la.rpctx == "rmr") return ch.hZ;
          var B =
            typeof window.postMessage === "function"
              ? ch.EN
              : typeof window.postMessage === "object"
              ? ch.EN
              : window.ActiveXObject
              ? ch.YW
                ? ch.YW
                : ch.vA
              : navigator.userAgent.indexOf("WebKit") > 0
              ? ch.hZ
              : navigator.product === "Gecko"
              ? ch.frameElement
              : ch.vA;
          B || (B = Ya);
          return B;
        })();
      w[""] = function () {
        pb("Unknown RPC service: " + this.s);
      };
      w.__cb = function (B, ea) {
        var T = L[B];
        T && (delete L[B], T.call(this, ea));
      };
      return {
        config: function (B) {
          typeof B.vZ === "function" && (ob = B.vZ);
        },
        register: function (B, ea) {
          if (B === "__cb" || B === "__ack") throw Error("v");
          if (B === "") throw Error("w");
          w[B] = ea;
        },
        unregister: function (B) {
          if (B === "__cb" || B === "__ack") throw Error("x");
          if (B === "") throw Error("y");
          delete w[B];
        },
        MY: function (B) {
          w[""] = B;
        },
        U0: function () {
          delete w[""];
        },
        FS: function () {},
        call: function (B, ea, T, ua) {
          B = B || "..";
          var za = "..";
          B === ".."
            ? (za = Ha)
            : B.charAt(0) == "/" &&
              ((za = e(window.location.href)),
              (za = "/" + Ha + (za ? "|" + za : "")));
          ++I;
          T && (L[I] = T);
          var Y = {
            s: ea,
            f: za,
            c: T ? I : 0,
            a: Array.prototype.slice.call(arguments, 3),
            t: C[B],
            l: !!D[B],
          };
          a: if (
            O === "bidir" ||
            (O === "c2p" && B === "..") ||
            (O === "p2c" && B !== "..")
          ) {
            var da = window.location.href;
            var Va = "?";
            if (ja === "query") Va = "#";
            else if (ja === "hash") break a;
            Va = da.lastIndexOf(Va);
            Va = Va === -1 ? da.length : Va;
            da = da.substring(0, Va);
          } else da = null;
          da && (Y.r = da);
          if (B === ".." || f(B) != null || document.getElementById(B))
            (da = W[B]) || f(B) === null || (da = cb),
              ea.indexOf("legacy__") === 0 &&
                ((da = cb), (Y.s = ea.substring(8)), (Y.c = Y.c ? Y.c : I)),
              (Y.g = !0),
              (Y.r = za),
              da
                ? (D[B] && (da = ch.vA),
                  da.call(B, za, Y) === !1 && ((W[B] = Ya), cb.call(B, za, Y)))
                : J[B]
                ? J[B].push(Y)
                : (J[B] = [Y]);
        },
        Ju: m,
        Xj: n,
        HC: p,
        zw: u,
        ko: function (B) {
          return C[B];
        },
        gK: function (B) {
          delete y[B];
          delete D[B];
          delete C[B];
          delete P[B];
          delete W[B];
        },
        xT: function () {
          return cb.ZS();
        },
        IY: function (B, ea) {
          B.length > 4 ? cb.Joa(B, d) : c.apply(null, B.concat(ea));
        },
        JY: function (B) {
          B.a = Array.prototype.slice.call(B.a);
          window.setTimeout(function () {
            d(B);
          }, 0);
        },
        getOrigin: e,
        Do: function (B) {
          var ea = null,
            T = m(B);
          T
            ? (ea = T)
            : (T = f(B))
            ? (ea = T.origin)
            : B == ".."
            ? (ea = la.parent)
            : (B = document.getElementById(B)) &&
              B.tagName.toLowerCase() === "iframe" &&
              (ea = B.src);
          return e(ea);
        },
        zd: function () {
          cb.zd(d, a) === !1 && (cb = Ya);
          pa
            ? u("..")
            : _.ng.register("rpc", null, function (B) {
                B = B.rpc || {};
                q(B);
                t(B);
              });
        },
        KO: h,
        N5: f,
        jha: "__ack",
        cma: Ha || "..",
        mma: 0,
        lma: 1,
        kma: 2,
      };
    })();
    _.dh.zd();
  }
  _.dh.config({
    vZ: function (a) {
      throw Error("z`" + a);
    },
  });
  _.r("gadgets.rpc.config", _.dh.config);
  _.r("gadgets.rpc.register", _.dh.register);
  _.r("gadgets.rpc.unregister", _.dh.unregister);
  _.r("gadgets.rpc.registerDefault", _.dh.MY);
  _.r("gadgets.rpc.unregisterDefault", _.dh.U0);
  _.r("gadgets.rpc.forceParentVerifiable", _.dh.FS);
  _.r("gadgets.rpc.call", _.dh.call);
  _.r("gadgets.rpc.getRelayUrl", _.dh.Ju);
  _.r("gadgets.rpc.setRelayUrl", _.dh.Xj);
  _.r("gadgets.rpc.setAuthToken", _.dh.HC);
  _.r("gadgets.rpc.setupReceiver", _.dh.zw);
  _.r("gadgets.rpc.getAuthToken", _.dh.ko);
  _.r("gadgets.rpc.removeReceiver", _.dh.gK);
  _.r("gadgets.rpc.getRelayChannel", _.dh.xT);
  _.r("gadgets.rpc.receive", _.dh.IY);
  _.r("gadgets.rpc.receiveSameDomain", _.dh.JY);
  _.r("gadgets.rpc.getOrigin", _.dh.getOrigin);
  _.r("gadgets.rpc.getTargetOrigin", _.dh.Do);
  _.Nh = function (a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.indexOf("blob:") === 0 && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    a.indexOf("//") == 0 && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
      c = b.indexOf("/");
    c != -1 && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("A`" + a);
    if (
      c !== "http" &&
      c !== "https" &&
      c !== "chrome-extension" &&
      c !== "moz-extension" &&
      c !== "file" &&
      c !== "android-app" &&
      c !== "chrome-search" &&
      c !== "chrome-untrusted" &&
      c !== "chrome" &&
      c !== "app" &&
      c !== "devtools"
    )
      throw Error("B`" + c);
    a = "";
    var d = b.indexOf(":");
    if (d != -1) {
      var e = b.substring(d + 1);
      b = b.substring(0, d);
      if ((c === "http" && e !== "80") || (c === "https" && e !== "443"))
        a = ":" + e;
    }
    return c + "://" + b + a;
  };
  var Ph = function () {
    this.blockSize = -1;
  };
  var Qh = function () {
    this.blockSize = -1;
    this.blockSize = 64;
    this.Vc = [];
    this.QE = [];
    this.z5 = [];
    this.IB = [];
    this.IB[0] = 128;
    for (var a = 1; a < this.blockSize; ++a) this.IB[a] = 0;
    this.wD = this.nr = 0;
    this.reset();
  };
  _.bb(Qh, Ph);
  Qh.prototype.reset = function () {
    this.Vc[0] = 1732584193;
    this.Vc[1] = 4023233417;
    this.Vc[2] = 2562383102;
    this.Vc[3] = 271733878;
    this.Vc[4] = 3285377520;
    this.wD = this.nr = 0;
  };
  var Rh = function (a, b, c) {
    c || (c = 0);
    var d = a.z5;
    if (typeof b === "string")
      for (var e = 0; e < 16; e++)
        (d[e] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (e = 0; e < 16; e++)
        (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (e = 16; e < 80; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = ((f << 1) | (f >>> 31)) & 4294967295;
    }
    b = a.Vc[0];
    c = a.Vc[1];
    var h = a.Vc[2],
      k = a.Vc[3],
      l = a.Vc[4];
    for (e = 0; e < 80; e++) {
      if (e < 40)
        if (e < 20) {
          f = k ^ (c & (h ^ k));
          var m = 1518500249;
        } else (f = c ^ h ^ k), (m = 1859775393);
      else
        e < 60
          ? ((f = (c & h) | (k & (c | h))), (m = 2400959708))
          : ((f = c ^ h ^ k), (m = 3395469782));
      f = (((b << 5) | (b >>> 27)) + f + l + m + d[e]) & 4294967295;
      l = k;
      k = h;
      h = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = f;
    }
    a.Vc[0] = (a.Vc[0] + b) & 4294967295;
    a.Vc[1] = (a.Vc[1] + c) & 4294967295;
    a.Vc[2] = (a.Vc[2] + h) & 4294967295;
    a.Vc[3] = (a.Vc[3] + k) & 4294967295;
    a.Vc[4] = (a.Vc[4] + l) & 4294967295;
  };
  Qh.prototype.update = function (a, b) {
    if (a != null) {
      b === void 0 && (b = a.length);
      for (
        var c = b - this.blockSize, d = 0, e = this.QE, f = this.nr;
        d < b;

      ) {
        if (f == 0) for (; d <= c; ) Rh(this, a, d), (d += this.blockSize);
        if (typeof a === "string")
          for (; d < b; ) {
            if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.blockSize)) {
              Rh(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b; )
            if (((e[f] = a[d]), ++f, ++d, f == this.blockSize)) {
              Rh(this, e);
              f = 0;
              break;
            }
      }
      this.nr = f;
      this.wD += b;
    }
  };
  Qh.prototype.digest = function () {
    var a = [],
      b = this.wD * 8;
    this.nr < 56
      ? this.update(this.IB, 56 - this.nr)
      : this.update(this.IB, this.blockSize - (this.nr - 56));
    for (var c = this.blockSize - 1; c >= 56; c--)
      (this.QE[c] = b & 255), (b /= 256);
    Rh(this, this.QE);
    for (c = b = 0; c < 5; c++)
      for (var d = 24; d >= 0; d -= 8) (a[b] = (this.Vc[c] >> d) & 255), ++b;
    return a;
  };
  _.Sh = function () {
    this.JM = new Qh();
  };
  _.g = _.Sh.prototype;
  _.g.reset = function () {
    this.JM.reset();
  };
  _.g.W0 = function (a) {
    this.JM.update(a);
  };
  _.g.VQ = function () {
    return this.JM.digest();
  };
  _.g.lx = function (a) {
    a = unescape(encodeURIComponent(a));
    for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
    this.W0(b);
  };
  _.g.Yi = function () {
    for (var a = this.VQ(), b = "", c = 0; c < a.length; c++)
      b +=
        "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) +
        "0123456789ABCDEF".charAt(a[c] % 16);
    return b;
  };
  _.vi = function (a) {
    _.Sa.setTimeout(function () {
      throw a;
    }, 0);
  };
  _.wi = _.jc();
  _.xi = _.rc() || _.bc("iPod");
  _.yi = _.bc("iPad");
  _.Ai = _.mc();
  _.Bi = _.kc();
  _.Ci = _.lc() && !_.sc();
  _.Yi = function (a) {
    var b = (window.___jsl = window.___jsl || {});
    b.cfg = (!a && b.cfg) || {};
    return b.cfg;
  };
  _.Zi = function (a) {
    var b = _.Yi();
    if (!a) return b;
    a = a.split("/");
    for (var c = 0, d = a.length; b && typeof b === "object" && c < d; ++c)
      b = b[a[c]];
    return c === a.length && b !== void 0 ? b : void 0;
  };
  _.$i = function (a, b) {
    b = _.Tb(b);
    b !== void 0 && (a.href = b);
  };
  var aj;
  aj =
    /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
  _.bj = function (a) {
    var b = _.Zi("googleapis.config/sessionIndex");
    "string" === typeof b && b.length > 254 && (b = null);
    b == null && (b = window.__X_GOOG_AUTHUSER);
    "string" === typeof b && b.length > 254 && (b = null);
    if (b == null) {
      var c = window.google;
      c && (b = c.authuser);
    }
    "string" === typeof b && b.length > 254 && (b = null);
    b == null &&
      ((a = a || window.location.href),
      (b = _.Cf(a, "authuser") || null),
      b == null && (b = (b = a.match(aj)) ? b[1] : null));
    if (b == null) return null;
    b = String(b);
    b.length > 254 && (b = null);
    return b;
  };
  var vj, uj, Bj, Cj, wj, zj, xj, Dj, yj;
  _.Aj = function () {
    if (uj) {
      var a = new _.rf.Uint32Array(1);
      vj.getRandomValues(a);
      a = Number("0." + a[0]);
    } else
      (a = wj),
        (a += parseInt(xj.substr(0, 20), 16)),
        (xj = yj(xj)),
        (a /= zj + Math.pow(16, 20));
    return a;
  };
  vj = _.rf.crypto;
  uj = !1;
  Bj = 0;
  Cj = 0;
  wj = 1;
  zj = 0;
  xj = "";
  Dj = function (a) {
    a = a || _.rf.event;
    var b = (a.screenX + a.clientX) << 16;
    b += a.screenY + a.clientY;
    b *= new Date().getTime() % 1e6;
    wj = (wj * b) % zj;
    Bj > 0 && ++Cj == Bj && _.Gf(_.rf, "mousemove", Dj, "remove", "de");
  };
  yj = function (a) {
    var b = new _.Sh();
    b.lx(a);
    return b.Yi();
  };
  uj = !!vj && typeof vj.getRandomValues == "function";
  uj ||
    ((zj = (screen.width * screen.width + screen.height) * 1e6),
    (xj = yj(
      _.sf.cookie +
        "|" +
        _.sf.location +
        "|" +
        new Date().getTime() +
        "|" +
        Math.random()
    )),
    (Bj = _.Zi("random/maxObserveMousemove") || 0),
    Bj != 0 && _.Hf(_.rf, "mousemove", Dj));
  _.Lj = function (a) {
    var b = window;
    a =
      (a || b.location.href).match(RegExp(".*(\\?|#|&)usegapi=([^&#]+)")) || [];
    return "1" === decodeURIComponent(a[a.length - 1] || "");
  };
  _.Rj = [];
  _.Sj = [];
  _.Tj = !1;
  _.Uj = function (a) {
    _.Rj[_.Rj.length] = a;
    if (_.Tj)
      for (var b = 0; b < _.Sj.length; b++) a((0, _.z)(_.Sj[b].wrap, _.Sj[b]));
  };
  _.Ek = function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (_.Gc(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var h = 0; h < f; h++) a[e + h] = d[h];
      } else a.push(d);
    }
  };
  _.Fk = function (a, b, c, d) {
    for (var e = 0, f = a.length, h; e < f; ) {
      var k = e + ((f - e) >>> 1);
      var l = c ? b.call(void 0, a[k], k, a) : b(d, a[k]);
      l > 0 ? (e = k + 1) : ((f = k), (h = !l));
    }
    return h ? e : -e - 1;
  };
  _.Gk = function (a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  };
  _.Hk = function (a, b, c, d) {
    b = _.Tb(b);
    return b !== void 0 ? a.open(b, c, d) : null;
  };
  var Ik = function (a) {
    this.T = a;
  };
  _.g = Ik.prototype;
  _.g.value = function () {
    return this.T;
  };
  _.g.Ve = function (a) {
    this.T.width = a;
    return this;
  };
  _.g.Xb = function () {
    return this.T.width;
  };
  _.g.de = function (a) {
    this.T.height = a;
    return this;
  };
  _.g.Qc = function () {
    return this.T.height;
  };
  _.g.zh = function (a) {
    this.T.style = a;
    return this;
  };
  _.g.getStyle = function () {
    return this.T.style;
  };
  _.Jk = function (a) {
    this.T = a || {};
  };
  _.g = _.Jk.prototype;
  _.g.value = function () {
    return this.T;
  };
  _.g.setUrl = function (a) {
    this.T.url = a;
    return this;
  };
  _.g.getUrl = function () {
    return this.T.url;
  };
  _.g.zh = function (a) {
    this.T.style = a;
    return this;
  };
  _.g.getStyle = function () {
    return this.T.style;
  };
  _.g.Ue = function (a) {
    this.T.id = a;
    return this;
  };
  _.g.getId = function () {
    return this.T.id;
  };
  _.g.wn = function (a) {
    this.T.rpctoken = a;
    return this;
  };
  _.Kk = function (a, b) {
    a.T.messageHandlers = b;
    return a;
  };
  _.Lk = function (a, b) {
    a.T.messageHandlersFilter = b;
    return a;
  };
  _.g = _.Jk.prototype;
  _.g.ts = _.gb(4);
  _.g.getContext = function () {
    return this.T.context;
  };
  _.g.xd = function () {
    return this.T.openerIframe;
  };
  _.g.wo = function () {
    this.T.attributes = this.T.attributes || {};
    return new Ik(this.T.attributes);
  };
  _.g.lj = function () {
    return this.T.controller;
  };
  var Sk;
  _.Mk = function (a, b) {
    b = b || a;
    for (var c = 0, d = 0, e = {}; d < a.length; ) {
      var f = a[d++],
        h = _.yc(f) ? "o" + _.Ic(f) : (typeof f).charAt(0) + f;
      Object.prototype.hasOwnProperty.call(e, h) || ((e[h] = !0), (b[c++] = f));
    }
    b.length = c;
  };
  _.Nk = function (a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  };
  _.Ok = function () {};
  _.Pk = function (a) {
    return a;
  };
  _.Qk = function (a) {
    a.prototype.$goog_Thenable = !0;
  };
  _.Rk = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  Sk = function (a, b) {
    this.l7 = a;
    this.fea = b;
    this.uB = 0;
    this.rA = null;
  };
  Sk.prototype.get = function () {
    if (this.uB > 0) {
      this.uB--;
      var a = this.rA;
      this.rA = a.next;
      a.next = null;
    } else a = this.l7();
    return a;
  };
  Sk.prototype.put = function (a) {
    this.fea(a);
    this.uB < 100 && (this.uB++, (a.next = this.rA), (this.rA = a));
  };
  var Uk, Vk, Tk;
  _.Wk = function (a) {
    a = Tk(a);
    typeof _.Sa.setImmediate !== "function" ||
    (_.Sa.Window &&
      _.Sa.Window.prototype &&
      _.Sa.Window.prototype.setImmediate == _.Sa.setImmediate)
      ? (Uk || (Uk = Vk()), Uk(a))
      : _.Sa.setImmediate(a);
  };
  Vk = function () {
    var a = _.Sa.MessageChannel;
    typeof a === "undefined" &&
      typeof window !== "undefined" &&
      window.postMessage &&
      window.addEventListener &&
      !_.bc("Presto") &&
      (a = function () {
        var e = _.bf("IFRAME");
        e.style.display = "none";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var h = "callImmediate" + Math.random(),
          k =
            f.location.protocol == "file:"
              ? "*"
              : f.location.protocol + "//" + f.location.host;
        e = (0, _.z)(function (l) {
          if ((k == "*" || l.origin == k) && l.data == h)
            this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(h, k);
          },
        };
      });
    if (typeof a !== "undefined") {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (c.next !== void 0) {
          c = c.next;
          var e = c.cb;
          c.cb = null;
          e();
        }
      };
      return function (e) {
        d.next = { cb: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      _.Sa.setTimeout(e, 0);
    };
  };
  Tk = _.Pk;
  _.Uj(function (a) {
    Tk = a;
  });
  var Xk = function () {
    this.MD = this.Vs = null;
  };
  Xk.prototype.add = function (a, b) {
    var c = Yk.get();
    c.set(a, b);
    this.MD ? (this.MD.next = c) : (this.Vs = c);
    this.MD = c;
  };
  Xk.prototype.remove = function () {
    var a = null;
    this.Vs &&
      ((a = this.Vs),
      (this.Vs = this.Vs.next),
      this.Vs || (this.MD = null),
      (a.next = null));
    return a;
  };
  var Yk = new Sk(
      function () {
        return new Zk();
      },
      function (a) {
        return a.reset();
      }
    ),
    Zk = function () {
      this.next = this.scope = this.Yh = null;
    };
  Zk.prototype.set = function (a, b) {
    this.Yh = a;
    this.scope = b;
    this.next = null;
  };
  Zk.prototype.reset = function () {
    this.next = this.scope = this.Yh = null;
  };
  var $k, al, bl, cl, el;
  al = !1;
  bl = new Xk();
  _.dl = function (a, b) {
    $k || cl();
    al || ($k(), (al = !0));
    bl.add(a, b);
  };
  cl = function () {
    if (_.Sa.Promise && _.Sa.Promise.resolve) {
      var a = _.Sa.Promise.resolve(void 0);
      $k = function () {
        a.then(el);
      };
    } else
      $k = function () {
        _.Wk(el);
      };
  };
  el = function () {
    for (var a; (a = bl.remove()); ) {
      try {
        a.Yh.call(a.scope);
      } catch (b) {
        _.vi(b);
      }
      Yk.put(a);
    }
    al = !1;
  };
  var hl, il, jl, xl, Bl, zl, Cl;
  _.gl = function (a, b) {
    this.Ga = 0;
    this.Bf = void 0;
    this.sq = this.Ql = this.wb = null;
    this.hA = this.UF = !1;
    if (a != _.Ok)
      try {
        var c = this;
        a.call(
          b,
          function (d) {
            fl(c, 2, d);
          },
          function (d) {
            fl(c, 3, d);
          }
        );
      } catch (d) {
        fl(this, 3, d);
      }
  };
  hl = function () {
    this.next = this.context = this.Pr = this.Gv = this.Nn = null;
    this.qt = !1;
  };
  hl.prototype.reset = function () {
    this.context = this.Pr = this.Gv = this.Nn = null;
    this.qt = !1;
  };
  il = new Sk(
    function () {
      return new hl();
    },
    function (a) {
      a.reset();
    }
  );
  jl = function (a, b, c) {
    var d = il.get();
    d.Gv = a;
    d.Pr = b;
    d.context = c;
    return d;
  };
  _.kl = function (a) {
    if (a instanceof _.gl) return a;
    var b = new _.gl(_.Ok);
    fl(b, 2, a);
    return b;
  };
  _.ll = function (a) {
    return new _.gl(function (b, c) {
      c(a);
    });
  };
  _.nl = function (a, b, c) {
    ml(a, b, c, null) || _.dl(_.$a(b, a));
  };
  _.ol = function (a) {
    return new _.gl(function (b, c) {
      var d = a.length,
        e = [];
      if (d)
        for (
          var f = function (m, n) {
              d--;
              e[m] = n;
              d == 0 && b(e);
            },
            h = function (m) {
              c(m);
            },
            k = 0,
            l;
          k < a.length;
          k++
        )
          (l = a[k]), _.nl(l, _.$a(f, k), h);
      else b(e);
    });
  };
  _.ql = function () {
    var a,
      b,
      c = new _.gl(function (d, e) {
        a = d;
        b = e;
      });
    return new pl(c, a, b);
  };
  _.gl.prototype.then = function (a, b, c) {
    return rl(
      this,
      typeof a === "function" ? a : null,
      typeof b === "function" ? b : null,
      c
    );
  };
  _.Qk(_.gl);
  _.tl = function (a, b) {
    b = jl(b, b);
    b.qt = !0;
    sl(a, b);
    return a;
  };
  _.gl.prototype.Qw = function (a, b) {
    return rl(this, null, a, b);
  };
  _.gl.prototype.catch = _.gl.prototype.Qw;
  _.gl.prototype.cancel = function (a) {
    if (this.Ga == 0) {
      var b = new _.ul(a);
      _.dl(function () {
        vl(this, b);
      }, this);
    }
  };
  var vl = function (a, b) {
      if (a.Ga == 0)
        if (a.wb) {
          var c = a.wb;
          if (c.Ql) {
            for (
              var d = 0, e = null, f = null, h = c.Ql;
              h && (h.qt || (d++, h.Nn == a && (e = h), !(e && d > 1)));
              h = h.next
            )
              e || (f = h);
            e &&
              (c.Ga == 0 && d == 1
                ? vl(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.sq && (c.sq = d),
                      (d.next = d.next.next))
                    : wl(c),
                  xl(c, e, 3, b)));
          }
          a.wb = null;
        } else fl(a, 3, b);
    },
    sl = function (a, b) {
      a.Ql || (a.Ga != 2 && a.Ga != 3) || yl(a);
      a.sq ? (a.sq.next = b) : (a.Ql = b);
      a.sq = b;
    },
    rl = function (a, b, c, d) {
      var e = jl(null, null, null);
      e.Nn = new _.gl(function (f, h) {
        e.Gv = b
          ? function (k) {
              try {
                var l = b.call(d, k);
                f(l);
              } catch (m) {
                h(m);
              }
            }
          : f;
        e.Pr = c
          ? function (k) {
              try {
                var l = c.call(d, k);
                l === void 0 && k instanceof _.ul ? h(k) : f(l);
              } catch (m) {
                h(m);
              }
            }
          : h;
      });
      e.Nn.wb = a;
      sl(a, e);
      return e.Nn;
    };
  _.gl.prototype.Fga = function (a) {
    this.Ga = 0;
    fl(this, 2, a);
  };
  _.gl.prototype.Gga = function (a) {
    this.Ga = 0;
    fl(this, 3, a);
  };
  var fl = function (a, b, c) {
      a.Ga == 0 &&
        (a === c &&
          ((b = 3), (c = new TypeError("Promise cannot resolve to itself"))),
        (a.Ga = 1),
        ml(c, a.Fga, a.Gga, a) ||
          ((a.Bf = c),
          (a.Ga = b),
          (a.wb = null),
          yl(a),
          b != 3 || c instanceof _.ul || zl(a, c)));
    },
    ml = function (a, b, c, d) {
      if (a instanceof _.gl) return sl(a, jl(b || _.Ok, c || null, d)), !0;
      if (_.Rk(a)) return a.then(b, c, d), !0;
      if (_.yc(a))
        try {
          var e = a.then;
          if (typeof e === "function") return Al(a, e, b, c, d), !0;
        } catch (f) {
          return c.call(d, f), !0;
        }
      return !1;
    },
    Al = function (a, b, c, d, e) {
      var f = !1,
        h = function (l) {
          f || ((f = !0), c.call(e, l));
        },
        k = function (l) {
          f || ((f = !0), d.call(e, l));
        };
      try {
        b.call(a, h, k);
      } catch (l) {
        k(l);
      }
    },
    yl = function (a) {
      a.UF || ((a.UF = !0), _.dl(a.hz, a));
    },
    wl = function (a) {
      var b = null;
      a.Ql && ((b = a.Ql), (a.Ql = b.next), (b.next = null));
      a.Ql || (a.sq = null);
      return b;
    };
  _.gl.prototype.hz = function () {
    for (var a; (a = wl(this)); ) xl(this, a, this.Ga, this.Bf);
    this.UF = !1;
  };
  xl = function (a, b, c, d) {
    if (c == 3 && b.Pr && !b.qt) for (; a && a.hA; a = a.wb) a.hA = !1;
    if (b.Nn) (b.Nn.wb = null), Bl(b, c, d);
    else
      try {
        b.qt ? b.Gv.call(b.context) : Bl(b, c, d);
      } catch (e) {
        Cl.call(null, e);
      }
    il.put(b);
  };
  Bl = function (a, b, c) {
    b == 2 ? a.Gv.call(a.context, c) : a.Pr && a.Pr.call(a.context, c);
  };
  zl = function (a, b) {
    a.hA = !0;
    _.dl(function () {
      a.hA && Cl.call(null, b);
    });
  };
  Cl = _.vi;
  _.ul = function (a) {
    _.rb.call(this, a);
    this.SY = !1;
  };
  _.bb(_.ul, _.rb);
  _.ul.prototype.name = "cancel";
  var pl = function (a, b, c) {
    this.promise = a;
    this.resolve = b;
    this.reject = c;
  };
  _.Dl = function (a) {
    return new _.gl(a);
  };
  var Pl = function () {
    this.ex = {
      OY: El ? "../" + El : null,
      Ty: Fl,
      MT: Kl,
      Vqa: Ll,
      Fo: Ml,
      Pra: Nl,
    };
    this.ig = _.rf;
    this.hY = this.q7;
    this.h8 = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
    if (this.ex.OY) {
      this.ig = this.ex.MT(this.ig, this.ex.OY);
      var a = this.ig.document,
        b = a.createElement("script");
      b.setAttribute("type", "text/javascript");
      b.text =
        "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
      a.body.appendChild(b);
      this.hY = this.ig.doPostMsg;
    }
    this.KM = {};
    this.oN = {};
    a = (0, _.z)(this.tH, this);
    _.Hf(this.ig, "message", a);
    _.vf(_.If, "RPMQ", []).push(a);
    this.ig != this.ig.parent &&
      Ol(this, this.ig.parent, this.II(this.ig.name), "*");
  };
  Pl.prototype.II = function (a) {
    return '{"h":"' + escape(a) + '"}';
  };
  var Ql = function (a) {
      var b = null;
      a.indexOf('{"h":"') === 0 &&
        a.indexOf('"}') === a.length - 2 &&
        (b = unescape(a.substring(6, a.length - 2)));
      return b;
    },
    Rl = function (a) {
      if (!/^\s*{/.test(a)) return !1;
      a = _.Ug(a);
      return a !== null && typeof a === "object" && !!a.g;
    };
  Pl.prototype.tH = function (a) {
    var b = String(a.data);
    _.Zg.debug(
      "gapix.rpc.receive(" +
        Ll +
        "): " +
        (!b || b.length <= 512
          ? b
          : b.substr(0, 512) + "... (" + b.length + " bytes)")
    );
    var c = b.indexOf("!_") !== 0;
    c || (b = b.substring(2));
    var d = Rl(b);
    if (!c && !d) {
      if (!d && (c = Ql(b))) {
        if (this.KM[c]) this.KM[c]();
        else this.oN[c] = 1;
        return;
      }
      var e = a.origin,
        f = this.ex.Ty;
      this.h8
        ? _.rf.setTimeout(function () {
            f(b, e);
          }, 0)
        : f(b, e);
    }
  };
  Pl.prototype.Ob = function (a, b) {
    a === ".." || this.oN[a] ? (b(), delete this.oN[a]) : (this.KM[a] = b);
  };
  var Ol = function (a, b, c, d) {
    var e = Rl(c) ? "" : "!_";
    _.Zg.debug(
      "gapix.rpc.send(" +
        Ll +
        "): " +
        (!c || c.length <= 512
          ? c
          : c.substr(0, 512) + "... (" + c.length + " bytes)")
    );
    a.hY(b, e + c, d);
  };
  Pl.prototype.q7 = function (a, b, c) {
    a.postMessage(b, c);
  };
  Pl.prototype.send = function (a, b, c) {
    (a = this.ex.MT(this.ig, a)) && !a.closed && Ol(this, a, b, c);
  };
  var Sl,
    Tl,
    Ul,
    Vl,
    Wl,
    Xl,
    Yl,
    El,
    Ll,
    Zl,
    $l,
    am,
    Kl,
    Ml,
    cm,
    dm,
    im,
    jm,
    lm,
    Nl,
    nm,
    mm,
    em,
    fm,
    om,
    Fl,
    pm,
    qm;
  Sl = 0;
  Tl = [];
  Ul = {};
  Vl = {};
  Wl = _.rf.location.href;
  Xl = _.Cf(Wl, "rpctoken");
  Yl = _.Cf(Wl, "parent") || _.sf.referrer;
  El = _.Cf(Wl, "rly");
  Ll = El || ((_.rf !== _.rf.top || _.rf.opener) && _.rf.name) || "..";
  Zl = null;
  $l = {};
  am = function () {};
  _.bm = { send: am, Ob: am, II: am };
  Kl = function (a, b) {
    var c = a;
    b.charAt(0) == "/" && ((b = b.substring(1)), (c = _.rf.top));
    if (b.length === 0) return c;
    for (b = b.split("/"); b.length; ) {
      a = b.shift();
      a.charAt(0) == "{" &&
        a.charAt(a.length - 1) == "}" &&
        (a = a.substring(1, a.length - 1));
      var d = a;
      if (d === "..") c = c == c.parent ? c.opener : c.parent;
      else if (d !== ".." && c.frames[d]) {
        var e = c;
        a = d;
        c = c.frames[d];
        if (!("postMessage" in c))
          if (c instanceof HTMLIFrameElement && "contentWindow" in c)
            c =
              c.contentWindow != null && "postMessage" in c.contentWindow
                ? c.contentWindow
                : null;
          else {
            d = null;
            e = _.sa(e.document.getElementsByTagName("iframe"));
            for (var f = e.next(); !f.done; f = e.next())
              if (
                ((f = f.value),
                f.getAttribute("id") == a || f.getAttribute("name") == a)
              )
                d = f;
            if (d && "contentWindow" in d)
              c = d.contentWindow != null ? d.contentWindow : null;
            else throw Error("N`" + c + "`" + a);
          }
      } else return null;
    }
    return c;
  };
  Ml = function (a) {
    return (a = Ul[a]) && a.token;
  };
  cm = function (a) {
    if (a.f in {}) return !1;
    var b = a.t,
      c = Ul[a.r];
    a = a.origin;
    return (
      c &&
      (c.token === b || (!c.token && !b)) &&
      (a === c.origin || c.origin === "*")
    );
  };
  dm = function (a) {
    var b = a.id.split("/"),
      c = b[b.length - 1],
      d = a.origin;
    return function (e) {
      var f = e.origin;
      return e.f == c && (d == f || d == "*");
    };
  };
  _.gm = function (a, b, c) {
    a = em(a);
    Vl[a.name] = { Yh: b, wv: a.wv, Ts: c || cm };
    fm();
  };
  _.hm = function (a) {
    a = em(a);
    delete Vl[a.name];
  };
  im = {};
  jm = function (a, b) {
    (a = im["_" + a]) && a[1](this) && a[0].call(this, b);
  };
  lm = function (a) {
    var b = a.c;
    if (!b) return am;
    var c = a.r,
      d = a.g ? "legacy__" : "";
    return function () {
      var e = [].slice.call(arguments, 0);
      e.unshift(c, d + "__cb", null, b);
      _.km.apply(null, e);
    };
  };
  Nl = function (a) {
    Zl = a;
  };
  nm = function (a) {
    $l[a] ||
      ($l[a] = _.rf.setTimeout(function () {
        $l[a] = !1;
        mm(a);
      }, 0));
  };
  mm = function (a) {
    var b = Ul[a];
    if (b && b.ready) {
      var c = b.YJ;
      for (b.YJ = []; c.length; ) _.bm.send(a, _.Vg(c.shift()), b.origin);
    }
  };
  em = function (a) {
    return a.indexOf("legacy__") === 0
      ? { name: a.substring(8), wv: !0 }
      : { name: a, wv: !1 };
  };
  fm = function () {
    for (
      var a = _.Zi("rpc/residenceSec") || 60,
        b = new Date().getTime() / 1e3,
        c,
        d = 0;
      (c = Tl[d]);
      ++d
    ) {
      var e = c.rpc;
      if (!e || (a > 0 && b - c.timestamp > a)) Tl.splice(d, 1), --d;
      else {
        var f = e.s,
          h = Vl[f] || Vl["*"];
        if (h)
          if (
            (Tl.splice(d, 1),
            --d,
            (e.origin = c.origin),
            (c = lm(e)),
            (e.callback = c),
            h.Ts(e))
          ) {
            if (f !== "__cb" && !!h.wv != !!e.g) break;
            e = h.Yh.apply(e, e.a);
            e !== void 0 && c(e);
          } else _.Zg.debug("gapix.rpc.rejected(" + Ll + "): " + f);
      }
    }
  };
  om = function (a, b, c) {
    Tl.push({ rpc: a, origin: b, timestamp: new Date().getTime() / 1e3 });
    c || fm();
  };
  Fl = function (a, b) {
    a = _.Ug(a);
    om(a, b, !1);
  };
  pm = function (a) {
    for (; a.length; ) om(a.shift(), this.origin, !0);
    fm();
  };
  qm = function (a) {
    var b = !1;
    a = a.split("|");
    var c = a[0];
    c.indexOf("/") >= 0 && (b = !0);
    return { id: c, origin: a[1] || "*", gI: b };
  };
  _.rm = function (a, b, c, d) {
    var e = qm(a);
    d && (_.rf.frames[e.id] = _.rf.frames[e.id] || d);
    a = e.id;
    if (!Ul.hasOwnProperty(a)) {
      c = c || null;
      d = e.origin;
      if (a === "..") (d = _.Nh(Yl)), (c = c || Xl);
      else if (!e.gI) {
        var f = _.sf.getElementById(a);
        f && ((f = f.src), (d = _.Nh(f)), (c = c || _.Cf(f, "rpctoken")));
      }
      (e.origin === "*" && d) || (d = e.origin);
      Ul[a] = {
        token: c,
        YJ: [],
        origin: d,
        rea: b,
        HY: function () {
          var h = a;
          Ul[h].ready = 1;
          mm(h);
        },
      };
      _.bm.Ob(a, Ul[a].HY);
    }
    return Ul[a].HY;
  };
  _.km = function (a, b, c, d) {
    a = a || "..";
    _.rm(a);
    a = a.split("|", 1)[0];
    var e = b,
      f = a,
      h = [].slice.call(arguments, 3),
      k = c,
      l = Ll,
      m = Xl,
      n = Ul[f],
      p = l,
      q = qm(f);
    if (n && f !== "..") {
      if (q.gI) {
        if (!(m = Ul[f].rea)) {
          m = Zl ? Zl.substring(1).split("/") : [Ll];
          p = m.length - 1;
          for (f = _.rf.parent; f !== _.rf.top; ) {
            var t = f.parent;
            if (!p--) {
              for (var v = null, u = t.frames.length, w = 0; w < u; ++w)
                t.frames[w] == f && (v = w);
              m.unshift("{" + v + "}");
            }
            f = t;
          }
          m = "/" + m.join("/");
        }
        p = m;
      } else p = l = "..";
      m = n.token;
    }
    k && q
      ? ((n = cm), q.gI && (n = dm(q)), (im["_" + ++Sl] = [k, n]), (k = Sl))
      : (k = null);
    h = { s: e, f: l, r: p, t: m, c: k, a: h };
    e = em(e);
    h.s = e.name;
    h.g = e.wv;
    Ul[a].YJ.push(h);
    nm(a);
  };
  if (
    typeof _.rf.postMessage === "function" ||
    typeof _.rf.postMessage === "object"
  )
    (_.bm = new Pl()),
      _.gm("__cb", jm, function () {
        return !0;
      }),
      _.gm("_processBatch", pm, function () {
        return !0;
      }),
      _.rm("..");
  var tm,
    um,
    vm,
    wm,
    xm,
    ym,
    zm,
    Am,
    Bm,
    Cm,
    Dm,
    Em,
    Im,
    Jm,
    Km,
    Lm,
    Mm,
    Nm,
    Om,
    Pm;
  _.sm = function (a, b) {
    if (!a) throw Error(b || "");
  };
  tm = /&/g;
  um = /</g;
  vm = />/g;
  wm = /"/g;
  xm = /'/g;
  ym = function (a) {
    return String(a)
      .replace(tm, "&amp;")
      .replace(um, "&lt;")
      .replace(vm, "&gt;")
      .replace(wm, "&quot;")
      .replace(xm, "&#39;");
  };
  zm = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
  Am = /%([a-f]|[0-9a-fA-F][a-f])/g;
  Bm = /^(https?|ftp|file|chrome-extension):$/i;
  Cm = function (a) {
    a = String(a);
    a = a
      .replace(zm, function (e) {
        try {
          return encodeURIComponent(e);
        } catch (f) {
          return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"));
        }
      })
      .replace(_.Ef, function (e) {
        return e.replace(/%/g, "%25");
      })
      .replace(Am, function (e) {
        return e.toUpperCase();
      });
    a = a.match(_.Df) || [];
    var b = _.wf(),
      c = function (e) {
        return e
          .replace(/\\/g, "%5C")
          .replace(/\^/g, "%5E")
          .replace(/`/g, "%60")
          .replace(/\{/g, "%7B")
          .replace(/\|/g, "%7C")
          .replace(/\}/g, "%7D");
      },
      d = !!(a[1] || "").match(Bm);
    b.wt = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
    d = function (e) {
      return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"));
    };
    b.query = a[5] ? [d(a[5])] : [];
    b.fj = a[7] ? [d(a[7])] : [];
    return b;
  };
  Dm = function (a) {
    return (
      a.wt +
      (a.query.length > 0 ? "?" + a.query.join("&") : "") +
      (a.fj.length > 0 ? "#" + a.fj.join("&") : "")
    );
  };
  Em = function (a, b) {
    var c = [];
    if (a)
      for (var d in a)
        if (_.xf(a, d) && a[d] != null) {
          var e = b ? b(a[d]) : a[d];
          c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e));
        }
    return c;
  };
  _.Fm = function (a, b, c, d) {
    a = Cm(a);
    a.query.push.apply(a.query, Em(b, d));
    a.fj.push.apply(a.fj, Em(c, d));
    return Dm(a);
  };
  _.Gm = function (a, b) {
    var c = Cm(b);
    b = c.wt;
    c.query.length && (b += "?" + c.query.join(""));
    c.fj.length && (b += "#" + c.fj.join(""));
    var d = "";
    b.length > 2e3 &&
      ((c = b),
      (b = b.substr(0, 2e3)),
      (b = b.replace(_.Ff, "")),
      (d = c.substr(b.length)));
    var e = a.createElement("div");
    a = a.createElement("a");
    c = Cm(b);
    b = c.wt;
    c.query.length && (b += "?" + c.query.join(""));
    c.fj.length && (b += "#" + c.fj.join(""));
    _.$i(a, new _.Jb(_.qf(b)));
    e.appendChild(a);
    _.xc(e, _.Vb(e.innerHTML));
    b = String(e.firstChild.href);
    e.parentNode && e.parentNode.removeChild(e);
    c = Cm(b + d);
    b = c.wt;
    c.query.length && (b += "?" + c.query.join(""));
    c.fj.length && (b += "#" + c.fj.join(""));
    return b;
  };
  _.Hm = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
  Jm = function (a) {
    for (; a.firstChild; ) a.removeChild(a.firstChild);
  };
  Km =
    /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
  Lm = function () {
    var a = _.Zi("googleapis.config/sessionDelegate");
    "string" === typeof a && a.length > 21 && (a = null);
    a == null && (a = (a = window.location.href.match(Km)) ? a[1] : null);
    if (a == null) return null;
    a = String(a);
    a.length > 21 && (a = null);
    return a;
  };
  Mm = function () {
    var a = _.If.onl;
    if (!a) {
      a = _.wf();
      _.If.onl = a;
      var b = _.wf();
      a.e = function (c) {
        var d = b[c];
        d && (delete b[c], d());
      };
      a.a = function (c, d) {
        b[c] = d;
      };
      a.r = function (c) {
        delete b[c];
      };
    }
    return a;
  };
  Nm = function (a, b) {
    b = b.onload;
    return typeof b === "function" ? (Mm().a(a, b), b) : null;
  };
  Om = function (a) {
    _.sm(/^\w+$/.test(a), "Unsupported id - " + a);
    return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"';
  };
  Pm = function (a) {
    Mm().r(a);
  };
  var Rm, Sm, Wm;
  _.Qm = {
    allowtransparency: "true",
    frameborder: "0",
    hspace: "0",
    marginheight: "0",
    marginwidth: "0",
    scrolling: "no",
    style: "",
    tabindex: "0",
    vspace: "0",
    width: "100%",
  };
  Rm = { allowtransparency: !0, onload: !0 };
  Sm = 0;
  _.Tm = function (a, b) {
    var c = 0;
    do var d = b.id || ["I", Sm++, "_", new Date().getTime()].join("");
    while (a.getElementById(d) && ++c < 5);
    _.sm(c < 5, "Error creating iframe id");
    return d;
  };
  _.Um = function (a, b) {
    return a ? b + "/" + a : "";
  };
  _.Vm = function (a, b, c, d) {
    var e = {},
      f = {};
    a.documentMode && a.documentMode < 9 && (e.hostiemode = a.documentMode);
    _.Af(d.queryParams || {}, e);
    _.Af(d.fragmentParams || {}, f);
    var h = d.pfname;
    var k = _.wf();
    _.Zi("iframes/dropLegacyIdParam") || (k.id = c);
    k._gfid = c;
    k.parent = a.location.protocol + "//" + a.location.host;
    c = _.Cf(a.location.href, "parent");
    h = h || "";
    !h &&
      c &&
      ((h =
        _.Cf(a.location.href, "_gfid", "") || _.Cf(a.location.href, "id", "")),
      (h = _.Um(h, _.Cf(a.location.href, "pfname", ""))));
    h ||
      ((c = _.Ug(_.Cf(a.location.href, "jcp", ""))) &&
        typeof c == "object" &&
        (h = _.Um(c.id, c.pfname)));
    k.pfname = h;
    d.connectWithJsonParam && ((h = {}), (h.jcp = _.Vg(k)), (k = h));
    h = _.Cf(b, "rpctoken") || e.rpctoken || f.rpctoken;
    h ||
      ((h = d.rpctoken || String(Math.round(_.Aj() * 1e8))), (k.rpctoken = h));
    d.rpctoken = h;
    _.Af(k, d.connectWithQueryParams ? e : f);
    k = a.location.href;
    a = _.wf();
    (h = _.Cf(k, "_bsh", _.If.bsh)) && (a._bsh = h);
    (k = _.If.dpo ? _.If.h : _.Cf(k, "jsh", _.If.h)) && (a.jsh = k);
    d.hintInFragment ? _.Af(a, f) : _.Af(a, e);
    return _.Fm(b, e, f, d.paramsSerializer);
  };
  Wm = function (a) {
    _.sm(!a || _.Hm.test(a), "Illegal url for new iframe - " + a);
  };
  _.Xm = function (a, b, c, d, e) {
    Wm(c.src);
    var f,
      h = Nm(d, c),
      k = h ? Om(d) : "";
    try {
      document.all &&
        (f = a.createElement(
          '<iframe frameborder="' +
            ym(String(c.frameborder)) +
            '" scrolling="' +
            ym(String(c.scrolling)) +
            '" ' +
            k +
            ' name="' +
            ym(String(c.name)) +
            '"/>'
        ));
    } catch (m) {
    } finally {
      f ||
        ((f = _.Pe(a).wa("IFRAME")),
        h &&
          ((f.onload = function () {
            f.onload = null;
            h.call(this);
          }),
          Pm(d)));
    }
    f.setAttribute("ng-non-bindable", "");
    for (var l in c)
      (a = c[l]),
        l === "style" && typeof a === "object"
          ? _.Af(a, f.style)
          : Rm[l] || f.setAttribute(l, String(a));
    (l = (e && e.beforeNode) || null) || (e && e.dontclear) || Jm(b);
    b.insertBefore(f, l);
    f = l ? l.previousSibling : b.lastChild;
    c.allowtransparency && (f.allowTransparency = !0);
    return f;
  };
  var Ym, an;
  Ym = /^:[\w]+$/;
  _.Zm = /:([a-zA-Z_]+):/g;
  _.$m = function () {
    var a = _.bj() || "0",
      b = Lm();
    var c = _.bj() || a;
    var d = Lm(),
      e = "";
    c && (e += "u/" + encodeURIComponent(String(c)) + "/");
    d && (e += "b/" + encodeURIComponent(String(d)) + "/");
    c = e || null;
    (e = (d = _.Zi("isLoggedIn") === !1) ? "_/im/" : "") && (c = "");
    var f = _.Zi("iframes/:socialhost:"),
      h = _.Zi("iframes/:im_socialhost:");
    return (Im = {
      socialhost: f,
      ctx_socialhost: d ? h : f,
      session_index: a,
      session_delegate: b,
      session_prefix: c,
      im_prefix: e,
    });
  };
  an = function (a, b) {
    return _.$m()[b] || "";
  };
  _.bn = function (a) {
    return _.Gm(_.sf, a.replace(_.Zm, an));
  };
  _.cn = function (a) {
    var b = a;
    Ym.test(a) &&
      ((b = "iframes/" + b.substring(1) + "/url"),
      (b = _.Zi(b)),
      _.sm(!!b, "Unknown iframe url config for - " + a));
    return _.bn(b);
  };
  _.dn = function (a, b, c) {
    c = c || {};
    var d = c.attributes || {};
    _.sm(
      !(c.allowPost || c.forcePost) || !d.onload,
      "onload is not supported by post iframe (allowPost or forcePost)"
    );
    a = _.cn(a);
    d = b.ownerDocument || _.sf;
    var e = _.Tm(d, c);
    a = _.Vm(d, a, e, c);
    var f = c,
      h = _.wf();
    _.Af(_.Qm, h);
    _.Af(f.attributes, h);
    h.name = h.id = e;
    h.src = a;
    c.eurl = a;
    c = (f = c) || {};
    var k = !!c.allowPost;
    if (c.forcePost || (k && a.length > 2e3)) {
      c = Cm(a);
      h.src = "";
      f.dropDataPostorigin || (h["data-postorigin"] = a);
      a = _.Xm(d, b, h, e);
      if (navigator.userAgent.indexOf("WebKit") != -1) {
        var l = a.contentWindow.document;
        l.open();
        h = l.createElement("div");
        k = {};
        var m = e + "_inner";
        k.name = m;
        k.src = "";
        k.style = "display:none";
        _.Xm(d, h, k, m, f);
      }
      h = (f = c.query[0]) ? f.split("&") : [];
      f = [];
      for (k = 0; k < h.length; k++)
        (m = h[k].split("=", 2)),
          f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
      c.query = [];
      h = Dm(c);
      _.sm(_.Hm.test(h), "Invalid URL: " + h);
      c = d.createElement("form");
      c.method = "POST";
      c.target = e;
      c.style.display = "none";
      e = _.Tb(h);
      e !== void 0 && (c.action = e);
      for (e = 0; e < f.length; e++)
        (h = d.createElement("input")),
          (h.type = "hidden"),
          (h.name = f[e][0]),
          (h.value = f[e][1]),
          c.appendChild(h);
      b.appendChild(c);
      c.submit();
      c.parentNode.removeChild(c);
      l && l.close();
      b = a;
    } else b = _.Xm(d, b, h, e, f);
    return b;
  };
  var en;
  en = function () {
    function a(k, l) {
      k = window
        .getComputedStyle(k, "")
        .getPropertyValue(l)
        .match(/^([0-9]+)/);
      return parseInt(k[0], 10);
    }
    for (var b = 0, c = [document.body]; c.length > 0; ) {
      var d = c.shift(),
        e = d.childNodes;
      if (typeof d.style !== "undefined") {
        var f = d.style.overflowY;
        f ||
          (f = (f = document.defaultView.getComputedStyle(d, null))
            ? f.overflowY
            : null);
        if (
          f != "visible" &&
          f != "inherit" &&
          ((f = d.style.height),
          f ||
            (f = (f = document.defaultView.getComputedStyle(d, null))
              ? f.height
              : ""),
          f.length > 0 && f != "auto")
        )
          continue;
      }
      for (d = 0; d < e.length; d++) {
        f = e[d];
        if (
          typeof f.offsetTop !== "undefined" &&
          typeof f.offsetHeight !== "undefined"
        ) {
          var h = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
          b = Math.max(b, h);
        }
        c.push(f);
      }
    }
    return (
      b +
      a(document.body, "border-bottom") +
      a(document.body, "margin-bottom") +
      a(document.body, "padding-bottom")
    );
  };
  _.fn = function () {
    var a = 0;
    self.innerHeight
      ? (a = self.innerHeight)
      : document.documentElement && document.documentElement.clientHeight
      ? (a = document.documentElement.clientHeight)
      : document.body && (a = document.body.clientHeight);
    var b = document.body,
      c = document.documentElement;
    if (document.compatMode === "CSS1Compat" && c.scrollHeight)
      return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
    if (navigator.userAgent.indexOf("AppleWebKit") >= 0) return en();
    if (b && c) {
      var d = c.scrollHeight,
        e = c.offsetHeight;
      c.clientHeight !== e && ((d = b.scrollHeight), (e = b.offsetHeight));
      return d > a ? (d > e ? d : e) : d < e ? d : e;
    }
  };
  var gn = function (a, b) {
      return _.Fk(a, b, !0);
    },
    hn = function (a) {
      var b = function (c) {
        return new (a().Context)(c);
      };
      b.prototype.addOnConnectHandler = function (c, d, e, f) {
        return a().Context.prototype.addOnConnectHandler.apply(this, [
          c,
          d,
          e,
          f,
        ]);
      };
      b.prototype.addOnOpenerHandler = function (c, d, e) {
        return a().Context.prototype.addOnOpenerHandler.apply(this, [c, d, e]);
      };
      b.prototype.closeSelf = function (c, d, e) {
        return a().Context.prototype.closeSelf.apply(this, [c, d, e]);
      };
      b.prototype.connectIframes = function (c, d) {
        a().Context.prototype.connectIframes.apply(this, [c, d]);
      };
      b.prototype.getFrameName = function () {
        return a().Context.prototype.getFrameName.apply(this);
      };
      b.prototype.getGlobalParam = function (c) {
        a().Context.prototype.getGlobalParam.apply(this, [c]);
      };
      b.prototype.getParentIframe = function () {
        return a().Context.prototype.getParentIframe.apply(this);
      };
      b.prototype.getWindow = function () {
        return a().Context.prototype.getWindow.apply(this);
      };
      b.prototype.isDisposed = function () {
        return a().Context.prototype.isDisposed.apply(this);
      };
      b.prototype.open = function (c, d) {
        return a().Context.prototype.open.apply(this, [c, d]);
      };
      b.prototype.openChild = function (c) {
        return a().Context.prototype.openChild.apply(this, [c]);
      };
      b.prototype.ready = function (c, d, e, f) {
        a().Context.prototype.ready.apply(this, [c, d, e, f]);
      };
      b.prototype.removeOnConnectHandler = function (c) {
        a().Context.prototype.removeOnConnectHandler.apply(this, [c]);
      };
      b.prototype.restyleSelf = function (c, d, e) {
        return a().Context.prototype.restyleSelf.apply(this, [c, d, e]);
      };
      b.prototype.setCloseSelfFilter = function (c) {
        a().Context.prototype.setCloseSelfFilter.apply(this, [c]);
      };
      b.prototype.setGlobalParam = function (c, d) {
        a().Context.prototype.setGlobalParam.apply(this, [c, d]);
      };
      b.prototype.setRestyleSelfFilter = function (c) {
        a().Context.prototype.setRestyleSelfFilter.apply(this, [c]);
      };
      return b;
    },
    jn = function (a) {
      var b = function (c, d, e, f) {
        return new (a().Iframe)(c, d, e, f);
      };
      b.prototype.applyIframesApi = function (c) {
        a().Iframe.prototype.applyIframesApi(c);
      };
      b.prototype.close = function (c, d) {
        return a().Iframe.prototype.close.apply(this, [c, d]);
      };
      b.prototype.getContext = function () {
        return a().Iframe.prototype.getContext.apply(this, []);
      };
      b.prototype.getFrameName = function () {
        return a().Iframe.prototype.getFrameName.apply(this, []);
      };
      b.prototype.getId = function () {
        return a().Iframe.prototype.getId.apply(this, []);
      };
      b.prototype.getIframeEl = function () {
        return a().Iframe.prototype.getIframeEl.apply(this, []);
      };
      b.prototype.getOrigin = function () {
        return a().Iframe.prototype.getOrigin.apply(this, []);
      };
      b.prototype.getParam = function (c) {
        a().Iframe.prototype.getParam.apply(this, [c]);
      };
      b.prototype.getSiteEl = function () {
        return a().Iframe.prototype.getSiteEl.apply(this, []);
      };
      b.prototype.getWindow = function () {
        return a().Iframe.prototype.getWindow.apply(this, []);
      };
      b.prototype.isDisposed = function () {
        return a().Iframe.prototype.isDisposed.apply(this, []);
      };
      b.prototype.ping = function (c, d) {
        return a().Iframe.prototype.ping.apply(this, [c, d]);
      };
      b.prototype.register = function (c, d, e) {
        a().Iframe.prototype.register.apply(this, [c, d, e]);
      };
      b.prototype.registerWasClosed = function (c, d) {
        a().Iframe.prototype.registerWasClosed.apply(this, [c, d]);
      };
      b.prototype.registerWasRestyled = function (c, d) {
        a().Iframe.prototype.registerWasRestyled.apply(this, [c, d]);
      };
      b.prototype.restyle = function (c, d) {
        return a().Iframe.prototype.restyle.apply(this, [c, d]);
      };
      b.prototype.send = function (c, d, e, f) {
        return a().Iframe.prototype.send.apply(this, [c, d, e, f]);
      };
      b.prototype.setParam = function (c, d) {
        a().Iframe.prototype.setParam.apply(this, [c, d]);
      };
      b.prototype.setSiteEl = function (c) {
        a().Iframe.prototype.setSiteEl.apply(this, [c]);
      };
      b.prototype.unregister = function (c, d) {
        a().Iframe.prototype.unregister.apply(this, [c, d]);
      };
      return b;
    },
    kn,
    ln,
    pn,
    rn,
    wn,
    Fn,
    Gn,
    In,
    Mn,
    Nn,
    Qn,
    Sn,
    Tn,
    Vn,
    Un,
    Wn;
  _.Jk.prototype.ts = _.nb(4, function (a) {
    this.T.apis = a;
    return this;
  });
  kn = function (a, b) {
    a.T.onload = b;
  };
  ln = function (a) {
    return a.T.rpctoken;
  };
  _.mn = function (a, b) {
    a.T.queryParams = b;
    return a;
  };
  _.nn = function (a, b) {
    a.T.relayOpen = b;
    return a;
  };
  _.on = function (a, b) {
    a.T.onClose = b;
    return a;
  };
  pn = function (a, b) {
    a.T.controllerData = b;
  };
  _.qn = function (a) {
    a.T.waitForOnload = !0;
    return a;
  };
  rn = function (a) {
    return (a = a.T.timeout) ? a : null;
  };
  _.sn = function (a) {
    return !!a && typeof a === "object" && _.uf.test(a.push);
  };
  _.tn = function (a) {
    for (var b = 0; b < this.length; b++) if (this[b] === a) return b;
    return -1;
  };
  _.un = function (a, b, c) {
    if (a) {
      _.sm(_.sn(a), "arrayForEach was called with a non array value");
      for (var d = 0; d < a.length; d++) b.call(c, a[d], d);
    }
  };
  _.vn = function (a, b, c) {
    if (a)
      if (_.sn(a)) _.un(a, b, c);
      else {
        _.sm(
          typeof a === "object",
          "objectForEach was called with a non object value"
        );
        c = c || a;
        for (var d in a) _.xf(a, d) && a[d] !== void 0 && b.call(c, a[d], d);
      }
  };
  wn = function (a) {
    this.T = a || {};
  };
  wn.prototype.value = function () {
    return this.T;
  };
  wn.prototype.getIframe = function () {
    return this.T.iframe;
  };
  var xn = function (a, b) {
      a.T.role = b;
      return a;
    },
    yn = function (a, b) {
      a.T.data = b;
      return a;
    };
  wn.prototype.rl = function (a) {
    this.T.setRpcReady = a;
    return this;
  };
  var zn = function (a) {
    return a.T.setRpcReady;
  };
  wn.prototype.wn = function (a) {
    this.T.rpctoken = a;
    return this;
  };
  var An = function (a) {
      a.T.selfConnect = !0;
      return a;
    },
    Bn = function (a) {
      this.T = a || {};
    };
  Bn.prototype.value = function () {
    return this.T;
  };
  var Dn = function (a) {
    var b = new Cn();
    b.T.role = a;
    return b;
  };
  Bn.prototype.AT = function () {
    return this.T.role;
  };
  Bn.prototype.Lc = function (a) {
    this.T.handler = a;
    return this;
  };
  Bn.prototype.Bb = function () {
    return this.T.handler;
  };
  var En = function (a, b) {
    a.T.filter = b;
    return a;
  };
  Bn.prototype.ts = function (a) {
    this.T.apis = a;
    return this;
  };
  In = /^[\w\.\-]*$/;
  _.Jn = function (a) {
    return a.getOrigin() === a.getContext().getOrigin();
  };
  _.Kn = function () {
    return !0;
  };
  _.Ln = function (a) {
    for (var b = _.wf(), c = 0; c < a.length; c++) b[a[c]] = !0;
    return function (d) {
      return !!b[d.Jd];
    };
  };
  Mn = function (a, b, c) {
    a = Fn[a];
    if (!a) return [];
    for (var d = [], e = 0; e < a.length; e++) d.push(_.kl(a[e].call(c, b, c)));
    return d;
  };
  Nn = function (a, b, c) {
    return function (d) {
      if (!b.isDisposed()) {
        var e = this.origin,
          f = b.getOrigin();
        _.sm(e === f, "Wrong origin " + e + " != " + f);
        e = this.callback;
        d = Mn(a, d, b);
        !c && d.length > 0 && _.ol(d).then(e);
      }
    };
  };
  _.On = function (a, b, c) {
    _.sm(a != "_default", "Cannot update default api");
    Gn[a] = { map: b, filter: c };
  };
  _.Pn = function (a, b, c) {
    _.sm(a != "_default", "Cannot update default api");
    _.vf(Gn, a, { map: {}, filter: _.Jn }).map[b] = c;
  };
  Qn = function (a, b) {
    _.vf(Gn, "_default", { map: {}, filter: _.Kn }).map[a] = b;
    _.vn(_.Hn.ug, function (c) {
      c.register(a, b, _.Kn);
    });
  };
  _.Rn = function () {
    return _.Hn;
  };
  Sn = /^https?:\/\/[^\/%\\?#\s]+$/i;
  Tn = {
    longdesc: !0,
    name: !0,
    src: !0,
    frameborder: !0,
    marginwidth: !0,
    marginheight: !0,
    scrolling: !0,
    align: !0,
    height: !0,
    width: !0,
    id: !0,
    class: !0,
    title: !0,
    tabindex: !0,
    hspace: !0,
    vspace: !0,
    allowtransparency: !0,
  };
  Vn = function (a) {
    this.resolve = this.reject = null;
    this.promise = _.Dl(
      (0, _.z)(function (b, c) {
        this.resolve = b;
        this.reject = c;
      }, this)
    );
    a && (this.promise = Un(this.promise, a));
  };
  Un = function (a, b) {
    return a.then(function (c) {
      try {
        b(c);
      } catch (d) {}
      return c;
    });
  };
  Wn = function (a) {
    this.xg = a;
    this.Context = hn(a);
    this.Iframe = jn(a);
  };
  _.g = Wn.prototype;
  _.g.CROSS_ORIGIN_IFRAMES_FILTER = function (a) {
    return this.xg().CROSS_ORIGIN_IFRAMES_FILTER(a);
  };
  _.g.SAME_ORIGIN_IFRAMES_FILTER = function (a) {
    return this.xg().SAME_ORIGIN_IFRAMES_FILTER(a);
  };
  _.g.create = function (a, b, c) {
    return this.xg().create(a, b, c);
  };
  _.g.getBeforeOpenStyle = function (a) {
    return this.xg().getBeforeOpenStyle(a);
  };
  _.g.getContext = function () {
    return this.xg().getContext();
  };
  _.g.getStyle = function (a) {
    return this.xg().getStyle(a);
  };
  _.g.makeWhiteListIframesFilter = function (a) {
    return this.xg().makeWhiteListIframesFilter(a);
  };
  _.g.registerBeforeOpenStyle = function (a, b) {
    return this.xg().registerBeforeOpenStyle(a, b);
  };
  _.g.registerIframesApi = function (a, b, c) {
    return this.xg().registerIframesApi(a, b, c);
  };
  _.g.registerIframesApiHandler = function (a, b, c) {
    return this.xg().registerIframesApiHandler(a, b, c);
  };
  _.g.registerStyle = function (a, b) {
    return this.xg().registerStyle(a, b);
  };
  var Xn = function () {
    this.Fi = [];
  };
  Xn.prototype.xg = function (a) {
    return this.Fi.length ? Yn(this.Fi[0], a) : void 0;
  };
  var Yn = function (a, b) {
      b =
        b === void 0
          ? function (c) {
              return new c();
            }
          : b;
      return a.Je ? b(a.Je) : a.instance;
    },
    Zn = function () {
      Xn.apply(this, arguments);
    };
  _.A(Zn, Xn);
  var ao = function (a) {
    var b = $n.PQ,
      c = a.priority,
      d = ~gn(b.Fi, function (e) {
        return e.priority < c ? -1 : 1;
      });
    b.Fi.splice(d, 0, a);
  };
  var $n = new (function () {
    var a = this;
    this.PQ = new Zn();
    this.instance = new Wn(function () {
      return a.PQ.xg()();
    });
  })();
  ao({
    instance: function () {
      return window.gapi.iframes;
    },
    priority: 1,
  });
  _.bo = $n.instance;
  var co, eo;
  co = { height: !0, width: !0 };
  eo =
    /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
  _.fo = function (a) {
    typeof a === "number" && (a = String(a) + "px");
    return a;
  };
  var go = function () {
    wn.apply(this, arguments);
  };
  _.A(go, wn);
  var Cn = function () {
    Bn.apply(this, arguments);
  };
  _.A(Cn, Bn);
  var ho = function () {
    _.Jk.apply(this, arguments);
  };
  _.A(ho, _.Jk);
  var io = function (a) {
    ho.call(this, a);
  };
  _.A(io, ho);
  var jo = function (a, b) {
    a.T.frameName = b;
    return a;
  };
  io.prototype.getFrameName = function () {
    return this.T.frameName;
  };
  var ko = function (a, b) {
    a.T.rpcAddr = b;
    return a;
  };
  io.prototype.Eg = function () {
    return this.T.rpcAddr;
  };
  var lo = function (a, b) {
    a.T.retAddr = b;
    return a;
  };
  _.g = io.prototype;
  _.g.ki = function () {
    return this.T.retAddr;
  };
  _.g.Vj = function (a) {
    this.T.origin = a;
    return this;
  };
  _.g.getOrigin = function () {
    return this.T.origin;
  };
  _.g.rl = function (a) {
    this.T.setRpcReady = a;
    return this;
  };
  _.g.Hp = function (a) {
    this.T.context = a;
  };
  var mo = function (a, b) {
    a.T._rpcReadyFn = b;
  };
  io.prototype.getIframeEl = function () {
    return this.T.iframeEl;
  };
  var no = function (a, b, c) {
    var d = a.Eg(),
      e = b.ki();
    lo(ko(c, a.ki() + "/" + b.Eg()), e + "/" + d);
    jo(c, b.getFrameName()).Vj(b.getOrigin());
  };
  var po = function (a, b, c) {
      a.setTimeout(function () {
        b.closed || c == 5 ? oo(b) : (b.close(), c++, po(a, b, c));
      }, 1e3);
    },
    oo = function (a) {
      a.closed ||
        (a.document &&
          a.document.body &&
          _.lf(a.document.body, "Please close this window."));
    };
  _.qo = function (a, b, c, d) {
    this.dh = !1;
    this.tb = a;
    this.oK = b;
    this.Fq = c;
    this.Na = d;
    this.eZ = this.Na.ki();
    this.Jd = this.Na.getOrigin();
    this.Eaa = this.Na.getIframeEl();
    this.T_ = this.Na.T.where;
    this.Fi = [];
    this.applyIframesApi("_default");
    a = this.Na.T.apis || [];
    for (b = 0; b < a.length; b++) this.applyIframesApi(a[b]);
    this.tb.ug[c] = this;
  };
  _.g = _.qo.prototype;
  _.g.isDisposed = function () {
    return this.dh;
  };
  _.g.dispose = function () {
    if (!this.isDisposed()) {
      for (var a = 0; a < this.Fi.length; a++) this.unregister(this.Fi[a]);
      delete _.Hn.ug[this.getFrameName()];
      this.dh = !0;
    }
  };
  _.g.getContext = function () {
    return this.tb;
  };
  _.g.getOptions = function () {
    return this.Na;
  };
  _.g.Eg = function () {
    return this.oK;
  };
  _.g.ki = function () {
    return this.eZ;
  };
  _.g.getFrameName = function () {
    return this.Fq;
  };
  _.g.getIframeEl = function () {
    return this.Eaa;
  };
  _.g.getSiteEl = function () {
    return this.T_;
  };
  _.g.setSiteEl = function (a) {
    this.T_ = a;
  };
  _.g.rl = function () {
    (0, this.Na.T._rpcReadyFn)();
  };
  _.g.setParam = function (a, b) {
    this.Na.value()[a] = b;
  };
  _.g.getParam = function (a) {
    return this.Na.value()[a];
  };
  _.g.Ac = function () {
    return this.Na.value();
  };
  _.g.getId = function () {
    return this.Na.getId();
  };
  _.g.getOrigin = function () {
    return this.Jd;
  };
  var ro = function (a, b) {
    var c = a.Fq;
    a = a.tb.getFrameName();
    return c + ":" + a + ":" + b;
  };
  _.g = _.qo.prototype;
  _.g.register = function (a, b, c) {
    _.sm(!this.isDisposed(), "Cannot register handler on disposed iframe " + a);
    _.sm((c || _.Jn)(this), "Rejecting untrusted message " + a);
    c = ro(this, a);
    _.vf(Fn, c, []).push(b) == 1 &&
      (this.Fi.push(a), _.gm(c, Nn(c, this, a === "_g_wasClosed")));
  };
  _.g.unregister = function (a, b) {
    var c = ro(this, a),
      d = Fn[c];
    d &&
      (b
        ? ((b = _.tn.call(d, b)), b >= 0 && d.splice(b, 1))
        : d.splice(0, d.length),
      d.length == 0 &&
        ((b = _.tn.call(this.Fi, a)), b >= 0 && this.Fi.splice(b, 1), _.hm(c)));
  };
  _.g.A9 = function () {
    return this.Fi;
  };
  _.g.applyIframesApi = function (a) {
    this.AE = this.AE || [];
    if (!(_.tn.call(this.AE, a) >= 0)) {
      this.AE.push(a);
      a = Gn[a] || { map: {} };
      for (var b in a.map)
        _.xf(a.map, b) && this.register(b, a.map[b], a.filter);
    }
  };
  _.g.getWindow = function () {
    if (!_.Jn(this)) return null;
    var a = this.Na.T._popupWindow;
    if (a) return a;
    var b = this.oK.split("/");
    a = this.getContext().getWindow();
    for (var c = 0; c < b.length && a; c++) {
      var d = b[c];
      a = ".." === d ? (a == a.parent ? a.opener : a.parent) : a.frames[d];
    }
    return a;
  };
  var so = function (a) {
    var b = {};
    if (a)
      for (var c in a)
        _.xf(a, c) && _.xf(co, c) && eo.test(a[c]) && (b[c] = a[c]);
    return b;
  };
  _.g = _.qo.prototype;
  _.g.close = function (a, b) {
    return to(this, "_g_close", a, b);
  };
  _.g.restyle = function (a, b) {
    return to(this, "_g_restyle", a, b);
  };
  _.g.ds = function (a, b) {
    return to(this, "_g_restyleDone", a, b);
  };
  _.g.Z6 = function (a) {
    return this.getContext().closeSelf(a, void 0, this);
  };
  _.g.nea = function (a) {
    if (a && typeof a === "object")
      return this.getContext().restyleSelf(a, void 0, this);
  };
  _.g.oea = function (a) {
    var b = this.Na.T.onRestyle;
    b && b.call(this, a, this);
    a = a && typeof a === "object" ? so(a) : {};
    (b = this.getIframeEl()) &&
      a &&
      typeof a === "object" &&
      (_.xf(a, "height") && (a.height = _.fo(a.height)),
      _.xf(a, "width") && (a.width = _.fo(a.width)),
      _.Af(a, b.style));
  };
  _.g.a7 = function (a) {
    var b = this.Na.T.onClose;
    b && b.call(this, a, this);
    if ((b = this.getOptions().T._popupWindow)) {
      var c = this.getContext()
        .getWindow()
        .document.getElementById(this.getId());
      c && c.parentNode && c.parentNode.removeChild(c);
      c = this.getContext().getWindow();
      _.me && _.Ci && c ? (c.focus(), po(c, b, 0)) : (b.close(), oo(b));
    }
    b ||
      ((b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b));
    if ((b = this.Na.lj()))
      (c = {}),
        (c.frameName = this.getFrameName()),
        to(b, "_g_disposeControl", c);
    b = ro(this, "_g_wasClosed");
    Mn(b, a, this);
  };
  _.g.registerWasRestyled = function (a, b) {
    this.register("_g_wasRestyled", a, b);
  };
  _.g.registerWasClosed = function (a, b) {
    this.register("_g_wasClosed", a, b);
  };
  _.g.Zga = function () {
    delete this.getContext().ug[this.getFrameName()];
    this.getContext()
      .getWindow()
      .setTimeout(
        (0, _.z)(function () {
          this.dispose();
        }, this),
        0
      );
  };
  _.g.send = function (a, b, c, d) {
    _.sm(!this.isDisposed(), "Cannot send message to disposed iframe - " + a);
    _.sm((d || _.Jn)(this), "Wrong target for message " + a);
    c = new Vn(c);
    a = this.tb.getFrameName() + ":" + this.Fq + ":" + a;
    _.km(this.oK, a, c.resolve, b);
    return c.promise;
  };
  var to = function (a, b, c, d) {
    return a.send(b, c, d, _.Kn);
  };
  _.g = _.qo.prototype;
  _.g.nda = function (a) {
    return a;
  };
  _.g.ping = function (a, b) {
    return to(this, "_g_ping", b, a);
  };
  _.g.g7 = function (a) {
    a = a && typeof a === "object" ? a : {};
    for (
      var b = a.rpcAddr,
        c = (this.Eg() + "/" + b).split("/"),
        d = this.getContext().getWindow(),
        e;
      (e = c.shift()) && d;

    )
      d = e == ".." ? d.parent : d.frames[e];
    _.sm(!!d, "Bad rpc address " + b);
    a._window = d;
    a._parentRpcAddr = this.Eg();
    a._parentRetAddr = this.ki();
    this.getContext();
    b = new _.uo(a);
    this.xca && this.xca(b, a.controllerData);
    this.kF = this.kF || [];
    this.kF.push(b, a.controllerData);
  };
  _.g.v7 = function (a) {
    a = (a || {}).frameName;
    for (var b = this.kF || [], c = 0; c < b.length; c++)
      if (b[c].getFrameName() === a) {
        a = b.splice(c, 1)[0];
        a.dispose();
        this.Bca && this.Bca(a);
        return;
      }
    _.sm(!1, "Unknown contolled iframe to dispose - " + a);
  };
  _.g.d7 = function (a) {
    var b = new io(a);
    a = new go(b.value());
    if (a.T.selfConnect) var c = this;
    else
      (_.sm(
        Sn.test(b.getOrigin()),
        "Illegal origin for connected iframe - " + b.getOrigin()
      ),
      (c = this.getContext().ug[b.getFrameName()]),
      c)
        ? zn(b) && (c.rl(), to(c, "_g_rpcReady"))
        : ((b = jo(
            lo(ko(new io(), b.Eg()), b.ki()).Vj(b.getOrigin()),
            b.getFrameName()
          )
            .rl(zn(b))
            .wn(ln(b))),
          (c = this.getContext().attach(b.value())));
    b = this.getContext();
    var d = a.T.role;
    a = a.T.data;
    vo(b);
    d = d || "";
    _.vf(b.iF, d, []).push({ Sf: c, data: a });
    wo(c, a, b.kJ[d]);
  };
  _.g.PL = function (a, b) {
    new io(b).T._relayedDepth ||
      ((b = {}), An(xn(new go(b), "_opener")), to(a, "_g_connect", b));
  };
  _.g.BX = function (a) {
    var b = this,
      c = a.T.messageHandlers,
      d = a.T.messageHandlersFilter,
      e = a.T.onClose;
    _.on(_.Lk(_.Kk(a, null), null), null);
    return to(this, "_g_open", a.value()).then(function (f) {
      var h = new io(f[0]),
        k = h.getFrameName();
      f = new io();
      var l = b.ki(),
        m = h.ki();
      lo(ko(f, b.Eg() + "/" + h.Eg()), m + "/" + l);
      jo(f, k);
      f.Vj(h.getOrigin());
      f.ts(h.T.apis);
      f.wn(ln(a));
      _.Kk(f, c);
      _.Lk(f, d);
      _.on(f, e);
      (h = b.getContext().ug[k]) || (h = b.getContext().attach(f.value()));
      return h;
    });
  };
  _.g.rK = function (a) {
    var b = a.getUrl();
    _.sm(!b || _.Hm.test(b), "Illegal url for new iframe - " + b);
    var c = a.wo().value();
    b = {};
    for (var d in c) _.xf(c, d) && _.xf(Tn, d) && (b[d] = c[d]);
    _.xf(c, "style") &&
      ((d = c.style), typeof d === "object" && (b.style = so(d)));
    a.value().attributes = b;
  };
  _.g.Wca = function (a) {
    a = new io(a);
    this.rK(a);
    var b = a.T._relayedDepth || 0;
    a.T._relayedDepth = b + 1;
    a.T.openerIframe = this;
    var c = ln(a);
    a.wn(null);
    var d = this;
    return this.getContext()
      .open(a.value())
      .then(function (e) {
        var f = new io(e.Ac()).T.apis,
          h = new io();
        no(e, d, h);
        b == 0 && xn(new go(h.value()), "_opener");
        h.rl(!0);
        h.wn(c);
        to(e, "_g_connect", h.value());
        h = new io();
        jo(lo(ko(h, e.Eg()), e.eZ), e.getFrameName())
          .Vj(e.getOrigin())
          .ts(f);
        return h.value();
      });
  };
  _.g.mea = function (a) {
    this.getContext().addOnOpenerHandler(
      function (b) {
        b.send("_g_wasRestyled", a, void 0, _.Kn);
      },
      null,
      _.Kn
    );
  };
  var Eo;
  _.xo = _.wf();
  _.yo = _.wf();
  _.Co = function (a, b) {
    _.xo[a] = b;
  };
  _.Do = function (a) {
    return _.xo[a];
  };
  Eo = function (a, b) {
    _.Bf.load("gapi.iframes.style." + a, b);
  };
  _.Fo = function (a, b) {
    _.yo[a] = b;
  };
  _.Go = function (a) {
    return _.yo[a];
  };
  _.uo = function (a) {
    a = a || {};
    this.dh = !1;
    this.Jj = _.wf();
    this.ug = _.wf();
    this.ig = a._window || _.rf;
    this.Pd = this.ig.location.href;
    this.SX = (this.FJ = Ho(this.Pd, "parent")) ? Ho(this.Pd, "pfname") : "";
    this.Ha = this.FJ ? Ho(this.Pd, "_gfid") || Ho(this.Pd, "id") : "";
    this.Fq = _.Um(this.Ha, this.SX);
    this.Jd = _.Nh(this.Pd);
    if (this.Ha) {
      var b = new io();
      ko(b, a._parentRpcAddr || "..");
      lo(b, a._parentRetAddr || this.Ha);
      b.Vj(_.Nh(this.FJ || this.Pd));
      jo(b, this.SX);
      this.wb = this.attach(b.value());
    } else this.wb = null;
  };
  _.g = _.uo.prototype;
  _.g.isDisposed = function () {
    return this.dh;
  };
  _.g.dispose = function () {
    if (!this.isDisposed()) {
      for (
        var a = _.sa(Object.values(this.ug)), b = a.next();
        !b.done;
        b = a.next()
      )
        b.value.dispose();
      this.dh = !0;
    }
  };
  _.g.getFrameName = function () {
    return this.Fq;
  };
  _.g.getOrigin = function () {
    return this.Jd;
  };
  _.g.getWindow = function () {
    return this.ig;
  };
  _.g.Ab = function () {
    return this.ig.document;
  };
  _.g.setGlobalParam = function (a, b) {
    this.Jj[a] = b;
  };
  _.g.getGlobalParam = function (a) {
    return this.Jj[a];
  };
  _.g.attach = function (a) {
    _.sm(!this.isDisposed(), "Cannot attach iframe in disposed context");
    a = new io(a);
    a.Eg() || ko(a, a.getId());
    a.ki() || lo(a, "..");
    a.getOrigin() || a.Vj(_.Nh(a.getUrl()));
    a.getFrameName() || jo(a, _.Um(a.getId(), this.Fq));
    var b = a.getFrameName();
    if (this.ug[b]) return this.ug[b];
    var c = a.Eg(),
      d = c;
    a.getOrigin() && (d = c + "|" + a.getOrigin());
    var e = a.ki(),
      f = ln(a);
    f ||
      ((f =
        ((f = a.getIframeEl()) &&
          (f.getAttribute("data-postorigin") || f.src)) ||
        a.getUrl()),
      (f = _.Cf(f, "rpctoken")));
    mo(a, _.rm(d, e, f, a.T._popupWindow));
    d = ((window.gadgets || {}).rpc || {}).setAuthToken;
    f && d && d(c, f);
    var h = new _.qo(this, c, b, a),
      k = a.T.messageHandlersFilter;
    _.vn(a.T.messageHandlers, function (l, m) {
      h.register(m, l, k);
    });
    zn(a) && h.rl();
    to(h, "_g_rpcReady");
    return h;
  };
  _.g.rK = function (a) {
    jo(a, null);
    var b = a.getId();
    !b ||
      (In.test(b) && !this.getWindow().document.getElementById(b)) ||
      (_.Zg.log("Ignoring requested iframe ID - " + b), a.Ue(null));
  };
  var Ho = function (a, b) {
    var c = _.Cf(a, b);
    c || (c = _.Ug(_.Cf(a, "jcp", ""))[b]);
    return c || "";
  };
  _.uo.prototype.openChild = function (a) {
    _.sm(!this.isDisposed(), "Cannot open iframe in disposed context");
    var b = new io(a);
    Io(this, b);
    var c = b.getFrameName();
    if (c && this.ug[c]) return this.ug[c];
    this.rK(b);
    c = b.getUrl();
    _.sm(c, "No url for new iframe");
    var d = b.T.queryParams || {};
    d.usegapi = "1";
    _.mn(b, d);
    d = this.rU && this.rU(c, b);
    d ||
      ((d = b.T.where),
      _.sm(!!d, "No location for new iframe"),
      (c = _.dn(c, d, a)),
      (b.T.iframeEl = c),
      (d = c.getAttribute("id")));
    ko(b, d).Ue(d);
    b.Vj(_.Nh(b.T.eurl || ""));
    this.xW && this.xW(b, b.getIframeEl());
    c = this.attach(a);
    c.PL && c.PL(c, a);
    (a = b.T.onCreate) && a(c);
    b.T.disableRelayOpen || c.applyIframesApi("_open");
    return c;
  };
  var Jo = function (a, b, c) {
      var d = b.T.canvasUrl;
      if (!d) return c;
      _.sm(
        !b.T.allowPost && !b.T.forcePost,
        "Post is not supported when using canvas url"
      );
      var e = b.getUrl();
      _.sm(
        e && _.Nh(e) === a.Jd && _.Nh(d) === a.Jd,
        "Wrong origin for canvas or hidden url " + d
      );
      b.setUrl(d);
      _.qn(b);
      b.T.canvasUrl = null;
      return function (f) {
        var h = f.getWindow(),
          k = h.location.hash;
        k = _.cn(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
        h.location.replace(k);
        c && c(f);
      };
    },
    Ko = function (a, b, c) {
      var d = b.T.relayOpen;
      if (d) {
        var e = a.getParentIframe();
        d instanceof _.qo
          ? ((e = d), _.nn(b, 0))
          : Number(d) > 0 && _.nn(b, Number(d) - 1);
        if (e) {
          _.sm(!!e.BX, "Relaying iframe open is disabled");
          if ((d = b.getStyle()))
            if ((d = _.yo[d])) b.Hp(a), d(b.value()), b.Hp(null);
          b.T.openerIframe = null;
          c.resolve(e.BX(b));
          return !0;
        }
      }
      return !1;
    },
    Lo = function (a, b, c) {
      var d = b.getStyle();
      if (d)
        if (
          (_.sm(!!_.Do, "Defer style is disabled, when requesting style " + d),
          _.xo[d])
        )
          Io(a, b);
        else
          return (
            Eo(d, function () {
              _.sm(!!_.xo[d], "Fail to load style - " + d);
              c.resolve(a.open(b.value()));
            }),
            !0
          );
      return !1;
    };
  _.uo.prototype.open = function (a, b) {
    _.sm(!this.isDisposed(), "Cannot open iframe in disposed context");
    var c = new io(a);
    b = Jo(this, c, b);
    var d = new Vn(b);
    (b = c.getUrl()) && c.setUrl(_.cn(b));
    if (Ko(this, c, d) || Lo(this, c, d) || Ko(this, c, d)) return d.promise;
    if (rn(c) != null) {
      var e = setTimeout(function () {
          h.getIframeEl().src = "about:blank";
          d.reject({
            timeout: "Exceeded time limit of :" + rn(c) + "milliseconds",
          });
        }, rn(c)),
        f = d.resolve;
      d.resolve = function (k) {
        clearTimeout(e);
        f(k);
      };
    }
    c.T.waitForOnload &&
      kn(c.wo(), function () {
        d.resolve(h);
      });
    var h = this.openChild(a);
    c.T.waitForOnload || d.resolve(h);
    return d.promise;
  };
  _.uo.prototype.getParentIframe = function () {
    return this.wb;
  };
  var Mo = function (a, b) {
    var c = a.getParentIframe(),
      d = !0;
    b.filter && (d = b.filter.call(b.Sf, b.params));
    return _.kl(d).then(function (e) {
      return e && c
        ? (b.QX && b.QX.call(a, b.params),
          (e = b.sender ? b.sender(b.params) : to(c, b.message, b.params)),
          b.Xga
            ? e.then(function () {
                return !0;
              })
            : !0)
        : !1;
    });
  };
  _.g = _.uo.prototype;
  _.g.closeSelf = function (a, b, c) {
    a = Mo(this, {
      sender: function (d) {
        var e = _.Hn.getParentIframe();
        _.vn(_.Hn.ug, function (f) {
          f !== e && to(f, "_g_wasClosed", d);
        });
        return to(e, "_g_closeMe", d);
      },
      message: "_g_closeMe",
      params: a,
      Sf: c,
      filter: this.getGlobalParam("onCloseSelfFilter"),
    });
    b = new Vn(b);
    b.resolve(a);
    return b.promise;
  };
  _.g.restyleSelf = function (a, b, c) {
    a = a || {};
    b = new Vn(b);
    b.resolve(
      Mo(this, {
        message: "_g_restyleMe",
        params: a,
        Sf: c,
        filter: this.getGlobalParam("onRestyleSelfFilter"),
        Xga: !0,
        QX: this.V0,
      })
    );
    return b.promise;
  };
  _.g.V0 = function (a) {
    a.height === "auto" && (a.height = _.fn());
  };
  _.g.setCloseSelfFilter = function (a) {
    this.setGlobalParam("onCloseSelfFilter", a);
  };
  _.g.setRestyleSelfFilter = function (a) {
    this.setGlobalParam("onRestyleSelfFilter", a);
  };
  var Io = function (a, b) {
    var c = b.getStyle();
    if (c) {
      b.zh(null);
      var d = _.xo[c];
      _.sm(d, "No such style: " + c);
      b.Hp(a);
      d(b.value());
      b.Hp(null);
    }
  };
  _.uo.prototype.ready = function (a, b, c, d) {
    var e = b || {},
      f = this.getParentIframe();
    this.addOnOpenerHandler(
      function (k) {
        _.vn(
          e,
          function (l, m) {
            k.register(m, l, d);
          },
          this
        );
        k !== f && k.send("_ready", h, void 0, d);
      },
      void 0,
      d
    );
    var h = a || {};
    h.height = h.height || "auto";
    this.V0(h);
    f && f.send("_ready", h, c, _.Kn);
  };
  _.uo.prototype.connectIframes = function (a, b) {
    a = new go(a);
    var c = new go(b),
      d = zn(a);
    b = a.getIframe();
    var e = c.getIframe();
    if (e) {
      var f = ln(a),
        h = new io();
      no(b, e, h);
      yn(xn(new go(h.value()).wn(f), a.T.role), a.T.data).rl(d);
      var k = new io();
      no(e, b, k);
      yn(xn(new go(k.value()).wn(f), c.T.role), c.T.data).rl(!0);
      to(b, "_g_connect", h.value(), function () {
        d || to(e, "_g_connect", k.value());
      });
      d && to(e, "_g_connect", k.value());
    } else
      (c = {}),
        yn(xn(An(new go(c)), a.T.role), a.T.data),
        to(b, "_g_connect", c);
  };
  var vo = function (a) {
    a.iF || ((a.iF = _.wf()), (a.kJ = _.wf()));
  };
  _.uo.prototype.addOnConnectHandler = function (a, b, c, d) {
    vo(this);
    typeof a === "object"
      ? ((b = new Cn(a)), (c = b.AT() || ""))
      : ((b = En(Dn(a).Lc(b).ts(c), d)), (c = a));
    d = this.iF[c] || [];
    a = !1;
    for (var e = 0; e < d.length && !a; e++)
      wo(this.ug[d[e].Sf.getFrameName()], d[e].data, [b]), (a = b.T.runOnce);
    c = _.vf(this.kJ, c, []);
    a || b.T.dontWait || c.push(b);
  };
  _.uo.prototype.removeOnConnectHandler = function (a, b) {
    a = _.vf(this.kJ, a, []);
    if (b)
      for (var c = !1, d = 0; !c && d < a.length; d++)
        a[d].Bb() === b && ((c = !0), a.splice(d, 1));
    else a.splice(0, a.length);
  };
  var wo = function (a, b, c) {
    c = c || [];
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      if (e && a) {
        var f = e.T.filter || _.Jn;
        if (a && f(a)) {
          f = e.T.apis || [];
          for (var h = 0; h < f.length; h++) a.applyIframesApi(f[h]);
          e.Bb() && e.Bb()(a, b);
          e.T.runOnce && (c.splice(d, 1), --d);
        }
      }
    }
  };
  _.uo.prototype.addOnOpenerHandler = function (a, b, c) {
    var d = this.addOnConnectHandler;
    a = En(Dn("_opener").Lc(a).ts(b), c);
    a.T.runOnce = !0;
    d.call(this, a.value());
  };
  _.uo.prototype.xW = function (a, b) {
    var c = a.lj();
    if (c) {
      _.sm(
        c.Jd === a.getOrigin(),
        "Wrong controller origin " + this.Jd + " !== " + a.getOrigin()
      );
      var d = a.Eg();
      ko(a, c.Eg());
      lo(a, c.ki());
      var e = new io();
      pn(ko(e, d), a.T.controllerData);
      _.Hf(b, "load", function () {
        c.send("_g_control", e.value());
      });
    }
  };
  var No = function (a, b, c) {
    a = a.getWindow();
    var d = a.document,
      e = c.T.reuseWindow;
    if (e) {
      var f = c.getId();
      if (!f) throw Error("O");
    } else f = _.Tm(d, c);
    var h = f,
      k = c.T.rpcRelayUrl;
    if (k) {
      k = _.bn(k);
      h = c.T.fragmentParams || {};
      h.rly = f;
      c.T.fragmentParams = h;
      h = c.T.where || d.body;
      _.sm(!!h, "Cannot open window in a page with no body");
      var l = {};
      l.src = k;
      l.style = "display:none;";
      l.id = f;
      l.name = f;
      _.Xm(d, h, l, f);
      h = f + "_relay";
    }
    b = _.cn(b);
    var m = _.Vm(d, b, f, c.value());
    c.T.eurl = m;
    b = c.T.openAsWindow;
    typeof b !== "string" && (b = void 0);
    c = window.navigator.userAgent || "";
    /Trident|MSIE/i.test(c) &&
      /#/.test(c) &&
      (m =
        "javascript:window.location.replace(" +
        _.rf.JSON.stringify(m).replace(/#/g, "\\x23") +
        ")");
    if (e) {
      var n = e;
      setTimeout(function () {
        n.location.replace(m);
      });
    } else n = _.Hk(a, m, h, b);
    return { id: f, v1: n };
  };
  _.uo.prototype.rU = function (a, b) {
    if (b.T.openAsWindow) {
      a = No(this, a, b);
      var c = a.id;
      _.sm(!!a.v1, "Open popup window failed");
      b.T._popupWindow = a.v1;
    }
    return c;
  };
  Fn = _.wf();
  Gn = _.wf();
  _.Hn = new _.uo();
  Qn("_g_rpcReady", _.qo.prototype.rl);
  Qn("_g_discover", _.qo.prototype.A9);
  Qn("_g_ping", _.qo.prototype.nda);
  Qn("_g_close", _.qo.prototype.Z6);
  Qn("_g_closeMe", _.qo.prototype.a7);
  Qn("_g_restyle", _.qo.prototype.nea);
  Qn("_g_restyleMe", _.qo.prototype.oea);
  Qn("_g_wasClosed", _.qo.prototype.Zga);
  _.Pn("control", "_g_control", _.qo.prototype.g7);
  _.Pn("control", "_g_disposeControl", _.qo.prototype.v7);
  var Oo = _.Hn.getParentIframe();
  Oo && Oo.register("_g_restyleDone", _.qo.prototype.mea, _.Kn);
  Qn("_g_connect", _.qo.prototype.d7);
  var Po = {};
  Po._g_open = _.qo.prototype.Wca;
  _.On("_open", Po, _.Kn);
  var Qo = {
    Context: _.uo,
    Iframe: _.qo,
    SAME_ORIGIN_IFRAMES_FILTER: _.Jn,
    CROSS_ORIGIN_IFRAMES_FILTER: _.Kn,
    makeWhiteListIframesFilter: _.Ln,
    getContext: _.Rn,
    registerIframesApi: _.On,
    registerIframesApiHandler: _.Pn,
    registerStyle: _.Co,
    registerBeforeOpenStyle: _.Fo,
    getStyle: _.Do,
    getBeforeOpenStyle: _.Go,
    create: _.dn,
  };
  ao({
    instance: function () {
      return Qo;
    },
    priority: 2,
  });
  _.Pn("gapi.load", "_g_gapi.load", function (a) {
    return new _.gl(function (b) {
      _.Bf.load((a && typeof a === "object" && a.features) || "", b);
    });
  });
  _.ap = function (a, b) {
    a.T.where = b;
    return a;
  };
  _.bp = function () {
    _.Jk.apply(this, arguments);
  };
  _.A(_.bp, _.Jk);
  _.cp = _.wf();
  _.dp = {};
  window.iframer = _.dp;
  var fp = function (a) {
      var b = [new ep()];
      if (b.length === 0) throw Error("m");
      if (
        b
          .map(function (c) {
            if (c instanceof ep) c = c.vY;
            else throw Error("m");
            return c;
          })
          .every(function (c) {
            return "data-gapiscan".indexOf(c) !== 0;
          })
      )
        throw Error("r`data-gapiscan");
      a.setAttribute("data-gapiscan", "true");
    },
    ep = function () {
      this.vY = gp[0].toLowerCase();
    },
    hp,
    ip,
    jp,
    kp,
    lp,
    pp,
    qp;
  ep.prototype.toString = function () {
    return this.vY;
  };
  hp = function (a) {
    if (_.uf.test(Object.keys)) return Object.keys(a);
    var b = [],
      c;
    for (c in a) _.xf(a, c) && b.push(c);
    return b;
  };
  ip = { button: !0, div: !0, span: !0 };
  jp = function (a) {
    var b = _.vf(_.If, "sws", []);
    return _.tn.call(b, a) >= 0;
  };
  kp = function (a) {
    return _.vf(_.If, "watt", _.wf())[a];
  };
  lp = function (a) {
    return function (b, c) {
      return a ? _.$m()[c] || a[c] || "" : _.$m()[c] || "";
    };
  };
  _.mp = {
    callback: 1,
    clientid: 1,
    cookiepolicy: 1,
    openidrealm: -1,
    includegrantedscopes: -1,
    requestvisibleactions: 1,
    scope: 1,
  };
  _.np = !1;
  _.op = function () {
    if (!_.np) {
      for (
        var a = document.getElementsByTagName("meta"), b = 0;
        b < a.length;
        ++b
      ) {
        var c = a[b].name.toLowerCase();
        if (_.fd(c, "google-signin-")) {
          c = c.substring(14);
          var d = a[b].content;
          _.mp[c] && d && (_.cp[c] = d);
        }
      }
      if (window.self !== window.top) {
        a = document.location.toString();
        for (var e in _.mp)
          _.mp[e] > 0 && (b = _.Cf(a, e, "")) && (_.cp[e] = b);
      }
      _.np = !0;
    }
    e = _.wf();
    _.Af(_.cp, e);
    return e;
  };
  pp = function (a) {
    var b;
    a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
    a = b ? b : a;
    return _.Gm(document, a);
  };
  qp = function (a) {
    a = a || "canonical";
    for (
      var b = document.getElementsByTagName("link"), c = 0, d = b.length;
      c < d;
      c++
    ) {
      var e = b[c],
        f = e.getAttribute("rel");
      if (
        f &&
        f.toLowerCase() == a &&
        (e = e.getAttribute("href")) &&
        (e = pp(e)) &&
        e.match(/^https?:\/\/[\w\-_\.]+/i) != null
      )
        return e;
    }
    return window.location.href;
  };
  _.rp = function () {
    return (
      window.location.origin ||
      window.location.protocol + "//" + window.location.host
    );
  };
  _.sp = function (a, b, c, d) {
    return (a = typeof a == "string" ? a : void 0) ? pp(a) : qp(d);
  };
  _.tp = function (a, b, c) {
    a == null &&
      c &&
      ((a = c.db), a == null && (a = c.gwidget && c.gwidget.db));
    return a || void 0;
  };
  _.up = function (a, b, c) {
    a == null &&
      c &&
      ((a = c.ecp), a == null && (a = c.gwidget && c.gwidget.ecp));
    return a || void 0;
  };
  _.vp = function (a, b, c) {
    return _.sp(a, b, c, b.action ? void 0 : "publisher");
  };
  var wp, xp, yp, zp, Ap, Bp, Dp, Cp;
  wp = { se: "0" };
  xp = { post: !0 };
  yp = {
    style:
      "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none",
  };
  zp =
    "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(
      " "
    );
  Ap = _.vf(_.If, "WI", _.wf());
  Bp = ["style", "data-gapiscan"];
  Dp = function (a) {
    for (
      var b = _.wf(),
        c = a.nodeName.toLowerCase().indexOf("g:") != 0,
        d = a.attributes.length,
        e = 0;
      e < d;
      e++
    ) {
      var f = a.attributes[e],
        h = f.name,
        k = f.value;
      _.tn.call(Bp, h) >= 0 ||
        (c && h.indexOf("data-") != 0) ||
        k === "null" ||
        ("specified" in f && !f.specified) ||
        (c && (h = h.substr(5)), (b[h.toLowerCase()] = k));
    }
    a = a.style;
    (c = Cp(a && a.height)) && (b.height = String(c));
    (a = Cp(a && a.width)) && (b.width = String(a));
    return b;
  };
  _.Fp = function (a, b, c, d, e, f) {
    if (c.rd) var h = b;
    else
      (h = document.createElement("div")),
        (b.dataset.gapistub = !0),
        (h.style.cssText = "position:absolute;width:450px;left:-10000px;"),
        b.parentNode.insertBefore(h, b);
    f.siteElement = h;
    h.id || (h.id = _.Ep(a));
    b = _.wf();
    b[">type"] = a;
    _.Af(c, b);
    a = _.dn(d, h, e);
    f.iframeNode = a;
    f.id = a.getAttribute("id");
  };
  _.Ep = function (a) {
    _.vf(Ap, a, 0);
    return "___" + a + "_" + Ap[a]++;
  };
  Cp = function (a) {
    var b = void 0;
    typeof a === "number"
      ? (b = a)
      : typeof a === "string" && (b = parseInt(a, 10));
    return b;
  };
  var gp = _.pf(["data-"]),
    Gp,
    Hp,
    Ip,
    Jp,
    Kp = /(?:^|\s)g-((\S)*)(?:$|\s)/,
    Lp = {
      plusone: !0,
      autocomplete: !0,
      profile: !0,
      signin: !0,
      signin2: !0,
    };
  Gp = _.vf(_.If, "SW", _.wf());
  Hp = _.vf(_.If, "SA", _.wf());
  Ip = _.vf(_.If, "SM", _.wf());
  Jp = _.vf(_.If, "FW", []);
  var Mp = function (a, b) {
      return (typeof a === "string" ? document.getElementById(a) : a) || b;
    },
    Qp = function (a, b) {
      var c;
      Np.ps0 = new Date().getTime();
      Op("ps0");
      a = Mp(a, _.sf);
      var d = _.sf.documentMode;
      if (a.querySelectorAll && (!d || d > 8)) {
        d = b ? [b] : hp(Gp).concat(hp(Hp)).concat(hp(Ip));
        for (var e = [], f = 0; f < d.length; f++) {
          var h = d[f];
          e.push(".g-" + h, "g\\:" + h);
        }
        d = a.querySelectorAll(e.join(","));
      } else d = a.getElementsByTagName("*");
      a = _.wf();
      for (e = 0; e < d.length; e++) {
        f = d[e];
        var k = f;
        h = b;
        var l = k.nodeName.toLowerCase(),
          m = void 0;
        if (k.hasAttribute("data-gapiscan")) h = null;
        else {
          var n = l.indexOf("g:");
          n == 0
            ? (m = l.substr(2))
            : (n =
                (n = String(k.className || k.getAttribute("class"))) &&
                Kp.exec(n)) && (m = n[1]);
          h = !m || !(Gp[m] || Hp[m] || Ip[m]) || (h && m !== h) ? null : m;
        }
        h &&
          (Lp[h] ||
            f.nodeName.toLowerCase().indexOf("g:") == 0 ||
            hp(Dp(f)).length != 0) &&
          (fp(f), _.vf(a, h, []).push(f));
      }
      for (p in a) Jp.push(p);
      Np.ps1 = new Date().getTime();
      Op("ps1");
      if ((b = Jp.join(":")))
        try {
          _.Bf.load(b, void 0);
        } catch (q) {
          _.Zg.log(q);
          return;
        }
      e = [];
      for (c in a) {
        d = a[c];
        var p = 0;
        for (b = d.length; p < b; p++) (f = d[p]), Pp(c, f, Dp(f), e, b);
      }
    };
  var Rp = function (a, b) {
      var c = kp(a);
      b && c
        ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0))
        : _.Bf.load(a, function () {
            var d = kp(a),
              e = b && b.iframeNode,
              f = b && b.userParams;
            e && d
              ? (d(b), e.setAttribute("data-gapiattached", !0))
              : ((d = _.Bf[a].go),
                a == "signin2" ? d(e, f) : d(e && e.parentNode, f));
          });
    },
    Pp = function (a, b, c, d, e, f, h) {
      switch (Sp(b, a, f)) {
        case 0:
          a = Ip[a] ? a + "_annotation" : a;
          d = {};
          d.iframeNode = b;
          d.userParams = c;
          Rp(a, d);
          break;
        case 1:
          if (b.parentNode) {
            for (var k in c) {
              if ((f = _.xf(c, k)))
                (f = c[k]),
                  (f =
                    !!f &&
                    typeof f === "object" &&
                    (!f.toString ||
                      f.toString === Object.prototype.toString ||
                      f.toString === Array.prototype.toString));
              if (f)
                try {
                  c[k] = _.Vg(c[k]);
                } catch (w) {
                  delete c[k];
                }
            }
            k = !0;
            c.dontclear && (k = !1);
            delete c.dontclear;
            var l;
            f = {};
            var m = (l = a);
            a == "plus" &&
              c.action &&
              ((l = a + "_" + c.action), (m = a + "/" + c.action));
            (l = _.Sf("iframes/" + l + "/url")) ||
              (l =
                ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" +
                m +
                "?usegapi=1");
            for (n in wp) f[n] = n + "/" + (c[n] || wp[n]) + "/";
            var n = _.Gm(_.sf, l.replace(_.Zm, lp(f)));
            m = "iframes/" + a + "/params/";
            f = {};
            _.Af(c, f);
            (l = _.Sf("lang") || _.Sf("gwidget/lang")) && (f.hl = l);
            xp[a] || (f.origin = _.rp());
            f.exp = _.Sf(m + "exp");
            if ((m = _.Sf(m + "location")))
              for (l = 0; l < m.length; l++) {
                var p = m[l];
                f[p] = _.rf.location[p];
              }
            switch (a) {
              case "plus":
              case "follow":
                f.url = _.vp(f.href, c, null);
                delete f.href;
                break;
              case "plusone":
                m = (m = c.href) ? pp(m) : qp();
                f.url = m;
                f.db = _.tp(c.db, void 0, _.Sf());
                f.ecp = _.up(c.ecp, void 0, _.Sf());
                delete f.href;
                break;
              case "signin":
                f.url = qp();
            }
            _.If.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var q in wp) f[q] && delete f[q];
            f.gsrc = _.Sf("iframes/:source:");
            q = _.Sf("inline/css");
            typeof q !== "undefined" && e > 0 && q >= e && (f.ic = "1");
            q = /^#|^fr-/;
            e = {};
            for (var t in f)
              _.xf(f, t) &&
                q.test(t) &&
                ((e[t.replace(q, "")] = f[t]), delete f[t]);
            t = _.Sf("iframes/" + a + "/params/si") == "q" ? f : e;
            q = _.op();
            for (var v in q)
              !_.xf(q, v) || _.xf(f, v) || _.xf(e, v) || (t[v] = q[v]);
            v = [].concat(zp);
            t = _.Sf("iframes/" + a + "/methods");
            _.sn(t) && (v = v.concat(t));
            for (u in c)
              _.xf(c, u) &&
                /^on/.test(u) &&
                (a != "plus" || u != "onconnect") &&
                (v.push(u), delete f[u]);
            delete f.callback;
            e._methods = v.join(",");
            var u = _.Fm(n, f, e);
            v = h || {};
            v.allowPost = 1;
            v.attributes = yp;
            v.dontclear = !k;
            h = {};
            h.userParams = c;
            h.url = u;
            h.type = a;
            _.Fp(a, b, c, u, v, h);
            b = h.id;
            c = _.wf();
            c.id = b;
            c.userParams = h.userParams;
            c.url = h.url;
            c.type = h.type;
            c.state = 1;
            _.To[b] = c;
            b = h;
          } else b = null;
          b && ((c = b.id) && d.push(c), Rp(a, b));
      }
    },
    Sp = function (a, b, c) {
      if (a && a.nodeType === 1 && b) {
        if (c) return 1;
        if (Ip[b]) {
          if (ip[a.nodeName.toLowerCase()])
            return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
              ? 0
              : 1;
        } else {
          if (Hp[b]) return 0;
          if (Gp[b]) return 1;
        }
      }
      return null;
    };
  _.vf(_.Bf, "platform", {}).go = function (a, b) {
    Qp(a, b);
  };
  var Tp = _.vf(_.If, "perf", _.wf()),
    Np = _.vf(Tp, "g", _.wf()),
    Up = _.vf(Tp, "i", _.wf()),
    Vp,
    Wp,
    Xp,
    Op,
    Zp,
    $p,
    aq;
  _.vf(Tp, "r", []);
  Vp = _.wf();
  Wp = _.wf();
  Xp = function (a, b, c, d) {
    Vp[c] = Vp[c] || !!d;
    _.vf(Wp, c, []);
    Wp[c].push([a, b]);
  };
  Op = function (a, b, c) {
    var d = Tp.r;
    typeof d === "function" ? d(a, b, c) : d.push([a, b, c]);
  };
  Zp = function (a, b, c, d) {
    if (b == "_p") throw Error("P");
    _.Yp(a, b, c, d);
  };
  _.Yp = function (a, b, c, d) {
    $p(b, c)[a] = d || new Date().getTime();
    Op(a, b, c);
  };
  $p = function (a, b) {
    a = _.vf(Up, a, _.wf());
    return _.vf(a, b, _.wf());
  };
  aq = function (a, b, c) {
    var d = null;
    b && c && (d = $p(b, c)[a]);
    return d || Np[a];
  };
  (function () {
    function a(h) {
      this.t = {};
      this.tick = function (k, l, m) {
        this.t[k] = [m != void 0 ? m : new Date().getTime(), l];
        if (m == void 0)
          try {
            window.console.timeStamp("CSI/" + k);
          } catch (n) {}
      };
      this.getStartTickTime = function () {
        return this.t.start[0];
      };
      this.tick("start", null, h);
    }
    var b;
    if (window.performance)
      var c = (b = window.performance.timing) && b.responseStart;
    var d = c > 0 ? new a(c) : new a();
    window.__gapi_jstiming__ = { Timer: a, load: d };
    if (b) {
      var e = b.navigationStart;
      e > 0 && c >= e && (window.__gapi_jstiming__.srt = c - e);
    }
    if (b) {
      var f = window.__gapi_jstiming__.load;
      e > 0 &&
        c >= e &&
        (f.tick("_wtsrt", void 0, e),
        f.tick("wtsrt_", "_wtsrt", c),
        f.tick("tbsd_", "wtsrt_"));
    }
    try {
      (b = null),
        window.chrome &&
          window.chrome.csi &&
          ((b = Math.floor(window.chrome.csi().pageT)),
          f &&
            e > 0 &&
            (f.tick("_tbnd", void 0, window.chrome.csi().startE),
            f.tick("tbnd_", "_tbnd", e))),
        b == null && window.gtbExternal && (b = window.gtbExternal.pageT()),
        b == null &&
          window.external &&
          ((b = window.external.pageT),
          f &&
            e > 0 &&
            (f.tick("_tbnd", void 0, window.external.startE),
            f.tick("tbnd_", "_tbnd", e))),
        b && (window.__gapi_jstiming__.pt = b);
    } catch (h) {}
  })();
  if (window.__gapi_jstiming__) {
    window.__gapi_jstiming__.DP = {};
    window.__gapi_jstiming__.Vda = 1;
    var bq = function (a, b, c) {
        var d = a.t[b],
          e = a.t.start;
        if (d && (e || c))
          return (
            (d = a.t[b][0]), (e = c != void 0 ? c : e[0]), Math.round(d - e)
          );
      },
      cq = function (a, b, c) {
        var d = "";
        window.__gapi_jstiming__.srt &&
          ((d += "&srt=" + window.__gapi_jstiming__.srt),
          delete window.__gapi_jstiming__.srt);
        window.__gapi_jstiming__.pt &&
          ((d += "&tbsrt=" + window.__gapi_jstiming__.pt),
          delete window.__gapi_jstiming__.pt);
        try {
          window.external && window.external.tran
            ? (d += "&tran=" + window.external.tran)
            : window.gtbExternal && window.gtbExternal.tran
            ? (d += "&tran=" + window.gtbExternal.tran())
            : window.chrome &&
              window.chrome.csi &&
              (d += "&tran=" + window.chrome.csi().tran);
        } catch (p) {}
        var e = window.chrome;
        if (e && (e = e.loadTimes) && typeof e === "function" && (e = e())) {
          e.wasFetchedViaSpdy && (d += "&p=s");
          if (e.wasNpnNegotiated) {
            d += "&npn=1";
            var f = e.npnNegotiatedProtocol;
            f && (d += "&npnv=" + (encodeURIComponent || escape)(f));
          }
          e.wasAlternateProtocolAvailable && (d += "&apa=1");
        }
        var h = a.t,
          k = h.start;
        e = [];
        f = [];
        for (var l in h)
          if (l != "start" && l.indexOf("_") != 0) {
            var m = h[l][1];
            m
              ? h[m] && f.push(l + "." + bq(a, l, h[m][0]))
              : k && e.push(l + "." + bq(a, l));
          }
        delete h.start;
        if (b) for (var n in b) d += "&" + n + "=" + b[n];
        (b = c) ||
          (b =
            "https:" == document.location.protocol
              ? "https://csi.gstatic.com/csi"
              : "http://csi.gstatic.com/csi");
        return [
          b,
          "?v=3",
          "&s=" + (window.__gapi_jstiming__.sn || "gwidget") + "&action=",
          a.name,
          f.length ? "&it=" + f.join(",") : "",
          d,
          "&rt=",
          e.join(","),
        ].join("");
      },
      dq = function (a, b, c) {
        a = cq(a, b, c);
        if (!a) return "";
        b = new Image();
        var d = window.__gapi_jstiming__.Vda++;
        window.__gapi_jstiming__.DP[d] = b;
        b.onload = b.onerror = function () {
          window.__gapi_jstiming__ && delete window.__gapi_jstiming__.DP[d];
        };
        b.src = a;
        b = null;
        return a;
      };
    window.__gapi_jstiming__.report = function (a, b, c) {
      var d = document.visibilityState,
        e = "visibilitychange";
      d ||
        ((d = document.webkitVisibilityState), (e = "webkitvisibilitychange"));
      if (d == "prerender") {
        var f = !1,
          h = function () {
            if (!f) {
              b ? (b.prerender = "1") : (b = { prerender: "1" });
              if (
                (document.visibilityState || document.webkitVisibilityState) ==
                "prerender"
              )
                var k = !1;
              else dq(a, b, c), (k = !0);
              k && ((f = !0), document.removeEventListener(e, h, !1));
            }
          };
        document.addEventListener(e, h, !1);
        return "";
      }
      return dq(a, b, c);
    };
  }
  var eq = { g: "gapi_global", m: "gapi_module", w: "gwidget" },
    fq = function (a, b) {
      this.type = a ? (a == "_p" ? "m" : "w") : "g";
      this.name = a;
      this.Ks = b;
    };
  fq.prototype.key = function () {
    switch (this.type) {
      case "g":
        return this.type;
      case "m":
        return this.type + "." + this.Ks;
      case "w":
        return this.type + "." + this.name + this.Ks;
    }
  };
  var gq = new fq(),
    hq = navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/),
    iq = _.vf(Tp, "_c", _.wf()),
    jq = Math.random() < (_.Sf("csi/rate") || 0),
    lq = function (a, b, c) {
      for (
        var d = new fq(b, c),
          e = _.vf(iq, d.key(), _.wf()),
          f = Wp[a] || [],
          h = 0;
        h < f.length;
        ++h
      ) {
        var k = f[h],
          l = k[0],
          m = a,
          n = b,
          p = c;
        k = aq(k[1], n, p);
        m = aq(m, n, p);
        e[l] = k && m ? m - k : null;
      }
      Vp[a] && jq && (kq(gq), kq(d));
    },
    mq = function (a, b) {
      b = b || [];
      for (var c = [], d = 0; d < b.length; d++) c.push(a + b[d]);
      return c;
    },
    kq = function (a) {
      var b = _.rf.__gapi_jstiming__;
      b.sn = eq[a.type];
      var c = new b.Timer(0);
      a: {
        switch (a.type) {
          case "g":
            var d = "global";
            break a;
          case "m":
            d = a.Ks;
            break a;
          case "w":
            d = a.name;
            break a;
        }
        d = void 0;
      }
      c.name = d;
      d = !1;
      var e = a.key(),
        f = iq[e];
      c.tick("_start", null, 0);
      for (var h in f) c.tick(h, "_start", f[h]), (d = !0);
      iq[e] = _.wf();
      d &&
        ((h = []),
        h.push("l" + (_.Sf("isPlusUser") ? "1" : "0")),
        (d = "m" + (hq ? "1" : "0")),
        h.push(d),
        a.type == "m"
          ? h.push("p" + a.Ks)
          : a.type == "w" &&
            ((e = "n" + a.Ks), h.push(e), a.Ks == "0" && h.push(d + e)),
        h.push("u" + (_.Sf("isLoggedIn") ? "1" : "0")),
        (a = mq("", h)),
        (a = mq("abc_", a).join(",")),
        b.report(c, { e: a }));
    };
  Xp("blt", "bs0", "bs1");
  Xp("psi", "ps0", "ps1");
  Xp("rpcqi", "rqe", "rqd");
  Xp("bsprt", "bsrt0", "bsrt1");
  Xp("bsrqt", "bsrt1", "bsrt2");
  Xp("bsrst", "bsrt2", "bsrt3");
  Xp("mli", "ml0", "ml1");
  Xp("mei", "me0", "me1", !0);
  Xp("wcdi", "wrs", "wcdi");
  Xp("wci", "wrs", "wdc");
  Xp("wdi", "wrs", "wrdi");
  Xp("wdt", "bs0", "wrdt");
  Xp("wri", "wrs", "wrri", !0);
  Xp("wrt", "bs0", "wrrt");
  Xp("wji", "wje0", "wje1", !0);
  Xp("wjli", "wjl0", "wjl1");
  Xp("whi", "wh0", "wh1", !0);
  Xp("wai", "waaf0", "waaf1", !0);
  Xp("wadi", "wrs", "waaf1", !0);
  Xp("wadt", "bs0", "waaf1", !0);
  Xp("wprt", "wrt0", "wrt1");
  Xp("wrqt", "wrt1", "wrt2");
  Xp("wrst", "wrt2", "wrt3", !0);
  Xp("fbprt", "fsrt0", "fsrt1");
  Xp("fbrqt", "fsrt1", "fsrt2");
  Xp("fbrst", "fsrt2", "fsrt3", !0);
  Xp("fdns", "fdns0", "fdns1");
  Xp("fcon", "fcon0", "fcon1");
  Xp("freq", "freq0", "freq1");
  Xp("frsp", "frsp0", "frsp1");
  Xp("fttfb", "fttfb0", "fttfb1");
  Xp("ftot", "ftot0", "ftot1", !0);
  var nq = Tp.r;
  if (typeof nq !== "function") {
    for (var oq; (oq = nq.shift()); ) lq.apply(null, oq);
    Tp.r = lq;
  }
  var pq = ["div"],
    qq = "onload",
    rq = !0,
    sq = !0,
    tq = function (a) {
      return a;
    },
    uq = null,
    vq = function (a) {
      var b = _.Sf(a);
      return typeof b !== "undefined" ? b : _.Sf("gwidget/" + a);
    },
    zq,
    Aq,
    Bq,
    Cq,
    Dq,
    Eq,
    Fq,
    Lq,
    Gq,
    Mq,
    Nq,
    Oq,
    Pq,
    Qq,
    Hq,
    Jq,
    Rq,
    Iq,
    Sq,
    Tq,
    Uq,
    Vq,
    Wq,
    Xq;
  uq = _.Sf();
  _.Sf("gwidget");
  var wq = vq("parsetags");
  qq = wq === "explicit" || wq === "onload" ? wq : qq;
  var xq = vq("google_analytics");
  typeof xq !== "undefined" && (rq = !!xq);
  var yq = vq("data_layer");
  typeof yq !== "undefined" && (sq = !!yq);
  zq = function () {
    var a = this && this.getId();
    a && (_.If.drw = a);
  };
  Aq = function () {
    _.If.drw = null;
  };
  Bq = function (a) {
    return function (b) {
      var c = a;
      typeof b === "number"
        ? (c = b)
        : typeof b === "string" &&
          ((c = b.indexOf("px")),
          c != -1 && (b = b.substring(0, c)),
          (c = parseInt(b, 10)));
      return c;
    };
  };
  Cq = function (a) {
    typeof a === "string" && (a = window[a]);
    return typeof a === "function" ? a : null;
  };
  Dq = function () {
    return vq("lang") || "en-US";
  };
  Eq = function (a) {
    if (!_.Pa.Bb("attach")) {
      var b = {},
        c = _.Pa.Bb("inline"),
        d;
      for (d in c) c.hasOwnProperty(d) && (b[d] = c[d]);
      b.open = function (e) {
        var f = e.Ac().renderData.id;
        f = document.getElementById(f);
        if (!f) throw Error("Q");
        return c.attach(e, f);
      };
      _.Pa.Lc("attach", b);
    }
    a.style = "attach";
  };
  Fq = (function () {
    var a = {};
    a.width = [Bq(450)];
    a.height = [Bq(24)];
    a.onready = [Cq];
    a.lang = [Dq, "hl"];
    a.iloader = [
      function () {
        return _.If.ILI;
      },
      "iloader",
    ];
    return a;
  })();
  Lq = function (a) {
    var b = {};
    b.Ye = a[0];
    b.gq = -1;
    b.Bsa = "___" + b.Ye + "_";
    b.aha = "g:" + b.Ye;
    b.zqa = "g-" + b.Ye;
    b.RY = [];
    b.config = {};
    b.sy = [];
    b.f1 = {};
    b.xD = {};
    var c = function (e) {
        for (var f in e)
          if (_.xf(e, f)) {
            b.config[f] = [Cq];
            b.sy.push(f);
            var h = e[f],
              k = null,
              l = null,
              m = null;
            typeof h === "function"
              ? (k = h)
              : h &&
                typeof h === "object" &&
                ((k = h.nqa), (l = h.yD), (m = h.xN));
            m && (b.sy.push(m), (b.config[m] = [Cq]), (b.f1[f] = m));
            k && (b.config[f] = [k]);
            l && (b.xD[f] = l);
          }
      },
      d = function (e) {
        for (var f = {}, h = 0; h < e.length; ++h) f[e[h].toLowerCase()] = 1;
        f[b.aha] = 1;
        b.Tba = f;
      };
    a[1] && (b.parameters = a[1]);
    (function (e) {
      b.config = e;
      for (var f in Fq)
        Fq.hasOwnProperty(f) &&
          !b.config.hasOwnProperty(f) &&
          (b.config[f] = Fq[f]);
    })(a[2] || {});
    a[3] && c(a[3]);
    a[4] && d(a[4]);
    a[5] && (b.bn = a[5]);
    b.rsa = a[6] === !0;
    b.vda = a[7];
    b.Pga = a[8];
    b.Tba || d(pq);
    b.sJ = function (e) {
      b.gq++;
      Zp("wrs", b.Ye, String(b.gq));
      var f = [],
        h = e.element,
        k = e.config,
        l = ":" + b.Ye;
      l == ":plus" && e.Ld && e.Ld.action && (l += "_" + e.Ld.action);
      var m = Gq(b, k),
        n = {};
      _.Af(_.op(), n);
      for (var p in e.Ld) e.Ld[p] != null && (n[p] = e.Ld[p]);
      p = {
        container: h.id,
        renderData: e.Qda,
        style: "inline",
        height: k.height,
        width: k.width,
      };
      Eq(p);
      b.bn && ((f[2] = p), (f[3] = n), (f[4] = m), b.bn("i", f));
      l = _.Pa.open(l, p, n, m);
      e = e.m7;
      Hq(l, k);
      Iq(l, h);
      Jq(b, l, e);
      Kq(b.Ye, b.gq.toString(), l);
      f[5] = l;
      b.bn && b.bn("e", f);
    };
    return b;
  };
  Gq = function (a, b) {
    for (var c = {}, d = a.sy.length - 1; d >= 0; --d) {
      var e = a.sy[d],
        f = b[a.f1[e] || e] || b[e],
        h = b[e];
      h &&
        f !== h &&
        (f = (function (l, m) {
          return function (n) {
            m.apply(this, arguments);
            l.apply(this, arguments);
          };
        })(f, h));
      f && (c[e] = f);
    }
    for (var k in a.xD)
      a.xD.hasOwnProperty(k) && (c[k] = Mq(c[k] || function () {}, a.xD[k]));
    c.drefresh = zq;
    c.erefresh = Aq;
    return c;
  };
  Mq = function (a, b) {
    return function (c) {
      var d = b(c);
      if (d) {
        var e = c.href || null;
        if (rq) {
          if (window._gat)
            try {
              var f = window._gat._getTrackerByName("~0");
              f && f._getAccount() != "UA-XXXXX-X"
                ? f._trackSocial("Google", d, e)
                : window._gaq &&
                  window._gaq.push(["_trackSocial", "Google", d, e]);
            } catch (k) {}
          if (window.ga && window.ga.getAll)
            try {
              var h = window.ga.getAll();
              for (f = 0; f < h.length; f++)
                h[f].send("social", "Google", d, e);
            } catch (k) {}
        }
        if (sq && window.dataLayer)
          try {
            window.dataLayer.push({
              event: "social",
              socialNetwork: "Google",
              socialAction: d,
              socialTarget: e,
            });
          } catch (k) {}
      }
      a.call(this, c);
    };
  };
  Nq = function (a) {
    return _.qo && a instanceof _.qo;
  };
  Oq = function (a) {
    return Nq(a) ? "_renderstart" : "renderstart";
  };
  Pq = function (a) {
    return Nq(a) ? "_ready" : "ready";
  };
  Qq = function () {
    return !0;
  };
  Hq = function (a, b) {
    if (b.onready) {
      var c = !1,
        d = function () {
          c || ((c = !0), b.onready.call(null));
        };
      a.register(Pq(a), d, Qq);
      a.register(Oq(a), d, Qq);
    }
  };
  Jq = function (a, b, c) {
    var d = a.Ye,
      e = String(a.gq),
      f = !1,
      h = function () {
        f ||
          ((f = !0), b.getIframeEl(), c && Zp("wrdt", d, e), Zp("wrdi", d, e));
      };
    b.register(Oq(b), h, Qq);
    var k = !1;
    a = function () {
      k || ((k = !0), h(), c && Zp("wrrt", d, e), Zp("wrri", d, e));
    };
    b.register(Pq(b), a, Qq);
    Nq(b)
      ? b.register("widget-interactive-" + b.id, a, Qq)
      : _.dh.register("widget-interactive-" + b.id, a);
    _.dh.register("widget-csi-tick-" + b.id, function (l, m, n) {
      l === "wdc"
        ? Zp("wdc", d, e, n)
        : l === "wje0"
        ? Zp("wje0", d, e, n)
        : l === "wje1"
        ? Zp("wje1", d, e, n)
        : l == "wh0"
        ? _.Yp("wh0", d, e, n)
        : l == "wh1"
        ? _.Yp("wh1", d, e, n)
        : l == "wcdi" && _.Yp("wcdi", d, e, n);
    });
  };
  Rq = function (a) {
    return typeof a == "number" ? a + "px" : a == "100%" ? a : null;
  };
  Iq = function (a, b) {
    var c = function (d) {
      d = d || a;
      var e = Rq(d.width);
      e && b.style.width != e && (b.style.width = e);
      (d = Rq(d.height)) && b.style.height != d && (b.style.height = d);
    };
    Nq(a)
      ? a.setParam("onRestyle", c)
      : (a.register("ready", c, Qq),
        a.register("renderstart", c, Qq),
        a.register("resize", c, Qq));
  };
  Sq = function (a, b) {
    for (var c in Fq)
      if (Fq.hasOwnProperty(c)) {
        var d = Fq[c][1];
        d && !b.hasOwnProperty(d) && (b[d] = a[d]);
      }
    return b;
  };
  Tq = function (a, b) {
    var c = {},
      d;
    for (d in a)
      a.hasOwnProperty(d) &&
        (c[a[d][1] || d] = ((a[d] && a[d][0]) || tq)(
          b[d.toLowerCase()],
          b,
          uq
        ));
    return c;
  };
  Uq = function (a) {
    if ((a = a.vda)) for (var b = 0; b < a.length; b++) new Image().src = a[b];
  };
  Vq = function (a, b) {
    var c = b.userParams,
      d = b.siteElement;
    d || (d = (d = b.iframeNode) && d.parentNode);
    if (d && d.nodeType === 1) {
      var e = Tq(a.config, c);
      a.RY.push({
        element: d,
        config: e,
        Ld: Sq(e, Tq(a.parameters, c)),
        wra: 3,
        m7: !!c["data-onload"],
        Qda: b,
      });
    }
    b = a.RY;
    for (a = a.sJ; b.length > 0; ) a(b.shift());
  };
  Wq = function (a, b) {
    a.gq++;
    Zp("wrs", a.Ye, String(a.gq));
    var c = b.userParams,
      d = Tq(a.config, c),
      e = [],
      f = b.iframeNode,
      h = b.siteElement,
      k = Gq(a, d),
      l = Tq(a.parameters, c);
    _.Af(_.op(), l);
    l = Sq(d, l);
    c = !!c["data-onload"];
    var m = _.Hn,
      n = _.wf();
    n.renderData = b;
    n.height = d.height;
    n.width = d.width;
    n.id = b.id;
    n.url = b.url;
    n.iframeEl = f;
    n.where = n.container = h;
    n.apis = ["_open"];
    n.messageHandlers = k;
    n.messageHandlersFilter = _.Kn;
    _.$o(n);
    f = l;
    a.bn && ((e[2] = n), (e[3] = f), (e[4] = k), a.bn("i", e));
    k = m.attach(n);
    k.id = b.id;
    k.PL(k, n);
    Hq(k, d);
    Iq(k, h);
    Jq(a, k, c);
    Kq(a.Ye, a.gq.toString(), k);
    e[5] = k;
    a.bn && a.bn("e", e);
  };
  Xq = function (a, b) {
    var c = b.url;
    a.Pga || _.Lj(c)
      ? Wq(a, b)
      : _.Pa.open
      ? Vq(a, b)
      : (0, _.Kh)("iframes", function () {
          Vq(a, b);
        });
  };
  _.Yq = function (a) {
    var b = Lq(a);
    Uq(b);
    _.bh(b.Ye, function (d) {
      Xq(b, d);
    });
    Gp[b.Ye] = !0;
    var c = {
      Aa: function (d, e, f) {
        var h = e || {};
        h.type = b.Ye;
        e = h.type;
        delete h.type;
        var k = Mp(d);
        if (k) {
          d = {};
          for (var l in h) _.xf(h, l) && (d[l.toLowerCase()] = h[l]);
          d.rd = 1;
          (l = !!d.ri) && delete d.ri;
          Pp(e, k, d, [], 0, l, f);
        } else
          _.Zg.log(
            "gapi." + e + ".render: missing element " + typeof d === "string"
              ? d
              : ""
          );
      },
      go: function (d) {
        Qp(d, b.Ye);
      },
      yra: function () {
        var d = _.vf(_.If, "WI", _.wf()),
          e;
        for (e in d) delete d[e];
      },
    };
    a = function () {
      qq === "onload" && c.go();
    };
    if (!jp(b.Ye)) {
      if (!_.$g())
        try {
          a();
        } catch (d) {}
      _.ah(a);
    }
    _.r("gapi." + b.Ye + ".go", c.go);
    _.r("gapi." + b.Ye + ".render", c.Aa);
    return c;
  };
  var Zq = function () {
      var a = window;
      return !!a.performance && !!a.performance.getEntries;
    },
    Kq = function (a, b, c) {
      if (Zq()) {
        var d = (function () {
            var f = !1;
            return function () {
              if (f) return !0;
              f = !0;
              return !1;
            };
          })(),
          e = function () {
            d() ||
              window.setTimeout(function () {
                var f = c.getIframeEl().src;
                var h = f.indexOf("#");
                h != -1 && (f = f.substring(0, h));
                f = window.performance.getEntriesByName(f);
                f.length < 1
                  ? (f = null)
                  : ((f = f[0]), (f = f.responseStart == 0 ? null : f));
                if (f) {
                  h = Math.round(f.requestStart);
                  var k = Math.round(f.responseStart),
                    l = Math.round(f.responseEnd);
                  Zp("wrt0", a, b, Math.round(f.startTime));
                  Zp("wrt1", a, b, h);
                  Zp("wrt2", a, b, k);
                  Zp("wrt3", a, b, l);
                }
              }, 1e3);
          };
        c.register(Oq(c), e, Qq);
        c.register(Pq(c), e, Qq);
      }
    };
  _.r("gapi.widget.make", _.Yq);
  _.jg = _.jg || {};
  _.jg.Av = function (a, b, c) {
    for (var d = [], e = 2, f = arguments.length; e < f; ++e)
      d.push(arguments[e]);
    return function () {
      for (var h = d.slice(), k = 0, l = arguments.length; k < l; ++k)
        h.push(arguments[k]);
      return b.apply(a, h);
    };
  };
  _.jg.eB = function (a) {
    var b,
      c,
      d = {};
    for (b = 0; (c = a[b]); ++b) d[c] = c;
    return d;
  };
  _.jg = _.jg || {};
  _.jg.l6 = function (a) {
    var b = window;
    typeof b.addEventListener != "undefined"
      ? b.addEventListener("mousemove", a, !1)
      : typeof b.attachEvent != "undefined"
      ? b.attachEvent("onmousemove", a)
      : _.kg("cannot attachBrowserEvent: mousemove");
  };
  _.jg.Nda = function (a) {
    var b = window;
    b.removeEventListener
      ? b.removeEventListener("mousemove", a, !1)
      : b.detachEvent
      ? b.detachEvent("onmousemove", a)
      : _.kg("cannot removeBrowserEvent: mousemove");
  };
  _.jg = _.jg || {};
  (function () {
    function a(c, d) {
      return String.fromCharCode(d);
    }
    var b = {
      0: !1,
      10: !0,
      13: !0,
      34: !0,
      39: !0,
      60: !0,
      62: !0,
      92: !0,
      8232: !0,
      8233: !0,
      65282: !0,
      65287: !0,
      65308: !0,
      65310: !0,
      65340: !0,
    };
    _.jg.escape = function (c, d) {
      if (c) {
        if (typeof c === "string") return _.jg.PF(c);
        if (typeof c === "Array") {
          var e = 0;
          for (d = c.length; e < d; ++e) c[e] = _.jg.escape(c[e]);
        } else if (typeof c === "object" && d) {
          d = {};
          for (e in c)
            c.hasOwnProperty(e) && (d[_.jg.PF(e)] = _.jg.escape(c[e], !0));
          return d;
        }
      }
      return c;
    };
    _.jg.PF = function (c) {
      if (!c) return c;
      for (var d = [], e, f, h = 0, k = c.length; h < k; ++h)
        (e = c.charCodeAt(h)),
          (f = b[e]),
          f === !0 ? d.push("&#", e, ";") : f !== !1 && d.push(c.charAt(h));
      return d.join("");
    };
    _.jg.ssa = function (c) {
      return c ? c.replace(/&#([0-9]+);/g, a) : c;
    };
  })();
  _.Th = (function () {
    function a(m) {
      var n = new _.Sh();
      n.lx(m);
      return n.Yi();
    }
    var b = window.crypto;
    if (b && typeof b.getRandomValues == "function")
      return function () {
        var m = new window.Uint32Array(1);
        b.getRandomValues(m);
        return Number("0." + m[0]);
      };
    var c = _.Sf("random/maxObserveMousemove");
    c == null && (c = -1);
    var d = 0,
      e = Math.random(),
      f = 1,
      h = (screen.width * screen.width + screen.height) * 1e6,
      k = function (m) {
        m = m || window.event;
        var n = (m.screenX + m.clientX) << 16;
        n += m.screenY + m.clientY;
        n *= new Date().getTime() % 1e6;
        f = (f * n) % h;
        c > 0 && ++d == c && _.jg.Nda(k);
      };
    c != 0 && _.jg.l6(k);
    var l = a(
      document.cookie +
        "|" +
        document.location +
        "|" +
        new Date().getTime() +
        "|" +
        e
    );
    return function () {
      var m = f;
      m += parseInt(l.substr(0, 20), 16);
      l = a(l);
      return m / (h + Math.pow(16, 20));
    };
  })();
  _.r("shindig.random", _.Th);
  _.Pa.Pa = {};
  _.Pa.Pa.Si = {};
  _.Pa.Pa.Si.C6 = function (a) {
    try {
      return !!a.document;
    } catch (b) {}
    return !1;
  };
  _.Pa.Pa.Si.JT = function (a) {
    var b = a.parent;
    return a != b && _.Pa.Pa.Si.C6(b) ? _.Pa.Pa.Si.JT(b) : a;
  };
  _.Pa.Pa.Si.oqa = function (a) {
    var b = a.userAgent || "";
    a = a.product || "";
    return (
      b.indexOf("Opera") != 0 &&
      b.indexOf("WebKit") == -1 &&
      a == "Gecko" &&
      b.indexOf("rv:1.") > 0
    );
  };
  _.Pa.Pa.Si.Av = function (a, b, c) {
    for (var d = [], e = 2, f = arguments.length; e < f; ++e)
      d.push(arguments[e]);
    return function () {
      for (var h = d.slice(), k = 0, l = arguments.length; k < l; ++k)
        h.push(arguments[k]);
      return b.apply(a, h);
    };
  };
  var fr, gr, hr, ir, lr, mr, nr, or, pr, qr, rr, sr, tr;
  fr = function () {
    _.dh.register("_noop_echo", function () {
      this.callback(_.Pa.v9(_.Pa.Em[this.f]));
    });
  };
  gr = function () {
    window.setTimeout(function () {
      _.dh.call("..", "_noop_echo", _.Pa.fda);
    }, 0);
  };
  hr = function (a, b, c) {
    var d = function (e) {
      var f = Array.prototype.slice.call(arguments, 0),
        h = f[f.length - 1];
      if (typeof h === "function") {
        var k = h;
        f.pop();
      }
      f.unshift(b, a, k, c);
      _.dh.call.apply(_.dh, f);
    };
    d._iframe_wrapped_rpc_ = !0;
    return d;
  };
  ir = function (a) {
    _.Pa.Lj[a] ||
      ((_.Pa.Lj[a] = {}),
      _.dh.register(a, function (b, c) {
        var d = this.f;
        if (!(typeof b != "string" || b in {} || d in {})) {
          var e = this.callback,
            f = _.Pa.Lj[a][d],
            h;
          f && Object.hasOwnProperty.call(f, b)
            ? (h = f[b])
            : Object.hasOwnProperty.call(_.Pa.Xq, a) && (h = _.Pa.Xq[a]);
          if (h)
            return (
              (d = Array.prototype.slice.call(arguments, 1)),
              h._iframe_wrapped_rpc_ && e && d.push(e),
              h.apply({}, d)
            );
        }
        _.Zg.error(
          [
            'Unregistered call in window "',
            window.name,
            '" for method "',
            a,
            '", via proxyId "',
            b,
            '" from frame "',
            d,
            '".',
          ].join("")
        );
        return null;
      }));
    return _.Pa.Lj[a];
  };
  _.jr = function () {
    var a = {};
    var b = window.location.href;
    var c = b.indexOf("?"),
      d = b.indexOf("#");
    b = (
      d === -1
        ? b.substr(c + 1)
        : [b.substr(c + 1, d - c - 1), "&", b.substr(d + 1)].join("")
    ).split("&");
    c = window.decodeURIComponent ? decodeURIComponent : unescape;
    d = 0;
    for (var e = b.length; d < e; ++d) {
      var f = b[d].indexOf("=");
      if (f !== -1) {
        var h = b[d].substring(0, f);
        f = b[d].substring(f + 1);
        f = f.replace(/\+/g, " ");
        try {
          a[h] = c(f);
        } catch (k) {}
      }
    }
    return a;
  };
  _.kr = function () {
    return (
      _.rf.location.origin || _.rf.location.protocol + "//" + _.rf.location.host
    );
  };
  lr = function (a) {
    _.If.h = a;
  };
  mr = function (a) {
    _.If.bsh = a;
  };
  nr = function (a) {
    var b = (window.___jsl = window.___jsl || {});
    b[a] = b[a] || [];
    return b[a];
  };
  or = function (a) {
    return typeof a === "object" && /\[native code\]/.test(a.push);
  };
  pr = function (a, b, c) {
    if (b && typeof b === "object")
      for (var d in b)
        !Object.prototype.hasOwnProperty.call(b, d) ||
          (c && d === "___goc" && typeof b[d] === "undefined") ||
          (a[d] &&
          b[d] &&
          typeof a[d] === "object" &&
          typeof b[d] === "object" &&
          !or(a[d]) &&
          !or(b[d])
            ? pr(a[d], b[d])
            : b[d] && typeof b[d] === "object"
            ? ((a[d] = or(b[d]) ? [] : {}), pr(a[d], b[d]))
            : (a[d] = b[d]));
  };
  qr = function () {
    var a = window.location.hostname;
    return a
      ? /(^|\.)(2mdn|ampproject|android|appspot|blogger|blogspot|chrome|chromium|doubleclick|gcpnode|ggpht|gmail|google|google-analytics|googleadservices|googleapis|googleapis-cn|googleoptimize|googlers|googlesource|googlesyndication|googletagmanager|googletagservices|googleusercontent|googlevideo|gstatic|tiltbrush|waze|withgoogle|youtube|ytimg)(\.com?|\.net|\.org)?(\.[a-z][a-z]|\.cat)?$/.test(
          a
        )
      : !1;
  };
  rr = function (a) {
    try {
      var b = new Function("return (" + a + "\n)")();
    } catch (c) {}
    if (typeof b === "object") return b;
    try {
      b = new Function("return ({" + a + "\n})")();
    } catch (c) {}
    return b;
  };
  sr = function (a, b) {
    if (a && !/^\s+$/.test(a)) {
      for (; a.charCodeAt(a.length - 1) == 0; )
        a = a.substring(0, a.length - 1);
      var c = a,
        d = nr("dm");
      d.push(20);
      try {
        var e = window.JSON.parse(a);
      } catch (h) {}
      if (typeof e === "object") return d.push(21), e;
      try {
        e = window.JSON.parse("{" + a + "}");
      } catch (h) {}
      if (typeof e === "object") return d.push(22), e;
      a = a.replace(
        RegExp("([^\"',{}\\s]+?)\\s*:\\s*(.*?)[,}\\s]", "g"),
        function (h, k, l) {
          l = l.startsWith('"') ? "%DOUBLE_QUOTE%" + l.substring(1) : l;
          l = l.endsWith('"') ? l.slice(0, -1) + "%DOUBLE_QUOTE%" : l;
          return "%DOUBLE_QUOTE%" + k + "%DOUBLE_QUOTE%:" + l;
        }
      );
      a = a.replace(/\\'/g, "%SINGLE_QUOTE%");
      a = a.replace(/"/g, '\\"');
      a = a.replace(/'/g, '"');
      a = a.replace(/%SINGLE_QUOTE%/g, "'");
      a = a.replace(/%DOUBLE_QUOTE%/g, '"');
      try {
        e = window.JSON.parse(a);
      } catch (h) {}
      if (typeof e === "object") return d.push(23), e;
      try {
        e = window.JSON.parse("{" + a + "}");
      } catch (h) {}
      if (typeof e === "object") return d.push(24), e;
      a = document.getElementsByTagName("script") || [];
      var f;
      a.length > 0 && (f = a[0].nonce || a[0].getAttribute("nonce"));
      if ((f && f === b) || (!f && qr()))
        if (((e = rr(c)), d.push(25), typeof e === "object")) return e;
      return {};
    }
  };
  tr = function (a, b) {
    var c = { ___goc: void 0 };
    a.length &&
      a[a.length - 1] &&
      Object.hasOwnProperty.call(a[a.length - 1], "___goc") &&
      typeof a[a.length - 1].___goc === "undefined" &&
      (c = a.pop());
    pr(c, b);
    a.push(c);
  };
  _.ur = function (a, b) {
    var c;
    if (typeof a === "string") {
      var d = (c = {});
      a = a.split("/");
      for (var e = 0, f = a.length; e < f - 1; ++e) {
        var h = {};
        d = d[a[e]] = h;
      }
      d[a[e]] = b;
    } else c = a;
    _.Yi(!0);
    d = window.___gcfg;
    b = nr("cu");
    a = window.___gu;
    d && d !== a && (tr(b, d), (window.___gu = d));
    d = nr("cu");
    e = document.getElementsByTagName("script") || [];
    a = [];
    f = [];
    f.push.apply(f, nr("us"));
    for (h = 0; h < e.length; ++h)
      for (var k = e[h], l = 0; l < f.length; ++l)
        k.src && k.src.indexOf(f[l]) == 0 && a.push(k);
    a.length == 0 &&
      e.length > 0 &&
      e[e.length - 1].src &&
      a.push(e[e.length - 1]);
    for (e = 0; e < a.length; ++e)
      a[e].getAttribute("gapi_processed") ||
        (a[e].setAttribute("gapi_processed", !0),
        (f = a[e])
          ? ((h = f.nodeType),
            (f = h == 3 || h == 4 ? f.nodeValue : f.textContent || ""))
          : (f = void 0),
        (h = a[e].nonce || a[e].getAttribute("nonce")),
        (f = sr(f, h)) && d.push(f));
    c && tr(b, c);
    a = nr("cd");
    c = 0;
    for (d = a.length; c < d; ++c) pr(_.Yi(), a[c], !0);
    a = nr("ci");
    c = 0;
    for (d = a.length; c < d; ++c) pr(_.Yi(), a[c], !0);
    c = 0;
    for (d = b.length; c < d; ++c) pr(_.Yi(), b[c], !0);
  };
  var vr,
    wr = window.location.href,
    xr = wr.indexOf("?"),
    yr = wr.indexOf("#");
  vr = (
    yr === -1
      ? wr.substr(xr + 1)
      : [wr.substr(xr + 1, yr - xr - 1), "&", wr.substr(yr + 1)].join("")
  ).split("&");
  for (
    var zr = window.decodeURIComponent ? decodeURIComponent : unescape,
      Ar = 0,
      Br = vr.length;
    Ar < Br;
    ++Ar
  ) {
    var Cr = vr[Ar].indexOf("=");
    if (Cr !== -1) {
      vr[Ar].substring(0, Cr);
      var Dr = vr[Ar].substring(Cr + 1);
      Dr = Dr.replace(/\+/g, " ");
      try {
        zr(Dr);
      } catch (a) {}
    }
  }
  if (window.ToolbarApi)
    (Er = window.ToolbarApi),
      (Er.Oa = window.ToolbarApi.getInstance),
      (Er.prototype = window.ToolbarApi.prototype),
      (_.g = Er.prototype),
      (_.g.openWindow = Er.prototype.openWindow),
      (_.g.lQ = Er.prototype.closeWindow),
      (_.g.b_ = Er.prototype.setOnCloseHandler),
      (_.g.VP = Er.prototype.canClosePopup),
      (_.g.ZY = Er.prototype.resizeWindow);
  else {
    var Er = function () {};
    Er.Oa = function () {
      !Fr &&
        window.external &&
        window.external.GTB_IsToolbar &&
        (Fr = new Er());
      return Fr;
    };
    _.g = Er.prototype;
    _.g.openWindow = function (a) {
      return window.external.GTB_OpenPopup && window.external.GTB_OpenPopup(a);
    };
    _.g.lQ = function (a) {
      window.external.GTB_ClosePopupWindow &&
        window.external.GTB_ClosePopupWindow(a);
    };
    _.g.b_ = function (a, b) {
      window.external.GTB_SetOnCloseHandler &&
        window.external.GTB_SetOnCloseHandler(a, b);
    };
    _.g.VP = function (a) {
      return (
        window.external.GTB_CanClosePopup &&
        window.external.GTB_CanClosePopup(a)
      );
    };
    _.g.ZY = function (a, b) {
      return (
        window.external.GTB_ResizeWindow &&
        window.external.GTB_ResizeWindow(a, b)
      );
    };
    var Fr = null;
    window.ToolbarApi = Er;
    window.ToolbarApi.getInstance = Er.Oa;
  }
  var Gr = /^[-_.0-9A-Za-z]+$/,
    Hr = {
      open: "open",
      onready: "ready",
      close: "close",
      onresize: "resize",
      onOpen: "open",
      onReady: "ready",
      onClose: "close",
      onResize: "resize",
      onRenderStart: "renderstart",
    },
    Ir = { onBeforeParentOpen: "beforeparentopen" },
    Jr = {
      onOpen: function (a) {
        var b = a.Ac();
        a.uh(b.container || b.element);
        return a;
      },
      onClose: function (a) {
        a.remove();
      },
    },
    Kr = function () {
      _.Pa.UU++;
      return ["I", _.Pa.UU, "_", new Date().getTime()].join("");
    },
    Lr,
    Mr,
    Nr,
    Qr,
    Rr,
    Sr,
    Tr,
    Vr,
    Ur;
  _.Pa.wo = function (a) {
    var b = _.wf();
    _.Af(_.Qm, b);
    _.Af(a, b);
    return b;
  };
  Lr = function (a) {
    return a instanceof Array ? a.join(",") : a instanceof Object ? _.Vg(a) : a;
  };
  Mr = function (a) {
    var b = _.Zi("googleapis.config/elog");
    if (b)
      try {
        b(a);
      } catch (c) {}
  };
  Nr = function (a) {
    a && a.match(Gr) && _.ur("googleapis.config/gcv", a);
  };
  _.Or = function (a, b) {
    b = b || {};
    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    return b;
  };
  _.Pr = function (a, b, c, d, e) {
    var f = [],
      h;
    for (h in a)
      if (a.hasOwnProperty(h)) {
        var k = b,
          l = c,
          m = a[h],
          n = d,
          p = ir(h);
        p[k] = p[k] || {};
        n = _.Pa.Pa.Si.Av(n, m);
        m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0);
        p[k][l] = n;
        f.push(h);
      }
    if (e) for (var q in _.Pa.Xq) _.Pa.Xq.hasOwnProperty(q) && f.push(q);
    return f.join(",");
  };
  Qr = function (a, b, c) {
    var d = {};
    if (a && a._methods) {
      a = a._methods.split(",");
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        d[f] = hr(f, b, c);
      }
    }
    return d;
  };
  Rr = function (a) {
    if (a && a.disableMultiLevelParentRelay) a = !1;
    else {
      var b;
      if ((b = _.dp && _.dp._open && a.style != "inline" && a.inline !== !0))
        (a = a.container),
          (b = !(
            a &&
            ((typeof a == "string" && document.getElementById(a)) ||
              document == (a.ownerDocument || a.document))
          ));
      a = b;
    }
    return a;
  };
  Sr = function (a, b) {
    var c = {};
    b = b.params || {};
    for (var d in a)
      d.charAt(0) == "#" && (c[d.substring(1)] = a[d]),
        d.indexOf("fr-") == 0 && (c[d.substring(3)] = a[d]),
        b[d] == "#" && (c[d] = a[d]);
    for (var e in c) delete a["fr-" + e], delete a["#" + e], delete a[e];
    return c;
  };
  Tr = function (a) {
    if (a.charAt(0) == ":") {
      a = "iframes/" + a.substring(1);
      var b = _.Zi(a);
      a = {};
      _.Af(b, a);
      (b = a.url) && (a.url = _.bn(b));
      a.params || (a.params = {});
      return a;
    }
    return { url: _.bn(a) };
  };
  Vr = function (a) {
    function b() {}
    b.prototype = Ur.prototype;
    a.prototype = new b();
  };
  Ur = function (a, b, c, d, e, f, h, k) {
    this.config = Tr(a);
    this.openParams = this.AB = b || {};
    this.params = c || {};
    this.methods = d;
    this.oD = !1;
    Wr(this, b.style);
    this.callbacks = {};
    Yr(this, function () {
      var l;
      (l = this.AB.style) && _.Pa.Iw[l]
        ? (l = _.Pa.Iw[l])
        : l
        ? (_.Zg.warn(
            [
              'Missing handler for style "',
              l,
              '". Continuing with default handler.',
            ].join("")
          ),
          (l = null))
        : (l = Jr);
      if (l) {
        if (typeof l === "function") var m = l(this);
        else {
          var n = {};
          for (m in l) {
            var p = l[m];
            n[m] = typeof p === "function" ? _.Pa.Pa.Si.Av(l, p, this) : p;
          }
          m = n;
        }
        for (var q in e)
          (l = m[q]),
            typeof l === "function" && Zr(this, e[q], _.Pa.Pa.Si.Av(m, l));
      }
      f && Zr(this, "close", f);
    });
    this.Uk = this.ac = h;
    this.zJ = (k || []).slice();
    h && this.zJ.unshift(h.getId());
  };
  Ur.prototype.Ac = function () {
    return this.AB;
  };
  Ur.prototype.OG = function () {
    return this.params;
  };
  Ur.prototype.Nz = function () {
    return this.methods;
  };
  Ur.prototype.xd = function () {
    return this.Uk;
  };
  var Wr = function (a, b) {
      a.oD ||
        ((b = b && !_.Pa.Iw[b] && _.Pa.yF[b])
          ? ((a.xF = []),
            b(function () {
              a.oD = !0;
              for (var c = a.xF.length, d = 0; d < c; ++d) a.xF[d].call(a);
            }))
          : (a.oD = !0));
    },
    Yr = function (a, b) {
      a.oD ? b.call(a) : a.xF.push(b);
    };
  Ur.prototype.Za = function (a, b) {
    Yr(this, function () {
      Zr(this, a, b);
    });
  };
  var Zr = function (a, b, c) {
    a.callbacks[b] = a.callbacks[b] || [];
    a.callbacks[b].push(c);
  };
  Ur.prototype.Bp = function (a, b) {
    Yr(this, function () {
      var c = this.callbacks[a];
      if (c)
        for (var d = c.length, e = 0; e < d; ++e)
          if (c[e] === b) {
            c.splice(e, 1);
            break;
          }
    });
  };
  Ur.prototype.ni = function (a, b) {
    var c = this.callbacks[a];
    if (c)
      for (
        var d = Array.prototype.slice.call(arguments, 1), e = c.length, f = 0;
        f < e;
        ++f
      )
        try {
          var h = c[f].apply({}, d);
        } catch (k) {
          _.Zg.error(
            [
              'Exception when calling callback "',
              a,
              '" with exception "',
              k.name,
              ": ",
              k.message,
              '".',
            ].join("")
          ),
            Mr(k);
        }
    return h;
  };
  var $r = function (a) {
    return typeof a == "number"
      ? { value: a, jG: a + "px" }
      : a == "100%"
      ? { value: 100, jG: "100%", EV: !0 }
      : null;
  };
  Ur.prototype.send = function (a, b, c) {
    _.Pa.xZ(this, a, b, c);
  };
  Ur.prototype.register = function (a, b) {
    var c = this;
    c.Za(a, function (d) {
      b.call(c, d);
    });
  };
  var as = function (a, b, c, d, e, f, h) {
    var k = this;
    Ur.call(this, a, b, c, d, Hr, e, f, h);
    this.id = b.id || Kr();
    this.ew = (b.rpctoken && String(b.rpctoken)) || Math.round(_.Aj() * 1e9);
    this.qaa = Sr(this.params, this.config);
    this.WF = {};
    Yr(this, function () {
      k.ni("open");
      _.Or(k.WF, k);
    });
  };
  Vr(as);
  _.g = as.prototype;
  _.g.uh = function (a, b) {
    if (!this.config.url)
      return _.Zg.error("Cannot open iframe, empty URL."), this;
    var c = this.id;
    _.Pa.Em[c] = this;
    var d = _.Or(this.methods);
    d._ready = this.zB;
    d._close = this.close;
    d._open = this.CX;
    d._resizeMe = this.aZ;
    d._renderstart = this.vX;
    var e = this.qaa;
    this.ew && (e.rpctoken = this.ew);
    e._methods = _.Pr(d, c, "", this, !0);
    this.el = a = typeof a === "string" ? document.getElementById(a) : a;
    d = { id: c };
    if (b) {
      d.attributes = b;
      var f = b.style;
      if (typeof f === "string") {
        if (f) {
          var h = [];
          f = f.split(";");
          for (var k = f.length, l = 0; l < k; ++l) {
            var m = f[l];
            if (m.length != 0 || l + 1 != k)
              (m = m.split(":")),
                m.length == 2 &&
                m[0].match(/^[ a-zA-Z_-]+$/) &&
                m[1].match(/^[ +.%0-9a-zA-Z_-]+$/)
                  ? h.push(m.join(":"))
                  : _.Zg.error(
                      ['Iframe style "', f[l], '" not allowed.'].join("")
                    );
          }
          h = h.join(";");
        } else h = "";
        b.style = h;
      }
    }
    this.Ac().allowPost && (d.allowPost = !0);
    this.Ac().forcePost && (d.forcePost = !0);
    d.queryParams = this.params;
    d.fragmentParams = e;
    d.paramsSerializer = Lr;
    this.ui = _.dn(this.config.url, a, d);
    a = this.ui.getAttribute("data-postorigin") || this.ui.src;
    _.Pa.Em[c] = this;
    _.dh.HC(this.id, this.ew);
    _.dh.Xj(this.id, a);
    return this;
  };
  _.g.Xh = function (a, b) {
    this.WF[a] = b;
  };
  _.g.getId = function () {
    return this.id;
  };
  _.g.getIframeEl = function () {
    return this.ui;
  };
  _.g.getSiteEl = function () {
    return this.el;
  };
  _.g.setSiteEl = function (a) {
    this.el = a;
  };
  _.g.zB = function (a) {
    var b = Qr(a, this.id, "");
    this.Uk &&
      typeof this.methods._ready == "function" &&
      ((a._methods = _.Pr(b, this.Uk.getId(), this.id, this, !1)),
      this.methods._ready(a));
    _.Or(a, this);
    _.Or(b, this);
    this.ni("ready", a);
  };
  _.g.vX = function (a) {
    this.ni("renderstart", a);
  };
  _.g.close = function (a) {
    a = this.ni("close", a);
    delete _.Pa.Em[this.id];
    return a;
  };
  _.g.remove = function () {
    var a = document.getElementById(this.id);
    a && a.parentNode && a.parentNode.removeChild(a);
  };
  _.g.CX = function (a) {
    var b = Qr(a.params, this.id, a.proxyId);
    delete a.params._methods;
    a.openParams.anchor == "_parent" && (a.openParams.anchor = this.el);
    if (Rr(a.openParams))
      new bs(
        a.url,
        a.openParams,
        a.params,
        b,
        b._onclose,
        this,
        a.openedByProxyChain
      );
    else {
      var c = new as(
          a.url,
          a.openParams,
          a.params,
          b,
          b._onclose,
          this,
          a.openedByProxyChain
        ),
        d = this;
      Yr(c, function () {
        var e = { childId: c.getId() },
          f = c.WF;
        f._toclose = c.close;
        e._methods = _.Pr(f, d.id, c.id, c, !1);
        b._onopen(e);
      });
    }
  };
  _.g.aZ = function (a) {
    if (this.ni("resize", a) === void 0 && this.ui) {
      var b = $r(a.width);
      b != null && (this.ui.style.width = b.jG);
      a = $r(a.height);
      a != null && (this.ui.style.height = a.jG);
      this.ui.parentElement &&
        ((b != null && b.EV) || (a != null && a.EV)) &&
        (this.ui.parentElement.style.display = "block");
    }
  };
  var bs = function (a, b, c, d, e, f, h) {
    var k = this;
    Ur.call(this, a, b, c, d, Ir, e, f, h);
    this.url = a;
    this.Wp = null;
    this.UJ = Kr();
    Yr(this, function () {
      k.ni("beforeparentopen");
      var l = _.Or(k.methods);
      l._onopen = k.Vca;
      l._ready = k.zB;
      l._onclose = k.Tca;
      k.params._methods = _.Pr(l, "..", k.UJ, k, !0);
      l = {};
      for (var m in k.params) l[m] = Lr(k.params[m]);
      _.dp._open({
        url: k.config.url,
        openParams: k.AB,
        params: l,
        proxyId: k.UJ,
        openedByProxyChain: k.zJ,
      });
    });
  };
  Vr(bs);
  bs.prototype.J9 = function () {
    return this.Wp;
  };
  bs.prototype.Vca = function (a) {
    this.Wp = a.childId;
    var b = Qr(a, "..", this.Wp);
    _.Or(b, this);
    this.close = b._toclose;
    _.Pa.Em[this.Wp] = this;
    this.Uk &&
      this.methods._onopen &&
      ((a._methods = _.Pr(b, this.Uk.getId(), this.Wp, this, !1)),
      this.methods._onopen(a));
  };
  bs.prototype.zB = function (a) {
    var b = String(this.Wp),
      c = Qr(a, "..", b);
    _.Or(a, this);
    _.Or(c, this);
    this.ni("ready", a);
    this.Uk &&
      this.methods._ready &&
      ((a._methods = _.Pr(c, this.Uk.getId(), b, this, !1)),
      this.methods._ready(a));
  };
  bs.prototype.Tca = function (a) {
    if (this.Uk && this.methods._onclose) this.methods._onclose(a);
    else return (a = this.ni("close", a)), delete _.Pa.Em[this.Wp], a;
  };
  var cs = function (a, b, c, d, e, f, h) {
    Ur.call(this, a, b, c, d, Ir, f, h);
    this.id = b.id || Kr();
    this.zga = e;
    d._close = this.close;
    this.onClosed = this.oX;
    this.w1 = 0;
    Yr(this, function () {
      this.ni("beforeparentopen");
      var k = _.Or(this.methods);
      this.params._methods = _.Pr(k, "..", this.UJ, this, !0);
      k = {};
      k.queryParams = this.params;
      a = _.Vm(_.sf, this.config.url, this.id, k);
      var l = e.openWindow(a);
      this.canAutoClose = function (m) {
        m(e.VP(l));
      };
      e.b_(l, this);
      this.w1 = l;
    });
  };
  Vr(cs);
  cs.prototype.close = function (a) {
    a = this.ni("close", a);
    this.zga.lQ(this.w1);
    return a;
  };
  cs.prototype.oX = function () {
    this.ni("close");
  };
  _.dp.send = function (a, b, c) {
    _.Pa.xZ(_.dp, a, b, c);
  };
  (function () {
    function a(h) {
      return _.Pa.Iw[h];
    }
    function b(h, k) {
      _.Pa.Iw[h] = k;
    }
    function c(h) {
      h = h || {};
      h.height === "auto" && (h.height = _.fn());
      var k = window && Er && Er.Oa();
      k
        ? k.ZY(h.width || 0, h.height || 0)
        : _.dp && _.dp._resizeMe && _.dp._resizeMe(h);
    }
    function d(h) {
      Nr(h);
    }
    _.Pa.Em = {};
    _.Pa.Iw = {};
    _.Pa.yF = {};
    _.Pa.UU = 0;
    _.Pa.Lj = {};
    _.Pa.Xq = {};
    _.Pa.KB = null;
    _.Pa.JB = [];
    _.Pa.fda = function (h) {
      var k = !1;
      try {
        if (h != null) {
          var l = window.parent.frames[h.id];
          k = l.iframer.id == h.id && l.iframes.openedId_(_.dp.id);
        }
      } catch (m) {}
      try {
        _.Pa.KB = {
          origin: this.origin,
          referer: this.referer,
          claimedOpenerId: h && h.id,
          claimedOpenerProxyChain: (h && h.proxyChain) || [],
          sameOrigin: k,
        };
        for (h = 0; h < _.Pa.JB.length; ++h) _.Pa.JB[h](_.Pa.KB);
        _.Pa.JB = [];
      } catch (m) {
        Mr(m);
      }
    };
    _.Pa.v9 = function (h) {
      var k = h && h.Uk,
        l = null;
      k && ((l = {}), (l.id = k.getId()), (l.proxyChain = h.zJ));
      return l;
    };
    fr();
    if (window.parent != window) {
      var e = _.jr();
      e.gcv && Nr(e.gcv);
      var f = e.jsh;
      f && lr(f);
      _.Or(Qr(e, "..", ""), _.dp);
      _.Or(e, _.dp);
      gr();
    }
    _.Pa.Bb = a;
    _.Pa.Lc = b;
    _.Pa.qfa = d;
    _.Pa.resize = c;
    _.Pa.O8 = function (h) {
      return _.Pa.yF[h];
    };
    _.Pa.WK = function (h, k) {
      _.Pa.yF[h] = k;
    };
    _.Pa.YY = c;
    _.Pa.Lfa = d;
    _.Pa.lA = {};
    _.Pa.lA.get = a;
    _.Pa.lA.set = b;
    _.Pa.allow = function (h, k) {
      ir(h);
      _.Pa.Xq[h] = k || window[h];
    };
    _.Pa.qpa = function (h) {
      delete _.Pa.Xq[h];
    };
    _.Pa.open = function (h, k, l, m, n, p) {
      arguments.length == 3
        ? (m = {})
        : arguments.length == 4 &&
          typeof m === "function" &&
          ((n = m), (m = {}));
      var q = k.style === "bubble" && Er ? Er.Oa() : null;
      return q
        ? new cs(h, k, l, m, q, n, p)
        : Rr(k)
        ? new bs(h, k, l, m, n, p)
        : new as(h, k, l, m, n, p);
    };
    _.Pa.close = function (h, k) {
      _.dp && _.dp._close && _.dp._close(h, k);
    };
    _.Pa.ready = function (h, k, l) {
      arguments.length == 2 && typeof k === "function" && ((l = k), (k = {}));
      var m = h || {};
      "height" in m || (m.height = _.fn());
      m._methods = _.Pr(k || {}, "..", "", _.dp, !0);
      _.dp && _.dp._ready && _.dp._ready(m, l);
    };
    _.Pa.uT = function (h) {
      _.Pa.KB ? h(_.Pa.KB) : _.Pa.JB.push(h);
    };
    _.Pa.Xca = function (h) {
      return !!_.Pa.Em[h];
    };
    _.Pa.Z8 = function () {
      return [
        "https://ssl.gstatic.com/gb/js/",
        _.Zi("googleapis.config/gcv"),
      ].join("");
    };
    _.Pa.xY = function (h) {
      var k = { mouseover: 1, mouseout: 1 };
      if (_.dp._event)
        for (var l = 0; l < h.length; l++) {
          var m = h[l];
          m in k &&
            document.addEventListener(
              m,
              function (n) {
                _.dp._event({ event: n.type, timestamp: new Date().getTime() });
              },
              !0
            );
        }
    };
    _.Pa.xZ = function (h, k, l, m) {
      var n = this,
        p = [];
      l !== void 0 && p.push(l);
      m &&
        p.push(function (q) {
          m.call(n, [q]);
        });
      h[k] && h[k].apply(h, p);
    };
    _.Pa.CROSS_ORIGIN_IFRAMES_FILTER = function () {
      return !0;
    };
    _.Pa.B6 = function (h, k, l) {
      var m = Array.prototype.slice.call(arguments);
      _.Pa.uT(function (n) {
        n.sameOrigin &&
          (m.unshift(
            "/" +
              n.claimedOpenerId +
              "|" +
              window.location.protocol +
              "//" +
              window.location.host
          ),
          _.dh.call.apply(_.dh, m));
      });
    };
    _.Pa.Jda = function (h, k) {
      _.dh.register(h, k);
    };
    _.Pa.wfa = lr;
    _.Pa.FZ = mr;
    _.Pa.rW = Mr;
    _.Pa.VU = _.dp;
  })();
  _.r("iframes.allow", _.Pa.allow);
  _.r("iframes.callSiblingOpener", _.Pa.B6);
  _.r("iframes.registerForOpenedSibling", _.Pa.Jda);
  _.r("iframes.close", _.Pa.close);
  _.r("iframes.getGoogleConnectJsUri", _.Pa.Z8);
  _.r("iframes.getHandler", _.Pa.Bb);
  _.r("iframes.getDeferredHandler", _.Pa.O8);
  _.r("iframes.getParentInfo", _.Pa.uT);
  _.r("iframes.iframer", _.Pa.VU);
  _.r("iframes.open", _.Pa.open);
  _.r("iframes.openedId_", _.Pa.Xca);
  _.r("iframes.propagate", _.Pa.xY);
  _.r("iframes.ready", _.Pa.ready);
  _.r("iframes.resize", _.Pa.resize);
  _.r("iframes.setGoogleConnectJsVersion", _.Pa.qfa);
  _.r("iframes.setBootstrapHint", _.Pa.FZ);
  _.r("iframes.setJsHint", _.Pa.wfa);
  _.r("iframes.setHandler", _.Pa.Lc);
  _.r("iframes.setDeferredHandler", _.Pa.WK);
  _.r("IframeBase", Ur);
  _.r("IframeBase.prototype.addCallback", Ur.prototype.Za);
  _.r("IframeBase.prototype.getMethods", Ur.prototype.Nz);
  _.r("IframeBase.prototype.getOpenerIframe", Ur.prototype.xd);
  _.r("IframeBase.prototype.getOpenParams", Ur.prototype.Ac);
  _.r("IframeBase.prototype.getParams", Ur.prototype.OG);
  _.r("IframeBase.prototype.removeCallback", Ur.prototype.Bp);
  _.r("Iframe", as);
  _.r("Iframe.prototype.close", as.prototype.close);
  _.r("Iframe.prototype.exposeMethod", as.prototype.Xh);
  _.r("Iframe.prototype.getId", as.prototype.getId);
  _.r("Iframe.prototype.getIframeEl", as.prototype.getIframeEl);
  _.r("Iframe.prototype.getSiteEl", as.prototype.getSiteEl);
  _.r("Iframe.prototype.openInto", as.prototype.uh);
  _.r("Iframe.prototype.remove", as.prototype.remove);
  _.r("Iframe.prototype.setSiteEl", as.prototype.setSiteEl);
  _.r("Iframe.prototype.addCallback", as.prototype.Za);
  _.r("Iframe.prototype.getMethods", as.prototype.Nz);
  _.r("Iframe.prototype.getOpenerIframe", as.prototype.xd);
  _.r("Iframe.prototype.getOpenParams", as.prototype.Ac);
  _.r("Iframe.prototype.getParams", as.prototype.OG);
  _.r("Iframe.prototype.removeCallback", as.prototype.Bp);
  _.r("IframeProxy", bs);
  _.r("IframeProxy.prototype.getTargetIframeId", bs.prototype.J9);
  _.r("IframeProxy.prototype.addCallback", bs.prototype.Za);
  _.r("IframeProxy.prototype.getMethods", bs.prototype.Nz);
  _.r("IframeProxy.prototype.getOpenerIframe", bs.prototype.xd);
  _.r("IframeProxy.prototype.getOpenParams", bs.prototype.Ac);
  _.r("IframeProxy.prototype.getParams", bs.prototype.OG);
  _.r("IframeProxy.prototype.removeCallback", bs.prototype.Bp);
  _.r("IframeWindow", cs);
  _.r("IframeWindow.prototype.close", cs.prototype.close);
  _.r("IframeWindow.prototype.onClosed", cs.prototype.oX);
  _.r("iframes.util.getTopMostAccessibleWindow", _.Pa.Pa.Si.JT);
  _.r("iframes.handlers.get", _.Pa.lA.get);
  _.r("iframes.handlers.set", _.Pa.lA.set);
  _.r("iframes.resizeMe", _.Pa.YY);
  _.r("iframes.setVersionOverride", _.Pa.Lfa);
  _.r("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.Pa.CROSS_ORIGIN_IFRAMES_FILTER);
  _.r("IframeBase.prototype.send", Ur.prototype.send);
  _.r("IframeBase.prototype.register", Ur.prototype.register);
  _.r("Iframe.prototype.send", as.prototype.send);
  _.r("Iframe.prototype.register", as.prototype.register);
  _.r("IframeProxy.prototype.send", bs.prototype.send);
  _.r("IframeProxy.prototype.register", bs.prototype.register);
  _.r("IframeWindow.prototype.send", cs.prototype.send);
  _.r("IframeWindow.prototype.register", cs.prototype.register);
  _.r("iframes.iframer.send", _.Pa.VU.send);
  var eu = _.Pa.Lc,
    fu = {
      open: function (a) {
        var b = _.Wo(a.Ac());
        return a.uh(b, { style: _.Xo(b) });
      },
      attach: function (a, b) {
        var c = _.Wo(a.Ac()),
          d = b.id,
          e = b.getAttribute("data-postorigin") || b.src,
          f = /#(?:.*&)?rpctoken=(\d+)/.exec(e);
        f = f && f[1];
        a.id = d;
        a.ew = f;
        a.el = c;
        a.ui = b;
        _.Pa.Em[d] = a;
        b = _.Or(a.methods);
        b._ready = a.zB;
        b._close = a.close;
        b._open = a.CX;
        b._resizeMe = a.aZ;
        b._renderstart = a.vX;
        _.Pr(b, d, "", a, !0);
        _.dh.HC(a.id, a.ew);
        _.dh.Xj(a.id, e);
        c = _.Pa.wo({ style: _.Xo(c) });
        for (var h in c)
          Object.prototype.hasOwnProperty.call(c, h) &&
            (h == "style"
              ? (a.ui.style.cssText = c[h])
              : a.ui.setAttribute(h, c[h]));
      },
    };
  fu.onready = _.Yo;
  fu.onRenderStart = _.Yo;
  fu.close = _.Zo;
  eu("inline", fu);
  _.Di = function (a) {
    for (var b in a) return !1;
    return !0;
  };
  _.Ei = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e > 255 && ((b[c++] = e & 255), (e >>= 8));
      b[c++] = e;
    }
    return b;
  };
  var Fi, Gi, Ii;
  Fi = {};
  Gi = null;
  _.Hi = _.ke || _.le || (!_.Ci && typeof _.Sa.atob == "function");
  _.Ji = function (a, b) {
    b === void 0 && (b = 0);
    Ii();
    b = Fi[b];
    for (
      var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0;
      e < a.length - 2;
      e += 3
    ) {
      var h = a[e],
        k = a[e + 1],
        l = a[e + 2],
        m = b[h >> 2];
      h = b[((h & 3) << 4) | (k >> 4)];
      k = b[((k & 15) << 2) | (l >> 6)];
      l = b[l & 63];
      c[f++] = m + h + k + l;
    }
    m = 0;
    l = d;
    switch (a.length - e) {
      case 2:
        (m = a[e + 1]), (l = b[(m & 15) << 2] || d);
      case 1:
        (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (m >> 4)] + l + d);
    }
    return c.join("");
  };
  _.Ki = function (a, b) {
    function c(l) {
      for (; d < a.length; ) {
        var m = a.charAt(d++),
          n = Gi[m];
        if (n != null) return n;
        if (!_.gd(m)) throw Error("E`" + m);
      }
      return l;
    }
    Ii();
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        h = c(64),
        k = c(64);
      if (k === 64 && e === -1) break;
      b((e << 2) | (f >> 4));
      h != 64 &&
        (b(((f << 4) & 240) | (h >> 2)), k != 64 && b(((h << 6) & 192) | k));
    }
  };
  Ii = function () {
    if (!Gi) {
      Gi = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        c < 5;
        c++
      ) {
        var d = a.concat(b[c].split(""));
        Fi[c] = d;
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          Gi[f] === void 0 && (Gi[f] = e);
        }
      }
    }
  };
  var dj;
  _.cj = function (a) {
    this.Rb = a || { cookie: "" };
  };
  _.g = _.cj.prototype;
  _.g.isEnabled = function () {
    if (!_.Sa.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", { LI: 60 });
    if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0;
  };
  _.g.set = function (a, b, c) {
    var d = !1;
    if (typeof c === "object") {
      var e = c.Era;
      d = c.secure || !1;
      var f = c.domain || void 0;
      var h = c.path || void 0;
      var k = c.LI;
    }
    if (/[;=\s]/.test(a)) throw Error("H`" + a);
    if (/[;\r\n]/.test(b)) throw Error("I`" + b);
    k === void 0 && (k = -1);
    this.Rb.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (h ? ";path=" + h : "") +
      (k < 0
        ? ""
        : k == 0
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + k * 1e3).toUTCString()) +
      (d ? ";secure" : "") +
      (e != null ? ";samesite=" + e : "");
  };
  _.g.get = function (a, b) {
    for (
      var c = a + "=", d = (this.Rb.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = (0, _.hd)(d[e]);
      if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  _.g.remove = function (a, b, c) {
    var d = this.Xi(a);
    this.set(a, "", { LI: 0, path: b, domain: c });
    return d;
  };
  _.g.Bg = function () {
    return dj(this).keys;
  };
  _.g.Hd = function () {
    return dj(this).values;
  };
  _.g.isEmpty = function () {
    return !this.Rb.cookie;
  };
  _.g.Sb = function () {
    return this.Rb.cookie ? (this.Rb.cookie || "").split(";").length : 0;
  };
  _.g.Xi = function (a) {
    return this.get(a) !== void 0;
  };
  _.g.tk = function (a) {
    for (var b = dj(this).values, c = 0; c < b.length; c++)
      if (b[c] == a) return !0;
    return !1;
  };
  _.g.clear = function () {
    for (var a = dj(this).keys, b = a.length - 1; b >= 0; b--)
      this.remove(a[b]);
  };
  dj = function (a) {
    a = (a.Rb.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
      (e = (0, _.hd)(a[f])),
        (d = e.indexOf("=")),
        d == -1
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return { keys: b, values: c };
  };
  _.ej = new _.cj(typeof document == "undefined" ? null : document);
  _.sj = {};
  _.tj = function (a) {
    return _.sj[a || "token"] || null;
  };
  _.Mj = function (a) {
    a && typeof a.dispose == "function" && a.dispose();
  };
  _.Nj = function () {
    this.dh = this.dh;
    this.jp = this.jp;
  };
  _.Nj.prototype.dh = !1;
  _.Nj.prototype.isDisposed = function () {
    return this.dh;
  };
  _.Nj.prototype.dispose = function () {
    this.dh || ((this.dh = !0), this.va());
  };
  _.Nj.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  _.Qj = function (a, b) {
    _.Oj(a, _.$a(_.Mj, b));
  };
  _.Oj = function (a, b) {
    a.dh ? b() : (a.jp || (a.jp = []), a.jp.push(b));
  };
  _.Nj.prototype.va = function () {
    if (this.jp) for (; this.jp.length; ) this.jp.shift()();
  };
  var Vj = function (a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  };
  _.Ne.prototype.O = _.nb(1, function (a) {
    return _.Qe(this.Rb, a);
  });
  _.Wj = function (a, b) {
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) == c;
  };
  _.Xj = function (a, b, c) {
    return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : (a[b] = c(b));
  };
  _.Yj = function (a) {
    var b;
    if (_.le && (b = a.parentElement)) return b;
    b = a.parentNode;
    return _.jf(b) ? b : null;
  };
  _.ak = function (a, b) {
    this.type = "function" == typeof _.Zj && a instanceof _.Zj ? String(a) : a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Uv = !1;
  };
  _.ak.prototype.stopPropagation = function () {
    this.Uv = !0;
  };
  _.ak.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var bk = (function () {
    if (!_.Sa.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      var c = function () {};
      _.Sa.addEventListener("test", c, b);
      _.Sa.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  _.ck = function (a, b) {
    _.ak.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.MJ = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.timeStamp = 0;
    this.Lf = null;
    a && this.zd(a, b);
  };
  _.bb(_.ck, _.ak);
  var dk = { 2: "touch", 3: "pen", 4: "mouse" };
  _.ck.prototype.zd = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    (b = a.relatedTarget)
      ? _.ke && (_.fe(b, "nodeName") || (b = null))
      : c == "mouseover"
      ? (b = a.fromElement)
      : c == "mouseout" && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX),
        (this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = _.le || a.offsetX !== void 0 ? a.offsetX : a.layerX),
        (this.offsetY = _.le || a.offsetY !== void 0 ? a.offsetY : a.layerY),
        (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
        (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.MJ = _.ne ? a.metaKey : a.ctrlKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType =
      typeof a.pointerType === "string"
        ? a.pointerType
        : dk[a.pointerType] || "";
    this.state = a.state;
    this.timeStamp = a.timeStamp;
    this.Lf = a;
    a.defaultPrevented && _.ck.N.preventDefault.call(this);
  };
  _.ck.prototype.stopPropagation = function () {
    _.ck.N.stopPropagation.call(this);
    this.Lf.stopPropagation
      ? this.Lf.stopPropagation()
      : (this.Lf.cancelBubble = !0);
  };
  _.ck.prototype.preventDefault = function () {
    _.ck.N.preventDefault.call(this);
    var a = this.Lf;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  _.ek = "closure_listenable_" + ((Math.random() * 1e6) | 0);
  _.fk = function (a) {
    return !(!a || !a[_.ek]);
  };
  var gk = 0;
  var hk = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Qf = e;
      this.key = ++gk;
      this.Zv = this.py = !1;
    },
    ik = function (a) {
      a.Zv = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Qf = null;
    };
  var jk = function (a) {
    this.src = a;
    this.ye = {};
    this.gx = 0;
  };
  jk.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.ye[f];
    a || ((a = this.ye[f] = []), this.gx++);
    var h = kk(a, b, d, e);
    h > -1
      ? ((b = a[h]), c || (b.py = !1))
      : ((b = new hk(b, this.src, f, !!d, e)), (b.py = c), a.push(b));
    return b;
  };
  jk.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.ye)) return !1;
    var e = this.ye[a];
    b = kk(e, b, c, d);
    return b > -1
      ? (ik(e[b]),
        Array.prototype.splice.call(e, b, 1),
        e.length == 0 && (delete this.ye[a], this.gx--),
        !0)
      : !1;
  };
  var lk = function (a, b) {
    var c = b.type;
    if (!(c in a.ye)) return !1;
    var d = _.ub(a.ye[c], b);
    d && (ik(b), a.ye[c].length == 0 && (delete a.ye[c], a.gx--));
    return d;
  };
  jk.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.ye)
      if (!a || c == a) {
        for (var d = this.ye[c], e = 0; e < d.length; e++) ++b, ik(d[e]);
        delete this.ye[c];
        this.gx--;
      }
    return b;
  };
  jk.prototype.Qq = function (a, b, c, d) {
    a = this.ye[a.toString()];
    var e = -1;
    a && (e = kk(a, b, c, d));
    return e > -1 ? a[e] : null;
  };
  jk.prototype.hasListener = function (a, b) {
    var c = a !== void 0,
      d = c ? a.toString() : "",
      e = b !== void 0;
    return Vj(this.ye, function (f) {
      for (var h = 0; h < f.length; ++h)
        if (!((c && f[h].type != d) || (e && f[h].capture != b))) return !0;
      return !1;
    });
  };
  var kk = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Zv && f.listener == b && f.capture == !!c && f.Qf == d) return e;
    }
    return -1;
  };
  var mk, nk, ok, sk, uk, vk, wk, zk;
  mk = "closure_lm_" + ((Math.random() * 1e6) | 0);
  nk = {};
  ok = 0;
  _.qk = function (a, b, c, d, e) {
    if (d && d.once) return _.pk(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) _.qk(a, b[f], c, d, e);
      return null;
    }
    c = _.rk(c);
    return _.fk(a)
      ? a.qa(b, c, _.yc(d) ? !!d.capture : !!d, e)
      : sk(a, b, c, !1, d, e);
  };
  sk = function (a, b, c, d, e, f) {
    if (!b) throw Error("J");
    var h = _.yc(e) ? !!e.capture : !!e,
      k = _.tk(a);
    k || (a[mk] = k = new jk(a));
    c = k.add(b, c, d, h, f);
    if (c.proxy) return c;
    d = uk();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      bk || (e = h),
        e === void 0 && (e = !1),
        a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(vk(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("K");
    ok++;
    return c;
  };
  uk = function () {
    var a = wk,
      b = function (c) {
        return a.call(b.src, b.listener, c);
      };
    return b;
  };
  _.pk = function (a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) _.pk(a, b[f], c, d, e);
      return null;
    }
    c = _.rk(c);
    return _.fk(a)
      ? a.Dr(b, c, _.yc(d) ? !!d.capture : !!d, e)
      : sk(a, b, c, !0, d, e);
  };
  _.xk = function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) _.xk(a, b[f], c, d, e);
    else
      (d = _.yc(d) ? !!d.capture : !!d),
        (c = _.rk(c)),
        _.fk(a)
          ? a.Ec(b, c, d, e)
          : a && (a = _.tk(a)) && (b = a.Qq(b, c, d, e)) && _.yk(b);
  };
  _.yk = function (a) {
    if (typeof a === "number" || !a || a.Zv) return !1;
    var b = a.src;
    if (_.fk(b)) return b.mN(a);
    var c = a.type,
      d = a.proxy;
    b.removeEventListener
      ? b.removeEventListener(c, d, a.capture)
      : b.detachEvent
      ? b.detachEvent(vk(c), d)
      : b.addListener && b.removeListener && b.removeListener(d);
    ok--;
    (c = _.tk(b))
      ? (lk(c, a), c.gx == 0 && ((c.src = null), (b[mk] = null)))
      : ik(a);
    return !0;
  };
  vk = function (a) {
    return a in nk ? nk[a] : (nk[a] = "on" + a);
  };
  wk = function (a, b) {
    if (a.Zv) a = !0;
    else {
      b = new _.ck(b, this);
      var c = a.listener,
        d = a.Qf || a.src;
      a.py && _.yk(a);
      a = c.call(d, b);
    }
    return a;
  };
  _.tk = function (a) {
    a = a[mk];
    return a instanceof jk ? a : null;
  };
  zk = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
  _.rk = function (a) {
    if (typeof a === "function") return a;
    a[zk] ||
      (a[zk] = function (b) {
        return a.handleEvent(b);
      });
    return a[zk];
  };
  _.Uj(function (a) {
    wk = a(wk);
  });
  _.Ak = function () {
    _.Nj.call(this);
    this.Ck = new jk(this);
    this.T5 = this;
    this.EJ = null;
  };
  _.bb(_.Ak, _.Nj);
  _.Ak.prototype[_.ek] = !0;
  _.g = _.Ak.prototype;
  _.g.zo = function () {
    return this.EJ;
  };
  _.g.UC = function (a) {
    this.EJ = a;
  };
  _.g.addEventListener = function (a, b, c, d) {
    _.qk(this, a, b, c, d);
  };
  _.g.removeEventListener = function (a, b, c, d) {
    _.xk(this, a, b, c, d);
  };
  _.g.dispatchEvent = function (a) {
    var b,
      c = this.zo();
    if (c) for (b = []; c; c = c.zo()) b.push(c);
    c = this.T5;
    var d = a.type || a;
    if (typeof a === "string") a = new _.ak(a, c);
    else if (a instanceof _.ak) a.target = a.target || c;
    else {
      var e = a;
      a = new _.ak(d, c);
      _.Bb(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.Uv && f >= 0; f--) {
        var h = (a.currentTarget = b[f]);
        e = h.lu(d, !0, a) && e;
      }
    a.Uv ||
      ((h = a.currentTarget = c),
      (e = h.lu(d, !0, a) && e),
      a.Uv || (e = h.lu(d, !1, a) && e));
    if (b)
      for (f = 0; !a.Uv && f < b.length; f++)
        (h = a.currentTarget = b[f]), (e = h.lu(d, !1, a) && e);
    return e;
  };
  _.g.va = function () {
    _.Ak.N.va.call(this);
    this.fK();
    this.EJ = null;
  };
  _.g.qa = function (a, b, c, d) {
    return this.Ck.add(String(a), b, !1, c, d);
  };
  _.g.Dr = function (a, b, c, d) {
    return this.Ck.add(String(a), b, !0, c, d);
  };
  _.g.Ec = function (a, b, c, d) {
    return this.Ck.remove(String(a), b, c, d);
  };
  _.g.mN = function (a) {
    return lk(this.Ck, a);
  };
  _.g.fK = function () {
    this.Ck && this.Ck.removeAll(void 0);
  };
  _.g.lu = function (a, b, c) {
    a = this.Ck.ye[String(a)];
    if (!a) return !0;
    a = a.concat();
    for (var d = !0, e = 0; e < a.length; ++e) {
      var f = a[e];
      if (f && !f.Zv && f.capture == b) {
        var h = f.listener,
          k = f.Qf || f.src;
        f.py && this.mN(f);
        d = h.call(k, c) !== !1 && d;
      }
    }
    return d && !c.defaultPrevented;
  };
  _.g.Qq = function (a, b, c, d) {
    return this.Ck.Qq(String(a), b, c, d);
  };
  _.g.hasListener = function (a, b) {
    return this.Ck.hasListener(a !== void 0 ? String(a) : void 0, b);
  };
  var ds;
  ds = function () {
    var a = _.Xb();
    if (_.fc()) return _.oc(a);
    a = _.cc(a);
    var b = _.nc(a);
    return _.ec()
      ? b(["Version", "Opera"])
      : _.gc()
      ? b(["Edge"])
      : _.hc()
      ? b(["Edg"])
      : _.bc("Silk")
      ? b(["Silk"])
      : _.kc()
      ? b(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = a[2]) && a[1]) || "";
  };
  _.es = function (a) {
    return _.rd(ds(), a) >= 0;
  };
  _.gs = function () {
    return _.Yb && _.Zb
      ? _.Zb.mobile
      : !_.fs() &&
          (_.bc("iPod") ||
            _.bc("iPhone") ||
            _.bc("Android") ||
            _.bc("IEMobile"));
  };
  _.fs = function () {
    return _.Yb && _.Zb
      ? !_.Zb.mobile && (_.bc("iPad") || _.bc("Android") || _.bc("Silk"))
      : _.bc("iPad") || (_.bc("Android") && !_.bc("Mobile")) || _.bc("Silk");
  };
  _.hs = function () {
    return !_.gs() && !_.fs();
  };
  var tt;
  tt = function (a, b, c) {
    return arguments.length <= 2
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  };
  _.ut = function (a, b, c, d) {
    return Array.prototype.splice.apply(a, tt(arguments, 1));
  };
  _.vt = function (a, b, c) {
    if (a !== null && b in a) throw Error("k`" + b);
    a[b] = c;
  };
  _.wt = function (a, b) {
    var c = b || document;
    if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
    else {
      c = document;
      var d = b || c;
      a =
        d.querySelectorAll && d.querySelector && a
          ? d.querySelector(a ? "." + a : "")
          : _.Re(c, "*", a, b)[0] || null;
    }
    return a || null;
  };
  _.xt = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
  };
  _.zt = function (a, b, c) {
    a && !c && (a = a.parentNode);
    for (c = 0; a; ) {
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  };
  _.At = function (a) {
    _.Nj.call(this);
    this.Gg = a;
    this.kc = {};
  };
  _.bb(_.At, _.Nj);
  var Bt = [];
  _.At.prototype.qa = function (a, b, c, d) {
    return this.xv(a, b, c, d);
  };
  _.At.prototype.xv = function (a, b, c, d, e) {
    Array.isArray(b) || (b && (Bt[0] = b.toString()), (b = Bt));
    for (var f = 0; f < b.length; f++) {
      var h = _.qk(
        a,
        b[f],
        c || this.handleEvent,
        d || !1,
        e || this.Gg || this
      );
      if (!h) break;
      this.kc[h.key] = h;
    }
    return this;
  };
  _.At.prototype.Dr = function (a, b, c, d) {
    return Ct(this, a, b, c, d);
  };
  var Ct = function (a, b, c, d, e, f) {
    if (Array.isArray(c))
      for (var h = 0; h < c.length; h++) Ct(a, b, c[h], d, e, f);
    else {
      b = _.pk(b, c, d || a.handleEvent, e, f || a.Gg || a);
      if (!b) return a;
      a.kc[b.key] = b;
    }
    return a;
  };
  _.At.prototype.Ec = function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) this.Ec(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = _.yc(d) ? !!d.capture : !!d),
        (e = e || this.Gg || this),
        (c = _.rk(c)),
        (d = !!d),
        (b = _.fk(a)
          ? a.Qq(b, c, d, e)
          : a
          ? (a = _.tk(a))
            ? a.Qq(b, c, d, e)
            : null
          : null),
        b && (_.yk(b), delete this.kc[b.key]);
    return this;
  };
  _.At.prototype.removeAll = function () {
    _.wb(
      this.kc,
      function (a, b) {
        this.kc.hasOwnProperty(b) && _.yk(a);
      },
      this
    );
    this.kc = {};
  };
  _.At.prototype.va = function () {
    _.At.N.va.call(this);
    this.removeAll();
  };
  _.At.prototype.handleEvent = function () {
    throw Error("S");
  };
  var dv, ev, fv, gv, hv, jv, kv, lv, mv, ov;
  _.bv = function (a, b) {
    for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1;
    for (var d in b) if (!(d in a)) return !1;
    return !0;
  };
  _.cv = !1;
  dv = function (a) {
    try {
      _.cv && window.console && window.console.log && window.console.log(a);
    } catch (b) {}
  };
  ev = function (a) {
    try {
      window.console && window.console.warn && window.console.warn(a);
    } catch (b) {}
  };
  fv = function (a, b) {
    if (!a) return -1;
    if (a.indexOf) return a.indexOf(b, void 0);
    for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
    return -1;
  };
  gv = function (a, b) {
    function c() {}
    if (!a) throw Error("V");
    if (!b) throw Error("W");
    c.prototype = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  };
  hv = function (a) {
    return Object.prototype.toString.call(a) === "[object Function]";
  };
  _.iv = function (a) {
    var b = {};
    if (a) for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    return b;
  };
  jv = function (a) {
    var b = location.hash;
    a = new RegExp("[&#]" + a + "=([^&]*)");
    b = decodeURIComponent(b);
    b = a.exec(b);
    return b == null ? "" : b[1].replace(/\+/g, " ");
  };
  kv = function (a, b, c) {
    if (a.addEventListener) a.addEventListener(b, c, !1);
    else if (a.attachEvent) a.attachEvent("on" + b, c);
    else throw Error("X`" + b);
  };
  lv = { token: 1, id_token: 1 };
  mv = function () {
    var a = navigator.userAgent.toLowerCase();
    return a.indexOf("msie") != -1 && parseInt(a.split("msie")[1], 10) == 8;
  };
  _.nv = window.JSON;
  ov = function (a) {
    this.zN = a || [];
    this.uc = {};
  };
  ov.prototype.addEventListener = function (a, b) {
    if (!(fv(this.zN, a) >= 0)) throw Error("Z`" + a);
    if (!hv(b)) throw Error("$`" + a);
    this.uc[a] || (this.uc[a] = []);
    fv(this.uc[a], b) < 0 && this.uc[a].push(b);
  };
  ov.prototype.removeEventListener = function (a, b) {
    if (!(fv(this.zN, a) >= 0)) throw Error("Z`" + a);
    hv(b) &&
      this.uc[a] &&
      this.uc[a].length &&
      ((b = fv(this.uc[a], b)), b >= 0 && this.uc[a].splice(b, 1));
  };
  ov.prototype.dispatchEvent = function (a) {
    var b = a.type;
    if (!(b && fv(this.zN, b) >= 0)) throw Error("aa`" + b);
    if (this.uc[b] && this.uc[b].length)
      for (var c = this.uc[b].length, d = 0; d < c; d++) this.uc[b][d](a);
  };
  var pv, qv, rv, tv, uv, yv, zv, Av, Rv, Sv, Uv, Vv, Xv, aw, bw, cw, gw;
  pv = _.pf(["https://accounts.google.com/gsi/ottoken"]);
  qv = {};
  rv = {};
  _.sv = function () {
    if (_.vc() && !_.es("118")) return !1;
    var a = _.kc() && !_.hc() && !_.ic(),
      b = _.qc() || _.hs(),
      c;
    if ((c = "IdentityCredential" in window)) {
      try {
        var d = window.self !== window.top;
      } catch (e) {
        d = !0;
      }
      c = !d;
    }
    return c && a && b && ((_.hs() && _.es("126")) || (_.qc() && _.es("128")));
  };
  tv = function () {
    var a = _.mf(pv),
      b = document.createElement("script");
    _.of(b, a);
    document.head.append(b);
  };
  uv = {
    google: {
      fedcmConfigUrl: "https://accounts.google.com/o/fedcm/config.json",
      authServerUrl: "https://accounts.google.com/o/oauth2/auth",
      idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe",
    },
  };
  _.vv = function (a, b) {
    if ((a = uv[a])) return a[b];
  };
  _.wv = function (a, b) {
    if (!a) throw Error("ba");
    if (!b.authServerUrl) throw Error("ca");
    if (!b.idpIFrameUrl) throw Error("da");
    uv[a] = { authServerUrl: b.authServerUrl, idpIFrameUrl: b.idpIFrameUrl };
    b.fedcmConfigUrl
      ? (uv[a].fedcmConfigUrl = b.fedcmConfigUrl)
      : a === "google" &&
        (uv[a].fedcmConfigUrl =
          "https://accounts.google.com/o/fedcm/config.json");
  };
  _.xv = void 0;
  yv = function (a) {
    a.style.position = "absolute";
    a.style.width = "1px";
    a.style.height = "1px";
    a.style.left = "-9999px";
    a.style.top = "-9999px";
    a.style.right = "-9999px";
    a.style.bottom = "-9999px";
    a.style.display = "none";
    a.setAttribute("aria-hidden", "true");
  };
  zv = function () {
    var a = document.createElement("meta");
    a.httpEquiv = "origin-trial";
    a.content =
      "A3IiS3DuZmYjNGGyWyY6dfaTI4/4jBQNPrC2qWVxBZ5VbDEzh8JahwaD3mKQ0H5DPkFxQKSxIzl5WPEMuHOC+wAAAABseyJvcmlnaW4iOiJodHRwczovL2FwaXMuZ29vZ2xlLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmVkQ21CdXR0b25Nb2RlIiwiZXhwaXJ5IjoxNzI3ODI3MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9";
    document.head.append(a);
    a = document.createElement("meta");
    a.httpEquiv = "origin-trial";
    a.content =
      "A4xxYntAsoZRYAFhtHK2hMqRbeVovVWfMGfYwwfKtQv6dUhUZWsN08vkn77E1/Ah9j/THaSAKOjDlL5AQw4cZwQAAAByeyJvcmlnaW4iOiJodHRwczovL2FwaXMuZ29vZ2xlLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmVkQ21Db250aW51ZU9uQnVuZGxlIiwiZXhwaXJ5IjoxNzMzMjcwMzk5LCJpc1RoaXJkUGFydHkiOnRydWV9";
    document.head.append(a);
  };
  Av = function () {
    this.Qi = window;
    this.My = this.Qn = this.Rv = this.Ei = null;
  };
  Av.prototype.open = function (a, b, c, d) {
    Bv(this);
    this.Rv
      ? (this.Qn && (this.Qn(), (this.Qn = null)), Cv(this))
      : (this.Rv = "authPopup" + Math.floor(Math.random() * 1e6 + 1));
    a: {
      this.Ei = this.Qi.open(a, this.Rv, b);
      try {
        this.Ei.focus();
        if (this.Ei.closed || typeof this.Ei.closed == "undefined")
          throw Error("fa");
        _.xv = this.Ei;
      } catch (e) {
        d && setTimeout(d, 0);
        this.Ei = null;
        break a;
      }
      c && ((this.Qn = c), Dv(this));
    }
  };
  var Bv = function (a) {
      try {
        if (a.Ei == null || a.Ei.closed)
          (a.Ei = null), (a.Rv = null), Cv(a), a.Qn && (a.Qn(), (a.Qn = null));
      } catch (b) {
        (a.Ei = null), (a.Rv = null), Cv(a);
      }
    },
    Dv = function (a) {
      a.My = window.setInterval(function () {
        Bv(a);
      }, 300);
    },
    Cv = function (a) {
      a.My && (window.clearInterval(a.My), (a.My = null));
    };
  rv = rv || {};
  var Ev = function (a, b) {
    this.lc = a;
    this.YH = b;
    this.Od = null;
    this.Ko = !1;
  };
  Ev.prototype.start = function () {
    if (!this.Ko && !this.Od) {
      var a = this;
      this.Od = window.setTimeout(function () {
        a.clear();
        a.Ko || (a.lc(), (a.Ko = !0));
      }, rv.HT(this.YH));
    }
  };
  Ev.prototype.clear = function () {
    this.Od && (window.clearTimeout(this.Od), (this.Od = null));
  };
  var Fv = function (a, b) {
    var c = rv.nt;
    this.raa = rv.ct;
    this.o1 = c;
    this.lc = a;
    this.YH = b;
    this.Od = null;
    this.Ko = !1;
    var d = this;
    this.p1 = function () {
      document[d.raa] || (d.clear(), d.start());
    };
  };
  Fv.prototype.start = function () {
    if (!this.Ko && !this.Od) {
      kv(document, this.o1, this.p1);
      var a = this;
      this.Od = window.setTimeout(function () {
        a.clear();
        a.Ko || (a.lc(), (a.Ko = !0));
      }, rv.HT(this.YH));
    }
  };
  Fv.prototype.clear = function () {
    var a = this.o1,
      b = this.p1,
      c = document;
    if (c.removeEventListener) c.removeEventListener(a, b, !1);
    else if (c.detachEvent) c.detachEvent("on" + a, b);
    else throw Error("Y`" + a);
    this.Od && (window.clearTimeout(this.Od), (this.Od = null));
  };
  rv.ct = null;
  rv.nt = null;
  rv.Taa = function () {
    var a = document;
    typeof a.hidden !== "undefined"
      ? ((rv.ct = "hidden"), (rv.nt = "visibilitychange"))
      : typeof a.msHidden !== "undefined"
      ? ((rv.ct = "msHidden"), (rv.nt = "msvisibilitychange"))
      : typeof a.webkitHidden !== "undefined" &&
        ((rv.ct = "webkitHidden"), (rv.nt = "webkitvisibilitychange"));
  };
  rv.Taa();
  rv.k7 = function (a, b) {
    return rv.ct && rv.nt ? new Fv(a, b) : new Ev(a, b);
  };
  rv.HT = function (a) {
    return Math.max(1, a - new Date().getTime());
  };
  var Gv = function (a, b) {
      document.cookie =
        "G_ENABLED_IDPS=" +
        a +
        ";domain=." +
        b +
        ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/";
    },
    Hv = function () {
      function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = m = 0;
      }
      function b(p) {
        for (var q = h, t = 0; t < 64; t += 4)
          q[t / 4] =
            (p[t] << 24) | (p[t + 1] << 16) | (p[t + 2] << 8) | p[t + 3];
        for (t = 16; t < 80; t++)
          (p = q[t - 3] ^ q[t - 8] ^ q[t - 14] ^ q[t - 16]),
            (q[t] = ((p << 1) | (p >>> 31)) & 4294967295);
        p = e[0];
        var v = e[1],
          u = e[2],
          w = e[3],
          y = e[4];
        for (t = 0; t < 80; t++) {
          if (t < 40)
            if (t < 20) {
              var D = w ^ (v & (u ^ w));
              var C = 1518500249;
            } else (D = v ^ u ^ w), (C = 1859775393);
          else
            t < 60
              ? ((D = (v & u) | (w & (v | u))), (C = 2400959708))
              : ((D = v ^ u ^ w), (C = 3395469782));
          D =
            ((((p << 5) | (p >>> 27)) & 4294967295) + D + y + C + q[t]) &
            4294967295;
          y = w;
          w = u;
          u = ((v << 30) | (v >>> 2)) & 4294967295;
          v = p;
          p = D;
        }
        e[0] = (e[0] + p) & 4294967295;
        e[1] = (e[1] + v) & 4294967295;
        e[2] = (e[2] + u) & 4294967295;
        e[3] = (e[3] + w) & 4294967295;
        e[4] = (e[4] + y) & 4294967295;
      }
      function c(p, q) {
        if (typeof p === "string") {
          p = unescape(encodeURIComponent(p));
          for (var t = [], v = 0, u = p.length; v < u; ++v)
            t.push(p.charCodeAt(v));
          p = t;
        }
        q || (q = p.length);
        t = 0;
        if (m == 0)
          for (; t + 64 < q; ) b(p.slice(t, t + 64)), (t += 64), (n += 64);
        for (; t < q; )
          if (((f[m++] = p[t++]), n++, m == 64))
            for (m = 0, b(f); t + 64 < q; )
              b(p.slice(t, t + 64)), (t += 64), (n += 64);
      }
      function d() {
        var p = [],
          q = n * 8;
        m < 56 ? c(k, 56 - m) : c(k, 64 - (m - 56));
        for (var t = 63; t >= 56; t--) (f[t] = q & 255), (q >>>= 8);
        b(f);
        for (t = q = 0; t < 5; t++)
          for (var v = 24; v >= 0; v -= 8) p[q++] = (e[t] >> v) & 255;
        return p;
      }
      for (var e = [], f = [], h = [], k = [128], l = 1; l < 64; ++l) k[l] = 0;
      var m, n;
      a();
      return {
        reset: a,
        update: c,
        digest: d,
        Yi: function () {
          for (var p = d(), q = "", t = 0; t < p.length; t++)
            q +=
              "0123456789ABCDEF".charAt(Math.floor(p[t] / 16)) +
              "0123456789ABCDEF".charAt(p[t] % 16);
          return q;
        },
      };
    },
    Iv = window.crypto,
    Jv = !1,
    Kv = 0,
    Lv = 1,
    Mv = 0,
    Nv = "",
    Ov = function (a) {
      a = a || window.event;
      var b = (a.screenX + a.clientX) << 16;
      b += a.screenY + a.clientY;
      b *= new Date().getTime() % 1e6;
      Lv = (Lv * b) % Mv;
      if (++Kv == 3)
        if (((a = window), (b = Ov), a.removeEventListener))
          a.removeEventListener("mousemove", b, !1);
        else if (a.detachEvent) a.detachEvent("onmousemove", b);
        else throw Error("Y`mousemove");
    },
    Pv = function (a) {
      var b = Hv();
      b.update(a);
      return b.Yi();
    };
  Jv = !!Iv && typeof Iv.getRandomValues == "function";
  Jv ||
    ((Mv = (screen.width * screen.width + screen.height) * 1e6),
    (Nv = Pv(
      document.cookie +
        "|" +
        document.location +
        "|" +
        new Date().getTime() +
        "|" +
        Math.random()
    )),
    kv(window, "mousemove", Ov));
  qv = qv || {};
  qv.o3 = "ssIFrame_";
  _.Qv = function (a, b, c) {
    c = c === void 0 ? !1 : c;
    this.Gb = a;
    if (!this.Gb) throw Error("ga");
    a = _.vv(a, "idpIFrameUrl");
    if (!a) throw Error("ha");
    this.SU = a;
    if (!b) throw Error("ia");
    this.nn = b;
    a = this.SU;
    b = document.createElement("a");
    b.setAttribute("href", a);
    a = [b.protocol, "//", b.hostname];
    b.protocol == "http:" && b.port != "" && b.port != "0" && b.port != "80"
      ? (a.push(":"), a.push(b.port))
      : b.protocol == "https:" &&
        b.port != "" &&
        b.port != "0" &&
        b.port != "443" &&
        (a.push(":"), a.push(b.port));
    this.IH = a.join("");
    this.vea = [location.protocol, "//", location.host].join("");
    this.Rw = this.HH = this.Oo = !1;
    this.OU = null;
    this.yB = [];
    this.Xr = [];
    this.mk = {};
    this.Po = void 0;
    this.An = c;
  };
  _.g = _.Qv.prototype;
  _.g.show = function () {
    var a = this.Po;
    a.style.position = "fixed";
    a.style.width = "100%";
    a.style.height = "100%";
    a.style.left = "0px";
    a.style.top = "0px";
    a.style.right = "0px";
    a.style.bottom = "0px";
    a.style.display = "block";
    a.style.zIndex = "9999999";
    a.style.overflow = "hidden";
    a.setAttribute("aria-hidden", "false");
  };
  _.g.hide = function () {
    yv(this.Po);
  };
  _.g.cB = function (a) {
    if (this.Oo) a && a(this);
    else {
      if (!this.Po) {
        var b = qv.o3 + this.Gb;
        var c = this.Gb;
        var d = location.hostname;
        var e,
          f = document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");
        f && f.length > 2 && (e = f[2]);
        (f = e && fv(e.split("|"), c) >= 0)
          ? Gv(e, d)
          : Gv(e ? e + "|" + c : c, d);
        c = !f;
        var h = this.SU,
          k = this.vea;
        d = this.nn;
        e = this.An;
        e = e === void 0 ? !1 : e;
        f = document.createElement("iframe");
        f.setAttribute("id", b);
        b = f.setAttribute;
        var l = "allow-scripts allow-same-origin";
        document.requestStorageAccess &&
          hv(document.requestStorageAccess) &&
          (l += " allow-storage-access-by-user-activation");
        b.call(f, "sandbox", l);
        f.setAttribute("allow", "identity-credentials-get");
        yv(f);
        f.setAttribute("frame-border", "0");
        b = [h, "#origin=", encodeURIComponent(k)];
        b.push("&rpcToken=");
        b.push(encodeURIComponent(d));
        c && b.push("&clearCache=1");
        _.cv && b.push("&debug=1");
        e && b.push("&supportBlocked3PCookies=1");
        document.body.appendChild(f);
        f.setAttribute("src", b.join(""));
        this.Po = f;
      }
      a && this.yB.push(a);
    }
  };
  _.g.OV = function () {
    return this.Oo && this.Rw;
  };
  _.g.xo = function () {
    return this.OU;
  };
  Rv = function (a) {
    for (var b = 0; b < a.yB.length; b++) a.yB[b](a);
    a.yB = [];
  };
  _.Tv = function (a, b, c, d) {
    if (a.Oo) {
      if (a.Oo && a.HH)
        throw (
          ((a =
            "Failed to communicate with IDP IFrame due to unitialization error: " +
            a.xo()),
          dv(a),
          Error(a))
        );
      Sv(a, { method: b, params: c }, d);
    } else a.Xr.push({ rpc: { method: b, params: c }, callback: d }), a.cB();
  };
  Sv = function (a, b, c) {
    if (c) {
      for (var d = b.id; !d || a.mk[d]; )
        d = new Date().getMilliseconds() + "-" + (Math.random() * 1e6 + 1);
      b.id = d;
      a.mk[d] = c;
    }
    b.rpcToken = a.nn;
    a.Po.contentWindow.postMessage(_.nv.stringify(b), a.IH);
  };
  Uv = function (a) {
    if (a && a.indexOf("::") >= 0) throw Error("ja");
  };
  _.Qv.prototype.Fj = function (a, b, c, d, e, f, h, k, l) {
    l = l === void 0 ? !1 : l;
    Uv(f);
    b = _.iv(b);
    _.Tv(
      this,
      "getTokenResponse",
      {
        clientId: a,
        loginHint: c,
        request: b,
        sessionSelector: d,
        forceRefresh: h,
        skipCache: k,
        id: f,
        userInteracted: l,
      },
      e
    );
  };
  _.Qv.prototype.aB = function (a, b, c, d, e) {
    b = _.iv(b);
    _.Tv(
      this,
      "listIdpSessions",
      { clientId: a, request: b, sessionSelector: c, forceRefresh: e },
      d
    );
  };
  Vv = function (a, b, c) {
    Uv(b.identifier);
    _.Tv(a, "getSessionSelector", b, c);
  };
  _.Wv = function (a, b, c, d, e) {
    Uv(b.identifier);
    _.Tv(
      a,
      "setSessionSelector",
      {
        domain: b.domain,
        crossSubDomains: b.crossSubDomains,
        policy: b.policy,
        id: b.id,
        hint: d,
        disabled: !!c,
      },
      e
    );
  };
  Xv = function (a, b, c, d, e, f, h) {
    b = { clientId: b };
    c && (b.pluginName = c);
    d && (b.ackExtensionDate = d);
    b.useFedCm = e;
    f && (b.fedCmEnabled = f);
    _.Tv(a, "monitorClient", b, h);
  };
  _.Qv.prototype.revoke = _.gb(8);
  _.Qv.prototype.Ft = _.gb(10);
  qv.uA = {};
  qv.HG = function (a) {
    return qv.uA[a];
  };
  qv.cB = function (a, b, c) {
    c = c === void 0 ? !1 : c;
    var d = qv.HG(a);
    if (!d) {
      d = String;
      if (Jv) {
        var e = new window.Uint32Array(1);
        Iv.getRandomValues(e);
        e = Number("0." + e[0]);
      } else
        (e = Lv),
          (e += parseInt(Nv.substr(0, 20), 16)),
          (Nv = Pv(Nv)),
          (e /= Mv + Math.pow(16, 20));
      d = new _.Qv(a, d(2147483647 * e), c);
      qv.uA[a] = d;
    }
    d.cB(b);
  };
  qv.Q8 = function (a) {
    for (var b in qv.uA) {
      var c = qv.HG(b);
      if (c && c.Po && c.Po.contentWindow == a.source && c.IH == a.origin)
        return c;
    }
  };
  qv.x9 = function (a) {
    for (var b in qv.uA) {
      var c = qv.HG(b);
      if (c && c.IH == a) return c;
    }
  };
  qv = qv || {};
  var Zv = function () {
    var a = [],
      b;
    for (b in _.Yv) a.push(_.Yv[b]);
    ov.call(this, a);
    this.Fm = {};
    dv("EventBus is ready.");
  };
  gv(Zv, ov);
  _.Yv = {
    W4: "sessionSelectorChanged",
    oE: "sessionStateChanged",
    Ys: "authResult",
    n2: "displayIFrame",
  };
  aw = function (a, b) {
    var c = $v;
    a &&
      b &&
      (c.Fm[a] || (c.Fm[a] = []), fv(c.Fm[a], b) < 0 && c.Fm[a].push(b));
  };
  bw = function (a) {
    var b = $v;
    a && (b.Fm[a] || (b.Fm[a] = []));
  };
  cw = function (a, b, c) {
    return b && a.Fm[b] && fv(a.Fm[b], c) >= 0;
  };
  _.g = Zv.prototype;
  _.g.Ada = function (a) {
    var b,
      c = !!a.source && (a.source === _.xv || a.source.opener === window);
    if ((b = c ? qv.x9(a.origin) : qv.Q8(a))) {
      try {
        var d = _.nv.parse(a.data);
      } catch (e) {
        dv("Bad event, an error happened when parsing data.");
        return;
      }
      if (!c) {
        if (!d || !d.rpcToken || d.rpcToken != b.nn) {
          dv("Bad event, no RPC token.");
          return;
        }
        if (d.id && !d.method) {
          c = d;
          if ((a = b.mk[c.id])) delete b.mk[c.id], a(c.result, c.error);
          return;
        }
      }
      d.method != "fireIdpEvent"
        ? dv("Bad IDP event, method unknown.")
        : (a = d.params) && a.type && this.RU[a.type]
        ? ((d = this.RU[a.type]),
          c && !d.a6
            ? dv("Bad IDP event. Source window cannot be a popup.")
            : d.Ts && !d.Ts.call(this, b, a)
            ? dv("Bad IDP event.")
            : d.Qf.call(this, b, a))
        : dv("Bad IDP event.");
    } else dv("Bad event, no corresponding Idp Stub.");
  };
  _.g.Zea = function (a, b) {
    return cw(this, a.Gb, b.clientId);
  };
  _.g.Yea = function (a, b) {
    a = a.Gb;
    b = b.clientId;
    return !b || cw(this, a, b);
  };
  _.g.o6 = function (a, b) {
    return cw(this, a.Gb, b.clientId);
  };
  _.g.Fca = function (a, b) {
    a.Oo = !0;
    a.Rw = !!b.cookieDisabled;
    Rv(a);
    for (b = 0; b < a.Xr.length; b++) Sv(a, a.Xr[b].rpc, a.Xr[b].callback);
    a.Xr = [];
  };
  _.g.Eca = function (a, b) {
    b = { error: b.error };
    a.Oo = !0;
    a.HH = !0;
    a.OU = b;
    a.Xr = [];
    Rv(a);
  };
  _.g.YB = function (a, b) {
    b.originIdp = a.Gb;
    this.dispatchEvent(b);
  };
  var $v = new Zv(),
    dw = $v,
    ew = {};
  ew.idpReady = { Qf: dw.Fca };
  ew.idpError = { Qf: dw.Eca };
  ew.sessionStateChanged = { Qf: dw.YB, Ts: dw.Zea };
  ew.sessionSelectorChanged = { Qf: dw.YB, Ts: dw.Yea };
  ew.authResult = { Qf: dw.YB, Ts: dw.o6, a6: !0 };
  ew.displayIFrame = { Qf: dw.YB };
  $v.RU = ew || {};
  kv(window, "message", function (a) {
    $v.Ada.call($v, a);
  });
  _.fw = function (a, b) {
    this.We = !1;
    if (!a) throw Error("ka");
    var c = [],
      d;
    for (d in a) c.push(a[d]);
    ov.call(this, c);
    this.Jd = [location.protocol, "//", location.host].join("");
    this.je = b.crossSubDomains ? b.domain || this.Jd : this.Jd;
    if (!b) throw Error("la");
    if (!b.idpId) throw Error("ma");
    if (!_.vv(b.idpId, "authServerUrl") || !_.vv(b.idpId, "idpIFrameUrl"))
      throw Error("na`" + b.idpId);
    this.Gb = b.idpId;
    this.Ub = void 0;
    this.s7 = !!b.disableTokenRefresh;
    this.n8 = !!b.forceTokenRefresh;
    this.Yfa = !!b.skipTokenCache;
    this.An = !!b.supportBlocked3PCookies;
    b.pluginName && (this.pda = b.pluginName);
    b.ackExtensionDate && (this.P5 = b.ackExtensionDate);
    this.Oga = b.useFedCm;
    this.X7 = this.An && _.sv();
    this.setOptions(b);
    this.Qt = [];
    this.Rw = this.Nk = this.AV = !1;
    this.yj = void 0;
    this.NY();
    this.Vd = void 0;
    var e = this,
      f = function () {
        dv("Token Manager is ready.");
        if (e.Qt.length) for (var h = 0; h < e.Qt.length; h++) e.Qt[h].call(e);
        e.AV = !0;
        e.Qt = [];
      };
    this.An && (zv(), tv());
    qv.cB(
      this.Gb,
      function (h) {
        e.Vd = h;
        h.Oo && h.HH
          ? ((e.Nk = !0), (e.yj = h.xo()), e.Or(e.yj))
          : ((e.Rw = h.OV()),
            e.Ub
              ? Xv(e.Vd, e.Ub, e.pda, e.P5, e.Oga, e.X7, function (k) {
                  var l = !!k.validOrigin,
                    m = !!k.blocked,
                    n = !!k.suppressed;
                  k.invalidExtension
                    ? ((e.yj = {
                        error:
                          "Invalid value for ack_extension_date. Please refer to [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information.",
                      }),
                      (e.Nk = !0),
                      e.Or(e.yj))
                    : l
                    ? m
                      ? n
                        ? (ev(
                            "You have created a new client application that uses libraries for user authentication or authorization that are deprecated. New clients must use the new libraries instead. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
                          ),
                          aw(e.Gb, e.Ub),
                          f())
                        : ((e.yj = {
                            error:
                              "You have created a new client application that uses libraries for user authentication or authorization that are deprecated. New clients must use the new libraries instead. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information.",
                          }),
                          (e.Nk = !0),
                          e.Or(e.yj))
                      : (ev(
                          "Your client application uses libraries for user authentication or authorization that are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
                        ),
                        aw(e.Gb, e.Ub),
                        f())
                    : ((e.yj = {
                        error:
                          "Not a valid origin for the client: " +
                          e.Jd +
                          " has not been registered for client ID " +
                          e.Ub +
                          ". Please go to https://console.developers.google.com/ and register this origin for your project's client ID.",
                      }),
                      (e.Nk = !0),
                      e.Or(e.yj));
                })
              : (bw(e.Gb), f()));
      },
      this.An
    );
  };
  gv(_.fw, ov);
  _.g = _.fw.prototype;
  _.g.setOptions = function () {};
  _.g.NY = function () {};
  _.g.Or = function () {};
  _.g.OV = function () {
    return this.Rw;
  };
  _.g.xo = function () {
    return this.yj;
  };
  gw = function (a, b, c) {
    return function () {
      b.apply(a, c);
    };
  };
  _.hw = function (a, b, c) {
    if (a.AV) b.apply(a, c);
    else {
      if (a.Nk) throw a.yj;
      a.Qt.push(gw(a, b, c));
    }
  };
  _.fw.prototype.dQ = _.gb(11);
  _.fw.prototype.Ft = _.gb(9);
  _.jw = function (a, b) {
    _.fw.call(this, a, b);
    this.gY = new Av();
    this.Zk = this.np = null;
    iw(this);
  };
  gv(_.jw, _.fw);
  _.jw.prototype.setOptions = function () {};
  var kw = function (a, b) {
      a.Te = {
        crossSubDomains: !!b.crossSubDomains,
        id: b.sessionSelectorId,
        domain: a.je,
      };
      b.crossSubDomains && (a.Te.policy = b.policy);
    },
    lw = function (a, b) {
      if (!b.authParameters) throw Error("oa");
      if (!b.authParameters.scope) throw Error("pa");
      if (!b.authParameters.response_type) throw Error("qa");
      a.In = b.authParameters;
      a.In.redirect_uri ||
        (a.In.redirect_uri = [
          location.protocol,
          "//",
          location.host,
          location.pathname,
        ].join(""));
      a.Pj = _.iv(b.rpcAuthParameters || a.In);
      if (!a.Pj.scope) throw Error("ra");
      if (!a.Pj.response_type) throw Error("sa");
      a: {
        var c = a.Pj.response_type.split(" ");
        for (var d = 0, e = c.length; d < e; d++)
          if (c[d] && !lv[c[d]]) {
            c = !0;
            break a;
          }
        c = !1;
      }
      if (c) throw Error("ta");
      if (b.enableSerialConsent || b.enableGranularConsent)
        (a.In.enable_granular_consent = !0), (a.Pj.enable_serial_consent = !0);
      b.authResultIdentifier && (a.p6 = b.authResultIdentifier);
      b.spec_compliant && (a.Pj.spec_compliant = b.spec_compliant);
    };
  _.jw.prototype.NY = function () {
    var a = this;
    $v.addEventListener(_.Yv.W4, function (b) {
      a.We &&
        a.Te &&
        b.originIdp == a.Gb &&
        !b.crossSubDomains == !a.Te.crossSubDomains &&
        b.domain == a.Te.domain &&
        b.id == a.Te.id &&
        a.xX(b);
    });
    $v.addEventListener(_.Yv.oE, function (b) {
      a.We && b.originIdp == a.Gb && b.clientId == a.Ub && a.yX(b);
    });
    $v.addEventListener(_.Yv.Ys, function (b) {
      _.xv = void 0;
      a.We &&
        b.originIdp == a.Gb &&
        b.clientId == a.Ub &&
        b.id == a.Vk &&
        (a.np && (window.clearTimeout(a.np), (a.np = null)),
        (a.Vk = void 0),
        a.hp(b));
    });
    $v.addEventListener(_.Yv.n2, function (b) {
      a.We && b.originIdp == a.Gb && (b.hide ? a.Vd.hide() : a.Vd.show());
    });
  };
  _.jw.prototype.xX = function () {};
  _.jw.prototype.yX = function () {};
  _.jw.prototype.hp = function () {};
  var nw = function (a, b) {
      mw(a);
      a.s7 ||
        ((a.Zk = rv.k7(function () {
          a.Fj(!0);
        }, b - 3e5)),
        navigator.onLine && a.Zk.start());
    },
    mw = function (a) {
      a.Zk && (a.Zk.clear(), (a.Zk = null));
    },
    iw = function (a) {
      var b = window;
      mv() && (b = document.body);
      kv(b, "online", function () {
        a.Zk && a.Zk.start();
      });
      kv(b, "offline", function () {
        a.Zk && a.Zk.clear();
      });
    };
  _.jw.prototype.Fj = function () {};
  _.jw.prototype.aX = _.gb(12);
  _.jw.prototype.Aba = function (a, b) {
    if (!this.Ub) throw Error("xa");
    this.Vd.aB(this.Ub, this.Pj, this.Te, a, b);
  };
  _.jw.prototype.aB = function (a, b) {
    _.hw(this, this.Aba, [a, b]);
  };
  _.pw = function (a) {
    this.Oe = void 0;
    this.Vh = !1;
    this.ss = void 0;
    _.jw.call(this, ow, a);
  };
  gv(_.pw, _.jw);
  var ow = {
    hO: "noSessionBound",
    mt: "userLoggedOut",
    H1: "activeSessionChanged",
    oE: "sessionStateChanged",
    n5: "tokenReady",
    m5: "tokenFailed",
    Ys: "authResult",
    ERROR: "error",
  };
  _.pw.prototype.setOptions = function (a) {
    if (!a.clientId) throw Error("ya");
    this.Ub = a.clientId;
    this.Ha = a.id;
    kw(this, a);
    lw(this, a);
  };
  _.pw.prototype.Or = function (a) {
    this.dispatchEvent({
      type: ow.ERROR,
      error: "idpiframe_initialization_failed",
      details: a.error,
      idpId: this.Gb,
    });
  };
  var qw = function (a) {
    mw(a);
    a.ss = void 0;
    a.xI = void 0;
  };
  _.g = _.pw.prototype;
  _.g.xX = function (a) {
    var b = a.newValue || {};
    if (this.Oe != b.hint || this.Vh != !!b.disabled) {
      a = this.Oe;
      var c = !this.Oe || this.Vh;
      qw(this);
      this.Oe = b.hint;
      this.Vh = !!b.disabled;
      (b = !this.Oe || this.Vh) && !c
        ? this.dispatchEvent({ type: ow.mt, idpId: this.Gb })
        : b ||
          (a != this.Oe && this.dispatchEvent({ type: ow.H1, idpId: this.Gb }),
          this.Oe && this.Fj());
    }
  };
  _.g.yX = function (a) {
    this.Vh ||
      (this.Oe
        ? a.user || this.ss
          ? a.user == this.Oe &&
            (this.ss
              ? a.sessionState
                ? (this.ss = a.sessionState)
                : (qw(this),
                  this.dispatchEvent({ type: ow.mt, idpId: this.Gb }))
              : a.sessionState && ((this.ss = a.sessionState), this.Fj()))
          : this.Fj()
        : this.dispatchEvent({ type: ow.oE, idpId: this.Gb }));
  };
  _.g.hp = function (a) {
    this.dispatchEvent({ type: ow.Ys, authResult: a.authResult });
  };
  _.g.Bu = _.gb(14);
  _.g.uu = function (a) {
    _.hw(this, this.uG, [a]);
  };
  _.g.uG = function (a) {
    Vv(this.Vd, this.Te, a);
  };
  _.g.nD = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!a) throw Error("za");
    qw(this);
    this.Oe = a;
    this.Vh = !1;
    b && _.Wv(this.Vd, this.Te, !1, this.Oe);
    this.We = !0;
    this.Fj(c, !0, d);
  };
  _.g.start = function () {
    _.hw(this, this.Gw, []);
  };
  _.g.Gw = function () {
    var a = this.Ub == jv("client_id") ? jv("login_hint") : void 0;
    var b = this.Ub == jv("client_id") ? jv("state") : void 0;
    this.gJ = b;
    if (a)
      window.history.replaceState
        ? window.history.replaceState(
            null,
            document.title,
            window.location.href.split("#")[0]
          )
        : (window.location.href.hash = ""),
        this.nD(a, !0, !0, !0);
    else {
      var c = this;
      this.uu(function (d) {
        c.We = !0;
        d && d.hint
          ? (qw(c),
            (c.Oe = d.hint),
            (c.Vh = !!d.disabled),
            c.Vh ? c.dispatchEvent({ type: ow.mt, idpId: c.Gb }) : c.nD(d.hint))
          : (qw(c),
            (c.Oe = void 0),
            (c.Vh = !(!d || !d.disabled)),
            c.dispatchEvent({
              type: ow.hO,
              autoOpenAuthUrl: !c.Vh,
              idpId: c.Gb,
            }));
      });
    }
  };
  _.g.j8 = function () {
    var a = this;
    this.uu(function (b) {
      b && b.hint
        ? b.disabled
          ? a.dispatchEvent({ type: ow.mt, idpId: a.Gb })
          : a.Fj(!0)
        : a.dispatchEvent({ type: ow.hO, idpId: a.Gb });
    });
  };
  _.g.GS = function () {
    _.hw(this, this.j8, []);
  };
  _.g.Fj = function (a, b, c) {
    var d = this;
    this.Vd.Fj(
      this.Ub,
      this.Pj,
      this.Oe,
      this.Te,
      function (e, f) {
        (f = f || e.error)
          ? f == "user_logged_out"
            ? (qw(d), d.dispatchEvent({ type: ow.mt, idpId: d.Gb }))
            : ((d.xI = null),
              d.dispatchEvent({ type: ow.m5, idpId: d.Gb, error: f }))
          : ((d.xI = e),
            (d.ss = e.session_state),
            nw(d, e.expires_at),
            (e.idpId = d.Gb),
            b && d.gJ && ((e.state = d.gJ), (d.gJ = void 0)),
            d.dispatchEvent({ type: ow.n5, idpId: d.Gb, response: e }));
      },
      this.Ha,
      a,
      !1,
      c === void 0 ? !1 : c
    );
  };
  _.g.revoke = _.gb(7);
  _.g.gZ = _.gb(15);
  _.rw = function (a) {
    this.Jn = null;
    _.jw.call(this, {}, a);
    this.We = !0;
  };
  gv(_.rw, _.jw);
  _.g = _.rw.prototype;
  _.g.setOptions = function (a) {
    if (!a.clientId) throw Error("ya");
    this.Ub = a.clientId;
    this.Ha = a.id;
    kw(this, a);
    lw(this, a);
  };
  _.g.Or = function (a) {
    this.Jn &&
      (this.Jn({
        authResult: {
          error: "idpiframe_initialization_failed",
          details: a.error,
        },
      }),
      (this.Jn = null));
  };
  _.g.hp = function (a) {
    if (this.Jn) {
      var b = this.Jn;
      this.Jn = null;
      b(a);
    }
  };
  _.g.Bu = _.gb(13);
  _.g.uu = function (a) {
    this.Nk ? a(this.xo()) : _.hw(this, this.uG, [a]);
  };
  _.g.uG = function (a) {
    Vv(this.Vd, this.Te, a);
  };
  _.sw = function (a, b, c) {
    a.Nk ? c(a.xo()) : _.hw(a, a.Uca, [b, c]);
  };
  _.rw.prototype.Uca = function (a, b) {
    this.Vd.Fj(
      this.Ub,
      this.Pj,
      a,
      this.Te,
      function (c, d) {
        d ? b({ error: d }) : b(c);
      },
      this.Ha,
      this.n8,
      this.Yfa
    );
  };
  _.rw.prototype.lW = _.gb(16);
  var tw = function (a, b) {
      b = _.Tb(b);
      b !== void 0 && a.assign(b);
    },
    uw = function (a) {
      return Array.prototype.concat.apply([], arguments);
    },
    vw = function () {
      try {
        var a = Array.from(
          (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(64))
        );
      } catch (c) {
        a = [];
        for (var b = 0; b < 64; b++) a[b] = Math.floor(Math.random() * 256);
      }
      return _.Ji(a, 3).substring(0, 64);
    },
    ww = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          if (d === null || d === void 0) d = "";
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
        }
      return b.join("&");
    },
    xw = function (a) {
      window.addEventListener("hashchange", function () {
        location.hash.includes("client_id") && window.location.reload();
      });
      tw(window.location, _.Pb(a));
    },
    yw = function (a, b, c) {
      if (!a.We) throw Error("ua");
      b ? _.Wv(a.Vd, a.Te, !0, void 0, c) : _.Wv(a.Vd, a.Te, !0, a.Oe, c);
    },
    zw = function (a) {
      if (!a.We) throw Error("ua");
      return a.xI;
    },
    Aw,
    Bw,
    Cw,
    Dw,
    Ew,
    Fw,
    Gw,
    Hw,
    Iw,
    Jw,
    Kw,
    Lw,
    Ow;
  _.rw.prototype.lW = _.nb(16, function (a, b) {
    var c = this.Vd,
      d = this.Ub,
      e = this.Te,
      f = _.iv(this.Pj);
    delete f.response_type;
    _.Tv(
      c,
      "getOnlineCode",
      { clientId: d, loginHint: a, request: f, sessionSelector: e },
      b
    );
  });
  _.pw.prototype.gZ = _.nb(15, function (a) {
    zw(this) &&
      zw(this).access_token &&
      (this.Vd.revoke(this.Ub, zw(this).access_token, a), yw(this, !0));
  });
  _.pw.prototype.Bu = _.nb(14, function () {
    var a = this;
    return function (b) {
      b &&
        b.authResult &&
        b.authResult.login_hint &&
        (a.UB
          ? ((b.authResult.client_id = a.Ub), xw(a.UB + "#" + ww(b.authResult)))
          : a.nD(
              b.authResult.login_hint,
              a.Vh || b.authResult.login_hint != a.Oe,
              !0,
              !0
            ));
    };
  });
  _.rw.prototype.Bu = _.nb(13, function (a) {
    var b = this;
    return function (c) {
      c && c.authResult && c.authResult.login_hint
        ? b.uu(function (d) {
            _.Wv(
              b.Vd,
              b.Te,
              d && d.disabled,
              c.authResult.login_hint,
              function () {
                _.sw(b, c.authResult.login_hint, a);
              }
            );
          })
        : a(
            c && c.authResult && c.authResult.error
              ? c.authResult
              : c && c.authResult && !c.authResult.login_hint
              ? { error: "wrong_response_type" }
              : { error: "unknown_error" }
          );
    };
  });
  _.jw.prototype.aX = _.nb(12, function () {
    this.Ub &&
      _.Tv(this.Vd, "startPolling", {
        clientId: this.Ub,
        origin: this.Jd,
        id: this.Vk,
      });
  });
  _.Qv.prototype.revoke = _.nb(8, function (a, b, c) {
    _.Tv(this, "revoke", { clientId: a, token: b }, c);
  });
  _.pw.prototype.revoke = _.nb(7, function (a) {
    _.hw(this, this.gZ, [a]);
  });
  Aw =
    "openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/plus.login".split(
      " "
    );
  Bw = function () {
    var a = navigator.userAgent,
      b;
    if ((b = !!a && a.indexOf("CriOS") != -1))
      (b = -1),
        (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1),
        (b = b < 48);
    return b;
  };
  Cw = function () {
    var a = navigator.userAgent.toLowerCase();
    if (
      !(
        a.indexOf("safari/") > -1 &&
        a.indexOf("chrome/") < 0 &&
        a.indexOf("crios/") < 0 &&
        a.indexOf("android") < 0
      )
    )
      return !1;
    var b = RegExp("version/(\\d+)\\.(\\d+)[\\.0-9]*").exec(
      navigator.userAgent.toLowerCase()
    );
    if (!b || b.length < 3) return !1;
    a = parseInt(b[1], 10);
    b = parseInt(b[2], 10);
    return a > 12 || (a == 12 && b >= 1);
  };
  Dw = function (a) {
    return (
      a.length > 0 &&
      a.every(function (b) {
        return Aw.includes(b);
      })
    );
  };
  Ew = function (a, b, c, d, e, f, h) {
    var k = _.vv(a, "authServerUrl");
    if (!k) throw Error("ea`" + a);
    a = _.iv(d);
    a.response_type = h || "permission";
    a.client_id = c;
    a.ss_domain = b;
    if (f && f.extraQueryParams)
      for (var l in f.extraQueryParams) a[l] = f.extraQueryParams[l];
    (b = e) &&
      !(b = Cw()) &&
      ((b = navigator.userAgent.toLowerCase()),
      b.indexOf("ipad;") > -1 || b.indexOf("iphone;") > -1
        ? ((b = RegExp("os (\\d+)_\\d+(_\\d+)? like mac os x").exec(
            navigator.userAgent.toLowerCase()
          )),
          (b = !b || b.length < 2 ? !1 : parseInt(b[1], 10) >= 14))
        : (b = !1));
    b && !a.prompt && (a.prompt = "select_account");
    return k + (k.indexOf("?") < 0 ? "?" : "&") + ww(a);
  };
  Fw = function (a, b, c, d) {
    if (!a.Ub) throw Error("va");
    a.Vk = c || a.p6 || "auth" + Math.floor(Math.random() * 1e6 + 1);
    b = b || {};
    b.extraQueryParams = b.extraQueryParams || {};
    if (!b.extraQueryParams.redirect_uri) {
      var e = a.Jd.split("//");
      c = b.extraQueryParams;
      var f = e[0],
        h = e[1];
      e = a.Vk;
      var k = f.indexOf(":");
      k > 0 && (f = f.substring(0, k));
      f = ["storagerelay://", f, "/", h, "?"];
      f.push("id=" + e);
      c.redirect_uri = f.join("");
    }
    return Ew(a.Gb, a.je, a.Ub, a.In, !0, b, d);
  };
  Gw = function (a, b, c) {
    if (!a.Ub) throw Error("va");
    return Ew(a.Gb, a.je, a.Ub, a.In, !1, b, c);
  };
  Hw = function (a, b) {
    a.np && window.clearTimeout(a.np);
    a.np = window.setTimeout(function () {
      a.Vk == b &&
        ((_.xv = void 0),
        (a.np = null),
        (a.Vk = void 0),
        a.hp({ authResult: { error: "popup_closed_by_user" } }));
    }, 1e3);
  };
  Iw = function (a, b, c) {
    if (!a.Ub) throw Error("wa");
    c = c || {};
    c = Fw(a, c.sessionMeta, c.oneTimeId, c.responseType);
    ((Object.hasOwnProperty.call(window, "ActiveXObject") &&
      !window.ActiveXObject) ||
      Bw()) &&
      _.hw(a, a.aX, []);
    var d = a.Vk;
    a.gY.open(
      c,
      b,
      function () {
        a.Vk == d && Hw(a, d);
      },
      function () {
        a.Vk = void 0;
        a.hp({ authResult: { error: "popup_blocked_by_browser" } });
      }
    );
  };
  Jw = function (a, b) {
    var c = b || {};
    b = _.iv(a.In);
    if (c.sessionMeta && c.sessionMeta.extraQueryParams)
      for (var d in c.sessionMeta.extraQueryParams)
        b[d] = c.sessionMeta.extraQueryParams[d];
    var e;
    c.sessionMeta.extraQueryParams.scope &&
      (e = c.sessionMeta.extraQueryParams.scope.split(" "));
    !e && b.scope && (e = b.scope.split(" "));
    delete b.redirect_uri;
    delete b.origin;
    delete b.client_id;
    delete b.scope;
    b.prompt == "select_account" && delete b.prompt;
    b.gsiwebsdk = "fedcm";
    b.ss_domain = a.je;
    b.nonce || (b.nonce = "notprovided");
    d = _.vv(a.Gb, "fedcmConfigUrl");
    b.response_type = c.responseType.split(" ");
    b.scope = e.join(" ");
    c = navigator.userActivation.isActive ? "button" : "widget";
    e = Dw(e) ? ["name", "email", "picture"] : [];
    return {
      identity: {
        providers: [{ configURL: d, clientId: a.Ub, fields: e, params: b }],
        mode: c,
      },
      mediation: "required",
    };
  };
  Kw = function (a, b) {
    if (!a.Ub) throw Error("wa");
    b = Jw(a, b);
    navigator.credentials.get(b).then(
      function (c) {
        c = JSON.parse(c.token);
        var d = {
          client_id: c.client_id,
          login_hint: c.login_hint,
          expires_in: 3600,
          scope: c.scope,
        };
        c.code && (d.code = c.code);
        c.id_token && (d.id_token = c.id_token);
        a.hp({ type: _.Yv.Ys, idpId: a.Gb, authResult: d });
      },
      function (c) {
        a.hp({ type: _.Yv.Ys, idpId: a.Gb, authResult: { error: c } });
      }
    );
  };
  Lw = function (a, b, c) {
    a.Nk ? c(a.xo()) : _.hw(a, a.lW, [b, c]);
  };
  _.Mw = function (a) {
    _.vf(_.If, "le", []).push(a);
  };
  _.Nw = function (a) {
    for (var b = [], c = 0, d = 0; c < a.length; ) {
      var e = a[c++];
      if (e < 128) b[d++] = String.fromCharCode(e);
      else if (e > 191 && e < 224) {
        var f = a[c++];
        b[d++] = String.fromCharCode(((e & 31) << 6) | (f & 63));
      } else if (e > 239 && e < 365) {
        f = a[c++];
        var h = a[c++],
          k = a[c++];
        e =
          (((e & 7) << 18) | ((f & 63) << 12) | ((h & 63) << 6) | (k & 63)) -
          65536;
        b[d++] = String.fromCharCode(55296 + (e >> 10));
        b[d++] = String.fromCharCode(56320 + (e & 1023));
      } else
        (f = a[c++]),
          (h = a[c++]),
          (b[d++] = String.fromCharCode(
            ((e & 15) << 12) | ((f & 63) << 6) | (h & 63)
          ));
    }
    return b.join("");
  };
  Ow = function (a) {
    var b = [];
    _.Ki(a, function (c) {
      b.push(c);
    });
    return b;
  };
  _.Pw = function (a, b) {
    _.sj[b || "token"] = a;
  };
  _.Qw = function (a) {
    delete _.sj[a || "token"];
  };
  _.nv = {
    parse: function (a) {
      a = _.Ug("[" + String(a) + "]");
      if (a === !1 || a.length !== 1)
        throw new SyntaxError("JSON parsing failed.");
      return a[0];
    },
    stringify: function (a) {
      return _.Vg(a);
    },
  };
  _.rw.prototype.eG = function (a, b) {
    _.hw(this, this.Z7, [a, b]);
  };
  _.rw.prototype.Z7 = function (a, b) {
    this.Vd.eG(this.Ub, a, this.Pj, this.Te, b);
  };
  _.Qv.prototype.eG = function (a, b, c, d, e) {
    c = _.iv(c);
    _.Tv(
      this,
      "gsi:fetchLoginHint",
      { clientId: a, loginHint: b, request: c, sessionSelector: d },
      e
    );
  };
  var Rw,
    Sw = ["client_id", "cookie_policy", "scope"],
    Tw =
      "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent enable_granular_consent include_granted_scopes response_type session_selection plugin_name ack_extension_date use_fedcm gsiwebsdk".split(
        " "
      ),
    Uw = ["authuser", "after_redirect", "access_type", "hl"],
    Vw = ["login_hint", "prompt"],
    Ww = { clientid: "client_id", cookiepolicy: "cookie_policy" },
    Xw = ["approval_prompt", "authuser", "login_hint", "prompt", "hd"],
    Yw = ["login_hint", "g-oauth-window", "status"],
    Zw = Math.min(_.Sf("oauth-flow/authWindowWidth", 599), screen.width - 20),
    $w = Math.min(_.Sf("oauth-flow/authWindowHeight", 600), screen.height - 30);
  var ax = function (a) {
    _.rb.call(this, a);
  };
  _.A(ax, _.rb);
  ax.prototype.name = "gapi.auth2.ExternallyVisibleError";
  var bx = function () {};
  bx.prototype.select = function (a, b) {
    if (
      a.sessions &&
      a.sessions.length == 1 &&
      ((a = a.sessions[0]), a.login_hint)
    ) {
      b(a);
      return;
    }
    b();
  };
  var cx = function () {};
  cx.prototype.select = function (a, b) {
    if (a.sessions && a.sessions.length)
      for (var c = 0; c < a.sessions.length; c++) {
        var d = a.sessions[c];
        if (d.login_hint) {
          b(d);
          return;
        }
      }
    b();
  };
  var dx = function (a) {
    this.q6 = a;
  };
  dx.prototype.select = function (a, b) {
    if (a.sessions)
      for (var c = 0; c < a.sessions.length; c++) {
        var d = a.sessions[c];
        if (
          d.session_state &&
          d.session_state.extraQueryParams &&
          d.session_state.extraQueryParams.authuser == this.q6
        ) {
          d.login_hint ? b(d) : b();
          return;
        }
      }
    b();
  };
  var ex = function (a) {
    this.De = a;
    this.FC = [];
  };
  ex.prototype.select = function (a) {
    var b = 0,
      c = this,
      d = function (e) {
        if (e) a(e);
        else {
          var f = c.FC[b];
          f
            ? (b++,
              c.De.aB(function (h) {
                h ? f.select(h, d) : d();
              }))
            : a();
        }
      };
    d();
  };
  var fx = function (a) {
      a = new ex(a);
      a.FC.push(new bx());
      return a;
    },
    gx = function (a) {
      a = new ex(a);
      a.FC.push(new cx());
      return a;
    },
    hx = function (a, b) {
      b === void 0 || b === null
        ? (b = fx(a))
        : ((a = new ex(a)), a.FC.push(new dx(b)), (b = a));
      return b;
    };
  var ix = function (a) {
    this.Qf = a;
    this.isActive = !0;
  };
  ix.prototype.remove = function () {
    this.isActive = !1;
  };
  ix.prototype.trigger = function () {};
  var jx = function (a) {
      this.remove = function () {
        a.remove();
      };
      this.trigger = function () {
        a.trigger();
      };
    },
    kx = function () {
      this.uc = [];
    };
  kx.prototype.add = function (a) {
    this.uc.push(a);
  };
  kx.prototype.notify = function (a) {
    for (var b = this.uc, c = [], d = 0; d < b.length; d++) {
      var e = b[d];
      e.isActive && (c.push(e), _.Wk(lx(e.Qf, a)));
    }
    this.uc = c;
  };
  var lx = function (a, b) {
    return function () {
      a(b);
    };
  };
  var nx = function (a) {
    this.Ca = null;
    this.Wga = new mx(this);
    this.uc = new kx();
    a != void 0 && this.set(a);
  };
  nx.prototype.set = function (a) {
    a != this.Ca &&
      ((this.Ca = a), (this.Wga.value = a), this.uc.notify(this.Ca));
  };
  nx.prototype.get = function () {
    return this.Ca;
  };
  nx.prototype.qa = function (a) {
    a = new ox(this, a);
    this.uc.add(a);
    return a;
  };
  nx.prototype.get = nx.prototype.get;
  var ox = function (a, b) {
    ix.call(this, b);
    this.Eba = a;
  };
  _.A(ox, ix);
  ox.prototype.trigger = function () {
    var a = this.Qf;
    a(this.Eba.get());
  };
  var mx = function (a) {
    this.value = null;
    this.qa = function (b) {
      return new jx(a.qa(b));
    };
  };
  var px = {
      nja: "fetch_basic_profile",
      oka: "login_hint",
      Ila: "prompt",
      Ola: "redirect_uri",
      gma: "scope",
      Cna: "ux_mode",
      Sma: "state",
    },
    qx = function (a) {
      this.Na = {};
      if (a && !_.Di(a))
        if (typeof a.get == "function") this.Na = a.get();
        else
          for (var b in px) {
            var c = px[b];
            c in a && (this.Na[c] = a[c]);
          }
    };
  qx.prototype.get = function () {
    return this.Na;
  };
  qx.prototype.j_ = function (a) {
    this.Na.scope = a;
    return this;
  };
  qx.prototype.Ku = function () {
    return this.Na.scope;
  };
  var rx = function (a, b) {
    var c = a.Na.scope;
    b = uw(b.split(" "), c ? c.split(" ") : []);
    _.Mk(b);
    a.Na.scope = b.join(" ");
  };
  _.g = qx.prototype;
  _.g.zfa = function (a) {
    this.Na.prompt = a;
    return this;
  };
  _.g.z9 = function () {
    return this.Na.prompt;
  };
  _.g.cfa = function () {
    _.Zg.warn("Property app_package_name no longer supported and was not set");
    return this;
  };
  _.g.x8 = function () {
    _.Zg.warn("Property app_package_name no longer supported");
  };
  _.g.Ef = function (a) {
    this.Na.state = a;
  };
  _.g.getState = function () {
    return this.Na.state;
  };
  var sx = function () {
      return [
        "toolbar=no",
        "location=" + (window.opera ? "no" : "yes"),
        "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no",
        "width=" + Zw,
        "height=" + $w,
        "top=" + (screen.height - $w) / 2,
        "left=" + (screen.width - Zw) / 2,
      ].join();
    },
    tx = function (a) {
      a = a && a.id_token;
      if (!a || !a.split(".")[1]) return null;
      a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
      return JSON.parse(_.Nw(Ow(a)));
    },
    ux = function () {
      Rw = _.Sf("auth2/idpValue", "google");
      var a = _.Sf(
          "oauth-flow/authUrl",
          "https://accounts.google.com/o/oauth2/auth"
        ),
        b = _.Sf(
          "oauth-flow/idpIframeUrl",
          "https://accounts.google.com/o/oauth2/iframe"
        );
      a = {
        fedcmConfigUrl: _.Sf(
          "oauth-flow/fedcmConfigUrl",
          "https://accounts.google.com/o/fedcm/config.json"
        ),
        authServerUrl: a,
        idpIFrameUrl: b,
      };
      _.wv(Rw, a);
    },
    vx = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        if (d === b.length - 1) {
          a[e] = c;
          break;
        }
        _.yc(a[e]) || (a[e] = {});
        a = a[e];
      }
    },
    wx = function () {
      var a = window.location.origin;
      a || (a = window.location.protocol + "//" + window.location.host);
      return a;
    },
    yx = function () {
      var a = xx();
      a.storage_path &&
        window.sessionStorage.setItem(
          a.storage_path,
          wx() + window.location.pathname
        );
      if (a.status.toLowerCase() == "enforced")
        throw new ax(
          "gapi.auth2 is disabled on this website, but it is still used on page " +
            window.location.href
        );
      a.status.toLowerCase() == "informational" &&
        _.Zg.warn(
          "gapi.auth2 is disabled on this website, but it is still used on page " +
            window.location.href
        );
    },
    zx = function (a) {
      return _.ej.get("GSI_ALLOW_3PCD") === "1"
        ? !0
        : a === !1
        ? !1
        : a === !0 || (_.If.le || []).includes("fedcm_migration_mod")
        ? !0
        : !1;
    };
  var Ax = function (a) {
    var b = a ? ((b = tx(a)) ? b.sub : null) : null;
    this.Ha = b;
    this.Oc = a ? _.Nk(a) : null;
  };
  _.g = Ax.prototype;
  _.g.getId = function () {
    return this.Ha;
  };
  _.g.EG = function () {
    var a = tx(this.Oc);
    return a ? a.hd : null;
  };
  _.g.Jg = function () {
    return !!this.Oc;
  };
  _.g.jm = function (a) {
    if (a) return this.Oc;
    a = Bx;
    var b = _.Nk(this.Oc);
    !a.HA || a.CH || a.faa || (delete b.access_token, delete b.scope);
    return b;
  };
  _.g.dK = function () {
    return Bx.dK();
  };
  _.g.xl = function () {
    this.Oc = null;
  };
  _.g.a9 = function () {
    return this.Oc ? this.Oc.scope : null;
  };
  _.g.update = function (a) {
    this.Ha = a.Ha;
    this.Oc = a.Oc;
    this.Oc.id_token
      ? (this.gy = new Cx(this.Oc))
      : this.gy && (this.gy = null);
  };
  var Dx = function (a) {
    return a.Oc && typeof a.Oc.session_state == "object"
      ? _.Nk(a.Oc.session_state.extraQueryParams || {})
      : {};
  };
  _.g = Ax.prototype;
  _.g.rG = function () {
    var a = Dx(this);
    return a && a.authuser !== void 0 && a.authuser !== null
      ? a.authuser
      : null;
  };
  _.g.wl = function (a) {
    var b = Bx,
      c = new qx(a);
    b.CH = c.Ku() ? !0 : !1;
    Bx.HA && rx(c, "openid profile email");
    return new _.gl(function (d, e) {
      var f = Dx(this);
      f.login_hint = this.getId();
      f.scope = c.Ku();
      Ex(b, d, e, f);
    }, this);
  };
  _.g.Ou = function (a) {
    return new _.gl(function (b, c) {
      var d = a || {},
        e = Bx;
      d.login_hint = this.getId();
      e.Ou(d).then(b, c);
    }, this);
  };
  _.g.U9 = function (a) {
    return this.wl(a);
  };
  _.g.disconnect = function () {
    return Bx.disconnect();
  };
  _.g.z8 = function () {
    return this.gy;
  };
  _.g.oA = function (a) {
    if (!this.Jg()) return !1;
    var b = this.Oc && this.Oc.scope ? this.Oc.scope.split(" ") : "";
    return _.ed(a ? a.split(" ") : [], function (c) {
      return _.tb(b, c);
    });
  };
  var Cx = function (a) {
    a = tx(a);
    this.s8 = a.sub;
    this.Wf = a.name;
    this.Q9 = a.given_name;
    this.W7 = a.family_name;
    this.WU = a.picture;
    this.bz = a.email;
  };
  _.g = Cx.prototype;
  _.g.getId = function () {
    return this.s8;
  };
  _.g.Cg = function () {
    return this.Wf;
  };
  _.g.Y8 = function () {
    return this.Q9;
  };
  _.g.T8 = function () {
    return this.W7;
  };
  _.g.g9 = function () {
    return this.WU;
  };
  _.g.oo = function () {
    return this.bz;
  };
  var xx, Fx;
  xx = function () {
    var a = _.ej.get("G_AUTH2_MIGRATION");
    if (!a) return { status: "none" };
    a = /(enforced|informational)(?::(.*))?/i.exec(a);
    return a
      ? { status: a[1].toLowerCase(), storage_path: a[2] }
      : (_.Zg.warn("The G_AUTH2_MIGRATION cookie value is not valid."),
        { status: "none" });
  };
  Fx = function (a) {
    var b = location;
    if (a && a != "none")
      return a == "single_host_origin" ? b.protocol + "//" + b.host : a;
  };
  _.Gx = function (a) {
    if (!a) throw new ax("No cookiePolicy");
    var b = window.location.hostname;
    a == "single_host_origin" && (a = window.location.protocol + "//" + b);
    if (a == "none") return null;
    var c = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
    if (!c) throw new ax("Invalid cookiePolicy");
    a = c[2];
    c = c[1];
    var d = {};
    d.dotValue = a.split(".").length;
    d.isSecure = c.indexOf("https") != -1;
    d.domain = a;
    if (!_.Wj(b, "." + a) && !_.Wj(b, a))
      throw new ax("Invalid cookiePolicy domain");
    return d;
  };
  var Ix = function (a) {
      var b = a || {},
        c = Hx();
      _.$c(Tw, function (d) {
        typeof b[d] === "undefined" &&
          typeof c[d] !== "undefined" &&
          (b[d] = c[d]);
      });
      return b;
    },
    Hx = function () {
      for (
        var a = {}, b = document.getElementsByTagName("meta"), c = 0;
        c < b.length;
        ++c
      )
        if (b[c].name) {
          var d = b[c].name;
          if (d.indexOf("google-signin-") == 0) {
            d = d.substring(14);
            var e = b[c].content;
            Ww[d] && (d = Ww[d]);
            _.tb(Tw, d) &&
              e &&
              (a[d] = e == "true" ? !0 : e == "false" ? !1 : e);
          }
        }
      return a;
    },
    Jx = function (a) {
      return String(a).replace(/_([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    Kx = function (a) {
      _.$c(Tw, function (b) {
        var c = Jx(b);
        typeof a[c] !== "undefined" &&
          typeof a[b] === "undefined" &&
          ((a[b] = a[c]), delete a[c]);
      });
    },
    Lx = function (a) {
      a = Ix(a);
      Kx(a);
      a.cookie_policy || (a.cookie_policy = "single_host_origin");
      var b = Tw + Uw,
        c;
      for (c in a) b.indexOf(c) < 0 && delete a[c];
      return a;
    },
    Mx = function (a, b) {
      if (!a) throw new ax("Empty initial options.");
      for (var c = 0; c < Sw.length; ++c)
        if (!((b && Sw[c] == "scope") || a[Sw[c]]))
          throw new ax("Missing required parameter '" + Sw[c] + "'");
      _.Gx(a.cookie_policy);
    },
    Ox = function (a) {
      var b = {
        authParameters: {
          redirect_uri: void 0,
          response_type: "token id_token",
          scope: a.scope,
          "openid.realm": a.openid_realm,
          include_granted_scopes: !0,
        },
        clientId: a.client_id,
        crossSubDomains: !0,
        domain: Fx(a.cookie_policy),
        disableTokenRefresh: !!a.disable_token_refresh,
        idpId: Rw,
      };
      Nx(b, a);
      _.$c(Vw, function (d) {
        a[d] && (b.authParameters[d] = a[d]);
      });
      typeof a.enable_serial_consent == "boolean" &&
        (b.enableSerialConsent = a.enable_serial_consent);
      typeof a.enable_granular_consent == "boolean" &&
        (b.enableGranularConsent = a.enable_granular_consent);
      if (a.plugin_name) b.pluginName = a.plugin_name;
      else {
        var c = _.Sf("auth2/pluginName");
        c && (b.pluginName = c);
      }
      a.ack_extension_date &&
        ((b.authParameters.ack_extension_date = a.ack_extension_date),
        (b.ackExtensionDate = a.ack_extension_date));
      typeof a.use_fedcm === "boolean" && (b.useFedCm = a.use_fedcm);
      return b;
    },
    Nx = function (a, b) {
      var c = b.oidc_spec_compliant;
      b = b.nonce;
      c && ((a.spec_compliant = c), (b = b || vw()));
      b &&
        ((a.authParameters.nonce = b),
        (a.forceTokenRefresh = !0),
        (a.skipTokenCache = !0));
    },
    Sx = function (a) {
      var b = a.client_id,
        c = a.cookie_policy,
        d = a.scope,
        e = a.openid_realm,
        f = a.hosted_domain,
        h = a.oidc_spec_compliant,
        k = a.nonce,
        l = Px(a),
        m = {
          authParameters: { response_type: l, scope: d, "openid.realm": e },
          rpcAuthParameters: { response_type: l, scope: d, "openid.realm": e },
          clientId: b,
          crossSubDomains: !0,
          domain: Fx(c),
          idpId: Rw,
        };
      f && ((m.authParameters.hd = f), (m.rpcAuthParameters.hd = f));
      h && ((m.rpcAuthParameters.spec_compliant = h), (k = k || vw()));
      k &&
        ((m.authParameters.nonce = k),
        (m.rpcAuthParameters.nonce = k),
        (m.forceTokenRefresh = !0),
        (m.skipTokenCache = !0));
      _.$c(Vw.concat(Uw), function (n) {
        a[n] && (m.authParameters[n] = a[n]);
      });
      a.authuser !== void 0 &&
        a.authuser !== null &&
        (m.authParameters.authuser = a.authuser);
      typeof a.include_granted_scopes == "boolean" &&
        ((b = new Qx(a.response_type || "token")),
        b.fr() &&
          (m.authParameters.include_granted_scopes = a.include_granted_scopes),
        Rx(b) &&
          ((m.rpcAuthParameters.include_granted_scopes =
            a.include_granted_scopes),
          a.include_granted_scopes === !1 &&
            ((m.forceTokenRefresh = !0), (m.skipTokenCache = !0))));
      typeof a.enable_serial_consent == "boolean" &&
        (m.enableSerialConsent = a.enable_serial_consent);
      typeof a.enable_granular_consent == "boolean" &&
        (m.enableGranularConsent = a.enable_granular_consent);
      a.plugin_name
        ? (m.pluginName = a.plugin_name)
        : (b = _.Sf("auth2/pluginName")) && (m.pluginName = b);
      a.ack_extension_date &&
        ((m.authParameters.ack_extension_date = a.ack_extension_date),
        (m.rpcAuthParameters.ack_extension_date = a.ack_extension_date),
        (m.ackExtensionDate = a.ack_extension_date));
      typeof a.use_fedcm === "boolean" && (m.useFedCm = a.use_fedcm);
      return m;
    },
    Px = function (a) {
      a = new Qx(a.response_type || "token");
      var b = [];
      Rx(a) && b.push("token");
      Tx(a, "id_token") && b.push("id_token");
      b.length == 0 && (b = ["token", "id_token"]);
      return b.join(" ");
    },
    Ux = ["permission", "id_token"],
    Vx = /(^|[^_])token/,
    Qx = function (a) {
      this.cs = [];
      this.UH(a);
    };
  Qx.prototype.UH = function (a) {
    a
      ? ((a.indexOf("permission") >= 0 || a.match(Vx)) &&
          this.cs.push("permission"),
        a.indexOf("id_token") >= 0 && this.cs.push("id_token"),
        a.indexOf("code") >= 0 && this.cs.push("code"))
      : (this.cs = Ux);
  };
  Qx.prototype.fr = function () {
    return Tx(this, "code");
  };
  var Rx = function (a) {
    return Tx(a, "permission");
  };
  Qx.prototype.toString = function () {
    return this.cs.join(" ");
  };
  var Tx = function (a, b) {
    var c = !1;
    _.$c(a.cs, function (d) {
      d == b && (c = !0);
    });
    return c;
  };
  var Xx = function (a, b, c) {
      this.gp = b;
      this.tca = a;
      for (var d in a) a.hasOwnProperty(d) && Wx(this, d);
      if (c && c.length)
        for (a = 0; a < c.length; a++) this[c[a]] = this.gp[c[a]];
    },
    Wx = function (a, b) {
      a[b] = function () {
        return a.tca[b].apply(a.gp, arguments);
      };
    };
  Xx.prototype.then = function (a, b, c) {
    var d = this;
    return _.kl().then(function () {
      return Yx(d.gp, a, b, c);
    });
  };
  _.Qk(Xx);
  var Bx, Zx, ay;
  Bx = null;
  _.$x = function () {
    return Bx ? Zx() : null;
  };
  Zx = function () {
    return new Xx(ay.prototype, Bx, ["currentUser", "isSignedIn"]);
  };
  ay = function (a) {
    delete a.include_granted_scopes;
    this.Na = Ox(a);
    this.h7 = a.cookie_policy;
    this.faa = !!a.scope;
    (this.HA = a.fetch_basic_profile !== !1) &&
      (this.Na.authParameters.scope = by(this, "openid profile email"));
    this.Na.supportBlocked3PCookies = zx(a.use_fedcm);
    this.Zu = a.hosted_domain;
    this.Uga = a.ux_mode || "popup";
    this.UB = a.redirect_uri || null;
    this.So();
  };
  ay.prototype.So = function () {
    this.currentUser = new nx(new Ax(null));
    this.isSignedIn = new nx(!1);
    this.De = new _.pw(this.Na);
    this.MA = this.tr = null;
    this.qba = new _.gl(function (a, b) {
      this.tr = a;
      this.MA = b;
    }, this);
    this.xB = {};
    this.pv = !0;
    cy(this);
    this.De.start();
  };
  var cy = function (a) {
      a.De.addEventListener("error", function (b) {
        a.pv &&
          a.tr &&
          ((a.pv = !1),
          a.MA({ error: b.error, details: b.details }),
          (a.tr = null),
          (a.MA = null));
      });
      a.De.addEventListener("authResult", function (b) {
        b && b.authResult && a.Kf(b);
        a.De.Bu()(b);
      });
      a.De.addEventListener("tokenReady", function (b) {
        var c = new Ax(b.response);
        if (a.Zu && a.Zu != c.EG())
          a.Kf({
            type: "tokenFailed",
            reason:
              "Account domain does not match hosted_domain specified by gapi.auth2.init.",
            accountDomain: c.EG(),
            expectedDomain: a.Zu,
          });
        else {
          a.currentUser.get().update(c);
          var d = a.currentUser;
          d.uc.notify(d.Ca);
          a.isSignedIn.set(!0);
          c = c.rG();
          (d = _.Gx(a.h7)) &&
            c &&
            _.ej.set(
              [
                "G_AUTHUSER_",
                window.location.protocol === "https:" && d.uf ? "S" : "H",
                d.aj,
              ].join(""),
              c,
              { domain: d.domain, secure: d.isSecure }
            );
          _.Pw(b.response);
          a.Kf(b);
        }
      });
      a.De.addEventListener("noSessionBound", function (b) {
        a.pv && b.autoOpenAuthUrl
          ? ((a.pv = !1),
            fx(a.De).select(function (c) {
              if (c && c.login_hint) {
                var d = a.De;
                _.hw(d, d.nD, [c.login_hint, !0]);
              } else a.currentUser.set(new Ax(null)), a.isSignedIn.set(!1), _.Qw(), a.Kf(b);
            }))
          : (a.currentUser.set(new Ax(null)),
            a.isSignedIn.set(!1),
            _.Qw(),
            a.Kf(b));
      });
      a.De.addEventListener("tokenFailed", function (b) {
        a.Kf(b);
      });
      a.De.addEventListener("userLoggedOut", function (b) {
        a.currentUser.get().xl();
        var c = a.currentUser;
        c.uc.notify(c.Ca);
        a.isSignedIn.set(!1);
        _.Qw();
        a.Kf(b);
      });
    },
    Yx = function (a, b, c, d) {
      return a.qba.then(
        function (e) {
          if (b) return b(e.S9);
        },
        c,
        d
      );
    };
  ay.prototype.Kf = function (a) {
    if (a) {
      this.pv = !1;
      var b = a.type || "";
      if (this.xB[b]) this.xB[b](a);
      this.tr && (this.tr({ S9: this }), (this.MA = this.tr = null));
    }
  };
  var dy = function (a, b) {
      _.wb(b, function (c, d) {
        a.xB[d] = function (e) {
          a.xB = {};
          c(e);
        };
      });
    },
    Ex = function (a, b, c, d) {
      d = _.Nk(d);
      a.Zu && (d.hd = a.Zu);
      var e = d.ux_mode || a.Uga;
      delete d.ux_mode;
      delete d.app_package_name;
      var f = {
        sessionMeta: { extraQueryParams: d },
        responseType: "permission id_token",
      };
      e == "redirect"
        ? (d.redirect_uri ||
            (d.redirect_uri = a.UB || wx() + window.location.pathname),
          ey(a, f))
        : (delete d.redirect_uri,
          fy(a, f),
          dy(a, {
            authResult: function (h) {
              h.authResult && h.authResult.error
                ? c(h.authResult)
                : dy(a, {
                    tokenReady: function () {
                      b(a.currentUser.get());
                    },
                    tokenFailed: c,
                  });
            },
          }));
    };
  ay.prototype.wl = function (a) {
    return new _.gl(function (b, c) {
      var d = new qx(a);
      this.CH = d.Ku() ? !0 : !1;
      this.HA
        ? ((d.Na.fetch_basic_profile = !0), rx(d, "email profile openid"))
        : (d.Na.fetch_basic_profile = !1);
      var e = by(this, d.Ku());
      d.j_(e);
      Ex(this, b, c, d.get());
    }, this);
  };
  ay.prototype.Ou = function (a) {
    var b = a || {};
    this.CH = !!b.scope;
    a = by(this, b.scope);
    if (a == "") return _.ll({ error: "Missing required parameter: scope" });
    var c = { scope: a, access_type: "offline", include_granted_scopes: !0 };
    _.$c(Xw, function (d) {
      b[d] != null && (c[d] = b[d]);
    });
    c.hasOwnProperty("prompt") ||
      c.hasOwnProperty("approval_prompt") ||
      (c.prompt = "consent");
    b.redirect_uri == "postmessage" || b.redirect_uri == void 0
      ? (a = gy(this, c))
      : ((c.redirect_uri = b.redirect_uri),
        ey(this, {
          sessionMeta: { extraQueryParams: c },
          responseType: "code id_token",
        }),
        (a = _.kl({ message: "Redirecting to IDP." })));
    return a;
  };
  var gy = function (a, b) {
      b.origin = wx();
      delete b.redirect_uri;
      fy(a, {
        sessionMeta: { extraQueryParams: b },
        responseType: "code permission id_token",
      });
      return new _.gl(function (c, d) {
        dy(this, {
          authResult: function (e) {
            (e = e && e.authResult) && e.code
              ? c({ code: e.code })
              : d(e && e.error ? e : { error: "unknown_error" });
          },
        });
      }, a);
    },
    fy = function (a, b) {
      vx(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
      a = a.De;
      var c = sx();
      a.An && _.sv() ? Kw(a, b) : Iw(a, c, b);
    },
    ey = function (a, b) {
      vx(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
      a = a.De;
      b = b || {};
      a.An && _.sv()
        ? ((a.UB = b.sessionMeta.extraQueryParams.redirect_uri), Kw(a, b))
        : window.location.assign(Gw(a, b.sessionMeta, b.responseType));
    };
  ay.prototype.xl = function (a) {
    var b = a || !1;
    return new _.gl(function (c) {
      yw(this.De, b, function () {
        c();
      });
    }, this);
  };
  ay.prototype.oT = function () {
    return this.Na.authParameters.scope;
  };
  var by = function (a, b) {
    a = a.oT();
    b = uw(b ? b.split(" ") : [], a ? a.split(" ") : []);
    _.Mk(b);
    return b.join(" ");
  };
  ay.prototype.dK = function () {
    var a = this;
    return new _.gl(function (b, c) {
      dy(a, {
        noSessionBound: c,
        tokenFailed: c,
        userLoggedOut: c,
        tokenReady: function (d) {
          b(d.response);
        },
      });
      a.De.GS();
    });
  };
  ay.prototype.yP = function (a, b, c, d) {
    if ((a = typeof a === "string" ? document.getElementById(a) : a)) {
      var e = this;
      _.qk(a, "click", function () {
        var f = b;
        typeof b == "function" && (f = b());
        e.wl(f).then(
          function (h) {
            c && c(h);
          },
          function (h) {
            d && d(h);
          }
        );
      });
    } else
      d &&
        d({
          error:
            "Could not attach click handler to the element. Reason: element not found.",
        });
  };
  ay.prototype.disconnect = function () {
    return new _.gl(function (a) {
      this.De.revoke(function () {
        a();
      });
    }, this);
  };
  ay.prototype.attachClickHandler = ay.prototype.yP;
  var hy;
  _.gl.prototype["catch"] = _.gl.prototype.Qw;
  hy = null;
  _.iy = function (a) {
    yx();
    a = Lx(a);
    if (Bx) {
      if (_.bv(a, hy || {})) return Zx();
      throw new ax(
        "gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init()."
      );
    }
    Mx(a, a.fetch_basic_profile !== !1);
    ux();
    hy = a;
    Bx = new ay(a);
    _.If.ga = 1;
    return Zx();
  };
  var ky, my, jy, oy, ny, py;
  _.ly = function (a, b) {
    yx();
    ux();
    a = Lx(a);
    Mx(a);
    var c = Sx(a);
    c.supportBlocked3PCookies = zx(a.use_fedcm);
    var d = new _.rw(c);
    a.prompt == "none"
      ? jy(d, a, function (e) {
          e.status = e.error
            ? { signed_in: !1, method: null, google_logged_in: !1 }
            : { signed_in: !0, method: "AUTO", google_logged_in: !0 };
          b(e);
        })
      : ky(d, a, function (e) {
          if (e.error)
            e.status = { signed_in: !1, method: null, google_logged_in: !1 };
          else {
            var f = e.access_token || e.id_token;
            e.status = {
              signed_in: !!f,
              method: "PROMPT",
              google_logged_in: !!f,
            };
          }
          e["g-oauth-window"] = d.gY.Ei;
          b(e);
        });
  };
  ky = function (a, b, c) {
    var d = new Qx(b.response_type);
    c = my(a, d, c);
    var e = { responseType: d.toString() };
    vx(e, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], b.gsiwebsdk || "2");
    d.fr() &&
      vx(
        e,
        ["sessionMeta", "extraQueryParams", "access_type"],
        b.access_type || "offline"
      );
    b.redirect_uri &&
      vx(
        e,
        ["sessionMeta", "extraQueryParams", "redirect_uri"],
        b.redirect_uri
      );
    b.state && vx(e, ["sessionMeta", "extraQueryParams", "state"], b.state);
    b = sx();
    a.Nk
      ? c({
          authResult: {
            error: "idpiframe_initialization_failed",
            details: a.xo().error,
          },
        })
      : ((a.Jn = c), a.An && _.sv() ? Kw(a, e) : Iw(a, b, e));
  };
  my = function (a, b, c) {
    if (Rx(b)) {
      var d = ny(c);
      return function (e) {
        e && e.authResult && !e.authResult.error
          ? a.Bu(function (f) {
              f && !f.error
                ? ((f = _.Nk(f)), b.fr() && (f.code = e.authResult.code), d(f))
                : d(f ? f : { error: "unknown_error" });
            })(e)
          : d(e && e.authResult ? e.authResult : { error: "unknown_error" });
      };
    }
    return function (e) {
      e && e.authResult && !e.authResult.error
        ? c(_.Nk(e.authResult))
        : c(e && e.authResult ? e.authResult : { error: "unknown_error" });
    };
  };
  jy = function (a, b, c) {
    if (new Qx(b.response_type).fr() && b.access_type == "offline")
      c({ error: "immediate_failed", error_subtype: "access_denied" });
    else {
      var d = ny(c);
      b.login_hint
        ? a.eG(b.login_hint, function (e) {
            e
              ? oy(a, b, e, d)
              : c({
                  error: "immediate_failed",
                  error_subtype: "access_denied",
                });
          })
        : b.authuser !== void 0 && b.authuser !== null
        ? hx(a, b.authuser).select(function (e) {
            e && e.login_hint
              ? oy(a, b, e.login_hint, d)
              : d({
                  error: "immediate_failed",
                  error_subtype: "access_denied",
                });
          })
        : a.uu(function (e) {
            e && e.hint
              ? oy(a, b, e.hint, d)
              : e && e.disabled
              ? d({ error: "immediate_failed", error_subtype: "no_user_bound" })
              : (b.session_selection == "first_valid" ? gx(a) : fx(a)).select(
                  function (f) {
                    f && f.login_hint
                      ? oy(a, b, f.login_hint, d)
                      : d({
                          error: "immediate_failed",
                          error_subtype: "no_user_bound",
                        });
                  }
                );
          });
    }
  };
  oy = function (a, b, c, d) {
    b = new Qx(b.response_type);
    var e = 0,
      f = {},
      h = function (k) {
        !k || k.error ? d(k) : (e--, _.Bb(f, k), e == 0 && d(f));
      };
    (Rx(b) || Tx(b, "id_token")) && e++;
    b.fr() && e++;
    (Rx(b) || Tx(b, "id_token")) && _.sw(a, c, h);
    b.fr() && Lw(a, c, h);
  };
  ny = function (a) {
    return function (b) {
      if (!b || b.error) _.Qw(), b ? a(b) : a({ error: "unknown_error" });
      else {
        if (b.access_token) {
          var c = _.Nk(b);
          py(c);
          delete c.id_token;
          delete c.code;
          _.Pw(c);
        }
        a(b);
      }
    };
  };
  py = function (a) {
    _.$c(Yw, function (b) {
      delete a[b];
    });
  };
  _.r("gapi.auth2.init", _.iy);
  _.r("gapi.auth2.authorize", function (a, b) {
    if (Bx != null)
      throw new ax(
        "gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters)."
      );
    _.ly(a, function (c) {
      py(c);
      b(c);
    });
  });
  _.r("gapi.auth2._gt", function () {
    return _.tj();
  });
  _.r("gapi.auth2.enableDebugLogs", function (a) {
    a = a !== !1;
    _.cv = a != "0" && !!a;
  });
  _.r("gapi.auth2.getAuthInstance", _.$x);
  _.r("gapi.auth2.BasicProfile", Cx);
  _.r("gapi.auth2.BasicProfile.prototype.getId", Cx.prototype.getId);
  _.r("gapi.auth2.BasicProfile.prototype.getName", Cx.prototype.Cg);
  _.r("gapi.auth2.BasicProfile.prototype.getGivenName", Cx.prototype.Y8);
  _.r("gapi.auth2.BasicProfile.prototype.getFamilyName", Cx.prototype.T8);
  _.r("gapi.auth2.BasicProfile.prototype.getImageUrl", Cx.prototype.g9);
  _.r("gapi.auth2.BasicProfile.prototype.getEmail", Cx.prototype.oo);
  _.r("gapi.auth2.GoogleAuth", ay);
  _.r("gapi.auth2.GoogleAuth.prototype.attachClickHandler", ay.prototype.yP);
  _.r("gapi.auth2.GoogleAuth.prototype.disconnect", ay.prototype.disconnect);
  _.r("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", ay.prototype.Ou);
  _.r("gapi.auth2.GoogleAuth.prototype.signIn", ay.prototype.wl);
  _.r("gapi.auth2.GoogleAuth.prototype.signOut", ay.prototype.xl);
  _.r("gapi.auth2.GoogleAuth.prototype.getInitialScopes", ay.prototype.oT);
  _.r("gapi.auth2.GoogleUser", Ax);
  _.r("gapi.auth2.GoogleUser.prototype.grant", Ax.prototype.U9);
  _.r("gapi.auth2.GoogleUser.prototype.getId", Ax.prototype.getId);
  _.r("gapi.auth2.GoogleUser.prototype.isSignedIn", Ax.prototype.Jg);
  _.r("gapi.auth2.GoogleUser.prototype.getAuthResponse", Ax.prototype.jm);
  _.r("gapi.auth2.GoogleUser.prototype.getBasicProfile", Ax.prototype.z8);
  _.r("gapi.auth2.GoogleUser.prototype.getGrantedScopes", Ax.prototype.a9);
  _.r("gapi.auth2.GoogleUser.prototype.getHostedDomain", Ax.prototype.EG);
  _.r("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", Ax.prototype.Ou);
  _.r("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", Ax.prototype.oA);
  _.r("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", Ax.prototype.dK);
  _.r("gapi.auth2.LiveValue", nx);
  _.r("gapi.auth2.LiveValue.prototype.listen", nx.prototype.qa);
  _.r("gapi.auth2.LiveValue.prototype.get", nx.prototype.get);
  _.r("gapi.auth2.SigninOptionsBuilder", qx);
  _.r(
    "gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName",
    qx.prototype.x8
  );
  _.r(
    "gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName",
    qx.prototype.cfa
  );
  _.r("gapi.auth2.SigninOptionsBuilder.prototype.getScope", qx.prototype.Ku);
  _.r("gapi.auth2.SigninOptionsBuilder.prototype.setScope", qx.prototype.j_);
  _.r("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", qx.prototype.z9);
  _.r("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", qx.prototype.zfa);
  _.r("gapi.auth2.SigninOptionsBuilder.prototype.get", qx.prototype.get);
  _.jg = _.jg || {};
  (function () {
    function a(b) {
      var c = "";
      if (b.nodeType == 3 || b.nodeType == 4) c = b.nodeValue;
      else if (b.innerText) c = b.innerText;
      else if (b.innerHTML) c = b.innerHTML;
      else if (b.firstChild) {
        c = [];
        for (b = b.firstChild; b; b = b.nextSibling) c.push(a(b));
        c = c.join("");
      }
      return c;
    }
    _.jg.createElement = function (b) {
      if (!document.body || document.body.namespaceURI)
        try {
          var c = document.createElementNS("http://www.w3.org/1999/xhtml", b);
        } catch (d) {}
      return c || document.createElement(b);
    };
    _.jg.zQ = function (b) {
      var c = _.jg.createElement("iframe");
      try {
        var d = ["<", "iframe"],
          e = b || {},
          f;
        for (f in e)
          e.hasOwnProperty(f) &&
            (d.push(" "),
            d.push(f),
            d.push('="'),
            d.push(_.jg.PF(e[f])),
            d.push('"'));
        d.push("></");
        d.push("iframe");
        d.push(">");
        var h = _.jg.createElement(d.join(""));
        h &&
          (!c ||
            (h.tagName == c.tagName && h.namespaceURI == c.namespaceURI)) &&
          (c = h);
      } catch (l) {}
      d = c;
      b = b || {};
      for (var k in b) b.hasOwnProperty(k) && (d[k] = b[k]);
      return c;
    };
    _.jg.US = function () {
      if (document.body) return document.body;
      try {
        var b = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "body"
        );
        if (b && b.length == 1) return b[0];
      } catch (c) {}
      return document.documentElement || document;
    };
    _.jg.Qpa = function (b) {
      return a(b);
    };
  })();
  _.Lh = (window.gapi && window.gapi.util) || {};
  _.Lh = _.Lh = {};
  _.Lh.getOrigin = function (a) {
    return _.Nh(a);
  };
  _.Xy = function (a) {
    if (a.indexOf("GCSC") !== 0) return null;
    var b = { Dj: !1 };
    a = a.substr(4);
    if (!a) return b;
    var c = a.charAt(0);
    a = a.substr(1);
    var d = a.lastIndexOf("_");
    if (d == -1) return b;
    var e = _.Vy(a.substr(d + 1));
    if (e == null) return b;
    a = a.substring(0, d);
    if (a.charAt(0) !== "_") return b;
    d = c === "E" && e.uf;
    return (!d && (c !== "U" || e.uf)) || (d && !_.Wy)
      ? b
      : { Dj: !0, uf: d, V6: a.substr(1), domain: e.domain, aj: e.aj };
  };
  _.Yy = function (a, b) {
    this.Wf = a;
    a = b || {};
    this.Vba = Number(a.maxAge) || 0;
    this.je = a.domain;
    this.Xm = a.path;
    this.Jea = !!a.secure;
  };
  _.Yy.prototype.read = function () {
    for (
      var a = this.Wf + "=", b = document.cookie.split(/;\s*/), c = 0;
      c < b.length;
      ++c
    ) {
      var d = b[c];
      if (d.indexOf(a) == 0) return d.substr(a.length);
    }
  };
  _.Yy.prototype.write = function (a, b) {
    if (!Zy.test(this.Wf)) throw "Invalid cookie name";
    if (!$y.test(a)) throw "Invalid cookie value";
    a = this.Wf + "=" + a;
    this.je && (a += ";domain=" + this.je);
    this.Xm && (a += ";path=" + this.Xm);
    b = typeof b === "number" ? b : this.Vba;
    if (b >= 0) {
      var c = new Date();
      c.setSeconds(c.getSeconds() + b);
      a += ";expires=" + c.toUTCString();
    }
    this.Jea && (a += ";secure");
    document.cookie = a;
    return !0;
  };
  _.Yy.prototype.clear = function () {
    this.write("", 0);
  };
  var $y = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
    Zy = /^[A-Z_][A-Z0-9_]{0,63}$/;
  _.Yy.iterate = function (a) {
    for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
      var d = b[c].split("="),
        e = d.shift();
      a(e, d.join("="));
    }
  };
  _.az = function (a) {
    this.Wd = a;
  };
  _.az.prototype.read = function () {
    if (bz.hasOwnProperty(this.Wd)) return bz[this.Wd];
  };
  _.az.prototype.write = function (a) {
    bz[this.Wd] = a;
    return !0;
  };
  _.az.prototype.clear = function () {
    delete bz[this.Wd];
  };
  var bz = {};
  _.az.iterate = function (a) {
    for (var b in bz) bz.hasOwnProperty(b) && a(b, bz[b]);
  };
  var cz = function () {
      this.Ca = null;
      this.key = function () {
        return null;
      };
      this.getItem = function () {
        return this.Ca;
      };
      this.setItem = function (a, b) {
        this.Ca = b;
        this.length = 1;
      };
      this.removeItem = function () {
        this.clear();
      };
      this.clear = function () {
        this.Ca = null;
        this.length = 0;
      };
      this.length = 0;
    },
    dz = function (a) {
      try {
        var b = a || window.sessionStorage;
        if (!b) return !1;
        b.setItem(
          "gapi.sessionStorageTest",
          "gapi.sessionStorageTest" + b.length
        );
        b.removeItem("gapi.sessionStorageTest");
        return !0;
      } catch (c) {
        return !1;
      }
    },
    ez = function (a, b) {
      this.Wf = a;
      this.ZM = dz(b) ? b || window.sessionStorage : new cz();
    };
  ez.prototype.read = function () {
    return this.ZM.getItem(this.Wf);
  };
  ez.prototype.write = function (a) {
    try {
      this.ZM.setItem(this.Wf, a);
    } catch (b) {
      return !1;
    }
    return !0;
  };
  ez.prototype.clear = function () {
    this.ZM.removeItem(this.Wf);
  };
  ez.iterate = function (a) {
    if (dz())
      for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
        var d = window.sessionStorage.key(b);
        a(d, window.sessionStorage[d]);
      }
  };
  _.Wy = window.location.protocol === "https:";
  _.fz = _.Wy || window.location.protocol === "http:" ? _.Yy : _.az;
  _.Vy = function (a) {
    var b = a.substr(1),
      c = "",
      d = window.location.hostname;
    if (b !== "") {
      c = parseInt(b, 10);
      if (isNaN(c)) return null;
      b = d.split(".");
      if (b.length < c - 1) return null;
      b.length == c - 1 && (d = "." + d);
    } else d = "";
    return { uf: a.charAt(0) == "S", domain: d, aj: c };
  };
  var gz, hz, kz, lz;
  gz = _.wf();
  hz = _.wf();
  _.iz = _.wf();
  _.jz = _.wf();
  kz =
    "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(
      " "
    );
  lz = function (a) {
    this.aY = a;
    this.NI = null;
  };
  lz.prototype.write = function (a) {
    var b = _.wf(),
      c = _.wf(),
      d = window.decodeURIComponent ? decodeURIComponent : unescape,
      e;
    for (e in a)
      if (_.xf(a, e)) {
        var f = a[e];
        f = f.replace(/\+/g, " ");
        c[e] = d(f);
        b[e] = a[e];
      }
    d = kz.length;
    for (e = 0; e < d; ++e) delete c[kz[e]];
    a = String(a.authuser || 0);
    d = _.wf();
    d[a] = c;
    c = _.Vg(d);
    this.aY.write(c);
    this.NI = b;
  };
  lz.prototype.read = function () {
    return this.NI;
  };
  lz.prototype.clear = function () {
    this.aY.clear();
    this.NI = _.wf();
  };
  _.mz = function (a) {
    return a ? { domain: a.domain, path: "/", secure: a.uf } : null;
  };
  ez.iterate(function (a) {
    var b = _.Xy(a);
    b && b.Dj && (gz[a] = new lz(new ez(a)));
  });
  _.fz.iterate(function (a) {
    gz[a] && (hz[a] = new _.fz(a, _.mz(_.Xy(a))));
  });
  _.fj = function (a, b) {
    var c = _.Gc(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (a == null) return;
      a = a[d[c]];
    }
    return a;
  };
  _.gj = function (a) {
    if (!a || typeof a !== "object") return a;
    if (typeof a.clone === "function") return a.clone();
    if (typeof Map !== "undefined" && a instanceof Map) return new Map(a);
    if (typeof Set !== "undefined" && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    var b = Array.isArray(a)
        ? []
        : typeof ArrayBuffer !== "function" ||
          typeof ArrayBuffer.isView !== "function" ||
          !ArrayBuffer.isView(a) ||
          a instanceof DataView
        ? {}
        : new a.constructor(a.length),
      c;
    for (c in a) b[c] = _.gj(a[c]);
    return b;
  };
  _.hj = function () {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      n = m = 0;
    }
    function b(p) {
      for (var q = h, t = 0; t < 64; t += 4)
        q[t / 4] = (p[t] << 24) | (p[t + 1] << 16) | (p[t + 2] << 8) | p[t + 3];
      for (t = 16; t < 80; t++)
        (p = q[t - 3] ^ q[t - 8] ^ q[t - 14] ^ q[t - 16]),
          (q[t] = ((p << 1) | (p >>> 31)) & 4294967295);
      p = e[0];
      var v = e[1],
        u = e[2],
        w = e[3],
        y = e[4];
      for (t = 0; t < 80; t++) {
        if (t < 40)
          if (t < 20) {
            var D = w ^ (v & (u ^ w));
            var C = 1518500249;
          } else (D = v ^ u ^ w), (C = 1859775393);
        else
          t < 60
            ? ((D = (v & u) | (w & (v | u))), (C = 2400959708))
            : ((D = v ^ u ^ w), (C = 3395469782));
        D =
          ((((p << 5) | (p >>> 27)) & 4294967295) + D + y + C + q[t]) &
          4294967295;
        y = w;
        w = u;
        u = ((v << 30) | (v >>> 2)) & 4294967295;
        v = p;
        p = D;
      }
      e[0] = (e[0] + p) & 4294967295;
      e[1] = (e[1] + v) & 4294967295;
      e[2] = (e[2] + u) & 4294967295;
      e[3] = (e[3] + w) & 4294967295;
      e[4] = (e[4] + y) & 4294967295;
    }
    function c(p, q) {
      if (typeof p === "string") {
        p = unescape(encodeURIComponent(p));
        for (var t = [], v = 0, u = p.length; v < u; ++v)
          t.push(p.charCodeAt(v));
        p = t;
      }
      q || (q = p.length);
      t = 0;
      if (m == 0)
        for (; t + 64 < q; ) b(p.slice(t, t + 64)), (t += 64), (n += 64);
      for (; t < q; )
        if (((f[m++] = p[t++]), n++, m == 64))
          for (m = 0, b(f); t + 64 < q; )
            b(p.slice(t, t + 64)), (t += 64), (n += 64);
    }
    function d() {
      var p = [],
        q = n * 8;
      m < 56 ? c(k, 56 - m) : c(k, 64 - (m - 56));
      for (var t = 63; t >= 56; t--) (f[t] = q & 255), (q >>>= 8);
      b(f);
      for (t = q = 0; t < 5; t++)
        for (var v = 24; v >= 0; v -= 8) p[q++] = (e[t] >> v) & 255;
      return p;
    }
    for (var e = [], f = [], h = [], k = [128], l = 1; l < 64; ++l) k[l] = 0;
    var m, n;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      Yi: function () {
        for (var p = d(), q = "", t = 0; t < p.length; t++)
          q +=
            "0123456789ABCDEF".charAt(Math.floor(p[t] / 16)) +
            "0123456789ABCDEF".charAt(p[t] % 16);
        return q;
      },
    };
  };
  var jj = function (a, b, c) {
      var d = String(_.Sa.location.href);
      return d && a && b ? [b, ij(_.Nh(d), a, c || null)].join(" ") : null;
    },
    ij = function (a, b, c) {
      var d = [],
        e = [];
      if ((Array.isArray(c) ? 2 : 1) == 1)
        return (
          (e = [b, a]),
          _.$c(d, function (k) {
            e.push(k);
          }),
          kj(e.join(" "))
        );
      var f = [],
        h = [];
      _.$c(c, function (k) {
        h.push(k.key);
        f.push(k.value);
      });
      c = Math.floor(new Date().getTime() / 1e3);
      e = f.length == 0 ? [c, b, a] : [f.join(":"), c, b, a];
      _.$c(d, function (k) {
        e.push(k);
      });
      a = kj(e.join(" "));
      a = [c, a];
      h.length == 0 || a.push(h.join(""));
      return a.join("_");
    },
    kj = function (a) {
      var b = _.hj();
      b.update(a);
      return b.Yi().toLowerCase();
    };
  _.lj = {};
  var oj;
  _.mj = function (a) {
    return !!_.lj.FPA_SAMESITE_PHASE2_MOD || !(a === void 0 || !a);
  };
  _.nj = function (a) {
    a = a === void 0 ? !1 : a;
    var b =
      _.Sa.__SAPISID ||
      _.Sa.__APISID ||
      _.Sa.__3PSAPISID ||
      _.Sa.__OVERRIDE_SID;
    _.mj(a) && (b = b || _.Sa.__1PSAPISID);
    if (b) return !0;
    if (typeof document !== "undefined") {
      var c = new _.cj(document);
      b = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID");
      _.mj(a) && (b = b || c.get("__Secure-1PAPISID"));
    }
    return !!b;
  };
  oj = function (a, b, c, d) {
    (a = _.Sa[a]) ||
      typeof document === "undefined" ||
      (a = new _.cj(document).get(b));
    return a ? jj(a, c, d) : null;
  };
  _.pj = function (a, b) {
    b = b === void 0 ? !1 : b;
    var c = _.Nh(String(_.Sa.location.href)),
      d = [];
    if (_.nj(b)) {
      c =
        c.indexOf("https:") == 0 ||
        c.indexOf("chrome-extension:") == 0 ||
        c.indexOf("chrome-untrusted://new-tab-page") == 0 ||
        c.indexOf("moz-extension:") == 0;
      var e = c ? _.Sa.__SAPISID : _.Sa.__APISID;
      e ||
        typeof document === "undefined" ||
        ((e = new _.cj(document)),
        (e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")));
      (e = e ? jj(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
      c &&
        _.mj(b) &&
        ((b = oj("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) &&
          d.push(b),
        (a = oj("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) &&
          d.push(a));
    }
    return d.length == 0 ? null : d.join(" ");
  };
  _.qj = function (a, b) {
    var c = { SAPISIDHASH: !0, SAPISID3PHASH: !0, APISIDHASH: !0 };
    _.mj(b === void 0 ? !1 : b) && (c.SAPISID1PHASH = !0);
    return a &&
      (a.OriginToken ||
        (a.Authorization && c[String(a.Authorization).split(" ")[0]]))
      ? !0
      : !1;
  };
  _.rj = {
    tU: _.qj,
    nba: _.nj,
    rT: function () {
      var a = null;
      _.nj() &&
        ((a = window.__PVT), a == null && (a = new _.cj(document).get("BEAT")));
      return a;
    },
    SS: _.pj,
  };
  var Js, Ks;
  _.Cs = function (a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1;
  };
  _.Ds = function (a, b) {
    this.x = a !== void 0 ? a : 0;
    this.y = b !== void 0 ? b : 0;
  };
  _.g = _.Ds.prototype;
  _.g.clone = function () {
    return new _.Ds(this.x, this.y);
  };
  _.g.equals = function (a) {
    return a instanceof _.Ds && _.Cs(this, a);
  };
  _.g.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  _.g.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  _.g.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  _.g.translate = function (a, b) {
    a instanceof _.Ds
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), typeof b === "number" && (this.y += b));
    return this;
  };
  _.g.scale = function (a, b) {
    this.x *= a;
    this.y *= typeof b === "number" ? b : a;
    return this;
  };
  _.Es = function (a) {
    return a.scrollingElement
      ? a.scrollingElement
      : !_.le && _.We(a)
      ? a.documentElement
      : a.body || a.documentElement;
  };
  _.Fs = function (a) {
    var b = _.Es(a);
    a = a.parentWindow || a.defaultView;
    return new _.Ds(
      a.pageXOffset || b.scrollLeft,
      a.pageYOffset || b.scrollTop
    );
  };
  _.Gs = function (a, b, c, d) {
    return _.Re(a.Rb, b, c, d);
  };
  _.Hs = function (a) {
    if (a instanceof _.ud && a.constructor === _.ud) return a.tY;
    _.Fc(a);
    return "type_error:SafeStyle";
  };
  _.Is = function (a) {
    if (a instanceof _.Bd && a.constructor === _.Bd) return a.sY;
    _.Fc(a);
    return "type_error:SafeStyleSheet";
  };
  Js = function (a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  };
  Ks = function (a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  };
  _.Ls = function (a, b, c) {
    return _.af(document, arguments);
  };
  _.Ms = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  _.g = _.Ms.prototype;
  _.g.Xb = function () {
    return this.right - this.left;
  };
  _.g.Qc = function () {
    return this.bottom - this.top;
  };
  _.g.clone = function () {
    return new _.Ms(this.top, this.right, this.bottom, this.left);
  };
  _.g.contains = function (a) {
    return this && a
      ? a instanceof _.Ms
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  _.g.expand = function (a, b, c, d) {
    _.yc(a)
      ? ((this.top -= a.top),
        (this.right += a.right),
        (this.bottom += a.bottom),
        (this.left -= a.left))
      : ((this.top -= a),
        (this.right += Number(b)),
        (this.bottom += Number(c)),
        (this.left -= Number(d)));
    return this;
  };
  _.g.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  _.g.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  _.g.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  _.g.translate = function (a, b) {
    a instanceof _.Ds
      ? ((this.left += a.x),
        (this.right += a.x),
        (this.top += a.y),
        (this.bottom += a.y))
      : ((this.left += a),
        (this.right += a),
        typeof b === "number" && ((this.top += b), (this.bottom += b)));
    return this;
  };
  _.g.scale = function (a, b) {
    b = typeof b === "number" ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  var Ps, Ns, Ts, Vs;
  _.Os = function (a, b, c) {
    if (typeof b === "string") (b = Ns(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = Ns(c, d);
        f && (c.style[f] = e);
      }
  };
  Ps = {};
  Ns = function (a, b) {
    var c = Ps[b];
    if (!c) {
      var d = Js(b);
      c = d;
      a.style[d] === void 0 &&
        ((d = (_.le ? "Webkit" : _.ke ? "Moz" : _.he ? "ms" : null) + Ks(d)),
        a.style[d] !== void 0 && (c = d));
      Ps[b] = c;
    }
    return c;
  };
  _.Qs = function (a, b) {
    var c = a.style[Js(b)];
    return typeof c !== "undefined" ? c : a.style[Ns(a, b)] || "";
  };
  _.Rs = function (a, b) {
    var c = _.Oe(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ""
      : "";
  };
  _.Ss = function (a, b) {
    return (
      _.Rs(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  };
  Ts = function (a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  };
  _.Ws = function (a, b) {
    b = b || _.Es(document);
    var c = b || _.Es(document);
    var d = _.Us(a),
      e = _.Us(c),
      f = _.Rs(c, "borderLeftWidth");
    var h = _.Rs(c, "borderRightWidth");
    var k = _.Rs(c, "borderTopWidth"),
      l = _.Rs(c, "borderBottomWidth");
    h = new _.Ms(parseFloat(k), parseFloat(h), parseFloat(l), parseFloat(f));
    c == _.Es(document)
      ? ((f = d.x - c.scrollLeft), (d = d.y - c.scrollTop))
      : ((f = d.x - e.x - h.left), (d = d.y - e.y - h.top));
    a = Vs(a);
    e = c.clientHeight - a.height;
    h = c.scrollLeft;
    k = c.scrollTop;
    h += Math.min(f, Math.max(f - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - e, 0));
    c = new _.Ds(h, k);
    b.scrollLeft = c.x;
    b.scrollTop = c.y;
  };
  _.Us = function (a) {
    var b = _.Oe(a),
      c = new _.Ds(0, 0);
    if (a == (b ? _.Oe(b) : document).documentElement) return c;
    a = Ts(a);
    b = _.Fs(_.Pe(b).Rb);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  };
  _.Ys = function (a, b) {
    var c = new _.Ds(0, 0),
      d = _.Ye(_.Oe(a));
    if (!_.fe(d, "parent")) return c;
    do {
      var e = d == b ? _.Us(a) : _.Xs(a);
      c.x += e.x;
      c.y += e.y;
    } while (
      d &&
      d != b &&
      d != d.parent &&
      (a = d.frameElement) &&
      (d = d.parent)
    );
    return c;
  };
  _.Xs = function (a) {
    a = Ts(a);
    return new _.Ds(a.left, a.top);
  };
  _.$s = function (a, b, c) {
    if (b instanceof _.Je) (c = b.height), (b = b.width);
    else if (c == void 0) throw Error("R");
    a.style.width = _.Zs(b, !0);
    a.style.height = _.Zs(c, !0);
  };
  _.Zs = function (a, b) {
    typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
    return a;
  };
  _.at = function (a) {
    var b = Vs;
    if (_.Ss(a, "display") != "none") return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  };
  Vs = function (a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = _.le && !b && !c;
    return (b === void 0 || d) && a.getBoundingClientRect
      ? ((a = Ts(a)), new _.Je(a.right - a.left, a.bottom - a.top))
      : new _.Je(b, c);
  };
  _.bt = function (a, b) {
    a.style.display = b ? "" : "none";
  };
  _.dt = function (a) {
    var b = _.Pe(void 0),
      c = _.Gs(b, "HEAD")[0];
    if (!c) {
      var d = _.Gs(b, "BODY")[0];
      c = b.wa("HEAD");
      d.parentNode.insertBefore(c, d);
    }
    d = b.wa("STYLE");
    var e;
    (e = _.Ie('style[nonce],link[rel="stylesheet"][nonce]')) &&
      d.setAttribute("nonce", e);
    _.ct(d, a);
    b.appendChild(c, d);
  };
  _.ct = function (a, b) {
    b = _.Is(b);
    _.Sa.trustedTypes ? _.lf(a, b) : (a.innerHTML = b);
  };
  _.et = _.ke ? "MozUserSelect" : _.le || _.ie ? "WebkitUserSelect" : null;
  _.Cy = function (a, b) {
    _.Ak.call(this);
    this.Lm = a || 1;
    this.Uw = b || _.Sa;
    this.LP = (0, _.z)(this.xga, this);
    this.cW = _.Jc();
  };
  _.bb(_.Cy, _.Ak);
  _.g = _.Cy.prototype;
  _.g.enabled = !1;
  _.g.Nc = null;
  _.g.setInterval = function (a) {
    this.Lm = a;
    this.Nc && this.enabled
      ? (this.stop(), this.start())
      : this.Nc && this.stop();
  };
  _.g.xga = function () {
    if (this.enabled) {
      var a = _.Jc() - this.cW;
      a > 0 && a < this.Lm * 0.8
        ? (this.Nc = this.Uw.setTimeout(this.LP, this.Lm - a))
        : (this.Nc && (this.Uw.clearTimeout(this.Nc), (this.Nc = null)),
          this.dispatchEvent("tick"),
          this.enabled && (this.stop(), this.start()));
    }
  };
  _.g.start = function () {
    this.enabled = !0;
    this.Nc ||
      ((this.Nc = this.Uw.setTimeout(this.LP, this.Lm)), (this.cW = _.Jc()));
  };
  _.g.stop = function () {
    this.enabled = !1;
    this.Nc && (this.Uw.clearTimeout(this.Nc), (this.Nc = null));
  };
  _.g.va = function () {
    _.Cy.N.va.call(this);
    this.stop();
    delete this.Uw;
  };
  _.Dy = function (a, b, c) {
    if (typeof a === "function") c && (a = (0, _.z)(a, c));
    else if (a && typeof a.handleEvent == "function")
      a = (0, _.z)(a.handleEvent, a);
    else throw Error("Ba");
    return Number(b) > 2147483647 ? -1 : _.Sa.setTimeout(a, b || 0);
  };
  _.Ey = function (a) {
    _.Sa.clearTimeout(a);
  };
  _.nz = function (a) {
    _.Nj.call(this);
    this.Wd = 1;
    this.OB = [];
    this.TB = 0;
    this.eg = [];
    this.ak = {};
    this.k6 = !!a;
  };
  _.bb(_.nz, _.Nj);
  _.g = _.nz.prototype;
  _.g.subscribe = function (a, b, c) {
    var d = this.ak[a];
    d || (d = this.ak[a] = []);
    var e = this.Wd;
    this.eg[e] = a;
    this.eg[e + 1] = b;
    this.eg[e + 2] = c;
    this.Wd = e + 3;
    d.push(e);
    return e;
  };
  _.g.Jw = _.gb(18);
  _.g.unsubscribe = function (a, b, c) {
    if ((a = this.ak[a])) {
      var d = this.eg;
      if (
        (a = a.find(function (e) {
          return d[e + 1] == b && d[e + 2] == c;
        }))
      )
        return this.El(a);
    }
    return !1;
  };
  _.g.El = function (a) {
    var b = this.eg[a];
    if (b) {
      var c = this.ak[b];
      this.TB != 0
        ? (this.OB.push(a), (this.eg[a + 1] = function () {}))
        : (c && _.ub(c, a),
          delete this.eg[a],
          delete this.eg[a + 1],
          delete this.eg[a + 2]);
    }
    return !!b;
  };
  _.g.zp = function (a, b) {
    var c = this.ak[a];
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e];
      if (this.k6)
        for (e = 0; e < c.length; e++) {
          var h = c[e];
          oz(this.eg[h + 1], this.eg[h + 2], d);
        }
      else {
        this.TB++;
        try {
          for (e = 0, f = c.length; e < f && !this.isDisposed(); e++)
            (h = c[e]), this.eg[h + 1].apply(this.eg[h + 2], d);
        } finally {
          if ((this.TB--, this.OB.length > 0 && this.TB == 0))
            for (; (c = this.OB.pop()); ) this.El(c);
        }
      }
      return e != 0;
    }
    return !1;
  };
  var oz = function (a, b, c) {
    _.dl(function () {
      a.apply(b, c);
    });
  };
  _.nz.prototype.clear = function (a) {
    if (a) {
      var b = this.ak[a];
      b && (b.forEach(this.El, this), delete this.ak[a]);
    } else (this.eg.length = 0), (this.ak = {});
  };
  _.nz.prototype.Sb = function (a) {
    if (a) {
      var b = this.ak[a];
      return b ? b.length : 0;
    }
    a = 0;
    for (b in this.ak) a += this.Sb(b);
    return a;
  };
  _.nz.prototype.va = function () {
    _.nz.N.va.call(this);
    this.clear();
    this.OB.length = 0;
  };
  _.pz = function (a) {
    this.Aga = a;
  };
  _.pz.prototype.toString = function () {
    return this.Aga;
  };
  _.qz = function (a) {
    _.Nj.call(this);
    this.ze = new _.nz(a);
    _.Qj(this, this.ze);
  };
  _.bb(_.qz, _.Nj);
  _.g = _.qz.prototype;
  _.g.subscribe = function (a, b, c) {
    return this.ze.subscribe(a.toString(), b, c);
  };
  _.g.Jw = _.gb(17);
  _.g.unsubscribe = function (a, b, c) {
    return this.ze.unsubscribe(a.toString(), b, c);
  };
  _.g.El = function (a) {
    return this.ze.El(a);
  };
  _.g.zp = function (a, b) {
    return this.ze.zp(a.toString(), b);
  };
  _.g.clear = function (a) {
    this.ze.clear(a !== void 0 ? a.toString() : void 0);
  };
  _.g.Sb = function (a) {
    return this.ze.Sb(a !== void 0 ? a.toString() : void 0);
  };
  var rz = function (a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
      _.rb.call(this, c + a[d]);
    },
    sz = function (a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (e == "]") {
          if (b) return !1;
          b = !0;
        } else if (e == "[") {
          if (!b) return !1;
          b = !1;
        } else if (!b && !c.test(e)) return !1;
      }
      return b;
    },
    tz = function (a) {
      return a.replace(_.xd, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
          f = k;
          return l;
        });
        b = _.Pb(d).toString();
        return c + f + b + f + e;
      });
    },
    vz = function (a) {
      if (a instanceof _.Jb)
        return (
          'url("' +
          a.toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") +
          '")'
        );
      if (a instanceof _.Oc) a = _.Pc(a);
      else {
        a = String(a);
        var b = a.replace(_.yd, "$1").replace(_.yd, "$1").replace(_.xd, "url");
        if (_.wd.test(b)) {
          if ((b = !uz.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              e == "'" && c ? (b = !b) : e == '"' && b && (c = !c);
            }
            b = b && c && sz(a);
          }
          a = b ? tz(a) : "zClosurez";
        } else a = "zClosurez";
      }
      if (/[{;}]/.test(a))
        throw new rz("Value does not allow [{;}], got: %s.", [a]);
      return a;
    },
    wz,
    uz,
    yz,
    zz,
    Az,
    Bz,
    Cz;
  _.bb(rz, _.rb);
  rz.prototype.name = "AssertionError";
  wz = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  uz = /\/\*/;
  _.xz = function (a) {
    var b = "",
      c;
    for (c in a)
      if (Object.prototype.hasOwnProperty.call(a, c)) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("n`" + c);
        var d = a[c];
        d != null &&
          ((d = Array.isArray(d) ? d.map(vz).join(" ") : vz(d)),
          (b += c + ":" + d + ";"));
      }
    return b ? new _.ud(b, _.td) : _.vd;
  };
  yz = /^[a-zA-Z0-9-]+$/;
  zz = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0,
  };
  Az = function (a) {
    var b = _.Fd(_.Id),
      c = [],
      d = function (e) {
        Array.isArray(e)
          ? e.forEach(d)
          : ((e = _.Fd(e)), c.push(_.wc(e).toString()));
      };
    a.forEach(d);
    return _.Vb(c.join(_.wc(b).toString()));
  };
  Bz = function (a) {
    return Az(Array.prototype.slice.call(arguments));
  };
  Cz = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0,
  };
  _.Dz = function (a, b) {
    Array.isArray(b) || (b = [b]);
    b = b.map(function (c) {
      return typeof c === "string"
        ? c
        : c.yp + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
    });
    _.Os(a, "transition", b.join(","));
  };
  _.Ez = _.Yc(function () {
    var a = _.bf("DIV"),
      b = _.le ? "-webkit" : _.ke ? "-moz" : _.he ? "-ms" : null,
      c = { transition: "opacity 1s linear" };
    b && (c[b + "-transition"] = "opacity 1s linear");
    c = { style: c };
    if (!yz.test("div")) throw Error("m");
    if ("DIV" in zz) throw Error("m");
    b = void 0;
    var d = "";
    if (c)
      for (h in c)
        if (Object.prototype.hasOwnProperty.call(c, h)) {
          if (!yz.test(h)) throw Error("m");
          var e = c[h];
          if (e != null) {
            var f = h;
            if (e instanceof _.Oc) e = _.Pc(e);
            else if (f.toLowerCase() == "style") {
              if (!_.yc(e)) throw Error("m");
              e instanceof _.ud || (e = _.xz(e));
              e = _.Hs(e);
            } else {
              if (/^on/i.test(f)) throw Error("m");
              if (f.toLowerCase() in Cz)
                if (e instanceof _.Tc) e = _.Uc(e).toString();
                else if (e instanceof _.Jb) e = _.Kb(e);
                else if (typeof e === "string") e = _.Pb(e).toString();
                else throw Error("m");
            }
            f = f + '="' + _.pd(String(e)) + '"';
            d += " " + f;
          }
        }
    var h = "<div" + d;
    b == null ? (b = []) : Array.isArray(b) || (b = [b]);
    wz.div === !0
      ? (h += ">")
      : ((b = Bz(b)), (h += ">" + _.wc(b).toString() + "</div>"));
    h = _.Vb(h);
    _.Ge(a, h);
    return _.Qs(a.firstChild, "transition") != "";
  });
  _.Gz = function () {
    _.Fz = "oauth2relay" + String((2147483647 * (0, _.Th)()) | 0);
  };
  _.Hz = new _.qz();
  _.Iz = new _.pz("oauth");
  _.Gz();
  _.Sf("oauth-flow/client_id");
  var Jz = String(_.Sf("oauth-flow/redirectUri"));
  if (Jz) Jz.replace(/[#][\s\S]*/, "");
  else {
    var Kz = _.Lh.getOrigin(window.location.href);
    _.Sf("oauth-flow/callbackUrl");
    encodeURIComponent(Kz);
  }
  _.Lh.getOrigin(window.location.href);
  var Mz,
    Nz,
    Oz,
    Pz,
    Qz,
    Rz,
    Sz,
    Tz,
    Uz,
    Vz,
    Wz,
    Yz,
    Zz,
    $z,
    aA,
    bA,
    cA,
    dA,
    eA,
    fA,
    gA,
    hA,
    iA,
    jA,
    kA,
    lA,
    mA,
    nA,
    oA,
    pA,
    qA,
    rA,
    sA,
    tA,
    uA,
    vA,
    wA,
    xA,
    yA,
    zA,
    CA,
    BA,
    DA,
    EA,
    FA,
    GA,
    HA,
    IA,
    JA,
    KA,
    LA,
    NA;
  _.Lz = function (a, b) {
    if (_.Hi && !b) return _.Sa.atob(a);
    var c = "";
    _.Ki(a, function (d) {
      c += String.fromCharCode(d);
    });
    return c;
  };
  Mz = function (a) {
    var b = String(a("immediate") || "");
    a = String(a("prompt") || "");
    return b === "true" || a === "none";
  };
  Nz = function (a) {
    return _.Zi("enableMultilogin") && a("cookie_policy") && !Mz(a) ? !0 : !1;
  };
  Qz = function () {
    var a,
      b = null;
    _.fz.iterate(function (c, d) {
      c.indexOf("G_AUTHUSER_") === 0 &&
        ((c = c.substring(11)),
        (c = _.Vy(c)),
        !a || (c.uf && !a.uf) || (c.uf == a.uf && c.aj > a.aj)) &&
        ((a = c), (b = d));
    });
    return { w6: a, authuser: b };
  };
  Rz = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
  Sz = function (a) {
    a = a.toUpperCase();
    for (var b = 0, c = Rz.length; b < c; ++b) {
      var d = a.split(Rz[b]);
      d.length == 2 && d[1] === "" && (a = d[0]);
    }
    a = a.replace(/-/g, "_").toUpperCase();
    a.length > 40 && ((b = new _.Sh()), b.lx(a), (a = b.Yi().toUpperCase()));
    return a;
  };
  Tz = function (a) {
    if (!a) return [];
    a = a.split("=");
    return a[1] ? a[1].split("|") : [];
  };
  Uz = function (a) {
    a = a.split(":");
    return {
      clientId: a[0].split("=")[1],
      afa: Tz(a[1]),
      Hqa: Tz(a[2]),
      Apa: Tz(a[3]),
    };
  };
  Vz = function (a) {
    var b = Qz(),
      c = b.w6;
    b = b.authuser;
    var d = a && Sz(a);
    if (b !== null) {
      var e;
      _.fz.iterate(function (h, k) {
        (h = _.Xy(h)) &&
          h.Dj &&
          ((d && h.V6 != d) || (h.uf == c.uf && h.aj == c.aj && (e = k)));
      });
      if (e) {
        var f = Uz(e);
        a = f && f.afa[Number(b)];
        f = f && f.clientId;
        if (a) return { authuser: b, Ira: a, clientId: f };
      }
    }
    return null;
  };
  Wz = function (a, b) {
    a = _.tj(a);
    if (!a || (!b && a.error)) return null;
    b = Math.floor(new Date().getTime() / 1e3);
    return a.expires_at && b > a.expires_at ? null : a;
  };
  _.Xz = function (a, b) {
    if (b) {
      var c = b;
      var d = a;
    } else typeof a === "string" ? (d = a) : (c = a);
    c ? _.Pw(c, d) : _.Qw(d);
  };
  Yz = function (a) {
    if (!a) return null;
    a !== "single_host_origin" && (a = _.Nh(a));
    var b = window.location.hostname,
      c = b,
      d = _.Wy;
    if (a !== "single_host_origin") {
      c = a.split("://");
      if (c.length == 2) d = c.shift() === "https";
      else return _.Zg.log("WARNING invalid cookie_policy: " + a), null;
      c = c[0];
    }
    if (c.indexOf(":") !== -1) c = b = "";
    else {
      a = "." + c;
      if (b.lastIndexOf(a) !== b.length - a.length)
        return _.Zg.log("Invalid cookie_policy domain: " + c), null;
      c = a;
      b = c.split(".").length - 1;
    }
    return { domain: c, uf: d, aj: b };
  };
  Zz = function (a) {
    var b = Yz(a);
    if (!b) return new _.az("G_USERSTATE_");
    a = ["G_USERSTATE_", _.Wy && b.uf ? "S" : "H", b.aj].join("");
    var c = _.jz[a];
    c ||
      ((c = { LI: 63072e3 }),
      _.Af(_.mz(b), c),
      (c = new _.Yy(a, c)),
      (_.jz[a] = c),
      (b = c.read()),
      typeof b !== "undefined" &&
        b !== null &&
        ((document.cookie =
          a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"),
        c.write(b)));
    return c;
  };
  $z = function (a) {
    var b = Zz(a).read();
    a = _.wf();
    if (b) {
      b = b.split(":");
      for (var c; (c = b.shift()); ) (c = c.split("=")), (a[c[0]] = c[1]);
    }
    return a;
  };
  aA = function (a, b, c) {
    var d = $z(b),
      e = d[a];
    d[a] = "0";
    var f = [];
    _.vn(d, function (k, l) {
      f.push(l + "=" + k);
    });
    var h = f.join(":");
    b = Zz(b);
    h ? b.write(h) : b.clear();
    d[a] !== e && c && c();
  };
  bA = function (a) {
    a = Yz(a.g_user_cookie_policy);
    if (!a || (a.uf && !_.Wy)) a = null;
    else {
      var b = ["G_AUTHUSER_", _.Wy && a.uf ? "S" : "H", a.aj].join(""),
        c = _.iz[b];
      c || ((c = new _.fz(b, _.mz(a))), (_.iz[b] = c));
      a = c;
    }
    _.Tf("googleapis.config/sessionIndex", null);
    a.clear();
  };
  cA = function (a) {
    return Mz(function (b) {
      return a[b];
    });
  };
  dA = 0;
  eA = !1;
  fA = [];
  gA = {};
  hA = {};
  iA = null;
  jA = function (a) {
    var b = _.Fz;
    return function (c) {
      if (
        this.f == b &&
        this.t == _.dh.ko(this.f) &&
        this.origin == _.dh.Do(this.f)
      )
        return a.apply(this, arguments);
    };
  };
  kA = function (a) {
    if (a && !decodeURIComponent(a).startsWith("m;/_/scs/")) throw Error("Ga");
  };
  lA = function (a) {
    var b = _.jg.jh,
      c = b(a).jsh;
    if (c != null) return kA(c), a;
    if ((b = String(b().jsh || _.If.h || "")))
      kA(b),
        (c = (a + "#").indexOf("#")),
        (a =
          a.substr(0, c) +
          (a.substr(0, c).indexOf("?") !== -1 ? "&" : "?") +
          "jsh=" +
          encodeURIComponent(b) +
          a.substr(c));
    return a;
  };
  mA = function () {
    return !!_.Sf("oauth-flow/usegapi");
  };
  nA = function (a, b) {
    mA() ? iA.unregister(a) : _.dh.unregister(a + ":" + b);
  };
  oA = function (a, b, c) {
    mA() ? iA.register(a, c, _.Kn) : _.dh.register(a + ":" + b, jA(c));
  };
  pA = function () {
    Oz.parentNode.removeChild(Oz);
  };
  qA = function (a) {
    var b = Oz;
    _.Dz(b, [
      { yp: "-webkit-transform", duration: 1, timing: "ease", delay: 0 },
    ]);
    _.Dz(b, [{ yp: "transform", duration: 1, timing: "ease", delay: 0 }]);
    _.Dy(function () {
      b.style.webkitTransform = "translate3d(0px," + a + "px,0px)";
      b.style.transform = "translate3d(0px," + a + "px,0px)";
    }, 0);
  };
  rA = function () {
    var a = Pz + 88;
    qA(a);
    Pz = a;
  };
  sA = function () {
    var a = Pz - 88;
    qA(a);
    Pz = a;
  };
  tA = function (a) {
    var b = a ? rA : sA,
      c = a ? sA : rA;
    a = a ? "-" : "";
    Pz = parseInt(a + 88, 10);
    Oz.style.webkitTransform = "translate3d(0px," + a + 88 + "px,0px)";
    Oz.style.transform = "translate3d(0px," + a + 88 + "px,0px)";
    Oz.style.display = "";
    Oz.style.visibility = "visible";
    b();
    _.Dy(c, 4e3);
    _.Dy(pA, 5e3);
  };
  uA = function (a) {
    var b = _.Sf("oauth-flow/toast/position");
    b !== "top" && (b = "bottom");
    var c = document.createElement("div");
    Oz = c;
    c.style.cssText = "position:fixed;left:0px;z-index:1000;width:100%;";
    _.Os(c, "visibility", "hidden");
    _.Os(c, b, "-40px");
    _.Os(c, "height", "128px");
    var d = c;
    if (_.hs()) {
      d = document.createElement("div");
      d.style.cssText = "float:left;position:relative;left:50%;";
      c.appendChild(d);
      var e = document.createElement("div");
      e.style.cssText = "float:left;position:relative;left:-50%";
      d.appendChild(e);
      d = e;
    }
    e = b == "top" ? "-" : "";
    Pz = parseInt(e + 88, 10);
    Oz.style.webkitTransform = "translate3d(0px," + e + 88 + "px,0px)";
    Oz.style.transform = "translate3d(0px," + e + 88 + "px,0px)";
    e = window;
    try {
      for (; e.parent != e && e.parent.document; ) e = e.parent;
    } catch (f) {}
    e = e.document.body;
    try {
      e.insertBefore(c, e.firstChild);
    } catch (f) {}
    _.Hn.openChild({
      url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
      queryParams: { clientId: a.client_id, idToken: a.id_token },
      where: d,
      onRestyle: function () {
        b === "top" ? tA(!0) : tA(!1);
      },
    });
  };
  vA = function (a) {
    var b = _.op(),
      c = b && b.scope;
    b = a && a.scope;
    b = typeof b === "string" ? b.split(" ") : b || [];
    if (c) {
      c = c.split(" ");
      for (var d = 0; d < c.length; ++d) {
        var e = c[d];
        _.tn.call(b, e) == -1 && b.push(e);
      }
      b.length > 0 && (a.scope = b.join(" "));
    }
    return a;
  };
  wA = function (a, b) {
    var c = null;
    a &&
      b &&
      ((c = b.client_id = b.client_id || a.client_id),
      (b.scope = b.scope || a.scope),
      (b.g_user_cookie_policy = a.cookie_policy),
      (b.cookie_policy = b.cookie_policy || a.cookie_policy),
      (b.response_type = b.response_type || a.response_type));
    if (b) {
      b.issued_at ||
        (b.issued_at = String(Math.floor(new Date().getTime() / 1e3)));
      var d = parseInt(b.expires_in, 10) || 86400;
      b.error && (d = _.Sf("oauth-flow/errorMaxAge") || 86400);
      b.expires_in = String(d);
      b.expires_at ||
        (b.expires_at = String(Math.floor(new Date().getTime() / 1e3) + d));
      b._aa || b.error || Vz(c) != null || !cA(a) || (b._aa = "1");
      a = b.status = {};
      a.google_logged_in = !!b.session_state;
      c = a.signed_in = !!b.access_token;
      a.method = c ? (b["g-oauth-window"] ? "PROMPT" : "AUTO") : null;
    }
    return b;
  };
  xA = function (a) {
    a = a && a.id_token;
    if (!a || !a.split(".")[1]) return null;
    a = (a.split(".")[1] + "...").replace(/^((....)+)\.?\.?\.?$/, "$1");
    a = _.Ug(_.Lz(a, !0));
    if (a === !1) throw Error("Ha");
    return a;
  };
  yA = function (a) {
    return (a = xA(a)) ? a.sub : null;
  };
  zA = function (a) {
    a && fA.push(a);
    a = _.Fz;
    var b = document.getElementById(a),
      c = new Date().getTime();
    if (b) {
      if (dA && c - dA < 6e4) return;
      var d = _.dh.ko(a);
      d && (nA("oauth2relayReady", d), nA("oauth2callback", d));
      b.parentNode.removeChild(b);
      if (/Firefox/.test(navigator.userAgent))
        try {
          window.frames[a] = void 0;
        } catch (f) {}
      _.Gz();
      a = _.Fz;
    }
    dA = c;
    var e = String((2147483647 * (0, _.Th)()) | 0);
    b = _.Sf("oauth-flow/proxyUrl") || _.Sf("oauth-flow/relayUrl");
    mA()
      ? (iA = _.Hn.openChild({
          where: _.jg.US(),
          url: b,
          id: a,
          attributes: {
            style: {
              width: "1px",
              height: "1px",
              position: "absolute",
              top: "-100px",
              display: "none",
            },
            "aria-hidden": "true",
          },
          dontclear: !0,
        }))
      : ((b = [
          b,
          "?parent=",
          encodeURIComponent(_.Lh.getOrigin(window.location.href)),
          "#rpctoken=",
          e,
          "&forcesecure=1",
        ].join("")),
        (c = _.jg.US()),
        (d = _.jg.zQ({ name: a, id: a })),
        (d.src = lA(b)),
        (d.style.width = "1px"),
        (d.style.height = "1px"),
        (d.style.position = "absolute"),
        (d.style.top = "-100px"),
        (d.tabIndex = -1),
        d.setAttribute("aria-hidden", "true"),
        c.appendChild(d),
        _.dh.zw(a));
    oA("oauth2relayReady", e, function () {
      nA("oauth2relayReady", e);
      var f = fA;
      if (f !== null) {
        fA = null;
        for (var h = f.length, k = 0; k < h; ++k) f[k]();
      }
    });
    oA("oauth2callback", e, function (f) {
      var h = _.jg.jh;
      h = h(f);
      var k = h.state;
      f = k.replace(/\|.*$/, "");
      f = {}.hasOwnProperty.call(hA, f) ? hA[f] : null;
      h.state = f;
      if (h.state != null) {
        f = gA[k];
        delete gA[k];
        k = (f && f.key) || "token";
        var l = (h = wA(f && f.params, h)),
          m = yA(l);
        if (m) {
          var n = $z(l.cookie_policy);
          m = n[m] == "0" || n[m] == "X";
        } else m = !1;
        !m &&
          l &&
          (" " + (l.scope || "") + " ").indexOf(
            " https://www.googleapis.com/auth/plus.login "
          ) >= 0 &&
          _.Sf("isLoggedIn") &&
          (l && l._aa) === "1" &&
          ((l._aa = "0"), eA || ((eA = !0), uA(l)));
        _.Xz(k, h);
        h = Wz(k);
        if (f) {
          k = f.popup;
          l = f.after_redirect;
          if (k && "keep_open" != l)
            try {
              k.close();
            } catch (p) {}
          f.callback && (f.callback(h), (f.callback = null));
        }
      }
    });
  };
  _.AA = function (a) {
    fA !== null ? zA(a) : a && a();
  };
  CA = function (a, b) {
    var c = BA,
      d = yA(a);
    d &&
      (bA(a),
      aA(d, b, function () {
        if (c) {
          var e = { error: "user_signed_out" };
          e.client_id = a.client_id;
          e.g_user_cookie_policy = a.g_user_cookie_policy;
          e.scope = a.scope;
          e.response_type = a.response_type;
          e.session_state = a.session_state;
          e = wA(null, e);
          c(e);
        }
      }));
  };
  BA = function (a) {
    a || (a = Wz(void 0, !0));
    (a && typeof a === "object") ||
      (a = { error: "invalid_request", error_description: "no callback data" });
    var b = a.error_description;
    b &&
      window.console &&
      (window.console.error(a.error), window.console.error(b));
    a.error || (_.If.drw = null);
    _.Xz(a);
    if ((b = a.authuser))
      _.Sf("googleapis.config/sessionIndex"),
        _.Tf("googleapis.config/sessionIndex", b);
    _.Hz.zp(_.Iz, a);
    return a;
  };
  DA = ["client_id", "cookie_policy", "response_type"];
  EA =
    "client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state".split(
      " "
    );
  FA = function (a) {
    var b = _.Nk(a);
    b.session_state &&
      b.session_state.extraQueryParams &&
      (b.authuser = b.session_state.extraQueryParams.authuser);
    b.session_state = null;
    a.expires_at && (b.expires_at = parseInt(a.expires_at / 1e3).toString());
    a.expires_in && (b.expires_in = a.expires_in.toString());
    a.first_issued_at &&
      ((b.issued_at = parseInt(a.first_issued_at / 1e3).toString()),
      delete b.first_issued_at);
    _.Pw(b);
    return b;
  };
  GA = function (a) {
    if (a.include_granted_scopes === void 0) {
      var b = _.Sf("include_granted_scopes");
      a.include_granted_scopes = !!b;
    }
  };
  HA = function (a) {
    window.console &&
      (typeof window.console.warn === "function"
        ? window.console.warn(a)
        : typeof window.console.log === "function" && window.console.log(a));
  };
  IA = function (a) {
    var b = a || {},
      c = {};
    _.$c(EA, function (d) {
      b[d] != null && (c[d] = b[d]);
    });
    a = _.Sf("googleapis/overrideClientId");
    a != null && (c.client_id = a);
    GA(c);
    typeof b.scope === "string"
      ? (c.scope = b.scope)
      : Array.isArray(b.scope) && (c.scope = b.scope.join(" "));
    b["openid.realm"] != null && (c.openid_realm = b["openid.realm"]);
    b.cookie_policy != null
      ? (c.cookie_policy = b.cookie_policy)
      : b.cookiepolicy != null && (c.cookie_policy = b.cookiepolicy);
    c.login_hint == null && b.user_id != null && (c.login_hint = b.user_id);
    try {
      _.Gx(c.cookie_policy);
    } catch (d) {
      c.cookie_policy &&
        HA(
          "The cookie_policy configuration: '" +
            c.cookie_policy +
            "' is illegal, and thus ignored."
        ),
        delete c.cookie_policy;
    }
    b.hd != null && (c.hosted_domain = b.hd);
    c.prompt == null &&
      (b.immediate == 1 || b.immediate == "true"
        ? (c.prompt = "none")
        : b.approval_prompt == "force" && (c.prompt = "consent"));
    c.prompt == "none" && (c.session_selection = "first_valid");
    c.prompt == "none" && c.access_type == "offline" && delete c.access_type;
    typeof c.authuser === "undefined" &&
      ((a = _.bj()), a != null && (c.authuser = a));
    a = b.redirect_uri || _.Sf("oauth-flow/redirectUri");
    a != null && a != "postmessage" && (c.redirect_uri = a);
    c.gsiwebsdk = "shim";
    return c;
  };
  JA = function (a, b) {
    var c = IA(a),
      d = new _.gl(function (e, f) {
        _.ly(c, function (h) {
          var k = h || {};
          _.$c(DA, function (l) {
            k[l] == null && (k[l] = c[l]);
          });
          !c.include_granted_scopes && a && a.scope && (k.scope = a.scope);
          a && a.state != null && (k.state = a.state);
          k.error
            ? (c.prompt == "none" &&
                k.error == "user_logged_out" &&
                (k.error = "immediate_failed_user_logged_out"),
              f(k))
            : ((h = FA(k)),
              h.authuser != null &&
                _.Tf("googleapis.config/sessionIndex", h.authuser),
              e(h));
        });
      });
    b && d.then(b, b);
    return d;
  };
  KA = _.rj.SS;
  LA = null;
  _.OA = function (a, b) {
    if (a.approvalprompt !== "force") {
      a = _.MA(a);
      a.prompt = "none";
      delete a.redirect_uri;
      delete a.approval_prompt;
      delete a.immediate;
      if ((b = !b))
        LA
          ? (a.client_id !== LA.client_id &&
              window.console &&
              window.console.log &&
              window.console.log(
                "Ignoring mismatched page-level auth param client_id=" +
                  a.client_id
              ),
            (b = !0))
          : ((LA = a), (b = !1));
      b || NA(a);
    }
  };
  _.MA = function (a) {
    var b = a.redirecturi || "postmessage",
      c = (0, _.hd)((a.scope || "").replace(/[\s\xa0]+/g, " "));
    b = {
      client_id: a.clientid,
      redirect_uri: b,
      response_type: "code token id_token gsession",
      scope: c,
    };
    a.approvalprompt && (b.approval_prompt = a.approvalprompt);
    a.state && (b.state = a.state);
    a.openidrealm && (b["openid.realm"] = a.openidrealm);
    c =
      a.accesstype == "offline"
        ? !0
        : (c = a.redirecturi) && c != "postmessage";
    c && (b.access_type = "offline");
    a.requestvisibleactions &&
      (b.request_visible_actions = (0, _.hd)(
        a.requestvisibleactions.replace(/[\s\xa0]+/g, " ")
      ));
    a.after_redirect && (b.after_redirect = a.after_redirect);
    a.cookiepolicy &&
      a.cookiepolicy !== "none" &&
      (b.cookie_policy = a.cookiepolicy);
    typeof a.includegrantedscopes != "undefined" &&
      (b.include_granted_scopes = a.includegrantedscopes);
    a.e && (b.e = a.e);
    (a = a.authuser || _.Sf("googleapis.config/sessionIndex")) &&
      (b.authuser = a);
    (a = _.Sf("useoriginassocialhost")) && (b.use_origin_as_socialhost = a);
    return b;
  };
  NA = function (a) {
    _.Yp("waaf0", "signin", "0");
    JA(a, function (b) {
      _.Yp("waaf1", "signin", "0");
      BA(b);
    });
  };
  _.PA = function (a) {
    a = _.MA(a);
    _.Tf("oauth-flow/authWindowWidth", 445);
    _.Tf("oauth-flow/authWindowHeight", 615);
    NA(a);
  };
  _.QA = function (a) {
    _.Hz.unsubscribe(_.Iz, a);
    _.Hz.subscribe(_.Iz, a);
  };
  var XA, $A;
  _.SA = function (a) {
    return a.cookiepolicy
      ? !0
      : (_.RA(
          "cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."
        ),
        !1);
  };
  _.RA = function (a) {
    window.console &&
      (window.console.error
        ? window.console.error(a)
        : window.console.log && window.console.log(a));
  };
  _.WA = function (a, b) {
    var c = _.op();
    _.Af(a, c);
    c = vA(c);
    if (_.SA(c)) {
      var d = _.TA();
      _.UA(c);
      b
        ? _.Hf(b, "click", function () {
            _.VA(c, d);
          })
        : _.VA(c, d);
    }
  };
  _.TA = function () {
    var a = new XA();
    _.QA(function (b) {
      a.MI &&
        b &&
        (b.access_token && _.Tf("isPlusUser", !0),
        b["g-oauth-window"] &&
          ((a.MI = !1), _.Zg.warn("OTA app install is no longer supported.")));
    });
    return a;
  };
  XA = function () {
    this.MI = !1;
  };
  _.UA = function (a) {
    a = _.YA(a);
    _.ZA(a.callback);
    _.AA(function () {
      _.OA(a);
    });
  };
  _.YA = function (a) {
    $A(a);
    a.redirecturi && delete a.redirecturi;
    Nz(function (b) {
      return a[b];
    }) || (a.authuser = 0);
    return a;
  };
  $A = function (a) {
    /^\s*$/.test(a.scope || "") &&
      (a.scope = "https://www.googleapis.com/auth/plus.login");
  };
  _.ZA = function (a) {
    if (typeof a === "string")
      if (window[a]) a = window[a];
      else {
        _.RA('Callback function named "' + a + '" not found');
        return;
      }
    a && _.QA(a);
  };
  _.VA = function (a, b) {
    b.MI = !0;
    a = _.YA(a);
    _.PA(a);
  };
  _.r("gapi.auth.authorize", JA);
  _.r("gapi.auth.checkSessionState", function (a, b) {
    var c = _.wf();
    c.client_id = a.client_id;
    c.session_state = a.session_state;
    _.AA(function () {
      mA()
        ? iA.send(
            "check_session_state",
            c,
            function (d) {
              b.call(null, d[0]);
            },
            _.Kn
          )
        : _.dh.call(
            _.Fz,
            "check_session_state",
            jA(function (d) {
              b.call(null, d);
            }),
            c.session_state,
            c.client_id
          );
    });
  });
  _.r("gapi.auth.getAuthHeaderValueForFirstParty", KA);
  _.r("gapi.auth.getToken", Wz);
  _.r("gapi.auth.getVersionInfo", function (a, b) {
    _.AA(function () {
      var c = _.pj() || "",
        d = null,
        e = null;
      c && ((e = c.split(" ")), e.length == 2 && (d = e[1]));
      d
        ? mA()
          ? iA.send(
              "get_versioninfo",
              { xapisidHash: d, sessionIndex: b },
              function (f) {
                a(f[0]);
              },
              _.Kn
            )
          : _.dh.call(
              _.Fz,
              "get_versioninfo",
              jA(function (f) {
                a(f);
              }),
              d,
              b
            )
        : a();
    });
  });
  _.r("gapi.auth.init", _.AA);
  _.r("gapi.auth.setToken", _.Xz);
  _.r("gapi.auth.signIn", function (a) {
    _.WA(a);
  });
  _.r("gapi.auth.signOut", function () {
    var a = Wz();
    a && CA(a, a.cookie_policy);
  });
  _.r("gapi.auth.unsafeUnpackIdToken", xA);
  _.r("gapi.auth._pimf", _.OA);
  _.r("gapi.auth._oart", uA);
  _.r("gapi.auth._guss", function (a) {
    return Zz(a).read();
  });
  var aB = _.op();
  aB.clientid &&
    aB.scope &&
    aB.callback &&
    !_.Sf("disableRealtimeCallback") &&
    _.UA(aB);
  var zy = function () {};
  zy.prototype.QP = null;
  zy.prototype.getOptions = function () {
    var a;
    (a = this.QP) || (a = this.QP = {});
    return a;
  };
  var By;
  By = function () {};
  _.bb(By, zy);
  _.Ay = new By();
  _.Oh = (window.googleapis && window.googleapis.server) || {};
  var Uh = function (a) {
      return {
        execute: function (b) {
          var c = {
              method: a.httpMethod || "GET",
              root: a.root,
              path: a.url,
              params: a.urlParams,
              headers: a.headers,
              body: a.body,
            },
            d = window.gapi,
            e = function () {
              var f = d.config.get("client/apiKey"),
                h = d.config.get("client/version");
              try {
                var k = d.config.get("googleapis.config/developerKey"),
                  l = d.config.get("client/apiKey", k);
                d.config.update("client/apiKey", l);
                d.config.update("client/version", "1.0.0-alpha");
                var m = d.client;
                m.request.call(m, c).then(b, b);
              } finally {
                d.config.update("client/apiKey", f),
                  d.config.update("client/version", h);
              }
            };
          d.client ? e() : d.load.call(d, "client", e);
        },
      };
    },
    Vh = function (a, b) {
      return function (c) {
        var d = {};
        c = c.body;
        var e = _.Ug(c),
          f = {};
        if (e && e.length)
          for (var h = e.length, k = 0; k < h; ++k) {
            var l = e[k];
            f[l.id] = l;
          }
        h = b.length;
        for (k = 0; k < h; ++k)
          (l = b[k].id), (d[l] = e && e.length ? f[l] : e);
        a(d, c);
      };
    },
    Wh = function (a) {
      a.transport = {
        name: "googleapis",
        execute: function (b, c) {
          for (var d = [], e = b.length, f = 0; f < e; ++f) {
            var h = b[f],
              k = h.method,
              l = String(k).split(".")[0];
            l =
              _.Sf("googleapis.config/versions/" + k) ||
              _.Sf("googleapis.config/versions/" + l) ||
              "v1";
            d.push({
              jsonrpc: "2.0",
              id: h.id,
              method: k,
              apiVersion: String(l),
              params: h.params,
            });
          }
          b = Uh({
            httpMethod: "POST",
            root: a.transport.root,
            url: "/rpc?pp=0",
            headers: { "Content-Type": "application/json" },
            body: d,
          });
          b.execute.call(b, Vh(c, d));
        },
        root: void 0,
      };
    },
    Xh = function (a) {
      var b = this.method,
        c = this.transport;
      c.execute.call(c, [{ method: b, id: b, params: this.rpc }], function (d) {
        d = d[b];
        d.error || (d = d.data || d.result);
        a(d);
      });
    },
    Zh = function () {
      for (
        var a = Yh,
          b = a.split("."),
          c = function (k) {
            k = k || {};
            k.groupId = k.groupId || "@self";
            k.userId = k.userId || "@viewer";
            k = { method: a, rpc: k || {} };
            Wh(k);
            k.execute = Xh;
            return k;
          },
          d = _.Sa,
          e = b.length,
          f = 0;
        f < e;
        ++f
      ) {
        var h = d[b[f]] || {};
        f + 1 == e && (h = c);
        d = d[b[f]] = h;
      }
      if (b.length > 1 && b[0] != "googleapis")
        for (
          b[0] = "googleapis",
            b[b.length - 1] == "delete" && (b[b.length - 1] = "remove"),
            d = _.Sa,
            e = b.length,
            f = 0;
          f < e;
          ++f
        )
          (h = d[b[f]] || {}), f + 1 == e && (h = c), (d = d[b[f]] = h);
    },
    Yh;
  for (Yh in _.Sf("googleapis.config/methods")) Zh();
  _.r("googleapis.newHttpRequest", function (a) {
    return Uh(a);
  });
  _.r("googleapis.setUrlParameter", function (a, b) {
    if (a !== "trace") throw Error("C");
    _.Tf("client/trace", b);
  });
  _.Li = function (a) {
    return a == null ? "" : String(a);
  };
  _.Mi = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  _.Ni = function (a, b) {
    if (!b) return a;
    var c = a.indexOf("#");
    c < 0 && (c = a.length);
    var d = a.indexOf("?");
    if (d < 0 || d > c) {
      d = c;
      var e = "";
    } else e = a.substring(d + 1, c);
    a = [a.slice(0, d), e, a.slice(c)];
    c = a[1];
    a[1] = b ? (c ? c + "&" + b : b) : c;
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
  };
  _.Oi = function (a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) _.Oi(a, String(b[d]), c);
    else
      b != null &&
        c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))));
  };
  _.Pi = function (a) {
    var b = [],
      c;
    for (c in a) _.Oi(c, a[c], b);
    return b.join("&");
  };
  _.Qi = function (a, b) {
    b = _.Pi(b);
    return _.Ni(a, b);
  };
  var Ej = function (a, b) {
    a = _.jg.zQ({ id: a, name: a });
    a.style.width = "1px";
    a.style.height = "1px";
    a.style.position = "absolute";
    a.style.top = "-100px";
    a.style.display = "none";
    if (window.navigator) {
      var c = window.navigator.userAgent || "";
      var d = window.navigator.product || "";
      c =
        c.indexOf("Opera") != 0 &&
        c.indexOf("WebKit") == -1 &&
        d == "Gecko" &&
        c.indexOf("rv:1.") > 0;
    } else c = !1;
    a.src = c ? "about:blank" : b;
    a.tabIndex = -1;
    typeof a.setAttribute === "function"
      ? a.setAttribute("aria-hidden", "true")
      : (a["aria-hidden"] = "true");
    document.body.appendChild(a);
    c && (a.src = b);
    return a;
  };
  _.rj = {
    tU: _.qj,
    nba: _.nj,
    rT: function () {
      var a = null;
      _.nj() &&
        ((a = window.__PVT), a == null && (a = new _.cj(document).get("BEAT")));
      return a;
    },
    SS: _.pj,
  };
  var Gj, Fj;
  Gj = function () {
    return !!Fj("auth/useFirstPartyAuthV2");
  };
  Fj = function (a) {
    return _.Sf("googleapis.config/" + a);
  };
  _.Hj = function (a, b, c) {
    a = a === void 0 ? {} : a;
    b = b === void 0 ? window.location.href : b;
    c = c === void 0 ? "auto" : c;
    if (c == "none") return a;
    var d = a.Authorization,
      e = a.OriginToken;
    if (!d && !e) {
      (e = _.tj()) &&
        e.access_token &&
        (c == "oauth2" || c == "auto") &&
        (d = String(e.token_type || "Bearer") + " " + e.access_token);
      if ((e = !d))
        e = (!!Fj("auth/useFirstPartyAuth") || c == "1p") && c != "oauth2";
      if (e && _.nj()) {
        if (Gj()) {
          d = Fj("primaryEmail");
          c = Fj("appDomain");
          e = Fj("fogId");
          var f = [];
          d && f.push({ key: "e", value: d });
          c && f.push({ key: "a", value: c });
          e && f.push({ key: "u", value: e });
          d = _.pj(f);
        } else d = _.pj();
        d &&
          ((c = a["X-Goog-AuthUser"]),
          (b = _.bj(b)),
          (b = c || b),
          _.gd(_.Li(b)) &&
            (!Gj() ||
              (Gj() &&
                _.gd(_.Li(Fj("primaryEmail"))) &&
                _.gd(_.Li(Fj("appDomain"))) &&
                _.gd(_.Li(Fj("fogId"))))) &&
            (b = "0"),
          _.gd(_.Li(b)) || (a["X-Goog-AuthUser"] = b));
      }
      d
        ? (a.Authorization = d)
        : Fj("auth/useOriginToken") !== !1 &&
          (e = _.rj.rT()) &&
          (a.OriginToken = e);
    }
    return a;
  };
  _.Ij = (function () {
    function a(n, p, q, t, v) {
      var u = f("proxy");
      if (t || !u) {
        u = f("root");
        var w = f("root-1p") || u;
        u = u || "https://content.googleapis.com";
        w = w || "https://clients6.google.com";
        var y = f("xd3") || "/static/proxy.html";
        u = (t || String(p ? w : u)) + y;
      }
      u = String(u);
      q && (u += (u.indexOf("?") >= 0 ? "&" : "?") + "usegapi=1");
      (p = _.jg.jh().jsh || _.If.h) &&
        (u +=
          (u.indexOf("?") >= 0 ? "&" : "?") + "jsh=" + encodeURIComponent(p));
      u +=
        "#parent=" +
        encodeURIComponent(
          v != null ? String(v) : _.Lh.getOrigin(document.location.href)
        );
      return u + ("&rpctoken=" + n);
    }
    function b(n, p, q, t, v) {
      var u = d(q, t, v);
      k[u] ||
        ((q = Ej(u, p)),
        _.dh.register("ready:" + n, function () {
          _.dh.unregister("ready:" + n);
          if (!l[u]) {
            l[u] = !0;
            var w = m[u];
            m[u] = [];
            for (var y = 0, D = w.length; y < D; ++y) {
              var C = w[y];
              e(C.rpc, C.aea, C.callback);
            }
          }
        }),
        _.dh.zw(u, p),
        (k[u] = q));
    }
    function c(n, p, q) {
      var t = String((2147483647 * _.Aj()) | 0),
        v = a(t, n, p, q);
      _.ah(function () {
        b(t, v, n, p, q);
      });
    }
    function d(n, p, q) {
      n = a("", n, p, q, "");
      q = h[n + p];
      if (!q) {
        q = new _.Sh();
        q.lx(n);
        q = q.Yi().toLowerCase();
        var t = _.Aj();
        q += t;
        h[n + p] = q;
      }
      return "apiproxy" + q;
    }
    function e(n, p, q) {
      var t = void 0,
        v = !1;
      if (n !== "makeHttpRequests")
        throw 'only "makeHttpRequests" RPCs are implemented';
      var u = function (I) {
        if (I) {
          if (
            typeof t != "undefined" &&
            typeof I.root != "undefined" &&
            t != I.root
          )
            throw "all requests in a batch must have the same root URL";
          t = I.root || t;
          v = _.rj.tU(I.headers);
        }
      };
      if (p)
        for (var w = 0, y = p.length; w < y; ++w) {
          var D = p[w];
          D && u(D.params);
        }
      u = !!f("useGapiForXd3");
      var C = d(v, u, t);
      k[C] || c(v, u, t);
      l[C]
        ? _.dh.call(
            C,
            n,
            function (I) {
              if (
                this.f == C &&
                this.t == _.dh.ko(this.f) &&
                this.origin == _.dh.Do(this.f)
              ) {
                var L = _.Ug(I);
                q(L, I);
              }
            },
            p
          )
        : (m[C] || (m[C] = []), m[C].push({ rpc: n, aea: p, callback: q }));
    }
    function f(n) {
      return _.Sf("googleapis.config/" + n);
    }
    var h = {},
      k = {},
      l = {},
      m = {};
    return {
      Moa: function (n, p, q) {
        return _.Hj(n, p, q);
      },
      tn: e,
    };
  })();
  var $h = {
      uha: "Authorization",
      d2: "Content-ID",
      Sha: "Content-Transfer-Encoding",
      Tha: "Content-Type",
      Aia: "Date",
      lla: "OriginToken",
      Nja: "hotrod-board-name",
      Oja: "hotrod-chrome-cpu-model",
      Pja: "hotrod-chrome-processors",
      Tna: "WWW-Authenticate",
      Vna: "X-Ad-Manager-Impersonation",
      Una: "X-Ad-Manager-Debug-Info",
      Wna: "X-ClientDetails",
      Xna: "X-Compass-Routing-Destination",
      aoa: "X-Goog-AuthUser",
      eoa: "X-Goog-Encode-Response-If-Executable",
      Yna: "X-Google-Consent",
      Zna: "X-Google-EOM",
      goa: "X-Goog-Meeting-ABR",
      hoa: "X-Goog-Meeting-Botguardid",
      ioa: "X-Goog-Meeting-ClientInfo",
      joa: "X-Goog-Meeting-ClientVersion",
      koa: "X-Goog-Meeting-Debugid",
      loa: "X-Goog-Meeting-Identifier",
      moa: "X-Goog-Meeting-Interop-Cohorts",
      noa: "X-Goog-Meeting-Interop-Type",
      ooa: "X-Goog-Meeting-OidcIdToken",
      poa: "X-Goog-Meeting-RtcClient",
      qoa: "X-Goog-Meeting-StartSource",
      roa: "X-Goog-Meeting-Token",
      soa: "X-Goog-Meeting-Viewer-Token",
      toa: "X-Goog-PageId",
      voa: "X-Goog-Safety-Content-Type",
      woa: "X-Goog-Safety-Encoding",
      coa: "X-Goog-Drive-Client-Version",
      doa: "X-Goog-Drive-Resource-Keys",
      xoa: "X-HTTP-Method-Override",
      yoa: "X-JavaScript-User-Agent",
      zoa: "X-Origin",
      Aoa: "X-Referer",
      Boa: "X-Requested-With",
      Eoa: "X-Use-HTTP-Status-Code-Override",
      Coa: "X-Server-Timeout",
      foa: "X-Goog-First-Party-Reauth",
      Doa: "X-Server-Token",
      boa: "x-goog-chat-space-id",
      uoa: "x-goog-pan-request-context",
    },
    ai =
      "Accept Accept-Language Authorization Cache-Control cast-device-capabilities Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date developer-token EES-S7E-MODE financial-institution-id GData-Version google-cloud-resource-prefix hotrod-board-name hotrod-chrome-cpu-model hotrod-chrome-processors Host If-Match If-Modified-Since If-None-Match If-Unmodified-Since linked-customer-id login-customer-id MIME-Version Origin OriginToken Pragma Range request-id Slug Transfer-Encoding Want-Digest X-Ad-Manager-Impersonation X-Ad-Manager-Debug-Info x-alkali-account-key x-alkali-application-key x-alkali-auth-apps-namespace x-alkali-auth-entities-namespace x-alkali-auth-entity x-alkali-client-locale x-chrome-connected x-framework-xsrf-token X-Client-Data X-Client-Pctx X-ClientDetails X-Client-Version x-debug-settings-metadata X-Firebase-Locale X-GData-Client X-GData-Key X-Goog-AuthUser X-Goog-PageId X-Goog-Encode-Response-If-Executable X-GoogApps-Allowed-Domains X-Goog-AdX-Buyer-Impersonation X-Goog-Api-Client X-Goog-Api-Key X-Google-EOM X-Goog-Visibilities X-Goog-Correlation-Id X-Goog-Request-Info X-Goog-Request-Reason X-Goog-Request-Time X-Goog-Experiments x-goog-ext-124712974-jspb x-goog-ext-251363160-jspb x-goog-ext-259736195-jspb x-goog-ext-467253834-jspb x-goog-ext-472780938-jspb x-goog-ext-477772811-jspb x-goog-ext-275505673-bin x-goog-ext-353267353-bin x-goog-ext-353267353-jspb x-goog-ext-496773601-bin x-goog-ext-328800237-bin x-goog-ext-359275022-bin x-goog-ext-202735639-bin x-goog-ext-223435598-bin x-goog-ext-174067345-bin x-goog-ext-525001598-jspb x-goog-ext-519733851-bin X-Goog-Firebase-Installations-Auth x-goog-greenenergyuserappservice-metadata X-Firebase-Client X-Firebase-Client-Log-Type X-Firebase-GMPID X-Firebase-Auth-Token X-Firebase-AppCheck X-Firebase-Token X-Goog-Drive-Client-Version X-Goog-Drive-Resource-Keys x-goog-iam-authority-selector x-goog-iam-authorization-token x-goog-request-params x-goog-sherlog-context X-Goog-Sn-Metadata X-Goog-Sn-PatientId X-Goog-Spatula X-Goog-Travel-Bgr X-Goog-Travel-Settings X-Goog-Upload-Command X-Goog-Upload-Content-Disposition X-Goog-Upload-Content-Length X-Goog-Upload-Content-Type X-Goog-Upload-File-Name X-Goog-Upload-Header-Content-Encoding X-Goog-Upload-Header-Content-Length X-Goog-Upload-Header-Content-Type X-Goog-Upload-Header-Transfer-Encoding X-Goog-Upload-Offset X-Goog-Upload-Protocol X-Goog-User-Project X-Goog-Visitor-Id X-Goog-FieldMask X-Google-Project-Override x-goog-maps-api-salt x-goog-maps-api-signature x-goog-maps-client-id x-goog-maps-channel-id x-goog-maps-solution-id x-goog-spanner-database-role X-HTTP-Method-Override X-JavaScript-User-Agent X-Pan-Versionid X-Proxied-User-IP X-Origin X-Referer X-Requested-With X-Stadia-Client-Context X-Upload-Content-Length X-Upload-Content-Type X-Use-Alt-Service X-Use-HTTP-Status-Code-Override X-Ios-Bundle-Identifier X-Android-Package X-Android-Cert X-Goog-Maps-Ios-Uuid X-Goog-Maps-Android-Uuid X-Ariane-Xsrf-Token X-Earth-Engine-App-ID-Token X-Earth-Engine-Computation-Profile X-Earth-Engine-Computation-Profiling X-Play-Console-Experiments-Override X-Play-Console-Session-Id X-YouTube-Bootstrap-Logged-In X-YouTube-VVT X-YouTube-Page-CL X-YouTube-Page-Timestamp X-Compass-Routing-Destination X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-Identifier X-Goog-Meeting-Interop-Cohorts X-Goog-Meeting-Interop-Type X-Goog-Meeting-OidcIdToken X-Goog-Meeting-RtcClient X-Goog-Meeting-StartSource X-Goog-Meeting-Token X-Goog-Meeting-Viewer-Token x-sdm-id-token X-Sfdc-Authorization X-Server-Timeout x-foyer-client-environment X-Goog-First-Party-Reauth X-Server-Token x-rfui-request-context x-goog-chat-space-id x-goog-nest-jwt X-Cloud-Trace-Context traceparent x-goog-pan-request-context".split(
        " "
      ),
    bi =
      "Digest Cache-Control Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date ETag Expires Last-Modified Location Pragma Range Server Transfer-Encoding WWW-Authenticate Vary Unzipped-Content-MD5 X-Correlation-ID X-Debug-Tracking-Id X-Google-Consent X-Google-EOM X-Goog-Generation X-Goog-Metageneration X-Goog-Safety-Content-Type X-Goog-Safety-Encoding X-Google-Trace X-Goog-Upload-Chunk-Granularity X-Goog-Upload-Control-URL X-Goog-Upload-Size-Received X-Goog-Upload-Status X-Goog-Upload-URL X-Goog-Diff-Download-Range X-Goog-Hash X-Goog-Updated-Authorization X-Server-Object-Version X-Guploader-Customer X-Guploader-Upload-Result X-Guploader-Uploadid X-Google-Gfe-Backend-Request-Cost X-Earth-Engine-Computation-Profile X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-RtcClient X-Goog-Meeting-Token X-Goog-Meeting-Viewer-Token X-Compass-Routing-Destination".split(
        " "
      );
  var ci, di, ei, fi, hi, ii, ji, ki, li, mi, ni, oi;
  ci = null;
  di = null;
  ei = null;
  fi = function (a, b) {
    var c = a.length;
    if (c != b.length) return !1;
    for (var d = 0; d < c; ++d) {
      var e = a.charCodeAt(d),
        f = b.charCodeAt(d);
      e >= 65 && e <= 90 && (e += 32);
      f >= 65 && f <= 90 && (f += 32);
      if (e != f) return !1;
    }
    return !0;
  };
  _.gi = function (a) {
    a = String(a || "")
      .split("\x00")
      .join("");
    for (var b = [], c = !0, d = a.length, e = 0; e < d; ++e) {
      var f = a.charAt(e),
        h = a.charCodeAt(e);
      if (h >= 55296 && h <= 56319 && e + 1 < d) {
        var k = a.charAt(e + 1),
          l = a.charCodeAt(e + 1);
        l >= 56320 &&
          l <= 57343 &&
          ((f += k), (h = 65536 + ((h - 55296) << 10) + (l - 56320)), ++e);
      }
      if (
        !(h >= 0 && h <= 1114109) ||
        (h >= 55296 && h <= 57343) ||
        (h >= 64976 && h <= 65007) ||
        (h & 65534) == 65534
      )
        (h = 65533), (f = String.fromCharCode(h));
      k = !(h >= 32 && h <= 126) || f == " " || (c && f == ":") || f == "\\";
      !c || (f != "/" && f != "?") || (c = !1);
      f == "%" &&
        (e + 2 >= d
          ? (k = !0)
          : ((l =
              16 * parseInt(a.charAt(e + 1), 16) +
              parseInt(a.charAt(e + 2), 16)),
            l >= 0 && l <= 255
              ? ((h = l),
                (f =
                  h == 0
                    ? ""
                    : "%" + (256 + l).toString(16).toUpperCase().substr(1)),
                (e += 2))
              : (k = !0)));
      k &&
        ((f = encodeURIComponent(f)),
        f.length <= 1 &&
          (h >= 0 && h <= 127
            ? (f = "%" + (256 + h).toString(16).toUpperCase().substr(1))
            : ((h = 65533), (f = encodeURIComponent(String.fromCharCode(h))))));
      b.push(f);
    }
    a = b.join("");
    a = a.split("#")[0];
    a = a.split("?");
    b = a[0].split("/");
    c = [];
    d = b.length;
    for (e = 0; e < d; ++e)
      (f = b[e]),
        (h = f.split("%2E").join(".")),
        (h = h.split(encodeURIComponent("\uff0e")).join(".")),
        h == "."
          ? e + 1 == d && c.push("")
          : h == ".."
          ? (c.length > 0 && c.pop(), e + 1 == d && c.push(""))
          : c.push(f);
    a[0] = c.join("/");
    for (a = a.join("?"); a && a.charAt(0) == "/"; ) a = a.substr(1);
    return "/" + a;
  };
  hi = {
    "access-control-allow-origin": !0,
    "access-control-allow-credentials": !0,
    "access-control-expose-headers": !0,
    "access-control-max-age": !0,
    "access-control-allow-headers": !0,
    "access-control-allow-methods": !0,
    p3p: !0,
    "proxy-authenticate": !0,
    "set-cookie": !0,
    "set-cookie2": !0,
    status: !0,
    tsv: !0,
    "": !0,
  };
  ii = {
    "accept-charset": !0,
    "accept-encoding": !0,
    "access-control-request-headers": !0,
    "access-control-request-method": !0,
    "client-ip": !0,
    clientip: !0,
    connection: !0,
    "content-length": !0,
    cookie: !0,
    cookie2: !0,
    date: !0,
    dnt: !0,
    expect: !0,
    forwarded: !0,
    "forwarded-for": !0,
    "front-end-https": !0,
    host: !0,
    "keep-alive": !0,
    "max-forwards": !0,
    method: !0,
    origin: !0,
    "raw-post-data": !0,
    referer: !0,
    te: !0,
    trailer: !0,
    "transfer-encoding": !0,
    upgrade: !0,
    url: !0,
    "user-agent": !0,
    version: !0,
    via: !0,
    "x-att-deviceid": !0,
    "x-chrome-connected": !0,
    "x-client-data": !0,
    "x-client-ip": !0,
    "x-do-not-track": !0,
    "x-forwarded-by": !0,
    "x-forwarded-for": !0,
    "x-forwarded-host": !0,
    "x-forwarded-proto": !0,
    "x-geo": !0,
    "x-googapps-allowed-domains": !0,
    "x-origin": !0,
    "x-proxyuser-ip": !0,
    "x-real-ip": !0,
    "x-referer": !0,
    "x-uidh": !0,
    "x-user-ip": !0,
    "x-wap-profile": !0,
    "": !0,
  };
  ji = function (a) {
    if (!_.Gc(a)) return null;
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = a[c];
      if (typeof d === "string" && d) {
        var e = d.toLowerCase();
        fi(d, e) && (b[e] = d);
      }
    }
    for (var f in $h)
      Object.prototype.hasOwnProperty.call($h, f) &&
        ((a = $h[f]),
        (c = a.toLowerCase()),
        fi(a, c) && Object.prototype.hasOwnProperty.call(b, c) && (b[c] = a));
    return b;
  };
  ki = new RegExp(
    "(" +
      /[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source +
      "|" +
      /[\uD800-\uDBFF][\uDC00-\uDFFF]/.source +
      "){1,100}",
    "g"
  );
  li = /[ \t]*(\r?\n[ \t]+)+/g;
  mi = /^[ \t]+|[ \t]+$/g;
  ni = function (a, b) {
    if (!b && typeof a === "object" && a && typeof a.length === "number") {
      b = a;
      a = "";
      for (var c = b.length, d = 0; d < c; ++d) {
        var e = ni(b[d], !0);
        e && (a && (e = a + ", " + e), (a = e));
      }
    }
    if (
      typeof a === "string" &&
      ((a = a.replace(li, " ")),
      (a = a.replace(mi, "")),
      a.replace(ki, "") == "" && a)
    )
      return a;
  };
  oi = /^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g;
  _.pi = function (a) {
    if (typeof a !== "string" || !a || !a.match(oi)) return null;
    a = a.toLowerCase();
    if (ei == null) {
      var b = [],
        c = _.Sf("googleapis/headers/response");
      (c && typeof c === "object" && typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      ((c = _.Sf("client/headers/response")) &&
        typeof c === "object" &&
        typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      b = b.concat(bi);
      ((c = _.Sf("googleapis/headers/request")) &&
        typeof c === "object" &&
        typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      ((c = _.Sf("client/headers/request")) &&
        typeof c === "object" &&
        typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      b = b.concat(ai);
      for (var d in $h)
        Object.prototype.hasOwnProperty.call($h, d) && b.push($h[d]);
      ei = ji(b);
    }
    return ei != null && ei.hasOwnProperty(a) ? ei[a] : a;
  };
  _.qi = function (a, b) {
    if (!_.pi(a) || !ni(b)) return null;
    a = a.toLowerCase();
    if (a.match(/^x-google|^x-gfe|^proxy-|^sec-/i) || ii[a]) return null;
    if (ci == null) {
      b = [];
      var c = _.Sf("googleapis/headers/request");
      (c && typeof c === "object" && typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      ((c = _.Sf("client/headers/request")) &&
        typeof c === "object" &&
        typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      b = b.concat(ai);
      ci = ji(b);
    }
    return ci != null && ci.hasOwnProperty(a) ? ci[a] : null;
  };
  _.ri = function (a, b) {
    if (!_.pi(a) || !ni(b)) return null;
    a = a.toLowerCase();
    if (hi[a]) return null;
    if (di == null) {
      b = [];
      var c = _.Sf("googleapis/headers/response");
      (c && typeof c === "object" && typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      ((c = _.Sf("client/headers/response")) &&
        typeof c === "object" &&
        typeof c.length === "number") ||
        (c = null);
      c != null && (b = b.concat(c));
      b = b.concat(bi);
      di = ji(b);
    }
    return di != null && di.hasOwnProperty(a) ? a : null;
  };
  _.si = function (a, b) {
    if (_.pi(b) && a != null && typeof a === "object") {
      var c = void 0,
        d;
      for (d in a)
        if (Object.prototype.hasOwnProperty.call(a, d) && fi(d, b)) {
          var e = ni(a[d]);
          e && (c !== void 0 && (e = c + ", " + e), (c = e));
        }
      return c;
    }
  };
  _.ti = function (a, b, c, d) {
    var e = _.pi(b);
    if (e) {
      c && (c = ni(c));
      b = b.toLowerCase();
      for (var f in a)
        Object.prototype.hasOwnProperty.call(a, f) && fi(f, b) && delete a[f];
      c && (d || (b = e), (a[b] = c));
    }
  };
  _.ui = function (a, b) {
    var c = {};
    if (!a) return c;
    a = a.split("\r\n");
    for (var d = a.length, e = 0; e < d; ++e) {
      var f = a[e];
      if (!f) break;
      var h = f.indexOf(":");
      if (!(h <= 0)) {
        var k = f.substring(0, h);
        if ((k = _.pi(k))) {
          for (f = f.substring(h + 1); e + 1 < d && a[e + 1].match(/^[ \t]/); )
            (f += "\r\n" + a[e + 1]), ++e;
          if ((f = ni(f)))
            if ((k = _.ri(k, f) || (b ? void 0 : k)))
              (k = k.toLowerCase()),
                (h = _.si(c, k)),
                h !== void 0 && (f = h + ", " + f),
                _.ti(c, k, f, !0);
        }
      }
    }
    return c;
  };
  /\uffff/.test("\uffff");
  var Fy;
  Fy = function (a, b) {
    var c = [];
    for (b = b || 0; b < a.length; b += 2) _.Oi(a[b], a[b + 1], c);
    return c.join("&");
  };
  _.Gy = function (a, b) {
    var c = arguments.length == 2 ? Fy(arguments[1], 0) : Fy(arguments, 1);
    return _.Ni(a, c);
  };
  _.Hy = function (a, b) {
    _.Wj(a, "/") && (a = a.slice(0, -1));
    _.fd(b, "/") && (b = b.slice(1));
    return a + "/" + b;
  };
  _.Iy = function (a) {
    switch (a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        return !0;
      default:
        return !1;
    }
  };
  var Ky, Ly, My;
  _.Jy = function (a) {
    _.Ak.call(this);
    this.headers = new Map();
    this.C1 = a || null;
    this.lg = !1;
    this.ND = this.Ya = null;
    this.YA = "";
    this.xr = 0;
    this.Ro = this.PH = this.xA = this.OF = !1;
    this.Ns = 0;
    this.Od = null;
    this.ln = "";
    this.Fh = !1;
    this.DE = this.lN = null;
  };
  _.bb(_.Jy, _.Ak);
  _.Jy.prototype.Cb = null;
  Ky = /^https?$/i;
  Ly = ["POST", "PUT"];
  My = [];
  _.Ny = function (a, b, c, d, e, f, h) {
    var k = new _.Jy();
    My.push(k);
    b && k.qa("complete", b);
    k.Dr("ready", k.P6);
    f && k.gD(f);
    h && (k.Fh = h);
    k.send(a, c, d, e);
  };
  _.g = _.Jy.prototype;
  _.g.P6 = function () {
    this.dispose();
    _.ub(My, this);
  };
  _.g.gD = function (a) {
    this.Ns = Math.max(0, a);
  };
  _.g.setTrustToken = function (a) {
    this.lN = a;
  };
  _.g.setAttributionReporting = function (a) {
    this.DE = a;
  };
  _.g.send = function (a, b, c, d) {
    if (this.Ya) throw Error("Da`" + this.YA + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.YA = a;
    this.xr = 0;
    this.OF = !1;
    this.lg = !0;
    this.Ya = new XMLHttpRequest();
    this.ND = this.C1 ? this.C1.getOptions() : _.Ay.getOptions();
    this.Ya.onreadystatechange = (0, _.z)(this.tX, this);
    try {
      (this.PH = !0), this.Ya.open(b, String(a), !0), (this.PH = !1);
    } catch (h) {
      this.gz(5, h);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype)
        for (var e in d) c.set(e, d[e]);
      else if (typeof d.keys === "function" && typeof d.get === "function") {
        e = _.sa(d.keys());
        for (var f = e.next(); !f.done; f = e.next())
          (f = f.value), c.set(f, d.get(f));
      } else throw Error("Ea`" + String(d));
    d = Array.from(c.keys()).find(function (h) {
      return "content-type" == h.toLowerCase();
    });
    e = _.Sa.FormData && a instanceof _.Sa.FormData;
    !_.tb(Ly, b) ||
      d ||
      e ||
      c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = _.sa(c);
    for (d = b.next(); !d.done; d = b.next())
      (c = _.sa(d.value)),
        (d = c.next().value),
        (c = c.next().value),
        this.Ya.setRequestHeader(d, c);
    this.ln && (this.Ya.responseType = this.ln);
    "withCredentials" in this.Ya &&
      this.Ya.withCredentials !== this.Fh &&
      (this.Ya.withCredentials = this.Fh);
    if ("setTrustToken" in this.Ya && this.lN)
      try {
        this.Ya.setTrustToken(this.lN);
      } catch (h) {}
    if ("setAttributionReporting" in this.Ya && this.DE)
      try {
        this.Ya.setAttributionReporting(this.DE);
      } catch (h) {}
    try {
      Oy(this),
        this.Ns > 0 && (this.Od = _.Dy(this.Ni, this.Ns, this)),
        (this.xA = !0),
        this.Ya.send(a),
        (this.xA = !1);
    } catch (h) {
      this.gz(5, h);
    }
  };
  _.g.Ni = function () {
    typeof _.Ra != "undefined" &&
      this.Ya &&
      ((this.xr = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  _.g.gz = function (a) {
    this.lg = !1;
    this.Ya && ((this.Ro = !0), this.Ya.abort(), (this.Ro = !1));
    this.xr = a;
    Py(this);
    Qy(this);
  };
  var Py = function (a) {
    a.OF ||
      ((a.OF = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
  };
  _.Jy.prototype.abort = function (a) {
    this.Ya &&
      this.lg &&
      ((this.lg = !1),
      (this.Ro = !0),
      this.Ya.abort(),
      (this.Ro = !1),
      (this.xr = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Qy(this));
  };
  _.Jy.prototype.va = function () {
    this.Ya &&
      (this.lg &&
        ((this.lg = !1), (this.Ro = !0), this.Ya.abort(), (this.Ro = !1)),
      Qy(this, !0));
    _.Jy.N.va.call(this);
  };
  _.Jy.prototype.tX = function () {
    this.isDisposed() || (this.PH || this.xA || this.Ro ? Ry(this) : this.rJ());
  };
  _.Jy.prototype.rJ = function () {
    Ry(this);
  };
  var Ry = function (a) {
      if (
        a.lg &&
        typeof _.Ra != "undefined" &&
        (!a.ND[1] || _.Sy(a) != 4 || a.getStatus() != 2)
      )
        if (a.xA && _.Sy(a) == 4) _.Dy(a.tX, 0, a);
        else if ((a.dispatchEvent("readystatechange"), _.Sy(a) == 4)) {
          a.lg = !1;
          try {
            a.ur()
              ? (a.dispatchEvent("complete"), a.dispatchEvent("success"))
              : ((a.xr = 6), a.getStatus(), Py(a));
          } finally {
            Qy(a);
          }
        }
    },
    Qy = function (a, b) {
      if (a.Ya) {
        Oy(a);
        var c = a.Ya,
          d = a.ND[0] ? function () {} : null;
        a.Ya = null;
        a.ND = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    Oy = function (a) {
      a.Od && (_.Ey(a.Od), (a.Od = null));
    };
  _.Jy.prototype.isActive = function () {
    return !!this.Ya;
  };
  _.Jy.prototype.ur = function () {
    var a = this.getStatus(),
      b;
    if (!(b = _.Iy(a))) {
      if ((a = a === 0))
        (a = String(this.YA).match(_.Mi)[1] || null),
          !a &&
            _.Sa.self &&
            _.Sa.self.location &&
            (a = _.Sa.self.location.protocol.slice(0, -1)),
          (a = !Ky.test(a ? a.toLowerCase() : ""));
      b = a;
    }
    return b;
  };
  _.Sy = function (a) {
    return a.Ya ? a.Ya.readyState : 0;
  };
  _.Jy.prototype.getStatus = function () {
    try {
      return _.Sy(this) > 2 ? this.Ya.status : -1;
    } catch (a) {
      return -1;
    }
  };
  _.Ty = function (a) {
    try {
      return a.Ya ? a.Ya.responseText : "";
    } catch (b) {
      return "";
    }
  };
  _.Uy = function (a) {
    try {
      if (!a.Ya) return null;
      if ("response" in a.Ya) return a.Ya.response;
      switch (a.ln) {
        case "":
        case "text":
          return a.Ya.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.Ya)
            return a.Ya.mozResponseArrayBuffer;
      }
      return null;
    } catch (b) {
      return null;
    }
  };
  _.Jy.prototype.getResponseHeader = function (a) {
    if (this.Ya && _.Sy(this) == 4)
      return (a = this.Ya.getResponseHeader(a)), a === null ? void 0 : a;
  };
  _.Jy.prototype.getAllResponseHeaders = function () {
    return this.Ya && _.Sy(this) >= 2
      ? this.Ya.getAllResponseHeaders() || ""
      : "";
  };
  _.Uj(function (a) {
    _.Jy.prototype.rJ = a(_.Jy.prototype.rJ);
  });
  _.Au = function (a) {
    var b = 0,
      c;
    for (c in a) b++;
    return b;
  };
  _.Bu = function (a) {
    if (a.Hd && typeof a.Hd == "function") return a.Hd();
    if (
      (typeof Map !== "undefined" && a instanceof Map) ||
      (typeof Set !== "undefined" && a instanceof Set)
    )
      return Array.from(a.values());
    if (typeof a === "string") return a.split("");
    if (_.Gc(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return _.xb(a);
  };
  _.Cu = function (a) {
    if (a.Bg && typeof a.Bg == "function") return a.Bg();
    if (!a.Hd || typeof a.Hd != "function") {
      if (typeof Map !== "undefined" && a instanceof Map)
        return Array.from(a.keys());
      if (!(typeof Set !== "undefined" && a instanceof Set)) {
        if (_.Gc(a) || typeof a === "string") {
          var b = [];
          a = a.length;
          for (var c = 0; c < a; c++) b.push(c);
          return b;
        }
        return _.yb(a);
      }
    }
  };
  var Eu, Iu, Vu, Qu, Zu, Ru, Tu, Su, Wu, Uu, $u;
  _.Du = function () {
    return (
      Math.floor(Math.random() * 2147483648).toString(36) +
      Math.abs(Math.floor(Math.random() * 2147483648) ^ _.Jc()).toString(36)
    );
  };
  Eu = function (a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (d >= 0) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  };
  _.Fu = function (a, b, c) {
    for (var d = 0, e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
      var f = a.charCodeAt(d - 1);
      if (f == 38 || f == 63)
        if (((f = a.charCodeAt(d + e)), !f || f == 61 || f == 38 || f == 35))
          return d;
      d += e + 1;
    }
    return -1;
  };
  _.Gu = /#|$/;
  _.Hu = function (a, b) {
    var c = a.search(_.Gu),
      d = _.Fu(a, b, c);
    if (d < 0) return null;
    var e = a.indexOf("&", d);
    if (e < 0 || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "));
  };
  Iu = function (a, b, c) {
    if (a.forEach && typeof a.forEach == "function") a.forEach(b, c);
    else if (_.Gc(a) || typeof a === "string")
      Array.prototype.forEach.call(a, b, c);
    else
      for (var d = _.Cu(a), e = _.Bu(a), f = e.length, h = 0; h < f; h++)
        b.call(c, e[h], d && d[h], a);
  };
  _.Ju = function (a, b) {
    this.je = this.Eh = this.Ii = "";
    this.Pg = null;
    this.kG = this.Xm = "";
    this.kh = !1;
    var c;
    a instanceof _.Ju
      ? ((this.kh = b !== void 0 ? b : a.kh),
        _.Ku(this, a.Ii),
        _.Lu(this, a.Eh),
        _.Mu(this, a.eh()),
        _.Nu(this, a.Pg),
        this.setPath(a.getPath()),
        _.Ou(this, a.Yd.clone()),
        this.ql(a.Ez()))
      : a && (c = String(a).match(_.Mi))
      ? ((this.kh = !!b),
        _.Ku(this, c[1] || "", !0),
        _.Lu(this, c[2] || "", !0),
        _.Mu(this, c[3] || "", !0),
        _.Nu(this, c[4]),
        this.setPath(c[5] || "", !0),
        _.Ou(this, c[6] || "", !0),
        this.ql(c[7] || "", !0))
      : ((this.kh = !!b), (this.Yd = new _.Pu(null, this.kh)));
  };
  _.Ju.prototype.toString = function () {
    var a = [],
      b = this.Ii;
    b && a.push(Qu(b, Ru, !0), ":");
    var c = this.eh();
    if (c || b == "file")
      a.push("//"),
        (b = this.Eh) && a.push(Qu(b, Ru, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.Pg),
        c != null && a.push(":", String(c));
    if ((c = this.getPath()))
      this.je && c.charAt(0) != "/" && a.push("/"),
        a.push(Qu(c, c.charAt(0) == "/" ? Su : Tu, !0));
    (c = this.Yd.toString()) && a.push("?", c);
    (c = this.Ez()) && a.push("#", Qu(c, Uu));
    return a.join("");
  };
  _.Ju.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.Ii;
    c ? _.Ku(b, a.Ii) : (c = !!a.Eh);
    c ? _.Lu(b, a.Eh) : (c = !!a.je);
    c ? _.Mu(b, a.eh()) : (c = a.Pg != null);
    var d = a.getPath();
    if (c) _.Nu(b, a.Pg);
    else if ((c = !!a.Xm)) {
      if (d.charAt(0) != "/")
        if (this.je && !this.Xm) d = "/" + d;
        else {
          var e = b.getPath().lastIndexOf("/");
          e != -1 && (d = b.getPath().slice(0, e + 1) + d);
        }
      e = d;
      if (e == ".." || e == ".") d = "";
      else if (_.$b(e, "./") || _.$b(e, "/.")) {
        d = _.fd(e, "/");
        e = e.split("/");
        for (var f = [], h = 0; h < e.length; ) {
          var k = e[h++];
          k == "."
            ? d && h == e.length && f.push("")
            : k == ".."
            ? ((f.length > 1 || (f.length == 1 && f[0] != "")) && f.pop(),
              d && h == e.length && f.push(""))
            : (f.push(k), (d = !0));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? b.setPath(d) : (c = a.gr());
    c ? _.Ou(b, a.Yd.clone()) : (c = !!a.kG);
    c && b.ql(a.Ez());
    return b;
  };
  _.Ju.prototype.clone = function () {
    return new _.Ju(this);
  };
  _.Ku = function (a, b, c) {
    a.Ii = c ? Vu(b, !0) : b;
    a.Ii && (a.Ii = a.Ii.replace(/:$/, ""));
    return a;
  };
  _.Lu = function (a, b, c) {
    a.Eh = c ? Vu(b) : b;
    return a;
  };
  _.Ju.prototype.eh = function () {
    return this.je;
  };
  _.Mu = function (a, b, c) {
    a.je = c ? Vu(b, !0) : b;
    return a;
  };
  _.Nu = function (a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || b < 0) throw Error("T`" + b);
      a.Pg = b;
    } else a.Pg = null;
    return a;
  };
  _.Ju.prototype.getPath = function () {
    return this.Xm;
  };
  _.Ju.prototype.setPath = function (a, b) {
    this.Xm = b ? Vu(a, !0) : a;
    return this;
  };
  _.Ju.prototype.gr = function () {
    return this.Yd.toString() !== "";
  };
  _.Ou = function (a, b, c) {
    b instanceof _.Pu
      ? ((a.Yd = b), a.Yd.sL(a.kh))
      : (c || (b = Qu(b, Wu)), (a.Yd = new _.Pu(b, a.kh)));
    return a;
  };
  _.Ju.prototype.nb = function (a, b) {
    return _.Ou(this, a, b);
  };
  _.Ju.prototype.getQuery = function () {
    return this.Yd.toString();
  };
  _.Xu = function (a, b, c) {
    a.Yd.set(b, c);
    return a;
  };
  _.g = _.Ju.prototype;
  _.g.hh = function (a) {
    return this.Yd.get(a);
  };
  _.g.Ez = function () {
    return this.kG;
  };
  _.g.ql = function (a, b) {
    this.kG = b ? Vu(a) : a;
    return this;
  };
  _.g.removeParameter = function (a) {
    this.Yd.remove(a);
    return this;
  };
  _.g.sL = function (a) {
    this.kh = a;
    this.Yd && this.Yd.sL(a);
  };
  _.Yu = function (a, b) {
    return a instanceof _.Ju ? a.clone() : new _.Ju(a, b);
  };
  Vu = function (a, b) {
    return a
      ? b
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  };
  Qu = function (a, b, c) {
    return typeof a === "string"
      ? ((a = encodeURI(a).replace(b, Zu)),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  };
  Zu = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  };
  Ru = /[#\/\?@]/g;
  Tu = /[#\?:]/g;
  Su = /[#\?]/g;
  Wu = /[#\?@]/g;
  Uu = /#/g;
  _.Pu = function (a, b) {
    this.Ie = this.Rc = null;
    this.zg = a || null;
    this.kh = !!b;
  };
  $u = function (a) {
    a.Rc ||
      ((a.Rc = new Map()),
      (a.Ie = 0),
      a.zg &&
        Eu(a.zg, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
  _.g = _.Pu.prototype;
  _.g.Sb = function () {
    $u(this);
    return this.Ie;
  };
  _.g.add = function (a, b) {
    $u(this);
    this.zg = null;
    a = av(this, a);
    var c = this.Rc.get(a);
    c || this.Rc.set(a, (c = []));
    c.push(b);
    this.Ie += 1;
    return this;
  };
  _.g.remove = function (a) {
    $u(this);
    a = av(this, a);
    return this.Rc.has(a)
      ? ((this.zg = null),
        (this.Ie -= this.Rc.get(a).length),
        this.Rc.delete(a))
      : !1;
  };
  _.g.clear = function () {
    this.Rc = this.zg = null;
    this.Ie = 0;
  };
  _.g.isEmpty = function () {
    $u(this);
    return this.Ie == 0;
  };
  _.g.Xi = function (a) {
    $u(this);
    a = av(this, a);
    return this.Rc.has(a);
  };
  _.g.tk = function (a) {
    var b = this.Hd();
    return _.tb(b, a);
  };
  _.g.forEach = function (a, b) {
    $u(this);
    this.Rc.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  _.g.Bg = function () {
    $u(this);
    for (
      var a = Array.from(this.Rc.values()),
        b = Array.from(this.Rc.keys()),
        c = [],
        d = 0;
      d < b.length;
      d++
    )
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  _.g.Hd = function (a) {
    $u(this);
    var b = [];
    if (typeof a === "string")
      this.Xi(a) && (b = b.concat(this.Rc.get(av(this, a))));
    else {
      a = Array.from(this.Rc.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  _.g.set = function (a, b) {
    $u(this);
    this.zg = null;
    a = av(this, a);
    this.Xi(a) && (this.Ie -= this.Rc.get(a).length);
    this.Rc.set(a, [b]);
    this.Ie += 1;
    return this;
  };
  _.g.get = function (a, b) {
    if (!a) return b;
    a = this.Hd(a);
    return a.length > 0 ? String(a[0]) : b;
  };
  _.g.setValues = function (a, b) {
    this.remove(a);
    b.length > 0 &&
      ((this.zg = null),
      this.Rc.set(av(this, a), _.vb(b)),
      (this.Ie += b.length));
  };
  _.g.toString = function () {
    if (this.zg) return this.zg;
    if (!this.Rc) return "";
    for (var a = [], b = Array.from(this.Rc.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.Hd(d);
      for (var f = 0; f < d.length; f++) {
        var h = e;
        d[f] !== "" && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
      }
    }
    return (this.zg = a.join("&"));
  };
  _.g.clone = function () {
    var a = new _.Pu();
    a.zg = this.zg;
    this.Rc && ((a.Rc = new Map(this.Rc)), (a.Ie = this.Ie));
    return a;
  };
  var av = function (a, b) {
    b = String(b);
    a.kh && (b = b.toLowerCase());
    return b;
  };
  _.Pu.prototype.sL = function (a) {
    a &&
      !this.kh &&
      ($u(this),
      (this.zg = null),
      this.Rc.forEach(function (b, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.setValues(d, b));
      }, this));
    this.kh = a;
  };
  _.Pu.prototype.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)
      Iu(
        arguments[b],
        function (c, d) {
          this.add(d, c);
        },
        this
      );
  };
  var cB = function (a) {
      if (!a || typeof a !== "function")
        throw new bB("Must provide a function.");
      this.Qg = null;
      this.S7 = a;
    },
    dB = !1;
  dB = !1;
  var eB = function () {
      var a = _.If.ms || _.If.u;
      if (a) return new URL(a).origin;
    },
    fB = function (a) {
      return new _.gl(function (b) {
        var c = a.length,
          d = [];
        if (c)
          for (
            var e = function (k, l, m) {
                c--;
                d[k] = l ? { rz: !0, value: m } : { rz: !1, reason: m };
                c == 0 && b(d);
              },
              f = 0,
              h;
            f < a.length;
            f++
          )
            (h = a[f]), _.nl(h, _.$a(e, f, !0), _.$a(e, f, !1));
        else b(d);
      });
    },
    gB,
    hB,
    iB,
    jB = {
      GP: function (a) {
        gB = a;
        try {
          delete jB.GP;
        } catch (b) {}
      },
      HP: function (a) {
        hB = a;
        try {
          delete jB.HP;
        } catch (b) {}
      },
      IP: function (a) {
        iB = a;
        try {
          delete jB.IP;
        } catch (b) {}
      },
    },
    kB = function (a) {
      return _.Iy(a.status);
    },
    lB = function () {
      var a = !0,
        b = new XMLHttpRequest();
      (b && b.withCredentials !== void 0) || (a = !1);
      return a;
    },
    mB = function (a, b) {
      if (b == null) return b;
      b = String(b);
      b.match(/^\/\/.*/) &&
        (b = (window.location.protocol == "http:" ? "http:" : "https:") + b);
      b.match(/^\/([^\/].*)?$/) &&
        window.location.host &&
        String(window.location.protocol).match(/^https?:$/) &&
        (b = window.location.protocol + "//" + window.location.host + b);
      var c = b.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i);
      c &&
        window.location.host &&
        String(window.location.protocol).match(/^https?:$/) &&
        (b = c[1] + "//" + window.location.host + (c[3] || ""));
      b = b.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, "$1");
      b = b.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, "$1$2");
      b = b.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, "$1$2");
      b.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) &&
        (b = b.toLowerCase());
      c = _.Sf("client/rewrite");
      _.yc(c) && Object.prototype.hasOwnProperty.call(c, b)
        ? (b = String(c[b] || b))
        : ((b = b.replace(
            /^(https?):\/\/www\.googleapis\.com$/,
            "$1://content.googleapis.com"
          )),
          (b = b.replace(
            /^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/,
            "$1://content-$2"
          )),
          b.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) ||
            (b = b.replace(
              /^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/,
              "$1://content-$2"
            )));
      a &&
        ((a = _.Sf("client/firstPartyRewrite")),
        _.yc(a) && Object.prototype.hasOwnProperty.call(a, b)
          ? (b = String(a[b] || b))
          : ((b = b.replace(
              /^(https?):\/\/content\.googleapis\.com$/,
              "$1://clients6.google.com"
            )),
            (b = b.replace(
              /^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/,
              "$1://$2-googleapis.$3.google.com"
            )),
            (b = b.replace(
              /^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/,
              "$1://$2.clients6.google.com"
            )),
            (b = b.replace(
              /^(https?):\/\/([-a-z0-9]+)-www-googleapis\.([-a-z0-9]+).google.com$/,
              "$1://content-googleapis-$2.$3.google.com"
            ))));
      return b;
    },
    bB = function (a) {
      _.rb.call(this, a);
    };
  _.A(bB, _.rb);
  bB.prototype.name = "gapix.client.GapiClientError";
  cB.prototype.then = function (a, b, c) {
    this.Qg || (this.Qg = this.S7());
    return this.Qg.then(a, b, c);
  };
  cB.prototype.WC = function (a) {
    this.Qg || (this.Qg = a);
  };
  var nB = function (a) {
    this.yS = a;
    this.count = this.count = 0;
  };
  nB.prototype.Hb = function (a) {
    a ? (this.count += a) : this.count++;
    this.yS && this.yS();
  };
  nB.prototype.get = function () {
    return this.count;
  };
  nB.prototype.reset = function () {
    this.count = 0;
  };
  var qB = function () {
      var a = !0,
        b = this;
      a = a === void 0 ? !0 : a;
      this.Iy = new Map();
      this.JE = !1;
      var c = eB();
      c &&
        ((this.url = c + "/js/gen_204"),
        (c = _.Zi("gen204logger") || {}),
        (this.mu = c.interval),
        (this.zS = c.rate),
        (this.JE = c.Woa),
        a && this.url && oB(this),
        document.addEventListener("visibilitychange", this.flush),
        pB(this),
        this.flush(),
        document.addEventListener("visibilitychange", function () {
          document.visibilityState === "hidden" && b.flush();
        }),
        document.addEventListener("pagehide", this.flush.bind(this)));
    },
    pB = function (a) {
      var b = _.If.dm || [];
      if (b && b.length !== 0) {
        b = _.sa(b);
        for (var c = b.next(); !c.done; c = b.next()) rB(a, c.value).Hb();
        delete _.If.dm;
      }
    },
    rB = function (a, b) {
      a.Iy.has(b) ||
        a.Iy.set(
          b,
          new nB(
            a.JE
              ? void 0
              : function () {
                  return a.flush();
                }
          )
        );
      return a.Iy.get(b);
    };
  qB.prototype.flush = function () {
    var a = this;
    if (this.url && this.zS) {
      for (var b = "", c = _.sa(this.Iy), d = c.next(); !d.done; d = c.next()) {
        var e = _.sa(d.value);
        d = e.next().value;
        e = e.next().value;
        var f = e.get();
        f > 0 &&
          ((b += b.length > 0 ? "&" : ""),
          (b += "c="),
          (b += encodeURIComponent(d + ":" + f)),
          e.reset());
        if (b.length > 1e3) break;
      }
      b !== "" &&
        Math.random() < this.zS &&
        fetch(this.url + "?" + b, {
          method: "GET",
          mode: "no-cors",
          signal: AbortSignal.timeout(3e4),
        })
          .catch(function () {})
          .finally(function () {
            oB(a);
          });
    }
  };
  qB.prototype.setInterval = function (a) {
    this.mu = a;
  };
  var oB = function (a) {
      a.mu &&
        a.JE &&
        setTimeout(function () {
          a.flush();
        }, a.mu);
    },
    sB = function () {
      qB.sW || (qB.sW = new qB());
      return qB.sW;
    },
    tB = function (a) {
      var b = {},
        c;
      for (c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          var d = _.si(a, c);
          d && (c = _.ri(c, d)) && _.ti(b, c, d, !0);
        }
      return b;
    },
    uB = {
      error: {
        code: -1,
        message:
          "A network error occurred and the request could not be completed.",
      },
    },
    vB = function (a, b, c, d) {
      _.Jy.call(this);
      this.Pd = a;
      this.RI = b;
      this.Sd = c;
      a = {};
      if (d)
        for (var e in d)
          Object.prototype.hasOwnProperty.call(d, e) &&
            ((b = _.si(d, e)),
            b !== void 0 && (e = _.qi(e, b)) && _.ti(a, e, b));
      d = {};
      for (e in a)
        Object.prototype.hasOwnProperty.call(a, e) &&
          (d[unescape(encodeURIComponent(e))] = unescape(
            encodeURIComponent(a[e])
          ));
      this.Vu = d;
      this.Qg = null;
    };
  _.A(vB, _.Jy);
  vB.prototype.then = function (a) {
    this.Qg ||
      (this.Qg = new _.gl(function (b, c) {
        this.qa(
          "error",
          (0, _.z)(function () {
            c(wB(this));
          }, this)
        );
        this.qa(
          "success",
          (0, _.z)(function () {
            b(wB(this));
          }, this)
        );
        this.send(this.Pd, this.RI, this.Sd, this.Vu);
      }, this).then(
        function (b) {
          b.headers = tB(b.headers);
          return b;
        },
        function (b) {
          return b.status
            ? ((b.headers = tB(b.headers)), _.ll(b))
            : _.ll({
                result: uB,
                body: '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
                headers: null,
                status: null,
                statusText: null,
              });
        }
      ));
    return this.Qg.then.apply(this.Qg, arguments);
  };
  var wB = function (a) {
      var b = a.getStatus(),
        c = _.Ty(a);
      var d = b == 204 ? !1 : a.ln == "" ? _.Ug(c) : _.Uy(a);
      var e = a.getAllResponseHeaders();
      e = _.ui(e, !1);
      try {
        var f = _.Sy(a) > 2 ? a.Ya.statusText : "";
      } catch (h) {
        f = "";
      }
      return { result: d, body: c, headers: e, status: b, statusText: f };
    },
    xB = /;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i,
    yB =
      /^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i,
    zB = /;\s*charset\s*=/i,
    AB =
      /(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g,
    BB = function (a) {
      var b = [];
      a = a.replace(AB, function (c) {
        b.push(_.Lz(c));
        return "";
      });
      if (a.length) throw Error("Fa");
      return b.join("");
    },
    CB = function (a) {
      var b = a.headers;
      if (b && _.si(b, "X-Goog-Safety-Encoding") === "base64") {
        var c = BB(a.body),
          d = _.si(b, "X-Goog-Safety-Content-Type");
        b["Content-Type"] = d;
        if (d.match(xB) || (d.match(yB) && !d.match(zB))) c = _.Nw(_.Ei(c));
        _.ti(b, "X-Goog-Safety-Encoding");
        _.ti(b, "X-Goog-Safety-Content-Type");
        a.body = c;
      }
    },
    DB = function (a, b, c) {
      c ||
        ((c = _.Sf("googleapis.config/proxy")) &&
          (c = String(c).replace(/\/static\/proxy\.html$/, "") || "/"),
        (c = String(c || "")));
      c ||
        ((c = _.Sf("googleapis.config/root")),
        b && (c = _.Sf("googleapis.config/root-1p") || c),
        (c = String(c || "")));
      c = String(mB(b, c) || c);
      return (a = _.Hy(c, a));
    },
    EB = function (a, b) {
      var c = a.params || _.wf();
      c.url = c.path;
      var d = c.root;
      d = DB("/", _.qj(c.headers), d);
      d.match(/^(.*[^\/])?\/$/) && (d = d.substr(0, d.length - 1));
      c.root = d;
      a.params = c;
      _.Ij.tn("makeHttpRequests", [a], function (e, f) {
        e && e.gapiRequest
          ? (e.gapiRequest.data ? CB(e.gapiRequest.data) : CB(e), b(e, _.Vg(e)))
          : b(e, f);
      });
    },
    FB = function (a) {
      var b = _.fj(a, "params", "headers");
      (b && typeof b === "object") || (b = {});
      a = {};
      for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c)) {
          var d = _.si(b, c);
          d && (_.qi(c, d), _.ti(a, c, d));
        }
      c = (window.location.href.match(_.Mi)[1] || null) == "chrome-extension";
      a = _.qj(a);
      return !(c && a) && lB();
    },
    GB = function (a) {
      return new _.gl(function (b, c) {
        var d = function (e) {
          e && e.gapiRequest ? (e = e.gapiRequest.data || e) : c(e);
          e = {
            result: e.status != 204 && _.Ug(e.body),
            body: e.body,
            headers: e.headers || null,
            status: e.status || null,
            statusText: e.statusText || null,
          };
          kB(e) ? b(e) : c(e);
        };
        try {
          EB(a, d);
        } catch (e) {
          c(e);
        }
      });
    },
    HB = function (a) {
      var b = !_.Sf("client/cors") || !!_.Sf("client/xd4"),
        c = {};
      _.vn(a, function (d, e) {
        (d = _.qi(e, d)) || b || (d = _.pi(e));
        d && (e = _.si(a, d)) && _.ti(c, d, e);
      });
      return c;
    },
    IB = function (a) {
      var b = a.params || _.wf();
      a = _.Nk(b.headers || {});
      var c = b.httpMethod || "GET",
        d = String(b.url || ""),
        e = encodeURIComponent("$unique");
      if (
        !(
          c === "POST" ||
          _.Fu(d, "$unique", d.search(_.Gu)) >= 0 ||
          _.Fu(d, e, d.search(_.Gu)) >= 0
        )
      ) {
        var f = [];
        for (h in a)
          Object.prototype.hasOwnProperty.call(a, h) && f.push(h.toLowerCase());
        f.sort();
        f.push(_.Nh(location.href));
        var h = f.join(":");
        f = _.hj();
        f.update(h);
        h = f.Yi().toLowerCase().substr(0, 7);
        h = String((parseInt(h, 16) % 1e3) + 1e3).substr(1);
        d = _.Gy(d, e, "gc" + h);
      }
      e = b.body || null;
      h = b.responseType || null;
      b = _.qj(a) || b.authType == "1p";
      f =
        !!_.Sf("googleapis.config/auth/useUberProxyAuth") ||
        !!_.Sf("client/withCredentials");
      _.ti(a, "X-Referer");
      a = HB(a);
      var k = new vB(d, c, e, a);
      k.Fh = b || f;
      h && (k.ln = h);
      return new _.gl(function (l, m) {
        k.then(
          function (n) {
            CB(n);
            l(n);
          },
          function (n) {
            m(n);
          }
        );
      });
    },
    JB = function (a, b) {
      var c = function (d) {
        d = _.Nk(d);
        delete d.result;
        d = { gapiRequest: { data: d } };
        b && b(d, _.Vg(d));
      };
      IB(a).then(c, c);
    },
    KB = function (a, b) {
      (_.Sf("client/cors") || _.Sf("client/xd4")) && FB(a)
        ? (rB(sB(), 12).Hb(), JB(a, b))
        : (rB(sB(), 11).Hb(), EB(a, b));
    },
    LB = function (a) {
      this.jn = a;
      this.lg = !1;
      this.promise = {
        then: (0, _.z)(function (b, c, d) {
          this.lg || (this.lg = !0);
          this.bw && !this.Yv
            ? this.jn.resolve(this.bw)
            : this.Yv && !this.bw && this.jn.reject(this.Yv);
          return this.jn.promise.then(b, c, d);
        }, this),
      };
    };
  LB.prototype.resolve = function (a) {
    this.lg ? this.jn.resolve(a) : this.bw || this.Yv || (this.bw = a);
  };
  LB.prototype.reject = function (a) {
    this.lg ? this.jn.reject(a) : this.bw || this.Yv || (this.Yv = a);
  };
  var MB = function (a) {
      a = _.gj(a.error);
      return { code: a.code, data: a.errors, message: a.message };
    },
    NB = function (a) {
      throw Error("Ia`" + a);
    };
  var OB = function (a) {
    cB.call(this, OB.prototype.xp);
    if (!a || (typeof a != "object" && typeof a != "string"))
      throw new bB("Missing required parameters");
    if (typeof a === "string") {
      var b = {};
      b.path = a;
    } else b = a;
    if (!b.path) throw new bB('Missing required parameter: "path"');
    this.Hi = {};
    this.Hi.path = b.path;
    this.Hi.method = b.method || "GET";
    this.Hi.params = b.params || {};
    this.Hi.headers = b.headers || {};
    this.Hi.body = b.body;
    this.Hi.root = b.root;
    this.Hi.responseType = b.responseType;
    this.Hi.apiId = b.apiId;
    this.Kn = b.authType || "auto";
    this.vba = !!b.isXd4;
    this.xV = !1;
    this.Sj(this.Kn);
    this.VY = !1;
  };
  _.A(OB, cB);
  OB.prototype.nf = function () {
    return this.Hi;
  };
  OB.prototype.Sj = function (a) {
    this.Kn = a;
    this.xV = this.Kn === "1p";
  };
  OB.prototype.Hu = function () {
    return this.xV;
  };
  OB.prototype.Xk = function () {
    if (!this.VY) {
      this.VY = !0;
      var a = this.Hi,
        b = (a.headers = a.headers || {}),
        c = [],
        d = [];
      for (h in b)
        if (Object.prototype.hasOwnProperty.call(b, h)) {
          c.push(h);
          var e = h,
            f = _.si(b, e);
          f && (e = _.qi(e, f) || _.pi(e)) && d.push([e, f]);
        }
      var h = 0;
      for (e = c.length; h < e; ++h) delete b[c[h]];
      c = 0;
      for (h = d.length; c < h; ++c) _.ti(b, d[c][0], d[c][1]);
      if (this.vba) d = this.Kn == "1p";
      else {
        d = b;
        c = String(_.Sf("client/version", "1.1.0"));
        h = String(_.Sf("client/name", "google-api-javascript-client"));
        h = PB[h] === !0 ? h : "google-api-javascript-client";
        e = String(_.Sf("client/appName", ""));
        f = [];
        e && (f.push(e), f.push(" "));
        f.push(h);
        c && (f.push("/"), f.push(c));
        _.ti(d, "X-JavaScript-User-Agent", f.join(""));
        _.ti(b, "X-Requested-With", "XMLHttpRequest");
        d = _.si(b, "Content-Type");
        a.body && !d && _.ti(b, "Content-Type", "application/json");
        _.Sf("client/allowExecutableResponse") ||
          _.ti(b, "X-Goog-Encode-Response-If-Executable", "base64");
        (d = _.si(b, "Content-Type")) &&
          d.toLowerCase() == "application/json" &&
          !a.params.alt &&
          (a.params.alt = "json");
        (d = a.body || null) && _.yc(d) && (a.body = _.Vg(d));
        a.key = a.id;
        b = _.Hj(b, void 0, this.Kn);
        d = _.qj(b);
        if ((c = b) && window.navigator) {
          h = [];
          for (e = 0; e < QB.length; e++)
            (f = window.navigator[QB[e]]) &&
              h.push(encodeURIComponent(QB[e]) + "=" + encodeURIComponent(f));
          _.ti(c, "X-ClientDetails", h.join("&"));
        }
        (c = _.Sf("client/apiKey")) &&
          a.params.key === void 0 &&
          (a.params.key = c);
        (c = _.Sf("client/trace")) && !a.params.trace && (a.params.trace = c);
      }
      this.Kn == "auto" &&
        (d
          ? this.Sj("1p")
          : (b = _.si(b, "Authorization")) &&
            String(b).match(/^(Bearer|MAC)[ \t]/i)
          ? this.Sj("oauth2")
          : this.Sj("none"));
      if (
        (b = String(a.path || "").match(
          /^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i
        )) &&
        !a.root
      )
        if (
          ((a.root = String(b[1])),
          (a.path = String(b[2] || "/")),
          a.path.match(/^\/_ah\/api(\/.*)?$/))
        )
          (a.root += "/_ah/api"), (a.path = a.path.substr(8));
        else {
          b = _.Sf("googleapis.config/root");
          d && (b = _.Sf("googleapis.config/root-1p") || b);
          b = String(b || "");
          c = a.root + a.path;
          if ((h = b && c.substr(0, b.length) === b))
            (h = _.Yu(b)),
              (e = _.Yu(c)),
              (h =
                ((!h.je && !e.je) || h.eh() == e.eh()) &&
                ((h.Pg == null && e.Pg == null) || h.Pg == e.Pg));
          h && ((a.path = c.substr(b.length)), (a.root = b));
        }
      b = a.params;
      c = _.gi(a.path);
      h = String(_.Sf("googleapis.config/xd3") || "");
      h.length >= 18 &&
        h.substring(h.length - 18) == "/static/proxy.html" &&
        (h = h.substring(0, h.length - 18));
      h || (h = "/");
      e = _.gi(h);
      if (h != e) throw Error("F");
      h.charAt(h.length - 1) != "/" && (h += "/");
      c = _.Hy(h, c);
      _.Wj(c, "/") && (c = c.substring(0, c.length - 1));
      h = _.wf();
      for (var k in b)
        Object.prototype.hasOwnProperty.call(b, k) &&
          ((e = encodeURIComponent(k)), (h[e] = b[k]));
      c = _.Qi(c, h);
      a.path = c;
      a.root = mB(!!d, a.root);
      a.url = DB(a.path, !!d, a.root);
    }
  };
  var RB = function (a) {
    a.Xk();
    var b = a.Hi;
    return {
      key: "gapiRequest",
      params: {
        id: b.id,
        key: b.key,
        url: b.url,
        path: b.path,
        httpMethod: b.method,
        body: b.body || "",
        headers: b.headers || {},
        urlParams: {},
        root: b.root,
        authType: a.Kn,
      },
    };
  };
  OB.prototype.execute = function (a) {
    var b = RB(this);
    KB(b, function (c, d) {
      var e = c;
      c.gapiRequest && (e = c.gapiRequest);
      e && e.data && (e = e.data);
      c = e;
      c = c instanceof Array ? c[0] : c;
      if (c.status != 204 && c.body)
        try {
          var f = _.Ug(c.body);
        } catch (h) {}
      a && a(f, d);
    });
  };
  OB.prototype.xp = function () {
    var a = RB(this);
    (_.Sf("client/cors") || _.Sf("client/xd4")) && FB(a)
      ? (rB(sB(), 15).Hb(), (a = IB(a)))
      : (rB(sB(), 14).Hb(), (a = GB(a)));
    return a;
  };
  OB.prototype.sj = function () {
    return this.xp();
  };
  var QB = ["appVersion", "platform", "userAgent"],
    PB = { "google-api-gwt-client": !0, "google-api-javascript-client": !0 };
  OB.prototype.execute = OB.prototype.execute;
  OB.prototype.then = OB.prototype.then;
  OB.prototype.getPromise = OB.prototype.sj;
  var SB = function (a) {
    if (!a || typeof a != "object") throw new bB("Missing rpc parameters");
    if (!a.method) throw new bB("Missing rpc method");
    this.nC = a;
  };
  SB.prototype.we = function () {
    var a = this.nC.transport;
    return a ? a.root || null : null;
  };
  SB.prototype.execute = function (a) {
    var b = hB();
    b.add(this, { id: "gapiRpc", callback: this.zv(a) });
    b.execute();
  };
  SB.prototype.fB = function (a) {
    var b = this.nC.method,
      c = String,
      d;
    (d = this.nC.apiVersion) ||
      ((d = String(b).split(".")[0]),
      (d =
        _.Sf("googleapis.config/versions/" + b) ||
        _.Sf("googleapis.config/versions/" + d) ||
        "v1"),
      (d = String(d)));
    a = { jsonrpc: "2.0", id: a, method: b, apiVersion: c(d) };
    (b = this.nC.rpcParams) && (a.params = b);
    return a;
  };
  SB.prototype.zv = function (a) {
    return function (b, c) {
      if (b)
        if (b.error) {
          var d = b.error;
          d.error == null && (d.error = _.Nk(b.error));
        } else
          (d = b.result || b.data),
            _.yc(d) &&
              d.result == null &&
              (d.result = _.Nk(b.result || b.data));
      else d = !1;
      a(d, c);
    };
  };
  SB.prototype.execute = SB.prototype.execute;
  var UB = function (a, b) {
      this.Ke = b || 0;
      this.Ke == 2
        ? ((b = null),
          a != null &&
            _.yc(a) &&
            ((b = {}),
            (b.method = a.method),
            (b.rpcParams = a.rpcParams),
            (b.transport = a.transport),
            (b.root = a.root),
            (b.apiVersion = a.apiVersion),
            (b.authType = a.authType)),
          (this.Db = new SB(b)))
        : (this.Ke == 0 && (b = a && a.callback) && (a.callback = TB(b)),
          (b = null),
          a != null &&
            (_.yc(a)
              ? ((b = {}),
                (b.path = a.path),
                (b.method = a.method),
                (b.params = a.params),
                (b.headers = a.headers),
                (b.body = a.body),
                (b.root = a.root),
                (b.responseType = a.responseType),
                (b.authType = a.authType),
                (b.apiId = a.apiId))
              : typeof a === "string" && (b = a)),
          (this.Db = new OB(b)));
    },
    TB = function (a) {
      return function (b) {
        if (b != null && _.yc(b) && b.error) {
          var c = MB(b);
          b = _.Vg([{ id: "gapiRpc", error: c }]);
          c.error = _.gj(c);
        } else
          b == null && (b = {}),
            (c = _.gj(b)),
            (c.result = _.gj(b)),
            (b = _.Vg([{ id: "gapiRpc", result: b }]));
        a(c, b);
      };
    };
  _.g = UB.prototype;
  _.g.getFormat = function () {
    return this.Ke;
  };
  _.g.execute = function (a) {
    this.Db.execute(a && this.Ke == 1 ? TB(a) : a);
  };
  _.g.then = function (a, b, c) {
    this.Ke == 2 && NB('The "then" method is not available on this object.');
    return this.Db.then(a, b, c);
  };
  _.g.WC = function (a) {
    this.Db.WC && this.Db.WC(a);
  };
  _.g.nf = function () {
    if (this.Db.nf) return this.Db.nf();
  };
  _.g.Xk = function () {
    this.Db.nf && this.Db.Xk();
  };
  _.g.we = function () {
    if (this.Db.we) return this.Db.we();
  };
  _.g.fB = function (a) {
    if (this.Db.fB) return this.Db.fB(a);
  };
  _.g.Sj = function (a) {
    this.Db.Sj && this.Db.Sj(a);
  };
  _.g.Hu = function () {
    return this.Db.Hu();
  };
  _.g.sj = function () {
    if (this.Db.sj) return this.Db.sj();
  };
  UB.prototype.execute = UB.prototype.execute;
  UB.prototype.then = UB.prototype.then;
  UB.prototype.getPromise = UB.prototype.sj;
  var VB = /<response-(.*)>/,
    WB = /^application\/http(;.+$|$)/,
    XB = [
      "clients6.google.com",
      "content.googleapis.com",
      "www.googleapis.com",
    ],
    YB = function (a, b) {
      a = _.si(a, b);
      if (!a) throw new bB("Unable to retrieve header.");
      return a;
    },
    ZB = function (a) {
      var b = void 0;
      a = _.sa(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        c = c.value.nf().apiId;
        if (typeof c !== "string") return "batch";
        if (b === void 0) b = c;
        else if (b != c) return "batch";
      }
      b = _.Sf("client/batchPath/" + b) || "batch/" + b.split(":").join("/");
      return String(b);
    },
    $B = function (a) {
      a = a.map(function (b) {
        return b.request;
      });
      return ZB(a);
    },
    aC = function (a, b) {
      var c = [];
      a = a.nf();
      var d = function (f, h) {
          _.vn(f, function (k, l) {
            h.push(l + ": " + k);
          });
        },
        e = {
          "Content-Type": "application/http",
          "Content-Transfer-Encoding": "binary",
        };
      e["Content-ID"] = "<" + b + ">";
      d(e, c);
      c.push("");
      c.push(a.method + " " + a.path);
      d(a.headers, c);
      c.push("");
      a.body && c.push(a.body);
      return c.join("\r\n");
    },
    dC = function (a, b) {
      a = bC(a, b);
      var c = {};
      _.wb(a, function (d, e) {
        c[e] = cC(d, e);
      });
      return c;
    },
    cC = function (a, b) {
      return {
        result: a.result || a.body,
        rawResult: _.Vg({ id: b, result: a.result || a.body }),
        id: b,
      };
    },
    bC = function (a, b) {
      a = (0, _.hd)(a);
      _.Wj(a, "--") && (a = a.substring(0, a.length - 2));
      a = a.split(b);
      b = _.wf();
      for (var c = 0; c < a.length; c++)
        if (a[c]) {
          var d;
          if ((d = a[c])) {
            _.Wj(d, "\r\n") && (d = d.substring(0, d.length - 2));
            if (d) {
              d = d.split("\r\n");
              for (
                var e = 0, f = { headers: {}, body: "" };
                e < d.length && d[e] == "";

              )
                e++;
              for (f.outerHeaders = eC(d, e); e < d.length && d[e] != ""; ) e++;
              e++;
              var h = d[e++].split(" ");
              f.status = Number(h[1]);
              f.statusText = h.slice(2).join(" ");
              for (f.headers = eC(d, e); e < d.length && d[e] != ""; ) e++;
              e++;
              f.body = d.slice(e).join("\r\n");
              CB(f);
              d = f;
            } else d = null;
            e = _.wf();
            f = YB(d.outerHeaders, "Content-Type");
            if (WB.exec(f) == null)
              throw new bB("Unexpected Content-Type <" + f + ">");
            f = YB(d.outerHeaders, "Content-ID");
            f = VB.exec(f);
            if (!f) throw new bB("Unable to recognize Content-Id.");
            e.id = decodeURIComponent(f[1].split("@")[0].replace(/^.*[+]/, ""));
            e.response = {
              status: d.status,
              statusText: d.statusText,
              headers: d.headers,
            };
            d.status != 204 &&
              ((e.response.body = d.body), (e.response.result = _.Ug(d.body)));
            d = e;
          } else d = null;
          d && d.id && (b[d.id] = d.response);
        }
      return b;
    },
    eC = function (a, b) {
      for (var c = []; b < a.length && a[b]; b++) c.push(a[b]);
      return _.ui(c.join("\r\n"), !1);
    },
    fC = function (a, b, c) {
      a = a || b;
      if (!a || _.Yu(a).Ii !== "https")
        if (
          ((a = c
            ? _.Sf("googleapis.config/root-1p")
            : _.Sf("googleapis.config/root")),
          !a)
        )
          return !1;
      a = mB(c, String(a)) || a;
      return XB.includes(_.Yu(a).eh());
    };
  var gC = function (a) {
    cB.call(this, gC.prototype.xp);
    this.Bk = {};
    this.hy = {};
    this.fn = [];
    this.Df = a;
    this.Uba = !!a;
    this.vU = this.nA = !1;
  };
  _.A(gC, cB);
  var hC = function (a, b) {
    a = _.sa(Object.values(a.Bk));
    for (var c = a.next(); !c.done; c = a.next())
      if (
        c.value
          .map(function (d) {
            return d.id;
          })
          .includes(b)
      )
        return !0;
    return !1;
  };
  gC.prototype.nq = function (a) {
    (function (b) {
      setTimeout(function () {
        throw b;
      });
    })(a);
  };
  gC.prototype.add = function (a, b) {
    var c = b || _.wf();
    b = _.wf();
    if (!a)
      throw new bB(
        "Batch entry " +
          (_.xf(c, "id") ? '"' + c.id + '" ' : "") +
          "is missing a request method"
      );
    a.Xk();
    b.request = a;
    var d = _.ql();
    d = new LB(d);
    b.hC = d;
    a.WC(b.hC.promise);
    d = a.nf().headers;
    _.qj(d) && (this.nA = !0);
    (d = String((d || {}).Authorization || "") || null) &&
      d.match(/^Bearer|MAC[ \t]/i) &&
      (this.vU = !0);
    d = a.nf().root;
    if (!this.Uba) {
      if (d && this.Df && d != this.Df)
        throw new bB(
          'The "root" provided in this request is not consistent with that of existing requests in the batch.'
        );
      this.Df = d || this.Df;
    }
    if (_.xf(c, "id")) {
      d = c.id;
      if (hC(this, d))
        throw new bB(
          'Batch ID "' + d + '" already in use, please use another.'
        );
      b.id = d;
    } else {
      do b.id = String(Math.round(2147483647 * _.Aj()));
      while (hC(this, b.id));
    }
    b.callback = c.callback;
    c = "batch";
    fC(this.Df, a.nf().path, this.nA) && (c = $B([b]));
    this.Bk[c] = this.Bk[c] || [];
    this.Bk[c].push(b);
    this.hy[b.id] = b;
    return b.id;
  };
  var iC = function (a) {
    var b = [],
      c = fC(a.Df, void 0, a.nA);
    Object.entries(a.Bk).length > 1 &&
      _.Zg.warn(
        "Heterogeneous batch requests are deprecated. See https://developers.googleblog.com/2018/03/discontinuing-support-for-json-rpc-and.html"
      );
    for (
      var d = _.sa(Object.entries(a.Bk)), e = d.next();
      !e.done;
      e = d.next()
    ) {
      e = _.sa(e.value);
      var f = e.next().value;
      e = e.next().value;
      for (var h = !0, k = _.sa(e), l = k.next(); !l.done; l = k.next())
        (l = l.value),
          l.request.Xk(),
          f === "batch" &&
            c &&
            ((h = !1),
            (l.oba = !0),
            (l.request.nf.root = a.Df),
            b.push(l.request),
            a.fn.push([l]));
      if (h) {
        var m = e;
        f = a.Df;
        h = a.nA;
        k = a.vU;
        l =
          "batch" +
          String(Math.round(2147483647 * _.Aj())) +
          String(Math.round(2147483647 * _.Aj()));
        var n = "--" + l;
        l = "multipart/mixed; boundary=" + l;
        for (
          var p = { path: $B(m), method: "POST" }, q = [], t = 0;
          t < m.length;
          t++
        )
          q.push(
            aC(
              m[t].request,
              [
                n.substr(n.indexOf("--") + 2),
                "+",
                encodeURIComponent(m[t].id)
                  .split("(")
                  .join("%28")
                  .split(")")
                  .join("%29")
                  .split(".")
                  .join("%2E"),
                "@googleapis.com",
              ].join("")
            )
          );
        p.body =
          [n, q.join("\r\n" + n + "\r\n"), n + "--"].join("\r\n") + "\r\n";
        p.root = f || null;
        _.Sf("client/xd4") && lB()
          ? ((p.isXd4 = !0),
            (p.params = { $ct: l }),
            (p.headers = {}),
            _.ti(p.headers, "Content-Type", "text/plain; charset=UTF-8"),
            h ? (p.authType = "1p") : k && (p.authType = "oauth2"),
            (f = new OB(p)))
          : ((p.headers = {}), _.ti(p.headers, "Content-Type", l), (f = iB(p)));
        b.push(f);
        a.fn.push(e);
      }
    }
    return b;
  };
  gC.prototype.execute = function (a) {
    if (!(Object.keys(this.Bk).length < 1)) {
      var b = this.zv(a);
      a = iC(this);
      var c = [],
        d = a.map(function (e) {
          return new _.gl(function (f) {
            try {
              e.execute(function (h, k) {
                return f({ CP: h, Fda: k });
              });
            } catch (h) {
              c.push(h), f({ CP: { rz: !1, reason: h } });
            }
          });
        });
      if (c.length > 0 && c.length === a.length) throw c[0];
      _.ol(d).then(function (e) {
        var f = e.map(function (h) {
          return h.Fda;
        });
        e = e.map(function (h) {
          return h.CP;
        });
        b(e, f);
      });
    }
  };
  gC.prototype.xp = function () {
    var a = this;
    if (Object.keys(this.Bk).length < 1) return _.kl({});
    var b = iC(this).map(function (c) {
      return new _.gl(function (d, e) {
        return c.sj().then(d, e);
      });
    });
    return fB(b).then(function (c) {
      c = c.map(function (d) {
        return d.rz ? d.value : d;
      });
      return jC(a, c, !0);
    });
  };
  gC.prototype.TX = function (a, b, c, d) {
    var e = {};
    if (c) {
      e = b ? bC : dC;
      b = YB(a.headers, "Content-Type").split("boundary=")[1];
      if (!b) throw new bB("Boundary not indicated in response.");
      e = e(a.body, "--" + b);
    } else b ? ((a.result = _.Ug(a.body)), (e[d] = a)) : (e[d] = cC(a, d));
    a = {};
    e = _.sa(Object.entries(e));
    for (b = e.next(); !b.done; b = e.next())
      if (
        ((c = _.sa(b.value)),
        (b = c.next().value),
        (c = c.next().value),
        (a[b] = c),
        !this.hy[b])
      )
        throw new bB("Could not find batch entry for id " + b + ".");
    return a;
  };
  var jC = function (a, b, c, d, e) {
      for (var f = !1, h = {}, k, l = 0, m = 0; m < b.length; m++) {
        var n = b[m];
        if (n.rz === !1) {
          l++;
          b[m] = n.reason;
          n = kC([b[m]]);
          for (var p = _.sa(a.fn[m]), q = p.next(); !q.done; q = p.next())
            h[q.value.id] = n;
        } else {
          if (a.fn[m].length < 1)
            throw new bB("Error processing batch responses.");
          try {
            var t = !(a.fn[m].length === 1 && a.fn[m][0].oba),
              v = a.fn[m][0].id;
            if (!c) {
              p = n;
              q = t;
              var u = d[m],
                w = p;
              if (u && (!w || !q)) {
                var y = _.Ug(u);
                y &&
                  ((w = y.gapiRequest ? y.gapiRequest.data : y),
                  !q && p && (w.body = p));
              }
              if (!w) throw new bB("The batch response is missing.");
              n = w;
            }
            p = void 0;
            if ((q = n)) {
              var D = q.headers;
              if (D) {
                var C = _.wf();
                for (p in D)
                  if (Object.prototype.hasOwnProperty.call(D, p)) {
                    var I = _.si(D, p);
                    _.ti(C, p, I, !0);
                  }
                q.headers = C;
              }
            }
            if (
              t &&
              YB(n.headers, "Content-Type").indexOf("multipart/mixed") != 0
            )
              throw new bB(
                "The response's Content-Type is not multipart/mixed."
              );
            k = k || _.gj(n);
            var L = kB(n);
            L &&
              !kB(k) &&
              ((k.status = n.status), (k.statusText = n.statusText));
            if (L || c || !t)
              (f = !0), (h = Object.assign(h, a.TX(n, c, t, v)));
          } catch (P) {
            for (
              l++, b[m] = P, n = kC([P]), p = _.sa(a.fn[m]), q = p.next();
              !q.done;
              q = p.next()
            )
              h[q.value.id] = n;
          }
        }
      }
      if (l === b.length) {
        d = kC(b);
        h = _.Vg(d);
        k = 0;
        a = Array.from(Object.values(a.Bk)).flat();
        f = _.sa(a);
        for (l = f.next(); !l.done; l = f.next())
          if (((l = l.value), c)) l.hC.reject(d);
          else if (l.callback)
            try {
              k++, l.callback(d, h);
            } catch (P) {
              gC.prototype.nq(P);
            }
        if (e)
          try {
            e(d, h);
          } catch (P) {
            gC.prototype.nq(P);
          }
        else if (k !== a.length) throw b.length === 1 ? b[0] : d;
      } else {
        if (f)
          for (f = _.sa(Object.entries(h)), l = f.next(); !l.done; l = f.next())
            if (
              ((l = _.sa(l.value)),
              (m = l.next().value),
              (l = l.next().value),
              c)
            )
              (m = a.hy[m]), l && kB(l) ? m.hC.resolve(l) : m.hC.reject(l);
            else if (((m = a.hy[m]), m.callback)) {
              if (l && l.rawResult)
                try {
                  delete l.rawResult;
                } catch (P) {}
              try {
                m.callback(l || !1, _.Vg(l));
              } catch (P) {
                gC.prototype.nq(P);
              }
            }
        k.result = h || {};
        k.body = b.length === 1 ? k.body : "";
        if (e)
          try {
            e(h || null, d.length === 1 ? d[0] : null);
          } catch (P) {
            gC.prototype.nq(P);
          }
        return k;
      }
    },
    kC = function (a) {
      var b = {
        error: {
          code: 0,
          message: "The batch request could not be fulfilled.  ",
        },
      };
      a = _.sa(a);
      for (var c = a.next(); !c.done; c = a.next())
        ((c = c.value) && c.message) || (c instanceof Error && c.message)
          ? (b.error.message +=
              (c.message || (c instanceof Error && c.message)) + "  ")
          : c &&
            c.error &&
            c.error.message &&
            ((b.error.message += c.error.message + "  "),
            (b.error.code = c.error.code || b.error.code || 0));
      b.error.message = b.error.message.trim();
      return {
        result: b,
        body: _.Vg(b),
        headers: null,
        status: null,
        statusText: null,
      };
    };
  gC.prototype.zv = function (a) {
    var b = this;
    return function (c, d) {
      b.IE(c, d, a);
    };
  };
  gC.prototype.IE = function (a, b, c) {
    jC(this, a, !1, b, c);
  };
  gC.prototype.add = gC.prototype.add;
  gC.prototype.execute = gC.prototype.execute;
  gC.prototype.then = gC.prototype.then;
  var lC = function () {
    this.Yl = [];
    this.Df = this.Af = null;
  };
  lC.prototype.add = function (a, b) {
    b = b || {};
    var c = {},
      d = Object.prototype.hasOwnProperty;
    if (a) c.rpc = a;
    else
      throw new bB(
        "Batch entry " +
          (d.call(b, "id") ? '"' + b.id + '" ' : "") +
          "is missing a request method"
      );
    if (d.call(b, "id")) {
      a = b.id;
      for (d = 0; d < this.Yl.length; d++)
        if (this.Yl[d].id == a)
          throw new bB(
            'Batch ID "' + a + '" already in use, please use another.'
          );
      c.id = a;
    } else {
      do c.id = String((2147483647 * _.Aj()) | 0);
      while (d.call(this.Yl, c.id));
    }
    c.callback = b.callback;
    this.Yl.push(c);
    return c.id;
  };
  var mC = function (a) {
    return function (b) {
      var c = b.body;
      if ((b = b.result)) {
        for (var d = {}, e = 0, f = b.length; e < f; ++e) d[b[e].id] = b[e];
        a(d, c);
      } else a(b, c);
    };
  };
  lC.prototype.execute = function (a) {
    this.Af = [];
    for (var b, c, d = 0; d < this.Yl.length; d++)
      (b = this.Yl[d]),
        (c = b.rpc),
        this.Af.push(c.fB(b.id)),
        (this.Df = c.we() || this.Df);
    c = this.zv(a);
    a = { requests: this.Af, root: this.Df };
    b = {};
    d = a.headers || {};
    for (var e in d) {
      var f = e;
      if (Object.prototype.hasOwnProperty.call(d, f)) {
        var h = _.si(d, f);
        h && (f = _.qi(f, h) || _.pi(f)) && _.ti(b, f, h);
      }
    }
    _.ti(b, "Content-Type", "application/json");
    e = mC(c);
    iB({
      method: "POST",
      root: a.root || void 0,
      path: "/rpc",
      params: a.urlParams,
      headers: b,
      body: a.requests || [],
    }).then(e, e);
  };
  lC.prototype.zv = function (a) {
    var b = this;
    return function (c, d) {
      b.IE(c, d, a);
    };
  };
  lC.prototype.IE = function (a, b, c) {
    a || (a = {});
    for (var d = 0; d < this.Yl.length; d++) {
      var e = this.Yl[d];
      e.callback && e.callback(a[e.id] || !1, b);
    }
    c && c(a, b);
  };
  jB.HP(function () {
    return new lC();
  });
  lC.prototype.add = lC.prototype.add;
  lC.prototype.execute = lC.prototype.execute;
  var nC = function (a, b) {
    this.ada = a;
    this.Ke = b || null;
    this.Jf = null;
  };
  nC.prototype.UH = function (a) {
    this.Ke = a;
    this.Jf = this.Ke == 2 ? new lC() : new gC(this.ada);
  };
  nC.prototype.add = function (a, b) {
    if (!a)
      throw (
        ((a = b || _.wf()),
        new bB(
          "Batch entry " +
            (_.xf(a, "id") ? '"' + a.id + '" ' : "") +
            "is missing a request method"
        ))
      );
    this.Ke === null && this.UH(a.getFormat());
    this.Ke !== a.getFormat() && NB("Unable to add item to batch.");
    var c = b && b.callback;
    this.Ke == 1 &&
      c &&
      (b.callback = function (d) {
        d = oC(d);
        var e = _.Vg([d]);
        c(d, e);
      });
    return this.Jf.add(a, b);
  };
  nC.prototype.execute = function (a) {
    var b =
      a && this.Ke == 1
        ? function (c) {
            var d = [];
            _.vn(c, function (f, h) {
              f = oC(f);
              c[h] = f;
              d.push(f);
            });
            var e = _.Vg(d);
            a(c, e);
          }
        : a;
    this.Jf && this.Jf.execute(b);
  };
  var oC = function (a) {
    var b = a ? _.fj(a, "result") : null;
    _.yc(b) && b.error != null && ((b = MB(b)), (a = { id: a.id, error: b }));
    return a;
  };
  nC.prototype.then = function (a, b, c) {
    this.Ke == 2 && NB('The "then" method is not available on this object.');
    return this.Jf.then(a, b, c);
  };
  nC.prototype.add = nC.prototype.add;
  nC.prototype.execute = nC.prototype.execute;
  nC.prototype.then = nC.prototype.then;
  var pC = function (a) {
    cB.call(this, pC.prototype.xp);
    this.Db = a;
    this.YP = !1;
  };
  _.A(pC, cB);
  var qC = function (a) {
    a.Db.Xk();
    var b = a.Db,
      c = b.nf();
    return !(fC(c.root, c.path, a.Db.Hu()) ? ZB([b]) !== "batch" : 1);
  };
  _.g = pC.prototype;
  _.g.execute = function (a) {
    var b = this;
    this.YP = !0;
    if (qC(this)) this.Db.execute(a);
    else {
      rB(sB(), 13).Hb();
      var c = function (d) {
        if (typeof a === "function") {
          var e = {
            gapiRequest: {
              data: {
                status: d && d.status,
                statusText: d && d.statusText,
                headers: d && d.headers,
                body: d && d.body,
              },
            },
          };
          if (b.getFormat() === 1) {
            a = TB(a);
            var f = {};
          }
          var h = d ? d.result : !1;
          d && d.status == 204 && ((h = f), delete e.gapiRequest.data.body);
          a(h, _.Vg(e));
        }
      };
      this.sj().then(c, c);
    }
  };
  _.g.xp = function () {
    if (qC(this)) return this.Db.sj();
    this.YP || rB(sB(), 16).Hb();
    return new _.gl(function (a, b) {
      var c = gB(),
        d = c.add(this.Db, { id: "gapiRequest" });
      c.then(function (e) {
        var f = e.result;
        if (f && (f = f[d])) {
          Object.prototype.hasOwnProperty.call(f, "result") || (f.result = !1);
          Object.prototype.hasOwnProperty.call(f, "body") || (f.body = "");
          kB(f) ? a(f) : b(f);
          return;
        }
        b(e);
      }, b);
    }, this);
  };
  _.g.nf = function () {
    if (this.Db.nf) return this.Db.nf();
  };
  _.g.Xk = function () {
    this.Db.Xk && this.Db.Xk();
  };
  _.g.we = function () {
    if (this.Db.we) return this.Db.we();
  };
  _.g.Sj = function (a) {
    this.Db.Sj && this.Db.Sj(a);
  };
  _.g.Hu = function () {
    return this.Db.Hu();
  };
  _.g.getFormat = function () {
    return this.Db.getFormat ? this.Db.getFormat() : 0;
  };
  _.g.sj = function () {
    return this.xp();
  };
  pC.prototype.execute = pC.prototype.execute;
  pC.prototype.then = pC.prototype.then;
  pC.prototype.getPromise = pC.prototype.sj;
  var rC =
      "/rest?fields=" +
      encodeURIComponent(
        "kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id"
      ) +
      "&pp=0",
    sC = function (a, b) {
      return (
        "/discovery/v1/apis/" +
        (encodeURIComponent(a) + "/" + encodeURIComponent(b) + rC)
      );
    },
    uC = function (a, b, c, d) {
      if (_.yc(a)) {
        var e = a;
        var f = a.name;
        a = a.version || "v1";
      } else (f = a), (a = b);
      if (!f || !a) throw new bB("Missing required parameters.");
      var h = c || function () {},
        k = _.yc(d) ? d : {};
      c = function (l) {
        var m = l && l.result;
        if (!m || m.error || !m.name || !l || l.error || l.message || l.message)
          h(
            m && m.error
              ? m
              : l && (l.error || l.message || l.message)
              ? l
              : new bB("API discovery response missing required fields.")
          );
        else {
          l = k.root;
          l = m.rootUrl != null ? String(m.rootUrl) : l;
          l = typeof l === "string" ? l.replace(/([^\/])\/$/, "$1") : void 0;
          k.root = l;
          m.name &&
            m.version &&
            !m.id &&
            (m.id = [m.name, m.version].join(":"));
          m.id &&
            ((k.apiId = m.id),
            (l = "client/batchPath/" + m.id),
            m.batchPath && !_.Sf(l) && _.Tf(l, m.batchPath));
          var n = m.servicePath,
            p = m.parameters,
            q = function (v) {
              _.vn(v, function (u) {
                if (!(u && u.id && u.path && u.httpMethod))
                  throw new bB("Missing required parameters");
                var w = u.id.split("."),
                  y = window.gapi.client,
                  D;
                for (D = 0; D < w.length - 1; D++) {
                  var C = w[D];
                  y[C] = y[C] || {};
                  y = y[C];
                }
                var I, L;
                k &&
                  (k.hasOwnProperty("root") && (I = k.root),
                  k.hasOwnProperty("apiId") && (L = k.apiId));
                C = window.gapi.client[w[0]];
                C.KN ||
                  (C.KN = { servicePath: n || "", parameters: p, apiId: L });
                w = w[D];
                y[w] ||
                  (y[w] = _.$a(
                    tC,
                    {
                      path: typeof u.path === "string" ? u.path : null,
                      httpMethod:
                        typeof u.httpMethod === "string" ? u.httpMethod : null,
                      parameters: u.parameters,
                      parameterName: (u.request || {}).parameterName || "",
                      request: u.request,
                      root: I,
                    },
                    C.KN
                  ));
              });
            },
            t = function (v) {
              _.vn(v, function (u) {
                q(u.methods);
                t(u.resources);
              });
            };
          t(m.resources);
          q(m.methods);
          h.call();
        }
      };
      e
        ? c({ result: e })
        : f.indexOf("://") > 0
        ? iB({
            path: f,
            params: {
              pp: 0,
              fields:
                ("/" + f).indexOf("/discovery/v1/apis/") >= 0
                  ? "kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id"
                  : 'fields["kind"],fields["name"],fields["version"],fields["rootUrl"],fields["servicePath"],fields["resources"],fields["parameters"],fields["methods"],fields["batchPath"],fields["id"]',
            },
          }).then(c, c)
        : iB({ path: sC(f, a), root: d && d.root }).then(c, c);
    },
    tC = function (a, b, c, d, e) {
      e = e === void 0 ? {} : e;
      var f = b.servicePath || "";
      _.fd(f, "/") || (f = "/" + f);
      var h = vC(a.path, [a.parameters, b.parameters], c || {});
      c = h.Ld;
      var k = h.Kga;
      f = _.Hy(f, h.path);
      h = k.root;
      delete k.root;
      var l = a.parameterName;
      !l && _.Au(k) == 1 && k.hasOwnProperty("resource") && (l = "resource");
      if (l) {
        var m = k[l];
        delete k[l];
      }
      m == null && (m = d);
      m == null && a.request && (_.Di(k) && (k = void 0), (m = k));
      e = e || {};
      l = a.httpMethod;
      l == "GET" &&
        m !== void 0 &&
        String(m) != "" &&
        (_.ti(e, "X-HTTP-Method-Override", l), (l = "POST"));
      if ((m == null || d != null) && k)
        for (var n in k) typeof k[n] === "string" && (c[n] = k[n]);
      return iB(
        {
          path: f,
          method: l,
          params: c,
          headers: e,
          body: m,
          root: h || a.root,
          apiId: b.apiId,
        },
        1
      );
    },
    vC = function (a, b, c) {
      c = _.Nk(c);
      var d = {};
      _.un(b, function (e) {
        _.vn(e, function (f, h) {
          var k = f.required;
          if (f.location == "path")
            if (Object.prototype.hasOwnProperty.call(c, h))
              _.$b(a, "{" + h + "}")
                ? ((f = encodeURIComponent(String(c[h]))),
                  (a = a.replace("{" + h + "}", f)))
                : _.$b(a, "{+" + h + "}") &&
                  ((f = encodeURI(String(c[h]))),
                  (a = a.replace("{+" + h + "}", f))),
                delete c[h];
            else {
              if (k)
                throw new bB("Required path parameter " + h + " is missing.");
            }
          else
            f.location == "query" &&
              Object.prototype.hasOwnProperty.call(c, h) &&
              ((d[h] = c[h]), delete c[h]);
        });
      });
      if ((b = c.trace)) (d.trace = b), delete c.trace;
      return { path: a, Ld: d, Kga: c };
    };
  var wC = function (a, b, c, d) {
      var e = b || "v1",
        f = _.yc(d) ? d : { root: d };
      if (c)
        uC(
          a,
          e,
          function (h) {
            if (h)
              if (h.error) c(h);
              else {
                var k = "API discovery was unsuccessful.";
                if (h.message || h.message) k = h.message || h.message;
                c({ error: k, code: 0 });
              }
            else c();
          },
          f
        );
      else
        return new _.gl(function (h, k) {
          var l = function (m) {
            m ? k(m) : h();
          };
          try {
            uC(a, e, l, f);
          } catch (m) {
            k(m);
          }
        });
    },
    xC = new RegExp(
      /^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source +
        /(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source
    ),
    yC = function (a, b) {
      if (!a) throw new bB("Missing required parameters");
      var c = typeof a === "object" ? a : { path: a };
      a = c.callback;
      delete c.callback;
      b = new UB(c, b);
      if ((c = !!_.Sf("client/xd4") && lB())) {
        var d = b.nf();
        c = d.path;
        (d = d.root) && d.charAt(d.length - 1) !== "/" && (d += "/");
        d && c && c.substr(0, d.length) === d && (c = c.substr(d.length));
        c = !c.match(xC);
      }
      c && (b = new pC(b));
      return a ? (b.execute(a), null) : b;
    };
  jB.IP(function (a) {
    return yC.apply(null, arguments);
  });
  var zC = function (a, b) {
      if (!a) throw new bB("Missing required parameters");
      for (
        var c = a.split("."), d = window.gapi.client, e = 0;
        e < c.length - 1;
        e++
      ) {
        var f = c[e];
        d[f] = d[f] || {};
        d = d[f];
      }
      c = c[c.length - 1];
      if (!d[c]) {
        var h = b || {};
        d[c] = function (k) {
          var l = typeof h == "string" ? h : h.root;
          k && k.root && (l = k.root);
          return new UB(
            {
              method: a,
              apiVersion: h.apiVersion,
              rpcParams: k,
              transport: { name: "googleapis", root: l },
            },
            2
          );
        };
      }
    },
    AC = function (a) {
      return new nC(a);
    };
  jB.GP(function (a) {
    return AC.apply(null, arguments);
  });
  var BC = function (a) {
    if (_.lj.JSONRPC_ERROR_MOD)
      throw new bB(
        a +
          " is discontinued. See https://developers.googleblog.com/2018/03/discontinuing-support-for-json-rpc-and.html"
      );
    _.Zg.log(
      a +
        " is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs"
    );
  };
  _.r("gapi.client.init", function (a) {
    a.apiKey && _.Tf("client/apiKey", a.apiKey);
    var b = _.bd(a.discoveryDocs || [], function (d) {
      return wC(d);
    });
    if ((a.clientId || a.client_id) && a.scope) {
      var c = new _.gl(function (d, e) {
        var f = function () {
          _.Sa.gapi.auth2.init.call(_.Sa.gapi.auth2, a).then(function () {
            d();
          }, e);
        };
        dB
          ? f()
          : _.Sa.gapi.load("auth2", {
              callback: function () {
                f();
              },
              onerror: function (h) {
                e(h || Error("Ja"));
              },
            });
      });
      b.push(c);
    } else (a.clientId || a.client_id || a.scope) && _.Zg.log("client_id and scope must both be provided to initialize OAuth.");
    return _.ol(b).then(function () {});
  });
  _.r("gapi.client.load", wC);
  _.r("gapi.client.newBatch", AC);
  _.r("gapi.client.newRpcBatch", function () {
    BC("gapi.client.newRpcBatch");
    return AC();
  });
  _.r("gapi.client.newHttpBatch", function (a) {
    BC("gapi.client.newHttpBatch");
    return new nC(a, 0);
  });
  _.r("gapi.client.register", function (a, b) {
    BC("gapi.client.register");
    var c;
    b && (c = { apiVersion: b.apiVersion, root: b.root });
    zC(a, c);
  });
  _.r("gapi.client.request", yC);
  _.r("gapi.client.rpcRequest", function (a, b, c) {
    BC("gapi.client.rpcRequest");
    if (!a) throw new bB('Missing required parameter "method".');
    return new UB(
      {
        method: a,
        apiVersion: b,
        rpcParams: c,
        transport: { name: "googleapis", root: (c && c.root) || "" },
      },
      2
    );
  });
  _.r("gapi.client.setApiKey", function (a) {
    _.Tf("client/apiKey", a);
    _.Tf("googleapis.config/developerKey", a);
  });
  _.r("gapi.client.setApiVersions", function (a) {
    BC("gapi.client.setApiVersions");
    _.Tf("googleapis.config/versions", a);
  });
  _.r("gapi.client.getToken", function (a) {
    return _.tj(a);
  });
  _.r("gapi.client.setToken", function (a, b) {
    a ? _.Pw(a, b) : _.Qw(b);
  });
  _.r("gapi.client.AuthType", {
    vha: "auto",
    NONE: "none",
    dla: "oauth2",
    qja: "1p",
  });
  _.r("gapi.client.AuthType.AUTO", "auto");
  _.r("gapi.client.AuthType.NONE", "none");
  _.r("gapi.client.AuthType.OAUTH2", "oauth2");
  _.r("gapi.client.AuthType.FIRST_PARTY", "1p");
  _.lj.FPA_SAMESITE_PHASE2_MOD = !0;
});
// Google Inc.
