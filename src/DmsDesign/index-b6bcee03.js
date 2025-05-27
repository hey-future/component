import { ref as f, onBeforeUnmount as h, nextTick as C, defineComponent as y, onMounted as k, watch as v, openBlock as _, createElementBlock as x, Fragment as b, createElementVNode as I, normalizeStyle as S, createVNode as T, unref as P } from "vue";
import * as t from "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import w from "monaco-editor/esm/vs/editor/editor.worker?worker";
import V from "monaco-editor/esm/vs/language/json/json.worker?worker";
import $ from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import M from "monaco-editor/esm/vs/language/html/html.worker?worker";
import { h as j } from "./index-83341b0a.js";
const K = (s = "javascript") => {
  let e = null, n = !1;
  const l = f(null), c = () => {
    let o = "javascript";
    t.languages.registerCompletionItemProvider[o] || (t.languages.registerCompletionItemProvider[o] = !0, t.languages.registerCompletionItemProvider(o, {
      provideCompletionItems: (d, r) => {
        const a = d.getWordUntilPosition(r), i = new t.Range(
          r.lineNumber,
          a.startColumn,
          r.lineNumber,
          a.endColumn
        );
        return {
          suggestions: [
            {
              label: "$currentUserInfo",
              kind: t.languages.CompletionItemKind.Property,
              insertText: "$currentUserInfo",
              range: i,
              documentation: "获取当前用户信息： $currentUserInfo"
            },
            {
              label: "$LoadingService",
              kind: t.languages.CompletionItemKind.Property,
              insertText: `var loading = window['$LoadingService']({fullscrrren: true, text:'加载提示',background:'rgba(0,0,0,.5)'})
setTimeout(() =>{
	loading.close();
},1000)`,
              range: i,
              documentation: "全局Loading： $LoadingService"
            },
            {
              label: "axios",
              kind: t.languages.CompletionItemKind.Property,
              insertText: `axiosInstance({ 
  url: '', 
  method: 'POST',
  data: {},
  headers: {
     'Authorization': token,
    'Content-Type': 'application/json;charset=UTF-8'
  }
}).then(function(res){
})`,
              range: i,
              documentation: `axiosInstance({
                  url: '',
                  method: 'POST',
                  data: {},
                  headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json;charset=UTF-8'
                  }
                }).then(function(res){
                })`
            },
            {
              label: "$components",
              kind: t.languages.CompletionItemKind.Property,
              insertText: "$components[id].props.chartConfig",
              range: i,
              documentation: "全局组件属性: $components[id].props.chartConfig"
            },
            {
              label: "comp.status.hide",
              kind: t.languages.CompletionItemKind.Property,
              insertText: "components[id].props.chartConfig.status.hide",
              range: i,
              documentation: "根据组件id获取组件属性 components[id].props.chartConfig.status.hide"
            },
            {
              label: "comp.props",
              kind: t.languages.CompletionItemKind.Property,
              insertText: "components[id].props",
              range: i,
              documentation: "根据组件id获取组件属性 components[id].props"
            },
            {
              label: "comp.chartConfig",
              kind: t.languages.CompletionItemKind.Property,
              insertText: "components[id].props.chartConfig",
              range: i,
              documentation: "根据组件id获取组件属性 components[id].props.chartConfig"
            },
            {
              label: "comp.attr",
              kind: t.languages.CompletionItemKind.Property,
              insertText: "components[id].props.chartConfig.attr",
              range: i,
              documentation: "根据组件id获取组件属性 components[id].props.chartConfig.attr"
            },
            {
              label: "comp.option",
              kind: t.languages.CompletionItemKind.Property,
              insertText: "components[id].props.chartConfig.option",
              range: i,
              documentation: "根据组件id获取组件属性 components[id].props.chartConfig.option"
            }
          ]
        };
      }
    }));
  }, p = async () => {
    var o;
    await ((o = e == null ? void 0 : e.getAction("monacoEditor.action.formatDocument")) == null ? void 0 : o.run());
  }, m = (o) => {
    C(async () => {
      e == null || e.setValue(o || ""), n && (e == null || e.updateOptions({ readOnly: !1 })), await p(), n && (e == null || e.updateOptions({ readOnly: !0 }));
    });
  }, u = (o = {}) => {
    if (!l.value)
      return;
    const d = t.editor.createModel("", s);
    return n = !!o.readOnly, e = t.editor.create(l.value, {
      model: d,
      // 是否启用预览图
      minimap: { enabled: !1 },
      // 圆角
      roundedSelection: !0,
      // 主题
      theme: o.theme ? o.theme : "vs",
      // 主键
      multiCursorModifier: "ctrlCmd",
      // 滚动条
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8
      },
      // 行号
      lineNumbers: "off",
      // tab大小
      tabSize: 2,
      //字体大小
      fontSize: 16,
      // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
      autoIndent: "advanced",
      // 自动布局
      automaticLayout: !0,
      ...o
    }), c(), e;
  };
  return h(() => {
    e && e.dispose();
  }), {
    el: l,
    updateVal: m,
    getEditor: () => e,
    createEditor: u,
    registerProvider: c,
    onFormatDoc: p
  };
}, z = {
  __name: "EditorWorker",
  setup(s) {
    return self.MonacoEnvironment = {
      getWorker(e, n) {
        return n === "json" ? new V() : n === "typescript" || n === "javascript" ? new $() : n === "html" ? new M() : new w();
      }
    }, (e, n) => null;
  }
}, O = z, W = /* @__PURE__ */ y({
  __name: "index",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "90vh"
    },
    language: {
      type: String,
      default: "typescript"
    },
    preComment: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    editorOptions: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["blur", "update:modelValue"],
  setup(s, { emit: e }) {
    const n = s, l = e, { el: c, updateVal: p, getEditor: m, createEditor: u, registerProvider: o } = K(n.language), d = (r) => {
      const { modelValue: a, preComment: i } = n, g = i ? `${i}
${r || a}` : r || a;
      p(g);
    };
    return k(() => {
      const r = u(n.editorOptions);
      r.onDidChangeModelContent(() => {
        l("update:modelValue", r.getValue());
      }), r.onDidBlurEditorText(() => {
        l("blur");
      }), d();
    }), v(
      () => n.modelValue,
      (r) => {
        var a;
        r !== ((a = m()) == null ? void 0 : a.getValue()) && d(r);
      }
    ), (r, a) => (_(), x(b, null, [
      I("div", {
        ref_key: "el",
        ref: c,
        class: "dms-editor-area",
        style: S({ width: s.width, height: s.height })
      }, null, 4),
      T(P(O))
    ], 64));
  }
});
const F = /* @__PURE__ */ j(W, [["__scopeId", "data-v-3973d97b"]]);
export {
  F as M
};
