import { defineComponent as me, ref as U, watch as ye, resolveComponent as y, openBlock as s, createElementBlock as r, Fragment as _, renderList as M, createBlock as h, withCtx as l, createTextVNode as n, toDisplayString as x, withModifiers as pe, createCommentVNode as E, createElementVNode as o, createVNode as t, unref as g, computed as te } from "vue";
import { M as ae } from "./index-b6bcee03.js";
import { u as fe } from "./useTargetData.hook-f6b520a8.js";
import { z as ne, h as _e, x as Ce, A as ce, G as Ue, g as Be, B as ie } from "./index-83341b0a.js";
import { cloneDeep as S } from "lodash";
import { _ as ve } from "./index-872beffa.js";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.worker?worker";
import "monaco-editor/esm/vs/language/json/json.worker?worker";
import "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
import "vue-router";
import "pinia";
import "element-plus";
const qe = {
  key: 0,
  class: "config-item"
}, Ke = { class: "config-item-content" }, ze = { class: "code-editor" }, Ae = { class: "code-editor-toolbar" }, Re = { class: "toolbar-right" }, We = ["onClick"], He = { class: "code-editor-content" }, Ge = {
  class: "code-editor",
  style: { height: "60vh" }
}, Xe = { class: "code-editor-toolbar" }, Ye = { class: "toolbar-right" }, Je = { class: "code-editor-content" }, Qe = /* @__PURE__ */ me({
  __name: "index",
  setup(se) {
    const { targetData: m, chartEditStore: O } = fe(), k = U({ ...m.value.events.advancedEvents });
    (() => {
      k.value[ne.VNODE_BEFORE_MOUNT] || (k.value[ne.VNODE_BEFORE_MOUNT] = {
        open: !1,
        customFunction: void 0,
        arguments: [],
        // 回调参数
        action: []
        // 交互动作
      }), k.value[ne.VNODE_MOUNTED] || (k.value[ne.VNODE_MOUNTED] = {
        open: !1,
        customFunction: void 0,
        arguments: [],
        // 回调参数
        action: []
        // 交互动作
      });
    })(), ye(
      () => m && (m.value ? m.value.id : m),
      // 监听组件变化
      (q, p) => {
        m.value && m.value.events && (p ? q !== p && (k.value = S({ ...m.value.events.advancedEvents })) : q && (k.value = S({ ...m.value.events.advancedEvents })));
      },
      { immediate: !0 }
    ), U(0), U({ action: [] });
    const P = U(ne.VNODE_BEFORE_MOUNT), $ = (q) => {
      m.value.events.advancedEvents = { ...k.value };
    }, T = U(!1), B = U(""), j = (q, p) => {
      T.value = !0, P.value = q, B.value = p;
    }, le = () => {
      T.value = !1, k.value[P.value].customFunction = B.value, m.value.events.advancedEvents = { ...k.value };
    }, Q = {
      [ne.VNODE_BEFORE_MOUNT]: "渲染之前",
      [ne.VNODE_MOUNTED]: "渲染之后"
    };
    return (q, p) => {
      const c = y("el-switch"), D = y("el-tooltip"), b = y("el-tag"), u = y("el-collapse-item"), N = y("el-button");
      return s(), r(_, null, [
        (s(!0), r(_, null, M(k.value, (C, L) => (s(), h(u, {
          class: "m-t-10",
          name: L,
          key: L,
          disabled: C ? !C.open : !1
        }, {
          title: l(() => [
            n(x(Q[L]) + " ", 1),
            C ? (s(), h(c, {
              key: 0,
              size: "small",
              class: "m-l-10",
              modelValue: C.open,
              "onUpdate:modelValue": (K) => C.open = K,
              onClick: p[0] || (p[0] = pe(() => {
              }, ["stop"])),
              onChange: (K) => $()
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])) : E("", !0)
          ]),
          default: l(() => [
            C ? (s(), r("div", qe, [
              o("div", Ke, [
                o("div", ze, [
                  o("div", Ae, [
                    t(b, { type: "info" }, {
                      default: l(() => [
                        p[6] || (p[6] = o("span", { class: "func-keyword" }, "function ", -1)),
                        n(x(P.value) + "( ", 1),
                        t(D, {
                          effect: "dark",
                          "raw-content": "",
                          content: "触发对应生命周期事件时接收的参数",
                          placement: "top"
                        }, {
                          default: l(() => p[3] || (p[3] = [
                            n(" e ")
                          ])),
                          _: 1
                        }),
                        p[7] || (p[7] = n(" , ")),
                        t(D, {
                          effect: "dark",
                          "raw-content": "",
                          content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                          placement: "top"
                        }, {
                          default: l(() => p[4] || (p[4] = [
                            n(" components ")
                          ])),
                          _: 1
                        }),
                        p[8] || (p[8] = n(" , ")),
                        t(D, {
                          effect: "dark",
                          "raw-content": "",
                          content: "内置在代码环境中可用的包变量 }",
                          placement: "top"
                        }, {
                          default: l(() => p[5] || (p[5] = [
                            n(" node_modules ")
                          ])),
                          _: 1
                        }),
                        p[9] || (p[9] = n(" ) { "))
                      ]),
                      _: 1
                    }),
                    o("div", Re, [
                      t(D, {
                        effect: "dark",
                        "raw-content": "",
                        content: "全屏",
                        placement: "top"
                      }, {
                        default: l(() => [
                          o("i", {
                            class: "icon-quanping m-l-15",
                            onClick: (K) => j(L, C.customFunction)
                          }, null, 8, We)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  o("div", He, [
                    t(g(ae), {
                      modelValue: C.customFunction,
                      "onUpdate:modelValue": (K) => C.customFunction = K,
                      width: "100%",
                      height: "250px",
                      language: "javascript",
                      onBlur: $
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  t(b, { type: "info" }, {
                    default: l(() => p[10] || (p[10] = [
                      n("}")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])) : E("", !0)
          ]),
          _: 2
        }, 1032, ["name", "disabled"]))), 128)),
        t(g(ve), {
          class: "code-dialog",
          width: "70%",
          top: "7vh",
          "append-to-body": !0,
          "close-on-click-modal": !1,
          modelValue: T.value,
          "onUpdate:modelValue": p[2] || (p[2] = (C) => T.value = C),
          title: "代码编辑"
        }, {
          footer: l(() => [
            t(N, {
              class: "dms-button",
              type: "primary",
              onClick: le
            }, {
              default: l(() => p[19] || (p[19] = [
                n("确定")
              ])),
              _: 1
            })
          ]),
          default: l(() => [
            o("div", Ge, [
              o("div", Xe, [
                t(b, { type: "info" }, {
                  default: l(() => [
                    p[14] || (p[14] = o("span", { class: "func-keyword" }, "function ", -1)),
                    n(x(P.value) + "( ", 1),
                    t(D, {
                      effect: "dark",
                      "raw-content": "",
                      content: "触发对应生命周期事件时接收的参数",
                      placement: "top"
                    }, {
                      default: l(() => p[11] || (p[11] = [
                        n(" e ")
                      ])),
                      _: 1
                    }),
                    p[15] || (p[15] = n(" , ")),
                    t(D, {
                      effect: "dark",
                      "raw-content": "",
                      content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                      placement: "top"
                    }, {
                      default: l(() => p[12] || (p[12] = [
                        n(" components ")
                      ])),
                      _: 1
                    }),
                    p[16] || (p[16] = n(" , ")),
                    t(D, {
                      effect: "dark",
                      "raw-content": "",
                      content: "内置在代码环境中可用的包变量 }",
                      placement: "top"
                    }, {
                      default: l(() => p[13] || (p[13] = [
                        n(" node_modules ")
                      ])),
                      _: 1
                    }),
                    p[17] || (p[17] = n(" ) { "))
                  ]),
                  _: 1
                }),
                o("div", Ye, [
                  t(D, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: l(() => p[18] || (p[18] = [
                      o("i", { class: "icon-quanping m-l-15" }, null, -1)
                    ])),
                    _: 1
                  })
                ])
              ]),
              o("div", Je, [
                T.value ? (s(), h(g(ae), {
                  key: 0,
                  modelValue: B.value,
                  "onUpdate:modelValue": p[1] || (p[1] = (C) => B.value = C),
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
const Ze = /* @__PURE__ */ _e(Qe, [["__scopeId", "data-v-a98a8a0c"]]), Ee = [
  { value: "=", label: "等于" },
  { value: "!=", label: "不等于" },
  { value: ">", label: "大于" },
  { value: "<", label: "小于" },
  { value: ">=", label: "大于等于" },
  { value: "<=", label: "小于等于" },
  { value: "in", label: "等于任意一个" },
  { value: "not", label: "不等于任意一个" }
], he = {
  text: "文本类型",
  boolean: "布尔类型",
  number: "数字类型",
  global: "全局变量",
  current: "当前组件数据",
  link: "页面组件"
}, Ie = { class: "action-tabs-box" }, et = { class: "tab-label" }, tt = ["onClick"], lt = { class: "action-box" }, ot = { class: "action-filter" }, nt = { class: "radio-box m-t-15" }, at = { class: "add-btn m-t-10" }, st = { class: "scroll-box" }, dt = { class: "filter-box" }, ut = ["onClick"], it = {
  key: 0,
  class: "default-box"
}, pt = { class: "select-wrap" }, rt = { class: "select-wrap" }, ct = {
  key: 0,
  class: "input-wrap"
}, vt = {
  key: 1,
  class: "input-wrap"
}, mt = {
  key: 2,
  class: "select-wrap"
}, ft = {
  key: 3,
  class: "select-wrap"
}, _t = {
  key: 0,
  class: "select-wrap"
}, gt = {
  key: 1,
  class: "tip-text"
}, bt = { style: { "max-width": "500px" } }, Vt = {
  key: 1,
  class: "tip-text"
}, yt = { class: "cascader-wrap" }, kt = {
  key: 1,
  class: "code-editor m-t-10"
}, Ct = { class: "code-editor-toolbar" }, wt = { class: "toolbar-right" }, Ut = ["onClick"], Et = { class: "code-editor-content" }, ht = { class: "action-left" }, $t = { class: "action-radio-box" }, Lt = { class: "action-right" }, Ot = { class: "config-box" }, Tt = { class: "config-box-wrap" }, Pt = { class: "select-wrap" }, Nt = { class: "select-wrap" }, xt = { class: "cascader-wrap" }, Ft = { class: "config-box-wrap" }, Dt = { class: "m-b-5" }, Mt = { class: "input-wrap" }, St = { class: "m-b-5" }, jt = { class: "input-wrap" }, Bt = { class: "config-box-wrap" }, qt = { class: "config-box-wrap" }, Kt = { class: "input-wrap" }, zt = { class: "switch-wrap m-t-10" }, At = { class: "config-box-wrap" }, Rt = { class: "select-wrap" }, Wt = { class: "cascader-wrap" }, Ht = { class: "select-wrap m-t-10" }, Gt = { class: "action-title m-t-15" }, Xt = { class: "params-box" }, Yt = { class: "params-head m-t-15 m-b-10" }, Jt = { class: "params-title m-r-25" }, Qt = { class: "select-wrap m-b-15" }, Zt = {
  key: 0,
  class: "input-wrap"
}, It = {
  key: 1,
  class: "input-wrap"
}, el = {
  key: 2,
  class: "select-wrap"
}, tl = {
  key: 3,
  class: "select-wrap"
}, ll = {
  key: 0,
  class: "select-wrap"
}, ol = {
  key: 1,
  class: "tip-text"
}, nl = { style: { "max-width": "500px" } }, al = {
  key: 1,
  class: "tip-text"
}, sl = { class: "cascader-wrap" }, dl = {
  key: 1,
  class: "code-editor m-t-10"
}, ul = { class: "code-editor-toolbar" }, il = { class: "toolbar-right" }, pl = ["onClick"], rl = { class: "code-editor-content" }, cl = {
  key: 1,
  class: "tip-text m-t-20"
}, vl = {
  key: 0,
  class: "m-t-25"
}, ml = { class: "delay-config m-t-15" }, fl = { class: "input-wrap" }, _l = {
  class: "code-editor",
  style: { height: "60vh" }
}, gl = { class: "code-editor-toolbar" }, bl = { class: "code-editor-content" }, Vl = { class: "code-editor-toolbar" }, yl = /* @__PURE__ */ me({
  __name: "index",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    eventKey: {
      type: String,
      required: !1
    },
    eventData: {
      type: Object
    },
    editEvent: {
      // 编辑事件
      type: Object
    },
    eventType: {
      type: String
    }
  },
  emits: ["update:modelValue", "update:eventData"],
  setup(se, { emit: m }) {
    const { targetData: O, chartEditStore: k } = fe(), z = Ce(() => import("./index-d5fc9050.js"));
    Ce(() => import("./index-d957b9a6.js")), Ce(() => import("./index-e7b9f2b5.js"));
    const P = se, $ = U(!1);
    ye(
      () => P.modelValue,
      (v) => {
        $.value = v;
      }
    );
    const T = U(0), B = te(() => (v) => {
      let e = ce.findIndex((V) => V.value === v);
      return e > -1 ? ce[e].label : "";
    }), j = U([]);
    function le(v) {
      var e = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, V = v.replace(e, ""), F = V.slice(V.indexOf("(") + 1, V.indexOf(")")).match(/([^\s,]+)/g);
      return F === null ? [] : F;
    }
    const Q = (v, e, V = !1) => {
      if (V && (v.methodName = "", v.methodParams = []), v.targetList) {
        const I = v.targetList[v.targetList.length - 1], be = {};
        if (window.$components[I])
          for (var F in window.$components[I].exposed) {
            const w = window.$components[I].exposed[F];
            let de = F;
            Object.getOwnPropertyDescriptor(w, "zhName") && (de = Object.getOwnPropertyDescriptor(w, "zhName").value);
            let R = [];
            Object.getOwnPropertyDescriptor(w, "methodParams") ? R = Object.getOwnPropertyDescriptor(w, "methodParams").value : le(w.toString().split(`
`)[0]).forEach((W, ee) => {
              R.push({ name: "参数" + (ee + 1), type: "unkonw", desc: W + ": 参数类型未知" });
            }), be[F] = {
              label: de,
              // 方法名
              params: R
              // 方法参数
            };
          }
        j.value[e] = be;
      }
    }, q = (v, e) => {
      v.methodParams = [], j.value[e][v.methodName].params.forEach((V) => {
        v.methodParams.push({ value: "", type: "custom", content: "return undefined;", valueType: "text" });
      });
    }, p = U(!1), c = U("filter"), D = U(""), b = U(-1), u = (v, e, V) => {
      V !== void 0 ? c.value = "params" : c.value = "filter", b.value = e, D.value = v, p.value = !0;
    }, N = () => {
      b.value > -1 && (c.value === "filter" ? Z.value.action[T.value].filterList[b.value].customFunction = D.value : Z.value.action[T.value].methodParams[b.value].content = D.value), p.value = !1;
    }, C = () => {
    }, L = (v, e) => {
      v.filterList || (v.filterList = []), v.filterList.push({
        type: "default",
        // 条件类型 默认 自定义
        key: "value",
        // 当前数据的key
        tag: "=",
        customFunction: "return true;",
        value: "",
        valueType: "text"
      });
    }, K = (v) => {
    }, Y = () => {
      Z.value = P.editEvent, Z.value.action.map((v, e) => {
        v.actionType === "executionMethod" && Q(v, e, !1);
      });
    }, A = () => {
      J("update:modelValue", !1);
    }, oe = (v, e) => {
      v.actionType === "translate" ? v.translate || (v.translate = {
        x: 0,
        y: 0
      }) : v.actionType === "requestData" && v.delay === void 0 && (v.delay = 0);
    }, J = m, Le = () => {
      $.value = !1, J("update:modelValue", !1);
    }, ge = te(() => {
      const v = S(k.getComponentList);
      return v.arrowOpen = !1, v.map((e) => {
        e.title = e.chartConfig.title, e.groupList && (e.groupList.map((V) => {
          V.title = V.chartConfig.title;
        }), e.groupList.reverse()), e.componentList && (e.groupList = e.componentList.map((V) => (V.title = V.chartConfig.title, V.groupList && (V.groupList.map((F) => {
          F.title = F.chartConfig.title;
        }), V.groupList.reverse()), V)), e.groupList.reverse());
      }), v.reverse();
    }), Oe = te(() => {
      const v = [];
      return S(k.getComponentList).map((V) => {
        V.chartConfig.key === "FormContainer" ? v.push(V) : V.groupList && V.groupList.map((F) => {
          F.chartConfig.key === "FormContainer" && v.push(F);
        });
      }), v;
    });
    te(() => {
      const v = S(k.getComponentList);
      return v.map((e) => {
        e.title = e.chartConfig.title;
      }), v.reverse();
    });
    const Te = k.editCanvasConfig.groupId, Pe = k.editCanvasConfig.id;
    k.editCanvasConfig.loginPageId;
    const Z = U({ action: [] }), Ne = () => {
      const v = k.editCanvasConfig.loginPageId, e = {
        actionType: "show",
        filterType: "or",
        // and or 满足条件类型
        filterList: [],
        // 自定义条件
        targetList: [],
        // 平移位置
        translate: { x: 0, y: 0 },
        methodName: "",
        // 执行组件方法名
        methodParams: [],
        // 执行组件方法参数
        delay: 0,
        // 延迟
        setting: {
          link: "",
          // 链接地址
          linkOpenWindow: !0,
          // 新窗口打开
          linkCanvasPage: null
          // 链接大屏地址
        },
        loginPageId: v
      };
      Z.value.action.push(e), T.value = Z.value.action.length - 1;
    }, xe = (v) => {
      Z.value.action.splice(v, 1), T.value = 0;
    }, Fe = () => {
      P.eventKey && (P.eventData[P.eventKey] = S(Z.value)), J("update:modelValue", !1), O.value.events[P.eventType] = S(P.eventData);
    };
    return U([]), (v, e) => {
      const V = y("el-radio"), F = y("el-radio-group"), I = y("el-button"), be = Be, w = y("el-tooltip"), de = y("el-text"), R = y("el-col"), H = y("el-option"), W = y("el-select"), ee = y("el-input"), Ve = y("el-cascader"), re = y("el-row"), ue = y("el-tag"), ke = ae, De = y("el-scrollbar"), we = y("el-input-number"), Me = y("el-switch"), Se = y("el-tab-pane"), je = y("el-tabs");
      return s(), r(_, null, [
        t(g(ve), {
          modelValue: $.value,
          "onUpdate:modelValue": e[1] || (e[1] = (a) => $.value = a),
          width: "1200",
          top: "5vh",
          title: "交互编辑器",
          "append-to-body": !0,
          "close-on-click-modal": !1,
          onOpen: Y,
          onClose: A
        }, {
          footer: l(() => [
            t(I, {
              class: "dms-button",
              type: "info",
              onClick: Le
            }, {
              default: l(() => e[63] || (e[63] = [
                n("取消")
              ])),
              _: 1
            }),
            t(I, {
              class: "dms-button",
              type: "primary",
              onClick: Fe
            }, {
              default: l(() => e[64] || (e[64] = [
                n("确定")
              ])),
              _: 1
            })
          ]),
          default: l(() => [
            o("div", Ie, [
              e[62] || (e[62] = o("div", { class: "action-tabs-tag" }, [
                o("i", { class: "icon-label" }),
                n(" 动作：")
              ], -1)),
              se.modelValue ? (s(), h(je, {
                key: 0,
                modelValue: T.value,
                "onUpdate:modelValue": e[0] || (e[0] = (a) => T.value = a),
                class: "action-tabs",
                onTabChange: K
              }, {
                default: l(() => [
                  (s(!0), r(_, null, M(Z.value.action, (a, G) => (s(), h(Se, {
                    key: G,
                    label: a.title,
                    name: G
                  }, {
                    label: l(() => [
                      o("div", et, [
                        n(" 动作" + x(G + 1) + "-" + x(B.value(a.actionType)) + "： ", 1),
                        o("i", {
                          class: "icon-error del-tab-btn",
                          onClick: pe((d) => xe(G), ["stop"])
                        }, null, 8, tt)
                      ])
                    ]),
                    default: l(() => [
                      o("div", lt, [
                        o("div", ot, [
                          e[25] || (e[25] = o("div", { class: "action-title" }, "自定义条件判断", -1)),
                          o("div", nt, [
                            t(F, {
                              modelValue: a.filterType,
                              "onUpdate:modelValue": (d) => a.filterType = d
                            }, {
                              default: l(() => [
                                t(V, { value: "or" }, {
                                  default: l(() => e[4] || (e[4] = [
                                    n("满足任意条件")
                                  ])),
                                  _: 1
                                }),
                                t(V, { value: "and" }, {
                                  default: l(() => e[5] || (e[5] = [
                                    n("满足全部条件")
                                  ])),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          o("div", at, [
                            t(I, {
                              type: "primary",
                              block: "",
                              class: "dms-button block",
                              onClick: (d) => L(a)
                            }, {
                              default: l(() => e[6] || (e[6] = [
                                n(" 添加条件 ")
                              ])),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          o("div", st, [
                            t(De, null, {
                              default: l(() => [
                                o("div", dt, [
                                  (s(!0), r(_, null, M(a.filterList, (d, f) => (s(), r("div", {
                                    key: f,
                                    class: "filter-item m-t-10"
                                  }, [
                                    t(F, {
                                      modelValue: d.type,
                                      "onUpdate:modelValue": (i) => d.type = i
                                    }, {
                                      default: l(() => [
                                        t(V, { value: "default" }, {
                                          default: l(() => e[7] || (e[7] = [
                                            n("默认")
                                          ])),
                                          _: 1
                                        }),
                                        t(V, { value: "custom" }, {
                                          default: l(() => e[8] || (e[8] = [
                                            n("自定义")
                                          ])),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"]),
                                    t(w, {
                                      effect: "dark",
                                      content: "删除条件",
                                      placement: "top"
                                    }, {
                                      default: l(() => [
                                        o("div", {
                                          class: "del-filter",
                                          onClick: (i) => a.filterList.splice(f, 1)
                                        }, [
                                          t(be, { "icon-class": "delete" })
                                        ], 8, ut)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    d.type === "default" ? (s(), r("div", it, [
                                      t(re, { gutter: 4 }, {
                                        default: l(() => [
                                          t(R, {
                                            span: 5,
                                            class: "m-b-10 m-t-5"
                                          }, {
                                            default: l(() => [
                                              t(de, { type: "primary" }, {
                                                default: l(() => e[9] || (e[9] = [
                                                  n("触发值")
                                                ])),
                                                _: 1
                                              }),
                                              t(w, {
                                                effect: "dark",
                                                content: "当前组件触发事件的参数值 mouseEvent",
                                                placement: "top"
                                              }, {
                                                default: l(() => e[10] || (e[10] = [
                                                  o("i", { class: "icon-help" }, null, -1)
                                                ])),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          t(R, {
                                            span: 9,
                                            class: "m-b-10"
                                          }, {
                                            default: l(() => [
                                              o("div", pt, [
                                                t(w, {
                                                  effect: "dark",
                                                  content: "条件",
                                                  placement: "top"
                                                }, {
                                                  default: l(() => [
                                                    t(W, {
                                                      class: "config-select",
                                                      "popper-class": "config-select-pop",
                                                      modelValue: d.tag,
                                                      "onUpdate:modelValue": (i) => d.tag = i,
                                                      onChange: (i) => d.value = ""
                                                    }, {
                                                      default: l(() => [
                                                        (s(!0), r(_, null, M(g(Ee), (i, X) => (s(), h(H, {
                                                          key: X,
                                                          label: i.label,
                                                          value: i.value
                                                        }, null, 8, ["label", "value"]))), 128))
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          t(R, {
                                            span: 10,
                                            class: "m-b-10"
                                          }, {
                                            default: l(() => [
                                              o("div", rt, [
                                                t(w, {
                                                  effect: "dark",
                                                  content: "选择数据类型",
                                                  placement: "top"
                                                }, {
                                                  default: l(() => [
                                                    t(W, {
                                                      class: "config-select",
                                                      "popper-class": "config-select-pop",
                                                      modelValue: d.valueType,
                                                      "onUpdate:modelValue": (i) => d.valueType = i,
                                                      onChange: (i) => d.value = ""
                                                    }, {
                                                      default: l(() => [
                                                        (s(!0), r(_, null, M(g(he), (i, X) => (s(), h(H, {
                                                          key: X,
                                                          label: i,
                                                          value: X
                                                        }, null, 8, ["label", "value"]))), 128))
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          t(R, {
                                            span: 24,
                                            class: "m-b-10"
                                          }, {
                                            default: l(() => [
                                              d.valueType === "text" ? (s(), r("div", ct, [
                                                t(ee, {
                                                  class: "config-input",
                                                  modelValue: d.value,
                                                  "onUpdate:modelValue": (i) => d.value = i,
                                                  placeholder: "请输入值"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])) : E("", !0),
                                              d.valueType === "number" ? (s(), r("div", vt, [
                                                t(ee, {
                                                  class: "config-input",
                                                  modelValue: d.value,
                                                  "onUpdate:modelValue": (i) => d.value = i,
                                                  modelModifiers: { number: !0 },
                                                  type: "number",
                                                  placeholder: "请输入值"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])) : d.valueType === "boolean" ? (s(), r("div", mt, [
                                                t(F, {
                                                  modelValue: d.value,
                                                  "onUpdate:modelValue": (i) => d.value = i
                                                }, {
                                                  default: l(() => [
                                                    t(V, { value: !0 }, {
                                                      default: l(() => e[11] || (e[11] = [
                                                        n("true")
                                                      ])),
                                                      _: 1
                                                    }),
                                                    t(V, { value: !1 }, {
                                                      default: l(() => e[12] || (e[12] = [
                                                        n("false")
                                                      ])),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                                              ])) : d.valueType === "global" ? (s(), r("div", ft, [
                                                t(W, {
                                                  class: "config-select",
                                                  "popper-class": "config-select-pop",
                                                  placeholder: "请选择全局变量",
                                                  modelValue: d.value,
                                                  "onUpdate:modelValue": (i) => d.value = i
                                                }, {
                                                  default: l(() => [
                                                    (s(!0), r(_, null, M(g(Ue), (i) => (s(), h(H, {
                                                      key: i.value,
                                                      label: i.label,
                                                      value: i.value
                                                    }, {
                                                      default: l(() => [
                                                        t(w, {
                                                          content: i.desc,
                                                          placement: "right"
                                                        }, {
                                                          default: l(() => [
                                                            n(x(i.label), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["content"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["label", "value"]))), 128))
                                                  ]),
                                                  _: 2
                                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                                              ])) : d.valueType === "current" ? (s(), r(_, { key: 4 }, [
                                                g(O).option.dataset ? (s(), r(_, { key: 0 }, [
                                                  g(O).option.dataset.data ? (s(), r("div", _t, [
                                                    t(W, {
                                                      class: "config-select",
                                                      "popper-class": "config-select-pop",
                                                      modelValue: d.value,
                                                      "onUpdate:modelValue": (i) => d.value = i,
                                                      "collapse-tags": "",
                                                      multiple: ["in", "not"].includes(d.tag)
                                                    }, {
                                                      default: l(() => [
                                                        (s(!0), r(_, null, M(g(O).option.dataset.data, (i, X) => (s(), h(H, {
                                                          key: X,
                                                          label: i.name,
                                                          value: i.value
                                                        }, null, 8, ["label", "value"]))), 128))
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["modelValue", "onUpdate:modelValue", "multiple"])
                                                  ])) : (s(), r("div", gt, [
                                                    e[15] || (e[15] = n(" 当前组件数据结构数据比较复杂，请切换到自定义编写js代码来实现 ")),
                                                    t(w, { effect: "dark" }, {
                                                      content: l(() => [
                                                        o("div", bt, x(g(O).option.dataset), 1)
                                                      ]),
                                                      default: l(() => [
                                                        t(de, { type: "primary" }, {
                                                          default: l(() => e[13] || (e[13] = [
                                                            n("查看当前组件数据结构")
                                                          ])),
                                                          _: 1
                                                        }),
                                                        e[14] || (e[14] = o("i", { class: "icon-help" }, null, -1))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]))
                                                ], 64)) : (s(), r("div", Vt, "当前组件无数据"))
                                              ], 64)) : d.valueType === "link" ? (s(), h(re, {
                                                key: 5,
                                                gutter: 4
                                              }, {
                                                default: l(() => [
                                                  t(R, { span: 24 }, {
                                                    default: l(() => [
                                                      o("div", null, [
                                                        e[17] || (e[17] = n(" 选择组件 ")),
                                                        t(w, {
                                                          effect: "dark",
                                                          content: "根据选择组件的配置项中options.value来进行条件判断",
                                                          placement: "top"
                                                        }, {
                                                          default: l(() => e[16] || (e[16] = [
                                                            o("i", { class: "icon-help" }, null, -1)
                                                          ])),
                                                          _: 1
                                                        })
                                                      ]),
                                                      o("div", yt, [
                                                        t(Ve, {
                                                          modelValue: d.value,
                                                          "onUpdate:modelValue": (i) => d.value = i,
                                                          "popper-class": "config-cascader-pop",
                                                          options: ge.value,
                                                          props: {
                                                            children: "groupList",
                                                            label: "title",
                                                            value: "id",
                                                            multiple: !1,
                                                            checkStrictly: !0
                                                          },
                                                          checkOnClickNode: !0,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)) : E("", !0)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])) : E("", !0),
                                    d.type === "custom" ? (s(), r("div", kt, [
                                      o("div", Ct, [
                                        t(ue, { type: "info" }, {
                                          default: l(() => [
                                            e[20] || (e[20] = o("span", { class: "func-keyword" }, "function ", -1)),
                                            e[21] || (e[21] = n("filter( ")),
                                            t(w, {
                                              effect: "dark",
                                              "raw-content": "",
                                              content: "当前组件的数据：任意类型",
                                              placement: "top"
                                            }, {
                                              default: l(() => e[18] || (e[18] = [
                                                n(" dataset ")
                                              ])),
                                              _: 1
                                            }),
                                            e[22] || (e[22] = n(" , ")),
                                            t(w, {
                                              effect: "dark",
                                              "raw-content": "",
                                              content: "eventData",
                                              placement: "top"
                                            }, {
                                              default: l(() => e[19] || (e[19] = [
                                                n(" eventData ")
                                              ])),
                                              _: 1
                                            }),
                                            e[23] || (e[23] = n(" ) { "))
                                          ]),
                                          _: 1
                                        }),
                                        o("div", wt, [
                                          t(w, {
                                            effect: "dark",
                                            "raw-content": "",
                                            content: "全屏",
                                            placement: "top"
                                          }, {
                                            default: l(() => [
                                              o("i", {
                                                class: "icon-quanping m-l-15",
                                                onClick: (i) => u(d.customFunction, f, d)
                                              }, null, 8, Ut)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      o("div", Et, [
                                        t(ke, {
                                          modelValue: d.customFunction,
                                          "onUpdate:modelValue": (i) => d.customFunction = i,
                                          width: "100%",
                                          height: "250px",
                                          language: "javascript",
                                          onBlur: C
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      t(ue, { type: "info" }, {
                                        default: l(() => e[24] || (e[24] = [
                                          n("}")
                                        ])),
                                        _: 1
                                      })
                                    ])) : E("", !0)
                                  ]))), 128))
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        o("div", ht, [
                          e[26] || (e[26] = o("div", { class: "action-title" }, "执行动作", -1)),
                          o("div", $t, [
                            t(F, {
                              class: "action-radio-group",
                              modelValue: a.actionType,
                              "onUpdate:modelValue": (d) => a.actionType = d,
                              onChange: (d) => oe(a)
                            }, {
                              default: l(() => [
                                (s(!0), r(_, null, M(g(ce), (d, f) => (s(), h(V, {
                                  key: f,
                                  label: d.value,
                                  value: d.value
                                }, {
                                  default: l(() => [
                                    n(x(d.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label", "value"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ])
                        ]),
                        o("div", Lt, [
                          o("div", Ot, [
                            ["show", "hide", "translate", "toggle", "requestData"].includes(a.actionType) ? (s(), r(_, { key: 0 }, [
                              a.condition && a.condition.tag ? (s(), r(_, { key: 0 }, [
                                e[29] || (e[29] = o("div", { class: "dms-flex-space-between action-title m-b-10" }, "自定义条件判断(根据事件触发值判断，老的数据兼容新的组件请使用左侧自定义条件判断) ", -1)),
                                o("div", Tt, [
                                  t(re, { gutter: 10 }, {
                                    default: l(() => [
                                      t(R, { span: 8 }, {
                                        default: l(() => [
                                          e[27] || (e[27] = o("div", { class: "m-b-5" }, "条件:", -1)),
                                          o("div", Pt, [
                                            t(W, {
                                              class: "config-select",
                                              "popper-class": "config-select-pop",
                                              modelValue: a.condition.tag,
                                              "onUpdate:modelValue": (d) => a.condition.tag = d,
                                              onChange: (d) => a.condition.value = ""
                                            }, {
                                              default: l(() => [
                                                (s(!0), r(_, null, M(g(Ee), (d, f) => (s(), h(H, {
                                                  key: f,
                                                  label: d.label,
                                                  value: d.value
                                                }, null, 8, ["label", "value"]))), 128))
                                              ]),
                                              _: 2
                                            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      t(R, { span: 16 }, {
                                        default: l(() => [
                                          e[28] || (e[28] = o("div", { class: "m-b-5" }, "当前组件的数据:", -1)),
                                          o("div", Nt, [
                                            t(W, {
                                              class: "config-select",
                                              "popper-class": "config-select-pop",
                                              modelValue: a.condition.value,
                                              "onUpdate:modelValue": (d) => a.condition.value = d,
                                              "collapse-tags": "",
                                              multiple: a.condition.tag === "in"
                                            }, {
                                              default: l(() => [
                                                (s(!0), r(_, null, M(g(O).option.dataset.data, (d, f) => (s(), h(H, {
                                                  key: f,
                                                  label: d.name,
                                                  value: d.value
                                                }, null, 8, ["label", "value"]))), 128))
                                              ]),
                                              _: 2
                                            }, 1032, ["modelValue", "onUpdate:modelValue", "multiple"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ], 64)) : E("", !0),
                              e[35] || (e[35] = o("div", { class: "action-title" }, "关联组件（可多选）", -1)),
                              o("div", xt, [
                                t(Ve, {
                                  modelValue: a.targetList,
                                  "onUpdate:modelValue": (d) => a.targetList = d,
                                  "popper-class": "config-cascader-pop",
                                  options: ge.value,
                                  props: {
                                    children: "groupList",
                                    label: "title",
                                    value: "id",
                                    multiple: !0,
                                    checkStrictly: !0
                                  },
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              a.actionType === "translate" && a.translate ? (s(), r(_, { key: 1 }, [
                                e[34] || (e[34] = o("div", { class: "action-title m-t-15" }, "平移位置", -1)),
                                o("div", Ft, [
                                  t(re, { gutter: 10 }, {
                                    default: l(() => [
                                      t(R, { span: 12 }, {
                                        default: l(() => [
                                          o("div", Dt, [
                                            e[31] || (e[31] = n(" X: ")),
                                            t(w, {
                                              effect: "dark",
                                              content: "数值大于0向右平移，小于0向左移动",
                                              placement: "top"
                                            }, {
                                              default: l(() => e[30] || (e[30] = [
                                                o("i", { class: "icon-help" }, null, -1)
                                              ])),
                                              _: 1
                                            })
                                          ]),
                                          o("div", Mt, [
                                            t(we, {
                                              class: "config-input",
                                              "controls-position": "right",
                                              modelValue: a.translate.x,
                                              "onUpdate:modelValue": (d) => a.translate.x = d
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      t(R, { span: 12 }, {
                                        default: l(() => [
                                          o("div", St, [
                                            e[33] || (e[33] = n(" Y: ")),
                                            t(w, {
                                              effect: "dark",
                                              content: "数值大于0向下平移，小于0向上移动",
                                              placement: "top"
                                            }, {
                                              default: l(() => e[32] || (e[32] = [
                                                o("i", { class: "icon-help" }, null, -1)
                                              ])),
                                              _: 1
                                            })
                                          ]),
                                          o("div", jt, [
                                            t(we, {
                                              class: "config-input",
                                              "controls-position": "right",
                                              modelValue: a.translate.y,
                                              "onUpdate:modelValue": (d) => a.translate.y = d
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ], 64)) : E("", !0)
                            ], 64)) : E("", !0),
                            ["toCanvasPage"].includes(a.actionType) ? (s(), r(_, { key: 1 }, [
                              e[36] || (e[36] = o("div", { class: "action-title" }, "大屏页面", -1)),
                              o("div", Bt, [
                                t(g(z), {
                                  groupId: g(Te),
                                  "current-page-id": g(Pe),
                                  modelValue: a.setting.linkCanvasPage,
                                  "onUpdate:modelValue": (d) => a.setting.linkCanvasPage = d
                                }, null, 8, ["groupId", "current-page-id", "modelValue", "onUpdate:modelValue"])
                              ])
                            ], 64)) : E("", !0),
                            ["toLink"].includes(a.actionType) ? (s(), r(_, { key: 2 }, [
                              e[38] || (e[38] = o("div", { class: "action-title" }, "链接地址", -1)),
                              o("div", qt, [
                                o("div", Kt, [
                                  t(ee, {
                                    modelValue: a.setting.link,
                                    "onUpdate:modelValue": (d) => a.setting.link = d
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                o("div", zt, [
                                  e[37] || (e[37] = o("span", { class: "m-r-10" }, "新窗口打开", -1)),
                                  t(Me, {
                                    modelValue: a.setting.linkOpenWindow,
                                    "onUpdate:modelValue": (d) => a.setting.linkOpenWindow = d
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ])
                            ], 64)) : E("", !0),
                            ["submitForm"].includes(a.actionType) ? (s(), r(_, { key: 3 }, [
                              e[39] || (e[39] = o("div", { class: "action-title" }, "关联表单容器", -1)),
                              o("div", At, [
                                o("div", Rt, [
                                  t(W, {
                                    modelValue: a.targetList,
                                    "onUpdate:modelValue": (d) => a.targetList = d,
                                    multiple: ""
                                  }, {
                                    default: l(() => [
                                      (s(!0), r(_, null, M(Oe.value, (d, f) => (s(), h(H, {
                                        key: f,
                                        label: d.chartConfig.title,
                                        value: d.id
                                      }, null, 8, ["label", "value"]))), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ])
                            ], 64)) : E("", !0),
                            ["executionMethod"].includes(a.actionType) ? (s(), r(_, { key: 4 }, [
                              t(re, { gutter: 10 }, {
                                default: l(() => [
                                  t(R, { span: 12 }, {
                                    default: l(() => [
                                      e[40] || (e[40] = o("div", { class: "action-title" }, "选择目标组件（单选）", -1)),
                                      o("div", Wt, [
                                        t(Ve, {
                                          modelValue: a.targetList,
                                          "onUpdate:modelValue": (d) => a.targetList = d,
                                          "popper-class": "config-cascader-pop",
                                          options: ge.value,
                                          props: {
                                            children: "groupList",
                                            label: "title",
                                            value: "id",
                                            multiple: !1,
                                            checkStrictly: !0
                                          },
                                          clearable: "",
                                          onChange: (d) => Q(a, G, !0)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  t(R, { span: 12 }, {
                                    default: l(() => [
                                      e[41] || (e[41] = o("div", { class: "action-title" }, "目标组件方法", -1)),
                                      o("div", Ht, [
                                        t(w, {
                                          effect: "dark",
                                          content: "选择目标组件方法",
                                          placement: "top-end"
                                        }, {
                                          default: l(() => [
                                            t(W, {
                                              class: "config-select",
                                              "popper-class": "config-select-pop",
                                              modelValue: a.methodName,
                                              "onUpdate:modelValue": (d) => a.methodName = d,
                                              clearable: "",
                                              onChange: (d) => q(a, G)
                                            }, {
                                              default: l(() => [
                                                (s(!0), r(_, null, M(j.value[G], (d, f) => (s(), h(H, {
                                                  key: f,
                                                  label: d.label,
                                                  value: f
                                                }, null, 8, ["label", "value"]))), 128))
                                              ]),
                                              _: 2
                                            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              a.methodName && j.value[G][a.methodName] ? (s(), r(_, { key: 0 }, [
                                j.value[G][a.methodName].params.length > 0 ? (s(), r(_, { key: 0 }, [
                                  o("div", Gt, "【" + x(j.value[G][a.methodName].label) + "】方法参数", 1),
                                  o("div", Xt, [
                                    (s(!0), r(_, null, M(j.value[G][a.methodName].params, (d, f) => (s(), r("div", {
                                      class: "params-item",
                                      key: f
                                    }, [
                                      a.methodParams[f] ? (s(), r(_, { key: 0 }, [
                                        o("div", Yt, [
                                          o("span", Jt, [
                                            n("参数值（" + x(d.name) + "）", 1),
                                            t(w, {
                                              effect: "dark",
                                              content: d.desc,
                                              placement: "top"
                                            }, {
                                              default: l(() => e[42] || (e[42] = [
                                                o("i", { class: "icon-help" }, null, -1)
                                              ])),
                                              _: 2
                                            }, 1032, ["content"])
                                          ]),
                                          t(F, {
                                            modelValue: a.methodParams[f].type,
                                            "onUpdate:modelValue": (i) => a.methodParams[f].type = i
                                          }, {
                                            default: l(() => [
                                              t(V, { value: "default" }, {
                                                default: l(() => e[43] || (e[43] = [
                                                  n("内置参数")
                                                ])),
                                                _: 1
                                              }),
                                              t(w, {
                                                effect: "dark",
                                                content: "自定义参数需要在函数内使用return返回的值作为参数",
                                                placement: "top"
                                              }, {
                                                default: l(() => [
                                                  t(V, { value: "custom" }, {
                                                    default: l(() => e[44] || (e[44] = [
                                                      n("自定义")
                                                    ])),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        a.methodParams[f].type === "default" ? (s(), r(_, { key: 0 }, [
                                          o("div", Qt, [
                                            t(w, {
                                              effect: "dark",
                                              content: "选择参数类型",
                                              placement: "top"
                                            }, {
                                              default: l(() => [
                                                t(W, {
                                                  class: "config-select",
                                                  "popper-class": "config-select-pop",
                                                  modelValue: a.methodParams[f].valueType,
                                                  "onUpdate:modelValue": (i) => a.methodParams[f].valueType = i,
                                                  onChange: (i) => a.methodParams[f].value = ""
                                                }, {
                                                  default: l(() => [
                                                    (s(!0), r(_, null, M(g(he), (i, X) => (s(), h(H, {
                                                      key: X,
                                                      label: i,
                                                      value: X
                                                    }, null, 8, ["label", "value"]))), 128))
                                                  ]),
                                                  _: 2
                                                }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          a.methodParams[f].valueType === "text" ? (s(), r("div", Zt, [
                                            t(ee, {
                                              class: "config-input",
                                              modelValue: a.methodParams[f].value,
                                              "onUpdate:modelValue": (i) => a.methodParams[f].value = i,
                                              placeholder: "请输入值"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])) : E("", !0),
                                          a.methodParams[f].valueType === "number" ? (s(), r("div", It, [
                                            t(ee, {
                                              class: "config-input",
                                              modelValue: a.methodParams[f].value,
                                              "onUpdate:modelValue": (i) => a.methodParams[f].value = i,
                                              modelModifiers: { number: !0 },
                                              type: "number",
                                              placeholder: "请输入值"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])) : a.methodParams[f].valueType === "boolean" ? (s(), r("div", el, [
                                            t(F, {
                                              modelValue: a.methodParams[f].value,
                                              "onUpdate:modelValue": (i) => a.methodParams[f].value = i
                                            }, {
                                              default: l(() => [
                                                t(V, { value: !0 }, {
                                                  default: l(() => e[45] || (e[45] = [
                                                    n("true")
                                                  ])),
                                                  _: 1
                                                }),
                                                t(V, { value: !1 }, {
                                                  default: l(() => e[46] || (e[46] = [
                                                    n("false")
                                                  ])),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                                          ])) : a.methodParams[f].valueType === "global" ? (s(), r("div", tl, [
                                            t(W, {
                                              class: "config-select",
                                              "popper-class": "config-select-pop",
                                              placeholder: "请选择全局变量",
                                              modelValue: a.methodParams[f].value,
                                              "onUpdate:modelValue": (i) => a.methodParams[f].value = i
                                            }, {
                                              default: l(() => [
                                                (s(!0), r(_, null, M(g(Ue), (i) => (s(), h(H, {
                                                  key: i.value,
                                                  label: i.label,
                                                  value: i.value
                                                }, {
                                                  default: l(() => [
                                                    t(w, {
                                                      content: i.desc,
                                                      placement: "right"
                                                    }, {
                                                      default: l(() => [
                                                        n(x(i.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["content"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["label", "value"]))), 128))
                                              ]),
                                              _: 2
                                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                                          ])) : a.methodParams[f].valueType === "current" ? (s(), r(_, { key: 4 }, [
                                            g(O).option.dataset ? (s(), r(_, { key: 0 }, [
                                              g(O).option.dataset.data ? (s(), r("div", ll, [
                                                t(W, {
                                                  class: "config-select",
                                                  "popper-class": "config-select-pop",
                                                  modelValue: a.methodParams[f].value,
                                                  "onUpdate:modelValue": (i) => a.methodParams[f].value = i,
                                                  "collapse-tags": ""
                                                }, {
                                                  default: l(() => [
                                                    (s(!0), r(_, null, M(g(O).option.dataset.data, (i, X) => (s(), h(H, {
                                                      key: X,
                                                      label: i.name,
                                                      value: i.value
                                                    }, null, 8, ["label", "value"]))), 128))
                                                  ]),
                                                  _: 2
                                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                                              ])) : (s(), r("div", ol, [
                                                e[49] || (e[49] = n(" 当前组件数据结构数据比较复杂，请切换到自定义编写js代码来实现 ")),
                                                t(w, { effect: "dark" }, {
                                                  content: l(() => [
                                                    o("div", nl, x(g(O).option.dataset), 1)
                                                  ]),
                                                  default: l(() => [
                                                    t(de, { type: "primary" }, {
                                                      default: l(() => e[47] || (e[47] = [
                                                        n("查看当前组件数据结构")
                                                      ])),
                                                      _: 1
                                                    }),
                                                    e[48] || (e[48] = o("i", { class: "icon-help" }, null, -1))
                                                  ]),
                                                  _: 1
                                                })
                                              ]))
                                            ], 64)) : (s(), r("div", al, "当前组件无数据"))
                                          ], 64)) : a.methodParams[f].valueType === "link" ? (s(), r(_, { key: 5 }, [
                                            o("div", null, [
                                              e[51] || (e[51] = n(" 选择组件 ")),
                                              t(w, {
                                                effect: "dark",
                                                content: "参数值使用选择组件的配置项中options.value",
                                                placement: "top"
                                              }, {
                                                default: l(() => e[50] || (e[50] = [
                                                  o("i", { class: "icon-help" }, null, -1)
                                                ])),
                                                _: 1
                                              })
                                            ]),
                                            o("div", sl, [
                                              t(Ve, {
                                                modelValue: a.methodParams[f].value,
                                                "onUpdate:modelValue": (i) => a.methodParams[f].value = i,
                                                "popper-class": "config-cascader-pop",
                                                options: ge.value,
                                                props: {
                                                  children: "groupList",
                                                  label: "title",
                                                  value: "id",
                                                  multiple: !1,
                                                  checkStrictly: !0
                                                },
                                                checkOnClickNode: !0,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                            ])
                                          ], 64)) : E("", !0)
                                        ], 64)) : (s(), r("div", dl, [
                                          o("div", ul, [
                                            t(ue, { type: "info" }, {
                                              default: l(() => [
                                                e[54] || (e[54] = o("span", { class: "func-keyword" }, "function ", -1)),
                                                e[55] || (e[55] = n("getParams( ")),
                                                t(w, {
                                                  effect: "dark",
                                                  "raw-content": "",
                                                  content: "当前组件的数据：任意类型",
                                                  placement: "top"
                                                }, {
                                                  default: l(() => e[52] || (e[52] = [
                                                    n("dataset")
                                                  ])),
                                                  _: 1
                                                }),
                                                e[56] || (e[56] = n(", ")),
                                                t(w, {
                                                  effect: "dark",
                                                  "raw-content": "",
                                                  content: "eventData",
                                                  placement: "top"
                                                }, {
                                                  default: l(() => e[53] || (e[53] = [
                                                    n(" eventData ")
                                                  ])),
                                                  _: 1
                                                }),
                                                e[57] || (e[57] = n(") { "))
                                              ]),
                                              _: 1
                                            }),
                                            o("div", il, [
                                              t(w, {
                                                effect: "dark",
                                                "raw-content": "",
                                                content: "全屏",
                                                placement: "top"
                                              }, {
                                                default: l(() => [
                                                  o("i", {
                                                    class: "icon-quanping m-l-15",
                                                    onClick: (i) => u(a.methodParams[f].content, f, "params")
                                                  }, null, 8, pl)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])
                                          ]),
                                          o("div", rl, [
                                            t(ke, {
                                              modelValue: a.methodParams[f].content,
                                              "onUpdate:modelValue": (i) => a.methodParams[f].content = i,
                                              width: "100%",
                                              height: "250px",
                                              language: "javascript",
                                              onBlur: C
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          t(ue, { type: "info" }, {
                                            default: l(() => e[58] || (e[58] = [
                                              n("}")
                                            ])),
                                            _: 1
                                          })
                                        ]))
                                      ], 64)) : E("", !0)
                                    ]))), 128))
                                  ])
                                ], 64)) : (s(), r("div", cl, "该方法无需配置参数"))
                              ], 64)) : E("", !0)
                            ], 64)) : E("", !0),
                            ["logOutWay"].includes(a.actionType) ? (s(), r(_, { key: 5 }, [
                              ["logOutWay"].includes(a.actionType) ? (s(), r("div", vl, " 执行退出登录动作，会自动跳转到当前页面配置的登录页面。 ")) : E("", !0)
                            ], 64)) : E("", !0),
                            o("div", ml, [
                              e[60] || (e[60] = o("span", { class: "m-r-15" }, "延迟：", -1)),
                              o("div", fl, [
                                t(ee, {
                                  class: "config-input",
                                  modelValue: a.delay,
                                  "onUpdate:modelValue": (d) => a.delay = d,
                                  type: "number"
                                }, {
                                  append: l(() => e[59] || (e[59] = [
                                    n("秒")
                                  ])),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["label", "name"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])) : E("", !0),
              o("div", {
                class: "add-tab-btn",
                onClick: Ne
              }, e[61] || (e[61] = [
                o("i", { class: "icon-plus" }, null, -1)
              ]))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        t(g(ve), {
          class: "code-dialog",
          width: "70%",
          top: "7vh",
          "close-on-click-modal": !1,
          "append-to-body": !0,
          modelValue: p.value,
          "onUpdate:modelValue": e[3] || (e[3] = (a) => p.value = a),
          title: c.value === "filter" ? "编辑条件过滤器" : "编辑自定义参数值"
        }, {
          footer: l(() => [
            t(I, {
              class: "dms-button",
              type: "primary",
              onClick: N
            }, {
              default: l(() => e[71] || (e[71] = [
                n("确定")
              ])),
              _: 1
            })
          ]),
          default: l(() => [
            o("div", _l, [
              o("div", gl, [
                t(ue, { type: "info" }, {
                  default: l(() => [
                    e[67] || (e[67] = o("span", { class: "func-keyword" }, "function ", -1)),
                    n(x(c.value === "filter" ? "filter" : "getParmas") + "( ", 1),
                    t(w, {
                      effect: "dark",
                      "raw-content": "",
                      content: "当前组件的数据：任意类型",
                      placement: "top"
                    }, {
                      default: l(() => e[65] || (e[65] = [
                        n(" dataset ")
                      ])),
                      _: 1
                    }),
                    e[68] || (e[68] = n(" , ")),
                    t(w, {
                      effect: "dark",
                      "raw-content": "",
                      content: "eventData",
                      placement: "top"
                    }, {
                      default: l(() => e[66] || (e[66] = [
                        n(" eventData ")
                      ])),
                      _: 1
                    }),
                    e[69] || (e[69] = n(" ) { "))
                  ]),
                  _: 1
                })
              ]),
              o("div", bl, [
                p.value ? (s(), h(ke, {
                  key: 0,
                  modelValue: D.value,
                  "onUpdate:modelValue": e[2] || (e[2] = (a) => D.value = a),
                  width: "100%",
                  height: "100%",
                  language: "javascript",
                  editorOptions: {
                    lineNumbers: "on",
                    minimap: { enabled: !0 }
                  }
                }, null, 8, ["modelValue"])) : E("", !0)
              ]),
              o("div", Vl, [
                t(ue, { type: "info" }, {
                  default: l(() => e[70] || (e[70] = [
                    n("}")
                  ])),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const $e = /* @__PURE__ */ _e(yl, [["__scopeId", "data-v-59a8f178"]]), kl = ["onClick"], Cl = { class: "config-item" }, wl = { class: "config-item-content" }, Ul = { class: "code-editor" }, El = { class: "code-editor-toolbar" }, hl = { class: "toolbar-right" }, $l = ["onClick"], Ll = { class: "code-editor-content" }, Ol = {
  class: "code-editor",
  style: { height: "60vh" }
}, Tl = { class: "code-editor-toolbar" }, Pl = { class: "toolbar-right" }, Nl = { class: "code-editor-content" }, xl = /* @__PURE__ */ me({
  __name: "index",
  setup(se) {
    const { targetData: m } = fe(), O = U(!1), k = U({ ...m.value.events.baseEvent });
    ye(
      () => m && (m.value ? m.value.id : m),
      // 监听组件变化
      (p, c) => {
        m.value && m.value.events && (c ? p !== c && (k.value = S({ ...m.value.events.baseEvent })) : p && (k.value = S({ ...m.value.events.baseEvent })));
      },
      { immediate: !0 }
    );
    const z = U(ie.ON_CLICK), P = U({ action: [] }), $ = (p) => {
      m.value.events.baseEvent = S(k.value);
    }, T = U(!1), B = U(""), j = (p) => {
      const c = S(k.value[p]);
      c.open && (O.value = !O.value, c.action || (c.action = []), z.value = p, P.value = c);
    }, le = (p, c) => {
      T.value = !0, z.value = p, B.value = c;
    }, Q = () => {
      T.value = !1, k.value[z.value].customFunction = B.value, m.value.events.baseEvent = S(k.value);
    }, q = {
      [ie.ON_CLICK]: "单击",
      [ie.ON_DBL_CLICK]: "双击",
      [ie.ON_MOUSE_MOVE]: "鼠标移动",
      [ie.ON_MOUSE_ENTER]: "鼠标进入",
      [ie.ON_MOUSE_LEAVE]: "鼠标移出"
    };
    return (p, c) => {
      const D = y("el-switch"), b = y("el-tooltip"), u = y("el-tag"), N = y("el-collapse-item"), C = y("el-button");
      return s(), r(_, null, [
        (s(!0), r(_, null, M(k.value, (L, K) => (s(), h(N, {
          class: "event-collapse-item m-t-10",
          name: K,
          key: K,
          disabled: !L.open
        }, {
          title: l(() => [
            n(x(q[K]) + " ", 1),
            t(D, {
              size: "small",
              class: "m-l-10",
              modelValue: L.open,
              "onUpdate:modelValue": (Y) => L.open = Y,
              onClick: c[0] || (c[0] = pe(() => {
              }, ["stop"])),
              onChange: (Y) => $()
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
            o("div", {
              class: "edit-btn",
              onClick: pe((Y) => j(K), ["stop"])
            }, c[4] || (c[4] = [
              o("i", { class: "icon-project_edit m-r-5" }, null, -1),
              n("编辑")
            ]), 8, kl)
          ]),
          default: l(() => [
            o("div", Cl, [
              o("div", wl, [
                o("div", Ul, [
                  o("div", El, [
                    t(u, { type: "info" }, {
                      default: l(() => [
                        c[7] || (c[7] = o("span", { class: "func-keyword" }, "function ", -1)),
                        n(x(K) + "( ", 1),
                        t(b, {
                          effect: "dark",
                          "raw-content": "",
                          content: "鼠标事件对象",
                          placement: "top"
                        }, {
                          default: l(() => c[5] || (c[5] = [
                            n(" mouseEvent ")
                          ])),
                          _: 1
                        }),
                        c[8] || (c[8] = n(" , ")),
                        t(b, {
                          effect: "dark",
                          "raw-content": "",
                          content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                          placement: "top"
                        }, {
                          default: l(() => c[6] || (c[6] = [
                            n(" components ")
                          ])),
                          _: 1
                        }),
                        c[9] || (c[9] = n(" ) {"))
                      ]),
                      _: 2
                    }, 1024),
                    o("div", hl, [
                      t(b, {
                        effect: "dark",
                        "raw-content": "",
                        content: "全屏",
                        placement: "top"
                      }, {
                        default: l(() => [
                          o("i", {
                            class: "icon-quanping m-l-15",
                            onClick: (Y) => le(K, L.customFunction)
                          }, null, 8, $l)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  o("div", Ll, [
                    t(g(ae), {
                      modelValue: L.customFunction,
                      "onUpdate:modelValue": (Y) => L.customFunction = Y,
                      width: "100%",
                      height: "250px",
                      language: "javascript",
                      onBlur: $
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  t(u, { type: "info" }, {
                    default: l(() => c[10] || (c[10] = [
                      n("}")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          _: 2
        }, 1032, ["name", "disabled"]))), 128)),
        t(g(ve), {
          class: "code-dialog",
          width: "70%",
          top: "7vh",
          "append-to-body": !0,
          "close-on-click-modal": !1,
          modelValue: T.value,
          "onUpdate:modelValue": c[2] || (c[2] = (L) => T.value = L),
          title: "代码编辑"
        }, {
          footer: l(() => [
            t(C, {
              class: "dms-button",
              type: "primary",
              onClick: Q
            }, {
              default: l(() => c[17] || (c[17] = [
                n("确定")
              ])),
              _: 1
            })
          ]),
          default: l(() => [
            o("div", Ol, [
              o("div", Tl, [
                t(u, { type: "info" }, {
                  default: l(() => [
                    c[13] || (c[13] = o("span", { class: "func-keyword" }, "function ", -1)),
                    n(x(z.value) + "( ", 1),
                    t(b, {
                      effect: "dark",
                      "raw-content": "",
                      content: "鼠标事件对象",
                      placement: "top"
                    }, {
                      default: l(() => c[11] || (c[11] = [
                        n(" mouseEvent ")
                      ])),
                      _: 1
                    }),
                    c[14] || (c[14] = n(" , ")),
                    t(b, {
                      effect: "dark",
                      "raw-content": "",
                      content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                      placement: "top"
                    }, {
                      default: l(() => c[12] || (c[12] = [
                        n(" components ")
                      ])),
                      _: 1
                    }),
                    c[15] || (c[15] = n(" ) { "))
                  ]),
                  _: 1
                }),
                o("div", Pl, [
                  t(b, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: l(() => c[16] || (c[16] = [
                      o("i", { class: "icon-quanping m-l-15" }, null, -1)
                    ])),
                    _: 1
                  })
                ])
              ]),
              o("div", Nl, [
                T.value ? (s(), h(g(ae), {
                  key: 0,
                  modelValue: B.value,
                  "onUpdate:modelValue": c[1] || (c[1] = (L) => B.value = L),
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
        }, 8, ["modelValue"]),
        t(g($e), {
          modelValue: O.value,
          "onUpdate:modelValue": c[3] || (c[3] = (L) => O.value = L),
          "event-type": "baseEvent",
          "edit-event": P.value,
          "event-key": z.value,
          "event-data": k.value
        }, null, 8, ["modelValue", "edit-event", "event-key", "event-data"])
      ], 64);
    };
  }
});
const Fl = /* @__PURE__ */ _e(xl, [["__scopeId", "data-v-99f313d0"]]), Dl = ["onClick"], Ml = { class: "config-item" }, Sl = { class: "config-item-content" }, jl = { class: "code-editor" }, Bl = { class: "code-editor-toolbar" }, ql = { class: "toolbar-right" }, Kl = ["onClick"], zl = { class: "code-editor-content" }, Al = {
  class: "code-editor",
  style: { height: "60vh" }
}, Rl = { class: "code-editor-toolbar" }, Wl = { class: "toolbar-right" }, Hl = { class: "code-editor-content" }, Gl = /* @__PURE__ */ me({
  __name: "index",
  setup(se) {
    const { targetData: m, chartEditStore: O } = fe(), k = U(!1), z = U([]), P = te(() => {
      const b = S(O.getComponentList);
      return b.arrowOpen = !1, b.map((u) => {
        u.title = u.chartConfig.title, u.groupList && (u.groupList.map((N) => {
          N.title = N.chartConfig.title;
        }), u.groupList.reverse()), u.componentList && (u.groupList = u.componentList.map((N) => (N.title = N.chartConfig.title, N.groupList && (N.groupList.map((C) => {
          C.title = C.chartConfig.title;
        }), N.groupList.reverse()), N)), u.groupList.reverse());
      }), b.reverse();
    });
    te(() => {
      const b = S(O.getComponentList);
      return b.map((u) => {
        u.title = u.chartConfig.title;
      }), console.log("list", b), b.reverse();
    }), z.value = P.value, te(() => (b) => {
      let u = ce.findIndex((N) => N.value === b);
      return u > -1 ? ce[u].label : "";
    });
    const $ = U({ ...m.value.events.customEvents });
    ye(
      () => m && (m.value ? m.value.id : m),
      // 监听组件变化
      (b, u) => {
        m.value && m.value.events && (u ? b !== u && ($.value = S({ ...m.value.events.customEvents })) : b && ($.value = S({ ...m.value.events.customEvents })));
      },
      { immediate: !0 }
    );
    const T = U(0), B = U({ action: [] }), j = U(""), le = (b) => {
      const u = S($.value[b]);
      u.open && (k.value = !0, u.action || (u.action = []), T.value = 0, j.value = b, B.value = u);
    }, Q = (b) => {
      m.value.events.customEvents = { ...$.value };
    };
    te(() => (b, u) => u.linkComponents.findIndex((C) => C.id === b.id) > -1);
    const q = U(!1), p = U(""), c = (b, u) => {
      q.value = !0, j.value = b, p.value = u;
    }, D = () => {
      q.value = !1, $.value[j.value].customFunction = p.value, m.value.events.customEvents = S($.value);
    };
    return (b, u) => {
      const N = y("el-switch"), C = y("el-tooltip"), L = y("el-tag"), K = y("el-collapse-item"), Y = y("el-button");
      return s(), r(_, null, [
        (s(!0), r(_, null, M($.value, (A, oe) => (s(), h(K, {
          class: "m-t-10",
          name: oe,
          key: oe,
          disabled: !A.open
        }, {
          title: l(() => [
            n(x(A.eventName) + " ", 1),
            t(N, {
              size: "small",
              class: "m-l-10",
              modelValue: A.open,
              "onUpdate:modelValue": (J) => A.open = J,
              onClick: u[0] || (u[0] = pe(() => {
              }, ["stop"])),
              onChange: (J) => Q()
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
            o("div", {
              class: "edit-btn",
              onClick: pe((J) => le(oe), ["stop"])
            }, u[4] || (u[4] = [
              o("i", { class: "icon-project_edit m-r-5" }, null, -1),
              n("编辑")
            ]), 8, Dl)
          ]),
          default: l(() => [
            o("div", Ml, [
              o("div", Sl, [
                o("div", jl, [
                  o("div", Bl, [
                    t(L, { type: "info" }, {
                      default: l(() => [
                        u[7] || (u[7] = o("span", { class: "func-keyword" }, "function ", -1)),
                        n(x(oe) + "( ", 1),
                        t(C, {
                          effect: "dark",
                          "raw-content": "",
                          content: "鼠标事件对象",
                          placement: "top"
                        }, {
                          default: l(() => u[5] || (u[5] = [
                            n(" mouseEvent ")
                          ])),
                          _: 1
                        }),
                        u[8] || (u[8] = n(" , ")),
                        t(C, {
                          effect: "dark",
                          "raw-content": "",
                          content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                          placement: "top"
                        }, {
                          default: l(() => u[6] || (u[6] = [
                            n(" components ")
                          ])),
                          _: 1
                        }),
                        u[9] || (u[9] = n(" ) {"))
                      ]),
                      _: 2
                    }, 1024),
                    o("div", ql, [
                      t(C, {
                        effect: "dark",
                        "raw-content": "",
                        content: "全屏",
                        placement: "top"
                      }, {
                        default: l(() => [
                          o("i", {
                            class: "icon-quanping m-l-15",
                            onClick: (J) => c(oe, A.customFunction)
                          }, null, 8, Kl)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  o("div", zl, [
                    t(g(ae), {
                      modelValue: A.customFunction,
                      "onUpdate:modelValue": (J) => A.customFunction = J,
                      width: "100%",
                      height: "250px",
                      language: "javascript",
                      onBlur: Q
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  t(L, { type: "info" }, {
                    default: l(() => u[10] || (u[10] = [
                      n("}")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          _: 2
        }, 1032, ["name", "disabled"]))), 128)),
        t(g(ve), {
          class: "code-dialog",
          width: "70%",
          top: "7vh",
          "append-to-body": !0,
          "close-on-click-modal": !1,
          modelValue: q.value,
          "onUpdate:modelValue": u[2] || (u[2] = (A) => q.value = A),
          title: "代码编辑"
        }, {
          footer: l(() => [
            t(Y, {
              class: "dms-button",
              type: "primary",
              onClick: D
            }, {
              default: l(() => u[17] || (u[17] = [
                n("确定")
              ])),
              _: 1
            })
          ]),
          default: l(() => [
            o("div", Al, [
              o("div", Rl, [
                t(L, { type: "info" }, {
                  default: l(() => [
                    u[13] || (u[13] = o("span", { class: "func-keyword" }, "function ", -1)),
                    n(x(j.value) + "( ", 1),
                    t(C, {
                      effect: "dark",
                      "raw-content": "",
                      content: "鼠标事件对象",
                      placement: "top"
                    }, {
                      default: l(() => u[11] || (u[11] = [
                        n(" mouseEvent ")
                      ])),
                      _: 1
                    }),
                    u[14] || (u[14] = n(" , ")),
                    t(C, {
                      effect: "dark",
                      "raw-content": "",
                      content: "当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制<br> {<br> [id]: component<br> }",
                      placement: "top"
                    }, {
                      default: l(() => u[12] || (u[12] = [
                        n(" components ")
                      ])),
                      _: 1
                    }),
                    u[15] || (u[15] = n(" ) { "))
                  ]),
                  _: 1
                }),
                o("div", Wl, [
                  t(C, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: l(() => u[16] || (u[16] = [
                      o("i", { class: "icon-quanping m-l-15" }, null, -1)
                    ])),
                    _: 1
                  })
                ])
              ]),
              o("div", Hl, [
                q.value ? (s(), h(g(ae), {
                  key: 0,
                  modelValue: p.value,
                  "onUpdate:modelValue": u[1] || (u[1] = (A) => p.value = A),
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
        }, 8, ["modelValue"]),
        t(g($e), {
          modelValue: k.value,
          "onUpdate:modelValue": u[3] || (u[3] = (A) => k.value = A),
          "event-type": "customEvents",
          "edit-event": B.value,
          "event-key": j.value,
          "event-data": $.value
        }, null, 8, ["modelValue", "edit-event", "event-key", "event-data"])
      ], 64);
    };
  }
});
const Xl = /* @__PURE__ */ _e(Gl, [["__scopeId", "data-v-fba1ce07"]]), Yl = { class: "dms-chart-configurations-event" }, Jl = /* @__PURE__ */ me({
  __name: "index",
  setup(se) {
    const { targetData: m } = fe(), O = U(["基础事件", "交互事件", "高级事件"]);
    return (k, z) => {
      const P = y("el-text"), $ = y("el-collapse-item"), T = y("el-collapse");
      return s(), r("div", Yl, [
        t(T, {
          class: "config-collapse",
          modelValue: O.value,
          "onUpdate:modelValue": z[0] || (z[0] = (B) => O.value = B)
        }, {
          default: l(() => [
            t(P, {
              depth: "3",
              class: "user-select-text"
            }, {
              default: l(() => [
                z[1] || (z[1] = n(" 组件 id： ")),
                t(P, null, {
                  default: l(() => [
                    n(x(g(m).id), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t($, {
              class: "m-t-10",
              title: "基础事件",
              name: "基础事件"
            }, {
              default: l(() => [
                t(g(Fl))
              ]),
              _: 1
            }),
            g(m).events.customEvents ? (s(), h($, {
              key: 0,
              class: "m-t-10",
              title: "交互事件",
              name: "交互事件"
            }, {
              default: l(() => [
                t(g(Xl))
              ]),
              _: 1
            })) : E("", !0),
            g(m).events.advancedEvents && g(m).events.advancedEvents.vnodeBeforeMount ? (s(), h($, {
              key: 1,
              class: "m-t-10",
              title: "高级事件",
              name: "高级事件"
            }, {
              default: l(() => [
                t(g(Ze))
              ]),
              _: 1
            })) : E("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const vo = /* @__PURE__ */ _e(Jl, [["__scopeId", "data-v-eb3ca8d1"]]);
export {
  vo as default
};
