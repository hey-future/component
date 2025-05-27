import { M as b } from "./index-b6bcee03.js";
import { defineComponent as V, ref as y, resolveComponent as l, openBlock as B, createBlock as x, mergeProps as E, withCtx as n, createElementVNode as i, createVNode as s, createTextVNode as d } from "vue";
import { j as S, i as k, J as N, k as O } from "./index-83341b0a.js";
import "lodash";
import "element-plus";
import "vue-router";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.worker?worker";
import "monaco-editor/esm/vs/language/json/json.worker?worker";
import "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
import "pinia";
const h = { class: "edit-content" }, G = /* @__PURE__ */ V({
  __name: "EditDrawer",
  emits: ["update:modelValue"],
  setup(J, { emit: m }) {
    const { updateComponent: u } = S(), p = k(), a = m, o = y(""), c = () => {
      const t = p.getStorageInfo;
      t && (o.value = N(t));
    }, f = () => {
      a("update:modelValue", !1);
    }, _ = () => {
      if (!o.value)
        return window.$message.warning("请输入内容"), !1;
      try {
        const t = O(o.value);
        ElMessageBox.alert("是否覆盖源视图内容，此操作不可撤回", {
          showCancelButton: !0,
          cancelButtonText: "取消",
          cancelButtonClass: "dms-button",
          confirmButtonText: "确定",
          confirmButtonClass: "dms-button",
          callback: (e) => {
            e === "confirm" && (a("update:modelValue", !1), u(t, !0, !1));
          }
        });
      } catch {
        window.$message.error("内容格式有误");
      }
    }, g = () => {
      a("update:modelValue", !1);
    };
    return (t, e) => {
      const r = l("el-button"), w = b, C = l("el-drawer");
      return B(), x(C, E({ class: "page-edit-drawer" }, t.$attrs, {
        "show-close": !1,
        title: "页面在线编辑器",
        size: "80%",
        "append-to-body": !0,
        onOpened: c,
        onClose: f
      }), {
        header: n(() => [
          e[3] || (e[3] = i("div", { class: "edit-title font-16" }, "页面在线编辑器", -1)),
          s(r, {
            class: "dms-button",
            onClick: g
          }, {
            default: n(() => e[1] || (e[1] = [
              d(" 取消 ")
            ])),
            _: 1
          }),
          s(r, {
            class: "dms-button",
            type: "primary",
            onClick: _
          }, {
            default: n(() => e[2] || (e[2] = [
              d(" 保存 ")
            ])),
            _: 1
          })
        ]),
        default: n(() => [
          i("div", h, [
            s(w, {
              modelValue: o.value,
              "onUpdate:modelValue": e[0] || (e[0] = (v) => o.value = v),
              language: "json",
              height: "100%",
              editorOptions: {
                lineNumbers: "on",
                minimap: { enabled: !0 }
              }
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 16);
    };
  }
});
export {
  G as default
};
