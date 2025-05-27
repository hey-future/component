import { h as r, g as c } from "./index-83341b0a.js";
import { resolveComponent as a, openBlock as i, createBlock as _, normalizeProps as p, guardReactiveProps as m, withCtx as e, createVNode as d, normalizeClass as f, renderSlot as s } from "vue";
const u = {};
function C(o, g) {
  const t = c, n = a("el-collapse-item");
  return i(), _(n, p(m(o.$attrs)), {
    icon: e(({ isActive: l }) => [
      d(t, {
        class: f(["arrow-icon", { "is-active": l }]),
        "icon-class": "arrow_down"
      }, null, 8, ["class"])
    ]),
    title: e(() => [
      s(o.$slots, "title")
    ]),
    default: e(() => [
      s(o.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const h = /* @__PURE__ */ r(u, [["render", C]]);
export {
  h as C
};
