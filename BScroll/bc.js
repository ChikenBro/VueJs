! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).BetterScroll = {})
}(this, function (t) {
  "use strict";
  var s = function (t, e) {
    return (s = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (t, e) {
        t.__proto__ = e
      } || function (t, e) {
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
      })(t, e)
  };

  function e(t, e) {
    function o() {
      this.constructor = t
    }
    s(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
  }
  var c = function () {
    return (c = Object.assign || function (t) {
      for (var e, o = 1, s = arguments.length; o < s; o++)
        for (var i in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t
    }).apply(this, arguments)
  };

  function i(t, n, h, l) {
    return new(h = h || Promise)(function (o, e) {
      function s(t) {
        try {
          r(l.next(t))
        } catch (t) {
          e(t)
        }
      }

      function i(t) {
        try {
          r(l.throw(t))
        } catch (t) {
          e(t)
        }
      }

      function r(t) {
        var e;
        t.done ? o(t.value) : ((e = t.value) instanceof h ? e : new h(function (t) {
          t(e)
        })).then(s, i)
      }
      r((l = l.apply(t, n || [])).next())
    })
  }

  function r(o, s) {
    var i, r, n, h = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1]
        },
        trys: [],
        ops: []
      },
      t = {
        next: e(0),
        throw: e(1),
        return: e(2)
      };
    return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
      return this
    }), t;

    function e(e) {
      return function (t) {
        return function (e) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; h;) try {
            if (i = 1, r && (n = 2 & e[0] ? r.return : e[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, e[1])).done) return n;
            switch (r = 0, (e = n ? [2 & e[0], n.value] : e)[0]) {
              case 0:
              case 1:
                n = e;
                break;
              case 4:
                return h.label++, {
                  value: e[1],
                  done: !1
                };
              case 5:
                h.label++, r = e[1], e = [0];
                continue;
              case 7:
                e = h.ops.pop(), h.trys.pop();
                continue;
              default:
                if (!(n = 0 < (n = h.trys).length && n[n.length - 1]) && (6 === e[0] || 2 === e[0])) {
                  h = 0;
                  continue
                }
                if (3 === e[0] && (!n || e[1] > n[0] && e[1] < n[3])) {
                  h.label = e[1];
                  break
                }
                if (6 === e[0] && h.label < n[1]) {
                  h.label = n[1], n = e;
                  break
                }
                if (n && h.label < n[2]) {
                  h.label = n[2], h.ops.push(e);
                  break
                }
                n[2] && h.ops.pop(), h.trys.pop();
                continue
            }
            e = s.call(o, h)
          } catch (t) {
            e = [6, t], r = 0
          } finally {
            i = n = 0
          }
          if (5 & e[0]) throw e[1];
          return {
            value: e[0] ? e[1] : void 0,
            done: !0
          }
        }([e, t])
      }
    }
  }

  function p() {
    for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
    for (var s = Array(t), i = 0, e = 0; e < o; e++)
      for (var r = arguments[e], n = 0, h = r.length; n < h; n++, i++) s[i] = r[n];
    return s
  }
  var o = [{
    sourceKey: "scroller.scrollBehaviorX.currentPos",
    key: "x"
  }, {
    sourceKey: "scroller.scrollBehaviorY.currentPos",
    key: "y"
  }, {
    sourceKey: "scroller.scrollBehaviorX.hasScroll",
    key: "hasHorizontalScroll"
  }, {
    sourceKey: "scroller.scrollBehaviorY.hasScroll",
    key: "hasVerticalScroll"
  }, {
    sourceKey: "scroller.scrollBehaviorX.contentSize",
    key: "scrollerWidth"
  }, {
    sourceKey: "scroller.scrollBehaviorY.contentSize",
    key: "scrollerHeight"
  }, {
    sourceKey: "scroller.scrollBehaviorX.maxScrollPos",
    key: "maxScrollX"
  }, {
    sourceKey: "scroller.scrollBehaviorY.maxScrollPos",
    key: "maxScrollY"
  }, {
    sourceKey: "scroller.scrollBehaviorX.minScrollPos",
    key: "minScrollX"
  }, {
    sourceKey: "scroller.scrollBehaviorY.minScrollPos",
    key: "minScrollY"
  }, {
    sourceKey: "scroller.scrollBehaviorX.movingDirection",
    key: "movingDirectionX"
  }, {
    sourceKey: "scroller.scrollBehaviorY.movingDirection",
    key: "movingDirectionY"
  }, {
    sourceKey: "scroller.scrollBehaviorX.direction",
    key: "directionX"
  }, {
    sourceKey: "scroller.scrollBehaviorY.direction",
    key: "directionY"
  }, {
    sourceKey: "scroller.actions.enabled",
    key: "enabled"
  }, {
    sourceKey: "scroller.animater.pending",
    key: "pending"
  }, {
    sourceKey: "scroller.animater.stop",
    key: "stop"
  }, {
    sourceKey: "scroller.scrollTo",
    key: "scrollTo"
  }, {
    sourceKey: "scroller.scrollBy",
    key: "scrollBy"
  }, {
    sourceKey: "scroller.scrollToElement",
    key: "scrollToElement"
  }, {
    sourceKey: "scroller.resetPosition",
    key: "resetPosition"
  }];

  function n(t) {
    console.error("[BScroll warn]: " + t)
  }

  function h(t, e) {
    if (!t) throw new Error("[BScroll] " + e)
  }
  var l = "undefined" != typeof window,
    a = l && navigator.userAgent.toLowerCase(),
    u = !(!a || !/wechatdevtools/.test(a)),
    d = a && 0 < a.indexOf("android"),
    f = function () {
      if ("string" != typeof a) return !1;
      var t = /os (\d\d?_\d(_\d)?)/.exec(a);
      if (!t) return !1;
      t = t[1].split("_").map(function (t) {
        return parseInt(t, 10)
      });
      return !!(13 === t[0] && 4 <= t[1])
    }(),
    g = !1;
  if (l) try {
    var y = {};
    Object.defineProperty(y, "passive", {
      get: function () {
        g = !0
      }
    }), window.addEventListener("test-passive", function () {}, y)
  } catch (t) {}

  function v() {
    return window.performance && window.performance.now && window.performance.timing ? window.performance.now() + window.performance.timing.navigationStart : +new Date
  }
  var m = function (t, e) {
    for (var o in e) t[o] = e[o];
    return t
  };

  function k(t) {
    return null == t
  }

  function T(t, e, o) {
    return t < e ? e : o < t ? o : t
  }

  function S(t, s) {
    if (t.findIndex) return t.findIndex(s);
    var i = -1;
    return t.some(function (t, e, o) {
      o = s(t, e, o);
      if (o) return i = e, o
    }), i
  }
  var P = l && document.createElement("div").style,
    b = function () {
      if (!l) return !1;
      for (var t = 0, e = [{
          key: "standard",
          value: "transform"
        }, {
          key: "webkit",
          value: "webkitTransform"
        }, {
          key: "Moz",
          value: "MozTransform"
        }, {
          key: "O",
          value: "OTransform"
        }, {
          key: "ms",
          value: "msTransform"
        }]; t < e.length; t++) {
        var o = e[t];
        if (void 0 !== P[o.value]) return o.key
      }
      return !1
    }();

  function w(t) {
    return !1 === b ? t : "standard" === b ? "transitionEnd" === t ? "transitionend" : t : b + t.charAt(0).toUpperCase() + t.substr(1)
  }

  function x(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }

  function M(t, e, o, s) {
    s = g ? {
      passive: !1,
      capture: !!s
    } : !!s;
    t.addEventListener(e, o, s)
  }

  function Y(t, e, o, s) {
    t.removeEventListener(e, o, {
      capture: !!s
    })
  }

  function B(t) {
    for (var e = 0, o = 0; t;) e -= t.offsetLeft, o -= t.offsetTop, t = t.offsetParent;
    return {
      left: e,
      top: o
    }
  }
  var E = b && "standard" !== b ? "-" + b.toLowerCase() + "-" : "",
    X = w("transform"),
    D = w("transition"),
    O = l && w("perspective") in P,
    H = l && ("ontouchstart" in window || u),
    C = l && D in P,
    z = {
      transform: X,
      transition: D,
      transitionTimingFunction: w("transitionTimingFunction"),
      transitionDuration: w("transitionDuration"),
      transitionDelay: w("transitionDelay"),
      transformOrigin: w("transformOrigin"),
      transitionEnd: w("transitionEnd"),
      transitionProperty: w("transitionProperty")
    },
    I = {
      touchstart: 1,
      touchmove: 1,
      touchend: 1,
      touchcancel: 1,
      mousedown: 2,
      mousemove: 2,
      mouseup: 2
    };

  function L(t) {
    if (t instanceof window.SVGElement) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top,
        left: e.left,
        width: e.width,
        height: e.height
      }
    }
    return {
      top: t.offsetTop,
      left: t.offsetLeft,
      width: t.offsetWidth,
      height: t.offsetHeight
    }
  }

  function F(t, e) {
    for (var o in e)
      if (e[o].test(t[o])) return !0;
    return !1
  }
  var A = F;

  function N(t, e) {
    void 0 === e && (e = "click"), "mouseup" === t.type ? i = t : "touchend" !== t.type && "touchcancel" !== t.type || (i = t.changedTouches[0]);
    var o, s = {};
    i && (s.screenX = i.screenX || 0, s.screenY = i.screenY || 0, s.clientX = i.clientX || 0, s.clientY = i.clientY || 0);
    var i = {
      ctrlKey: t.ctrlKey,
      shiftKey: t.shiftKey,
      altKey: t.altKey,
      metaKey: t.metaKey
    };
    if ("undefined" != typeof MouseEvent) try {
      o = new MouseEvent(e, m(c({
        bubbles: !0,
        cancelable: !0
      }, i), s))
    } catch (t) {
      r()
    } else r();

    function r() {
      (o = document.createEvent("Event")).initEvent(e, !0, !0), m(o, s)
    }
    o.forwardedTouchEvent = !0, o._constructed = !0, t.target.dispatchEvent(o)
  }

  function R(t, e) {
    return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
  }
  var W = {
      swipe: {
        style: "cubic-bezier(0.23, 1, 0.32, 1)",
        fn: function (t) {
          return 1 + --t * t * t * t * t
        }
      },
      swipeBounce: {
        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fn: function (t) {
          return t * (2 - t)
        }
      },
      bounce: {
        style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        fn: function (t) {
          return 1 - --t * t * t * t
        }
      }
    },
    K = l && window;

  function j() {}
  var U = l ? K.requestAnimationFrame || K.webkitRequestAnimationFrame || K.mozRequestAnimationFrame || K.oRequestAnimationFrame || function (t) {
      return window.setTimeout(t, t.interval || 1e3 / 60)
    } : j,
    _ = l ? K.cancelAnimationFrame || K.webkitCancelAnimationFrame || K.mozCancelAnimationFrame || K.oCancelAnimationFrame || function (t) {
      window.clearTimeout(t)
    } : j,
    V = function (t) {},
    Z = {
      enumerable: !0,
      configurable: !0,
      get: V,
      set: V
    };

  function q(t, e, o) {
    Z.get = function () {
      return function (t, e) {
        for (var o = e.split("."), s = 0; s < o.length - 1; s++)
          if ("object" != typeof (t = t[o[s]]) || !t) return;
        var i = o.pop();
        return "function" == typeof t[i] ? function () {
          return t[i].apply(t, arguments)
        } : t[i]
      }(this, e)
    }, Z.set = function (t) {
      ! function (t, e, o) {
        for (var s, i = e.split("."), r = 0; r < i.length - 1; r++) t[s = i[r]] || (t[s] = {}), t = t[s];
        t[i.pop()] = o
      }(this, e, t)
    }, Object.defineProperty(t, o, Z)
  }
  var G = ($.prototype.on = function (t, e, o) {
    return void 0 === o && (o = this), this.hasType(t), this.events[t] || (this.events[t] = []), this.events[t].push([e, o]), this
  }, $.prototype.once = function (s, i, r) {
    var n = this;
    void 0 === r && (r = this), this.hasType(s);
    var h = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      n.off(s, h);
      var o = i.apply(r, t);
      if (!0 === o) return o
    };
    return h.fn = i, this.on(s, h), this
  }, $.prototype.off = function (t, e) {
    if (!t && !e) return this.events = {}, this;
    if (t) {
      if (this.hasType(t), !e) return this.events[t] = [], this;
      var o = this.events[t];
      if (!o) return this;
      for (var s = o.length; s--;)(o[s][0] === e || o[s][0] && o[s][0].fn === e) && o.splice(s, 1);
      return this
    }
  }, $.prototype.trigger = function (t) {
    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
    this.hasType(t);
    t = this.events[t];
    if (t)
      for (var s, i = t.length, r = p(t), n = 0; n < i; n++) {
        var h = r[n],
          l = h[0],
          h = h[1];
        if (l && !0 === (s = l.apply(h, e))) return s
      }
  }, $.prototype.registerType = function (t) {
    var e = this;
    t.forEach(function (t) {
      e.eventTypes[t] = t
    })
  }, $.prototype.destroy = function () {
    this.events = {}, this.eventTypes = {}
  }, $.prototype.hasType = function (t) {
    var e = this.eventTypes;
    e[t] === t || n('EventEmitter has used unknown event type: "' + t + '", should be oneof [' + Object.keys(e).map(function (t) {
      return JSON.stringify(t)
    }) + "]")
  }, $);

  function $(t) {
    this.events = {}, this.eventTypes = {}, this.registerType(t)
  }
  var J = (Q.prototype.destroy = function () {
    this.removeDOMEvents(), this.events = []
  }, Q.prototype.addDOMEvents = function () {
    this.handleDOMEvents(M)
  }, Q.prototype.removeDOMEvents = function () {
    this.handleDOMEvents(Y)
  }, Q.prototype.handleDOMEvents = function (e) {
    var o = this,
      s = this.wrapper;
    this.events.forEach(function (t) {
      e(s, t.name, o, !!t.capture)
    })
  }, Q.prototype.handleEvent = function (e) {
    var o = e.type;
    this.events.some(function (t) {
      return t.name === o && (t.handler(e), !0)
    })
  }, Q);

  function Q(t, e) {
    this.wrapper = t, this.events = e, this.addDOMEvents()
  }

  function tt() {}
  var et, ot = (e(st, et = tt), st.prototype.merge = function (t) {
    if (!t) return this;
    for (var e in t) "bounce" !== e ? this[e] = t[e] : this.bounce = this.resolveBounce(t[e]);
    return this
  }, st.prototype.process = function () {
    return this.translateZ = this.HWCompositing && O ? " translateZ(1px)" : "", this.useTransition = this.useTransition && C, this.preventDefault = !this.eventPassthrough && this.preventDefault, this.scrollX = "horizontal" !== this.eventPassthrough && this.scrollX, this.scrollY = "vertical" !== this.eventPassthrough && this.scrollY, this.freeScroll = this.freeScroll && !this.eventPassthrough, this.scrollX = !!this.freeScroll || this.scrollX, this.scrollY = !!this.freeScroll || this.scrollY, this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold, this
  }, st.prototype.resolveBounce = function (t) {
    var e = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0
      },
      e = "object" == typeof t ? m(e, t) : t ? e : {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
      };
    return e
  }, st);

  function st() {
    var t = et.call(this) || this;
    return t.startX = 0, t.startY = 0, t.scrollX = !1, t.scrollY = !0, t.freeScroll = !1, t.directionLockThreshold = 0, t.eventPassthrough = "", t.click = !1, t.dblclick = !1, t.tap = "", t.bounce = {
      top: !0,
      bottom: !0,
      left: !0,
      right: !0
    }, t.bounceTime = 800, t.momentum = !0, t.momentumLimitTime = 300, t.momentumLimitDistance = 15, t.swipeTime = 2500, t.swipeBounceTime = 500, t.deceleration = .0015, t.flickLimitTime = 200, t.flickLimitDistance = 100, t.resizePolling = 60, t.probeType = 0, t.stopPropagation = !1, t.preventDefault = !0, t.preventDefaultException = {
      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
    }, t.tagException = {
      tagName: /^TEXTAREA$/
    }, t.HWCompositing = !0, t.useTransition = !0, t.bindToWrapper = !1, t.bindToTarget = !1, t.disableMouse = H, t.disableTouch = !H, t.autoBlur = !0, t.autoEndDistance = 5, t.outOfBoundaryDampingFactor = 1 / 3, t.specifiedIndexAsContent = 0, t.quadrant = 1, t
  }
  var it = (rt.prototype.handleDOMEvents = function () {
    var t = this.options,
      e = t.bindToWrapper,
      o = t.disableMouse,
      s = t.disableTouch,
      i = t.click,
      r = this.wrapper,
      n = e ? r : window,
      t = [],
      e = [],
      s = !s,
      o = !o;
    i && t.push({
      name: "click",
      handler: this.click.bind(this),
      capture: !0
    }), s && (t.push({
      name: "touchstart",
      handler: this.start.bind(this)
    }), e.push({
      name: "touchmove",
      handler: this.move.bind(this)
    }, {
      name: "touchend",
      handler: this.end.bind(this)
    }, {
      name: "touchcancel",
      handler: this.end.bind(this)
    })), o && (t.push({
      name: "mousedown",
      handler: this.start.bind(this)
    }), e.push({
      name: "mousemove",
      handler: this.move.bind(this)
    }, {
      name: "mouseup",
      handler: this.end.bind(this)
    })), this.wrapperEventRegister = new J(r, t), this.targetEventRegister = new J(n, e)
  }, rt.prototype.beforeHandler = function (t, e) {
    var o = this.options,
      s = o.preventDefault,
      i = o.stopPropagation,
      r = o.preventDefaultException;
    !{
      start: function () {
        return s && !F(t.target, r)
      },
      end: function () {
        return s && !F(t.target, r)
      },
      move: function () {
        return s
      }
    } [e]() || t.preventDefault(), i && t.stopPropagation()
  }, rt.prototype.setInitiated = function (t) {
    this.initiated = t = void 0 === t ? 0 : t
  }, rt.prototype.start = function (t) {
    var e = I[t.type];
    this.initiated && this.initiated !== e || (this.setInitiated(e), A(t.target, this.options.tagException) ? this.setInitiated() : 2 === e && 0 !== t.button || this.hooks.trigger(this.hooks.eventTypes.beforeStart, t) || (this.beforeHandler(t, "start"), e = t.touches ? t.touches[0] : t, this.pointX = e.pageX, this.pointY = e.pageY, this.hooks.trigger(this.hooks.eventTypes.start, t)))
  }, rt.prototype.move = function (t) {
    var e, o, s;
    I[t.type] === this.initiated && (this.beforeHandler(t, "move"), s = (o = t.touches ? t.touches[0] : t).pageX - this.pointX, e = o.pageY - this.pointY, this.pointX = o.pageX, this.pointY = o.pageY, this.hooks.trigger(this.hooks.eventTypes.move, {
      deltaX: s,
      deltaY: e,
      e: t
    }) || (o = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, s = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, e = this.pointX - o, o = this.pointY - s, s = this.options.autoEndDistance, (e > document.documentElement.clientWidth - s || o > document.documentElement.clientHeight - s || e < s || o < s) && this.end(t)))
  }, rt.prototype.end = function (t) {
    I[t.type] === this.initiated && (this.setInitiated(), this.beforeHandler(t, "end"), this.hooks.trigger(this.hooks.eventTypes.end, t))
  }, rt.prototype.click = function (t) {
    this.hooks.trigger(this.hooks.eventTypes.click, t)
  }, rt.prototype.setContent = function (t) {
    t !== this.wrapper && (this.wrapper = t, this.rebindDOMEvents())
  }, rt.prototype.rebindDOMEvents = function () {
    this.wrapperEventRegister.destroy(), this.targetEventRegister.destroy(), this.handleDOMEvents()
  }, rt.prototype.destroy = function () {
    this.wrapperEventRegister.destroy(), this.targetEventRegister.destroy(), this.hooks.destroy()
  }, rt);

  function rt(t, e) {
    this.wrapper = t, this.options = e, this.hooks = new G(["beforeStart", "start", "move", "end", "click"]), this.handleDOMEvents()
  }
  var nt = {
      x: ["translateX", "px"],
      y: ["translateY", "px"]
    },
    ht = (lt.prototype.getComputedPosition = function () {
      var t = window.getComputedStyle(this.content, null)[z.transform].split(")")[0].split(", ");
      return {
        x: +(t[12] || t[4]) || 0,
        y: +(t[13] || t[5]) || 0
      }
    }, lt.prototype.translate = function (s) {
      var i = [];
      Object.keys(s).forEach(function (t) {
        var e, o;
        !nt[t] || (e = nt[t][0]) && (o = nt[t][1], t = s[t], i.push(e + "(" + t + o + ")"))
      }), this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, i, s), this.style[z.transform] = i.join(" "), this.hooks.trigger(this.hooks.eventTypes.translate, s)
    }, lt.prototype.setContent = function (t) {
      this.content !== t && (this.content = t, this.style = t.style)
    }, lt.prototype.destroy = function () {
      this.hooks.destroy()
    }, lt);

  function lt(t) {
    this.setContent(t), this.hooks = new G(["beforeTranslate", "translate"])
  }
  var at = (ct.prototype.translate = function (t) {
    this.translater.translate(t)
  }, ct.prototype.setPending = function (t) {
    this.pending = t
  }, ct.prototype.setForceStopped = function (t) {
    this.forceStopped = t
  }, ct.prototype.setCallStop = function (t) {
    this.callStopWhenPending = t
  }, ct.prototype.setContent = function (t) {
    this.content !== t && (this.content = t, this.style = t.style, this.stop())
  }, ct.prototype.clearTimer = function () {
    this.timer && (_(this.timer), this.timer = 0)
  }, ct.prototype.destroy = function () {
    this.hooks.destroy(), _(this.timer)
  }, ct);

  function ct(t, e, o) {
    this.translater = e, this.options = o, this.timer = 0, this.hooks = new G(["move", "end", "beforeForceStop", "forceStop", "callStop", "time", "timeFunction"]), this.setContent(t)
  }

  function pt(t, e, o, s) {
    function i(t, e) {
      return 0 < (e = t - e) ? -1 : e < 0 ? 1 : 0
    }
    var r = i(e.x, t.x),
      e = i(e.y, t.y),
      t = o.x - s.x,
      s = o.y - s.y;
    return r * t <= 0 && e * s <= 0
  }
  var ut, dt = (e(ft, ut = at), ft.prototype.startProbe = function (e, o) {
    var s = this,
      i = e,
      r = function () {
        var t = s.translater.getComputedPosition();
        pt(e, o, t, i) && s.hooks.trigger(s.hooks.eventTypes.move, t), s.pending || (s.callStopWhenPending ? s.callStopWhenPending = !1 : s.hooks.trigger(s.hooks.eventTypes.end, t)), i = t, s.pending && (s.timer = U(r))
      };
    this.callStopWhenPending && this.setCallStop(!1), _(this.timer), r()
  }, ft.prototype.transitionTime = function (t) {
    this.style[z.transitionDuration] = (t = void 0 === t ? 0 : t) + "ms", this.hooks.trigger(this.hooks.eventTypes.time, t)
  }, ft.prototype.transitionTimingFunction = function (t) {
    this.style[z.transitionTimingFunction] = t, this.hooks.trigger(this.hooks.eventTypes.timeFunction, t)
  }, ft.prototype.transitionProperty = function () {
    this.style[z.transitionProperty] = z.transform
  }, ft.prototype.move = function (t, e, o, s) {
    this.setPending(0 < o), this.transitionTimingFunction(s), this.transitionProperty(), this.transitionTime(o), this.translate(e);
    s = 3 === this.options.probeType;
    o && s && this.startProbe(t, e), o || (this._reflow = this.content.offsetHeight, s && this.hooks.trigger(this.hooks.eventTypes.move, e), this.hooks.trigger(this.hooks.eventTypes.end, e))
  }, ft.prototype.doStop = function () {
    var t, e, o = this.pending;
    return this.setForceStopped(!1), this.setCallStop(!1), o && (this.setPending(!1), _(this.timer), t = (e = this.translater.getComputedPosition()).x, e = e.y, this.transitionTime(), this.translate({
      x: t,
      y: e
    }), this.setForceStopped(!0), this.setCallStop(!0), this.hooks.trigger(this.hooks.eventTypes.forceStop, {
      x: t,
      y: e
    })), o
  }, ft.prototype.stop = function () {
    this.doStop() && this.hooks.trigger(this.hooks.eventTypes.callStop)
  }, ft);

  function ft() {
    return null !== ut && ut.apply(this, arguments) || this
  }
  var gt, yt = (e(vt, gt = at), vt.prototype.move = function (t, e, o, s) {
    if (!o) return this.translate(e), 3 === this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.move, e), void this.hooks.trigger(this.hooks.eventTypes.end, e);
    this.animate(t, e, o, s)
  }, vt.prototype.animate = function (r, n, e, o) {
    var h = this,
      l = v(),
      a = l + e,
      c = 3 === this.options.probeType,
      p = function () {
        var t = v();
        if (a <= t) return h.translate(n), c && h.hooks.trigger(h.hooks.eventTypes.move, n), void h.hooks.trigger(h.hooks.eventTypes.end, n);
        var s = o(t = (t - l) / e),
          i = {};
        Object.keys(n).forEach(function (t) {
          var e = r[t],
            o = n[t];
          i[t] = (o - e) * s + e
        }), h.translate(i), c && h.hooks.trigger(h.hooks.eventTypes.move, i), h.pending && (h.timer = U(p)), h.pending || (h.callStopWhenPending ? h.callStopWhenPending = !1 : h.hooks.trigger(h.hooks.eventTypes.end, n))
      };
    this.setPending(!0), this.callStopWhenPending && this.setCallStop(!1), _(this.timer), p()
  }, vt.prototype.doStop = function () {
    var t, e = this.pending;
    return this.setForceStopped(!1), this.setCallStop(!1), e && (this.setPending(!1), _(this.timer), t = this.translater.getComputedPosition(), this.setForceStopped(!0), this.setCallStop(!0), this.hooks.trigger(this.hooks.eventTypes.forceStop, t)), e
  }, vt.prototype.stop = function () {
    this.doStop() && this.hooks.trigger(this.hooks.eventTypes.callStop)
  }, vt);

  function vt() {
    return null !== gt && gt.apply(this, arguments) || this
  }
  var mt = (kt.prototype.start = function () {
    this.dist = 0, this.setMovingDirection(0), this.setDirection(0)
  }, kt.prototype.move = function (t) {
    return t = this.hasScroll ? t : 0, this.setMovingDirection(t), this.performDampingAlgorithm(t, this.options.outOfBoundaryDampingFactor)
  }, kt.prototype.setMovingDirection = function (t) {
    this.movingDirection = 0 < t ? -1 : t < 0 ? 1 : 0
  }, kt.prototype.setDirection = function (t) {
    this.direction = 0 < t ? -1 : t < 0 ? 1 : 0
  }, kt.prototype.performDampingAlgorithm = function (t, e) {
    var o = this.currentPos + t;
    return o = o > this.minScrollPos || o < this.maxScrollPos ? o > this.minScrollPos && this.options.bounces[0] || o < this.maxScrollPos && this.options.bounces[1] ? this.currentPos + t * e : o > this.minScrollPos ? this.minScrollPos : this.maxScrollPos : o
  }, kt.prototype.end = function (t) {
    var e = {
        duration: 0
      },
      o = Math.abs(this.currentPos - this.startPos);
    return this.options.momentum && t < this.options.momentumLimitTime && o > this.options.momentumLimitDistance ? (o = -1 === this.direction && this.options.bounces[0] || 1 === this.direction && this.options.bounces[1] ? this.wrapperSize : 0, e = this.hasScroll ? this.momentum(this.currentPos, this.startPos, t, this.maxScrollPos, this.minScrollPos, o, this.options) : {
      destination: this.currentPos,
      duration: 0
    }) : this.hooks.trigger(this.hooks.eventTypes.end, e), e
  }, kt.prototype.momentum = function (t, e, o, s, i, r, n) {
    void 0 === n && (n = this.options);
    var h = t - e,
      l = Math.abs(h) / o,
      e = n.deceleration,
      o = n.swipeBounceTime,
      n = n.swipeTime,
      e = {
        destination: t + l * l / e * (h < 0 ? -1 : 1),
        duration: Math.min(n, 2 * l / e),
        rate: 15
      };
    return this.hooks.trigger(this.hooks.eventTypes.momentum, e, h), e.destination < s ? (e.destination = r ? Math.max(s - r / 4, s - r / e.rate * l) : s, e.duration = o) : e.destination > i && (e.destination = r ? Math.min(i + r / 4, i + r / e.rate * l) : i, e.duration = o), e.destination = Math.round(e.destination), e
  }, kt.prototype.updateDirection = function () {
    var t = this.currentPos - this.absStartPos;
    this.setDirection(t)
  }, kt.prototype.refresh = function (t) {
    var e = this.options.rect,
      o = e.size,
      s = e.position,
      i = "static" === window.getComputedStyle(this.wrapper, null).position,
      e = L(this.wrapper);
    this.wrapperSize = this.wrapper["width" === o ? "clientWidth" : "clientHeight"], this.setContent(t);
    t = L(this.content);
    this.contentSize = t[o], this.relativeOffset = t[s], i && (this.relativeOffset -= e[s]), this.computeBoundary(), this.setDirection(0)
  }, kt.prototype.setContent = function (t) {
    t !== this.content && (this.content = t, this.resetState())
  }, kt.prototype.resetState = function () {
    this.currentPos = 0, this.startPos = 0, this.dist = 0, this.setDirection(0), this.setMovingDirection(0), this.resetStartPos()
  }, kt.prototype.computeBoundary = function () {
    this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
    var t = {
      minScrollPos: 0,
      maxScrollPos: this.wrapperSize - this.contentSize
    };
    t.maxScrollPos < 0 && (t.maxScrollPos -= this.relativeOffset, 0 === this.options.specifiedIndexAsContent && (t.minScrollPos = -this.relativeOffset)), this.hooks.trigger(this.hooks.eventTypes.computeBoundary, t), this.minScrollPos = t.minScrollPos, this.maxScrollPos = t.maxScrollPos, this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos, !this.hasScroll && this.minScrollPos < this.maxScrollPos && (this.maxScrollPos = this.minScrollPos, this.contentSize = this.wrapperSize)
  }, kt.prototype.updatePosition = function (t) {
    this.currentPos = t
  }, kt.prototype.getCurrentPos = function () {
    return this.currentPos
  }, kt.prototype.checkInBoundary = function () {
    var t = this.adjustPosition(this.currentPos);
    return {
      position: t,
      inBoundary: t === this.getCurrentPos()
    }
  }, kt.prototype.adjustPosition = function (t) {
    return !this.hasScroll && !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll) || t > this.minScrollPos ? t = this.minScrollPos : t < this.maxScrollPos && (t = this.maxScrollPos), t
  }, kt.prototype.updateStartPos = function () {
    this.startPos = this.currentPos
  }, kt.prototype.updateAbsStartPos = function () {
    this.absStartPos = this.currentPos
  }, kt.prototype.resetStartPos = function () {
    this.updateStartPos(), this.updateAbsStartPos()
  }, kt.prototype.getAbsDist = function (t) {
    return this.dist += t, Math.abs(this.dist)
  }, kt.prototype.destroy = function () {
    this.hooks.destroy()
  }, kt);

  function kt(t, e, o) {
    this.wrapper = t, this.options = o, this.hooks = new G(["beforeComputeBoundary", "computeBoundary", "momentum", "end", "ignoreHasScroll"]), this.refresh(e)
  }
  var Tt = ((Me = {}).yes = function (t) {
      return !0
    }, Me.no = function (t) {
      return t.preventDefault(), !1
    }, Me),
    St = ((Ie = {}).horizontal = ((Ee = {}).yes = "horizontal", Ee.no = "vertical", Ee), Ie.vertical = ((De = {}).yes = "vertical", De.no = "horizontal", De), Ie),
    Pt = (bt.prototype.reset = function () {
      this.directionLocked = ""
    }, bt.prototype.checkMovingDirection = function (t, e, o) {
      return this.computeDirectionLock(t, e), this.handleEventPassthrough(o)
    }, bt.prototype.adjustDelta = function (t, e) {
      return "horizontal" === this.directionLocked ? e = 0 : "vertical" === this.directionLocked && (t = 0), {
        deltaX: t,
        deltaY: e
      }
    }, bt.prototype.computeDirectionLock = function (t, e) {
      "" !== this.directionLocked || this.freeScroll || (t > e + this.directionLockThreshold ? this.directionLocked = "horizontal" : e >= t + this.directionLockThreshold ? this.directionLocked = "vertical" : this.directionLocked = "none")
    }, bt.prototype.handleEventPassthrough = function (t) {
      var e = St[this.directionLocked];
      if (e) {
        if (this.eventPassthrough === e.yes) return Tt.yes(t);
        if (this.eventPassthrough === e.no) return Tt.no(t)
      }
      return !1
    }, bt);

  function bt(t, e, o) {
    this.directionLockThreshold = t, this.freeScroll = e, this.eventPassthrough = o, this.reset()
  }
  var wt = (xt.prototype.bindActionsHandler = function () {
    var i = this;
    this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (t) {
      return !i.enabled || i.handleStart(t)
    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (t) {
      var e = t.deltaX,
        o = t.deltaY,
        s = t.e;
      if (!i.enabled) return !0;
      t = e, e = o, e = 2 === (o = i.options.quadrant) ? [e, -t] : 3 === o ? [-t, -e] : 4 === o ? [-e, t] : [t, e], e = {
        deltaX: e[0],
        deltaY: e[1]
      };
      return i.hooks.trigger(i.hooks.eventTypes.coordinateTransformation, e), i.handleMove(e.deltaX, e.deltaY, s)
    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (t) {
      return !i.enabled || i.handleEnd(t)
    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (t) {
      i.enabled && !t._constructed && i.handleClick(t)
    })
  }, xt.prototype.handleStart = function (t) {
    var e = v();
    this.fingerMoved = !1, this.contentMoved = !1, this.startTime = e, this.directionLockAction.reset(), this.scrollBehaviorX.start(), this.scrollBehaviorY.start(), this.animater.doStop(), this.scrollBehaviorX.resetStartPos(), this.scrollBehaviorY.resetStartPos(), this.hooks.trigger(this.hooks.eventTypes.start, t)
  }, xt.prototype.handleMove = function (t, e, o) {
    if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, o)) {
      var s = this.scrollBehaviorX.getAbsDist(t),
        i = this.scrollBehaviorY.getAbsDist(e),
        r = v();
      if (this.checkMomentum(s, i, r)) return !0;
      if (this.directionLockAction.checkMovingDirection(s, i, o)) return this.actionsHandler.setInitiated(), !0;
      i = this.directionLockAction.adjustDelta(t, e), o = this.scrollBehaviorX.getCurrentPos(), t = this.scrollBehaviorX.move(i.deltaX), e = this.scrollBehaviorY.getCurrentPos(), i = this.scrollBehaviorY.move(i.deltaY);
      this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection) || (this.fingerMoved || (this.fingerMoved = !0), e = t !== o || i !== e, this.contentMoved || e || this.hooks.trigger(this.hooks.eventTypes.contentNotMoved), !this.contentMoved && e && (this.contentMoved = !0, this.hooks.trigger(this.hooks.eventTypes.scrollStart)), this.contentMoved && e && (this.animater.translate({
        x: t,
        y: i
      }), this.dispatchScroll(r)))
    }
  }, xt.prototype.dispatchScroll = function (t) {
    t - this.startTime > this.options.momentumLimitTime && (this.startTime = t, this.scrollBehaviorX.updateStartPos(), this.scrollBehaviorY.updateStartPos(), 1 === this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())), 1 < this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())
  }, xt.prototype.checkMomentum = function (t, e, o) {
    return o - this.endTime > this.options.momentumLimitTime && e < this.options.momentumLimitDistance && t < this.options.momentumLimitDistance
  }, xt.prototype.handleEnd = function (t) {
    if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, t)) {
      var e = this.getCurrentPos();
      if (this.scrollBehaviorX.updateDirection(), this.scrollBehaviorY.updateDirection(), this.hooks.trigger(this.hooks.eventTypes.end, t, e)) return !0;
      e = this.ensureIntegerPos(e), this.animater.translate(e), this.endTime = v();
      t = this.endTime - this.startTime;
      this.hooks.trigger(this.hooks.eventTypes.scrollEnd, e, t)
    }
  }, xt.prototype.ensureIntegerPos = function (t) {
    this.ensuringInteger = !0;
    var e = t.x,
      o = t.y,
      s = this.scrollBehaviorX,
      i = s.minScrollPos,
      r = s.maxScrollPos,
      t = this.scrollBehaviorY,
      s = t.minScrollPos,
      t = t.maxScrollPos,
      e = 0 < e ? Math.ceil(e) : Math.floor(e),
      o = 0 < o ? Math.ceil(o) : Math.floor(o);
    return {
      x: e = T(e, r, i),
      y: o = T(o, t, s)
    }
  }, xt.prototype.handleClick = function (t) {
    F(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation())
  }, xt.prototype.getCurrentPos = function () {
    return {
      x: this.scrollBehaviorX.getCurrentPos(),
      y: this.scrollBehaviorY.getCurrentPos()
    }
  }, xt.prototype.refresh = function () {
    this.endTime = 0
  }, xt.prototype.destroy = function () {
    this.hooks.destroy()
  }, xt);

  function xt(t, e, o, s, i) {
    this.hooks = new G(["start", "beforeMove", "scrollStart", "scroll", "beforeEnd", "end", "scrollEnd", "contentNotMoved", "detectMovingDirection", "coordinateTransformation"]), this.scrollBehaviorX = t, this.scrollBehaviorY = e, this.actionsHandler = o, this.animater = s, this.options = i, this.directionLockAction = new Pt(i.directionLockThreshold, i.freeScroll, i.eventPassthrough), this.enabled = !0, this.bindActionsHandler()
  }

  function Mt(o, t, e, s) {
    var i = ["momentum", "momentumLimitTime", "momentumLimitDistance", "deceleration", "swipeBounceTime", "swipeTime", "outOfBoundaryDampingFactor", "specifiedIndexAsContent"].reduce(function (t, e) {
      return t[e] = o[e], t
    }, {});
    return i.scrollable = !!o[t], i.bounces = e, i.rect = s, i
  }

  function Yt(s, i, t) {
    t.forEach(function (t) {
      var e, o;
      "string" == typeof t ? e = o = t : (e = t.source, o = t.target), s.on(e, function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return i.trigger.apply(i, p([o], t))
      })
    })
  }
  var Bt = (Et.prototype.init = function () {
    var t = this;
    this.bindTranslater(), this.bindAnimater(), this.bindActions(), this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
      t.togglePointerEvents(!0)
    })
  }, Et.prototype.registerTransitionEnd = function () {
    this.transitionEndRegister = new J(this.content, [{
      name: z.transitionEnd,
      handler: this.transitionEnd.bind(this)
    }])
  }, Et.prototype.bindTranslater = function () {
    var o = this,
      t = this.translater.hooks;
    t.on(t.eventTypes.beforeTranslate, function (t) {
      o.options.translateZ && t.push(o.options.translateZ)
    }), t.on(t.eventTypes.translate, function (t) {
      var e = o.getCurrentPos();
      o.updatePositions(t), !0 !== o.actions.ensuringInteger ? t.x === e.x && t.y === e.y || o.togglePointerEvents(!1) : o.actions.ensuringInteger = !1
    })
  }, Et.prototype.bindAnimater = function () {
    var e = this;
    this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (t) {
      e.resetPosition(e.options.bounceTime) || (e.animater.setPending(!1), e.hooks.trigger(e.hooks.eventTypes.scrollEnd, t))
    }), Yt(this.animater.hooks, this.hooks, [{
      source: this.animater.hooks.eventTypes.move,
      target: this.hooks.eventTypes.scroll
    }, {
      source: this.animater.hooks.eventTypes.forceStop,
      target: this.hooks.eventTypes.scrollEnd
    }])
  }, Et.prototype.bindActions = function () {
    var i = this,
      r = this.actions;
    Yt(r.hooks, this.hooks, [{
      source: r.hooks.eventTypes.start,
      target: this.hooks.eventTypes.beforeStart
    }, {
      source: r.hooks.eventTypes.start,
      target: this.hooks.eventTypes.beforeScrollStart
    }, {
      source: r.hooks.eventTypes.beforeMove,
      target: this.hooks.eventTypes.beforeMove
    }, {
      source: r.hooks.eventTypes.scrollStart,
      target: this.hooks.eventTypes.scrollStart
    }, {
      source: r.hooks.eventTypes.scroll,
      target: this.hooks.eventTypes.scroll
    }, {
      source: r.hooks.eventTypes.beforeEnd,
      target: this.hooks.eventTypes.beforeEnd
    }]), r.hooks.on(r.hooks.eventTypes.end, function (t, e) {
      return i.hooks.trigger(i.hooks.eventTypes.touchEnd, e), !!i.hooks.trigger(i.hooks.eventTypes.end, e) || (!(r.fingerMoved || (i.hooks.trigger(i.hooks.eventTypes.scrollCancel), !i.checkClick(t))) || (i.resetPosition(i.options.bounceTime, W.bounce) ? (i.animater.setForceStopped(!1), !0) : void 0))
    }), r.hooks.on(r.hooks.eventTypes.scrollEnd, function (t, e) {
      var o = Math.abs(t.x - i.scrollBehaviorX.startPos),
        s = Math.abs(t.y - i.scrollBehaviorY.startPos);
      if (i.checkFlick(e, o, s)) return i.animater.setForceStopped(!1), void i.hooks.trigger(i.hooks.eventTypes.flick);
      i.momentum(t, e) ? i.animater.setForceStopped(!1) : (r.contentMoved && i.hooks.trigger(i.hooks.eventTypes.scrollEnd, t), i.animater.forceStopped && i.animater.setForceStopped(!1))
    })
  }, Et.prototype.checkFlick = function (t, e, o) {
    if (1 < this.hooks.events.flick.length && t < this.options.flickLimitTime && e < this.options.flickLimitDistance && o < this.options.flickLimitDistance && (1 < o || 1 < e)) return !0
  }, Et.prototype.momentum = function (t, e) {
    var o = {
        time: 0,
        easing: W.swiper,
        newX: t.x,
        newY: t.y
      },
      s = this.scrollBehaviorX.end(e),
      e = this.scrollBehaviorY.end(e);
    if (o.newX = k(s.destination) ? o.newX : s.destination, o.newY = k(e.destination) ? o.newY : e.destination, o.time = Math.max(s.duration, e.duration), this.hooks.trigger(this.hooks.eventTypes.momentum, o, this), o.newX !== t.x || o.newY !== t.y) return (o.newX > this.scrollBehaviorX.minScrollPos || o.newX < this.scrollBehaviorX.maxScrollPos || o.newY > this.scrollBehaviorY.minScrollPos || o.newY < this.scrollBehaviorY.maxScrollPos) && (o.easing = W.swipeBounce), this.scrollTo(o.newX, o.newY, o.time, o.easing), !0
  }, Et.prototype.checkClick = function (t) {
    var e = this.animater.forceStopped;
    if (this.hooks.trigger(this.hooks.eventTypes.checkClick)) return this.animater.setForceStopped(!1), !0;
    if (e) return !1;
    var o, s, i = this.options.dblclick,
      e = !1;
    return i && this.lastClickTime && (s = void 0 === (o = i.delay) ? 300 : o, v() - this.lastClickTime < s && (e = !0, N(t, "dblclick"))), this.options.tap && (i = t, o = this.options.tap, (s = document.createEvent("Event")).initEvent(o, !0, !0), s.pageX = i.pageX, s.pageY = i.pageY, i.target.dispatchEvent(s)), this.options.click && !F(t.target, this.options.preventDefaultException) && N(t), this.lastClickTime = e ? null : v(), !0
  }, Et.prototype.resize = function () {
    var t = this;
    this.actions.enabled && (d && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(function () {
      t.hooks.trigger(t.hooks.eventTypes.resize)
    }, this.options.resizePolling))
  }, Et.prototype.transitionEnd = function (t) {
    t.target === this.content && this.animater.pending && (this.animater.transitionTime(), this.resetPosition(this.options.bounceTime, W.bounce) || (this.animater.setPending(!1), 3 !== this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos())))
  }, Et.prototype.togglePointerEvents = function (t) {
    for (var e = this.content.children.length ? this.content.children : [this.content], o = (t = void 0 === t ? !0 : t) ? "auto" : "none", s = 0; s < e.length; s++) {
      var i = e[s];
      i.isBScrollContainer || (i.style.pointerEvents = o)
    }
  }, Et.prototype.refresh = function (t) {
    var e = this.setContent(t);
    this.hooks.trigger(this.hooks.eventTypes.beforeRefresh), this.scrollBehaviorX.refresh(t), this.scrollBehaviorY.refresh(t), e && (this.translater.setContent(t), this.animater.setContent(t), this.transitionEndRegister.destroy(), this.registerTransitionEnd(), this.options.bindToTarget && this.actionsHandler.setContent(t)), this.actions.refresh(), this.wrapperOffset = B(this.wrapper)
  }, Et.prototype.setContent = function (t) {
    var e = t !== this.content;
    return e && (this.content = t), e
  }, Et.prototype.scrollBy = function (t, e, o, s) {
    void 0 === o && (o = 0);
    var i = this.getCurrentPos(),
      r = i.x,
      i = i.y;
    this.scrollTo(t += r, e += i, o, s = s || W.bounce)
  }, Et.prototype.scrollTo = function (t, e, o, s, i) {
    void 0 === o && (o = 0), void 0 === s && (s = W.bounce), void 0 === i && (i = {
      start: {},
      end: {}
    });
    var r = this.options.useTransition ? s.style : s.fn,
      s = this.getCurrentPos(),
      s = c({
        x: s.x,
        y: s.y
      }, i.start),
      t = c({
        x: t,
        y: e
      }, i.end);
    this.hooks.trigger(this.hooks.eventTypes.scrollTo, t),
      function (t, e) {
        for (var o = 0, s = Object.keys(t); o < s.length; o++) {
          var i = s[o];
          if (t[i] !== e[i]) return
        }
        return 1
      }(s, t) || (e = Math.abs(t.x - s.x), i = Math.abs(t.y - s.y), e < 1 && i < 1 && (o = 0, this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)), this.animater.move(s, t, o, r))
  }, Et.prototype.scrollToElement = function (t, e, o, s, i) {
    var r = x(t),
      n = B(r),
      t = function (t, e, o) {
        return "number" == typeof t ? t : t ? Math.round(e / 2 - o / 2) : 0
      };
    o = t(o, r.offsetWidth, this.wrapper.offsetWidth), s = t(s, r.offsetHeight, this.wrapper.offsetHeight);
    t = function (t, e, o, s) {
      return t = s.adjustPosition((t -= e) - o)
    };
    n.left = t(n.left, this.wrapperOffset.left, o, this.scrollBehaviorX), n.top = t(n.top, this.wrapperOffset.top, s, this.scrollBehaviorY), this.hooks.trigger(this.hooks.eventTypes.scrollToElement, r, n) || this.scrollTo(n.left, n.top, e, i)
  }, Et.prototype.resetPosition = function (t, e) {
    void 0 === t && (t = 0), void 0 === e && (e = W.bounce);
    var o = this.scrollBehaviorX.checkInBoundary(),
      s = o.position,
      i = o.inBoundary,
      r = this.scrollBehaviorY.checkInBoundary(),
      o = r.position,
      r = r.inBoundary;
    return (!i || !r) && (f && this.reflow(), this.scrollTo(s, o, t, e), !0)
  }, Et.prototype.reflow = function () {
    this._reflow = this.content.offsetHeight
  }, Et.prototype.updatePositions = function (t) {
    this.scrollBehaviorX.updatePosition(t.x), this.scrollBehaviorY.updatePosition(t.y)
  }, Et.prototype.getCurrentPos = function () {
    return this.actions.getCurrentPos()
  }, Et.prototype.enable = function () {
    this.actions.enabled = !0
  }, Et.prototype.disable = function () {
    _(this.animater.timer), this.actions.enabled = !1
  }, Et.prototype.destroy = function () {
    var e = this;
    ["resizeRegister", "transitionEndRegister", "actionsHandler", "actions", "hooks", "animater", "translater", "scrollBehaviorX", "scrollBehaviorY"].forEach(function (t) {
      return e[t].destroy()
    })
  }, Et);

  function Et(t, e, o) {
    this.wrapper = t, this.content = e, this.resizeTimeout = 0, this.hooks = new G(["beforeStart", "beforeMove", "beforeScrollStart", "scrollStart", "scroll", "beforeEnd", "scrollEnd", "resize", "touchEnd", "end", "flick", "scrollCancel", "momentum", "scrollTo", "minDistanceScroll", "scrollToElement", "beforeRefresh"]), this.options = o;
    var s, i, r = this.options.bounce,
      n = r.left,
      h = r.right,
      l = r.top,
      r = r.bottom;
    this.scrollBehaviorX = new mt(t, e, Mt(o, "scrollX", [n, h], {
      size: "width",
      position: "left"
    })), this.scrollBehaviorY = new mt(t, e, Mt(o, "scrollY", [l, r], {
      size: "height",
      position: "top"
    })), this.translater = new ht(this.content), this.animater = (e = this.content, o = this.translater, s = this.options, l = s.useTransition, r = {}, Object.defineProperty(r, "probeType", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return s.probeType
      }
    }), new(l ? dt : yt)(e, o, r)), this.actionsHandler = new it(this.options.bindToTarget ? this.content : t, (i = this.options, ["click", "bindToWrapper", "disableMouse", "disableTouch", "preventDefault", "stopPropagation", "tagException", "preventDefaultException", "autoEndDistance"].reduce(function (t, e) {
      return t[e] = i[e], t
    }, {}))), this.actions = new wt(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
    t = this.resize.bind(this);
    this.resizeRegister = new J(window, [{
      name: "orientationchange",
      handler: t
    }, {
      name: "resize",
      handler: t
    }]), this.registerTransitionEnd(), this.init()
  }
  var Xt, Dt = (e(Ot, Xt = G), Ot.use = function (e) {
    var t = e.pluginName;
    return Ot.plugins.some(function (t) {
      return e === t.ctor
    }) || (k(t) ? n("Plugin Class must specify plugin's name in static property by 'pluginName' field.") : (Ot.pluginsMap[t] = !0, Ot.plugins.push({
      name: t,
      applyOrder: e.applyOrder,
      ctor: e
    }))), Ot
  }, Ot.prototype.setContent = function (t) {
    var e = !1,
      o = !0,
      t = t.children[this.options.specifiedIndexAsContent];
    return t ? (e = this.content !== t) && (this.content = t) : (n("The wrapper need at least one child element to be content element to scroll."), o = !1), {
      valid: o,
      contentChanged: e
    }
  }, Ot.prototype.init = function (t) {
    var e = this;
    (this.wrapper = t).isBScrollContainer = !0, this.scroller = new Bt(t, this.content, this.options), this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function () {
      e.refresh()
    }), this.eventBubbling(), this.handleAutoBlur(), this.enable(), this.proxy(o), this.applyPlugins(), this.refreshWithoutReset(this.content);
    t = this.options, t = {
      x: t.startX,
      y: t.startY
    };
    this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, t) || this.scroller.scrollTo(t.x, t.y)
  }, Ot.prototype.applyPlugins = function () {
    var o = this,
      s = this.options;
    Ot.plugins.sort(function (t, e) {
      var o = ((o = {}).pre = -1, o.post = 1, o);
      return (t.applyOrder ? o[t.applyOrder] : 0) - (e.applyOrder ? o[e.applyOrder] : 0)
    }).forEach(function (t) {
      var e = t.ctor;
      s[t.name] && "function" == typeof e && (o.plugins[t.name] = new e(o))
    })
  }, Ot.prototype.handleAutoBlur = function () {
    this.options.autoBlur && this.on(this.eventTypes.beforeScrollStart, function () {
      var t = document.activeElement;
      !t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
    })
  }, Ot.prototype.eventBubbling = function () {
    Yt(this.scroller.hooks, this, [this.eventTypes.beforeScrollStart, this.eventTypes.scrollStart, this.eventTypes.scroll, this.eventTypes.scrollEnd, this.eventTypes.scrollCancel, this.eventTypes.touchEnd, this.eventTypes.flick])
  }, Ot.prototype.refreshWithoutReset = function (t) {
    this.scroller.refresh(t), this.hooks.trigger(this.hooks.eventTypes.refresh, t), this.trigger(this.eventTypes.refresh, t)
  }, Ot.prototype.proxy = function (t) {
    var o = this;
    t.forEach(function (t) {
      var e = t.key,
        t = t.sourceKey;
      q(o, t, e)
    })
  }, Ot.prototype.refresh = function () {
    var t = this.setContent(this.wrapper),
      e = t.contentChanged;
    t.valid && (t = this.content, this.refreshWithoutReset(t), e && (this.hooks.trigger(this.hooks.eventTypes.contentChanged, t), this.trigger(this.eventTypes.contentChanged, t)), this.scroller.resetPosition())
  }, Ot.prototype.enable = function () {
    this.scroller.enable(), this.hooks.trigger(this.hooks.eventTypes.enable), this.trigger(this.eventTypes.enable)
  }, Ot.prototype.disable = function () {
    this.scroller.disable(), this.hooks.trigger(this.hooks.eventTypes.disable), this.trigger(this.eventTypes.disable)
  }, Ot.prototype.destroy = function () {
    this.hooks.trigger(this.hooks.eventTypes.destroy), this.trigger(this.eventTypes.destroy), this.scroller.destroy()
  }, Ot.prototype.eventRegister = function (t) {
    this.registerType(t)
  }, Ot.plugins = [], Ot.pluginsMap = {}, Ot);

  function Ot(t, e) {
    var o = Xt.call(this, ["refresh", "contentChanged", "enable", "disable", "beforeScrollStart", "scrollStart", "scroll", "scrollEnd", "scrollCancel", "touchEnd", "flick", "destroy"]) || this,
      t = x(t);
    return t ? (o.plugins = {}, o.options = (new ot).merge(e).process(), o.setContent(t).valid && (o.hooks = new G(["refresh", "enable", "disable", "destroy", "beforeInitialScrollTo", "contentChanged"]), o.init(t)), o) : (n("Can not resolve the wrapper DOM."), o)
  }

  function Ht(t, e) {
    return new Dt(t, e)
  }
  Ht.use = Dt.use, Ht.plugins = Dt.plugins, Ht.pluginsMap = Dt.pluginsMap;
  var Ct = Ht,
    zt = (It.prototype.init = function () {
      this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.registerEvent()
    }, It.prototype.handleBScroll = function () {
      this.scroll.registerType(["alterOptions", "mousewheelStart", "mousewheelMove", "mousewheelEnd"])
    }, It.prototype.handleOptions = function () {
      var t = !0 === this.scroll.options.mouseWheel ? {} : this.scroll.options.mouseWheel;
      this.mouseWheelOpt = m({
        speed: 20,
        invert: !1,
        easeTime: 300,
        discreteTime: 400,
        throttleTime: 0,
        dampingFactor: .1
      }, t)
    }, It.prototype.handleHooks = function () {
      this.hooksFn = [], this.registerHooks(this.scroll.hooks, "destroy", this.destroy)
    }, It.prototype.registerEvent = function () {
      this.eventRegister = new J(this.scroll.scroller.wrapper, [{
        name: "wheel",
        handler: this.wheelHandler.bind(this)
      }, {
        name: "mousewheel",
        handler: this.wheelHandler.bind(this)
      }, {
        name: "DOMMouseScroll",
        handler: this.wheelHandler.bind(this)
      }])
    }, It.prototype.registerHooks = function (t, e, o) {
      t.on(e, o, this), this.hooksFn.push([t, e, o])
    }, It.prototype.wheelHandler = function (t) {
      this.scroll.enabled && (this.beforeHandler(t), this.wheelStart || (this.wheelStartHandler(t), this.wheelStart = !0), t = this.getWheelDelta(t), this.wheelMoveHandler(t), this.wheelEndDetector(t))
    }, It.prototype.wheelStartHandler = function (t) {
      this.cleanCache();
      var e = this.scroll.scroller,
        o = e.scrollBehaviorX,
        e = e.scrollBehaviorY;
      o.setMovingDirection(0), e.setMovingDirection(0), o.setDirection(0), e.setDirection(0), this.scroll.trigger(this.scroll.eventTypes.alterOptions, this.mouseWheelOpt), this.scroll.trigger(this.scroll.eventTypes.mousewheelStart)
    }, It.prototype.cleanCache = function () {
      this.deltaCache = []
    }, It.prototype.wheelMoveHandler = function (t) {
      var e, o, s = this,
        i = this.mouseWheelOpt,
        r = i.throttleTime,
        n = i.dampingFactor;
      r && this.wheelMoveTimer ? this.deltaCache.push(t) : (o = this.deltaCache.reduce(function (t, e) {
        return {
          x: t.x + e.x,
          y: t.y + e.y
        }
      }, {
        x: 0,
        y: 0
      }), this.cleanCache(), i = (e = this.scroll.scroller).scrollBehaviorX, e = e.scrollBehaviorY, i.setMovingDirection(-t.directionX), e.setMovingDirection(-t.directionY), i.setDirection(t.x), e.setDirection(t.y), i = i.performDampingAlgorithm(Math.round(t.x) + o.x, n), o = e.performDampingAlgorithm(Math.round(t.y) + o.x, n), this.scroll.trigger(this.scroll.eventTypes.mousewheelMove, {
        x: i,
        y: o
      }) || (n = this.getEaseTime(), i === this.scroll.x && o === this.scroll.y || this.scroll.scrollTo(i, o, n)), r && (this.wheelMoveTimer = window.setTimeout(function () {
        s.wheelMoveTimer = 0
      }, r)))
    }, It.prototype.wheelEndDetector = function (t) {
      var e = this;
      window.clearTimeout(this.wheelEndTimer), this.wheelEndTimer = window.setTimeout(function () {
        e.wheelStart = !1, window.clearTimeout(e.wheelMoveTimer), e.wheelMoveTimer = 0, e.scroll.trigger(e.scroll.eventTypes.mousewheelEnd, t)
      }, this.mouseWheelOpt.discreteTime)
    }, It.prototype.getWheelDelta = function (t) {
      var e = this.mouseWheelOpt,
        o = e.speed,
        s = 0,
        i = 0,
        e = e.invert ? -1 : 1;
      switch (!0) {
        case "deltaX" in t:
          i = 1 === t.deltaMode ? (s = -t.deltaX * o, -t.deltaY * o) : (s = -t.deltaX, -t.deltaY);
          break;
        case "wheelDeltaX" in t:
          s = t.wheelDeltaX / 120 * o, i = t.wheelDeltaY / 120 * o;
          break;
        case "wheelDelta" in t:
          s = i = t.wheelDelta / 120 * o;
          break;
        case "detail" in t:
          s = i = -t.detail / 3 * o
      }
      return s *= e, i *= e, this.scroll.hasVerticalScroll || (s = i, i = 0), {
        x: s = !this.scroll.hasHorizontalScroll ? 0 : s,
        y: i,
        directionX: 0 < s ? -1 : s < 0 ? 1 : 0,
        directionY: 0 < i ? -1 : i < 0 ? 1 : 0
      }
    }, It.prototype.beforeHandler = function (t) {
      var e = this.scroll.options,
        o = e.preventDefault,
        s = e.stopPropagation,
        e = e.preventDefaultException;
      o && !F(t.target, e) && t.preventDefault(), s && t.stopPropagation()
    }, It.prototype.getEaseTime = function () {
      var t = this.mouseWheelOpt.easeTime;
      return t < 100 && n("easeTime should be greater than 100.If mouseWheel easeTime is too small,scrollEnd will be triggered many times."), Math.max(t, 100)
    }, It.prototype.destroy = function () {
      this.eventRegister.destroy(), window.clearTimeout(this.wheelEndTimer), window.clearTimeout(this.wheelMoveTimer), this.hooksFn.forEach(function (t) {
        var e = t[0],
          o = t[1],
          t = t[2];
        e.off(o, t)
      })
    }, It.pluginName = "mouseWheel", It.applyOrder = "pre", It);

  function It(t) {
    this.scroll = t, this.wheelEndTimer = 0, this.wheelMoveTimer = 0, this.wheelStart = !1, this.init()
  }
  var Lt = (Ft.prototype.init = function () {
    this.handleMutationObserver(), this.handleHooks()
  }, Ft.prototype.handleMutationObserver = function () {
    var e = this;
    "undefined" != typeof MutationObserver ? (this.observer = new MutationObserver(function (t) {
      e.mutationObserverHandler(t, 0)
    }), this.startObserve(this.observer)) : this.checkDOMUpdate()
  }, Ft.prototype.handleHooks = function () {
    var t = this;
    this.hooksFn = [], this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, function () {
      t.stopObserve(), t.handleMutationObserver()
    }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.enable, function () {
      t.stopObserver && t.handleMutationObserver()
    }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.disable, function () {
      t.stopObserve()
    }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, function () {
      t.destroy()
    })
  }, Ft.prototype.mutationObserverHandler = function (t, e) {
    var o = this;
    if (!this.shouldNotRefresh()) {
      for (var s = !1, i = !1, r = 0; r < t.length; r++) {
        var n = t[r];
        if ("attributes" !== n.type) {
          s = !0;
          break
        }
        if (n.target !== this.scroll.scroller.content) {
          i = !0;
          break
        }
      }
      s ? this.scroll.refresh() : i && (clearTimeout(e), e = window.setTimeout(function () {
        o.shouldNotRefresh() || o.scroll.refresh()
      }, 60))
    }
  }, Ft.prototype.startObserve = function (t) {
    t.observe(this.scroll.scroller.content, {
      attributes: !0,
      childList: !0,
      subtree: !0
    })
  }, Ft.prototype.shouldNotRefresh = function () {
    var t = this.scroll.scroller,
      e = t.scrollBehaviorX,
      o = t.scrollBehaviorY,
      o = e.currentPos > e.minScrollPos || e.currentPos < e.maxScrollPos || o.currentPos > o.minScrollPos || o.currentPos < o.maxScrollPos;
    return t.animater.pending || o
  }, Ft.prototype.checkDOMUpdate = function () {
    var o = this,
      s = this.scroll.scroller.content,
      i = L(s),
      r = i.width,
      n = i.height,
      h = function () {
        setTimeout(function () {
          var t, e;
          o.stopObserver || (t = (i = L(s)).width, e = i.height, r === t && n === e || o.scroll.refresh(), r = t, n = e, h())
        }, 1e3)
      };
    h()
  }, Ft.prototype.registerHooks = function (t, e, o) {
    t.on(e, o, this), this.hooksFn.push([t, e, o])
  }, Ft.prototype.stopObserve = function () {
    this.stopObserver = !0, this.observer && this.observer.disconnect()
  }, Ft.prototype.destroy = function () {
    this.stopObserve(), this.hooksFn.forEach(function (t) {
      var e = t[0],
        o = t[1],
        t = t[2];
      e.off(o, t)
    }), this.hooksFn.length = 0
  }, Ft.pluginName = "observeDOM", Ft);

  function Ft(t) {
    this.scroll = t, this.stopObserver = !1, this.init()
  }
  var At = [{
      key: "finishPullDown",
      name: "finishPullDown"
    }, {
      key: "openPullDown",
      name: "openPullDown"
    }, {
      key: "closePullDown",
      name: "closePullDown"
    }, {
      key: "autoPullDownRefresh",
      name: "autoPullDownRefresh"
    }].map(function (t) {
      return {
        key: t.key,
        sourceKey: "plugins.pullDownRefresh." + t.name
      }
    }),
    Nt = "pullingDown",
    Rt = "enterThreshold",
    Wt = "leaveThreshold",
    y = (Kt.prototype.setPulling = function (t) {
      this.pulling = t
    }, Kt.prototype.setThresholdBoundary = function (t) {
      this.thresholdBoundary = t
    }, Kt.prototype.init = function () {
      this.handleBScroll(), this.handleOptions(this.scroll.options.pullDownRefresh), this.handleHooks(), this.watch()
    }, Kt.prototype.handleBScroll = function () {
      this.scroll.registerType([Nt, Rt, Wt]), this.scroll.proxy(At)
    }, Kt.prototype.handleOptions = function (t) {
      this.options = m({
        threshold: 90,
        stop: 40
      }, t = !0 === (t = void 0 === t ? {} : t) ? {} : t), this.scroll.options.probeType = 3
    }, Kt.prototype.handleHooks = function () {
      var e = this;
      this.hooksFn = [];
      var t = this.scroll.scroller,
        o = t.scrollBehaviorY;
      this.currentMinScrollY = this.cachedOriginanMinScrollY = o.minScrollPos, this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, function () {
        e.finishPullDown()
      }), this.registerHooks(o.hooks, o.hooks.eventTypes.computeBoundary, function (t) {
        0 < t.maxScrollPos && (t.maxScrollPos = -1), t.minScrollPos = e.currentMinScrollY
      }), this.hasMouseWheelPlugin() && (this.registerHooks(this.scroll, this.scroll.eventTypes.alterOptions, function (t) {
        t.discreteTime = 300, t.easeTime = 350
      }), this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, function () {
        t.hooks.trigger(t.hooks.eventTypes.end)
      }))
    }, Kt.prototype.registerHooks = function (t, e, o) {
      t.on(e, o, this), this.hooksFn.push([t, e, o])
    }, Kt.prototype.hasMouseWheelPlugin = function () {
      return !!this.scroll.eventTypes.alterOptions
    }, Kt.prototype.watch = function () {
      var t = this.scroll.scroller;
      this.watching = !0, this.registerHooks(t.hooks, t.hooks.eventTypes.end, this.checkPullDown), this.registerHooks(this.scroll, this.scroll.eventTypes.scrollStart, this.resetStateBeforeScrollStart), this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkLocationOfThresholdBoundary), this.hasMouseWheelPlugin() && this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart)
    }, Kt.prototype.resetStateBeforeScrollStart = function () {
      this.isFetchingStatus() || (this.setPulling(1), this.setThresholdBoundary(0))
    }, Kt.prototype.checkLocationOfThresholdBoundary = function () {
      var t, e, o;
      1 === this.pulling && (t = this.scroll, e = 1 !== this.thresholdBoundary && this.locateInsideThresholdBoundary(), o = 2 !== this.thresholdBoundary && !this.locateInsideThresholdBoundary(), e && (this.setThresholdBoundary(1), t.trigger(Rt)), o && (this.setThresholdBoundary(2), t.trigger(Wt)))
    }, Kt.prototype.locateInsideThresholdBoundary = function () {
      return this.scroll.y <= this.options.threshold
    }, Kt.prototype.unwatch = function () {
      var t = this.scroll,
        e = t.scroller;
      this.watching = !1, e.hooks.off(e.hooks.eventTypes.end, this.checkPullDown), t.off(t.eventTypes.scrollStart, this.resetStateBeforeScrollStart), t.off(t.eventTypes.scroll, this.checkLocationOfThresholdBoundary), this.hasMouseWheelPlugin() && t.off(t.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart)
    }, Kt.prototype.checkPullDown = function () {
      var t = this.options,
        e = t.threshold,
        t = t.stop;
      return !(this.scroll.y < e) && (1 === this.pulling && (this.modifyBehaviorYBoundary(t), this.setPulling(2), this.scroll.trigger(Nt)), this.scroll.scrollTo(this.scroll.x, t, this.scroll.options.bounceTime, W.bounce), this.isFetchingStatus())
    }, Kt.prototype.isFetchingStatus = function () {
      return 2 === this.pulling
    }, Kt.prototype.modifyBehaviorYBoundary = function (t) {
      var e = this.scroll.scroller.scrollBehaviorY;
      this.cachedOriginanMinScrollY = e.minScrollPos, this.currentMinScrollY = t, e.computeBoundary()
    }, Kt.prototype.finishPullDown = function () {
      var t;
      this.isFetchingStatus() && (t = this.scroll.scroller.scrollBehaviorY, this.currentMinScrollY = this.cachedOriginanMinScrollY, t.computeBoundary(), this.setPulling(0), this.scroll.resetPosition(this.scroll.options.bounceTime, W.bounce))
    }, Kt.prototype.openPullDown = function (t) {
      this.handleOptions(t = void 0 === t ? {} : t), this.watching || this.watch()
    }, Kt.prototype.closePullDown = function () {
      this.unwatch()
    }, Kt.prototype.autoPullDownRefresh = function () {
      var t = this.options,
        e = t.threshold,
        t = t.stop;
      !this.isFetchingStatus() && this.watching && (this.modifyBehaviorYBoundary(t), this.scroll.trigger(this.scroll.eventTypes.scrollStart), this.scroll.scrollTo(this.scroll.x, e), this.setPulling(2), this.scroll.trigger(Nt), this.scroll.scrollTo(this.scroll.x, t, this.scroll.options.bounceTime, W.bounce))
    }, Kt.pluginName = "pullDownRefresh", Kt);

  function Kt(t) {
    this.scroll = t, this.pulling = 0, this.thresholdBoundary = 0, this.init()
  }
  var jt = [{
      key: "finishPullUp",
      name: "finishPullUp"
    }, {
      key: "openPullUp",
      name: "openPullUp"
    }, {
      key: "closePullUp",
      name: "closePullUp"
    }, {
      key: "autoPullUpLoad",
      name: "autoPullUpLoad"
    }].map(function (t) {
      return {
        key: t.key,
        sourceKey: "plugins.pullUpLoad." + t.name
      }
    }),
    Ut = "pullingUp",
    u = (_t.prototype.init = function () {
      this.handleBScroll(), this.handleOptions(this.scroll.options.pullUpLoad), this.handleHooks(), this.watch()
    }, _t.prototype.handleBScroll = function () {
      this.scroll.registerType([Ut]), this.scroll.proxy(jt)
    }, _t.prototype.handleOptions = function (t) {
      this.options = m({
        threshold: 0
      }, t = !0 === (t = void 0 === t ? {} : t) ? {} : t), this.scroll.options.probeType = 3
    }, _t.prototype.handleHooks = function () {
      var t = this;
      this.hooksFn = [];
      var e = this.scroll.scroller.scrollBehaviorY;
      this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, function () {
        t.finishPullUp()
      }), this.registerHooks(e.hooks, e.hooks.eventTypes.computeBoundary, function (t) {
        0 < t.maxScrollPos && (t.maxScrollPos = -1)
      })
    }, _t.prototype.registerHooks = function (t, e, o) {
      t.on(e, o, this), this.hooksFn.push([t, e, o])
    }, _t.prototype.watch = function () {
      this.watching || (this.watching = !0, this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkPullUp))
    }, _t.prototype.unwatch = function () {
      this.watching = !1, this.scroll.off(this.scroll.eventTypes.scroll, this.checkPullUp)
    }, _t.prototype.checkPullUp = function (t) {
      var e = this,
        o = this.options.threshold;
      1 === this.scroll.movingDirectionY && t.y <= this.scroll.maxScrollY + o && (this.pulling = !0, this.scroll.once(this.scroll.eventTypes.scrollEnd, function () {
        e.pulling = !1
      }), this.unwatch(), this.scroll.trigger(Ut))
    }, _t.prototype.finishPullUp = function () {
      var t = this;
      this.scroll.scroller.scrollBehaviorY.setMovingDirection(0), this.pulling ? this.scroll.once(this.scroll.eventTypes.scrollEnd, function () {
        t.watch()
      }) : this.watch()
    }, _t.prototype.openPullUp = function (t) {
      this.handleOptions(t = void 0 === t ? {} : t), this.watch()
    }, _t.prototype.closePullUp = function () {
      this.unwatch()
    }, _t.prototype.autoPullUpLoad = function () {
      var t = this.options.threshold,
        e = this.scroll.scroller.scrollBehaviorY;
      !this.pulling && this.watching && (t = e.maxScrollPos + t + -1, this.scroll.scroller.scrollBehaviorY.setMovingDirection(-1), this.scroll.scrollTo(this.scroll.x, t, this.scroll.options.bounceTime))
    }, _t.pluginName = "pullUpLoad", _t);

  function _t(t) {
    this.scroll = t, this.pulling = !1, this.watching = !1, this.init()
  }
  var Vt = (Zt.prototype.registerEvents = function () {
    var t = this.options,
      e = t.disableMouse,
      o = t.disableTouch,
      s = [],
      i = [],
      t = [];
    e || (s.push({
      name: "mousedown",
      handler: this.start.bind(this)
    }), i.push({
      name: "mousemove",
      handler: this.move.bind(this)
    }), t.push({
      name: "mouseup",
      handler: this.end.bind(this)
    })), o || (s.push({
      name: "touchstart",
      handler: this.start.bind(this)
    }), i.push({
      name: "touchmove",
      handler: this.move.bind(this)
    }), t.push({
      name: "touchend",
      handler: this.end.bind(this)
    }, {
      name: "touchcancel",
      handler: this.end.bind(this)
    })), this.startEventRegister = new J(this.indicator.indicatorEl, s), this.moveEventRegister = new J(window, i), this.endEventRegister = new J(window, t)
  }, Zt.prototype.BScrollIsDisabled = function () {
    return !this.indicator.scroll.enabled
  }, Zt.prototype.start = function (t) {
    var e;
    this.BScrollIsDisabled() || (e = t.touches ? t.touches[0] : t, t.preventDefault(), t.stopPropagation(), this.initiated = !0, this.lastPoint = e[this.indicator.keysMap.point], this.hooks.trigger(this.hooks.eventTypes.touchStart))
  }, Zt.prototype.move = function (t) {
    var e;
    this.initiated && (e = (t.touches ? t.touches[0] : t)[this.indicator.keysMap.point], t.preventDefault(), t.stopPropagation(), t = e - this.lastPoint, this.lastPoint = e, this.hooks.trigger(this.hooks.eventTypes.touchMove, t))
  }, Zt.prototype.end = function (t) {
    this.initiated && (this.initiated = !1, t.preventDefault(), t.stopPropagation(), this.hooks.trigger(this.hooks.eventTypes.touchEnd))
  }, Zt.prototype.destroy = function () {
    this.startEventRegister.destroy(), this.moveEventRegister.destroy(), this.endEventRegister.destroy()
  }, Zt);

  function Zt(t, e) {
    this.indicator = t, this.options = e, this.hooks = new G(["touchStart", "touchMove", "touchEnd"]), this.registerEvents()
  }
  var qt = (Gt.prototype.handleFade = function () {
    this.options.fade && (this.wrapper.style.opacity = "0")
  }, Gt.prototype.handleHooks = function () {
    var o = this,
      t = this.options,
      e = t.fade,
      s = t.interactive,
      i = t.scrollbarTrackClickable,
      r = this.scroll,
      n = r.hooks,
      h = r.scroller.translater.hooks,
      t = r.scroller.animater.hooks;
    this.registerHooks(n, n.eventTypes.refresh, this.refresh), this.registerHooks(h, h.eventTypes.translate, function (t) {
      var e = o.keysMap.hasScroll;
      o.scroll[e] && o.updatePosition(t)
    }), this.registerHooks(t, t.eventTypes.time, this.transitionTime), this.registerHooks(t, t.eventTypes.timeFunction, this.transitionTimingFunction), e && (this.registerHooks(r, r.eventTypes.scrollEnd, function () {
      o.fade()
    }), this.registerHooks(r, r.eventTypes.scrollStart, function () {
      o.fade(!0)
    }), r.eventTypes.mousewheelStart && r.eventTypes.mousewheelEnd && (this.registerHooks(r, r.eventTypes.mousewheelStart, function () {
      o.fade(!0)
    }), this.registerHooks(r, r.eventTypes.mousewheelMove, function () {
      o.fade(!0)
    }), this.registerHooks(r, r.eventTypes.mousewheelEnd, function () {
      o.fade()
    }))), s && (s = (r = this.scroll.options).disableMouse, r = r.disableTouch, this.eventHandler = new Vt(this, {
      disableMouse: s,
      disableTouch: r
    }), r = this.eventHandler.hooks, this.registerHooks(r, r.eventTypes.touchStart, this.startHandler), this.registerHooks(r, r.eventTypes.touchMove, this.moveHandler), this.registerHooks(r, r.eventTypes.touchEnd, this.endHandler)), i && this.bindClick()
  }, Gt.prototype.registerHooks = function (t, e, o) {
    t.on(e, o, this), this.hooksFn.push([t, e, o])
  }, Gt.prototype.bindClick = function () {
    var t = this.wrapper;
    this.clickEventRegister = new J(t, [{
      name: "click",
      handler: this.handleClick.bind(this)
    }])
  }, Gt.prototype.handleClick = function (t) {
    var e = this.calculateclickOffsetPos(t),
      o = this.scroll,
      t = o.x,
      o = o.y,
      t = "horizontal" === this.direction ? e : t,
      o = "vertical" === this.direction ? e : o;
    this.scroll.scrollTo(t, o, this.options.scrollbarTrackOffsetTime)
  }, Gt.prototype.calculateclickOffsetPos = function (t) {
    var e = this.keysMap,
      o = e.point,
      s = e.domRect,
      i = this.options.scrollbarTrackOffsetType,
      e = t[o] - this.wrapperRect[s],
      t = e < this.currentPos ? -1 : 1,
      o = 0,
      s = this.currentPos;
    return "step" === i ? o = this.scrollInfo.baseSize * t : (o = 0, s = e), this.newPos(s, o, this.scrollInfo)
  }, Gt.prototype.getKeysMap = function () {
    return "vertical" === this.direction ? {
      hasScroll: "hasVerticalScroll",
      size: "height",
      wrapperSize: "clientHeight",
      scrollerSize: "scrollerHeight",
      maxScrollPos: "maxScrollY",
      pos: "y",
      point: "pageY",
      translateProperty: "translateY",
      domRect: "top"
    } : {
      hasScroll: "hasHorizontalScroll",
      size: "width",
      wrapperSize: "clientWidth",
      scrollerSize: "scrollerWidth",
      maxScrollPos: "maxScrollX",
      pos: "x",
      point: "pageX",
      translateProperty: "translateX",
      domRect: "left"
    }
  }, Gt.prototype.fade = function (t) {
    var e = this.options,
      o = e.fadeInTime,
      s = e.fadeOutTime,
      e = this.wrapper;
    e.style[z.transitionDuration] = (t ? o : s) + "ms", e.style.opacity = t ? "1" : "0"
  }, Gt.prototype.refresh = function () {
    var t, e, o = this.keysMap.hasScroll,
      s = this.scroll,
      i = s.x,
      r = s.y;
    this.wrapperRect = this.wrapper.getBoundingClientRect(), this.canScroll(s[o]) && (t = (e = this.keysMap).wrapperSize, o = e.scrollerSize, e = e.maxScrollPos, this.scrollInfo = this.refreshScrollInfo(this.wrapper[t], s[o], s[e], this.indicatorEl[t]), this.updatePosition({
      x: i,
      y: r
    }))
  }, Gt.prototype.transitionTime = function (t) {
    this.indicatorEl.style[z.transitionDuration] = (t = void 0 === t ? 0 : t) + "ms"
  }, Gt.prototype.transitionTimingFunction = function (t) {
    this.indicatorEl.style[z.transitionTimingFunction] = t
  }, Gt.prototype.canScroll = function (t) {
    return this.wrapper.style.display = t ? "block" : "none", t
  }, Gt.prototype.refreshScrollInfo = function (t, e, o, s) {
    e = Math.max(Math.round(t * t / (e || t || 1)), this.options.minSize), s = t - (e = this.options.isCustom ? s : e);
    return {
      baseSize: e,
      maxScrollPos: s,
      minScrollPos: 0,
      sizeRatio: s / o
    }
  }, Gt.prototype.updatePosition = function (t) {
    var e = this.caculatePosAndSize(t, this.scrollInfo),
      t = e.pos,
      e = e.size;
    this.refreshStyle(e, t), this.currentPos = t
  }, Gt.prototype.caculatePosAndSize = function (t, e) {
    var o, s = this.keysMap.pos,
      i = e.sizeRatio,
      r = e.baseSize,
      n = e.maxScrollPos,
      h = e.minScrollPos,
      e = this.options.minSize,
      s = Math.round(i * t[s]);
    return s < h ? (o = Math.max(r + 3 * s, e), s = h) : n < s ? s = n + r - (o = Math.max(r - 3 * (s - n), e)) : o = r, {
      pos: s,
      size: o
    }
  }, Gt.prototype.refreshStyle = function (t, e) {
    var o = this.keysMap,
      s = o.translateProperty,
      i = o.size,
      o = this.scroll.options.translateZ;
    this.indicatorEl.style[i] = t + "px", this.indicatorEl.style[z.transform] = s + "(" + e + "px)" + o
  }, Gt.prototype.startHandler = function () {
    this.moved = !1, this.startTime = v(), this.transitionTime(), this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart)
  }, Gt.prototype.moveHandler = function (t) {
    this.moved || this.indicatorNotMoved(t) || (this.moved = !0, this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)), this.moved && (t = this.newPos(this.currentPos, t, this.scrollInfo), this.syncBScroll(t))
  }, Gt.prototype.endHandler = function () {
    var t, e;
    this.moved && (t = (e = this.scroll).x, e = e.y, this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd, {
      x: t,
      y: e
    }))
  }, Gt.prototype.indicatorNotMoved = function (t) {
    var e = this.currentPos,
      o = this.scrollInfo,
      s = o.maxScrollPos;
    return e === o.minScrollPos && t <= 0 || e === s && 0 <= t
  }, Gt.prototype.syncBScroll = function (t) {
    var e = v(),
      o = this.scroll,
      s = o.x,
      i = o.y,
      r = o.options,
      n = o.scroller,
      h = o.maxScrollY,
      l = o.minScrollY,
      a = o.maxScrollX,
      c = o.minScrollX,
      o = r.probeType,
      r = r.momentumLimitTime,
      i = {
        x: s,
        y: i
      };
    "vertical" === this.direction ? i.y = T(t, h, l) : i.x = T(t, a, c), n.translater.translate(i), e - this.startTime > r && (this.startTime = e, 1 === o && n.hooks.trigger(n.hooks.eventTypes.scroll, i)), 1 < o && n.hooks.trigger(n.hooks.eventTypes.scroll, i)
  }, Gt.prototype.newPos = function (t, e, o) {
    var s = o.maxScrollPos,
      i = o.sizeRatio,
      e = T(e = t + e, o.minScrollPos, s);
    return Math.round(e / i)
  }, Gt.prototype.destroy = function () {
    var t = this.options,
      e = t.interactive,
      o = t.scrollbarTrackClickable,
      t = t.isCustom;
    e && this.eventHandler.destroy(), o && this.clickEventRegister.destroy(), t || this.wrapper.parentNode.removeChild(this.wrapper), this.hooksFn.forEach(function (t) {
      var e = t[0],
        o = t[1],
        t = t[2];
      e.off(o, t)
    }), this.hooksFn.length = 0
  }, Gt);

  function Gt(t, e) {
    this.scroll = t, this.options = e, this.hooksFn = [], this.wrapper = e.wrapper, this.direction = e.direction, this.indicatorEl = this.wrapper.children[0], this.keysMap = this.getKeysMap(), this.handleFade(), this.handleHooks()
  }
  $t.prototype.handleHooks = function () {
    var o = this,
      t = this.scroll;
    t.hooks.on(t.hooks.eventTypes.destroy, function () {
      for (var t = 0, e = o.indicators; t < e.length; t++) e[t].destroy()
    })
  }, $t.prototype.handleOptions = function () {
    var t = !0 === this.scroll.options.scrollbar ? {} : this.scroll.options.scrollbar;
    this.options = m({
      fade: !0,
      fadeInTime: 250,
      fadeOutTime: 500,
      interactive: !1,
      customElements: [],
      minSize: 8,
      scrollbarTrackClickable: !1,
      scrollbarTrackOffsetType: "step",
      scrollbarTrackOffsetTime: 300
    }, t)
  }, $t.prototype.createIndicators = function () {
    for (var t, e, o, s, i = this.scroll, r = [], n = ["scrollX", "scrollY"], h = ["horizontal", "vertical"], l = this.options.customElements, a = 0; a < n.length; a++) i.options[n[a]] && (t = l.shift(), e = h[a], o = !1, (s = t || this.createScrollbarElement(e)) !== t ? i.wrapper.appendChild(s) : o = !0, o = c(c({
      wrapper: s,
      direction: e
    }, this.options), {
      isCustom: o
    }), r.push(new qt(i, o)));
    this.indicators = r
  }, $t.prototype.createScrollbarElement = function (t, e) {
    void 0 === e && (e = this.options.scrollbarTrackClickable);
    var o = document.createElement("div"),
      s = document.createElement("div");
    return o.style.cssText = "position:absolute;z-index:9999;overflow:hidden;", s.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", s.className = "bscroll-indicator", "horizontal" === t ? (o.style.cssText += "height:7px;left:2px;right:2px;bottom:0;", s.style.height = "100%", o.className = "bscroll-horizontal-scrollbar") : (o.style.cssText += "width:7px;bottom:2px;top:2px;right:1px;", s.style.width = "100%", o.className = "bscroll-vertical-scrollbar"), e || (o.style.cssText += "pointer-events:none;"), o.appendChild(s), o
  }, $t.pluginName = "scrollbar", X = $t;

  function $t(t) {
    this.scroll = t, this.handleOptions(), this.createIndicators(), this.handleHooks()
  }
  var Jt = (Qt.prototype.init = function () {
    var t = this.scroll.scroller,
      e = t.scrollBehaviorX,
      t = t.scrollBehaviorY;
    this.wrapperWidth = e.wrapperSize, this.wrapperHeight = t.wrapperSize, this.scrollerHeight = t.contentSize, this.scrollerWidth = e.contentSize, this.pages = this.buildPagesMatrix(this.wrapperWidth, this.wrapperHeight), this.pageLengthOfX = this.pages ? this.pages.length : 0, this.pageLengthOfY = this.pages && this.pages[0] ? this.pages[0].length : 0
  }, Qt.prototype.getPageStats = function (t, e) {
    return this.pages[t][e]
  }, Qt.prototype.getNearestPageIndex = function (t, e) {
    for (var o = 0, s = 0, i = this.pages.length; o < i - 1 && !(t >= this.pages[o][0].cx); o++);
    for (i = this.pages[o].length; s < i - 1 && !(e >= this.pages[0][s].cy); s++);
    return {
      pageX: o,
      pageY: s
    }
  }, Qt.prototype.buildPagesMatrix = function (t, e) {
    for (var o, s, i = [], r = 0, n = 0, h = this.scroll.scroller.scrollBehaviorX.maxScrollPos, l = this.scroll.scroller.scrollBehaviorY.maxScrollPos, a = Math.round(t / 2), c = Math.round(e / 2); r > -this.scrollerWidth;) {
      for (i[n] = [], o = s = 0; o > -this.scrollerHeight;) i[n][s] = {
        x: Math.max(r, h),
        y: Math.max(o, l),
        width: t,
        height: e,
        cx: r - a,
        cy: o - c
      }, o -= e, s++;
      r -= t, n++
    }
    return i
  }, Qt);

  function Qt(t) {
    this.scroll = t, this.init()
  }
  var te = {
      pageX: 0,
      pageY: 0,
      x: 0,
      y: 0
    },
    ee = (oe.prototype.refresh = function () {
      this.pagesMatrix = new Jt(this.scroll), this.checkSlideLoop(), this.currentPage = this.getAdjustedCurrentPage()
    }, oe.prototype.getAdjustedCurrentPage = function () {
      var t = this.currentPage,
        e = t.pageX,
        o = t.pageY,
        e = Math.min(e, this.pagesMatrix.pageLengthOfX - 1),
        o = Math.min(o, this.pagesMatrix.pageLengthOfY - 1);
      this.loopX && (e = Math.min(e, this.pagesMatrix.pageLengthOfX - 2)), this.loopY && (o = Math.min(o, this.pagesMatrix.pageLengthOfY - 2));
      t = this.pagesMatrix.getPageStats(e, o);
      return {
        pageX: e,
        pageY: o,
        x: t.x,
        y: t.y
      }
    }, oe.prototype.setCurrentPage = function (t) {
      this.currentPage = t
    }, oe.prototype.getInternalPage = function (t, e) {
      t >= this.pagesMatrix.pageLengthOfX ? t = this.pagesMatrix.pageLengthOfX - 1 : t < 0 && (t = 0), e >= this.pagesMatrix.pageLengthOfY ? e = this.pagesMatrix.pageLengthOfY - 1 : e < 0 && (e = 0);
      var o = this.pagesMatrix.getPageStats(t, e);
      return {
        pageX: t,
        pageY: e,
        x: o.x,
        y: o.y
      }
    }, oe.prototype.getInitialPage = function (t, e) {
      var o = this.slideOptions,
        s = o.startPageXIndex,
        i = o.startPageYIndex,
        r = this.loopX ? 1 : 0,
        n = this.loopY ? 1 : 0,
        h = (t = void 0 === t ? !1 : t) ? r : this.currentPage.pageX,
        o = t ? n : this.currentPage.pageY,
        o = (e = void 0 === e ? !1 : e) ? (h = this.loopX ? s + 1 : s, this.loopY ? i + 1 : i) : (h = t ? r : this.currentPage.pageX, t ? n : this.currentPage.pageY),
        n = this.pagesMatrix.getPageStats(h, o);
      return {
        pageX: h,
        pageY: o,
        x: n.x,
        y: n.y
      }
    }, oe.prototype.getExposedPage = function (t) {
      t = m({}, t);
      return this.loopX && (t.pageX = this.fixedPage(t.pageX, this.pagesMatrix.pageLengthOfX - 2)), this.loopY && (t.pageY = this.fixedPage(t.pageY, this.pagesMatrix.pageLengthOfY - 2)), t
    }, oe.prototype.getExposedPageByPageIndex = function (t, e) {
      var o = {
        pageX: t,
        pageY: e
      };
      this.loopX && (o.pageX = t + 1), this.loopY && (o.pageY = e + 1);
      o = this.pagesMatrix.getPageStats(o.pageX, o.pageY);
      return {
        x: o.x,
        y: o.y,
        pageX: t,
        pageY: e
      }
    }, oe.prototype.getWillChangedPage = function (t) {
      return t = m({}, t), this.loopX && (t.pageX = this.fixedPage(t.pageX, this.pagesMatrix.pageLengthOfX - 2), t.x = this.pagesMatrix.getPageStats(t.pageX + 1, 0).x), this.loopY && (t.pageY = this.fixedPage(t.pageY, this.pagesMatrix.pageLengthOfY - 2), t.y = this.pagesMatrix.getPageStats(0, t.pageY + 1).y), t
    }, oe.prototype.fixedPage = function (t, e) {
      for (var o = [], s = 0; s < e; s++) o.push(s);
      return o.unshift(e - 1), o.push(0), o[t]
    }, oe.prototype.getPageStats = function () {
      return this.pagesMatrix.getPageStats(this.currentPage.pageX, this.currentPage.pageY)
    }, oe.prototype.getValidPageIndex = function (t, e) {
      var o = this.pagesMatrix.pageLengthOfX - 1,
        s = this.pagesMatrix.pageLengthOfY - 1,
        i = 0,
        r = 0;
      return this.loopX && (t += 1, i += 1, o -= 1), this.loopY && (e += 1, r += 1, s -= 1), {
        pageX: t = T(t, i, o),
        pageY: e = T(e, r, s)
      }
    }, oe.prototype.nextPageIndex = function () {
      return this.getPageIndexByDirection("positive")
    }, oe.prototype.prevPageIndex = function () {
      return this.getPageIndexByDirection("negative")
    }, oe.prototype.getNearestPage = function (t, e) {
      t = this.pagesMatrix.getNearestPageIndex(t, e), e = t.pageX, t = t.pageY;
      return {
        x: this.pagesMatrix.getPageStats(e, 0).x,
        y: this.pagesMatrix.getPageStats(0, t).y,
        pageX: e,
        pageY: t
      }
    }, oe.prototype.getPageByDirection = function (t, e, o) {
      var s = t.pageX,
        t = t.pageY;
      return s === this.currentPage.pageX && (s = T(s + e, 0, this.pagesMatrix.pageLengthOfX - 1)), t === this.currentPage.pageY && (t = T(t + o, 0, this.pagesMatrix.pageLengthOfY - 1)), {
        x: this.pagesMatrix.getPageStats(s, 0).x,
        y: this.pagesMatrix.getPageStats(0, t).y,
        pageX: s,
        pageY: t
      }
    }, oe.prototype.resetLoopPage = function () {
      if (this.loopX) {
        if (0 === this.currentPage.pageX) return {
          pageX: this.pagesMatrix.pageLengthOfX - 2,
          pageY: this.currentPage.pageY
        };
        if (this.currentPage.pageX === this.pagesMatrix.pageLengthOfX - 1) return {
          pageX: 1,
          pageY: this.currentPage.pageY
        }
      }
      if (this.loopY) return 0 === this.currentPage.pageY ? {
        pageX: this.currentPage.pageX,
        pageY: this.pagesMatrix.pageLengthOfY - 2
      } : this.currentPage.pageY === this.pagesMatrix.pageLengthOfY - 1 ? {
        pageX: this.currentPage.pageX,
        pageY: 1
      } : void 0
    }, oe.prototype.getPageIndexByDirection = function (t) {
      var e = this.currentPage.pageX,
        o = this.currentPage.pageY;
      return {
        pageX: e = this.slideX ? "negative" === t ? e - 1 : e + 1 : e,
        pageY: o = this.slideY ? "negative" === t ? o - 1 : o + 1 : o
      }
    }, oe.prototype.checkSlideLoop = function () {
      this.wannaLoop = this.slideOptions.loop, 1 < this.pagesMatrix.pageLengthOfX ? this.slideX = !0 : this.slideX = !1, this.pagesMatrix.pages[0] && 1 < this.pagesMatrix.pageLengthOfY ? this.slideY = !0 : this.slideY = !1, this.loopX = this.wannaLoop && this.slideX, this.loopY = this.wannaLoop && this.slideY, this.slideX && this.slideY && n("slide does not support two direction at the same time.")
    }, oe);

  function oe(t, e) {
    this.scroll = t, this.slideOptions = e, this.slideX = !1, this.slideY = !1, this.currentPage = m({}, te)
  }
  var se = [{
      key: "next",
      name: "next"
    }, {
      key: "prev",
      name: "prev"
    }, {
      key: "goToPage",
      name: "goToPage"
    }, {
      key: "getCurrentPage",
      name: "getCurrentPage"
    }, {
      key: "startPlay",
      name: "startPlay"
    }, {
      key: "pausePlay",
      name: "pausePlay"
    }].map(function (t) {
      return {
        key: t.key,
        sourceKey: "plugins.slide." + t.name
      }
    }),
    D = (ie.prototype.satisfyInitialization = function () {
      return !(this.scroll.scroller.content.children.length <= 0) || (n("slide need at least one slide page to be initialised.please check your DOM layout."), !1)
    }, ie.prototype.init = function () {
      this.willChangeToPage = m({}, te), this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.createPages()
    }, ie.prototype.createPages = function () {
      this.pages = new ee(this.scroll, this.options)
    }, ie.prototype.handleBScroll = function () {
      this.scroll.registerType(["slideWillChange", "slidePageChanged"]), this.scroll.proxy(se)
    }, ie.prototype.handleOptions = function () {
      var t = !0 === this.scroll.options.slide ? {} : this.scroll.options.slide;
      this.options = m({
        loop: !0,
        threshold: .1,
        speed: 400,
        easing: W.bounce,
        listenFlick: !0,
        autoplay: !0,
        interval: 3e3,
        startPageXIndex: 0,
        startPageYIndex: 0
      }, t)
    }, ie.prototype.handleLoop = function (t) {
      var e = this.options.loop,
        o = this.scroll.scroller.content,
        s = o.children.length;
      e && (o !== t ? (this.resetLoopChangedStatus(), this.removeClonedSlidePage(t), 1 < s && this.cloneFirstAndLastSlidePage(o)) : 3 === s && this.initialised ? (this.removeClonedSlidePage(o), this.moreToOnePageInLoop = !0, this.oneToMorePagesInLoop = !1) : 1 < s ? (this.initialised && 0 === this.cachedClonedPageDOM.length ? (this.oneToMorePagesInLoop = !0, this.moreToOnePageInLoop = !1) : (this.removeClonedSlidePage(o), this.resetLoopChangedStatus()), this.cloneFirstAndLastSlidePage(o)) : this.resetLoopChangedStatus())
    }, ie.prototype.resetLoopChangedStatus = function () {
      this.moreToOnePageInLoop = !1, this.oneToMorePagesInLoop = !1
    }, ie.prototype.handleHooks = function () {
      var e = this,
        t = this.scroll.hooks,
        o = this.scroll.scroller.hooks,
        s = this.options.listenFlick;
      this.prevContent = this.scroll.scroller.content, this.hooksFn = [], this.registerHooks(this.scroll, this.scroll.eventTypes.beforeScrollStart, this.pausePlay), this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.modifyCurrentPage), this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.startPlay), this.scroll.eventTypes.mousewheelMove && (this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelMove, function () {
        return !0
      }), this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, function (t) {
        1 !== t.directionX && 1 !== t.directionY || e.next(), -1 !== t.directionX && -1 !== t.directionY || e.prev()
      })), this.registerHooks(t, t.eventTypes.refresh, this.refreshHandler), this.registerHooks(t, t.eventTypes.destroy, this.destroy), this.registerHooks(o, o.eventTypes.beforeRefresh, function () {
        e.handleLoop(e.prevContent), e.setSlideInlineStyle()
      }), this.registerHooks(o, o.eventTypes.momentum, this.modifyScrollMetaHandler), this.registerHooks(o, o.eventTypes.scroll, this.scrollHandler), this.registerHooks(o, o.eventTypes.checkClick, this.startPlay), s && this.registerHooks(o, o.eventTypes.flick, this.flickHandler)
    }, ie.prototype.startPlay = function () {
      var t = this,
        e = this.options,
        o = e.interval;
      e.autoplay && (clearTimeout(this.autoplayTimer), this.autoplayTimer = window.setTimeout(function () {
        t.next()
      }, o))
    }, ie.prototype.pausePlay = function () {
      this.options.autoplay && clearTimeout(this.autoplayTimer)
    }, ie.prototype.setSlideInlineStyle = function () {
      var t = this.scroll.scroller,
        l = t.content,
        a = t.wrapper,
        c = this.scroll.options;
      [{
        direction: "scrollX",
        sizeType: "offsetWidth",
        styleType: "width"
      }, {
        direction: "scrollY",
        sizeType: "offsetHeight",
        styleType: "height"
      }].forEach(function (t) {
        var e = t.direction,
          o = t.sizeType,
          s = t.styleType;
        if (c[e]) {
          for (var i = a[o], r = l.children, n = r.length, h = 0; h < n; h++) r[h].style[s] = i + "px";
          l.style[s] = i * n + "px"
        }
      })
    }, ie.prototype.next = function (t, e) {
      var o = this.pages.nextPageIndex(),
        s = o.pageX,
        o = o.pageY;
      this.goTo(s, o, t, e)
    }, ie.prototype.prev = function (t, e) {
      var o = this.pages.prevPageIndex(),
        s = o.pageX,
        o = o.pageY;
      this.goTo(s, o, t, e)
    }, ie.prototype.goToPage = function (t, e, o, s) {
      e = this.pages.getValidPageIndex(t, e);
      this.goTo(e.pageX, e.pageY, o, s)
    }, ie.prototype.getCurrentPage = function () {
      return this.exposedPage || this.pages.getInitialPage(!1, !0)
    }, ie.prototype.setCurrentPage = function (t) {
      this.pages.setCurrentPage(t), this.exposedPage = this.pages.getExposedPage(t)
    }, ie.prototype.nearestPage = function (t, e) {
      var o = this.scroll.scroller,
        s = o.scrollBehaviorX,
        i = o.scrollBehaviorY,
        r = s.maxScrollPos,
        o = s.minScrollPos,
        s = i.maxScrollPos,
        i = i.minScrollPos;
      return this.pages.getNearestPage(T(t, r, o), T(e, s, i))
    }, ie.prototype.satisfyThreshold = function (t, e) {
      var o = this.scroll.scroller,
        s = o.scrollBehaviorX,
        i = o.scrollBehaviorY,
        o = !0;
      return o = Math.abs(t - s.absStartPos) <= this.thresholdX && Math.abs(e - i.absStartPos) <= this.thresholdY ? !1 : o
    }, ie.prototype.refreshHandler = function (t) {
      var e, o, s = this;
      this.satisfyInitialization() && (this.pages.refresh(), this.computeThreshold(), (e = this.contentChanged = this.prevContent !== t) && (this.prevContent = t), o = this.pages.getInitialPage(this.oneToMorePagesInLoop || this.moreToOnePageInLoop, e || !this.initialised), this.initialised ? this.goTo(o.pageX, o.pageY, 0) : this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.beforeInitialScrollTo, function (t) {
        s.initialised = !0, t.x = o.x, t.y = o.y
      }), this.startPlay())
    }, ie.prototype.computeThreshold = function () {
      var t, e, o = this.options.threshold;
      o % 1 == 0 ? (this.thresholdX = o, this.thresholdY = o) : (t = (e = this.pages.getPageStats()).width, e = e.height, this.thresholdX = Math.round(t * o), this.thresholdY = Math.round(e * o))
    }, ie.prototype.cloneFirstAndLastSlidePage = function (t) {
      var e, o, s = t.children,
        i = s[s.length - 1].cloneNode(!0),
        r = s[0].cloneNode(!0);
      e = i, (s = (o = t).firstChild) ? s.parentNode.insertBefore(e, s) : o.appendChild(e), t.appendChild(r), this.cachedClonedPageDOM = [i, r]
    }, ie.prototype.removeClonedSlidePage = function (e) {
      (e && e.children || []).length && this.cachedClonedPageDOM.forEach(function (t) {
        e.removeChild(t)
      }), this.cachedClonedPageDOM = []
    }, ie.prototype.modifyCurrentPage = function (t) {
      var e = this.getCurrentPage(),
        o = e.pageX,
        s = e.pageY,
        i = this.nearestPage(t.x, t.y);
      if (this.setCurrentPage(i), this.contentChanged) return !(this.contentChanged = !1);
      e = this.getCurrentPage(), t = e.pageX, e = e.pageY;
      if (this.pageWillChangeTo(i), this.oneToMorePagesInLoop) return !(this.oneToMorePagesInLoop = !1);
      if (this.moreToOnePageInLoop && 0 === o && 0 === s) return !(this.moreToOnePageInLoop = !1);
      if (o === t && s === e || (r = this.pages.getExposedPageByPageIndex(t, e), this.scroll.trigger(this.scroll.eventTypes.slidePageChanged, r)), !this.resetLooping) {
        var r = this.pages.resetLoopPage();
        return r ? (this.resetLooping = !0, this.goTo(r.pageX, r.pageY, 0), !0) : void 0
      }
      this.resetLooping = !1
    }, ie.prototype.goTo = function (t, e, o, s) {
      var i = this.pages.getInternalPage(t, e),
        r = s || this.options.easing || W.bounce,
        t = i.x,
        e = i.y,
        s = t - this.scroll.scroller.scrollBehaviorX.currentPos,
        i = e - this.scroll.scroller.scrollBehaviorY.currentPos;
      s || i ? (o = void 0 === o ? this.getEaseTime(s, i) : o, this.scroll.scroller.scrollTo(t, e, o, r)) : this.scroll.scroller.togglePointerEvents(!0)
    }, ie.prototype.flickHandler = function () {
      var t = this.scroll.scroller,
        e = t.scrollBehaviorX,
        o = t.scrollBehaviorY,
        s = e.currentPos,
        i = e.startPos,
        r = e.direction,
        n = o.currentPos,
        h = o.startPos,
        t = o.direction,
        e = this.pages.currentPage,
        o = e.pageX,
        e = e.pageY,
        h = this.getEaseTime(s - i, n - h);
      this.goTo(o + r, e + t, h)
    }, ie.prototype.getEaseTime = function (t, e) {
      return this.options.speed || Math.max(Math.max(Math.min(Math.abs(t), 1e3), Math.min(Math.abs(e), 1e3)), 300)
    }, ie.prototype.modifyScrollMetaHandler = function (t) {
      var e = this.scroll.scroller,
        o = e.scrollBehaviorX,
        s = e.scrollBehaviorY,
        i = e.animater,
        r = t.newX,
        e = t.newY,
        s = this.satisfyThreshold(r, e) || i.forceStopped ? this.pages.getPageByDirection(this.nearestPage(r, e), o.direction, s.direction) : this.pages.currentPage;
      t.time = this.getEaseTime(t.newX - s.x, t.newY - s.y), t.newX = s.x, t.newY = s.y, t.easing = this.options.easing || W.bounce
    }, ie.prototype.scrollHandler = function (t) {
      var e = t.x,
        t = t.y;
      this.satisfyThreshold(e, t) && (t = this.nearestPage(e, t), this.pageWillChangeTo(t))
    }, ie.prototype.pageWillChangeTo = function (t) {
      var e, o = this.pages.getWillChangedPage(t);
      e = this.willChangeToPage, t = o, e.pageX === t.pageX && e.pageY === t.pageY || (this.willChangeToPage = o, this.scroll.trigger(this.scroll.eventTypes.slideWillChange, this.willChangeToPage))
    }, ie.prototype.registerHooks = function (t, e, o) {
      t.on(e, o, this), this.hooksFn.push([t, e, o])
    }, ie.prototype.destroy = function () {
      var t = this.scroll.scroller.content,
        e = this.options,
        o = e.loop,
        e = e.autoplay;
      o && this.removeClonedSlidePage(t), e && clearTimeout(this.autoplayTimer), this.hooksFn.forEach(function (t) {
        var e = t[0],
          o = t[1],
          t = t[2];
        e.eventTypes[o] && e.off(o, t)
      }), this.hooksFn.length = 0
    }, ie.pluginName = "slide", ie);

  function ie(t) {
    this.scroll = t, this.cachedClonedPageDOM = [], this.resetLooping = !1, this.autoplayTimer = 0, this.satisfyInitialization() && this.init()
  }
  var re = [{
      key: "wheelTo",
      name: "wheelTo"
    }, {
      key: "getSelectedIndex",
      name: "getSelectedIndex"
    }, {
      key: "restorePosition",
      name: "restorePosition"
    }].map(function (t) {
      return {
        key: t.key,
        sourceKey: "plugins.wheel." + t.name
      }
    }),
    ne = "wheelIndexChanged",
    he = 4,
    K = (le.prototype.init = function () {
      this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.refreshBoundary(), this.setSelectedIndex(this.options.selectedIndex)
    }, le.prototype.handleBScroll = function () {
      this.scroll.proxy(re), this.scroll.registerType([ne])
    }, le.prototype.handleOptions = function () {
      var t = !0 === this.scroll.options.wheel ? {} : this.scroll.options.wheel;
      this.options = m({
        wheelWrapperClass: "wheel-scroll",
        wheelItemClass: "wheel-item",
        rotate: 25,
        adjustTime: 400,
        selectedIndex: 0,
        wheelDisabledItemClass: "wheel-disabled-item"
      }, t)
    }, le.prototype.handleHooks = function () {
      var o = this,
        t = this.scroll,
        e = this.scroll.scroller,
        s = e.actionsHandler,
        i = e.scrollBehaviorX,
        r = e.scrollBehaviorY,
        n = e.animater,
        h = e.content;
      t.on(t.eventTypes.scrollEnd, function (t) {
        t = o.findNearestValidWheel(t.y).index;
        if (e.animater.forceStopped && !o.isAdjustingPosition) return o.target = o.items[t], !0;
        o.setSelectedIndex(t), o.isAdjustingPosition && (o.isAdjustingPosition = !1)
      }), this.scroll.hooks.on(this.scroll.hooks.eventTypes.refresh, function (t) {
        t !== h && (h = t, o.setSelectedIndex(o.options.selectedIndex, !0)), o.rotateX(o.scroll.y), o.wheelTo(o.selectedIndex, 0)
      }), this.scroll.hooks.on(this.scroll.hooks.eventTypes.beforeInitialScrollTo, function (t) {
        t.x = 0, t.y = -(o.selectedIndex * o.itemHeight)
      }), e.hooks.on(e.hooks.eventTypes.checkClick, function () {
        var t, t = (t = o.items, Array.prototype.slice.call(t, 0).indexOf(o.target));
        return -1 === t || o.wheelTo(t, o.options.adjustTime, W.swipe), !0
      }), e.hooks.on(e.hooks.eventTypes.scrollTo, function (t) {
        t.y = o.findNearestValidWheel(t.y).y
      }), e.hooks.on(e.hooks.eventTypes.minDistanceScroll, function () {
        var t = e.animater;
        !0 === t.forceStopped && (t.forceStopped = !1)
      }), e.hooks.on(e.hooks.eventTypes.scrollToElement, function (t, e) {
        return !R(t, o.options.wheelItemClass) || void(e.top = o.findNearestValidWheel(e.top).y)
      }), s.hooks.on(s.hooks.eventTypes.beforeStart, function (t) {
        o.target = t.target
      }), i.hooks.on(i.hooks.eventTypes.computeBoundary, function (t) {
        t.maxScrollPos = 0, t.minScrollPos = 0
      }), r.hooks.on(r.hooks.eventTypes.computeBoundary, function (t) {
        o.items = o.scroll.scroller.content.children, o.checkWheelAllDisabled(), o.itemHeight = 0 < o.items.length ? r.contentSize / o.items.length : 0, t.maxScrollPos = -o.itemHeight * (o.items.length - 1), t.minScrollPos = 0
      }), r.hooks.on(r.hooks.eventTypes.momentum, function (t) {
        t.rate = he, t.destination = o.findNearestValidWheel(t.destination).y
      }), r.hooks.on(r.hooks.eventTypes.end, function (t) {
        var e = o.findNearestValidWheel(r.currentPos);
        t.destination = e.y, t.duration = o.options.adjustTime
      }), n.hooks.on(n.hooks.eventTypes.time, function (t) {
        o.transitionDuration(t)
      }), n.hooks.on(n.hooks.eventTypes.timeFunction, function (t) {
        o.timeFunction(t)
      }), n.hooks.on(n.hooks.eventTypes.callStop, function () {
        var t = o.findNearestValidWheel(o.scroll.y).index;
        o.isAdjustingPosition = !0, o.wheelTo(t, 0)
      }), n.translater.hooks.on(n.translater.hooks.eventTypes.translate, function (t) {
        o.rotateX(t.y)
      })
    }, le.prototype.refreshBoundary = function () {
      var t = this.scroll.scroller,
        e = t.scrollBehaviorX,
        o = t.scrollBehaviorY,
        t = t.content;
      e.refresh(t), o.refresh(t)
    }, le.prototype.setSelectedIndex = function (t, e) {
      void 0 === e && (e = !1), this.selectedIndex === (this.selectedIndex = t) || e || this.scroll.trigger(ne, t)
    }, le.prototype.getSelectedIndex = function () {
      return this.selectedIndex
    }, le.prototype.wheelTo = function (t, e, o) {
      t = -(t = void 0 === t ? 0 : t) * this.itemHeight;
      this.scroll.scrollTo(0, t, e = void 0 === e ? 0 : e, o)
    }, le.prototype.restorePosition = function () {
      var t;
      this.scroll.pending && (t = this.getSelectedIndex(), this.scroll.scroller.animater.clearTimer(), this.wheelTo(t, 0))
    }, le.prototype.transitionDuration = function (t) {
      for (var e = 0; e < this.items.length; e++) this.items[e].style[z.transitionDuration] = t + "ms"
    }, le.prototype.timeFunction = function (t) {
      for (var e = 0; e < this.items.length; e++) this.items[e].style[z.transitionTimingFunction] = t
    }, le.prototype.rotateX = function (t) {
      for (var e = this.options.rotate, o = void 0 === e ? 25 : e, s = 0; s < this.items.length; s++) {
        var i = (o * (t / this.itemHeight + s)).toFixed(3);
        this.items[s].style[z.transform] = "rotateX(" + i + "deg)"
      }
    }, le.prototype.findNearestValidWheel = function (t) {
      t = 0 < t ? 0 : t < this.scroll.maxScrollY ? this.scroll.maxScrollY : t;
      for (var e = Math.abs(Math.round(-t / this.itemHeight)), t = e, o = this.items, s = this.options.wheelDisabledItemClass; 0 <= e && R(o[e], s);) e--;
      if (e < 0)
        for (e = t; e <= o.length - 1 && R(o[e], s);) e++;
      return e === o.length && (e = t), {
        index: this.wheelItemsAllDisabled ? -1 : e,
        y: -e * this.itemHeight
      }
    }, le.prototype.checkWheelAllDisabled = function () {
      var t = this.options.wheelDisabledItemClass,
        e = this.items;
      this.wheelItemsAllDisabled = !0;
      for (var o = 0; o < e.length; o++)
        if (!R(e[o], t)) {
          this.wheelItemsAllDisabled = !1;
          break
        }
    }, le.pluginName = "wheel", le);

  function le(t) {
    this.scroll = t, this.init()
  }
  var ae = [{
      key: "zoomTo",
      name: "zoomTo"
    }].map(function (t) {
      return {
        key: t.key,
        sourceKey: "plugins.zoom." + t.name
      }
    }),
    V = (ce.prototype.init = function () {
      this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.tryInitialZoomTo(this.zoomOpt)
    }, ce.prototype.zoomTo = function (t, e, o, s) {
      o = this.resolveOrigin(e, o), o = {
        x: o.originX,
        y: o.originY,
        baseScale: this.scale
      };
      this._doZoomTo(t, o, s, !0)
    }, ce.prototype.handleBScroll = function () {
      this.scroll.proxy(ae), this.scroll.registerType(["beforeZoomStart", "zoomStart", "zooming", "zoomEnd"])
    }, ce.prototype.handleOptions = function () {
      var t = !0 === this.scroll.options.zoom ? {} : this.scroll.options.zoom;
      this.zoomOpt = m({
        start: 1,
        min: 1,
        max: 4,
        initialOrigin: [0, 0],
        minimalZoomDistance: 5,
        bounceTime: 800
      }, t)
    }, ce.prototype.handleHooks = function () {
      var o = this,
        t = this.scroll,
        e = this.scroll.scroller;
      this.wrapper = this.scroll.scroller.wrapper, this.setTransformOrigin(this.scroll.scroller.content);
      var s = e.scrollBehaviorX,
        i = e.scrollBehaviorY;
      this.hooksFn = [], this.registerHooks(t.hooks, t.hooks.eventTypes.contentChanged, function (t) {
        o.setTransformOrigin(t), o.scale = 1, o.tryInitialZoomTo(o.zoomOpt)
      }), this.registerHooks(t.hooks, t.hooks.eventTypes.beforeInitialScrollTo, function () {
        if (1 !== o.zoomOpt.start) return !0
      }), this.registerHooks(s.hooks, s.hooks.eventTypes.beforeComputeBoundary, function () {
        var t = L(o.scroll.scroller.content);
        s.contentSize = Math.floor(t.width * o.scale)
      }), this.registerHooks(i.hooks, i.hooks.eventTypes.beforeComputeBoundary, function () {
        var t = L(o.scroll.scroller.content);
        i.contentSize = Math.floor(t.height * o.scale)
      }), this.registerHooks(e.actions.hooks, e.actions.hooks.eventTypes.start, function (t) {
        var e = t.touches && t.touches.length || 0;
        o.fingersOperation(e), 2 === e && o.zoomStart(t)
      }), this.registerHooks(e.actions.hooks, e.actions.hooks.eventTypes.beforeMove, function (t) {
        var e = t.touches && t.touches.length || 0;
        if (o.fingersOperation(e), 2 === e) return o.zoom(t), !0
      }), this.registerHooks(e.actions.hooks, e.actions.hooks.eventTypes.beforeEnd, function (t) {
        if (2 === o.fingersOperation()) return o.zoomEnd(), !0
      }), this.registerHooks(e.translater.hooks, e.translater.hooks.eventTypes.beforeTranslate, function (t, e) {
        e = e.scale || o.prevScale;
        o.prevScale = e, t.push("scale(" + e + ")")
      }), this.registerHooks(e.hooks, e.hooks.eventTypes.scrollEnd, function () {
        2 === o.fingersOperation() && o.scroll.trigger(o.scroll.eventTypes.zoomEnd, {
          scale: o.scale
        })
      }), this.registerHooks(this.scroll.hooks, "destroy", this.destroy)
    }, ce.prototype.setTransformOrigin = function (t) {
      t.style[z.transformOrigin] = "0 0"
    }, ce.prototype.tryInitialZoomTo = function (t) {
      var e = t.start,
        o = t.initialOrigin,
        s = this.scroll.scroller,
        t = s.scrollBehaviorX,
        s = s.scrollBehaviorY;
      1 !== e && (this.resetBoundaries([t, s]), this.zoomTo(e, o[0], o[1], 0))
    }, ce.prototype.fingersOperation = function (t) {
      if ("number" != typeof t) return this.numberOfFingers;
      this.numberOfFingers = t
    }, ce.prototype._doZoomTo = function (t, e, o, s) {
      var i = this;
      void 0 === o && (o = this.zoomOpt.bounceTime), void 0 === s && (s = !1);
      var r, n, h, l, a = this.zoomOpt,
        c = a.min,
        a = a.max,
        p = this.scale,
        u = T(t, c, a);
      0 !== o ? 0 < o && (n = v(), h = n + o, (l = function () {
        var t = v();
        if (h <= t) return i.scroll.trigger(i.scroll.eventTypes.zooming, {
          scale: u
        }), void _(r);
        t = W.bounce.fn((t - n) / o);
        i.scroll.trigger(i.scroll.eventTypes.zooming, {
          scale: t * (u - p) + p
        }), r = U(l)
      })()) : i.scroll.trigger(i.scroll.eventTypes.zooming, {
        scale: u
      }), this.fingersOperation(2), this._zoomTo(u, p, e, o, s)
    }, ce.prototype._zoomTo = function (t, e, o, s, i) {
      void 0 === i && (i = !1);
      var r = t / o.baseScale;
      this.setScale(t);
      var n = this.scroll.scroller,
        h = n.scrollBehaviorX,
        l = n.scrollBehaviorY;
      this.resetBoundaries([h, l]);
      var a = this.getNewPos(o.x, r, h, !0, i),
        i = this.getNewPos(o.y, r, l, !0, i);
      h.currentPos === Math.round(a) && l.currentPos === Math.round(i) && t === e || n.scrollTo(a, i, s, W.bounce, {
        start: {
          scale: e
        },
        end: {
          scale: t
        }
      })
    }, ce.prototype.resolveOrigin = function (t, e) {
      var o = this.scroll.scroller,
        s = o.scrollBehaviorX,
        i = o.scrollBehaviorY,
        o = {
          left: function () {
            return 0
          },
          top: function () {
            return 0
          },
          right: function () {
            return s.contentSize
          },
          bottom: function () {
            return i.contentSize
          },
          center: function (t) {
            return (0 === t ? s : i).contentSize / 2
          }
        };
      return {
        originX: "number" == typeof t ? t : o[t](0),
        originY: "number" == typeof e ? e : o[e](1)
      }
    }, ce.prototype.zoomStart = function (t) {
      var e = t.touches[0],
        o = t.touches[1];
      this.startDistance = this.getFingerDistance(t), this.startScale = this.scale;
      var s, t = {
          left: -((s = (s = this.wrapper).getBoundingClientRect()).left + window.pageXOffset),
          top: -(s.top + window.pageYOffset)
        },
        s = t.left,
        t = t.top;
      this.origin = {
        x: Math.abs(e.pageX + o.pageX) / 2 + s - this.scroll.x,
        y: Math.abs(e.pageY + o.pageY) / 2 + t - this.scroll.y,
        baseScale: this.startScale
      }, this.scroll.trigger(this.scroll.eventTypes.beforeZoomStart)
    }, ce.prototype.zoom = function (t) {
      var e, o, s, i = this.getFingerDistance(t);
      !this.zoomed && Math.abs(i - this.startDistance) < this.zoomOpt.minimalZoomDistance || (o = (e = this.dampingScale(i / this.startDistance * this.startScale)) / this.startScale, this.setScale(e), this.zoomed || (this.zoomed = !0, this.scroll.trigger(this.scroll.eventTypes.zoomStart)), t = (s = this.scroll.scroller).scrollBehaviorX, i = s.scrollBehaviorY, t = this.getNewPos(this.origin.x, o, t, !1, !1), i = this.getNewPos(this.origin.y, o, i, !1, !1), this.scroll.trigger(this.scroll.eventTypes.zooming, {
        scale: this.scale
      }), s.translater.translate({
        x: t,
        y: i,
        scale: e
      }))
    }, ce.prototype.zoomEnd = function () {
      this.zoomed && (this.shouldRebound() ? this._doZoomTo(this.scale, this.origin, this.zoomOpt.bounceTime) : this.scroll.trigger(this.scroll.eventTypes.zoomEnd, {
        scale: this.scale
      }))
    }, ce.prototype.getFingerDistance = function (t) {
      var e = t.touches[0],
        o = t.touches[1],
        t = Math.abs(e.pageX - o.pageX),
        o = Math.abs(e.pageY - o.pageY);
      return Math.sqrt(t * t + o * o)
    }, ce.prototype.shouldRebound = function () {
      var t = this.zoomOpt,
        e = t.min,
        o = t.max,
        t = this.scale;
      if (t !== T(t, e, o)) return !0;
      e = this.scroll.scroller, o = e.scrollBehaviorX, e = e.scrollBehaviorY;
      this.resetBoundaries([o, e]);
      e = o.checkInBoundary().inBoundary, o = o.checkInBoundary().inBoundary;
      return !(e && o)
    }, ce.prototype.dampingScale = function (t) {
      var e = this.zoomOpt,
        o = e.min,
        e = e.max;
      return t < o ? t = .5 * o * Math.pow(2, t / o) : e < t && (t = 2 * e * Math.pow(.5, e / t)), t
    }, ce.prototype.setScale = function (t) {
      this.scale = t
    }, ce.prototype.resetBoundaries = function (t) {
      t.forEach(function (t) {
        return t.computeBoundary()
      })
    }, ce.prototype.getNewPos = function (t, e, o, s, i) {
      i = t - t * e + ((i = void 0 === i ? !1 : i) ? o.currentPos : o.startPos);
      return 0 < (i = s ? T(i, o.maxScrollPos, o.minScrollPos) : i) ? Math.floor(i) : Math.ceil(i)
    }, ce.prototype.registerHooks = function (t, e, o) {
      t.on(e, o, this), this.hooksFn.push([t, e, o])
    }, ce.prototype.destroy = function () {
      this.hooksFn.forEach(function (t) {
        var e = t[0],
          o = t[1],
          t = t[2];
        e.off(o, t)
      }), this.hooksFn.length = 0
    }, ce.pluginName = "zoom", ce);

  function ce(t) {
    this.scroll = t, this.scale = 1, this.prevScale = 1, this.init()
  }
  var pe = (ue.create = function (t) {
    return new ue(t)
  }, ue.prototype.hasAncestors = function (e) {
    return -1 < S(this.ancestors, function (t) {
      return t[0] === e
    })
  }, ue.prototype.hasDescendants = function (e) {
    return -1 < S(this.descendants, function (t) {
      return t[0] === e
    })
  }, ue.prototype.addAncestor = function (t, e) {
    var o = this.ancestors;
    o.push([t, e]), o.sort(function (t, e) {
      return t[1] - e[1]
    })
  }, ue.prototype.addDescendant = function (t, e) {
    var o = this.descendants;
    o.push([t, e]), o.sort(function (t, e) {
      return t[1] - e[1]
    })
  }, ue.prototype.removeAncestor = function (e) {
    var t = this.ancestors;
    if (t.length) {
      var o = S(this.ancestors, function (t) {
        return t[0] === e
      });
      if (-1 < o) return t.splice(o, 1)
    }
  }, ue.prototype.removeDescendant = function (e) {
    var t = this.descendants;
    if (t.length) {
      var o = S(this.descendants, function (t) {
        return t[0] === e
      });
      if (-1 < o) return t.splice(o, 1)
    }
  }, ue.prototype.registerHooks = function (t, e, o) {
    t.on(e, o), this.hooksManager.push([t, e, o])
  }, ue.prototype.setAnalyzed = function (t) {
    this.analyzed = t = void 0 === t ? !1 : t
  }, ue.prototype.purge = function () {
    var e = this;
    this.ancestors.forEach(function (t) {
      t[0].removeDescendant(e)
    }), this.descendants.forEach(function (t) {
      t[0].removeAncestor(e)
    }), this.hooksManager.forEach(function (t) {
      var e = t[0],
        o = t[1],
        t = t[2];
      e.off(o, t)
    }), this.hooksManager = []
  }, ue);

  function ue(t) {
    this.ancestors = [], this.descendants = [], this.hooksManager = [], this.analyzed = !1, this.selfScroll = t
  }

  function de(t) {
    t.forEach(function (t) {
      t.enable()
    })
  }

  function fe(t, e) {
    t.forEach(function (t) {
      t.hasHorizontalScroll !== e.hasHorizontalScroll && t.hasVerticalScroll !== e.hasVerticalScroll || t.disable()
    })
  }
  var ge = [{
      key: "purgeNestedScroll",
      name: "purgeNestedScroll"
    }].map(function (t) {
      return {
        key: t.key,
        sourceKey: "plugins.nestedScroll." + t.name
      }
    }),
    at = (ye.getAllNestedScrolls = function () {
      var e = ye.instancesMap;
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    }, ye.purgeAllNestedScrolls = function () {
      ye.getAllNestedScrolls().forEach(function (t) {
        return t.purgeNestedScroll()
      })
    }, ye.prototype.handleOptions = function (t) {
      t = !0 === t.options.nestedScroll ? {} : t.options.nestedScroll;
      this.options = m({
        groupId: "INTERNAL_NESTED_SCROLL"
      }, t);
      t = typeof this.options.groupId;
      return "string" != t && "number" != t && n("groupId must be string or number for NestedScroll plugin"), this.options.groupId
    }, ye.prototype.init = function (t) {
      t.proxy(ge), this.addBScroll(t), this.buildBScrollGraph(), this.analyzeBScrollGraph(), this.ensureEventInvokeSequence(), this.handleHooks(t)
    }, ye.prototype.handleHooks = function (t) {
      var e = this;
      this.registerHooks(t.hooks, t.hooks.eventTypes.destroy, function () {
        e.deleteScroll(t)
      })
    }, ye.prototype.deleteScroll = function (e) {
      e.wrapper.isBScrollContainer = void 0;
      var t = this.store,
        o = this.hooksFn,
        s = S(t, function (t) {
          return t.selfScroll === e
        }); - 1 < s && (t[s].purge(), t.splice(s, 1));
      var i, r = S(o, function (t) {
        return t[0] === e.hooks
      }); - 1 < r && (t = (i = o[r])[0], s = i[1], i = i[2], t.off(s, i), o.splice(r, 1))
    }, ye.prototype.addBScroll = function (t) {
      this.store.push(pe.create(t))
    }, ye.prototype.buildBScrollGraph = function () {
      for (var t, e = this.store, o = this.store.length, s = 0; s < o; s++)
        for (var i, r = (i = e[s]).selfScroll.wrapper, n = 0; n < o; n++) {
          var h = (t = e[n]).selfScroll.wrapper;
          i !== t && r.contains(h) && (h = function (t, e) {
            for (var o = 0, s = t.parentNode; s && s !== e;) o++, s = s.parentNode;
            return o
          }(h, r), i.hasDescendants(t) || i.addDescendant(t, h), t.hasAncestors(i) || t.addAncestor(i, h))
        }
    }, ye.prototype.analyzeBScrollGraph = function () {
      this.store.forEach(function (t) {
        var d, c, f, e;
        t.analyzed || (d = t.ancestors, c = t.descendants, f = t.selfScroll, t.registerHooks(f, f.eventTypes.beforeScrollStart, function () {
          var t, e, o, s, i, r, n, h, l = d.map(function (t) {
              return t[0].selfScroll
            }),
            a = c.map(function (t) {
              return t[0].selfScroll
            });
          p(l, a).forEach(function (t) {
            t.pending && (t.stop(), t.resetPosition())
          }), t = f, e = f.hasHorizontalScroll, o = f.hasVerticalScroll, s = f.x, i = f.y, r = f.minScrollX, n = f.maxScrollX, h = f.minScrollY, a = f.maxScrollY, t = !1, o ? t = h < i || i < a : e && (t = r < s || s < n), t && ((t = f).scroller.reflow(), t.resetPosition(0)), l.forEach(function (t) {
            var e = t.scroller,
              o = e.actions,
              t = e.scrollBehaviorX,
              e = e.scrollBehaviorY;
            o.fingerMoved = !0, o.contentMoved = !1, o.directionLockAction.reset(), t.start(), e.start(), t.resetStartPos(), e.resetStartPos(), o.startTime = +new Date
          }), fe(l, f)
        }), t.registerHooks(f, f.eventTypes.touchEnd, function () {
          var t = d.map(function (t) {
              return t[0].selfScroll
            }),
            e = c.map(function (t) {
              return t[0].selfScroll
            });
          de(p(t, e))
        }), e = f.scroller.actions.hooks, t.registerHooks(e, e.eventTypes.detectMovingDirection, function () {
          var t, e, o, s, i, r, n, h, l = d.map(function (t) {
              return t[0].selfScroll
            }),
            a = l[0],
            c = l.slice(1),
            p = f.scroller.actions.contentMoved,
            u = 0 === l.length;
          if (p) fe(l, f);
          else if (!u && (t = f, e = f.hasHorizontalScroll, o = f.hasVerticalScroll, s = f.x, i = f.y, r = f.minScrollX, n = f.maxScrollX, h = f.minScrollY, p = f.maxScrollY, l = f.movingDirectionX, u = f.movingDirectionY, t = !1, o ? t = h <= i && -1 === u || i <= p && 1 === u : e && (t = r <= s && -1 === l || s <= n && 1 === l), t)) return fe([f], f), a && de([a]), fe(c, f), !0
        }), t.setAnalyzed(!0))
      })
    }, ye.prototype.ensureEventInvokeSequence = function () {
      this.store.slice().sort(function (t, e) {
        return t.descendants.length - e.descendants.length
      }).forEach(function (t) {
        t.selfScroll.scroller.actionsHandler.rebindDOMEvents()
      })
    }, ye.prototype.registerHooks = function (t, e, o) {
      t.on(e, o, this), this.hooksFn.push([t, e, o])
    }, ye.prototype.purgeNestedScroll = function () {
      var t = this.options.groupId;
      this.store.forEach(function (t) {
        t.purge()
      }), this.store = [], this.hooksFn.forEach(function (t) {
        var e = t[0],
          o = t[1],
          t = t[2];
        e.off(o, t)
      }), this.hooksFn = [], delete ye.instancesMap[t]
    }, ye.pluginName = "nestedScroll", ye.instancesMap = {}, ye);

  function ye(t) {
    var e = this.handleOptions(t),
      o = ye.instancesMap[e];
    return o || ((o = ye.instancesMap[e] = this).store = [], o.hooksFn = []), o.init(t), o
  }
  var ve = (me.prototype.calculate = function (t, e) {
    var o = t - this.lastPos;
    this.lastPos = t;
    var s = this.getDirection(o),
      o = this.calculateIndex(0, t, e),
      e = this.calculateIndex(o, t + this.wrapperHeight, e);
    return 1 === s ? (o -= 10, e += 30) : (o -= 30, e += 10), {
      start: o = o < 0 ? 0 : o,
      end: e
    }
  }, me.prototype.getDirection = function (t) {
    var e;
    if (0 < t) e = 1;
    else {
      if (!(t < 0)) return this.lastDirection;
      e = 0
    }
    return this.lastDirection = e
  }, me.prototype.calculateIndex = function (t, e, o) {
    if (e <= 0) return t;
    for (var s = t, i = o[s] && -1 !== o[s].pos ? o[s].pos : 0, t = 0; s < o.length && o[s].pos < e;) i = o[s].pos, s++;
    return s += t = s === o.length ? Math.floor((e - i) / this.tombstoneHeight) : t
  }, me.prototype.resetState = function () {
    this.lastDirection = 1, this.lastPos = 0
  }, me);

  function me(t, e) {
    this.wrapperHeight = t, this.tombstoneHeight = e, this.lastDirection = 1, this.lastPos = 0
  }
  var ke = function () {
      this.data = null, this.dom = null, this.tombstone = null, this.width = 0, this.height = 0, this.pos = 0
    },
    Te = (Se.prototype.update = function (o) {
      return i(this, void 0, void 0, function () {
        var e;
        return r(this, function (t) {
          return (o = !this.hasMore ? Math.min(o, this.list.length) : o) > this.list.length && (e = o - this.list.length, this.addEmptyData(e)), [2, this.checkToFetch(o)]
        })
      })
    }, Se.prototype.add = function (t) {
      for (var e = 0; e < t.length; e++) this.list[this.loadedNum] ? this.list[this.loadedNum] = c(c({}, this.list[this.loadedNum]), {
        data: t[e]
      }) : this.list[this.loadedNum] = {
        data: t[e]
      }, this.loadedNum++;
      return this.list
    }, Se.prototype.addEmptyData = function (t) {
      for (var e = 0; e < t; e++) this.list.push(new ke);
      return this.list
    }, Se.prototype.fetch = function (o) {
      return i(this, void 0, void 0, function () {
        var e;
        return r(this, function (t) {
          switch (t.label) {
            case 0:
              return this.fetching ? [2, []] : (this.fetching = !0, [4, this.fetchFn(o)]);
            case 1:
              return e = t.sent(), this.fetching = !1, [2, e]
          }
        })
      })
    }, Se.prototype.checkToFetch = function (s) {
      return i(this, void 0, void 0, function () {
        var e, o;
        return r(this, function (t) {
          switch (t.label) {
            case 0:
              return this.hasMore ? s <= this.loadedNum ? [2] : (o = s - this.loadedNum, [4, this.fetch(o)]) : [2];
            case 1:
              return (e = t.sent()) instanceof Array && e.length ? (this.add(e), o = this.onFetchFinish(this.list, !0), [2, this.checkToFetch(o)]) : ("boolean" == typeof e && !1 === e && (this.hasMore = !1, this.list.splice(this.loadedNum), this.onFetchFinish(this.list, !1)), [2])
          }
        })
      })
    }, Se.prototype.getList = function () {
      return this.list
    }, Se.prototype.resetState = function () {
      this.loadedNum = 0, this.fetching = !1, this.hasMore = !0, this.list = []
    }, Se);

  function Se(t, e, o) {
    this.fetchFn = e, this.onFetchFinish = o, this.loadedNum = 0, this.fetching = !1, this.hasMore = !0, this.list = t || []
  }
  var Pe = (be.isTombstone = function (t) {
    return !(!t || !t.classList) && t.classList.contains("tombstone")
  }, be.prototype.getSize = function () {
    var t;
    this.initialed || ((t = this.create()).style.position = "absolute", document.body.appendChild(t), t.style.display = "", this.height = t.offsetHeight, this.width = t.offsetWidth, document.body.removeChild(t), this.cached.push(t))
  }, be.prototype.getOne = function () {
    var t = this.cached.pop();
    if (t) {
      var e = t.style;
      return e.display = "", e.opacity = "1", e[z.transform] = "", e[z.transition] = "", t
    }
    return this.create()
  }, be.prototype.recycle = function (t) {
    for (var e = 0, o = t; e < o.length; e++) {
      var s = o[e];
      s.style.display = "none", this.cached.push(s)
    }
    return this.cached
  }, be.prototype.recycleOne = function (t) {
    return this.cached.push(t), this.cached
  }, be);

  function be(t) {
    this.create = t, this.cached = [], this.width = 0, this.height = 0, this.initialed = !1, this.getSize()
  }
  var we = (xe.prototype.update = function (t, e, o) {
    e >= t.length && (e = t.length - 1), o > t.length && (o = t.length), this.collectUnusedDom(t, e, o), this.createDom(t, e, o), this.cacheHeight(t, e, o);
    t = this.positionDom(t, e, o);
    return {
      start: e,
      startPos: t.startPos,
      startDelta: t.startDelta,
      end: o,
      endPos: t.endPos
    }
  }, xe.prototype.collectUnusedDom = function (t, e, o) {
    for (var s, i = 0; i < t.length; i++) i !== e ? t[i].dom && (s = t[i].dom, Pe.isTombstone(s) ? (this.tombstone.recycleOne(s), s.style.display = "none") : this.unusedDom.push(s), t[i].dom = null) : i = o - 1;
    return t
  }, xe.prototype.createDom = function (t, e, o) {
    for (var s = e; s < o; s++) {
      var i = t[s].dom,
        r = t[s].data;
      if (i) {
        if (!Pe.isTombstone(i) || !r) continue;
        t[s].tombstone = i, t[s].dom = null
      }(i = r ? this.renderFn(r, this.unusedDom.pop()) : this.tombstone.getOne()).style.position = "absolute", t[s].dom = i, t[s].pos = -1, this.content.appendChild(i)
    }
  }, xe.prototype.cacheHeight = function (t, e, o) {
    for (var s = e; s < o; s++) t[s].data && !t[s].height && (t[s].height = t[s].dom.offsetHeight)
  }, xe.prototype.positionDom = function (t, e, o) {
    for (var s = this, i = [], r = this.getStartPos(t, e, o), n = r.start, r = r.delta, h = n, l = e; l < o; l++) {
      var a, c = t[l].tombstone;
      c && ((a = c.style)[z.transition] = E + "transform 200ms, opacity 200ms", a[z.transform] = "translateY(" + h + "px)", a.opacity = "0", t[l].tombstone = null, i.push(c)), t[l].dom && t[l].pos !== h && (t[l].dom.style[z.transform] = "translateY(" + h + "px)", t[l].pos = h), h += t[l].height || this.tombstone.height
    }
    e = window.setTimeout(function () {
      s.tombstone.recycle(i)
    }, 200);
    return this.timers.push(e), {
      startPos: n,
      startDelta: r,
      endPos: h
    }
  }, xe.prototype.getStartPos = function (t, e, o) {
    if (t[e] && -1 !== t[e].pos) return {
      start: t[e].pos,
      delta: 0
    };
    for (var s = -1 === t[0].pos ? 0 : t[0].pos, i = 0; i < e; i++) s += t[i].height || this.tombstone.height;
    for (var r = s, n = e; n < o; n++)
      if (!Pe.isTombstone(t[n].dom) && -1 !== t[n].pos) {
        s = t[n].pos;
        break
      } var h = n;
    if (h < o)
      for (; e < h;) s -= t[h - 1].height, h--;
    return {
      start: s,
      delta: r - s
    }
  }, xe.prototype.removeTombstone = function () {
    for (var t = this.content.querySelectorAll(".tombstone"), e = t.length - 1; 0 <= e; e--) this.content.removeChild(t[e])
  }, xe.prototype.setContent = function (t) {
    t !== this.content && (this.content = t)
  }, xe.prototype.destroy = function () {
    this.removeTombstone(), this.timers.forEach(function (t) {
      clearTimeout(t)
    })
  }, xe.prototype.resetState = function () {
    this.destroy(), this.timers = [], this.unusedDom = []
  }, xe);

  function xe(t, e, o) {
    this.renderFn = e, this.tombstone = o, this.unusedDom = [], this.timers = [], this.setContent(t)
  }
  var Me = (Ye.prototype.init = function () {
    var e = this;
    this.handleOptions();
    var t = this.options,
      o = t.fetch,
      s = t.render,
      t = t.createTombstone;
    this.tombstone = new Pe(t), this.indexCalculator = new ve(this.scroll.scroller.scrollBehaviorY.wrapperSize, this.tombstone.height), this.domManager = new we(this.scroll.scroller.content, s, this.tombstone), this.dataManager = new Te([], o, this.onFetchFinish.bind(this)), this.scroll.on(this.scroll.eventTypes.destroy, this.destroy, this), this.scroll.on(this.scroll.eventTypes.scroll, this.update, this), this.scroll.on(this.scroll.eventTypes.contentChanged, function (t) {
      e.domManager.setContent(t), e.indexCalculator.resetState(), e.domManager.resetState(), e.dataManager.resetState(), e.update({
        y: 0
      })
    });
    o = this.scroll.scroller.scrollBehaviorY;
    o.hooks.on(o.hooks.eventTypes.computeBoundary, this.modifyBoundary, this), this.update({
      y: 0
    })
  }, Ye.prototype.modifyBoundary = function (t) {
    t.maxScrollPos = -2e3
  }, Ye.prototype.handleOptions = function () {
    var t = this.scroll.options.infinity;
    t && ("function" != typeof t.fetch && n("Infinity plugin need fetch Function to new data."), "function" != typeof t.render && n("Infinity plugin need render Function to render each item."), "function" != typeof t.render && n("Infinity plugin need createTombstone Function to create tombstone."), this.options = t), this.scroll.options.probeType = 3
  }, Ye.prototype.update = function (t) {
    var e = Math.round(-t.y),
      t = this.indexCalculator.calculate(e, this.dataManager.getList()),
      e = t.start,
      t = t.end;
    this.start = e, this.end = t, this.dataManager.update(t), this.updateDom(this.dataManager.getList())
  }, Ye.prototype.onFetchFinish = function (t, e) {
    t = this.updateDom(t).end;
    return e || (this.domManager.removeTombstone(), this.scroll.scroller.animater.stop(), this.scroll.resetPosition()), t
  }, Ye.prototype.updateDom = function (t) {
    var e = this.domManager.update(t, this.start, this.end),
      o = e.end,
      s = e.startPos,
      t = e.endPos,
      e = e.startDelta;
    return e && (this.scroll.minScrollY = e), t > this.scroll.maxScrollY && (this.scroll.maxScrollY = -(t - this.scroll.scroller.scrollBehaviorY.wrapperSize)), {
      end: o,
      startPos: s,
      endPos: t
    }
  }, Ye.prototype.destroy = function () {
    for (var t = this.scroll.scroller, e = t.content, t = t.scrollBehaviorY; e.firstChild;) e.removeChild(e.firstChild);
    this.domManager.destroy(), this.scroll.off("scroll", this.update), this.scroll.off("destroy", this.destroy), t.hooks.off(t.hooks.eventTypes.computeBoundary)
  }, Ye.pluginName = "infinity", Ye);

  function Ye(t) {
    this.scroll = t, this.start = 0, this.end = 0, this.init()
  }
  var Be = [{
      key: "putAt",
      name: "putAt"
    }].map(function (t) {
      return {
        key: t.key,
        sourceKey: "plugins.movable." + t.name
      }
    }),
    Ee = (Xe.prototype.handleBScroll = function () {
      this.scroll.proxy(Be)
    }, Xe.prototype.handleHooks = function () {
      var t = this;
      this.hooksFn = [];

      function e(t, e) {
        0 < t.maxScrollPos && (t.minScrollPos = e.wrapperSize - e.contentSize, t.maxScrollPos = 0)
      }
      var o = this.scroll.scroller,
        s = o.scrollBehaviorX,
        i = o.scrollBehaviorY;
      this.registerHooks(s.hooks, s.hooks.eventTypes.ignoreHasScroll, function () {
        return !0
      }), this.registerHooks(s.hooks, s.hooks.eventTypes.computeBoundary, function (t) {
        e(t, s)
      }), this.registerHooks(i.hooks, i.hooks.eventTypes.ignoreHasScroll, function () {
        return !0
      }), this.registerHooks(i.hooks, i.hooks.eventTypes.computeBoundary, function (t) {
        e(t, i)
      }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, function () {
        t.destroy()
      })
    }, Xe.prototype.putAt = function (t, e, o, s) {
      void 0 === o && (o = this.scroll.options.bounceTime), void 0 === s && (s = W.bounce);
      e = this.resolvePostion(t, e);
      this.scroll.scrollTo(e.x, e.y, o, s)
    }, Xe.prototype.resolvePostion = function (t, e) {
      var o = this.scroll.scroller,
        s = o.scrollBehaviorX,
        i = o.scrollBehaviorY,
        o = {
          left: function () {
            return 0
          },
          top: function () {
            return 0
          },
          right: function () {
            return s.minScrollPos
          },
          bottom: function () {
            return i.minScrollPos
          },
          center: function (t) {
            return (0 === t ? s : i).minScrollPos / 2
          }
        };
      return {
        x: "number" == typeof t ? t : o[t](0),
        y: "number" == typeof e ? e : o[e](1)
      }
    }, Xe.prototype.destroy = function () {
      this.hooksFn.forEach(function (t) {
        var e = t[0],
          o = t[1],
          t = t[2];
        e.off(o, t)
      }), this.hooksFn.length = 0
    }, Xe.prototype.registerHooks = function (t, e, o) {
      t.on(e, o, this), this.hooksFn.push([t, e, o])
    }, Xe.pluginName = "movable", Xe.applyOrder = "pre", Xe);

  function Xe(t) {
    this.scroll = t, this.handleBScroll(), this.handleHooks()
  }
  var De = (Oe.prototype.init = function () {
    this.handleOptions(this.scroll.options.observeImage), this.bindEventsToWrapper()
  }, Oe.prototype.handleOptions = function (t) {
    this.options = m({
      debounceTime: 100
    }, t = !0 === (t = void 0 === t ? {} : t) ? {} : t)
  }, Oe.prototype.bindEventsToWrapper = function () {
    var t = this.scroll.scroller.wrapper;
    this.imageLoadEventRegister = new J(t, [{
      name: "load",
      handler: this.load.bind(this),
      capture: !0
    }]), this.imageErrorEventRegister = new J(t, [{
      name: "error",
      handler: this.load.bind(this),
      capture: !0
    }])
  }, Oe.prototype.load = function (t) {
    var e = this,
      o = t.target,
      t = this.options.debounceTime;
    o && "img" === o.tagName.toLowerCase() && (0 === t ? this.scroll.refresh() : (clearTimeout(this.refreshTimer), this.refreshTimer = window.setTimeout(function () {
      e.scroll.refresh()
    }, this.options.debounceTime)))
  }, Oe.pluginName = "observeImage", Oe);

  function Oe(t) {
    this.scroll = t, this.refreshTimer = 0, this.init()
  }

  function He(t) {
    t.preventDefault(), t.stopPropagation()
  }
  var Ce = (ze.prototype.handleDOM = function () {
    var t = this.options,
      e = t.relationElement,
      t = t.relationElementHandleElementIndex,
      t = void 0 === t ? 0 : t;
    this.wrapper = e, this.indicatorEl = this.wrapper.children[t]
  }, ze.prototype.handleHooks = function () {
    var e = this,
      t = this.scroll,
      o = t.hooks,
      s = t.scroller.translater.hooks,
      t = t.scroller.animater.hooks;
    this.registerHooks(o, o.eventTypes.refresh, this.refresh), this.registerHooks(s, s.eventTypes.translate, function (t) {
      e.updatePosition(t)
    }), this.registerHooks(t, t.eventTypes.time, this.transitionTime), this.registerHooks(t, t.eventTypes.timeFunction, this.transitionTimingFunction)
  }, ze.prototype.transitionTime = function (t) {
    this.indicatorEl.style[z.transitionDuration] = (t = void 0 === t ? 0 : t) + "ms"
  }, ze.prototype.transitionTimingFunction = function (t) {
    this.indicatorEl.style[z.transitionTimingFunction] = t
  }, ze.prototype.handleInteractive = function () {
    !1 !== this.options.interactive && this.registerEvents()
  }, ze.prototype.registerHooks = function (t, e, o) {
    t.on(e, o, this), this.hooksFn.push([t, e, o])
  }, ze.prototype.registerEvents = function () {
    var t = this.scroll.options,
      e = t.disableMouse,
      o = t.disableTouch,
      s = [],
      i = [],
      t = [];
    e || (s.push({
      name: "mousedown",
      handler: this.start.bind(this)
    }), i.push({
      name: "mousemove",
      handler: this.move.bind(this)
    }), t.push({
      name: "mouseup",
      handler: this.end.bind(this)
    })), o || (s.push({
      name: "touchstart",
      handler: this.start.bind(this)
    }), i.push({
      name: "touchmove",
      handler: this.move.bind(this)
    }), t.push({
      name: "touchend",
      handler: this.end.bind(this)
    }, {
      name: "touchcancel",
      handler: this.end.bind(this)
    })), this.startEventRegister = new J(this.indicatorEl, s), this.moveEventRegister = new J(window, i), this.endEventRegister = new J(window, t)
  }, ze.prototype.refresh = function () {
    var t = this.scroll,
      e = t.x,
      o = t.y,
      s = t.hasHorizontalScroll,
      i = t.hasVerticalScroll,
      r = t.maxScrollX,
      n = t.maxScrollY,
      h = (c = this.options.ratio, p = {
        ratioX: 0,
        ratioY: 0
      }, c && ("number" == typeof c ? p.ratioX = p.ratioY = c : "object" == typeof c && c && (p.ratioX = c.x || 0, p.ratioY = c.y || 0)), p),
      l = h.ratioX,
      a = h.ratioY,
      c = {
        width: (t = this.wrapper).clientWidth,
        height: t.clientHeight
      },
      p = c.width,
      h = c.height,
      t = L(this.indicatorEl),
      c = t.width,
      t = t.height;
    s && (this.maxScrollX = p - c, this.translateXSign = 0 < this.maxScrollX ? -1 : 1, this.minScrollX = 0, this.ratioX = l || Math.abs(this.maxScrollX / r)), i && (this.maxScrollY = h - t, this.translateYSign = 0 < this.maxScrollY ? -1 : 1, this.minScrollY = 0, this.ratioY = a || Math.abs(this.maxScrollY / n)), this.updatePosition({
      x: e,
      y: o
    })
  }, ze.prototype.start = function (t) {
    var e;
    this.BScrollIsDisabled() || (e = t.touches ? t.touches[0] : t, He(t), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = v(), this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart))
  }, ze.prototype.BScrollIsDisabled = function () {
    return !this.scroll.enabled
  }, ze.prototype.move = function (t) {
    var e, o, s;
    this.initiated && (e = (s = t.touches ? t.touches[0] : t).pageX, o = s.pageY, He(t), s = e - this.lastPointX, t = o - this.lastPointY, this.lastPointX = e, this.lastPointY = o, this.moved || this.indicatorNotMoved(s, t) || (this.moved = !0, this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)), this.moved && (t = this.getBScrollPosByRatio(this.currentPos, s, t), this.syncBScroll(t)))
  }, ze.prototype.end = function (t) {
    var e;
    this.initiated && (this.initiated = !1, He(t), this.moved && (t = (e = this.scroll).x, e = e.y, this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd, {
      x: t,
      y: e
    })))
  }, ze.prototype.getBScrollPosByRatio = function (t, e, o) {
    var s = t.x,
      i = t.y,
      r = this.scroll,
      n = r.hasHorizontalScroll,
      h = r.hasVerticalScroll,
      l = r.minScrollX,
      a = r.maxScrollX,
      c = r.minScrollY,
      p = r.maxScrollY,
      t = this.scroll,
      r = t.x,
      t = t.y;
    return n && (e = T(s + e, Math.min(this.minScrollX, this.maxScrollX), Math.max(this.minScrollX, this.maxScrollX)), r = T(Math.round(e / this.ratioX * this.translateXSign), a, l)), h && (o = T(i + o, Math.min(this.minScrollY, this.maxScrollY), Math.max(this.minScrollY, this.maxScrollY)), t = T(Math.round(o / this.ratioY * this.translateYSign), p, c)), {
      x: r,
      y: t
    }
  }, ze.prototype.indicatorNotMoved = function (t, e) {
    var o = this.currentPos,
      s = o.x,
      o = o.y,
      t = s === this.minScrollX && t <= 0 || s === this.maxScrollX && 0 <= t,
      e = o === this.minScrollY && e <= 0 || o === this.maxScrollY && 0 <= e;
    return t && e
  }, ze.prototype.syncBScroll = function (t) {
    var e = v(),
      o = this.scroll,
      s = o.options,
      i = o.scroller,
      o = s.probeType,
      s = s.momentumLimitTime;
    i.translater.translate(t), e - this.startTime > s && (this.startTime = e, 1 === o && i.hooks.trigger(i.hooks.eventTypes.scroll, t)), 1 < o && i.hooks.trigger(i.hooks.eventTypes.scroll, t)
  }, ze.prototype.updatePosition = function (t) {
    t = this.getIndicatorPosByRatio(t);
    this.applyTransformProperty(t), this.currentPos = c({}, t)
  }, ze.prototype.applyTransformProperty = function (t) {
    var e = this.scroll.options.translateZ,
      e = ["translateX(" + t.x + "px)", "translateY(" + t.y + "px)", "" + e];
    this.indicatorEl.style[z.transform] = e.join(" ")
  }, ze.prototype.getIndicatorPosByRatio = function (t) {
    var e = t.x,
      o = t.y,
      s = this.scroll,
      i = s.hasHorizontalScroll,
      t = s.hasVerticalScroll,
      s = c({}, this.currentPos);
    return i && (e = Math.round(this.ratioX * e * this.translateXSign), s.x = T(e, Math.min(this.minScrollX, this.maxScrollX), Math.max(this.minScrollX, this.maxScrollX))), t && (o = Math.round(this.ratioY * o * this.translateYSign), s.y = T(o, Math.min(this.minScrollY, this.maxScrollY), Math.max(this.minScrollY, this.maxScrollY))), s
  }, ze.prototype.destroy = function () {
    !1 !== this.options.interactive && (this.startEventRegister.destroy(), this.moveEventRegister.destroy(), this.endEventRegister.destroy()), this.hooksFn.forEach(function (t) {
      var e = t[0],
        o = t[1],
        t = t[2];
      e.off(o, t)
    }), this.hooksFn.length = 0
  }, ze);

  function ze(t, e) {
    this.scroll = t, this.options = e, this.currentPos = {
      x: 0,
      y: 0
    }, this.hooksFn = [], this.handleDOM(), this.handleHooks(), this.handleInteractive()
  }
  var Ie = (Le.prototype.handleOptions = function () {
    var t = this.scroll.options.indicators;
    h(Array.isArray(t), "'indicators' must be an array.");
    for (var e = 0, o = t; e < o.length; e++) {
      var s = o[e];
      h(!!s.relationElement, "'relationElement' must be a HTMLElement."), this.createIndicators(s)
    }
  }, Le.prototype.createIndicators = function (t) {
    this.indicators.push(new Ce(this.scroll, t))
  }, Le.prototype.handleHooks = function () {
    var o = this,
      t = this.scroll.hooks;
    t.on(t.eventTypes.destroy, function () {
      for (var t = 0, e = o.indicators; t < e.length; t++) e[t].destroy();
      o.indicators = []
    })
  }, Le.pluginName = "indicators", Le);

  function Le(t) {
    this.scroll = t, this.options = [], this.indicators = [], this.handleOptions(), this.handleHooks()
  }
  Ct.use(zt).use(Lt).use(y).use(u).use(X).use(D).use(K).use(V).use(at).use(Me).use(Ee).use(De).use(Ie), t.Behavior = mt, t.CustomOptions = tt, t.Indicators = Ie, t.InfinityScroll = Me, t.MouseWheel = zt, t.Movable = Ee, t.NestedScroll = at, t.ObserveDom = Lt, t.ObserveImage = De, t.PullDownRefresh = y, t.PullUpLoad = u, t.ScrollBar = X, t.Slide = D, t.Wheel = K, t.Zoom = V, t.createBScroll = Ht, t.default = Ct, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});