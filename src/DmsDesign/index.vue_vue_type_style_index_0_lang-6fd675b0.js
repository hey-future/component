import { g as E } from "./index-83341b0a.js";
import { defineComponent as I, inject as U, ref as r, computed as j, resolveComponent as s, openBlock as l, createBlock as u, withCtx as o, createVNode as f, createElementBlock as c, Fragment as d, renderList as V, createElementVNode as w, toDisplayString as A, createCommentVNode as F } from "vue";
const L = { class: "group-name" }, P = {
  key: 0,
  class: "no-child"
}, z = /* @__PURE__ */ I({
  __name: "index",
  props: {
    modelValue: {
      type: Number,
      default: void 0
    },
    groupId: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    currentPageId: {
      type: Number,
      default: void 0
    }
  },
  emits: ["update:modelValue", "change"],
  setup(y, { emit: h }) {
    const k = U("pageData", { list: [] }), _ = r([]), n = y, i = r(n.modelValue), N = j(() => n.list && n.list.length > 0 ? n.list : k.list), m = h, b = (p) => {
      m("change", p), m("update:modelValue", p);
    };
    return r([]), (p, a) => {
      const g = s("el-option"), x = E, C = s("el-collapse-item"), B = s("el-collapse"), D = s("el-select");
      return l(), u(D, {
        class: "config-select full",
        "popper-class": "page-list-pop",
        modelValue: i.value,
        "onUpdate:modelValue": a[1] || (a[1] = (e) => i.value = e),
        clearable: "",
        onChange: b
      }, {
        default: o(() => [
          f(B, {
            modelValue: _.value,
            "onUpdate:modelValue": a[0] || (a[0] = (e) => _.value = e)
          }, {
            default: o(() => [
              (l(!0), c(d, null, V(N.value, (e, v) => (l(), c(d, null, [
                e.version !== void 0 ? (l(), u(g, {
                  key: v,
                  label: e.name,
                  value: e.id
                }, null, 8, ["label", "value"])) : (l(), u(C, {
                  key: e.name + v,
                  title: e.name
                }, {
                  icon: o(({ isActive: t }) => [
                    f(x, {
                      class: "group-icon",
                      "icon-class": t ? "group_open" : "group_close"
                    }, null, 8, ["icon-class"])
                  ]),
                  title: o(() => [
                    w("span", L, A(e.name), 1)
                  ]),
                  default: o(() => [
                    (l(!0), c(d, null, V(e.data, (t) => (l(), u(g, {
                      key: t.id,
                      label: t.name,
                      value: t.id
                    }, null, 8, ["label", "value"]))), 128)),
                    !e.data || e.data && e.data.length === 0 ? (l(), c("div", P, "该分组下暂无页面")) : F("", !0)
                  ]),
                  _: 2
                }, 1032, ["title"]))
              ], 64))), 256))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  z as _
};
