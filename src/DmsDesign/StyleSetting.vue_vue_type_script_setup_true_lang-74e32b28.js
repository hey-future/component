import { defineComponent as T, ref as W, resolveComponent as b, openBlock as u, createBlock as v, withCtx as i, unref as c, createVNode as o, createCommentVNode as g, createTextVNode as C, withModifiers as F, createElementBlock as r, Fragment as p, renderList as S, inject as H, createElementVNode as t, normalizeClass as I, nextTick as O } from "vue";
import { C as V, H as j, h as A, I as P, n as X } from "./index-83341b0a.js";
import { C as R } from "./CollapseItem-399000ab.js";
import "lodash";
import "element-plus";
import q from "./index-b43712b3.js";
import { u as z } from "./upload-6d6a2bd7.js";
const Y = [
  { value: "solid", label: "实线" },
  { value: "dashed", label: "虚线" },
  { value: "dotted", label: "点状" },
  { value: "double", label: "双线" }
], B = [
  { label: "微软雅黑", value: "Microsoft YaHei" },
  { label: "宋体", value: "SimSun" },
  { label: "黑体", value: "Arial" },
  { label: "楷体", value: "KaiTi" },
  { label: "华文行楷", value: "STXingkai" },
  { label: "华文新魏", value: "STXinwei" },
  { label: "华文隶书", value: "STLiti" },
  { label: "平方体", value: "PingFang SC" },
  { label: "阿里普惠-常规", value: "AliPuHuiTi" },
  { label: "阿里普惠-加粗", value: "AliPuHuiTiHeavy" },
  { label: "阿里普惠-75", value: "AliPuHuiTi75" },
  { label: "阿里普惠-85", value: "AliPuHuiTi85" },
  { label: "阿里普惠-105", value: "AliPuHuiTi105" },
  { label: "无", value: "" }
], M = [
  { label: "细体", value: "lighter" },
  { label: "常规", value: "normal" },
  { label: "粗体", value: "bold" }
], N = [
  { label: "左对齐", value: "left" },
  { label: "居中", value: "center" },
  { label: "右对齐", value: "right" }
], E = /* @__PURE__ */ T({
  __name: "StylesSetting",
  props: {
    isGroup: {
      type: Boolean,
      required: !1
    },
    isCanvas: {
      type: Boolean,
      default: !1
    },
    groupStyle: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    chartStyles: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  setup(e) {
    const U = W(["分组样式"]);
    return (h, s) => {
      const k = b("el-switch"), l = b("el-tag"), m = b("el-slider"), n = b("el-col"), f = b("el-input-number"), y = b("el-row"), D = b("el-option"), x = b("el-select"), w = b("el-collapse");
      return u(), v(w, {
        class: "config-collapse",
        modelValue: U.value,
        "onUpdate:modelValue": s[18] || (s[18] = (d) => U.value = d)
      }, {
        default: i(() => [
          e.isGroup && e.groupStyle ? (u(), v(c(R), {
            key: 0,
            title: "分组样式",
            name: "分组样式"
          }, {
            default: i(() => [
              o(c(Wt), { styleData: e.groupStyle }, null, 8, ["styleData"])
            ]),
            _: 1
          })) : g("", !0),
          e.chartStyles ? (u(), v(c(R), {
            key: 1,
            title: "滤镜",
            name: "滤镜",
            disabled: !e.chartStyles.filterShow
          }, {
            title: i(() => [
              s[20] || (s[20] = C(" 滤镜 ")),
              o(k, {
                size: "small",
                class: "m-l-10",
                modelValue: e.chartStyles.filterShow,
                "onUpdate:modelValue": s[0] || (s[0] = (d) => e.chartStyles.filterShow = d),
                onClick: s[1] || (s[1] = F(() => {
                }, ["stop"]))
              }, null, 8, ["modelValue"]),
              e.isGroup ? (u(), v(l, {
                key: 0,
                type: "warning",
                class: "m-l-10"
              }, {
                default: i(() => s[19] || (s[19] = [
                  C(" 解散分组「 滤镜 」也将消失!")
                ])),
                _: 1
              })) : g("", !0)
            ]),
            default: i(() => [
              o(c(V), { name: "色相" }, {
                default: i(() => [
                  o(y, { gutter: 10 }, {
                    default: i(() => [
                      o(n, { span: 16 }, {
                        default: i(() => [
                          o(m, {
                            class: "slider-style",
                            modelValue: e.chartStyles.hueRotate,
                            "onUpdate:modelValue": s[2] || (s[2] = (d) => e.chartStyles.hueRotate = d),
                            step: 3,
                            min: 0,
                            max: 360
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(f, {
                            class: "config-input",
                            modelValue: e.chartStyles.hueRotate,
                            "onUpdate:modelValue": s[3] || (s[3] = (d) => e.chartStyles.hueRotate = d),
                            min: 0,
                            max: 360,
                            step: 3,
                            "controls-position": "right"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(c(V), { name: "饱和度" }, {
                default: i(() => [
                  o(y, { gutter: 10 }, {
                    default: i(() => [
                      o(n, { span: 16 }, {
                        default: i(() => [
                          o(m, {
                            class: "slider-style",
                            modelValue: e.chartStyles.saturate,
                            "onUpdate:modelValue": s[4] || (s[4] = (d) => e.chartStyles.saturate = d),
                            step: 0.1,
                            min: 0,
                            max: 2
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(f, {
                            class: "config-input",
                            modelValue: e.chartStyles.saturate,
                            "onUpdate:modelValue": s[5] || (s[5] = (d) => e.chartStyles.saturate = d),
                            step: 0.1,
                            min: 0,
                            max: 2,
                            "controls-position": "right"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(c(V), { name: "对比度" }, {
                default: i(() => [
                  o(y, { gutter: 10 }, {
                    default: i(() => [
                      o(n, { span: 16 }, {
                        default: i(() => [
                          o(m, {
                            class: "slider-style",
                            modelValue: e.chartStyles.contrast,
                            "onUpdate:modelValue": s[6] || (s[6] = (d) => e.chartStyles.contrast = d),
                            step: 0.1,
                            min: 0,
                            max: 2
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(f, {
                            class: "config-input",
                            modelValue: e.chartStyles.contrast,
                            "onUpdate:modelValue": s[7] || (s[7] = (d) => e.chartStyles.contrast = d),
                            step: 0.1,
                            min: 0,
                            max: 2,
                            "controls-position": "right"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(c(V), { name: "亮度" }, {
                default: i(() => [
                  o(y, { gutter: 10 }, {
                    default: i(() => [
                      o(n, { span: 16 }, {
                        default: i(() => [
                          o(m, {
                            class: "slider-style",
                            modelValue: e.chartStyles.brightness,
                            "onUpdate:modelValue": s[8] || (s[8] = (d) => e.chartStyles.brightness = d),
                            step: 0.1,
                            min: 0,
                            max: 2
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(f, {
                            class: "config-input",
                            modelValue: e.chartStyles.brightness,
                            "onUpdate:modelValue": s[9] || (s[9] = (d) => e.chartStyles.brightness = d),
                            step: 0.1,
                            min: 0,
                            max: 2,
                            "controls-position": "right"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(c(V), { name: "透明度" }, {
                default: i(() => [
                  o(y, { gutter: 10 }, {
                    default: i(() => [
                      o(n, { span: 16 }, {
                        default: i(() => [
                          o(m, {
                            class: "slider-style",
                            modelValue: e.chartStyles.opacity,
                            "onUpdate:modelValue": s[10] || (s[10] = (d) => e.chartStyles.opacity = d),
                            step: 0.1,
                            min: 0,
                            max: 1
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(f, {
                            class: "config-input",
                            modelValue: e.chartStyles.opacity,
                            "onUpdate:modelValue": s[11] || (s[11] = (d) => e.chartStyles.opacity = d),
                            step: 0.1,
                            min: 0,
                            max: 1,
                            "controls-position": "right"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(c(V), { name: "混合" }, {
                default: i(() => [
                  o(x, {
                    class: "config-select full",
                    "popper-class": "config-select-pop",
                    modelValue: e.chartStyles.blendMode,
                    "onUpdate:modelValue": s[12] || (s[12] = (d) => e.chartStyles.blendMode = d)
                  }, {
                    default: i(() => [
                      (u(!0), r(p, null, S(c(j), (d) => (u(), v(D, {
                        key: d.value,
                        label: d.label,
                        value: d.value
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              o(c(V), { name: "旋转°" }, {
                default: i(() => [
                  o(y, { gutter: 10 }, {
                    default: i(() => [
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(c(V), { name: "Z轴 - 旋转" }, {
                            default: i(() => [
                              o(f, {
                                class: "config-input",
                                min: 0,
                                max: 360,
                                "controls-position": "right",
                                modelValue: e.chartStyles.rotateZ,
                                "onUpdate:modelValue": s[13] || (s[13] = (d) => e.chartStyles.rotateZ = d)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(c(V), { name: "X轴 - 旋转" }, {
                            default: i(() => [
                              o(f, {
                                class: "config-input",
                                min: 0,
                                max: 360,
                                "controls-position": "right",
                                modelValue: e.chartStyles.rotateX,
                                "onUpdate:modelValue": s[14] || (s[14] = (d) => e.chartStyles.rotateX = d)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(n, { span: 8 }, {
                        default: i(() => [
                          o(c(V), { name: "Y轴 - 旋转" }, {
                            default: i(() => [
                              o(f, {
                                class: "config-input",
                                min: 0,
                                max: 360,
                                "controls-position": "right",
                                modelValue: e.chartStyles.rotateY,
                                "onUpdate:modelValue": s[15] || (s[15] = (d) => e.chartStyles.rotateY = d)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(c(V), { name: "倾斜°" }, {
                default: i(() => [
                  o(y, { gutter: 10 }, {
                    default: i(() => [
                      o(n, { span: 12 }, {
                        default: i(() => [
                          o(c(V), { name: "X轴 - 倾斜" }, {
                            default: i(() => [
                              o(f, {
                                class: "config-input",
                                min: 0,
                                max: 360,
                                "controls-position": "right",
                                modelValue: e.chartStyles.skewX,
                                "onUpdate:modelValue": s[16] || (s[16] = (d) => e.chartStyles.skewX = d)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(n, { span: 12 }, {
                        default: i(() => [
                          o(c(V), { name: "Y轴 - 倾斜" }, {
                            default: i(() => [
                              o(f, {
                                class: "config-input",
                                min: 0,
                                max: 360,
                                "controls-position": "right",
                                modelValue: e.chartStyles.skewY,
                                "onUpdate:modelValue": s[17] || (s[17] = (d) => e.chartStyles.skewY = d)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(l, { type: "warning" }, {
                default: i(() => s[21] || (s[21] = [
                  C("若预览时大屏模糊，可以尝试关闭滤镜进行修复")
                ])),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["disabled"])) : g("", !0)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), G = /* @__PURE__ */ A(E, [["__scopeId", "data-v-9562908e"]]), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G
}, Symbol.toStringTag, { value: "Module" })), L = { class: "config-item" }, Z = { class: "config-item-content" }, $ = { class: "config-item" }, K = { class: "config-item-content" }, J = {
  key: 0,
  class: "config-item m-t-15"
}, Q = { class: "config-item-content" }, _ = {
  key: 1,
  class: "config-item m-t-15"
}, ll = { class: "config-item-content" }, tl = { class: "config-item" }, el = { class: "config-item-content" }, ol = { class: "config-item" }, al = { class: "config-item-content" }, il = { class: "config-item" }, nl = { class: "config-item-content" }, sl = { class: "config-item" }, dl = { class: "config-item-content" }, ul = {
  key: 2,
  class: "config-item m-t-15"
}, ml = { class: "config-item-content" }, cl = { class: "config-item" }, fl = { class: "config-item-content" }, gl = { class: "config-item" }, rl = { class: "config-item-content" }, vl = { class: "config-item" }, yl = { class: "config-item-content" }, bl = { class: "config-item" }, Vl = { class: "config-item-content" }, pl = {
  key: 3,
  class: "config-item m-t-15"
}, Dl = { class: "config-item-content" }, Sl = { class: "config-item" }, xl = { class: "config-item-content" }, Ul = { class: "config-item" }, kl = { class: "config-item-content" }, wl = { class: "config-item" }, Cl = { class: "config-item-content" }, hl = { class: "config-item" }, Rl = { class: "config-item-content" }, Tl = { class: "config-item" }, Wl = { class: "config-item-content" }, Fl = { class: "config-color-picker" }, Hl = { class: "config-item" }, Il = { class: "config-item-content" }, Ol = {
  key: 5,
  class: "config-item m-t-15"
}, jl = { class: "config-item-content" }, Al = { class: "config-item" }, Pl = { class: "config-item-content" }, Xl = { class: "config-item" }, ql = { class: "config-item-content" }, zl = { class: "config-item" }, Yl = { class: "config-item-content" }, Bl = { class: "config-item" }, Ml = { class: "config-item-content" }, Nl = { class: "config-item-content" }, El = { class: "config-item" }, Gl = { class: "config-item-content" }, Ll = { class: "config-item" }, Zl = { class: "config-item-content" }, $l = { class: "config-item" }, Kl = { class: "config-item-content" }, Jl = { class: "config-item" }, Ql = { class: "config-item-content" }, _l = { class: "config-item" }, lt = { class: "config-item-content" }, tt = { class: "config-color-picker" }, et = { class: "config-item" }, ot = { class: "config-item-content" }, at = { class: "config-item m-t-15" }, it = { class: "config-item-content" }, nt = { class: "config-item m-t-15" }, st = { class: "config-item-content" }, dt = { class: "config-item m-t-15" }, ut = { class: "config-item-content" }, mt = { class: "config-item m-t-15" }, ct = { class: "config-item-content" }, ft = { class: "config-item m-t-15" }, gt = { class: "config-item-content" }, rt = { class: "config-color-picker" }, vt = {
  key: 7,
  class: "config-item m-t-15"
}, yt = { class: "config-item-content" }, bt = {
  key: 8,
  class: "config-item m-t-15"
}, Vt = { class: "config-item-content" }, pt = { class: "config-color-picker full" }, Dt = {
  key: 9,
  class: "config-item m-t-15"
}, St = { class: "config-item-content" }, xt = { class: "config-upload-input" }, Ut = {
  key: 10,
  class: "config-item m-t-15"
}, kt = { class: "config-item-content" }, wt = { class: "config-item" }, Ct = { class: "config-item-content" }, ht = { class: "config-upload-input" }, Rt = { class: "config-item" }, Tt = { class: "config-item-content" }, Wt = /* @__PURE__ */ T({
  __name: "StyleSetting",
  props: {
    styleData: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const U = H("screenId", 0), h = e, s = (k, l) => {
      const { file: m } = k;
      O(() => {
        m ? z(U, m).then((n) => {
          const { data: f } = n;
          h.styleData[l] = f.url;
        }) : window.$message.error("添加图片失败，请稍后重试！");
      });
    };
    return (k, l) => {
      const m = b("el-input-number"), n = b("el-col"), f = b("el-row"), y = b("el-option"), D = b("el-select"), x = q, w = b("el-input"), d = b("el-upload");
      return u(), r(p, null, [
        o(f, { gutter: 10 }, {
          default: i(() => [
            e.styleData.width !== void 0 ? (u(), v(n, {
              key: 0,
              span: 12
            }, {
              default: i(() => [
                t("div", L, [
                  l[38] || (l[38] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "宽度")
                  ], -1)),
                  t("div", Z, [
                    o(m, {
                      class: "config-input",
                      min: 0,
                      "controls-position": "right",
                      modelValue: e.styleData.width,
                      "onUpdate:modelValue": l[0] || (l[0] = (a) => e.styleData.width = a)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })) : g("", !0),
            e.styleData.height !== void 0 ? (u(), v(n, {
              key: 1,
              span: 12
            }, {
              default: i(() => [
                t("div", $, [
                  l[39] || (l[39] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "高度")
                  ], -1)),
                  t("div", K, [
                    o(m, {
                      class: "config-input",
                      min: 0,
                      "controls-position": "right",
                      modelValue: e.styleData.height,
                      "onUpdate:modelValue": l[1] || (l[1] = (a) => e.styleData.height = a)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })) : g("", !0)
          ]),
          _: 1
        }),
        e.styleData.objectFit !== void 0 ? (u(), r("div", J, [
          l[40] || (l[40] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "图片填充方式")
          ], -1)),
          t("div", Q, [
            o(D, {
              class: "config-select",
              "popper-class": "config-select-pop",
              modelValue: e.styleData.objectFit,
              "onUpdate:modelValue": l[2] || (l[2] = (a) => e.styleData.objectFit = a)
            }, {
              default: i(() => [
                (u(!0), r(p, null, S(c(P), (a) => (u(), v(y, {
                  key: a.value,
                  label: a.label,
                  value: a.value
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : g("", !0),
        e.styleData.padding !== void 0 ? (u(), r("div", _, [
          l[45] || (l[45] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "内边距")
          ], -1)),
          t("div", ll, [
            o(f, { gutter: 5 }, {
              default: i(() => [
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", tl, [
                      l[41] || (l[41] = t("div", { class: "config-col-label" }, "上", -1)),
                      t("div", el, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.padding[0],
                          "onUpdate:modelValue": l[3] || (l[3] = (a) => e.styleData.padding[0] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", ol, [
                      l[42] || (l[42] = t("div", { class: "config-col-label" }, "右", -1)),
                      t("div", al, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.padding[1],
                          "onUpdate:modelValue": l[4] || (l[4] = (a) => e.styleData.padding[1] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", il, [
                      l[43] || (l[43] = t("div", { class: "config-col-label" }, "下", -1)),
                      t("div", nl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.padding[2],
                          "onUpdate:modelValue": l[5] || (l[5] = (a) => e.styleData.padding[2] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", sl, [
                      l[44] || (l[44] = t("div", { class: "config-col-label" }, "左", -1)),
                      t("div", dl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.padding[3],
                          "onUpdate:modelValue": l[6] || (l[6] = (a) => e.styleData.padding[3] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])) : g("", !0),
        e.styleData.margin !== void 0 ? (u(), r("div", ul, [
          l[50] || (l[50] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "外边距")
          ], -1)),
          t("div", ml, [
            o(f, { gutter: 5 }, {
              default: i(() => [
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", cl, [
                      l[46] || (l[46] = t("div", { class: "config-col-label" }, "上", -1)),
                      t("div", fl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.margin[0],
                          "onUpdate:modelValue": l[7] || (l[7] = (a) => e.styleData.margin[0] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", gl, [
                      l[47] || (l[47] = t("div", { class: "config-col-label" }, "右", -1)),
                      t("div", rl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.margin[1],
                          "onUpdate:modelValue": l[8] || (l[8] = (a) => e.styleData.margin[1] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", vl, [
                      l[48] || (l[48] = t("div", { class: "config-col-label" }, "下", -1)),
                      t("div", yl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.margin[2],
                          "onUpdate:modelValue": l[9] || (l[9] = (a) => e.styleData.margin[2] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", bl, [
                      l[49] || (l[49] = t("div", { class: "config-col-label" }, "左", -1)),
                      t("div", Vl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.margin[3],
                          "onUpdate:modelValue": l[10] || (l[10] = (a) => e.styleData.margin[3] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])) : g("", !0),
        e.styleData.borderWidth !== void 0 ? (u(), r("div", pl, [
          l[55] || (l[55] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "边框粗细")
          ], -1)),
          t("div", Dl, [
            o(f, { gutter: 5 }, {
              default: i(() => [
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", Sl, [
                      l[51] || (l[51] = t("div", { class: "config-col-label" }, "上", -1)),
                      t("div", xl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderWidth[0],
                          "onUpdate:modelValue": l[11] || (l[11] = (a) => e.styleData.borderWidth[0] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", Ul, [
                      l[52] || (l[52] = t("div", { class: "config-col-label" }, "右", -1)),
                      t("div", kl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderWidth[1],
                          "onUpdate:modelValue": l[12] || (l[12] = (a) => e.styleData.borderWidth[1] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", wl, [
                      l[53] || (l[53] = t("div", { class: "config-col-label" }, "下", -1)),
                      t("div", Cl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderWidth[2],
                          "onUpdate:modelValue": l[13] || (l[13] = (a) => e.styleData.borderWidth[2] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", hl, [
                      l[54] || (l[54] = t("div", { class: "config-col-label" }, "左", -1)),
                      t("div", Rl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderWidth[3],
                          "onUpdate:modelValue": l[14] || (l[14] = (a) => e.styleData.borderWidth[3] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])) : g("", !0),
        e.styleData.borderColor !== void 0 ? (u(), v(f, {
          key: 4,
          gutter: 10
        }, {
          default: i(() => [
            o(n, { span: 12 }, {
              default: i(() => [
                t("div", Tl, [
                  l[56] || (l[56] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "边框颜色")
                  ], -1)),
                  t("div", Wl, [
                    t("div", Fl, [
                      o(x, {
                        modelValue: e.styleData.borderColor,
                        "onUpdate:modelValue": l[15] || (l[15] = (a) => e.styleData.borderColor = a),
                        useType: "pure"
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            o(n, { span: 12 }, {
              default: i(() => [
                t("div", Hl, [
                  l[57] || (l[57] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "边框类型")
                  ], -1)),
                  t("div", Il, [
                    o(D, {
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: e.styleData.borderStyle,
                      "onUpdate:modelValue": l[16] || (l[16] = (a) => e.styleData.borderStyle = a)
                    }, {
                      default: i(() => [
                        (u(!0), r(p, null, S(c(Y), (a) => (u(), v(y, {
                          key: a.value,
                          label: a.label,
                          value: a.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : g("", !0),
        e.styleData.borderRadius ? (u(), r("div", Ol, [
          l[62] || (l[62] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "圆角")
          ], -1)),
          t("div", jl, [
            o(f, { gutter: 5 }, {
              default: i(() => [
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", Al, [
                      l[58] || (l[58] = t("div", { class: "config-col-label" }, "左上", -1)),
                      t("div", Pl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderRadius[0],
                          "onUpdate:modelValue": l[17] || (l[17] = (a) => e.styleData.borderRadius[0] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", Xl, [
                      l[59] || (l[59] = t("div", { class: "config-col-label" }, "右上", -1)),
                      t("div", ql, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderRadius[1],
                          "onUpdate:modelValue": l[18] || (l[18] = (a) => e.styleData.borderRadius[1] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", zl, [
                      l[60] || (l[60] = t("div", { class: "config-col-label" }, "右下", -1)),
                      t("div", Yl, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderRadius[2],
                          "onUpdate:modelValue": l[19] || (l[19] = (a) => e.styleData.borderRadius[2] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                o(n, { span: 6 }, {
                  default: i(() => [
                    t("div", Bl, [
                      l[61] || (l[61] = t("div", { class: "config-col-label" }, "左下", -1)),
                      t("div", Ml, [
                        o(m, {
                          class: "config-input",
                          min: 0,
                          "controls-position": "right",
                          modelValue: e.styleData.borderRadius[3],
                          "onUpdate:modelValue": l[20] || (l[20] = (a) => e.styleData.borderRadius[3] = a)
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])) : g("", !0),
        e.styleData.boxShadow ? (u(), r(p, { key: 6 }, [
          t("div", {
            class: I(["config-item", { "m-t-15": !e.styleData.borderRadius }])
          }, [
            l[67] || (l[67] = t("div", { class: "config-item-label" }, [
              t("span", { class: "config-item-label-text" }, "阴影设置")
            ], -1)),
            t("div", Nl, [
              o(f, { gutter: 5 }, {
                default: i(() => [
                  o(n, { span: 6 }, {
                    default: i(() => [
                      t("div", El, [
                        l[63] || (l[63] = t("div", { class: "config-col-label" }, "X", -1)),
                        t("div", Gl, [
                          o(m, {
                            class: "config-input",
                            "controls-position": "right",
                            modelValue: e.styleData.boxShadow[0],
                            "onUpdate:modelValue": l[21] || (l[21] = (a) => e.styleData.boxShadow[0] = a)
                          }, null, 8, ["modelValue"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  o(n, { span: 6 }, {
                    default: i(() => [
                      t("div", Ll, [
                        l[64] || (l[64] = t("div", { class: "config-col-label" }, "Y", -1)),
                        t("div", Zl, [
                          o(m, {
                            class: "config-input",
                            "controls-position": "right",
                            modelValue: e.styleData.boxShadow[1],
                            "onUpdate:modelValue": l[22] || (l[22] = (a) => e.styleData.boxShadow[1] = a)
                          }, null, 8, ["modelValue"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  o(n, { span: 6 }, {
                    default: i(() => [
                      t("div", $l, [
                        l[65] || (l[65] = t("div", { class: "config-col-label" }, "模糊", -1)),
                        t("div", Kl, [
                          o(m, {
                            class: "config-input",
                            "controls-position": "right",
                            modelValue: e.styleData.boxShadow[2],
                            "onUpdate:modelValue": l[23] || (l[23] = (a) => e.styleData.boxShadow[2] = a)
                          }, null, 8, ["modelValue"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  o(n, { span: 6 }, {
                    default: i(() => [
                      t("div", Jl, [
                        l[66] || (l[66] = t("div", { class: "config-col-label" }, "扩展", -1)),
                        t("div", Ql, [
                          o(m, {
                            class: "config-input",
                            "controls-position": "right",
                            modelValue: e.styleData.boxShadow[3],
                            "onUpdate:modelValue": l[24] || (l[24] = (a) => e.styleData.boxShadow[3] = a)
                          }, null, 8, ["modelValue"])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ], 2),
          o(f, { gutter: 10 }, {
            default: i(() => [
              o(n, { span: 12 }, {
                default: i(() => [
                  t("div", _l, [
                    l[68] || (l[68] = t("div", { class: "config-item-label" }, [
                      t("span", { class: "config-item-label-text" }, "阴影颜色")
                    ], -1)),
                    t("div", lt, [
                      t("div", tt, [
                        o(x, {
                          modelValue: e.styleData.boxShadow[4],
                          "onUpdate:modelValue": l[25] || (l[25] = (a) => e.styleData.boxShadow[4] = a),
                          useType: "pure"
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              o(n, { span: 12 }, {
                default: i(() => [
                  t("div", et, [
                    l[69] || (l[69] = t("div", { class: "config-item-label" }, [
                      t("span", { class: "config-item-label-text" }, "阴影方向")
                    ], -1)),
                    t("div", ot, [
                      o(D, {
                        class: "config-select",
                        "popper-class": "config-select-pop",
                        modelValue: e.styleData.boxShadow[5],
                        "onUpdate:modelValue": l[26] || (l[26] = (a) => e.styleData.boxShadow[5] = a)
                      }, {
                        default: i(() => [
                          o(y, {
                            label: "外阴影",
                            value: "outset"
                          }),
                          o(y, {
                            label: "内阴影",
                            value: "inset"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 64)) : g("", !0),
        o(f, { gutter: 10 }, {
          default: i(() => [
            e.styleData.fontSize !== void 0 ? (u(), v(n, {
              key: 0,
              span: 12
            }, {
              default: i(() => [
                t("div", at, [
                  l[70] || (l[70] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "字体大小")
                  ], -1)),
                  t("div", it, [
                    o(m, {
                      class: "config-input",
                      min: 0,
                      "controls-position": "right",
                      modelValue: e.styleData.fontSize,
                      "onUpdate:modelValue": l[27] || (l[27] = (a) => e.styleData.fontSize = a)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })) : g("", !0),
            e.styleData.fontWeight !== void 0 ? (u(), v(n, {
              key: 1,
              span: 12
            }, {
              default: i(() => [
                t("div", nt, [
                  l[71] || (l[71] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "字体粗细")
                  ], -1)),
                  t("div", st, [
                    o(D, {
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: e.styleData.fontWeight,
                      "onUpdate:modelValue": l[28] || (l[28] = (a) => e.styleData.fontWeight = a)
                    }, {
                      default: i(() => [
                        (u(!0), r(p, null, S(c(M), (a) => (u(), v(y, {
                          key: a.value,
                          label: a.label,
                          value: a.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })) : g("", !0),
            e.styleData.fontFamily !== void 0 ? (u(), v(n, {
              key: 2,
              span: 12
            }, {
              default: i(() => [
                t("div", dt, [
                  l[72] || (l[72] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "字体")
                  ], -1)),
                  t("div", ut, [
                    o(D, {
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: e.styleData.fontFamily,
                      "onUpdate:modelValue": l[29] || (l[29] = (a) => e.styleData.fontFamily = a)
                    }, {
                      default: i(() => [
                        (u(!0), r(p, null, S(c(B), (a) => (u(), v(y, {
                          key: a.value,
                          label: a.label,
                          value: a.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })) : g("", !0),
            e.styleData.lineHeight !== void 0 ? (u(), v(n, {
              key: 3,
              span: 12
            }, {
              default: i(() => [
                t("div", mt, [
                  l[73] || (l[73] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "行高")
                  ], -1)),
                  t("div", ct, [
                    o(m, {
                      class: "config-input",
                      "controls-position": "right",
                      modelValue: e.styleData.lineHeight,
                      "onUpdate:modelValue": l[30] || (l[30] = (a) => e.styleData.lineHeight = a)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })) : g("", !0),
            e.styleData.color !== void 0 ? (u(), v(n, {
              key: 4,
              span: 12
            }, {
              default: i(() => [
                t("div", ft, [
                  l[74] || (l[74] = t("div", { class: "config-item-label" }, [
                    t("span", { class: "config-item-label-text" }, "字体颜色")
                  ], -1)),
                  t("div", gt, [
                    t("div", rt, [
                      o(x, {
                        modelValue: e.styleData.color,
                        "onUpdate:modelValue": l[31] || (l[31] = (a) => e.styleData.color = a),
                        useType: "pure"
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ])
              ]),
              _: 1
            })) : g("", !0)
          ]),
          _: 1
        }),
        e.styleData.textAlign !== void 0 ? (u(), r("div", vt, [
          l[75] || (l[75] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "文字对齐方式")
          ], -1)),
          t("div", yt, [
            o(D, {
              class: "config-select",
              "popper-class": "config-select-pop",
              modelValue: e.styleData.textAlign,
              "onUpdate:modelValue": l[32] || (l[32] = (a) => e.styleData.textAlign = a)
            }, {
              default: i(() => [
                (u(!0), r(p, null, S(c(N), (a) => (u(), v(y, {
                  key: a.value,
                  label: a.label,
                  value: a.value
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : g("", !0),
        e.styleData.backgroundColor !== void 0 ? (u(), r("div", bt, [
          l[76] || (l[76] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "背景颜色")
          ], -1)),
          t("div", Vt, [
            t("div", pt, [
              o(x, {
                modelValue: e.styleData.backgroundColor,
                "onUpdate:modelValue": l[33] || (l[33] = (a) => e.styleData.backgroundColor = a),
                useType: "pure"
              }, null, 8, ["modelValue"])
            ])
          ])
        ])) : g("", !0),
        e.styleData.backgroundImage !== void 0 ? (u(), r("div", Dt, [
          l[78] || (l[78] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "背景图片")
          ], -1)),
          t("div", St, [
            t("div", xt, [
              o(w, {
                class: "config-input",
                modelValue: e.styleData.backgroundImage,
                "onUpdate:modelValue": l[34] || (l[34] = (a) => e.styleData.backgroundImage = a)
              }, null, 8, ["modelValue"]),
              o(d, {
                ref: "uploadPrefixRef",
                class: "upload-img-btn",
                action: "",
                "list-type": "picture",
                accept: "image/*",
                "http-request": (a) => s(a, "backgroundImage")
              }, {
                trigger: i(() => l[77] || (l[77] = [
                  t("div", { class: "icon-image" }, null, -1)
                ])),
                _: 1
              }, 8, ["http-request"])
            ])
          ])
        ])) : g("", !0),
        e.styleData.fit !== void 0 ? (u(), r("div", Ut, [
          l[79] || (l[79] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "填充方式")
          ], -1)),
          t("div", kt, [
            o(D, {
              class: "config-select",
              "popper-class": "config-select-pop",
              modelValue: e.styleData.fit,
              "onUpdate:modelValue": l[35] || (l[35] = (a) => e.styleData.fit = a)
            }, {
              default: i(() => [
                (u(!0), r(p, null, S(c(X), (a) => (u(), v(y, {
                  key: a.value,
                  label: a.label,
                  value: a.value
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : g("", !0),
        e.styleData.icon !== void 0 ? (u(), r(p, { key: 11 }, [
          t("div", wt, [
            l[81] || (l[81] = t("div", { class: "config-item-label" }, [
              t("span", { class: "config-item-label-text" }, "按钮图标")
            ], -1)),
            t("div", Ct, [
              t("div", ht, [
                o(w, {
                  class: "config-input",
                  modelValue: e.styleData.icon,
                  "onUpdate:modelValue": l[36] || (l[36] = (a) => e.styleData.icon = a)
                }, null, 8, ["modelValue"]),
                o(d, {
                  ref: "uploadPrefixRef",
                  class: "upload-img-btn",
                  action: "",
                  "list-type": "picture",
                  accept: "image/*",
                  "http-request": (a) => s(a, "icon")
                }, {
                  trigger: i(() => l[80] || (l[80] = [
                    t("div", { class: "icon-image" }, null, -1)
                  ])),
                  _: 1
                }, 8, ["http-request"])
              ])
            ])
          ]),
          t("div", Rt, [
            l[82] || (l[82] = t("div", { class: "config-item-label" }, [
              t("span", { class: "config-item-label-text" }, "图标大小")
            ], -1)),
            t("div", Tt, [
              o(m, {
                class: "config-input",
                min: 0,
                "controls-position": "right",
                modelValue: e.styleData.iconSize,
                "onUpdate:modelValue": l[37] || (l[37] = (a) => e.styleData.iconSize = a)
              }, null, 8, ["modelValue"])
            ])
          ])
        ], 64)) : g("", !0)
      ], 64);
    };
  }
});
export {
  Xt as S,
  G as _,
  Wt as a
};
