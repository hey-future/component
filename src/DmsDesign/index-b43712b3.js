import { defineComponent as k, ref as u, watch as b, resolveComponent as c, openBlock as x, createElementBlock as S, createVNode as p, withCtx as s, createElementVNode as i, normalizeClass as w, normalizeStyle as P, unref as R } from "vue";
import { K as T, h as K } from "./index-83341b0a.js";
import "vue-router";
import "pinia";
import "element-plus";
import "lodash";
const z = { class: "dms-color-picker" }, B = { class: "color-picker-input" }, E = /* @__PURE__ */ k({
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: "#333"
    },
    useType: {
      type: String,
      default: "both"
    },
    theme: {
      type: String,
      default: "white"
    }
  },
  emits: ["update:modelValue", "clear", "change"],
  setup(r, { emit: v }) {
    const a = r, n = u(!1), m = u(), g = u(), e = u({
      type: "pure",
      value: "",
      pure: "",
      gradient: ""
    });
    a.modelValue && (a.modelValue.indexOf("gradient") > 0 ? e.value = {
      type: "gradient",
      pure: "",
      value: a.modelValue,
      gradient: a.modelValue
    } : e.value = {
      type: "pure",
      pure: a.modelValue,
      value: a.modelValue,
      gradient: ""
    }), b(
      () => a.modelValue,
      (l) => {
        l && l.indexOf("gradient") > 0 ? e.value = {
          type: "gradient",
          pure: "",
          value: l,
          gradient: l
        } : e.value = {
          type: "pure",
          pure: l,
          value: l,
          gradient: ""
        };
      }
    );
    const o = v, f = (l) => {
      e.value.value = l, e.value.pure = l, e.value.type = "pure", o("update:modelValue", l), o("change", l);
    }, h = () => {
      o("update:modelValue", e.value.value), o("change", e.value.value);
    }, y = (l) => {
      e.value.value = l, e.value.gradient = l, e.value.type = "gradient", o("update:modelValue", l), o("change", l);
    }, C = () => {
      o("clear"), e.value.type = "", e.value.pure = "", e.value.gradient = "", o("change", ""), o("update:modelValue", "");
    };
    return (l, t) => {
      const V = c("el-input"), _ = c("el-popover");
      return x(), S("div", z, [
        p(_, {
          ref_key: "colorPopRef",
          ref: g,
          placement: "bottom",
          width: "280",
          "popper-style": {
            padding: 0,
            boxShadow: "none"
          },
          offset: 16,
          trigger: "click",
          "show-arrow": !1,
          onShow: t[1] || (t[1] = (d) => n.value = !0),
          onHide: t[2] || (t[2] = (d) => n.value = !1)
        }, {
          reference: s(() => [
            i("div", B, [
              i("div", {
                class: w(["color-block", { "no-value": e.value.value === "rgba(0, 0, 0, 0)" || e.value.value === "" }])
              }, [
                i("div", {
                  style: P({ background: e.value.value })
                }, null, 4)
              ], 2),
              p(V, {
                class: "config-input",
                modelValue: e.value.value,
                "onUpdate:modelValue": t[0] || (t[0] = (d) => e.value.value = d),
                clearable: "",
                onChange: h,
                onClear: C
              }, null, 8, ["modelValue"])
            ])
          ]),
          default: s(() => [
            p(R(T), {
              ref_key: "colorPickerRef",
              ref: m,
              "use-type": r.useType,
              activeKey: n.value ? r.useType === "both" ? e.value.gradient ? "gradient" : "pure" : r.useType : "pure",
              theme: r.theme,
              "pure-color": e.value.pure,
              "gradient-color": e.value.gradient,
              "is-widget": !0,
              onPureColorChange: f,
              onGradientColorChange: y
            }, null, 8, ["use-type", "activeKey", "theme", "pure-color", "gradient-color"])
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
}), U = /* @__PURE__ */ K(E, [["__scopeId", "data-v-f811e655"]]);
export {
  U as default
};
