import { _ as rt } from "./index-872beffa.js";
import { ref as M, nextTick as it, defineComponent as at, watch as ut, resolveComponent as U, openBlock as ct, createElementBlock as st, Fragment as lt, createElementVNode as w, createVNode as A, withCtx as O, unref as N, createTextVNode as ft } from "vue";
import { M as H } from "./index-b6bcee03.js";
import { u as dt } from "./useTargetData.hook-f6b520a8.js";
import { Z as pt, $ as vt, a0 as yt, k as G, a1 as mt, J as B } from "./index-83341b0a.js";
import { ElMessage as k } from "element-plus";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.worker?worker";
import "monaco-editor/esm/vs/language/json/json.worker?worker";
import "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
import "vue-router";
import "pinia";
import "lodash";
var I = /* @__PURE__ */ ((h) => (h.TXT = "text/plain", h.JSON = "application/json", h.PNG = "image/png", h.JPEG = "image/jpeg", h.GIF = "image/gif", h))(I || {}), q = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(h, S) {
  (function(C, _) {
    h.exports = _();
  })(vt, function() {
    return (
      /******/
      function() {
        var g = {
          /***/
          686: (
            /***/
            function(s, o, t) {
              t.d(o, {
                default: function() {
                  return (
                    /* binding */
                    ot
                  );
                }
              });
              var c = t(279), f = /* @__PURE__ */ t.n(c), d = t(370), y = /* @__PURE__ */ t.n(d), m = t(817), x = /* @__PURE__ */ t.n(m);
              function l(u) {
                try {
                  return document.execCommand(u);
                } catch {
                  return !1;
                }
              }
              var i = function(n) {
                var e = x()(n);
                return l("cut"), e;
              }, v = i;
              function b(u) {
                var n = document.documentElement.getAttribute("dir") === "rtl", e = document.createElement("textarea");
                e.style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[n ? "right" : "left"] = "-9999px";
                var r = window.pageYOffset || document.documentElement.scrollTop;
                return e.style.top = "".concat(r, "px"), e.setAttribute("readonly", ""), e.value = u, e;
              }
              var P = function(n, e) {
                var r = b(n);
                e.container.appendChild(r);
                var a = x()(r);
                return l("copy"), r.remove(), a;
              }, V = function(n) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                }, r = "";
                return typeof n == "string" ? r = P(n, e) : n instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(n == null ? void 0 : n.type) ? r = P(n.value, e) : (r = x()(n), l("copy")), r;
              }, E = V;
              function R(u) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? R = function(e) {
                  return typeof e;
                } : R = function(e) {
                  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, R(u);
              }
              var X = function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.action, r = e === void 0 ? "copy" : e, a = n.container, p = n.target, T = n.text;
                if (r !== "copy" && r !== "cut")
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (p !== void 0)
                  if (p && R(p) === "object" && p.nodeType === 1) {
                    if (r === "copy" && p.hasAttribute("disabled"))
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if (r === "cut" && (p.hasAttribute("readonly") || p.hasAttribute("disabled")))
                      throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  } else
                    throw new Error('Invalid "target" value, use a valid Element');
                if (T)
                  return E(T, {
                    container: a
                  });
                if (p)
                  return r === "cut" ? v(p) : E(p, {
                    container: a
                  });
              }, Y = X;
              function j(u) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? j = function(e) {
                  return typeof e;
                } : j = function(e) {
                  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, j(u);
              }
              function $(u, n) {
                if (!(u instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              }
              function z(u, n) {
                for (var e = 0; e < n.length; e++) {
                  var r = n[e];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(u, r.key, r);
                }
              }
              function Z(u, n, e) {
                return n && z(u.prototype, n), e && z(u, e), u;
              }
              function K(u, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError("Super expression must either be null or a function");
                u.prototype = Object.create(n && n.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), n && D(u, n);
              }
              function D(u, n) {
                return D = Object.setPrototypeOf || function(r, a) {
                  return r.__proto__ = a, r;
                }, D(u, n);
              }
              function Q(u) {
                var n = et();
                return function() {
                  var r = L(u), a;
                  if (n) {
                    var p = L(this).constructor;
                    a = Reflect.construct(r, arguments, p);
                  } else
                    a = r.apply(this, arguments);
                  return W(this, a);
                };
              }
              function W(u, n) {
                return n && (j(n) === "object" || typeof n == "function") ? n : tt(u);
              }
              function tt(u) {
                if (u === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return u;
              }
              function et() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
                  return !1;
                if (typeof Proxy == "function")
                  return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                  })), !0;
                } catch {
                  return !1;
                }
              }
              function L(u) {
                return L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }, L(u);
              }
              function F(u, n) {
                var e = "data-clipboard-".concat(u);
                if (n.hasAttribute(e))
                  return n.getAttribute(e);
              }
              var nt = /* @__PURE__ */ function(u) {
                K(e, u);
                var n = Q(e);
                function e(r, a) {
                  var p;
                  return $(this, e), p = n.call(this), p.resolveOptions(a), p.listenClick(r), p;
                }
                return Z(e, [{
                  key: "resolveOptions",
                  value: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    this.action = typeof a.action == "function" ? a.action : this.defaultAction, this.target = typeof a.target == "function" ? a.target : this.defaultTarget, this.text = typeof a.text == "function" ? a.text : this.defaultText, this.container = j(a.container) === "object" ? a.container : document.body;
                  }
                  /**
                   * Adds a click event listener to the passed trigger.
                   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                   */
                }, {
                  key: "listenClick",
                  value: function(a) {
                    var p = this;
                    this.listener = y()(a, "click", function(T) {
                      return p.onClick(T);
                    });
                  }
                  /**
                   * Defines a new `ClipboardAction` on each click event.
                   * @param {Event} e
                   */
                }, {
                  key: "onClick",
                  value: function(a) {
                    var p = a.delegateTarget || a.currentTarget, T = this.action(p) || "copy", J = Y({
                      action: T,
                      container: this.container,
                      target: this.target(p),
                      text: this.text(p)
                    });
                    this.emit(J ? "success" : "error", {
                      action: T,
                      text: J,
                      trigger: p,
                      clearSelection: function() {
                        p && p.focus(), window.getSelection().removeAllRanges();
                      }
                    });
                  }
                  /**
                   * Default `action` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultAction",
                  value: function(a) {
                    return F("action", a);
                  }
                  /**
                   * Default `target` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultTarget",
                  value: function(a) {
                    var p = F("target", a);
                    if (p)
                      return document.querySelector(p);
                  }
                  /**
                   * Allow fire programmatically a copy action
                   * @param {String|HTMLElement} target
                   * @param {Object} options
                   * @returns Text copied.
                   */
                }, {
                  key: "defaultText",
                  /**
                   * Default `text` lookup function.
                   * @param {Element} trigger
                   */
                  value: function(a) {
                    return F("text", a);
                  }
                  /**
                   * Destroy lifecycle.
                   */
                }, {
                  key: "destroy",
                  value: function() {
                    this.listener.destroy();
                  }
                }], [{
                  key: "copy",
                  value: function(a) {
                    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    return E(a, p);
                  }
                  /**
                   * Allow fire programmatically a cut action
                   * @param {String|HTMLElement} target
                   * @returns Text cutted.
                   */
                }, {
                  key: "cut",
                  value: function(a) {
                    return v(a);
                  }
                  /**
                   * Returns the support of the given action, or all actions if no action is
                   * given.
                   * @param {String} [action]
                   */
                }, {
                  key: "isSupported",
                  value: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], p = typeof a == "string" ? [a] : a, T = !!document.queryCommandSupported;
                    return p.forEach(function(J) {
                      T = T && !!document.queryCommandSupported(J);
                    }), T;
                  }
                }]), e;
              }(f()), ot = nt;
            }
          ),
          /***/
          828: (
            /***/
            function(s) {
              var o = 9;
              if (typeof Element < "u" && !Element.prototype.matches) {
                var t = Element.prototype;
                t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
              }
              function c(f, d) {
                for (; f && f.nodeType !== o; ) {
                  if (typeof f.matches == "function" && f.matches(d))
                    return f;
                  f = f.parentNode;
                }
              }
              s.exports = c;
            }
          ),
          /***/
          438: (
            /***/
            function(s, o, t) {
              var c = t(828);
              function f(m, x, l, i, v) {
                var b = y.apply(this, arguments);
                return m.addEventListener(l, b, v), {
                  destroy: function() {
                    m.removeEventListener(l, b, v);
                  }
                };
              }
              function d(m, x, l, i, v) {
                return typeof m.addEventListener == "function" ? f.apply(null, arguments) : typeof l == "function" ? f.bind(null, document).apply(null, arguments) : (typeof m == "string" && (m = document.querySelectorAll(m)), Array.prototype.map.call(m, function(b) {
                  return f(b, x, l, i, v);
                }));
              }
              function y(m, x, l, i) {
                return function(v) {
                  v.delegateTarget = c(v.target, x), v.delegateTarget && i.call(m, v);
                };
              }
              s.exports = d;
            }
          ),
          /***/
          879: (
            /***/
            function(s, o) {
              o.node = function(t) {
                return t !== void 0 && t instanceof HTMLElement && t.nodeType === 1;
              }, o.nodeList = function(t) {
                var c = Object.prototype.toString.call(t);
                return t !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length" in t && (t.length === 0 || o.node(t[0]));
              }, o.string = function(t) {
                return typeof t == "string" || t instanceof String;
              }, o.fn = function(t) {
                var c = Object.prototype.toString.call(t);
                return c === "[object Function]";
              };
            }
          ),
          /***/
          370: (
            /***/
            function(s, o, t) {
              var c = t(879), f = t(438);
              function d(l, i, v) {
                if (!l && !i && !v)
                  throw new Error("Missing required arguments");
                if (!c.string(i))
                  throw new TypeError("Second argument must be a String");
                if (!c.fn(v))
                  throw new TypeError("Third argument must be a Function");
                if (c.node(l))
                  return y(l, i, v);
                if (c.nodeList(l))
                  return m(l, i, v);
                if (c.string(l))
                  return x(l, i, v);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
              }
              function y(l, i, v) {
                return l.addEventListener(i, v), {
                  destroy: function() {
                    l.removeEventListener(i, v);
                  }
                };
              }
              function m(l, i, v) {
                return Array.prototype.forEach.call(l, function(b) {
                  b.addEventListener(i, v);
                }), {
                  destroy: function() {
                    Array.prototype.forEach.call(l, function(b) {
                      b.removeEventListener(i, v);
                    });
                  }
                };
              }
              function x(l, i, v) {
                return f(document.body, l, i, v);
              }
              s.exports = d;
            }
          ),
          /***/
          817: (
            /***/
            function(s) {
              function o(t) {
                var c;
                if (t.nodeName === "SELECT")
                  t.focus(), c = t.value;
                else if (t.nodeName === "INPUT" || t.nodeName === "TEXTAREA") {
                  var f = t.hasAttribute("readonly");
                  f || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), f || t.removeAttribute("readonly"), c = t.value;
                } else {
                  t.hasAttribute("contenteditable") && t.focus();
                  var d = window.getSelection(), y = document.createRange();
                  y.selectNodeContents(t), d.removeAllRanges(), d.addRange(y), c = d.toString();
                }
                return c;
              }
              s.exports = o;
            }
          ),
          /***/
          279: (
            /***/
            function(s) {
              function o() {
              }
              o.prototype = {
                on: function(t, c, f) {
                  var d = this.e || (this.e = {});
                  return (d[t] || (d[t] = [])).push({
                    fn: c,
                    ctx: f
                  }), this;
                },
                once: function(t, c, f) {
                  var d = this;
                  function y() {
                    d.off(t, y), c.apply(f, arguments);
                  }
                  return y._ = c, this.on(t, y, f);
                },
                emit: function(t) {
                  var c = [].slice.call(arguments, 1), f = ((this.e || (this.e = {}))[t] || []).slice(), d = 0, y = f.length;
                  for (d; d < y; d++)
                    f[d].fn.apply(f[d].ctx, c);
                  return this;
                },
                off: function(t, c) {
                  var f = this.e || (this.e = {}), d = f[t], y = [];
                  if (d && c)
                    for (var m = 0, x = d.length; m < x; m++)
                      d[m].fn !== c && d[m].fn._ !== c && y.push(d[m]);
                  return y.length ? f[t] = y : delete f[t], this;
                }
              }, s.exports = o, s.exports.TinyEmitter = o;
            }
          )
          /******/
        }, C = {};
        function _(s) {
          if (C[s])
            return C[s].exports;
          var o = C[s] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return g[s](o, o.exports, _), o.exports;
        }
        return function() {
          _.n = function(s) {
            var o = s && s.__esModule ? (
              /******/
              function() {
                return s.default;
              }
            ) : (
              /******/
              function() {
                return s;
              }
            );
            return _.d(o, { a: o }), o;
          };
        }(), function() {
          _.d = function(s, o) {
            for (var t in o)
              _.o(o, t) && !_.o(s, t) && Object.defineProperty(s, t, { enumerable: !0, get: o[t] });
          };
        }(), function() {
          _.o = function(s, o) {
            return Object.prototype.hasOwnProperty.call(s, o);
          };
        }(), _(686);
      }().default
    );
  });
})(q);
var ht = q.exports;
const gt = /* @__PURE__ */ pt(ht), bt = (h) => {
  const S = (h == null ? void 0 : h.appendToBody) === void 0 ? !0 : h.appendToBody;
  return {
    toClipboard(g, C) {
      return new Promise((_, s) => {
        const o = document.createElement("button"), t = new gt(o, {
          text: () => g,
          action: () => "copy",
          container: C !== void 0 ? C : document.body
        });
        t.on("success", (c) => {
          t.destroy(), _(c);
        }), t.on("error", (c) => {
          t.destroy(), s(c);
        }), S && document.body.appendChild(o), o.click(), S && document.body.removeChild(o);
      });
    }
  };
}, _t = (h) => ({
  importJsonRef: M(),
  beforeUpload: (s) => {
    const o = s.type;
    return o !== I.JSON && o !== I.TXT ? (k.warning("仅支持上传 【JSON】 格式文件，请重新上传！"), !1) : !0;
  },
  importJson: (s) => {
    const { file: o } = s;
    it(() => {
      o ? yt(o).then((t) => {
        try {
          h.value.option.dataset = G(t);
        } catch {
          k.error("JSON数据结构解析失败，请检查文件里的json数据格式！");
        }
      }) : k.error("导入数据失败，请稍后重试或联系管理员！");
    });
  },
  download: () => {
    try {
      k.success("下载中，请耐心等待..."), mt(B(h.value.option.dataset), void 0, "json");
    } catch {
      k.error("下载失败，数据错误！");
    }
  }
}), wt = { class: "config-item" }, xt = { class: "config-item-content" }, St = { class: "code-editor" }, Et = { class: "code-editor-toolbar" }, Tt = { class: "toolbar-left" }, Ct = { class: "toolbar-right" }, At = { class: "code-editor" }, Ot = { class: "code-editor-toolbar" }, kt = { class: "toolbar-right" }, qt = /* @__PURE__ */ at({
  __name: "index",
  setup(h) {
    const { targetData: S } = dt(), g = M("");
    S.value.option.dataset && (g.value = B(S.value.option.dataset));
    const { importJsonRef: C, importJson: _, beforeUpload: s, download: o } = _t(S), t = () => {
      try {
        g.value !== "" || g.value !== void 0 ? S.value.option.dataset = G(g.value) : S.value.option.dataset = "";
      } catch {
        k.error("JSON数据格式错误！");
      }
    }, { toClipboard: c } = bt(), f = () => {
      try {
        c(g.value), k.success("复制成功");
      } catch (l) {
        k.warning("您的浏览器不支持复制：" + l);
      }
    }, d = M(!1), y = M(""), m = () => {
      d.value = !0, y.value = g.value;
    }, x = () => {
      d.value = !1, g.value = y.value, t();
    };
    return ut(
      () => {
        var l, i;
        return (i = (l = S.value) == null ? void 0 : l.option) == null ? void 0 : i.dataset;
      },
      (l) => {
        l !== "" || l !== void 0 ? g.value = B(l) : g.value = "";
      },
      {
        deep: !0
      }
    ), (l, i) => {
      const v = U("el-upload"), b = U("el-tooltip"), P = U("el-button"), V = rt;
      return ct(), st(lt, null, [
        w("div", wt, [
          w("div", xt, [
            w("div", St, [
              w("div", Et, [
                w("div", Tt, [
                  A(b, {
                    effect: "dark",
                    "raw-content": "",
                    content: "导入(json)",
                    placement: "top"
                  }, {
                    default: O(() => [
                      A(v, {
                        ref_key: "importJsonRef",
                        ref: C,
                        class: "upload-json-btn",
                        action: "",
                        accept: ".json",
                        "http-request": N(_),
                        "show-file-list": !1,
                        "before-upload": N(s)
                      }, {
                        trigger: O(() => i[4] || (i[4] = [
                          w("i", { class: "icon-shanchuan" }, null, -1)
                        ])),
                        _: 1
                      }, 8, ["http-request", "before-upload"])
                    ]),
                    _: 1
                  }),
                  A(b, {
                    effect: "dark",
                    "raw-content": "",
                    content: "下载",
                    placement: "top"
                  }, {
                    default: O(() => [
                      w("i", {
                        class: "icon-xiazai m-l-15",
                        onClick: i[0] || (i[0] = //@ts-ignore
                        (...E) => N(o) && N(o)(...E))
                      })
                    ]),
                    _: 1
                  })
                ]),
                w("div", Ct, [
                  A(b, {
                    effect: "dark",
                    "raw-content": "",
                    content: "复制",
                    placement: "top"
                  }, {
                    default: O(() => [
                      w("i", {
                        class: "icon-fuzhiwenben",
                        onClick: f
                      })
                    ]),
                    _: 1
                  }),
                  A(b, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: O(() => [
                      w("i", {
                        class: "icon-quanping m-l-15",
                        onClick: m
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              A(N(H), {
                modelValue: g.value,
                "onUpdate:modelValue": i[1] || (i[1] = (E) => g.value = E),
                width: "100%",
                height: "350px",
                language: "json",
                onBlur: t
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        A(V, {
          "append-to-body": !0,
          modelValue: d.value,
          "onUpdate:modelValue": i[3] || (i[3] = (E) => d.value = E),
          title: "代码编辑",
          width: "1200px",
          top: "7vh"
        }, {
          footer: O(() => [
            A(P, {
              class: "dms-button",
              type: "primary",
              onClick: x
            }, {
              default: O(() => i[7] || (i[7] = [
                ft("确定")
              ])),
              _: 1
            })
          ]),
          default: O(() => [
            w("div", At, [
              w("div", Ot, [
                i[6] || (i[6] = w("div", { class: "toolbar-left" }, "静态数据", -1)),
                w("div", kt, [
                  A(b, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: O(() => i[5] || (i[5] = [
                      w("i", { class: "icon-quanping m-l-15" }, null, -1)
                    ])),
                    _: 1
                  })
                ])
              ]),
              A(N(H), {
                modelValue: y.value,
                "onUpdate:modelValue": i[2] || (i[2] = (E) => y.value = E),
                width: "100%",
                height: "550px",
                language: "json",
                editorOptions: {
                  lineNumbers: "on",
                  minimap: { enabled: !0 }
                }
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
export {
  qt as default
};
