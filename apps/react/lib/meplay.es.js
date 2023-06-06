import * as W from "react";
import We, { useEffect as fe, useState as Z, useCallback as _t, useRef as ue } from "react";
var K = {}, gt = {
  get exports() {
    return K;
  },
  set exports(g) {
    K = g;
  }
}, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function mt() {
  if (Le)
    return $;
  Le = 1;
  var g = We, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(h, c, b) {
    var d, y = {}, p = null, w = null;
    b !== void 0 && (p = "" + b), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (w = c.ref);
    for (d in c)
      s.call(c, d) && !u.hasOwnProperty(d) && (y[d] = c[d]);
    if (h && h.defaultProps)
      for (d in c = h.defaultProps, c)
        y[d] === void 0 && (y[d] = c[d]);
    return { $$typeof: o, type: h, key: p, ref: w, props: y, _owner: i.current };
  }
  return $.Fragment = n, $.jsx = m, $.jsxs = m, $;
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
var Fe;
function yt() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var g = We, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), A = Symbol.iterator, z = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = A && e[A] || e[z];
      return typeof t == "function" ? t : null;
    }
    var O = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          r[a - 1] = arguments[a];
        ee("error", e, r);
      }
    }
    function ee(e, t, r) {
      {
        var a = O.ReactDebugCurrentFrame, v = a.getStackAddendum();
        v !== "" && (t += "%s", r = r.concat([v]));
        var _ = r.map(function(f) {
          return String(f);
        });
        _.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var j = !1, N = !1, te = !1, Ye = !1, He = !1, ve;
    ve = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === u || He || e === i || e === b || e === d || Ye || e === w || j || N || te || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === y || e.$$typeof === m || e.$$typeof === h || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ve || e.getModuleId !== void 0));
    }
    function Be(e, t, r) {
      var a = e.displayName;
      if (a)
        return a;
      var v = t.displayName || t.name || "";
      return v !== "" ? r + "(" + v + ")" : r;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var t = e;
            return pe(t) + ".Consumer";
          case m:
            var r = e;
            return pe(r._context) + ".Provider";
          case c:
            return Be(e, e.render, "ForwardRef");
          case y:
            var a = e.displayName || null;
            return a !== null ? a : C(e.type) || "Memo";
          case p: {
            var v = e, _ = v._payload, f = v._init;
            try {
              return C(f(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, Y = 0, _e, ge, me, ye, be, Ee, xe;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ue() {
      {
        if (Y === 0) {
          _e = console.log, ge = console.info, me = console.warn, ye = console.error, be = console.group, Ee = console.groupCollapsed, xe = console.groupEnd;
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
        Y++;
      }
    }
    function Ve() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: _e
            }),
            info: k({}, e, {
              value: ge
            }),
            warn: k({}, e, {
              value: me
            }),
            error: k({}, e, {
              value: ye
            }),
            group: k({}, e, {
              value: be
            }),
            groupCollapsed: k({}, e, {
              value: Ee
            }),
            groupEnd: k({}, e, {
              value: xe
            })
          });
        }
        Y < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = O.ReactCurrentDispatcher, ne;
    function V(e, t, r) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (v) {
            var a = v.stack.trim().match(/\n( *(at )?)/);
            ne = a && a[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ie = !1, G;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Ge();
    }
    function we(e, t) {
      if (!e || ie)
        return "";
      {
        var r = G.get(e);
        if (r !== void 0)
          return r;
      }
      var a;
      ie = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = re.current, re.current = null, Ue();
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
`), E = l.length - 1, R = T.length - 1; E >= 1 && R >= 0 && l[E] !== T[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (l[E] !== T[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || l[E] !== T[R]) {
                    var S = `
` + l[E].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, S), S;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ie = !1, re.current = _, Ve(), Error.prepareStackTrace = v;
      }
      var F = e ? e.displayName || e.name : "", Ne = F ? V(F) : "";
      return typeof e == "function" && G.set(e, Ne), Ne;
    }
    function Je(e, t, r) {
      return we(e, !1);
    }
    function Qe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function J(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, Qe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case b:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Je(e.render);
          case y:
            return J(e.type, t, r);
          case p: {
            var a = e, v = a._payload, _ = a._init;
            try {
              return J(_(v), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Te = {}, je = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, r = J(e.type, e._source, t ? t.type : null);
        je.setExtraStackFrame(r);
      } else
        je.setExtraStackFrame(null);
    }
    function qe(e, t, r, a, v) {
      {
        var _ = Function.call.bind(Q);
        for (var f in e)
          if (_(e, f)) {
            var l = void 0;
            try {
              if (typeof e[f] != "function") {
                var T = Error((a || "React class") + ": " + r + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              l = e[f](t, f, a, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              l = E;
            }
            l && !(l instanceof Error) && (q(v), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", r, f, typeof l), q(null)), l instanceof Error && !(l.message in Te) && (Te[l.message] = !0, q(v), x("Failed %s type: %s", r, l.message), q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ae(e) {
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
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Se(e) {
      if (Ke(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Oe(e);
    }
    var H = O.ReactCurrentOwner, et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, Ce, se;
    se = {};
    function tt(e) {
      if (Q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rt(e) {
      if (Q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nt(e, t) {
      if (typeof e.ref == "string" && H.current && t && H.current.stateNode !== t) {
        var r = C(H.current.type);
        se[r] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(H.current.type), e.ref), se[r] = !0);
      }
    }
    function it(e, t) {
      {
        var r = function() {
          Me || (Me = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          Ce || (Ce = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var st = function(e, t, r, a, v, _, f) {
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
        value: v
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ot(e, t, r, a, v) {
      {
        var _, f = {}, l = null, T = null;
        r !== void 0 && (Se(r), l = "" + r), rt(t) && (Se(t.key), l = "" + t.key), tt(t) && (T = t.ref, nt(t, v));
        for (_ in t)
          Q.call(t, _) && !et.hasOwnProperty(_) && (f[_] = t[_]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (_ in E)
            f[_] === void 0 && (f[_] = E[_]);
        }
        if (l || T) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && it(f, R), T && at(f, R);
        }
        return st(e, l, T, v, a, H.current, f);
      }
    }
    var oe = O.ReactCurrentOwner, De = O.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, r = J(e.type, e._source, t ? t.type : null);
        De.setExtraStackFrame(r);
      } else
        De.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ie() {
      {
        if (oe.current) {
          var e = C(oe.current.type);
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
    var Pe = {};
    function lt(e) {
      {
        var t = Ie();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Ae(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = lt(t);
        if (Pe[r])
          return;
        Pe[r] = !0;
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + C(e._owner.type) + "."), L(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, a), L(null);
      }
    }
    function ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            le(a) && Ae(a, t);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = M(e);
          if (typeof v == "function" && v !== e.entries)
            for (var _ = v.call(e), f; !(f = _.next()).done; )
              le(f.value) && Ae(f.value, t);
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
        t.$$typeof === y))
          r = t.propTypes;
        else
          return;
        if (r) {
          var a = C(t);
          qe(r, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !ce) {
          ce = !0;
          var v = C(t);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ft(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a !== "children" && a !== "key") {
            L(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function ze(e, t, r, a, v, _) {
      {
        var f = $e(e);
        if (!f) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ct(v);
          T ? l += T : l += Ie();
          var E;
          e === null ? E = "null" : ae(e) ? E = "array" : e !== void 0 && e.$$typeof === o ? (E = "<" + (C(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, l);
        }
        var R = ot(e, t, r, v, _);
        if (R == null)
          return R;
        if (f) {
          var S = t.children;
          if (S !== void 0)
            if (a)
              if (ae(S)) {
                for (var F = 0; F < S.length; F++)
                  ke(S[F], e);
                Object.freeze && Object.freeze(S);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        return e === s ? ft(R) : ut(R), R;
      }
    }
    function dt(e, t, r) {
      return ze(e, t, r, !0);
    }
    function ht(e, t, r) {
      return ze(e, t, r, !1);
    }
    var vt = ht, pt = dt;
    B.Fragment = s, B.jsx = vt, B.jsxs = pt;
  }()), B;
}
(function(g) {
  process.env.NODE_ENV === "production" ? g.exports = mt() : g.exports = yt();
})(gt);
const I = K.jsx, de = K.jsxs, X = {
  "cr-search-bar": "_cr-search-bar_1yagg_1",
  "cr-prefix": "_cr-prefix_1yagg_13",
  "cr-search-input": "_cr-search-input_1yagg_17"
}, bt = (g, o, n, s) => ((n || document).addEventListener(g, o, s), () => {
  (n || document).removeEventListener(g, o, s);
}), Et = "_iconSvg_1iw9w_1", xt = {
  iconSvg: Et
}, Rt = ({ size: g, url: o, name: n }) => {
  let s = !0;
  return fe(() => {
    let i = null;
    return s && (s = !1, i = document.createElement("script"), i.src = o, document.body.appendChild(i)), () => {
      i && document.body.removeChild(i);
    };
  }, []), I("svg", Object.assign({ className: xt.iconSvg, "aria-hidden": !0, width: g || 14, height: g || 14 }, { children: I("use", { xlinkHref: `#icon-${n}` }) }));
};
var he = {}, wt = {
  get exports() {
    return he;
  },
  set exports(g) {
    he = g;
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
          var m = typeof u;
          if (m === "string" || m === "number")
            s.push(u);
          else if (Array.isArray(u)) {
            if (u.length) {
              var h = n.apply(null, u);
              h && s.push(h);
            }
          } else if (m === "object") {
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
const U = he, St = ({ className: g, value: o, placeholder: n, onChange: s, onSearch: i, prefix: u, suffix: m }) => {
  const [h, c] = W.useState(null), b = W.useCallback((p) => {
    p && c(p);
  }, []), d = W.useRef(null), y = W.useRef(null);
  return W.useEffect(() => () => {
    var p;
    (p = y.current) === null || p === void 0 || p.call(y);
  }, []), W.useEffect(() => {
    h && (y.current = bt("keydown", (p) => {
      p.key === "Enter" && (i == null || i());
    }, h));
  }, [h]), de("div", Object.assign({ ref: b, className: U(g, X["cr-search-bar"]) }, { children: [I("div", Object.assign({ ref: d, className: X["cr-prefix"] }, { children: u || I(Rt, { size: 16, name: "search", url: "//at.alicdn.com/t/c/font_3949975_a2mlrx6qzwm.js" }) })), I("input", { placeholder: n || "请输入关键字", className: X["cr-search-input"], onChange: (p) => {
    var w;
    s == null || s((w = p == null ? void 0 : p.target) === null || w === void 0 ? void 0 : w.value);
  }, value: o, type: "text" }), m && I("div", Object.assign({ className: X["cr-suffix"] }, { children: m }))] }));
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
      const n = this._canvas.getBoundingClientRect(), s = o.clientX - n.left, i = o.clientY - n.top, u = Math.floor(i / this._letterHeight), m = this._letters[u];
      this._listeners.forEach((h) => {
        if (h instanceof Function) {
          const c = {
            letter: m,
            x: s,
            y: (u + u + 1) * this._letterHeight / 2
          };
          h(c);
        }
      });
    }
  }
  drawIndex() {
    var s, i;
    if (!this._canvas)
      throw new Error("canvas不存在");
    const o = this._options.width, n = this._letters.length * 20;
    this._canvas.setAttribute("width", o + "px"), this._canvas.setAttribute("height", n + "px"), this._ctx = (s = this._canvas) == null ? void 0 : s.getContext("2d"), this._ctx.textBaseline = "middle", this._ctx.fillStyle = "#fff", this._ctx.font = this._options.font, this._ctx.fillRect(0, 0, o, n), this._ctx.fillStyle = (i = this._options) == null ? void 0 : i.fillStyle, this._letters.forEach((u, m) => {
      var b, d;
      const h = (o - ((b = this._ctx) == null ? void 0 : b.measureText(u).width)) / 2, c = this._letterHeight * m + this._letterHeight / 2;
      (d = this._ctx) == null || d.fillText(u, h, c), this._letterMap[u] = [h, c];
    }), console.log("ppp", this._letterMap);
  }
  changeTextColor(o, n) {
    var c, b, d, y;
    console.log("oooo", o, n, this._letterMap);
    const [s, i] = this._letterMap[n], u = s, m = i - this._letterHeight / 2, h = (c = this._ctx) == null ? void 0 : c.measureText(
      n
    ).width;
    (b = this._ctx) == null || b.clearRect(u, m, h, this._letterHeight), this._ctx.fillStyle = o, (d = this._ctx) == null || d.beginPath(), (y = this._ctx) == null || y.fillText(n, s, i);
  }
  activityWeChatEffectActiveText(o, n) {
    var c, b, d, y, p, w, A, z;
    const [s, i] = this._letterMap[n], u = s, m = i - this._letterHeight / 2, h = (c = this._ctx) == null ? void 0 : c.measureText(
      n
    ).width;
    (b = this._ctx) == null || b.clearRect(u, m, h, this._letterHeight), this._ctx.fillStyle = o, (d = this._ctx) == null || d.beginPath(), (y = this._ctx) == null || y.arc(s + h / 2, i, this._letterHeight / 2, 0, 2 * Math.PI), (p = this._ctx) == null || p.fill(), (w = this._ctx) == null || w.closePath(), this._ctx.fillStyle = "#fff", (A = this._ctx) == null || A.beginPath(), (z = this._ctx) == null || z.fillText(n, s, i);
  }
  resetText(o) {
    var h, c, b, d, y;
    if (!o)
      return;
    const [n, s] = (h = this._letterMap) == null ? void 0 : h[o], i = (c = this._ctx) == null ? void 0 : c.measureText(
      o
    ).width, u = n + i / 2 - this._letterHeight / 2, m = s - this._letterHeight / 2;
    (b = this._ctx) == null || b.clearRect(u, m, this._letterHeight, this._letterHeight), this._ctx.fillStyle = this._options.fillStyle, (d = this._ctx) == null || d.beginPath(), (y = this._ctx) == null || y.fillText(o, n, s);
  }
  destroy() {
    this._listenersDisposes.forEach((o) => {
      o instanceof Function && o();
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
}, jt = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwMTAxNzY2MzUwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDExOTUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcyMzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMzLjM5ODQzNzUiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNODk3Ljk5NzgwNCAyMDguMzMzODA0bDI5MS40Mzg0MzEgMjkxLjQzODQzMWEyMC4wNzg0MzEgMjAuMDc4NDMxIDAgMCAxIDAgMjguMzkwOTAybC0zMDYuODk4ODIzIDMwNi44OTg4MjRDNzkwLjgxOTEzNyA5NDQuNDQ5MjU1IDY1My40MzI0NzEgMTAxMy45NjA3ODQgNDk5Ljg5MjcwNiAxMDEzLjk2MDc4NCAyMjMuODI0MzE0IDEwMTMuOTYwNzg0IDAgNzg5LjIyMjkwMiAwIDUxMlMyMjMuODE0Mjc1IDEwLjAzOTIxNiA0OTkuOTAyNzQ1IDEwLjAzOTIxNmMxNjIuNDM0NTEgMCAzMDYuNzc4MzUzIDc3Ljc5Mzg4MiAzOTguMDk1MDU5IDE5OC4yOTQ1ODh6IiBmaWxsPSIjYmZiZmJmIiBwLWlkPSI3MjMyIj48L3BhdGg+PC9zdmc+", Mt = ({ list: g, indexOptions: o, effect: n = "popup", duration: s = 3e3, activeColor: i = "lightgreen", className: u, emphasizeClassName: m }) => {
  const [h, c] = Z(null), b = _t((j) => {
    j && c(j);
  }, []), [d, y] = Z(""), [p, w] = Z(!1), [A, z] = Z({ x: 0, y: 0 }), M = ue(null), O = ue(null), x = ue(""), ee = (j) => {
    if (n === "custom")
      return;
    const N = document.getElementById(j);
    N && N.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "nearest"
    });
  };
  return fe(() => {
    h && !M.current && g.length && (M.current = new Tt(h, g || [], o), M.current.on("onselect", ({ letter: j, x: N, y: te }) => {
      x.current !== j && (x.current && M.current.resetText(x.current), x.current = j, y(j), n === "wechat" ? (z({ x: N, y: te }), M.current.activityWeChatEffectActiveText(i, j)) : M.current.changeTextColor(i, j), w(!0), ee(j));
    }), M.current.drawIndex());
  }, [h, g]), fe(() => {
    O.current ? (clearTimeout(O.current), O.current = null, p && (O.current = setTimeout(() => {
      M.current.resetText(d), w(!1);
    }, s))) : O.current = setTimeout(() => {
      M.current.resetText(d), w(!1);
    }, s);
  }, [d]), de("div", Object.assign({ className: U(P["ci-wrapper"]) }, { children: [n === "popup" && I("div", Object.assign({ className: U(m, P[n === "popup" ? "ci-emphasize-popup" : ""], P["ci-emphasize"], P[p ? "ci-display" : "ci-hidden"]) }, { children: d })), de("div", Object.assign({ className: U(u, n === "wechat" ? P["ci-relative"] : "") }, { children: [n === "wechat" && I("div", Object.assign({ style: {
    backgroundImage: `url(${jt})`,
    top: A.y + "px",
    transform: "translate(0, -20px)"
  }, className: U(P["ci-emphasize-wechat"], P["ci-emphasize"], P[p ? "ci-display" : "ci-hidden"], m) }, { children: d })), I("canvas", { style: {
    touchAction: "none"
  }, ref: b })] }))] }));
};
export {
  Mt as CanvasIndex,
  St as CrSearchBar,
  Rt as IconSvg
};
