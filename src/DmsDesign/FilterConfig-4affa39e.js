import { M as L } from "./index-b6bcee03.js";
import { defineComponent as P, reactive as R, ref as f, watch as Y, resolveComponent as c, openBlock as k, createElementBlock as w, Fragment as N, createElementVNode as t, createVNode as o, withCtx as s, createTextVNode as p, renderList as G, unref as F, toDisplayString as Q } from "vue";
import { u as W } from "./useTargetData.hook-f6b520a8.js";
import { _ as j } from "./index-872beffa.js";
import { J, k as X, Y as Z, h as ee } from "./index-83341b0a.js";
import { ElMessage as M } from "element-plus";
import { cloneDeep as te } from "lodash";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.worker?worker";
import "monaco-editor/esm/vs/language/json/json.worker?worker";
import "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
import "vue-router";
import "pinia";
const oe = { class: "config-item" }, le = { class: "config-item-label has-add-btn" }, ne = { class: "config-item-content" }, ae = { class: "filter-list" }, se = { class: "filter-item-wrap" }, ie = { class: "filter-item-left dms-flex-center" }, de = { class: "filter-item-name m-l-10" }, re = { class: "filter-right-oprate" }, ue = ["onClick"], ce = ["onClick"], me = { class: "config-item" }, fe = { class: "config-item-content" }, pe = { class: "code-editor" }, _e = { class: "code-editor-toolbar" }, ve = { class: "toolbar-right" }, ge = { class: "code-editor-content" }, he = {
  class: "code-editor",
  style: { height: "600px" }
}, ye = { class: "code-editor-toolbar" }, Ve = { class: "toolbar-right" }, be = { class: "code-editor-content" }, Ce = {
  class: "code-editor",
  style: { height: "60vh" }
}, ke = { class: "code-editor-toolbar" }, we = { class: "code-editor-content" }, Fe = { class: "code-editor-toolbar" }, xe = /* @__PURE__ */ P({
  __name: "FilterConfig",
  props: { data: String },
  setup(T) {
    var D, U;
    const { targetData: l } = W(), u = T, a = R({ name: "", content: "" });
    f([]);
    const r = f("");
    r.value = J((U = (D = l.value) == null ? void 0 : D.option) == null ? void 0 : U.dataset);
    const _ = f("add"), $ = () => {
      m.value = !0, l.value.filter ? a.name = "新建转换器-" + (l.value.filter.length + 1) : a.name = "新建转换器", a.content = "return res.data;", _.value = "add";
    }, q = () => {
      var i;
      if (!a.name)
        return M.warning("请输入转换器名称"), !1;
      if (!a.name)
        return M.warning("请输入转换器内容"), !1;
      _.value === "add" ? (i = l.value.filter) == null || i.push({
        open: !0,
        name: a.name,
        content: a.content,
        callbackKeys: ""
      }) : l.value.filter && l.value.filter[v.value] && (l.value.filter[v.value].name = a.name, l.value.filter[v.value].content = a.content), u.data && g(u.data), m.value = !1;
    }, m = f(!1), v = f(0), B = (i) => {
      const e = l.value.filter ? l.value.filter[i] : { name: "转换器", content: "return res.data;" };
      m.value = !0, a.name = e.name, a.content = e.content, v.value = i, _.value = "edit";
    }, I = (i) => {
      var e;
      (e = l.value.filter) == null || e.splice(i, 1), u.data && g(u.data);
    }, z = () => {
      u.data && g(u.data);
    }, g = (i) => {
      const e = l.value.filter;
      let d = X(i);
      e == null || e.map((y) => {
        y.open && (d = Z(d.data, d, y.content));
      }), d ? (r.value = J(d), d ? l.value.option.dataset = te(d) : l.value.option.dataset = null) : d === 0 ? (l.value.option.dataset = 0, r.value = "0") : (l.value.option.dataset = "", r.value = "");
    };
    Y(
      () => u.data,
      (i) => {
        i && g(i);
      },
      {
        deep: !1
      }
    );
    const h = f(!1), A = () => {
      h.value = !0;
    }, x = () => {
      h.value = !1;
    };
    return (i, e) => {
      const d = c("el-button"), y = c("el-switch"), E = c("el-tooltip"), V = L, H = c("el-input"), O = c("el-form-item"), S = c("el-tag"), K = c("el-form");
      return k(), w(N, null, [
        t("div", oe, [
          t("div", le, [
            e[8] || (e[8] = t("span", { class: "config-item-label-text" }, "转换器", -1)),
            o(d, {
              class: "dms-button",
              type: "primary",
              onClick: $
            }, {
              default: s(() => e[7] || (e[7] = [
                p("新建")
              ])),
              _: 1
            })
          ]),
          t("div", ne, [
            t("div", ae, [
              (k(!0), w(N, null, G(F(l).filter, (n, b) => (k(), w("div", {
                class: "filter-item",
                key: b
              }, [
                t("div", se, [
                  t("div", ie, [
                    o(y, {
                      class: "filter-switch",
                      size: "small",
                      modelValue: n.open,
                      "onUpdate:modelValue": (C) => n.open = C,
                      onChange: z
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    t("span", de, Q(n.name), 1)
                  ]),
                  t("div", re, [
                    t("i", {
                      class: "icon-project_edit",
                      onClick: (C) => B(b)
                    }, null, 8, ue),
                    t("i", {
                      class: "icon-delete",
                      onClick: (C) => I(b)
                    }, null, 8, ce)
                  ])
                ])
              ]))), 128))
            ])
          ])
        ]),
        t("div", me, [
          t("div", fe, [
            t("div", pe, [
              t("div", _e, [
                e[9] || (e[9] = t("div", { class: "toolbar-left" }, "转换结果", -1)),
                t("div", ve, [
                  o(E, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: s(() => [
                      t("i", {
                        class: "icon-quanping m-l-15",
                        onClick: A
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              t("div", ge, [
                o(V, {
                  modelValue: r.value,
                  "onUpdate:modelValue": e[0] || (e[0] = (n) => r.value = n),
                  width: "100%",
                  height: "100%",
                  language: "json",
                  editorOptions: {
                    readOnly: !0
                  }
                }, null, 8, ["modelValue"])
              ])
            ])
          ])
        ]),
        o(F(j), {
          class: "code-dialog el-dialog-conversion-result",
          "append-to-body": !0,
          modelValue: h.value,
          "onUpdate:modelValue": e[2] || (e[2] = (n) => h.value = n),
          title: "转换结果"
        }, {
          footer: s(() => [
            o(d, {
              class: "dms-button",
              type: "primary",
              onClick: x
            }, {
              default: s(() => e[11] || (e[11] = [
                p("确定")
              ])),
              _: 1
            })
          ]),
          default: s(() => [
            t("div", he, [
              t("div", ye, [
                e[10] || (e[10] = t("div", { class: "toolbar-left" }, "转换结果", -1)),
                t("div", Ve, [
                  o(E, {
                    effect: "dark",
                    "raw-content": "",
                    content: "缩小",
                    placement: "top"
                  }, {
                    default: s(() => [
                      t("i", {
                        class: "icon-quanping m-l-15",
                        onClick: x
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              t("div", be, [
                o(V, {
                  modelValue: r.value,
                  "onUpdate:modelValue": e[1] || (e[1] = (n) => r.value = n),
                  width: "100%",
                  height: "100%",
                  language: "json",
                  editorOptions: {
                    readOnly: !0
                  }
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        o(F(j), {
          modelValue: m.value,
          "onUpdate:modelValue": e[6] || (e[6] = (n) => m.value = n),
          class: "dms-dialog-style-1",
          width: "70%",
          top: "7vh",
          title: _.value === "add" ? "新建转换器" : "编辑转换器",
          "append-to-body": !0
        }, {
          footer: s(() => [
            o(d, {
              class: "dms-button",
              type: "info",
              onClick: e[5] || (e[5] = (n) => m.value = !1)
            }, {
              default: s(() => e[14] || (e[14] = [
                p("取消")
              ])),
              _: 1
            }),
            o(d, {
              class: "dms-button",
              type: "primary",
              onClick: q
            }, {
              default: s(() => e[15] || (e[15] = [
                p("保存")
              ])),
              _: 1
            })
          ]),
          default: s(() => [
            o(K, {
              class: "filter-form",
              "label-position": "top"
            }, {
              default: s(() => [
                o(O, { label: "名称" }, {
                  default: s(() => [
                    o(H, {
                      class: "form-input",
                      modelValue: a.name,
                      "onUpdate:modelValue": e[3] || (e[3] = (n) => a.name = n)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                o(O, { label: "函数编辑器" }, {
                  default: s(() => [
                    t("div", Ce, [
                      t("div", ke, [
                        o(S, { type: "info" }, {
                          default: s(() => e[12] || (e[12] = [
                            t("span", { class: "func-keyword" }, "function ", -1),
                            p("filter(data, res) {")
                          ])),
                          _: 1
                        })
                      ]),
                      t("div", we, [
                        o(V, {
                          modelValue: a.content,
                          "onUpdate:modelValue": e[4] || (e[4] = (n) => a.content = n),
                          width: "100%",
                          height: "100%",
                          language: "javascript"
                        }, null, 8, ["modelValue"])
                      ]),
                      t("div", Fe, [
                        o(S, { type: "info" }, {
                          default: s(() => e[13] || (e[13] = [
                            p("}")
                          ])),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const Ae = /* @__PURE__ */ ee(xe, [["__scopeId", "data-v-df1dcac6"]]);
export {
  Ae as default
};
