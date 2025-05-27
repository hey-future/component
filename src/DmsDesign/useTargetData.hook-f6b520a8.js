import { computed as r } from "vue";
import { i as a } from "./index-83341b0a.js";
const g = () => {
  const t = a();
  return { targetData: r(() => {
    const e = t.getTargetChart.selectId;
    return e ? e.length !== 1 ? void 0 : t.getComponentById(e[0]) : null;
  }), chartEditStore: t };
};
export {
  g as u
};
