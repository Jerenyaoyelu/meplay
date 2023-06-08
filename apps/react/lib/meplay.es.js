import * as H from "react";
import Be, { useEffect as ae, useState as re, useCallback as _t, useRef as ne } from "react";
var se = {}, gt = {
  get exports() {
    return se;
  },
  set exports(g) {
    se = g;
  }
}, G = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function mt() {
  if (He)
    return G;
  He = 1;
  var g = Be, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(d, c, b) {
    var v, E = {}, p = null, j = null;
    b !== void 0 && (p = "" + b), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (j = c.ref);
    for (v in c)
      s.call(c, v) && !u.hasOwnProperty(v) && (E[v] = c[v]);
    if (d && d.defaultProps)
      for (v in c = d.defaultProps, c)
        E[v] === void 0 && (E[v] = c[v]);
    return { $$typeof: o, type: d, key: p, ref: j, props: E, _owner: i.current };
  }
  return G.Fragment = n, G.jsx = y, G.jsxs = y, G;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function yt() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Be, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), C = Symbol.iterator, P = "@@iterator";
    function oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = C && e[C] || e[P];
      return typeof t == "function" ? t : null;
    }
    var A = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          r[a - 1] = arguments[a];
        z("error", e, r);
      }
    }
    function z(e, t, r) {
      {
        var a = A.ReactDebugCurrentFrame, h = a.getStackAddendum();
        h !== "" && (t += "%s", r = r.concat([h]));
        var _ = r.map(function(f) {
          return String(f);
        });
        _.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var L = !1, $ = !1, ce = !1, w = !1, S = !1, q;
    q = Symbol.for("react.module.reference");
    function le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === u || S || e === i || e === b || e === v || w || e === j || L || $ || ce || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === E || e.$$typeof === y || e.$$typeof === d || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === q || e.getModuleId !== void 0));
    }
    function B(e, t, r) {
      var a = e.displayName;
      if (a)
        return a;
      var h = t.displayName || t.name || "";
      return h !== "" ? r + "(" + h + ")" : r;
    }
    function F(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case i:
          return "StrictMode";
        case b:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var t = e;
            return F(t) + ".Consumer";
          case y:
            var r = e;
            return F(r._context) + ".Provider";
          case c:
            return B(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case p: {
            var h = e, _ = h._payload, f = h._init;
            try {
              return O(f(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, U = 0, be, Ee, xe, Re, we, Te, je;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function Ue() {
      {
        if (U === 0) {
          be = console.log, Ee = console.info, xe = console.warn, Re = console.error, we = console.group, Te = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
        U++;
      }
    }
    function Ve() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: be
            }),
            info: N({}, e, {
              value: Ee
            }),
            warn: N({}, e, {
              value: xe
            }),
            error: N({}, e, {
              value: Re
            }),
            group: N({}, e, {
              value: we
            }),
            groupCollapsed: N({}, e, {
              value: Te
            }),
            groupEnd: N({}, e, {
              value: je
            })
          });
        }
        U < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = A.ReactCurrentDispatcher, fe;
    function Z(e, t, r) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (h) {
            var a = h.stack.trim().match(/\n( *(at )?)/);
            fe = a && a[1] || "";
          }
        return `
` + fe + e;
      }
    }
    var de = !1, X;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      X = new Ge();
    }
    function Se(e, t) {
      if (!e || de)
        return "";
      {
        var r = X.get(e);
        if (r !== void 0)
          return r;
      }
      var a;
      de = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ue.current, ue.current = null, Ue();
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
            } catch (D) {
              a = D;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (D) {
              a = D;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            a = D;
          }
          e();
        }
      } catch (D) {
        if (D && a && typeof D.stack == "string") {
          for (var l = D.stack.split(`
`), T = a.stack.split(`
`), x = l.length - 1, R = T.length - 1; x >= 1 && R >= 0 && l[x] !== T[R]; )
            R--;
          for (; x >= 1 && R >= 0; x--, R--)
            if (l[x] !== T[R]) {
              if (x !== 1 || R !== 1)
                do
                  if (x--, R--, R < 0 || l[x] !== T[R]) {
                    var M = `
` + l[x].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, M), M;
                  }
                while (x >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        de = !1, ue.current = _, Ve(), Error.prepareStackTrace = h;
      }
      var Y = e ? e.displayName || e.name : "", Ye = Y ? Z(Y) : "";
      return typeof e == "function" && X.set(e, Ye), Ye;
    }
    function Je(e, t, r) {
      return Se(e, !1);
    }
    function Qe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function K(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, Qe(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case b:
          return Z("Suspense");
        case v:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Je(e.render);
          case E:
            return K(e.type, t, r);
          case p: {
            var a = e, h = a._payload, _ = a._init;
            try {
              return K(_(h), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Me = {}, Ce = A.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var t = e._owner, r = K(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(r);
      } else
        Ce.setExtraStackFrame(null);
    }
    function qe(e, t, r, a, h) {
      {
        var _ = Function.call.bind(ee);
        for (var f in e)
          if (_(e, f)) {
            var l = void 0;
            try {
              if (typeof e[f] != "function") {
                var T = Error((a || "React class") + ": " + r + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              l = e[f](t, f, a, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              l = x;
            }
            l && !(l instanceof Error) && (te(h), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", r, f, typeof l), te(null)), l instanceof Error && !(l.message in Me) && (Me[l.message] = !0, te(h), m("Failed %s type: %s", r, l.message), te(null));
          }
      }
    }
    var Ze = Array.isArray;
    function he(e) {
      return Ze(e);
    }
    function Xe(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function Ke(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Ie(e) {
      if (Ke(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), De(e);
    }
    var V = A.ReactCurrentOwner, et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Ae, ve;
    ve = {};
    function tt(e) {
      if (ee.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rt(e) {
      if (ee.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nt(e, t) {
      if (typeof e.ref == "string" && V.current && t && V.current.stateNode !== t) {
        var r = O(V.current.type);
        ve[r] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(V.current.type), e.ref), ve[r] = !0);
      }
    }
    function it(e, t) {
      {
        var r = function() {
          Pe || (Pe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function at(e, t) {
      {
        var r = function() {
          Ae || (Ae = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var st = function(e, t, r, a, h, _, f) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: f,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ot(e, t, r, a, h) {
      {
        var _, f = {}, l = null, T = null;
        r !== void 0 && (Ie(r), l = "" + r), rt(t) && (Ie(t.key), l = "" + t.key), tt(t) && (T = t.ref, nt(t, h));
        for (_ in t)
          ee.call(t, _) && !et.hasOwnProperty(_) && (f[_] = t[_]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (_ in x)
            f[_] === void 0 && (f[_] = x[_]);
        }
        if (l || T) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && it(f, R), T && at(f, R);
        }
        return st(e, l, T, h, a, V.current, f);
      }
    }
    var pe = A.ReactCurrentOwner, ke = A.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var t = e._owner, r = K(e.type, e._source, t ? t.type : null);
        ke.setExtraStackFrame(r);
      } else
        ke.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function ze() {
      {
        if (pe.current) {
          var e = O(pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ct(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + t + ":" + r + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function lt(e) {
      {
        var t = ze();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Le(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = lt(t);
        if (Ne[r])
          return;
        Ne[r] = !0;
        var a = "";
        e && e._owner && e._owner !== pe.current && (a = " It was passed a child from " + O(e._owner.type) + "."), W(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, a), W(null);
      }
    }
    function Fe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (he(e))
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            ge(a) && Le(a, t);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = oe(e);
          if (typeof h == "function" && h !== e.entries)
            for (var _ = h.call(e), f; !(f = _.next()).done; )
              ge(f.value) && Le(f.value, t);
        }
      }
    }
    function ut(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          r = t.propTypes;
        else
          return;
        if (r) {
          var a = O(t);
          qe(r, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !_e) {
          _e = !0;
          var h = O(t);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ft(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a !== "children" && a !== "key") {
            W(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function We(e, t, r, a, h, _) {
      {
        var f = le(e);
        if (!f) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ct(h);
          T ? l += T : l += ze();
          var x;
          e === null ? x = "null" : he(e) ? x = "array" : e !== void 0 && e.$$typeof === o ? (x = "<" + (O(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, l);
        }
        var R = ot(e, t, r, h, _);
        if (R == null)
          return R;
        if (f) {
          var M = t.children;
          if (M !== void 0)
            if (a)
              if (he(M)) {
                for (var Y = 0; Y < M.length; Y++)
                  Fe(M[Y], e);
                Object.freeze && Object.freeze(M);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(M, e);
        }
        return e === s ? ft(R) : ut(R), R;
      }
    }
    function dt(e, t, r) {
      return We(e, t, r, !0);
    }
    function ht(e, t, r) {
      return We(e, t, r, !1);
    }
    var vt = ht, pt = dt;
    J.Fragment = s, J.jsx = vt, J.jsxs = pt;
  }()), J;
}
(function(g) {
  process.env.NODE_ENV === "production" ? g.exports = mt() : g.exports = yt();
})(gt);
const I = se.jsx, me = se.jsxs, ie = {
  "cr-search-bar": "_cr-search-bar_1yagg_1",
  "cr-prefix": "_cr-prefix_1yagg_13",
  "cr-search-input": "_cr-search-input_1yagg_17"
}, bt = (g, o, n, s) => ((n || document).addEventListener(g, o, s), () => {
  (n || document).removeEventListener(g, o, s);
}), Et = "_iconSvg_1iw9w_1", xt = {
  iconSvg: Et
}, Rt = ({ size: g, url: o, name: n }) => {
  let s = !0;
  return ae(() => {
    let i = null;
    return s && (s = !1, i = document.createElement("script"), i.src = o, document.body.appendChild(i)), () => {
      i && document.body.removeChild(i);
    };
  }, []), I("svg", Object.assign({ className: xt.iconSvg, "aria-hidden": !0, width: g || 14, height: g || 14 }, { children: I("use", { xlinkHref: `#icon-${n}` }) }));
};
var ye = {}, wt = {
  get exports() {
    return ye;
  },
  set exports(g) {
    ye = g;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(g) {
  (function() {
    var o = {}.hasOwnProperty;
    function n() {
      for (var s = [], i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        if (u) {
          var y = typeof u;
          if (y === "string" || y === "number")
            s.push(u);
          else if (Array.isArray(u)) {
            if (u.length) {
              var d = n.apply(null, u);
              d && s.push(d);
            }
          } else if (y === "object") {
            if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]")) {
              s.push(u.toString());
              continue;
            }
            for (var c in u)
              o.call(u, c) && u[c] && s.push(c);
          }
        }
      }
      return s.join(" ");
    }
    g.exports ? (n.default = n, g.exports = n) : window.classNames = n;
  })();
})(wt);
const Q = ye, St = ({ className: g, value: o, placeholder: n, onChange: s, onSearch: i, prefix: u, suffix: y }) => {
  const [d, c] = H.useState(null), b = H.useCallback((p) => {
    p && c(p);
  }, []), v = H.useRef(null), E = H.useRef(null);
  return H.useEffect(() => () => {
    var p;
    (p = E.current) === null || p === void 0 || p.call(E);
  }, []), H.useEffect(() => {
    d && (E.current = bt("keydown", (p) => {
      p.key === "Enter" && (i == null || i());
    }, d));
  }, [d]), me("div", Object.assign({ ref: b, className: Q(g, ie["cr-search-bar"]) }, { children: [I("div", Object.assign({ ref: v, className: ie["cr-prefix"] }, { children: u || I(Rt, { size: 16, name: "search", url: "//at.alicdn.com/t/c/font_3949975_a2mlrx6qzwm.js" }) })), I("input", { placeholder: n || "请输入关键字", className: ie["cr-search-input"], onChange: (p) => {
    var j;
    s == null || s((j = p == null ? void 0 : p.target) === null || j === void 0 ? void 0 : j.value);
  }, value: o, type: "text" }), y && I("div", Object.assign({ className: ie["cr-suffix"] }, { children: y }))] }));
};
class Tt {
  constructor(o, n, s) {
    this._canvas = null, this._letters = [], this._ctx = null, this._options = {
      width: 50,
      height: 300,
      font: "bold 14px Arial",
      fillStyle: "#000"
    }, this._listeners = [], this._down = !1, this._listenersDisposes = [], this._letterHeight = 20, this._letterMap = {}, this._canvas = o, this._letters = n, this._options = {
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
    const o = (i) => {
      this._down || (this._down = !0, this._compute(i));
    };
    this._canvas.addEventListener("pointerdown", o), this._listenersDisposes.push(() => {
      var i;
      (i = this._canvas) == null || i.removeEventListener("pointerdown", o);
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
  on(o, n) {
    o === "onselect" && this._listeners.push(n);
  }
  _compute(o) {
    if (this._down && this._canvas) {
      const n = this._canvas.getBoundingClientRect(), s = o.clientX - n.left, i = o.clientY - n.top, u = Math.floor(i / this._letterHeight), y = this._letters[u];
      this._listeners.forEach((d) => {
        if (d instanceof Function) {
          const c = {
            letter: y,
            x: s,
            y: (u + u + 1) * this._letterHeight / 2
          };
          d(c);
        }
      });
    }
  }
  drawIndex() {
    var s, i;
    if (!this._canvas)
      throw new Error("canvas不存在");
    const o = this._options.width, n = this._letters.length * 20;
    this._canvas.setAttribute("width", o + "px"), this._canvas.setAttribute("height", n + "px"), this._ctx = (s = this._canvas) == null ? void 0 : s.getContext("2d"), this._ctx.textBaseline = "middle", this._ctx.fillStyle = "#fff", this._ctx.font = this._options.font, this._ctx.fillRect(0, 0, o, n), this._ctx.fillStyle = (i = this._options) == null ? void 0 : i.fillStyle, this._letters.forEach((u, y) => {
      var b, v;
      const d = (o - ((b = this._ctx) == null ? void 0 : b.measureText(u).width)) / 2, c = this._letterHeight * y + this._letterHeight / 2;
      (v = this._ctx) == null || v.fillText(u, d, c), this._letterMap[u] = [d, c];
    }), console.log("ppp", this._letterMap);
  }
  changeTextColor(o, n) {
    var c, b, v, E;
    console.log("oooo", o, n, this._letterMap);
    const [s, i] = this._letterMap[n], u = s, y = i - this._letterHeight / 2, d = (c = this._ctx) == null ? void 0 : c.measureText(
      n
    ).width;
    (b = this._ctx) == null || b.clearRect(u, y, d, this._letterHeight), this._ctx.fillStyle = o, (v = this._ctx) == null || v.beginPath(), (E = this._ctx) == null || E.fillText(n, s, i);
  }
  activityWeChatEffectActiveText(o, n) {
    var c, b, v, E, p, j, C, P;
    const [s, i] = this._letterMap[n], u = s, y = i - this._letterHeight / 2, d = (c = this._ctx) == null ? void 0 : c.measureText(
      n
    ).width;
    (b = this._ctx) == null || b.clearRect(u, y, d, this._letterHeight), this._ctx.fillStyle = o, (v = this._ctx) == null || v.beginPath(), (E = this._ctx) == null || E.arc(s + d / 2, i, this._letterHeight / 2, 0, 2 * Math.PI), (p = this._ctx) == null || p.fill(), (j = this._ctx) == null || j.closePath(), this._ctx.fillStyle = "#fff", (C = this._ctx) == null || C.beginPath(), (P = this._ctx) == null || P.fillText(n, s, i);
  }
  resetText(o) {
    var d, c, b, v, E;
    if (!o)
      return;
    const [n, s] = (d = this._letterMap) == null ? void 0 : d[o], i = (c = this._ctx) == null ? void 0 : c.measureText(
      o
    ).width, u = n + i / 2 - this._letterHeight / 2, y = s - this._letterHeight / 2;
    (b = this._ctx) == null || b.clearRect(u, y, this._letterHeight, this._letterHeight), this._ctx.fillStyle = this._options.fillStyle, (v = this._ctx) == null || v.beginPath(), (E = this._ctx) == null || E.fillText(o, n, s);
  }
  destroy() {
    this._listenersDisposes.forEach((o) => {
      o instanceof Function && o();
    });
  }
}
const k = {
  "ci-wrapper": "_ci-wrapper_1unv8_1",
  "ci-emphasize": "_ci-emphasize_1unv8_10",
  "ci-display": "_ci-display_1unv8_19",
  "ci-hidden": "_ci-hidden_1unv8_22",
  "ci-emphasize-popup": "_ci-emphasize-popup_1unv8_25",
  "ci-emphasize-wechat": "_ci-emphasize-wechat_1unv8_35",
  "ci-relative": "_ci-relative_1unv8_47"
}, jt = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwMTAxNzY2MzUwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDExOTUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcyMzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMzLjM5ODQzNzUiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNODk3Ljk5NzgwNCAyMDguMzMzODA0bDI5MS40Mzg0MzEgMjkxLjQzODQzMWEyMC4wNzg0MzEgMjAuMDc4NDMxIDAgMCAxIDAgMjguMzkwOTAybC0zMDYuODk4ODIzIDMwNi44OTg4MjRDNzkwLjgxOTEzNyA5NDQuNDQ5MjU1IDY1My40MzI0NzEgMTAxMy45NjA3ODQgNDk5Ljg5MjcwNiAxMDEzLjk2MDc4NCAyMjMuODI0MzE0IDEwMTMuOTYwNzg0IDAgNzg5LjIyMjkwMiAwIDUxMlMyMjMuODE0Mjc1IDEwLjAzOTIxNiA0OTkuOTAyNzQ1IDEwLjAzOTIxNmMxNjIuNDM0NTEgMCAzMDYuNzc4MzUzIDc3Ljc5Mzg4MiAzOTguMDk1MDU5IDE5OC4yOTQ1ODh6IiBmaWxsPSIjYmZiZmJmIiBwLWlkPSI3MjMyIj48L3BhdGg+PC9zdmc+", Mt = ({ list: g, indexOptions: o, effect: n = "popup", duration: s = 2e3, activeColor: i = "lightgreen", className: u, emphasizeClassName: y, onClickLetter: d, onDrawIndex: c }) => {
  const [b, v] = re(null), E = _t((w) => {
    w && v(w);
  }, []), [p, j] = re(""), [C, P] = re(!1), [oe, A] = re({ x: 0, y: 0 }), m = ne(null), z = ne(null), L = ne(""), $ = ne(n), ce = (w) => {
    const S = document.getElementById(w);
    S && S.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "nearest"
    });
  };
  return ae(() => {
    $.current = n;
  }, [n]), ae(() => {
    var w;
    b && !m.current && g.length && (m.current = new Tt(b, g || [], o), c == null || c(m.current), (w = m.current) === null || w === void 0 || w.on("onselect", ({ letter: S, x: q, y: le }) => {
      var B, F, O;
      L.current !== S && (L.current && ((B = m.current) === null || B === void 0 || B.resetText(L.current)), L.current = S, j(S), $.current === "custom" ? d == null || d(S) : ($.current === "wechat" ? (A({ x: q, y: le }), (F = m.current) === null || F === void 0 || F.activityWeChatEffectActiveText(i, S)) : (O = m.current) === null || O === void 0 || O.changeTextColor(i, S), P(!0)), ce(S));
    }), m.current.drawIndex());
  }, [b, g]), ae(() => {
    z.current ? (clearTimeout(z.current), z.current = null, C && (z.current = setTimeout(() => {
      var w;
      (w = m.current) === null || w === void 0 || w.resetText(p), P(!1);
    }, s))) : z.current = setTimeout(() => {
      var w;
      (w = m.current) === null || w === void 0 || w.resetText(p), P(!1);
    }, s);
  }, [p]), me("div", Object.assign({ className: Q(k["ci-wrapper"]) }, { children: [n === "popup" && I("div", Object.assign({ className: Q(y, k[n === "popup" ? "ci-emphasize-popup" : ""], k["ci-emphasize"], k[C ? "ci-display" : "ci-hidden"]) }, { children: p })), me("div", Object.assign({ className: Q(u, n === "wechat" ? k["ci-relative"] : "") }, { children: [n === "wechat" && I("div", Object.assign({ style: {
    backgroundImage: `url(${jt})`,
    top: oe.y + "px",
    transform: "translate(0, -20px)"
  }, className: Q(k["ci-emphasize-wechat"], k["ci-emphasize"], k[C ? "ci-display" : "ci-hidden"], y) }, { children: p })), I("canvas", { style: {
    touchAction: "none"
  }, ref: E })] }))] }));
};
export {
  Mt as CanvasIndex,
  St as CrSearchBar,
  Rt as IconSvg
};
