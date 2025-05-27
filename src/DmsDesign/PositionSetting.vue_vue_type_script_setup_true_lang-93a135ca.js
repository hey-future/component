import { defineComponent as d, resolveComponent as s, openBlock as u, createElementBlock as p, createElementVNode as e, createVNode as n, withCtx as i } from "vue";
const m = { class: "config-item" }, f = { class: "config-item-content" }, g = { class: "config-size-input" }, _ = { class: "config-size-input" }, b = /* @__PURE__ */ d({
  __name: "PositionSetting",
  props: {
    canvasConfig: {
      type: Object,
      required: !0
    },
    chartAttr: {
      type: Object,
      required: !0
    }
  },
  setup(o) {
    return (V, t) => {
      const r = s("el-input-number"), a = s("el-col"), c = s("el-row");
      return u(), p("div", m, [
        t[4] || (t[4] = e("div", { class: "config-item-label" }, [
          e("span", { class: "config-item-label-text" }, "位置")
        ], -1)),
        e("div", f, [
          n(c, { gutter: 10 }, {
            default: i(() => [
              n(a, { span: 12 }, {
                default: i(() => [
                  e("div", g, [
                    t[2] || (t[2] = e("span", { class: "prepend" }, "上", -1)),
                    n(r, {
                      class: "config-input",
                      "controls-position": "right",
                      modelValue: o.chartAttr.y,
                      "onUpdate:modelValue": t[0] || (t[0] = (l) => o.chartAttr.y = l)
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              }),
              n(a, { span: 12 }, {
                default: i(() => [
                  e("div", _, [
                    t[3] || (t[3] = e("span", { class: "prepend" }, "左", -1)),
                    n(r, {
                      class: "config-input",
                      "controls-position": "right",
                      modelValue: o.chartAttr.x,
                      "onUpdate:modelValue": t[1] || (t[1] = (l) => o.chartAttr.x = l)
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
  b as _
};
