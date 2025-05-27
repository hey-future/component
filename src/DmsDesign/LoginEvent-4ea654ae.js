import { _ as W } from "./index.vue_vue_type_style_index_0_lang-6fd675b0.js";
import { defineComponent as X, ref as _, inject as Y, resolveComponent as u, openBlock as d, createElementBlock as c, createElementVNode as l, toDisplayString as $, unref as n, createVNode as o, withCtx as i, withModifiers as B, createTextVNode as C, Fragment as v, renderList as b, createBlock as O, createCommentVNode as V } from "vue";
import { u as Z } from "./useTargetData.hook-f6b520a8.js";
import { R as h, C as ee } from "./index-56c16d83.js";
import { v as le, w as te, h as oe } from "./index-83341b0a.js";
import "vue-router";
import "pinia";
import "element-plus";
import "lodash";
const ae = { class: "dms-config-setting" }, ne = { class: "config-item-label" }, se = { class: "config-item-label-text user-select-text" }, ie = { class: "config-item" }, de = { class: "config-item-row" }, ce = { class: "config-item" }, ue = { class: "config-item-row" }, pe = { class: "config-item" }, me = { class: "config-item-label" }, re = { class: "config-item-content" }, fe = { class: "config-item-label" }, ge = { class: "config-item-label-text" }, ve = { class: "params-value-wrap" }, _e = ["onClick"], be = { class: "params-value-wrap m-t-10" }, Ve = { class: "config-item" }, ke = { class: "config-item-content" }, ye = {
  key: 0,
  class: "config-item"
}, Ue = { class: "config-item-content" }, Ce = {
  key: 1,
  class: "config-item"
}, xe = { class: "config-item-content" }, we = { class: "config-item" }, Le = { class: "config-item-content" }, Ee = {
  key: 0,
  class: "config-item"
}, Ie = { class: "config-item-content" }, De = {
  key: 1,
  class: "config-item"
}, Se = { class: "config-item-content" }, Ne = /* @__PURE__ */ X({
  __name: "LoginEvent",
  setup(Re) {
    const { targetData: s, chartEditStore: L } = Z(), k = _({ ...s.value.loginEvents.baseEvent }), E = _(["请求配置", "登录回调"]), I = [
      {
        value: "link",
        label: "链接地址"
      },
      {
        value: "page",
        label: "大屏页面"
      }
      // {
      //   value: 'components',
      //   label: '大屏组件'
      // }
    ], P = [
      {
        value: "=",
        label: "等于"
      },
      {
        value: "!=",
        label: "不等于"
      }
      // {
      //   value: 'in',
      //   label: '包含任意一个'
      // }
    ], j = [
      {
        value: "roles",
        label: "角色"
      }
      // ,
      // {
      //   value:'groups',
      //   label: '部门'
      // }
    ], D = Y("screenId", 0), A = (f) => {
      s.value.callback.condition.splice(f, 1);
    }, S = _(!1), F = () => {
      s.value.callback.condition.push({
        field: "roles",
        fieldLabel: "角色",
        valueType: "custom",
        tag: "=",
        value: 1,
        callback: {
          type: "page",
          pageId: "",
          link: ""
        }
      });
    };
    let M = 1;
    const N = L.editCanvasConfig.groupId, G = L.editCanvasConfig.id, R = _([]);
    (() => {
      te({ groupId: N, pageSize: 100, page: M }).then((f) => {
        const { code: e, data: r } = f;
        e === 200 && (R.value = r.data.filter((p) => p.id !== G), r.total);
      }).catch(() => {
        R.value = [];
      });
    })();
    const T = _([]);
    return le(N).then((f) => {
      const { code: e, data: r } = f;
      if (e === 200) {
        const p = [];
        r.map((m) => {
          m.id ? (m.disabled = !0, p.push(m)) : m.roles.map((g) => {
            p.push(g);
          });
        }), T.value = p;
      }
    }), (f, e) => {
      const r = u("el-switch"), p = u("el-tooltip"), m = u("el-collapse-item"), g = u("el-input"), y = u("el-option"), U = u("el-select"), q = u("el-col"), H = u("el-row"), J = u("el-cascader"), z = W, K = u("el-divider"), Q = u("el-collapse");
      return d(), c("div", ae, [
        l("div", ne, [
          l("span", se, "组件id: " + $(n(s).id), 1)
        ]),
        o(Q, {
          class: "config-collapse",
          modelValue: E.value,
          "onUpdate:modelValue": e[9] || (e[9] = (t) => E.value = t)
        }, {
          default: i(() => [
            o(m, {
              title: "事件",
              name: "事件"
            }, {
              default: i(() => [
                l("div", ie, [
                  l("div", de, [
                    e[12] || (e[12] = l("span", { class: "config-item-label-text" }, "单击事件", -1)),
                    o(r, {
                      size: "small",
                      class: "m-l-10",
                      modelValue: k.value.click.open,
                      "onUpdate:modelValue": e[0] || (e[0] = (t) => k.value.click.open = t),
                      onClick: e[1] || (e[1] = B(() => {
                      }, ["stop"]))
                    }, null, 8, ["modelValue"]),
                    o(p, {
                      effect: "dark",
                      "raw-content": "",
                      content: "开启登录按钮的单击事件",
                      placement: "top"
                    }, {
                      default: i(() => e[11] || (e[11] = [
                        l("i", { class: "icon-help font-16 m-l-15" }, null, -1)
                      ])),
                      _: 1
                    })
                  ])
                ]),
                l("div", ce, [
                  l("div", ue, [
                    e[14] || (e[14] = l("span", { class: "config-item-label-text" }, "校验表单", -1)),
                    o(r, {
                      size: "small",
                      class: "m-l-10",
                      modelValue: k.value.click.formValidate,
                      "onUpdate:modelValue": e[2] || (e[2] = (t) => k.value.click.formValidate = t)
                    }, null, 8, ["modelValue"]),
                    o(p, {
                      effect: "dark",
                      "raw-content": "",
                      content: "开启后将对登录表单里输入框按照输入框添加的校验规则进行校验。",
                      placement: "top"
                    }, {
                      default: i(() => e[13] || (e[13] = [
                        l("i", { class: "icon-help font-16 m-l-15" }, null, -1)
                      ])),
                      _: 1
                    })
                  ])
                ])
              ]),
              _: 1
            }),
            o(m, {
              name: "自动退出",
              title: "自动退出",
              disabled: !n(s).option.autoLogout
            }, {
              title: i(() => [
                e[15] || (e[15] = C(" 自动退出 ")),
                o(r, {
                  size: "small",
                  class: "m-l-10",
                  modelValue: n(s).option.autoLogout,
                  "onUpdate:modelValue": e[3] || (e[3] = (t) => n(s).option.autoLogout = t),
                  onClick: e[4] || (e[4] = B(() => {
                  }, ["stop"]))
                }, null, 8, ["modelValue"])
              ]),
              default: i(() => [
                l("div", pe, [
                  l("div", me, [
                    e[17] || (e[17] = l("span", { class: "config-item-label-text" }, "空闲时间", -1)),
                    o(p, {
                      effect: "dark",
                      content: "页面无操作多长时间自动退出到登录页",
                      placement: "top"
                    }, {
                      default: i(() => e[16] || (e[16] = [
                        l("i", { class: "icon-help font-16" }, null, -1)
                      ])),
                      _: 1
                    })
                  ]),
                  l("div", re, [
                    o(g, {
                      class: "config-input",
                      type: "number",
                      modelValue: n(s).option.logoutTime,
                      "onUpdate:modelValue": e[5] || (e[5] = (t) => n(s).option.logoutTime = t)
                    }, {
                      suffix: i(() => e[18] || (e[18] = [
                        C(" 分钟 ")
                      ])),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            }, 8, ["disabled"]),
            o(m, {
              title: "请求配置",
              name: "请求配置"
            }, {
              default: i(() => [
                o(n(h), {
                  targetDataRequest: n(s).request
                }, null, 8, ["targetDataRequest"])
              ]),
              _: 1
            }),
            o(m, {
              title: "登录回调",
              name: "登录回调"
            }, {
              default: i(() => [
                n(s).callback ? (d(), c(v, { key: 0 }, [
                  l("div", { class: "config-item" }, [
                    l("div", { class: "config-item-label has-add-btn" }, [
                      e[20] || (e[20] = l("span", { class: "config-item-label-text" }, "回调条件", -1)),
                      l("div", {
                        class: "config-add-btn",
                        onClick: F
                      }, e[19] || (e[19] = [
                        l("i", { class: "icon-add" }, null, -1),
                        C(" 添加")
                      ]))
                    ])
                  ]),
                  (d(!0), c(v, null, b(n(s).callback.condition, (t, x) => (d(), c("div", {
                    key: x,
                    class: "table-item has-delete"
                  }, [
                    l("div", fe, [
                      l("span", ge, "执行条件" + $(x + 1), 1)
                    ]),
                    o(H, { gutter: 5 }, {
                      default: i(() => [
                        o(q, { span: 12 }, {
                          default: i(() => [
                            o(U, {
                              class: "config-select",
                              "popper-class": "config-select-pop",
                              modelValue: t.field,
                              "onUpdate:modelValue": (a) => t.field = a,
                              onChange: (a) => t.value = ""
                            }, {
                              default: i(() => [
                                (d(), c(v, null, b(j, (a, w) => o(y, {
                                  key: w,
                                  label: a.label,
                                  value: a.value
                                }, null, 8, ["label", "value"])), 64))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 2
                        }, 1024),
                        o(q, { span: 12 }, {
                          default: i(() => [
                            l("div", ve, [
                              o(U, {
                                class: "config-select",
                                "popper-class": "config-select-pop",
                                modelValue: t.tag,
                                "onUpdate:modelValue": (a) => t.tag = a,
                                onChange: (a) => t.value = ""
                              }, {
                                default: i(() => [
                                  (d(), c(v, null, b(P, (a, w) => o(y, {
                                    key: w,
                                    label: a.label,
                                    value: a.value
                                  }, null, 8, ["label", "value"])), 64))
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    l("div", {
                      class: "icon-delete",
                      onClick: (a) => A(x)
                    }, null, 8, _e),
                    l("div", be, [
                      t.field === "roles" ? (d(), O(J, {
                        key: 0,
                        class: "config-cascader",
                        "popper-class": "role-cascader-pop",
                        modelValue: t.value,
                        "onUpdate:modelValue": (a) => t.value = a,
                        options: T.value,
                        props: {
                          children: "roles",
                          label: "name",
                          value: "id",
                          multiple: !1,
                          checkStrictly: !0
                        },
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : (d(), O(g, {
                        key: 1,
                        class: "config-input",
                        modelValue: t.value,
                        "onUpdate:modelValue": (a) => t.value = a
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    l("div", Ve, [
                      e[21] || (e[21] = l("div", { class: "config-item-label m-t-10" }, [
                        l("span", { class: "config-item-label-text" }, "跳转方式")
                      ], -1)),
                      l("div", ke, [
                        o(U, {
                          class: "config-select full",
                          modelValue: t.callback.type,
                          "onUpdate:modelValue": (a) => t.callback.type = a
                        }, {
                          default: i(() => [
                            (d(), c(v, null, b(I, (a) => o(y, {
                              key: a.value,
                              label: a.label,
                              value: a.value
                            }, null, 8, ["label", "value"])), 64))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    t.callback.type === "link" ? (d(), c("div", ye, [
                      e[22] || (e[22] = l("div", { class: "config-item-label" }, [
                        l("span", { class: "config-item-label-text" }, "跳转地址")
                      ], -1)),
                      l("div", Ue, [
                        o(g, {
                          class: "config-input",
                          modelValue: t.callback.url,
                          "onUpdate:modelValue": (a) => t.callback.url = a,
                          placeholder: "请输入跳转地址"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])) : V("", !0),
                    t.callback.type === "page" ? (d(), c("div", Ce, [
                      e[23] || (e[23] = l("div", { class: "config-item-label" }, [
                        l("span", { class: "config-item-label-text" }, "大屏页面")
                      ], -1)),
                      l("div", xe, [
                        o(z, {
                          "current-page-id": n(D),
                          modelValue: t.callback.pageId,
                          "onUpdate:modelValue": (a) => t.callback.pageId = a
                        }, null, 8, ["current-page-id", "modelValue", "onUpdate:modelValue"])
                      ])
                    ])) : V("", !0)
                  ]))), 128)),
                  o(K, null, {
                    default: i(() => e[24] || (e[24] = [
                      C(" 默认回调 ")
                    ])),
                    _: 1
                  }),
                  l("div", we, [
                    e[25] || (e[25] = l("div", { class: "config-item-label" }, [
                      l("span", { class: "config-item-label-text" }, "回调方式")
                    ], -1)),
                    l("div", Le, [
                      o(U, {
                        class: "config-select full",
                        modelValue: n(s).callback.type,
                        "onUpdate:modelValue": e[6] || (e[6] = (t) => n(s).callback.type = t)
                      }, {
                        default: i(() => [
                          (d(), c(v, null, b(I, (t) => o(y, {
                            key: t.value,
                            label: t.label,
                            value: t.value
                          }, null, 8, ["label", "value"])), 64))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  n(s).callback.type === "link" ? (d(), c("div", Ee, [
                    e[26] || (e[26] = l("div", { class: "config-item-label" }, [
                      l("span", { class: "config-item-label-text" }, "跳转地址")
                    ], -1)),
                    l("div", Ie, [
                      o(g, {
                        class: "config-input",
                        modelValue: n(s).callback.url,
                        "onUpdate:modelValue": e[7] || (e[7] = (t) => n(s).callback.url = t),
                        placeholder: "请输入跳转地址"
                      }, null, 8, ["modelValue"])
                    ])
                  ])) : V("", !0),
                  n(s).callback.type === "page" ? (d(), c("div", De, [
                    e[27] || (e[27] = l("div", { class: "config-item-label" }, [
                      l("span", { class: "config-item-label-text" }, "大屏页面")
                    ], -1)),
                    l("div", Se, [
                      o(z, {
                        "current-page-id": n(D),
                        modelValue: n(s).callback.pageId,
                        "onUpdate:modelValue": e[8] || (e[8] = (t) => n(s).callback.pageId = t)
                      }, null, 8, ["current-page-id", "modelValue"])
                    ])
                  ])) : V("", !0)
                ], 64)) : V("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        o(n(ee), {
          modelValue: S.value,
          "onUpdate:modelValue": e[10] || (e[10] = (t) => S.value = t)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const Me = /* @__PURE__ */ oe(Ne, [["__scopeId", "data-v-ec0b2d4a"]]);
export {
  Me as default
};
