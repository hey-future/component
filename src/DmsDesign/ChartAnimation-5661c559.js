import { defineComponent as B, ref as m, resolveComponent as i, openBlock as t, createElementBlock as s, createVNode as b, withCtx as o, createTextVNode as U, Fragment as f, renderList as p, unref as V, createBlock as _, normalizeClass as x, toDisplayString as z, createCommentVNode as A } from "vue";
import { C as S } from "./CollapseItem-399000ab.js";
import { h as N } from "./index-83341b0a.js";
import "vue-router";
import "pinia";
import "element-plus";
import "lodash";
const g = [
  {
    label: "强调动画",
    children: [
      { label: "弹跳", value: "bounce" },
      { label: "闪烁", value: "flash" },
      { label: "放大缩小", value: "pulse" },
      { label: "放大缩小弹簧", value: "rubberBand" },
      { label: "左右晃动", value: "headShake" },
      { label: "左右扇形摇摆", value: "swing" },
      { label: "放大晃动缩小", value: "tada" },
      { label: "扇形摇摆", value: "wobble" },
      { label: "左右上下晃动", value: "jello" }
    ]
  },
  {
    label: "移入动画",
    children: [
      { label: "渐显", value: "fadeIn" },
      { label: "向右进入", value: "fadeInLeft" },
      { label: "向左进入", value: "fadeInRight" },
      { label: "向上进入", value: "fadeInUp" },
      { label: "向下进入", value: "fadeInDown" },
      { label: "向右长距进入", value: "fadeInLeftBig" },
      { label: "向左长距进入", value: "fadeInRightBig" },
      { label: "向上长距进入", value: "fadeInUpBig" },
      { label: "向下长距进入", value: "fadeInDownBig" },
      { label: "旋转进入", value: "rotateIn" },
      { label: "左顺时针旋转", value: "rotateInDownLeft" },
      { label: "右逆时针旋转", value: "rotateInDownRight" },
      { label: "左逆时针旋转", value: "rotateInUpLeft" },
      { label: "右逆时针旋转", value: "rotateInUpRight" },
      { label: "弹入", value: "bounceIn" },
      { label: "向右弹入", value: "bounceInLeft" },
      { label: "向左弹入", value: "bounceInRight" },
      { label: "向上弹入", value: "bounceInUp" },
      { label: "向下弹入", value: "bounceInDown" },
      { label: "光速从右进入", value: "lightSpeedInRight" },
      { label: "光速从左进入", value: "lightSpeedInLeft" },
      { label: "光速从右退出", value: "lightSpeedOutRight" },
      { label: "光速从左退出", value: "lightSpeedOutLeft" },
      { label: "Y轴旋转", value: "flip" },
      { label: "中心X轴旋转", value: "flipInX" },
      { label: "中心Y轴旋转", value: "flipInY" },
      { label: "左长半径旋转", value: "rollIn" },
      { label: "由小变大进入", value: "zoomIn" },
      { label: "左变大进入", value: "zoomInLeft" },
      { label: "右变大进入", value: "zoomInRight" },
      { label: "向上变大进入", value: "zoomInUp" },
      { label: "向下变大进入", value: "zoomInDown" },
      { label: "向右滑动展开", value: "slideInLeft" },
      { label: "向左滑动展开", value: "slideInRight" },
      { label: "向上滑动展开", value: "slideInUp" },
      { label: "向下滑动展开", value: "slideInDown" }
    ]
  }
], O = {
  key: 0,
  class: "dms-chart-configurations-animations"
}, Y = ["onMouseover", "onClick"], $ = /* @__PURE__ */ B({
  __name: "ChartAnimation",
  props: {
    targetData: {
      type: Object,
      default: null
    }
  },
  setup(r) {
    const u = r, c = m(""), v = m([]);
    g.forEach((l) => {
      v.value.push(l.label);
    });
    const I = (l) => {
      if (u.targetData) {
        const e = u.targetData.styles.animations;
        return e.length ? e[0] === l : !1;
      } else
        return !1;
    }, h = () => {
      u.targetData.styles.animations = [];
    }, D = (l) => {
      u.targetData.styles.animations = [l.value];
    };
    return (l, e) => {
      const w = i("el-button"), y = i("el-col"), C = i("el-row"), k = i("el-collapse");
      return r.targetData ? (t(), s("div", O, [
        b(w, {
          class: "clear-btn dms-my-2",
          disabled: !r.targetData.styles.animations.length,
          onClick: h
        }, {
          default: o(() => e[1] || (e[1] = [
            U(" 清除动画 ")
          ])),
          _: 1
        }, 8, ["disabled"]),
        b(k, {
          class: "config-collapse",
          modelValue: v.value,
          "onUpdate:modelValue": e[0] || (e[0] = (n) => v.value = n)
        }, {
          default: o(() => [
            (t(!0), s(f, null, p(V(g), (n, L) => (t(), _(S, {
              key: L,
              title: n.label,
              name: n.label
            }, {
              default: o(() => [
                b(C, { gutter: 10 }, {
                  default: o(() => [
                    (t(!0), s(f, null, p(n.children, (a, d) => (t(), _(y, {
                      span: 8,
                      key: d
                    }, {
                      default: o(() => [
                        (t(), s("div", {
                          class: x(["animation-item dms-transition-quick", [
                            I(a.value) && "active",
                            c.value === a.value && `animate__animated  animate__${a.value}`
                          ]]),
                          key: d,
                          onMouseover: (R) => c.value = a.value,
                          onClick: (R) => D(a)
                        }, z(a.label), 43, Y))
                      ]),
                      _: 2
                    }, 1024))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ])) : A("", !0);
    };
  }
});
const T = /* @__PURE__ */ N($, [["__scopeId", "data-v-5236abed"]]);
export {
  T as default
};
