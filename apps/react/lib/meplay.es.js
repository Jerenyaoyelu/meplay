import * as W from "react";
import Ye, { useEffect as he, useState as X, useCallback as gt, useRef as fe } from "react";
var ee = {}, mt = {
  get exports() {
    return ee;
  },
  set exports(p) {
    ee = p;
  }
}, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function yt() {
  if (Fe)
    return U;
  Fe = 1;
  var p = Ye, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(h, l, b) {
    var d, y = {}, _ = null, R = null;
    b !== void 0 && (_ = "" + b), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (R = l.ref);
    for (d in l)
      s.call(l, d) && !c.hasOwnProperty(d) && (y[d] = l[d]);
    if (h && h.defaultProps)
      for (d in l = h.defaultProps, l)
        y[d] === void 0 && (y[d] = l[d]);
    return { $$typeof: a, type: h, key: _, ref: R, props: y, _owner: i.current };
  }
  return U.Fragment = n, U.jsx = m, U.jsxs = m, U;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function bt() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Ye, a = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), A = Symbol.iterator, N = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = A && e[A] || e[N];
      return typeof t == "function" ? t : null;
    }
    var S = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        te("error", e, r);
      }
    }
    function te(e, t, r) {
      {
        var o = S.ReactDebugCurrentFrame, v = o.getStackAddendum();
        v !== "" && (t += "%s", r = r.concat([v]));
        var g = r.map(function(f) {
          return String(f);
        });
        g.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var j = !1, z = !1, re = !1, He = !1, $e = !1, pe;
    pe = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === c || $e || e === i || e === b || e === d || He || e === R || j || z || re || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === y || e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function Be(e, t, r) {
      var o = e.displayName;
      if (o)
        return o;
      var v = t.displayName || t.name || "";
      return v !== "" ? r + "(" + v + ")" : r;
    }
    function _e(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case b:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var t = e;
            return _e(t) + ".Consumer";
          case m:
            var r = e;
            return _e(r._context) + ".Provider";
          case l:
            return Be(e, e.render, "ForwardRef");
          case y:
            var o = e.displayName || null;
            return o !== null ? o : D(e.type) || "Memo";
          case _: {
            var v = e, g = v._payload, f = v._init;
            try {
              return D(f(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, H = 0, ge, me, ye, be, xe, Ee, we;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ve() {
      {
        if (H === 0) {
          ge = console.log, me = console.info, ye = console.warn, be = console.error, xe = console.group, Ee = console.groupCollapsed, we = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        H++;
      }
    }
    function Ge() {
      {
        if (H--, H === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ge
            }),
            info: k({}, e, {
              value: me
            }),
            warn: k({}, e, {
              value: ye
            }),
            error: k({}, e, {
              value: be
            }),
            group: k({}, e, {
              value: xe
            }),
            groupCollapsed: k({}, e, {
              value: Ee
            }),
            groupEnd: k({}, e, {
              value: we
            })
          });
        }
        H < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = S.ReactCurrentDispatcher, ie;
    function G(e, t, r) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (v) {
            var o = v.stack.trim().match(/\n( *(at )?)/);
            ie = o && o[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var ae = !1, J;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Je();
    }
    function Te(e, t) {
      if (!e || ae)
        return "";
      {
        var r = J.get(e);
        if (r !== void 0)
          return r;
      }
      var o;
      ae = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = ne.current, ne.current = null, Ve();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (I) {
              o = I;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (I) {
              o = I;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            o = I;
          }
          e();
        }
      } catch (I) {
        if (I && o && typeof I.stack == "string") {
          for (var u = I.stack.split(`
`), T = o.stack.split(`
`), x = u.length - 1, w = T.length - 1; x >= 1 && w >= 0 && u[x] !== T[w]; )
            w--;
          for (; x >= 1 && w >= 0; x--, w--)
            if (u[x] !== T[w]) {
              if (x !== 1 || w !== 1)
                do
                  if (x--, w--, w < 0 || u[x] !== T[w]) {
                    var M = `
` + u[x].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, M), M;
                  }
                while (x >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ne.current = g, Ge(), Error.prepareStackTrace = v;
      }
      var F = e ? e.displayName || e.name : "", Le = F ? G(F) : "";
      return typeof e == "function" && J.set(e, Le), Le;
    }
    function Qe(e, t, r) {
      return Te(e, !1);
    }
    function qe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Q(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, qe(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case b:
          return G("Suspense");
        case d:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Qe(e.render);
          case y:
            return Q(e.type, t, r);
          case _: {
            var o = e, v = o._payload, g = o._init;
            try {
              return Q(g(v), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Oe = {}, je = S.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var t = e._owner, r = Q(e.type, e._source, t ? t.type : null);
        je.setExtraStackFrame(r);
      } else
        je.setExtraStackFrame(null);
    }
    function Ze(e, t, r, o, v) {
      {
        var g = Function.call.bind(q);
        for (var f in e)
          if (g(e, f)) {
            var u = void 0;
            try {
              if (typeof e[f] != "function") {
                var T = Error((o || "React class") + ": " + r + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              u = e[f](t, f, o, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              u = x;
            }
            u && !(u instanceof Error) && (Z(v), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, f, typeof u), Z(null)), u instanceof Error && !(u.message in Oe) && (Oe[u.message] = !0, Z(v), E("Failed %s type: %s", r, u.message), Z(null));
          }
      }
    }
    var Xe = Array.isArray;
    function se(e) {
      return Xe(e);
    }
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function et(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Me(e) {
      if (et(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Se(e);
    }
    var $ = S.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, De, oe;
    oe = {};
    function rt(e) {
      if (q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nt(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function it(e, t) {
      if (typeof e.ref == "string" && $.current && t && $.current.stateNode !== t) {
        var r = D($.current.type);
        oe[r] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D($.current.type), e.ref), oe[r] = !0);
      }
    }
    function at(e, t) {
      {
        var r = function() {
          Ce || (Ce = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function st(e, t) {
      {
        var r = function() {
          De || (De = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var ot = function(e, t, r, o, v, g, f) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: f,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ct(e, t, r, o, v) {
      {
        var g, f = {}, u = null, T = null;
        r !== void 0 && (Me(r), u = "" + r), nt(t) && (Me(t.key), u = "" + t.key), rt(t) && (T = t.ref, it(t, v));
        for (g in t)
          q.call(t, g) && !tt.hasOwnProperty(g) && (f[g] = t[g]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (g in x)
            f[g] === void 0 && (f[g] = x[g]);
        }
        if (u || T) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && at(f, w), T && st(f, w);
        }
        return ot(e, u, T, v, o, $.current, f);
      }
    }
    var ce = S.ReactCurrentOwner, Ie = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, r = Q(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(r);
      } else
        Ie.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Pe() {
      {
        if (ce.current) {
          var e = D(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lt(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + t + ":" + r + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function ut(e) {
      {
        var t = Pe();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function ke(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = ut(t);
        if (Ae[r])
          return;
        Ae[r] = !0;
        var o = "";
        e && e._owner && e._owner !== ce.current && (o = " It was passed a child from " + D(e._owner.type) + "."), L(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, o), L(null);
      }
    }
    function Ne(e, t) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            ue(o) && ke(o, t);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = C(e);
          if (typeof v == "function" && v !== e.entries)
            for (var g = v.call(e), f; !(f = g.next()).done; )
              ue(f.value) && ke(f.value, t);
        }
      }
    }
    function ft(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === y))
          r = t.propTypes;
        else
          return;
        if (r) {
          var o = D(t);
          Ze(r, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !le) {
          le = !0;
          var v = D(t);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var o = t[r];
          if (o !== "children" && o !== "key") {
            L(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function ze(e, t, r, o, v, g) {
      {
        var f = Ue(e);
        if (!f) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = lt(v);
          T ? u += T : u += Pe();
          var x;
          e === null ? x = "null" : se(e) ? x = "array" : e !== void 0 && e.$$typeof === a ? (x = "<" + (D(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, u);
        }
        var w = ct(e, t, r, v, g);
        if (w == null)
          return w;
        if (f) {
          var M = t.children;
          if (M !== void 0)
            if (o)
              if (se(M)) {
                for (var F = 0; F < M.length; F++)
                  Ne(M[F], e);
                Object.freeze && Object.freeze(M);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(M, e);
        }
        return e === s ? dt(w) : ft(w), w;
      }
    }
    function ht(e, t, r) {
      return ze(e, t, r, !0);
    }
    function vt(e, t, r) {
      return ze(e, t, r, !1);
    }
    var pt = vt, _t = ht;
    B.Fragment = s, B.jsx = pt, B.jsxs = _t;
  }()), B;
}
(function(p) {
  process.env.NODE_ENV === "production" ? p.exports = yt() : p.exports = bt();
})(mt);
const O = ee.jsx, Y = ee.jsxs, K = {
  "cr-search-bar": "_cr-search-bar_1yagg_1",
  "cr-prefix": "_cr-prefix_1yagg_13",
  "cr-search-input": "_cr-search-input_1yagg_17"
}, xt = (p, a, n, s) => ((n || document).addEventListener(p, a, s), () => {
  (n || document).removeEventListener(p, a, s);
}), Et = "_iconSvg_1iw9w_1", wt = {
  iconSvg: Et
}, Rt = ({ size: p, url: a, name: n }) => {
  let s = !0;
  return he(() => {
    let i = null;
    return s && (s = !1, i = document.createElement("script"), i.src = a, document.body.appendChild(i)), () => {
      i && document.body.removeChild(i);
    };
  }, []), O("svg", Object.assign({ className: wt.iconSvg, "aria-hidden": !0, width: p || 14, height: p || 14 }, { children: O("use", { xlinkHref: `#icon-${n}` }) }));
};
var ve = {}, Tt = {
  get exports() {
    return ve;
  },
  set exports(p) {
    ve = p;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(p) {
  (function() {
    var a = {}.hasOwnProperty;
    function n() {
      for (var s = [], i = 0; i < arguments.length; i++) {
        var c = arguments[i];
        if (c) {
          var m = typeof c;
          if (m === "string" || m === "number")
            s.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var h = n.apply(null, c);
              h && s.push(h);
            }
          } else if (m === "object") {
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) {
              s.push(c.toString());
              continue;
            }
            for (var l in c)
              a.call(c, l) && c[l] && s.push(l);
          }
        }
      }
      return s.join(" ");
    }
    p.exports ? (n.default = n, p.exports = n) : window.classNames = n;
  })();
})(Tt);
const V = ve, Ot = ({ className: p, value: a, placeholder: n, onChange: s, onSearch: i, prefix: c, suffix: m }) => {
  const [h, l] = W.useState(null), b = W.useCallback((_) => {
    _ && l(_);
  }, []), d = W.useRef(null), y = W.useRef(null);
  return W.useEffect(() => () => {
    var _;
    (_ = y.current) === null || _ === void 0 || _.call(y);
  }, []), W.useEffect(() => {
    h && (y.current = xt("keydown", (_) => {
      _.key === "Enter" && (i == null || i());
    }, h));
  }, [h]), Y("div", Object.assign({ ref: b, className: V(p, K["cr-search-bar"]) }, { children: [O("div", Object.assign({ ref: d, className: K["cr-prefix"] }, { children: c || O(Rt, { size: 16, name: "search", url: "//at.alicdn.com/t/c/font_3949975_a2mlrx6qzwm.js" }) })), O("input", { placeholder: n || "请输入关键字", className: K["cr-search-input"], onChange: (_) => {
    var R;
    s == null || s((R = _ == null ? void 0 : _.target) === null || R === void 0 ? void 0 : R.value);
  }, value: a, type: "text" }), m && O("div", Object.assign({ className: K["cr-suffix"] }, { children: m }))] }));
}, de = {
  "cr-contact-wrap": "_cr-contact-wrap_1poio_1",
  "cr-contact-content": "_cr-contact-content_1poio_7",
  "cr-list": "_cr-list_1poio_13"
};
class jt {
  constructor(a, n, s) {
    this._canvas = null, this._letters = [], this._ctx = null, this._options = {
      width: 50,
      height: 300,
      font: "bold 14px Arial",
      fillStyle: "#000"
    }, this._listeners = [], this._down = !1, this._listenersDisposes = [], this._letterHeight = 20, this._letterMap = {}, this._canvas = a, this._letters = n, this._options = {
      ...this._options,
      ...s || {}
    }, this._init();
  }
  get canvas() {
    return this._canvas;
  }
  get ctx() {
    return this._ctx;
  }
  get letterHeight() {
    return this._letterHeight;
  }
  _init() {
    if (!this._canvas)
      return;
    const a = (i) => {
      this._down || (this._down = !0, this._compute(i));
    };
    this._canvas.addEventListener("pointerdown", a), this._listenersDisposes.push(() => {
      var i;
      (i = this._canvas) == null || i.removeEventListener("pointerdown", a);
    });
    const n = (i) => {
      this._compute(i);
    };
    this._canvas.addEventListener("pointermove", n), this._listenersDisposes.push(() => {
      var i;
      (i = this._canvas) == null || i.removeEventListener("pointermove", n);
    });
    const s = () => {
      this._down && (this._down = !1);
    };
    this._canvas.addEventListener("pointerup", s), this._listenersDisposes.push(() => {
      var i;
      (i = this._canvas) == null || i.removeEventListener("pointerup", s);
    });
  }
  on(a, n) {
    a === "onselect" && this._listeners.push(n);
  }
  _compute(a) {
    if (this._down && this._canvas) {
      const n = this._canvas.getBoundingClientRect(), s = a.clientX - n.left, i = a.clientY - n.top, c = Math.floor(i / this._letterHeight), m = this._letters[c];
      this._listeners.forEach((h) => {
        if (h instanceof Function) {
          const l = {
            letter: m,
            x: s,
            y: (c + c + 1) * this._letterHeight / 2
          };
          h(l);
        }
      });
    }
  }
  drawIndex() {
    var s, i;
    if (!this._canvas)
      throw new Error("canvas不存在");
    const a = this._options.width, n = this._letters.length * 20;
    this._canvas.setAttribute("width", a + "px"), this._canvas.setAttribute("height", n + "px"), this._ctx = (s = this._canvas) == null ? void 0 : s.getContext("2d"), this._ctx.textBaseline = "middle", this._ctx.fillStyle = "#fff", this._ctx.font = this._options.font, this._ctx.fillRect(0, 0, a, n), this._ctx.fillStyle = (i = this._options) == null ? void 0 : i.fillStyle, this._letters.forEach((c, m) => {
      var b, d;
      const h = (a - ((b = this._ctx) == null ? void 0 : b.measureText(c).width)) / 2, l = this._letterHeight * m + this._letterHeight / 2;
      (d = this._ctx) == null || d.fillText(c, h, l), this._letterMap[c] = [h, l];
    }), console.log("ppp", this._letterMap);
  }
  changeTextColor(a, n) {
    var l, b, d, y;
    console.log("oooo", a, n, this._letterMap);
    const [s, i] = this._letterMap[n], c = s, m = i - this._letterHeight / 2, h = (l = this._ctx) == null ? void 0 : l.measureText(
      n
    ).width;
    (b = this._ctx) == null || b.clearRect(c, m, h, this._letterHeight), this._ctx.fillStyle = a, (d = this._ctx) == null || d.beginPath(), (y = this._ctx) == null || y.fillText(n, s, i);
  }
  activityWeChatEffectActiveText(a, n) {
    var l, b, d, y, _, R, A, N;
    const [s, i] = this._letterMap[n], c = s, m = i - this._letterHeight / 2, h = (l = this._ctx) == null ? void 0 : l.measureText(
      n
    ).width;
    (b = this._ctx) == null || b.clearRect(c, m, h, this._letterHeight), this._ctx.fillStyle = a, (d = this._ctx) == null || d.beginPath(), (y = this._ctx) == null || y.arc(s + h / 2, i, this._letterHeight / 2, 0, 2 * Math.PI), (_ = this._ctx) == null || _.fill(), (R = this._ctx) == null || R.closePath(), this._ctx.fillStyle = "#fff", (A = this._ctx) == null || A.beginPath(), (N = this._ctx) == null || N.fillText(n, s, i);
  }
  resetText(a) {
    var h, l, b, d, y;
    if (!a)
      return;
    const [n, s] = (h = this._letterMap) == null ? void 0 : h[a], i = (l = this._ctx) == null ? void 0 : l.measureText(
      a
    ).width, c = n + i / 2 - this._letterHeight / 2, m = s - this._letterHeight / 2;
    (b = this._ctx) == null || b.clearRect(c, m, this._letterHeight, this._letterHeight), this._ctx.fillStyle = this._options.fillStyle, (d = this._ctx) == null || d.beginPath(), (y = this._ctx) == null || y.fillText(a, n, s);
  }
  destroy() {
    this._listenersDisposes.forEach((a) => {
      a instanceof Function && a();
    });
  }
}
const P = {
  "ci-wrapper": "_ci-wrapper_1unv8_1",
  "ci-emphasize": "_ci-emphasize_1unv8_10",
  "ci-display": "_ci-display_1unv8_19",
  "ci-hidden": "_ci-hidden_1unv8_22",
  "ci-emphasize-popup": "_ci-emphasize-popup_1unv8_25",
  "ci-emphasize-wechat": "_ci-emphasize-wechat_1unv8_35",
  "ci-relative": "_ci-relative_1unv8_47"
}, St = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwMTAxNzY2MzUwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDExOTUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcyMzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMzLjM5ODQzNzUiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNODk3Ljk5NzgwNCAyMDguMzMzODA0bDI5MS40Mzg0MzEgMjkxLjQzODQzMWEyMC4wNzg0MzEgMjAuMDc4NDMxIDAgMCAxIDAgMjguMzkwOTAybC0zMDYuODk4ODIzIDMwNi44OTg4MjRDNzkwLjgxOTEzNyA5NDQuNDQ5MjU1IDY1My40MzI0NzEgMTAxMy45NjA3ODQgNDk5Ljg5MjcwNiAxMDEzLjk2MDc4NCAyMjMuODI0MzE0IDEwMTMuOTYwNzg0IDAgNzg5LjIyMjkwMiAwIDUxMlMyMjMuODE0Mjc1IDEwLjAzOTIxNiA0OTkuOTAyNzQ1IDEwLjAzOTIxNmMxNjIuNDM0NTEgMCAzMDYuNzc4MzUzIDc3Ljc5Mzg4MiAzOTguMDk1MDU5IDE5OC4yOTQ1ODh6IiBmaWxsPSIjYmZiZmJmIiBwLWlkPSI3MjMyIj48L3BhdGg+PC9zdmc+", Mt = ({ list: p, indexOptions: a, effect: n = "popup", duration: s = 3e3, activeColor: i = "lightgreen", className: c, emphasizeClassName: m }) => {
  const [h, l] = X(null), b = gt((j) => {
    j && l(j);
  }, []), [d, y] = X(""), [_, R] = X(!1), [A, N] = X({ x: 0, y: 0 }), C = fe(null), S = fe(null), E = fe(""), te = (j) => {
    if (n === "custom")
      return;
    const z = document.getElementById(j);
    z && z.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "nearest"
    });
  };
  return he(() => {
    h && !C.current && p.length && (C.current = new jt(h, p || [], a), C.current.on("onselect", ({ letter: j, x: z, y: re }) => {
      E.current !== j && (E.current && C.current.resetText(E.current), E.current = j, y(j), n === "wechat" ? (N({ x: z, y: re }), C.current.activityWeChatEffectActiveText(i, j)) : C.current.changeTextColor(i, j), R(!0), te(j));
    }), C.current.drawIndex());
  }, [h, p]), he(() => {
    S.current ? (clearTimeout(S.current), S.current = null, _ && (S.current = setTimeout(() => {
      C.current.resetText(d), R(!1);
    }, s))) : S.current = setTimeout(() => {
      C.current.resetText(d), R(!1);
    }, s);
  }, [d]), Y("div", Object.assign({ className: V(P["ci-wrapper"]) }, { children: [n === "popup" && O("div", Object.assign({ className: V(m, P[n === "popup" ? "ci-emphasize-popup" : ""], P["ci-emphasize"], P[_ ? "ci-display" : "ci-hidden"]) }, { children: d })), Y("div", Object.assign({ className: V(c, n === "wechat" ? P["ci-relative"] : "") }, { children: [n === "wechat" && O("div", Object.assign({ style: {
    backgroundImage: `url(${St})`,
    top: A.y + "px",
    transform: "translate(0, -20px)"
  }, className: V(P["ci-emphasize-wechat"], P["ci-emphasize"], P[_ ? "ci-display" : "ci-hidden"], m) }, { children: d })), O("canvas", { style: {
    touchAction: "none"
  }, ref: b })] }))] }));
}, Dt = ({ items: p }) => Y("div", Object.assign({ className: de["cr-contact-wrap"] }, { children: [O(Ot, {}), Y("div", Object.assign({ className: de["cr-contact-content"] }, { children: [O("div", Object.assign({ className: de["cr-list"] }, { children: p.map((a, n) => {
  const s = a.index.toUpperCase();
  return Y("div", { children: [O("div", Object.assign({ id: s }, { children: s })), a.dataArray.map((i, c) => O("div", { children: i.label }, c))] }, n);
}) })), O(Mt, { effect: "wechat", indexOptions: {
  width: 30
}, list: p.map((a) => a.index) })] }))] }));
export {
  Mt as CanvasIndex,
  Dt as Contact,
  Ot as CrSearchBar,
  Rt as IconSvg
};
