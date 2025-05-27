import { defineComponent as N, ref as _, computed as S, watch as B, resolveComponent as g, unref as o, openBlock as n, createElementBlock as s, Fragment as p, createElementVNode as l, createVNode as c, createCommentVNode as i, withCtx as E, renderList as R, createBlock as y } from "vue";
import { x as k, R as m, y as w, h as F } from "./index-83341b0a.js";
import { u as J } from "./useTargetData.hook-f6b520a8.js";
import { S as C } from "./index.d-baa1c98c.js";
import "vue-router";
import "pinia";
import "element-plus";
import "lodash";
const U = {
  key: 0,
  class: "dms-chart-configurations-data"
}, X = { class: "config-item" }, h = { class: "config-item-content" }, P = {
  key: 0,
  class: "config-item"
}, $ = { class: "config-item-content" }, L = {
  key: 1,
  class: "no-data"
}, M = { class: "config-item" }, O = { class: "config-item-content" }, j = /* @__PURE__ */ N({
  __name: "index",
  setup(z) {
    const q = k(() => import("./index-d957b9a6.js")), D = k(() => import("./index-0c759dff.js")), { targetData: e } = J(), b = k(() => import("./index-e7b9f2b5.js")), x = [
      {
        label: C.STATIC,
        value: m.STATIC
      },
      {
        label: C.AJAX,
        value: m.AJAX
      },
      {
        label: C.Pond,
        value: m.Pond
      }
    ], d = _(e.value.option.dataNode), v = _(e.value.option.dataId), V = S(() => {
      var r, t, u;
      return ((r = e.value.chartConfig) == null ? void 0 : r.chartFrame) === w.STATIC || typeof ((u = (t = e.value) == null ? void 0 : t.option) == null ? void 0 : u.dataset) > "u";
    }), f = _(!0);
    let T = null;
    return B(
      () => e && (e.value ? e.value.id : e.value),
      (r, t) => {
        e.value && e.value.option && e.value.option.dataNode && (d.value = e.value.option.dataNode), f.value = !1, clearTimeout(T), T = setTimeout(() => {
          f.value = !0;
        }, 100);
      }
    ), (r, t) => {
      const u = g("el-input"), A = g("el-option"), I = g("el-select");
      return o(e) ? (n(), s("div", U, [
        o(e).option.dataNode !== void 0 ? (n(), s(p, { key: 0 }, [
          l("div", X, [
            t[5] || (t[5] = l("div", { class: "config-item-label" }, [
              l("span", { class: "config-item-label-text" }, "表单节点")
            ], -1)),
            l("div", h, [
              c(u, {
                class: "config-input",
                modelValue: d.value,
                "onUpdate:modelValue": t[0] || (t[0] = (a) => d.value = a),
                onBlur: t[1] || (t[1] = (a) => o(e).option.dataNode = d.value)
              }, null, 8, ["modelValue"])
            ])
          ]),
          o(e).option.dataId !== void 0 ? (n(), s("div", P, [
            t[6] || (t[6] = l("div", { class: "config-item-label" }, [
              l("span", { class: "config-item-label-text" }, "内容编号")
            ], -1)),
            l("div", $, [
              c(u, {
                class: "config-input",
                modelValue: v.value,
                "onUpdate:modelValue": t[2] || (t[2] = (a) => v.value = a),
                onBlur: t[3] || (t[3] = (a) => o(e).option.dataId = v.value)
              }, null, 8, ["modelValue"])
            ])
          ])) : i("", !0)
        ], 64)) : V.value ? (n(), s("div", L, "此组件无需配置数据")) : (n(), s(p, { key: 2 }, [
          f.value ? (n(), s(p, { key: 0 }, [
            l("div", M, [
              t[7] || (t[7] = l("div", { class: "config-item-label" }, [
                l("span", { class: "config-item-label-text" }, "请求方式")
              ], -1)),
              l("div", O, [
                c(I, {
                  class: "config-select full",
                  "popper-class": "config-select-pop",
                  modelValue: o(e).request.requestDataType,
                  "onUpdate:modelValue": t[4] || (t[4] = (a) => o(e).request.requestDataType = a)
                }, {
                  default: E(() => [
                    (n(), s(p, null, R(x, (a) => c(A, {
                      key: a.value,
                      label: a.label,
                      value: a.value
                    }, null, 8, ["label", "value"])), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            o(e).request.requestDataType === 0 ? (n(), y(o(D), {
              key: o(e).id
            })) : i("", !0),
            o(e).request.requestDataType === o(m).AJAX ? (n(), y(o(q), {
              targetDataRequest: o(e).request,
              key: o(e).id
            }, null, 8, ["targetDataRequest"])) : i("", !0),
            o(e).option.linkComponents ? (n(), y(o(b), {
              key: o(e).id
            })) : i("", !0)
          ], 64)) : i("", !0)
        ], 64))
      ])) : i("", !0);
    };
  }
});
const te = /* @__PURE__ */ F(j, [["__scopeId", "data-v-4dda25de"]]);
export {
  te as default
};
