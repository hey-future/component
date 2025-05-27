import { _ as D } from "./StyleSetting.vue_vue_type_script_setup_true_lang-74e32b28.js";
import { defineComponent as y, defineAsyncComponent as i, resolveComponent as s, openBlock as c, createElementBlock as h, createElementVNode as e, toDisplayString as S, createVNode as a, withCtx as _, unref as r, createBlock as b, createCommentVNode as g } from "vue";
import { h as C } from "./index-83341b0a.js";
import "./CollapseItem-399000ab.js";
import "lodash";
import "element-plus";
import "./index-b43712b3.js";
import "./upload-6d6a2bd7.js";
import "vue-router";
import "pinia";
const V = {
  key: 0,
  class: "dms-chart-configurations-setting"
}, x = { class: "config-item" }, w = { class: "config-item-row user-select-text" }, G = { class: "config-item" }, k = { class: "config-item-row" }, A = { class: "config-item" }, N = { class: "config-item-content" }, B = /* @__PURE__ */ y({
  __name: "GroupSetting",
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
    const m = i(() => import("./NameSetting-08d5d440.js")), d = i(() => import("./PositionSetting-501dd4f0.js")), u = i(() => import("./SizeSetting-3182161e.js"));
    return i(() => import("./StyleSetting-a6bc022d.js")), (j, o) => {
      const f = s("el-switch"), n = s("el-option"), p = s("el-select"), v = D;
      return t.targetData ? (c(), h("div", V, [
        e("div", x, [
          e("div", w, "分组id: " + S(t.targetData.id), 1)
        ]),
        e("div", G, [
          e("div", k, [
            o[2] || (o[2] = e("span", { class: "config-item-label-text" }, "是否开启滚动", -1)),
            a(f, {
              modelValue: t.targetData.attr.openScroll,
              "onUpdate:modelValue": o[0] || (o[0] = (l) => t.targetData.attr.openScroll = l)
            }, null, 8, ["modelValue"])
          ])
        ]),
        e("div", A, [
          o[3] || (o[3] = e("div", { class: "config-item-label" }, [
            e("span", { class: "config-item-label-text" }, "内部组件超出分组样式")
          ], -1)),
          e("div", N, [
            a(p, {
              modelValue: t.targetData.attr.overflow,
              "onUpdate:modelValue": o[1] || (o[1] = (l) => t.targetData.attr.overflow = l),
              class: "config-select"
            }, {
              default: _(() => [
                a(n, {
                  label: "自动",
                  value: "auto"
                }),
                a(n, {
                  label: "隐藏",
                  value: "hidden"
                }),
                a(n, {
                  label: "滚动条",
                  value: "scroll"
                }),
                a(n, {
                  label: "超出显示",
                  value: "visible"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        a(r(m), {
          chartConfig: t.targetData.chartConfig
        }, null, 8, ["chartConfig"]),
        a(r(u), {
          isGroup: t.targetData.isGroup,
          chartAttr: t.targetData.attr
        }, null, 8, ["isGroup", "chartAttr"]),
        a(r(d), {
          chartAttr: t.targetData.attr,
          canvasConfig: t.canvasConfig
        }, null, 8, ["chartAttr", "canvasConfig"]),
        t.targetData && t.targetData.styles ? (c(), b(v, {
          key: 0,
          "is-canvas": !1,
          "is-group": t.targetData.isGroup,
          chartStyles: t.targetData.styles,
          groupStyle: t.targetData.attr.style
        }, null, 8, ["is-group", "chartStyles", "groupStyle"])) : g("", !0)
      ])) : g("", !0);
    };
  }
});
const K = /* @__PURE__ */ C(B, [["__scopeId", "data-v-20dfebda"]]);
export {
  K as default
};
