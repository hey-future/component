import { u as X, _ as Y, a as Z, b as ee, c as se, d as oe, e as ne, f as te, s as le, g as ie, h as ae } from "./index-83341b0a.js";
import { defineComponent as re, toRefs as de, inject as x, ref as k, reactive as P, resolveComponent as g, openBlock as f, createElementBlock as _, normalizeClass as $, unref as B, createElementVNode as t, createVNode as l, createTextVNode as u, withKeys as ce, withCtx as r, createCommentVNode as I, toDisplayString as L, withModifiers as pe } from "vue";
import { _ as ue } from "./index-872beffa.js";
import "vue-router";
import "pinia";
import "element-plus";
import "lodash";
const me = { class: "page-list-panel-header" }, ge = { class: "page-list-panel-secondary-header" }, ve = { class: "add-btn-group" }, fe = { class: "search-input" }, _e = { class: "page-list-panel-content" }, he = { class: "page-item" }, ye = {
  key: 0,
  class: "icon"
}, ke = { class: "page-item-name" }, Ce = {
  key: 0,
  class: "page-version"
}, xe = {
  key: 1,
  class: "home-tag"
}, Ie = { class: "page-item-action" }, be = { class: "pop-list" }, Ee = ["onClick"], Me = ["onClick"], Ve = ["onClick"], we = ["onClick"], Se = { class: "dialog-footer" }, Pe = /* @__PURE__ */ re({
  __name: "PageListPanel",
  setup($e) {
    const b = X(), { getAppPage: A } = de(b), m = x("pageData", { name: "", appId: 0, groupId: 0, screenId: 0, list: [] }), D = x("changeScreenId", (o) => {
      m.screenId = o;
    }), v = x("getPageList", () => {
    }), C = k(""), E = k(), N = (o) => {
      o.version !== void 0 && D(o.id);
    }, M = () => {
      E.value.filter(C.value);
    }, R = (o, e) => o ? e.name.includes(o) : !0, h = k(null), V = k(), d = k(!1), s = P({
      type: 1,
      name: ""
    }), T = P({
      name: [
        { required: !0, message: "请输入名称", trigger: "blur" }
      ]
    }), G = (o) => o.version !== void 0 && o.id === m.screenId ? "is-active" : "", U = () => {
      d.value = !1;
    }, H = () => {
      b.setAppPage(!1);
    }, K = () => {
      V.value.validate((o) => {
        if (o) {
          if (s.type === 1) {
            const e = {
              appId: m.appId,
              name: s.name
            };
            s.id ? (e.id = s.id, Z(e).then((n) => {
              const { code: i, msg: c } = n;
              i === 200 ? (v(), d.value = !1, ElMessage.success("编辑成功!")) : ElMessage.error(c);
            })) : ee(e).then((n) => {
              const { code: i, msg: c } = n;
              i === 200 ? (v(), d.value = !1, ElMessage.success("添加成功!")) : ElMessage.error(c);
            });
          } else if (s.type === 2) {
            const e = {
              appId: m.appId,
              name: s.name
            };
            s.id ? (e.id = s.id, se(e).then((n) => {
              const { code: i, msg: c } = n;
              i === 200 ? (v(), d.value = !1, s.id === m.screenId && (m.name = s.name), ElMessage.success("修改成功!")) : ElMessage.error(c);
            })) : (s.groupId && (e.groupId = s.groupId), e.width = 1920, e.height = 1080, e.needLogin = 0, e.remark = "", e.customUrl = "", e.photo = "", e.startPerm = 0, oe(e).then((n) => {
              const { code: i, msg: c } = n;
              i === 200 ? (v(), d.value = !1, ElMessage.success("添加成功!")) : ElMessage.error(c);
            }));
          }
        }
      });
    }, j = (o) => {
      o.version !== void 0 ? ElMessageBox.confirm("此操作将永久删除该页面, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        ne(o.id).then((e) => {
          const { code: n, msg: i } = e;
          n === 200 ? (v(), ElMessage.success("删除成功!")) : ElMessage.error(i);
        });
      }) : ElMessageBox.confirm("此操作将永久删除该分组, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        te(o.id).then((e) => {
          const { code: n, msg: i } = e;
          n === 200 ? (v(), ElMessage.success("删除成功!")) : ElMessage.error(i);
        });
      });
    }, q = () => {
      s.type = 1, s.id = void 0, s.name = "", s.groupId = void 0, d.value = !0;
    }, w = (o) => {
      s.type = 2, s.id = void 0, s.name = "", o ? s.groupId = o.id : s.groupId = void 0, d.value = !0;
    }, z = (o) => {
      le(o.id).then((e) => {
        const { code: n, msg: i } = e;
        n === 200 ? (o.home = !0, ElMessage.success("设置首页成功!")) : ElMessage.error(i);
      });
    }, W = (o) => {
      o.version !== void 0 ? s.type = 2 : s.type = 1, s.id = o.id, s.name = o.name, d.value = !0;
    };
    return (o, e) => {
      const n = ie, i = g("el-input"), c = g("el-popover"), F = g("el-tree"), J = g("el-scrollbar"), O = g("el-form-item"), Q = g("el-form"), S = g("el-button");
      return f(), _("div", {
        class: $(["page-list-panel", { show: B(A) }])
      }, [
        t("div", me, [
          e[7] || (e[7] = t("span", { class: "page-list-panel-title" }, "应用页面列表", -1)),
          t("div", {
            class: "page-list-panel-close-btn",
            onClick: H
          }, [
            l(n, { "icon-class": "close" })
          ])
        ]),
        t("div", ge, [
          e[10] || (e[10] = t("span", null, "全部页面", -1)),
          t("div", ve, [
            t("div", {
              class: "add-btn",
              onClick: e[0] || (e[0] = (p) => q())
            }, [
              l(n, { "icon-class": "add_group" }),
              e[8] || (e[8] = u("分组"))
            ]),
            t("div", {
              class: "add-btn",
              onClick: e[1] || (e[1] = (p) => w())
            }, [
              l(n, { "icon-class": "add" }),
              e[9] || (e[9] = u("页面"))
            ])
          ])
        ]),
        t("div", fe, [
          l(i, {
            modelValue: C.value,
            "onUpdate:modelValue": e[2] || (e[2] = (p) => C.value = p),
            placeholder: "搜索名称",
            clearable: "",
            onKeyup: ce(M, ["enter"])
          }, {
            prefix: r(() => [
              l(n, {
                "icon-class": "search",
                onClick: M
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        t("div", _e, [
          l(J, null, {
            default: r(() => [
              l(F, {
                ref_key: "treeRef",
                ref: E,
                class: "page-tree",
                data: B(m).list,
                props: {
                  label: "name",
                  children: "data",
                  class: G,
                  expandIcon: "12"
                },
                "default-expand-all": "",
                "filter-node-method": R,
                onNodeClick: N
              }, {
                default: r(({ node: p, data: a }) => [
                  t("div", he, [
                    a.version === void 0 ? (f(), _("div", ye, [
                      l(n, {
                        "icon-class": p.expanded ? "group_open" : "group_close"
                      }, null, 8, ["icon-class"])
                    ])) : I("", !0),
                    t("div", ke, [
                      t("span", null, L(a.name), 1),
                      a.version !== void 0 ? (f(), _("span", Ce, "V " + L(a.version ? a.version : "1.0"), 1)) : I("", !0)
                    ]),
                    a.home ? (f(), _("span", xe, "主页")) : I("", !0),
                    t("div", Ie, [
                      l(c, {
                        width: a.version === void 0 ? "96px" : "125px",
                        trigger: "click",
                        "popper-style": { padding: "0px", minWidth: "96px" },
                        "show-arrow": !1,
                        onHide: e[4] || (e[4] = (y) => h.value = null),
                        onShow: (y) => h.value = a
                      }, {
                        reference: r(() => [
                          t("span", {
                            class: $(["action-btn", { active: h.value && h.value.id === a.id && h.value.name === a.name }]),
                            onClick: e[3] || (e[3] = pe(() => {
                            }, ["stop"]))
                          }, [
                            l(n, { "icon-class": "more" })
                          ], 2)
                        ]),
                        default: r(() => [
                          t("div", be, [
                            a.version === void 0 ? (f(), _("div", {
                              key: 0,
                              class: "pop-item",
                              onClick: (y) => w(a)
                            }, [
                              l(n, { "icon-class": "add" }),
                              e[11] || (e[11] = u(" 添加 "))
                            ], 8, Ee)) : (f(), _("div", {
                              key: 1,
                              class: "pop-item",
                              onClick: (y) => z(a)
                            }, [
                              l(n, { "icon-class": "home" }),
                              e[12] || (e[12] = u(" 设为主页 "))
                            ], 8, Me)),
                            t("div", {
                              class: "pop-item",
                              onClick: (y) => W(a)
                            }, [
                              l(n, { "icon-class": "edit" }),
                              e[13] || (e[13] = u(" 编辑 "))
                            ], 8, Ve),
                            t("div", {
                              class: "pop-item",
                              onClick: (y) => j(a)
                            }, [
                              l(n, { "icon-class": "delete" }),
                              e[14] || (e[14] = u(" 删除 "))
                            ], 8, we)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["width", "onShow"])
                    ])
                  ])
                ]),
                empty: r(() => e[15] || (e[15] = [
                  t("div", { class: "no-data" }, [
                    t("img", { src: Y }),
                    t("p", null, "暂无页面，请先创建")
                  ], -1)
                ])),
                _: 1
              }, 8, ["data", "props"])
            ]),
            _: 1
          })
        ]),
        l(ue, {
          modelValue: d.value,
          "onUpdate:modelValue": e[6] || (e[6] = (p) => d.value = p),
          "close-on-click-modal": !1,
          "append-to-body": !0,
          title: (s.id ? "编辑" : "新建") + (s.type === 1 ? "分组" : "页面"),
          width: "400px"
        }, {
          footer: r(() => [
            t("div", Se, [
              l(S, { onClick: U }, {
                default: r(() => e[16] || (e[16] = [
                  u("取消")
                ])),
                _: 1
              }),
              l(S, {
                type: "primary",
                onClick: K
              }, {
                default: r(() => e[17] || (e[17] = [
                  u("确认")
                ])),
                _: 1
              })
            ])
          ]),
          default: r(() => [
            l(Q, {
              ref_key: "formRef",
              ref: V,
              class: "dialog-form-style",
              model: s,
              rules: T,
              "label-width": "80px"
            }, {
              default: r(() => [
                l(O, {
                  label: s.type === 1 ? "分组名称" : "页面名称",
                  prop: "name"
                }, {
                  default: r(() => [
                    l(i, {
                      modelValue: s.name,
                      "onUpdate:modelValue": e[5] || (e[5] = (p) => s.name = p),
                      placeholder: s.type === 1 ? "请输入分组名称" : "请输入页面名称"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 2);
    };
  }
}), Ge = /* @__PURE__ */ ae(Pe, [["__scopeId", "data-v-7250db83"]]);
export {
  Ge as default
};
