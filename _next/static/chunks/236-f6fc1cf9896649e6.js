(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [236], {
        3454: function(t, e, n) {
            "use strict";
            var r, i;
            t.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof(null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663)
        },
        1210: function(t, e) {
            "use strict";

            function n(t, e, n, r) {
                return !1
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getDomainLocale = n, ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        8418: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(4941).Z;
            n(5753).default, Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(2648).Z,
                o = n(7273).Z,
                a = i(n(7294)),
                s = n(6273),
                l = n(2725),
                c = n(3462),
                u = n(1018),
                h = n(7190),
                d = n(1210),
                f = n(8684),
                p = {};

            function m(t, e, n, r) {
                if (t && s.isLocalURL(e)) {
                    Promise.resolve(t.prefetch(e, n, r)).catch(function(t) {});
                    var i = r && void 0 !== r.locale ? r.locale : t && t.locale;
                    p[e + "%" + n + (i ? "%" + i : "")] = !0
                }
            }
            var v = a.default.forwardRef(function(t, e) {
                var n, i, v = t.href,
                    y = t.as,
                    g = t.children,
                    C = t.prefetch,
                    M = t.passHref,
                    b = t.replace,
                    z = t.shallow,
                    x = t.scroll,
                    L = t.locale,
                    V = t.onClick,
                    w = t.onMouseEnter,
                    S = t.onTouchStart,
                    E = t.legacyBehavior,
                    k = void 0 === E ? !0 !== Boolean(!1) : E,
                    A = o(t, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = g, k && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
                var T = !1 !== C,
                    P = a.default.useContext(c.RouterContext),
                    O = a.default.useContext(u.AppRouterContext);
                O && (P = O);
                var j = a.default.useMemo(function() {
                        var t = r(s.resolveHref(P, v, !0), 2),
                            e = t[0],
                            n = t[1];
                        return {
                            href: e,
                            as: y ? s.resolveHref(P, y) : n || e
                        }
                    }, [P, v, y]),
                    R = j.href,
                    H = j.as,
                    D = a.default.useRef(R),
                    F = a.default.useRef(H);
                k && (i = a.default.Children.only(n));
                var B = k ? i && "object" == typeof i && i.ref : e,
                    U = r(h.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    I = U[0],
                    _ = U[1],
                    N = U[2],
                    Z = a.default.useCallback(function(t) {
                        (F.current !== H || D.current !== R) && (N(), F.current = H, D.current = R), I(t), B && ("function" == typeof B ? B(t) : "object" == typeof B && (B.current = t))
                    }, [H, B, R, N, I]);
                a.default.useEffect(function() {
                    var t = _ && T && s.isLocalURL(R),
                        e = void 0 !== L ? L : P && P.locale,
                        n = p[R + "%" + H + (e ? "%" + e : "")];
                    t && !n && m(P, R, H, {
                        locale: e
                    })
                }, [H, R, _, L, T, P]);
                var $ = {
                    ref: Z,
                    onClick: function(t) {
                        k || "function" != typeof V || V(t), k && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), t.defaultPrevented || function(t, e, n, r, i, o, l, c, u, h) {
                            if ("A" !== t.currentTarget.nodeName.toUpperCase() || (!(f = (d = t).currentTarget.target) || "_self" === f) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && s.isLocalURL(n)) {
                                t.preventDefault();
                                var d, f, p = function() {
                                    "beforePopState" in e ? e[i ? "replace" : "push"](n, r, {
                                        shallow: o,
                                        locale: c,
                                        scroll: l
                                    }) : e[i ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !h
                                    })
                                };
                                u ? a.default.startTransition(p) : p()
                            }
                        }(t, P, R, H, b, z, x, L, Boolean(O), T)
                    },
                    onMouseEnter: function(t) {
                        k || "function" != typeof w || w(t), k && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(t), !(!T && O) && s.isLocalURL(R) && m(P, R, H, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(t) {
                        k || "function" != typeof S || S(t), k && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(t), !(!T && O) && s.isLocalURL(R) && m(P, R, H, {
                            priority: !0
                        })
                    }
                };
                if (!k || M || "a" === i.type && !("href" in i.props)) {
                    var W = void 0 !== L ? L : P && P.locale,
                        Y = P && P.isLocaleDomain && d.getDomainLocale(H, W, P.locales, P.domainLocales);
                    $.href = Y || f.addBasePath(l.addLocale(H, W, P && P.defaultLocale))
                }
                return k ? a.default.cloneElement(i, $) : a.default.createElement("a", Object.assign({}, A, $), n)
            });
            e.default = v, ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        7190: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(4941).Z;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useIntersection = function(t) {
                var e, n = t.rootRef,
                    c = t.rootMargin,
                    u = t.disabled || !a,
                    h = r(i.useState(!1), 2),
                    d = h[0],
                    f = h[1],
                    p = r(i.useState(null), 2),
                    m = p[0],
                    v = p[1];
                return i.useEffect(function() {
                    if (a) {
                        if (!u && !d && m && m.tagName) {
                            var t, e, r, i, h, p, v;
                            return e = function(t) {
                                    return t && f(t)
                                }, h = (i = function(t) {
                                    var e, n = {
                                            root: t.root || null,
                                            margin: t.rootMargin || ""
                                        },
                                        r = l.find(function(t) {
                                            return t.root === n.root && t.margin === n.margin
                                        });
                                    if (r && (e = s.get(r))) return e;
                                    var i = new Map;
                                    return e = {
                                        id: n,
                                        observer: new IntersectionObserver(function(t) {
                                            t.forEach(function(t) {
                                                var e = i.get(t.target),
                                                    n = t.isIntersecting || t.intersectionRatio > 0;
                                                e && n && e(n)
                                            })
                                        }, t),
                                        elements: i
                                    }, l.push(n), s.set(n, e), e
                                }(r = {
                                    root: null == n ? void 0 : n.current,
                                    rootMargin: c
                                })).id, p = i.observer, (v = i.elements).set(m, e), p.observe(m),
                                function() {
                                    if (v.delete(m), p.unobserve(m), 0 === v.size) {
                                        p.disconnect(), s.delete(h);
                                        var t = l.findIndex(function(t) {
                                            return t.root === h.root && t.margin === h.margin
                                        });
                                        t > -1 && l.splice(t, 1)
                                    }
                                }
                        }
                    } else if (!d) {
                        var y = o.requestIdleCallback(function() {
                            return f(!0)
                        });
                        return function() {
                            return o.cancelIdleCallback(y)
                        }
                    }
                }, [m, u, c, n, d]), [v, d, i.useCallback(function() {
                    f(!1)
                }, [])]
            };
            var i = n(7294),
                o = n(9311),
                a = "function" == typeof IntersectionObserver,
                s = new Map,
                l = [];
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        1018: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TemplateContext = e.GlobalLayoutRouterContext = e.LayoutRouterContext = e.AppRouterContext = void 0;
            var r = (0, n(2648).Z)(n(7294)),
                i = r.default.createContext(null);
            e.AppRouterContext = i;
            var o = r.default.createContext(null);
            e.LayoutRouterContext = o;
            var a = r.default.createContext(null);
            e.GlobalLayoutRouterContext = a;
            var s = r.default.createContext(null);
            e.TemplateContext = s
        },
        7663: function(t) {
            ! function() {
                var e = {
                        229: function(t) {
                            var e, n, r, i = t.exports = {};

                            function o() {
                                throw Error("setTimeout has not been defined")
                            }

                            function a() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function s(t) {
                                if (e === setTimeout) return setTimeout(t, 0);
                                if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                                try {
                                    return e(t, 0)
                                } catch (r) {
                                    try {
                                        return e.call(null, t, 0)
                                    } catch (n) {
                                        return e.call(this, t, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    e = "function" == typeof setTimeout ? setTimeout : o
                                } catch (t) {
                                    e = o
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : a
                                } catch (r) {
                                    n = a
                                }
                            }();
                            var l = [],
                                c = !1,
                                u = -1;

                            function h() {
                                c && r && (c = !1, r.length ? l = r.concat(l) : u = -1, l.length && d())
                            }

                            function d() {
                                if (!c) {
                                    var t = s(h);
                                    c = !0;
                                    for (var e = l.length; e;) {
                                        for (r = l, l = []; ++u < e;) r && r[u].run();
                                        u = -1, e = l.length
                                    }
                                    r = null, c = !1,
                                        function(t) {
                                            if (n === clearTimeout) return clearTimeout(t);
                                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                                            try {
                                                n(t)
                                            } catch (r) {
                                                try {
                                                    return n.call(null, t)
                                                } catch (e) {
                                                    return n.call(this, t)
                                                }
                                            }
                                        }(t)
                                }
                            }

                            function f(t, e) {
                                this.fun = t, this.array = e
                            }

                            function p() {}
                            i.nextTick = function(t) {
                                var e = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                l.push(new f(t, e)), 1 !== l.length || c || s(d)
                            }, f.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(t) {
                                return []
                            }, i.binding = function(t) {
                                throw Error("process.binding is not supported")
                            }, i.cwd = function() {
                                return "/"
                            }, i.chdir = function(t) {
                                throw Error("process.chdir is not supported")
                            }, i.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function r(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var o = n[t] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        e[t](o, o.exports, r), a = !1
                    } finally {
                        a && delete n[t]
                    }
                    return o.exports
                }
                r.ab = "//";
                var i = r(229);
                t.exports = i
            }()
        },
        9008: function(t, e, n) {
            t.exports = n(5443)
        },
        1664: function(t, e, n) {
            t.exports = n(8418)
        },
        2703: function(t, e, n) {
            "use strict";
            var r = n(414);

            function i() {}

            function o() {}
            o.resetWarningCache = i, t.exports = function() {
                function t(t, e, n, i, o, a) {
                    if (a !== r) {
                        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        5697: function(t, e, n) {
            t.exports = n(2703)()
        },
        414: function(t) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        2637: function(t, e, n) {
            "use strict";
            var r = n(5893),
                i = n(7294),
                o = function() {
                    return (o = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                };
            ! function(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if (t && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
                }
            }(".styles-module_blinkingCursor__yugAC{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf;color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");
            var a = function(t) {
                var e = t.cursorStyle,
                    n = t.cursorColor;
                return r.jsx("span", o({
                    style: {
                        color: void 0 === n ? "inherit" : n
                    },
                    className: "styles-module_blinkingCursor__yugAC"
                }, {
                    children: void 0 === e ? "|" : e
                }))
            };

            function s(t, e) {
                var n, r;
                switch (e.type) {
                    case "SPEED":
                        return o(o({}, t), {
                            isDeleting: !0,
                            speed: e.payload
                        });
                    case "TYPE":
                        return o(o({}, t), {
                            speed: e.speed,
                            text: null === (n = e.payload) || void 0 === n ? void 0 : n.substring(0, t.text.length + 1)
                        });
                    case "DELETE":
                        return o(o({}, t), {
                            speed: e.speed,
                            text: null === (r = e.payload) || void 0 === r ? void 0 : r.substring(0, t.text.length - 1)
                        });
                    case "COUNT":
                        return o(o({}, t), {
                            isDeleting: !1,
                            count: t.count + 1
                        });
                    default:
                        return t
                }
            }
            var l = function(t) {
                var e = t.words,
                    n = void 0 === e ? ["Hello World!", "This is", "a simple Typewriter"] : e,
                    r = t.loop,
                    o = void 0 === r ? 1 : r,
                    a = t.typeSpeed,
                    l = void 0 === a ? 80 : a,
                    c = t.deleteSpeed,
                    u = void 0 === c ? 50 : c,
                    h = t.delaySpeed,
                    d = void 0 === h ? 1500 : h,
                    f = t.onLoopDone,
                    p = t.onType,
                    m = i.useReducer(s, {
                        isDeleting: !1,
                        speed: l,
                        text: "",
                        count: 0
                    }),
                    v = m[0],
                    y = v.isDeleting,
                    g = v.speed,
                    C = v.text,
                    M = v.count,
                    b = m[1],
                    z = i.useRef(0),
                    x = i.useRef(!1),
                    L = i.useCallback(function() {
                        var t = n[M % n.length];
                        y ? (b({
                            type: "DELETE",
                            payload: t,
                            speed: u
                        }), "" === C && b({
                            type: "COUNT"
                        })) : (b({
                            type: "TYPE",
                            payload: t,
                            speed: l
                        }), p && p(M), C === t && (b({
                            type: "SPEED",
                            payload: d
                        }), o > 0 && (z.current += 1, z.current / n.length === o && (x.current = !0))))
                    }, [y, M, d, u, o, l, n, C, p]);
                return i.useEffect(function() {
                    var t = setTimeout(L, g);
                    return x.current && (clearTimeout(t), f && f()),
                        function() {
                            return clearTimeout(t)
                        }
                }, [L, g, f]), [C, M + 1]
            };
            e.CF = a, e.Ku = l
        },
        9051: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                    icon: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",
                    mask: "M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",
                    color: "#7f7f7f"
                },
                r = {
                    icon: "M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",
                    mask: "M0,0v64h64V0H0z M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",
                    color: "#49a9e9"
                };
            e.default = {
                bandsintown: {
                    icon: "M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z",
                    mask: "M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z",
                    color: "#1B8793"
                },
                behance: {
                    icon: "M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z",
                    mask: "M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z",
                    color: "#007CFF"
                },
                clubhouse: {
                    icon: "M 0,0 H 64 V 64 H 0 Z",
                    mask: "M.03516.10352v64.16796h64.16796V.10352H.03517zm32.67578 15.42773c1.27648 0 2.23913.56594 2.80273 1.83984.82354-.53787 1.95547-.7372 2.91797-.48242 1.30479.33971 2.09883 1.24658 2.58008 4.02344.16985.88015.42298 1.95643.73437 2.89062.39633 1.19156.84993 2.12458 1.64258 3.51172.25478.42464.56556.90643.87696 1.35938l.25585-.50977c.76435-1.55957 2.26748-3.08789 4.44727-3.08789.93677 0 1.9553.34023 2.52148 1.30274.36802.53787.50977 1.1594.50977 1.69726 0 .73604-.31162 1.47288-.5664 2.03906-.05662.11324-.084.16896-.084.19727-.6511 1.35883-1.52929 3.06134-1.52929 5.04297 0 5.7493-2.12565 8.69592-3.76758 10.2246-1.6728 1.55958-4.27695 2.88868-7.30859 2.88868-2.15148 0-4.39038-.62256-6.23047-1.83984-2.5195-1.67023-4.05036-4.24896-5.4375-6.51368-1.13493-1.8967-1.95654-3.42436-3.17383-6.31445-.70772-1.61361-1.35861-3.28684-1.89648-5.07031-.48125-1.55957-.22765-2.6917.39258-3.42774.62537-.76434 1.50429-1.13283 2.4668-1.18945.16985 0 .3399.00099.50976.0293-.14155-.56618-.19922-1.04802-.19922-1.47266 0-1.84266 1.44707-3.20117 3.4004-3.20117.25477 0 .50985.02737.73632.08398-.0283-.3114-.05664-.56553-.05664-.8203 0-2.01252 1.6433-3.20118 3.45508-3.20118zm0 1.70117c-.82096 0-1.81055.42426-1.81055 1.5 0 .70773.19637 1.75487.39453 2.60156.33971.82354.39763 1.33373.82227 3.1172.25478 1.05.56555 1.95539.87695 2.74804.36802.96508.79223 1.78657 1.38672 2.89062.28309.53787.42605.53794 1.10547.16993.53787-.2831 1.32934-.6241 1.92383-.82227-1.01913-2.2081-1.86834-4.05043-2.29297-5.60742-.11324-.45295-.50981-2.2679-.62305-3.06055-.08493-.79265-.16902-1.471-.36719-2.20703-.22647-.90589-.53843-1.33008-1.41601-1.33008zm4.86718 1.25c-.44454-.00398-.9176.13975-1.21484.39453-.3114.2831-.42477.50806-.33984 1.13086.14154 1.3614.36826 2.40958.62304 3.4004.5945 2.32133 1.5842 4.13519 2.09375 5.21093.16986.36802.31262.51073.5957.48242.39633-.0283.62218-.0576.87696-.0293.3397.02831.5957.2267.5957.56641 0 .2831-.14278.39653-.65234.50977-1.04743.22647-2.37943.59404-3.68164 1.33008-1.10663.62537-2.06969 1.39009-2.94727 2.49414-.08492.11323-.17095.16992-.3125.16992-.19816 0-.36725-.22666-.5371-.45313-.16986-.22647-.2832-.39655-.2832-.5664 0-.19817.08503-.36827.2832-.62305.3114-.42464.67968-.73543.67968-.9336 0-.14154-.254-.48062-.48047-.87695-.36801-.67941-.99138-2.04142-1.41601-3.06054-.6511-1.557-1.1046-3.54053-1.35938-4.75782-.3114-1.33052-.79326-1.69921-1.5293-1.69921-1.01912 0-1.69726.5941-1.69726 1.5 0 .59706.19742 1.38919.59375 2.6914.25478.84927.50986 1.69848.73633 2.29297.36801 1.0217.82047 2.15466 1.2168 3.06055.36801.82096.90537 1.78437 1.16015 2.26562.14155.25478.39649.67882.39649.9336 0 .45294-.33808.70703-.79102.70703-.25478 0-.48155-.11344-.73633-.50977-.3114-.45552-.9914-1.78457-1.47265-2.77539-.36802-.82096-.99134-2.29533-1.30274-3.31445-.50956-1.61361-.84898-2.2373-1.72656-2.20899-.50956.02831-.9347.1984-1.2461.5664-.3114.39634-.33876 1.0189-.08398 1.83985.53787 1.72685 1.16229 3.31164 1.83398 4.93555 1.19156 2.8026 1.9565 4.24976 3.06055 6.08984 1.38714 2.26472 2.74794 4.53085 4.92774 5.97461 1.557 1.01913 3.45679 1.5586 5.29687 1.5586 2.57612 0 4.75934-1.13529 6.14649-2.4375 1.41802-1.30222 3.22851-3.85202 3.22851-8.97852 0-2.34965 1.01978-4.39213 1.64258-5.72266.16985-.3397.5371-1.04707.5371-1.55664 0-.22647-.05571-.5372-.19726-.76367-.25478-.39632-.65156-.53906-1.1328-.53906-1.50296 0-2.46605 1.13418-3.00392 2.125-.22647.42463-.39556.87617-.5371 1.35742-.3114 1.04744-.62341 1.47295-1.5293 2.20899-.48126.42463-1.07436.96208-1.41406 1.38672-.56618.76691-.73737 1.41837-.87891 2.4375-.02831.25478-.50903.36718-1.10352.36718-.3397 0-.45312-.11252-.45312-.65039 0-.56618.19841-1.41534.62305-2.17969.59448-1.04743 1.24537-1.61447 1.89648-2.15234.6511-.53787.84965-.7638.9629-1.10352-.5945-.79522-1.16035-1.61555-1.6133-2.4082-.82095-1.44376-1.35856-2.522-1.7832-3.82422-.3397-1.0217-.6231-2.21228-.79296-3.14648-.33971-1.9842-.67897-2.49226-1.33008-2.66211-.13447-.03539-.27955-.05336-.42773-.05469zm-23.04296.3125c.20637-.01372.43669.0524.69726.1875.80552.41949 3.64839 2.63281 4.1914 3.07031.52501.42207.45311.64058.17774 1.1836s-.5325.68176-1.02148.52734c-.97795-.30882-3.8801-2.06658-4.63672-2.51953-.68456-.41177-.77298-.78223-.29688-1.68555.2638-.49862.54472-.7408.88868-.76367zm-1.78907 9.43555c.1387-.014.29568-.00501.46875.01172.80295.0772 4.52137.68056 5.11328.86328.6125.19044.69768.4686.62305 1.0039-.09522.69486-.40907.82698-.81055.83985-.85441.02316-4.40417-.1292-5.21484-.20899-.70515-.06948-.99127-.38064-.91406-1.40234.06176-.82225.3183-1.06544.73437-1.10742zm7.76368 7.58398c.30798.01846.53917.21806.71289.65235.25478.63566.08012.88943-.4629 1.22656-.59963.37059-3.77807 2.0357-4.49609 2.30078-.51213.19044-1.06769.14539-1.39453-.82227-.40147-1.1967.1619-1.47961.96484-1.79101.7103-.27537 3.65724-1.34205 4.3418-1.52734.12031-.03217.23133-.04522.33399-.03907z",
                    color: "#1F1F1A"
                },
                codepen: {
                    icon: "M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z",
                    mask: "M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z",
                    color: "#151515"
                },
                discord: {
                    icon: "M 0,0 H 64 V 64 H 0 Z",
                    mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 26.404297 16.828125 L 26.769531 17.259766 C 20.186671 19.137498 17.152344 21.990234 17.152344 21.990234 C 17.152344 21.990234 17.957407 21.557233 19.310547 20.943359 C 23.223697 19.246178 26.331328 18.778253 27.611328 18.669922 C 27.830758 18.633812 28.012992 18.597656 28.232422 18.597656 C 30.463282 18.308769 32.987954 18.236508 35.621094 18.525391 C 39.095384 18.922604 42.825476 19.931951 46.628906 21.990234 C 46.628906 21.990234 43.738624 19.282029 37.521484 17.404297 L 38.035156 16.828125 C 38.035156 16.828125 43.044257 16.719236 48.310547 20.619141 C 48.310547 20.619141 53.576172 30.044365 53.576172 41.671875 C 53.576172 41.671875 50.468999 46.907386 42.386719 47.160156 C 42.386719 47.160156 41.069796 45.606565 39.972656 44.234375 C 44.763516 42.898295 46.591797 39.9375 46.591797 39.9375 C 45.092367 40.91248 43.666719 41.598919 42.386719 42.068359 C 40.558139 42.826669 38.802844 43.332214 37.083984 43.621094 C 33.573124 44.271074 30.354188 44.091468 27.611328 43.585938 C 25.526758 43.188727 23.735758 42.610963 22.236328 42.033203 C 21.395188 41.708213 20.480696 41.310228 19.566406 40.804688 C 19.456696 40.732487 19.346048 40.69722 19.236328 40.625 C 19.163228 40.5889 19.126414 40.551755 19.089844 40.515625 C 18.431554 40.154535 18.066406 39.902344 18.066406 39.902344 C 18.066406 39.902344 19.822217 42.789919 24.466797 44.162109 C 23.369647 45.534299 22.015625 47.160156 22.015625 47.160156 C 13.933335 46.907386 10.861328 41.671875 10.861328 41.671875 C 10.861328 30.044375 16.128906 20.619141 16.128906 20.619141 C 21.395196 16.719236 26.404297 16.828125 26.404297 16.828125 z M 25.380859 30.296875 C 23.296289 30.296875 21.650391 32.101957 21.650391 34.304688 C 21.650391 36.507407 23.332859 38.3125 25.380859 38.3125 C 27.465429 38.3125 29.111328 36.507407 29.111328 34.304688 C 29.147928 32.101957 27.465429 30.296875 25.380859 30.296875 z M 38.728516 30.296875 C 36.643946 30.296875 34.998047 32.101957 34.998047 34.304688 C 34.998047 36.507407 36.680516 38.3125 38.728516 38.3125 C 40.813086 38.3125 42.458984 36.507407 42.458984 34.304688 C 42.458984 32.101957 40.813086 30.296875 38.728516 30.296875 z ",
                    color: "#7289DA"
                },
                dribbble: {
                    icon: "M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z",
                    mask: "M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z",
                    color: "#ea4c89"
                },
                dropbox: {
                    icon: "M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z",
                    mask: "M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z",
                    color: "#1081DE"
                },
                email: n,
                facebook: {
                    icon: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
                    mask: "M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",
                    color: "#3b5998"
                },
                fivehundredpix: {
                    icon: "M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z",
                    mask: "M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z",
                    color: "#222222"
                },
                flickr: {
                    icon: "M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z",
                    mask: "M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z",
                    color: "#0063db"
                },
                foursquare: {
                    icon: "M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z",
                    mask: "M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z",
                    color: "#0072b1"
                },
                github: {
                    icon: "M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z",
                    mask: "M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z",
                    color: "#24292e"
                },
                gitlab: {
                    icon: "m50.402 32.559l-1.9688-6.0664v0.007812-0.007812-0.003907l-3.9141-12.035c-0.21484-0.63672-0.80469-1.0586-1.4766-1.0547-0.67969 0.003906-1.25 0.42187-1.4609 1.0625l-3.7148 11.426h-11.719l-3.7227-11.426c-0.21094-0.64063-0.78125-1.0586-1.4609-1.0625h-0.007813c-0.66406 0-1.2578 0.42187-1.4727 1.0625l-3.9023 12.027v0.003907s0 0.003906-0.003906 0.007812c0.003906-0.003906 0.003906-0.007812 0.003906-0.007812l-1.9805 6.0664c-0.29687 0.91406 0.027344 1.9102 0.80469 2.4766l17.082 12.402c0.003907 0 0.007813 0 0.007813 0.003906 0.007812 0.003906 0.015625 0.011719 0.023437 0.015625-0.007812-0.003906-0.011719-0.011719-0.019531-0.015625l0.003906 0.003906h0.003906c0.023438 0.019532 0.050782 0.035157 0.082032 0.050782l0.007812 0.007812h0.003906l0.003907 0.003906h0.007812c0 0.003907 0 0.003907 0.003907 0.003907 0.003906 0 0.003906 0.003906 0.007812 0.003906 0.015625 0.007813 0.03125 0.011719 0.046875 0.019531 0.015625 0.003906 0.027344 0.011719 0.042969 0.015625v0.003907h0.007812c0.003906 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0.019532 0.007812 0.039063 0.011719 0.0625 0.015625 0.007813 0.003906 0.015625 0.007813 0.023438 0.007813h0.003906c0.003906 0 0.003906 0.003906 0.007812 0.003906h0.015626c0.003906 0 0.003906 0 0.007812 0.003906h0.003906c0.039063 0.003906 0.082032 0.007812 0.12109 0.007812h0.003906c0.039063 0 0.082032-0.003906 0.12109-0.007812h0.003906c0.003906-0.003906 0.007813-0.003906 0.011719-0.003906h0.011719c0.003906 0 0.007812-0.003906 0.007812-0.003906h0.003906c0.007813-0.003907 0.015626-0.003907 0.027344-0.007813 0.019532-0.003906 0.039063-0.007813 0.0625-0.015625h0.003906c0.003907 0 0.007813 0 0.011719-0.003906h0.003907s0.003906 0 0.007812-0.003906h0.007812v-0.003907c0.015626-0.003906 0.03125-0.011719 0.046876-0.015625 0.015624-0.007812 0.027343-0.011718 0.042968-0.019531 0.003906 0 0.007813-0.003906 0.007813-0.003906h0.003906c0.003906-0.003907 0.003906-0.003907 0.007813-0.003907 0.003906 0 0.003906-0.003906 0.007812-0.003906 0.003906-0.003906 0.007812-0.003906 0.011719-0.007812 0.027343-0.015625 0.054687-0.03125 0.082031-0.050782 0 0 0.003906 0 0.003906-0.003906h0.003906c0.003907-0.003906 0.003907-0.003906 0.007813-0.003906l17.086-12.402c0.77734-0.56641 1.1016-1.5625 0.80078-2.4766zm-7.3516-16.98l3.3516 10.309h-6.6992zm2.7656 12.051l-1.3672 1.75-10.086 12.91 4.7695-14.66zm-14.645 19.371c0.003906 0.003906 0.003906 0.003906 0.003906 0.007812 0-0.003906 0-0.003906-0.003906-0.007812zm-1.5273-4.707l-11.445-14.664h6.6797zm-8.6875-26.715l3.3555 10.309h-6.7031zm-5.5234 18.047c-0.16797-0.12109-0.23438-0.33203-0.17188-0.52734l1.4727-4.5117 10.773 13.805zm16.027 13.789c-0.003907-0.003906-0.007813-0.007812-0.011719-0.007812v-0.003906c-0.007813-0.003906-0.015625-0.011719-0.019531-0.015625-0.015626-0.011719-0.027344-0.023438-0.039063-0.035157 0.003906 0 0.003906 0.003907 0.003906 0.003907s0.003907 0 0.003907 0.003906c0.027343 0.023437 0.050781 0.046875 0.078124 0.066406h0.003907s0 0.003907 0.003906 0.003907c-0.007813-0.003907-0.015625-0.011719-0.023437-0.015626zm0.54297-3.5039l-2.8047-8.625-2.4844-7.6562h10.586zm0.57422 3.4766c-0.007813 0.003906-0.015625 0.011719-0.019531 0.015625-0.003906 0-0.003906 0-0.003906 0.003906-0.003907 0-0.007813 0.003906-0.007813 0.007812-0.007813 0.003907-0.015625 0.011719-0.023437 0.015626 0 0 0-0.003907 0.003906-0.003907 0.027344-0.019531 0.054687-0.042969 0.078125-0.066406l0.003906-0.003906s0.003906 0 0.003906-0.003907c-0.011719 0.011719-0.023437 0.023438-0.035156 0.035157zm15.996-13.762l-12.074 8.7617 10.781-13.797 1.4648 4.5078c0.0625 0.19531-0.003906 0.40625-0.17188 0.52734z",
                    mask: "m0 0v64h64v-64h-64zm50.402 32.559l-1.9688-6.0664v0.007812-0.007812-0.003907l-3.9141-12.035c-0.21484-0.63672-0.80469-1.0586-1.4766-1.0547-0.67969 0.003906-1.25 0.42187-1.4609 1.0625l-3.7148 11.426h-11.719l-3.7227-11.426c-0.21094-0.64063-0.78125-1.0586-1.4609-1.0625h-0.007813c-0.66406 0-1.2578 0.42187-1.4727 1.0625l-3.9023 12.027v0.003907s0 0.003906-0.003906 0.007812c0.003906-0.003906 0.003906-0.007812 0.003906-0.007812l-1.9805 6.0664c-0.29687 0.91406 0.027344 1.9102 0.80469 2.4766l17.082 12.402c0.003907 0 0.007813 0 0.007813 0.003906 0.007812 0.003906 0.015625 0.011719 0.023437 0.015625-0.007812-0.003906-0.011719-0.011719-0.019531-0.015625l0.003906 0.003906h0.003906c0.023438 0.019532 0.050782 0.035157 0.082032 0.050782l0.007812 0.007812h0.003906l0.003907 0.003906h0.007812c0 0.003907 0 0.003907 0.003907 0.003907 0.003906 0 0.003906 0.003906 0.007812 0.003906 0.015625 0.007813 0.03125 0.011719 0.046875 0.019531 0.015625 0.003906 0.027344 0.011719 0.042969 0.015625v0.003907h0.007812c0.003906 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0.019532 0.007812 0.039063 0.011719 0.0625 0.015625 0.007813 0.003906 0.015625 0.007813 0.023438 0.007813h0.003906c0.003906 0 0.003906 0.003906 0.007812 0.003906h0.015626c0.003906 0 0.003906 0 0.007812 0.003906h0.003906c0.039063 0.003906 0.082032 0.007812 0.12109 0.007812h0.003906c0.039063 0 0.082032-0.003906 0.12109-0.007812h0.003906c0.003906-0.003906 0.007813-0.003906 0.011719-0.003906h0.011719c0.003906 0 0.007812-0.003906 0.007812-0.003906h0.003906c0.007813-0.003907 0.015626-0.003907 0.027344-0.007813 0.019532-0.003906 0.039063-0.007813 0.0625-0.015625h0.003906c0.003907 0 0.007813 0 0.011719-0.003906h0.003907s0.003906 0 0.007812-0.003906h0.007812v-0.003907c0.015626-0.003906 0.03125-0.011719 0.046876-0.015625 0.015624-0.007812 0.027343-0.011718 0.042968-0.019531 0.003906 0 0.007813-0.003906 0.007813-0.003906h0.003906c0.003906-0.003907 0.003906-0.003907 0.007813-0.003907 0.003906 0 0.003906-0.003906 0.007812-0.003906 0.003906-0.003906 0.007812-0.003906 0.011719-0.007812 0.027343-0.015625 0.054687-0.03125 0.082031-0.050782 0 0 0.003906 0 0.003906-0.003906h0.003906c0.003907-0.003906 0.003907-0.003906 0.007813-0.003906l17.086-12.402c0.77734-0.56641 1.1016-1.5625 0.80078-2.4766zm-7.3516-16.98l3.3516 10.309h-6.6992zm2.7656 12.051l-1.3672 1.75-10.086 12.91 4.7695-14.66zm-14.645 19.371c0.003906 0.003906 0.003906 0.003906 0.003906 0.007812 0-0.003906 0-0.003906-0.003906-0.007812zm-1.5273-4.707l-11.445-14.664h6.6797zm-8.6875-26.715l3.3555 10.309h-6.7031zm-5.5234 18.047c-0.16797-0.12109-0.23438-0.33203-0.17188-0.52734l1.4727-4.5117 10.773 13.805zm16.027 13.789c-0.003907-0.003906-0.007813-0.007812-0.011719-0.007812v-0.003906c-0.007813-0.003906-0.015625-0.011719-0.019531-0.015625-0.015626-0.011719-0.027344-0.023438-0.039063-0.035157 0.003906 0 0.003906 0.003907 0.003906 0.003907s0.003907 0 0.003907 0.003906c0.027343 0.023437 0.050781 0.046875 0.078124 0.066406h0.003907s0 0.003907 0.003906 0.003907c-0.007813-0.003907-0.015625-0.011719-0.023437-0.015626zm0.54297-3.5039l-2.8047-8.625-2.4844-7.6562h10.586zm0.57422 3.4766c-0.007813 0.003906-0.015625 0.011719-0.019531 0.015625-0.003906 0-0.003906 0-0.003906 0.003906-0.003907 0-0.007813 0.003906-0.007813 0.007812-0.007813 0.003907-0.015625 0.011719-0.023437 0.015626 0 0 0-0.003907 0.003906-0.003907 0.027344-0.019531 0.054687-0.042969 0.078125-0.066406l0.003906-0.003906s0.003906 0 0.003906-0.003907c-0.011719 0.011719-0.023437 0.023438-0.035156 0.035157zm15.996-13.762l-12.074 8.7617 10.781-13.797 1.4648 4.5078c0.0625 0.19531-0.003906 0.40625-0.17188 0.52734z",
                    color: "#f96424"
                },
                google: {
                    icon: "M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z",
                    mask: "M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",
                    color: "#dd4b39"
                },
                google_play: {
                    icon: "M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z",
                    mask: "M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z",
                    color: "#40BBC1"
                },
                groupme: {
                    icon: "M40.321,39.43448a10.40049,9.51724 0 0 1 -16.64078,0a2.60012,2.37931 0 1 0 -4.16019,2.85517a15.60073,14.27586 0 0 0 24.96117,0a2.60012,2.37931 0 0 0 -4.16019,-2.85517zm-17.42081,-12.84828a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l5.20024,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-4.75862l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-5.20024,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-1.30006,0a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,4.75862l-1.30006,0zm6.5003,-4.75862l5.20024,0l0,4.75862l-5.20024,0l0,-4.75862z",
                    mask: "M0,0v64h64V0H0z M40.321,39.43448a10.40049,9.51724 0 0 1 -16.64078,0a2.60012,2.37931 0 1 0 -4.16019,2.85517a15.60073,14.27586 0 0 0 24.96117,0a2.60012,2.37931 0 0 0 -4.16019,-2.85517zm-17.42081,-12.84828a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l5.20024,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-4.75862l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-5.20024,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-1.30006,0a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,4.75862l-1.30006,0zm6.5003,-4.75862l5.20024,0l0,4.75862l-5.20024,0l0,-4.75862z",
                    color: "#00aff0"
                },
                instagram: {
                    icon: "M 39.88,25.89 C 40.86,25.89 41.65,25.10 41.65,24.12 41.65,23.14 40.86,22.35 39.88,22.35 38.90,22.35 38.11,23.14 38.11,24.12 38.11,25.10 38.90,25.89 39.88,25.89 Z M 32.00,24.42 C 27.82,24.42 24.42,27.81 24.42,32.00 24.42,36.19 27.82,39.58 32.00,39.58 36.18,39.58 39.58,36.18 39.58,32.00 39.58,27.82 36.18,24.42 32.00,24.42 Z M 32.00,36.92 C 29.28,36.92 27.08,34.72 27.08,32.00 27.08,29.28 29.28,27.08 32.00,27.08 34.72,27.08 36.92,29.28 36.92,32.00 36.92,34.72 34.72,36.92 32.00,36.92 Z M 32.00,19.90 C 35.94,19.90 36.41,19.92 37.96,19.99 39.41,20.05 40.19,20.29 40.71,20.50 41.40,20.77 41.89,21.08 42.41,21.60 42.92,22.12 43.24,22.61 43.51,23.30 43.71,23.82 43.95,24.60 44.02,26.04 44.09,27.60 44.11,28.06 44.11,32.01 44.11,35.95 44.09,36.41 44.02,37.97 43.95,39.41 43.71,40.19 43.51,40.71 43.24,41.40 42.92,41.90 42.41,42.41 41.89,42.93 41.40,43.25 40.71,43.51 40.19,43.71 39.41,43.96 37.96,44.02 36.41,44.09 35.94,44.11 32.00,44.11 28.06,44.11 27.59,44.09 26.04,44.02 24.59,43.96 23.81,43.72 23.29,43.51 22.60,43.24 22.11,42.93 21.59,42.41 21.08,41.90 20.76,41.40 20.49,40.71 20.29,40.19 20.05,39.41 19.98,37.97 19.91,36.41 19.89,35.95 19.89,32.01 19.89,28.06 19.91,27.60 19.98,26.04 20.05,24.60 20.29,23.82 20.49,23.30 20.76,22.61 21.08,22.12 21.59,21.60 22.11,21.08 22.60,20.76 23.29,20.50 23.81,20.30 24.59,20.05 26.04,19.99 27.59,19.91 28.06,19.90 32.00,19.90 Z M 32.00,17.24 C 27.99,17.24 27.49,17.26 25.91,17.33 24.34,17.40 23.27,17.65 22.33,18.01 21.36,18.39 20.54,18.90 19.72,19.72 18.90,20.54 18.39,21.37 18.01,22.33 17.65,23.27 17.40,24.34 17.33,25.92 17.26,27.49 17.24,27.99 17.24,32.00 17.24,36.01 17.26,36.51 17.33,38.09 17.40,39.66 17.65,40.73 18.01,41.67 18.39,42.65 18.90,43.47 19.72,44.29 20.54,45.11 21.37,45.61 22.33,45.99 23.27,46.36 24.34,46.61 25.92,46.68 27.49,46.75 27.99,46.77 32.01,46.77 36.02,46.77 36.52,46.75 38.09,46.68 39.66,46.61 40.74,46.36 41.68,45.99 42.65,45.62 43.47,45.11 44.29,44.29 45.11,43.47 45.62,42.64 46.00,41.67 46.36,40.74 46.61,39.66 46.68,38.09 46.75,36.51 46.77,36.01 46.77,32.00 46.77,27.99 46.75,27.49 46.68,25.91 46.61,24.34 46.36,23.27 46.00,22.33 45.62,21.35 45.11,20.53 44.29,19.71 43.47,18.89 42.65,18.39 41.68,18.01 40.74,17.64 39.67,17.39 38.09,17.32 36.51,17.26 36.01,17.24 32.00,17.24 Z",
                    mask: "M0,0v64h64V0H0z M 42.03,23.99 C 42.03,24.99 41.22,25.79 40.23,25.79 39.23,25.79 38.43,24.99 38.43,23.99 38.43,22.99 39.23,22.19 40.23,22.19 41.22,22.19 42.03,22.99 42.03,23.99 Z M 24.52,31.99 C 24.52,27.74 27.97,24.29 32.22,24.29 36.47,24.29 39.92,27.75 39.92,31.99 39.92,36.24 36.47,39.70 32.22,39.70 27.97,39.70 24.52,36.25 24.52,31.99 Z M 27.22,31.99 C 27.22,34.76 29.46,36.99 32.22,36.99 34.98,36.99 37.22,34.76 37.22,31.99 37.22,29.23 34.98,27.00 32.22,27.00 29.46,27.00 27.22,29.23 27.22,31.99 Z M 38.28,19.79 C 36.70,19.72 36.22,19.70 32.22,19.70 28.22,19.70 27.74,19.71 26.17,19.79 24.69,19.85 23.90,20.11 23.37,20.31 22.67,20.58 22.17,20.90 21.65,21.43 21.13,21.96 20.80,22.46 20.53,23.16 20.33,23.68 20.08,24.48 20.01,25.94 19.94,27.52 19.92,27.99 19.92,32.01 19.92,36.01 19.94,36.48 20.01,38.06 20.08,39.52 20.33,40.32 20.53,40.84 20.80,41.54 21.13,42.05 21.65,42.57 22.17,43.10 22.67,43.41 23.37,43.69 23.90,43.90 24.69,44.15 26.17,44.21 27.74,44.28 28.22,44.30 32.22,44.30 36.22,44.30 36.70,44.28 38.28,44.21 39.75,44.15 40.54,43.89 41.07,43.69 41.77,43.42 42.27,43.10 42.80,42.57 43.32,42.05 43.64,41.54 43.91,40.84 44.12,40.32 44.36,39.52 44.43,38.06 44.50,36.48 44.52,36.01 44.52,32.01 44.52,27.99 44.50,27.52 44.43,25.94 44.36,24.48 44.12,23.68 43.91,23.16 43.64,22.46 43.32,21.96 42.80,21.43 42.27,20.90 41.77,20.59 41.07,20.31 40.54,20.10 39.75,19.85 38.28,19.79 Z M 26.03,17.09 C 27.64,17.02 28.15,17.00 32.22,17.00 36.27,17.00 36.80,17.02 38.38,17.08 38.38,17.08 38.41,17.08 38.41,17.08 40.01,17.15 41.10,17.41 42.06,17.78 43.04,18.17 43.87,18.68 44.71,19.51 45.54,20.34 46.06,21.18 46.44,22.17 46.81,23.13 47.06,24.21 47.14,25.81 47.21,27.41 47.23,27.92 47.23,31.99 47.23,36.07 47.21,36.58 47.14,38.18 47.06,39.78 46.81,40.87 46.44,41.82 46.06,42.80 45.54,43.65 44.71,44.48 43.87,45.31 43.04,45.83 42.06,46.21 41.10,46.58 40.00,46.84 38.41,46.91 36.81,46.98 36.31,47.00 32.23,47.00 28.15,47.00 27.64,46.98 26.04,46.91 24.44,46.84 23.35,46.58 22.40,46.21 21.42,45.82 20.58,45.31 19.75,44.48 18.91,43.65 18.39,42.81 18.01,41.82 17.64,40.86 17.39,39.78 17.32,38.18 17.25,36.58 17.23,36.07 17.23,31.99 17.23,27.92 17.25,27.41 17.32,25.82 17.39,24.21 17.64,23.13 18.01,22.17 18.39,21.20 18.91,20.35 19.75,19.52 20.58,18.69 21.41,18.17 22.40,17.78 23.35,17.42 24.44,17.16 26.03,17.09 Z",
                    color: "#e94475"
                },
                "itch.io": {
                    icon: "M 0,0 H 64 V 64 H 0 Z",
                    mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 32 16 C 36.482469 15.999275 39.489763 16.027944 43.828125 16.197266 C 45.223688 17.11826 47.973899 20.631595 48 21.552734 L 48 23.076172 C 48 25.008914 46.375769 26.707031 44.900391 26.707031 C 43.128974 26.707031 41.652344 25.07576 41.652344 23.138672 C 41.652344 25.07576 40.226756 26.707031 38.455078 26.707031 C 36.68353 26.707031 35.302734 25.07576 35.302734 23.138672 C 35.302734 25.07576 33.787432 26.707031 32.015625 26.707031 L 31.984375 26.707031 C 30.212699 26.707031 28.697266 25.07576 28.697266 23.138672 C 28.697266 25.07576 27.316728 26.707031 25.544922 26.707031 C 23.773245 26.707031 22.347656 25.07576 22.347656 23.138672 C 22.347526 25.07576 20.871157 26.707031 19.099609 26.707031 C 17.624234 26.707031 16 25.008624 16 23.076172 L 16 21.552734 C 16.026082 20.63174 18.776052 17.11855 20.171875 16.197266 C 21.406769 16.077682 27.517662 16.000435 32 16 z M 28.673828 25.796875 A 3.6505562 4.0580007 0 0 0 29.292969 26.689453 A 3.7155025 4.1301957 0 0 0 31.894531 27.867188 C 31.930136 27.867188 31.964779 27.866621 32 27.865234 C 32.035221 27.866088 32.07219 27.867188 32.107422 27.867188 A 3.7155025 4.1301957 0 0 0 34.708984 26.689453 A 3.6502954 4.0577109 0 0 0 35.326172 25.796875 A 3.6548598 4.0627847 0 0 0 35.949219 26.689453 C 36.617985 27.416189 37.534472 27.867188 38.544922 27.867188 A 3.7141985 4.1287462 0 0 0 41.146484 26.689453 C 41.388792 26.425753 41.573442 26.142952 41.742188 25.814453 C 41.910814 26.143677 42.1458 26.425338 42.388672 26.689453 A 3.7168066 4.1316454 0 0 0 44.990234 27.867188 C 45.112172 27.867188 45.239291 27.830162 45.341797 27.791016 C 45.484209 29.439616 45.543344 31.01503 45.564453 32.164062 L 45.566406 32.169922 C 45.569073 32.753426 45.571445 33.23411 45.574219 33.900391 C 45.546831 37.359375 45.881298 45.110721 44.201172 47.015625 C 41.597581 47.690463 36.806287 47.998187 32 48 C 27.193582 47.998115 22.402421 47.690463 19.798828 47.015625 C 18.118702 45.110865 18.455126 37.359375 18.427734 33.900391 C 18.430401 33.233965 18.432987 32.753281 18.435547 32.169922 L 18.435547 32.164062 C 18.456799 31.015319 18.515782 29.439616 18.658203 27.791016 C 18.760709 27.830151 18.887947 27.867188 19.009766 27.867188 A 3.7168066 4.1316454 0 0 0 21.611328 26.689453 C 21.85416 26.425316 22.089324 26.143533 22.257812 25.814453 C 22.426437 26.142953 22.611207 26.425606 22.853516 26.689453 A 3.7144592 4.129036 0 0 0 25.455078 27.867188 C 26.465659 27.867188 27.382014 27.416332 28.050781 26.689453 A 3.6548598 4.0627847 0 0 0 28.673828 25.796875 z M 37.998047 29.636719 L 37.998047 29.638672 L 37.996094 29.638672 C 36.938044 29.640989 35.998583 29.639715 34.833984 31.052734 C 33.917302 30.94591 32.958545 30.891191 32 30.892578 C 31.041455 30.890977 30.082567 30.945897 29.166016 31.052734 C 28.001416 29.63986 27.061956 29.641019 26.003906 29.638672 L 26.001953 29.638672 C 25.502078 29.638672 23.502722 29.638165 22.109375 33.988281 L 20.613281 39.955078 C 19.504239 44.394801 20.966648 44.503759 22.792969 44.507812 C 25.50128 44.395752 27.001953 42.209586 27.001953 40.023438 C 28.501065 40.296565 30.250885 40.433594 32 40.433594 C 33.748987 40.433449 35.498804 40.296562 36.998047 40.023438 C 36.998047 42.209586 38.496636 44.395759 41.205078 44.507812 C 43.031397 44.503898 44.495762 44.39464 43.386719 39.955078 L 41.890625 33.988281 C 40.497278 29.638166 38.497925 29.636719 37.998047 29.636719 z M 32 33.056641 C 32 33.056641 34.851013 35.967594 35.363281 37.001953 L 33.498047 36.919922 L 33.498047 38.728516 C 33.498047 38.813166 32.749101 38.778784 32 38.740234 C 31.250641 38.778805 30.501953 38.813177 30.501953 38.728516 L 30.501953 36.919922 L 28.636719 37.001953 C 29.148854 35.967594 31.997653 33.059414 32 33.056641 z ",
                    color: "#fa5c5c"
                },
                itunes: {
                    icon: "M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z",
                    mask: "M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z",
                    color: "#E049D1"
                },
                linkedin: {
                    icon: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",
                    mask: "M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",
                    color: "#007fb1"
                },
                linktree: {
                    icon: "M27.43603,19.38636c-0.60084,-0.94849 -2.16195,-0.94849 -2.76234,0l-10.32917,16.44343c-0.48058,0.84332 0.24007,1.79182 1.32104,1.79182l6.96599,0l0,6.21877c0,0.63259 0.60084,1.15962 1.32149,1.15962l4.08339,0c0.72065,0 1.32104,-0.52703 1.32104,-1.15962l0,-6.21877l-1.92144,0c-0.84091,0 -1.4413,-0.52703 -1.56156,-1.15962c0,-0.21073 0,-0.42147 0.12026,-0.63454l5.7652,-9.17021l-4.3239,-7.27088zm9.12794,0c0.60084,-0.94849 2.16195,-0.94849 2.76234,0l10.32917,16.44343c0.48058,0.84332 -0.24007,1.79182 -1.32104,1.79182l-6.84618,0l0,6.21877c0,0.63259 -0.60039,1.15962 -1.32238,1.15962l-4.32257,0c-0.72065,0 -1.32104,-0.52703 -1.32104,-1.15962l0,-6.21877l1.92188,0c0.84046,0 1.44086,-0.52703 1.56111,-1.15962c0,-0.21073 0,-0.42147 -0.12026,-0.63454l-5.76476,-9.16786l4.44371,-7.27322z",
                    mask: "M0,0v64h64V0H0z M27.43603,19.38636c-0.60084,-0.94849 -2.16195,-0.94849 -2.76234,0l-10.32917,16.44343c-0.48058,0.84332 0.24007,1.79182 1.32104,1.79182l6.96599,0l0,6.21877c0,0.63259 0.60084,1.15962 1.32149,1.15962l4.08339,0c0.72065,0 1.32104,-0.52703 1.32104,-1.15962l0,-6.21877l-1.92144,0c-0.84091,0 -1.4413,-0.52703 -1.56156,-1.15962c0,-0.21073 0,-0.42147 0.12026,-0.63454l5.7652,-9.17021l-4.3239,-7.27088zm9.12794,0c0.60084,-0.94849 2.16195,-0.94849 2.76234,0l10.32917,16.44343c0.48058,0.84332 -0.24007,1.79182 -1.32104,1.79182l-6.84618,0l0,6.21877c0,0.63259 -0.60039,1.15962 -1.32238,1.15962l-4.32257,0c-0.72065,0 -1.32104,-0.52703 -1.32104,-1.15962l0,-6.21877l1.92188,0c0.84046,0 1.44086,-0.52703 1.56111,-1.15962c0,-0.21073 0,-0.42147 -0.12026,-0.63454l-5.76476,-9.16786l4.44371,-7.27322z",
                    color: "#39e09b"
                },
                mailto: n,
                medium: {
                    icon: "M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",
                    mask: "M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",
                    color: "#333332"
                },
                meetup: {
                    icon: "M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z",
                    mask: "M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z",
                    color: "#E51937"
                },
                pinterest: {
                    icon: "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",
                    mask: "M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",
                    color: "#cb2128"
                },
                pixiv: {
                    icon: "M 33.552734 16.46875 C 21.708875 16.46875 13.650391 25.615234 13.650391 25.615234 L 15.919922 29.220703 C 15.919922 29.220703 17.180054 29.327146 16.511719 27.203125 C 17.085451 26.116698 18.210086 24.658325 20.404297 22.970703 L 20.404297 46.978516 C 19.458253 47.247074 18.209962 47.747072 19.064453 48.601562 L 25.582031 48.601562 C 26.442627 47.740968 25.088743 47.222673 24.261719 46.978516 L 24.261719 41.316406 C 24.261719 41.316406 28.730963 43.072266 33.552734 43.072266 C 37.78552 43.072266 41.640263 41.811762 44.505859 39.535156 C 47.374506 37.270752 49.218055 33.892818 49.208984 30.029297 C 49.227296 26.306156 47.618647 22.755613 44.798828 20.320312 C 42.006468 17.881962 38.093741 16.472656 33.552734 16.472656 L 33.552734 16.46875 z M 33.15625 18.496094 C 36.757322 18.499147 39.580706 19.856689 41.494141 21.925781 C 43.401491 24.000973 44.442052 26.756349 44.451172 29.966797 C 44.438968 33.091793 43.327375 35.664185 41.34375 37.638672 C 39.363164 39.597898 36.479609 40.833984 33.15625 40.833984 L 33.134766 40.833984 C 29.436041 40.833984 26.318602 40.114744 24.261719 39.101562 L 24.261719 21.087891 C 26.523068 19.482668 30.189947 18.489893 33.15625 18.496094 z ",
                    mask: "M0,0v64h64V0H0z M 33.552734 16.46875 C 21.708875 16.46875 13.650391 25.615234 13.650391 25.615234 L 15.919922 29.220703 C 15.919922 29.220703 17.180054 29.327146 16.511719 27.203125 C 17.085451 26.116698 18.210086 24.658325 20.404297 22.970703 L 20.404297 46.978516 C 19.458253 47.247074 18.209962 47.747072 19.064453 48.601562 L 25.582031 48.601562 C 26.442627 47.740968 25.088743 47.222673 24.261719 46.978516 L 24.261719 41.316406 C 24.261719 41.316406 28.730963 43.072266 33.552734 43.072266 C 37.78552 43.072266 41.640263 41.811762 44.505859 39.535156 C 47.374506 37.270752 49.218055 33.892818 49.208984 30.029297 C 49.227296 26.306156 47.618647 22.755613 44.798828 20.320312 C 42.006468 17.881962 38.093741 16.472656 33.552734 16.472656 L 33.552734 16.46875 z M 33.15625 18.496094 C 36.757322 18.499147 39.580706 19.856689 41.494141 21.925781 C 43.401491 24.000973 44.442052 26.756349 44.451172 29.966797 C 44.438968 33.091793 43.327375 35.664185 41.34375 37.638672 C 39.363164 39.597898 36.479609 40.833984 33.15625 40.833984 L 33.134766 40.833984 C 29.436041 40.833984 26.318602 40.114744 24.261719 39.101562 L 24.261719 21.087891 C 26.523068 19.482668 30.189947 18.489893 33.15625 18.496094 z ",
                    color: "#0097fa"
                },
                ravelry: {
                    icon: "m 42.692268,28.943187 c 0,0 -2.183968,-0.39738 -3.751944,-0.39738 -3.583932,0 -4.423932,1.986862 -4.423932,4.938744 v 12.48877 h -9.68784 v -25.43168 h 9.68784 v 4.257542 c 1.175992,-3.576324 3.527958,-4.825204 8.175876,-4.825204 z",
                    mask: "m 63.924726,29.096387 c -0.159216,-1.37862 -0.223986,-2.77672 -0.49359,-4.132644 -0.32719,-1.64706 -0.744786,-3.286822 -1.26799,-4.880344 -0.914378,-2.785641 -2.24955,-5.367746 -4.06872,-7.666806 C 57.306434,11.420731 56.508042,10.42083 55.614454,9.5247095 53.750496,7.6562678 51.67293,6.055426 49.405762,4.7092447 47.043398,3.3062835 44.565046,2.1693223 41.930674,1.4199816 40.478706,1.0072007 38.995526,0.69580128 37.513944,0.40466133 36.620358,0.22946083 35.701974,0.18246043 34.795604,0.07380026 34.753982,0.06979694 34.716296,0.02600006 34.677222,0 33.258834,8.1989087e-4 31.840466,8.1989087e-4 30.422078,8.1989087e-4 30.104492,0.05262056 29.788486,0.12402026 29.468494,0.15402006 c -1.53998,0.14520013 -3.035156,0.50360058 -4.51433,0.94640074 -1.82077,0.5441412 -3.55994,1.2926611 -5.24071,2.1806619 -1.760773,0.9309812 -3.427949,2.0184831 -5.018319,3.2211239 -0.812793,0.6146996 -1.616767,1.2480602 -2.368755,1.9357611 -1.340791,1.227781 -2.6847606,2.4580233 -3.9439328,3.7693433 -1.700776,1.771942 -3.1671654,3.739324 -4.434328,5.859985 -1.123196,1.880602 -2.0455666,3.849625 -2.7007613,5.945945 -0.4727961,1.514064 -0.8143915,3.054064 -1.01357978,4.634626 -0.19839916,1.576502 -0.28319628,3.157882 -0.20481124,4.736824 0.08957116,1.796262 0.25360212,3.586864 0.58320198,5.365286 0.45679544,2.46452 1.17117854,4.831704 2.20476394,7.106446 0.8551724,1.880602 1.9239546,3.622543 3.1631412,5.270425 1.039188,1.38106 2.2159696,2.629922 3.4735436,3.78878 1.6863734,1.553804 3.5335414,2.901628 5.5063064,4.07833 2.339162,1.395656 4.794331,2.507478 7.36709,3.370342 1.750374,0.587138 3.54155,1.00558 5.355908,1.311318 0.799988,0.1346 1.617576,0.167 2.426364,0.249782 0.05446,0.006 0.10476,0.04942 0.15684,0.0746 1.41839,0 2.836758,0 4.255146,0 0.33039,-0.0518 0.65918,-0.1248 0.991976,-0.1524 2.152778,-0.1776 4.231136,-0.711222 6.258296,-1.428904 2.267166,-0.803656 4.441528,-1.83034 6.451108,-3.17572 1.28478,-0.85962 2.555948,-1.743562 3.787124,-2.679402 0.762404,-0.57984 1.447982,-1.26672 2.148768,-1.92766 0.5224,-0.493062 1.023192,-1.010444 1.516784,-1.533524 1.590368,-1.68922 2.963142,-3.547122 4.141522,-5.551825 1.257592,-2.139302 2.287174,-4.387284 2.93915,-6.790146 0.376814,-1.388362 0.652002,-2.805922 0.924798,-4.220246 0.13594,-0.703898 0.16474,-1.42972 0.246402,-2.14498 0.0038,-0.0422 0.04714,-0.0802 0.0728,-0.12 0,-1.64706 0,-3.2941 0,-4.941162 -0.02566,-0.0794 -0.0655,-0.1566 -0.07518,-0.23762 z m -21.232458,-0.1532 c 0,0 -2.183968,-0.39738 -3.751944,-0.39738 -3.583932,0 -4.423932,1.986862 -4.423932,4.938744 v 12.48877 h -9.68784 v -25.43168 h 9.68784 v 4.257542 c 1.175992,-3.576324 3.527958,-4.825204 8.175876,-4.825204 z",
                    color: "#EE6E62"
                },
                rdio: {
                    icon: "M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z",
                    mask: "M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z",
                    color: "#0475C5"
                },
                reddit: {
                    icon: "M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",
                    mask: "M0,0v64h64V0H0z M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",
                    color: "#FF4500"
                },
                rss: {
                    icon: "M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z",
                    mask: "M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z",
                    color: "#EF8733"
                },
                sharethis: {
                    icon: "M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",
                    mask: "M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",
                    color: "#00BF00"
                },
                slack: {
                    icon: "m 12.636243,37.559371 c 0,5.066504 8,5.066504 8,0 v -3.79988 h -4 c -2.209139,0 -4,1.701264 -4,3.79988 z m 25.28,-6.34579 c 2.209139,0 4,-1.701264 4,-3.79988 v -10.12667 c 0,-5.066504 -8,-5.066504 -8,0 v 10.12667 c -1.11e-4,2.113545 1.815256,3.821015 4.04,3.79988 z m 14.640001,-3.79988 c 0,-5.066504 -8.000001,-5.066504 -8.000001,0 v 3.79988 h 4.000001 c 2.240313,0.04257 4.080448,-1.671223 4.08,-3.79988 z m -25.240001,6.34579 c -2.209139,0 -4,1.701264 -4,3.79988 v 10.12667 c 0,5.066504 8,5.066504 8,0 v -10.12667 c 0,-2.098616 -1.790861,-3.79988 -4,-3.79988 z m 10.64,10.12667 h -4 v 3.79988 c 0,3.385567 4.308554,5.080452 6.828283,2.686784 2.51973,-2.393667 0.735584,-6.486664 -2.828283,-6.486664 z M 48.636244,33.759491 H 37.956243 c -5.324679,0.0082 -5.324679,7.591544 0,7.59975 h 10.680001 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z M 27.316243,23.613821 h -10.68 c -5.341983,-0.0082 -5.341983,7.607982 0,7.59975 h 10.68 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z m 0,-10.12667 c -5.324679,0.0082 -5.324679,7.591545 0,7.59975 h 4 v -3.79988 c 0,-2.098615 -1.790861,-3.79988 -4,-3.79988 z",
                    mask: "M 0,0 V 64 H 64 V 0 Z m 12.636243,37.559371 c 0,5.066505 8,5.066505 8,0 v -3.79988 h -4 c -2.209139,0 -4,1.701265 -4,3.79988 z m 25.28,-6.34579 c 2.209139,0 4,-1.701264 4,-3.79988 v -10.12667 c 0,-5.066504 -8,-5.066504 -8,0 v 10.12667 c -1.11e-4,2.113546 1.815256,3.821016 4.04,3.79988 z m 14.64,-3.79988 c 0,-5.066504 -8,-5.066504 -8,0 v 3.79988 h 4 c 2.240314,0.04257 4.080448,-1.671223 4.08,-3.79988 z m -25.24,6.34579 c -2.209139,0 -4,1.701265 -4,3.79988 v 10.12667 c 0,5.066505 8,5.066505 8,0 v -10.12667 c 0,-2.098615 -1.790861,-3.79988 -4,-3.79988 z m 10.64,10.12667 h -4 v 3.79988 c 0,3.385567 4.308554,5.080452 6.828283,2.686785 2.51973,-2.393667 0.735584,-6.486665 -2.828283,-6.486665 z m 10.68,-10.12667 h -10.68 c -5.324679,0.0082 -5.324679,7.591545 0,7.59975 h 10.68 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z m -21.32,-10.14567 h -10.68 c -5.341983,-0.0082 -5.341983,7.607983 0,7.59975 h 10.68 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z m 0,-10.12667 c -5.324679,0.0082 -5.324679,7.591545 0,7.59975 h 4 v -3.79988 c 0,-2.125738 -1.803765,-3.79987 -4,-3.79987 z",
                    color: "#4A164A"
                },
                smugmug: {
                    icon: "M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z",
                    mask: "M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z",
                    color: "#8cca1e"
                },
                snapchat: {
                    icon: "M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z",
                    mask: "M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z",
                    color: "#FFC91B"
                },
                soundcloud: {
                    icon: "M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z",
                    mask: "M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z",
                    color: "#FF5700"
                },
                spotify: {
                    icon: "M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2",
                    mask: "M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z",
                    color: "#2EBD59"
                },
                squarespace: {
                    icon: "M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z",
                    mask: "M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z",
                    color: "#1C1C1C"
                },
                stackoverflow: {
                    icon: "M 0,0 H 64 V 64 H 0 Z",
                    mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 37.623047 12.775391 L 47.613281 26.207031 L 44.925781 28.203125 L 34.9375 14.771484 L 37.623047 12.775391 z M 31.462891 18.119141 L 44.326172 28.832031 L 42.183594 31.404297 L 29.320312 20.691406 L 31.462891 18.119141 z M 26.533203 25.103516 L 41.708984 32.167969 L 40.294922 35.205078 L 25.121094 28.136719 L 26.533203 25.103516 z M 23.640625 32.705078 L 40.021484 36.150391 L 39.333984 39.423828 L 22.953125 35.980469 L 23.640625 32.705078 z M 15.984375 36.972656 L 19.318359 36.972656 L 19.318359 46.978516 L 42.666016 46.978516 L 42.666016 36.972656 L 46 36.972656 L 46 50.3125 L 15.984375 50.3125 L 15.984375 36.972656 z M 22.654297 40.308594 L 39.330078 40.308594 L 39.330078 43.642578 L 22.654297 43.642578 L 22.654297 40.308594 z",
                    color: "#ed803d"
                },
                "t.me": r,
                telegram: r,
                tiktok: {
                    icon: "M 0,0 H 64 V 64 H 0 Z",
                    mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 33.330078 16 L 38.845703 16 C 38.841484 16.464979 38.879928 16.930827 38.960938 17.388672 L 38.962891 17.388672 C 39.347214 19.450699 40.563022 21.263117 42.324219 22.402344 C 43.560373 23.223837 45.011906 23.660664 46.496094 23.660156 L 46.496094 24.853516 C 46.499654 24.854516 46.504312 24.854771 46.507812 24.855469 L 46.507812 29.123047 C 43.760055 29.129293 41.080342 28.271577 38.847656 26.669922 L 38.847656 37.882812 C 38.835889 43.478203 34.296575 48.007827 28.701172 48.007812 C 26.63222 48.048166 24.599665 47.449168 22.884766 46.291016 C 22.767781 46.167585 22.658664 46.038312 22.548828 45.910156 C 19.166219 43.334883 17.735525 38.905122 19.021484 34.820312 C 20.351327 30.5961 24.272588 27.726928 28.701172 27.736328 C 29.158607 27.742889 29.614526 27.781926 30.066406 27.853516 L 30.054688 33.488281 C 29.612312 33.350917 29.152646 33.277637 28.689453 33.273438 C 26.564626 33.28434 24.721455 34.740631 24.216797 36.804688 C 23.712137 38.868744 24.676556 41.009904 26.556641 42 C 27.215641 42.344292 27.967447 42.505495 28.710938 42.511719 C 31.19892 42.507676 33.238354 40.539029 33.330078 38.052734 L 33.330078 16 z",
                    color: "#000000"
                },
                tumblr: {
                    icon: "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",
                    mask: "M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",
                    color: "#2c4762"
                },
                twitch: {
                    icon: "M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z",
                    mask: "M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z",
                    color: "#6441A5"
                },
                twitter: {
                    icon: "m 48.1,22.1 c -1.223105,0.430685 -2.4,0.761371 -3.8,1 1.4,-0.8 2.4,-2.1 2.9,-3.6 -1.3,0.8 -2.7,1.3 -4.2,1.6 -1.2,-1.3 -3,-2.1 -4.8,-2.1 -3.6,0 -6.6,2.9 -6.6,6.6 0,0.5 0.1,1 0.2,1.5 -5.5,-0.3 -10.3,-2.9 -13.5,-6.9 -0.6,1 -0.9,2.1 -0.9,3.3 0,2.3 1.2,4.3 2.9,5.5 -1.1,0 -2.1,-0.3 -3,-0.8 v 0.1 c 0,3.2 2.3,5.8 5.3,6.4 -0.6,0.1 -1.1,0.2 -1.7,0.2 -0.4,0 -0.8,0 -1.2,-0.1 0.8,2.6 3.3,4.5 6.1,4.6 -2.2,1.8 -5.1,2.8 -8.2,2.8 -0.5,0 -1.1,0 -1.6,-0.1 C 18.9,44 22.4,45 26.1,45 38.2,45 44.43575,34.996634 44.67774,26.3 L 44.7,25.5 c 1.2,-1 2.5,-2.1 3.4,-3.4 z",
                    mask: "M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",
                    color: "#00aced"
                },
                upwork: {
                    icon: "M 0,0 H 64 V 64 H 0 Z",
                    mask: "M 32 0 C 14.272 0 0 14.272 0 32 C 0 49.728 14.272 64 32 64 C 49.728 64 64 49.728 64 32 C 64 14.272 49.728 0 32 0 z M 24.9375 17.111328 L 30.537109 17.111328 C 31.637109 20.911328 33.636719 25.310938 36.136719 29.210938 C 37.736719 23.710938 41.737109 20.210938 47.037109 20.210938 C 53.137109 20.210938 58.136719 25.2125 58.136719 31.3125 C 58.136719 37.7125 53.137109 42.710938 47.037109 42.710938 C 44.037109 42.710937 41.537891 41.911719 39.337891 40.511719 L 36.9375 52.412109 L 31.236328 52.412109 L 34.736328 36.111328 C 33.236328 34.011328 31.836328 31.612109 30.736328 29.412109 L 30.736328 31.912109 C 30.736328 38.012109 25.837891 42.912109 19.837891 42.912109 C 13.837891 42.912109 8.9375 38.012109 8.9375 31.912109 L 8.9375 17.210938 L 14.337891 17.210938 L 14.337891 31.8125 C 14.337891 34.7125 16.736719 37.111328 19.636719 37.111328 C 22.536719 37.111328 24.9375 34.7125 24.9375 31.8125 L 24.9375 17.111328 z M 47.136719 25.912109 C 43.036719 25.912109 41.737891 29.9125 41.337891 32.3125 L 41.337891 32.412109 L 40.736328 34.611328 C 42.536328 36.111328 44.837109 37.111328 47.037109 37.111328 C 49.937109 37.111328 52.636328 34.611719 52.736328 31.511719 C 52.736328 28.411719 50.236719 25.912109 47.136719 25.912109 z ",
                    color: "#3da800"
                },
                vevo: {
                    icon: "M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z",
                    mask: "M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z",
                    color: "#ED1A3B"
                },
                vimeo: {
                    icon: "M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z",
                    mask: "M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z",
                    color: "#1ab7ea"
                },
                vine: {
                    icon: "M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z",
                    mask: "M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z",
                    color: "#00BF8F"
                },
                vk: {
                    icon: "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
                    mask: "M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
                    color: "#45668e"
                },
                vsco: {
                    icon: "M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z",
                    mask: "M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z",
                    color: "#83878A"
                },
                wechat: {
                    icon: "M48.769,46.072c2.85-2.068,4.672-5.121,4.672-8.518c0-6.219-6.053-11.262-13.518-11.262s-13.519,5.043-13.519,11.262 c0,6.221,6.054,11.266,13.519,11.266c1.541,0,3.031-0.219,4.412-0.617l0.396-0.061c0.262,0,0.494,0.08,0.717,0.209l2.963,1.709 l0.26,0.084c0.248,0,0.449-0.201,0.449-0.451l-0.074-0.328l-0.607-2.275l-0.047-0.285C48.392,46.5,48.54,46.232,48.769,46.072z M24.782,13.854c-8.959,0-16.222,6.053-16.222,13.519c0,4.072,2.185,7.74,5.604,10.219c0.274,0.193,0.455,0.514,0.455,0.879 l-0.057,0.344l-0.731,2.729l-0.088,0.395c0,0.299,0.243,0.541,0.541,0.541l0.313-0.102l3.551-2.051 c0.266-0.152,0.548-0.248,0.86-0.248l0.477,0.07c1.657,0.479,3.445,0.742,5.296,0.742l0.891-0.021 c-0.352-1.055-0.544-2.166-0.544-3.311c0-6.811,6.623-12.33,14.794-12.33l0.881,0.022C39.581,18.794,32.874,13.854,24.782,13.854z M35.415,35.754c-0.994,0-1.801-0.807-1.801-1.803s0.807-1.803,1.801-1.803c0.998,0,1.803,0.807,1.803,1.803 S36.413,35.754,35.415,35.754z M44.431,35.754c-0.998,0-1.805-0.807-1.805-1.803s0.807-1.803,1.805-1.803 c0.992,0,1.799,0.807,1.799,1.803S45.423,35.754,44.431,35.754z M19.375,25.21c-1.195,0-2.162-0.969-2.162-2.162 c0-1.194,0.967-2.163,2.162-2.163c1.194,0,2.163,0.969,2.163,2.163C21.538,24.241,20.569,25.21,19.375,25.21z M30.188,25.21 c-1.196,0-2.162-0.969-2.162-2.162c0-1.194,0.966-2.163,2.162-2.163c1.195,0,2.162,0.969,2.162,2.163 C32.351,24.241,31.384,25.21,30.188,25.21z",
                    mask: "M65.6,65.6H-1.6V-1.6H65.6V65.6z M49.738,46.043c2.846-2.061,4.662-5.107,4.662-8.498 c0-6.207-6.043-11.244-13.492-11.244c-7.453,0-13.494,5.037-13.494,11.244c0,6.213,6.041,11.246,13.494,11.246 c1.537,0,3.025-0.221,4.402-0.615l0.395-0.059c0.262,0,0.498,0.078,0.717,0.207l2.955,1.707l0.26,0.082 c0.252,0,0.451-0.203,0.451-0.449l-0.074-0.328l-0.605-2.271l-0.047-0.287C49.361,46.477,49.508,46.211,49.738,46.043L49.738,46.043 z M25.793,13.887C16.85,13.887,9.6,19.93,9.6,27.383c0,4.066,2.182,7.723,5.596,10.197c0.275,0.195,0.453,0.518,0.453,0.879 l-0.055,0.344l-0.732,2.725l-0.086,0.393c0,0.301,0.24,0.541,0.539,0.541l0.311-0.1l3.545-2.049c0.27-0.152,0.551-0.248,0.861-0.248 l0.475,0.068c1.654,0.479,3.439,0.742,5.287,0.742l0.891-0.021c-0.354-1.053-0.543-2.16-0.543-3.309 c0-6.793,6.611-12.305,14.768-12.305l0.879,0.021C40.564,18.818,33.871,13.887,25.793,13.887z M36.408,35.746 c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799s1.799,0.807,1.799,1.799 C38.207,34.941,37.404,35.746,36.408,35.746z M45.404,35.746c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799 s1.799,0.807,1.799,1.799C47.203,34.941,46.4,35.746,45.404,35.746z M20.395,25.221c-1.189,0-2.158-0.965-2.158-2.158 s0.969-2.158,2.158-2.158c1.193,0,2.162,0.965,2.162,2.158S21.588,25.221,20.395,25.221z M31.191,25.221 c-1.193,0-2.158-0.965-2.158-2.158s0.965-2.158,2.158-2.158s2.158,0.965,2.158,2.158S32.385,25.221,31.191,25.221z",
                    color: "#00c80f"
                },
                whatsapp: {
                    icon: "M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",
                    mask: "M0,0v64h64V0H0z M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",
                    color: "#25D366"
                },
                yelp: {
                    icon: "M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z",
                    mask: "M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z",
                    color: "#B90C04"
                },
                youtube: {
                    icon: "M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z",
                    mask: "M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z",
                    color: "#ff3333"
                }
            }
        },
        5914: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r, i = (r = n(7294), r && r.__esModule ? r : {
                    default: r
                }),
                o = n(1779);

            function a() {
                return (a = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var s = function(t) {
                t.networkKey;
                var e = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = function(t, e) {
                        if (null == t) return {};
                        var n, r, i = {},
                            o = Object.keys(t);
                        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                        return i
                    }(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                    return i
                }(t, ["networkKey"]);
                return i.default.createElement("g", a({}, e, {
                    className: "social-svg-background",
                    style: o.socialSvgContent
                }), i.default.createElement("circle", {
                    cx: "32",
                    cy: "32",
                    r: "31"
                }))
            };
            e.default = s
        },
        6721: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n(5697)),
                i = s(n(7294)),
                o = n(3531),
                a = n(1779);

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function l() {
                return (l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function u(t) {
                var e, n, r = t.fgColor,
                    s = t.networkKey,
                    u = function(t, e) {
                        if (null == t) return {};
                        var n, r, i = function(t, e) {
                            if (null == t) return {};
                            var n, r, i = {},
                                o = Object.keys(t);
                            for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                            return i
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                        }
                        return i
                    }(t, ["fgColor", "networkKey"]);
                return i.default.createElement("g", l({}, u, {
                    className: "social-svg-icon",
                    style: (n = (e = {
                        fgColor: r
                    }).fgColor, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))), r.forEach(function(e) {
                                c(t, e, n[e])
                            })
                        }
                        return t
                    }({}, a.socialSvgContent, {
                        fill: n || "transparent"
                    }))
                }), i.default.createElement("path", {
                    d: (0, o.iconFor)(s)
                }))
            }
            u.propTypes = {
                fgColor: r.default.string,
                networkKey: r.default.string.isRequired
            }, e.default = u
        },
        1037: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n(5697)),
                i = s(n(7294)),
                o = n(3531),
                a = n(1779);

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function l() {
                return (l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function u(t) {
                var e, n, r, s = t.bgColor,
                    u = t.networkKey,
                    h = function(t, e) {
                        if (null == t) return {};
                        var n, r, i = function(t, e) {
                            if (null == t) return {};
                            var n, r, i = {},
                                o = Object.keys(t);
                            for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                            return i
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                        }
                        return i
                    }(t, ["bgColor", "networkKey"]);
                return i.default.createElement("g", l({}, h, {
                    className: "social-svg-mask",
                    style: (n = (e = {
                        bgColor: s,
                        networkKey: u
                    }).bgColor, r = e.networkKey, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))), r.forEach(function(e) {
                                c(t, e, n[e])
                            })
                        }
                        return t
                    }({}, a.socialSvgMask, {
                        fill: n || (0, o.colorFor)(r)
                    }))
                }), i.default.createElement("path", {
                    d: (0, o.maskFor)(u)
                }))
            }
            u.propTypes = {
                bgColor: r.default.string,
                networkKey: r.default.string.isRequired
            }, e.default = u
        },
        3531: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.keyTo = function(t, e) {
                var n = e.icon,
                    i = e.mask,
                    o = e.color;
                r.default[t] = {
                    icon: n,
                    mask: i,
                    color: o
                }
            }, e.iconFor = function(t) {
                return r.default[t] ? r.default[t].icon : null
            }, e.maskFor = function(t) {
                return r.default[t] ? r.default[t].mask : null
            }, e.colorFor = function(t) {
                return r.default[t] ? r.default[t].color : null
            }, e.keyFor = c, e.keysFor = function(t) {
                return t && Array.isArray(t) && 0 !== t.length ? t.map(c) : []
            }, e.KEYS = e.DEFAULT_KEY = void 0;
            var r = (a = n(9051), a && a.__esModule ? a : {
                    default: a
                }),
                i = "sharethis";
            e.DEFAULT_KEY = i;
            var o = Object.keys(r.default);
            e.KEYS = o;
            var a, s, l = RegExp("(?:https?:\\/\\/(?:[a-z0-9-]*.)?)?(" + o.sort(function(t, e) {
                return e.length - t.length
            }).join("|") + ").*");

            function c(t) {
                if (!t) return i;
                var e = t.replace(l, "$1");
                return e === t ? i : e
            }
        },
        9121: function(t, e, n) {
            "use strict";
            e.QZ = void 0;
            var r, i = (r = n(9657), r && r.__esModule ? r : {
                    default: r
                }),
                o = (n(3531), i.default);
            e.QZ = o
        },
        9657: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = u(n(5697)),
                i = u(n(7294)),
                o = u(n(5914)),
                a = u(n(6721)),
                s = u(n(1037)),
                l = n(3531),
                c = n(1779);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function h() {
                return (h = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function f(t) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function p(t) {
                var e, n = t.url,
                    r = t.network,
                    u = t.bgColor,
                    p = t.fgColor,
                    m = t.className,
                    v = t.label,
                    y = t.children,
                    g = t.defaultSVG,
                    C = t.style,
                    M = function(t, e) {
                        if (null == t) return {};
                        var n, r, i = function(t, e) {
                            if (null == t) return {};
                            var n, r, i = {},
                                o = Object.keys(t);
                            for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                            return i
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                        }
                        return i
                    }(t, ["url", "network", "bgColor", "fgColor", "className", "label", "children", "defaultSVG", "style"]);
                "object" === f(g) && null !== g && (0, l.keyTo)(l.DEFAULT_KEY, g);
                var b = (e = {
                    url: n,
                    network: r
                }).network || (0, l.keyFor)(e.url);
                return i.default.createElement("a", h({}, M, {
                    href: n,
                    className: "social-icon" + (m ? " " + m : ""),
                    style: function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))), r.forEach(function(e) {
                                d(t, e, n[e])
                            })
                        }
                        return t
                    }({}, c.socialIcon, C),
                    "aria-label": v || b
                }), i.default.createElement("div", {
                    className: "social-container",
                    style: c.socialContainer
                }, i.default.createElement("svg", {
                    className: "social-svg",
                    style: c.socialSvg,
                    viewBox: "0 0 64 64"
                }, i.default.createElement(o.default, null), i.default.createElement(a.default, {
                    networkKey: b,
                    fgColor: p
                }), i.default.createElement(s.default, {
                    networkKey: b,
                    bgColor: u
                }))), y)
            }
            p.propTypes = {
                className: r.default.string,
                bgColor: r.default.string,
                fgColor: r.default.string,
                label: r.default.string,
                network: r.default.string,
                url: r.default.string,
                defaultSVG: r.default.exact({
                    icon: r.default.string,
                    mask: r.default.string,
                    color: r.default.string
                }),
                style: r.default.PropTypes.object,
                children: r.default.node
            }, e.default = p
        },
        1779: function(t, e) {
            "use strict";

            function n(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.socialSvgMask = e.socialSvgContent = e.socialSvg = e.socialContainer = e.socialIcon = void 0, e.socialIcon = {
                display: "inline-block",
                width: "50px",
                height: "50px",
                position: "relative",
                overflow: "hidden",
                verticalAlign: "middle"
            }, e.socialContainer = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }, e.socialSvg = {
                borderRadius: "50%",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                fillRule: "evenodd"
            };
            var r = {
                msTransition: "fill 170ms ease-in-out",
                OTransition: "fill 170ms ease-in-out",
                MozTransition: "fill 170ms ease-in-out",
                WebkitTransition: "fill 170ms ease-in-out",
                transition: "fill 170ms ease-in-out",
                fill: "transparent"
            };
            e.socialSvgContent = r;
            var i = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), i.forEach(function(e) {
                        n(t, e, r[e])
                    })
                }
                return t
            }({}, r, {
                fill: "#0f0b0b"
            });
            e.socialSvgMask = i
        },
        603: function(t, e, n) {
            "use strict";

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return r(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(e, {
                Z: function() {
                    return i
                }
            })
        },
        415: function(t, e, n) {
            "use strict";
            n.d(e, {
                E: function() {
                    return oM
                }
            });
            var r, i, o, a, s, l = n(7294);
            let c = (0, l.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                u = (0, l.createContext)({}),
                h = (0, l.createContext)(null),
                d = "undefined" != typeof document,
                f = d ? l.useLayoutEffect : l.useEffect,
                p = (0, l.createContext)({
                    strict: !1
                });

            function m(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function v(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function y(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let g = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView", ];

            function C(t) {
                return y(t.animate) || g.some(e => v(t[e]))
            }

            function M(t) {
                return Boolean(C(t) || t.variants)
            }

            function b(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let z = t => ({
                    isEnabled: e => t.some(t => !!e[t])
                }),
                x = {
                    measureLayout: z(["layout", "layoutId", "drag"]),
                    animation: z(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", ]),
                    exit: z(["exit"]),
                    drag: z(["drag", "dragControls"]),
                    focus: z(["whileFocus"]),
                    hover: z(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: z(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: z(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd", ]),
                    inView: z(["whileInView", "onViewportEnter", "onViewportLeave", ])
                };

            function L(t) {
                let e = (0, l.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
            let V = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                w = 1,
                S = (0, l.createContext)({});
            class E extends l.Component {
                getSnapshotBeforeUpdate() {
                    let {
                        visualElement: t,
                        props: e
                    } = this.props;
                    return t && t.setProps(e), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            let k = (0, l.createContext)({}),
                A = Symbol.for("motionComponentSymbol"),
                T = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view", ];

            function P(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (T.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let O = {},
                j = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY", ],
                R = new Set(j);

            function H(t, {
                layout: e,
                layoutId: n
            }) {
                return R.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!O[t] || "opacity" === t)
            }
            let D = t => !!(null == t ? void 0 : t.getVelocity),
                F = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                B = (t, e) => j.indexOf(t) - j.indexOf(e);

            function U(t) {
                return t.startsWith("--")
            }
            let I = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                _ = (t, e) => n => Math.max(Math.min(n, e), t),
                N = t => t % 1 ? Number(t.toFixed(5)) : t,
                Z = /(-)?([\d]*\.?[\d])+/g,
                $ = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                W = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function Y(t) {
                return "string" == typeof t
            }
            let K = t => ({
                    test: e => Y(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                q = K("deg"),
                X = K("%"),
                G = K("px"),
                Q = K("vh"),
                J = K("vw"),
                tt = Object.assign(Object.assign({}, X), {
                    parse: t => X.parse(t) / 100,
                    transform: t => X.transform(100 * t)
                }),
                te = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                tn = Object.assign(Object.assign({}, te), {
                    transform: _(0, 1)
                }),
                tr = Object.assign(Object.assign({}, te), {
                    default: 1
                }),
                ti = { ...te,
                    transform: Math.round
                },
                to = {
                    borderWidth: G,
                    borderTopWidth: G,
                    borderRightWidth: G,
                    borderBottomWidth: G,
                    borderLeftWidth: G,
                    borderRadius: G,
                    radius: G,
                    borderTopLeftRadius: G,
                    borderTopRightRadius: G,
                    borderBottomRightRadius: G,
                    borderBottomLeftRadius: G,
                    width: G,
                    maxWidth: G,
                    height: G,
                    maxHeight: G,
                    size: G,
                    top: G,
                    right: G,
                    bottom: G,
                    left: G,
                    padding: G,
                    paddingTop: G,
                    paddingRight: G,
                    paddingBottom: G,
                    paddingLeft: G,
                    margin: G,
                    marginTop: G,
                    marginRight: G,
                    marginBottom: G,
                    marginLeft: G,
                    rotate: q,
                    rotateX: q,
                    rotateY: q,
                    rotateZ: q,
                    scale: tr,
                    scaleX: tr,
                    scaleY: tr,
                    scaleZ: tr,
                    skew: q,
                    skewX: q,
                    skewY: q,
                    distance: G,
                    translateX: G,
                    translateY: G,
                    translateZ: G,
                    x: G,
                    y: G,
                    z: G,
                    perspective: G,
                    transformPerspective: G,
                    opacity: tn,
                    originX: tt,
                    originY: tt,
                    originZ: G,
                    zIndex: ti,
                    fillOpacity: tn,
                    strokeOpacity: tn,
                    numOctaves: ti
                };

            function ta(t, e, n, r) {
                let {
                    style: i,
                    vars: o,
                    transform: a,
                    transformKeys: s,
                    transformOrigin: l
                } = t;
                s.length = 0;
                let c = !1,
                    u = !1,
                    h = !0;
                for (let d in e) {
                    let f = e[d];
                    if (U(d)) {
                        o[d] = f;
                        continue
                    }
                    let p = to[d],
                        m = I(f, p);
                    if (R.has(d)) {
                        if (c = !0, a[d] = m, s.push(d), !h) continue;
                        f !== (p.default || 0) && (h = !1)
                    } else d.startsWith("origin") ? (u = !0, l[d] = m) : i[d] = m
                }
                if (!e.transform && (c || r ? i.transform = function({
                        transform: t,
                        transformKeys: e
                    }, {
                        enableHardwareAcceleration: n = !0,
                        allowTransformNone: r = !0
                    }, i, o) {
                        let a = "";
                        for (let s of (e.sort(B), e)) a += `${F[s]||s}(${t[s]}) `;
                        return n && !t.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(t, i ? "" : a) : r && i && (a = "none"), a
                    }(t, n, h, r) : i.transform && (i.transform = "none")), u) {
                    let {
                        originX: v = "50%",
                        originY: y = "50%",
                        originZ: g = 0
                    } = l;
                    i.transformOrigin = `${v} ${y} ${g}`
                }
            }
            let ts = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function tl(t, e, n) {
                for (let r in e) D(e[r]) || H(r, n) || (t[r] = e[r])
            }

            function tc(t, e, n) {
                let r = {},
                    i = function(t, e, n) {
                        let r = t.style || {},
                            i = {};
                        return tl(i, r, t), Object.assign(i, function({
                            transformTemplate: t
                        }, e, n) {
                            return (0, l.useMemo)(() => {
                                let r = ts();
                                return ta(r, e, {
                                    enableHardwareAcceleration: !n
                                }, t), Object.assign({}, r.vars, r.style)
                            }, [e])
                        }(t, e, n)), t.transformValues ? t.transformValues(i) : i
                    }(t, e, n);
                return t.drag && !1 !== t.dragListener && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), r.style = i, r
            }
            let tu = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd", ]);

            function th(t) {
                return tu.has(t)
            }
            let td = t => !th(t);
            try {
                (r = require("@emotion/is-prop-valid").default) && (td = t => t.startsWith("on") ? !th(t) : r(t))
            } catch (tf) {}

            function tp(t, e, n) {
                return "string" == typeof t ? t : G.transform(e + n * t)
            }
            let tm = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tv = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function ty(t, {
                attrX: e,
                attrY: n,
                originX: r,
                originY: i,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: s = 0,
                ...l
            }, c, u) {
                ta(t, l, c, u), t.attrs = t.style, t.style = {};
                let {
                    attrs: h,
                    style: d,
                    dimensions: f
                } = t;
                h.transform && (f && (d.transform = h.transform), delete h.transform), f && (void 0 !== r || void 0 !== i || d.transform) && (d.transformOrigin = function(t, e, n) {
                    let r = tp(e, t.x, t.width),
                        i = tp(n, t.y, t.height);
                    return `${r} ${i}`
                }(f, void 0 !== r ? r : .5, void 0 !== i ? i : .5)), void 0 !== e && (h.x = e), void 0 !== n && (h.y = n), void 0 !== o && function(t, e, n = 1, r = 0, i = !0) {
                    t.pathLength = 1;
                    let o = i ? tm : tv;
                    t[o.offset] = G.transform(-r);
                    let a = G.transform(e),
                        s = G.transform(n);
                    t[o.array] = `${a} ${s}`
                }(h, o, a, s, !1)
            }
            let tg = () => ({ ...ts(),
                attrs: {}
            });

            function tC(t, e) {
                let n = (0, l.useMemo)(() => {
                    let n = tg();
                    return ty(n, e, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate), { ...n.attrs,
                        style: { ...n.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let r = {};
                    tl(r, t.style, t), n.style = { ...r,
                        ...n.style
                    }
                }
                return n
            }
            let tM = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tb(t, {
                style: e,
                vars: n
            }, r, i) {
                for (let o in Object.assign(t.style, e, i && i.getProjectionStyles(r)), n) t.style.setProperty(o, n[o])
            }
            let tz = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", ]);

            function tx(t, e, n, r) {
                for (let i in tb(t, e, void 0, r), e.attrs) t.setAttribute(tz.has(i) ? i : tM(i), e.attrs[i])
            }

            function tL(t) {
                let {
                    style: e
                } = t, n = {};
                for (let r in e)(D(e[r]) || H(r, t)) && (n[r] = e[r]);
                return n
            }

            function tV(t) {
                let e = tL(t);
                for (let n in t)
                    if (D(t[n])) {
                        let r = "x" === n || "y" === n ? "attr" + n.toUpperCase() : n;
                        e[r] = t[n]
                    }
                return e
            }

            function tw(t, e, n, r = {}, i = {}) {
                return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)), e
            }
            let tS = t => Array.isArray(t),
                tE = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
                tk = t => tS(t) ? t[t.length - 1] || 0 : t;

            function tA(t) {
                let e = D(t) ? t.get() : t;
                return tE(e) ? e.toValue() : e
            }
            let tT = t => (e, n) => {
                    let r = (0, l.useContext)(u),
                        i = (0, l.useContext)(h),
                        o = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: n
                        }, r, i, o) {
                            let a = {
                                latestValues: function(t, e, n, r) {
                                    let i = {},
                                        o = r(t);
                                    for (let a in o) i[a] = tA(o[a]);
                                    let {
                                        initial: s,
                                        animate: l
                                    } = t, c = C(t), u = M(t);
                                    e && u && !c && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === l && (l = e.animate));
                                    let h = !!n && !1 === n.initial;
                                    h = h || !1 === s;
                                    let d = h ? l : s;
                                    if (d && "boolean" != typeof d && !y(d)) {
                                        let f = Array.isArray(d) ? d : [d];
                                        f.forEach(e => {
                                            let n = tw(t, e);
                                            if (!n) return;
                                            let {
                                                transitionEnd: r,
                                                transition: o,
                                                ...a
                                            } = n;
                                            for (let s in a) {
                                                let l = a[s];
                                                if (Array.isArray(l)) {
                                                    let c = h ? l.length - 1 : 0;
                                                    l = l[c]
                                                }
                                                null !== l && (i[s] = l)
                                            }
                                            for (let u in r) i[u] = r[u]
                                        })
                                    }
                                    return i
                                }(r, i, o, t),
                                renderState: e()
                            };
                            return n && (a.mount = t => n(r, t, a)), a
                        })(t, e, r, i);
                    return n ? o() : L(o)
                },
                tP = {
                    useVisualState: tT({
                        scrapeMotionValuesFromProps: tV,
                        createRenderState: tg,
                        onMount(t, e, {
                            renderState: n,
                            latestValues: r
                        }) {
                            try {
                                n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (i) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            ty(n, r, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), tx(e, n)
                        }
                    })
                },
                tO = {
                    useVisualState: tT({
                        scrapeMotionValuesFromProps: tL,
                        createRenderState: ts
                    })
                };

            function tj(t, e, n, r = {
                passive: !0
            }) {
                return t.addEventListener(e, n, r), () => t.removeEventListener(e, n)
            }

            function tR(t, e, n, r) {
                (0, l.useEffect)(() => {
                    let i = t.current;
                    if (n && i) return tj(i, e, n, r)
                }, [t, e, n, r])
            }

            function tH(t) {
                return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function tD(t) {
                let e = !!t.touches;
                return e
            }(i = a || (a = {})).Animate = "animate", i.Hover = "whileHover", i.Tap = "whileTap", i.Drag = "whileDrag", i.Focus = "whileFocus", i.InView = "whileInView", i.Exit = "exit";
            let tF = {
                pageX: 0,
                pageY: 0
            };

            function tB(t, e = "page") {
                return {
                    point: tD(t) ? function(t, e = "page") {
                        let n = t.touches[0] || t.changedTouches[0],
                            r = n || tF;
                        return {
                            x: r[e + "X"],
                            y: r[e + "Y"]
                        }
                    }(t, e) : function(t, e = "page") {
                        return {
                            x: t[e + "X"],
                            y: t[e + "Y"]
                        }
                    }(t, e)
                }
            }
            let tU = (t, e = !1) => {
                    var n;
                    let r = e => t(e, tB(e));
                    return e ? t => {
                        let e = t instanceof MouseEvent,
                            n = !e || e && 0 === t.button;
                        n && r(t)
                    } : r
                },
                tI = () => d && null === window.onpointerdown,
                t_ = () => d && null === window.ontouchstart,
                tN = () => d && null === window.onmousedown,
                tZ = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                t$ = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function tW(t) {
                if (tI());
                else if (t_()) return t$[t];
                else if (tN()) return tZ[t];
                return t
            }

            function tY(t, e, n, r) {
                return tj(t, tW(e), tU(n, "pointerdown" === e), r)
            }

            function tK(t, e, n, r) {
                return tR(t, tW(e), n && tU(n, "pointerdown" === e), r)
            }

            function tq(t) {
                let e = null;
                return () => {
                    let n = () => {
                        e = null
                    };
                    return null === e && (e = t, n)
                }
            }
            let tX = tq("dragHorizontal"),
                tG = tq("dragVertical");

            function tQ(t) {
                let e = !1;
                if ("y" === t) e = tG();
                else if ("x" === t) e = tX();
                else {
                    let n = tX(),
                        r = tG();
                    n && r ? e = () => {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return e
            }

            function tJ() {
                let t = tQ(!0);
                return !t || (t(), !1)
            }

            function t0(t, e, n) {
                return (r, i) => {
                    !(!tH(r) || tJ()) && (t.animationState && t.animationState.setActive(a.Hover, e), n && n(r, i))
                }
            }
            let t1 = (t, e) => !!e && (t === e || t1(t, e.parentElement));

            function t2(t) {
                return (0, l.useEffect)(() => () => t(), [])
            }
            let t3 = (t, e) => n => e(t(n)),
                t4 = (...t) => t.reduce(t3);
            var t6 = n(3454);
            let t5 = (void 0 === t6 || t6.env, "production"),
                t9 = new Set,
                t7 = new WeakMap,
                t8 = new WeakMap,
                et = t => {
                    let e = t7.get(t.target);
                    e && e(t)
                },
                ee = t => {
                    t.forEach(et)
                },
                en = {
                    some: 0,
                    all: 1
                };

            function er(t, e, n, {
                root: r,
                margin: i,
                amount: o = "some",
                once: s
            }) {
                (0, l.useEffect)(() => {
                    if (!t) return;
                    let l = {
                            root: null == r ? void 0 : r.current,
                            rootMargin: i,
                            threshold: "number" == typeof o ? o : en[o]
                        },
                        c = t => {
                            let {
                                isIntersecting: r
                            } = t;
                            if (e.isInView === r || (e.isInView = r, s && !r && e.hasEnteredView)) return;
                            r && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(a.InView, r);
                            let i = n.getProps(),
                                o = r ? i.onViewportEnter : i.onViewportLeave;
                            o && o(t)
                        };
                    return function(t, e, n) {
                        let r = function({
                            root: t,
                            ...e
                        }) {
                            let n = t || document;
                            t8.has(n) || t8.set(n, {});
                            let r = t8.get(n),
                                i = JSON.stringify(e);
                            return r[i] || (r[i] = new IntersectionObserver(ee, {
                                root: t,
                                ...e
                            })), r[i]
                        }(e);
                        return t7.set(t, n), r.observe(t), () => {
                            t7.delete(t), r.unobserve(t)
                        }
                    }(n.getInstance(), l, c)
                }, [t, r, i, o])
            }

            function ei(t, e, n, {
                fallback: r = !0
            }) {
                (0, l.useEffect)(() => {
                    if (t && r) {
                        if ("production" !== t5) {
                            var i, o, s;
                            o = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", t9.has(o) || (console.warn(o), s && console.warn(s), t9.add(o))
                        }
                        requestAnimationFrame(() => {
                            e.hasEnteredView = !0;
                            let {
                                onViewportEnter: t
                            } = n.getProps();
                            t && t(null), n.animationState && n.animationState.setActive(a.InView, !0)
                        })
                    }
                }, [t])
            }
            let eo = t => e => (t(e), null),
                ea = {
                    inView: eo(function({
                        visualElement: t,
                        whileInView: e,
                        onViewportEnter: n,
                        onViewportLeave: r,
                        viewport: i = {}
                    }) {
                        let o = (0, l.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            a = Boolean(e || n || r);
                        i.once && o.current.hasEnteredView && (a = !1);
                        let s = "undefined" == typeof IntersectionObserver ? ei : er;
                        s(a, o.current, t, i)
                    }),
                    tap: eo(function({
                        onTap: t,
                        onTapStart: e,
                        onTapCancel: n,
                        whileTap: r,
                        visualElement: i
                    }) {
                        let o = (0, l.useRef)(!1),
                            s = (0, l.useRef)(null),
                            c = {
                                passive: !(e || t || n || p)
                            };

                        function u() {
                            s.current && s.current(), s.current = null
                        }

                        function h() {
                            return u(), o.current = !1, i.animationState && i.animationState.setActive(a.Tap, !1), !tJ()
                        }

                        function d(e, r) {
                            h() && (t1(i.getInstance(), e.target) ? t && t(e, r) : n && n(e, r))
                        }

                        function f(t, e) {
                            h() && n && n(t, e)
                        }

                        function p(t, n) {
                            u(), !o.current && (o.current = !0, s.current = t4(tY(window, "pointerup", d, c), tY(window, "pointercancel", f, c)), i.animationState && i.animationState.setActive(a.Tap, !0), e && e(t, n))
                        }
                        tK(i, "pointerdown", t || e || n || r ? p : void 0, c), t2(u)
                    }),
                    focus: eo(function({
                        whileFocus: t,
                        visualElement: e
                    }) {
                        let {
                            animationState: n
                        } = e, r = () => {
                            n && n.setActive(a.Focus, !0)
                        }, i = () => {
                            n && n.setActive(a.Focus, !1)
                        };
                        tR(e, "focus", t ? r : void 0), tR(e, "blur", t ? i : void 0)
                    }),
                    hover: eo(function({
                        onHoverStart: t,
                        onHoverEnd: e,
                        whileHover: n,
                        visualElement: r
                    }) {
                        tK(r, "pointerenter", t || n ? t0(r, !0, t) : void 0, {
                            passive: !t
                        }), tK(r, "pointerleave", e || n ? t0(r, !1, e) : void 0, {
                            passive: !e
                        })
                    })
                };

            function es() {
                let t = (0, l.useContext)(h);
                if (null === t) return [!0, null];
                let {
                    isPresent: e,
                    onExitComplete: n,
                    register: r
                } = t, i = (0, l.useId)();
                (0, l.useEffect)(() => r(i), []);
                let o = () => n && n(i);
                return !e && n ? [!1, o] : [!0]
            }

            function el(t, e) {
                if (!Array.isArray(e)) return !1;
                let n = e.length;
                if (n !== t.length) return !1;
                for (let r = 0; r < n; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            var ec = n(655),
                eu = function() {},
                eh = function() {};
            let ed = (t, e, n) => Math.min(Math.max(n, t), e);

            function ef(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let ep = ["duration", "bounce"],
                em = ["stiffness", "damping", "mass"];

            function ev(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function ey(t) {
                var {
                    from: e = 0,
                    to: n = 1,
                    restSpeed: r = 2,
                    restDelta: i
                } = t, o = (0, ec.__rest)(t, ["from", "to", "restSpeed", "restDelta"]);
                let a = {
                        done: !1,
                        value: e
                    },
                    {
                        stiffness: s,
                        damping: l,
                        mass: c,
                        velocity: u,
                        duration: h,
                        isResolvedFromDuration: d
                    } = function(t) {
                        let e = Object.assign({
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1
                        }, t);
                        if (!ev(t, em) && ev(t, ep)) {
                            let n = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: n = 0,
                                mass: r = 1
                            }) {
                                let i, o;
                                eu(t <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - e;
                                a = ed(.05, 1, a), t = ed(.01, 10, t / 1e3), a < 1 ? (i = e => {
                                    let r = e * a,
                                        i = r * t,
                                        o = ef(e, a);
                                    return .001 - (r - n) / o * Math.exp(-i)
                                }, o = e => {
                                    let r = e * a,
                                        o = r * t,
                                        s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                        l = ef(Math.pow(e, 2), a),
                                        c = -i(e) + .001 > 0 ? -1 : 1;
                                    return c * ((o * n + n - s) * Math.exp(-o)) / l
                                }) : (i = e => {
                                    let r = Math.exp(-e * t),
                                        i = (e - n) * t + 1;
                                    return -.001 + r * i
                                }, o = e => {
                                    let r = Math.exp(-e * t),
                                        i = (n - e) * (t * t);
                                    return r * i
                                });
                                let s = 5 / t,
                                    l = function(t, e, n) {
                                        let r = n;
                                        for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                                        return r
                                    }(i, o, s);
                                if (t *= 1e3, isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let c = Math.pow(l, 2) * r;
                                    return {
                                        stiffness: c,
                                        damping: 2 * a * Math.sqrt(r * c),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                                velocity: 0,
                                mass: 1
                            })).isResolvedFromDuration = !0
                        }
                        return e
                    }(o),
                    f = eg,
                    p = eg;

                function m() {
                    let t = u ? -(u / 1e3) : 0,
                        r = n - e,
                        o = l / (2 * Math.sqrt(s * c)),
                        a = Math.sqrt(s / c) / 1e3;
                    if (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, .4)), o < 1) {
                        let h = ef(a, o);
                        f = e => n - Math.exp(-o * a * e) * ((t + o * a * r) / h * Math.sin(h * e) + r * Math.cos(h * e)), p = e => {
                            let n = Math.exp(-o * a * e);
                            return o * a * n * (Math.sin(h * e) * (t + o * a * r) / h + r * Math.cos(h * e)) - n * (Math.cos(h * e) * (t + o * a * r) - h * r * Math.sin(h * e))
                        }
                    } else if (1 === o) f = e => n - Math.exp(-a * e) * (r + (t + a * r) * e);
                    else {
                        let d = a * Math.sqrt(o * o - 1);
                        f = e => {
                            let i = Math.min(d * e, 300);
                            return n - Math.exp(-o * a * e) * ((t + o * a * r) * Math.sinh(i) + d * r * Math.cosh(i)) / d
                        }
                    }
                }
                return m(), {
                    next(t) {
                        let e = f(t);
                        if (d) a.done = t >= h;
                        else {
                            let o = 1e3 * p(t),
                                s = Math.abs(n - e) <= i;
                            a.done = Math.abs(o) <= r && s
                        }
                        return a.value = a.done ? n : e, a
                    },
                    flipTarget() {
                        u = -u, [e, n] = [n, e], m()
                    }
                }
            }
            ey.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
            let eg = t => 0,
                eC = (t, e, n) => {
                    let r = e - t;
                    return 0 === r ? 1 : (n - t) / r
                },
                eM = (t, e, n) => -n * t + n * e + t,
                eb = (t, e) => n => Boolean(Y(n) && W.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
                ez = (t, e, n) => r => {
                    if (!Y(r)) return r;
                    let [i, o, a, s] = r.match(Z);
                    return {
                        [t]: parseFloat(i),
                        [e]: parseFloat(o),
                        [n]: parseFloat(a),
                        alpha: void 0 !== s ? parseFloat(s) : 1
                    }
                },
                ex = _(0, 255),
                eL = Object.assign(Object.assign({}, te), {
                    transform: t => Math.round(ex(t))
                }),
                eV = {
                    test: eb("rgb", "red"),
                    parse: ez("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + eL.transform(t) + ", " + eL.transform(e) + ", " + eL.transform(n) + ", " + N(tn.transform(r)) + ")"
                },
                ew = {
                    test: eb("#"),
                    parse: function(t) {
                        let e = "",
                            n = "",
                            r = "",
                            i = "";
                        return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), r = t.substr(5, 2), i = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), r = t.substr(3, 1), i = t.substr(4, 1), e += e, n += n, r += r, i += i), {
                            red: parseInt(e, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: i ? parseInt(i, 16) / 255 : 1
                        }
                    },
                    transform: eV.transform
                },
                eS = {
                    test: eb("hsl", "hue"),
                    parse: ez("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(t) + ", " + X.transform(N(e)) + ", " + X.transform(N(n)) + ", " + N(tn.transform(r)) + ")"
                };

            function eE(t, e, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function ek({
                hue: t,
                saturation: e,
                lightness: n,
                alpha: r
            }) {
                t /= 360, n /= 100;
                let i = 0,
                    o = 0,
                    a = 0;
                if (e /= 100) {
                    let s = n < .5 ? n * (1 + e) : n + e - n * e,
                        l = 2 * n - s;
                    i = eE(l, s, t + 1 / 3), o = eE(l, s, t), a = eE(l, s, t - 1 / 3)
                } else i = o = a = n;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * a),
                    alpha: r
                }
            }
            let eA = (t, e, n) => {
                    let r = t * t;
                    return Math.sqrt(Math.max(0, n * (e * e - r) + r))
                },
                eT = [ew, eV, eS],
                eP = t => eT.find(e => e.test(t)),
                eO = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
                ej = (t, e) => {
                    let n = eP(t),
                        r = eP(e);
                    eh(!!n, eO(t)), eh(!!r, eO(e));
                    let i = n.parse(t),
                        o = r.parse(e);
                    n === eS && (i = ek(i), n = eV), r === eS && (o = ek(o), r = eV);
                    let a = Object.assign({}, i);
                    return t => {
                        for (let e in a) "alpha" !== e && (a[e] = eA(i[e], o[e], t));
                        return a.alpha = eM(i.alpha, o.alpha, t), n.transform(a)
                    }
                },
                eR = {
                    test: t => eV.test(t) || ew.test(t) || eS.test(t),
                    parse: t => eV.test(t) ? eV.parse(t) : eS.test(t) ? eS.parse(t) : ew.parse(t),
                    transform: t => Y(t) ? t : t.hasOwnProperty("red") ? eV.transform(t) : eS.transform(t)
                },
                eH = "${c}",
                eD = "${n}";

            function eF(t) {
                "number" == typeof t && (t = `${t}`);
                let e = [],
                    n = 0,
                    r = t.match($);
                r && (n = r.length, t = t.replace($, eH), e.push(...r.map(eR.parse)));
                let i = t.match(Z);
                return i && (t = t.replace(Z, eD), e.push(...i.map(te.parse))), {
                    values: e,
                    numColors: n,
                    tokenised: t
                }
            }

            function eB(t) {
                return eF(t).values
            }

            function eU(t) {
                let {
                    values: e,
                    numColors: n,
                    tokenised: r
                } = eF(t), i = e.length;
                return t => {
                    let e = r;
                    for (let o = 0; o < i; o++) e = e.replace(o < n ? eH : eD, o < n ? eR.transform(t[o]) : N(t[o]));
                    return e
                }
            }
            let eI = t => "number" == typeof t ? 0 : t,
                e_ = {
                    test: function(t) {
                        var e, n, r, i;
                        return isNaN(t) && Y(t) && (null !== (n = null === (e = t.match(Z)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (i = null === (r = t.match($)) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) > 0
                    },
                    parse: eB,
                    createTransformer: eU,
                    getAnimatableNone: function(t) {
                        let e = eB(t),
                            n = eU(t);
                        return n(e.map(eI))
                    }
                },
                eN = t => "number" == typeof t;

            function eZ(t, e) {
                return eN(t) ? n => eM(t, e, n) : eR.test(t) ? ej(t, e) : eK(t, e)
            }
            let e$ = (t, e) => {
                    let n = [...t],
                        r = n.length,
                        i = t.map((t, n) => eZ(t, e[n]));
                    return t => {
                        for (let e = 0; e < r; e++) n[e] = i[e](t);
                        return n
                    }
                },
                eW = (t, e) => {
                    let n = Object.assign(Object.assign({}, t), e),
                        r = {};
                    for (let i in n) void 0 !== t[i] && void 0 !== e[i] && (r[i] = eZ(t[i], e[i]));
                    return t => {
                        for (let e in r) n[e] = r[e](t);
                        return n
                    }
                };

            function eY(t) {
                let e = e_.parse(t),
                    n = e.length,
                    r = 0,
                    i = 0,
                    o = 0;
                for (let a = 0; a < n; a++) r || "number" == typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
                return {
                    parsed: e,
                    numNumbers: r,
                    numRGB: i,
                    numHSL: o
                }
            }
            let eK = (t, e) => {
                    let n = e_.createTransformer(e),
                        r = eY(t),
                        i = eY(e),
                        o = r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers;
                    return o ? t4(e$(r.parsed, i.parsed), n) : (eu(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
                },
                eq = (t, e) => n => eM(t, e, n);

            function eX(t, e, {
                clamp: n = !0,
                ease: r,
                mixer: i
            } = {}) {
                let o = t.length;
                eh(o === e.length, "Both input and output ranges must be the same length"), eh(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[o - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                let a = function(t, e, n) {
                        var r;
                        let i = [],
                            o = n || (r = t[0], "number" == typeof r ? eq : "string" == typeof r ? eR.test(r) ? ej : eK : Array.isArray(r) ? e$ : "object" == typeof r ? eW : void 0),
                            a = t.length - 1;
                        for (let s = 0; s < a; s++) {
                            let l = o(t[s], t[s + 1]);
                            if (e) {
                                let c = Array.isArray(e) ? e[s] : e;
                                l = t4(c, l)
                            }
                            i.push(l)
                        }
                        return i
                    }(e, r, i),
                    s = 2 === o ? function([t, e], [n]) {
                        return r => n(eC(t, e, r))
                    }(t, a) : function(t, e) {
                        let n = t.length,
                            r = n - 1;
                        return i => {
                            let o = 0,
                                a = !1;
                            if (i <= t[0] ? a = !0 : i >= t[r] && (o = r - 1, a = !0), !a) {
                                let s = 1;
                                for (; s < n && !(t[s] > i) && s !== r; s++);
                                o = s - 1
                            }
                            let l = eC(t[o], t[o + 1], i);
                            return e[o](l)
                        }
                    }(t, a);
                return n ? e => s(ed(t[0], t[o - 1], e)) : s
            }
            let eG = t => e => 1 - t(1 - e),
                eQ = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                eJ = t => e => e * e * ((t + 1) * e - t),
                e0 = 4 / 11,
                e1 = 8 / 11,
                e2 = t => t,
                e3 = t => Math.pow(t, 2),
                e4 = eG(e3),
                e6 = eQ(e3),
                e5 = t => 1 - Math.sin(Math.acos(t)),
                e9 = eG(e5),
                e7 = eQ(e9),
                e8 = eJ(1.525),
                nt = eG(e8),
                ne = eQ(e8),
                nn = (t => {
                    let e = eJ(1.525);
                    return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })(1.525),
                nr = 4356 / 361,
                ni = 35442 / 1805,
                no = 16061 / 1805,
                na = t => {
                    if (1 === t || 0 === t) return t;
                    let e = t * t;
                    return t < e0 ? 7.5625 * e : t < e1 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? nr * e - ni * t + no : 10.8 * t * t - 20.52 * t + 10.72
                },
                ns = eG(na),
                nl = t => t < .5 ? .5 * (1 - na(1 - 2 * t)) : .5 * na(2 * t - 1) + .5;

            function nc({
                from: t = 0,
                to: e = 1,
                ease: n,
                offset: r,
                duration: i = 300
            }) {
                var o, a;
                let s = {
                        done: !1,
                        value: t
                    },
                    l = Array.isArray(e) ? e : [t, e],
                    c = (o = r && r.length === l.length ? r : function(t) {
                        let e = t.length;
                        return t.map((t, n) => 0 !== n ? n / (e - 1) : 0)
                    }(l)).map(t => t * i);

                function u() {
                    var t, e;
                    return eX(c, l, {
                        ease: Array.isArray(n) ? n : l.map(() => n || e6).splice(0, l.length - 1)
                    })
                }
                let h = u();
                return {
                    next: t => (s.value = h(t), s.done = t >= i, s),
                    flipTarget() {
                        l.reverse(), h = u()
                    }
                }
            }
            let nu = {
                    keyframes: nc,
                    spring: ey,
                    decay: function({
                        velocity: t = 0,
                        from: e = 0,
                        power: n = .8,
                        timeConstant: r = 350,
                        restDelta: i = .5,
                        modifyTarget: o
                    }) {
                        let a = {
                                done: !1,
                                value: e
                            },
                            s = n * t,
                            l = e + s,
                            c = void 0 === o ? l : o(l);
                        return c !== l && (s = c - e), {
                            next(t) {
                                let e = -s * Math.exp(-t / r);
                                return a.done = !(e > i || e < -i), a.value = a.done ? c : c + e, a
                            },
                            flipTarget() {}
                        }
                    }
                },
                nh = 1 / 60 * 1e3,
                nd = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                nf = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout(() => t(nd()), nh),
                np = !0,
                nm = !1,
                nv = !1,
                ny = {
                    delta: 0,
                    timestamp: 0
                },
                ng = ["read", "update", "preRender", "render", "postRender", ],
                nC = ng.reduce((t, e) => (t[e] = function(t) {
                    let e = [],
                        n = [],
                        r = 0,
                        i = !1,
                        o = !1,
                        a = new WeakSet,
                        s = {
                            schedule(t, o = !1, s = !1) {
                                let l = s && i,
                                    c = l ? e : n;
                                return o && a.add(t), -1 === c.indexOf(t) && (c.push(t), l && i && (r = e.length)), t
                            },
                            cancel(t) {
                                let e = n.indexOf(t); - 1 !== e && n.splice(e, 1), a.delete(t)
                            },
                            process(l) {
                                if (i) {
                                    o = !0;
                                    return
                                }
                                if (i = !0, [e, n] = [n, e], n.length = 0, r = e.length)
                                    for (let c = 0; c < r; c++) {
                                        let u = e[c];
                                        u(l), a.has(u) && (s.schedule(u), t())
                                    }
                                i = !1, o && (o = !1, s.process(l))
                            }
                        };
                    return s
                }(() => nm = !0), t), {}),
                nM = ng.reduce((t, e) => {
                    let n = nC[e];
                    return t[e] = (t, e = !1, r = !1) => (nm || nV(), n.schedule(t, e, r)), t
                }, {}),
                nb = ng.reduce((t, e) => (t[e] = nC[e].cancel, t), {}),
                nz = ng.reduce((t, e) => (t[e] = () => nC[e].process(ny), t), {}),
                nx = t => nC[t].process(ny),
                nL = t => {
                    nm = !1, ny.delta = np ? nh : Math.max(Math.min(t - ny.timestamp, 40), 1), ny.timestamp = t, nv = !0, ng.forEach(nx), nv = !1, nm && (np = !1, nf(nL))
                },
                nV = () => {
                    nm = !0, np = !0, nv || nf(nL)
                },
                nw = () => ny;

            function nS(t, e, n = 0) {
                return t - e - n
            }
            let nE = t => {
                let e = ({
                    delta: e
                }) => t(e);
                return {
                    start: () => nM.update(e, !0),
                    stop: () => nb.update(e)
                }
            };

            function nk(t) {
                var e, {
                        from: n,
                        autoplay: r = !0,
                        driver: i = nE,
                        elapsed: o = 0,
                        repeat: a = 0,
                        repeatType: s = "loop",
                        repeatDelay: l = 0,
                        onPlay: c,
                        onStop: u,
                        onComplete: h,
                        onRepeat: d,
                        onUpdate: f
                    } = t,
                    p = (0, ec.__rest)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
                let {
                    to: m
                } = p, v, y = 0, g = p.duration, C, M = !1, b = !0, z, x = function(t) {
                    if (Array.isArray(t.to)) return nc;
                    if (nu[t.type]) return nu[t.type];
                    let e = new Set(Object.keys(t));
                    if (e.has("ease") || e.has("duration") && !e.has("dampingRatio"));
                    else if (e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta")) return ey;
                    return nc
                }(p);
                (null === (e = x.needsInterpolation) || void 0 === e ? void 0 : e.call(x, n, m)) && (z = eX([0, 100], [n, m], {
                    clamp: !1
                }), n = 0, m = 100);
                let L = x(Object.assign(Object.assign({}, p), {
                    from: n,
                    to: m
                }));
                return r && (null == c || c(), (v = i(function t(e) {
                    if (b || (e = -e), o += e, !M) {
                        let n = L.next(Math.max(0, o));
                        C = n.value, z && (C = z(C)), M = b ? n.done : o <= 0
                    }
                    if (null == f || f(C), M) {
                        if (0 === y && (null != g || (g = o)), y < a) {
                            var r, i, c, u;
                            r = o, i = g, ((u = b) ? r >= i + l : r <= -l) && (y++, "reverse" === s ? o = function(t, e, n = 0, r = !0) {
                                return r ? nS(e + -t, e, n) : e - (t - e) + n
                            }(o, g, l, b = y % 2 == 0) : (o = nS(o, g, l), "mirror" === s && L.flipTarget()), M = !1, d && d())
                        } else v.stop(), h && h()
                    }
                })).start()), {
                    stop() {
                        null == u || u(), v.stop()
                    }
                }
            }

            function nA(t, e) {
                return e ? t * (1e3 / e) : 0
            }
            let nT = t => 1e3 * t,
                nP = (t, e) => 1 - 3 * e + 3 * t,
                nO = (t, e) => 3 * e - 6 * t,
                nj = t => 3 * t,
                nR = (t, e, n) => ((nP(e, n) * t + nO(e, n)) * t + nj(e)) * t,
                nH = (t, e, n) => 3 * nP(e, n) * t * t + 2 * nO(e, n) * t + nj(e),
                nD = {
                    linear: e2,
                    easeIn: e3,
                    easeInOut: e6,
                    easeOut: e4,
                    circIn: e5,
                    circInOut: e7,
                    circOut: e9,
                    backIn: e8,
                    backInOut: ne,
                    backOut: nt,
                    anticipate: nn,
                    bounceIn: ns,
                    bounceInOut: nl,
                    bounceOut: na
                },
                nF = t => {
                    if (Array.isArray(t)) {
                        eh(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, n, r, i] = t;
                        return function(t, e, n, r) {
                            if (t === e && n === r) return e2;
                            let i = new Float32Array(11);
                            for (let o = 0; o < 11; ++o) i[o] = nR(.1 * o, t, n);
                            return o => 0 === o || 1 === o ? o : nR(function(e) {
                                let r = 0,
                                    o = 1;
                                for (; 10 !== o && i[o] <= e; ++o) r += .1;
                                --o;
                                let a = (e - i[o]) / (i[o + 1] - i[o]),
                                    s = r + .1 * a,
                                    l = nH(s, t, n);
                                return l >= .001 ? function(t, e, n, r) {
                                    for (let i = 0; i < 8; ++i) {
                                        let o = nH(e, n, r);
                                        if (0 === o) break;
                                        let a = nR(e, n, r) - t;
                                        e -= a / o
                                    }
                                    return e
                                }(e, s, t, n) : 0 === l ? s : function(t, e, n, r, i) {
                                    let o, a, s = 0;
                                    do(o = nR(a = e + (n - e) / 2, r, i) - t) > 0 ? n = a : e = a; while (Math.abs(o) > 1e-7 && ++s < 10);
                                    return a
                                }(e, r, r + .1, t, n)
                            }(o), e, r)
                        }(e, n, r, i)
                    }
                    return "string" == typeof t ? (eh(void 0 !== nD[t], `Invalid easing type '${t}'`), nD[t]) : t
                },
                nB = t => Array.isArray(t) && "number" != typeof t[0],
                nU = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && e_.test(e) && !e.startsWith("url(")),
                nI = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                n_ = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                nN = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                nZ = t => ({
                    type: "keyframes",
                    duration: .8,
                    values: t
                }),
                n$ = {
                    x: nI,
                    y: nI,
                    z: nI,
                    rotate: nI,
                    rotateX: nI,
                    rotateY: nI,
                    rotateZ: nI,
                    scaleX: n_,
                    scaleY: n_,
                    scale: n_,
                    opacity: nN,
                    backgroundColor: nN,
                    color: nN,
                    default: n_
                },
                nW = (t, e) => {
                    let n;
                    return {
                        to: e,
                        ...(tS(e) ? nZ : n$[t] || n$.default)(e)
                    }
                },
                nY = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function nK(t) {
                let [e, n] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [r] = n.match(Z) || [];
                if (!r) return t;
                let i = n.replace(r, ""),
                    o = nY.has(e) ? 1 : 0;
                return r !== n && (o *= 100), e + "(" + o + i + ")"
            }
            let nq = /([a-z-]*)\(.*?\)/g,
                nX = Object.assign(Object.assign({}, e_), {
                    getAnimatableNone(t) {
                        let e = t.match(nq);
                        return e ? e.map(nK).join(" ") : t
                    }
                }),
                nG = { ...to,
                    color: eR,
                    backgroundColor: eR,
                    outlineColor: eR,
                    fill: eR,
                    stroke: eR,
                    borderColor: eR,
                    borderTopColor: eR,
                    borderRightColor: eR,
                    borderBottomColor: eR,
                    borderLeftColor: eR,
                    filter: nX,
                    WebkitFilter: nX
                },
                nQ = t => nG[t];

            function nJ(t, e) {
                var n;
                let r = nQ(t);
                return r !== nX && (r = e_), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
            }
            let n0 = {
                    current: !1
                },
                n1 = !1;

            function n2(t) {
                return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function n3(t) {
                return "number" == typeof t ? 0 : nJ("", t)
            }

            function n4(t, e) {
                return t[e] || t.default || t
            }

            function n6(t, e, n, r = {}) {
                return n0.current && (r = {
                    type: !1
                }), e.start(i => {
                    let o, a, s = function(t, e, n, r, i) {
                            let o = n4(r, t) || {},
                                a = void 0 !== o.from ? o.from : e.get(),
                                s = nU(t, n);
                            "none" === a && s && "string" == typeof n ? a = nJ(t, n) : n2(a) && "string" == typeof n ? a = n3(n) : !Array.isArray(n) && n2(n) && "string" == typeof a && (n = n3(a));
                            let l = nU(t, a);
                            return eu(l === s, `You are trying to animate ${t} from "${a}" to "${n}". ${a} is not an animatable value - to enable this animation set ${a} to a value animatable to ${n} via the \`style\` property.`), l && s && !1 !== o.type ? function() {
                                var r, s, l, c;
                                let u = {
                                    from: a,
                                    to: n,
                                    velocity: e.getVelocity(),
                                    onComplete: i,
                                    onUpdate: t => e.set(t)
                                };
                                return "inertia" === o.type || "decay" === o.type ? function({
                                    from: t = 0,
                                    velocity: e = 0,
                                    min: n,
                                    max: r,
                                    power: i = .8,
                                    timeConstant: o = 750,
                                    bounceStiffness: a = 500,
                                    bounceDamping: s = 10,
                                    restDelta: l = 1,
                                    modifyTarget: c,
                                    driver: u,
                                    onUpdate: h,
                                    onComplete: d,
                                    onStop: f
                                }) {
                                    let p;

                                    function m(t) {
                                        return void 0 !== n && t < n || void 0 !== r && t > r
                                    }

                                    function v(t) {
                                        return void 0 === n ? r : void 0 === r ? n : Math.abs(n - t) < Math.abs(r - t) ? n : r
                                    }

                                    function y(t) {
                                        null == p || p.stop(), p = nk(Object.assign(Object.assign({}, t), {
                                            driver: u,
                                            onUpdate(e) {
                                                var n;
                                                null == h || h(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                            },
                                            onComplete: d,
                                            onStop: f
                                        }))
                                    }

                                    function g(t) {
                                        y(Object.assign({
                                            type: "spring",
                                            stiffness: a,
                                            damping: s,
                                            restDelta: l
                                        }, t))
                                    }
                                    if (m(t)) g({
                                        from: t,
                                        velocity: e,
                                        to: v(t)
                                    });
                                    else {
                                        let C = i * e + t;
                                        void 0 !== c && (C = c(C));
                                        let M = v(C),
                                            b = M === n ? -1 : 1,
                                            z, x, L = t => {
                                                z = x, x = t, e = nA(t - z, nw().delta), (1 === b && t > M || -1 === b && t < M) && g({
                                                    from: t,
                                                    to: M,
                                                    velocity: e
                                                })
                                            };
                                        y({
                                            type: "decay",
                                            from: t,
                                            velocity: e,
                                            timeConstant: o,
                                            power: i,
                                            restDelta: l,
                                            modifyTarget: c,
                                            onUpdate: m(C) ? L : void 0
                                        })
                                    }
                                    return {
                                        stop: () => null == p ? void 0 : p.stop()
                                    }
                                }({ ...u,
                                    ...o
                                }) : nk({ ...(r = o, Array.isArray(u.to) && void 0 === r.duration && (r.duration = .8), Array.isArray((c = u).to) && null === c.to[0] && (c.to = [...c.to], c.to[0] = c.from), ! function({
                                        when: t,
                                        delay: e,
                                        delayChildren: n,
                                        staggerChildren: r,
                                        staggerDirection: i,
                                        repeat: o,
                                        repeatType: a,
                                        repeatDelay: s,
                                        from: l,
                                        ...c
                                    }) {
                                        return !!Object.keys(c).length
                                    }(r) && (r = { ...r,
                                        ...nW(t, u.to)
                                    }), { ...u,
                                        ... function({
                                            ease: t,
                                            times: e,
                                            yoyo: n,
                                            flip: r,
                                            loop: i,
                                            ...o
                                        }) {
                                            let a = { ...o
                                            };
                                            return e && (a.offset = e), o.duration && (a.duration = nT(o.duration)), o.repeatDelay && (a.repeatDelay = nT(o.repeatDelay)), t && (a.ease = nB(t) ? t.map(nF) : nF(t)), "tween" === o.type && (a.type = "keyframes"), (n || i || r) && (eu(!n1, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), n1 = !0, n ? a.repeatType = "reverse" : i ? a.repeatType = "loop" : r && (a.repeatType = "mirror"), a.repeat = i || n || r || o.repeat), "spring" !== o.type && (a.type = "keyframes"), a
                                        }(r)
                                    }),
                                    onUpdate(t) {
                                        u.onUpdate(t), o.onUpdate && o.onUpdate(t)
                                    },
                                    onComplete() {
                                        u.onComplete(), o.onComplete && o.onComplete()
                                    }
                                })
                            } : function() {
                                let t = tk(n);
                                return e.set(t), i(), o.onUpdate && o.onUpdate(t), o.onComplete && o.onComplete(), {
                                    stop() {}
                                }
                            }
                        }(t, e, n, r, i),
                        l = function(t, e) {
                            var n, r;
                            let i = n4(t, e) || {};
                            return null !== (r = null !== (n = i.delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
                        }(r, t),
                        c = () => a = s();
                    return l ? o = window.setTimeout(c, nT(l)) : c(), () => {
                        clearTimeout(o), a && a.stop()
                    }
                })
            }
            let n5 = t => /^\-?\d*\.?\d+$/.test(t),
                n9 = t => /^0[^.\s]+$/.test(t);

            function n7(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function n8(t, e) {
                let n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            class rt {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return n7(this.subscriptions, t), () => n8(this.subscriptions, t)
                }
                notify(t, e, n) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](t, e, n);
                        else
                            for (let i = 0; i < r; i++) {
                                let o = this.subscriptions[i];
                                o && o(t, e, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let re = t => !isNaN(parseFloat(t));
            class rn {
                constructor(t) {
                    this.version = "7.5.3", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new rt, this.velocityUpdateSubscribers = new rt, this.renderSubscribers = new rt, this.canTrackVelocity = !1, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: n,
                            timestamp: r
                        } = nw();
                        this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, nM.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.updateSubscribers.notify(this.current), this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()), e && this.renderSubscribers.notify(this.current)
                    }, this.scheduleVelocityCheck = () => nM.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = re(this.current)
                }
                onChange(t) {
                    return this.updateSubscribers.add(t)
                }
                clearListeners() {
                    this.updateSubscribers.clear()
                }
                onRenderRequest(t) {
                    return t(this.get()), this.renderSubscribers.add(t)
                }
                attach(t) {
                    this.passiveEffect = t
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? nA(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.stopAnimation = t(e)
                    }).then(() => this.clearAnimation())
                }
                stop() {
                    this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.stopAnimation
                }
                clearAnimation() {
                    this.stopAnimation = null
                }
                destroy() {
                    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                }
            }

            function rr(t) {
                return new rn(t)
            }
            let ri = t => e => e.test(t),
                ro = [te, G, X, q, J, Q, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                ra = t => ro.find(ri(t)),
                rs = [...ro, eR, e_],
                rl = t => rs.find(ri(t));

            function rc(t, e, n) {
                let r = t.getProps();
                return tw(r, e, void 0 !== n ? n : r.custom, function(t) {
                    let e = {};
                    return t.forEachValue((t, n) => e[n] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.forEachValue((t, n) => e[n] = t.getVelocity()), e
                }(t))
            }

            function ru(t, e, n) {
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, rr(n))
            }

            function rh(t, e) {
                if (!e) return;
                let n = e[t] || e.default || e;
                return n.from
            }

            function rd(t) {
                return Boolean(D(t) && t.add)
            }

            function rf(t, e, n = {}) {
                var r;
                let i = rc(t, e, n.custom),
                    {
                        transition: o = t.getDefaultTransition() || {}
                    } = i || {};
                n.transitionOverride && (o = n.transitionOverride);
                let a = i ? () => rp(t, i, n) : () => Promise.resolve(),
                    s = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
                        let {
                            delayChildren: i = 0,
                            staggerChildren: a,
                            staggerDirection: s
                        } = o;
                        return function(t, e, n = 0, r = 0, i = 1, o) {
                            let a = [],
                                s = (t.variantChildren.size - 1) * r,
                                l = 1 === i ? (t = 0) => t * r : (t = 0) => s - t * r;
                            return Array.from(t.variantChildren).sort(rm).forEach((t, r) => {
                                a.push(rf(t, e, { ...o,
                                    delay: n + l(r)
                                }).then(() => t.notifyAnimationComplete(e)))
                            }), Promise.all(a)
                        }(t, e, i + r, a, s, n)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = o;
                if (!l) return Promise.all([a(), s(n.delay)]); {
                    let [c, u] = "beforeChildren" === l ? [a, s] : [s, a];
                    return c().then(u)
                }
            }

            function rp(t, e, {
                delay: n = 0,
                transitionOverride: r,
                type: i
            } = {}) {
                var o;
                let {
                    transition: a = t.getDefaultTransition(),
                    transitionEnd: s,
                    ...l
                } = t.makeTargetAnimatable(e), c = t.getValue("willChange");
                r && (a = r);
                let u = [],
                    h = i && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[i]);
                for (let d in l) {
                    let f = t.getValue(d),
                        p = l[d];
                    if (!f || void 0 === p || h && rv(h, d)) continue;
                    let m = {
                        delay: n,
                        ...a
                    };
                    t.shouldReduceMotion && R.has(d) && (m = { ...m,
                        type: !1,
                        delay: 0
                    });
                    let v = n6(d, f, p, m);
                    rd(c) && (c.add(d), v = v.then(() => c.remove(d))), u.push(v)
                }
                return Promise.all(u).then(() => {
                    s && function(t, e) {
                        let n = rc(t, e),
                            {
                                transitionEnd: r = {},
                                transition: i = {},
                                ...o
                            } = n ? t.makeTargetAnimatable(n, !1) : {};
                        for (let a in o = { ...o,
                                ...r
                            }) {
                            let s = tk(o[a]);
                            ru(t, a, s)
                        }
                    }(t, s)
                })
            }

            function rm(t, e) {
                return t.sortNodePosition(e)
            }

            function rv({
                protectedKeys: t,
                needsAnimating: e
            }, n) {
                let r = t.hasOwnProperty(n) && !0 !== e[n];
                return e[n] = !1, r
            }
            let ry = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit, ],
                rg = [...ry].reverse(),
                rC = ry.length;

            function rM(t, e) {
                return "string" == typeof e ? e !== t : !!Array.isArray(e) && !el(e, t)
            }

            function rb(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let rz = {
                    animation: eo(({
                        visualElement: t,
                        animate: e
                    }) => {
                        t.animationState || (t.animationState = function(t) {
                            var e;
                            let n = e => Promise.all(e.map(({
                                    animation: e,
                                    options: n
                                }) => (function(t, e, n = {}) {
                                    t.notifyAnimationStart(e);
                                    let r;
                                    if (Array.isArray(e)) {
                                        let i = e.map(e => rf(t, e, n));
                                        r = Promise.all(i)
                                    } else if ("string" == typeof e) r = rf(t, e, n);
                                    else {
                                        let o = "function" == typeof e ? rc(t, e, n.custom) : e;
                                        r = rp(t, o, n)
                                    }
                                    return r.then(() => t.notifyAnimationComplete(e))
                                })(t, e, n))),
                                r = {
                                    [a.Animate]: rb(!0),
                                    [a.InView]: rb(),
                                    [a.Hover]: rb(),
                                    [a.Tap]: rb(),
                                    [a.Drag]: rb(),
                                    [a.Focus]: rb(),
                                    [a.Exit]: rb()
                                },
                                i = !0,
                                o = (e, n) => {
                                    let r = rc(t, n);
                                    if (r) {
                                        let {
                                            transition: i,
                                            transitionEnd: o,
                                            ...a
                                        } = r;
                                        e = { ...e,
                                            ...a,
                                            ...o
                                        }
                                    }
                                    return e
                                };

                            function s(e, a) {
                                var s;
                                let l = t.getProps(),
                                    c = t.getVariantContext(!0) || {},
                                    u = [],
                                    h = new Set,
                                    d = {},
                                    f = 1 / 0;
                                for (let p = 0; p < rC; p++) {
                                    let m = rg[p],
                                        g = r[m],
                                        C = null !== (s = l[m]) && void 0 !== s ? s : c[m],
                                        M = v(C),
                                        b = m === a ? g.isActive : null;
                                    !1 === b && (f = p);
                                    let z = C === c[m] && C !== l[m] && M;
                                    if (z && i && t.manuallyAnimateOnMount && (z = !1), g.protectedKeys = { ...d
                                        }, !g.isActive && null === b || !C && !g.prevProp || y(C) || "boolean" == typeof C) continue;
                                    let x = rM(g.prevProp, C),
                                        L = x || m === a && g.isActive && !z && M || p > f && M,
                                        V = Array.isArray(C) ? C : [C],
                                        w = V.reduce(o, {});
                                    !1 === b && (w = {});
                                    let {
                                        prevResolvedValues: S = {}
                                    } = g, E = { ...S,
                                        ...w
                                    }, k = t => {
                                        L = !0, h.delete(t), g.needsAnimating[t] = !0
                                    };
                                    for (let A in E) {
                                        let T = w[A],
                                            P = S[A];
                                        d.hasOwnProperty(A) || (T !== P ? tS(T) && tS(P) ? !el(T, P) || x ? k(A) : g.protectedKeys[A] = !0 : void 0 !== T ? k(A) : h.add(A) : void 0 !== T && h.has(A) ? k(A) : g.protectedKeys[A] = !0)
                                    }
                                    g.prevProp = C, g.prevResolvedValues = w, g.isActive && (d = { ...d,
                                        ...w
                                    }), i && t.blockInitialAnimation && (L = !1), L && !z && u.push(...V.map(t => ({
                                        animation: t,
                                        options: {
                                            type: m,
                                            ...e
                                        }
                                    })))
                                }
                                if (h.size) {
                                    let O = {};
                                    h.forEach(e => {
                                        let n = t.getBaseTarget(e);
                                        void 0 !== n && (O[e] = n)
                                    }), u.push({
                                        animation: O
                                    })
                                }
                                let j = Boolean(u.length);
                                return i && !1 === l.initial && !t.manuallyAnimateOnMount && (j = !1), i = !1, j ? n(u) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function(e, n, i) {
                                    var o;
                                    if (r[e].isActive === n) return Promise.resolve();
                                    null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                        var r;
                                        return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                    }), r[e].isActive = n;
                                    let a = s(i, e);
                                    for (let l in r) r[l].protectedKeys = {};
                                    return a
                                },
                                setAnimateFunction: function(e) {
                                    n = e(t)
                                },
                                getState: () => r
                            }
                        }(t)), y(e) && (0, l.useEffect)(() => e.subscribe(t), [e])
                    }),
                    exit: eo(t => {
                        let {
                            custom: e,
                            visualElement: n
                        } = t, [r, i] = es(), o = (0, l.useContext)(h);
                        (0, l.useEffect)(() => {
                            n.isPresent = r;
                            let t = n.animationState && n.animationState.setActive(a.Exit, !r, {
                                custom: o && o.custom || e
                            });
                            t && !r && t.then(i)
                        }, [r])
                    })
                },
                rx = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
                rL = t => rx(t) && t.hasOwnProperty("z"),
                rV = (t, e) => Math.abs(t - e);

            function rw(t, e) {
                if (eN(t) && eN(e)) return rV(t, e);
                if (rx(t) && rx(e)) {
                    let n = rV(t.x, e.x),
                        r = rV(t.y, e.y),
                        i = rL(t) && rL(e) ? rV(t.z, e.z) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2))
                }
            }
            class rS {
                constructor(t, e, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = rA(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                n = rw(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !n) return;
                            let {
                                point: r
                            } = t, {
                                timestamp: i
                            } = nw();
                            this.history.push({ ...r,
                                timestamp: i
                            });
                            let {
                                onStart: o,
                                onMove: a
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            if (this.lastMoveEvent = t, this.lastMoveEventInfo = rE(e, this.transformPagePoint), tH(t) && 0 === t.buttons) {
                                this.handlePointerUp(t, e);
                                return
                            }
                            nM.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: n,
                                onSessionEnd: r
                            } = this.handlers, i = rA(rE(e, this.transformPagePoint), this.history);
                            this.startEvent && n && n(t, i), r && r(t, i)
                        }, tD(t) && t.touches.length > 1) return;
                    this.handlers = e, this.transformPagePoint = n;
                    let r = tB(t),
                        i = rE(r, this.transformPagePoint),
                        {
                            point: o
                        } = i,
                        {
                            timestamp: a
                        } = nw();
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: s
                    } = e;
                    s && s(t, rA(i, this.history)), this.removeListeners = t4(tY(window, "pointermove", this.handlePointerMove), tY(window, "pointerup", this.handlePointerUp), tY(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), nb.update(this.updatePoint)
                }
            }

            function rE(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function rk(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function rA({
                point: t
            }, e) {
                var n;
                return {
                    point: t,
                    delta: rk(t, rT(e)),
                    offset: rk(t, (n = e, n[0])),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = t.length - 1,
                            r = null,
                            i = rT(t);
                        for (; n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > nT(.1)));) n--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let o = (i.timestamp - r.timestamp) / 1e3;
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (i.x - r.x) / o,
                            y: (i.y - r.y) / o
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, .1)
                }
            }

            function rT(t) {
                return t[t.length - 1]
            }

            function rP(t) {
                return t.max - t.min
            }

            function rO(t, e = 0, n = .01) {
                return rw(t, e) < n
            }

            function rj(t, e, n, r = .5) {
                t.origin = r, t.originPoint = eM(e.min, e.max, t.origin), t.scale = rP(n) / rP(e), (rO(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = eM(n.min, n.max, t.origin) - t.originPoint, (rO(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function rR(t, e, n, r) {
                rj(t.x, e.x, n.x, null == r ? void 0 : r.originX), rj(t.y, e.y, n.y, null == r ? void 0 : r.originY)
            }

            function rH(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + rP(e)
            }

            function rD(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + rP(e)
            }

            function rF(t, e, n) {
                rD(t.x, e.x, n.x), rD(t.y, e.y, n.y)
            }

            function rB(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function rU(t, e) {
                let n = e.min - t.min,
                    r = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), {
                    min: n,
                    max: r
                }
            }

            function rI(t, e, n) {
                return {
                    min: r_(t, e),
                    max: r_(t, n)
                }
            }

            function r_(t, e) {
                var n;
                return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
            }
            let rN = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                rZ = () => ({
                    x: rN(),
                    y: rN()
                }),
                r$ = () => ({
                    min: 0,
                    max: 0
                }),
                rW = () => ({
                    x: r$(),
                    y: r$()
                });

            function rY(t) {
                return [t("x"), t("y")]
            }

            function rK({
                top: t,
                left: e,
                right: n,
                bottom: r
            }) {
                return {
                    x: {
                        min: e,
                        max: n
                    },
                    y: {
                        min: t,
                        max: r
                    }
                }
            }

            function rq(t) {
                return void 0 === t || 1 === t
            }

            function rX({
                scale: t,
                scaleX: e,
                scaleY: n
            }) {
                return !rq(t) || !rq(e) || !rq(n)
            }

            function rG(t) {
                return rX(t) || rQ(t.x) || rQ(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function rQ(t) {
                return t && "0%" !== t
            }

            function rJ(t, e, n, r, i) {
                var o, a, s, l, c, u;
                return void 0 !== i && (o = t, a = i, t = (s = r) + a * (o - s)), r + n * ((l = t) - r) + e
            }

            function r0(t, e = 0, n = 1, r, i) {
                t.min = rJ(t.min, e, n, r, i), t.max = rJ(t.max, e, n, r, i)
            }

            function r1(t, {
                x: e,
                y: n
            }) {
                r0(t.x, e.translate, e.scale, e.originPoint), r0(t.y, n.translate, n.scale, n.originPoint)
            }

            function r2(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function r3(t, e, [n, r, i]) {
                let o = void 0 !== e[i] ? e[i] : .5,
                    a = eM(t.min, t.max, o);
                r0(t, e[n], e[r], a, e.scale)
            }
            let r4 = ["x", "scaleX", "originX"],
                r6 = ["y", "scaleY", "originY"];

            function r5(t, e) {
                r3(t.x, e, r4), r3(t.y, e, r6)
            }

            function r9(t, e) {
                return rK(function(t, e) {
                    if (!e) return t;
                    let n = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let r7 = new WeakMap;
            class r8 {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = rW(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    if (!1 === this.visualElement.isPresent) return;
                    let n = t => {
                            this.stopAnimation(), e && this.snapToCursor(tB(t, "page").point)
                        },
                        r = (t, e) => {
                            var n;
                            let {
                                drag: r,
                                dragPropagation: i,
                                onDragStart: o
                            } = this.getProps();
                            (!r || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tQ(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rY(t => {
                                var e, n;
                                let r = this.getAxisMotionValue(t).get() || 0;
                                if (X.test(r)) {
                                    let i = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.actual[t];
                                    if (i) {
                                        let o = rP(i);
                                        r = o * (parseFloat(r) / 100)
                                    }
                                }
                                this.originPoint[t] = r
                            }), null == o || o(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(a.Drag, !0))
                        },
                        i = (t, e) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: r,
                                onDirectionLock: i,
                                onDrag: o
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = e;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let n = null;
                                    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
                                }(a), null !== this.currentDirection && (null == i || i(this.currentDirection));
                                return
                            }
                            this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.syncRender(), null == o || o(t, e)
                        },
                        o = (t, e) => this.stop(t, e);
                    this.panSession = new rS(t, {
                        onSessionStart: n,
                        onStart: r,
                        onMove: i,
                        onSessionEnd: o
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(t, e) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: r
                    } = e;
                    this.startAnimation(r);
                    let {
                        onDragEnd: i
                    } = this.getProps();
                    null == i || i(t, e)
                }
                cancel() {
                    var t, e;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(a.Drag, !1)
                }
                updateAxis(t, e, n) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!n || !it(t, r, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + n[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: n
                    }, r) {
                        return void 0 !== e && t < e ? t = r ? eM(e, t, r.min) : Math.max(t, e) : void 0 !== n && t > n && (t = r ? eM(n, t, r.max) : Math.min(t, n)), t
                    }(o, this.constraints[t], this.elastic[t])), i.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, r = this.constraints;
                    t && m(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {
                        top: e,
                        left: n,
                        bottom: r,
                        right: i
                    }) {
                        return {
                            x: rB(t.x, n, i),
                            y: rB(t.y, e, r)
                        }
                    }(n.actual, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: rI(t, "left", "right"),
                            y: rI(t, "top", "bottom")
                        }
                    }(e), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && rY(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let n = {};
                            return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                        }(n.actual[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t, e;
                    let {
                        dragConstraints: n,
                        onMeasureDragConstraints: r
                    } = this.getProps();
                    if (!n || !m(n)) return !1;
                    let i = n.current;
                    eh(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: o
                    } = this.visualElement;
                    if (!o || !o.layout) return !1;
                    let a = function(t, e, n) {
                            let r = r9(t, n),
                                {
                                    scroll: i
                                } = e;
                            return i && (r2(r.x, i.x), r2(r.y, i.y)), r
                        }(i, o.root, this.visualElement.getTransformPagePoint()),
                        s = {
                            x: rU((t = o.layout.actual).x, a.x),
                            y: rU(t.y, a.y)
                        };
                    if (r) {
                        let l = r(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(s));
                        this.hasMutatedConstraints = !!l, l && (s = rK(l))
                    }
                    return s
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: n,
                        dragElastic: r,
                        dragTransition: i,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: a
                    } = this.getProps(), s = this.constraints || {}, l = rY(a => {
                        var l;
                        if (!it(a, e, this.currentDirection)) return;
                        let c = null !== (l = null == s ? void 0 : s[a]) && void 0 !== l ? l : {};
                        o && (c = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: n ? t[a] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...c
                        };
                        return this.startAxisValueAnimation(a, u)
                    });
                    return Promise.all(l).then(a)
                }
                startAxisValueAnimation(t, e) {
                    let n = this.getAxisMotionValue(t);
                    return n6(t, n, 0, e)
                }
                stopAnimation() {
                    rY(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    var e, n;
                    let r = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps()[r];
                    return i || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
                }
                snapToCursor(t) {
                    rY(e => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!it(e, n, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, i = this.getAxisMotionValue(e);
                        if (r && r.layout) {
                            let {
                                min: o,
                                max: a
                            } = r.layout.actual[e];
                            i.set(t[e] - eM(o, a, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    var t;
                    let {
                        drag: e,
                        dragConstraints: n
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!m(n) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let i = {
                        x: 0,
                        y: 0
                    };
                    rY(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let n = e.get();
                            i[t] = function(t, e) {
                                let n = .5,
                                    r = rP(t),
                                    i = rP(e);
                                return i > r ? n = eC(e.min, e.max - r, t.min) : r > i && (n = eC(t.min, t.max - i, e.min)), ed(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.getInstance().style.transform = o ? o({}, "") : "none", null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout(), this.resolveConstraints(), rY(t => {
                        if (!it(t, e, null)) return;
                        let n = this.getAxisMotionValue(t),
                            {
                                min: r,
                                max: o
                            } = this.constraints[t];
                        n.set(eM(r, o, i[t]))
                    })
                }
                addListeners() {
                    var t;
                    r7.set(this.visualElement, this);
                    let e = this.visualElement.getInstance(),
                        n = tY(e, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: n = !0
                            } = this.getProps();
                            e && n && this.start(t)
                        }),
                        r = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            m(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        o = i.addEventListener("measure", r);
                    i && !i.layout && (null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout()), r();
                    let a = tj(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (rY(e => {
                                let n = this.getAxisMotionValue(e);
                                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                            }), this.visualElement.syncRender())
                        });
                    return () => {
                        a(), n(), o(), null == s || s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: r = !1,
                            dragConstraints: i = !1,
                            dragElastic: o = .35,
                            dragMomentum: a = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: n,
                        dragPropagation: r,
                        dragConstraints: i,
                        dragElastic: o,
                        dragMomentum: a
                    }
                }
            }

            function it(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            let ie = {
                    pan: eo(function({
                        onPan: t,
                        onPanStart: e,
                        onPanEnd: n,
                        onPanSessionStart: r,
                        visualElement: i
                    }) {
                        let o = (0, l.useRef)(null),
                            {
                                transformPagePoint: a
                            } = (0, l.useContext)(c),
                            s = {
                                onSessionStart: r,
                                onStart: e,
                                onMove: t,
                                onEnd(t, e) {
                                    o.current = null, n && n(t, e)
                                }
                            };
                        (0, l.useEffect)(() => {
                            null !== o.current && o.current.updateHandlers(s)
                        }), tK(i, "pointerdown", (t || e || n || r) && function(t) {
                            o.current = new rS(t, s, {
                                transformPagePoint: a
                            })
                        }), t2(() => o.current && o.current.end())
                    }),
                    drag: eo(function(t) {
                        let {
                            dragControls: e,
                            visualElement: n
                        } = t, r = L(() => new r8(n));
                        (0, l.useEffect)(() => e && e.subscribe(r), [r, e]), (0, l.useEffect)(() => r.addListeners(), [r])
                    })
                },
                ir = {
                    current: null
                },
                ii = {
                    current: !1
                },
                io = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount", ],
                ia = Object.keys(x),
                is = ia.length,
                il = ({
                    treeType: t = "",
                    build: e,
                    getBaseTarget: n,
                    makeTargetAnimatable: r,
                    measureViewportBox: i,
                    render: o,
                    readValueFromInstance: a,
                    removeValueFromRenderState: s,
                    sortNodePosition: c,
                    scrapeMotionValuesFromProps: u
                }) => ({
                    parent: h,
                    props: f,
                    presenceId: p,
                    blockInitialAnimation: y,
                    visualState: g,
                    reducedMotionConfig: b
                }, z = {}) => {
                    let L = !1,
                        {
                            latestValues: V,
                            renderState: w
                        } = g,
                        S, E = function() {
                            let t = io.map(() => new rt),
                                e = {},
                                n = {
                                    clearAllListeners: () => t.forEach(t => t.clear()),
                                    updatePropListeners(t) {
                                        io.forEach(r => {
                                            var i;
                                            let o = "on" + r,
                                                a = t[o];
                                            null === (i = e[r]) || void 0 === i || i.call(e), a && (e[r] = n[o](a))
                                        })
                                    }
                                };
                            return t.forEach((t, e) => {
                                n["on" + io[e]] = e => t.add(e), n["notify" + io[e]] = (...e) => t.notify(...e)
                            }), n
                        }(),
                        k = new Map,
                        A = new Map,
                        T = {},
                        P = { ...V
                        },
                        O = f.initial ? { ...V
                        } : {},
                        j;

                    function R() {
                        S && L && (H(), o(S, w, f.style, K.projection))
                    }

                    function H() {
                        e(K, w, V, z, f)
                    }

                    function F() {
                        E.notifyUpdate(V)
                    }

                    function B(t, e) {
                        let n = e.onChange(e => {
                                V[t] = e, f.onUpdate && nM.update(F, !1, !0)
                            }),
                            r = e.onRenderRequest(K.scheduleRender);
                        A.set(t, () => {
                            n(), r()
                        })
                    }
                    let {
                        willChange: U,
                        ...I
                    } = u(f);
                    for (let _ in I) {
                        let N = I[_];
                        void 0 !== V[_] && D(N) && (N.set(V[_], !1), rd(U) && U.add(_))
                    }
                    if (f.values)
                        for (let Z in f.values) {
                            let $ = f.values[Z];
                            void 0 !== V[Z] && D($) && $.set(V[Z])
                        }
                    let W = C(f),
                        Y = M(f),
                        K = {
                            treeType: t,
                            current: null,
                            depth: h ? h.depth + 1 : 0,
                            parent: h,
                            children: new Set,
                            presenceId: p,
                            shouldReduceMotion: null,
                            variantChildren: Y ? new Set : void 0,
                            isVisible: void 0,
                            manuallyAnimateOnMount: Boolean(null == h ? void 0 : h.isMounted()),
                            blockInitialAnimation: y,
                            isMounted: () => Boolean(S),
                            mount(t) {
                                L = !0, S = K.current = t, K.projection && K.projection.mount(t), Y && h && !W && (j = null == h ? void 0 : h.addVariantChild(K)), k.forEach((t, e) => B(e, t)), ii.current || function() {
                                    if (ii.current = !0, d) {
                                        if (window.matchMedia) {
                                            let t = window.matchMedia("(prefers-reduced-motion)"),
                                                e = () => ir.current = t.matches;
                                            t.addListener(e), e()
                                        } else ir.current = !1
                                    }
                                }(), K.shouldReduceMotion = "never" !== b && ("always" === b || ir.current), null == h || h.children.add(K), K.setProps(f)
                            },
                            unmount() {
                                var t;
                                null === (t = K.projection) || void 0 === t || t.unmount(), nb.update(F), nb.render(R), A.forEach(t => t()), null == j || j(), null == h || h.children.delete(K), E.clearAllListeners(), S = void 0, L = !1
                            },
                            loadFeatures(t, e, n, r, i, o) {
                                let a = [];
                                "production" !== t5 && n && e && eh(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                                for (let s = 0; s < is; s++) {
                                    let c = ia[s],
                                        {
                                            isEnabled: u,
                                            Component: d
                                        } = x[c];
                                    u(t) && d && a.push((0, l.createElement)(d, {
                                        key: c,
                                        ...t,
                                        visualElement: K
                                    }))
                                }
                                if (!K.projection && i) {
                                    K.projection = new i(r, K.getLatestValues(), h && h.projection);
                                    let {
                                        layoutId: f,
                                        layout: p,
                                        drag: v,
                                        dragConstraints: y,
                                        layoutScroll: g
                                    } = t;
                                    K.projection.setOptions({
                                        layoutId: f,
                                        layout: p,
                                        alwaysMeasureLayout: Boolean(v) || y && m(y),
                                        visualElement: K,
                                        scheduleRender: () => K.scheduleRender(),
                                        animationType: "string" == typeof p ? p : "both",
                                        initialPromotionConfig: o,
                                        layoutScroll: g
                                    })
                                }
                                return a
                            },
                            addVariantChild(t) {
                                var e;
                                let n = K.getClosestVariantNode();
                                if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
                            },
                            sortNodePosition: e => c && t === e.treeType ? c(K.getInstance(), e.getInstance()) : 0,
                            getClosestVariantNode: () => Y ? K : null == h ? void 0 : h.getClosestVariantNode(),
                            getLayoutId: () => f.layoutId,
                            getInstance: () => S,
                            getStaticValue: t => V[t],
                            setStaticValue: (t, e) => V[t] = e,
                            getLatestValues: () => V,
                            setVisibility(t) {
                                K.isVisible !== t && (K.isVisible = t, K.scheduleRender())
                            },
                            makeTargetAnimatable: (t, e = !0) => r(K, t, f, e),
                            measureViewportBox: () => i(S, f),
                            addValue(t, e) {
                                K.hasValue(t) && K.removeValue(t), k.set(t, e), V[t] = e.get(), B(t, e)
                            },
                            removeValue(t) {
                                var e;
                                k.delete(t), null === (e = A.get(t)) || void 0 === e || e(), A.delete(t), delete V[t], s(t, w)
                            },
                            hasValue: t => k.has(t),
                            getValue(t, e) {
                                if (f.values && f.values[t]) return f.values[t];
                                let n = k.get(t);
                                return void 0 === n && void 0 !== e && (n = rr(e), K.addValue(t, n)), n
                            },
                            forEachValue: t => k.forEach(t),
                            readValue: t => void 0 !== V[t] ? V[t] : a(S, t, z),
                            setBaseTarget(t, e) {
                                P[t] = e
                            },
                            getBaseTarget(t) {
                                var e;
                                let {
                                    initial: r
                                } = f, i = "string" == typeof r || "object" == typeof r ? null === (e = tw(f, r)) || void 0 === e ? void 0 : e[t] : void 0;
                                if (r && void 0 !== i) return i;
                                if (n) {
                                    let o = n(f, t);
                                    if (void 0 !== o && !D(o)) return o
                                }
                                return void 0 !== O[t] && void 0 === i ? void 0 : P[t]
                            },
                            ...E,
                            build: () => (H(), w),
                            scheduleRender() {
                                nM.render(R, !1, !0)
                            },
                            syncRender: R,
                            setProps(t) {
                                (t.transformTemplate || f.transformTemplate) && K.scheduleRender(), f = t, E.updatePropListeners(t), T = function(t, e, n) {
                                    let {
                                        willChange: r
                                    } = e;
                                    for (let i in e) {
                                        let o = e[i],
                                            a = n[i];
                                        if (D(o)) t.addValue(i, o), rd(r) && r.add(i);
                                        else if (D(a)) t.addValue(i, rr(o)), rd(r) && r.remove(i);
                                        else if (a !== o) {
                                            if (t.hasValue(i)) {
                                                let s = t.getValue(i);
                                                s.hasAnimated || s.set(o)
                                            } else {
                                                let l = t.getStaticValue(i);
                                                t.addValue(i, rr(void 0 !== l ? l : o))
                                            }
                                        }
                                    }
                                    for (let c in n) void 0 === e[c] && t.removeValue(c);
                                    return e
                                }(K, u(f), T)
                            },
                            getProps: () => f,
                            getVariant(t) {
                                var e;
                                return null === (e = f.variants) || void 0 === e ? void 0 : e[t]
                            },
                            getDefaultTransition: () => f.transition,
                            getTransformPagePoint: () => f.transformPagePoint,
                            getVariantContext(t = !1) {
                                if (t) return null == h ? void 0 : h.getVariantContext();
                                if (!W) {
                                    let e = (null == h ? void 0 : h.getVariantContext()) || {};
                                    return void 0 !== f.initial && (e.initial = f.initial), e
                                }
                                let n = {};
                                for (let r = 0; r < iu; r++) {
                                    let i = ic[r],
                                        o = f[i];
                                    (v(o) || !1 === o) && (n[i] = o)
                                }
                                return n
                            }
                        };
                    return K
                },
                ic = ["initial", ...ry],
                iu = ic.length;

            function ih(t) {
                return "string" == typeof t && t.startsWith("var(--")
            }
            let id = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function ip(t, e, n = 1) {
                eh(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [r, i] = function(t) {
                    let e = id.exec(t);
                    if (!e) return [, ];
                    let [, n, r] = e;
                    return [n, r]
                }(t);
                if (!r) return;
                let o = window.getComputedStyle(e).getPropertyValue(r);
                return o ? o.trim() : ih(i) ? ip(i, e, n + 1) : i
            }
            let im = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", ]),
                iv = t => im.has(t),
                iy = t => Object.keys(t).some(iv),
                ig = (t, e) => {
                    t.set(e, !1), t.set(e)
                },
                iC = t => t === te || t === G;
            (o = s || (s = {})).width = "width", o.height = "height", o.left = "left", o.right = "right", o.top = "top", o.bottom = "bottom";
            let iM = (t, e) => parseFloat(t.split(", ")[e]),
                ib = (t, e) => (n, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let i = r.match(/^matrix3d\((.+)\)$/);
                    if (i) return iM(i[1], e); {
                        let o = r.match(/^matrix\((.+)\)$/);
                        return o ? iM(o[1], t) : 0
                    }
                },
                iz = new Set(["x", "y", "z"]),
                ix = j.filter(t => !iz.has(t)),
                iL = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: ib(4, 13),
                    y: ib(5, 14)
                },
                iV = (t, e, n) => {
                    let r = e.measureViewportBox(),
                        i = e.getInstance(),
                        o = getComputedStyle(i),
                        {
                            display: a
                        } = o,
                        s = {};
                    "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach(t => {
                        s[t] = iL[t](r, o)
                    }), e.syncRender();
                    let l = e.measureViewportBox();
                    return n.forEach(n => {
                        let r = e.getValue(n);
                        ig(r, s[n]), t[n] = iL[n](l, o)
                    }), t
                },
                iw = (t, e, n = {}, r = {}) => {
                    e = { ...e
                    }, r = { ...r
                    };
                    let i = Object.keys(e).filter(iv),
                        o = [],
                        a = !1,
                        s = [];
                    if (i.forEach(i => {
                            let l = t.getValue(i);
                            if (!t.hasValue(i)) return;
                            let c = n[i],
                                u = ra(c),
                                h = e[i],
                                d;
                            if (tS(h)) {
                                let f = h.length,
                                    p = null === h[0] ? 1 : 0;
                                u = ra(c = h[p]);
                                for (let m = p; m < f; m++) d ? eh(ra(h[m]) === d, "All keyframes must be of the same type") : (d = ra(h[m]), eh(d === u || iC(u) && iC(d), "Keyframes must be of the same dimension as the current value"))
                            } else d = ra(h);
                            if (u !== d) {
                                if (iC(u) && iC(d)) {
                                    let v = l.get();
                                    "string" == typeof v && l.set(parseFloat(v)), "string" == typeof h ? e[i] = parseFloat(h) : Array.isArray(h) && d === G && (e[i] = h.map(parseFloat))
                                } else(null == u ? void 0 : u.transform) && (null == d ? void 0 : d.transform) && (0 === c || 0 === h) ? 0 === c ? l.set(d.transform(c)) : e[i] = u.transform(h) : (a || (o = function(t) {
                                    let e = [];
                                    return ix.forEach(n => {
                                        let r = t.getValue(n);
                                        void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.syncRender(), e
                                }(t), a = !0), s.push(i), r[i] = void 0 !== r[i] ? r[i] : e[i], ig(l, h))
                            }
                        }), !s.length) return {
                        target: e,
                        transitionEnd: r
                    }; {
                        let l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                            c = iV(e, t, s);
                        return o.length && o.forEach(([e, n]) => {
                            t.getValue(e).set(n)
                        }), t.syncRender(), d && null !== l && window.scrollTo({
                            top: l
                        }), {
                            target: c,
                            transitionEnd: r
                        }
                    }
                },
                iS = (t, e, n, r) => {
                    var i, o, a, s;
                    let l = function(t, { ...e
                    }, n) {
                        let r = t.getInstance();
                        if (!(r instanceof Element)) return {
                            target: e,
                            transitionEnd: n
                        };
                        for (let i in n && (n = { ...n
                            }), t.forEachValue(t => {
                                let e = t.get();
                                if (!ih(e)) return;
                                let n = ip(e, r);
                                n && t.set(n)
                            }), e) {
                            let o = e[i];
                            if (!ih(o)) continue;
                            let a = ip(o, r);
                            a && (e[i] = a, n && void 0 === n[i] && (n[i] = o))
                        }
                        return {
                            target: e,
                            transitionEnd: n
                        }
                    }(t, e, r);
                    return e = l.target, r = l.transitionEnd, o = e, s = r, iy(o) ? iw(t, o, n, s) : {
                        target: o,
                        transitionEnd: s
                    }
                },
                iE = {
                    treeType: "dom",
                    readValueFromInstance(t, e) {
                        if (R.has(e)) {
                            let n = nQ(e);
                            return n && n.default || 0
                        } {
                            var r;
                            let i = window.getComputedStyle(t),
                                o = (U(e) ? i.getPropertyValue(e) : i[e]) || 0;
                            return "string" == typeof o ? o.trim() : o
                        }
                    },
                    sortNodePosition: (t, e) => 2 & t.compareDocumentPosition(e) ? 1 : -1,
                    getBaseTarget(t, e) {
                        var n;
                        return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                    },
                    measureViewportBox: (t, {
                        transformPagePoint: e
                    }) => r9(t, e),
                    resetTransform(t, e, n) {
                        let {
                            transformTemplate: r
                        } = n;
                        e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState(t, {
                        vars: e,
                        style: n
                    }) {
                        delete e[t], delete n[t]
                    },
                    makeTargetAnimatable(t, {
                        transition: e,
                        transitionEnd: n,
                        ...r
                    }, {
                        transformValues: i
                    }, o = !0) {
                        let a = function(t, e, n) {
                            var r;
                            let i = {};
                            for (let o in t) {
                                let a = rh(o, e);
                                i[o] = void 0 !== a ? a : null === (r = n.getValue(o)) || void 0 === r ? void 0 : r.get()
                            }
                            return i
                        }(r, e || {}, t);
                        if (i && (n && (n = i(n)), r && (r = i(r)), a && (a = i(a))), o) {
                            ! function(t, e, n) {
                                var r, i;
                                let o = Object.keys(e).filter(e => !t.hasValue(e)),
                                    a = o.length;
                                if (a)
                                    for (let s = 0; s < a; s++) {
                                        let l = o[s],
                                            c = e[l],
                                            u = null;
                                        Array.isArray(c) && (u = c[0]), null === u && (u = null !== (i = null !== (r = n[l]) && void 0 !== r ? r : t.readValue(l)) && void 0 !== i ? i : e[l]), null != u && ("string" == typeof u && (n5(u) || n9(u)) ? u = parseFloat(u) : !rl(u) && e_.test(c) && (u = nJ(l, c)), t.addValue(l, rr(u)), void 0 === n[l] && (n[l] = u), t.setBaseTarget(l, u))
                                    }
                            }(t, r, a);
                            let s = iS(t, r, a, n);
                            n = s.transitionEnd, r = s.target
                        }
                        return {
                            transition: e,
                            transitionEnd: n,
                            ...r
                        }
                    },
                    scrapeMotionValuesFromProps: tL,
                    build(t, e, n, r, i) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), ta(e, n, r, i.transformTemplate)
                    },
                    render: tb
                },
                ik = il(iE),
                iA = il({ ...iE,
                    getBaseTarget: (t, e) => t[e],
                    readValueFromInstance(t, e) {
                        var n;
                        return R.has(e) ? (null === (n = nQ(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = tz.has(e) ? e : tM(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: tV,
                    build(t, e, n, r, i) {
                        ty(e, n, r, i.transformTemplate)
                    },
                    render: tx
                }),
                iT = (t, e) => P(t) ? iA(e, {
                    enableHardwareAcceleration: !1
                }) : ik(e, {
                    enableHardwareAcceleration: !0
                });

            function iP(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let iO = {
                    correct(t, e) {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!G.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let n = iP(t, e.target.x),
                            r = iP(t, e.target.y);
                        return `${n}% ${r}%`
                    }
                },
                ij = "_$css";
            class iR extends l.Component {
                componentDidMount() {
                    var t;
                    let {
                        visualElement: e,
                        layoutGroup: n,
                        switchLayoutGroup: r,
                        layoutId: i
                    } = this.props, {
                        projection: o
                    } = e;
                    Object.assign(O, iH), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), o.setOptions({ ...o.options,
                        onExitComplete: () => this.safeToRemove()
                    })), V.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: n,
                        drag: r,
                        isPresent: i
                    } = this.props, o = n.projection;
                    return o && (o.isPresent = i, r || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === i || (i ? o.promote() : o.relegate() || nM.postRender(() => {
                        var t;
                        (null === (t = o.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: r
                    } = t;
                    r && (r.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(r), (null == n ? void 0 : n.deregister) && n.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    null == t || t()
                }
                render() {
                    return null
                }
            }
            let iH = {
                    borderRadius: { ...iO,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius", ]
                    },
                    borderTopLeftRadius: iO,
                    borderTopRightRadius: iO,
                    borderBottomLeftRadius: iO,
                    borderBottomRightRadius: iO,
                    boxShadow: {
                        correct(t, {
                            treeScale: e,
                            projectionDelta: n
                        }) {
                            let r = t,
                                i = t.includes("var("),
                                o = [];
                            i && (t = t.replace(id, t => (o.push(t), ij)));
                            let a = e_.parse(t);
                            if (a.length > 5) return r;
                            let s = e_.createTransformer(t),
                                l = "number" != typeof a[0] ? 1 : 0,
                                c = n.x.scale * e.x,
                                u = n.y.scale * e.y;
                            a[0 + l] /= c, a[1 + l] /= u;
                            let h = eM(c, u, .5);
                            "number" == typeof a[2 + l] && (a[2 + l] /= h), "number" == typeof a[3 + l] && (a[3 + l] /= h);
                            let d = s(a);
                            if (i) {
                                let f = 0;
                                d = d.replace(ij, () => {
                                    let t = o[f];
                                    return f++, t
                                })
                            }
                            return d
                        }
                    }
                },
                iD = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                iF = iD.length,
                iB = t => "string" == typeof t ? parseFloat(t) : t,
                iU = t => "number" == typeof t || G.test(t);

            function iI(t, e) {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
            }
            let i_ = iZ(0, .5, e9),
                iN = iZ(.5, .95, e2);

            function iZ(t, e, n) {
                return r => r < t ? 0 : r > e ? 1 : n(eC(t, e, r))
            }

            function i$(t, e) {
                t.min = e.min, t.max = e.max
            }

            function iW(t, e) {
                i$(t.x, e.x), i$(t.y, e.y)
            }

            function iY(t, e, n, r, i) {
                var o, a, s, l, c, u;
                return t -= e, o = t, t = r + (a = 1 / n) * (o - r), void 0 !== i && (l = t, c = 1 / i, t = (u = r) + c * (l - u)), t
            }

            function iK(t, e, [n, r, i], o, a) {
                ! function(t, e = 0, n = 1, r = .5, i, o = t, a = t) {
                    if (X.test(e)) {
                        e = parseFloat(e);
                        let s = eM(a.min, a.max, e / 100);
                        e = s - a.min
                    }
                    if ("number" != typeof e) return;
                    let l = eM(o.min, o.max, r);
                    t === o && (l -= e), t.min = iY(t.min, e, n, l, i), t.max = iY(t.max, e, n, l, i)
                }(t, e[n], e[r], e[i], e.scale, o, a)
            }
            let iq = ["x", "scaleX", "originX"],
                iX = ["y", "scaleY", "originY"];

            function iG(t, e, n, r) {
                iK(t.x, e, iq, null == n ? void 0 : n.x, null == r ? void 0 : r.x), iK(t.y, e, iX, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
            }

            function iQ(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function iJ(t) {
                return iQ(t.x) && iQ(t.y)
            }

            function i0(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }

            function i1(t) {
                return rP(t.x) / rP(t.y)
            }
            class i2 {
                constructor() {
                    this.members = []
                }
                add(t) {
                    n7(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (n8(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(t) {
                    let e = this.members.findIndex(e => t === e);
                    if (0 === e) return !1;
                    let n;
                    for (let r = e; r >= 0; r--) {
                        let i = this.members[r];
                        if (!1 !== i.isPresent) {
                            n = i;
                            break
                        }
                    }
                    return !!n && (this.promote(n), !0)
                }
                promote(t, e) {
                    var n;
                    let r = this.lead;
                    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
                        let {
                            crossfade: i
                        } = t.options;
                        !1 === i && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        var e, n, r, i, o;
                        null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (o = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function i3(t, e, n) {
                let r = t.x.translate / e.x,
                    i = t.y.translate / e.y,
                    o = `translate3d(${r}px, ${i}px, 0) `;
                if (o += `scale(${1/e.x}, ${1/e.y}) `, n) {
                    let {
                        rotate: a,
                        rotateX: s,
                        rotateY: l
                    } = n;
                    a && (o += `rotate(${a}deg) `), s && (o += `rotateX(${s}deg) `), l && (o += `rotateY(${l}deg) `)
                }
                let c = t.x.scale * e.x,
                    u = t.y.scale * e.y;
                return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" == (o += `scale(${c}, ${u})`) ? "none" : o
            }
            let i4 = (t, e) => t.depth - e.depth;
            class i6 {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    n7(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    n8(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(i4), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let i5 = ["", "X", "Y", "Z"];

            function i9({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: n,
                checkIsScrollRoot: r,
                resetTransform: i
            }) {
                return class {
                    constructor(t, n = {}, r = null == e ? void 0 : e()) {
                        this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(oi), this.nodes.forEach(oo)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new i6)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new rt), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let n = this.eventHandlers.get(t);
                        null == n || n.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    registerPotentialNode(t, e) {
                        this.potentialNodes.set(t, e)
                    }
                    mount(e, n = !1) {
                        var r;
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: i,
                            layout: o,
                            visualElement: a
                        } = this.options;
                        if (a && !a.getInstance() && a.mount(e), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (o || i) && (this.isLayoutDirty = !0), t) {
                            let s, l = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, clearTimeout(s), s = window.setTimeout(l, 250), V.hasAnimatedSinceResize && (V.hasAnimatedSinceResize = !1, this.nodes.forEach(or))
                            })
                        }
                        i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && a && (i || o) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: n,
                            layout: r
                        }) => {
                            var i, o, s, l, c;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let u = null !== (o = null !== (i = this.options.transition) && void 0 !== i ? i : a.getDefaultTransition()) && void 0 !== o ? o : oh,
                                {
                                    onLayoutAnimationStart: h,
                                    onLayoutAnimationComplete: d
                                } = a.getProps(),
                                f = !this.targetLayout || !i0(this.targetLayout, r) || n,
                                p = !e && n;
                            if ((null === (s = this.resumeFrom) || void 0 === s ? void 0 : s.instance) || p || e && (f || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, p);
                                let m = { ...n4(u, "layout"),
                                    onPlay: h,
                                    onComplete: d
                                };
                                a.shouldReduceMotion && (m.delay = 0, m.type = !1), this.startAnimation(m)
                            } else e || 0 !== this.animationProgress || this.finishAnimation(), this.isLead() && (null === (c = (l = this.options).onExitComplete) || void 0 === c || c.call(l));
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, nb.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(oa))
                    }
                    willUpdate(t = !0) {
                        var e, n, r;
                        if (this.root.isUpdateBlocked()) {
                            null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let i = 0; i < this.path.length; i++) {
                            let o = this.path[i];
                            o.shouldResetTransform = !0, o.updateScroll()
                        }
                        let {
                            layoutId: a,
                            layout: s
                        } = this.options;
                        if (void 0 === a && !s) return;
                        let l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                        this.prevTransformTemplateValue = null == l ? void 0 : l(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(oe);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(od), this.potentialNodes.clear()), this.nodes.forEach(on), this.nodes.forEach(i7), this.nodes.forEach(i8), this.clearAllSnapshots(), nz.update(), nz.preRender(), nz.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(ot), this.sharedNodes.forEach(os)
                    }
                    scheduleUpdateProjection() {
                        nM.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        nM.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        if (this.snapshot || !this.instance) return;
                        let t = this.measure(),
                            e = this.removeTransform(this.removeElementScroll(t));
                        op(e), this.snapshot = {
                            measured: t,
                            layout: e,
                            latestValues: {}
                        }
                    }
                    updateLayout() {
                        var t;
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let n = this.path[e];
                                n.updateScroll()
                            }
                        let r = this.measure();
                        op(r);
                        let i = this.layout;
                        this.layout = {
                            measured: r,
                            actual: this.removeElementScroll(r)
                        }, this.layoutCorrected = rW(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == i ? void 0 : i.actual)
                    }
                    updateScroll() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = r(this.instance), this.scroll = n(this.instance))
                    }
                    resetTransform() {
                        var t;
                        if (!i) return;
                        let e = this.isLayoutDirty || this.shouldResetTransform,
                            n = this.projectionDelta && !iJ(this.projectionDelta),
                            r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                            o = null == r ? void 0 : r(this.latestValues, ""),
                            a = o !== this.prevTransformTemplateValue;
                        e && (n || rG(this.latestValues) || a) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return rW();
                        let e = t.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && (r2(e.x, n.x), r2(e.y, n.y)), e
                    }
                    removeElementScroll(t) {
                        let e = rW();
                        iW(e, t);
                        for (let n = 0; n < this.path.length; n++) {
                            let r = this.path[n],
                                {
                                    scroll: i,
                                    options: o,
                                    isScrollRoot: a
                                } = r;
                            if (r !== this.root && i && o.layoutScroll) {
                                if (a) {
                                    iW(e, t);
                                    let {
                                        scroll: s
                                    } = this.root;
                                    s && (r2(e.x, -s.x), r2(e.y, -s.y))
                                }
                                r2(e.x, i.x), r2(e.y, i.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let n = rW();
                        iW(n, t);
                        for (let r = 0; r < this.path.length; r++) {
                            let i = this.path[r];
                            !e && i.options.layoutScroll && i.scroll && i !== i.root && r5(n, {
                                x: -i.scroll.x,
                                y: -i.scroll.y
                            }), rG(i.latestValues) && r5(n, i.latestValues)
                        }
                        return rG(this.latestValues) && r5(n, this.latestValues), n
                    }
                    removeTransform(t) {
                        var e;
                        let n = rW();
                        iW(n, t);
                        for (let r = 0; r < this.path.length; r++) {
                            let i = this.path[r];
                            if (!i.instance || !rG(i.latestValues)) continue;
                            rX(i.latestValues) && i.updateSnapshot();
                            let o = rW(),
                                a = i.measure();
                            iW(o, a), iG(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layout, o)
                        }
                        return rG(this.latestValues) && iG(n, this.latestValues), n
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var t, e, n, r;
                        let {
                            layout: i,
                            layoutId: o
                        } = this.options;
                        this.layout && (i || o) && (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = rW(), this.relativeTargetOrigin = rW(), rF(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), iW(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = rW(), this.targetWithTransforms = rW()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target)) ? (e = this.target, n = this.relativeTarget, r = this.relativeParent.target, rH(e.x, n.x, r.x), rH(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : iW(this.target, this.layout.actual), r1(this.target, this.targetDelta)) : iW(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = rW(), this.relativeTargetOrigin = rW(), rF(this.relativeTargetOrigin, this.target, this.relativeParent.target), iW(this.relativeTarget, this.relativeTargetOrigin)))))
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || rG(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var t;
                        let {
                            layout: e,
                            layoutId: n
                        } = this.options;
                        if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(e || n)) return;
                        let r = this.getLead();
                        iW(this.layoutCorrected, this.layout.actual),
                            function(t, e, n, r = !1) {
                                var i, o;
                                let a = n.length;
                                if (!a) return;
                                e.x = e.y = 1;
                                let s, l;
                                for (let c = 0; c < a; c++) l = (s = n[c]).projectionDelta, (null === (o = null === (i = s.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) !== "contents" && (r && s.options.layoutScroll && s.scroll && s !== s.root && r5(t, {
                                    x: -s.scroll.x,
                                    y: -s.scroll.y
                                }), l && (e.x *= l.x.scale, e.y *= l.y.scale, r1(t, l)), r && rG(s.latestValues) && r5(t, s.latestValues))
                            }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== r);
                        let {
                            target: i
                        } = r;
                        if (!i) return;
                        this.projectionDelta || (this.projectionDelta = rZ(), this.projectionDeltaWithTransform = rZ());
                        let o = this.treeScale.x,
                            a = this.treeScale.y,
                            s = this.projectionTransform;
                        rR(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = i3(this.projectionDelta, this.treeScale), (this.projectionTransform !== s || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e, n, r;
                        null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        var n;
                        let r = this.snapshot,
                            i = (null == r ? void 0 : r.latestValues) || {},
                            o = { ...this.latestValues
                            },
                            a = rZ();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        let s = rW(),
                            l = null == r ? void 0 : r.isShared,
                            c = 1 >= ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0),
                            u = Boolean(l && !c && !0 === this.options.crossfade && !this.path.some(ou));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            var n, r, h, d, f;
                            let p = e / 1e3;
                            ol(a.x, t.x, p), ol(a.y, t.y, p), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (rF(s, this.layout.actual, this.relativeParent.layout.actual), r = this.relativeTarget, h = this.relativeTargetOrigin, d = s, f = p, oc(r.x, h.x, d.x, f), oc(r.y, h.y, d.y, f)), l && (this.animationValues = o, function(t, e, n, r, i, o) {
                                var a, s, l, c;
                                i ? (t.opacity = eM(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, i_(r)), t.opacityExit = eM(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, iN(r))) : o && (t.opacity = eM(null !== (l = e.opacity) && void 0 !== l ? l : 1, null !== (c = n.opacity) && void 0 !== c ? c : 1, r));
                                for (let u = 0; u < iF; u++) {
                                    let h = `border${iD[u]}Radius`,
                                        d = iI(e, h),
                                        f = iI(n, h);
                                    if (void 0 === d && void 0 === f) continue;
                                    d || (d = 0), f || (f = 0);
                                    let p = 0 === d || 0 === f || iU(d) === iU(f);
                                    p ? (t[h] = Math.max(eM(iB(d), iB(f), r), 0), (X.test(f) || X.test(d)) && (t[h] += "%")) : t[h] = f
                                }(e.rotate || n.rotate) && (t.rotate = eM(e.rotate || 0, n.rotate || 0, r))
                            }(o, i, this.latestValues, p, u, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = p
                        }, this.mixTargetDelta(0)
                    }
                    startAnimation(t) {
                        var e, n;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (nb.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = nM.update(() => {
                            V.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, n = {}) {
                                let r = D(t) ? t : rr(t);
                                return n6("", r, 1e3, n), {
                                    stop: () => r.stop(),
                                    isAnimating: () => r.isAnimating()
                                }
                            }(0, 1e3, { ...t,
                                onUpdate: e => {
                                    var n;
                                    this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: () => {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: n,
                                layout: r,
                                latestValues: i
                            } = t;
                        if (e && n && r) {
                            if (this !== t && this.layout && r && om(this.options.animationType, this.layout.actual, r.actual)) {
                                n = this.target || rW();
                                let o = rP(this.layout.actual.x);
                                n.x.min = t.target.x.min, n.x.max = n.x.min + o;
                                let a = rP(this.layout.actual.y);
                                n.y.min = t.target.y.min, n.y.max = n.y.min + a
                            }
                            iW(e, n), r5(e, i), rR(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                        }
                    }
                    registerSharedNode(t, e) {
                        var n, r, i;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new i2);
                        let o = this.sharedNodes.get(t);
                        o.add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (i = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, e)
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: n
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            n = {};
                        for (let r = 0; r < i5.length; r++) {
                            let i = i5[r],
                                o = "rotate" + i;
                            t.getStaticValue(o) && (e = !0, n[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
                        }
                        if (e) {
                            for (let a in null == t || t.syncRender(), n) t.setStaticValue(a, n[a]);
                            t.scheduleRender()
                        }
                    }
                    getProjectionStyles(t = {}) {
                        var e, n, r;
                        let i = {};
                        if (!this.instance || this.isSVG) return i;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        i.visibility = "";
                        let o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = tA(t.pointerEvents) || "", i.transform = o ? o(this.latestValues, "") : "none", i;
                        let a = this.getLead();
                        if (!this.projectionDelta || !this.layout || !a.target) {
                            let s = {};
                            return this.options.layoutId && (s.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, s.pointerEvents = tA(t.pointerEvents) || ""), this.hasProjected && !rG(this.latestValues) && (s.transform = o ? o({}, "") : "none", this.hasProjected = !1), s
                        }
                        let l = a.animationValues || a.latestValues;
                        this.applyTransformsToTarget(), i.transform = i3(this.projectionDeltaWithTransform, this.treeScale, l), o && (i.transform = o(l, i.transform));
                        let {
                            x: c,
                            y: u
                        } = this.projectionDelta;
                        for (let h in i.transformOrigin = `${100*c.origin}% ${100*u.origin}% 0`, a.animationValues ? i.opacity = a === this ? null !== (r = null !== (n = l.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : i.opacity = a === this ? void 0 !== l.opacity ? l.opacity : "" : void 0 !== l.opacityExit ? l.opacityExit : 0, O) {
                            if (void 0 === l[h]) continue;
                            let {
                                correct: d,
                                applyTo: f
                            } = O[h], p = d(l[h], a);
                            if (f) {
                                let m = f.length;
                                for (let v = 0; v < m; v++) i[f[v]] = p
                            } else i[h] = p
                        }
                        return this.options.layoutId && (i.pointerEvents = a === this ? tA(t.pointerEvents) || "" : "none"), i
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(oe), this.root.sharedNodes.clear()
                    }
                }
            }

            function i7(t) {
                t.updateLayout()
            }

            function i8(t) {
                var e, n, r;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        actual: o,
                        measured: a
                    } = t.layout, {
                        animationType: s
                    } = t.options;
                    "size" === s ? rY(t => {
                        let e = i.isShared ? i.measured[t] : i.layout[t],
                            n = rP(e);
                        e.min = o[t].min, e.max = e.min + n
                    }) : om(s, i.layout, o) && rY(t => {
                        let e = i.isShared ? i.measured[t] : i.layout[t],
                            n = rP(o[t]);
                        e.max = e.min + n
                    });
                    let l = rZ();
                    rR(l, o, i.layout);
                    let c = rZ();
                    i.isShared ? rR(c, t.applyTransform(a, !0), i.measured) : rR(c, o, i.layout);
                    let u = !iJ(l),
                        h = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        let {
                            snapshot: d,
                            layout: f
                        } = t.relativeParent;
                        if (d && f) {
                            let p = rW();
                            rF(p, i.layout, d.layout);
                            let m = rW();
                            rF(m, o, f.actual), i0(p, m) || (h = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: o,
                        snapshot: i,
                        delta: c,
                        layoutDelta: l,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: h
                    })
                } else t.isLead() && (null === (r = (n = t.options).onExitComplete) || void 0 === r || r.call(n));
                t.options.transition = void 0
            }

            function ot(t) {
                t.clearSnapshot()
            }

            function oe(t) {
                t.clearMeasurements()
            }

            function on(t) {
                let {
                    visualElement: e
                } = t.options;
                (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function or(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function oi(t) {
                t.resolveTargetDelta()
            }

            function oo(t) {
                t.calcProjection()
            }

            function oa(t) {
                t.resetRotation()
            }

            function os(t) {
                t.removeLeadSnapshot()
            }

            function ol(t, e, n) {
                t.translate = eM(e.translate, 0, n), t.scale = eM(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function oc(t, e, n, r) {
                t.min = eM(e.min, n.min, r), t.max = eM(e.max, n.max, r)
            }

            function ou(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let oh = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function od(t, e) {
                let n = t.root;
                for (let r = t.path.length - 1; r >= 0; r--)
                    if (Boolean(t.path[r].instance)) {
                        n = t.path[r];
                        break
                    }
                let i = n && n !== t.root ? n.instance : document,
                    o = i.querySelector(`[data-projection-id="${e}"]`);
                o && t.mount(o, !0)
            }

            function of (t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function op(t) { of (t.x), of (t.y)
            }

            function om(t, e, n) {
                return "position" === t || "preserve-aspect" === t && ! function(t, e, n = .1) {
                    return rw(t, e) <= n
                }(i1(e), i1(n), .2)
            }
            let ov = i9({
                    attachResizeListener: (t, e) => tj(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                oy = {
                    current: void 0
                },
                og = i9({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent() {
                        if (!oy.current) {
                            let t = new ov(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), oy.current = t
                        }
                        return oy.current
                    },
                    resetTransform(t, e) {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
                }),
                oC = { ...rz,
                    ...ea,
                    ...ie,
                    measureLayout: function(t) {
                        let [e, n] = es(), r = (0, l.useContext)(S);
                        return l.createElement(iR, { ...t,
                            layoutGroup: r,
                            switchLayoutGroup: (0, l.useContext)(k),
                            isPresent: e,
                            safeToRemove: n
                        })
                    }
                },
                oM = function(t) {
                    function e(e, n = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            projectionNodeConstructor: n,
                            useRender: r,
                            useVisualState: i,
                            Component: o
                        }) {
                            t && function(t) {
                                for (let e in t) "projectionNodeConstructor" === e ? x.projectionNodeConstructor = t[e] : x[e].Component = t[e]
                            }(t);
                            let a = (0, l.forwardRef)(function(a, s) {
                                var y, g, M;
                                let z = { ...(0, l.useContext)(c),
                                        ...a,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, l.useContext)(S).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(a)
                                    },
                                    {
                                        isStatic: A
                                    } = z,
                                    T = null,
                                    P = function(t) {
                                        let {
                                            initial: e,
                                            animate: n
                                        } = function(t, e) {
                                            if (C(t)) {
                                                let {
                                                    initial: n,
                                                    animate: r
                                                } = t;
                                                return {
                                                    initial: !1 === n || v(n) ? n : void 0,
                                                    animate: v(r) ? r : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, l.useContext)(u));
                                        return (0, l.useMemo)(() => ({
                                            initial: e,
                                            animate: n
                                        }), [b(e), b(n)])
                                    }(a),
                                    O = A ? void 0 : L(() => {
                                        if (V.hasEverUpdated) return w++
                                    }),
                                    j = i(a, A);
                                if (!A && d) {
                                    P.visualElement = function(t, e, n, r) {
                                        let i = (0, l.useContext)(u).visualElement,
                                            o = (0, l.useContext)(p),
                                            a = (0, l.useContext)(h),
                                            s = (0, l.useContext)(c).reducedMotion,
                                            d = (0, l.useRef)(void 0);
                                        r = r || o.renderer, !d.current && r && (d.current = r(t, {
                                            visualState: e,
                                            parent: i,
                                            props: n,
                                            presenceId: a ? a.id : void 0,
                                            blockInitialAnimation: !!a && !1 === a.initial,
                                            reducedMotionConfig: s
                                        }));
                                        let m = d.current;
                                        return f(() => {
                                            m && m.syncRender()
                                        }), (0, l.useEffect)(() => {
                                            m && m.animationState && m.animationState.animateChanges()
                                        }), f(() => () => m && m.notifyUnmount(), []), m
                                    }(o, j, z, e);
                                    let R = (0, l.useContext)(p).strict,
                                        H = (0, l.useContext)(k);
                                    P.visualElement && (T = P.visualElement.loadFeatures(z, R, t, O, n || x.projectionNodeConstructor, H))
                                }
                                return l.createElement(E, {
                                    visualElement: P.visualElement,
                                    props: z
                                }, T, l.createElement(u.Provider, {
                                    value: P
                                }, r(o, a, O, (g = P.visualElement, M = s, (0, l.useCallback)(t => {
                                    t && j.mount && j.mount(t), g && (t ? g.mount(t) : g.unmount()), M && ("function" == typeof M ? M(t) : m(M) && (M.current = t))
                                }, [g])), j, A, P.visualElement)))
                            });
                            return a[A] = o, a
                        }(t(e, n))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let n = new Map;
                    return new Proxy(e, {
                        get: (t, r) => (n.has(r) || n.set(r, e(r)), n.get(r))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, n, r, i) {
                    let o = P(t) ? tP : tO;
                    return { ...o,
                        preloadedFeatures: n,
                        useRender: function(t = !1) {
                            let e = (e, n, r, i, {
                                latestValues: o
                            }, a) => {
                                let s = P(e) ? tC : tc,
                                    c = s(n, o, a),
                                    u = function(t, e, n) {
                                        let r = {};
                                        for (let i in t)(td(i) || !0 === n && th(i) || !e && !th(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
                                        return r
                                    }(n, "string" == typeof e, t),
                                    h = { ...u,
                                        ...c,
                                        ref: i
                                    };
                                return r && (h["data-projection-id"] = r), (0, l.createElement)(e, h)
                            };
                            return e
                        }(e),
                        createVisualElement: r,
                        projectionNodeConstructor: i,
                        Component: t
                    }
                })(t, e, oC, iT, og))
        }
    }
]);