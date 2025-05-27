import { _ as h } from "./StyleSetting.vue_vue_type_script_setup_true_lang-74e32b28.js";
import { defineComponent as y, resolveComponent as r, openBlock as i, createElementBlock as c, Fragment as C, createElementVNode as e, toDisplayString as d, createVNode as o, withCtx as b, createCommentVNode as s, unref as m, createBlock as g, resolveDynamicComponent as f } from "vue";
import { h as V } from "./index-83341b0a.js";
import "lodash";
import "element-plus";
import { _ as x } from "./NameSetting.vue_vue_type_script_setup_true_lang-3ca0a46e.js";
import { _ as S } from "./PositionSetting.vue_vue_type_script_setup_true_lang-93a135ca.js";
import { _ as k } from "./SizeSetting.vue_vue_type_script_setup_true_lang-04abef18.js";
import "./CollapseItem-399000ab.js";
import "./index-b43712b3.js";
import "./upload-6d6a2bd7.js";
import "vue-router";
import "pinia";
const w = {
  key: 0,
  class: "dms-chart-configurations-setting"
}, p = { class: "config-item" }, G = { class: "config-item-row user-select-text" }, q = { class: "config-item" }, A = { class: "config-item-row" }, _ = { class: "config-item" }, B = { class: "config-item-content" }, N = {
  key: 1,
  class: "config-item"
}, U = { class: "config-item-row user-select-text" }, $ = { class: "config-item" }, j = { class: "config-item-row" }, E = /* @__PURE__ */ y({
  __name: "ChartSetting",
  props: {
    targetData: {
      type: Object,
      required: !0
    },
    canvasConfig: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (K, a) => {
      const u = r("el-switch"), l = r("el-option"), D = r("el-select"), v = h;
      return t.targetData ? (i(), c("div", w, [
        t.targetData.isGroup ? (i(), c(C, { key: 0 }, [
          e("div", p, [
            e("div", G, "分组id: " + d(t.targetData.id), 1)
          ]),
          e("div", q, [
            e("div", A, [
              a[3] || (a[3] = e("span", { class: "config-item-label-text" }, "是否开启滚动", -1)),
              o(u, {
                modelValue: t.targetData.attr.openScroll,
                "onUpdate:modelValue": a[0] || (a[0] = (n) => t.targetData.attr.openScroll = n)
              }, null, 8, ["modelValue"])
            ])
          ]),
          e("div", _, [
            a[4] || (a[4] = e("div", { class: "config-item-label" }, [
              e("span", { class: "config-item-label-text" }, "内部组件超出分组样式")
            ], -1)),
            e("div", B, [
              o(D, {
                modelValue: t.targetData.attr.overflow,
                "onUpdate:modelValue": a[1] || (a[1] = (n) => t.targetData.attr.overflow = n),
                class: "config-select"
              }, {
                default: b(() => [
                  o(l, {
                    label: "自动",
                    value: "auto"
                  }),
                  o(l, {
                    label: "隐藏",
                    value: "hidden"
                  }),
                  o(l, {
                    label: "滚动条",
                    value: "scroll"
                  }),
                  o(l, {
                    label: "超出显示",
                    value: "visible"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])
        ], 64)) : s("", !0),
        t.targetData.isTemplate ? (i(), c("div", N, [
          e("div", U, "模板id: " + d(t.targetData.id), 1)
        ])) : s("", !0),
        e("div", $, [
          e("div", j, [
            a[5] || (a[5] = e("span", { class: "config-item-label-text" }, "开启权限设置", -1)),
            o(u, {
              modelValue: t.targetData.setAuth,
              "onUpdate:modelValue": a[2] || (a[2] = (n) => t.targetData.setAuth = n)
            }, null, 8, ["modelValue"])
          ])
        ]),
        o(m(x), {
          chartConfig: t.targetData.chartConfig
        }, null, 8, ["chartConfig"]),
        o(m(k), {
          isGroup: t.targetData.isGroup,
          chartAttr: t.targetData.attr
        }, null, 8, ["isGroup", "chartAttr"]),
        o(m(S), {
          chartAttr: t.targetData.attr,
          canvasConfig: t.canvasConfig
        }, null, 8, ["chartAttr", "canvasConfig"]),
        t.targetData.submitRequest ? (i(), g(f(t.targetData.chartConfig.conKey), {
          key: 2,
          "submit-request": t.targetData.submitRequest,
          optionData: t.targetData.option
        }, null, 8, ["submit-request", "optionData"])) : (i(), g(f(t.targetData.chartConfig.conKey), {
          key: 3,
          "target-id": t.targetData.id,
          optionData: t.targetData.option
        }, null, 8, ["target-id", "optionData"])),
        t.targetData.isContainer ? s("", !0) : (i(), g(v, {
          key: 4,
          "is-canvas": !1,
          isGroup: t.targetData.isGroup,
          chartStyles: t.targetData.styles,
          groupStyle: t.targetData.attr.style
        }, null, 8, ["isGroup", "chartStyles", "groupStyle"]))
      ])) : s("", !0);
    };
  }
});
const X = /* @__PURE__ */ V(E, [["__scopeId", "data-v-36f5f4ad"]]);
export {
  X as default
};
