import { defineComponent as g, ref as u, watch as h, computed as k, resolveComponent as l, openBlock as s, createElementBlock as d, createElementVNode as c, createVNode as a, unref as x, withCtx as r, Fragment as y, renderList as C, createBlock as V } from "vue";
import { y as w, h as E } from "./index-83341b0a.js";
import "./index.d-baa1c98c.js";
import { u as B } from "./useTargetData.hook-f6b520a8.js";
import "vue-router";
import "pinia";
import "element-plus";
import "lodash";
const F = { class: "config-item" }, D = { class: "config-item-content" }, N = /* @__PURE__ */ g({
  __name: "index",
  props: {},
  setup(T) {
    const { targetData: n } = B(), i = u(!1), p = u([]);
    return h(
      () => {
        var e, t;
        return (t = (e = n.value) == null ? void 0 : e.option) == null ? void 0 : t.dataset;
      },
      (e) => {
        e != null ? (i.value = !1, p.value = Object.keys(e)) : i.value = !0;
      },
      {
        immediate: !0
      }
    ), k(() => n.value.chartConfig.chartFrame === w.ECHARTS), (e, t) => {
      const _ = l("el-table-column"), f = l("el-option"), v = l("el-select"), b = l("el-table");
      return s(), d("div", F, [
        t[0] || (t[0] = c("div", { class: "config-item-label" }, [
          c("span", { class: "config-item-label-text" }, "数据映射")
        ], -1)),
        c("div", D, [
          a(b, {
            class: "match-table",
            data: x(n).option.linkComponents
          }, {
            default: r(() => [
              a(_, {
                prop: "title",
                label: "组件",
                width: "150"
              }),
              a(_, {
                prop: "key",
                label: "映射数据字段"
              }, {
                default: r((m) => [
                  a(v, {
                    class: "config-select",
                    "popper-class": "config-select-pop",
                    "allow-create": "",
                    filterable: "",
                    modelValue: m.row.key,
                    "onUpdate:modelValue": (o) => m.row.key = o
                  }, {
                    default: r(() => [
                      (s(!0), d(y, null, C(p.value, (o) => (s(), V(f, {
                        key: o,
                        label: o,
                        value: o
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])
        ])
      ]);
    };
  }
});
const S = /* @__PURE__ */ E(N, [["__scopeId", "data-v-e7f1126f"]]);
export {
  S as default
};
