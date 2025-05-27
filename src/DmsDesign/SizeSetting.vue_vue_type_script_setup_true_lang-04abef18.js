import { defineComponent as c, resolveComponent as s, openBlock as p, createElementBlock as u, createElementVNode as t, createVNode as n, withCtx as i } from "vue";
const m = { class: "config-item" }, f = { class: "config-item-content" }, g = { class: "config-size-input" }, _ = { class: "config-size-input" }, v = /* @__PURE__ */ c({
  __name: "SizeSetting",
  props: {
    chartAttr: {
      type: Object,
      required: !0
    },
    isGroup: {
      type: Boolean,
      required: !1
    }
  },
  setup(o) {
    return (V, e) => {
      const r = s("el-input-number"), a = s("el-col"), d = s("el-row");
      return p(), u("div", m, [
        e[4] || (e[4] = t("div", { class: "config-item-label" }, [
          t("span", { class: "config-item-label-text" }, "尺寸")
        ], -1)),
        t("div", f, [
          n(d, { gutter: 10 }, {
            default: i(() => [
              n(a, { span: 12 }, {
                default: i(() => [
                  t("div", g, [
                    e[2] || (e[2] = t("span", { class: "prepend" }, "宽度", -1)),
                    n(r, {
                      bordered: !1,
                      min: 1,
                      class: "config-input",
                      "controls-position": "right",
                      modelValue: o.chartAttr.w,
                      "onUpdate:modelValue": e[0] || (e[0] = (l) => o.chartAttr.w = l)
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              }),
              n(a, { span: 12 }, {
                default: i(() => [
                  t("div", _, [
                    e[3] || (e[3] = t("span", { class: "prepend" }, "高度", -1)),
                    n(r, {
                      bordered: !1,
                      min: 1,
                      class: "config-input",
                      "controls-position": "right",
                      modelValue: o.chartAttr.h,
                      "onUpdate:modelValue": e[1] || (e[1] = (l) => o.chartAttr.h = l)
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export {
  v as _
};
