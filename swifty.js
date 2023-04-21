/*! For license information please see swifty-63fa2666de8eb8abeab9.js.LICENSE.txt */ ! function(e) {
    function t(t) {
        for (var n, o, a = t[0], i = t[1], c = 0, s = []; c < a.length; c++) o = a[c], Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]), r[o] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (l && l(t); s.length;) s.shift()()
    }
    var n = {},
        r = {
            4: 0
        };

    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function(e) {
        var t = [],
            n = r[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var a = new Promise((function(t, o) {
                    n = r[e] = [t, o]
                }));
                t.push(n[2] = a);
                var i, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = function(e) {
                    return o.p + "js/" + ({} [e] || e) + "-" + {
                        7: "f503f23fdfdc755f3fdf"
                    } [e] + ".chunk.js"
                }(e);
                var l = new Error;
                i = function(t) {
                    c.onerror = c.onload = null, clearTimeout(s);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", l.name = "ChunkLoadError", l.type = o, l.request = a, n[1](l)
                        }
                        r[e] = void 0
                    }
                };
                var s = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = i, document.head.appendChild(c)
            } return Promise.all(t)
    }, o.m = e, o.c = n, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "https://static.helpjuice.com/packs/", o.oe = function(e) {
        throw console.error(e), e
    };
    var a = window.webpackJsonp = window.webpackJsonp || [],
        i = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var l = i;
    o(o.s = 357)
}({
    10: function(e, t, n) {
        "use strict";

        function r(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }
        n.d(t, "a", (function() {
            return r
        }))
    },
    11: function(e, t, n) {
        "use strict";

        function r(e) {
            var t = document.createRange(),
                n = window.getSelection();
            t.selectNodeContents(e), n.removeAllRanges(), n.addRange(t)
        }

        function o(e, t) {
            var n = document.createElement("button");
            return n.className = e, n.textContent = t, n
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = document.createElement("input");
            return n.className = e, n.placeholder = t, n
        }
        n.d(t, "c", (function() {
            return r
        })), n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return a
        }))
    },
    14: function(e, t, n) {
        "use strict";

        function r() {
            r = function() {
                return e
            };
            var e = {},
                t = Object.prototype,
                n = t.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                a = o.iterator || "@@iterator",
                i = o.asyncIterator || "@@asyncIterator",
                c = o.toStringTag || "@@toStringTag";

            function l(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                l({}, "")
            } catch (q) {
                l = function(e, t, n) {
                    return e[t] = n
                }
            }

            function s(e, t, n, r) {
                var o = t && t.prototype instanceof f ? t : f,
                    a = Object.create(o.prototype),
                    i = new E(r || []);
                return a._invoke = function(e, t, n) {
                    var r = "suspendedStart";
                    return function(o, a) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o) throw a;
                            return C()
                        }
                        for (n.method = o, n.arg = a;;) {
                            var i = n.delegate;
                            if (i) {
                                var c = S(i, n);
                                if (c) {
                                    if (c === d) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }(e, n, i), a
            }

            function u(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (q) {
                    return {
                        type: "throw",
                        arg: q
                    }
                }
            }
            e.wrap = s;
            var d = {};

            function f() {}

            function p() {}

            function h() {}
            var v = {};
            l(v, a, (function() {
                return this
            }));
            var y = Object.getPrototypeOf,
                m = y && y(y(x([])));
            m && m !== t && n.call(m, a) && (v = m);
            var g = h.prototype = f.prototype = Object.create(v);

            function w(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    l(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function b(e, t) {
                function r(o, a, i, c) {
                    var l = u(e[o], e, a);
                    if ("throw" !== l.type) {
                        var s = l.arg,
                            d = s.value;
                        return d && "object" == typeof d && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            r("next", e, i, c)
                        }), (function(e) {
                            r("throw", e, i, c)
                        })) : t.resolve(d).then((function(e) {
                            s.value = e, i(s)
                        }), (function(e) {
                            return r("throw", e, i, c)
                        }))
                    }
                    c(l.arg)
                }
                var o;
                this._invoke = function(e, n) {
                    function a() {
                        return new t((function(t, o) {
                            r(e, n, t, o)
                        }))
                    }
                    return o = o ? o.then(a, a) : a()
                }
            }

            function S(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return d;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var r = u(n, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
            }

            function j(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function L(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function E(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(j, this), this.reset(!0)
            }

            function x(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1,
                            o = function t() {
                                for (; ++r < e.length;)
                                    if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return o.next = o
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return p.prototype = h, l(g, "constructor", h), l(h, "constructor", p), p.displayName = l(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, l(e, c, "GeneratorFunction")), e.prototype = Object.create(g), e
            }, e.awrap = function(e) {
                return {
                    __await: e
                }
            }, w(b.prototype), l(b.prototype, i, (function() {
                return this
            })), e.AsyncIterator = b, e.async = function(t, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new b(s(t, n, r, o), a);
                return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, w(g), l(g, c, "Generator"), l(g, a, (function() {
                return this
            })), l(g, "toString", (function() {
                return "[object Generator]"
            })), e.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, e.values = x, E.prototype = {
                constructor: E,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                        for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(n, r) {
                        return i.type = "throw", i.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                            i = a.completion;
                        if ("root" === a.tryLoc) return r("end");
                        if (a.tryLoc <= this.prev) {
                            var c = n.call(a, "catchLoc"),
                                l = n.call(a, "finallyLoc");
                            if (c && l) {
                                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                            } else if (c) {
                                if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), d
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d
                }
            }, e
        }

        function o(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    l = c.value
            } catch (s) {
                return void n(s)
            }
            c.done ? t(l) : Promise.resolve(l).then(r, o)
        }

        function a(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, a) {
                    var i = e.apply(t, n);

                    function c(e) {
                        o(i, r, a, c, l, "next", e)
                    }

                    function l(e) {
                        o(i, r, a, c, l, "throw", e)
                    }
                    c(void 0)
                }))
            }
        }
        var i;

        function c() {
            return l.apply(this, arguments)
        }

        function l() {
            return (l = a(r().mark((function e() {
                return r().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", i || s(u().then(s)));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function s(e) {
            return i = e
        }

        function u() {
            return d.apply(this, arguments)
        }

        function d() {
            return d = a(r().mark((function e() {
                var t, o;
                return r().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, n.e(7).then(n.bind(null, 372));
                        case 2:
                            return t = e.sent, o = t.createConsumer, e.abrupt("return", o());
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), d.apply(this, arguments)
        }

        function f(e, t) {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = a(r().mark((function e(t, n) {
                var o, a;
                return r().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, c();
                        case 2:
                            return o = e.sent, a = o.subscriptions, e.abrupt("return", a.create(t, n));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
        n.d(t, "b", (function() {
            return f
        })), n.d(t, "a", (function() {
            return h.a
        })), n.d(t, "c", (function() {
            return v
        }));
        var h = n(25);
        n(7);

        function v(e) {
            return e.replace(/[&\/\\#,;+()!@$^$~%.'":*?~<>{}]/g, "").replace(/\s+/g, "-").replace(/\-\-+/g, "-")
        }
        n(11), n(10)
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        })), n.d(t, "b", (function() {
            return c
        }));
        var r = window.navigator.userAgent,
            o = /iPhone|iPad/.test(r),
            a = /Android/.test(r),
            i = o || a;
        /Mac/.test(r);

        function c() {
            return new Promise(requestAnimationFrame)
        }
    },
    357: function(e, t, n) {
        n(359).start()
    },
    358: function(e, t, n) {},
    359: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "start", (function() {
            return a
        }));
        n(358);
        var r = n(14);

        function o() {
            var e, t = document.querySelector("#helpjuice-widget-expanded"),
                n = document.querySelector("#helpjuice-widget-trigger"),
                r = document.querySelector("input#helpjuice-widget-search"),
                o = document.querySelector("#helpjuice-widget-results-loader"),
                a = document.querySelector("#helpjuice-widget-content"),
                i = document.querySelector("#helpjuice-widget-article-content");

            function c() {
                var e = Array.from(document.querySelectorAll(".f-accordion-panel"));
                e.length > 0 && e.forEach((function(e) {
                    var t, n = document.createElement("DIV"),
                        r = document.createElement("DIV"),
                        o = document.createElement("DIV");
                    (t = n.classList).add.apply(t, ["f-accordion-panel", "panel"]), r.classList.add("panel-title"), o.classList.add("panel-content"), r.textContent = e.firstElementChild.innerText, e.firstElementChild.remove(), o.innerHTML = e.innerHTML, e.innerHTML = "", e.appendChild(r), e.appendChild(o)
                })), Array.from(document.querySelectorAll(".f-accordion-panel .panel-title")).forEach((function(t) {
                    t.addEventListener("click", (function() {
                        var n = t.parentNode;
                        n.classList.contains("active") ? (n.classList.toggle("active"), n.querySelector(".panel-content").style.display = "none") : (e.forEach((function(e) {
                            e.classList.remove("active"), e.querySelector(".panel-content").style.display = "none"
                        })), n.classList.add("active"), n.querySelector(".panel-content").style.display = "block")
                    }))
                }));
                var t = Array.from(document.querySelectorAll(".f-accordion-panel .fa-trash-alt")),
                    n = Array.from(document.querySelectorAll(".f-accordion-panel .fa-arrows-alt")),
                    r = Array.from(document.querySelectorAll("i.line-break"));
                t.forEach((function(e) {
                    return e.remove()
                })), n.forEach((function(e) {
                    return e.remove()
                })), r.forEach((function(e) {
                    return e.remove()
                }))
            }

            function l() {
                function e(e) {
                    var t, n;
                    for (t = e.firstElementChild; t;) {
                        var r = t.nextElementSibling;
                        if (!t.classList.contains("f-tab")) "P" === t.tagName && Array.from(t.childNodes).every((function(e) {
                            return e.nodeType === Node.TEXT_NODE && !e.nodeValue || "BR" === e.tagName
                        })) && e.removeChild(t);
                        t = r
                    }
                    for (t = e.firstElementChild; t;) {
                        var o = t.nextElementSibling;
                        t.classList.contains("f-tab") ? (n || ((n = document.createElement("div")).classList.add("f-tabs"), e.insertBefore(n, t)), n.appendChild(t)) : n = null, t = o
                    }
                }
                for (var t = 0, n = Array.from(document.getElementsByClassName("f-tab")); t < n.length; t++) {
                    var r = n[t];
                    r.parentElement.classList.contains("f-tabs") || e(r.parentElement)
                }
                Array.from(document.querySelectorAll("#helpjuice-widget .f-tabs")).forEach((function(e) {
                    var t = document.createElement("div");
                    t.classList.add("tab-bar"), e.appendChild(t);
                    var n = document.createElement("div");
                    n.classList.add("tab-contents"), e.appendChild(n), e.querySelectorAll(".f-tab").forEach((function(e) {
                        var r = Math.random().toString(16).slice(2),
                            o = e.querySelector("h2").innerText,
                            a = document.createElement("DIV");
                        a.classList.add("tab-title"), a.setAttribute("data-tab", r), a.textContent = o, t.append(a);
                        var i = e.innerHTML,
                            c = document.createElement("DIV");
                        c.classList.add("tab-content"), c.setAttribute("data-tab", r), c.innerHTML = i, c.querySelector("h2").remove(), n.appendChild(c), e.remove()
                    }))
                })), Array.from(document.querySelectorAll("#helpjuice-widget .f-tabs")).forEach((function(e) {
                    e.querySelector(".tab-title").classList.add("active"), e.querySelector(".tab-content").classList.add("active")
                })), Array.from(document.querySelectorAll("#helpjuice-widget .f-tabs .tab-title")).forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var t = e.parentNode.parentNode,
                            n = e.getAttribute("data-tab"),
                            r = t.querySelectorAll(".tab-bar .tab-title"),
                            o = t.querySelectorAll(".tab-content");
                        r.forEach((function(e) {
                            e.classList.remove("active")
                        })), o.forEach((function(e) {
                            e.classList.remove("active")
                        })), e.classList.add("active"), document.querySelector('.tab-content[data-tab="'.concat(n, '"]')).classList.add("active")
                    }))
                }));
                var o = Array.from(document.querySelectorAll(".f-tabs .fa-trash-alt")),
                    a = Array.from(document.querySelectorAll(".f-tabs .fa-arrows-alt")),
                    i = Array.from(document.querySelectorAll("i.line-break"));
                o.forEach((function(e) {
                    return e.remove()
                })), a.forEach((function(e) {
                    return e.remove()
                })), i.forEach((function(e) {
                    return e.remove()
                }))
            }

            function s() {
                Array.from(document.querySelectorAll("#helpjuice-widget .hj-dt-container")).forEach((function(e) {
                    var t = e,
                        n = e.querySelector(".dt-first-question"),
                        r = e.querySelectorAll(".dt-tab-content"),
                        o = e.querySelectorAll(".dt-title"),
                        a = e.querySelectorAll(".dt-tab"),
                        i = e.querySelector(".back"),
                        c = Array.from(document.querySelectorAll(".hj-dt-container [contenteditable]"));
                    c && c.forEach((function(e) {
                        e.removeAttribute("contenteditable")
                    })), t.classList.remove("active-content"), r.forEach((function(e) {
                        e.classList.remove("active-content")
                    })), o.forEach((function(e) {
                        e.classList.remove("active")
                    })), a.forEach((function(t) {
                        t.addEventListener("click", (function() {
                            n.style.display = "none", i.style.display = "flex";
                            var o = t.dataset.id,
                                a = document.getElementById(o);
                            t.parentNode.parentNode.style.display = "none", e.querySelectorAll(".content").forEach((function(e) {
                                e.style.display = "none"
                            })), r.forEach((function(e) {
                                e.classList.remove("active-content")
                            })), a.style.display = "block", a.classList.add("active-content"), a.querySelector(".content").style.display = "block"
                        }))
                    })), i.addEventListener("click", (function() {
                        var t = i.parentNode;
                        t.classList.remove("active-content");
                        var n = t.querySelector(".active-content"),
                            r = n.parentNode.parentNode;
                        n.style.display = "none", e.querySelectorAll(".dt-tab-content").forEach((function(e) {
                            e.classList.remove("active-content")
                        })), r.classList.contains("hj-dt-container") && (t.querySelector(".dt-first-question").style.display = "block", i.style.display = "none"), r.classList.add("active-content"), r.style.display = "block", r.querySelector(".content").style.display = "block", r.querySelector(".hj-dt-tabs").querySelector("ul").style.display = "block"
                    }))
                }))
            }

            function u() {
                document.querySelector("#article-content-name").textContent = "", document.querySelector("span.published").textContent = "", document.querySelector("#article-content-body").innerHTML = "", document.querySelector("span.article-reading-time").textContent = "", document.querySelector("#helpjuice-widget-article-content .article-info svg").style.display = "none", document.querySelector("#helpjuice-widget-article-content .header button.close").style.display = "none", o.style.display = "block", document.querySelector(".feedback-response").classList.remove("thumbs-down"), document.querySelector(".feedback-response").style.display = "none"
            }

            function d(e, t, n, r) {
                i.classList.add("active"), document.querySelector("#article-content-name").textContent = e, document.querySelector("span.published").textContent = t, document.querySelector("#article-content-body").innerHTML = n, document.querySelector("span.article-reading-time").textContent = "".concat(r, " min"), document.querySelector("#helpjuice-widget-article-content .article-info svg").style.display = "block", document.querySelector("#helpjuice-widget-article-content .header button.close").style.display = "block", o.style.display = "none"
            }

            function f(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return function(e) {
                    o.style.display = "block";
                    var r = helpjuice_account_url + "##search_query=" + encodeURIComponent(t);
                    if (0 === n.length) var i = e.map((function(e) {
                        return e.question.id
                    })).slice(0, 4).toString();
                    else i = n.toString(), e = 1;
                    if (0 == e.length) o.style.display = "none", a.innerHTML = '<h4 class="title">No results found. Try another search?</h4>';
                    else {
                        var f = "".concat(helpjuice_account_url, "/api/questions?question_ids=").concat(i);
                        fetch(f).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            if (a.innerHTML = "", e.forEach((function(e) {
                                    var t, n = e.id,
                                        r = e.answer,
                                        o = e.answer_sample,
                                        i = e.name,
                                        f = e.last_published_date,
                                        p = ((60 * e.reading_time[1][0] + e.reading_time[2][0]) / 60).toFixed();
                                    p < 1 && (p = 1);
                                    var h = document.createElement("a");
                                    (t = h.classList).add.apply(t, ["article", "helpjuice-link"]), h.setAttribute("data-id", n), h.innerHTML = "\n              <h3>".concat(i, "</h3>\n              <p>").concat(o, '...</p>\n              <div class="footer">\n                <span class="reading-time"> <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path></svg> ').concat(p, ' min</span>\n                <span class="last-published">').concat(f, "</span>\n              </div>\n            "), a.appendChild(h), h.addEventListener("click", (function(e) {
                                        e.preventDefault(), u(), d(i, f, r, p), c(), l(), s();
                                        var t = Array.from(document.querySelectorAll("table"));
                                        t && t.forEach((function(e) {
                                            var t = document.createElement("DIV");
                                            t.classList.add("responsive-table"), e.parentNode.insertBefore(t, e), t.appendChild(e)
                                        }))
                                    }))
                                })), o.style.display = "none", 0 === n) {
                                var t = document.createElement("a");
                                t.classList.add("show-more"), t.setAttribute("href", r), t.setAttribute("target", "_blank"), t.textContent = "More Results", a.append(t)
                            }
                        }))
                    }
                }(e)
            }

            function p(e) {
                var t = encodeURIComponent(e),
                    n = helpjuice_account_url + "/search?query=" + t;
                t.length > 1 && fetch(n).then((function(e) {
                    return e.json()
                })).then((function(t) {
                    f(t, e), o.style.display = "none"
                }))
            }

            function h() {
                o.style.display = "block", r.value = "", a.innerHTML = "";
                var e = helpjuice_account_url + "/api/questions/popular";
                fetch(e).then((function(e) {
                    return e.json()
                })).then((function(e) {
                    e = e.slice(0, 4), o.style.display = "none", e.forEach((function(e) {
                        var t, n = e.name,
                            r = e.id,
                            o = e.answer_sample,
                            i = e.answer,
                            f = e.last_published_date,
                            p = ((60 * e.reading_time[1][0] + e.reading_time[2][0]) / 60).toFixed();
                        p < 1 && (p = 1);
                        var h = document.createElement("a");
                        (t = h.classList).add.apply(t, ["article", "helpjuice-link"]), h.setAttribute("data-id", r), h.innerHTML = "\n            <h3>".concat(n, "</h3>\n            <p>").concat(o, '...</p>\n            <div class="footer">\n              <span class="reading-time"> <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path></svg> ').concat(p, ' min</span>\n              <span class="last-published">').concat(f, "</span>\n            </div>\n          "), a.appendChild(h), h.addEventListener("click", (function(e) {
                            e.preventDefault(), u(), d(n, f, i, p), c(), l(), s();
                            var t = Array.from(document.querySelectorAll("table"));
                            t && t.forEach((function(e) {
                                var t = document.createElement("DIV");
                                t.classList.add("responsive-table"), e.parentNode.insertBefore(t, e), t.appendChild(e)
                            }))
                        }))
                    })), o.style.display = "none"
                }))
            }
            e = "undefined" === typeof helpjuice_contact_us_url ? helpjuice_account_url + "/contact-us" : helpjuice_contact_us_url, 0 !== helpjuice_account_url.indexOf("http") && (helpjuice_account_url = "https://" + helpjuice_account_url),
                function(t) {
                    t || (t = {}),
                        function() {
                            void 0 !== helpjuiceSwiftyConfig.widgetPosition && document.querySelector("#helpjuice-widget").classList.add(helpjuiceSwiftyConfig.widgetPosition);
                            void 0 !== helpjuiceSwiftyConfig.themeColor && (n.style.backgroundColor = helpjuiceSwiftyConfig.themeColor, document.querySelector("#helpjuice-widget-header").style.backgroundColor = helpjuiceSwiftyConfig.themeColor, document.querySelector("#helpjuice-widget #helpjuice-widget-contact a").style.color = helpjuiceSwiftyConfig.themeColor);
                            if (void 0 !== helpjuiceSwiftyConfig.linkColor) {
                                var e = "\n        #helpjuice-widget-content .helpjuice-link h3,\n        #helpjuice-widget #helpjuice-widget-expanded #helpjuice-widget-contact a,\n        #helpjuice-widget #helpjuice-widget-expanded #helpjuice-widget-contact button {\n          color: ".concat(helpjuiceSwiftyConfig.linkColor, "!important;\n        }"),
                                    t = document.head,
                                    r = document.createElement("style");
                                t.appendChild(r), r.appendChild(document.createTextNode(e))
                            }
                        }(), Array.from(document.querySelectorAll("[data-swifty-search]")).forEach((function(e) {
                            e.addEventListener("click", (function(t) {
                                t.preventDefault();
                                var n, r = e.getAttribute("data-swifty-search"),
                                    o = document.querySelector("#helpjuice-widget-expanded"),
                                    a = document.querySelector("#helpjuice-widget-search");
                                o.classList.contains("hj-shown") || (n || (n = {}), document.querySelector("#helpjuice-widget #helpjuice-widget-expanded").classList.toggle("hj-shown"), (void 0 !== n.search || void 0 !== n.category) && (void 0 !== n.search ? n.category ? p(n.search, n.category) : p(n.search) : h(n.category))), a.value = r, p(r)
                            }))
                        }));
                    var r = document.querySelector(".feedback-response");
                    Array.from(document.querySelectorAll(".helpjuice-article-feedback")).forEach((function(e) {
                        e.addEventListener("click", (function(t) {
                            t.preventDefault();
                            var n = e.dataset.score,
                                o = document.querySelector(".hj-swifty").dataset.currentQuestionId;
                            1 == n ? fetch("".concat(helpjuice_account_url, "/api/questions/").concat(o, "/upvote"), {
                                method: "PUT",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                }
                            }).then((function() {
                                r.innerHTML = "Thanks for the feedback", r.style.display = "block"
                            })) : fetch("".concat(helpjuice_account_url, "/api/questions/").concat(o, "/downvote"), {
                                method: "PUT",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                }
                            }).then((function() {
                                r.innerHTML = '<a href="' + helpjuice_account_url + '/contact-us" target="_blank">Contact Support</a> Thanks for the feedback', r.classList.add("thumbs-down"), r.style.display = "block"
                            }))
                        }))
                    }));
                    var o = "".concat(helpjuice_account_url),
                        a = document.querySelector("#helpjuice-widget-contact #helpjuice-contact-link"),
                        i = document.querySelector("#helpjuice-widget-contact .knowledge-base-link");
                    a.setAttribute("href", e), i.setAttribute("href", o), "function" === typeof onHelpjuiceInit && onHelpjuiceInit()
                }(), document.addEventListener("click", (function(e) {
                    if (e.target.closest(".helpjuice-link")) {
                        var t = e.target.dataset.id;
                        n = t, document.querySelector(".hj-swifty").dataset.currentQuestionId = n
                    }
                    var n
                })), n.addEventListener("click", (function() {
                    var e, n, o, a = (e = window.location, n = [e.pathname.slice(1), e.pathname, e.origin + e.pathname, e.host + e.pathname], o = [!1], n.forEach((function(e) {
                        e in helpjuiceSwiftyUrlMap && (o = [!0, e])
                    })), o);
                    a[0] ? f("", "", helpjuiceSwiftyUrlMap[a[1]]) : h(), t.classList.toggle("hj-shown"), r.focus()
                })), r.addEventListener("keydown", (function(e) {
                    i.classList.remove("active"), 0 == r.value.length || 8 == e.keyCode ? (h(), o.style.display = "none") : o.style.display = "block"
                }));
            var v = null;
            r.addEventListener("keyup", (function() {
                v && clearTimeout(v), v = setTimeout((function() {
                    p(r.value)
                }), 300)
            })), document.querySelector("#helpjuice-widget-article-content .header .close").addEventListener("click", (function(e) {
                e.preventDefault(), i.classList.remove("active")
            }))
        }
        var a = function() {
            document.addEventListener("DOMContentLoaded", (function() {
                var e;
                r.a ? console.warn("Swifty doesn't work on mobile devices.") : (document.body.appendChild(((e = document.createElement("div")).classList.add("hj-swifty"), e.innerHTML = '<div id="helpjuice-widget">\n  <a href="javascript:void(0)" id="helpjuice-widget-trigger" class="clicked">\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 108 108" style="enable-background:new 0 0 108 108;" xml:space="preserve">\n    <style type="text/css">\n      .st0{fill:#FFFFFF;}\n      .st1{fill:#5DA3D9;}\n      .st2{fill:#414A5F;}\n    </style>\n    <g>\n      <path class="st0" d="M54.2,38.2c0,0,10.9,14.3,10.9,20.5c0,6.1-5,11.1-11.1,11.1s-11.1-5-11.1-11.1C42.9,52.5,54.2,38.2,54.2,38.2z   "/>\n      <path class="st0" d="M54,2.7C25.7,2.7,2.7,25.7,2.7,54s23,51.3,51.3,51.3s51.3-23,51.3-51.3S82.3,2.7,54,2.7z M71.3,12.1   c11.1,4.6,20,13.5,24.6,24.6l-10.4,4.3c-3.5-8.4-10.1-15.1-18.5-18.5L71.3,12.1z M36.7,12.1l4.3,10.4c-8.4,3.5-15.1,10.1-18.5,18.5   l-10.4-4.3C16.7,25.5,25.5,16.7,36.7,12.1z M36.7,95.9c-11.1-4.6-20-13.5-24.6-24.6l10.4-4.3c3.5,8.4,10.1,15.1,18.5,18.5   L36.7,95.9z M25.9,54c0-15.5,12.6-28.1,28.1-28.1S82.1,38.5,82.1,54S69.5,82.1,54,82.1S25.9,69.5,25.9,54z M71.3,95.9l-4.3-10.4   c8.4-3.5,15.1-10.1,18.5-18.5l10.4,4.3C91.3,82.5,82.5,91.3,71.3,95.9z"/>\n    </g>\n    </svg>\n  </a>\n  <div id="helpjuice-widget-expanded">\n    <div id="helpjuice-widget-results-loader"><div class="loader"></div></div>\n    <div id="helpjuice-widget-header">\n      <input id="helpjuice-widget-search" placeholder="What can we help you with?"/>\n      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>\n    </div>\n\n    <div id="helpjuice-widget-article-content">\n      <div class="content">\n        <div class="header">\n          <h1 id="article-content-name" class="name"></h1>\n          <button class="close">\n            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"></path></svg>\n          </button>\n          <div class="article-info">\n            <p><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path></svg><span class="article-reading-time">1 min</span></p>\n            <p><span class="published">Unknown</span></p>\n          </div>\n        </div>\n        <div id="article-content-body" class="body">\n          <p></p>\n        </div>\n      </div>\n      <footer>\n        <div class="feedback-response"></div>\n        <p>Was This Article Helpful?</p>\n        <div class="actions">\n          <a href="#" class="yes helpjuice-article-feedback" data-score="1">\n            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="smile" class="svg-inline--fa fa-smile fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg>\n          </a>\n          <a href="#" class="no helpjuice-article-feedback" data-score="0">\n            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sad-tear" class="svg-inline--fa fa-sad-tear fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"></path></svg>\n          </a>\n        </div>\n      </footer>\n    </div>\n\n    <div id=\'helpjuice-widget-content\'></div>\n\n      </div>\n</div>\n', e)), o())
            }))
        }
    },
    7: function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = [], n = e.parentNode.firstChild; n;) 1 === n.nodeType && n !== e && t.push(n), n = n.nextSibling;
            return t
        }

        function o(e, t) {
            var n = e.nextElementSibling;
            if (!t) return n;
            for (; n;) {
                if (n.matches(t)) return n;
                n = n.nextElementSibling
            }
        }

        function a(e, t) {
            var n = e.previousElementSibling;
            if (!t) return n;
            for (; n;) {
                if (n.matches(t)) return n;
                n = n.previousElementSibling
            }
        }

        function i(e) {
            for (var t = e.parentNode; e.firstChild;) t.insertBefore(e.firstChild, e);
            t.removeChild(e)
        }
        n.d(t, "c", (function() {
            return r
        })), n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return a
        })), n.d(t, "d", (function() {
            return i
        }))
    }
});