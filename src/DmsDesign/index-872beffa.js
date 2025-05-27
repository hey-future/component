import { resolveComponent as s, openBlock as n, createBlock as l, mergeProps as a, withCtx as e, renderSlot as r } from "vue";
import { h as _ } from "./index-83341b0a.js";
const c = {};
function d(o, f) {
  const t = s("el-dialog");
  return n(), l(t, a({ class: "dms-dialog-style-1" }, o.$attrs), {
    header: e(() => [
      r(o.$slots, "header")
    ]),
    footer: e(() => [
      r(o.$slots, "footer")
    ]),
    default: e(() => [
      r(o.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const i = /* @__PURE__ */ _(c, [["render", d]]);
export {
  i as _
};
