import { defineComponent as g, resolveComponent as m, openBlock as d, createElementBlock as f, Fragment as u, createElementVNode as t, toDisplayString as l, createVNode as h } from "vue";
const p = { class: "config-item" }, C = { class: "config-item-label-text" }, v = { class: "config-item" }, _ = { class: "config-item-content" }, x = /* @__PURE__ */ g({
  __name: "NameSetting",
  props: {
    chartConfig: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const o = e;
    let i = "";
    const a = () => {
      i = o.chartConfig.title;
    }, c = () => {
      o.chartConfig.title.length || (window.$message.warning("请输入至少一个字符!"), o.chartConfig.title = i);
    };
    return (b, n) => {
      const s = m("el-input");
      return d(), f(u, null, [
        t("div", p, [
          t("span", C, "组件标识：" + l(e.chartConfig.tag) + "(" + l(e.chartConfig.key) + ")", 1)
        ]),
        t("div", v, [
          n[1] || (n[1] = t("div", { class: "config-item-label" }, [
            t("span", { class: "config-item-label-text" }, "图层名称")
          ], -1)),
          t("div", _, [
            h(s, {
              class: "config-input",
              maxlength: 32,
              minlength: 1,
              modelValue: e.chartConfig.title,
              "onUpdate:modelValue": n[0] || (n[0] = (r) => e.chartConfig.title = r),
              clearable: "",
              "show-word-limit": "",
              placeholder: "请输入图层名称",
              onFocus: a,
              onBlur: c
            }, null, 8, ["modelValue"])
          ])
        ])
      ], 64);
    };
  }
});
export {
  x as _
};
