import { M as A } from "./index-b6bcee03.js";
import { defineComponent as H, reactive as K, ref as m, watch as L, resolveComponent as r, openBlock as C, createElementBlock as D, Fragment as E, createElementVNode as e, createVNode as l, withCtx as s, createTextVNode as f, renderList as P, toDisplayString as R, unref as Y } from "vue";
import { _ as G } from "./index-872beffa.js";
import { J as j, k as Q, Y as W, h as X } from "./index-83341b0a.js";
import "vue-router";
import "element-plus";
import { cloneDeep as Z } from "lodash";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.worker?worker";
import "monaco-editor/esm/vs/language/json/json.worker?worker";
import "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
import "pinia";
const tt = { class: "config-item" }, et = { class: "config-item-label has-add-btn" }, ot = { class: "config-item-content" }, lt = { class: "filter-list" }, at = { class: "filter-item-wrap" }, nt = { class: "filter-item-left dms-flex-center" }, st = { class: "filter-item-name m-l-10" }, it = { class: "filter-right-oprate" }, dt = ["onClick"], rt = ["onClick"], ct = { class: "config-item" }, ut = { class: "config-item-content" }, mt = { class: "code-editor" }, ft = { class: "code-editor-toolbar" }, pt = { class: "toolbar-right" }, _t = { class: "code-editor-content" }, vt = {
  class: "code-editor",
  style: { height: "600px" }
}, gt = { class: "code-editor-toolbar" }, ht = { class: "toolbar-right" }, Vt = { class: "code-editor-content" }, bt = {
  class: "code-editor",
  style: { height: "60vh" }
}, yt = { class: "code-editor-toolbar" }, Ct = { class: "code-editor-content" }, Dt = { class: "code-editor-toolbar" }, wt = /* @__PURE__ */ H({
  __name: "ConvertorConfig",
  props: { data: String, targetData: Object },
  setup(w) {
    var F, O;
    const o = w, n = K({ name: "", content: "" });
    m([]);
    const c = m("");
    c.value = j((O = (F = o.targetData) == null ? void 0 : F.option) == null ? void 0 : O.dataset);
    const p = m("add"), N = () => {
      u.value = !0, o.targetData.filter ? n.name = "新建转换器-" + (o.targetData.filter.length + 1) : n.name = "新建转换器", n.content = "return res.data;", p.value = "add";
    }, $ = () => {
      var i;
      if (!n.name)
        return window.$message.warning("请输入转换器名称"), !1;
      if (!n.name)
        return window.$message.warning("请输入转换器内容"), !1;
      p.value === "add" ? (i = o.targetData.filter) == null || i.push({
        open: !0,
        name: n.name,
        content: n.content,
        callbackKeys: ""
      }) : o.targetData.filter && o.targetData.filter[_.value] && (o.targetData.filter[_.value].name = n.name, o.targetData.filter[_.value].content = n.content), o.data && v(o.data), u.value = !1;
    }, u = m(!1), _ = m(0), J = (i) => {
      const t = o.targetData.filter ? o.targetData.filter[i] : { name: "转换器", content: "return res.data;" };
      u.value = !0, n.name = t.name, n.content = t.content, _.value = i, p.value = "edit";
    }, q = (i) => {
      var t;
      (t = o.targetData.filter) == null || t.splice(i, 1), o.data && v(o.data);
    }, B = () => {
      o.data && v(o.data);
    }, v = (i) => {
      const t = o.targetData.filter;
      let d = Q(i);
      t == null || t.map((h) => {
        h.open && (d = W(d.data, d, h.content));
      }), d ? (c.value = j(d), d ? o.targetData.option.dataset = Z(d) : o.targetData.option.dataset = null) : c.value = "";
    };
    L(
      () => o.data,
      (i) => {
        i && v(i);
      },
      {
        deep: !1
      }
    );
    const g = m(!1), I = () => {
      g.value = !0;
    }, k = () => {
      g.value = !1;
    };
    return (i, t) => {
      const d = r("el-button"), h = r("el-switch"), U = r("el-tooltip"), V = A, M = r("el-dialog"), T = r("el-input"), x = r("el-form-item"), S = r("el-tag"), z = r("el-form");
      return C(), D(E, null, [
        e("div", tt, [
          e("div", et, [
            t[8] || (t[8] = e("span", { class: "config-item-label-text" }, "转换器", -1)),
            l(d, {
              class: "dms-button",
              type: "primary",
              onClick: N
            }, {
              default: s(() => t[7] || (t[7] = [
                f("新建")
              ])),
              _: 1
            })
          ]),
          e("div", ot, [
            e("div", lt, [
              (C(!0), D(E, null, P(w.targetData.filter, (a, b) => (C(), D("div", {
                class: "filter-item",
                key: b
              }, [
                e("div", at, [
                  e("div", nt, [
                    l(h, {
                      class: "filter-switch",
                      size: "small",
                      modelValue: a.open,
                      "onUpdate:modelValue": (y) => a.open = y,
                      onChange: B
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    e("span", st, R(a.name), 1)
                  ]),
                  e("div", it, [
                    e("i", {
                      class: "icon-project_edit",
                      onClick: (y) => J(b)
                    }, null, 8, dt),
                    e("i", {
                      class: "icon-delete",
                      onClick: (y) => q(b)
                    }, null, 8, rt)
                  ])
                ])
              ]))), 128))
            ])
          ])
        ]),
        e("div", ct, [
          e("div", ut, [
            e("div", mt, [
              e("div", ft, [
                t[9] || (t[9] = e("div", { class: "toolbar-left" }, "转换结果", -1)),
                e("div", pt, [
                  l(U, {
                    effect: "dark",
                    "raw-content": "",
                    content: "全屏",
                    placement: "top"
                  }, {
                    default: s(() => [
                      e("i", {
                        class: "icon-quanping m-l-15",
                        onClick: I
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              e("div", _t, [
                l(V, {
                  modelValue: c.value,
                  "onUpdate:modelValue": t[0] || (t[0] = (a) => c.value = a),
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
        l(M, {
          class: "code-dialog",
          "append-to-body": !0,
          modelValue: g.value,
          "onUpdate:modelValue": t[2] || (t[2] = (a) => g.value = a),
          title: "转换结果"
        }, {
          footer: s(() => [
            l(d, {
              class: "dms-button",
              type: "primary",
              onClick: k
            }, {
              default: s(() => t[11] || (t[11] = [
                f("确定")
              ])),
              _: 1
            })
          ]),
          default: s(() => [
            e("div", vt, [
              e("div", gt, [
                t[10] || (t[10] = e("div", { class: "toolbar-left" }, "转换结果", -1)),
                e("div", ht, [
                  l(U, {
                    effect: "dark",
                    "raw-content": "",
                    content: "缩小",
                    placement: "top"
                  }, {
                    default: s(() => [
                      e("i", {
                        class: "icon-quanping m-l-15",
                        onClick: k
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              e("div", Vt, [
                l(V, {
                  modelValue: c.value,
                  "onUpdate:modelValue": t[1] || (t[1] = (a) => c.value = a),
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
        l(Y(G), {
          modelValue: u.value,
          "onUpdate:modelValue": t[6] || (t[6] = (a) => u.value = a),
          class: "dms-dialog-style-1",
          width: "70%",
          top: "7vh",
          title: p.value === "add" ? "新建转换器" : "编辑转换器",
          "append-to-body": !0
        }, {
          footer: s(() => [
            l(d, {
              class: "dms-button",
              type: "info",
              onClick: t[5] || (t[5] = (a) => u.value = !1)
            }, {
              default: s(() => t[14] || (t[14] = [
                f("取消")
              ])),
              _: 1
            }),
            l(d, {
              class: "dms-button",
              type: "primary",
              onClick: $
            }, {
              default: s(() => t[15] || (t[15] = [
                f("保存")
              ])),
              _: 1
            })
          ]),
          default: s(() => [
            l(z, {
              class: "filter-form",
              "label-position": "top"
            }, {
              default: s(() => [
                l(x, { label: "名称" }, {
                  default: s(() => [
                    l(T, {
                      class: "form-input",
                      modelValue: n.name,
                      "onUpdate:modelValue": t[3] || (t[3] = (a) => n.name = a)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(x, { label: "函数编辑器" }, {
                  default: s(() => [
                    e("div", bt, [
                      e("div", yt, [
                        l(S, { type: "info" }, {
                          default: s(() => t[12] || (t[12] = [
                            e("span", { class: "func-keyword" }, "function ", -1),
                            f("filter(data, res) {")
                          ])),
                          _: 1
                        })
                      ]),
                      e("div", Ct, [
                        l(V, {
                          modelValue: n.content,
                          "onUpdate:modelValue": t[4] || (t[4] = (a) => n.content = a),
                          width: "100%",
                          height: "100%",
                          language: "javascript"
                        }, null, 8, ["modelValue"])
                      ]),
                      e("div", Dt, [
                        l(S, { type: "info" }, {
                          default: s(() => t[13] || (t[13] = [
                            f("}")
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
const Mt = /* @__PURE__ */ X(wt, [["__scopeId", "data-v-0aee2f4f"]]);
export {
  Mt as default
};
