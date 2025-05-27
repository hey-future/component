import { M as j } from "./index-b6bcee03.js";
import { defineComponent as J, computed as q, ref as P, resolveComponent as i, openBlock as a, createElementBlock as r, createElementVNode as m, toDisplayString as _, createTextVNode as d, createCommentVNode as B, createBlock as n, withCtx as o, createVNode as p, Fragment as V, renderList as g, normalizeClass as z, unref as s } from "vue";
import { W as Q, X as W, V as c, G as X, h as Y } from "./index-83341b0a.js";
import { u as H } from "./useTargetData.hook-f6b520a8.js";
import { _ as Z } from "./index-872beffa.js";
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
const ee = { class: "params-table" }, le = { class: "params-head" }, ae = { class: "params-label" }, oe = {
  key: 1,
  class: "empty-tip"
}, te = { class: "params-value-wrap" }, ne = { style: { "max-width": "240px" } }, ue = ["onClick"], se = {
  class: "code-editor",
  style: { height: "60vh" }
}, de = { class: "code-editor-toolbar" }, pe = { class: "code-editor-content" }, re = /* @__PURE__ */ J({
  __name: "ParamsTable",
  props: {
    params: {
      type: Array,
      required: !0
    },
    isPath: {
      type: Boolean,
      defalut: !1
    },
    name: {
      type: String,
      default: "参数"
    },
    type: {
      type: Number,
      default: 1
      // 1代表普通 2 代表文件上传  3 代表自定义数据表配置的上传接口
    }
  },
  setup(v) {
    const C = v, { targetData: w } = H(), x = w.value.option.formField, L = w.value.option.paramsOptions, R = q(() => w.value.option.linkComponents), M = () => {
      C.params.push({
        key: "",
        value: "",
        content: "",
        // 代码编辑方法内容
        valueType: c.COUSTOM,
        fieldKey: ""
        // 字段key 数据表组件专用
      });
    }, k = P(!1), E = P(-1), U = P(""), I = (h, t) => {
      h ? U.value = h : U.value = "return {};", E.value = t, k.value = !0;
    }, S = () => {
      E.value > -1 && (C.params[E.value].content = U.value), k.value = !1;
    }, A = (h) => {
      C.params.splice(h, 1);
    };
    return (h, t) => {
      const T = i("el-col"), F = i("el-row"), O = i("el-input"), f = i("el-option"), y = i("el-select"), b = i("el-tooltip"), D = i("el-link"), $ = i("el-tag"), G = j, K = i("el-button");
      return a(), r("div", ee, [
        m("div", le, [
          m("span", ae, _(v.name), 1),
          v.isPath ? B("", !0) : (a(), r("div", {
            key: 0,
            class: "params-add-btn",
            onClick: M
          }, t[2] || (t[2] = [
            m("i", { class: "icon-add" }, null, -1),
            d(" 添加参数")
          ])))
        ]),
        v.params.length > 0 ? (a(), n(F, {
          key: 0,
          gutter: 5,
          class: "table-head"
        }, {
          default: o(() => [
            p(T, { span: 7 }, {
              default: o(() => t[3] || (t[3] = [
                d(" 参数名(key) ")
              ])),
              _: 1
            }),
            p(T, { span: 17 }, {
              default: o(() => t[4] || (t[4] = [
                d("参数值(value) ")
              ])),
              _: 1
            })
          ]),
          _: 1
        })) : (a(), r("div", oe, "请添加参数")),
        (a(!0), r(V, null, g(v.params, (l, N) => (a(), r("div", {
          key: N,
          class: z(["table-item", { "has-delete": !v.isPath }])
        }, [
          p(F, { gutter: 5 }, {
            default: o(() => [
              p(T, { span: 7 }, {
                default: o(() => [
                  p(O, {
                    class: "config-input",
                    disabled: v.isPath,
                    modelValue: l.key,
                    "onUpdate:modelValue": (e) => l.key = e
                  }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 2
              }, 1024),
              p(T, { span: 17 }, {
                default: o(() => [
                  m("div", te, [
                    C.type == 2 ? (a(), n(y, {
                      key: 0,
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: l.valueType,
                      "onUpdate:modelValue": (e) => l.valueType = e,
                      onChange: (e) => l.value = ""
                    }, {
                      default: o(() => [
                        (a(!0), r(V, null, g(s(Q), (e, u) => (a(), n(f, {
                          key: u,
                          label: e,
                          value: u
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])) : (a(), n(y, {
                      key: 1,
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: l.valueType,
                      "onUpdate:modelValue": (e) => l.valueType = e,
                      onChange: (e) => l.value = ""
                    }, {
                      default: o(() => [
                        (a(!0), r(V, null, g(s(W), (e, u) => (a(), n(f, {
                          key: u,
                          label: e,
                          value: u
                        }, {
                          default: o(() => [
                            u === s(c).LINK ? (a(), n(b, {
                              key: 0,
                              content: "适用于组件配置项option中有linkComponents的组件，<br /> 如表单容器和数据容器组件",
                              "raw-content": "",
                              placement: "right"
                            }, {
                              default: o(() => [
                                d(_(e), 1)
                              ]),
                              _: 2
                            }, 1024)) : u === s(c).FORM ? (a(), n(b, {
                              key: 1,
                              content: "适用于组件配置项option中有formField的组件，<br /> 如登录组件",
                              "raw-content": "",
                              placement: "right"
                            }, {
                              default: o(() => [
                                d(_(e), 1)
                              ]),
                              _: 2
                            }, 1024)) : u === s(c).OBJECT ? (a(), n(b, {
                              key: 2,
                              content: "自定义函数传参，可以传递各种类型的数据，<br />在函数体中return的值作为参数",
                              "raw-content": "",
                              placement: "right"
                            }, {
                              default: o(() => [
                                d(_(e), 1)
                              ]),
                              _: 2
                            }, 1024)) : u === s(c).QUERY ? (a(), n(b, {
                              key: 3,
                              content: "获取 URL 访问参数，以?id=1为例，?表示参数的开始，id就是参数名，而=1表示参数的值为1。<br />如果有多个参数的话，使用&来分隔参数 <br />例如地址为http://localhost:8080/preview/1?id=1&keyword=abc<br />参数填写id获取的参数值就是1,填写keyword获取的参数值就是abc",
                              "raw-content": "",
                              placement: "right"
                            }, {
                              default: o(() => [
                                d(_(e), 1)
                              ]),
                              _: 2
                            }, 1024)) : (a(), r(V, { key: 4 }, [
                              d(_(e), 1)
                            ], 64))
                          ]),
                          _: 2
                        }, 1032, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])),
                    l.valueType === s(c).GLOBAL ? (a(), n(y, {
                      key: 2,
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: l.value,
                      "onUpdate:modelValue": (e) => l.value = e
                    }, {
                      default: o(() => [
                        (a(!0), r(V, null, g(s(X), (e) => (a(), n(f, {
                          key: e.value,
                          label: e.label,
                          value: e.value
                        }, {
                          default: o(() => [
                            p(b, {
                              content: e.desc,
                              placement: "right"
                            }, {
                              default: o(() => [
                                d(_(e.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["content"])
                          ]),
                          _: 2
                        }, 1032, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : l.valueType === s(c).FORM ? (a(), n(y, {
                      key: 3,
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: l.value,
                      "onUpdate:modelValue": (e) => l.value = e
                    }, {
                      default: o(() => [
                        (a(!0), r(V, null, g(s(x), (e, u) => (a(), n(f, {
                          key: u,
                          label: e,
                          value: u
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : l.valueType === s(c).CURRENT ? (a(), n(y, {
                      key: 4,
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: l.value,
                      "onUpdate:modelValue": (e) => l.value = e
                    }, {
                      default: o(() => [
                        (a(!0), r(V, null, g(s(L), (e, u) => (a(), n(f, {
                          key: u,
                          label: e,
                          value: u
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : l.valueType === s(c).LINK ? (a(), n(y, {
                      key: 5,
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: l.value,
                      "onUpdate:modelValue": (e) => l.value = e
                    }, {
                      default: o(() => [
                        (a(!0), r(V, null, g(R.value, (e, u) => (a(), n(f, {
                          key: u,
                          label: e.title,
                          value: e.id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : l.valueType === s(c).NUMBER ? (a(), n(O, {
                      key: 6,
                      class: "config-input",
                      modelValue: l.value,
                      "onUpdate:modelValue": (e) => l.value = e,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : l.valueType === s(c).BOOLEAN ? (a(), n(y, {
                      key: 7,
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: l.value,
                      "onUpdate:modelValue": (e) => l.value = e
                    }, {
                      default: o(() => [
                        p(f, {
                          label: "true",
                          value: !0
                        }),
                        p(f, {
                          label: "false",
                          value: !1
                        })
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : l.valueType === s(c).OBJECT ? (a(), n(b, { key: 8 }, {
                      content: o(() => [
                        m("div", ne, _(l.content), 1)
                      ]),
                      default: o(() => [
                        p(D, {
                          type: "primary",
                          underline: !1,
                          class: "code-edit-tip m-l-15",
                          onClick: (e) => I(l.content, N)
                        }, {
                          default: o(() => t[5] || (t[5] = [
                            d(" 点击编辑 ")
                          ])),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)) : (a(), n(O, {
                      key: 9,
                      class: "config-input",
                      modelValue: l.value,
                      "onUpdate:modelValue": (e) => l.value = e
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024),
          v.isPath ? B("", !0) : (a(), r("div", {
            key: 0,
            class: "icon-delete",
            onClick: (e) => A(N)
          }, null, 8, ue))
        ], 2))), 128)),
        p(s(Z), {
          class: "code-dialog",
          width: "70%",
          top: "7vh",
          "append-to-body": !0,
          modelValue: k.value,
          "onUpdate:modelValue": t[1] || (t[1] = (l) => k.value = l),
          title: "编辑参数值"
        }, {
          footer: o(() => [
            p(K, {
              class: "dms-button",
              type: "primary",
              onClick: S
            }, {
              default: o(() => t[10] || (t[10] = [
                d("确定")
              ])),
              _: 1
            })
          ]),
          default: o(() => [
            m("div", se, [
              m("div", de, [
                p($, { type: "info" }, {
                  default: o(() => [
                    t[7] || (t[7] = m("span", { class: "func-keyword" }, "function ", -1)),
                    t[8] || (t[8] = d("getParmas( ")),
                    p(b, {
                      content: "当前登录用户信息",
                      placement: "top"
                    }, {
                      default: o(() => t[6] || (t[6] = [
                        d("currentUserInfo")
                      ])),
                      _: 1
                    }),
                    t[9] || (t[9] = d(" ) { "))
                  ]),
                  _: 1
                })
              ]),
              m("div", pe, [
                k.value ? (a(), n(G, {
                  key: 0,
                  modelValue: U.value,
                  "onUpdate:modelValue": t[0] || (t[0] = (l) => U.value = l),
                  width: "100%",
                  height: "100%",
                  language: "javascript",
                  editorOptions: {
                    lineNumbers: "on",
                    minimap: { enabled: !0 }
                  }
                }, null, 8, ["modelValue"])) : B("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const we = /* @__PURE__ */ Y(re, [["__scopeId", "data-v-495af543"]]);
export {
  we as default
};
