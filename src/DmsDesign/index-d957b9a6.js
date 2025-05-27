import { defineComponent as ee, ref as C, toRefs as te, watch as ae, resolveComponent as q, openBlock as d, createElementBlock as f, Fragment as j, createElementVNode as s, createVNode as i, unref as a, isRef as S, withCtx as g, renderList as x, createBlock as D, createCommentVNode as h, createTextVNode as se, toRaw as L } from "vue";
import { u as oe } from "./useTargetData.hook-f6b520a8.js";
import { ElMessage as k } from "element-plus";
import { s as le, a as ne } from "./index.d-baa1c98c.js";
import { V as b, J as T, L as J, k as F, N as P, O as re, Q as K, S as _, T as ue, U as ie, h as de } from "./index-83341b0a.js";
import { P as U, F as me, a as pe } from "./index-56c16d83.js";
import { M as Q } from "./index-b6bcee03.js";
import { cloneDeep as G } from "lodash";
import "vue-router";
import "pinia";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.worker?worker";
import "monaco-editor/esm/vs/language/json/json.worker?worker";
import "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
const ce = { class: "config-item" }, fe = { class: "config-item-content" }, ye = { class: "config-url-input" }, ve = { class: "config-item" }, ge = {
  key: 0,
  class: "config-item"
}, _e = { class: "config-item" }, qe = { class: "config-item" }, be = { class: "config-item-content" }, Pe = {
  key: 0,
  class: "no-value"
}, he = {
  key: 1,
  class: "config-item"
}, Be = { class: "config-item" }, Ve = { class: "config-item" }, Oe = { class: "code-editor" }, je = {
  key: 0,
  class: "config-item"
}, ke = { class: "config-item-row m-t-15" }, Re = { class: "config-item" }, De = { class: "config-item-content" }, Te = { class: "config-item" }, Ue = { class: "config-item-content" }, we = { class: "code-editor" }, Ce = {
  key: 2,
  class: "config-item"
}, Fe = { class: "config-item-label" }, Ne = {
  key: 3,
  class: "config-item"
}, Ie = { class: "config-item-label" }, Se = { class: "config-item-content" }, xe = { class: "update-time-wrap" }, $e = /* @__PURE__ */ ee({
  __name: "index",
  props: {
    targetDataRequest: Object,
    type: {
      type: Number,
      default: 1
      // 1代表普通 2 代表文件上传配置的上传接口   3代表自定义数据表的接口配置  4代表动态接口配置
    },
    showBackend: {
      type: Boolean,
      default: (y) => !0
    },
    showFirst: {
      type: Boolean,
      default: (y) => !0
    },
    formField: Object,
    showFilter: {
      type: Boolean,
      default: (y) => !0
    },
    showInterval: {
      type: Boolean,
      default: (y) => !0
    },
    CurrentData: Object
  },
  setup(y) {
    var E;
    const p = y, { chartEditStore: N, targetData: v } = oe(), $ = C((E = p.targetDataRequest) == null ? void 0 : E.requestUrl), { requestParamsBodyType: c, requestHttpType: I, requestParams: m, isBackend: w } = te(
      p.targetDataRequest
    ), B = C(""), A = C("Header"), W = (r) => {
      const e = /\${(.+?)}/g, t = r.match(e), o = [];
      t && t.map((u) => {
        let n = u.replace(/\${(.+?)}/g, "$1");
        o.push({
          key: n,
          value: "",
          valueType: "custom"
        });
      }), m.value.Params.path = o, p.targetDataRequest && (p.targetDataRequest.requestUrl = r);
    };
    ae(
      () => m.value.Body.json,
      (r) => {
        const e = {};
        r.map((t) => {
          t.key && (t.valueType === b.COUSTOM ? e[t.key] = t.value : t.valueType === b.GLOBAL ? e[t.key] = "{{" + t.value + "}}" : t.valueType === b.FORM ? e[t.key] = "${" + t.value + "}" : t.valueType === b.LINK ? e[t.key] = "$[" + t.value + "]" : t.valueType === b.CURRENT && (e[t.key] = "${" + t.value + "}"));
        }), m.value.Body.jsonStr = T(e);
      },
      { deep: !0 }
    );
    const z = () => {
      const r = m.value.Body.jsonStr, e = [];
      try {
        const o = F(r);
        for (var t in o) {
          let u = b.COUSTOM, n = o[t];
          /\${(.+?)}/g.test(o[t]) ? (u = b.FORM, n = n.replace(/\${(.+?)}/g, "$1")) : /{{(.+?)}}/g.test(o[t]) ? (u = b.GLOBAL, n = n.replace(/{{(.+?)}}/g, "$1")) : /\$\[(.+?)\]/g.test(o[t]) && (u = b.LINK, n = n.replace(/\$\[(.+?)\]/g, "$1")), e.push({
            key: t,
            value: n,
            valueType: u
          });
        }
        m.value.Body.json = e;
      } catch {
        k.error("参数格式错误请检查!");
      }
    };
    let R = J("loginInfo" + N.editCanvasConfig.loginPageId);
    if (R)
      try {
        R = F(R).data;
      } catch {
        console.log("失败");
      }
    else {
      let r = J("userInfo");
      if (r)
        try {
          R = F(r);
        } catch {
          console.log("失败");
        }
    }
    const V = C(!1);
    p.type == 2 && (c.value = P.FORM_DATA);
    const Y = async () => {
      if (!p.targetDataRequest)
        return;
      V.value = !0;
      const r = {
        loginInfo: R,
        groupId: N.editCanvasConfig.groupId,
        formData: v.value.option.formData,
        encryptionType: v.value.option.encryptionType,
        base64Encryption: v.value.option.base64Encryption,
        rsaPublicKey: v.value.option.rsaPublicKey
      };
      try {
        const e = G(p.targetDataRequest);
        if (w.value) {
          const t = {
            type: 2,
            api: {
              url: e.requestUrl,
              method: e.requestHttpType,
              headers: void 0,
              path: void 0,
              params: void 0,
              body: void 0
            }
          };
          if (e.requestParams.Header) {
            const o = _(e.requestParams.Header, "array", r);
            t.api.headers = o;
          }
          if (e.requestParams.Params.path) {
            const o = _(e.requestParams.Params.path, "array", r);
            t.api.path = o;
            let u = t.api.url;
            o.map((n) => {
              u = u.replace("${" + n.key + "}", n.value);
            }), t.api.url = u;
          }
          if (e.requestParams.Params.query && (t.api.params = _(e.requestParams.Params.query, "array", r)), c.value === P.JSON && e.requestParams.Body.json) {
            const o = _(e.requestParams.Body.json, "array", r), u = {};
            o.map((O) => {
              u[O.key] = O.value;
            });
            const n = {
              type: "json",
              body: T(u)
            };
            t.api.body = n;
          }
          if (c.value === P.FORM_DATA && e.requestParams.Body["form-data"]) {
            const o = {
              type: "form-data",
              body: _(e.requestParams.Body["form-data"], "array", r)
            };
            t.api.body = o;
          }
          await ue(t).then((o) => {
            const { code: u, data: n, msg: O } = o;
            u === 200 ? B.value = T(F(n)) : k.error(O);
          }).catch(() => {
            k.warning("没有拿到返回值，请检查接口！");
          });
        } else {
          const t = G(L(p.targetDataRequest));
          if (t.requestParams.Header && (t.requestParams.Header = _(t.requestParams.Header, "json", r)), t.requestParams.Params.query && (t.requestParams.Params = _(t.requestParams.Params.query, "json", r)), m.value.Params.path) {
            const o = _(m.value.Params.path, "array", r);
            let u = t.requestUrl;
            o.map((n) => {
              u = u.replace("${" + n.key + "}", n.value);
            }), t.requestUrl = u;
          }
          c.value === P.FORM_DATA && t.requestParams.Body["form-data"] && (t.requestParams.Body["form-data"] = _(t.requestParams.Body["form-data"], "json", r)), c.value === P.JSON && t.requestParams.Body.json && (t.requestParams.Body.json = T(_(t.requestParams.Body.json, "json", r))), ie(t, L(N.getRequestGlobalConfig)).then((o) => {
            V.value = !1, o ? B.value = T(o) : k.warning("没有拿到返回值，请检查接口！");
          }).catch((o) => {
            k.error(o.message), V.value = !1;
          });
        }
        V.value = !1;
      } catch {
        V.value = !1, k.warning("数据异常，请检查参数！");
      }
    };
    return (r, e) => {
      const t = q("el-option"), o = q("el-select"), u = q("el-input"), n = q("el-tab-pane"), O = q("el-tabs"), H = q("el-switch"), M = q("el-tooltip"), X = q("el-button"), Z = q("el-input-number");
      return d(), f(j, null, [
        s("div", ce, [
          e[10] || (e[10] = s("div", { class: "config-item-label" }, [
            s("span", { class: "config-item-label-text" }, "接口地址")
          ], -1)),
          s("div", fe, [
            s("div", ye, [
              i(o, {
                class: "config-select",
                "popper-class": "config-select-pop",
                modelValue: a(I),
                "onUpdate:modelValue": e[0] || (e[0] = (l) => S(I) ? I.value = l : null)
              }, {
                default: g(() => [
                  (d(!0), f(j, null, x(a(le), (l) => (d(), D(t, {
                    key: l.value,
                    label: l.label,
                    value: l.value
                  }, null, 8, ["label", "value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              i(u, {
                class: "config-input",
                modelValue: $.value,
                "onUpdate:modelValue": e[1] || (e[1] = (l) => $.value = l),
                clearable: "",
                placeholder: "请输入接口地址",
                onChange: W
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        i(O, {
          modelValue: A.value,
          "onUpdate:modelValue": e[4] || (e[4] = (l) => A.value = l),
          type: "card"
        }, {
          default: g(() => [
            i(n, {
              label: "Header",
              name: "Header"
            }, {
              default: g(() => [
                s("div", ve, [
                  i(a(U), {
                    name: "请求头(header)",
                    params: a(m).Header
                  }, null, 8, ["params"])
                ])
              ]),
              _: 1
            }),
            i(n, {
              label: "Query",
              name: "Query"
            }, {
              default: g(() => [
                a(m).Params.path.length > 0 ? (d(), f("div", ge, [
                  i(a(U), {
                    name: "路径变量",
                    params: a(m).Params.path,
                    "is-path": !0,
                    type: p.type
                  }, null, 8, ["params", "type"])
                ])) : h("", !0),
                s("div", _e, [
                  i(a(U), {
                    name: "Query参数",
                    params: a(m).Params.query,
                    type: p.type
                  }, null, 8, ["params", "type"])
                ])
              ]),
              _: 1
            }),
            i(n, {
              label: "Body",
              name: "Body"
            }, {
              default: g(() => [
                s("div", qe, [
                  s("div", be, [
                    e[11] || (e[11] = s("span", { class: "config-item-label m-r-15" }, "内容类型：", -1)),
                    i(o, {
                      class: "config-select",
                      "popper-class": "config-select-pop",
                      modelValue: a(c),
                      "onUpdate:modelValue": e[2] || (e[2] = (l) => S(c) ? c.value = l : null)
                    }, {
                      default: g(() => [
                        (d(!0), f(j, null, x(a(re), (l) => (d(), D(t, {
                          key: l,
                          label: l,
                          value: l
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ]),
                a(c) === a(P).NONE ? (d(), f("div", Pe, "该请求暂时没有正文")) : a(c) === a(P).FORM_DATA || a(c) === a(P).X_WWW_FORM_URLENCODED ? (d(), f("div", he, [
                  i(a(U), {
                    params: a(m).Body[a(c)],
                    "form-field": p.formField,
                    type: p.type
                  }, null, 8, ["params", "form-field", "type"])
                ])) : a(c) === a(P).JSON ? (d(), f(j, { key: 2 }, [
                  s("div", Be, [
                    i(a(U), {
                      params: a(m).Body.json,
                      "form-field": p.formField,
                      type: p.type
                    }, null, 8, ["params", "form-field", "type"])
                  ]),
                  s("div", Ve, [
                    e[12] || (e[12] = s("div", { class: "config-item-label" }, [
                      s("span", { class: "config-item-label-text" }, "参数内容")
                    ], -1)),
                    s("div", Oe, [
                      i(a(Q), {
                        modelValue: a(m)[a(K).BODY].jsonStr,
                        "onUpdate:modelValue": e[3] || (e[3] = (l) => a(m)[a(K).BODY].jsonStr = l),
                        width: "100%",
                        height: "100%",
                        language: "json",
                        onBlur: z
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ], 64)) : h("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        y.showBackend ? (d(), f("div", je, [
          s("div", ke, [
            e[14] || (e[14] = s("span", { class: "config-item-label-text" }, "后端发起请求", -1)),
            i(H, {
              size: "small",
              class: "m-l-15",
              modelValue: a(w),
              "onUpdate:modelValue": e[5] || (e[5] = (l) => S(w) ? w.value = l : null)
            }, null, 8, ["modelValue"]),
            i(M, {
              effect: "dark",
              "raw-content": "",
              content: "存在跨域问题可开启",
              placement: "top"
            }, {
              default: g(() => e[13] || (e[13] = [
                s("i", { class: "icon-help font-16 m-l-15" }, null, -1)
              ])),
              _: 1
            })
          ])
        ])) : h("", !0),
        s("div", Re, [
          s("div", De, [
            i(X, {
              class: "dms-button block",
              loading: V.value,
              type: "primary",
              onClick: Y
            }, {
              default: g(() => e[15] || (e[15] = [
                se("发送请求")
              ])),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        s("div", Te, [
          e[16] || (e[16] = s("div", { class: "config-item-label" }, [
            s("span", { class: "config-item-label-text" }, "响应结果")
          ], -1)),
          s("div", Ue, [
            s("div", we, [
              i(a(Q), {
                modelValue: B.value,
                "onUpdate:modelValue": e[6] || (e[6] = (l) => B.value = l),
                width: "100%",
                height: "100%",
                editorOptions: {
                  readOnly: !0
                },
                language: "json"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        y.showFilter ? (d(), f(j, { key: 1 }, [
          y.type !== 4 ? (d(), D(a(me), {
            key: 0,
            data: B.value
          }, null, 8, ["data"])) : y.type == 4 ? (d(), D(a(pe), {
            key: 1,
            targetData: a(v),
            data: B.value
          }, null, 8, ["targetData", "data"])) : h("", !0)
        ], 64)) : h("", !0),
        y.showFirst ? (d(), f("div", Ce, [
          s("div", Fe, [
            e[17] || (e[17] = s("span", { class: "config-item-label-text" }, "组件首次加载自动请求", -1)),
            i(H, {
              modelValue: a(v).request.firstAutoRequest,
              "onUpdate:modelValue": e[7] || (e[7] = (l) => a(v).request.firstAutoRequest = l)
            }, null, 8, ["modelValue"])
          ])
        ])) : h("", !0),
        y.showInterval ? (d(), f("div", Ne, [
          s("div", Ie, [
            e[19] || (e[19] = s("span", { class: "config-item-label-text" }, "更新间隔", -1)),
            i(M, {
              effect: "dark",
              "raw-content": "",
              content: "更新间隔，为 0 只会初始化",
              placement: "top"
            }, {
              default: g(() => e[18] || (e[18] = [
                s("i", { class: "icon-help font-16 m-l-5" }, null, -1)
              ])),
              _: 1
            })
          ]),
          s("div", Se, [
            s("div", xe, [
              i(Z, {
                class: "config-input",
                min: 0,
                modelValue: a(v).request.requestInterval,
                "onUpdate:modelValue": e[8] || (e[8] = (l) => a(v).request.requestInterval = l),
                "controls-position": "right"
              }, null, 8, ["modelValue"]),
              i(o, {
                class: "config-select",
                "popper-class": "config-select-pop",
                modelValue: a(v).request.requestIntervalUnit,
                "onUpdate:modelValue": e[9] || (e[9] = (l) => a(v).request.requestIntervalUnit = l)
              }, {
                default: g(() => [
                  (d(!0), f(j, null, x(a(ne), (l) => (d(), D(t, {
                    key: l.value,
                    label: l.label,
                    value: l.value
                  }, null, 8, ["label", "value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])
        ])) : h("", !0)
      ], 64);
    };
  }
});
const at = /* @__PURE__ */ de($e, [["__scopeId", "data-v-c38b1c4c"]]);
export {
  at as default
};
