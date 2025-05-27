import { defineComponent as r, ref as o, openBlock as t, createBlock as p, unref as n } from "vue";
import { F as m } from "./index-83341b0a.js";
import "lodash";
import "element-plus";
import "vue-router";
import "pinia";
const d = /* @__PURE__ */ r({
  __name: "wrapper",
  setup(a) {
    const e = o(Date.now());
    return (c, _) => (t(), p(n(m), { key: e.value }));
  }
});
export {
  d as default
};
