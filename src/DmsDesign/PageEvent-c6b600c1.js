import { defineComponent as $, ref as i, resolveComponent as m, openBlock as u, createElementBlock as V, Fragment as F, createElementVNode as n, createVNode as l, withCtx as e, renderList as j, createBlock as C, createTextVNode as a, toDisplayString as w, withModifiers as q, createCommentVNode as E, unref as k } from "vue";
import { M as U } from "./index-b6bcee03.js";
import { C as x } from "./CollapseItem-55425c0a.js";
import { _ as G } from "./index-872beffa.js";
import { i as z, h as D } from "./index-83341b0a.js";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.worker?worker";
import "monaco-editor/esm/vs/language/json/json.worker?worker";
import "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
import "vue-router";
import "pinia";
import "element-plus";
import "lodash";
const K = { class: "dms-page-configurations-event" }, L = {
  key: 0,
  class: "config-item"
}, O = { class: "config-item-content" }, T = { class: "code-editor" }, A = { class: "code-editor-toolbar" }, H = { class: "toolbar-right" }, J = ["onClick"], Q = { class: "code-editor-content" }, R = {
  class: "code-editor",
  style: { height: "60vh" }
}, W = { class: "code-editor-toolbar" }, X = { class: "toolbar-right" }, Y = { class: "code-editor-content" }, Z = /* @__PURE__ */ $({
  __name: "PageEvent",
  setup(I) {
    const y = i(["基础事件"]), h = z(), v = i({ ...h.getGlobalEvent });
    i(0);
    const f = i("onMounted"), g = (p) => {
      h.setGlobalEvent(p, v.value[p]);
    }, r = i(!1), _ = i(""), N = (p, t) => {
      r.value = !0, f.value = p, _.value = t;
    }, B = () => {
      r.value = !1, v.value[f.value].customFunction = _.value, g(f.value);
    };
    return (p, t) => {
      const M = m("el-switch"), c = m("el-tooltip"), b = m("el-tag"), S = m("el-collapse"), P = m("el-button");
      return u(), V(F, null, [
        n("div", K, [
          l(S, {
            class: "config-collapse",
            modelValue: y.value,
            "onUpdate:modelValue": t[1] || (t[1] = (o) => y.value = o)
          }, {
            default: e(() => [
              l(x, {
                title: "基础事件",
                name: "基础事件"
              }, {
                default: e(() => [
                  (u(!0), V(F, null, j(v.value, (o, s) => (u(), C(x, {
                    class: "m-t-10",
                    name: s,
                    key: s,
                    disabled: o ? !o.open : !1
                  }, {
                    title: e(() => [
                      a(w(o.eventName) + " ", 1),
                      o ? (u(), C(M, {
                        key: 0,
                        size: "small",
                        class: "m-l-10",
                        modelValue: o.open,
                        "onUpdate:modelValue": (d) => o.open = d,
                        onClick: t[0] || (t[0] = q(() => {
                        }, ["stop"])),
                        onChange: (d) => g(s)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])) : E("", !0)
                    ]),
                    default: e(() => [
                      o ? (u(), V("div", L, [
                        n("div", O, [
                          n("div", T, [
                            n("div", A, [
                              l(b, { type: "info" }, {
                                default: e(() => [
                                  t[5] || (t[5] = n("span", { class: "func-keyword" }, "function ", -1)),
                                  a(w(s) + "( ", 1),
                                  l(c, {
                                    effect: "dark",
                                    "raw-content": "",
                                    content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                                    placement: "top"
                                  }, {
                                    default: e(() => t[4] || (t[4] = [
                                      a(" components ")
                                    ])),
                                    _: 1
                                  }),
                                  t[6] || (t[6] = a(" ) { "))
                                ]),
                                _: 2
                              }, 1024),
                              n("div", H, [
                                l(c, {
                                  effect: "dark",
                                  "raw-content": "",
                                  content: "全屏",
                                  placement: "top"
                                }, {
                                  default: e(() => [
                                    n("i", {
                                      class: "icon-quanping m-l-15",
                                      onClick: (d) => N(s, o.customFunction)
                                    }, null, 8, J)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            n("div", Q, [
                              l(k(U), {
                                modelValue: o.customFunction,
                                "onUpdate:modelValue": (d) => o.customFunction = d,
                                width: "100%",
                                height: "250px",
                                language: "javascript",
                                onBlur: (d) => g(s)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            l(b, { type: "info" }, {
                              default: e(() => t[7] || (t[7] = [
                                a("}")
                              ])),
                              _: 1
                            })
                          ])
                        ])
                      ])) : E("", !0)
                    ]),
                    _: 2
                  }, 1032, ["name", "disabled"]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        l(k(G), {
          class: "code-dialog",
          width: "70%",
          top: "7vh",
          "append-to-body": !0,
          "close-on-click-modal": !1,
          modelValue: r.value,
          "onUpdate:modelValue": t[3] || (t[3] = (o) => r.value = o),
          title: "代码编辑"
        }, {
          footer: e(() => [
            l(P, {
              class: "dms-button",
              type: "primary",
              onClick: B
            }, {
              default: e(() => t[14] || (t[14] = [
                a("确定")
              ])),
              _: 1
            })
          ]),
          default: e(() => [
            n("div", R, [
              n("div", W, [
                l(b, { type: "info" }, {
                  default: e(() => [
                    t[10] || (t[10] = n("span", { class: "func-keyword" }, "function ", -1)),
                    a(w(f.value) + "( ", 1),
                    l(c, {
                      effect: "dark",
                      "raw-content": "",
                      content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                      placement: "top"
                    }, {
                      default: e(() => t[8] || (t[8] = [
                        a(" components ")
                      ])),
                      _: 1
                    }),
                    t[11] || (t[11] = a(" , ")),
                    l(c, {
                      effect: "dark",
                      "raw-content": "",
                      content: "内置在代码环境中可用的包变量 }",
                      placement: "top"
                    }, {
                      default: e(() => t[9] || (t[9] = [
                        a(" node_modules ")
                      ])),
                      _: 1
                    }),
                    t[12] || (t[12] = a(" ) { "))
                  ]),
                  _: 1
                }),
                n("div", X, [
                  l(c, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: e(() => t[13] || (t[13] = [
                      n("i", { class: "icon-quanping m-l-15" }, null, -1)
                    ])),
                    _: 1
                  })
                ])
              ]),
              n("div", Y, [
                r.value ? (u(), C(k(U), {
                  key: 0,
                  modelValue: _.value,
                  "onUpdate:modelValue": t[2] || (t[2] = (o) => _.value = o),
                  width: "100%",
                  height: "100%",
                  language: "javascript",
                  editorOptions: {
                    lineNumbers: "on",
                    minimap: { enabled: !0 }
                  }
                }, null, 8, ["modelValue"])) : E("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const _t = /* @__PURE__ */ D(Z, [["__scopeId", "data-v-1d2d2318"]]);
export {
  _t as default
};
