import { l as R, i as A, _ as K, M as a, m as C, g as V, h as F } from "./index-83341b0a.js";
import { defineComponent as I, computed as z, ref as W, watch as j, resolveComponent as h, openBlock as u, createElementBlock as m, createVNode as p, withCtx as g, createElementVNode as l, unref as q, createBlock as y, toDisplayString as J, normalizeClass as k, withModifiers as L } from "vue";
import { cloneDeep as Q } from "lodash";
import "vue-router";
import "pinia";
import "element-plus";
const X = { class: "layer-box" }, Y = ["onMousedown", "onMouseenter", "onMouseleave", "onContextmenu"], Z = { class: "layer-item-title" }, ee = {
  key: 0,
  class: "group-icon"
}, te = {
  key: 1,
  class: "component-img"
}, oe = { class: "layer-item-title-text" }, se = { class: "layer-item-status" }, ne = ["onClick"], re = ["onClick"], le = /* @__PURE__ */ I({
  __name: "ContentLayers",
  setup(ie) {
    const { handleContextMenu: E, onClickOutSide: ae } = R(), r = A(), v = z(() => {
      const e = Q(r.getComponentList), t = (s) => (s.reverse(), s.map((o) => {
        o.groupList && (o.groupList = t(o.groupList)), o.componentList && (o.componentList = t(o.componentList));
      }), s);
      return t(e);
    }), _ = W([]);
    _.value = v.value, j(
      () => v.value,
      (e) => {
        _.value = e;
      }
    );
    const w = (e) => r.getTargetChart.selectId.find((t) => t === e.id) ? "is-active" : "", D = (e) => {
      e.status.lock ? r.setUnLock(e.id) : r.setLock(e.id);
    }, x = (e) => {
      e.status.hide ? r.setShow(e.id) : r.setHide(e.id);
    }, M = (e, t, s) => {
      if (r.getTargetChart.selectId.length > 1)
        return e.filter((i) => i.key === a.GROUP);
      const o = [];
      return s.status.lock ? o.push(a.LOCK) : o.push(a.UNLOCK), s.status.hide ? o.push(a.HIDE) : o.push(a.SHOW), ["Page"].includes(s.chartConfig.key) && (o.push(a.TEMPLATE), o.push("dt")), s.innerGroup || o.push(a.REMOVEGROUP), s.isGroup ? [
        ...((c) => t.filter((f) => c.includes(f.key)))([a.UN_GROUP]),
        { type: "divider", key: "dt" },
        ...e.filter((c) => !o.includes(c.key))
      ] : e.filter((i) => !o.includes(i.key));
    }, N = (e, t, s) => {
    }, S = (e) => {
    }, O = () => {
    }, T = () => {
    }, H = () => {
    }, b = () => {
    }, G = () => {
    }, P = () => {
    }, U = (e, t, s) => {
      var o;
      if (e.buttons === C.LEFT && ((o = window.$KeyboardActive) != null && o.ctrl)) {
        if (r.targetChart.selectId.includes(t.id)) {
          const i = r.targetChart.selectId.filter((c) => c !== t.id);
          r.setTargetSelectChart(i, !1, s);
        } else
          r.setTargetSelectChart(t.id, !0, s);
        return !1;
      }
      (t.key === "Page" || t.key === "Template") && (e.buttons, C.LEFT), r.setTargetSelectChart(t.id, !1, s);
    }, $ = (e) => {
      r.setTargetHoverChart(e.id);
    }, B = (e) => {
      r.setTargetHoverChart(void 0);
    };
    return (e, t) => {
      const s = V, o = h("el-image"), i = h("el-tree"), c = h("el-scrollbar");
      return u(), m("div", X, [
        p(c, null, {
          default: g(() => [
            p(i, {
              class: "layer-tree",
              "allow-drop": N,
              "allow-drag": S,
              data: _.value,
              draggable: "",
              "default-expand-all": "",
              props: {
                children: "groupList",
                class: w
              },
              "node-key": "id",
              onNodeDragStart: O,
              onNodeDragEnter: T,
              onNodeDragLeave: H,
              onNodeDragOver: b,
              onNodeDragEnd: G,
              onNodeDrop: P
            }, {
              empty: g(() => t[0] || (t[0] = [
                l("div", { class: "no-layer" }, [
                  l("img", { src: K }),
                  l("p", { class: "not-layer-text" }, "暂无图层~")
                ], -1)
              ])),
              default: g(({ node: f, data: n }) => [
                l("div", {
                  class: "layer-item",
                  onMousedown: (d) => U(d, n),
                  onMouseenter: (d) => $(n),
                  onMouseleave: (d) => B(),
                  onContextmenu: (d) => q(E)(d, n, M)
                }, [
                  l("div", Z, [
                    n.isGroup ? (u(), m("div", ee, [
                      p(s, {
                        "icon-class": f.expanded ? "folder_open" : "folder"
                      }, null, 8, ["icon-class"])
                    ])) : (u(), m("div", te, [
                      n.chartConfig.type === 2 ? (u(), y(o, {
                        key: 0,
                        src: n.chartConfig.path + "/" + n.chartConfig.image
                      }, {
                        error: g(() => t[1] || (t[1] = [
                          l("img", {
                            src: "./static/images/widget/default.png",
                            alt: ""
                          }, null, -1)
                        ])),
                        _: 2
                      }, 1032, ["src"])) : (u(), y(o, {
                        key: 1,
                        src: "./static/images/widget/" + n.chartConfig.image
                      }, {
                        error: g(() => t[2] || (t[2] = [
                          l("img", {
                            src: "./static/images/widget/default.png",
                            alt: ""
                          }, null, -1)
                        ])),
                        _: 2
                      }, 1032, ["src"]))
                    ])),
                    l("span", oe, J(n.chartConfig.title), 1),
                    l("div", se, [
                      l("span", {
                        class: k(["layer-item-status-lock", { active: n.status.lock }]),
                        onClick: L((d) => D(n), ["stop"])
                      }, [
                        p(s, {
                          "icon-class": n.status.lock ? "lock" : "unlock"
                        }, null, 8, ["icon-class"])
                      ], 10, ne),
                      l("span", {
                        class: k(["layer-item-status-hide", { active: n.status.hide }]),
                        onClick: L((d) => x(n), ["stop"])
                      }, [
                        p(s, {
                          "icon-class": n.status.hide ? "eye_close" : "eye"
                        }, null, 8, ["icon-class"])
                      ], 10, re)
                    ])
                  ])
                ], 40, Y)
              ]),
              _: 1
            }, 8, ["data", "props"])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const fe = /* @__PURE__ */ F(le, [["__scopeId", "data-v-e4f60ddf"]]);
export {
  fe as default
};
