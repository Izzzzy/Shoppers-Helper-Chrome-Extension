// Copyright (c) 2016 VigLink
/*
 VigLink JavaScript Library -- http://www.viglink.com

 Permission is hereby granted to create derivative works, but only for use
 with the VigLink web service.

 Includes:

 Sizzle CSS Selector Engine v1.10.20-pre
 http://sizzlejs.com/

 Copyright 2013 jQuery Foundation, Inc. and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2014-05-22
*/
(function (k) {
    var e, b = {
        _breaker: {}, _start: null, each: function () { var a, c = function (c, f) { return c === b._breaker || Boolean(f) && b.elapsed() > a }; return function (d, f, h) { var e, l; l = b.type(d); if (1 === arguments.length) a = arguments[0]; else if (h = b.extend({ timeout: !1 }, h), "object" === l && d.hasOwnProperty) for (e in d) { if (d.hasOwnProperty(e) && c(f(d[e], e), h.timeout)) break } else if (d) { e = 0; for (l = d.length; e < l && !c(f(d[e], e), h.timeout) ; e++); } } }(), extend: function (a) {
            var c, b, f, h, e = arguments.length; a = a || {}; for (b = 1; b < e; b++) if (h = arguments[b],
            void 0 !== h && null !== h) for (f in h) c = h[f], a !== c && void 0 !== c && (a[f] = c); return a
        }, noop: function () { }, type: function () {
            var a = function (c, a) { try { return ("function" === typeof window[a] || "object" === typeof window[a]) && c instanceof window[a] } catch (b) { } return !1 }; return function (c) {
                return null === c ? "null" : void 0 === c ? "undefined" : a(c, "HTMLElement") || "object" === typeof c && 1 === c.nodeType && "string" === typeof c.nodeName ? "element" : c == c.window ? "window" : a(c, "HTMLDocument") || "object" === typeof c && ("defaultView" in c || "parentWindow" in
                c) ? "document" : Object.prototype.toString.call(c).slice(8, -1).toLowerCase()
            }
        }()
    }; b.extend(b, {
        addClass: function (a, c) { b.hasClass(a, c) || (a.className = (a.className ? a.className + " " : "") + c) }, all: function (a, c) { var d = "array" === b.type(a) ? [] : {}; b.each(a, function (a, h) { c(a, h) && ("array" === b.type(d) ? d.push(a) : d[h] = a) }); return d }, ancestors: function (a) { for (var c = [a]; (a = a.parentNode) && 1 === a.nodeType;) c.push(a); return c }, apiCallback: function (a, c) { return function (d) { "string" === b.type(d) && (d = { response: [d] }); a.apply(c, d.response.concat(d.data)) } },
        attributes: function (a, c) { var d; c = c || {}; for (d in c) "function" === b.type(a.setAttribute) ? a.setAttribute(d, c[d]) : a["class" === d ? "className" : d] = c[d] }, attrValues: function (a, c, b) { return (c = a[c]) && c.split ? c.split(b || " ") : [] }, batchable: function (a, c) {
            c = c || b.noop; var d = function () { return b.extend({ batch: !0, timeout: 100 }, c()) }, f = b.traits.cors && b.traits.json, h = [], e = null, l = function () { null !== e && (clearTimeout(e), e = null); 1 === h.length ? a.apply(null, h[0].arguments) : 1 < h.length && a.apply(null, h); h = [] }, g = function () {
                h.push({
                    arguments: b.toArray(arguments),
                    batch: !0
                }); !f || !d().batch ? l() : null === e && (e = setTimeout(b.entryPoint(b.bind(function () { l() }, this)), d().timeout))
            }; b.extend(g, { flush: l, now: a }); return g
        }, batchArgs: function (a, c) { return b.map(a, function (a) { return void 0 === c ? a.arguments : a.arguments[c] }) }, batchCallType: function (a) { var c; return b.reduce(null, a, function (a, b) { c = b[0]; return null !== a && c !== a ? "batch" : c }) }, batched: function (a) {
            a = b.toArray(a); if ("array" === b.type(a)) return b.all(a, function (c) { return "object" === b.type(c) && c.batch && "array" === b.type(c.arguments) }).length ===
            a.length
        }, bind: function (a, c) { return function () { return a.apply(c, arguments) } }, cache: function () { var a = {}, c = "vglnk_" + (new Date).getTime(), b = 0; return function (f, h, e) { if (f) { var l = f[c]; if (l || void 0 !== e) return l || (l = ++b), a[l] || (f[c] = l, a[l] = {}), void 0 !== e && (a[l][h] = e), "string" === typeof h ? a[l][h] : a[l] } } }(), canonicalizeHostname: function (a) { "string" === typeof a && (a = b.createA(a)); try { return a.hostname ? a.hostname.toString().toLowerCase().replace(/^www\./, "").replace(/:.*$/, "") : "" } catch (c) { return "" } }, clone: function (a) {
            return b.extend({},
            a)
        }, commonParams: function (a, c) { var d; c = c || {}; d = { drKey: c.key ? null : c.dr_key, key: c.key, libId: c.library_id, subId: c.sub_id }; ("click" === a || "ping" === a) && b.extend(d, { cuid: c.cuid, loc: location.href, v: 1 }, d); return d }, contains: function (a, c, d) { return Boolean(b.find(a, function (a) { return a === c }, d)) }, context: function (a) { "element" === b.type(a) && (a = a.ownerDocument); "document" === b.type(a) && (a = a.defaultView || a.parentWindow); if ("window" === b.type(a)) return a }, contextIsAncestor: function (a, c) {
            for (var b = a.self; b.parent && b.parent !==
            b;) if (b = b.parent, b === c) return !0; return !1
        }, cors: function (a, c, d) {
            var f; f = new window.XMLHttpRequest; f.onreadystatechange = function () { if (4 === f.readyState && 200 === f.status) { var c = b.noop, a = [], h; if (d) d(f.responseText); else if ("string" === b.type(f.responseText) && (h = f.responseText.match(/^\s*(?:\/\*\*\/)?([^(\s]+)\s*\((.*)\);?\s*$/))) c = h[1].replace(/(^\s+|\s+$)/g, ""), a = b.fromJSON("[" + h[2] + "]"), window[c].apply(window, a) } }; try {
                return f.open("POST", a), f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                f.withCredentials = !0, f.send(c), !0
            } catch (h) { return !1 }
        }, createA: function (a, c) { return b.createEl("a", { href: a, target: c }) }, createEl: function (a, c, d, f) { a = (f || document).createElement(a); b.attributes(a, c); b.css(a, d); return a }, css: function (a, c) { var b; c = c || {}; for (b in c) try { a.style[b] = c[b] } catch (f) { } return a }, destructing: function (a) { return function (c) { var a = !1, b; return function () { a || (b = c.apply(null, arguments), a = !0); return b } }(a) }, elapsed: function (a) {
            return (a = a || this._start) ? (new Date).getTime() - a.getTime() :
            0
        }, entryPoint: function (a) { return b.exceptionLogger(function () { var c; b._start = new Date; b.observer.pause(); c = a.apply(this, arguments); b.observer.resume(); return c }) }, escapeRegExp: function () { var a; return function (c) { a = a || /([.*+?^${}()|[\]\\])/g; return c.replace(a, "\\$1") } }(), eventLink: function (a) { var c, b = a.target || a.srcElement; do { try { c = b.nodeType } catch (f) { break } if (1 === c && (a = b.tagName.toUpperCase(), "A" === a || "AREA" === a)) return b; b = b.parentNode } while (b) }, every: function (a, c) { return Boolean(!b.some(a, function (a) { return !c(a) })) },
        exceptionLogger: function () { var a = !1, c = b.noop; return function (b, f) { if (void 0 !== f) a = f, c = b; else return function () { if (a) try { return b.apply(this, arguments) } catch (f) { c(f) } else return b.apply(this, arguments) } } }(), find: function (a, c, d) { var f; b.each(a, function (a, d) { if (c(a, d)) return f = a, b._breaker }, d); return f }, generateNodeFilter: function () {
            var a = function (a, b) { var h, e; b = "," + b.join(",") + ","; h = 0; for (e = a.length; h < e; h++) if (c(a[h], b)) return !0; return !1 }, c = function (c, a) { return -1 !== a.indexOf("," + c + ",") }; return function (d) {
                d =
                b.extend({ custom: null, classes: [], rels: [], tags: [] }, d); d.tags.length && (d.tags = "," + d.tags.join(",").toLowerCase() + ","); return function (f, h) {
                    h = b.extend({ ancestors: !0, self: !0 }, h); var e = function (f, h) { var e; if (e = !(d.tags.length && c(f.nodeName.toLowerCase(), d.tags))) { if (e = d.classes.length) { e = d.classes; var p = b.attrValues(f, "className"); e = a(e, p) } if (e = !e) { if (e = d.rels.length) e = d.rels, p = b.attrValues(f, "rel"), e = c(f.nodeName.toLowerCase(), ",a,") && a(e, p); e = !e && !("function" === b.type(d.custom) && d.custom(f, h)) } } return e };
                    if (h.self && !e(f, !0)) return !1; if (h.ancestors) for (; f.parentNode;) if (f = f.parentNode, 1 === f.nodeType && !e(f, !1)) return !1; return !0
                }
            }
        }(), fromJSON: function (a) { if (b.traits.json) try { return window.JSON.parse(a) } catch (c) { } }, fromQuery: function (a) { "?" === a.substr(0, 1) && (a = a.substr(1)); a = a.split("&"); var c = {}; b.each(a, function (a) { a = a.split("="); c[decodeURIComponent(a[0])] = decodeURIComponent(a[1]) }); return c }, geometry: function () {
            var a, c = arguments.length, d = Infinity, f = Infinity, h = -Infinity, e = -Infinity, l; for (a = 0; a < c; a++) l =
            b.position(arguments[a]), d = Math.min(d, l.x), f = Math.min(f, l.y), h = Math.max(h, l.x + arguments[a].offsetWidth), e = Math.max(e, l.y + arguments[a].offsetHeight); return { x: d, y: f, w: h - d, h: e - f, x1: d, y1: f, x2: h, y2: e }
        }, getActualHref: function (a) { return b.cache(a, "href") || a.href }, hasAttrValue: function (a, c, d, f) { return c ? b.contains(b.attrValues(a, c, f), d) : !1 }, hasClass: function (a, c) { return b.hasAttrValue(a, "className", c) }, hasRel: function (a, c) { return b.hasAttrValue(a, "rel", c) }, isArray: function (a) { return "array" === b.type(a) }, isDefaultPrevented: function (a) {
            return a.isDefaultPrevented &&
            a.isDefaultPrevented() || !1 === a.returnValue || !0 === a.defaultPreventededirect
        }, isInDom: function (a) { return Boolean(a && a.offsetParent) }, isVisible: function (a) { return Boolean(a.offsetHeight || a.offsetWidth || !a.getClientRects || a.getClientRects().length) }, jsonp: function (a) { var c = document.getElementsByTagName("script")[0]; a = b.createEl("script", { type: "text/javascript", src: a }); c.parentNode.insertBefore(a, c) }, links: function () {
            var a = ["http:", "https:"], c = function (c, f) {
                return b.all(c, function (c) {
                    return c.href && (!f.filter_by_scheme ||
                    b.contains(a, c.protocol)) && (!f.filter_homepages || "/" !== c.pathname) && (!f.filter_internal || c.hostname !== b.context(c).location.hostname)
                })
            }; return function (a, f, h) { h = b.extend({ filter_homepages: !0, filter_internal: !0, filter_by_scheme: !0 }, h); f = b.map(f.split(","), function (c) { return c + " a[href]" }).join(","); return c(b.withScope(a, f, { ancestors: !1, consolidate: !0 }), h) }
        }(), map: function (a, c, d) { return b.reduce([], a, function (a, b, d) { a.push(c(b, d)); return a }, d) }, matches: function (a, c) {
            if ("element" !== b.type(a)) return !1;
            try { return this.Sizzle.matchesSelector(a, c) } catch (d) { return !0 }
        }, mergeable: function (a) { var c = function () { return b.extend({ batchable: !0, batchFn: b.noop, nonBatchFn: b.noop, timeout: 100 }, a()) }; return b.batchable(function () { b.batched(arguments) ? c().batchable ? b.each(b.batchArgs(arguments), function (a) { c().batchFn.apply(this, a) }) : c().nonBatchFn.apply(this, arguments) : c().nonBatchFn.apply(this, arguments) }, function () { return { batch: !0, timeout: c().timeout } }) }, mergeParams: function (a) {
            var c, d, f, h = arguments.length, e =
            function (d, f) { c = a[f]; a.hasOwnProperty(f) && b.isArray(d) && b.isArray(c) ? a[f] = b.unique(c.concat(d)) : a[f] = d }; for (d = 1; d < h; d++) f = arguments[d], b.each(f, e); return b.prune(a)
        }, nodesOfType: function (a) { var c = b.toArray(arguments).slice(1); return b.all(a, function (a) { return b.contains(c, a.nodeType) }) }, on: function () {
            var a; return function (c, d, f) {
                var h, e, l; if (1 === arguments.length) a = c; else {
                    if (2 === arguments.length) { if (!a) return; f = d; d = c; c = a } else h = b.toArray(arguments).slice(3, arguments.length); try { e = c["on" + d] } catch (g) { } "function" ===
                    typeof e && (c["on" + d] = b.bind(function (a) { a = a || window.event; var d = e.apply(c, arguments); this.exceptionLogger(function () { return a ? (void 0 !== d && !1 !== a.returnValue && (a.returnValue = d), b.isDefaultPrevented(a) && "function" === b.type(a.preventDefault) && a.preventDefault(), a.returnValue) : d })() }, this)); l = b.entryPoint(function () { if (a.enabled()) return f.apply(null, b.toArray(arguments).concat(h || [])) }); c.addEventListener ? c.addEventListener(d, l, !1) : c.attachEvent && c.attachEvent("on" + d, l)
                }
            }
        }(), packageArgs: function () { return b.toArray(arguments) },
        position: function (a, c) { var d, f = 0, h = 0, e = 0, l = 0; c = c || document; if (!b.isInDom(a)) return !1; d = a; do f += d.offsetLeft, h += d.offsetTop, d = d.offsetParent; while (d); d = a; do e += d.scrollLeft, l += d.scrollTop, d = d.parentNode; while (d && d !== c.body); return { x: f - e, y: h - l } }, preventDefault: function (a) { a.preventDefault && a.preventDefault(); return a.returnValue = !1 }, prune: function (a) { b.each(a, function (c, b) { (null === c || void 0 === c) && delete a[b] }); return a }, ready: function () {
            var a = !1, c = [], d = !1, f, h, e, l, g; document.addEventListener ? e = function () {
                document.removeEventListener("DOMContentLoaded",
                e, !1); g()
            } : document.attachEvent && (l = function () { "complete" === document.readyState && (document.detachEvent("onreadystatechange", l), g()) }); f = function () {
                if (!a) {
                    a = !0; if ("interactive" === document.readyState || "complete" === document.readyState) return g(); if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1); else if (document.attachEvent) { document.attachEvent("onreadystatechange", l); var c = !1; try { c = null === window.frameElement } catch (d) { } document.documentElement.doScroll && c && h() } b.on(window,
                    "load", g)
                }
            }; h = function () { if (!d) { try { document.documentElement.doScroll("left") } catch (a) { setTimeout(b.entryPoint(h), 1); return } g() } }; g = function () { if (!d) { if (!document.body) return setTimeout(b.entryPoint(g), 13); d = !0; c && (b.each(c, function (a) { a() }), c = null) } }; return function (a) { f(); d ? a() : c.push(a) }
        }(), reduce: function (a, c, d, f) { b.each(c, function (c, b) { a = d(a, c, b) }, f); return a }, reformatKeys: function (a) {
            var c, d, f = function (a) { return "_" + a.toLowerCase() }; for (c in a) d = c.replace(/([A-Z])/g, f), "object" === b.type(a[c]) &&
            (a[c] = b.reformatKeys(a[c])), d !== c && (a[d] = a[c], delete a[c]); return a
        }, removeClass: function (a, c) { if (b.hasClass(a, c)) { var d, f, h = b.attrValues(a, "className"); d = 0; for (f = h.length; d < f; d++) h[d] === c && delete h[d]; a.className = h.join(" ") } }, request: function (a, c, d) {
            var f, h, e, l = b.uniqid("vglnk_"), g = b.toArray(arguments).slice(3, arguments.length), s = function (a, c, d) {
                var f = {}, e = !!c.length, h = !0 === d || !1 === d; if (e || h) a = b.createA(a), e && (f.search = "?" + c), h && (c = a.protocol || b.context(a).location.protocol || "http:", f.protocol =
                c.replace(/s?:$/, function () { return d ? "s:" : ":" })), a = b.extend(a, f).href; return a
            }; h = function (a, c) { var d = {}, f = b.commonParams(); d[c] = {}; b.each(a, function (a, b) { b in f ? d[b] = a : d[c][b] = a }); d[c] = b.toJSON(d[c]); return b.prune(d) }; d = b.extend({ fn: b.noop, json_payload: null, jsonp: !0, "return": !1, ssl: null, timeout: null }, d); "string" === typeof d.fn ? (f = window[d.fn], l = d.fn) : "function" === typeof d.fn && (f = d.fn); "function" === b.type(f) && (e = b.entryPoint(b.destructing(function () {
                var a, e; d.json_payload && (e = d.json_payload, a = b.fromJSON(c[e]),
                c = b.extend(c, a), delete c[e]); f({ response: b.toArray(arguments), data: g, args: c }); window[l] && (window[l] = void 0)
            })), null !== d.timeout && setTimeout(e, d.timeout)); d.json_payload && b.traits.cors && (c = h(c, d.json_payload)); !0 === d.jsonp && (window[l] = e, c = b.extend({ format: "jsonp", jsonp: l }, c)); h = b.toQuery(c); return d["return"] ? s(a, h, d.ssl) : b.traits.json && b.traits.cors && b.cors(s(a, "", d.ssl), h, d.jsonp ? null : e) ? !0 : b.jsonp(s(a, h, d.ssl))
        }, select: function () { try { return this.Sizzle.apply(this.Sizzle, arguments) } catch (a) { return [] } },
        some: function (a, c) { return Boolean(b.find(a, function (a) { return c(a) })) }, stopPropagation: function (a) { a && a.stopPropagation && a.stopPropagation(); a.cancelBubble = !0 }, time: function () { return (new Date).getTime() }, toArray: function (a) { if (a && void 0 !== a.length) try { return Array.prototype.slice.call(a, 0) } catch (c) { var b, f, e = []; b = 0; for (f = a.length; b < f; b++) e[b] = a[b]; return e } }, toJSON: function (a) { if (b.traits.json) try { return window.JSON.stringify(a) } catch (c) { } }, toQuery: function (a) {
            var c = ""; b.each(b.prune(a), function (a,
            b) { c += "&" + encodeURIComponent(b) + "=" + encodeURIComponent(a) }); return c.substr(1)
        }, updateUrl: function (a, c) { return b.extend(b.createA(a), c).href }, uniqid: function () { var a = 0; return function (c) { return (c || "") + (new Date).getTime() + a++ } }(), unique: function (a) { return b.reduce([], a, function (a, d) { b.contains(a, d) || a.push(d); return a }) }, unlink: function (a) { var c, b = document.createDocumentFragment(); if (a.parentNode) { for (; null !== (c = a.firstChild) ;) b.appendChild(c); a.parentNode.insertBefore(b, a); a.parentNode.removeChild(a) } },
        withScope: function () {
            var a = function (a, d, f) { if (f.self && b.contains(d, a, { timeout: !0 })) return a; if (f.ancestors) return b.find(b.ancestors(a).slice(0), function (a) { return b.contains(d, a, { timeout: !0 }) }, { timeout: !0 }) }; return function (c, d, f) {
                var e, g = b.select(d); f = b.extend({ ancestors: !0, consolidate: !1, descendants: !0, self: !0 }, f); f.descendants && (e = b.map(g, function (a) { return [a, b.ancestors(a)] }, { timeout: !0 })); c = b.all(b.map(c, function (c) {
                    var d, s = []; (d = a(c, g, f)) ? s.push(d) : 1 === c.nodeType && f.descendants && b.each(e, function (a) {
                        var d =
                        a[0]; b.contains(a[1], c, { timeout: !0 }) && s.push(d)
                    }, { timeout: !0 }); return [c, s]
                }, { timeout: !0 }), function (a) { return 0 < a[1].length }, { timeout: !0 }); return f.consolidate ? b.unique(b.reduce([], c, function (a, c) { return a.concat(c[1]) }, { timeout: !0 })) : c
            }
        }()
    }); var q = function () { var a = b.find(b.toArray(arguments), function (a) { return "function" === b.type(a) }); a && (b.Sizzle = a()) }; q.amd = !0; (function (a) {
        function c(a, c, b, d) {
            var f, e, h, g, l; (c ? c.ownerDocument || c : C) !== y && I(c); c = c || y; b = b || []; if (!a || "string" !== typeof a) return b; if (1 !==
            (g = c.nodeType) && 9 !== g) return []; if (E && !d) {
                if (f = sa.exec(a)) if (h = f[1]) if (9 === g) if ((e = c.getElementById(h)) && e.parentNode) { if (e.id === h) return b.push(e), b } else return b; else { if (c.ownerDocument && (e = c.ownerDocument.getElementById(h)) && S(c, e) && e.id === h) return b.push(e), b } else { if (f[2]) return J.apply(b, c.getElementsByTagName(a)), b; if ((h = f[3]) && w.getElementsByClassName && c.getElementsByClassName) return J.apply(b, c.getElementsByClassName(h)), b } if (w.qsa && (!z || !z.test(a))) {
                    e = f = x; h = c; l = 9 === g && a; if (1 === g && "object" !==
                    c.nodeName.toLowerCase()) { g = T(a); (f = c.getAttribute("id")) ? e = f.replace(ta, "\\$&") : c.setAttribute("id", e); e = "[id='" + e + "'] "; for (h = g.length; h--;) g[h] = e + k(g[h]); h = fa.test(a) && m(c.parentNode) || c; l = g.join(",") } if (l) try { return J.apply(b, h.querySelectorAll(l)), b } catch (p) { } finally { f || c.removeAttribute("id") }
                }
            } return ja(a.replace(Z, "$1"), c, b, d)
        } function b() { function a(b, d) { c.push(b + " ") > v.cacheLength && delete a[c.shift()]; return a[b + " "] = d } var c = []; return a } function f(a) { a[x] = !0; return a } function e(a) {
            var c =
            y.createElement("div"); try { return !!a(c) } catch (b) { return !1 } finally { c.parentNode && c.parentNode.removeChild(c) }
        } function g(a, c) { for (var b = a.split("|"), d = a.length; d--;) v.attrHandle[b[d]] = c } function l(a, c) { var b = c && a, d = b && 1 === a.nodeType && 1 === c.nodeType && (~c.sourceIndex || ka) - (~a.sourceIndex || ka); if (d) return d; if (b) for (; b = b.nextSibling;) if (b === c) return -1; return a ? 1 : -1 } function n(a) { return function (c) { return "input" === c.nodeName.toLowerCase() && c.type === a } } function s(a) {
            return function (c) {
                var b = c.nodeName.toLowerCase();
                return ("input" === b || "button" === b) && c.type === a
            }
        } function p(a) { return f(function (c) { c = +c; return f(function (b, d) { for (var f, e = a([], b.length, c), h = e.length; h--;) if (b[f = e[h]]) b[f] = !(d[f] = b[f]) }) }) } function m(a) { return a && typeof a.getElementsByTagName !== O && a } function t() { } function k(a) { for (var c = 0, b = a.length, d = ""; c < b; c++) d += a[c].value; return d } function r(a, c, b) {
            var d = c.dir, f = b && "parentNode" === d, e = ua++; return c.first ? function (c, b, e) { for (; c = c[d];) if (1 === c.nodeType || f) return a(c, b, e) } : function (c, b, h) {
                var Y,
                g, ea = [D, e]; if (h) for (; c = c[d];) { if ((1 === c.nodeType || f) && a(c, b, h)) return !0 } else for (; c = c[d];) if (1 === c.nodeType || f) { g = c[x] || (c[x] = {}); if ((Y = g[d]) && Y[0] === D && Y[1] === e) return ea[2] = Y[2]; g[d] = ea; if (ea[2] = a(c, b, h)) return !0 }
            }
        } function B(a) { return 1 < a.length ? function (c, b, d) { for (var f = a.length; f--;) if (!a[f](c, b, d)) return !1; return !0 } : a[0] } function $(a, c, b, d, f) { for (var e, h = [], g = 0, l = a.length, p = null != c; g < l; g++) if (e = a[g]) if (!b || b(e, d, f)) h.push(e), p && c.push(g); return h } function U(a, b, d, e, h, g) {
            e && !e[x] && (e = U(e)); h &&
            !h[x] && (h = U(h, g)); return f(function (f, g, l, p) {
                var s, u, n = [], m = [], A = g.length, k; if (!(k = f)) { k = b || "*"; for (var t = l.nodeType ? [l] : l, R = [], r = 0, ra = t.length; r < ra; r++) c(k, t[r], R); k = R } k = a && (f || !b) ? $(k, n, a, l, p) : k; t = d ? h || (f ? a : A || e) ? [] : g : k; d && d(k, t, l, p); if (e) { s = $(t, m); e(s, [], l, p); for (l = s.length; l--;) if (u = s[l]) t[m[l]] = !(k[m[l]] = u) } if (f) { if (h || a) { if (h) { s = []; for (l = t.length; l--;) if (u = t[l]) s.push(k[l] = u); h(null, t = [], s, p) } for (l = t.length; l--;) if ((u = t[l]) && -1 < (s = h ? M.call(f, u) : n[l])) f[s] = !(g[s] = u) } } else t = $(t === g ? t.splice(A,
                t.length) : t), h ? h(null, g, t, p) : J.apply(g, t)
            })
        } function V(a) {
            var c, b, d, f = a.length, e = v.relative[a[0].type]; b = e || v.relative[" "]; for (var h = e ? 1 : 0, g = r(function (a) { return a === c }, b, !0), l = r(function (a) { return -1 < M.call(c, a) }, b, !0), s = [function (a, b, d) { return !e && (d || b !== aa) || ((c = b).nodeType ? g(a, b, d) : l(a, b, d)) }]; h < f; h++) if (b = v.relative[a[h].type]) s = [r(B(s), b)]; else {
                b = v.filter[a[h].type].apply(null, a[h].matches); if (b[x]) {
                    for (d = ++h; d < f && !v.relative[a[d].type]; d++); return U(1 < h && B(s), 1 < h && k(a.slice(0, h - 1).concat({
                        value: " " ===
                        a[h - 2].type ? "*" : ""
                    })).replace(Z, "$1"), b, h < d && V(a.slice(h, d)), d < f && V(a = a.slice(d)), d < f && k(a))
                } s.push(b)
            } return B(s)
        } function va(a, b) {
            var d = 0 < b.length, e = 0 < a.length, h = function (f, h, g, l, s) {
                var p, u, n, m = 0, t = "0", k = f && [], A = [], R = aa, r = f || e && v.find.TAG("*", s), ia = D += null == R ? 1 : Math.random() || 0.1, qa = r.length; for (s && (aa = h !== y && h) ; t !== qa && null != (p = r[t]) ; t++) { if (e && p) { for (u = 0; n = a[u++];) if (n(p, h, g)) { l.push(p); break } s && (D = ia) } d && ((p = !n && p) && m--, f && k.push(p)) } m += t; if (d && t !== m) {
                    for (u = 0; n = b[u++];) n(k, A, h, g); if (f) {
                        if (0 <
                        m) for (; t--;) !k[t] && !A[t] && (A[t] = wa.call(l)); A = $(A)
                    } J.apply(l, A); s && (!f && 0 < A.length && 1 < m + b.length) && c.uniqueSort(l)
                } s && (D = ia, aa = R); return k
            }; return d ? f(h) : h
        } var P, w, v, ba, la, T, ga, ja, aa, K, Q, I, y, F, E, z, N, ca, S, x = "sizzle" + -new Date, C = a.document, D = 0, ua = 0, ma = b(), na = b(), oa = b(), ha = function (a, c) { a === c && (Q = !0); return 0 }, O = "undefined", ka = -2147483648, xa = {}.hasOwnProperty, L = [], wa = L.pop, ya = L.push, J = L.push, pa = L.slice, M = L.indexOf || function (a) { for (var c = 0, b = this.length; c < b; c++) if (this[c] === a) return c; return -1 }, Z = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        za = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, Aa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, Ba = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, Ca = RegExp(":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        Da = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, da = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"), PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
            "i")
        }, Ea = /^(?:input|select|textarea|button)$/i, Fa = /^h\d$/i, W = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, fa = /[+~]/, ta = /'|\\/g, G = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, H = function (a, c, b) { a = "0x" + c - 65536; return a !== a || b ? c : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320) }; try { J.apply(L = pa.call(C.childNodes), C.childNodes), L[C.childNodes.length].nodeType } catch (Ga) {
            J = {
                apply: L.length ? function (a, c) { ya.apply(a, pa.call(c)) } : function (a, c) {
                    for (var b =
                    a.length, d = 0; a[b++] = c[d++];); a.length = b - 1
                }
            }
        } w = c.support = {}; la = c.isXML = function (a) { return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1 }; I = c.setDocument = function (a) {
            var c = a ? a.ownerDocument || a : C; a = c.defaultView; if (c === y || 9 !== c.nodeType || !c.documentElement) return y; y = c; F = c.documentElement; E = !la(c); a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () { I() }, !1) : a.attachEvent && a.attachEvent("onunload", function () { I() })); w.attributes = e(function (a) { a.className = "i"; return !a.getAttribute("className") });
            w.getElementsByTagName = e(function (a) { a.appendChild(c.createComment("")); return !a.getElementsByTagName("*").length }); w.getElementsByClassName = W.test(c.getElementsByClassName) && e(function (a) { a.innerHTML = "<div class='a'></div><div class='a i'></div>"; a.firstChild.className = "i"; return 2 === a.getElementsByClassName("i").length }); w.getById = e(function (a) { F.appendChild(a).id = x; return !c.getElementsByName || !c.getElementsByName(x).length }); w.getById ? (v.find.ID = function (a, c) {
                if (typeof c.getElementById !== O && E) {
                    var b =
                    c.getElementById(a); return b && b.parentNode ? [b] : []
                }
            }, v.filter.ID = function (a) { var c = a.replace(G, H); return function (a) { return a.getAttribute("id") === c } }) : (delete v.find.ID, v.filter.ID = function (a) { var c = a.replace(G, H); return function (a) { return (a = typeof a.getAttributeNode !== O && a.getAttributeNode("id")) && a.value === c } }); v.find.TAG = w.getElementsByTagName ? function (a, c) { if (typeof c.getElementsByTagName !== O) return c.getElementsByTagName(a) } : function (a, c) {
                var b, d = [], f = 0, e = c.getElementsByTagName(a); if ("*" === a) {
                    for (; b =
                    e[f++];) 1 === b.nodeType && d.push(b); return d
                } return e
            }; v.find.CLASS = w.getElementsByClassName && function (a, c) { if (typeof c.getElementsByClassName !== O && E) return c.getElementsByClassName(a) }; N = []; z = []; if (w.qsa = W.test(c.querySelectorAll)) e(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>"; a.querySelectorAll("[msallowclip^='']").length && z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); a.querySelectorAll("[selected]").length || z.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || z.push(":checked")
            }), e(function (a) { var b = c.createElement("input"); b.setAttribute("type", "hidden"); a.appendChild(b).setAttribute("name", "D"); a.querySelectorAll("[name=d]").length && z.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="); a.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"); a.querySelectorAll("*,:x"); z.push(",.*:") }); (w.matchesSelector = W.test(ca = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) &&
            e(function (a) { w.disconnectedMatch = ca.call(a, "div"); ca.call(a, "[s!='']:x"); N.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)") }); z = z.length && RegExp(z.join("|")); N = N.length && RegExp(N.join("|"));
            S = (a = W.test(F.compareDocumentPosition)) || W.test(F.contains) ? function (a, c) { var b = 9 === a.nodeType ? a.documentElement : a, d = c && c.parentNode; return a === d || !(!d || !(1 === d.nodeType && (b.contains ? b.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16))) } : function (a, c) { if (c) for (; c = c.parentNode;) if (c === a) return !0; return !1 }; ha = a ? function (a, b) {
                if (a === b) return Q = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; if (d) return d; d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :
                1; return d & 1 || !w.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === C && S(C, a) ? -1 : b === c || b.ownerDocument === C && S(C, b) ? 1 : K ? M.call(K, a) - M.call(K, b) : 0 : d & 4 ? -1 : 1
            } : function (a, b) {
                if (a === b) return Q = !0, 0; var d, f = 0; d = a.parentNode; var e = b.parentNode, h = [a], X = [b]; if (!d || !e) return a === c ? -1 : b === c ? 1 : d ? -1 : e ? 1 : K ? M.call(K, a) - M.call(K, b) : 0; if (d === e) return l(a, b); for (d = a; d = d.parentNode;) h.unshift(d); for (d = b; d = d.parentNode;) X.unshift(d); for (; h[f] === X[f];) f++; return f ? l(h[f], X[f]) : h[f] === C ? -1 : X[f] ===
                C ? 1 : 0
            }; return c
        }; c.matches = function (a, b) { return c(a, null, null, b) }; c.matchesSelector = function (a, b) { (a.ownerDocument || a) !== y && I(a); b = b.replace(Ba, "='$1']"); if (w.matchesSelector && E && (!N || !N.test(b)) && (!z || !z.test(b))) try { var d = ca.call(a, b); if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (f) { } return 0 < c(b, y, null, [a]).length }; c.contains = function (a, c) { (a.ownerDocument || a) !== y && I(a); return S(a, c) }; c.attr = function (a, c) {
            (a.ownerDocument || a) !== y && I(a); var b = v.attrHandle[c.toLowerCase()],
            b = b && xa.call(v.attrHandle, c.toLowerCase()) ? b(a, c, !E) : void 0; return void 0 !== b ? b : w.attributes || !E ? a.getAttribute(c) : (b = a.getAttributeNode(c)) && b.specified ? b.value : null
        }; c.error = function (a) { throw Error("Syntax error, unrecognized expression: " + a); }; c.uniqueSort = function (a) { var c, b = [], d = 0, f = 0; Q = !w.detectDuplicates; K = !w.sortStable && a.slice(0); a.sort(ha); if (Q) { for (; c = a[f++];) c === a[f] && (d = b.push(f)); for (; d--;) a.splice(b[d], 1) } K = null; return a }; ba = c.getText = function (a) {
            var c, b = "", d = 0; if (c = a.nodeType) if (1 ===
            c || 9 === c || 11 === c) { if ("string" === typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) b += ba(a) } else { if (3 === c || 4 === c) return a.nodeValue } else for (; c = a[d++];) b += ba(c); return b
        }; v = c.selectors = {
            cacheLength: 50, createPseudo: f, match: da, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: {
                ATTR: function (a) {
                    a[1] = a[1].replace(G, H); a[3] = (a[3] || a[4] || a[5] || "").replace(G, H); "~=" ===
                    a[2] && (a[3] = " " + a[3] + " "); return a.slice(0, 4)
                }, CHILD: function (a) { a[1] = a[1].toLowerCase(); "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]); return a }, PSEUDO: function (a) { var c, b = !a[6] && a[2]; if (da.CHILD.test(a[0])) return null; if (a[3]) a[2] = a[4] || a[5] || ""; else if (b && Ca.test(b) && (c = T(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length)) a[0] = a[0].slice(0, c), a[2] = b.slice(0, c); return a.slice(0, 3) }
            }, filter: {
                TAG: function (a) {
                    var c =
                    a.replace(G, H).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === c }
                }, CLASS: function (a) { var c = ma[a + " "]; return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && ma(a, function (a) { return c.test("string" === typeof a.className && a.className || typeof a.getAttribute !== O && a.getAttribute("class") || "") }) }, ATTR: function (a, b, d) {
                    return function (f) {
                        f = c.attr(f, a); if (null == f) return "!=" === b; if (!b) return !0; f += ""; return "=" === b ? f === d : "!=" === b ?
                        f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && -1 < f.indexOf(d) : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? -1 < (" " + f + " ").indexOf(d) : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1
                    }
                }, CHILD: function (a, c, b, d, f) {
                    var e = "nth" !== a.slice(0, 3), h = "last" !== a.slice(-4), g = "of-type" === c; return 1 === d && 0 === f ? function (a) { return !!a.parentNode } : function (c, b, l) {
                        var s, p, u, n, t; b = e !== h ? "nextSibling" : "previousSibling"; var m = c.parentNode, A = g && c.nodeName.toLowerCase(); l = !l && !g; if (m) {
                            if (e) {
                                for (; b;) {
                                    for (p = c; p = p[b];) if (g ? p.nodeName.toLowerCase() ===
                                            A : 1 === p.nodeType) return !1; t = b = "only" === a && !t && "nextSibling"
                                } return !0
                            } t = [h ? m.firstChild : m.lastChild]; if (h && l) { l = m[x] || (m[x] = {}); s = l[a] || []; n = s[0] === D && s[1]; u = s[0] === D && s[2]; for (p = n && m.childNodes[n]; p = ++n && p && p[b] || (u = n = 0) || t.pop() ;) if (1 === p.nodeType && ++u && p === c) { l[a] = [D, n, u]; break } } else if (l && (s = (c[x] || (c[x] = {}))[a]) && s[0] === D) u = s[1]; else for (; p = ++n && p && p[b] || (u = n = 0) || t.pop() ;) if ((g ? p.nodeName.toLowerCase() === A : 1 === p.nodeType) && ++u) if (l && ((p[x] || (p[x] = {}))[a] = [D, u]), p === c) break; u -= f; return u === d ||
                            0 === u % d && 0 <= u / d
                        }
                    }
                }, PSEUDO: function (a, b) { var d, e = v.pseudos[a] || v.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a); return e[x] ? e(b) : 1 < e.length ? (d = [a, a, "", b], v.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function (a, c) { for (var d, f = e(a, b), h = f.length; h--;) d = M.call(a, f[h]), a[d] = !(c[d] = f[h]) }) : function (a) { return e(a, 0, d) }) : e }
            }, pseudos: {
                not: f(function (a) {
                    var c = [], b = [], d = ga(a.replace(Z, "$1")); return d[x] ? f(function (a, c, b, f) { f = d(a, null, f, []); for (var e = a.length; e--;) if (b = f[e]) a[e] = !(c[e] = b) }) :
                    function (a, f, e) { c[0] = a; d(c, null, e, b); return !b.pop() }
                }), has: f(function (a) { return function (b) { return 0 < c(a, b).length } }), contains: f(function (a) { a = a.replace(G, H); return function (c) { return -1 < (c.textContent || c.innerText || ba(c)).indexOf(a) } }), lang: f(function (a) {
                    Da.test(a || "") || c.error("unsupported lang: " + a); a = a.replace(G, H).toLowerCase(); return function (c) {
                        var b; do if (b = E ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return b = b.toLowerCase(), b === a || 0 === b.indexOf(a + "-"); while ((c = c.parentNode) &&
                        1 === c.nodeType); return !1
                    }
                }), target: function (c) { var b = a.location && a.location.hash; return b && b.slice(1) === c.id }, root: function (a) { return a === F }, focus: function (a) { return a === y.activeElement && (!y.hasFocus || y.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex) }, enabled: function (a) { return !1 === a.disabled }, disabled: function (a) { return !0 === a.disabled }, checked: function (a) { var c = a.nodeName.toLowerCase(); return "input" === c && !!a.checked || "option" === c && !!a.selected }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (6 > a.nodeType) return !1; return !0 }, parent: function (a) { return !v.pseudos.empty(a) }, header: function (a) { return Fa.test(a.nodeName) }, input: function (a) { return Ea.test(a.nodeName) }, button: function (a) { var c = a.nodeName.toLowerCase(); return "input" === c && "button" === a.type || "button" === c }, text: function (a) { var c; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (c = a.getAttribute("type")) || "text" === c.toLowerCase()) }, first: p(function () { return [0] }),
                last: p(function (a, c) { return [c - 1] }), eq: p(function (a, c, b) { return [0 > b ? b + c : b] }), even: p(function (a, c) { for (var b = 0; b < c; b += 2) a.push(b); return a }), odd: p(function (a, c) { for (var b = 1; b < c; b += 2) a.push(b); return a }), lt: p(function (a, c, b) { for (c = 0 > b ? b + c : b; 0 <= --c;) a.push(c); return a }), gt: p(function (a, c, b) { for (b = 0 > b ? b + c : b; ++b < c;) a.push(b); return a })
            }
        }; v.pseudos.nth = v.pseudos.eq; for (P in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) v.pseudos[P] = n(P); for (P in { submit: !0, reset: !0 }) v.pseudos[P] = s(P); t.prototype = v.filters =
        v.pseudos; v.setFilters = new t; T = c.tokenize = function (a, b) { var d, f, e, h, g, l, p; if (g = na[a + " "]) return b ? 0 : g.slice(0); g = a; l = []; for (p = v.preFilter; g;) { if (!d || (f = za.exec(g))) f && (g = g.slice(f[0].length) || g), l.push(e = []); d = !1; if (f = Aa.exec(g)) d = f.shift(), e.push({ value: d, type: f[0].replace(Z, " ") }), g = g.slice(d.length); for (h in v.filter) if ((f = da[h].exec(g)) && (!p[h] || (f = p[h](f)))) d = f.shift(), e.push({ value: d, type: h, matches: f }), g = g.slice(d.length); if (!d) break } return b ? g.length : g ? c.error(a) : na(a, l).slice(0) }; ga = c.compile =
        function (a, c) { var b, d = [], f = [], e = oa[a + " "]; if (!e) { c || (c = T(a)); for (b = c.length; b--;) e = V(c[b]), e[x] ? d.push(e) : f.push(e); e = oa(a, va(f, d)); e.selector = a } return e }; ja = c.select = function (a, c, b, d) {
            var f, e, h, g, l = "function" === typeof a && a, p = !d && T(a = l.selector || a); b = b || []; if (1 === p.length) {
                e = p[0] = p[0].slice(0); if (2 < e.length && "ID" === (h = e[0]).type && w.getById && 9 === c.nodeType && E && v.relative[e[1].type]) { if (c = (v.find.ID(h.matches[0].replace(G, H), c) || [])[0]) l && (c = c.parentNode); else return b; a = a.slice(e.shift().value.length) } for (f =
                da.needsContext.test(a) ? 0 : e.length; f--;) { h = e[f]; if (v.relative[g = h.type]) break; if (g = v.find[g]) if (d = g(h.matches[0].replace(G, H), fa.test(e[0].type) && m(c.parentNode) || c)) { e.splice(f, 1); a = d.length && k(e); if (!a) return J.apply(b, d), b; break } }
            } (l || ga(a, p))(d, c, !E, b, fa.test(a) && m(c.parentNode) || c); return b
        }; w.sortStable = x.split("").sort(ha).join("") === x; w.detectDuplicates = !!Q; I(); w.sortDetached = e(function (a) { return a.compareDocumentPosition(y.createElement("div")) & 1 }); e(function (a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function (a, c, b) { if (!b) return a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2) }); (!w.attributes || !e(function (a) { a.innerHTML = "<input/>"; a.firstChild.setAttribute("value", ""); return "" === a.firstChild.getAttribute("value") })) && g("value", function (a, c, b) { if (!b && "input" === a.nodeName.toLowerCase()) return a.defaultValue }); e(function (a) { return null == a.getAttribute("disabled") }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        function (a, c, b) { var d; if (!b) return !0 === a[c] ? c.toLowerCase() : (d = a.getAttributeNode(c)) && d.specified ? d.value : null }); "function" === typeof q && q.amd ? q(function () { return c }) : "undefined" !== typeof module && module.exports ? module.exports = c : a.Sizzle = c
    })(window); b.browser = function () {
        var a, c = {}, d = navigator.userAgent.toLowerCase().replace(/\s*[()]\s*/g, "; ").replace(/(\/[\w.]+)\s+/g, "$1; ").replace(/\;\s*$/, "").split(/;\s*/); b.each(d, function (b) {
            a = (/[\/ :]([^\/ :]+)$/.exec(b) || [])[1]; c[a ? b.substr(0, b.length - a.length -
            1).replace(/\d*$/, "") : b] = a || !0
        }); return { aol: c.aol, blackberry: c.blackberry, firefox: c.firefox, ie: Boolean(c.msie || c.trident), ios: Boolean(c.mobile && c.safari), opera: c.opera, playstation: c.playstation, version: parseFloat(c.version || c.crios || c.msie || c.rv || c.firefox) || !1 }
    }(); b.harmony = { PASSIVE: 1, UNSAFE_QUIRKSMODE_EVENTS: 0.5, COMMERCIAL_LINK_EVENTS: 0.1, LINK_EVENTS: -1, AGGRESSIVE: -1 }; b.harmony.DEFAULT = 0; b.pii = function () {
        var a = { email: /[A-Z0-9._%+-]+(?:%(?:25)*40|@)[A-Z0-9.-]+\.[A-Z]{2,4}/, numeric: /\d([^0-9A-Z]{0,4}\d){6,18}/ },
        c = { contains: function (a, c) { return this.regexp(c).test(a) }, redact: function (a, c) { return a.replace(this.regexp(c), "___") }, regexp: function (c) { c = b.extend({}, c); var f = b.map(b.all(a, function (a, b) { return !1 !== c[b] }), function (a) { return a.source }); return RegExp("(\\b" + f.join("\\b|\\b") + "\\b)", "gi") }, transmits: function (a, c) { return this.contains(a + " " + document.referrer, c || { numeric: !1 }) } }; return { contains: b.bind(c.contains, c), redact: b.bind(c.redact, c), transmits: b.bind(c.transmits, c) }
    }(); b.platforms = function () {
        var a =
        {
            NONE: { id: "full", scope: "body", spec: { selector: "body" } }, bbp: { spec: { parser: /^post-(\d+)$/, selector: "div[id^='post-']" }, scope: "li .post" }, hdlr: { spec: { parser: /^post_(\d+)$/, selector: "div[id^='post_']" }, scope: ".post-content-area" }, ipb: { spec: { parser: /^post_id_(\d+)$/, selector: "div[id^='post_id_']" }, scope: ".post_body .post" }, phpb: { spec: { parser: /^p(\d+)$/, selector: "div.post[id^='p']" }, scope: ".postbody .content,.postbody .signature" }, ubb: {
                spec: { parser: /^number(\d+)$/, parse_el: "span[id^=number]", selector: "a[name^='Post'] ~ table" },
                scope: ".post_inner *[id^='body'],.post_inner .signature"
            }, vb3: { spec: { parser: /^post_message_(\d+)$/, selector: "div[id^='post_message_'], table[id^='post_message_'],section[id^='post_message_']" }, scope: "div[id^='post_message_'],div[id^='post_message_'] ~ div:not([class])" }, vb4: { spec: { parser: /^post_(\d+)$/, selector: "li[id^='post_']" }, scope: ".post-content,.postbody .content,.postbody .signature,ul.conversation-list .list-item-body" }, wppr: {
                spec: {
                    attributes: ["id", "className"], parser: /(?:^|\s)post-(\d+)(?:\s|$)/,
                    selector: "article[class*='post-'], div[id^='post-']"
                }
            }
        }, c = {
            getPostId: function (a) { var c, e; if (this === b.platforms.NONE) return " "; e = this.spec.parse_el ? b.select(this.spec.parse_el, a)[0] : a; b.find(this.spec.attributes || ["id"], b.bind(function (a) { c = e[a] ? e[a].match(this.spec.parser) : null; return Boolean(c) }, this)); if (c) return c[1] }, getPostIds: function (a) { var c = []; b.each(this.getPosts(a), b.bind(function (a) { (a = this.getPostId(a)) && !b.contains(c, a) && c.push(a) }, this)); return c.length ? c : null }, getPosts: function (a) {
                var c =
                []; !a && (document && document.body) && (a = [document.body]); a && this.spec && (c = b.withScope(a, this.spec.selector, { consolidate: !0 })); return c
            }
        }; b.each(a, function (d, f) { d.id = d.id || f; b.each(c, function (a, c) { d[c] = b.bind(a, d) }); a[f] = d }); a.DEFAULT_POST_ID = " "; a.findById = function (a) { return b.find(b.platforms, function (c) { return c.id === a }) }; return a
    }(); b.observer = function () {
        var a = [], c = 0, d = function (a) {
            var d = { attributes: !1, characterData: !1, childList: !1, subtree: !0 }; c || (a.opts.attributes && (d = b.extend(d, { attributes: !0 }),
            "array" === b.type(a.opts.attributes) && (d = b.extend(d, { attributeFilter: a.opts.attributes }))), a.opts.content && (d = b.extend(d, { characterData: !0, childList: !0 })), a.observer.observe(a.context, d))
        }; return {
            start: function (c, e, g) {
                c.document && (c = c.document); e = b.extend({ attributes: !1, content: !0 }, e); b.traits.mutation && b.contains(["document", "element"], b.type(c)) && (c = {
                    context: c, opts: e, observer: new MutationObserver(b.entryPoint(function (a) {
                        var c = []; b.each(a, function (a) {
                            var d = []; "characterData" === a.type ? a.target && (d =
                            [a.target]) : "attributes" === a.type ? d = [a.target] : a.addedNodes && a.addedNodes.length && (d = b.toArray(a.addedNodes)); d.length && (c = c.concat(d))
                        }); 0 < c.length && g(c)
                    }))
                }, a.push(c), d(c))
            }, pause: function () { c++; b.each(a, function (a) { a.observer.disconnect() }) }, resume: function () { c--; b.each(a, d) }
        }
    }(); b.traits = {
        basicCompatibility: !(b.browser.blackberry || b.browser.playstation), cors: window.XMLHttpRequest && void 0 !== (new window.XMLHttpRequest).withCredentials, crossWindowCommunication: !b.browser.ios, fastRegexp: !b.browser.firefox,
        json: Boolean(window.JSON) && Boolean(window.JSON.stringify) && Boolean(window.JSON.parse), jsRedirectSetsReferrer: b.browser.aol || !(b.browser.ie || b.browser.opera), mutation: window.MutationObserver && !b.browser.ie, performanceTiming: Boolean(window.performance && window.performance.timing), referrerPolicy: !b.browser.ie, quirksMode: !Boolean(window.addEventListener), windowLevelHandlers: Boolean(window.addEventListener)
    }; var g, m, n, r; e = {
        EVENT_LEVEL_LINK: 1, EVENT_LEVEL_TOP: 2, PLUGIN_MANUAL: 1, TYPE_ACCEPTABLE: "l", allowed: b.generateNodeFilter({
            classes: ["norewrite"],
            rels: ["norewrite"], tags: "applet embed object head img input link meta param select button iframe option script style svg textarea title".split(" ")
        }), api: function () {
            var a, c, d, f = function () { var a = { optimize: "content", domains: "content" }; return function (c, d, f) { var e = b.toArray(arguments).slice(3, arguments.length), h = a[c]; Boolean(h) && (f = b.extend({}, f, { json_payload: h })); var h = c, l = u(f), n; n = b.extend(b.commonParams(c, g), d); n.subId && n.key !== g.key && (n.subId = null); return { data: e, method: h, opts: l, params: n } } }(), e = function (a) {
                var c =
                {}, d = {}; b.each(a, function (a) { var f = a[0], e = a[1], h = a[2] || {}; a = b.toArray(a).slice(3, a.length); d[f] = b.mergeParams(d[f] || b.commonParams(f, g), e); c[f] = c[f] || []; c[f].push({ data: a, opts: u(h) }) }); return { calls: c, params: d }
            }, u = function (a) {
                a = a || {}; "function" === b.type(a.fn) && (a.fn = function (c) {
                    return function (d) {
                        var f, e = d.response ? d.response[0] : null; "object" === b.type(e) && ("array" === b.type(e.crawl) && "object" === b.type(r.crawler) && "function" === b.type(r.crawler.crawl)) && (f = b.map(e.crawl, function (a) { return a + "" }), delete e.crawl,
                        r.crawler.crawl(f)); return c.apply(a, arguments)
                    }
                }(a.fn)); return a
            }, l = function (a) { var c = a.opts.base_url || g.api_url, d = a.opts.path || "/" + a.method; delete a.opts.base_url; return b.request.apply(b, [c + d, a.params, a.opts].concat(a.data)) }, n = function (a, c, d) { b.each(c, function (c) { c && (c.opts && c.opts.fn && a) && c.opts.fn({ response: b.packageArgs(a), data: c.data, args: d }) }) }; a = function () {
                var a = function (a) {
                    var c = a.data[0].params, d = a.data[0].calls; a = b.fromJSON(a.response[0]) || {}; b.each(a, function (a, f) {
                        var e = c[f], h = d[f],
                        g; if ("string" === b.type(a) && (g = a.match(/^[^(]+\((.*)\);?\s*$/))) a = b.fromJSON(g[1]); n(a, h, e)
                    })
                }; return function (c) { c = e(c, !0); l({ data: c, method: "batch", params: b.extend(b.commonParams("batch", g), c.params), opts: { json_payload: "batch", jsonp: !1, fn: b.bind(a, window) } }) }
            }(); c = function (a, c, d) {
                var g = e(a, !1); a = b.reduce({}, g.calls[d], function (a, c) { return { jsonp: a.jsonp || !c.opts || !1 !== c.opts.jsonp, ssl: a.ssl || !c.opts || !1 !== c.opts.ssl } }); return l(f(c, g.params[c], {
                    fn: function (a) { n(a.response[0], g.calls[c], g.params[c]) },
                    jsonp: a.jsonp, ssl: a.ssl
                }, g))
            }; d = function () { return l(f.apply(this, arguments)) }; return b.batchable(function () { var f, e; return b.batched(arguments) ? (f = b.batchArgs(arguments), e = b.batchCallType(f), "batch" === e ? a.call(this, f) : c.call(this, f, e)) : d.apply(this, arguments) }, function () { return { batch: g.batch_calls, timeout: g.batch_call_timeout } })
        }(), addEventListener: function (a, c) { this.fire(a, c) }, click: function () {
            var a = function (a, c) {
                if ("_self" === c) return a; if (b.traits.crossWindowCommunication && b.traits.jsRedirectSetsReferrer) {
                    var e =
                    a.open("", c); e.focus(); return e
                }
            }, c = function (a) {
                var c = a.previousSibling, h = a.nextSibling, g = ["", a.textContent, ""], l = function (a, c) { for (var b = a, d = b.data; (b = b[c + "Sibling"]) && 3 === b.nodeType;) d += b.data; return d }, n = function (a, c, b) {
                    a = a.replace(/\s+/g, " "); c = c.replace(/\s+/g, " "); b = b.replace(/\s+/g, " "); a = a.replace(/^\s+/, ""); " " === c.substr(0, 1) && (c = c.substr(1), a += " " !== a.substr(a.length - 1, 1) ? " " : ""); " " === c.substr(c.length - 1, 1) && (c = c.substr(0, c.length - 1), b = (" " !== b.substr(0, 1) ? " " : "") + b); b = b.replace(/\s+$/,
                    ""); return [a, c, b]
                }; void 0 !== g[1] && (g[0] = c && 3 === c.nodeType ? l(c, "previous") : "", g[2] = h && 3 === h.nodeType ? l(h, "next") : "", g = n.apply(this, g), "" !== g[0] && "" !== g[2] && (g[0] = g[0].split(" ").reverse().slice(0, 10 + (" " === g[0].substr(g[0].length - 1, 1) ? 1 : 0)).reverse().join(" "), g[2] = g[2].split(" ").slice(0, 10).join(" "), a = { type: "context", itype: (b.cache(a, "params") || {}).type, before: g[0], after: g[2], txt: g[1], loc: location.href, out: b.getActualHref(a), v: 2 }, e.log("info", b.toQuery(a))))
            }; return function (d, f) {
                var e, n, l, m, s =
                {}, p = b.context(d) || window; f = d.target || f; f = !f || f === p.name || "_top" === f && p.top === p || "_parent" === f && p.parent === p ? "_self" : f; l = a(p, f); if ("_self" !== f && (!b.traits.crossWindowCommunication || !b.traits.jsRedirectSetsReferrer)) m = "go"; else try { if (void 0 === l.document) throw !0; m = "jsonp" } catch (k) { m = "go" } e = b.destructing(b.apiCallback(function () { g.time_api && this.logEvent.stop("clk"); var a = b.toArray(arguments); a.unshift(d, l, f); this.onApiClick.apply(this, a) }, this)); b.cache(this, "link", "string" === typeof d ? d : b.getActualHref(d));
                if ("string" === typeof d && (d = b.createA(d, f), !this.processLink(d)) || !g.enabled) return e(); !b.traits.referrerPolicy && this.isPrivate(d) && (m = "go", s = b.extend(s, { base_url: g.asset_url })); n = this.clickParams(d, m); g.time_api && this.logEvent.start("clk"); g.log_context && c(d); if ("go" === m) n = this.redirectUrl(n, s), this.redirect(n, p, l, f); else if (l === p) this.api.now("click", n, b.extend(s, { fn: e, timeout: g.click_timeout })); else {
                    if (b.contextIsAncestor(p, l)) return this.redirect(b.getActualHref(d), p, l, f); e = b.entryPoint(e); setTimeout(function () { e() },
                    g.click_timeout); l.document.open(); l.callback = e; l.document.write("<html><head><title>" + b.getActualHref(d) + '</title><script type="text/javascript" src="' + this.api.now("click", n, b.extend(s, { fn: "callback", "return": !0 })) + '">\x3c/script></head></html>'); l.document.close()
                }
            }
        }(), clickParams: function (a, c) {
            var d = b.extend(b.cache(a, "params"), {
                format: c, out: b.getActualHref(a), ref: window.document.referrer || null, reaf: g.reaffiliate || null, title: window.document.title, txt: a.innerHTML, loAsUuid: b.cache(a, "uuid") || null,
                rewrit: b.cache(a, "rewrit")
            }); 128 < d.txt.length && (d.txt = d.txt.replace(/<[^>]+>/g, ""), d.txt = 128 < d.txt.length ? d.txt.substr(0, 125) + "..." : d.txt); return d
        }, detectFiltering: function () {
            var a; try {
                a = {}, a = new function () {
                    this.detect = function (a, c) {
                        function b(a, c) { 0 == n || 1E3 < c ? a(0 == n && g) : setTimeout(function () { b(a, 2 * c) }, 2 * c) } function e() { --n || (g = !m && p) } var g = !1, n = 2, m = !1, p = !1; if ("function" == typeof c) {
                            a += "?ch=*&rn=*"; var k = 11 * Math.random(), t = new Image; t.onload = e; t.onerror = function () { m = !0; e() }; t.src = a.replace(/\*/, 1).replace(/\*/,
                            k); t = new Image; t.onload = e; t.onerror = function () { p = !0; e() }; t.src = a.replace(/\*/, 2).replace(/\*/, k); b(c, 250)
                        }
                    }
                }
            } catch (c) { a = { detect: function (a, c) { c(!0) } } } return function (c) { var f = b.updateUrl(g.asset_url, { pathname: "/images/pixel.gif" }); a.detect(f, c) }
        }(), enabled: function () { if (g.enabled && n !== window && window.vglnk && (window.vglnk.key || "function" === typeof window.vglnk)) g.enabled = !1; return g.enabled }, expose: function () {
            return function (a, c) {
                if ((c = c || this[a]) && !r[a]) {
                    var d = r, f; f = c; f = "function" === b.type(f) ? b.entryPoint(b.bind(f,
                    e)) : f; d[a] = f
                }
            }
        }(), fire: function () { var a = {}; return function (c, d) { c = c.toLowerCase(); var f = a[c] || { fired: !1, listeners: [] }; "function" === typeof d ? f.fired ? setTimeout(function () { d({ type: c }) }, 0) : f.listeners.push(d) : (f.fired = !0, b.each(f.listeners, function (a) { "function" === typeof a && a({ type: c }) }), f.listeners = []); a[c] = f } }(), handleRightClick: function (a, c) {
            if (g.rewrite_modified && a && c) switch (c) {
                case "setup": b.cache(a, "href") || b.cache(a, "href", a.href); a.href = this.redirectUrl(this.clickParams(a, "go")); setTimeout(b.entryPoint(b.bind(function () {
                    this.handleRightClick(a,
                    "teardown")
                }, this)), 0); break; case "teardown": b.cache(a, "href") && (a.href = b.cache(a, "href"))
            }
        }, harmony: function (a) { return g.harmony_level <= a }, init: function () {
            var a = function () { var a = !0 === window.document.__v5k; window.document.__v5k = !0; return !a }; return function () {
                var c = this; m = {}; if (a()) {
                    try { c.initLibEvents(), c.initNamespace(), c.initOptions() } catch (d) { } b.exceptionLogger(b.bind(c.logException, c), !g.dev); b.each(g.script_timeout); return b.entryPoint(function () {
                        c.initProcessors(); c.initDRApi(); c.initApi();
                        c.enabled() && (c.initLegacyCallbacks(), c.ping())
                    })()
                }
            }
        }(), initApi: function () {
            var a, c = {}; if (window.vglnk) for (a in window.vglnk) "_plugin" === a.substr(-7) && (c[a] = window.vglnk[a]); r = n[k] = b.noop; this.expose("click"); this.expose("link", b.bind(function (a) { "element" === b.type(a) && a.href && (this.initContext(b.context(a)), this.processLink(a)) }, this)); this.expose("open", b.bind(this.click, this)); this.expose("$", b.clone(b)); this.expose("api"); this.expose("api_now", b.bind(this.api.now, this.api)); this.expose("harmony");
            this.expose("opt"); this.expose("platform"); this.expose("registerProcessor", function () { if (0 < arguments.length) return e.registerProcessor.apply(e, arguments) }); this.expose("sendLinks"); b.extend(r, r === window.vglnk ? c : {})
        }, initContext: function () { var a = []; return function (c) { if (void 0 === c) return a; c && !b.contains(a, c) && (a.push(c), this.initLinks(c), this.initEvents(c)) } }(), initDomObserver: function (a, c) {
            b.observer.start(a, c, b.batchable(function (a) {
                b.batched(arguments) && (a = b.reduce([], b.batchArgs(arguments, 0),
                function (a, c) { return a.concat(c) })); a = b.all(b.unique(a), function (a) { return Boolean(a.parentNode) && e.allowed(a) }); 0 < a.length && (b.each(b.withScope(a, "a[href]", { ancestors: !1 }), function (a) { e.processLinks(a[1]) }), b.each(m, function (c, b) { c.opts.mode !== e.PLUGIN_MANUAL && e.runPlugin(b, a) }))
            }, function () { return { batch: g.batch_mutation, timeout: g.batch_mutation_timeout } }))
        }, initDRApi: function () {
            var a = !1; window.DrivingRevenue = b.entryPoint(b.destructing(b.bind(function () {
                a = !0; g.dr_key = window.DR_id; this.enabled() &&
                this.ping()
            }, this))); b.on("DOMReady", function () { if (!a) try { delete window.DrivingRevenue } catch (c) { window.DrivingRevenue = void 0 } })
        }, initEvents: function (a) {
            var c = b.traits.windowLevelHandlers ? a : a.document, d = function (c) { c = c || a.event; if ((c = b.eventLink(c)) && !b.cache(c, "evented")) h(e.EVENT_LEVEL_LINK, c), b.cache(c, "evented", !0) }, f = function (a, c) { return function () { var d = [a].concat(b.toArray(arguments)); c.apply(e, d) } }, h = function (a, c) { b.on(c, "click", f(a, e.onClick)); b.on(c, "contextmenu", f(a, e.onContextmenu)) }; if (g.dynamic) b.on("DOMReady",
            function () { e.initDomObserver(a); g.dynamic_scope && b.each(b.select(g.dynamic_scope, a.document), function (a) { e.initDomObserver(a, { attributes: ["class", "id", "style"], content: !1 }) }) }); b.on(c, "copy", b.bind(e.onCopy, e)); b.on(c, "mousedown", d); b.on("DOMReady", function () { b.each(a.document.links, function (a) { b.on(a, "mousedown", d) }) }); (!b.traits.quirksMode || e.harmony(b.harmony.UNSAFE_QUIRKSMODE_EVENTS)) && h(e.EVENT_LEVEL_TOP, c)
        }, initLegacyOptions: function () {
            var a, c = {
                DR_id: "dr_key", vglnk_api_key: "key", vglnk_cuid: "cuid",
                vglnk_domain: "api_url", vglnk_reaf: "reaffiliate", vglnk_subid: "sub_id"
            }; for (a in c) void 0 !== window[a] && (r[c[a]] = window[a], "vglnk_domain" === a && (r[c[a]] += "/api"))
        }, initLegacyCallbacks: function () { var a, c = { vl_cB: b.bind(this.onApiClick, this), vl_disable: function () { g.enabled = !1 } }; for (a in c) window[a] = c[a] }, initLibEvents: function () { b.on(e); b.ready(b.bind(function () { this.fire("DOMReady") }, this)) }, initLinks: function (a) {
            var c = b.bind(function (a) { this.processLinks(b.toArray(a.document.links)) }, this); void 0 === a ?
            b.each(this.initContext(), c) : c(a)
        }, initNamespace: function () { window.vglnk && window.vglnk.key && (k = "vglnk"); var a = window, c = k.split("."), b; for (k = c.pop() ; 0 < c.length;) b = c.shift(), a[b] = a[b] || {}, a = a[b]; n = a; r = n[k] = n[k] || {} }, initOptions: function () {
            var a; this.initLegacyOptions(); g = b.extend(this.publicOptions({
                anywhere_url: "http://redirect.viglink.com", api_url: "http://api.viglink.com/api", asset_url: "http://cdn.viglink.com/api", cuid: null, dev: !1, dr_key: null, enabled: b.traits.basicCompatibility, key: null, link_urls: !0, partner: null,
                platform: b.platforms.NONE.id, sub_id: null, reaffiliate: !1, commercial: null, harmony_level: b.harmony.DEFAULT, link_target: null, private_domains: null, rewrite_any: !0, rewrite_modified: !1, rewrite_original: !0
            }), g, r, {
                batch_calls: !0, batch_call_timeout: 100, batch_links: !1, batch_mutation: !0, batch_mutation_timeout: 250, click_timeout: 1E3, declare_handler: !1, dynamic: !0, dynamic_scope: null, hop_timeout: 2E3, debug: !1, library_id: null, links_version: 3.2, log_context: !0, links_merge_timeout: 75, nofollow: {}, norewrite: {}, script_timeout: 2E3,
                time_log_timeout: 3E3, time_api: !1, time_load: !1, testing_js: [], plugins: { crawler: {}, harmony: {}, link_affiliation: {}, modified_clicks: {} }
            }); for (a in g) "_plugin" === a.substr(-7) && delete g[a]
        }, initPlugins: function () {
            var a, c = 1, d = { link_affiliation: "convert", link_optimization: "optimize", page_harmony: "harmony", partner_integration: "partners", product_linker: "insert", product_widget: "spotlight" }, f = ["spotlight"], h = ["harmony"], n = function (b) {
                return function (b) {
                    return function () {
                        delete m[b].opts.mode; c = 1; clearTimeout(a);
                        k()
                    }
                }(b)
            }, l = function (a) { var c; b.find(d, function (a, b) { return "insert" === a && (c = b) }); a[c] || (a[c] = { enabled: !0, key: g.key, link_phrases: !1 }); a[c].link_urls = g.link_urls; return a }, k = function () {
                var d = { _ran: !1, init: b.noop, initDocuments: b.noop, initNodes: b.noop, "public": {} }, f = function (a, c) {
                    a.setup = a.setup || (window.vglnk ? window.vglnk[c + "_plugin"] : null); "function" === b.type(a.setup) && (Boolean(a.initDocuments) || (a = b.extend(a, d, a.setup(a.opts, b.clone(b), r, l(g.key))), a["public"] && e.expose(c, a["public"], !1)), a.opts.mode !==
                    e.PLUGIN_MANUAL && e.runPlugin(c))
                }, l = function (a) { var c = function () { if (a) { var c = b.toArray(arguments); c.unshift("custom", a); e.log.apply(this, c) } }; c.event = e.logEvent; return c }, n = function (a) { return !Boolean(a._ran) }; a = null; b.each(h, function (a) { var c = m[a]; c && !Boolean(c._ran) && f(c, a) }); b.each(b.all(m, n), f); b.find(m, n) && (a = setTimeout(b.entryPoint(k), Math.min(Math.max(Math.pow(2, ++c), 100), 5E3)))
            }, s = function () { setTimeout(function () { e.api.flush() }, 100); k(); b.on("DOMReady", function () { setTimeout(e.api.flush, 0) }) };
            return function (a) { a = l(a); b.each(a, b.bind(function (a, c) { c = d[c] || c; "object" === typeof a && !1 !== a.enabled && (m[c] = { opts: a }, b.contains(f, c) && b.jsonp(this.opt("asset_url") + "/plugins/" + c + ".js"), a.mode === this.PLUGIN_MANUAL && this.expose("init_" + c, n(c))) }, this)); s() }
        }(), initProcessors: function () {
            this.registerProcessor(function (a) {
                var c; c = b.createA(g.api_url); if ("/api/click" === a.pathname && (a.hostname === c.hostname || a.hostname.match(/(^|\.)(api|cdn|apicdn)\.viglink\.com$/))) c = b.fromQuery(a.search), void 0 !== c.out &&
                (a.href = c.out, delete c.out, b.cache(a, "params", c))
            }); this.registerProcessor(function (a) { g.nofollow[a.href] && !b.hasRel(a, "nofollow") && (a.rel = (a.rel ? a.rel + " " : "") + "nofollow") }); this.registerProcessor(function (a) { g.declare_handler && b.attributes(a, { "data-hl": "viglink" }) }); this.registerProcessor(function (a) { window.IPBoard && (window.IPBoard.prototype && window.IPBoard.prototype.delegate && b.hasRel(a, "external")) && (a.rel = a.rel.replace(/(^| )external( |$)/, ""), a.target = "_blank") })
        }, isCommercial: function (a) {
            a =
            b.canonicalizeHostname(a); return "object" === b.type(g.commercial) && g.commercial[a]
        }, isPrivate: function (a) { if ("array" !== b.type(g.private_domains)) return !1; var c = b.canonicalizeHostname(a); return b.find(g.private_domains, function (a) { return RegExp("(^|\\.)" + b.escapeRegExp(a) + "$", "i").test(c) }) }, isRewritable: function () {
            var a = b.canonicalizeHostname(document.location), c = b.generateNodeFilter({
                rels: ["noskim"], custom: function (c) {
                    var f = b.canonicalizeHostname(c), h = "", n = !1; try { h = c.protocol, f.charAt(0) } catch (l) { return !0 } n =
                    Boolean("" === f || !h.match(/^https?:$/i) || g.norewrite[f]); if (h = !n) var h = b.cache(c, "type"), m = b.cache(c, "params") || {}, h = !Boolean(h || m.type); h && (n = Boolean(a === f || !g.rewrite_original || !g.rewrite_any && !e.isCommercial(c))); return n
                }
            }); return function (a) { return this.allowed(a) && c(a, { ancestors: !1 }) }
        }(), log: function (a, c, d, e) {
            var h, n = b.toQuery({ libId: g.library_id, nocache: b.uniqid() }); h = "pixel.gif"; if ("custom" === a) n += "&" + b.toQuery({ key: c, type: d }), b.each("array" === b.type(e) ? e : [e], function (a) {
                b.each(["e", "i", "o"],
                function (c) { delete a[c] }); n += "&" + b.toQuery(a)
            }); else { n += "&" + b.toQuery({ key: g.key, drKey: g.key ? null : g.dr_key, subId: g.sub_id }); if ("time" === a && b.traits.json) h = "time.gif", a = { e: b.toJSON(c), v: 2 }; else if ("exception" === a) a = { e: c, o: d }; else if ("info" === a) a = { i: c }; else return; n += "&" + b.toQuery(a) } h = g.api_url + "/" + h + "?" + n; b.pii.transmits(h) || (b.createEl("img").src = h)
        }, logEvent: function () {
            var a = {}, c = b.time(), d = b.traits.performanceTiming ? window.performance.timing.domLoading : null, f = b.batchable(function () {
                var a; a = b.batched(arguments) ?
                b.batchArgs(arguments) : [arguments]; a = b.map(a, function (a) { return b.prune({ event: a[0], time: a[1], total: a[2] }) }); a.length && e.log("time", a)
            }, function () { return { timeout: g.time_log_timeout } }); return { start: function (c) { a[c] = a[c] || { logged: 0, times: [] }; a[c].times.push(b.time()) }, stop: function (c) { var e, g, n = b.time(); a[c] && (a[c].times && a[c].times.length) && (e = a[c].times.shift(), g = d && 0 === a[c].logged ? n - d : null, a[c].logged += 1, f(c, n - e, g)) }, load: function () { d && f("load", c - d) } }
        }(), logException: function (a) {
            if (g.debug) {
                var c =
                { link: b.cache(this, "link"), loc: document.location.href, UA: navigator.userAgent }; "string" === typeof a ? c.message = a : c = b.extend(c, a); this.log("exception", a, b.toQuery(c))
            }
        }, onApiClick: function (a, c, d, e, h) {
            var n = e || b.getActualHref(a), l = b.bind(function () { this.redirect(n, b.context(a), c, d) }, this); "object" === typeof h && (h.tracking || h.image) ? (e = b.createEl(h.tracking ? "iframe" : "img", { src: h.tracking || h.image }, { height: 0, width: 0, visibility: "hidden" }), document.body.appendChild(e), setTimeout(b.entryPoint(l), h.timeout ||
            g.hop_timeout)) : l()
        }, onApiPing: function (a, c, d, f, h, n) {
            g.rewrite_original = !1; h = b.reformatKeys(h || {}); var l, m; f = function (a) { var c = {}, d = function (a) { b.isArray(a) ? c[a[0]] = a[1] : c[a] = 1 }; b.isArray(a) && b.each(a, d); return c }; b.exceptionLogger(function () { b.canonicalizeHostname(window.location).match(/^(www\.)?msn\.com$/) && (g.dynamic_scope = "article.gallery-container > .gallerydata,article > section.gallery:first-child ~ .gallerydata", g.declare_handler = !0, g.plugins.privacy = {}) })(); m = b.extend(g.plugins, h.plugins);
            g = b.extend(g, h); delete g.plugins; g.click_timeout = c; g.library_id = a; h.time && (g.time_api = g.time_load = h.time); g.time_api && this.logEvent.stop("png"); g.time_load && this.logEvent.load(); "array" === b.type(g.testing_js) && 0 < g.testing_js.length && b.each(g.testing_js, function (a) { b.jsonp(a) }); b.extend(g.nofollow, f(n)); b.extend(g.norewrite, f(d)); for (l in g) "on" === l.toLowerCase().substr(0, 2) && (2 < l.length && "function" === b.type(g[l])) && (b.on(e, l.toLowerCase().substr(2), b.bind(g[l], window)), delete g[l]); this.initPlugins(m);
            this.initContext(window); this.fire("libready")
        }, onClick: function (a, c) { c = c || window.event; var d = c.ctrlKey || c.metaKey || c.altKey || c.shiftKey, e = c.which && 1 === c.which || 0 === c.button, h = b.eventLink(c); if (h && e && !d && !b.isDefaultPrevented(c) && this.isRewritable(h) && this.shouldHandleClick(a, h)) return this.click(h), b.preventDefault(c) }, onContextmenu: function (a, c) { var d = b.eventLink(c || window.event); d && (this.isRewritable(d) && this.shouldHandleClick(a, d)) && this.handleRightClick(d, "setup") }, onCopy: function (a) {
            var c, d,
            f, h = []; if (window.getSelection) { d = window.getSelection(); a = 0; for (c = d.rangeCount; a < c; a++) { try { f = d.getRangeAt(a).toString().replace(/((^)\s+|\s+$|\r)/g, "").replace(/\s*\n\s*/g, "\n") } catch (g) { } 0 < f.length && 128 >= f.length && h.push(f) } } b.each(h, function (a) { e.log("info", b.toQuery({ type: "selection", txt: a, loc: location.href })) })
        }, opt: function (a, c) { void 0 !== c && void 0 !== this.publicOptions()[a] && (g[a] = c); return g[a] }, ping: function () {
            var a = !1; return function () {
                if (!a && (g.key || g.dr_key)) {
                    var c = {
                        ref: document.referrer ||
                        null
                    }; a = !0; b.pii.transmits(this.api.now("ping", c, { "return": !0 })) || (this.logEvent.start("png"), this.detectFiltering(b.bind(function (a) { a && (g.batch_calls = !1, c.type = this.TYPE_ACCEPTABLE); this.api.now("ping", c, { fn: b.apiCallback(this.onApiPing, this) }) }, this)))
                }
            }
        }(), platform: function () { return b.platforms.findById(g.platform) || b.platforms.NONE }, processLink: function (a) {
            var c = b.cache(a, "processors") || {}, d = this.isRewritable(a); b.each(this.registerProcessor(), function (b) {
                !c[b.id] && (d || b.opts.any) && b.fn(a); c[b.id] =
                !0
            }); b.cache(a, "processors", c); return a
        }, processLinks: function (a) { b.each(a, b.bind(this.processLink, this)) }, publicOptions: function () { var a = {}; return function (c) { "object" === b.type(c) && (a = c); return b.extend({}, a) } }(), redirect: function (a, c, d, f) {
            var h = function (a, c, d) {
                var f = [], h; if (b.traits.referrerPolicy) {
                    h = function (a) { var b = c.document.createElement("meta"); b.name = "referrer"; b.content = a; c.document.getElementsByTagName("head")[0].appendChild(b) }; e.isPrivate(a) && (f = [h("no-referrer"), h("never")]); d(); try {
                        b.each(f,
                        function (a) { a.parentNode.removeChild(a) })
                    } catch (g) { }
                } else d()
            }; c = c || window.top; !b.traits.crossWindowCommunication && !d ? (f = c.open(a, f), f.focus()) : b.traits.jsRedirectSetsReferrer ? setTimeout(b.entryPoint(function () { !d || d === c ? h(a, c, function () { c.location = a }) : b.contextIsAncestor(c, d) ? d.location = a : d.location.replace(a) }), 0) : ("_blank" === f && (f = b.uniqid("win_")), f = b.createA(a, f), f.rel = "norewrite", c.document.body.appendChild(f), f.click(), f.parentNode.removeChild(f))
        }, redirectUrl: function (a, c) {
            c = c || {}; return this.api.now("click",
            a, b.extend({ base_url: g.anywhere_url, path: "/" }, c, { "return": !0 }))
        }, runPlugin: function (a, c) { var d = window.document, e = m[a]; if (e && e.initDocuments) { if (c) e.initNodes(c); else if (e.init(), "function" === b.type(e.initDocuments) && "document" === b.type(d) && e.initDocuments([d]), "function" === b.type(e.initNodes) && "element" === b.type(d.body)) b.on("DOMReady", function () { e.initNodes([d.body]) }); e._ran = !0 } }, registerProcessor: function () {
            var a = !1, c = [], d = function (d, e) {
                if (void 0 === d) return c; "function" === b.type(d) && (e = b.extend({ any: !1 },
                e), c.push({ fn: d, id: b.uniqid(), opts: e }), a && this.initLinks())
            }; d(function () { a = !0 }); return d
        }(), sendLinks: b.mergeable(function () { return { batchFn: e.api, nonBatchFn: e.api.now, batchable: g.batch_links, timeout: g.links_merge_timeout } }), shouldHandleClick: function (a, c) { var d = !0, e = "inserted" === b.cache(c, "type"); a === this.EVENT_LEVEL_LINK && (d = this.harmony(b.harmony.LINK_EVENTS) || (this.isCommercial(c) || e) && this.harmony(b.harmony.COMMERCIAL_LINK_EVENTS)); return d }
    }; e.init(); try { delete window.vglnk_self } catch (B) { }
})("undefined" ===
typeof vglnk_self ? "vglnk" : vglnk_self); window.vglnk = window.vglnk || {};
window.vglnk.convert_plugin = function (k, e, b) {
    var q = {}, g, m; k = e.extend({ any: !0, convert_minimum_bid: !1 }, k); m = {
        getDomains: function () { var g = []; e.each(q, function (b, e) { 2 !== q[e] && (g.push(e), q[e] = 2) }); 0 < g.length && b.api("domains", { domains: g.join("|"), v: "2" }, { fn: e.apiCallback(m.onDomainApi, m) }) }, init: function () {
            b.opt("link_target", k.link_target); b.opt("rewrite_any", k.any); b.opt("rewrite_original", !0); (g = !k.any || b.harmony(e.harmony.COMMERCIAL_LINK_EVENTS) || k.convert_minimum_bid) && b.registerProcessor(e.bind(function (b) {
                this.initDomainLookup();
                this.saveDomain(b)
            }, this), { any: !0 })
        }, initDomainLookup: function () { var b = !1; return function () { b || (b = !0, e.on("DOMReady", e.bind(this.getDomains, this))) } }(), onDomainApi: function () {
            var g = e.destructing(function () { b.registerProcessor(function (g) { b.opt("declare_handler") && e.attributes(g, { "data-hl": "viglink" }) }); b.registerProcessor(e.bind(function (b) { m.unlinkMinBid(b) }, this), { any: !0 }) }); return function (m) {
                var k = b.opt("commercial") || {}; e.each(m.results, function (a, c) { k[c] = a.unlink ? !1 : !0 }); b.opt("commercial",
                k); g()
            }
        }(), saveDomain: function (b) { b = e.canonicalizeHostname(b); q[b] = q[b] || 1 }, unlinkMinBid: function (g) { var m = e.canonicalizeHostname(g); !1 === (b.opt("commercial") || {})[m] && e.unlink(g) }
    }; return { init: e.bind(m.init, m), initNodes: function () { g && m.getDomains() } }
}; window.vglnk = window.vglnk || {};
window.vglnk.crawler_plugin = function (k, e, b) {
    var q = [], g = b.platform(); k = {
        crawl: function (b) { if (g && !("array" !== e.type(b) || 0 === b.length)) b = e.all(b, function (b) { return !e.contains(q, b) }), b = this.findPostsById(b), e.each(b, e.bind(function (b) { b.content = this.redact(b.el.innerHTML.replace(/(^\s+|\s+$)/g, "")); delete b.el }, this)), b = e.all(b, function (b) { return Boolean(b.content && b.id) }), 0 < b.length && this.processPosts(b) }, findPostsById: function (b) {
            return e.all(e.map(g.getPosts(), function (b) { return { el: b, id: g.getPostId(b) } }),
            function (g) { return e.contains(b, g.id) })
        }, processPosts: function (m) { m = e.map(m, function (b) { q.push(b.id); return { c: b.content, i: b.id } }); b.api("content", { content: e.toJSON({ ct: m, pt: g.id, u: location.href }) }, { jsonp: !1 }) }, redact: function (b) { return e.pii.redact(b) }
    }; return { "public": { crawl: e.bind(k.crawl, k) } }
}; window.vglnk = window.vglnk || {}; window.vglnk.modified_clicks_plugin = function (k, e, b) { return { init: function () { b.opt("rewrite_modified", !0) } } }; window.vglnk = window.vglnk || {};
window.vglnk.privacy_plugin = function (k, e, b) { return { init: function () { b.opt("private_domains", ["amazon.com"]) } } }; window.vglnk = window.vglnk || {};
window.vglnk.dr_search_box_plugin = function (k, e, b) {
    k = e.extend({ key: null }, k); var q = {
        init: function (b) { e.each(this.getDRSearchForms(b), function (b) { if (!e.cache(b, "evented")) { var g = q.getInput(b), k = function () { g.value || e.css(g, { "background-image": "url(http://cdn.viglink.com/images/ebay_watermark.gif)" }) }; e.cache(b, "evented", !0); b.onsubmit = null; g.onfocus = null; g.onblur = null; e.on(g, "focus", function () { e.css(g, { "background-image": "none" }) }); e.on(g, "blur", k); k(); e.on(b, "submit", function (e) { q.onSubmit(e, b) }) } }) },
        getDRSearchForms: function (b) { var k = []; e.each(b, function (b) { "element" === e.type(b) && e.each(b.getElementsByTagName("form"), function (b) { q.getInput(b) && b.id.match(/^DR-ebay-search(CSS|2)?$/i) && k.push(b) }) }); return k }, getInput: function (b) { return b.p || b.q2 }, onSubmit: function (g, m) { g = g || window.event; var n = "http://shop.ebay.com/i.html?" + e.toQuery({ _nkw: q.getInput(m).value }), n = e.createA(n, "_blank"); e.cache(n, "params", { key: k.key }); b.click(n); return e.preventDefault(g) }
    }; if (k.key) return {
        init: e.bind(q.init, q),
        initNodes: function (b) { q.init(b) }
    }
}; window.vglnk = window.vglnk || {}; window.vglnk.harmony_plugin = function (k, e, b) { k = e.extend({ level: e.harmony.DEFAULT }, k); return { init: function () { var e = parseFloat(k.level, 10); isFinite(e) && b.opt("harmony_level", e) } } }; window.vglnk = window.vglnk || {};
window.vglnk.optimize_plugin = function (k, e, b, q) {
    var g, m = { uuid: "uuid", index: "idx", optimized_url: "url", aliases: "aka" }; k = e.extend({ scope: "body" }, k); g = {
        cache: function () {
            var b = {}, e = {}; return {
                links: { get: function (e) { return b[e] }, set: function (e, a) { var c = {}; c[m.optimized_url] = a[m.optimized_url]; c[m.uuid] = a[m.uuid]; c[m.aliases] = a[m.aliases]; b[e] = c } }, stats: {
                    increment: function (b, a) {
                        e[b] || (e[b] = {}); if (a) if ("rep" === a) e[b].rep = (e[b].rep || 0) + 1; else { var c; c = e[b].ex = e[b].ex || {}; c[a] = (c[a] || 0) + 1 } else e[b].n = (e[b][m.insertion_count] ||
                        0) + 1
                    }, getAndReset: function () { var b = e; e = {}; return b }
                }
            }
        }(), filterLinkNodes: function () {
            var b = { sameDomainOrInternal: function () { var b = window.location.hostname; return function (a) { return b === a.hostname } }() }, k = function (g) { return e.all(g, function (a) { return e.every(b, function (c) { return !c(a) }) }) }; return function (b) {
                var a = { needs_optimization: [], needs_call: [] }; e.each(k(b), function (c) {
                    var b = g.cache.links.get(c.href); b && b[m.uuid] && e.cache(c, "uuid", b[m.uuid]); b && b[m.optimized_url] ? a.needs_optimization.push(c) : b &&
                    "false" === b[m.optimized_url] || a.needs_call.push(c)
                }); return a
            }
        }(), generateAliases: function (b) { var k = [], q = g.cache.links.get(b.href), k = k.concat(q[m.aliases] || []); k.push(e.canonicalizeHostname(b.href)); k.push(e.canonicalizeHostname(q[m.optimized_url])); return e.unique(k) }, getLinks: function (k) { b.opt("time_api") && q.event.start("opt"); b.sendLinks("optimize", { links: e.unique(e.map(k, function (b) { return b.href })), mode: ["O"], u: location.href, ver: b.opt("links_version") }, { fn: e.bind(g.onOptimizeApi, g) }, k) }, log: e.batchable(function () {
            var b =
            { stats: e.toJSON(g.cache.stats.getAndReset()) }; 4 < b.stats.length && q("loJsLog", b)
        }, function () { return { timeout: 1E3 } }), onOptimizeApi: function (k) { var r = k.response[0], B = k.args.links, a = k.data[0]; b.opt("time_api") && q.event.stop("opt"); "object" === e.type(r) && (k = ["opt", "non", "unk"], e.each(k, function (a) { r[a] && r[a].length && e.each(r[a], function (b) { var e = B[b[m.index]]; "non" === a && (b[m.optimized_url] = !1); g.cache.links.set(e, b) }) }), k = g.filterLinkNodes(a), g.optimizeLinks(k.needs_optimization)) }, optimizeLinks: function (b) {
            e.each(b,
            function (b) { e.cache(b, "rewrit", !1) }); b = g.runExclusionFilters(b); e.each(b, this.optimizeLink); e.traits.json && g.log()
        }, optimizeLink: function () {
            var b = function (a) { return a.replace(/^https?:\/\//, "") }, r = function (a, c) { for (var b; b = a.firstChild;) a.removeChild(b); a.appendChild(document.createTextNode(c)) }, q = function (a) {
                var c = a.href, d = a.textContent || a.innerText, f = Boolean(d), h = g.generateAliases(a), k = function () { var a = b(c).toLowerCase(), f = d.toLowerCase().replace(a, ""); return e.some(h, function (a) { return -1 !== f.indexOf(a.toLowerCase()) }) },
                l = function () { var a = d.split(/(?:\.\.\.|\u2026)/); return 2 > a.length ? !1 : RegExp("^" + e.map(a, e.escapeRegExp).join(".+") + "$").test(c) }, m = function () { var c = e.canonicalizeHostname(a); return e.canonicalizeHostname(e.createEl("a", { href: d })) === c }, s = function () { var c; return m() ? (c = e.fromQuery(a.search), e.find(c, function (a) { return a === d })) : !1 }; return { full_replace: Boolean(f && (c === d || b(c) === d || l() || s())), exclude: Boolean(f && k()), partial_replace: Boolean(f && (-1 !== d.indexOf(c) || -1 !== d.indexOf(b(c)))) }
            }; return function (a) {
                var c,
                d = g.cache.links.get(a.href), f = d[m.optimized_url]; c = q(a); if (f && !k.observer) { if (c.full_replace) r(a, f), g.cache.stats.increment(d[m.uuid], "rep"); else { if (c.exclude) { g.cache.stats.increment(d[m.uuid], "a"); return } c.partial_replace && (c = "undefined" !== e.type(a.textContent) ? a.textContent : a.innerText, c = -1 !== c.indexOf(a.href) ? c.replace(a.href, f) : c.replace(b(a.href), f), r(a, c), g.cache.stats.increment(d[m.uuid], "rep")) } f = -1 === f.indexOf("http://") ? "http://" + f : f; a.href = f } g.cache.stats.increment(d[m.uuid]); e.cache(a,
                "rewrit", !0)
            }
        }(), runExclusionFilters: function () {
            var b = e.generateNodeFilter({ classes: ["nooptimize", "norewrite"], rels: ["nooptimize", "norewrite", "noskim"], custom: function (a, c) { if (c) return Boolean(e.cache(a, "type")) } }), k = function (a) { var c = g.generateAliases(a), b = e.context(a).document.title; return e.every(c, function (a) { return -1 === b.indexOf(a) }) }, q = function () {
                var a = function (a, c) {
                    var b = e.reduce([], ["prev_tokens", "next_tokens"], function (c, b) { a[b] && a[b].length && (c = c.concat(a[b])); return c }).join(" ").toLowerCase();
                    return e.some(c, function (a) { return -1 !== b.indexOf(a.toLowerCase()) })
                }, c = function () {
                    var a = function (a) { a = "undefined" !== e.type(a.textContent) ? a.textContent : a.innerText; return e.all(a.split(/\s+/g), function (a) { return "" !== a }) }; return function (c) {
                        for (var b = { prev_tokens: [], next_tokens: [] }; c && c !== document.body.parentNode;) {
                            for (var g = b, l = c.previousSibling, k = c.nextSibling; l || k;) l && (e.nodesOfType([l], 1, 3).length && "SCRIPT" !== l.tagName) && (g.prev_tokens = g.prev_tokens.concat(a(l).reverse())), l = !l ? !1 : l.previousSibling,
                            k && (e.nodesOfType([k], 1, 3).length && "SCRIPT" !== k.tagName) && (g.next_tokens = g.next_tokens.concat(a(k))), k = !k ? !1 : k.nextSibling; if (20 < b.prev_tokens.length + b.next_tokens.length + 0) break; c = c.parentNode
                        } return b
                    }
                }(); return function (b) { var e = g.generateAliases(b); b = c(b); 80 < b.prev_tokens.length + b.next_tokens.length + 0 && (b.prev_tokens = b.prev_tokens.slice(0, 40), b.next_tokens = b.next_tokens.slice(0, 40)); b.prev_tokens = b.prev_tokens.reverse(); return !a(b, e) }
            }(); return function (a) {
                return e.all(a, function (a) {
                    var d = g.cache.links.get(a.href)[m.uuid];
                    if (b(a)) if (q(a)) { if (!k(a)) return g.cache.stats.increment(d, "t"), !1 } else return g.cache.stats.increment(d, "p"), !1; else return g.cache.stats.increment(d, "n"), !1; return !0
                })
            }
        }()
    }; return { initNodes: function (b) { var m; b = e.nodesOfType(b, 1); b = e.links(b, k.scope); b = g.filterLinkNodes(b); (m = b.needs_optimization) && m.length && g.optimizeLinks(m); (b = b.needs_call) && b.length && g.getLinks(b) } }
}; window.vglnk = window.vglnk || {};
window.vglnk.insert_plugin = function (k, e, b, q) {
    var g, m, n, r, B = null, a = null; k = e.extend({ cat: null, dynamic_sample_rate: 1, key: null, link_phrases: !0, link_target: null, link_urls: !0, manual_mode: 1 === k.mode, per_page: null, per_phrase: 5, proximity: null, same_proximity: 100, scope: null, ui: !0 }, k); if (k.key) return g = b.platform(), m = {
        cache: function () {
            var a = {}, b = {}, f = function (f, g) {
                var h = {}; e.isArray(g) && 0 < g.length && e.find(g, function (a) { var c = b; if (c[a]) { if (f) return h[f] = c[a][f], !0; e.each(c[a], function (a, c) { h[c] || (h[c] = a) }) } });
                h = e.extend(e.clone(a), h); return f ? h[f] : h
            }, g = function (f, g, h) { (h = e.isArray(h) && 0 < h.length ? h : null) && e.each(h, function (a) { var c = b; c[a] = c[a] || {}; "L" !== g.type && (c[a][f] || (c[a][f] = g)) }); if (!h || "L" === g.type) a[f] || (a[f] = g); return !0 }, m = function (a, c, b) { var d = e.all(e.toArray(arguments), function (a) { return Boolean(a) }); "array" === e.type(d[d.length - 1]) && (b = d.pop()); a = d[0]; c = d[1]; if (1 >= d.length) return f(a, b); if (2 === d.length) return g(a, c, b) }; k.manual_mode && e.extend(m, { reset: function () { a = {}; b = {} } }); return m
        }(), enabled: function () {
            return k.link_phrases ||
            k.link_urls
        }, focusLink: function (a) { a.id || (a.id = e.uniqid("vl-link-")); location.href.hash = "#" + a.id; window.scrollBy(0, -150) }, getPartnerParams: function () { var a, d, e = b.opt("partner"), g = {}; for (a in e) break; if (a) for (d in e[a]) g[a + "_" + d] = e[a][d]; return g }, getPhrases: function (a, d) { b.opt("time_api") && q.event.start("ins"); b.api("insert", e.extend(m.getPartnerParams(), { cat: k.cat, i: d ? d.join("|") : null, mode: k.mode, pt: g.id, ps: k.product_source, u: location.href }), { fn: e.apiCallback(m.onInsertApi, m) }, a, d) }, hasCalled: function () {
            var a =
            {}, b = Math.random() < k.dynamic_sample_rate, f = function (a) { return b && e.isArray(a) ? e.map(a, function (a) { return f(a) }) : b && a === e.platforms.DEFAULT_POST_ID ? location.href : a }, g = function (b) { b = f(b); return e.isArray(b) && b.length ? Boolean(e.all(b, function (b) { return a[b] }).length === b.length) : Boolean(a[e.platforms.DEFAULT_POST_ID]) }, m = function (b) { b = f(b); e.isArray(b) && b.length ? e.each(b, function (b) { a[b] = !0 }) : a[e.platforms.DEFAULT_POST_ID] = !0 }; return function (a, b) { return b ? m(a) : g(a) }
        }(), init: function () {
            k.scope = k.scope ||
            g.scope; k.link_urls && (r = RegExp("(?:(?:\\b(https?://)|(?:^|\\s)\\W*(www\\d{0,3}\\.|(?:[a-z0-9-]+\\.)+[a-z]{2,4}/))((?:[^\\s()<>]+|\\((?:[^\\s()<>]|(?:\\([^\\s()<>]+\\)))*\\))+(?:\\((?:[^\\s()<>]|(?:\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:'\".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))|(?:^|\\s)\\W*((?:[a-z0-9-]+\\.)+com(?:/|\\b)))", "i"))
        }, initLink: function (a, d, f) {
            var g = k.link_target; if (g = "U" === d.type ? b.opt("link_target") : g || f) a.target = g; a.href || (a.href = d.url); a.rel = "nofollow"; e.cache(a, "params",
            { exp: B, key: k.key, mid: d.mid, type: d.type || null }); e.cache(a, "href", a.href); b.link(a)
        }, insertLinks: function () {
            var a, d = e.generateNodeFilter({ classes: ["nolinks", "atma-nolink", "atma-nolinks"], tags: "applet embed object head img input link map meta param select button iframe option script style svg textarea title".split(" "), custom: function (a) { return e.matches(a, "a") && Boolean(a.href) } }), f = function (a, b, c, e) {
                if (d(b, { ancestors: !Boolean(e), self: !0 })) if (3 === b.nodeType) g(a, b, c); else if (1 === b.nodeType) for (b = b.firstChild; b;) e =
                b.nextSibling, f(a, b, c, !0), b = e
            }, g = function (a, b, c) { var d = !1, e = b.parentNode, f = function (a, b) { e.insertBefore(a, b); e.removeChild(b) }; e && (b.data && (d = a.test(b.data.replace(/\s+/, " "))), d && n(a, b, c, f)) }, n = function (d, f, g, h) {
                for (var n, u, q, r, B = function (b) { var d; b = !b || !k.per_phrase || !a[b.phrase] || a[b.phrase].count < k.per_phrase; d = !k.per_page || e.reduce(0, a, function (a, b) { return a + b.count }) < k.per_page; return b && d }, U = function (a, c, d) {
                var f, g = Boolean(b.opt("dynamic_scope")), h = function () {
                var b, c; if (!d.phrase) return !0;
                if (k.proximity || k.same_proximity) c = e.geometry(f), e.find(m.cache(a), function (a) { var f, g; if (a.links) { if ((f = m.normalizePhrase(a.phrase) === m.normalizePhrase(d.phrase)) && !k.same_proximity || !f && !k.proximity) return !1; g = f ? Math.max(k.same_proximity, k.proximity) : k.proximity; a.links = e.all(a.links, function (a) { var d = e.isInDom(a.el); !b && d && (b = e.find(a.segments, function (a) { a = a.geometry; a = e.extend({}, a); a.x1 -= g; a.y1 -= g; a.x2 += g; a.y2 += g; if (a.x1 < c.x2 && a.x2 > c.x1 && a.y1 < c.y2 && a.y2 > c.y1) return !0 })); return d }); return b } });
                return !b
                }; f = e.createEl("span"); c.parentNode.insertBefore(f, c); f.appendChild(c); return function (a) { f.parentNode.insertBefore(c, f); f.parentNode.removeChild(f); return a }((!g || e.isVisible(f)) && h())
                }, V = function (a, b) {
                var c, d, f, g, h = { el: a, segments: [] }, k = a.getElementsByTagName("span"), l = { els: [] }; c = 0; for (d = k.length; c < d; c++) f = k[c], void 0 === g || f.offsetTop === g.offsetTop ? l.els.push(f) : (h.segments.push(l), l = { els: [f] }), g = f; l.geometry = e.geometry.apply(e, l.els); h.segments.push(l); b.links = b.links || []; b.links.push(h);
                return b
                }; f && f.data && "" !== f.data && (Boolean(!e.traits.fastRegexp && (q = f.data.match(/^\s+/))) || Boolean(q = f.data.match(d))) ;) u = q[0], r = q.slice(1).join(""), n = (n = m.normalizePhrase(r)) ? m.cache(n, g) : null, u = q.index + u.length - r.length, 0 < u && (f = f.splitText(u)), u = f.length <= r.length ? null : f.splitText(r.length), r && !n && (n = { url: r.match(/^https?:\/\//i) ? r : "http://" + r, type: "U" }), n && (n.url.match(/https?:\/\//i) && r && B(n) && U(g, f, n)) && (r = l(r, n), e.cache(r, "unlinked") || (h(r, f), V(r, n), f = n.phrase || n.url, a[f] = a[f] || {
                    count: 0, phrase: n.phrase,
                    type: n.type
                }, a[f].count++)), f = u
            }, l = function (a, b) { var c; c = e.createEl("a"); c.innerHTML = a.replace(/([a-z0-9]+ *|[^a-z0-9]+)/ig, "<span>$1</span>"); c.className = "vglnk"; e.cache(c, "type", "inserted"); e.cache(c, "phrase", a); k.ui && "U" !== b.type && (c.title = "Link added by VigLink"); m.initLink(c, b); return c }; return function (b, g) { var h = m.regexp(g); a = {}; h && (e.each(e.all(b, d), function (a) { f(h, a, g) }), k.link_phrases && m.log(a)) }
        }(), insertManually: function () {
            var a = !1, b = e.clone(k), f = function (a) {
                return e.map(a, function (a,
                b) { return { phrase: b, type: "M", url: a } })
            }; return function (g, r, l) { var q, s = !1; n.init(); k.manual_mode && !a && (a = !0, q = r = r || {}, k.same_proximity = q.same_proximity || k.same_proximity, k.proximity = q.proximity || k.proximity, k.per_page = q.per_page || k.per_page, k.per_phrase = q.per_phrase || k.per_phrase, q = r.target_node || document.body, g = f(g), m.loadPhrases(g, [q]), k = b, m.cache.reset(), s = !0, a = !1); "function" === e.type(l) && l(s, q) }
        }(), loadPhrases: function (a, b, f) {
            e.each(a, function (a) {
                a.phrase && a.url && (a.phrase = m.normalizePhrase(a.phrase),
                m.cache(a.phrase, { count: 0, phrase: a.phrase, mid: a.mid, url: a.url, type: a.type || "" }, f))
            }); m.hasCalled(f, !0); this.insertLinks(b, f)
        }, log: function (b) { var d = 0, f = 0, g = []; e.each(b, function (a, b) { var c = parseInt(a.count, 10); 0 < c && ("U" === a.type ? f += c : "M" !== a.type && g.push({ phrase: b, type: a.type, count: c }), d += c) }); 0 < d && q("insert", [{ ct: d, cl: f, exp: B, imp_id: a, phrases: e.toJSON(g) }]) }, normalizePhrase: function (a) { return a.toLowerCase().replace(/(^\s+|\s+$)/g, "").split(/\s+/).join(" ") }, onInsertApi: function (c, d, f) {
            b.opt("time_api") &&
            q.event.stop("ins"); "object" === e.type(c) && (B = c.exp, a = c.imp_id, c.results && this.loadPhrases(c.results, d, f))
        }, regexp: function (a) { var b; a = m.cache(a); a = e.map(a, function (a, b) { return e.escapeRegExp(b).split(" ").join("\\s+") }); 0 < a.length && (b = "(?:^|[\\s\"'\\(])(" + a.join("|") + ")(?=\\s|\\W*$|\\W{2})", b = RegExp(r ? "(?:" + b + "|" + r.source + ")" : b, "i")); return b || r }
    }, n = {
        init: e.destructing(e.bind(m.init, m)), initNodes: function (a) {
            var d = [], f = [], h = []; m.enabled() && (k.scope ? (e.each(a, function (b) {
                var d = e.withScope(a, k.scope,
                { ancestors: !0, consolidate: !0, descendants: !1, self: !0 }); d.length ? (h.push(b), f = f.concat(d)) : (b = e.withScope(a, k.scope, { ancestors: !1, consolidate: !0, descendants: !0, self: !1 }), b.length && (h = h.concat(b), f = f.concat(b)))
            }, { timeout: !0 }), h = e.unique(h), f = e.unique(f)) : f = h = a, Boolean(b.opt("dynamic_scope")) && (h = e.all(h, function (a) { return !e.matches(a, ":has(a.vglnk)") }, { timeout: !0 })), h.length && (f.length && (d = g.getPostIds(f)), k.link_phrases && !m.hasCalled(d) ? m.getPhrases(h, d) : m.insertLinks(h, d)))
        }
    }, k.manual_mode && e.extend(n,
    { "public": { run: m.insertManually } }), n
}; window.vglnk = window.vglnk || {};
window.vglnk.partners_plugin = function (k, e, b) {
    var q; k = e.extend({ log_links: !0, log_status: !1, pai_type: [], scope: "body" }, k); q = {
        logLinks: function (g) { b.sendLinks("optimize", { links: e.unique(e.map(g, function (b) { return b.href })), mode: ["P"], u: location.href, ver: b.opt("links_version") }, { jsonp: !1 }) }, logStatus: function (g) { e.createEl("img").src = e.updateUrl(b.opt("api_url"), { pathname: "/api/sync/status.gif", search: "?" + e.toQuery({ st: g }) }) }, run: function () { var b = k.pai_type; e.isArray(b) && b.length && q.sync(b) }, sync: function () {
            return function (g) {
                var m,
                n; m = g.pop(); n = e.updateUrl(b.opt("api_url"), { pathname: "/api/sync.gif", search: "?" + e.toQuery({ partner_id: m }) }); m = e.createEl("img"); e.on(m, "load", function () { k.log_status && q.logStatus("su"); g.length && q.sync(g) }); e.on(m, "error", function () { k.log_status && q.logStatus("fa"); g.length && q.sync(g) }); k.log_status && q.logStatus("bg"); m.src = n
            }
        }()
    }; return { init: function () { q.run() }, initNodes: function (b) { (b = e.links(b, k.scope)) && (b.length && k.log_links) && q.logLinks(b) } }
};
