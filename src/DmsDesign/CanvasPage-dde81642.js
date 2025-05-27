import { n as ge, i as fe, P as v, C as p, o as ve, p as _e, q as be, r as he, g as Ve, h as ke } from "./index-83341b0a.js";
import { defineComponent as we, defineAsyncComponent as T, inject as A, reactive as E, ref as h, watch as z, computed as Ce, resolveComponent as d, openBlock as m, createElementBlock as f, createVNode as t, withCtx as n, createElementVNode as s, createTextVNode as C, toDisplayString as F, Fragment as k, renderList as I, createBlock as H, unref as a, createCommentVNode as P, nextTick as J } from "vue";
import { u as R } from "./upload-6d6a2bd7.js";
import { C as Ie } from "./CollapseItem-55425c0a.js";
import { useRouter as Pe } from "vue-router";
import { ElMessage as y } from "element-plus";
import "pinia";
import "lodash";
const ye = { class: "dms-canvas-setting" }, Ue = { class: "config-item-header" }, Se = { class: "size-select" }, xe = { class: "option-item" }, Le = { class: "option-item-label" }, Te = { class: "option-item-value" }, Ee = { class: "config-size-input" }, ze = { class: "config-size-input" }, Fe = { class: "dms-flex-space-between w-full validate-box" }, Re = {
  key: 0,
  class: "validate-tip"
}, Be = { class: "config-upload-input" }, Oe = { class: "upload-img-preview" }, Me = { class: "bg-set-wrap" }, Ne = {
  key: 0,
  class: "picker-height"
}, Ye = {
  key: 1,
  class: "upload-box"
}, Xe = { class: "config-upload-input" }, De = { class: "upload-img-preview" }, je = { class: "config-item m-t-10" }, We = { class: "config-item-label" }, qe = { class: "config-item-label-text" }, Ae = { class: "config-item-content" }, He = { class: "config-item m-t-10" }, Je = { class: "config-item-label" }, Ge = { class: "config-item-label-text" }, Ke = { class: "config-item-content" }, Qe = /* @__PURE__ */ we({
  __name: "CanvasPage",
  setup(Ze) {
    Pe(), T(() => import("./StyleSetting.vue_vue_type_script_setup_true_lang-74e32b28.js").then((i) => i.S));
    const U = T(() => import("./index-d5fc9050.js")), G = T(() => import("./index-b43712b3.js")), g = A("screenId", 0), B = A("pageData", { list: [] }), K = E(ge), O = fe(), o = O.getEditCanvasConfig;
    h(), h(!1);
    const _ = h(0), M = h(["响应式配置"]), r = E({
      width: 1920,
      height: 1080
    });
    z(() => o.width, (i) => {
      i !== r.width && (r.width = i);
    }), z(() => o.height, (i) => {
      i !== r.height && (r.height = i);
    });
    const Q = (i) => {
      const e = i.split(" × ");
      e.length === 2 && (r.width = parseInt(e[0]), r.height = parseInt(e[1])), x();
    }, Z = Ce(() => (i) => {
      const e = Y.find((u) => u.value === i.width + " × " + i.height);
      return e ? e.label : "自定义";
    }), S = h("自定义"), N = h(!1);
    o.checkLogin === void 0 && (o.checkLogin = !0);
    const Y = E([
      {
        label: "Web 1920",
        value: "1920 × 1080"
      },
      {
        label: "Web 1366",
        value: "1366 × 768"
      },
      {
        label: "Web 1280",
        value: "1280 × 800"
      },
      {
        label: "Surface Book",
        value: "1500 × 1000"
      },
      {
        label: "iMac",
        value: "1280 × 720"
      },
      {
        label: "MacBook",
        value: "1152 × 700"
      },
      {
        label: "MacBook Pro",
        value: "1440 × 900"
      },
      {
        label: "iPhone 14 Pro Max",
        value: "436 × 923"
      },
      {
        label: "iPhone 14 Pro",
        value: "393 × 852"
      },
      {
        label: "iPhone 14 Plus",
        value: "428 × 926"
      },
      {
        label: "iPhone 14",
        value: "390 × 844"
      },
      {
        label: "iPhone 13 Pro Max",
        value: "428 × 926"
      },
      {
        label: "iPhone 13 mini",
        value: "375 × 812"
      },
      {
        label: "自定义",
        value: "自定义"
      }
    ]), $ = () => {
      ve({ screenId: g, customUrl: o.customUrl }).then((i) => {
        const { code: e, data: u } = i;
        e === 200 && (N.value = u);
      });
    }, ee = (i) => {
      o.selectColor = _.value === 0;
    }, le = [
      {
        label: "背景颜色",
        value: 0
      },
      {
        label: "背景图片",
        value: 1
      }
    ], oe = [
      {
        key: v.FIT,
        title: "自适应",
        icon: "PageScale",
        desc: "自适应比例展示，页面会有留白"
      },
      {
        key: v.AUTO,
        title: "屏幕自适应",
        icon: "PageLaptop",
        desc: "根据屏幕大小自适应比例"
      },
      {
        key: v.HIDE_Y,
        title: "Y轴隐藏",
        icon: "PageFitToWidth",
        desc: "自适应比例，X轴铺满，Y轴超出隐藏"
      },
      {
        key: v.HIDE_X,
        title: "X轴隐藏",
        icon: "PageFitToHeight",
        desc: "自适应比例，Y轴铺满，X轴超出隐藏"
      },
      {
        key: v.SCROLL_Y,
        title: "Y轴滚动",
        icon: "PageFitToWidth",
        desc: "X轴铺满，Y轴自适应滚动"
      },
      {
        key: v.SCROLL_X,
        title: "X轴滚动",
        icon: "PageFitToHeight",
        desc: "Y轴铺满，X轴自适应滚动"
      },
      {
        key: v.FULL,
        title: "铺满",
        icon: "PageFitToScreen",
        desc: "强行拉伸画面，填充所有视图"
      }
    ];
    z(
      () => o.selectColor,
      (i) => {
        _.value = i ? 0 : 1;
      },
      {
        immediate: !0
      }
    );
    const x = () => {
      o.width = r.width, o.height = r.height;
    }, te = () => {
      const i = document.querySelector(".dms-edit-range");
      if (!i)
        return y.error("截图失败！"), !1;
      _e(i, {
        backgroundColor: null,
        allowTaint: !0,
        useCORS: !0
      }).then((e) => {
        const u = be(e.toDataURL(), "file");
        u ? R(g, u).then((c) => {
          const { data: b } = c;
          o.photo = b.url;
        }) : y.error("截图失败");
      });
    }, ae = (i) => {
      const { file: e } = i;
      J(() => {
        e ? R(g, e).then((u) => {
          const { data: c } = u;
          o.photo = c.url;
        }) : y.error("添加图片失败，请稍后重试！");
      });
    }, ne = (i) => {
      const { file: e } = i;
      J(() => {
        e ? R(g, e).then((u) => {
          const { data: c } = u;
          o.backgroundImage = c.url;
        }) : y.error("添加图片失败，请稍后重试！");
      });
    }, se = (i) => {
      O.setEditCanvasConfig(he.PREVIEW_SCALE_TYPE, i);
    }, ie = () => {
      const i = localStorage.getItem("RouterMatching");
      let e = [];
      i && (e = JSON.parse(i));
      let u = e.findIndex((b) => b.id === g);
      u === -1 ? e.push({ path: o.customUrl, id: g }) : e[u] = { path: o.customUrl, id: g }, localStorage.setItem("RouterMatching", JSON.stringify(e));
      let c = "/publish/#" + o.customUrl;
      o.customUrl[0] !== "/" && (c = "/publish/#/" + o.customUrl), c += "?projectId=" + o.groupId, window.open(c);
    };
    return (i, e) => {
      const u = d("el-option"), c = d("el-select"), b = d("el-input-number"), X = d("el-col"), ue = d("el-row"), L = d("el-switch"), w = d("el-tooltip"), V = d("el-input"), de = d("el-button"), D = d("el-upload"), j = d("el-image"), re = d("el-radio"), W = d("el-radio-group"), q = Ve, ce = d("el-radio-button"), pe = d("el-form"), me = d("el-collapse");
      return m(), f("div", ye, [
        t(pe, { "label-position": "top" }, {
          default: n(() => [
            t(p, { name: "大屏尺寸" }, {
              header: n(() => [
                s("div", Ue, [
                  e[19] || (e[19] = s("span", { class: "config-item-header-name" }, "大屏尺寸", -1)),
                  s("div", Se, [
                    t(c, {
                      class: "config-select full",
                      "popper-class": "size-select-pop",
                      modelValue: S.value,
                      "onUpdate:modelValue": e[0] || (e[0] = (l) => S.value = l),
                      onChange: Q
                    }, {
                      label: n(() => [
                        C(F(S.value === "自定义" ? "自定义" : Z.value(r)), 1)
                      ]),
                      default: n(() => [
                        (m(!0), f(k, null, I(Y, (l) => (m(), H(u, {
                          key: l.value,
                          label: l.label,
                          value: l.value
                        }, {
                          default: n(() => [
                            s("span", xe, [
                              s("span", Le, F(l.label), 1),
                              s("span", Te, F(l.value === "自定义" ? r.width + " × " + r.height : l.value), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])
              ]),
              default: n(() => [
                t(ue, { gutter: 10 }, {
                  default: n(() => [
                    t(X, { span: 12 }, {
                      default: n(() => [
                        s("div", Ee, [
                          e[20] || (e[20] = s("span", { class: "prepend" }, "宽度", -1)),
                          t(b, {
                            prepend: "宽度",
                            class: "config-input",
                            min: 300,
                            "controls-position": "right",
                            modelValue: r.width,
                            "onUpdate:modelValue": e[1] || (e[1] = (l) => r.width = l),
                            onChange: x
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    t(X, { span: 12 }, {
                      default: n(() => [
                        s("div", ze, [
                          e[21] || (e[21] = s("span", { class: "prepend" }, "高度", -1)),
                          t(b, {
                            class: "config-input",
                            min: 500,
                            "controls-position": "right",
                            modelValue: r.height,
                            "onUpdate:modelValue": e[2] || (e[2] = (l) => r.height = l),
                            onChange: x
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(p, {
              name: "开启权限设置",
              alone: ""
            }, {
              default: n(() => [
                t(L, {
                  modelValue: a(o).setAuth,
                  "onUpdate:modelValue": e[3] || (e[3] = (l) => a(o).setAuth = l)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            t(p, { name: "自定义地址" }, {
              tip: n(() => [
                t(w, {
                  effect: "dark",
                  "raw-content": "",
                  content: "单独部署应用访问的地址，填写完后使用此地址可以访问当前页面 <br/>填写规则：填写域名/# 后面部分路径，<br /> 例如访问的完整路径是 http:/locahost:8080/#/index,<br />输入框里填写/index即可",
                  placement: "top"
                }, {
                  default: n(() => e[22] || (e[22] = [
                    s("i", { class: "icon-help" }, null, -1)
                  ])),
                  _: 1
                })
              ]),
              default: n(() => [
                s("div", Fe, [
                  t(V, {
                    class: "config-input",
                    modelValue: a(o).customUrl,
                    "onUpdate:modelValue": e[4] || (e[4] = (l) => a(o).customUrl = l),
                    onBlur: $
                  }, null, 8, ["modelValue"]),
                  t(de, {
                    class: "dms-button m-l-10",
                    type: "primary",
                    onClick: ie
                  }, {
                    default: n(() => e[23] || (e[23] = [
                      C("预览")
                    ])),
                    _: 1
                  }),
                  N.value ? (m(), f("div", Re, "该地址已在该应用中存在，请重新填写！")) : P("", !0)
                ])
              ]),
              _: 1
            }),
            t(p, {
              name: "大屏名称",
              required: ""
            }, {
              default: n(() => [
                t(V, {
                  class: "config-input",
                  modelValue: a(o).projectName,
                  "onUpdate:modelValue": e[5] || (e[5] = (l) => a(o).projectName = l)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            t(p, { name: "大屏简介" }, {
              default: n(() => [
                t(V, {
                  type: "textarea",
                  rows: 5,
                  class: "config-input",
                  modelValue: a(o).projectSummary,
                  "onUpdate:modelValue": e[6] || (e[6] = (l) => a(o).projectSummary = l)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            t(p, { name: "封面图片" }, {
              default: n(() => [
                s("div", Be, [
                  s("div", {
                    class: "cut-btn",
                    onClick: te
                  }, "截图"),
                  t(V, {
                    class: "config-input",
                    modelValue: a(o).photo,
                    "onUpdate:modelValue": e[7] || (e[7] = (l) => a(o).photo = l),
                    clearable: ""
                  }, null, 8, ["modelValue"]),
                  t(D, {
                    ref: "uploadRef",
                    class: "upload-img-btn",
                    action: "",
                    "list-type": "picture",
                    accept: "image/*",
                    "http-request": ae
                  }, {
                    trigger: n(() => e[24] || (e[24] = [
                      s("div", { class: "icon-image" }, null, -1)
                    ])),
                    _: 1
                  }, 512)
                ]),
                s("div", Oe, [
                  t(j, {
                    class: "preview-img",
                    fit: "cover",
                    src: a(o).photo
                  }, {
                    error: n(() => e[25] || (e[25] = [
                      s("span", { class: "preview-img-tip" }, "请上传封面图片", -1)
                    ])),
                    placeholder: n(() => e[26] || (e[26] = [
                      s("span", { class: "preview-img-tip" }, "请上传背景图片", -1)
                    ])),
                    _: 1
                  }, 8, ["src"])
                ])
              ]),
              _: 1
            }),
            t(p, { name: "背景设置" }, {
              default: n(() => [
                s("div", Me, [
                  t(W, {
                    class: "m-b-10",
                    modelValue: _.value,
                    "onUpdate:modelValue": e[8] || (e[8] = (l) => _.value = l),
                    name: "selectColorValue",
                    onChange: ee
                  }, {
                    default: n(() => [
                      (m(), f(k, null, I(le, (l) => t(re, {
                        key: l.value,
                        value: l.value,
                        label: l.label
                      }, null, 8, ["value", "label"])), 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  _.value === 0 ? (m(), f("div", Ne, [
                    t(a(G), {
                      modelValue: a(o).background,
                      "onUpdate:modelValue": e[9] || (e[9] = (l) => a(o).background = l)
                    }, null, 8, ["modelValue"])
                  ])) : P("", !0),
                  _.value === 1 ? (m(), f("div", Ye, [
                    s("div", Xe, [
                      t(V, {
                        class: "config-input",
                        modelValue: a(o).backgroundImage,
                        "onUpdate:modelValue": e[10] || (e[10] = (l) => a(o).backgroundImage = l),
                        clearable: ""
                      }, null, 8, ["modelValue"]),
                      t(D, {
                        ref: "uploadBgRef",
                        class: "upload-img-btn",
                        action: "",
                        "list-type": "picture",
                        accept: "image/*",
                        "http-request": ne
                      }, {
                        trigger: n(() => e[27] || (e[27] = [
                          s("div", { class: "icon-image" }, null, -1)
                        ])),
                        _: 1
                      }, 512)
                    ]),
                    s("div", De, [
                      t(j, {
                        class: "preview-img",
                        fit: "cover",
                        src: a(o).backgroundImage
                      }, {
                        error: n(() => e[28] || (e[28] = [
                          s("span", { class: "preview-img-tip" }, "请上传背景图片", -1)
                        ])),
                        placeholder: n(() => e[29] || (e[29] = [
                          s("span", { class: "preview-img-tip" }, "请上传背景图片", -1)
                        ])),
                        _: 1
                      }, 8, ["src"])
                    ]),
                    t(p, {
                      name: "背景大小",
                      class: "m-t-10"
                    }, {
                      default: n(() => [
                        t(c, {
                          class: "config-select full",
                          "popper-class": "config-select-pop",
                          modelValue: a(o).backgroundFit,
                          "onUpdate:modelValue": e[11] || (e[11] = (l) => a(o).backgroundFit = l)
                        }, {
                          default: n(() => [
                            (m(!0), f(k, null, I(K, (l) => (m(), H(u, {
                              key: l.value,
                              label: l.label,
                              value: l.value
                            }, null, 8, ["label", "value"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ])) : P("", !0)
                ])
              ]),
              _: 1
            }),
            t(p, {
              name: "是否需要登录",
              alone: ""
            }, {
              default: n(() => [
                t(L, {
                  size: "small",
                  "inactive-value": 0,
                  "active-value": 1,
                  modelValue: a(o).needLogin,
                  "onUpdate:modelValue": e[12] || (e[12] = (l) => a(o).needLogin = l)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            a(o).needLogin === 1 ? (m(), f(k, { key: 0 }, [
              t(p, { name: "登录页面" }, {
                default: n(() => [
                  t(a(U), {
                    groupId: a(o).groupId,
                    "current-page-id": a(g),
                    modelValue: a(o).loginPageId,
                    "onUpdate:modelValue": e[13] || (e[13] = (l) => a(o).loginPageId = l)
                  }, null, 8, ["groupId", "current-page-id", "modelValue"])
                ]),
                _: 1
              }),
              t(p, {
                name: "登录成功接口验证",
                alone: ""
              }, {
                default: n(() => [
                  t(L, {
                    size: "small",
                    modelValue: a(o).checkLogin,
                    "onUpdate:modelValue": e[14] || (e[14] = (l) => a(o).checkLogin = l)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ], 64)) : P("", !0),
            t(p, { name: "适配方式" }, {
              default: n(() => [
                t(W, {
                  class: "config-radio-group",
                  size: "small",
                  modelValue: a(o).previewScaleType,
                  "onUpdate:modelValue": e[15] || (e[15] = (l) => a(o).previewScaleType = l),
                  onChange: se
                }, {
                  default: n(() => [
                    (m(), f(k, null, I(oe, (l) => t(ce, {
                      key: l.key,
                      label: l.key,
                      value: l.key
                    }, {
                      default: n(() => [
                        t(w, {
                          "show-arrow": !1,
                          trigger: "hover",
                          content: l.desc
                        }, {
                          default: n(() => [
                            t(q, {
                              "icon-class": l.icon
                            }, null, 8, ["icon-class"])
                          ]),
                          _: 2
                        }, 1032, ["content"])
                      ]),
                      _: 2
                    }, 1032, ["label", "value"])), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        t(me, {
          class: "config-collapse",
          modelValue: M.value,
          "onUpdate:modelValue": e[18] || (e[18] = (l) => M.value = l)
        }, {
          default: n(() => [
            t(Ie, {
              title: "响应式配置",
              name: "响应式配置"
            }, {
              icon: n(({ isActive: l }) => [
                t(q, {
                  "icon-class": l ? "arrow-down" : "arrow-right"
                }, null, 8, ["icon-class"])
              ]),
              default: n(() => [
                s("div", je, [
                  s("div", We, [
                    s("span", qe, [
                      e[31] || (e[31] = C("PC页面 ")),
                      t(w, {
                        effect: "dark",
                        "raw-content": "",
                        content: "当前页面在pc浏览器打开自动跳转的页面，不选择不跳转",
                        placement: "top"
                      }, {
                        default: n(() => e[30] || (e[30] = [
                          s("i", { class: "icon-help font-16 m-l-5" }, null, -1)
                        ])),
                        _: 1
                      })
                    ])
                  ]),
                  s("div", Ae, [
                    t(a(U), {
                      groupId: a(o).groupId,
                      list: a(B).list,
                      "current-page-id": a(g),
                      modelValue: a(o).pcPageId,
                      "onUpdate:modelValue": e[16] || (e[16] = (l) => a(o).pcPageId = l)
                    }, null, 8, ["groupId", "list", "current-page-id", "modelValue"])
                  ])
                ]),
                s("div", He, [
                  s("div", Je, [
                    s("span", Ge, [
                      e[33] || (e[33] = C("移动端页面 ")),
                      t(w, {
                        effect: "dark",
                        "raw-content": "",
                        content: "当前页面在移动端手机浏览器打开自动跳转的页面，不选择不跳转",
                        placement: "top"
                      }, {
                        default: n(() => e[32] || (e[32] = [
                          s("i", { class: "icon-help font-16 m-l-5" }, null, -1)
                        ])),
                        _: 1
                      })
                    ])
                  ]),
                  s("div", Ke, [
                    t(a(U), {
                      groupId: a(o).groupId,
                      list: a(B).list,
                      "current-page-id": a(g),
                      modelValue: a(o).appPageId,
                      "onUpdate:modelValue": e[17] || (e[17] = (l) => a(o).appPageId = l)
                    }, null, 8, ["groupId", "list", "current-page-id", "modelValue"])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const il = /* @__PURE__ */ ke(Qe, [["__scopeId", "data-v-0ec18780"]]);
export {
  il as default
};
