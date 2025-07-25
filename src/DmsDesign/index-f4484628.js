import { u as mt, i as Ct, _ as Z, D as Nt, J as ft, E as at, g as pt, h as wt } from "./index-83341b0a.js";
import { defineComponent as bt, ref as y, resolveComponent as k, openBlock as o, createElementBlock as u, createElementVNode as r, createVNode as c, Fragment as m, renderList as C, normalizeClass as b, toDisplayString as f, withDirectives as D, withKeys as j, withCtx as i, withModifiers as vt, createBlock as h, unref as rt, createTextVNode as ot, createCommentVNode as Et, resolveDynamicComponent as P, vShow as z, nextTick as kt } from "vue";
import "element-plus";
import "vue-router";
import "pinia";
import "lodash";
const Ht = () => {
  window.$loading.start();
}, Ot = () => {
  setTimeout(() => {
    window.$loading.finish();
  });
}, At = () => {
  setTimeout(() => {
    window.$loading.error();
  });
}, Bt = [
  {
    id: 40,
    title: "瞄准",
    name: "aiming",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "瞄准",
      "聚焦",
      "关注",
      "锁定",
      "定位"
    ],
    rtl: !1
  },
  {
    id: 673,
    title: "菱形1",
    name: "diamond-one",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 6,
    title: "活动源",
    name: "activity-source",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据库",
      "数据源",
      "活动源"
    ],
    rtl: !0
  },
  {
    id: 120,
    title: "应用",
    name: "application",
    category: "Build",
    categoryCN: "建筑",
    author: "白明泽",
    tag: [
      "商店",
      "店铺",
      "门店",
      "商铺",
      "房子"
    ],
    rtl: !1
  },
  {
    id: 614,
    title: "数据",
    name: "data-all",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据库",
      "多数据",
      "满数据",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 25,
    title: "添加用户",
    name: "add-user",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "添加",
      "增加",
      "人群扩充",
      "用户",
      "个人中心",
      "我的",
      "人"
    ],
    rtl: !1
  },
  {
    id: 7,
    title: "广告",
    name: "ad",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "广告符号",
      "标志"
    ],
    rtl: !0
  },
  {
    id: 10,
    title: "计算机添加",
    name: "add-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 366,
    title: "轮播",
    name: "carousel",
    category: "Components",
    categoryCN: "界面组件",
    author: "金磊",
    tag: [
      "轮播",
      "轮换",
      "轮转",
      "头图",
      "焦点图",
      "运营图"
    ],
    rtl: !0
  },
  {
    id: 49,
    title: "闹钟",
    name: "alarm-clock",
    category: "Time",
    categoryCN: "时间日期",
    author: "常留留",
    tag: [
      "倒计时",
      "闹钟",
      "时间"
    ],
    rtl: !0
  },
  {
    id: 487,
    title: "多云",
    name: "cloudy",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "阴天",
      "云彩",
      "云朵",
      "多云"
    ],
    rtl: !0
  },
  {
    id: 48,
    title: "警报",
    name: "alarm",
    category: "Safe",
    categoryCN: "安全防护",
    author: "刘心乐",
    tag: [
      "警灯",
      "警报",
      "灯",
      "警示",
      "灵感",
      "提示"
    ],
    rtl: !0
  },
  {
    id: 2,
    title: "异常",
    name: "abnormal",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "报错",
      "提示",
      "提醒"
    ],
    rtl: !0
  },
  {
    id: 11,
    title: "添加",
    name: "add-four",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "聚焦",
      "精准",
      "扫描",
      "识别",
      "添加"
    ],
    rtl: !1
  },
  {
    id: 8,
    title: "广告产品",
    name: "ad-product",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "广告产品",
      "抽象",
      "盒子",
      "箱子",
      "立体"
    ],
    rtl: !0
  },
  {
    id: 108,
    title: "生气",
    name: "angry-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "生气",
      "表情",
      "愤怒"
    ],
    rtl: !1
  },
  {
    id: 507,
    title: "色卡",
    name: "color-card",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "金磊",
    tag: [
      "颜色",
      "绚丽",
      "选择",
      "旋转",
      "叠加"
    ],
    rtl: !0
  },
  {
    id: 787,
    title: "电钻",
    name: "electric-drill",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1,
    title: "腹部",
    name: "abdominal",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "肚子",
      "腹",
      "腰"
    ],
    rtl: !1
  },
  {
    id: 3,
    title: "飞机加速",
    name: "acceleration",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "加速",
      "加速度",
      "超音速",
      "快速",
      "飞行气流"
    ],
    rtl: !0
  },
  {
    id: 4,
    title: "接受邮件",
    name: "accept-email",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "收件箱",
      "转发邮件",
      "回复邮件"
    ],
    rtl: !0
  },
  {
    id: 5,
    title: "声波",
    name: "acoustic",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音频",
      "音量",
      "语音",
      "录音",
      "波纹",
      "声音"
    ],
    rtl: !1
  },
  {
    id: 0,
    title: "拐杖",
    name: "a-cane",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "工具",
      "登山杖",
      "拐杖",
      "木棍"
    ],
    rtl: !0
  },
  {
    id: 9,
    title: "添加",
    name: "add",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "新建",
      "增加",
      "创建"
    ],
    rtl: !1
  },
  {
    id: 12,
    title: "添加同级条目",
    name: "add-item",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "添加同级条目",
      "拖拽",
      "复制"
    ],
    rtl: !0
  },
  {
    id: 13,
    title: "增加模式",
    name: "add-mode",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "模式",
      "亮度",
      "对比度",
      "增加"
    ],
    rtl: !0
  },
  {
    id: 14,
    title: "添加音乐",
    name: "add-music",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "播放",
      "音乐",
      "添加"
    ],
    rtl: !0
  },
  {
    id: 15,
    title: "添加",
    name: "add-one",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "新建",
      "增加",
      "创建"
    ],
    rtl: !1
  },
  {
    id: 16,
    title: "增加图片",
    name: "add-pic",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "添加",
      "图片",
      "相册"
    ],
    rtl: !0
  },
  {
    id: 17,
    title: "图片添加",
    name: "add-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 18,
    title: "加印",
    name: "add-print",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "印记",
      "印章",
      "打印",
      "印刷"
    ],
    rtl: !1
  },
  {
    id: 19,
    title: "添加子条目",
    name: "add-subset",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "添加子条目",
      "创建"
    ],
    rtl: !0
  },
  {
    id: 20,
    title: "加减",
    name: "add-subtract",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "算数",
      "计算"
    ],
    rtl: !0
  },
  {
    id: 21,
    title: "文字大小",
    name: "add-text",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "编辑",
      "书写",
      "文案",
      "文字大小"
    ],
    rtl: !0
  },
  {
    id: 22,
    title: "文字",
    name: "add-text-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "文字",
      "编辑",
      "书写",
      "文案"
    ],
    rtl: !0
  },
  {
    id: 23,
    title: "添加",
    name: "add-three",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "聚焦",
      "精准",
      "扫描",
      "识别",
      "添加"
    ],
    rtl: !1
  },
  {
    id: 24,
    title: "添加2",
    name: "add-two",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 26,
    title: "添加网页",
    name: "add-web",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 27,
    title: "通讯录",
    name: "address-book",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "通讯录",
      "联系人"
    ],
    rtl: !0
  },
  {
    id: 28,
    title: "相邻条目",
    name: "adjacent-item",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "相邻条目",
      "链接",
      "排序"
    ],
    rtl: !0
  },
  {
    id: 29,
    title: "加减调整",
    name: "adjustment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "加减调整",
      "计算"
    ],
    rtl: !0
  },
  {
    id: 30,
    title: "adobe-illustrate",
    name: "adobe-illustrate",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "软件",
      "应用",
      "工具",
      "设计",
      "logo",
      "ai"
    ],
    rtl: !0
  },
  {
    id: 31,
    title: "adobe-indesign",
    name: "adobe-indesign",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "软件",
      "应用",
      "工具",
      "设计",
      "logo",
      "id"
    ],
    rtl: !0
  },
  {
    id: 32,
    title: "adobe-lightroom",
    name: "adobe-lightroom",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "软件",
      "应用",
      "工具",
      "设计",
      "logo",
      "lr"
    ],
    rtl: !0
  },
  {
    id: 33,
    title: "adobe-photoshop",
    name: "adobe-photoshop",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "软件",
      "应用",
      "工具",
      "设计",
      "logo",
      "ps"
    ],
    rtl: !0
  },
  {
    id: 34,
    title: "传入",
    name: "afferent",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "传送",
      "传输",
      "向左",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 35,
    title: "传入4",
    name: "afferent-four",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 36,
    title: "传入3",
    name: "afferent-three",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 37,
    title: "传入",
    name: "afferent-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "传送",
      "传输",
      "向左",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 38,
    title: "发簪",
    name: "afro-pick",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "",
    tag: [
      "发箍",
      "发夹",
      "发簪"
    ],
    rtl: !0
  },
  {
    id: 39,
    title: "协议",
    name: "agreement",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "文档",
      "规则",
      "详情",
      "文章",
      "短文",
      "合同"
    ],
    rtl: !0
  },
  {
    id: 41,
    title: "空气自行车",
    name: "air-bike",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 42,
    title: "空调",
    name: "air-conditioning",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "电空调",
      "家电",
      "温度",
      "过滤器",
      "制暖",
      "制冷",
      "换气"
    ],
    rtl: !0
  },
  {
    id: 43,
    title: "飞机",
    name: "airplane",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 44,
    title: "飞机窗口",
    name: "airplane-window",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "靠窗",
      "靠边",
      "座椅",
      "窗口",
      "窗户",
      "窗外"
    ],
    rtl: !0
  },
  {
    id: 45,
    title: "飞机窗口",
    name: "airplane-window-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "靠窗",
      "靠边",
      "座椅",
      "窗口"
    ],
    rtl: !0
  },
  {
    id: 46,
    title: "AirPlay",
    name: "airplay",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "屏幕映像",
      "无线投屏",
      "电脑",
      "显示器"
    ],
    rtl: !0
  },
  {
    id: 47,
    title: "AirPods",
    name: "airpods",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "蓝牙耳机",
      "苹果耳机",
      "耳机",
      "无线耳机"
    ],
    rtl: !1
  },
  {
    id: 50,
    title: "底对齐",
    name: "align-bottom",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "底对齐",
      "下对齐"
    ],
    rtl: !0
  },
  {
    id: 51,
    title: "下对齐2",
    name: "align-bottom-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "底对齐",
      "排版方式"
    ],
    rtl: !0
  },
  {
    id: 52,
    title: "水平居中对齐2",
    name: "align-horizontal-center-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "居中对齐",
      "排版方式",
      "横向居中"
    ],
    rtl: !0
  },
  {
    id: 53,
    title: "水平对齐",
    name: "align-horizontally",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "左右居中对齐",
      "中间对齐"
    ],
    rtl: !1
  },
  {
    id: 54,
    title: "左对齐",
    name: "align-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "左对齐"
    ],
    rtl: !0
  },
  {
    id: 55,
    title: "文字左对齐",
    name: "align-left-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "文字",
      "左对其",
      "编辑",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 56,
    title: "左对齐2",
    name: "align-left-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "左对齐",
      "排版方式"
    ],
    rtl: !0
  },
  {
    id: 57,
    title: "右对齐",
    name: "align-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "右对齐"
    ],
    rtl: !0
  },
  {
    id: 58,
    title: "文字右对齐",
    name: "align-right-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "文字",
      "右对其",
      "编辑",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 59,
    title: "右对齐2",
    name: "align-right-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "右对齐",
      "排版方式"
    ],
    rtl: !0
  },
  {
    id: 60,
    title: "文字两边对齐",
    name: "align-text-both",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "两端对齐",
      "文字对齐"
    ],
    rtl: !1
  },
  {
    id: 61,
    title: "文字两边对齐1",
    name: "align-text-both-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字对齐",
      "左右对齐",
      "两边对齐"
    ],
    rtl: !1
  },
  {
    id: 62,
    title: "文字底对齐",
    name: "align-text-bottom",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字底对齐"
    ],
    rtl: !1
  },
  {
    id: 63,
    title: "文字底对齐1",
    name: "align-text-bottom-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字对齐",
      "左底对齐"
    ],
    rtl: !0
  },
  {
    id: 64,
    title: "文字居中",
    name: "align-text-center",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "居中对齐",
      "文字对齐"
    ],
    rtl: !0
  },
  {
    id: 65,
    title: "文字居中1",
    name: "align-text-center-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字对齐",
      "中对齐"
    ],
    rtl: !1
  },
  {
    id: 66,
    title: "文字居左",
    name: "align-text-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "左对齐",
      "文字对齐"
    ],
    rtl: !0
  },
  {
    id: 67,
    title: "文字居左1",
    name: "align-text-left-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字对齐",
      "左对齐"
    ],
    rtl: !0
  },
  {
    id: 68,
    title: "文字中间对齐",
    name: "align-text-middle",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "居中对齐",
      "居中",
      "聚集"
    ],
    rtl: !1
  },
  {
    id: 69,
    title: "文字中间对齐1",
    name: "align-text-middle-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字对齐",
      "左居中对齐"
    ],
    rtl: !0
  },
  {
    id: 70,
    title: "文字居右",
    name: "align-text-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "右对齐",
      "文字对齐"
    ],
    rtl: !0
  },
  {
    id: 71,
    title: "文字居右1",
    name: "align-text-right-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字对齐",
      "右对齐"
    ],
    rtl: !0
  },
  {
    id: 72,
    title: "文字顶对齐",
    name: "align-text-top",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字顶对齐"
    ],
    rtl: !1
  },
  {
    id: 73,
    title: "文字顶对齐1",
    name: "align-text-top-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "文字对齐",
      "左顶对齐"
    ],
    rtl: !0
  },
  {
    id: 74,
    title: "顶对齐",
    name: "align-top",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "顶部对齐",
      "上对齐"
    ],
    rtl: !0
  },
  {
    id: 75,
    title: "上对齐2",
    name: "align-top-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "顶对齐",
      "上对齐",
      "排版方式",
      "纵向居中"
    ],
    rtl: !0
  },
  {
    id: 76,
    title: "垂直居中对齐2",
    name: "align-vertical-center-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "居中对齐",
      "排版方式",
      "纵向居中"
    ],
    rtl: !0
  },
  {
    id: 77,
    title: "垂直对齐",
    name: "align-vertically",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "中间随其",
      "上下居中对齐"
    ],
    rtl: !0
  },
  {
    id: 78,
    title: "底部中心对齐",
    name: "alignment-bottom-center",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "底部中心对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 79,
    title: "底部左对齐",
    name: "alignment-bottom-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "底部左对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 80,
    title: "底部右对齐",
    name: "alignment-bottom-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "底部右对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 81,
    title: "水平下对齐",
    name: "alignment-horizontal-bottom",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "水平下对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 82,
    title: "水平居中对齐",
    name: "alignment-horizontal-center",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "水平居中对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 83,
    title: "水平上对齐",
    name: "alignment-horizontal-top",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "水平上对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 84,
    title: "左侧下对齐",
    name: "alignment-left-bottom",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "左侧下对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 85,
    title: "左侧居中对齐",
    name: "alignment-left-center",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "左侧居中对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 86,
    title: "左侧上对齐",
    name: "alignment-left-top",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "左侧上对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 87,
    title: "右侧下对齐",
    name: "alignment-right-bottom",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "右侧下对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 88,
    title: "右侧居中对齐",
    name: "alignment-right-center",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "右侧居中对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 89,
    title: "右侧上对齐",
    name: "alignment-right-top",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "右侧上对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 90,
    title: "顶部居中对齐",
    name: "alignment-top-center",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "顶部居中对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 91,
    title: "顶部左对齐",
    name: "alignment-top-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "顶部左对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 92,
    title: "顶部右对齐",
    name: "alignment-top-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "顶部右对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 93,
    title: "垂直居中对齐",
    name: "alignment-vertical-center",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "垂直居中对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 94,
    title: "垂直左对齐",
    name: "alignment-vertical-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "垂直左对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 95,
    title: "垂直右对齐",
    name: "alignment-vertical-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "垂直右对齐",
      "排版方式",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 96,
    title: "支付宝",
    name: "alipay",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "手机付款",
      "移动支付",
      "无现金支付",
      "阿里支付",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 97,
    title: "全部",
    name: "all-application",
    category: "Base",
    categoryCN: "基础",
    author: "白明泽",
    tag: [
      "管理",
      "四块",
      "更多",
      "应用",
      "导航",
      "四宫格",
      "矩阵",
      "米亚格",
      "全部应用",
      "分类"
    ],
    rtl: !1
  },
  {
    id: 98,
    title: "字母顺序",
    name: "alphabetical-sorting",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "字母顺序",
      "排序",
      "顺序"
    ],
    rtl: !0
  },
  {
    id: 99,
    title: "字母倒序",
    name: "alphabetical-sorting-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "字母倒序",
      "排序",
      "顺序"
    ],
    rtl: !0
  },
  {
    id: 100,
    title: "救护车",
    name: "ambulance",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 101,
    title: "分析",
    name: "analysis",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "网络分析",
      "数据",
      "趋势",
      "统计"
    ],
    rtl: !0
  },
  {
    id: 102,
    title: "锚点",
    name: "anchor",
    category: "Connect",
    categoryCN: "链接",
    author: "齐奉飞",
    tag: [
      "选中",
      "锚点",
      "可编辑",
      "操作"
    ],
    rtl: !1
  },
  {
    id: 103,
    title: "锚点",
    name: "anchor-one",
    category: "Connect",
    categoryCN: "链接",
    author: "齐奉飞",
    tag: [
      "曲线",
      "贝塞尔",
      "可编辑",
      "锚点"
    ],
    rtl: !1
  },
  {
    id: 104,
    title: "锚轮",
    name: "anchor-round",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "锚点",
      "定位",
      "钢笔工具",
      "曲线",
      "路径"
    ],
    rtl: !1
  },
  {
    id: 105,
    title: "锚方",
    name: "anchor-squre",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "锚点",
      "定位",
      "钢笔工具",
      "曲线",
      "路径"
    ],
    rtl: !1
  },
  {
    id: 106,
    title: "抛锚",
    name: "anchor-two",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "抛锚",
      "航行",
      "出海",
      "锚点"
    ],
    rtl: !1
  },
  {
    id: 107,
    title: "安卓",
    name: "android",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "安卓",
      "谷歌",
      "操作系统",
      "logo"
    ],
    rtl: !1
  },
  {
    id: 109,
    title: "圆嘴",
    name: "anguished-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "圆嘴",
      "表情",
      "目瞪口呆"
    ],
    rtl: !1
  },
  {
    id: 110,
    title: "公告",
    name: "announcement",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 111,
    title: "防腐",
    name: "anti-corrosion",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "防腐剂",
      "保存",
      "防腐科",
      "堆积物"
    ],
    rtl: !0
  },
  {
    id: 112,
    title: "光圈优先",
    name: "aperture-priority",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "相机",
      "光圈",
      "照相"
    ],
    rtl: !1
  },
  {
    id: 113,
    title: "API 接口",
    name: "api",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "接口",
      "开发",
      "程序",
      "研发",
      "API",
      "关联",
      "连接"
    ],
    rtl: !0
  },
  {
    id: 114,
    title: "API 应用",
    name: "api-app",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "API",
      "应用",
      "抽象",
      "AD",
      "平台"
    ],
    rtl: !0
  },
  {
    id: 115,
    title: "应用商店",
    name: "app-store",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "商店",
      "应用",
      "商城",
      "logo",
      "工具"
    ],
    rtl: !0
  },
  {
    id: 116,
    title: "切换",
    name: "app-switch",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "屏幕切换",
      "轮播",
      "幻屏"
    ],
    rtl: !1
  },
  {
    id: 117,
    title: "苹果",
    name: "apple",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "苹果",
      "手机",
      "电脑",
      "设备",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 118,
    title: "苹果",
    name: "apple-one",
    category: "Foods",
    categoryCN: "食品",
    author: "常留留",
    tag: [
      "水果",
      "健康",
      "绿色",
      "无公害食品",
      "苹果"
    ],
    rtl: !0
  },
  {
    id: 119,
    title: "小程序关闭",
    name: "applet-closed",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "小程序关闭"
    ],
    rtl: !1
  },
  {
    id: 121,
    title: "应用效果",
    name: "application-effect",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "效果",
      "圆环",
      "圆形",
      "连接",
      "关联"
    ],
    rtl: !0
  },
  {
    id: 122,
    title: "应用菜单",
    name: "application-menu",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "菜单",
      "应用",
      "更多"
    ],
    rtl: !1
  },
  {
    id: 123,
    title: "应用",
    name: "application-one",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "白明泽",
    tag: [
      "受众分析",
      "抽象",
      "立方体"
    ],
    rtl: !1
  },
  {
    id: 124,
    title: "应用",
    name: "application-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "编辑",
      "其他",
      "应用",
      "分类"
    ],
    rtl: !1
  },
  {
    id: 125,
    title: "定时见面",
    name: "appointment",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 126,
    title: "水瓶座",
    name: "aquarius",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 127,
    title: "凯旋门",
    name: "arc-de-triomphe",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "楼",
      "门",
      "古建筑",
      "景区"
    ],
    rtl: !1
  },
  {
    id: 128,
    title: "射箭",
    name: "archers-bow",
    category: "Sports",
    categoryCN: "体育运动",
    author: "",
    tag: [
      "弓箭"
    ],
    rtl: !0
  },
  {
    id: 129,
    title: "射箭",
    name: "archery",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 130,
    title: "区域图",
    name: "area-map",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "数据",
      "图表",
      "区域",
      "面积图",
      "趋势"
    ],
    rtl: !0
  },
  {
    id: 131,
    title: "竞技场",
    name: "arena",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "竞技场",
      "拳击",
      "拳击台",
      "比赛",
      "擂台",
      "摔跤",
      "体育",
      "运动",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 132,
    title: "白羊座",
    name: "aries",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 133,
    title: "计算",
    name: "arithmetic",
    category: "Charts",
    categoryCN: "数据图表",
    author: "刘心乐",
    tag: [
      "计算",
      "算数",
      "计算器",
      "算法"
    ],
    rtl: !0
  },
  {
    id: 134,
    title: "加减乘除",
    name: "arithmetic-buttons",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "加减乘除",
      "键盘"
    ],
    rtl: !0
  },
  {
    id: 135,
    title: "计算",
    name: "arithmetic-one",
    category: "Charts",
    categoryCN: "数据图表",
    author: "刘心乐",
    tag: [
      "计算器",
      "算数",
      "计算",
      "算法"
    ],
    rtl: !0
  },
  {
    id: 136,
    title: "下-箭头",
    name: "arrow-circle-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向下",
      "箭头",
      "圆圈箭头"
    ],
    rtl: !1
  },
  {
    id: 137,
    title: "左-箭头",
    name: "arrow-circle-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "上一个",
      "箭头",
      "圆圈箭头",
      "左"
    ],
    rtl: !0
  },
  {
    id: 138,
    title: "右-箭头",
    name: "arrow-circle-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "下一个",
      "箭头",
      "圆圈箭头",
      "右"
    ],
    rtl: !0
  },
  {
    id: 139,
    title: "上-箭头",
    name: "arrow-circle-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向上",
      "箭头",
      "圆圈箭头"
    ],
    rtl: !1
  },
  {
    id: 140,
    title: "箭头下",
    name: "arrow-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向下",
      "箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 141,
    title: "方向键",
    name: "arrow-keys",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "方向键",
      "键盘"
    ],
    rtl: !0
  },
  {
    id: 142,
    title: "箭头左",
    name: "arrow-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "向左",
      "上一个",
      "返回",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 143,
    title: "箭头左下",
    name: "arrow-left-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向左下",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 144,
    title: "箭头左上",
    name: "arrow-left-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向左上",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 145,
    title: "箭头右",
    name: "arrow-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向右",
      "箭头",
      "下一个",
      "跳转",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 146,
    title: "箭头右下",
    name: "arrow-right-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向右下",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 147,
    title: "箭头右上",
    name: "arrow-right-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向右上",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 148,
    title: "箭头上",
    name: "arrow-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "向上",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 149,
    title: "流水线",
    name: "assembly-line",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "流水线",
      "流转",
      "流向",
      "串联",
      "链接",
      "连接",
      "路径"
    ],
    rtl: !0
  },
  {
    id: 150,
    title: "关联",
    name: "association",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "交集",
      "关联",
      "联系",
      "A",
      "交叉",
      "编辑"
    ],
    rtl: !1
  },
  {
    id: 151,
    title: "星号",
    name: "asterisk",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "星号",
      "符号",
      "圆形"
    ],
    rtl: !1
  },
  {
    id: 152,
    title: "星号键",
    name: "asterisk-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "星号",
      "按钮"
    ],
    rtl: !1
  },
  {
    id: 153,
    title: "张大嘴",
    name: "astonished-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "张大嘴",
      "表情",
      "惊呆"
    ],
    rtl: !1
  },
  {
    id: 154,
    title: "邮件符号",
    name: "at-sign",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "邮件",
      "圈人",
      "提醒用户",
      "相关人"
    ],
    rtl: !0
  },
  {
    id: 155,
    title: "注意",
    name: "attention",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "提示",
      "注意",
      "警示"
    ],
    rtl: !0
  },
  {
    id: 156,
    title: "音频文件",
    name: "audio-file",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "歌曲",
      "音乐",
      "音频",
      "声音"
    ],
    rtl: !0
  },
  {
    id: 157,
    title: "审核",
    name: "audit",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "印章",
      "评审",
      "审查"
    ],
    rtl: !0
  },
  {
    id: 158,
    title: "自定对焦",
    name: "auto-focus",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "对焦",
      "中心",
      "靶心",
      "旋转"
    ],
    rtl: !0
  },
  {
    id: 159,
    title: "自动高度1",
    name: "auto-height-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "高度自适应",
      "上下自动",
      "固定宽"
    ],
    rtl: !1
  },
  {
    id: 160,
    title: "自动行高",
    name: "auto-line-height",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "文字",
      "高度自适应",
      "固定高"
    ],
    rtl: !1
  },
  {
    id: 161,
    title: "自动列宽",
    name: "auto-line-width",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "文字",
      "宽度自适应",
      "固定宽"
    ],
    rtl: !1
  },
  {
    id: 162,
    title: "自动宽度",
    name: "auto-width",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "宽度自适应",
      "左右自动",
      "双向箭头"
    ],
    rtl: !1
  },
  {
    id: 163,
    title: "自动宽度1",
    name: "auto-width-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "宽度自适应",
      "左右自动",
      "固定高"
    ],
    rtl: !1
  },
  {
    id: 164,
    title: "头像",
    name: "avatar",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "用户",
      "客户",
      "个人中心",
      "账户中心",
      "我的",
      "员工",
      "男"
    ],
    rtl: !0
  },
  {
    id: 165,
    title: "平均值",
    name: "average",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "平均",
      "中等",
      "数值",
      "数据",
      "图表",
      "曲线"
    ],
    rtl: !0
  },
  {
    id: 166,
    title: "航空",
    name: "aviation",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "飞机",
      "飞行",
      "滑行",
      "飞行中"
    ],
    rtl: !0
  },
  {
    id: 167,
    title: "牛油果",
    name: "avocado",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "牛油果",
      "水果",
      "果蔬"
    ],
    rtl: !0
  },
  {
    id: 168,
    title: "牛油果",
    name: "avocado-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "果子",
      "水果",
      "食物",
      "零食"
    ],
    rtl: !1
  },
  {
    id: 169,
    title: "婴儿",
    name: "baby",
    category: "Peoples",
    categoryCN: "账户",
    author: "常留留",
    tag: [
      "育儿",
      "宝宝",
      "小朋友",
      "婴幼儿",
      "儿童票"
    ],
    rtl: !0
  },
  {
    id: 170,
    title: "应用",
    name: "baby-app",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "电脑",
      "应用",
      "小孩"
    ],
    rtl: !0
  },
  {
    id: 171,
    title: "奶瓶",
    name: "baby-bottle",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "白明泽",
    tag: [
      "奶瓶",
      "婴儿",
      "牛奶",
      "儿童"
    ],
    rtl: !0
  },
  {
    id: 172,
    title: "车载座",
    name: "baby-car-seat",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "座椅"
    ],
    rtl: !0
  },
  {
    id: 173,
    title: "脚掌",
    name: "baby-feet",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "脚",
      "脚印"
    ],
    rtl: !0
  },
  {
    id: 174,
    title: "餐具",
    name: "baby-meal",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "餐具",
      "勺子",
      "盘子"
    ],
    rtl: !0
  },
  {
    id: 175,
    title: "摇玩",
    name: "baby-mobile",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "挂钩"
    ],
    rtl: !0
  },
  {
    id: 176,
    title: "儿童1",
    name: "baby-one",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "儿童",
      "宝宝",
      "娃娃"
    ],
    rtl: !1
  },
  {
    id: 177,
    title: "裤子",
    name: "baby-pants",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "裤子",
      "秋裤"
    ],
    rtl: !0
  },
  {
    id: 178,
    title: "背带",
    name: "baby-sling",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "孩子",
      "儿童"
    ],
    rtl: !1
  },
  {
    id: 179,
    title: "品尝",
    name: "baby-taste",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "鬼脸",
      "味道",
      "口味"
    ],
    rtl: !0
  },
  {
    id: 180,
    title: "学士帽",
    name: "bachelor-cap",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "学士",
      "博士帽"
    ],
    rtl: !0
  },
  {
    id: 181,
    title: "博士帽1",
    name: "bachelor-cap-one",
    category: "Clothes",
    categoryCN: "服饰",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 182,
    title: "博士帽2",
    name: "bachelor-cap-two",
    category: "Clothes",
    categoryCN: "服饰",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 183,
    title: "上一步",
    name: "back",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "撤销",
      "返回",
      "上一步",
      "上一层",
      "快退",
      "后退",
      "跳转",
      "向左"
    ],
    rtl: !0
  },
  {
    id: 184,
    title: "返回",
    name: "back-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 185,
    title: "背景颜色",
    name: "background-color",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "背景颜色",
      "油漆桶",
      "粉刷",
      "上色",
      "染料"
    ],
    rtl: !0
  },
  {
    id: 186,
    title: "背包",
    name: "backpack",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "书包",
      "双肩包",
      "运动包",
      "登山包"
    ],
    rtl: !0
  },
  {
    id: 187,
    title: "坏的",
    name: "bad",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "不好",
      "不认可",
      "不肯定"
    ],
    rtl: !0
  },
  {
    id: 188,
    title: "差劲",
    name: "bad-one",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "踩",
      "坏的",
      "不认可"
    ],
    rtl: !0
  },
  {
    id: 189,
    title: "踩",
    name: "bad-two",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "不好",
      "不认可",
      "不肯定"
    ],
    rtl: !0
  },
  {
    id: 190,
    title: "徽章提醒",
    name: "badge",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "抽象",
      "框选",
      "提醒"
    ],
    rtl: !0
  },
  {
    id: 191,
    title: "徽章",
    name: "badge-two",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "徽章"
    ],
    rtl: !0
  },
  {
    id: 192,
    title: "羽毛球",
    name: "badminton",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "羽毛球",
      "球类",
      "球",
      "运动",
      "网球",
      "体育"
    ],
    rtl: !1
  },
  {
    id: 193,
    title: "行李延误",
    name: "baggage-delay",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "行李延误"
    ],
    rtl: !0
  },
  {
    id: 194,
    title: "平衡",
    name: "balance",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "平衡点",
      "支撑点",
      "中心"
    ],
    rtl: !0
  },
  {
    id: 195,
    title: "电子秤",
    name: "balance-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "称",
      "减肥",
      "减脂",
      "平衡",
      "体重",
      "重量",
      "质量",
      "沉重",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 196,
    title: "天平",
    name: "balance-two",
    category: "Safe",
    categoryCN: "安全防护",
    author: "金磊",
    tag: [
      "天平",
      "公平",
      "法律",
      "平衡",
      "衡量",
      "比重"
    ],
    rtl: !1
  },
  {
    id: 197,
    title: "香蕉",
    name: "banana",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "果子",
      "水果",
      "食物"
    ],
    rtl: !0
  },
  {
    id: 198,
    title: "银行",
    name: "bank",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "银行",
      "财务",
      "财富"
    ],
    rtl: !1
  },
  {
    id: 199,
    title: "银行卡",
    name: "bank-card",
    category: "Money",
    categoryCN: "电商财产",
    author: "刘心乐",
    tag: [
      "银行卡",
      "卡片",
      "证件"
    ],
    rtl: !0
  },
  {
    id: 200,
    title: "银行卡",
    name: "bank-card-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "银行",
      "财务",
      "财富"
    ],
    rtl: !0
  },
  {
    id: 201,
    title: "银行卡",
    name: "bank-card-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "银行卡",
      "财富",
      "前",
      "金钱",
      "银行",
      "卡片"
    ],
    rtl: !0
  },
  {
    id: 202,
    title: "银行转账",
    name: "bank-transfer",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "银行",
      "转账"
    ],
    rtl: !0
  },
  {
    id: 203,
    title: "精灵球",
    name: "baokemeng",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "球类",
      "球",
      "弹性球",
      "圆球",
      "彩色球",
      "水晶球",
      "精灵"
    ],
    rtl: !1
  },
  {
    id: 204,
    title: "条形码",
    name: "bar-code",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "条形码",
      "扫码",
      "支付",
      "结账"
    ],
    rtl: !0
  },
  {
    id: 205,
    title: "烧烤",
    name: "barbecue",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "食物",
      "肉",
      "饭菜",
      "夜宵",
      "烤串",
      "烧烤"
    ],
    rtl: !1
  },
  {
    id: 206,
    title: "理发刷",
    name: "barber-brush",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "刷子"
    ],
    rtl: !1
  },
  {
    id: 207,
    title: "理发剪",
    name: "barber-clippers",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "理发"
    ],
    rtl: !1
  },
  {
    id: 208,
    title: "棒球",
    name: "baseball",
    category: "Sports",
    categoryCN: "体育运动",
    author: "常留留",
    tag: [
      "棒球",
      "运动",
      "体育",
      "板球"
    ],
    rtl: !1
  },
  {
    id: 209,
    title: "棒球棍",
    name: "baseball-bat",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 210,
    title: "棒球帽",
    name: "baseball-cap",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "运动帽",
      "帽子",
      "棒球帽",
      "潮牌"
    ],
    rtl: !0
  },
  {
    id: 211,
    title: "篮球",
    name: "basketball",
    category: "Sports",
    categoryCN: "体育运动",
    author: "常留留",
    tag: [
      "追波",
      "dribbble",
      "篮球",
      "设计"
    ],
    rtl: !1
  },
  {
    id: 212,
    title: "篮球服",
    name: "basketball-clothes",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "篮球服",
      "运动",
      "球衣",
      "衣服",
      "号码",
      "背心"
    ],
    rtl: !0
  },
  {
    id: 213,
    title: "篮球架1",
    name: "basketball-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "篮球",
      "篮板",
      "三分球",
      "得分",
      "进球",
      "进攻",
      "命中",
      "投篮",
      "球类",
      "球",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 214,
    title: "篮球架",
    name: "basketball-stand",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "篮球架",
      "运动",
      "篮板"
    ],
    rtl: !1
  },
  {
    id: 215,
    title: "蝙蝠",
    name: "bat",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 216,
    title: "电池充电",
    name: "battery-charge",
    category: "Energy",
    categoryCN: "能源生命",
    author: "齐奉飞",
    tag: [
      "电池",
      "充电"
    ],
    rtl: !0
  },
  {
    id: 217,
    title: "电池没电",
    name: "battery-empty",
    category: "Energy",
    categoryCN: "能源生命",
    author: "齐奉飞",
    tag: [
      "电池",
      "电量空"
    ],
    rtl: !0
  },
  {
    id: 218,
    title: "电池故障",
    name: "battery-failure",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 219,
    title: "电池满电",
    name: "battery-full",
    category: "Energy",
    categoryCN: "能源生命",
    author: "齐奉飞",
    tag: [
      "电池",
      "满电"
    ],
    rtl: !0
  },
  {
    id: 220,
    title: "电池充电",
    name: "battery-storage",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 221,
    title: "电池提示",
    name: "battery-tips",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 222,
    title: "电池运行",
    name: "battery-working",
    category: "Energy",
    categoryCN: "能源生命",
    author: "齐奉飞",
    tag: [
      "电池",
      "电池电量",
      "能量"
    ],
    rtl: !0
  },
  {
    id: 223,
    title: "电池",
    name: "battery-working-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电池",
      "电量",
      "充电",
      "能量",
      "能源"
    ],
    rtl: !0
  },
  {
    id: 224,
    title: "海滩雨伞",
    name: "beach-umbrella",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "海滩雨伞",
      "度假",
      "休息"
    ],
    rtl: !0
  },
  {
    id: 225,
    title: "熊",
    name: "bear",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 226,
    title: "美颜",
    name: "beauty",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "美妆",
      "变美",
      "化妆",
      "美女",
      "女性",
      "女性用户"
    ],
    rtl: !0
  },
  {
    id: 227,
    title: "美容仪",
    name: "beauty-instrument",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "扫码仪",
      "扫描",
      "识别",
      "美容仪"
    ],
    rtl: !1
  },
  {
    id: 228,
    title: "床头柜",
    name: "bedside",
    category: "Life",
    categoryCN: "生活",
    author: "齐奉飞",
    tag: [
      "床头柜",
      "家居",
      "家具",
      "装修"
    ],
    rtl: !1
  },
  {
    id: 229,
    title: "床头柜",
    name: "bedside-two",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "床头柜",
      "家具",
      "家居",
      "台灯"
    ],
    rtl: !1
  },
  {
    id: 230,
    title: "蜜蜂",
    name: "bee",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 231,
    title: "啤酒",
    name: "beer",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "饮料",
      "酒水",
      "酒精",
      "啤酒"
    ],
    rtl: !0
  },
  {
    id: 232,
    title: "啤酒杯",
    name: "beer-mug",
    category: "Foods",
    categoryCN: "食品",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 233,
    title: "behance",
    name: "behance",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "设计",
      "案例",
      "作品",
      "logo",
      "behance"
    ],
    rtl: !0
  },
  {
    id: 234,
    title: "上课铃",
    name: "bell-ring",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "铃声",
      "闹钟",
      "信号",
      "上课"
    ],
    rtl: !0
  },
  {
    id: 235,
    title: "腰带",
    name: "belt",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "皮带",
      "皮具",
      "腰带"
    ],
    rtl: !0
  },
  {
    id: 236,
    title: "奔驰",
    name: "benz",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "奔驰",
      "三叉戟",
      "轮毂",
      "三角",
      "饼状"
    ],
    rtl: !1
  },
  {
    id: 237,
    title: "贝塞尔曲线",
    name: "bezier-curve",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "贝塞尔曲线",
      "编辑",
      "节点"
    ],
    rtl: !1
  },
  {
    id: 238,
    title: "吊带裙",
    name: "bib",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "围巾",
      "就餐裙"
    ],
    rtl: !1
  },
  {
    id: 239,
    title: "大钟表",
    name: "big-clock",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "钟表",
      "时间",
      "表",
      "复古"
    ],
    rtl: !0
  },
  {
    id: 240,
    title: "错误",
    name: "big-x",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "错误",
      "埃克斯",
      "特步",
      "叉"
    ],
    rtl: !0
  },
  {
    id: 241,
    title: "自行车",
    name: "bike",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "自行车",
      "单车",
      "交通",
      "出行",
      "健身",
      "锻炼"
    ],
    rtl: !0
  },
  {
    id: 242,
    title: "法案",
    name: "bill",
    category: "Base",
    categoryCN: "基础",
    author: "史晓彤",
    tag: [
      "标签",
      "书签",
      "文本",
      "法案",
      "订单",
      "合同",
      "文档",
      "规则"
    ],
    rtl: !1
  },
  {
    id: 243,
    title: "鸟",
    name: "bird",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 244,
    title: "生日蛋糕",
    name: "birthday-cake",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "生日蛋糕",
      "奶油蛋糕"
    ],
    rtl: !0
  },
  {
    id: 245,
    title: "比特币",
    name: "bitcoin",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "比特币符号",
      "标志"
    ],
    rtl: !0
  },
  {
    id: 246,
    title: "台球黑八",
    name: "black-eight",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "台球黑八",
      "运动",
      "台球",
      "斯诺克",
      "桌球"
    ],
    rtl: !1
  },
  {
    id: 247,
    title: "黑板",
    name: "blackboard",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 248,
    title: "刀片",
    name: "blade",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "刀"
    ],
    rtl: !1
  },
  {
    id: 249,
    title: "保佑",
    name: "bless",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "手势",
      "祈祷",
      "拜佛",
      "行李"
    ],
    rtl: !0
  },
  {
    id: 250,
    title: "行内公式",
    name: "block",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "公式"
    ],
    rtl: !0
  },
  {
    id: 251,
    title: "俄罗斯方块",
    name: "block-eight",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !1
  },
  {
    id: 252,
    title: "俄罗斯方块",
    name: "block-five",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !0
  },
  {
    id: 253,
    title: "俄罗斯方块",
    name: "block-four",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !1
  },
  {
    id: 254,
    title: "俄罗斯方块",
    name: "block-nine",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !0
  },
  {
    id: 255,
    title: "俄罗斯方块",
    name: "block-one",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !0
  },
  {
    id: 256,
    title: "俄罗斯方块",
    name: "block-seven",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !1
  },
  {
    id: 257,
    title: "俄罗斯方块",
    name: "block-six",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !1
  },
  {
    id: 258,
    title: "俄罗斯方块",
    name: "block-ten",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !0
  },
  {
    id: 259,
    title: "俄罗斯方块",
    name: "block-three",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !1
  },
  {
    id: 260,
    title: "俄罗斯方块",
    name: "block-two",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "俄罗斯方块",
      "拼接",
      "模块",
      "组合",
      "组件",
      "游戏",
      "娱乐",
      "乐高",
      "魔方"
    ],
    rtl: !0
  },
  {
    id: 261,
    title: "区块链",
    name: "blockchain",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "区块",
      "链条",
      "虚拟网"
    ],
    rtl: !1
  },
  {
    id: 262,
    title: "模块箭头",
    name: "blocks-and-arrows",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "模块箭头",
      "分类"
    ],
    rtl: !0
  },
  {
    id: 263,
    title: "开花",
    name: "bloom",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 264,
    title: "花",
    name: "blossom",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 265,
    title: "蓝牙",
    name: "bluetooth",
    category: "Others",
    categoryCN: "其它",
    author: "齐奉飞",
    tag: [
      "蓝牙",
      "设备",
      "无线连接",
      "打开蓝牙"
    ],
    rtl: !0
  },
  {
    id: 266,
    title: "壁炉",
    name: "boiler",
    category: "Life",
    categoryCN: "生活",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 267,
    title: "插头",
    name: "bolt-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电器",
      "电源",
      "充电器",
      "插排",
      "插座"
    ],
    rtl: !0
  },
  {
    id: 268,
    title: "骨头",
    name: "bone",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "骨骼",
      "健康",
      "身体",
      "骨头"
    ],
    rtl: !0
  },
  {
    id: 269,
    title: "书籍",
    name: "book",
    category: "Office",
    categoryCN: "办公文档",
    author: "常留留",
    tag: [
      "书本",
      "笔记",
      "文件",
      "知识",
      "图书",
      "书籍",
      "学习",
      "信息"
    ],
    rtl: !0
  },
  {
    id: 270,
    title: "书籍1",
    name: "book-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "常留留",
    tag: [
      "书本",
      "笔记",
      "文件",
      "知识",
      "图书",
      "书籍",
      "学习",
      "信息"
    ],
    rtl: !0
  },
  {
    id: 271,
    title: "书籍-打开",
    name: "book-open",
    category: "Office",
    categoryCN: "办公文档",
    author: "常留留",
    tag: [
      "书本",
      "笔记",
      "文件",
      "打开书本",
      "知识",
      "图书",
      "书籍",
      "学习",
      "信息"
    ],
    rtl: !1
  },
  {
    id: 272,
    title: "书签",
    name: "bookmark",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "书签",
      "标签",
      "记录",
      "图书",
      "书本"
    ],
    rtl: !0
  },
  {
    id: 273,
    title: "书签",
    name: "bookmark-one",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "书签",
      "便签",
      "标记",
      "标签"
    ],
    rtl: !0
  },
  {
    id: 274,
    title: "书签3",
    name: "bookmark-three",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 275,
    title: "书籍",
    name: "bookshelf",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "知识",
      "书籍",
      "书架",
      "学习",
      "信息"
    ],
    rtl: !0
  },
  {
    id: 276,
    title: "辅助座椅",
    name: "booster-car-seat",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "座椅"
    ],
    rtl: !1
  },
  {
    id: 277,
    title: "摊位",
    name: "booth",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "超市",
      "门店",
      "作坊",
      "摊位"
    ],
    rtl: !1
  },
  {
    id: 278,
    title: "靴子",
    name: "boots",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "皮靴",
      "高筒靴",
      "女士靴子",
      "雨靴"
    ],
    rtl: !0
  },
  {
    id: 279,
    title: "奶瓶",
    name: "bottle",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "育儿",
      "哺育",
      "婴幼儿科"
    ],
    rtl: !0
  },
  {
    id: 280,
    title: "酒瓶",
    name: "bottle-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "酒水",
      "瓶子",
      "容器",
      "塑料瓶",
      "玻璃瓶"
    ],
    rtl: !1
  },
  {
    id: 281,
    title: "瓶装",
    name: "bottle-three",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "酒水",
      "瓶子",
      "容器",
      "塑料瓶",
      "玻璃瓶"
    ],
    rtl: !1
  },
  {
    id: 282,
    title: "瓶子",
    name: "bottle-two",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "酒水",
      "瓶子",
      "容器",
      "塑料瓶",
      "玻璃瓶"
    ],
    rtl: !0
  },
  {
    id: 283,
    title: "底栏",
    name: "bottom-bar",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "下"
    ],
    rtl: !1
  },
  {
    id: 284,
    title: "保留球",
    name: "bottom-bar-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "",
    tag: [
      "球"
    ],
    rtl: !1
  },
  {
    id: 285,
    title: "领结",
    name: "bow",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "饰品",
      "蝴蝶结",
      "领带",
      "发卡"
    ],
    rtl: !1
  },
  {
    id: 286,
    title: "面条",
    name: "bowl",
    category: "Foods",
    categoryCN: "食品",
    author: "齐奉飞",
    tag: [
      "食物",
      "碗",
      "吃的",
      "美食",
      "碗",
      "热饭"
    ],
    rtl: !0
  },
  {
    id: 287,
    title: "碗",
    name: "bowl-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "容器",
      "饭菜",
      "餐饮",
      "餐具",
      "热汤"
    ],
    rtl: !1
  },
  {
    id: 288,
    title: "保龄球",
    name: "bowling",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "保龄球",
      "球类",
      "球",
      "圆球",
      "硬球",
      "体育"
    ],
    rtl: !1
  },
  {
    id: 289,
    title: "盒子",
    name: "box",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "箱子",
      "盒子",
      "纸盒",
      "容器",
      "办公用品",
      "收纳"
    ],
    rtl: !1
  },
  {
    id: 290,
    title: "拳击",
    name: "boxing",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "拳击",
      "手套",
      "护具",
      "套",
      "训练",
      "打击",
      "拳头",
      "力量",
      "对打",
      "攻击",
      "跆拳道",
      "摔跤",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 291,
    title: "拳击1",
    name: "boxing-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "拳击",
      "手套",
      "护具",
      "套",
      "训练",
      "打击",
      "拳头",
      "力量",
      "对打",
      "攻击",
      "跆拳道",
      "摔跤",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 292,
    title: "男孩",
    name: "boy",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "人",
      "性别",
      "男"
    ],
    rtl: !1
  },
  {
    id: 293,
    title: "男孩1",
    name: "boy-one",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "人",
      "性别",
      "男"
    ],
    rtl: !1
  },
  {
    id: 294,
    title: "男儿童车",
    name: "boy-stroller",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "童车"
    ],
    rtl: !0
  },
  {
    id: 295,
    title: "男孩2",
    name: "boy-two",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "人",
      "性别",
      "男"
    ],
    rtl: !1
  },
  {
    id: 296,
    title: "大脑",
    name: "brain",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "脑部",
      "头部",
      "脑科",
      "思考",
      "智慧",
      "医疗"
    ],
    rtl: !0
  },
  {
    id: 297,
    title: "刹车片",
    name: "brake-pads",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "刹车片",
      "汽车"
    ],
    rtl: !0
  },
  {
    id: 298,
    title: "分支",
    name: "branch",
    category: "Connect",
    categoryCN: "链接",
    author: "齐奉飞",
    tag: [
      "分支",
      "程序",
      "管理",
      "Git"
    ],
    rtl: !0
  },
  {
    id: 299,
    title: "分支",
    name: "branch-one",
    category: "Connect",
    categoryCN: "链接",
    author: "张蔓",
    tag: [
      "分支",
      "排列",
      "结构",
      "整理",
      "树状图",
      "散发"
    ],
    rtl: !1
  },
  {
    id: 300,
    title: "分支",
    name: "branch-two",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "分支",
      "代码管理",
      "分布式"
    ],
    rtl: !0
  },
  {
    id: 301,
    title: "桥",
    name: "brdige-three",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "大桥",
      "桥梁",
      "连接"
    ],
    rtl: !1
  },
  {
    id: 302,
    title: "面包",
    name: "bread",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "面食",
      "食物",
      "零食",
      "早餐",
      "面包"
    ],
    rtl: !0
  },
  {
    id: 303,
    title: "面包机",
    name: "bread-machine",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "面包机",
      "面包",
      "电器",
      "早餐",
      "烤面包"
    ],
    rtl: !0
  },
  {
    id: 304,
    title: "面包",
    name: "bread-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "面包",
      "早餐",
      "甜品",
      "下午茶"
    ],
    rtl: !0
  },
  {
    id: 305,
    title: "吸奶器",
    name: "breast-pump",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "杯子",
      "容器"
    ],
    rtl: !0
  },
  {
    id: 306,
    title: "桥",
    name: "bridge-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "大桥",
      "石拱桥",
      "连接"
    ],
    rtl: !1
  },
  {
    id: 307,
    title: "桥",
    name: "bridge-two",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "大桥",
      "立交桥",
      "连接",
      "天桥",
      "玻璃桥"
    ],
    rtl: !1
  },
  {
    id: 308,
    title: "公文包",
    name: "briefcase",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "办公包",
      "皮包",
      "手提包"
    ],
    rtl: !1
  },
  {
    id: 309,
    title: "亮度",
    name: "brightness",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "显示",
      "显示屏",
      "明暗",
      "太阳",
      "亮度"
    ],
    rtl: !0
  },
  {
    id: 310,
    title: "上层",
    name: "bring-forward",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "上层",
      "顶层",
      "向上"
    ],
    rtl: !1
  },
  {
    id: 311,
    title: "最上层",
    name: "bring-to-front",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "最上层",
      "图层",
      "层级",
      "顶层"
    ],
    rtl: !0
  },
  {
    id: 312,
    title: "移到前面",
    name: "bring-to-front-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "移到前面",
      "置于顶层",
      "路径查找器",
      "移动"
    ],
    rtl: !0
  },
  {
    id: 313,
    title: "广播",
    name: "broadcast",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "投射",
      "发射",
      "辐射",
      "分享",
      "信号",
      "传递"
    ],
    rtl: !0
  },
  {
    id: 314,
    title: "广播",
    name: "broadcast-one",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "多节点传输",
      "传输",
      "数据",
      "通信"
    ],
    rtl: !0
  },
  {
    id: 315,
    title: "收音机",
    name: "broadcast-radio",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "收音机",
      "声音",
      "播放器",
      "复古电器"
    ],
    rtl: !0
  },
  {
    id: 316,
    title: "浏览器",
    name: "browser",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "窗口",
      "浏览器",
      "网页",
      "页面",
      "pc端"
    ],
    rtl: !0
  },
  {
    id: 317,
    title: "浏览器",
    name: "browser-chrome",
    category: "Brand",
    categoryCN: "品牌",
    author: "杨威",
    tag: [
      "浏览器",
      "Chrome",
      "logo",
      "飞机"
    ],
    rtl: !0
  },
  {
    id: 318,
    title: "浏览器-safari",
    name: "browser-safari",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "苹果浏览器",
      "Safari",
      "指针",
      "方向",
      "罗盘"
    ],
    rtl: !0
  },
  {
    id: 319,
    title: "气泡图",
    name: "bubble-chart",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "气泡",
      "数据",
      "图表",
      "蒸发"
    ],
    rtl: !0
  },
  {
    id: 320,
    title: "程序问题",
    name: "bug",
    category: "Safe",
    categoryCN: "安全防护",
    author: "齐奉飞",
    tag: [
      "甲壳虫",
      "问题",
      "损坏",
      "事故",
      "BUG",
      "问题",
      "程序问题",
      "报错"
    ],
    rtl: !1
  },
  {
    id: 321,
    title: "建筑",
    name: "building-four",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "建筑",
      "楼房",
      "建筑",
      "购物",
      "商城",
      "城市"
    ],
    rtl: !0
  },
  {
    id: 322,
    title: "建筑",
    name: "building-one",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "建筑",
      "楼房",
      "高楼",
      "办公楼",
      "商城",
      "城市"
    ],
    rtl: !0
  },
  {
    id: 323,
    title: "建筑",
    name: "building-three",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "建筑",
      "楼房",
      "家",
      "房子"
    ],
    rtl: !0
  },
  {
    id: 324,
    title: "建筑",
    name: "building-two",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "建筑",
      "楼房",
      "高楼",
      "办公楼",
      "商城",
      "城市"
    ],
    rtl: !0
  },
  {
    id: 325,
    title: "子弹图",
    name: "bullet-map",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 326,
    title: "大巴",
    name: "bus",
    category: "Hardware",
    categoryCN: "硬件",
    author: "白明泽",
    tag: [
      "大巴",
      "旅游",
      "汽车",
      "出行",
      "交通"
    ],
    rtl: !1
  },
  {
    id: 327,
    title: "公交",
    name: "bus-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 328,
    title: "公交车",
    name: "bus-two",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "公交车",
      "运输",
      "交通",
      "汽车",
      "大巴"
    ],
    rtl: !1
  },
  {
    id: 329,
    title: "蝴蝶",
    name: "butterfly",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 330,
    title: "购买",
    name: "buy",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "购物",
      "采购",
      "手提包",
      "购物袋",
      "袋子"
    ],
    rtl: !1
  },
  {
    id: 331,
    title: "字节设计",
    name: "bydesign",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "Bytedesign",
      "Bydesign",
      "字节跳动",
      "设计中台",
      "design",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 332,
    title: "拜拜",
    name: "bye",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "再见",
      "再会",
      "离开",
      "分别",
      "bye"
    ],
    rtl: !0
  },
  {
    id: 333,
    title: "字节跳动",
    name: "bytedance",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "头条",
      "音符",
      "字节跳动",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 334,
    title: "字节跳动小程序",
    name: "bytedance-applets",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "小程序",
      "字节跳动"
    ],
    rtl: !1
  },
  {
    id: 335,
    title: "应用程序",
    name: "bytedance-mini-app",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 336,
    title: "缆车",
    name: "cable-car",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "缆车",
      "电缆车",
      "观光车"
    ],
    rtl: !0
  },
  {
    id: 337,
    title: "仙人掌",
    name: "cactus",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 338,
    title: "蛋糕",
    name: "cake",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "生日蛋糕",
      "生日",
      "蛋糕",
      "糕点",
      "甜品",
      "蜡烛"
    ],
    rtl: !1
  },
  {
    id: 339,
    title: "蛋糕",
    name: "cake-five",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "甜点",
      "糕点",
      "甜食",
      "甜品",
      "食物",
      "点心",
      "下午茶",
      "小蛋糕"
    ],
    rtl: !0
  },
  {
    id: 340,
    title: "蛋糕",
    name: "cake-four",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "甜点",
      "糕点",
      "甜食",
      "甜品",
      "食物",
      "点心",
      "下午茶",
      "小蛋糕"
    ],
    rtl: !1
  },
  {
    id: 341,
    title: "蛋糕",
    name: "cake-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "甜点",
      "糕点",
      "甜食",
      "甜品",
      "食物",
      "点心",
      "下午茶",
      "小蛋糕"
    ],
    rtl: !0
  },
  {
    id: 342,
    title: "蛋糕",
    name: "cake-three",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "甜点",
      "糕点",
      "甜食",
      "甜品",
      "食物",
      "点心",
      "下午茶",
      "小蛋糕",
      "生日蛋糕"
    ],
    rtl: !0
  },
  {
    id: 343,
    title: "蛋糕",
    name: "cake-two",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "甜点",
      "糕点",
      "甜食",
      "甜品",
      "食物",
      "点心",
      "下午茶",
      "小蛋糕"
    ],
    rtl: !0
  },
  {
    id: 344,
    title: "计算器",
    name: "calculator",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "计算器",
      "计算",
      "硬件",
      "算数",
      "数学",
      "算力"
    ],
    rtl: !0
  },
  {
    id: 345,
    title: "计算器",
    name: "calculator-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "计算",
      "智能",
      "算数",
      "统计",
      "结果",
      "答案",
      "数字",
      "加",
      "减",
      "乘",
      "除",
      "工具"
    ],
    rtl: !1
  },
  {
    id: 346,
    title: "日历",
    name: "calendar",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "日期",
      "时间",
      "日历",
      "排期"
    ],
    rtl: !1
  },
  {
    id: 347,
    title: "日历",
    name: "calendar-dot",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "日历",
      "日期",
      "时间",
      "期限",
      "长期"
    ],
    rtl: !1
  },
  {
    id: 348,
    title: "日历",
    name: "calendar-thirty",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "日历",
      "日期",
      "时间",
      "期限",
      "长期"
    ],
    rtl: !0
  },
  {
    id: 349,
    title: "日历",
    name: "calendar-thirty-two",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "日历",
      "日期",
      "时间",
      "期限",
      "长期"
    ],
    rtl: !0
  },
  {
    id: 350,
    title: "日历",
    name: "calendar-three",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "日历",
      "日期",
      "时间",
      "期限",
      "长期"
    ],
    rtl: !1
  },
  {
    id: 351,
    title: "相机",
    name: "camera",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "拍照",
      "相机",
      "照片",
      "图像",
      "摄影"
    ],
    rtl: !1
  },
  {
    id: 352,
    title: "摄像头",
    name: "camera-five",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍",
      "电影",
      "放映"
    ],
    rtl: !1
  },
  {
    id: 353,
    title: "监控录像",
    name: "camera-four",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍",
      "电影",
      "放映"
    ],
    rtl: !1
  },
  {
    id: 354,
    title: "摄像头",
    name: "camera-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍"
    ],
    rtl: !1
  },
  {
    id: 355,
    title: "智能摄像头",
    name: "camera-three",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍"
    ],
    rtl: !0
  },
  {
    id: 356,
    title: "相机",
    name: "camera-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "照相机",
      "傻瓜机",
      "摄像机",
      "摄影",
      "记录",
      "记载",
      "画面",
      "抓拍",
      "偷拍"
    ],
    rtl: !0
  },
  {
    id: 357,
    title: "野营",
    name: "camp",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "宿营",
      "宿营地",
      "帐篷",
      "户外"
    ],
    rtl: !0
  },
  {
    id: 358,
    title: "巨蟹座",
    name: "cancer",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 359,
    title: "糖果",
    name: "candy",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "糖",
      "甜点",
      "下午茶",
      "零食"
    ],
    rtl: !0
  },
  {
    id: 360,
    title: "水果罐头",
    name: "canned-fruit",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "水果罐头",
      "罐头",
      "瓶子"
    ],
    rtl: !0
  },
  {
    id: 361,
    title: "摩羯座",
    name: "capricornus",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 362,
    title: "汽车",
    name: "car",
    category: "Hardware",
    categoryCN: "硬件",
    author: "白明泽",
    tag: [
      "交通",
      "汽车",
      "小轿车",
      "出行"
    ],
    rtl: !1
  },
  {
    id: 363,
    title: "汽车电瓶",
    name: "car-battery",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "汽车电瓶",
      "发电"
    ],
    rtl: !0
  },
  {
    id: 364,
    title: "双卡片",
    name: "card-two",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "双卡片",
      "立体",
      "层级",
      "前后",
      "关系"
    ],
    rtl: !0
  },
  {
    id: 365,
    title: "心电",
    name: "cardioelectric",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "电波",
      "心电图",
      "检测",
      "心跳",
      "波动"
    ],
    rtl: !0
  },
  {
    id: 367,
    title: "轮播视频",
    name: "carousel-video",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "轮播视频",
      "多个视频",
      "播放",
      "叠加"
    ],
    rtl: !0
  },
  {
    id: 368,
    title: "胡萝卜",
    name: "carrot",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "食物",
      "菜类",
      "水果",
      "青菜"
    ],
    rtl: !0
  },
  {
    id: 369,
    title: "投射屏幕",
    name: "cast-screen",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "投射",
      "投屏",
      "无线投屏"
    ],
    rtl: !0
  },
  {
    id: 370,
    title: "城堡",
    name: "castle",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "城门",
      "堡垒",
      "游乐场",
      "城堡",
      "宫殿"
    ],
    rtl: !1
  },
  {
    id: 371,
    title: "猫",
    name: "cat",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 372,
    title: "分类管理",
    name: "category-management",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "分类",
      "管理",
      "整理",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 373,
    title: "牛",
    name: "cattle",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 374,
    title: "生肖牛",
    name: "cattle-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 375,
    title: "报错",
    name: "caution",
    category: "Safe",
    categoryCN: "安全防护",
    author: "常留留",
    tag: [
      "错误",
      "警示",
      "提示",
      "报警"
    ],
    rtl: !1
  },
  {
    id: 376,
    title: "巨量创意",
    name: "cc",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "创意中心",
      "商业化品牌",
      "创意广告",
      "oceanengine"
    ],
    rtl: !0
  },
  {
    id: 377,
    title: "光盘",
    name: "cd",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "刻盘",
      "CD",
      "影片",
      "光碟"
    ],
    rtl: !0
  },
  {
    id: 378,
    title: "欧洲市场",
    name: "ce-marking",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "欧洲市场",
      "标志"
    ],
    rtl: !0
  },
  {
    id: 379,
    title: "细胞",
    name: "cell",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "䏭",
      "生命体",
      "生命",
      "生物"
    ],
    rtl: !0
  },
  {
    id: 380,
    title: "居中对齐",
    name: "center-alignment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "居中",
      "对齐方式",
      "排版方式"
    ],
    rtl: !0
  },
  {
    id: 381,
    title: "证书",
    name: "certificate",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "证书",
      "安全",
      "级别"
    ],
    rtl: !0
  },
  {
    id: 382,
    title: "鸳鸯锅",
    name: "chafing-dish",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "鸳鸯锅",
      "火锅",
      "烹饪",
      "涮菜"
    ],
    rtl: !0
  },
  {
    id: 383,
    title: "火锅",
    name: "chafing-dish-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "火锅",
      "铜锅",
      "涮锅",
      "烹饪",
      "锅"
    ],
    rtl: !1
  },
  {
    id: 384,
    title: "座椅",
    name: "chair",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "椅子"
    ],
    rtl: !1
  },
  {
    id: 385,
    title: "座椅1",
    name: "chair-one",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "椅子"
    ],
    rtl: !1
  },
  {
    id: 386,
    title: "更改",
    name: "change",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "修改",
      "改变",
      "调整",
      "数据",
      "线条"
    ],
    rtl: !0
  },
  {
    id: 387,
    title: "按修改日期排序",
    name: "change-date-sort",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "修改",
      "排序"
    ],
    rtl: !0
  },
  {
    id: 388,
    title: "充电宝",
    name: "charging-treasure",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电池",
      "电量",
      "充电",
      "能量",
      "能源",
      "充电器",
      "移动电源"
    ],
    rtl: !0
  },
  {
    id: 389,
    title: "关系图",
    name: "chart-graph",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "结构图",
      "关系图",
      "层级"
    ],
    rtl: !1
  },
  {
    id: 390,
    title: "条形图",
    name: "chart-histogram",
    category: "Charts",
    categoryCN: "数据图表",
    author: "齐奉飞",
    tag: [
      "图表",
      "数据",
      "柱形图",
      "趋势",
      "财经"
    ],
    rtl: !0
  },
  {
    id: 391,
    title: "条形图",
    name: "chart-histogram-one",
    category: "Charts",
    categoryCN: "数据图表",
    author: "齐奉飞",
    tag: [
      "图表",
      "数据",
      "柱形图",
      "趋势",
      "财经"
    ],
    rtl: !0
  },
  {
    id: 392,
    title: "条形图",
    name: "chart-histogram-two",
    category: "Charts",
    categoryCN: "数据图表",
    author: "齐奉飞",
    tag: [
      "柱形图",
      "图表",
      "趋势",
      "数据"
    ],
    rtl: !0
  },
  {
    id: 393,
    title: "折线图",
    name: "chart-line",
    category: "Charts",
    categoryCN: "数据图表",
    author: "齐奉飞",
    tag: [
      "面积图",
      "曲线图",
      "折线图",
      "趋势"
    ],
    rtl: !0
  },
  {
    id: 394,
    title: "折线面积图",
    name: "chart-line-area",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "面积图",
      "曲线图",
      "折线图"
    ],
    rtl: !0
  },
  {
    id: 395,
    title: "饼图",
    name: "chart-pie",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "饼图",
      "占比",
      "比例",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 396,
    title: "数据图",
    name: "chart-pie-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "圆形图",
      "饼状图",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 397,
    title: "占比图",
    name: "chart-proportion",
    category: "Charts",
    categoryCN: "数据图表",
    author: "齐奉飞",
    tag: [
      "饼图",
      "占比",
      "比例",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 398,
    title: "环形图",
    name: "chart-ring",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "环形图",
      "环状图",
      "靶子",
      "瞄准"
    ],
    rtl: !0
  },
  {
    id: 399,
    title: "散点图",
    name: "chart-scatter",
    category: "Charts",
    categoryCN: "数据图表",
    author: "齐奉飞",
    tag: [
      "散点图",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 400,
    title: "K线图",
    name: "chart-stock",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "K线图",
      "股票图",
      "股票"
    ],
    rtl: !1
  },
  {
    id: 401,
    title: "校验",
    name: "check",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "勾选",
      "对勾",
      "正确",
      "成功",
      "完成",
      "选中"
    ],
    rtl: !0
  },
  {
    id: 402,
    title: "对勾",
    name: "check-correct",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "对勾",
      "正确",
      "复选",
      "多选",
      "选中"
    ],
    rtl: !0
  },
  {
    id: 403,
    title: "插入",
    name: "check-in",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "值机",
      "检票"
    ],
    rtl: !0
  },
  {
    id: 404,
    title: "校验",
    name: "check-one",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "勾选",
      "对勾",
      "正确",
      "成功",
      "完成",
      "选中"
    ],
    rtl: !0
  },
  {
    id: 405,
    title: "校验-小",
    name: "check-small",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "勾选",
      "对勾",
      "正确",
      "成功",
      "选中",
      "完成"
    ],
    rtl: !0
  },
  {
    id: 406,
    title: "多选框",
    name: "checkbox",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 407,
    title: "棋盘",
    name: "checkerboard",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "棋盘",
      "下棋",
      "围棋"
    ],
    rtl: !0
  },
  {
    id: 408,
    title: "检查列表",
    name: "checklist",
    category: "Components",
    categoryCN: "界面组件",
    author: "金磊",
    tag: [
      "核查",
      "列表",
      "校验",
      "纠正",
      "检查"
    ],
    rtl: !0
  },
  {
    id: 409,
    title: "奶酪",
    name: "cheese",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "奶酪",
      "甜点",
      "蛋糕",
      "芝士奶酪"
    ],
    rtl: !0
  },
  {
    id: 410,
    title: "厨师帽",
    name: "chef-hat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "厨师",
      "帽子",
      "面包师"
    ],
    rtl: !0
  },
  {
    id: 411,
    title: "厨师帽子",
    name: "chef-hat-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "帽子",
      "厨师帽"
    ],
    rtl: !0
  },
  {
    id: 412,
    title: "樱桃",
    name: "cherry",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水果",
      "桃子"
    ],
    rtl: !0
  },
  {
    id: 413,
    title: "西洋棋",
    name: "chess",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "象棋",
      "国际象棋",
      "西洋象棋",
      "棋子",
      "人马",
      "兵",
      "卒",
      "战争",
      "战场",
      "对战",
      "比赛",
      "智力",
      "战术",
      "策略"
    ],
    rtl: !1
  },
  {
    id: 414,
    title: "国际象棋",
    name: "chess-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "象棋",
      "国际象棋",
      "西洋象棋",
      "棋子",
      "人马",
      "兵",
      "卒",
      "战争",
      "战场",
      "对战",
      "比赛",
      "智力",
      "战术",
      "策略"
    ],
    rtl: !1
  },
  {
    id: 415,
    title: "胸部",
    name: "chest",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "胸腔",
      "肺部",
      "器官",
      "医疗"
    ],
    rtl: !1
  },
  {
    id: 416,
    title: "鸡肉",
    name: "chicken",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "肉食",
      "鸡肉",
      "鸡",
      "烤鸡",
      "烧鸡"
    ],
    rtl: !0
  },
  {
    id: 417,
    title: "鸡腿",
    name: "chicken-leg",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "鸡肉",
      "鸡腿",
      "美食",
      "餐饮"
    ],
    rtl: !0
  },
  {
    id: 418,
    title: "生肖鸡",
    name: "chicken-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 419,
    title: "吃奶嘴",
    name: "child-with-pacifier",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "吃奶"
    ],
    rtl: !0
  },
  {
    id: 420,
    title: "儿童帽",
    name: "children-cap",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "可爱",
      "耳朵帽",
      "卡通"
    ],
    rtl: !1
  },
  {
    id: 421,
    title: "儿童金字塔",
    name: "children-pyramid",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "玩具",
      "模型"
    ],
    rtl: !1
  },
  {
    id: 422,
    title: "辣椒",
    name: "chili",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "蔬菜",
      "青椒"
    ],
    rtl: !0
  },
  {
    id: 423,
    title: "烟筒",
    name: "chimney",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "烟火",
      "排烟",
      "工厂",
      "烟筒"
    ],
    rtl: !0
  },
  {
    id: 424,
    title: "中文",
    name: "chinese",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "中",
      "汉语",
      "汉字",
      "语文"
    ],
    rtl: !1
  },
  {
    id: 425,
    title: "中文1",
    name: "chinese-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 426,
    title: "中国楼阁",
    name: "chinese-pavilion",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "亭子",
      "古建筑",
      "寺庙",
      "楼阁",
      "景区"
    ],
    rtl: !1
  },
  {
    id: 427,
    title: "芯片",
    name: "chip",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "芯片",
      "科技",
      "晶片"
    ],
    rtl: !0
  },
  {
    id: 428,
    title: "切菜板",
    name: "chopping-board",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "切菜板",
      "案板",
      "菜板",
      "砧板",
      "切菜"
    ],
    rtl: !0
  },
  {
    id: 429,
    title: "筷子叉子",
    name: "chopsticks-fork",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "筷子叉子",
      "餐饮",
      "吃饭",
      "工具"
    ],
    rtl: !0
  },
  {
    id: 430,
    title: "圣诞树",
    name: "christmas-tree",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "圣诞",
      "树",
      "节日",
      "假期",
      "温暖",
      "过节"
    ],
    rtl: !1
  },
  {
    id: 431,
    title: "松树",
    name: "christmas-tree-one",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 432,
    title: "教堂",
    name: "church-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "基督教",
      "宗教",
      "宫殿",
      "楼房",
      "教堂",
      "建筑"
    ],
    rtl: !1
  },
  {
    id: 433,
    title: "教堂",
    name: "church-two",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "基督教",
      "宗教",
      "楼房",
      "教堂",
      "建筑"
    ],
    rtl: !1
  },
  {
    id: 434,
    title: "圆形双下箭头",
    name: "circle-double-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "双箭头",
      "向下",
      "圆圈箭头"
    ],
    rtl: !1
  },
  {
    id: 435,
    title: "圆形双左箭头",
    name: "circle-double-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "双箭头",
      "向左",
      "圆圈箭头"
    ],
    rtl: !0
  },
  {
    id: 436,
    title: "圆形双右箭头",
    name: "circle-double-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "双箭头",
      "向右",
      "圆圈箭头"
    ],
    rtl: !0
  },
  {
    id: 437,
    title: "圆形双上箭头",
    name: "circle-double-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "双箭头",
      "向上",
      "圆圈箭头"
    ],
    rtl: !1
  },
  {
    id: 438,
    title: "圆圈",
    name: "circle-five-line",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆圈",
      "连接",
      "抽象",
      "锚点"
    ],
    rtl: !1
  },
  {
    id: 439,
    title: "圆圈",
    name: "circle-four",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆圈",
      "抽象",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 440,
    title: "圆圈",
    name: "circle-four-line",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆圈",
      "连接",
      "抽象",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 441,
    title: "圈舍",
    name: "circle-house",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "房子",
      "屋子",
      "阁楼",
      "圈舍"
    ],
    rtl: !1
  },
  {
    id: 442,
    title: "圆形左下",
    name: "circle-left-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "圆圈箭头",
      "左下方向"
    ],
    rtl: !0
  },
  {
    id: 443,
    title: "圆形左上",
    name: "circle-left-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "圆圈箭头",
      "左上方向"
    ],
    rtl: !0
  },
  {
    id: 444,
    title: "圆形右下",
    name: "circle-right-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "圆圈箭头",
      "右下方向"
    ],
    rtl: !0
  },
  {
    id: 445,
    title: "圆形右上",
    name: "circle-right-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "圆圈箭头",
      "右上方向"
    ],
    rtl: !0
  },
  {
    id: 446,
    title: "圆圈",
    name: "circle-three",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆圈",
      "抽象",
      "叠加",
      "关联"
    ],
    rtl: !1
  },
  {
    id: 447,
    title: "圆圈",
    name: "circle-two-line",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆圈",
      "连接",
      "抽象",
      "锚点",
      "缩放"
    ],
    rtl: !0
  },
  {
    id: 448,
    title: "圆形和三角",
    name: "circles-and-triangles",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆形和三角",
      "形状拼接",
      "组合"
    ],
    rtl: !1
  },
  {
    id: 449,
    title: "圆圈",
    name: "circles-seven",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆圈",
      "抽象",
      "六个圆"
    ],
    rtl: !1
  },
  {
    id: 450,
    title: "圆形连接",
    name: "circular-connection",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆形连接",
      "渠道",
      "关联"
    ],
    rtl: !1
  },
  {
    id: 451,
    title: "马戏团",
    name: "circus",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "蒙古包",
      "营地",
      "驻扎",
      "露营"
    ],
    rtl: !1
  },
  {
    id: 452,
    title: "城市",
    name: "city",
    category: "Build",
    categoryCN: "建筑",
    author: "齐奉飞",
    tag: [
      "城市",
      "建筑",
      "楼房",
      "办公楼",
      "小区"
    ],
    rtl: !0
  },
  {
    id: 453,
    title: "城门",
    name: "city-gate",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "楼房",
      "景区",
      "古建筑"
    ],
    rtl: !1
  },
  {
    id: 454,
    title: "城市",
    name: "city-one",
    category: "Build",
    categoryCN: "建筑",
    author: "齐奉飞",
    tag: [
      "城市",
      "建筑",
      "楼房",
      "办公楼",
      "小区"
    ],
    rtl: !0
  },
  {
    id: 455,
    title: "鼓掌",
    name: "clap",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "拍手",
      "打击",
      "掌声"
    ],
    rtl: !0
  },
  {
    id: 456,
    title: "课堂",
    name: "classroom",
    category: "Peoples",
    categoryCN: "账户",
    author: "常留留",
    tag: [
      "听课",
      "教学",
      "学习",
      "用户",
      "个人中心"
    ],
    rtl: !1
  },
  {
    id: 457,
    title: "清除",
    name: "clear",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "删除",
      "清除",
      "擦除",
      "扫把",
      "清理",
      "环保",
      "卫生"
    ],
    rtl: !1
  },
  {
    id: 458,
    title: "清除格式",
    name: "clear-format",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "清除",
      "恢复",
      "字体格式",
      "橡皮擦"
    ],
    rtl: !0
  },
  {
    id: 459,
    title: "点击",
    name: "click",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "点击",
      "选中",
      "鼠标",
      "操作",
      "执行"
    ],
    rtl: !0
  },
  {
    id: 460,
    title: "点击",
    name: "click-tap",
    category: "Hands",
    categoryCN: "手势动作",
    author: "齐奉飞",
    tag: [
      "小手",
      "点击率",
      "点击效果",
      "按键",
      "触发"
    ],
    rtl: !0
  },
  {
    id: 461,
    title: "点击",
    name: "click-tap-two",
    category: "Hands",
    categoryCN: "手势动作",
    author: "金磊",
    tag: [
      "点击",
      "按下",
      "点按",
      "触摸",
      "操作",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 462,
    title: "点击缩起",
    name: "click-to-fold",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "张蔓",
    tag: [
      "点击缩起",
      "缩小",
      "收起",
      "聚集"
    ],
    rtl: !0
  },
  {
    id: 463,
    title: "剪切板",
    name: "clipboard",
    category: "Office",
    categoryCN: "办公文档",
    author: "常留留",
    tag: [
      "画板",
      "黏贴板",
      "公告板",
      "电池",
      "没电了",
      "记录",
      "账单",
      "条例"
    ],
    rtl: !1
  },
  {
    id: 464,
    title: "钟楼",
    name: "clock-tower",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "大笨钟",
      "楼房",
      "大厦",
      "建筑"
    ],
    rtl: !0
  },
  {
    id: 465,
    title: "关闭",
    name: "close",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "删除",
      "清除",
      "错误",
      "关闭",
      "取消"
    ],
    rtl: !1
  },
  {
    id: 466,
    title: "关闭",
    name: "close-one",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "删除",
      "清除",
      "错误",
      "关闭",
      "取消"
    ],
    rtl: !1
  },
  {
    id: 467,
    title: "关闭提醒",
    name: "close-remind",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "提示",
      "消息",
      "警示",
      "警钟",
      "铃铛",
      "关闭",
      "禁止提醒"
    ],
    rtl: !0
  },
  {
    id: 468,
    title: "关闭-小",
    name: "close-small",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "删除",
      "清除",
      "错误",
      "关闭",
      "取消"
    ],
    rtl: !1
  },
  {
    id: 469,
    title: "关闭无线网络",
    name: "close-wifi",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "Wi-Fi",
      "无线网",
      "网络",
      "信号",
      "关闭"
    ],
    rtl: !0
  },
  {
    id: 470,
    title: "内裤",
    name: "clothes-briefs",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "裤子",
      "内裤",
      "女士内裤"
    ],
    rtl: !1
  },
  {
    id: 471,
    title: "开衫",
    name: "clothes-cardigan",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "开衫",
      "服装",
      "上衣"
    ],
    rtl: !1
  },
  {
    id: 472,
    title: "圆领衫",
    name: "clothes-crew-neck",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "开衫",
      "服装",
      "秋衣"
    ],
    rtl: !1
  },
  {
    id: 473,
    title: "纸尿裤",
    name: "clothes-diapers",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "婴儿",
      "小孩",
      "内裤"
    ],
    rtl: !1
  },
  {
    id: 474,
    title: "手套",
    name: "clothes-gloves",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "手套",
      "五指手套"
    ],
    rtl: !0
  },
  {
    id: 475,
    title: "手套",
    name: "clothes-gloves-two",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "手套",
      "工具",
      "滑雪用品"
    ],
    rtl: !0
  },
  {
    id: 476,
    title: "卫衣",
    name: "clothes-hoodie",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "上衣"
    ],
    rtl: !0
  },
  {
    id: 477,
    title: "裤子",
    name: "clothes-pants",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "裤子"
    ],
    rtl: !1
  },
  {
    id: 478,
    title: "短裤",
    name: "clothes-pants-short",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "裤子",
      "短裤"
    ],
    rtl: !1
  },
  {
    id: 479,
    title: "运动裤",
    name: "clothes-pants-sweat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "裤子",
      "运动"
    ],
    rtl: !1
  },
  {
    id: 480,
    title: "短裤",
    name: "clothes-short-sleeve",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "短袖"
    ],
    rtl: !1
  },
  {
    id: 481,
    title: "滑冰鞋",
    name: "clothes-skates",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "服饰",
      "装备",
      "滑冰",
      "鞋子",
      "靴子"
    ],
    rtl: !0
  },
  {
    id: 482,
    title: "西装",
    name: "clothes-suit",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "正式",
      "外套"
    ],
    rtl: !0
  },
  {
    id: 483,
    title: "帽衫",
    name: "clothes-sweater",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "正式",
      "外套"
    ],
    rtl: !1
  },
  {
    id: 484,
    title: "高领毛衣",
    name: "clothes-turtleneck",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "正式"
    ],
    rtl: !1
  },
  {
    id: 485,
    title: "风衣",
    name: "clothes-windbreaker",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "衣服",
      "服装",
      "服饰",
      "正式",
      "上衣"
    ],
    rtl: !0
  },
  {
    id: 486,
    title: "云存储",
    name: "cloud-storage",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "储存",
      "云盘",
      "cloud",
      "store"
    ],
    rtl: !0
  },
  {
    id: 488,
    title: "夜间多云",
    name: "cloudy-night",
    category: "Weather",
    categoryCN: "天气",
    author: "",
    tag: [
      "云"
    ],
    rtl: !0
  },
  {
    id: 489,
    title: "线索",
    name: "clue",
    category: "Connect",
    categoryCN: "链接",
    author: "齐奉飞",
    tag: [
      "线索池",
      "连接",
      "相连"
    ],
    rtl: !0
  },
  {
    id: 490,
    title: "衣架",
    name: "coat-hanger",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "衣服撑",
      "衣服架",
      "晾衣架"
    ],
    rtl: !0
  },
  {
    id: 491,
    title: "鸡尾酒",
    name: "cocktail",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "鸡尾酒",
      "浪漫",
      "酒杯",
      "红酒",
      "调制酒",
      "气泡酒"
    ],
    rtl: !0
  },
  {
    id: 492,
    title: "椰子树",
    name: "coconut-tree",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "椰子树",
      "海边",
      "沙滩",
      "棕榈树"
    ],
    rtl: !0
  },
  {
    id: 493,
    title: "代码",
    name: "code",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "代码序列",
      "字段"
    ],
    rtl: !0
  },
  {
    id: 494,
    title: "大括号",
    name: "code-brackets",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "代码括号",
      "代码块",
      "大括号",
      "开发"
    ],
    rtl: !0
  },
  {
    id: 495,
    title: "计算机代码",
    name: "code-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 496,
    title: "下载代码",
    name: "code-download",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "下载",
      "代码"
    ],
    rtl: !0
  },
  {
    id: 497,
    title: "笔记本电脑代码",
    name: "code-laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 498,
    title: "代码1",
    name: "code-one",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 499,
    title: "咖啡机",
    name: "coffee-machine",
    category: "Life",
    categoryCN: "生活",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 500,
    title: "可乐",
    name: "cola",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "可乐",
      "饮料",
      "水",
      "听装可乐",
      "可口可乐"
    ],
    rtl: !0
  },
  {
    id: 501,
    title: "收起文本域",
    name: "collapse-text-input",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "缩小",
      "收起",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 502,
    title: "计算机收藏",
    name: "collect-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 503,
    title: "笔记本电脑收集",
    name: "collect-laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 504,
    title: "图片收集",
    name: "collect-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 505,
    title: "收藏文件",
    name: "collection-files",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "收藏",
      "星星",
      "评级",
      "级别"
    ],
    rtl: !0
  },
  {
    id: 506,
    title: "收藏音乐",
    name: "collection-records",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "收藏",
      "喜欢"
    ],
    rtl: !0
  },
  {
    id: 508,
    title: "颜色滤镜",
    name: "color-filter",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "颜色滤镜",
      "滤镜",
      "过滤",
      "效果",
      "特效"
    ],
    rtl: !1
  },
  {
    id: 509,
    title: "列",
    name: "column",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "列表",
      "表格",
      "左右布局"
    ],
    rtl: !1
  },
  {
    id: 510,
    title: "梳子",
    name: "comb",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 511,
    title: "招引",
    name: "come",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "引诱",
      "勾引",
      "引诱"
    ],
    rtl: !0
  },
  {
    id: 512,
    title: "命令键",
    name: "command",
    category: "Connect",
    categoryCN: "链接",
    author: "常留留",
    tag: [
      "命令建",
      "符号",
      "键盘",
      "按键"
    ],
    rtl: !1
  },
  {
    id: 513,
    title: "评论",
    name: "comment",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "刘心乐",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知"
    ],
    rtl: !0
  },
  {
    id: 514,
    title: "评论",
    name: "comment-one",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "刘心乐",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知"
    ],
    rtl: !0
  },
  {
    id: 515,
    title: "评论",
    name: "comments",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "信息",
      "聊天",
      "通知",
      "社交",
      "沟通",
      "新消息",
      "合作洽谈",
      "评论区"
    ],
    rtl: !0
  },
  {
    id: 516,
    title: "商品",
    name: "commodity",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "货品",
      "购物"
    ],
    rtl: !1
  },
  {
    id: 517,
    title: "沟通",
    name: "communication",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "信息",
      "聊天",
      "通知",
      "社交",
      "沟通",
      "新消息",
      "合作洽谈",
      "评论"
    ],
    rtl: !0
  },
  {
    id: 518,
    title: "通勤包",
    name: "commuter-bag",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "挎包",
      "手提包",
      "小包",
      "布袋",
      "女士包"
    ],
    rtl: !1
  },
  {
    id: 519,
    title: "圆规",
    name: "compass",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "金磊",
    tag: [
      "圆规",
      "角落",
      "角度",
      "测量"
    ],
    rtl: !1
  },
  {
    id: 520,
    title: "指南针",
    name: "compass-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "指南针",
      "方向",
      "位置"
    ],
    rtl: !0
  },
  {
    id: 521,
    title: "组件",
    name: "components",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "组件",
      "组合",
      "图形"
    ],
    rtl: !1
  },
  {
    id: 522,
    title: "成份",
    name: "composition",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "实验",
      "元素",
      "组成部分",
      "组成元素",
      "试管"
    ],
    rtl: !0
  },
  {
    id: 523,
    title: "压缩",
    name: "compression",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "挤压",
      "文章",
      "文档",
      "小说",
      "合同",
      "规则",
      "详情"
    ],
    rtl: !0
  },
  {
    id: 524,
    title: "电脑",
    name: "computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "显示屏",
      "PC电脑",
      "电视"
    ],
    rtl: !1
  },
  {
    id: 525,
    title: "计算机",
    name: "computer-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "计算",
      "算数",
      "加",
      "减",
      "乘",
      "除"
    ],
    rtl: !0
  },
  {
    id: 526,
    title: "理念共享",
    name: "concept-sharing",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "共享",
      "创意共享",
      "想法"
    ],
    rtl: !0
  },
  {
    id: 527,
    title: "关注",
    name: "concern",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "关系",
      "重视",
      "喜欢",
      "爱",
      "心动"
    ],
    rtl: !1
  },
  {
    id: 528,
    title: "护发素",
    name: "conditioner",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "洗护",
      "日化",
      "面霜",
      "护发素"
    ],
    rtl: !0
  },
  {
    id: 529,
    title: "圆锥",
    name: "cone",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆锥",
      "测量",
      "锐度"
    ],
    rtl: !1
  },
  {
    id: 530,
    title: "坐标系",
    name: "cones",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "坐标系",
      "三角",
      "立体"
    ],
    rtl: !1
  },
  {
    id: 531,
    title: "配置",
    name: "config",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "配置",
      "设置",
      "工具",
      "螺丝",
      "螺母",
      "齿轮"
    ],
    rtl: !1
  },
  {
    id: 532,
    title: "抿嘴闭眼",
    name: "confounded-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "抿嘴闭眼",
      "表情",
      "害怕"
    ],
    rtl: !1
  },
  {
    id: 533,
    title: "别嘴",
    name: "confused-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "别嘴",
      "表情",
      "耍酷"
    ],
    rtl: !0
  },
  {
    id: 534,
    title: "链接",
    name: "connect",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "链接",
      "分享",
      "连接",
      "拓扑图",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 535,
    title: "连接地址1",
    name: "connect-address-one",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "锚点",
      "定位",
      "定点",
      "鱼钩"
    ],
    rtl: !1
  },
  {
    id: 536,
    title: "连接地址2",
    name: "connect-address-two",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "锚点",
      "定位",
      "定点",
      "鱼钩"
    ],
    rtl: !1
  },
  {
    id: 537,
    title: "连接",
    name: "connection",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "连接",
      "箭头",
      "线段",
      "链接",
      "结合"
    ],
    rtl: !0
  },
  {
    id: 538,
    title: "连接箭头",
    name: "connection-arrow",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "连接",
      "箭头",
      "相连",
      "流程"
    ],
    rtl: !0
  },
  {
    id: 539,
    title: "分组",
    name: "connection-box",
    category: "Connect",
    categoryCN: "链接",
    author: "常留留",
    tag: [
      "分组",
      "关联",
      "联系",
      "服务器",
      "技术",
      "管理"
    ],
    rtl: !0
  },
  {
    id: 540,
    title: "连接点",
    name: "connection-point",
    category: "Connect",
    categoryCN: "链接",
    author: "刘心乐",
    tag: [
      "网络",
      "连接点",
      "节点",
      "网络邻居",
      "渠道"
    ],
    rtl: !1
  },
  {
    id: 541,
    title: "两点连接",
    name: "connection-point-two",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "两点连接",
      "链接",
      "相连"
    ],
    rtl: !0
  },
  {
    id: 542,
    title: "托运",
    name: "consignment",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "托运",
      "运输",
      "运送",
      "行李托运",
      "传送"
    ],
    rtl: !1
  },
  {
    id: 543,
    title: "消费",
    name: "consume",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "总消耗",
      "花钱",
      "花费",
      "钱包"
    ],
    rtl: !1
  },
  {
    id: 544,
    title: "对比度",
    name: "contrast",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "对比度",
      "参数",
      "摄像",
      "牌照",
      "配置"
    ],
    rtl: !0
  },
  {
    id: 545,
    title: "对比",
    name: "contrast-view",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "对比",
      "对比查看",
      "查看",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 546,
    title: "对比",
    name: "contrast-view-circle",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "对比",
      "对比度",
      "调整",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 547,
    title: "控制器",
    name: "control",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "控制设备",
      "调控器",
      "调节器",
      "控制台"
    ],
    rtl: !0
  },
  {
    id: 548,
    title: "汇聚网关",
    name: "converging-gateway",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "汇聚",
      "菱形",
      "抽象",
      "几何"
    ],
    rtl: !1
  },
  {
    id: 549,
    title: "煮饭",
    name: "cook",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "煮饭",
      "锅",
      "奶锅",
      "锅具",
      "炒锅",
      "汤锅"
    ],
    rtl: !0
  },
  {
    id: 550,
    title: "烹饪",
    name: "cooking",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "做饭",
      "厨师",
      "加工",
      "餐饮",
      "餐具"
    ],
    rtl: !0
  },
  {
    id: 551,
    title: "煮锅",
    name: "cooking-pot",
    category: "Life",
    categoryCN: "生活",
    author: "白明泽",
    tag: [
      "煮熟",
      "烹饪",
      "厨房",
      "做饭",
      "美食",
      "餐饮"
    ],
    rtl: !1
  },
  {
    id: 552,
    title: "酷的",
    name: "cool",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "喜欢",
      "指向",
      "手型",
      "手指"
    ],
    rtl: !0
  },
  {
    id: 553,
    title: "合作握手",
    name: "cooperative-handshake",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "合作握手",
      "爱心"
    ],
    rtl: !0
  },
  {
    id: 554,
    title: "坐标系统",
    name: "coordinate-system",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "坐标系统",
      "3D",
      "立体",
      "坐标"
    ],
    rtl: !1
  },
  {
    id: 555,
    title: "复制",
    name: "copy",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "复制",
      "拷贝",
      "克隆",
      "叠加",
      "重叠"
    ],
    rtl: !0
  },
  {
    id: 556,
    title: "复制链接",
    name: "copy-link",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "复制链接",
      "地址",
      "绑定",
      "关联"
    ],
    rtl: !0
  },
  {
    id: 557,
    title: "复制",
    name: "copy-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "文章",
      "文档",
      "小说",
      "合同",
      "规则",
      "详情"
    ],
    rtl: !0
  },
  {
    id: 558,
    title: "版权符号",
    name: "copyright",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "版权符号",
      "标志"
    ],
    rtl: !0
  },
  {
    id: 559,
    title: "向下左角",
    name: "corner-down-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向左",
      "左边",
      "方向",
      "箭头",
      "拐角",
      "撤回"
    ],
    rtl: !0
  },
  {
    id: 560,
    title: "向下右角",
    name: "corner-down-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向右",
      "右边",
      "方向",
      "箭头",
      "拐角",
      "下"
    ],
    rtl: !0
  },
  {
    id: 561,
    title: "左角向下",
    name: "corner-left-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向下",
      "左边",
      "方向",
      "箭头",
      "拐角",
      "下"
    ],
    rtl: !0
  },
  {
    id: 562,
    title: "左角向上",
    name: "corner-left-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向上",
      "左边",
      "方向",
      "箭头",
      "拐角",
      "上"
    ],
    rtl: !0
  },
  {
    id: 563,
    title: "右角向下",
    name: "corner-right-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向下",
      "右边",
      "下降",
      "方向",
      "箭头",
      "拐角",
      "下"
    ],
    rtl: !0
  },
  {
    id: 564,
    title: "右角向上",
    name: "corner-right-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向上",
      "右边",
      "上升",
      "方向",
      "箭头",
      "拐角",
      "上"
    ],
    rtl: !0
  },
  {
    id: 565,
    title: "向上左角",
    name: "corner-up-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向左",
      "左角",
      "左上角",
      "左拐",
      "左侧",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 566,
    title: "向上右角",
    name: "corner-up-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向右",
      "右边",
      "方向",
      "箭头",
      "拐角",
      "上"
    ],
    rtl: !0
  },
  {
    id: 567,
    title: "冠状病毒",
    name: "coronavirus",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "冠状病毒",
      "细菌",
      "生病"
    ],
    rtl: !1
  },
  {
    id: 568,
    title: "正确的",
    name: "correct",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "正确的",
      "对勾",
      "成功"
    ],
    rtl: !0
  },
  {
    id: 569,
    title: "化妆刷",
    name: "cosmetic-brush",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "笔"
    ],
    rtl: !0
  },
  {
    id: 570,
    title: "优惠券",
    name: "coupon",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "优惠",
      "卡券",
      "促销",
      "电商",
      "钱",
      "折扣"
    ],
    rtl: !1
  },
  {
    id: 571,
    title: "篮球场",
    name: "court",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "运动",
      "篮球",
      "场地"
    ],
    rtl: !1
  },
  {
    id: 572,
    title: "芯片",
    name: "cpu",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "芯片",
      "CPU",
      "GPU",
      "算法",
      "算力",
      "电路",
      "运算"
    ],
    rtl: !1
  },
  {
    id: 573,
    title: "螃蟹",
    name: "crab",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "螃蟹",
      "海鲜",
      "生鲜",
      "梭子蟹"
    ],
    rtl: !1
  },
  {
    id: 574,
    title: "按创建日期排序",
    name: "creation-date-sort",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "创建",
      "日期",
      "排序",
      "添加",
      "图表",
      "数据"
    ],
    rtl: !0
  },
  {
    id: 575,
    title: "创意",
    name: "creative",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "想法",
      "创新",
      "五星",
      "徽章"
    ],
    rtl: !1
  },
  {
    id: 576,
    title: "信用卡",
    name: "credit",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "卡片",
      "银行",
      "财务",
      "财富"
    ],
    rtl: !0
  },
  {
    id: 577,
    title: "摇篮",
    name: "crib",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "儿童床"
    ],
    rtl: !1
  },
  {
    id: 578,
    title: "牛角面包",
    name: "croissant",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "牛角包",
      "面包",
      "甜点",
      "零食",
      "下午茶"
    ],
    rtl: !0
  },
  {
    id: 579,
    title: "交叉环",
    name: "cross-ring",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "齐奉飞",
    tag: [
      "交叉",
      "环形",
      "关系"
    ],
    rtl: !1
  },
  {
    id: 580,
    title: "魔比斯环",
    name: "cross-ring-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "魔比斯环",
      "循环",
      "双环",
      "关联"
    ],
    rtl: !0
  },
  {
    id: 581,
    title: "红十字",
    name: "cross-society",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 582,
    title: "皇冠",
    name: "crown",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "皇冠",
      "王冠",
      "皇上",
      "国王",
      "第一",
      "权利"
    ],
    rtl: !1
  },
  {
    id: 583,
    title: "皇冠帽",
    name: "crown-three",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "皇冠",
      "权利",
      "皇帝"
    ],
    rtl: !1
  },
  {
    id: 584,
    title: "皇冠",
    name: "crown-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "皇冠",
      "王后",
      "国王",
      "徽章",
      "荣耀",
      "等级"
    ],
    rtl: !1
  },
  {
    id: 585,
    title: "航海",
    name: "cruise",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "邮轮",
      "轮船",
      "航海",
      "轮渡"
    ],
    rtl: !1
  },
  {
    id: 586,
    title: "孩子哭泣",
    name: "crying-baby",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "哭泣",
      "表情",
      "难过"
    ],
    rtl: !0
  },
  {
    id: 587,
    title: "魔方",
    name: "cube",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "魔方",
      "六边形",
      "立方体",
      "立体"
    ],
    rtl: !1
  },
  {
    id: 588,
    title: "魔方",
    name: "cube-five",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "魔方",
      "六边形",
      "立方体"
    ],
    rtl: !1
  },
  {
    id: 589,
    title: "魔方",
    name: "cube-four",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "魔方",
      "六边形",
      "立方体",
      "零件"
    ],
    rtl: !1
  },
  {
    id: 590,
    title: "魔方",
    name: "cube-three",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "魔方",
      "六边形",
      "立方体",
      "零件"
    ],
    rtl: !1
  },
  {
    id: 591,
    title: "魔方",
    name: "cube-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "魔方",
      "六边形",
      "三角拼接"
    ],
    rtl: !1
  },
  {
    id: 592,
    title: "咖啡杯",
    name: "cup",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "水",
      "水杯",
      "被子",
      "饮料",
      "咖啡",
      "热饮",
      "喝"
    ],
    rtl: !0
  },
  {
    id: 593,
    title: "茶杯4",
    name: "cup-four",
    category: "Foods",
    categoryCN: "食品",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 594,
    title: "杯子",
    name: "cup-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "杯子",
      "水杯",
      "喝水"
    ],
    rtl: !1
  },
  {
    id: 595,
    title: "冰壶",
    name: "curling",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "奥运会",
      "冰壶",
      "滑冰",
      "比赛",
      "运动",
      "团队项目",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 596,
    title: "货币流通",
    name: "currency",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "银行",
      "财务",
      "财富"
    ],
    rtl: !0
  },
  {
    id: 597,
    title: "曲线调整",
    name: "curve-adjustment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "曲线调整",
      "调整",
      "曲线",
      "动效"
    ],
    rtl: !0
  },
  {
    id: 598,
    title: "小六客服",
    name: "customer",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "客服",
      "聊天",
      "沟通",
      "oceanengine",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 599,
    title: "裁切",
    name: "cutting",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "裁剪",
      "剪切",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 600,
    title: "裁切",
    name: "cutting-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "裁剪",
      "剪切",
      "编辑",
      "剪刀"
    ],
    rtl: !1
  },
  {
    id: 601,
    title: "试管",
    name: "cuvette",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "金磊",
    tag: [
      "试管",
      "试验",
      "容器",
      "化学",
      "科学",
      "容器"
    ],
    rtl: !1
  },
  {
    id: 602,
    title: "循环",
    name: "cycle",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "连续",
      "持续",
      "轮回",
      "圆圈",
      "循环",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 603,
    title: "循环箭头",
    name: "cycle-arrow",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "循环箭头",
      "环绕",
      "连接"
    ],
    rtl: !1
  },
  {
    id: 604,
    title: "循环移动",
    name: "cycle-movement",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "循环",
      "移动",
      "收集",
      "集合",
      "汇集"
    ],
    rtl: !0
  },
  {
    id: 605,
    title: "循环",
    name: "cycle-one",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "循环",
      "可利用",
      "周转",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 606,
    title: "圆柱",
    name: "cylinder",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆柱",
      "容器"
    ],
    rtl: !1
  },
  {
    id: 607,
    title: "故障图",
    name: "damage-map",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "图片",
      "故障",
      "断裂",
      "破坏"
    ],
    rtl: !0
  },
  {
    id: 608,
    title: "夜晚模式",
    name: "dark-mode",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "模式",
      "亮度",
      "对比度",
      "黑暗"
    ],
    rtl: !0
  },
  {
    id: 609,
    title: "仪表盘",
    name: "dashboard",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "仪表盘",
      "仪表",
      "指针",
      "数据",
      "转盘"
    ],
    rtl: !0
  },
  {
    id: 610,
    title: "仪表盘",
    name: "dashboard-car",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "仪表盘",
      "汽车",
      "指针",
      "表盘"
    ],
    rtl: !1
  },
  {
    id: 611,
    title: "仪表盘",
    name: "dashboard-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "仪表",
      "速度",
      "数值",
      "速度",
      "计数",
      "表盘",
      "统计",
      "温度",
      "转动"
    ],
    rtl: !0
  },
  {
    id: 612,
    title: "仪表盘",
    name: "dashboard-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "仪表盘",
      "仪表",
      "看板"
    ],
    rtl: !1
  },
  {
    id: 613,
    title: "数据库",
    name: "data",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据库",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 615,
    title: "数据到达",
    name: "data-arrival",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "任务完成",
      "结束",
      "成功"
    ],
    rtl: !0
  },
  {
    id: 616,
    title: "数据显示",
    name: "data-display",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据显示",
      "数据同步",
      "资源共享"
    ],
    rtl: !0
  },
  {
    id: 617,
    title: "数据文件",
    name: "data-file",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "数据",
      "指标",
      "增长",
      "趋势"
    ],
    rtl: !0
  },
  {
    id: 618,
    title: "数据",
    name: "data-four",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据库",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 619,
    title: "数据锁定",
    name: "data-lock",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据锁定",
      "资源库"
    ],
    rtl: !0
  },
  {
    id: 620,
    title: "数据空",
    name: "data-null",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据为空",
      "空数据",
      "无数据",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 621,
    title: "数据",
    name: "data-one",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据库",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 622,
    title: "数据看板",
    name: "data-screen",
    category: "Charts",
    categoryCN: "数据图表",
    author: "史晓彤",
    tag: [
      "数据看板",
      "代码",
      "编程",
      "符号",
      "电脑"
    ],
    rtl: !0
  },
  {
    id: 623,
    title: "数据服务器",
    name: "data-server",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "数据服务器"
    ],
    rtl: !0
  },
  {
    id: 624,
    title: "数据表",
    name: "data-sheet",
    category: "Charts",
    categoryCN: "数据图表",
    author: "史晓彤",
    tag: [
      "数据",
      "图表",
      "屏幕",
      "数据表"
    ],
    rtl: !0
  },
  {
    id: 625,
    title: "数据切换",
    name: "data-switching",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据切换",
      "资源互换",
      "数据关联"
    ],
    rtl: !0
  },
  {
    id: 626,
    title: "数据",
    name: "data-three",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据库",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 627,
    title: "数据",
    name: "data-two",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据库",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 628,
    title: "数据用户",
    name: "data-user",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据用户",
      "数据共享"
    ],
    rtl: !0
  },
  {
    id: 629,
    title: "数据库警示",
    name: "database-alert",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库警示",
      "资源库"
    ],
    rtl: !0
  },
  {
    id: 630,
    title: "数据库代码",
    name: "database-code",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库代码"
    ],
    rtl: !0
  },
  {
    id: 631,
    title: "数据库配置",
    name: "database-config",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库配置"
    ],
    rtl: !0
  },
  {
    id: 632,
    title: "数据库下载",
    name: "database-download",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库下载",
      "资源下载"
    ],
    rtl: !0
  },
  {
    id: 633,
    title: "数据库进入",
    name: "database-enter",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库进入",
      "数据移出"
    ],
    rtl: !0
  },
  {
    id: 634,
    title: "数据库错误",
    name: "database-fail",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库错误",
      "资源错误"
    ],
    rtl: !0
  },
  {
    id: 635,
    title: "数据库第一",
    name: "database-first",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库第一"
    ],
    rtl: !0
  },
  {
    id: 636,
    title: "数据库禁止",
    name: "database-forbid",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库禁止",
      "保密",
      "资源封锁"
    ],
    rtl: !0
  },
  {
    id: 637,
    title: "数据库锁定",
    name: "database-lock",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库锁定",
      "资源库"
    ],
    rtl: !0
  },
  {
    id: 638,
    title: "数据库网络",
    name: "database-network",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库网络",
      "资源库"
    ],
    rtl: !0
  },
  {
    id: 639,
    title: "数据库网络节点",
    name: "database-network-point",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库网络节点"
    ],
    rtl: !1
  },
  {
    id: 640,
    title: "数据库节点",
    name: "database-point",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库节点"
    ],
    rtl: !0
  },
  {
    id: 641,
    title: "数据库定位",
    name: "database-position",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库定位"
    ],
    rtl: !0
  },
  {
    id: 642,
    title: "数据库电源",
    name: "database-power",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库电源",
      "资源库"
    ],
    rtl: !0
  },
  {
    id: 643,
    title: "数据库占比",
    name: "database-proportion",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库占比"
    ],
    rtl: !0
  },
  {
    id: 644,
    title: "数据库搜索",
    name: "database-search",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库搜索",
      "资源查找"
    ],
    rtl: !0
  },
  {
    id: 645,
    title: "数据库设置",
    name: "database-setting",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库设置",
      "资源库"
    ],
    rtl: !0
  },
  {
    id: 646,
    title: "数据库成功",
    name: "database-success",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库成功",
      "保存成功"
    ],
    rtl: !0
  },
  {
    id: 647,
    title: "数据库同步",
    name: "database-sync",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库同步",
      "数据运转"
    ],
    rtl: !0
  },
  {
    id: 648,
    title: "数据库时间",
    name: "database-time",
    category: "Datas",
    categoryCN: "数据",
    author: "金磊",
    tag: [
      "数据库时间",
      "资源库"
    ],
    rtl: !0
  },
  {
    id: 649,
    title: "回传数据",
    name: "date-comes-back",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "数据",
      "指标",
      "增长",
      "趋势",
      "回传",
      "传送",
      "连接"
    ],
    rtl: !0
  },
  {
    id: 650,
    title: "按截止日期排序",
    name: "deadline-sort",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "截止",
      "关闭",
      "排序",
      "截止日期"
    ],
    rtl: !0
  },
  {
    id: 651,
    title: "死亡之星",
    name: "death-star",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "星星",
      "倒映",
      "球体",
      "风景"
    ],
    rtl: !0
  },
  {
    id: 652,
    title: "链接",
    name: "deeplink",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "深度链接",
      "连接",
      "联系"
    ],
    rtl: !0
  },
  {
    id: 653,
    title: "鹿",
    name: "deer",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 654,
    title: "学位帽",
    name: "degree-hat",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "今日学堂",
      "学位",
      "学习",
      "帽子"
    ],
    rtl: !0
  },
  {
    id: 655,
    title: "删除",
    name: "delete",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "删除",
      "垃圾桶",
      "勒色桶",
      "回收"
    ],
    rtl: !1
  },
  {
    id: 656,
    title: "删除5",
    name: "delete-five",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 657,
    title: "删除4",
    name: "delete-four",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 658,
    title: "删除键",
    name: "delete-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "删除",
      "去除"
    ],
    rtl: !0
  },
  {
    id: 659,
    title: "删除模式",
    name: "delete-mode",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "模式",
      "亮度",
      "对比度",
      "减少"
    ],
    rtl: !0
  },
  {
    id: 660,
    title: "删除",
    name: "delete-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "删除",
      "垃圾桶",
      "勒色桶",
      "回收"
    ],
    rtl: !1
  },
  {
    id: 661,
    title: "删除主题",
    name: "delete-themes",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "删除",
      "清理",
      "移至废纸篓",
      "垃圾桶"
    ],
    rtl: !0
  },
  {
    id: 662,
    title: "删除",
    name: "delete-three",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "删除",
      "关闭",
      "错误",
      "乘号"
    ],
    rtl: !0
  },
  {
    id: 663,
    title: "删除",
    name: "delete-two",
    category: "Base",
    categoryCN: "基础",
    author: "金磊",
    tag: [
      "删除",
      "清除",
      "消除",
      "关闭"
    ],
    rtl: !0
  },
  {
    id: 664,
    title: "交货",
    name: "delivery",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "服务",
      "传递",
      "交付",
      "拱手相让"
    ],
    rtl: !0
  },
  {
    id: 665,
    title: "存款",
    name: "deposit",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "银行",
      "财务",
      "财富"
    ],
    rtl: !1
  },
  {
    id: 666,
    title: "下降",
    name: "descend",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "下降",
      "降落"
    ],
    rtl: !0
  },
  {
    id: 667,
    title: "台灯",
    name: "desk-lamp",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "灯具",
      "电灯"
    ],
    rtl: !0
  },
  {
    id: 668,
    title: "台灯1",
    name: "desk-lamp-one",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 669,
    title: "检测",
    name: "detection",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "检查",
      "测试",
      "实验",
      "测量"
    ],
    rtl: !0
  },
  {
    id: 670,
    title: "设备",
    name: "devices",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "设备",
      "手机",
      "平板电脑",
      "移动端",
      "网络",
      "屏幕"
    ],
    rtl: !0
  },
  {
    id: 671,
    title: "钻石",
    name: "diamond",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "钻石",
      "钻戒",
      "戒指",
      "结婚"
    ],
    rtl: !1
  },
  {
    id: 672,
    title: "钻石项链",
    name: "diamond-necklace",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "项链",
      "挂件",
      "宝石",
      "首饰"
    ],
    rtl: !1
  },
  {
    id: 674,
    title: "钻戒",
    name: "diamond-ring",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "钻石",
      "戒指",
      "首饰"
    ],
    rtl: !1
  },
  {
    id: 675,
    title: "菱形3",
    name: "diamond-three",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 676,
    title: "菱形2",
    name: "diamond-two",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 677,
    title: "钻石",
    name: "diamonds",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "钻",
      "宝石",
      "sketch"
    ],
    rtl: !1
  },
  {
    id: 678,
    title: "电子签",
    name: "dianziqian",
    category: "Brand",
    categoryCN: "品牌",
    author: "",
    tag: [
      "logo",
      "电子签",
      "签合同",
      "合作"
    ],
    rtl: !0
  },
  {
    id: 679,
    title: "尿不湿",
    name: "diapers-one",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "内裤",
      "短裤",
      "尿不湿"
    ],
    rtl: !1
  },
  {
    id: 680,
    title: "差异集",
    name: "difference-set",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "交集",
      "路径查找器",
      "排除"
    ],
    rtl: !0
  },
  {
    id: 681,
    title: "电子表",
    name: "digital-watches",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "计时器",
      "手表",
      "时间",
      "智能手表",
      "机械表"
    ],
    rtl: !0
  },
  {
    id: 682,
    title: "方向",
    name: "direction",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "游戏",
      "方向",
      "左右",
      "手柄"
    ],
    rtl: !1
  },
  {
    id: 683,
    title: "方向校准",
    name: "direction-adjustment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "方向校准",
      "方向箭头"
    ],
    rtl: !1
  },
  {
    id: 684,
    title: "方向校准",
    name: "direction-adjustment-three",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "方向校准",
      "方向箭头"
    ],
    rtl: !1
  },
  {
    id: 685,
    title: "方向校准",
    name: "direction-adjustment-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "方向校准",
      "方向箭头"
    ],
    rtl: !1
  },
  {
    id: 686,
    title: "网页禁用",
    name: "disabaled-web",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 687,
    title: "计算机禁用",
    name: "disabled-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 688,
    title: "笔记本电脑禁用",
    name: "disabled-laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 689,
    title: "图片禁用",
    name: "disabled-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 690,
    title: "失落",
    name: "disappointed-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "失落",
      "表情",
      "伤心",
      "沮丧"
    ],
    rtl: !1
  },
  {
    id: 691,
    title: "发现指数",
    name: "discovery-index",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "阴线",
      "阳线",
      "股市图",
      "指数"
    ],
    rtl: !1
  },
  {
    id: 692,
    title: "磁盘",
    name: "disk",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "保存",
      "存储",
      "储存",
      "硬盘",
      "磁盘"
    ],
    rtl: !0
  },
  {
    id: 693,
    title: "U盘1",
    name: "disk-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !1
  },
  {
    id: 694,
    title: "U盘2",
    name: "disk-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 695,
    title: "不喜欢",
    name: "dislike",
    category: "Base",
    categoryCN: "基础",
    author: "金磊",
    tag: [
      "喜欢",
      "讨厌",
      "不喜欢",
      "心碎",
      "裂痕"
    ],
    rtl: !0
  },
  {
    id: 696,
    title: "不喜欢",
    name: "dislike-two",
    category: "Base",
    categoryCN: "基础",
    author: "金磊",
    tag: [
      "讨厌",
      "不喜欢",
      "爱心"
    ],
    rtl: !1
  },
  {
    id: 697,
    title: "显示屏",
    name: "display",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "显示屏",
      "白板",
      "展示",
      "投屏"
    ],
    rtl: !0
  },
  {
    id: 698,
    title: "扭曲",
    name: "distortion",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "扭曲",
      "不规则",
      "网格"
    ],
    rtl: !0
  },
  {
    id: 699,
    title: "闭眼生气",
    name: "distraught-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "闭眼生气",
      "表情",
      "害怕"
    ],
    rtl: !1
  },
  {
    id: 700,
    title: "水平间距分布",
    name: "distribute-horizontal-spacing",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "水平间距分布",
      "横向居中对齐"
    ],
    rtl: !1
  },
  {
    id: 701,
    title: "水平分布",
    name: "distribute-horizontally",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "水平分布",
      "间距"
    ],
    rtl: !1
  },
  {
    id: 702,
    title: "垂直间距分布",
    name: "distribute-vertical-spacing",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "垂直间距分布",
      "纵向居中对齐"
    ],
    rtl: !1
  },
  {
    id: 703,
    title: "垂直分布",
    name: "distribute-vertically",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "垂直分布",
      "间距"
    ],
    rtl: !0
  },
  {
    id: 704,
    title: "分界线",
    name: "dividing-line",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "分割线",
      "界线",
      "马路",
      "道路"
    ],
    rtl: !1
  },
  {
    id: 705,
    title: "分割线",
    name: "dividing-line-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "分割线",
      "区分",
      "线段"
    ],
    rtl: !1
  },
  {
    id: 706,
    title: "潜水",
    name: "diving",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "潜水",
      "游泳镜",
      "游泳"
    ],
    rtl: !0
  },
  {
    id: 707,
    title: "潜水瓶",
    name: "diving-bottle",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "潜水",
      "氧气瓶",
      "补给",
      "装备",
      "瓶子",
      "救生",
      "医疗",
      "换气",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 708,
    title: "潜水装",
    name: "diving-suit",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "潜水",
      "服装",
      "装备",
      "潜水服",
      "衣服",
      "呼吸",
      "换气",
      "眼罩",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 709,
    title: "除号",
    name: "division",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "符号",
      "乘除",
      "除法"
    ],
    rtl: !1
  },
  {
    id: 710,
    title: "张嘴晕",
    name: "dizzy-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "张嘴晕",
      "表情",
      "昏倒"
    ],
    rtl: !1
  },
  {
    id: 711,
    title: "文档添加",
    name: "doc-add",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "文档添加",
      "文本",
      "文件",
      "添加"
    ],
    rtl: !0
  },
  {
    id: 712,
    title: "文档详情",
    name: "doc-detail",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "文档详情",
      "文本",
      "文件",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 713,
    title: "文档失败",
    name: "doc-fail",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "文档失败",
      "文本",
      "文件",
      "失败"
    ],
    rtl: !0
  },
  {
    id: 714,
    title: "文档搜索",
    name: "doc-search",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "文档搜索",
      "文件",
      "查找内容",
      "文本"
    ],
    rtl: !0
  },
  {
    id: 715,
    title: "文档搜索",
    name: "doc-search-two",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "文档搜索",
      "文本",
      "文件",
      "查找"
    ],
    rtl: !0
  },
  {
    id: 716,
    title: "文档成功",
    name: "doc-success",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "文档成功",
      "文本",
      "文件",
      "成功"
    ],
    rtl: !0
  },
  {
    id: 717,
    title: "文档架子",
    name: "document-folder",
    category: "Office",
    categoryCN: "办公文档",
    author: "白明泽",
    tag: [
      "文档",
      "书架",
      "办公",
      "图书",
      "文件",
      "资料"
    ],
    rtl: !0
  },
  {
    id: 718,
    title: "狗",
    name: "dog",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 719,
    title: "生肖狗",
    name: "dog-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 720,
    title: "美元",
    name: "dollar",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "美元",
      "钱",
      "财富",
      "货币",
      "经济"
    ],
    rtl: !0
  },
  {
    id: 721,
    title: "海豚",
    name: "dolphin",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 722,
    title: "圆顶",
    name: "dome",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "地球",
      "圆球",
      "纬度",
      "地理"
    ],
    rtl: !1
  },
  {
    id: 723,
    title: "顶灯",
    name: "dome-light",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "灯",
      "光",
      "亮",
      "家具",
      "装饰",
      "闪光",
      "打光",
      "照亮"
    ],
    rtl: !1
  },
  {
    id: 724,
    title: "完成全部",
    name: "done-all",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "全部完成",
      "打勾",
      "勾选",
      "全选"
    ],
    rtl: !0
  },
  {
    id: 725,
    title: "懂车帝",
    name: "dongchedi",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "汽车",
      "资讯",
      "媒体",
      "logo",
      "字节跳动",
      "懂车帝"
    ],
    rtl: !1
  },
  {
    id: 726,
    title: "门把手",
    name: "door-handle",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "门把手",
      "房间",
      "开门"
    ],
    rtl: !0
  },
  {
    id: 727,
    title: "点",
    name: "dot",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "圆点",
      "黑点",
      "圈",
      "实心"
    ],
    rtl: !0
  },
  {
    id: 728,
    title: "双人床",
    name: "double-bed",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "双人床",
      "睡觉",
      "休息"
    ],
    rtl: !1
  },
  {
    id: 729,
    title: "双下",
    name: "double-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "双下",
      "向下",
      "双箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 730,
    title: "双左",
    name: "double-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "倒回",
      "返回",
      "双箭头",
      "向左",
      "上一个",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 731,
    title: "双右",
    name: "double-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "快进",
      "向右",
      "双箭头",
      "下一个",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 732,
    title: "双上",
    name: "double-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "双上",
      "向上",
      "双箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 733,
    title: "甜甜圈",
    name: "doughnut",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "甜甜圈",
      "面包",
      "甜点",
      "糕点"
    ],
    rtl: !0
  },
  {
    id: 734,
    title: "下",
    name: "down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向下",
      "箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 735,
    title: "下-圆",
    name: "down-c",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向下",
      "箭头",
      "圆圈箭头"
    ],
    rtl: !1
  },
  {
    id: 736,
    title: "下1",
    name: "down-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向下",
      "箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 737,
    title: "图片下载",
    name: "down-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 738,
    title: "下-小",
    name: "down-small",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向下",
      "箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 739,
    title: "下箭头-方",
    name: "down-square",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向下",
      "箭头",
      "方形箭头"
    ],
    rtl: !1
  },
  {
    id: 740,
    title: "下1",
    name: "down-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "下",
      "指针",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 741,
    title: "下载",
    name: "download",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "下载",
      "向下",
      "箭头"
    ],
    rtl: !1
  },
  {
    id: 742,
    title: "计算机下载",
    name: "download-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 743,
    title: "下载",
    name: "download-four",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "向下",
      "下载",
      "指向"
    ],
    rtl: !1
  },
  {
    id: 744,
    title: "笔记本电脑下载",
    name: "download-laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 745,
    title: "下载1",
    name: "download-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "下载",
      "云下载"
    ],
    rtl: !0
  },
  {
    id: 746,
    title: "下载3",
    name: "download-three",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向下",
      "下载"
    ],
    rtl: !1
  },
  {
    id: 747,
    title: "下载2",
    name: "download-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "下载",
      "云下载"
    ],
    rtl: !0
  },
  {
    id: 748,
    title: "网页下载",
    name: "download-web",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 749,
    title: "拖拽",
    name: "drag",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "拉",
      "拖拽",
      "位移",
      "移动",
      "六点"
    ],
    rtl: !1
  },
  {
    id: 750,
    title: "生肖龙",
    name: "dragon-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 751,
    title: "追波",
    name: "dribble",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "logo",
      "设计",
      "社区",
      "分享",
      "国际设计师社区",
      "design",
      "designer",
      "share",
      "球"
    ],
    rtl: !0
  },
  {
    id: 752,
    title: "饮料",
    name: "drink",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水杯",
      "果汁",
      "汽水",
      "咖啡",
      "奶茶"
    ],
    rtl: !0
  },
  {
    id: 753,
    title: "无人机",
    name: "drone",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "无人机",
      "飞机",
      "玩具",
      "数码",
      "飞行",
      "飞盘"
    ],
    rtl: !1
  },
  {
    id: 754,
    title: "无人机",
    name: "drone-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "飞机",
      "遥控",
      "飞行",
      "航空",
      "航行",
      "飞"
    ],
    rtl: !1
  },
  {
    id: 755,
    title: "下拉列表",
    name: "drop-down-list",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "下拉",
      "列表",
      "表单",
      "向下",
      "下展"
    ],
    rtl: !0
  },
  {
    id: 756,
    title: "下投影",
    name: "drop-shadow-down",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "下投影",
      "圆",
      "阴影"
    ],
    rtl: !1
  },
  {
    id: 757,
    title: "左投影",
    name: "drop-shadow-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "左投影",
      "圆",
      "阴影"
    ],
    rtl: !0
  },
  {
    id: 758,
    title: "右投影",
    name: "drop-shadow-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "右投影",
      "圆",
      "阴影"
    ],
    rtl: !0
  },
  {
    id: 759,
    title: "上投影",
    name: "drop-shadow-up",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "上投影",
      "圆",
      "阴影"
    ],
    rtl: !1
  },
  {
    id: 760,
    title: "管理箱",
    name: "dropbox",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "盒子",
      "箱子",
      "管理",
      "存储",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 761,
    title: "鸡腿",
    name: "drumstick",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "鸡腿",
      "肉食",
      "鸡肉"
    ],
    rtl: !0
  },
  {
    id: 762,
    title: "迪拜大厦",
    name: "dubai",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "迪拜",
      "大厦",
      "高楼",
      "楼宇",
      "建筑"
    ],
    rtl: !0
  },
  {
    id: 763,
    title: "鸭子",
    name: "duck",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 764,
    title: "杠铃",
    name: "dumbbel-line",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 765,
    title: "健身",
    name: "dumbbell",
    category: "Sports",
    categoryCN: "体育运动",
    author: "常留留",
    tag: [
      "健身",
      "运动",
      "减肥",
      "体育",
      "哑铃",
      "举重"
    ],
    rtl: !1
  },
  {
    id: 766,
    title: "DVI",
    name: "dvi",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "dvi"
    ],
    rtl: !0
  },
  {
    id: 767,
    title: "鹰",
    name: "eagle",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 768,
    title: "地球仪",
    name: "earth",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "网路",
      "语言",
      "全球",
      "互联网"
    ],
    rtl: !1
  },
  {
    id: 769,
    title: "简单",
    name: "easy",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "差劲",
      "小拇指",
      "手势",
      "手指"
    ],
    rtl: !0
  },
  {
    id: 770,
    title: "心电图2",
    name: "ecg",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 771,
    title: "编辑",
    name: "edit",
    category: "Edit",
    categoryCN: "编辑",
    author: "白明泽",
    tag: [
      "撰写",
      "修改",
      "编辑",
      "输入"
    ],
    rtl: !0
  },
  {
    id: 772,
    title: "影片剪辑",
    name: "edit-movie",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "影片剪辑",
      "编辑"
    ],
    rtl: !1
  },
  {
    id: 773,
    title: "编辑姓名",
    name: "edit-name",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 774,
    title: "编辑1",
    name: "edit-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "白明泽",
    tag: [
      "撰写",
      "修改",
      "文本",
      "编辑",
      "输入"
    ],
    rtl: !0
  },
  {
    id: 775,
    title: "编辑2",
    name: "edit-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "白明泽",
    tag: [
      "撰写",
      "修改",
      "编辑",
      "输入"
    ],
    rtl: !0
  },
  {
    id: 776,
    title: "剪辑",
    name: "editing",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 777,
    title: "编辑",
    name: "editor",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "修改",
      "撰写",
      "书写",
      "写作",
      "抄袭",
      "文章",
      "文档",
      "小说",
      "合同",
      "规则",
      "详情"
    ],
    rtl: !0
  },
  {
    id: 778,
    title: "脑电图",
    name: "eeg",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 779,
    title: "特效",
    name: "effects",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "美化",
      "效果",
      "化妆",
      "变美",
      "改变"
    ],
    rtl: !0
  },
  {
    id: 780,
    title: "传出4",
    name: "efferent-four",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 781,
    title: "传出3",
    name: "efferent-three",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 782,
    title: "煎鸡蛋",
    name: "egg",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "摊鸡蛋",
      "早餐",
      "煎蛋"
    ],
    rtl: !0
  },
  {
    id: 783,
    title: "鸡蛋",
    name: "egg-one",
    category: "Foods",
    categoryCN: "食品",
    author: "史晓彤",
    tag: [
      "鸡蛋",
      "美妆蛋"
    ],
    rtl: !0
  },
  {
    id: 784,
    title: "茄子",
    name: "eggplant",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "茄子",
      "蔬菜",
      "生鲜"
    ],
    rtl: !0
  },
  {
    id: 785,
    title: "埃菲尔铁塔",
    name: "eiffel-tower",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "铁塔",
      "法国建筑",
      "浪漫"
    ],
    rtl: !1
  },
  {
    id: 786,
    title: "按键八",
    name: "eight-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "八",
      "8",
      "按键"
    ],
    rtl: !1
  },
  {
    id: 788,
    title: "电熨斗",
    name: "electric-iron",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "加热",
      "电",
      "烫衣服",
      "烫印",
      "烙印"
    ],
    rtl: !0
  },
  {
    id: 789,
    title: "电波",
    name: "electric-wave",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "电流",
      "电波",
      "心电图",
      "股票",
      "浮动"
    ],
    rtl: !0
  },
  {
    id: 790,
    title: "心电图",
    name: "electrocardiogram",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "报警",
      "监控",
      "监视",
      "心电图"
    ],
    rtl: !0
  },
  {
    id: 791,
    title: "智能门锁",
    name: "electronic-door-lock",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "门",
      "锁",
      "智能",
      "密码锁",
      "安全",
      "防盗门",
      "关门",
      "加密"
    ],
    rtl: !0
  },
  {
    id: 792,
    title: "电子锁关",
    name: "electronic-locks-close",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "锁",
      "电子",
      "感应",
      "关"
    ],
    rtl: !0
  },
  {
    id: 793,
    title: "电子锁开",
    name: "electronic-locks-open",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "锁",
      "电子",
      "感应",
      "开"
    ],
    rtl: !1
  },
  {
    id: 794,
    title: "触电笔",
    name: "electronic-pen",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电笔",
      "体温计"
    ],
    rtl: !0
  },
  {
    id: 795,
    title: "大象",
    name: "elephant",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 796,
    title: "电梯",
    name: "elevator",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "电梯",
      "上下楼",
      "门"
    ],
    rtl: !0
  },
  {
    id: 797,
    title: "邮件屏蔽",
    name: "email-block",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "禁止查看",
      "错误提示"
    ],
    rtl: !0
  },
  {
    id: 798,
    title: "邮件删除",
    name: "email-delect",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "删除邮件"
    ],
    rtl: !0
  },
  {
    id: 799,
    title: "邮件下载",
    name: "email-down",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "下载邮件"
    ],
    rtl: !1
  },
  {
    id: 800,
    title: "邮件发送失败",
    name: "email-fail",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "删除邮件",
      "关闭邮件"
    ],
    rtl: !0
  },
  {
    id: 801,
    title: "邮件锁定",
    name: "email-lock",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "保密邮件"
    ],
    rtl: !0
  },
  {
    id: 802,
    title: "邮件推送",
    name: "email-push",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "转发邮件"
    ],
    rtl: !0
  },
  {
    id: 803,
    title: "邮件搜索",
    name: "email-search",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "搜索邮件",
      "查找邮件"
    ],
    rtl: !0
  },
  {
    id: 804,
    title: "邮件安全",
    name: "email-security",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "保护邮件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 805,
    title: "邮件发送成功",
    name: "email-successfully",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "发送成功"
    ],
    rtl: !0
  },
  {
    id: 806,
    title: "开心",
    name: "emotion-happy",
    category: "Emoji",
    categoryCN: "表情",
    author: "刘心乐",
    tag: [
      "表情",
      "成功",
      "笑脸",
      "喜悦"
    ],
    rtl: !1
  },
  {
    id: 807,
    title: "不开心",
    name: "emotion-unhappy",
    category: "Emoji",
    categoryCN: "表情",
    author: "刘心乐",
    tag: [
      "表情",
      "失败",
      "哭脸",
      "不开心",
      "悲伤"
    ],
    rtl: !1
  },
  {
    id: 808,
    title: "空手",
    name: "empty",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "摊手",
      "空手",
      "伸手"
    ],
    rtl: !0
  },
  {
    id: 809,
    title: "按结束时间排序",
    name: "end-time-sort",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "排序",
      "序列",
      "按时间排序"
    ],
    rtl: !0
  },
  {
    id: 810,
    title: "无穷尽",
    name: "endless",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "史晓彤",
    tag: [
      "基因",
      "链接",
      "无穷大",
      "闭环",
      "相交",
      "循环"
    ],
    rtl: !0
  },
  {
    id: 811,
    title: "内分泌",
    name: "endocrine",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "分泌",
      "火",
      "新陈代谢"
    ],
    rtl: !0
  },
  {
    id: 812,
    title: "端点位移",
    name: "endpoint-displacement",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "端点位移"
    ],
    rtl: !0
  },
  {
    id: 813,
    title: "方头端点",
    name: "endpoint-flat",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "端点类型",
      "方头端点"
    ],
    rtl: !0
  },
  {
    id: 814,
    title: "圆头端点",
    name: "endpoint-round",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "端点类型",
      "圆头断点"
    ],
    rtl: !0
  },
  {
    id: 815,
    title: "平头端点",
    name: "endpoint-square",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "端点类型",
      "平头端点"
    ],
    rtl: !0
  },
  {
    id: 816,
    title: "能源插座",
    name: "energy-socket",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "能源插座"
    ],
    rtl: !1
  },
  {
    id: 817,
    title: "工程牌",
    name: "engineering-brand",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 818,
    title: "工程车",
    name: "engineering-vehicle",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 819,
    title: "英文",
    name: "english",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "英",
      "英文",
      "英语",
      "西文"
    ],
    rtl: !0
  },
  {
    id: 820,
    title: "胡子",
    name: "english-mustache",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "胡须"
    ],
    rtl: !1
  },
  {
    id: 821,
    title: "安检",
    name: "enquire",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "问询",
      "检票",
      "人工",
      "安检",
      "沟通"
    ],
    rtl: !0
  },
  {
    id: 822,
    title: "回车键",
    name: "enter-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "回车键",
      "键盘"
    ],
    rtl: !0
  },
  {
    id: 823,
    title: "回车键",
    name: "enter-key-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "回车"
    ],
    rtl: !0
  },
  {
    id: 824,
    title: "输入键盘",
    name: "enter-the-keyboard",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "输入",
      "录入",
      "键盘",
      "打字"
    ],
    rtl: !0
  },
  {
    id: 825,
    title: "娱乐",
    name: "entertainment",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "娱乐",
      "唱歌",
      "麦克风",
      "说话",
      "KTV"
    ],
    rtl: !0
  },
  {
    id: 826,
    title: "信封",
    name: "envelope",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "信封",
      "邮件",
      "袋子",
      "纸袋",
      "折叠"
    ],
    rtl: !1
  },
  {
    id: 827,
    title: "信封1",
    name: "envelope-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "多封邮件"
    ],
    rtl: !0
  },
  {
    id: 828,
    title: "等比",
    name: "equal-ratio",
    category: "Edit",
    categoryCN: "编辑",
    author: "白明泽",
    tag: [
      "等比",
      "一比一",
      "还原"
    ],
    rtl: !1
  },
  {
    id: 829,
    title: "均衡器",
    name: "equalizer",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "音量调节",
      "设置调整",
      "音频"
    ],
    rtl: !0
  },
  {
    id: 830,
    title: "擦除",
    name: "erase",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "橡皮",
      "擦除",
      "清除",
      "移除",
      "消灭"
    ],
    rtl: !0
  },
  {
    id: 831,
    title: "错误",
    name: "error",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "错误",
      "不正确",
      "关闭",
      "叉"
    ],
    rtl: !1
  },
  {
    id: 832,
    title: "计算机错误",
    name: "error-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 833,
    title: "图片错误",
    name: "error-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 834,
    title: "错误提示",
    name: "error-prompt",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "错误提示",
      "声音",
      "静音",
      "声音提示"
    ],
    rtl: !0
  },
  {
    id: 835,
    title: "手扶电梯",
    name: "escalators",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "手扶电梯",
      "上下楼"
    ],
    rtl: !0
  },
  {
    id: 836,
    title: "网口关",
    name: "ethernet-off",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "网口",
      "网线"
    ],
    rtl: !1
  },
  {
    id: 837,
    title: "网口开",
    name: "ethernet-on",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "网口",
      "网线"
    ],
    rtl: !1
  },
  {
    id: 838,
    title: "众多用户",
    name: "every-user",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "用户",
      "很多",
      "群",
      "用户群",
      "用户组"
    ],
    rtl: !1
  },
  {
    id: 839,
    title: "数据统计工具",
    name: "excel",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "表格",
      "文档",
      "统计",
      "分析",
      "汇总"
    ],
    rtl: !0
  },
  {
    id: 840,
    title: "表格",
    name: "excel-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "表格",
      "电子文件"
    ],
    rtl: !0
  },
  {
    id: 841,
    title: "货币兑换",
    name: "exchange",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "银行",
      "财务",
      "财富"
    ],
    rtl: !0
  },
  {
    id: 842,
    title: "兑换4",
    name: "exchange-four",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "兑换",
      "交换",
      "转换"
    ],
    rtl: !0
  },
  {
    id: 843,
    title: "兑换1",
    name: "exchange-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "兑换",
      "交换",
      "转换"
    ],
    rtl: !0
  },
  {
    id: 844,
    title: "兑换3",
    name: "exchange-three",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "兑换",
      "交换",
      "转换"
    ],
    rtl: !0
  },
  {
    id: 845,
    title: "兑换2",
    name: "exchange-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "兑换",
      "交换",
      "转换"
    ],
    rtl: !0
  },
  {
    id: 846,
    title: "排除选择",
    name: "exclude-selection",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "剪切",
      "相交",
      "排除选择"
    ],
    rtl: !0
  },
  {
    id: 847,
    title: "排他网关",
    name: "exclusive-gateway",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "排他",
      "菱形",
      "抽象",
      "几何"
    ],
    rtl: !1
  },
  {
    id: 848,
    title: "展开",
    name: "expand-down",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "向下展开",
      "浮层",
      "抽屉",
      "示例"
    ],
    rtl: !1
  },
  {
    id: 849,
    title: "向下收起",
    name: "expand-down-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "展开",
      "收起"
    ],
    rtl: !1
  },
  {
    id: 850,
    title: "展开",
    name: "expand-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "向右展开",
      "浮层",
      "抽屉",
      "示例"
    ],
    rtl: !0
  },
  {
    id: 851,
    title: "左右扩大",
    name: "expand-left-and-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "左右扩大",
      "间距"
    ],
    rtl: !1
  },
  {
    id: 852,
    title: "展开",
    name: "expand-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "向左展开",
      "浮层",
      "抽屉",
      "示例"
    ],
    rtl: !0
  },
  {
    id: 853,
    title: "展开文本域",
    name: "expand-text-input",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "放大",
      "展开",
      "撑开",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 854,
    title: "展开",
    name: "expand-up",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "向上展开",
      "浮层",
      "抽屉",
      "示例"
    ],
    rtl: !1
  },
  {
    id: 855,
    title: "转出",
    name: "expenses",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "消费",
      "支出",
      "钱",
      "转出"
    ],
    rtl: !0
  },
  {
    id: 856,
    title: "支出",
    name: "expenses-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "消费",
      "支出",
      "钱",
      "转出"
    ],
    rtl: !0
  },
  {
    id: 857,
    title: "实验",
    name: "experiment",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "常留留",
    tag: [
      "测试",
      "化验",
      "测验",
      "蒸馏瓶",
      "容器",
      "量杯"
    ],
    rtl: !0
  },
  {
    id: 858,
    title: "实验",
    name: "experiment-one",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "常留留",
    tag: [
      "测试",
      "化验",
      "测验",
      "蒸馏瓶",
      "容器",
      "量杯"
    ],
    rtl: !0
  },
  {
    id: 859,
    title: "导出",
    name: "export",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "导出",
      "输出",
      "传输",
      "上传",
      "下载"
    ],
    rtl: !0
  },
  {
    id: 860,
    title: "快递",
    name: "express-delivery",
    category: "Others",
    categoryCN: "其它",
    author: "齐奉飞",
    tag: [
      "快递盒",
      "快递箱"
    ],
    rtl: !1
  },
  {
    id: 861,
    title: "无语脸",
    name: "expressionless-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "无语脸",
      "表情"
    ],
    rtl: !1
  },
  {
    id: 862,
    title: "拓展",
    name: "extend",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "扩大",
      "拓展",
      "全屏"
    ],
    rtl: !1
  },
  {
    id: 863,
    title: "外部传输",
    name: "external-transmission",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "外部传输",
      "传输",
      "导出文件"
    ],
    rtl: !0
  },
  {
    id: 864,
    title: "眼眉",
    name: "eyebrow",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "眉毛"
    ],
    rtl: !0
  },
  {
    id: 865,
    title: "眼睛",
    name: "eyes",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "眼科",
      "睁眼",
      "开启",
      "眼科"
    ],
    rtl: !1
  },
  {
    id: 866,
    title: "F8",
    name: "f-eight-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "八",
      "8",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 867,
    title: "F5",
    name: "f-five-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "五",
      "5",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 868,
    title: "F4",
    name: "f-four-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "四",
      "4",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 869,
    title: "Fn",
    name: "f-n-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "n",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 870,
    title: "F9",
    name: "f-nine-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "九",
      "9",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 871,
    title: "F1",
    name: "f-one-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "一",
      "1",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 872,
    title: "F7",
    name: "f-seven-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "七",
      "7",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 873,
    title: "F6",
    name: "f-six-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "六",
      "6",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 874,
    title: "F3",
    name: "f-three-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "三",
      "3",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 875,
    title: "F2",
    name: "f-two-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "二",
      "2",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 876,
    title: "F0",
    name: "f-zero-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "零",
      "0",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 877,
    title: "脸粉",
    name: "face-powder",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "小镜子",
      "化妆镜"
    ],
    rtl: !0
  },
  {
    id: 878,
    title: "人脸识别",
    name: "face-recognition",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "常留留",
    tag: [
      "人脸支付",
      "人脸",
      "刷脸",
      "人脸密码",
      "扫脸"
    ],
    rtl: !0
  },
  {
    id: 879,
    title: "大眼笑",
    name: "face-with-smiling-open-eyes",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "大眼笑",
      "表情",
      "惊呆"
    ],
    rtl: !1
  },
  {
    id: 880,
    title: "无嘴脸",
    name: "face-without-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "无嘴脸",
      "表情",
      "偷看"
    ],
    rtl: !1
  },
  {
    id: 881,
    title: "脸书",
    name: "facebook",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "小视频",
      "短视频",
      "logo",
      "社交",
      "社交平台"
    ],
    rtl: !0
  },
  {
    id: 882,
    title: "脸书",
    name: "facebook-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "小视频",
      "短视频",
      "logo",
      "社交",
      "社交平台",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 883,
    title: "视频电话",
    name: "facetime",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "视频",
      "音频",
      "电话",
      "连线",
      "直播",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 884,
    title: "激萌",
    name: "faceu",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "拍照",
      "logo",
      "修图",
      "美颜",
      "相机",
      "激萌"
    ],
    rtl: !0
  },
  {
    id: 885,
    title: "洗面奶",
    name: "facial-cleanser",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "洗面奶",
      "洁面",
      "护手霜",
      "洗化"
    ],
    rtl: !1
  },
  {
    id: 886,
    title: "口罩2",
    name: "facial-mask",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 887,
    title: "工厂",
    name: "factory-building",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "建筑",
      "工厂",
      "烟囱",
      "厂房",
      "工作"
    ],
    rtl: !0
  },
  {
    id: 888,
    title: "图片错误",
    name: "fail-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 889,
    title: "家庭",
    name: "family",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "团聚",
      "人群"
    ],
    rtl: !1
  },
  {
    id: 890,
    title: "扇子",
    name: "fan",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "扇子",
      "文化",
      "中国风",
      "凉快",
      "降温"
    ],
    rtl: !1
  },
  {
    id: 891,
    title: "番茄小说",
    name: "fanqiexiaoshuo",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "番茄小说",
      "logo",
      "阅读软件"
    ],
    rtl: !0
  },
  {
    id: 892,
    title: "feelgood",
    name: "feelgood",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "评估",
      "体验",
      "logo",
      "feelgood"
    ],
    rtl: !1
  },
  {
    id: 893,
    title: "feegood1",
    name: "feelgood-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "",
    tag: [
      "logo",
      "对话",
      "气泡",
      "feegood"
    ],
    rtl: !0
  },
  {
    id: 894,
    title: "飞鱼CRM",
    name: "feiyu",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "飞鱼",
      "CRM",
      "线索",
      "oceanengine",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 895,
    title: "女性",
    name: "female",
    category: "Base",
    categoryCN: "基础",
    author: "刘心乐",
    tag: [
      "女",
      "性别",
      "符号"
    ],
    rtl: !0
  },
  {
    id: 896,
    title: "栏栅",
    name: "fence-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "护栏",
      "拦网",
      "栅栏"
    ],
    rtl: !1
  },
  {
    id: 897,
    title: "栅栏",
    name: "fence-two",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "护栏",
      "拦网",
      "栅栏"
    ],
    rtl: !1
  },
  {
    id: 898,
    title: "摩天轮",
    name: "ferris-wheel",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "摩天轮",
      "大转轮",
      "游乐场"
    ],
    rtl: !1
  },
  {
    id: 899,
    title: "figma",
    name: "figma",
    category: "Brand",
    categoryCN: "品牌",
    author: "",
    tag: [
      "figma",
      "logo",
      "设计软件",
      "应用",
      "工具"
    ],
    rtl: !0
  },
  {
    id: 900,
    title: "组件",
    name: "figma-component",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "组件",
      "菱形组合",
      "四边形"
    ],
    rtl: !1
  },
  {
    id: 901,
    title: "Figma 选择箭头",
    name: "figma-flatten-selection",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "向下箭头",
      "箭头"
    ],
    rtl: !1
  },
  {
    id: 902,
    title: "遮罩",
    name: "figma-mask",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "遮罩",
      "遮挡",
      "编辑",
      "功能",
      "绘图"
    ],
    rtl: !0
  },
  {
    id: 903,
    title: "解除组件",
    name: "figma-reset-instance",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "解除组件",
      "转移",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 904,
    title: "文件添加",
    name: "file-addition",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "添加"
    ],
    rtl: !0
  },
  {
    id: 905,
    title: "文件添加1",
    name: "file-addition-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "添加"
    ],
    rtl: !0
  },
  {
    id: 906,
    title: "文件柜",
    name: "file-cabinet",
    category: "Office",
    categoryCN: "办公文档",
    author: "常留留",
    tag: [
      "文件",
      "柜子",
      "抽屉"
    ],
    rtl: !1
  },
  {
    id: 907,
    title: "代码文件",
    name: "file-code",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "代码"
    ],
    rtl: !0
  },
  {
    id: 908,
    title: "代码文件1",
    name: "file-code-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "代码"
    ],
    rtl: !0
  },
  {
    id: 909,
    title: "收藏文件",
    name: "file-collection",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "爱心",
      "收藏"
    ],
    rtl: !0
  },
  {
    id: 910,
    title: "收藏文件1",
    name: "file-collection-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "爱心",
      "收藏"
    ],
    rtl: !0
  },
  {
    id: 911,
    title: "转换文件",
    name: "file-conversion",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "转换"
    ],
    rtl: !0
  },
  {
    id: 912,
    title: "转换文件1",
    name: "file-conversion-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "转换"
    ],
    rtl: !0
  },
  {
    id: 913,
    title: "到期文件",
    name: "file-date",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "时间"
    ],
    rtl: !0
  },
  {
    id: 914,
    title: "到期文件1",
    name: "file-date-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "时间"
    ],
    rtl: !0
  },
  {
    id: 915,
    title: "显示文件",
    name: "file-display",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "显示",
      "展示"
    ],
    rtl: !0
  },
  {
    id: 916,
    title: "显示文件1",
    name: "file-display-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "显示",
      "展示"
    ],
    rtl: !0
  },
  {
    id: 917,
    title: "文档",
    name: "file-doc",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "文章",
      "文档",
      "小说",
      "合同",
      "规则",
      "详情"
    ],
    rtl: !0
  },
  {
    id: 918,
    title: "编辑文件",
    name: "file-editing",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 919,
    title: "编辑文件1",
    name: "file-editing-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 920,
    title: "文件-excel",
    name: "file-excel",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "表格",
      "数据",
      "办公",
      "文稿"
    ],
    rtl: !0
  },
  {
    id: 921,
    title: "文件失败",
    name: "file-failed",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "关闭",
      "失败"
    ],
    rtl: !0
  },
  {
    id: 922,
    title: "文件失败1",
    name: "file-failed-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "关闭",
      "失败"
    ],
    rtl: !0
  },
  {
    id: 923,
    title: "重点文件",
    name: "file-focus",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "重点",
      "星星"
    ],
    rtl: !0
  },
  {
    id: 924,
    title: "重点文件1",
    name: "file-focus-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "重点",
      "星星"
    ],
    rtl: !0
  },
  {
    id: 925,
    title: "文件-gif",
    name: "file-gif",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "动图",
      "GIF",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 926,
    title: "井号文件",
    name: "file-hash",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "井号"
    ],
    rtl: !0
  },
  {
    id: 927,
    title: "井号文件1",
    name: "file-hash-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "井号"
    ],
    rtl: !0
  },
  {
    id: 928,
    title: "隐藏文件",
    name: "file-hiding",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "隐藏"
    ],
    rtl: !0
  },
  {
    id: 929,
    title: "隐藏文件1",
    name: "file-hiding-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "隐藏"
    ],
    rtl: !0
  },
  {
    id: 930,
    title: "文件-jpg",
    name: "file-jpg",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "图像",
      "照片",
      "JPG",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 931,
    title: "加密文件",
    name: "file-lock",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "锁定"
    ],
    rtl: !0
  },
  {
    id: 932,
    title: "加密文件1",
    name: "file-lock-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "锁定"
    ],
    rtl: !0
  },
  {
    id: 933,
    title: "音乐文件",
    name: "file-music",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "音乐"
    ],
    rtl: !0
  },
  {
    id: 934,
    title: "音乐文件1",
    name: "file-music-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "音乐"
    ],
    rtl: !0
  },
  {
    id: 935,
    title: "文件-pdf",
    name: "file-pdf",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "PDF",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 936,
    title: "pdf文件",
    name: "file-pdf-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "pdf文档",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 937,
    title: "ppt文件",
    name: "file-ppt",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "幻灯片",
      "展示",
      "预览",
      "汇报",
      "演示"
    ],
    rtl: !0
  },
  {
    id: 938,
    title: "文件保护",
    name: "file-protection",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "安全",
      "保护"
    ],
    rtl: !0
  },
  {
    id: 939,
    title: "文件保护1",
    name: "file-protection-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "安全",
      "保护"
    ],
    rtl: !0
  },
  {
    id: 940,
    title: "优质文件",
    name: "file-quality",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "优质"
    ],
    rtl: !0
  },
  {
    id: 941,
    title: "优质文件1",
    name: "file-quality-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "优质"
    ],
    rtl: !0
  },
  {
    id: 942,
    title: "存疑文件",
    name: "file-question",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "疑问",
      "问好"
    ],
    rtl: !0
  },
  {
    id: 943,
    title: "移除文件",
    name: "file-removal",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "移除"
    ],
    rtl: !0
  },
  {
    id: 944,
    title: "移除文件1",
    name: "file-removal-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "移除"
    ],
    rtl: !0
  },
  {
    id: 945,
    title: "文件查找",
    name: "file-search",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "查找",
      "搜索",
      "检索"
    ],
    rtl: !0
  },
  {
    id: 946,
    title: "文件搜索1",
    name: "file-search-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "搜索"
    ],
    rtl: !0
  },
  {
    id: 947,
    title: "文件搜索",
    name: "file-search-two",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "搜索"
    ],
    rtl: !0
  },
  {
    id: 948,
    title: "文件设置",
    name: "file-settings",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "设置"
    ],
    rtl: !0
  },
  {
    id: 949,
    title: "文件设置1",
    name: "file-settings-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "设置"
    ],
    rtl: !0
  },
  {
    id: 950,
    title: "人事文件",
    name: "file-staff",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "人员",
      "人力"
    ],
    rtl: !0
  },
  {
    id: 951,
    title: "人事文件1",
    name: "file-staff-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "人员",
      "人力"
    ],
    rtl: !0
  },
  {
    id: 952,
    title: "成功文件",
    name: "file-success",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "成功",
      "正确"
    ],
    rtl: !0
  },
  {
    id: 953,
    title: "成功文件1",
    name: "file-success-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "成功",
      "正确"
    ],
    rtl: !0
  },
  {
    id: 954,
    title: "文本文件",
    name: "file-text",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "字体",
      "文本"
    ],
    rtl: !0
  },
  {
    id: 955,
    title: "文本文件1",
    name: "file-text-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "字体",
      "文本"
    ],
    rtl: !0
  },
  {
    id: 956,
    title: "警示文件",
    name: "file-tips",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "提示",
      "报错"
    ],
    rtl: !0
  },
  {
    id: 957,
    title: "警示文件1",
    name: "file-tips-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "提示",
      "报错"
    ],
    rtl: !0
  },
  {
    id: 958,
    title: "文件-txt",
    name: "file-txt",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文本文件",
      "文稿",
      "写字",
      "文字"
    ],
    rtl: !0
  },
  {
    id: 959,
    title: "txt文件",
    name: "file-txt-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "文章",
      "文档",
      "小说",
      "合同",
      "规则",
      "详情"
    ],
    rtl: !0
  },
  {
    id: 960,
    title: "文件撤销",
    name: "file-withdrawal",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "撤销",
      "返回"
    ],
    rtl: !0
  },
  {
    id: 961,
    title: "文件撤销1",
    name: "file-withdrawal-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "撤销",
      "返回"
    ],
    rtl: !0
  },
  {
    id: 962,
    title: "文件-word",
    name: "file-word",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件",
      "文档",
      "文字",
      "Word",
      "办公",
      "文案"
    ],
    rtl: !0
  },
  {
    id: 963,
    title: "压缩文件",
    name: "file-zip",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "文件",
      "压缩",
      "解压包",
      "下载",
      "资料",
      "文档",
      "资源包"
    ],
    rtl: !0
  },
  {
    id: 964,
    title: "填充",
    name: "fill",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "夏立诚",
    tag: [
      "填充",
      "空",
      "排除",
      "颜色面板"
    ],
    rtl: !0
  },
  {
    id: 965,
    title: "胶片",
    name: "film",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 966,
    title: "筛选",
    name: "filter",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "漏斗",
      "筛选",
      "过滤"
    ],
    rtl: !0
  },
  {
    id: 967,
    title: "筛选1",
    name: "filter-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "过滤",
      "筛查",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 968,
    title: "金融",
    name: "finance",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "钱",
      "钱包",
      "财产",
      "金融",
      "金钱"
    ],
    rtl: !1
  },
  {
    id: 969,
    title: "理财",
    name: "financing",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "货币兑换",
      "钱币",
      "金属钱币",
      "财产",
      "铜钱"
    ],
    rtl: !1
  },
  {
    id: 970,
    title: "理财",
    name: "financing-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "货币兑换",
      "财富",
      "钱袋子"
    ],
    rtl: !0
  },
  {
    id: 971,
    title: "融资2",
    name: "financing-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "汇款",
      "集资"
    ],
    rtl: !0
  },
  {
    id: 972,
    title: "查找",
    name: "find",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "查询",
      "搜索",
      "搜寻",
      "放大镜",
      "搜索列表"
    ],
    rtl: !0
  },
  {
    id: 973,
    title: "搜查",
    name: "find-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "扫描",
      "检索",
      "搜索",
      "查找",
      "寻找"
    ],
    rtl: !0
  },
  {
    id: 974,
    title: "指甲",
    name: "fingernail",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "美甲",
      "指甲"
    ],
    rtl: !0
  },
  {
    id: 975,
    title: "指纹",
    name: "fingerprint",
    category: "Hands",
    categoryCN: "手势动作",
    author: "金磊",
    tag: [
      "指纹",
      "安全",
      "解锁",
      "认证",
      "验证"
    ],
    rtl: !0
  },
  {
    id: 976,
    title: "指纹",
    name: "fingerprint-three",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "指纹",
      "身份",
      "识别",
      "解锁",
      "验证",
      "安全",
      "认证"
    ],
    rtl: !0
  },
  {
    id: 977,
    title: "指纹",
    name: "fingerprint-two",
    category: "Hands",
    categoryCN: "手势动作",
    author: "金磊",
    tag: [
      "指纹",
      "安全",
      "解锁",
      "认证",
      "验证"
    ],
    rtl: !0
  },
  {
    id: 978,
    title: "火热",
    name: "fire",
    category: "Energy",
    categoryCN: "能源生命",
    author: "常留留",
    tag: [
      "火热",
      "热门",
      "流行",
      "火",
      "热",
      "夏天"
    ],
    rtl: !0
  },
  {
    id: 979,
    title: "灭火器",
    name: "fire-extinguisher",
    category: "Safe",
    categoryCN: "安全防护",
    author: "金磊",
    tag: [
      "灭火器",
      "救火",
      "扑灭",
      "安全",
      "消防队"
    ],
    rtl: !0
  },
  {
    id: 980,
    title: "灭火器",
    name: "fire-extinguisher-one",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "灭火"
    ],
    rtl: !0
  },
  {
    id: 981,
    title: "火堆",
    name: "fire-two",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "火",
      "柴火",
      "热",
      "燃烧"
    ],
    rtl: !0
  },
  {
    id: 982,
    title: "礼花",
    name: "fireworks",
    category: "Others",
    categoryCN: "其它",
    author: "白明泽",
    tag: [
      "礼花",
      "庆祝",
      "欢庆",
      "节日"
    ],
    rtl: !0
  },
  {
    id: 983,
    title: "第一",
    name: "first",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "一",
      "手指",
      "食指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 984,
    title: "急救箱",
    name: "first-aid-kit",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 985,
    title: "鱼",
    name: "fish",
    category: "Foods",
    categoryCN: "食品",
    author: "史晓彤",
    tag: [
      "鱼",
      "食物",
      "美食"
    ],
    rtl: !0
  },
  {
    id: 986,
    title: "鱼",
    name: "fish-one",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 987,
    title: "垂钓",
    name: "fishing",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "钓鱼",
      "垂钓",
      "平静"
    ],
    rtl: !0
  },
  {
    id: 988,
    title: "拳头",
    name: "fist",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "石头",
      "拳"
    ],
    rtl: !0
  },
  {
    id: 989,
    title: "健身",
    name: "fitness",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 990,
    title: "五",
    name: "five",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "五",
      "手指",
      "手势",
      "手掌"
    ],
    rtl: !0
  },
  {
    id: 991,
    title: "五个椭圆",
    name: "five-ellipses",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "五个椭圆",
      "排列"
    ],
    rtl: !1
  },
  {
    id: 992,
    title: "五",
    name: "five-five",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "五",
      "手指",
      "手势",
      "手掌"
    ],
    rtl: !0
  },
  {
    id: 993,
    title: "按键五",
    name: "five-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "五",
      "5",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 994,
    title: "五星徽章",
    name: "five-star-badge",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "五星徽章"
    ],
    rtl: !1
  },
  {
    id: 995,
    title: "旗子",
    name: "flag",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "旗子",
      "旗帜"
    ],
    rtl: !0
  },
  {
    id: 996,
    title: "闪付",
    name: "flash-payment",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "闪电",
      "快速",
      "能量",
      "速度"
    ],
    rtl: !0
  },
  {
    id: 997,
    title: "闪光模式",
    name: "flashlamp",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "闪电",
      "闪光",
      "快速",
      "能量",
      "电池"
    ],
    rtl: !0
  },
  {
    id: 998,
    title: "手电筒",
    name: "flashlight",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "手电",
      "光线",
      "电灯",
      "电器",
      "手电筒"
    ],
    rtl: !1
  },
  {
    id: 999,
    title: "三角杯",
    name: "flask",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "白明泽",
    tag: [
      "三角杯",
      "试验",
      "酒杯",
      "测量",
      "化学"
    ],
    rtl: !1
  },
  {
    id: 1e3,
    title: "飞行气流",
    name: "flight-airflow",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "飞行中",
      "飞行平稳",
      "飞行气流"
    ],
    rtl: !0
  },
  {
    id: 1001,
    title: "飞行安全",
    name: "flight-safety",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "飞行安全",
      "飞行保险"
    ],
    rtl: !0
  },
  {
    id: 1002,
    title: "翻转镜头",
    name: "flip-camera",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "翻转镜头"
    ],
    rtl: !0
  },
  {
    id: 1003,
    title: "水平翻转",
    name: "flip-horizontally",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "调整",
      "左右镜像",
      "软件功能"
    ],
    rtl: !1
  },
  {
    id: 1004,
    title: "垂直翻转",
    name: "flip-vertically",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "调整",
      "上下镜像",
      "软件功能"
    ],
    rtl: !0
  },
  {
    id: 1005,
    title: "勾引",
    name: "flirt",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "引诱",
      "勾引",
      "引诱"
    ],
    rtl: !0
  },
  {
    id: 1006,
    title: "漂浮圈",
    name: "float",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "漂浮",
      "游泳圈"
    ],
    rtl: !1
  },
  {
    id: 1007,
    title: "地板",
    name: "floor-tile",
    category: "Life",
    categoryCN: "生活",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1008,
    title: "电台",
    name: "fm",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "收音机",
      "电台节目",
      "无线广播",
      "广播"
    ],
    rtl: !1
  },
  {
    id: 1009,
    title: "对焦",
    name: "focus",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "对焦",
      "精准",
      "镜头",
      "瞄准"
    ],
    rtl: !1
  },
  {
    id: 1010,
    title: "对焦1",
    name: "focus-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "定位",
      "扫描"
    ],
    rtl: !0
  },
  {
    id: 1011,
    title: "大雾",
    name: "fog",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "大雾",
      "雾霾",
      "云雾"
    ],
    rtl: !0
  },
  {
    id: 1012,
    title: "向上收起",
    name: "fold-up-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "缩小",
      "收起"
    ],
    rtl: !1
  },
  {
    id: 1013,
    title: "文件夹",
    name: "folder",
    category: "Office",
    categoryCN: "办公文档",
    author: "张蔓",
    tag: [
      "文件夹",
      "文件本",
      "机密文件",
      "信封"
    ],
    rtl: !0
  },
  {
    id: 1014,
    title: "禁用文件夹",
    name: "folder-block",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "禁用文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1015,
    title: "禁用文件夹1",
    name: "folder-block-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "禁用文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1016,
    title: "文件夹-关",
    name: "folder-close",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件夹",
      "关闭",
      "私密文件"
    ],
    rtl: !0
  },
  {
    id: 1017,
    title: "代码文件夹",
    name: "folder-code",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "代码文件",
      "文件夹",
      "展开文件"
    ],
    rtl: !0
  },
  {
    id: 1018,
    title: "代码文件夹1",
    name: "folder-code-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "代码文件",
      "文件夹",
      "展开文件"
    ],
    rtl: !0
  },
  {
    id: 1019,
    title: "转换文件夹",
    name: "folder-conversion",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "转换文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1020,
    title: "转换文件夹1",
    name: "folder-conversion-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "转换文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1021,
    title: "文件夹-下载",
    name: "folder-download",
    category: "Office",
    categoryCN: "办公文档",
    author: "常留留",
    tag: [
      "文件夹",
      "下载文件",
      "保存本地"
    ],
    rtl: !0
  },
  {
    id: 1022,
    title: "失败文件夹",
    name: "folder-failed",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "失败文件",
      "文件夹",
      "关闭",
      "删除"
    ],
    rtl: !0
  },
  {
    id: 1023,
    title: "失败文件夹1",
    name: "folder-failed-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "失败文件",
      "文件夹",
      "关闭",
      "删除"
    ],
    rtl: !0
  },
  {
    id: 1024,
    title: "收藏文件夹",
    name: "folder-focus",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "收藏文件",
      "文件夹",
      "星级文件"
    ],
    rtl: !0
  },
  {
    id: 1025,
    title: "收藏文件夹1",
    name: "folder-focus-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "收藏文件",
      "文件夹",
      "星级文件",
      "标记"
    ],
    rtl: !0
  },
  {
    id: 1026,
    title: "加密文件夹",
    name: "folder-lock",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "加密文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1027,
    title: "加密文件夹1",
    name: "folder-lock-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "加密文件",
      "私密文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1028,
    title: "文件夹-删除",
    name: "folder-minus",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件夹",
      "删除",
      "办公",
      "减去"
    ],
    rtl: !0
  },
  {
    id: 1029,
    title: "音乐文件夹",
    name: "folder-music",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "音乐文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1030,
    title: "音乐文件夹1",
    name: "folder-music-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "音乐文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1031,
    title: "文件夹1",
    name: "folder-one",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1032,
    title: "文件夹-开",
    name: "folder-open",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件夹",
      "办公",
      "打开",
      "文档"
    ],
    rtl: !0
  },
  {
    id: 1033,
    title: "文件夹-添加",
    name: "folder-plus",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件夹",
      "添加",
      "办公",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 1034,
    title: "文件夹保护",
    name: "folder-protection",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件保护",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1035,
    title: "文件夹保护1",
    name: "folder-protection-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件保护",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1036,
    title: "高质量文件夹",
    name: "folder-quality",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "钻石文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1037,
    title: "高质量文件夹1",
    name: "folder-quality-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "钻石文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1038,
    title: "搜索文件夹",
    name: "folder-search",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "搜索文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1039,
    title: "搜索文件夹1",
    name: "folder-search-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "搜索文件",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1040,
    title: "文件夹设置",
    name: "folder-settings",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件设置",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1041,
    title: "文件夹设置1",
    name: "folder-settings-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件设置",
      "文件夹"
    ],
    rtl: !0
  },
  {
    id: 1042,
    title: "成功文件夹",
    name: "folder-success",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "成功文件",
      "文件夹",
      "完成"
    ],
    rtl: !0
  },
  {
    id: 1043,
    title: "成功文件夹1",
    name: "folder-success-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "成功文件",
      "文件夹",
      "完成"
    ],
    rtl: !0
  },
  {
    id: 1044,
    title: "文件夹-上传",
    name: "folder-upload",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "文件夹",
      "上传文件",
      "本地上传"
    ],
    rtl: !0
  },
  {
    id: 1045,
    title: "退出文件夹",
    name: "folder-withdrawal",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "退出文件",
      "文件夹",
      "转发"
    ],
    rtl: !0
  },
  {
    id: 1046,
    title: "退出文件夹1",
    name: "folder-withdrawal-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "退出文件",
      "文件夹",
      "转发"
    ],
    rtl: !0
  },
  {
    id: 1047,
    title: "按跟进日期排序",
    name: "follow-up-date-sort",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "跟进",
      "箭头",
      "下一步",
      "排序",
      "图表",
      "数据"
    ],
    rtl: !0
  },
  {
    id: 1048,
    title: "字体搜索",
    name: "font-search",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "字体",
      "检索",
      "搜索",
      "查找"
    ],
    rtl: !0
  },
  {
    id: 1049,
    title: "字号大小",
    name: "font-size",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "字号大小",
      "文字",
      "字体样式"
    ],
    rtl: !0
  },
  {
    id: 1050,
    title: "字体大小",
    name: "font-size-two",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "字体大小",
      "编辑",
      "调整"
    ],
    rtl: !0
  },
  {
    id: 1051,
    title: "脚",
    name: "foot",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1052,
    title: "足球",
    name: "football",
    category: "Sports",
    categoryCN: "体育运动",
    author: "齐奉飞",
    tag: [
      "足球",
      "运动",
      "体育"
    ],
    rtl: !1
  },
  {
    id: 1053,
    title: "禁止",
    name: "forbid",
    category: "Character",
    categoryCN: "符号标识",
    author: "齐奉飞",
    tag: [
      "禁止",
      "不允许"
    ],
    rtl: !0
  },
  {
    id: 1054,
    title: "分叉",
    name: "fork",
    category: "Connect",
    categoryCN: "链接",
    author: "齐奉飞",
    tag: [
      "交叉",
      "拷贝代码",
      "复制",
      "Git"
    ],
    rtl: !1
  },
  {
    id: 1055,
    title: "叉子勺子",
    name: "fork-spoon",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "叉子勺子",
      "餐饮",
      "吃饭",
      "工具"
    ],
    rtl: !0
  },
  {
    id: 1056,
    title: "表格",
    name: "form",
    category: "Charts",
    categoryCN: "数据图表",
    author: "刘心乐",
    tag: [
      "表格",
      "图表",
      "数据",
      "列表",
      "排版"
    ],
    rtl: !1
  },
  {
    id: 1057,
    title: "形式",
    name: "form-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "布局",
      "样式",
      "模块",
      "单元"
    ],
    rtl: !0
  },
  {
    id: 1058,
    title: "格式",
    name: "format",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "类型",
      "分类",
      "清除",
      "刷子"
    ],
    rtl: !0
  },
  {
    id: 1059,
    title: "格式刷",
    name: "format-brush",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "格式",
      "刷子",
      "粉刷",
      "上色",
      "装修"
    ],
    rtl: !0
  },
  {
    id: 1060,
    title: "公式",
    name: "formula",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "公式",
      "算法",
      "计算",
      "复杂",
      "数学"
    ],
    rtl: !0
  },
  {
    id: 1061,
    title: "粉底液",
    name: "foundation-makeup",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "泡沫",
      "乳液"
    ],
    rtl: !0
  },
  {
    id: 1062,
    title: "四",
    name: "four",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "四",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1063,
    title: "四个箭头",
    name: "four-arrows",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "箭头",
      "雪花",
      "旋转",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 1064,
    title: "四",
    name: "four-four",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "四",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1065,
    title: "按键四",
    name: "four-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "四",
      "4",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 1066,
    title: "四片叶子",
    name: "four-leaves",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "四片叶子"
    ],
    rtl: !1
  },
  {
    id: 1067,
    title: "四点连接",
    name: "four-point-connection",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "锚点",
      "抽象"
    ],
    rtl: !1
  },
  {
    id: 1068,
    title: "四点连接",
    name: "four-round-point-connection",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "四点连接",
      "抽象",
      "关联",
      "添加"
    ],
    rtl: !0
  },
  {
    id: 1069,
    title: "foursquare",
    name: "foursquare",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "社交",
      "logo",
      "沟通",
      "foursquare"
    ],
    rtl: !0
  },
  {
    id: 1070,
    title: "冻结列",
    name: "freeze-column",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "固定首列",
      "阴影",
      "范围",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 1071,
    title: "冻结行",
    name: "freeze-line",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "固定首行",
      "阴影",
      "范围",
      "排版"
    ],
    rtl: !1
  },
  {
    id: 1072,
    title: "冻结行列",
    name: "freezing-line-column",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "固定首行首列",
      "阴影",
      "范围",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 1073,
    title: "炸薯条",
    name: "french-fries",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "薯条",
      "炸土豆",
      "土豆条",
      "零食"
    ],
    rtl: !0
  },
  {
    id: 1074,
    title: "朋友圈",
    name: "friends-circle",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "朋友圈",
      "快门",
      "微信",
      "拍照",
      "社交",
      "晒图",
      "logo",
      "螺旋",
      "循环旋转"
    ],
    rtl: !0
  },
  {
    id: 1075,
    title: "军舰",
    name: "frigate",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1076,
    title: "青蛙",
    name: "frog",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1077,
    title: "别嘴生气",
    name: "frowning-face-whit-open-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "别嘴生气",
      "表情",
      "惊呆"
    ],
    rtl: !1
  },
  {
    id: 1078,
    title: "果树",
    name: "fruiter",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1079,
    title: "礼服长裙",
    name: "full-dress-longuette",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "礼服",
      "裙子",
      "婚纱",
      "服装",
      "连衣裙"
    ],
    rtl: !1
  },
  {
    id: 1080,
    title: "全局放大",
    name: "full-screen",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "全屏",
      "放大",
      "扩展"
    ],
    rtl: !1
  },
  {
    id: 1081,
    title: "全局放大1",
    name: "full-screen-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "全屏",
      "打开",
      "展开",
      "放大"
    ],
    rtl: !1
  },
  {
    id: 1082,
    title: "全屏播放",
    name: "full-screen-play",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "全屏播放",
      "播放",
      "媒体",
      "投屏"
    ],
    rtl: !0
  },
  {
    id: 1083,
    title: "全局放大2",
    name: "full-screen-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "放大",
      "全屏"
    ],
    rtl: !0
  },
  {
    id: 1084,
    title: "选择",
    name: "full-selection",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [
      "更换文件",
      "全部选择"
    ],
    rtl: !0
  },
  {
    id: 1085,
    title: "全宽",
    name: "fullwidth",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "全宽",
      "满宽",
      "扩大"
    ],
    rtl: !1
  },
  {
    id: 1086,
    title: "基金",
    name: "funds",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "资金",
      "财务",
      "成本",
      "金币",
      "存款",
      "储蓄",
      "金融",
      "统计"
    ],
    rtl: !0
  },
  {
    id: 1087,
    title: "未来大厦",
    name: "future-build-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "大厦",
      "建筑",
      "办公楼"
    ],
    rtl: !1
  },
  {
    id: 1088,
    title: "未来建筑",
    name: "future-build-three",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "楼房",
      "大厦",
      "建筑",
      "办公楼"
    ],
    rtl: !1
  },
  {
    id: 1089,
    title: "未来魔都",
    name: "future-build-two",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "楼房",
      "大厦"
    ],
    rtl: !1
  },
  {
    id: 1090,
    title: "游戏",
    name: "game",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "游戏",
      "娱乐",
      "玩耍"
    ],
    rtl: !0
  },
  {
    id: 1091,
    title: "游戏机",
    name: "game-console",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "游戏",
      "电子",
      "设备",
      "娱乐",
      "上瘾",
      "消遣",
      "沉迷",
      "活动"
    ],
    rtl: !0
  },
  {
    id: 1092,
    title: "移动游戏机",
    name: "game-console-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "游戏机",
      "游戏手柄"
    ],
    rtl: !0
  },
  {
    id: 1093,
    title: "游戏表情",
    name: "game-emoji",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "游戏表情",
      "图形拼接",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 1094,
    title: "游戏手柄",
    name: "game-handle",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "游戏",
      "手柄",
      "操作",
      "玩"
    ],
    rtl: !0
  },
  {
    id: 1095,
    title: "游戏机",
    name: "game-ps",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "游戏机",
      "索尼",
      "游戏",
      "图形拼接",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 1096,
    title: "游戏手柄",
    name: "game-three",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "游戏机",
      "游戏手柄",
      "控制器",
      "遥控器"
    ],
    rtl: !0
  },
  {
    id: 1097,
    title: "游戏",
    name: "game-two",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "游戏",
      "手柄",
      "操作",
      "玩"
    ],
    rtl: !1
  },
  {
    id: 1098,
    title: "游戏机",
    name: "gamepad",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1099,
    title: "车库",
    name: "garage",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "门",
      "车库",
      "卷帘门",
      "收缩门",
      "仓库"
    ],
    rtl: !1
  },
  {
    id: 1100,
    title: "大蒜",
    name: "garlic",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "大蒜",
      "蒜头",
      "蔬菜",
      "蒜"
    ],
    rtl: !0
  },
  {
    id: 1101,
    title: "气体",
    name: "gas",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1102,
    title: "肠胃",
    name: "gastrointestinal",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "内科",
      "胃",
      "器官"
    ],
    rtl: !0
  },
  {
    id: 1103,
    title: "大门",
    name: "gate",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "门",
      "建筑",
      "寺庙",
      "亭子",
      "景区"
    ],
    rtl: !1
  },
  {
    id: 1104,
    title: "检票机",
    name: "gate-machine",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "检票机",
      "闸机",
      "检票",
      "过关"
    ],
    rtl: !0
  },
  {
    id: 1105,
    title: "纱布",
    name: "gauze",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1106,
    title: "拍卖",
    name: "gavel",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1107,
    title: "双子座",
    name: "gemini",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1108,
    title: "全科",
    name: "general-branch",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "添加",
      "科室",
      "全部科室"
    ],
    rtl: !1
  },
  {
    id: 1109,
    title: "几何花",
    name: "geometric-flowers",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "几何",
      "圆环",
      "抽象",
      "花形",
      "环绕"
    ],
    rtl: !1
  },
  {
    id: 1110,
    title: "病菌",
    name: "germs",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "细菌",
      "病毒",
      "菌体",
      "病菌",
      "细小"
    ],
    rtl: !0
  },
  {
    id: 1111,
    title: "幽灵",
    name: "ghost",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "幽灵",
      "游戏",
      "恐怖",
      "可怕"
    ],
    rtl: !0
  },
  {
    id: 1112,
    title: "礼物",
    name: "gift",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "礼盒",
      "礼品",
      "惊喜",
      "神秘"
    ],
    rtl: !1
  },
  {
    id: 1113,
    title: "礼盒",
    name: "gift-bag",
    category: "Money",
    categoryCN: "电商财产",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1114,
    title: "礼物盒",
    name: "gift-box",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "礼物盒",
      "神秘"
    ],
    rtl: !0
  },
  {
    id: 1115,
    title: "女孩",
    name: "girl",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "人",
      "性别",
      "女"
    ],
    rtl: !1
  },
  {
    id: 1116,
    title: "女孩1",
    name: "girl-one",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "人",
      "性别",
      "女"
    ],
    rtl: !1
  },
  {
    id: 1117,
    title: "女孩2",
    name: "girl-two",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "人",
      "性别",
      "女"
    ],
    rtl: !1
  },
  {
    id: 1118,
    title: "github ",
    name: "github",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "代码共享社区",
      "开发",
      "社区",
      "logo",
      "小猫"
    ],
    rtl: !0
  },
  {
    id: 1119,
    title: "github-one",
    name: "github-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "代码共享社区",
      "开发",
      "社区",
      "logo",
      "小猫"
    ],
    rtl: !0
  },
  {
    id: 1120,
    title: "gitlab",
    name: "gitlab",
    category: "Brand",
    categoryCN: "品牌",
    author: "杨威",
    tag: [
      "代码共享社区",
      "开发",
      "社区"
    ],
    rtl: !1
  },
  {
    id: 1121,
    title: "眼镜",
    name: "glasses",
    category: "Clothes",
    categoryCN: "服饰",
    author: "金磊",
    tag: [
      "眼镜",
      "近视",
      "镜片",
      "观察",
      "搜索"
    ],
    rtl: !1
  },
  {
    id: 1122,
    title: "眼镜",
    name: "glasses-one",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "眼镜",
      "墨镜",
      "复古镜",
      "圆镜",
      "太阳镜"
    ],
    rtl: !1
  },
  {
    id: 1123,
    title: "眼镜3",
    name: "glasses-three",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1124,
    title: "全球",
    name: "globe",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "全球",
      "地球仪",
      "玩具"
    ],
    rtl: !0
  },
  {
    id: 1125,
    title: "胶手套",
    name: "glove",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "胶手套",
      "手套",
      "保暖",
      "橡胶手套",
      "塑胶手套"
    ],
    rtl: !0
  },
  {
    id: 1126,
    title: "前进",
    name: "go-ahead",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1127,
    title: "下一曲",
    name: "go-end",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "下一个",
      "下一首",
      "右",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1128,
    title: "继续",
    name: "go-on",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "继续",
      "箭头",
      "下一步",
      "前进"
    ],
    rtl: !0
  },
  {
    id: 1129,
    title: "上一曲",
    name: "go-start",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "上一个",
      "上一首",
      "左",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1130,
    title: "高脚杯",
    name: "goblet",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "高脚杯",
      "玻璃杯",
      "红酒杯"
    ],
    rtl: !1
  },
  {
    id: 1131,
    title: "高脚杯裂开",
    name: "goblet-cracking",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "高脚杯裂开",
      "破碎"
    ],
    rtl: !0
  },
  {
    id: 1132,
    title: "高脚杯满了",
    name: "goblet-full",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "高脚杯",
      "玻璃杯",
      "酒杯"
    ],
    rtl: !0
  },
  {
    id: 1133,
    title: "高脚杯",
    name: "goblet-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "杯子",
      "酒杯",
      "玻璃杯"
    ],
    rtl: !0
  },
  {
    id: 1134,
    title: "金牌",
    name: "gold-medal",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "金牌",
      "奖牌",
      "第一名"
    ],
    rtl: !0
  },
  {
    id: 1135,
    title: "金牌",
    name: "gold-medal-two",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "金牌",
      "奖牌",
      "第一名"
    ],
    rtl: !0
  },
  {
    id: 1136,
    title: "高尔夫球场",
    name: "golf-course",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "高尔夫球场",
      "运动"
    ],
    rtl: !0
  },
  {
    id: 1137,
    title: "功夫",
    name: "gongfu",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1138,
    title: "好的",
    name: "good",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "好",
      "认可",
      "肯定",
      "赞"
    ],
    rtl: !0
  },
  {
    id: 1139,
    title: "优秀",
    name: "good-one",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "赞",
      "好的",
      "认可"
    ],
    rtl: !0
  },
  {
    id: 1140,
    title: "赞",
    name: "good-two",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "好",
      "认可",
      "肯定"
    ],
    rtl: !0
  },
  {
    id: 1141,
    title: "谷歌",
    name: "google",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "搜索",
      "search",
      "company",
      "Google",
      "LLC",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1142,
    title: "谷歌广告",
    name: "google-ads",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "广告",
      "谷歌",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1143,
    title: "运动相机",
    name: "gopro",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍",
      "电影",
      "放映"
    ],
    rtl: !0
  },
  {
    id: 1144,
    title: "汽车导航",
    name: "gps",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "汽车导航"
    ],
    rtl: !1
  },
  {
    id: 1145,
    title: "图形设计",
    name: "graphic-design",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "图形拼接",
      "几何",
      "组合",
      "叠加"
    ],
    rtl: !0
  },
  {
    id: 1146,
    title: "图形组合",
    name: "graphic-design-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "图形组合",
      "拼接",
      "组合",
      "几何"
    ],
    rtl: !1
  },
  {
    id: 1147,
    title: "圆形组合",
    name: "graphic-stitching",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆形组合",
      "组合",
      "拼接",
      "花形"
    ],
    rtl: !1
  },
  {
    id: 1148,
    title: "圆形组合",
    name: "graphic-stitching-four",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "连接",
      "抽象",
      "选中锚点"
    ],
    rtl: !0
  },
  {
    id: 1149,
    title: "圆形组合",
    name: "graphic-stitching-three",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "方形",
      "连接",
      "抽象"
    ],
    rtl: !1
  },
  {
    id: 1150,
    title: "长城",
    name: "great-wall",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "墙壁",
      "城墙",
      "长城",
      "景区"
    ],
    rtl: !1
  },
  {
    id: 1151,
    title: "温室房",
    name: "green-house",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "楼房",
      "大厦"
    ],
    rtl: !1
  },
  {
    id: 1152,
    title: "绿色新能源",
    name: "green-new-energy",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "绿色新能源"
    ],
    rtl: !1
  },
  {
    id: 1153,
    title: "四宫格",
    name: "grid-four",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "四宫格",
      "网格"
    ],
    rtl: !1
  },
  {
    id: 1154,
    title: "九宫格",
    name: "grid-nine",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "九宫格",
      "表格",
      "插入表格",
      "网格"
    ],
    rtl: !1
  },
  {
    id: 1155,
    title: "16宫格",
    name: "grid-sixteen",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "十六宫格",
      "网格"
    ],
    rtl: !1
  },
  {
    id: 1156,
    title: "网格3",
    name: "grid-three",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "网格",
      "三个格子",
      "分布",
      "布局",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 1157,
    title: "网格2",
    name: "grid-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "网格",
      "四个格子",
      "方格"
    ],
    rtl: !1
  },
  {
    id: 1158,
    title: "呲牙张嘴",
    name: "grimacing-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "呲牙张嘴",
      "表情",
      "害怕",
      "恐慌"
    ],
    rtl: !1
  },
  {
    id: 1159,
    title: "开心",
    name: "grinning-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "开心",
      "表情",
      "笑"
    ],
    rtl: !1
  },
  {
    id: 1160,
    title: "张嘴笑",
    name: "grinning-face-with-open-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "张嘴笑",
      "表情",
      "开心"
    ],
    rtl: !1
  },
  {
    id: 1161,
    title: "笑眯眼",
    name: "grinning-face-with-squinting-eyes",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "笑眯眼",
      "表情",
      "开心",
      "快乐"
    ],
    rtl: !1
  },
  {
    id: 1162,
    title: "闭眼笑",
    name: "grinning-face-with-tightly-closed-eyes",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "闭眼笑",
      "表情",
      "眯眼"
    ],
    rtl: !1
  },
  {
    id: 1163,
    title: "张嘴闭眼笑",
    name: "grinning-face-with-tightly-closed-eyes-open-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "张嘴闭眼笑",
      "表情",
      "开心"
    ],
    rtl: !1
  },
  {
    id: 1164,
    title: "成组",
    name: "group",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "组合",
      "成组",
      "打组",
      "选中"
    ],
    rtl: !0
  },
  {
    id: 1165,
    title: "指示牌",
    name: "guide-board",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "指示牌",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 1166,
    title: "体操2",
    name: "gymnastics",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "体操",
      "运动",
      "跳舞",
      "跳动",
      "活动",
      "训练",
      "舞蹈",
      "挥舞",
      "舞动",
      "放松",
      "热身",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 1167,
    title: "体操1",
    name: "gymnastics-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "体操",
      "运动",
      "跳舞",
      "跳动",
      "活动",
      "训练",
      "舞蹈",
      "挥舞",
      "舞动",
      "放松",
      "热身",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 1168,
    title: "h",
    name: "h",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "字号",
      "字体",
      "标题"
    ],
    rtl: !1
  },
  {
    id: 1169,
    title: "标题",
    name: "h1",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "标题1",
      "文字",
      "文本",
      "第一级别标题"
    ],
    rtl: !0
  },
  {
    id: 1170,
    title: "标题1",
    name: "h2",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "标题2",
      "文字",
      "文本",
      "第二级别标题"
    ],
    rtl: !0
  },
  {
    id: 1171,
    title: "标题2",
    name: "h3",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "标题3",
      "文字",
      "文本",
      "第三级别标题"
    ],
    rtl: !0
  },
  {
    id: 1172,
    title: "发梳",
    name: "hair-brush",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "梳子"
    ],
    rtl: !0
  },
  {
    id: 1173,
    title: "发夹",
    name: "hair-clip",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "夹子"
    ],
    rtl: !0
  },
  {
    id: 1174,
    title: "吹风机",
    name: "hair-dryer",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "吹风机"
    ],
    rtl: !0
  },
  {
    id: 1175,
    title: "吹风机",
    name: "hair-dryer-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "吹风",
      "吹头发",
      "加热",
      "热风",
      "吹风",
      "吹造型"
    ],
    rtl: !0
  },
  {
    id: 1176,
    title: "光晕",
    name: "halo",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "虚线圆环",
      "光照",
      "扩散",
      "焦距"
    ],
    rtl: !0
  },
  {
    id: 1177,
    title: "汉堡",
    name: "hamburger",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "汉堡",
      "美食",
      "餐饮",
      "快餐"
    ],
    rtl: !1
  },
  {
    id: 1178,
    title: "汉堡图标",
    name: "hamburger-button",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "导航",
      "菜单",
      "更多",
      "展开"
    ],
    rtl: !1
  },
  {
    id: 1179,
    title: "汉堡",
    name: "hamburger-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "汉堡包",
      "面包",
      "食物",
      "美食",
      "食品",
      "餐饮"
    ],
    rtl: !0
  },
  {
    id: 1180,
    title: "铁锤",
    name: "hammer-and-anvil",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "锤子",
      "铁具",
      "工具"
    ],
    rtl: !0
  },
  {
    id: 1181,
    title: "护手霜",
    name: "hand-cream",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "面霜",
      "洗化"
    ],
    rtl: !0
  },
  {
    id: 1182,
    title: "向下指",
    name: "hand-down",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "向下",
      "下面",
      "手",
      "手势",
      "hand"
    ],
    rtl: !0
  },
  {
    id: 1183,
    title: "手动拖动",
    name: "hand-drag",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "拖动",
      "滑动",
      "手滑单手滑动",
      "右滑"
    ],
    rtl: !0
  },
  {
    id: 1184,
    title: "向左指",
    name: "hand-left",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "向左",
      "左边",
      "手",
      "手势",
      "hand"
    ],
    rtl: !0
  },
  {
    id: 1185,
    title: "手绘板",
    name: "hand-painted-plate",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "绘制",
      "绘画",
      "控制板",
      "触控板",
      "手绘"
    ],
    rtl: !0
  },
  {
    id: 1186,
    title: "向右指",
    name: "hand-right",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "向右",
      "右边",
      "手",
      "手势",
      "hand"
    ],
    rtl: !0
  },
  {
    id: 1187,
    title: "向上指",
    name: "hand-up",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "手",
      "hand",
      "手势",
      "向上",
      "上面"
    ],
    rtl: !0
  },
  {
    id: 1188,
    title: "手提包",
    name: "handbag",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "皮包",
      "公文包",
      "包包",
      "电脑包"
    ],
    rtl: !1
  },
  {
    id: 1189,
    title: "掌机",
    name: "handheld",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "掌机",
      "手机",
      "游戏机",
      "主机"
    ],
    rtl: !0
  },
  {
    id: 1190,
    title: "手柄A",
    name: "handle-a",
    category: "Game",
    categoryCN: "游戏",
    author: "李宁",
    tag: [
      "a"
    ],
    rtl: !1
  },
  {
    id: 1191,
    title: "手柄B",
    name: "handle-b",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "b"
    ],
    rtl: !0
  },
  {
    id: 1192,
    title: "手柄C",
    name: "handle-c",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "c"
    ],
    rtl: !0
  },
  {
    id: 1193,
    title: "手柄下",
    name: "handle-down",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "下"
    ],
    rtl: !1
  },
  {
    id: 1194,
    title: "手柄左",
    name: "handle-left",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "左"
    ],
    rtl: !0
  },
  {
    id: 1195,
    title: "手柄右",
    name: "handle-right",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "右"
    ],
    rtl: !0
  },
  {
    id: 1196,
    title: "手柄圆圈",
    name: "handle-round",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "圆形"
    ],
    rtl: !1
  },
  {
    id: 1197,
    title: "手柄方形",
    name: "handle-square",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "方形"
    ],
    rtl: !1
  },
  {
    id: 1198,
    title: "手柄三角形",
    name: "handle-triangle",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "三角形"
    ],
    rtl: !1
  },
  {
    id: 1199,
    title: "手柄上",
    name: "handle-up",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "上"
    ],
    rtl: !1
  },
  {
    id: 1200,
    title: "手柄X",
    name: "handle-x",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "x"
    ],
    rtl: !1
  },
  {
    id: 1201,
    title: "手柄Y",
    name: "handle-y",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "y"
    ],
    rtl: !1
  },
  {
    id: 1202,
    title: "手柄Z",
    name: "handle-z",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "z"
    ],
    rtl: !0
  },
  {
    id: 1203,
    title: "举手",
    name: "hands",
    category: "Peoples",
    categoryCN: "账户",
    author: "常留留",
    tag: [
      "手",
      "听课",
      "教学",
      "这里",
      "抬手"
    ],
    rtl: !0
  },
  {
    id: 1204,
    title: "洗手",
    name: "handwashing",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "洗手",
      "水资源",
      "清洁"
    ],
    rtl: !0
  },
  {
    id: 1205,
    title: "洗手液",
    name: "handwashing-fluid",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "酒精",
      "清洁",
      "洗手液",
      "滴露"
    ],
    rtl: !0
  },
  {
    id: 1206,
    title: "中式汉服",
    name: "hanfu-chinese-style",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "上衣",
      "服装",
      "汉服",
      "外套",
      "衣服"
    ],
    rtl: !1
  },
  {
    id: 1207,
    title: "晾衣架",
    name: "hanger",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "危险",
      "挂钩",
      "晾衣架"
    ],
    rtl: !0
  },
  {
    id: 1208,
    title: "衣架",
    name: "hanger-one",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "撑衣架",
      "衣帽架"
    ],
    rtl: !0
  },
  {
    id: 1209,
    title: "衣架",
    name: "hanger-two",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "衣架",
      "晒衣服",
      "晾衣服"
    ],
    rtl: !0
  },
  {
    id: 1210,
    title: "硬盘",
    name: "hard-disk",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "储存",
      "存储",
      "移动硬盘",
      "store"
    ],
    rtl: !0
  },
  {
    id: 1211,
    title: "移动硬盘",
    name: "hard-disk-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1212,
    title: "危害",
    name: "harm",
    category: "Safe",
    categoryCN: "安全防护",
    author: "白明泽",
    tag: [
      "危险",
      "防护",
      "盾牌",
      "防护失败"
    ],
    rtl: !0
  },
  {
    id: 1213,
    title: "井号键",
    name: "hashtag-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "井号",
      "按键"
    ],
    rtl: !1
  },
  {
    id: 1214,
    title: "帽子",
    name: "hat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "服装",
      "道具",
      "魔术"
    ],
    rtl: !1
  },
  {
    id: 1215,
    title: "HDD",
    name: "hdd",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "hdd"
    ],
    rtl: !0
  },
  {
    id: 1216,
    title: "HDMI线",
    name: "hdmi-cable",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "数据线",
      "hdmi"
    ],
    rtl: !1
  },
  {
    id: 1217,
    title: "HDMI接口",
    name: "hdmi-connector",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "数据线",
      "hdmi"
    ],
    rtl: !1
  },
  {
    id: 1218,
    title: "耳机声音",
    name: "headphone-sound",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "耳机声音"
    ],
    rtl: !0
  },
  {
    id: 1219,
    title: "耳机",
    name: "headset",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [
      "耳麦",
      "客服",
      "耳机"
    ],
    rtl: !1
  },
  {
    id: 1220,
    title: "耳机",
    name: "headset-one",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [
      "客服",
      "二级",
      "耳麦",
      "服务"
    ],
    rtl: !1
  },
  {
    id: 1221,
    title: "耳机",
    name: "headset-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "听筒",
      "收音器",
      "扩音器",
      "音响"
    ],
    rtl: !0
  },
  {
    id: 1222,
    title: "头饰",
    name: "headwear",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "装饰",
      "发夹",
      "发箍"
    ],
    rtl: !0
  },
  {
    id: 1223,
    title: "健康",
    name: "health",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "医疗",
      "体检",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1224,
    title: "保健品",
    name: "health-products",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "药品",
      "保健"
    ],
    rtl: !0
  },
  {
    id: 1225,
    title: "健康认知",
    name: "healthy-recognition",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "心",
      "健康",
      "收藏",
      "喜欢"
    ],
    rtl: !1
  },
  {
    id: 1226,
    title: "心脏",
    name: "heart",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "心",
      "脉搏",
      "跳动",
      "器官",
      "心脏",
      "医疗"
    ],
    rtl: !0
  },
  {
    id: 1227,
    title: "心形气球",
    name: "heart-ballon",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "气球",
      "升空",
      "起飞"
    ],
    rtl: !0
  },
  {
    id: 1228,
    title: "心率",
    name: "heart-rate",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1229,
    title: "心跳",
    name: "heartbeat",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "心跳",
      "呼吸",
      "喘气",
      "心脏",
      "心电图",
      "跳动",
      "心脏",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 1230,
    title: "加热电阻",
    name: "heater-resistor",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "电阻"
    ],
    rtl: !0
  },
  {
    id: 1231,
    title: "重金属",
    name: "heavy-metal",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "金属",
      "黄金",
      "金条",
      "金融",
      "财务",
      "财富"
    ],
    rtl: !0
  },
  {
    id: 1232,
    title: "大雨",
    name: "heavy-rain",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "大雨",
      "下雨",
      "洪水"
    ],
    rtl: !0
  },
  {
    id: 1233,
    title: "大风",
    name: "heavy-wind",
    category: "Weather",
    categoryCN: "天气",
    author: "",
    tag: [
      "风"
    ],
    rtl: !0
  },
  {
    id: 1234,
    title: "头盔",
    name: "helmet",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "头盔",
      "橄榄球头盔",
      "铁盔",
      "盔",
      "护具",
      "防护",
      "半盔",
      "全盔",
      "帽子",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1235,
    title: "安全帽",
    name: "helmet-one",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "安全",
      "帽子"
    ],
    rtl: !1
  },
  {
    id: 1236,
    title: "帮助",
    name: "help",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "问题",
      "疑问",
      "帮助"
    ],
    rtl: !0
  },
  {
    id: 1237,
    title: "帮助中心",
    name: "helpcenter",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "问题",
      "疑问",
      "帮助"
    ],
    rtl: !0
  },
  {
    id: 1238,
    title: "六边形1",
    name: "hexagon-one",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1239,
    title: "六边条",
    name: "hexagon-strip",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "六边条",
      "花形",
      "组合图形"
    ],
    rtl: !1
  },
  {
    id: 1240,
    title: "六边立体",
    name: "hexagonal",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "六边立体",
      "花纹"
    ],
    rtl: !1
  },
  {
    id: 1241,
    title: "打招呼",
    name: "hi",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "手掌",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1242,
    title: "高跟鞋",
    name: "high-heeled-shoes",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "鞋子",
      "皮鞋",
      "高跟鞋"
    ],
    rtl: !0
  },
  {
    id: 1243,
    title: "高亮",
    name: "high-light",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "高亮",
      "荧光笔",
      "划重点",
      "突出",
      "口红"
    ],
    rtl: !0
  },
  {
    id: 1244,
    title: "高铁",
    name: "high-speed-rail",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1245,
    title: "河马",
    name: "hippo",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1246,
    title: "直方图",
    name: "histogram",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "折线图",
      "数据分析",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 1247,
    title: "历史记录",
    name: "history",
    category: "Time",
    categoryCN: "时间日期",
    author: "常留留",
    tag: [
      "历史",
      "记录",
      "时光机"
    ],
    rtl: !0
  },
  {
    id: 1248,
    title: "历史搜索",
    name: "history-query",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "搜索"
    ],
    rtl: !0
  },
  {
    id: 1249,
    title: "曲棍球",
    name: "hockey",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "打",
      "运动",
      "比赛",
      "体育",
      "球类",
      "球",
      "进球",
      "运球",
      "助攻",
      "棍球"
    ],
    rtl: !0
  },
  {
    id: 1250,
    title: "承接",
    name: "hold",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "拿起",
      "拱手"
    ],
    rtl: !0
  },
  {
    id: 1251,
    title: "托起",
    name: "hold-interface",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "拿起",
      "拱手",
      "交接"
    ],
    rtl: !0
  },
  {
    id: 1252,
    title: "孕育",
    name: "hold-seeds",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "拿起",
      "拱手",
      "交接"
    ],
    rtl: !0
  },
  {
    id: 1253,
    title: "牵手",
    name: "holding-hands",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "握手",
      "携手",
      "合作"
    ],
    rtl: !0
  },
  {
    id: 1254,
    title: "圣剑",
    name: "holy-sword",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "剑",
      "刺刀",
      "刀刃",
      "武器"
    ],
    rtl: !1
  },
  {
    id: 1255,
    title: "首页",
    name: "home",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "首页",
      "房子",
      "主页",
      "家"
    ],
    rtl: !1
  },
  {
    id: 1256,
    title: "首页",
    name: "home-two",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "首页",
      "家",
      "主页",
      "店铺",
      "房子"
    ],
    rtl: !1
  },
  {
    id: 1257,
    title: "民宿",
    name: "homestay",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "民宿",
      "酒店",
      "度假",
      "农家乐",
      "度假村"
    ],
    rtl: !0
  },
  {
    id: 1258,
    title: "蜂蜜",
    name: "honey",
    category: "Foods",
    categoryCN: "食品",
    author: "常留留",
    tag: [
      "滋补",
      "补品",
      "养生",
      "蜂蜜"
    ],
    rtl: !0
  },
  {
    id: 1259,
    title: "蜂蜜",
    name: "honey-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "糖",
      "甜品",
      "甜食",
      "蜜糖"
    ],
    rtl: !0
  },
  {
    id: 1260,
    title: "水平间距",
    name: "horizontal-spacing-between-items",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "水平间距",
      "平行"
    ],
    rtl: !1
  },
  {
    id: 1261,
    title: "水平整理",
    name: "horizontal-tidy-up",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "水平间距",
      "平行"
    ],
    rtl: !1
  },
  {
    id: 1262,
    title: "水平居中对齐",
    name: "horizontally-centered",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "水平间距",
      "平行",
      "居中对齐"
    ],
    rtl: !1
  },
  {
    id: 1263,
    title: "生肖马",
    name: "horse-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1264,
    title: "医院",
    name: "hospital",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "就医",
      "看病",
      "就诊",
      "医疗"
    ],
    rtl: !0
  },
  {
    id: 1265,
    title: "病床",
    name: "hospital-bed",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1266,
    title: "医院4",
    name: "hospital-four",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1267,
    title: "医院3",
    name: "hospital-three",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1268,
    title: "医院",
    name: "hospital-two",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "医疗",
      "建筑",
      "医院",
      "药品",
      "治疗",
      "护理",
      "健康"
    ],
    rtl: !0
  },
  {
    id: 1269,
    title: "热气球",
    name: "hot-air-balloon",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "气球",
      "热气球",
      "氢气球"
    ],
    rtl: !0
  },
  {
    id: 1270,
    title: "火锅",
    name: "hot-pot",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "食物",
      "火锅",
      "火苗",
      "煮饭",
      "烹饪",
      "美味"
    ],
    rtl: !1
  },
  {
    id: 1271,
    title: "火锅",
    name: "hot-pot-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "餐饮",
      "火锅",
      "美食",
      "铜锅",
      "涮锅"
    ],
    rtl: !0
  },
  {
    id: 1272,
    title: "酒店",
    name: "hotel",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "大厦",
      "办公楼"
    ],
    rtl: !1
  },
  {
    id: 1273,
    title: "请勿打扫",
    name: "hotel-do-not-clean",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "请勿打扫",
      "房间"
    ],
    rtl: !0
  },
  {
    id: 1274,
    title: "请打扫",
    name: "hotel-please-clean",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "请打扫",
      "房间"
    ],
    rtl: !0
  },
  {
    id: 1275,
    title: "沙漏",
    name: "hourglass",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "沙子",
      "时间",
      "计时"
    ],
    rtl: !0
  },
  {
    id: 1276,
    title: "沙漏满",
    name: "hourglass-full",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "沙漏",
      "等待",
      "时间",
      "加载"
    ],
    rtl: !1
  },
  {
    id: 1277,
    title: "沙漏空",
    name: "hourglass-null",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "沙漏",
      "等待",
      "时间",
      "加载"
    ],
    rtl: !1
  },
  {
    id: 1278,
    title: "html5",
    name: "html-five",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "研发",
      "前端",
      "代码",
      "盾牌",
      "游戏"
    ],
    rtl: !0
  },
  {
    id: 1279,
    title: "从动装置",
    name: "hunting-gear",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "组件",
      "配置",
      "驱动",
      "装置",
      "从动"
    ],
    rtl: !0
  },
  {
    id: 1280,
    title: "抖音火山",
    name: "huoshanzhibo",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "音乐",
      "抖音火山版",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1281,
    title: "苹果电脑iMac",
    name: "i-mac",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "iMac",
      "苹果电脑",
      "电脑",
      "设备",
      "硬件",
      "PC"
    ],
    rtl: !0
  },
  {
    id: 1282,
    title: "冰激凌",
    name: "icecream",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "零食",
      "冷食",
      "冰",
      "凉食",
      "雪糕",
      "冰淇淋"
    ],
    rtl: !1
  },
  {
    id: 1283,
    title: "冰棍4",
    name: "icecream-five",
    category: "Foods",
    categoryCN: "食品",
    author: "齐奉飞",
    tag: [
      "零食",
      "冷食",
      "冰",
      "凉食",
      "雪糕"
    ],
    rtl: !1
  },
  {
    id: 1284,
    title: "冰激凌",
    name: "icecream-four",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "冰淇淋",
      "冷饮",
      "雪糕",
      "冰淇淋"
    ],
    rtl: !0
  },
  {
    id: 1285,
    title: "雪糕",
    name: "icecream-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "零食",
      "冷食",
      "冰",
      "凉食",
      "雪糕"
    ],
    rtl: !0
  },
  {
    id: 1286,
    title: "冰棍",
    name: "icecream-three",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "零食",
      "冷食",
      "冰",
      "凉食",
      "雪糕"
    ],
    rtl: !0
  },
  {
    id: 1287,
    title: "冰激凌",
    name: "icecream-two",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "零食",
      "冷食",
      "冰",
      "凉食",
      "雪糕",
      "冰淇淋"
    ],
    rtl: !1
  },
  {
    id: 1288,
    title: "名片",
    name: "id-card",
    category: "Others",
    categoryCN: "其它",
    author: "白明泽",
    tag: [
      "名片",
      "卡片",
      "证件"
    ],
    rtl: !0
  },
  {
    id: 1289,
    title: "身份证",
    name: "id-card-h",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "身份证",
      "ID",
      "工牌",
      "卡片"
    ],
    rtl: !0
  },
  {
    id: 1290,
    title: "身份证",
    name: "id-card-v",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "身份证",
      "ID",
      "工牌",
      "卡片"
    ],
    rtl: !0
  },
  {
    id: 1291,
    title: "图片文件",
    name: "image-files",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "图片",
      "图形",
      "图像",
      "影相"
    ],
    rtl: !0
  },
  {
    id: 1292,
    title: "失衡天平",
    name: "imbalance",
    category: "Safe",
    categoryCN: "安全防护",
    author: "金磊",
    tag: [
      "失衡天平",
      "比重",
      "测量",
      "衡量",
      "不公平"
    ],
    rtl: !0
  },
  {
    id: 1293,
    title: "进出口",
    name: "import-and-export",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "进口",
      "出口"
    ],
    rtl: !0
  },
  {
    id: 1294,
    title: "飞行巡航",
    name: "in-flight",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "环球旅行",
      "周游世界",
      "飞行"
    ],
    rtl: !0
  },
  {
    id: 1295,
    title: "收件箱",
    name: "inbox",
    category: "Office",
    categoryCN: "办公文档",
    author: "白明泽",
    tag: [
      "收件箱",
      "信箱",
      "邮箱",
      "邮件",
      "信件"
    ],
    rtl: !1
  },
  {
    id: 1296,
    title: "收件箱下载",
    name: "inbox-download-r",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "收件箱",
      "下载",
      "下传"
    ],
    rtl: !1
  },
  {
    id: 1297,
    title: "收件下载",
    name: "inbox-in",
    category: "Office",
    categoryCN: "办公文档",
    author: "白明泽",
    tag: [
      "收件箱",
      "信箱",
      "邮箱",
      "邮件",
      "信件",
      "下载",
      "接收"
    ],
    rtl: !1
  },
  {
    id: 1298,
    title: "收件上载",
    name: "inbox-out",
    category: "Office",
    categoryCN: "办公文档",
    author: "白明泽",
    tag: [
      "收件箱",
      "信箱",
      "邮箱",
      "邮件",
      "信件",
      "上传",
      "上载",
      "发送"
    ],
    rtl: !1
  },
  {
    id: 1299,
    title: "收件箱",
    name: "inbox-r",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "收件箱",
      "文件",
      "信封",
      "邮件"
    ],
    rtl: !1
  },
  {
    id: 1300,
    title: "收件成功",
    name: "inbox-success",
    category: "Office",
    categoryCN: "办公文档",
    author: "白明泽",
    tag: [
      "收件箱",
      "收件",
      "成功",
      "完成",
      "邮件",
      "信件"
    ],
    rtl: !0
  },
  {
    id: 1301,
    title: "收件箱成功",
    name: "inbox-success-r",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "收件箱",
      "成功",
      "发送成功"
    ],
    rtl: !0
  },
  {
    id: 1302,
    title: "收件箱上传",
    name: "inbox-upload-r",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "收件箱",
      "上载",
      "上传"
    ],
    rtl: !1
  },
  {
    id: 1303,
    title: "包容网关",
    name: "inclusive-gateway",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "网关",
      "菱形",
      "抽象",
      "几何"
    ],
    rtl: !1
  },
  {
    id: 1304,
    title: "转入",
    name: "income",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "消费",
      "收入",
      "到账"
    ],
    rtl: !0
  },
  {
    id: 1305,
    title: "收入",
    name: "income-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "消费",
      "收入",
      "到账"
    ],
    rtl: !0
  },
  {
    id: 1306,
    title: "输入",
    name: "incoming",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "输入",
      "传入",
      "数据",
      "录入",
      "线",
      "输入数据"
    ],
    rtl: !0
  },
  {
    id: 1307,
    title: "涨幅",
    name: "increase",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "增长",
      "上升",
      "提升",
      "升高"
    ],
    rtl: !0
  },
  {
    id: 1308,
    title: "增加小数位",
    name: "increase-the-scale",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "小数位",
      "增加",
      "增加位数"
    ],
    rtl: !0
  },
  {
    id: 1309,
    title: "左缩进",
    name: "indent-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "左缩进"
    ],
    rtl: !0
  },
  {
    id: 1310,
    title: "右缩进",
    name: "indent-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "右缩进"
    ],
    rtl: !0
  },
  {
    id: 1311,
    title: "食指",
    name: "index-finger",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "手指",
      "手势",
      "指",
      "指引"
    ],
    rtl: !0
  },
  {
    id: 1312,
    title: "感应锁",
    name: "induction-lock",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "锁",
      "电子",
      "感应"
    ],
    rtl: !0
  },
  {
    id: 1313,
    title: "电子秤",
    name: "industrial-scales",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "测量称"
    ],
    rtl: !1
  },
  {
    id: 1314,
    title: "信息",
    name: "info",
    category: "Character",
    categoryCN: "符号标识",
    author: "刘心乐",
    tag: [
      "注解",
      "信息",
      "提示"
    ],
    rtl: !0
  },
  {
    id: 1315,
    title: "点滴",
    name: "infusion",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1316,
    title: "打针",
    name: "injection",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "麻醉",
      "麻醉科"
    ],
    rtl: !0
  },
  {
    id: 1317,
    title: "块公式",
    name: "inline",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "公式"
    ],
    rtl: !0
  },
  {
    id: 1318,
    title: "内左下投影",
    name: "inner-shadow-bottom-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "左下投影",
      "内阴影"
    ],
    rtl: !0
  },
  {
    id: 1319,
    title: "内右下投影",
    name: "inner-shadow-bottom-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "右下投影"
    ],
    rtl: !0
  },
  {
    id: 1320,
    title: "内下投影",
    name: "inner-shadow-down",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "下投影",
      "内阴影"
    ],
    rtl: !1
  },
  {
    id: 1321,
    title: "内左投影",
    name: "inner-shadow-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "左投影",
      "内阴影"
    ],
    rtl: !0
  },
  {
    id: 1322,
    title: "内右投影",
    name: "inner-shadow-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "右投影",
      "内阴影"
    ],
    rtl: !0
  },
  {
    id: 1323,
    title: "内左上投影",
    name: "inner-shadow-top-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "左上投影",
      "内阴影"
    ],
    rtl: !0
  },
  {
    id: 1324,
    title: "内右上投影",
    name: "inner-shadow-top-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "右上投影",
      "内阴影"
    ],
    rtl: !0
  },
  {
    id: 1325,
    title: "内上投影",
    name: "inner-shadow-up",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "圆",
      "上投影",
      "内阴影"
    ],
    rtl: !1
  },
  {
    id: 1326,
    title: "插卡",
    name: "insert-card",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "插卡",
      "插入",
      "卡槽",
      "取款机"
    ],
    rtl: !0
  },
  {
    id: 1327,
    title: "插入表",
    name: "insert-table",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "表格",
      "图表",
      "插入",
      "网格"
    ],
    rtl: !1
  },
  {
    id: 1328,
    title: "检查",
    name: "inspection",
    category: "Office",
    categoryCN: "办公文档",
    author: "张蔓",
    tag: [
      "检查",
      "查找",
      "精确",
      "日历"
    ],
    rtl: !0
  },
  {
    id: 1329,
    title: "instagram",
    name: "instagram",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "小视频",
      "短视频",
      "logo",
      "社交",
      "图片分享",
      "国际社交",
      "社交平台"
    ],
    rtl: !0
  },
  {
    id: 1330,
    title: "instagram",
    name: "instagram-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "小视频",
      "短视频",
      "logo",
      "社交",
      "图片分享",
      "国际社交",
      "社交平台"
    ],
    rtl: !0
  },
  {
    id: 1331,
    title: "安装",
    name: "install",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "下",
      "箱子",
      "盒子",
      "下载"
    ],
    rtl: !1
  },
  {
    id: 1332,
    title: "指令",
    name: "instruction",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "代码",
      "编程",
      "命令"
    ],
    rtl: !0
  },
  {
    id: 1333,
    title: "对讲机",
    name: "intercom",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "联系",
      "沟通",
      "对话",
      "连接",
      "交流",
      "电话",
      "通讯"
    ],
    rtl: !0
  },
  {
    id: 1334,
    title: "半自动模式",
    name: "intermediate-mode",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "模式",
      "亮度",
      "对比度"
    ],
    rtl: !0
  },
  {
    id: 1335,
    title: `内部数据
`,
    name: "internal-data",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "内部数据",
      "数据",
      "数据展示",
      "音调"
    ],
    rtl: !0
  },
  {
    id: 1336,
    title: "内部扩大",
    name: "internal-expansion",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "内部缩小"
    ],
    rtl: !0
  },
  {
    id: 1337,
    title: "内部缩小",
    name: "internal-reduction",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "内部扩大"
    ],
    rtl: !0
  },
  {
    id: 1338,
    title: "内部传输",
    name: "internal-transmission",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "内部传输",
      "输送文件",
      "接收文件"
    ],
    rtl: !0
  },
  {
    id: 1339,
    title: "国际化",
    name: "international",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "常留留",
    tag: [
      "非中国区",
      "全球",
      "地球",
      "国际",
      "地图"
    ],
    rtl: !0
  },
  {
    id: 1340,
    title: "相交选择",
    name: "intersect-selection",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "合并",
      "并拢",
      "交集",
      "相交"
    ],
    rtl: !0
  },
  {
    id: 1341,
    title: "交集",
    name: "intersection",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "复制",
      "粘贴",
      "重合",
      "交集"
    ],
    rtl: !0
  },
  {
    id: 1342,
    title: "失效文件",
    name: "invalid-files",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "失效",
      "禁用",
      "无效",
      "终止"
    ],
    rtl: !0
  },
  {
    id: 1343,
    title: "反转镜头",
    name: "invert-camera",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "旋转",
      "反转镜头"
    ],
    rtl: !0
  },
  {
    id: 1344,
    title: "左转",
    name: "invert-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1345,
    title: "右转",
    name: "invert-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1346,
    title: "人脸识别",
    name: "ios-face-recognition",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "人脸识别",
      "面部识别"
    ],
    rtl: !0
  },
  {
    id: 1347,
    title: "Ipad",
    name: "ipad",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电脑",
      "屏幕",
      "平板",
      "移动电脑"
    ],
    rtl: !1
  },
  {
    id: 1348,
    title: "平板电脑",
    name: "ipad-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电脑",
      "屏幕",
      "平板",
      "移动电脑"
    ],
    rtl: !0
  },
  {
    id: 1349,
    title: "苹果手机",
    name: "iphone",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "手机",
      "苹果",
      "apple",
      "移动设备"
    ],
    rtl: !1
  },
  {
    id: 1350,
    title: "ipo",
    name: "ipo",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1351,
    title: "熨斗",
    name: "iron",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "熨斗"
    ],
    rtl: !0
  },
  {
    id: 1352,
    title: "熨斗坏了",
    name: "iron-disable",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "熨斗坏了"
    ],
    rtl: !0
  },
  {
    id: 1353,
    title: "熨斗",
    name: "iron-three",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "熨斗"
    ],
    rtl: !0
  },
  {
    id: 1354,
    title: "熨斗",
    name: "iron-two",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "熨斗"
    ],
    rtl: !0
  },
  {
    id: 1355,
    title: "智能手表",
    name: "iwatch",
    category: "Time",
    categoryCN: "时间日期",
    author: "常留留",
    tag: [
      "smart",
      "watches",
      "手表",
      "时间",
      "打电话"
    ],
    rtl: !0
  },
  {
    id: 1356,
    title: "智能手表",
    name: "iwatch-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "手表",
      "智能",
      "时间",
      "精准",
      "电子",
      "多功能",
      "闹钟",
      "计时",
      "日历"
    ],
    rtl: !0
  },
  {
    id: 1357,
    title: "苹果智能手表",
    name: "iwatch-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "计时器",
      "手表",
      "时间",
      "智能手表",
      "机械表"
    ],
    rtl: !0
  },
  {
    id: 1358,
    title: "首饰",
    name: "jewelry",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "雪花膏",
      "首饰盒",
      "面霜"
    ],
    rtl: !1
  },
  {
    id: 1359,
    title: "今日头条",
    name: "jinritoutiao",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "今日头条",
      "字节跳动",
      "新闻",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1360,
    title: "旅行",
    name: "journey",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "环球旅行",
      "周游世界",
      "绕地飞行"
    ],
    rtl: !0
  },
  {
    id: 1361,
    title: "游戏摇杆",
    name: "joystick",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "游戏",
      "操作",
      "摇杆",
      "手柄"
    ],
    rtl: !0
  },
  {
    id: 1362,
    title: "果饮",
    name: "juice",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水杯",
      "果汁",
      "汽水",
      "咖啡",
      "奶茶"
    ],
    rtl: !0
  },
  {
    id: 1363,
    title: "跳",
    name: "jump",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1364,
    title: "kagi图",
    name: "kagi-map",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据",
      "图表",
      "城市剪影"
    ],
    rtl: !0
  },
  {
    id: 1365,
    title: "热水壶",
    name: "kettle",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "水壶",
      "茶器",
      "加热",
      "烧水",
      "咖啡",
      "容器",
      "被子",
      "水杯"
    ],
    rtl: !0
  },
  {
    id: 1366,
    title: "水壶",
    name: "kettle-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "水壶",
      "壶",
      "热水壶",
      "容器"
    ],
    rtl: !0
  },
  {
    id: 1367,
    title: "钥匙",
    name: "key",
    category: "Safe",
    categoryCN: "安全防护",
    author: "常留留",
    tag: [
      "钥匙",
      "答案",
      "开锁",
      "方法",
      "密码"
    ],
    rtl: !0
  },
  {
    id: 1368,
    title: "钥匙1",
    name: "key-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1369,
    title: "钥匙2",
    name: "key-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1370,
    title: "键盘",
    name: "keyboard",
    category: "Hardware",
    categoryCN: "硬件",
    author: "白明泽",
    tag: [
      "输入",
      "键盘",
      "按键"
    ],
    rtl: !1
  },
  {
    id: 1371,
    title: "键盘",
    name: "keyboard-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "控制",
      "输入",
      "敲打",
      "编码",
      "写代码",
      "点击",
      "指令",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 1372,
    title: "钥匙孔",
    name: "keyhole",
    category: "Safe",
    categoryCN: "安全防护",
    author: "金磊",
    tag: [
      "钥匙孔"
    ],
    rtl: !1
  },
  {
    id: 1373,
    title: "关键线",
    name: "keyline",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "关键线",
      "背景",
      "底纹",
      "仅用"
    ],
    rtl: !1
  },
  {
    id: 1374,
    title: "菜刀",
    name: "kitchen-knife",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "菜刀",
      "切菜",
      "刀",
      "厨房用品"
    ],
    rtl: !0
  },
  {
    id: 1375,
    title: "刀子叉子",
    name: "knife-fork",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "刀叉",
      "餐饮",
      "吃饭",
      "工具"
    ],
    rtl: !0
  },
  {
    id: 1376,
    title: "树袋熊",
    name: "koala-bear",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1377,
    title: "功夫",
    name: "kungfu",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "武打",
      "功夫",
      "练功",
      "训练",
      "习武",
      "踢脚",
      "抬腿",
      "舞蹈",
      "体操",
      "压腿",
      "放松",
      "热身",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 1378,
    title: "标签",
    name: "label",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "标记",
      "页签"
    ],
    rtl: !1
  },
  {
    id: 1379,
    title: "梯子",
    name: "ladder",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1380,
    title: "梯子1",
    name: "ladder-one",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1381,
    title: "节能灯",
    name: "lamp",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "灯光",
      "电器",
      "灯具",
      "节能",
      "光亮"
    ],
    rtl: !1
  },
  {
    id: 1382,
    title: "观测仪",
    name: "land-surveying",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "水平仪",
      "探测仪",
      "观察器",
      "勘探器"
    ],
    rtl: !0
  },
  {
    id: 1383,
    title: "降落",
    name: "landing",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1384,
    title: "风景区",
    name: "landscape",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "山水",
      "风景",
      "景区",
      "景点",
      "自然",
      "户外",
      "环境"
    ],
    rtl: !0
  },
  {
    id: 1385,
    title: "笔记本",
    name: "laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "笔记本",
      "硬件",
      "计算机",
      "电脑",
      "网络",
      "屏幕"
    ],
    rtl: !1
  },
  {
    id: 1386,
    title: "笔记本电脑",
    name: "laptop-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "移动电脑",
      "笔记本"
    ],
    rtl: !1
  },
  {
    id: 1387,
    title: "笔记本电脑",
    name: "laptop-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1388,
    title: "飞书",
    name: "lark",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "协作",
      "办公",
      "logo",
      "字节跳动",
      "飞书",
      "飞机"
    ],
    rtl: !0
  },
  {
    id: 1389,
    title: "飞书1",
    name: "lark-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "协作",
      "办公",
      "logo",
      "字节跳动",
      "飞书",
      "飞机"
    ],
    rtl: !0
  },
  {
    id: 1390,
    title: "晶格图案",
    name: "lattice-pattern",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "晶格",
      "编织",
      "背景",
      "图案"
    ],
    rtl: !0
  },
  {
    id: 1391,
    title: "图层",
    name: "layers",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "推广管理",
      "管理",
      "集合",
      "多层",
      "叠加"
    ],
    rtl: !1
  },
  {
    id: 1392,
    title: "布局5",
    name: "layout-five",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 1393,
    title: "布局4",
    name: "layout-four",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "交错"
    ],
    rtl: !0
  },
  {
    id: 1394,
    title: "布局1",
    name: "layout-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 1395,
    title: "布局3",
    name: "layout-three",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 1396,
    title: "布局2",
    name: "layout-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "中间"
    ],
    rtl: !1
  },
  {
    id: 1397,
    title: "叶子",
    name: "leaf",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "植物",
      "生物",
      "叶子",
      "树叶",
      "大树",
      "生命",
      "活力",
      "环保",
      "新能源"
    ],
    rtl: !0
  },
  {
    id: 1398,
    title: "树叶",
    name: "leaves",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "树叶",
      "植物",
      "环保",
      "无污染",
      "生命力"
    ],
    rtl: !0
  },
  {
    id: 1399,
    title: "叶子1",
    name: "leaves-one",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1400,
    title: "叶子",
    name: "leaves-two",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1401,
    title: "发光二极管",
    name: "led-diode",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "提示灯",
      "报警器",
      "报警灯"
    ],
    rtl: !1
  },
  {
    id: 1402,
    title: "左",
    name: "left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "返回",
      "向左",
      "箭头",
      "上一个",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 1403,
    title: "左对齐",
    name: "left-alignment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "靠左",
      "左边",
      "对齐方式",
      "排版方式",
      "左对齐"
    ],
    rtl: !0
  },
  {
    id: 1404,
    title: "左右分支",
    name: "left-and-right-branch",
    category: "Connect",
    categoryCN: "链接",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1405,
    title: "左栏",
    name: "left-bar",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "左"
    ],
    rtl: !0
  },
  {
    id: 1406,
    title: "左分支",
    name: "left-branch",
    category: "Connect",
    categoryCN: "链接",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1407,
    title: "左-圆",
    name: "left-c",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "上一个",
      "箭头",
      "左",
      "圆圈箭头"
    ],
    rtl: !0
  },
  {
    id: 1408,
    title: "向左展开",
    name: "left-expand",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "展开",
      "收起",
      "左展开"
    ],
    rtl: !0
  },
  {
    id: 1409,
    title: "左1",
    name: "left-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "返回",
      "向左",
      "箭头",
      "上一个",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 1410,
    title: "左-小",
    name: "left-small",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向左",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 1411,
    title: "左下-小",
    name: "left-small-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "左下-小",
      "方向",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1412,
    title: "左上-小",
    name: "left-small-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "左上-小",
      "方向",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1413,
    title: "左箭头-方",
    name: "left-square",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "上一个",
      "箭头",
      "方形箭头",
      "左"
    ],
    rtl: !0
  },
  {
    id: 1414,
    title: "左1",
    name: "left-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "左",
      "指针",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 1415,
    title: "柠檬",
    name: "lemon",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水果",
      "食物",
      "茶"
    ],
    rtl: !0
  },
  {
    id: 1416,
    title: "镜头对准",
    name: "lens-alignment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "镜头对准",
      "瞄准",
      "选中"
    ],
    rtl: !1
  },
  {
    id: 1417,
    title: "狮子座",
    name: "leo",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1418,
    title: "级别",
    name: "level",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "层次",
      "等级",
      "高度"
    ],
    rtl: !1
  },
  {
    id: 1419,
    title: "水平校准",
    name: "level-adjustment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "水平校准",
      "裁切",
      "分割"
    ],
    rtl: !0
  },
  {
    id: 1420,
    title: "八级标题",
    name: "level-eight-title",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "8号字体",
      "第八级别标题",
      "八级"
    ],
    rtl: !0
  },
  {
    id: 1421,
    title: "五级标题",
    name: "level-five-title",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "5号字体",
      "第五级别标题",
      "五级"
    ],
    rtl: !0
  },
  {
    id: 1422,
    title: "四级标题",
    name: "level-four-title",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "4号字体",
      "第四级别标题",
      "四级"
    ],
    rtl: !0
  },
  {
    id: 1423,
    title: "九级标题",
    name: "level-nine-title",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "9号字体",
      "第九级别标题",
      "九级"
    ],
    rtl: !0
  },
  {
    id: 1424,
    title: "七级标题",
    name: "level-seven-title",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "7号字体",
      "第七级别标题",
      "七级"
    ],
    rtl: !0
  },
  {
    id: 1425,
    title: "六级标题",
    name: "level-six-title",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "6号字体",
      "第六级别标题",
      "六级"
    ],
    rtl: !0
  },
  {
    id: 1426,
    title: "天秤座",
    name: "libra",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1427,
    title: "救生圈",
    name: "lifebuoy",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "救生圈"
    ],
    rtl: !1
  },
  {
    id: 1428,
    title: "光源",
    name: "light",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "散射",
      "散射光",
      "发光",
      "照射",
      "节能",
      "luminous",
      "键盘"
    ],
    rtl: !1
  },
  {
    id: 1429,
    title: "灯塔",
    name: "light-house",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "阁楼",
      "房子",
      "灯塔建筑"
    ],
    rtl: !1
  },
  {
    id: 1430,
    title: "轻会员",
    name: "light-member",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "会员",
      "VIP",
      "客户",
      "顾客"
    ],
    rtl: !0
  },
  {
    id: 1431,
    title: "小雨",
    name: "light-rain",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "下雨",
      "小雨"
    ],
    rtl: !0
  },
  {
    id: 1432,
    title: "闪电",
    name: "lightning",
    category: "Base",
    categoryCN: "基础",
    author: "金磊",
    tag: [
      "闪电",
      "天气预报",
      "打雷",
      "下雨"
    ],
    rtl: !0
  },
  {
    id: 1433,
    title: "喜欢",
    name: "like",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "关注",
      "收藏",
      "爱心",
      "喜欢",
      "热爱"
    ],
    rtl: !1
  },
  {
    id: 1434,
    title: "林肯",
    name: "lincoln",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "汽车",
      "加工厂",
      "logo",
      "标志",
      "标识"
    ],
    rtl: !1
  },
  {
    id: 1435,
    title: "链接",
    name: "link",
    category: "Office",
    categoryCN: "办公文档",
    author: "刘心乐",
    tag: [
      "回形针",
      "附件",
      "文件",
      "链接"
    ],
    rtl: !0
  },
  {
    id: 1436,
    title: "断开连接",
    name: "link-break",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "禁止使用",
      "插入",
      "终止",
      "解绑"
    ],
    rtl: !1
  },
  {
    id: 1437,
    title: "云运行",
    name: "link-cloud",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "云",
      "转化",
      "传输",
      "运行"
    ],
    rtl: !0
  },
  {
    id: 1438,
    title: "云中断",
    name: "link-cloud-faild",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "云中断",
      "终止",
      "错误",
      "出错"
    ],
    rtl: !0
  },
  {
    id: 1439,
    title: "云连接",
    name: "link-cloud-sucess",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "云连接",
      "成功",
      "上传成功"
    ],
    rtl: !0
  },
  {
    id: 1440,
    title: "链接4",
    name: "link-four",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "连接",
      "接口",
      "按钮",
      "指示灯",
      "插口",
      "充电口"
    ],
    rtl: !1
  },
  {
    id: 1441,
    title: "接入链接",
    name: "link-in",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "接入",
      "锁定",
      "双向接入"
    ],
    rtl: !0
  },
  {
    id: 1442,
    title: "链接中断",
    name: "link-interrupt",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "断开",
      "禁止",
      "错误",
      "出错",
      "失败",
      "解绑"
    ],
    rtl: !0
  },
  {
    id: 1443,
    title: "左链接",
    name: "link-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "返回",
      "向左",
      "上一步",
      "移出"
    ],
    rtl: !0
  },
  {
    id: 1444,
    title: "链接",
    name: "link-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "链接",
      "链条",
      "锁链",
      "绑定"
    ],
    rtl: !0
  },
  {
    id: 1445,
    title: "向外连接",
    name: "link-out",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "链接",
      "左右",
      "数据",
      "向外",
      "双向移出"
    ],
    rtl: !1
  },
  {
    id: 1446,
    title: "右连接",
    name: "link-right",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "导出",
      "向右",
      "下一步",
      "移出"
    ],
    rtl: !0
  },
  {
    id: 1447,
    title: "链接",
    name: "link-three",
    category: "Connect",
    categoryCN: "链接",
    author: "张蔓",
    tag: [
      "链接",
      "组合",
      "合并",
      "绑定"
    ],
    rtl: !0
  },
  {
    id: 1448,
    title: "链接",
    name: "link-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "链接",
      "关联",
      "绑定"
    ],
    rtl: !0
  },
  {
    id: 1449,
    title: "唇彩",
    name: "lip-gloss",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "唇膏"
    ],
    rtl: !0
  },
  {
    id: 1450,
    title: "唇纹身",
    name: "lip-tattoo",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "嘴",
      "唇膏",
      "护唇"
    ],
    rtl: !0
  },
  {
    id: 1451,
    title: "口红",
    name: "lipstick",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "化妆品",
      "口红",
      "美妆"
    ],
    rtl: !0
  },
  {
    id: 1452,
    title: "口红1",
    name: "lipstick-one",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1453,
    title: "鸡尾酒",
    name: "liqueur",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "酒水",
      "果汁",
      "汽水",
      "鸡尾酒"
    ],
    rtl: !0
  },
  {
    id: 1454,
    title: "列表",
    name: "list",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "目录",
      "清单",
      "完成目录",
      "任务清单"
    ],
    rtl: !0
  },
  {
    id: 1455,
    title: "添加列表",
    name: "list-add",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "列表",
      "添加",
      "菜单"
    ],
    rtl: !0
  },
  {
    id: 1456,
    title: "字母列表",
    name: "list-alphabet",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "字母列表",
      "段落",
      "文字排列"
    ],
    rtl: !0
  },
  {
    id: 1457,
    title: "列表",
    name: "list-bottom",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "列表",
      "底部",
      "最后",
      "目录"
    ],
    rtl: !0
  },
  {
    id: 1458,
    title: "多选列表",
    name: "list-checkbox",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "多选列表",
      "序列",
      "图文"
    ],
    rtl: !0
  },
  {
    id: 1459,
    title: "失败列表",
    name: "list-fail",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "失败列表"
    ],
    rtl: !0
  },
  {
    id: 1460,
    title: "列表",
    name: "list-middle",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "列表",
      "中间",
      "居中",
      "目录"
    ],
    rtl: !0
  },
  {
    id: 1461,
    title: "数字列表",
    name: "list-numbers",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "数字列表",
      "段落",
      "文字排列"
    ],
    rtl: !0
  },
  {
    id: 1462,
    title: "列表",
    name: "list-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "排列",
      "列表",
      "左对齐"
    ],
    rtl: !0
  },
  {
    id: 1463,
    title: "成功列表",
    name: "list-success",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "成功列表"
    ],
    rtl: !0
  },
  {
    id: 1464,
    title: "列表",
    name: "list-top",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "列表",
      "顶部",
      "最前",
      "目录"
    ],
    rtl: !0
  },
  {
    id: 1465,
    title: "列表2",
    name: "list-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "目录",
      "清单",
      "完成目录",
      "任务清单"
    ],
    rtl: !0
  },
  {
    id: 1466,
    title: "列表视图",
    name: "list-view",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "列表",
      "表单"
    ],
    rtl: !0
  },
  {
    id: 1467,
    title: "加载",
    name: "loading",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "等待",
      "加载",
      "转圈",
      "循环"
    ],
    rtl: !0
  },
  {
    id: 1468,
    title: "加载4",
    name: "loading-four",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "等待",
      "加载",
      "转圈",
      "循环"
    ],
    rtl: !0
  },
  {
    id: 1469,
    title: "加载",
    name: "loading-one",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "等待",
      "加载",
      "转圈",
      "缓冲"
    ],
    rtl: !1
  },
  {
    id: 1470,
    title: "加载",
    name: "loading-three",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "等待",
      "加载",
      "转圈",
      "缓冲"
    ],
    rtl: !1
  },
  {
    id: 1471,
    title: "加载",
    name: "loading-two",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "等待",
      "加载",
      "转圈",
      "缓冲"
    ],
    rtl: !1
  },
  {
    id: 1472,
    title: "已定位",
    name: "local",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "齐奉飞",
    tag: [
      "位置",
      "坐标",
      "地点"
    ],
    rtl: !1
  },
  {
    id: 1473,
    title: "本地",
    name: "local-pin",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "本地",
      "游戏",
      "摇杆",
      "图钉",
      "出行",
      "交通"
    ],
    rtl: !1
  },
  {
    id: 1474,
    title: "本地",
    name: "local-two",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "本地",
      "地表",
      "地点",
      "地图",
      "出行",
      "交通",
      "运输"
    ],
    rtl: !1
  },
  {
    id: 1475,
    title: "锁定",
    name: "lock",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "锁定",
      "锁死",
      "关闭",
      "保密"
    ],
    rtl: !1
  },
  {
    id: 1476,
    title: "关锁",
    name: "lock-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [
      "锁定",
      "锁死",
      "关闭",
      "保密"
    ],
    rtl: !1
  },
  {
    id: 1477,
    title: "计算机锁定",
    name: "locking-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1478,
    title: "笔记本电脑锁定",
    name: "locking-laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1479,
    title: "图片锁定",
    name: "locking-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1480,
    title: "锁定网页",
    name: "locking-web",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1481,
    title: "日志",
    name: "log",
    category: "Office",
    categoryCN: "办公文档",
    author: "刘心乐",
    tag: [
      "日志",
      "笔记本",
      "记录",
      "文档",
      "文本"
    ],
    rtl: !0
  },
  {
    id: 1482,
    title: "进入",
    name: "login",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "进入",
      "向左",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1483,
    title: "退出",
    name: "logout",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "退出",
      "向右",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1484,
    title: "棒棒糖",
    name: "lollipop",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "棒棒糖",
      "零食",
      "甜食",
      "糖果"
    ],
    rtl: !0
  },
  {
    id: 1485,
    title: "循环一次",
    name: "loop-once",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "循环",
      "单次循环",
      "播放",
      "返回",
      "单曲循环"
    ],
    rtl: !0
  },
  {
    id: 1486,
    title: "乳液",
    name: "lotion",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "泡沫",
      "乳液"
    ],
    rtl: !1
  },
  {
    id: 1487,
    title: "莲花",
    name: "lotus",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1488,
    title: "哭",
    name: "loudly-crying-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "哭",
      "表情",
      "难过"
    ],
    rtl: !1
  },
  {
    id: 1489,
    title: "张嘴哭",
    name: "loudly-crying-face-whit-open-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "张嘴哭",
      "表情",
      "痛哭",
      "难过"
    ],
    rtl: !1
  },
  {
    id: 1490,
    title: "爱心",
    name: "love-and-help",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1491,
    title: "下分支",
    name: "lower-branch",
    category: "Connect",
    categoryCN: "链接",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1492,
    title: "行李箱",
    name: "luggage",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "行李",
      "行李箱"
    ],
    rtl: !1
  },
  {
    id: 1493,
    title: "发光",
    name: "luminous",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "散射",
      "散射光",
      "光源",
      "照射",
      "节能",
      "light",
      "键盘"
    ],
    rtl: !0
  },
  {
    id: 1494,
    title: "肺",
    name: "lung",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "呼吸",
      "呼吸道",
      "呼吸科",
      "器官",
      "肺"
    ],
    rtl: !0
  },
  {
    id: 1495,
    title: "访达",
    name: "mac-finder",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "访达",
      "文件管理",
      "我的电脑"
    ],
    rtl: !0
  },
  {
    id: 1496,
    title: "夏威夷果",
    name: "macadamia-nut",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "夏威夷果",
      "坚果"
    ],
    rtl: !0
  },
  {
    id: 1497,
    title: "魔法棒",
    name: "magic",
    category: "Others",
    categoryCN: "其它",
    author: "齐奉飞",
    tag: [
      "魔法",
      "魔术",
      "神奇",
      "变化"
    ],
    rtl: !0
  },
  {
    id: 1498,
    title: "魔术帽",
    name: "magic-hat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "魔术",
      "高帽",
      "道具"
    ],
    rtl: !0
  },
  {
    id: 1499,
    title: "魔法棒",
    name: "magic-wand",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "魔法棒",
      "滤镜",
      "特效",
      "美颜"
    ],
    rtl: !0
  },
  {
    id: 1500,
    title: "磁铁",
    name: "magnet",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "磁铁",
      "吸引",
      "正负极",
      "磁力",
      "物理",
      "电力"
    ],
    rtl: !1
  },
  {
    id: 1501,
    title: "邮件",
    name: "mail",
    category: "Office",
    categoryCN: "办公文档",
    author: "常留留",
    tag: [
      "信封",
      "消息",
      "邮件",
      "文件"
    ],
    rtl: !1
  },
  {
    id: 1502,
    title: "邮件下载",
    name: "mail-download",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "邮件下载",
      "信封",
      "邮件",
      "邮寄",
      "文件"
    ],
    rtl: !1
  },
  {
    id: 1503,
    title: "邮件编辑",
    name: "mail-edit",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "编辑邮件"
    ],
    rtl: !0
  },
  {
    id: 1504,
    title: "已读邮件",
    name: "mail-open",
    category: "Office",
    categoryCN: "办公文档",
    author: "白明泽",
    tag: [
      "已读邮件",
      "邮箱",
      "邮件",
      "信息",
      "邮箱",
      "打开",
      "收件"
    ],
    rtl: !1
  },
  {
    id: 1505,
    title: "邮件包",
    name: "mail-package",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "邮件组"
    ],
    rtl: !1
  },
  {
    id: 1506,
    title: "邮件查阅",
    name: "mail-review",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "查看"
    ],
    rtl: !0
  },
  {
    id: 1507,
    title: "邮件打开",
    name: "mail-unpacking",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "打开"
    ],
    rtl: !1
  },
  {
    id: 1508,
    title: "邮件1",
    name: "maill-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "信息",
      "讯息",
      "交流",
      "社交",
      "logo"
    ],
    rtl: !1
  },
  {
    id: 1509,
    title: "美容",
    name: "makeups",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "面膜",
      "护肤",
      "美妆"
    ],
    rtl: !0
  },
  {
    id: 1510,
    title: "男性",
    name: "male",
    category: "Base",
    categoryCN: "基础",
    author: "刘心乐",
    tag: [
      "男",
      "性别",
      "符号"
    ],
    rtl: !0
  },
  {
    id: 1511,
    title: "购物袋",
    name: "mall-bag",
    category: "Money",
    categoryCN: "电商财产",
    author: "刘心乐",
    tag: [
      "袋子",
      "购物袋",
      "逛街"
    ],
    rtl: !1
  },
  {
    id: 1512,
    title: "手动挡",
    name: "manual-gear",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "手动挡",
      "汽车"
    ],
    rtl: !0
  },
  {
    id: 1513,
    title: "多对多",
    name: "many-to-many",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "多对多",
      "n:n",
      "N:N"
    ],
    rtl: !0
  },
  {
    id: 1514,
    title: "地图距离",
    name: "map-distance",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "地图",
      "距离",
      "出行",
      "交通",
      "方向",
      "位置",
      "路线",
      "导航"
    ],
    rtl: !0
  },
  {
    id: 1515,
    title: "地图",
    name: "map-draw",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "地图",
      "位置",
      "地理",
      "方位",
      "方向",
      "交通",
      "定位"
    ],
    rtl: !0
  },
  {
    id: 1516,
    title: "地图道路",
    name: "map-road",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "地图",
      "道路",
      "交通",
      "出行"
    ],
    rtl: !1
  },
  {
    id: 1517,
    title: "地图",
    name: "map-road-two",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "地图",
      "地点",
      "地图",
      "出行",
      "交通",
      "运输"
    ],
    rtl: !0
  },
  {
    id: 1518,
    title: "地图",
    name: "map-two",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "地图",
      "地点",
      "地图",
      "出行",
      "交通",
      "运输"
    ],
    rtl: !0
  },
  {
    id: 1519,
    title: "垂直居中",
    name: "margin",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "垂直"
    ],
    rtl: !1
  },
  {
    id: 1520,
    title: "水平居中",
    name: "margin-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "水平"
    ],
    rtl: !1
  },
  {
    id: 1521,
    title: "标记",
    name: "mark",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "齐奉飞",
    tag: [
      "旗帜",
      "旗子",
      "记号",
      "活动"
    ],
    rtl: !0
  },
  {
    id: 1522,
    title: "易拍",
    name: "market",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "巨量创意",
      "易拍",
      "广告拍摄",
      "滤镜",
      "编辑视频",
      "oceanengine",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1523,
    title: "市场分析",
    name: "market-analysis",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "分析",
      "数据",
      "趋势"
    ],
    rtl: !0
  },
  {
    id: 1524,
    title: "睫毛膏",
    name: "mascara",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "睫毛刷",
      "美妆",
      "化妆"
    ],
    rtl: !0
  },
  {
    id: 1525,
    title: "口罩",
    name: "mask",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "传染",
      "传染科",
      "雾霾",
      "生病",
      "口罩"
    ],
    rtl: !0
  },
  {
    id: 1526,
    title: "面具",
    name: "mask-one",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "常留留",
    tag: [
      "补水",
      "保湿",
      "美白",
      "敷面膜",
      "面膜",
      "医美"
    ],
    rtl: !1
  },
  {
    id: 1527,
    title: "遮罩",
    name: "mask-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "遮罩",
      "蒙版",
      "阴影"
    ],
    rtl: !0
  },
  {
    id: 1528,
    title: "马斯洛金字塔",
    name: "maslow-pyramids",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "需求层次理论",
      "金字塔需求"
    ],
    rtl: !1
  },
  {
    id: 1529,
    title: "按摩椅",
    name: "massage-chair",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "椅子",
      "凳子",
      "办公",
      "按摩椅"
    ],
    rtl: !1
  },
  {
    id: 1530,
    title: "按摩椅1",
    name: "massage-chair-one",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "椅子",
      "凳子",
      "办公"
    ],
    rtl: !1
  },
  {
    id: 1531,
    title: "按摩椅",
    name: "massage-table",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "椅子",
      "床"
    ],
    rtl: !0
  },
  {
    id: 1532,
    title: "主机",
    name: "master",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "储存器",
      "服务器",
      "管理器"
    ],
    rtl: !0
  },
  {
    id: 1533,
    title: "素材",
    name: "material",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "齐奉飞",
    tag: [
      "用户素材",
      "图像",
      "素材"
    ],
    rtl: !0
  },
  {
    id: 1534,
    title: "材料3",
    name: "material-three",
    category: "Charts",
    categoryCN: "数据图表",
    author: "齐奉飞",
    tag: [
      "图片集",
      "照片",
      "相册"
    ],
    rtl: !0
  },
  {
    id: 1535,
    title: "材质",
    name: "material-two",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "材质",
      "拍摄",
      "设置",
      "摄像"
    ],
    rtl: !0
  },
  {
    id: 1536,
    title: "最大值",
    name: "maximum",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "最大",
      "极限",
      "数值",
      "数据",
      "图表",
      "曲线"
    ],
    rtl: !0
  },
  {
    id: 1537,
    title: "玛雅",
    name: "maya",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "楼房",
      "建筑"
    ],
    rtl: !1
  },
  {
    id: 1538,
    title: "马尤拉手势",
    name: "mayura-gesture",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "手",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1539,
    title: "我的",
    name: "me",
    category: "Peoples",
    categoryCN: "账户",
    author: "刘心乐",
    tag: [
      "个人中心",
      "用户",
      "人",
      "头像",
      "圆形头像"
    ],
    rtl: !1
  },
  {
    id: 1540,
    title: "计量杯",
    name: "measuring-cup",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "计量杯",
      "量杯",
      "厨房厨具"
    ],
    rtl: !0
  },
  {
    id: 1541,
    title: "徽章",
    name: "medal-one",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1542,
    title: "剪映",
    name: "mediaeditor",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "软件",
      "应用",
      "工具",
      "设计",
      "视频",
      "剪辑",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1543,
    title: "医疗箱",
    name: "medical-box",
    category: "Health",
    categoryCN: "医疗健康",
    author: "齐奉飞",
    tag: [
      "药箱",
      "急诊箱"
    ],
    rtl: !0
  },
  {
    id: 1544,
    title: "医疗档案",
    name: "medical-files",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "档案",
      "文件",
      "收藏文件",
      "医疗"
    ],
    rtl: !0
  },
  {
    id: 1545,
    title: "医学标志",
    name: "medical-mark",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1546,
    title: "准时吃药",
    name: "medication-time",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "按时",
      "准时"
    ],
    rtl: !0
  },
  {
    id: 1547,
    title: "药罐",
    name: "medicine-bottle",
    category: "Health",
    categoryCN: "医疗健康",
    author: "齐奉飞",
    tag: [
      "西药",
      "药瓶"
    ],
    rtl: !0
  },
  {
    id: 1548,
    title: "药瓶",
    name: "medicine-bottle-one",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1549,
    title: "药箱",
    name: "medicine-chest",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1550,
    title: "储存卡",
    name: "memory",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1551,
    title: "存储卡",
    name: "memory-card",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1552,
    title: "记忆卡",
    name: "memory-card-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1553,
    title: "储存器",
    name: "memory-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1554,
    title: "男士外套",
    name: "men-jacket",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "上衣",
      "服装",
      "汉服",
      "外套",
      "衣服"
    ],
    rtl: !1
  },
  {
    id: 1555,
    title: "收起菜单",
    name: "menu-fold",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "收起",
      "左侧收起",
      "侧边收起"
    ],
    rtl: !0
  },
  {
    id: 1556,
    title: "收起菜单1",
    name: "menu-fold-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "展开",
      "侧边展开"
    ],
    rtl: !0
  },
  {
    id: 1557,
    title: "展开菜单",
    name: "menu-unfold",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "展开",
      "右侧展开",
      "侧边展开"
    ],
    rtl: !0
  },
  {
    id: 1558,
    title: "展开菜单1",
    name: "menu-unfold-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "收起",
      "侧边收起"
    ],
    rtl: !0
  },
  {
    id: 1559,
    title: "合并",
    name: "merge",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "交叉",
      "合并",
      "交集"
    ],
    rtl: !0
  },
  {
    id: 1560,
    title: "合并单元格",
    name: "merge-cells",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "合并单元格",
      "表格",
      "操作"
    ],
    rtl: !1
  },
  {
    id: 1561,
    title: "信息",
    name: "message",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "金磊",
    tag: [
      "聊天",
      "消息",
      "社交",
      "通讯",
      "沟通"
    ],
    rtl: !0
  },
  {
    id: 1562,
    title: "表情信息",
    name: "message-emoji",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知"
    ],
    rtl: !0
  },
  {
    id: 1563,
    title: "信息失败",
    name: "message-failed",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知",
      "失败"
    ],
    rtl: !0
  },
  {
    id: 1564,
    title: "消息",
    name: "message-one",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "信息",
      "聊天",
      "通知",
      "社交",
      "沟通"
    ],
    rtl: !0
  },
  {
    id: 1565,
    title: "信息加密",
    name: "message-privacy",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知",
      "加密",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1566,
    title: "信息搜索",
    name: "message-search",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知",
      "搜索"
    ],
    rtl: !0
  },
  {
    id: 1567,
    title: "信息安全",
    name: "message-security",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知",
      "加密",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 1568,
    title: "信息已发送",
    name: "message-sent",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "金磊",
    tag: [
      "发送信息",
      "消息",
      "完成"
    ],
    rtl: !0
  },
  {
    id: 1569,
    title: "信息成功",
    name: "message-success",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "对话",
      "评论",
      "聊天",
      "消息",
      "通知",
      "发送"
    ],
    rtl: !0
  },
  {
    id: 1570,
    title: "未读消息",
    name: "message-unread",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "信息",
      "聊天",
      "通知",
      "社交",
      "沟通",
      "新消息",
      "评论"
    ],
    rtl: !0
  },
  {
    id: 1571,
    title: "短信",
    name: "messages",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "信息",
      "讯息",
      "交流",
      "社交",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1572,
    title: "短信1",
    name: "messages-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "信息",
      "讯息",
      "交流",
      "社交",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1573,
    title: "微型SD",
    name: "micro-sd",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "卡",
      "储存",
      "信号",
      "流量"
    ],
    rtl: !0
  },
  {
    id: 1574,
    title: "微单",
    name: "micro-slr-camera",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "微单",
      "摄影",
      "设备",
      "相机",
      "镜头"
    ],
    rtl: !0
  },
  {
    id: 1575,
    title: "麦克风",
    name: "microphone",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "话筒",
      "收音器",
      "音乐",
      "乐器",
      "扩音器",
      "耳麦",
      "麦霸"
    ],
    rtl: !1
  },
  {
    id: 1576,
    title: "收音器",
    name: "microphone-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "广播",
      "话筒",
      "扩音器",
      "麦克风"
    ],
    rtl: !0
  },
  {
    id: 1577,
    title: "显微镜",
    name: "microscope",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "观察",
      "高倍镜",
      "病理科"
    ],
    rtl: !0
  },
  {
    id: 1578,
    title: "显微镜",
    name: "microscope-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "镜子",
      "放大",
      "仪器",
      "实验",
      "望远镜",
      "探测仪"
    ],
    rtl: !0
  },
  {
    id: 1579,
    title: "微波炉",
    name: "microwave-oven",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "加热",
      "电器",
      "烤箱",
      "容器",
      "冰箱",
      "收纳箱"
    ],
    rtl: !0
  },
  {
    id: 1580,
    title: "微波炉",
    name: "microwaves",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "加热器",
      "烹饪机",
      "做饭"
    ],
    rtl: !0
  },
  {
    id: 1581,
    title: "中指",
    name: "middle-finger",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1582,
    title: "牛奶",
    name: "milk",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水杯",
      "果汁",
      "汽水",
      "奶茶"
    ],
    rtl: !0
  },
  {
    id: 1583,
    title: "牛奶",
    name: "milk-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "牛奶",
      "盒装",
      "乳品",
      "牛奶盒",
      "牛奶杯"
    ],
    rtl: !0
  },
  {
    id: 1584,
    title: "最小值",
    name: "min",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "最小",
      "极限",
      "数值",
      "数据",
      "图表",
      "曲线"
    ],
    rtl: !0
  },
  {
    id: 1585,
    title: "脑图",
    name: "mind-mapping",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "脑图",
      "思维导图",
      "结构图",
      "框架图"
    ],
    rtl: !0
  },
  {
    id: 1586,
    title: "大纲视图",
    name: "mindmap-list",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "大纲视图",
      "列表"
    ],
    rtl: !0
  },
  {
    id: 1587,
    title: "思维导图",
    name: "mindmap-map",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "思维导图",
      "脑图",
      "逻辑"
    ],
    rtl: !0
  },
  {
    id: 1588,
    title: "微型存储卡",
    name: "mini-sd-card",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "微型SD卡",
      "SD",
      "储存",
      "存储",
      "store"
    ],
    rtl: !0
  },
  {
    id: 1589,
    title: "减",
    name: "minus",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "减号",
      "去除",
      "减少"
    ],
    rtl: !1
  },
  {
    id: 1590,
    title: "移到底部",
    name: "minus-the-bottom",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "移到底部",
      "置于底部",
      "下移",
      "复制"
    ],
    rtl: !0
  },
  {
    id: 1591,
    title: "移到顶部",
    name: "minus-the-top",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "移到顶部",
      "置于顶部",
      "上移",
      "复制"
    ],
    rtl: !0
  },
  {
    id: 1592,
    title: "镜子",
    name: "mirror",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "镜子",
      "化妆镜",
      "正面",
      "照"
    ],
    rtl: !1
  },
  {
    id: 1593,
    title: "镜子",
    name: "mirror-one",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "张蔓",
    tag: [
      "镜子",
      "化妆镜",
      "美状镜"
    ],
    rtl: !1
  },
  {
    id: 1594,
    title: "镜子2",
    name: "mirror-two",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "镜子"
    ],
    rtl: !1
  },
  {
    id: 1595,
    title: "半圆",
    name: "misaligned-semicircle",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "半圆",
      "切割",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 1596,
    title: "三菱",
    name: "mitsubishi",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "汽车",
      "三角形",
      "菱形",
      "logo"
    ],
    rtl: !1
  },
  {
    id: 1597,
    title: "修改",
    name: "modify",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "错误",
      "修改",
      "直尺"
    ],
    rtl: !0
  },
  {
    id: 1598,
    title: "修改",
    name: "modify-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "橡皮",
      "修改",
      "涂抹",
      "擦除"
    ],
    rtl: !0
  },
  {
    id: 1599,
    title: "摄像",
    name: "monitor",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "刘心乐",
    tag: [
      "拍摄",
      "录像",
      "摄像机",
      "影像",
      "电影"
    ],
    rtl: !0
  },
  {
    id: 1600,
    title: "监控摄像头",
    name: "monitor-camera",
    category: "Hardware",
    categoryCN: "硬件",
    author: "白明泽",
    tag: [
      "监控",
      "摄像头",
      "网络摄像头",
      "摄像机",
      "摄像机",
      "摄像头",
      "监视"
    ],
    rtl: !1
  },
  {
    id: 1601,
    title: "关闭摄像",
    name: "monitor-off",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "拍摄",
      "录像",
      "摄像机",
      "影像",
      "电影",
      "关闭"
    ],
    rtl: !0
  },
  {
    id: 1602,
    title: "显示器",
    name: "monitor-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "屏幕",
      "显示屏",
      "电脑",
      "监测台",
      "窗口",
      "电视",
      "电影",
      "节目",
      "电视剧"
    ],
    rtl: !0
  },
  {
    id: 1603,
    title: "音波控制",
    name: "monitor-two",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "音频",
      "音量",
      "语音",
      "录音",
      "波纹",
      "声音"
    ],
    rtl: !0
  },
  {
    id: 1604,
    title: "猴",
    name: "monkey",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1605,
    title: "生肖猴",
    name: "monkey-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1606,
    title: "纪念碑",
    name: "monument-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "石碑、纪念碑",
      "标志"
    ],
    rtl: !1
  },
  {
    id: 1607,
    title: "纪念碑",
    name: "monument-two",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "石碑、纪念碑",
      "标志"
    ],
    rtl: !0
  },
  {
    id: 1608,
    title: "月亮",
    name: "moon",
    category: "Weather",
    categoryCN: "天气",
    author: "常留留",
    tag: [
      "夜晚",
      "月亮",
      "黑夜",
      "晚上",
      "月牙",
      "黑暗"
    ],
    rtl: !0
  },
  {
    id: 1609,
    title: "更多",
    name: "more",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "点",
      "三点",
      "更多"
    ],
    rtl: !1
  },
  {
    id: 1610,
    title: "更多",
    name: "more-app",
    category: "Base",
    categoryCN: "基础",
    author: "金磊",
    tag: [
      "更多",
      "全部",
      "应用"
    ],
    rtl: !0
  },
  {
    id: 1611,
    title: "更多",
    name: "more-four",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "更多",
      "编辑",
      "其他",
      "分类"
    ],
    rtl: !1
  },
  {
    id: 1612,
    title: "更多1",
    name: "more-one",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "点",
      "三点",
      "更多"
    ],
    rtl: !1
  },
  {
    id: 1613,
    title: "更多3",
    name: "more-three",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "更多",
      "圆形"
    ],
    rtl: !1
  },
  {
    id: 1614,
    title: "更多2",
    name: "more-two",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "更多",
      "圆形",
      "三点"
    ],
    rtl: !1
  },
  {
    id: 1615,
    title: "马赛克",
    name: "mosaic",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "模糊",
      "虚化",
      "遮盖",
      "擦除",
      "马赛克"
    ],
    rtl: !0
  },
  {
    id: 1616,
    title: "山",
    name: "mountain",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1617,
    title: "摩托",
    name: "mounted",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1618,
    title: "鼠标",
    name: "mouse",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "鼠标",
      "配件",
      "设备",
      "网络"
    ],
    rtl: !0
  },
  {
    id: 1619,
    title: "鼠标",
    name: "mouse-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "点击",
      "移动",
      "指引",
      "选择",
      "按键",
      "控制"
    ],
    rtl: !0
  },
  {
    id: 1620,
    title: "生肖鼠",
    name: "mouse-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1621,
    title: "嘴巴",
    name: "mouth",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "金磊",
    tag: [
      "嘴巴",
      "美妆",
      "化妆",
      "时尚",
      "器官",
      "口",
      "说话"
    ],
    rtl: !1
  },
  {
    id: 1622,
    title: "移动",
    name: "move",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "滑动",
      "侧滑"
    ],
    rtl: !0
  },
  {
    id: 1623,
    title: "向内移动",
    name: "move-in",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "移动",
      "剧中",
      "聚合",
      "合并"
    ],
    rtl: !1
  },
  {
    id: 1624,
    title: "移动",
    name: "move-in-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "移动",
      "指向",
      "拉伸",
      "点击"
    ],
    rtl: !0
  },
  {
    id: 1625,
    title: "移动",
    name: "move-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "移动",
      "飞机",
      "选中",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1626,
    title: "电影",
    name: "movie",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "视频",
      "胶片",
      "电影",
      "电视",
      "录音机"
    ],
    rtl: !0
  },
  {
    id: 1627,
    title: "影视板",
    name: "movie-board",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "影视板"
    ],
    rtl: !0
  },
  {
    id: 1628,
    title: "图片",
    name: "moving-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1629,
    title: "多圆形",
    name: "multi-circular",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "多圆形",
      "圆形",
      "叠加",
      "缩放",
      "圆形拼接"
    ],
    rtl: !1
  },
  {
    id: 1630,
    title: "多功能刀",
    name: "multi-function-knife",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "多功能刀",
      "武器",
      "瑞士",
      "军刀"
    ],
    rtl: !0
  },
  {
    id: 1631,
    title: "多图轮播",
    name: "multi-picture-carousel",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "多图轮播"
    ],
    rtl: !1
  },
  {
    id: 1632,
    title: "多方形",
    name: "multi-rectangle",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "多方形",
      "方形",
      "叠加",
      "缩放",
      "方形拼接"
    ],
    rtl: !0
  },
  {
    id: 1633,
    title: "多圆环",
    name: "multi-ring",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "关联",
      "圆环",
      "交集",
      "抽象",
      "花形"
    ],
    rtl: !1
  },
  {
    id: 1634,
    title: "多三角",
    name: "multi-triangular",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "多三角",
      "锐度",
      "面积"
    ],
    rtl: !0
  },
  {
    id: 1635,
    title: "多三角",
    name: "multi-triangular-four",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "多三角",
      "三角拼接"
    ],
    rtl: !1
  },
  {
    id: 1636,
    title: "多三角",
    name: "multi-triangular-three",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "多三角",
      "三角拼接",
      "组合"
    ],
    rtl: !1
  },
  {
    id: 1637,
    title: "多三角",
    name: "multi-triangular-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "多三角",
      "三角拼接",
      "组合"
    ],
    rtl: !1
  },
  {
    id: 1638,
    title: "多播",
    name: "multicast",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "组播",
      "节点传输",
      "多节点",
      "通信"
    ],
    rtl: !0
  },
  {
    id: 1639,
    title: "多层圆球",
    name: "multilayer-sphere",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "多层圆球",
      "阴影",
      "叠加",
      "面积"
    ],
    rtl: !1
  },
  {
    id: 1640,
    title: "肌肉",
    name: "muscle",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "武打",
      "功夫",
      "练功",
      "训练",
      "习武",
      "踢脚",
      "抬腿",
      "舞蹈",
      "体操",
      "放松",
      "热身",
      "健身",
      "健壮",
      "健康",
      "力量",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 1641,
    title: "博物馆",
    name: "museum-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "展览馆",
      "大会堂",
      "政府",
      "机构"
    ],
    rtl: !1
  },
  {
    id: 1642,
    title: "博物馆",
    name: "museum-two",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "展览馆",
      "大会堂",
      "政府",
      "机构"
    ],
    rtl: !1
  },
  {
    id: 1643,
    title: "音乐",
    name: "music",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音乐",
      "乐符",
      "歌曲",
      "歌声",
      "播放"
    ],
    rtl: !0
  },
  {
    id: 1644,
    title: "音乐cd",
    name: "music-cd",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1645,
    title: "音乐菜单",
    name: "music-list",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "列表",
      "菜单"
    ],
    rtl: !0
  },
  {
    id: 1646,
    title: "音乐菜单",
    name: "music-menu",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1647,
    title: "音乐",
    name: "music-one",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音乐",
      "乐符",
      "歌曲",
      "歌声",
      "播放"
    ],
    rtl: !0
  },
  {
    id: 1648,
    title: "音乐律动",
    name: "music-rhythm",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "音乐律动"
    ],
    rtl: !0
  },
  {
    id: 1649,
    title: "静音",
    name: "mute",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "静音",
      "安静",
      "音量"
    ],
    rtl: !0
  },
  {
    id: 1650,
    title: "指甲油",
    name: "nail-polish",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "行李箱",
      "手提箱",
      "指甲油",
      "美甲"
    ],
    rtl: !1
  },
  {
    id: 1651,
    title: "指甲油1",
    name: "nail-polish-one",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1652,
    title: "鼻腔",
    name: "nasal",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "鼻子",
      "呼吸",
      "耳鼻喉",
      "耳鼻喉科"
    ],
    rtl: !0
  },
  {
    id: 1653,
    title: "自然模式",
    name: "natural-mode",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "花朵",
      "植物"
    ],
    rtl: !0
  },
  {
    id: 1654,
    title: "导航",
    name: "navigation",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "常留留",
    tag: [
      "指针",
      "方向",
      "指引",
      "指针",
      "导航"
    ],
    rtl: !1
  },
  {
    id: 1655,
    title: "领带",
    name: "necktie",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "领结",
      "领带"
    ],
    rtl: !1
  },
  {
    id: 1656,
    title: "针",
    name: "needle",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1657,
    title: "消极动态",
    name: "negative-dynamics",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "动态",
      "消极",
      "负向数据",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 1658,
    title: "嵌套箭头",
    name: "nested-arrows",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "嵌套箭头",
      "关联",
      "连接"
    ],
    rtl: !0
  },
  {
    id: 1659,
    title: "燕窝",
    name: "nests",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "补品",
      "滋补",
      "养生",
      "动物",
      "燕窝"
    ],
    rtl: !0
  },
  {
    id: 1660,
    title: "云办公",
    name: "network-drive",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "云",
      "服务",
      "办公"
    ],
    rtl: !0
  },
  {
    id: 1661,
    title: "网络节点",
    name: "network-tree",
    category: "Connect",
    categoryCN: "链接",
    author: "金磊",
    tag: [
      "网络",
      "结构",
      "节点",
      "联通",
      "信息",
      "传输",
      "信号"
    ],
    rtl: !0
  },
  {
    id: 1662,
    title: "神经",
    name: "neural",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "神经科",
      "精神",
      "神经元",
      "医疗"
    ],
    rtl: !0
  },
  {
    id: 1663,
    title: "正常标签",
    name: "neutral-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "正常标签",
      "表情",
      "无语"
    ],
    rtl: !1
  },
  {
    id: 1664,
    title: "新传入",
    name: "new-afferent",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1665,
    title: "计算机",
    name: "new-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1666,
    title: "电子签-新",
    name: "new-dianziqian",
    category: "Brand",
    categoryCN: "品牌",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1667,
    title: "新传出",
    name: "new-efferent",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1668,
    title: "飞书-新",
    name: "new-lark",
    category: "Brand",
    categoryCN: "品牌",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1669,
    title: "新图片",
    name: "new-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1670,
    title: "创建",
    name: "newlybuild",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "新建",
      "增加",
      "创建"
    ],
    rtl: !0
  },
  {
    id: 1671,
    title: "报纸折叠",
    name: "newspaper-folding",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "报纸折叠",
      "纸张",
      "折页",
      "传单"
    ],
    rtl: !0
  },
  {
    id: 1672,
    title: "下一步",
    name: "next",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "进一步",
      "向右",
      "下一级"
    ],
    rtl: !0
  },
  {
    id: 1673,
    title: "按键九",
    name: "nine-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "九",
      "9",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 1674,
    title: "九点连接",
    name: "nine-points-connected",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "九点连接",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 1675,
    title: "任天堂游戏机",
    name: "nintendo-switch",
    category: "Game",
    categoryCN: "游戏",
    author: "金磊",
    tag: [
      "游戏机",
      "任天堂",
      "娱乐",
      "玩啥",
      "电子游戏",
      "掌机"
    ],
    rtl: !0
  },
  {
    id: 1676,
    title: "核磁共振",
    name: "nmr",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "影像科",
      "影像",
      "检查",
      "医疗"
    ],
    rtl: !0
  },
  {
    id: 1677,
    title: "禁止拍照",
    name: "no-shooting",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "禁止"
    ],
    rtl: !0
  },
  {
    id: 1678,
    title: "方头节点",
    name: "node-flat",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "端点类型",
      "方头节点"
    ],
    rtl: !0
  },
  {
    id: 1679,
    title: "圆头节点",
    name: "node-round",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "端点类型",
      "圆点节点"
    ],
    rtl: !0
  },
  {
    id: 1680,
    title: "平头节点",
    name: "node-square",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "端点类型",
      "平头节点"
    ],
    rtl: !0
  },
  {
    id: 1681,
    title: "面条",
    name: "noodles",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "面条",
      "美食",
      "饮食",
      "饥饿",
      "吃饭",
      "午餐",
      "早餐",
      "晚餐"
    ],
    rtl: !0
  },
  {
    id: 1682,
    title: "笔记本",
    name: "notebook",
    category: "Office",
    categoryCN: "办公文档",
    author: "刘心乐",
    tag: [
      "文档",
      "通讯录",
      "文本",
      "文件",
      "笔记本"
    ],
    rtl: !0
  },
  {
    id: 1683,
    title: "笔记本和笔",
    name: "notebook-and-pen",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "笔记本和笔",
      "学习用品",
      "办公用品"
    ],
    rtl: !0
  },
  {
    id: 1684,
    title: "笔记本",
    name: "notebook-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "刘心乐",
    tag: [
      "文档",
      "通讯录",
      "文件",
      "笔记本",
      "文本"
    ],
    rtl: !0
  },
  {
    id: 1685,
    title: "记事本",
    name: "notepad",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "记录",
      "账单",
      "条例",
      "画板",
      "黏贴板",
      "公告板"
    ],
    rtl: !1
  },
  {
    id: 1686,
    title: "笔记",
    name: "notes",
    category: "Office",
    categoryCN: "办公文档",
    author: "刘心乐",
    tag: [
      "文件",
      "纸张",
      "文本",
      "列表",
      "文档"
    ],
    rtl: !0
  },
  {
    id: 1687,
    title: "核电厂",
    name: "nuclear-plant",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "厂房",
      "发电厂",
      "试验场",
      "工地",
      "化工厂"
    ],
    rtl: !0
  },
  {
    id: 1688,
    title: "护士帽",
    name: "nurse-cap",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1689,
    title: "坚果",
    name: "nut",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "坚果",
      "零食",
      "食品",
      "炒货",
      "果脯"
    ],
    rtl: !0
  },
  {
    id: 1690,
    title: "营养",
    name: "nutrition",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "米饭",
      "午饭",
      "午餐",
      "饭",
      "营养科"
    ],
    rtl: !0
  },
  {
    id: 1691,
    title: "巨量引擎",
    name: "oceanengine",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "巨量引擎",
      "广告投放",
      "广告",
      "变现",
      "营销"
    ],
    rtl: !0
  },
  {
    id: 1692,
    title: "八边形",
    name: "octagon",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1693,
    title: "全局缩小",
    name: "off-screen",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "退出全屏",
      "收起",
      "缩进",
      "缩放"
    ],
    rtl: !1
  },
  {
    id: 1694,
    title: "全局缩小1",
    name: "off-screen-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "缩小",
      "收起",
      "缩放"
    ],
    rtl: !1
  },
  {
    id: 1695,
    title: "全局缩小2",
    name: "off-screen-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "缩小",
      "小屏"
    ],
    rtl: !0
  },
  {
    id: 1696,
    title: "工业油漆",
    name: "oil-industry",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "油"
    ],
    rtl: !0
  },
  {
    id: 1697,
    title: "认可",
    name: "okay",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "三",
      "手指",
      "手势",
      "OK",
      "肯定",
      "胜利"
    ],
    rtl: !0
  },
  {
    id: 1698,
    title: "一",
    name: "one",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "一",
      "手指",
      "食指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1699,
    title: "按键一",
    name: "one-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "一",
      "1",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 1700,
    title: "一",
    name: "one-one",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "一",
      "手指",
      "食指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1701,
    title: "旋转",
    name: "one-third-rotation",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "旋转",
      "箭头",
      "循环",
      "风扇"
    ],
    rtl: !0
  },
  {
    id: 1702,
    title: "一对多",
    name: "one-to-many",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "一对多",
      "1:n",
      "比例"
    ],
    rtl: !0
  },
  {
    id: 1703,
    title: "一对一",
    name: "one-to-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "1:1",
      "等比",
      "等比例",
      "一比一",
      "比例"
    ],
    rtl: !0
  },
  {
    id: 1704,
    title: "连体衣",
    name: "onesies",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "衣服",
      "童装",
      "上衣"
    ],
    rtl: !1
  },
  {
    id: 1705,
    title: "线上办公室",
    name: "online-meeting",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "金磊",
    tag: [
      "线上办公室",
      "语音会议",
      "视频中"
    ],
    rtl: !0
  },
  {
    id: 1706,
    title: "打开",
    name: "open",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "张开双手",
      "鼓掌",
      "手势",
      "动作"
    ],
    rtl: !0
  },
  {
    id: 1707,
    title: "开户",
    name: "open-an-account",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "创建"
    ],
    rtl: !0
  },
  {
    id: 1708,
    title: "开门",
    name: "open-door",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "开门",
      "打开",
      "立体",
      "透视",
      "拉门",
      "出去"
    ],
    rtl: !0
  },
  {
    id: 1709,
    title: "打开",
    name: "open-one",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "打开",
      "钥匙",
      "开启"
    ],
    rtl: !0
  },
  {
    id: 1710,
    title: "美化",
    name: "optimize",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "魔棒",
      "优化",
      "星星",
      "幸运棒"
    ],
    rtl: !0
  },
  {
    id: 1711,
    title: "自选",
    name: "optional",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "行情",
      "趋势",
      "数据"
    ],
    rtl: !0
  },
  {
    id: 1712,
    title: "橙子",
    name: "orange",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水果"
    ],
    rtl: !0
  },
  {
    id: 1713,
    title: "柠檬片",
    name: "orange-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "柠檬片",
      "柠檬",
      "水果",
      "柠檬干"
    ],
    rtl: !0
  },
  {
    id: 1714,
    title: "橙子建站",
    name: "orange-station",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "智能建站",
      "落地页",
      "智能设计平台",
      "oceanengine",
      "H5"
    ],
    rtl: !0
  },
  {
    id: 1715,
    title: "订单",
    name: "order",
    category: "Office",
    categoryCN: "办公文档",
    author: "白明泽",
    tag: [
      "抢单",
      "文档",
      "发票",
      "记录",
      "计分牌",
      "电磁",
      "充电中"
    ],
    rtl: !0
  },
  {
    id: 1716,
    title: "有序列表",
    name: "ordered-list",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "列表",
      "序列",
      "排序"
    ],
    rtl: !0
  },
  {
    id: 1717,
    title: "骨科",
    name: "orthopedic",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "骨头",
      "器官"
    ],
    rtl: !0
  },
  {
    id: 1718,
    title: "震荡器",
    name: "oscillator",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1719,
    title: "其他",
    name: "other",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "其他科室",
      "添加",
      "新建",
      "增加"
    ],
    rtl: !1
  },
  {
    id: 1720,
    title: "出库",
    name: "outbound",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "出库",
      "导出",
      "传输"
    ],
    rtl: !0
  },
  {
    id: 1721,
    title: "户外",
    name: "outdoor",
    category: "Energy",
    categoryCN: "能源生命",
    author: "齐奉飞",
    tag: [
      "户外",
      "运动",
      "体育",
      "锻炼",
      "旅游"
    ],
    rtl: !0
  },
  {
    id: 1722,
    title: "传出",
    name: "outgoing",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "传出",
      "传送",
      "输出",
      "数据",
      "线",
      "传出数据"
    ],
    rtl: !0
  },
  {
    id: 1723,
    title: "椭圆爱心",
    name: "oval-love",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "椭圆爱心",
      "喜欢",
      "拼接"
    ],
    rtl: !1
  },
  {
    id: 1724,
    title: "椭圆爱心",
    name: "oval-love-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "椭圆爱心",
      "喜欢",
      "拼接"
    ],
    rtl: !0
  },
  {
    id: 1725,
    title: "椭圆形",
    name: "oval-one",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1726,
    title: "电烤箱",
    name: "oven",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "电烤箱",
      "烤箱",
      "家电"
    ],
    rtl: !0
  },
  {
    id: 1727,
    title: "托盘",
    name: "oven-tray",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "托盘",
      "盘子",
      "厨具"
    ],
    rtl: !1
  },
  {
    id: 1728,
    title: "整体缩小",
    name: "overall-reduction",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "整体缩小",
      "缩放"
    ],
    rtl: !0
  },
  {
    id: 1729,
    title: "猫头鹰",
    name: "owl",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1730,
    title: "奶嘴",
    name: "pacifier",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "奶嘴"
    ],
    rtl: !0
  },
  {
    id: 1731,
    title: "平板电脑",
    name: "pad",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "电脑",
      "平板",
      "pad",
      "游戏",
      "设备"
    ],
    rtl: !0
  },
  {
    id: 1732,
    title: "页面",
    name: "page",
    category: "Components",
    categoryCN: "界面组件",
    author: "刘心乐",
    tag: [
      "网页",
      "布局",
      "排版",
      "模块",
      "页面",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1733,
    title: "页面模版",
    name: "page-template",
    category: "Components",
    categoryCN: "界面组件",
    author: "常留留",
    tag: [
      "页面",
      "模版",
      "布局"
    ],
    rtl: !0
  },
  {
    id: 1734,
    title: "宝塔",
    name: "pagoda",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "大厦",
      "塔",
      "建筑"
    ],
    rtl: !1
  },
  {
    id: 1735,
    title: "化妆刷",
    name: "paint",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "刷子",
      "扫把",
      "化妆刷",
      "清洁",
      "扫除"
    ],
    rtl: !0
  },
  {
    id: 1736,
    title: "彩蛋",
    name: "painted-eggshell",
    category: "Foods",
    categoryCN: "食品",
    author: "常留留",
    tag: [
      "egg",
      "鸡蛋",
      "雨滴",
      "鸭蛋",
      "彩蛋"
    ],
    rtl: !0
  },
  {
    id: 1737,
    title: "绘制屏",
    name: "painted-screen",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "触控板",
      "绘制",
      "屏幕",
      "平板电脑"
    ],
    rtl: !0
  },
  {
    id: 1738,
    title: "宫殿",
    name: "palace",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "银行",
      "建筑",
      "房子",
      "宫殿",
      "居住",
      "亭子",
      "景区"
    ],
    rtl: !1
  },
  {
    id: 1739,
    title: "手掌",
    name: "palm",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "五",
      "手指",
      "手势",
      "手掌"
    ],
    rtl: !0
  },
  {
    id: 1740,
    title: "熊猫",
    name: "panda",
    category: "Animals",
    categoryCN: "动物",
    author: "",
    tag: [],
    rtl: !1
  },
  {
    id: 1741,
    title: "穿山甲",
    name: "pangle",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "穿山甲",
      "广告",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1742,
    title: "全景水平",
    name: "panorama-horizontal",
    category: "Health",
    categoryCN: "医疗健康",
    author: "金磊",
    tag: [
      "水平线",
      "全景",
      "拍照",
      "360度"
    ],
    rtl: !1
  },
  {
    id: 1743,
    title: "内裤",
    name: "panties",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "裤",
      "短裤",
      "内裤",
      "泳裤"
    ],
    rtl: !1
  },
  {
    id: 1744,
    title: "钞票",
    name: "paper-money",
    category: "Money",
    categoryCN: "电商财产",
    author: "白明泽",
    tag: [
      "钞票",
      "钱财",
      "财产",
      "资金",
      "金融",
      "经济"
    ],
    rtl: !1
  },
  {
    id: 1745,
    title: "钞票",
    name: "paper-money-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "钞票",
      "钱",
      "财富",
      "资金",
      "投资",
      "美元"
    ],
    rtl: !1
  },
  {
    id: 1746,
    title: "纸船",
    name: "paper-ship",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "船",
      "模型"
    ],
    rtl: !1
  },
  {
    id: 1747,
    title: "回形针",
    name: "paperclip",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "夹子",
      "针",
      "页签"
    ],
    rtl: !0
  },
  {
    id: 1748,
    title: "抛物线",
    name: "parabola",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "抛物线",
      "试验",
      "数学",
      "教育",
      "科学"
    ],
    rtl: !0
  },
  {
    id: 1749,
    title: "降落伞",
    name: "parachute",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "降落伞",
      "跳伞",
      "运动",
      "体育",
      "危险"
    ],
    rtl: !1
  },
  {
    id: 1750,
    title: "字母段落",
    name: "paragraph-alphabet",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "字母段落",
      "文案"
    ],
    rtl: !0
  },
  {
    id: 1751,
    title: "段落折行",
    name: "paragraph-break",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "段落",
      "表格排版",
      "段落折行",
      "内容折行"
    ],
    rtl: !0
  },
  {
    id: 1752,
    title: "段落折行",
    name: "paragraph-break-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "段落折行"
    ],
    rtl: !0
  },
  {
    id: 1753,
    title: "段落截断",
    name: "paragraph-cut",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "段落",
      "表格排版",
      "段落截断",
      "内容截断"
    ],
    rtl: !0
  },
  {
    id: 1754,
    title: "矩形段落",
    name: "paragraph-rectangle",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "矩形段落"
    ],
    rtl: !0
  },
  {
    id: 1755,
    title: "圆形段落",
    name: "paragraph-round",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "圆形段落"
    ],
    rtl: !0
  },
  {
    id: 1756,
    title: "三角段落",
    name: "paragraph-triangle",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "三角段落"
    ],
    rtl: !0
  },
  {
    id: 1757,
    title: "段落溢出",
    name: "paragraph-unfold",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "段落",
      "表格排版",
      "段落溢出",
      "内容溢出"
    ],
    rtl: !0
  },
  {
    id: 1758,
    title: "并行网关",
    name: "parallel-gateway",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "并行",
      "菱形",
      "抽象",
      "几何"
    ],
    rtl: !1
  },
  {
    id: 1759,
    title: "平行四边形",
    name: "parallelogram",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1760,
    title: "育儿书",
    name: "parenting-book",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "书籍",
      "阅读"
    ],
    rtl: !0
  },
  {
    id: 1761,
    title: "停车场",
    name: "parking",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "齐奉飞",
    tag: [
      "停车",
      "坐标",
      "地图",
      "停车位",
      "标记"
    ],
    rtl: !0
  },
  {
    id: 1762,
    title: "气球",
    name: "party-balloon",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "气球",
      "起飞",
      "升空"
    ],
    rtl: !0
  },
  {
    id: 1763,
    title: "护照",
    name: "passport",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "护照",
      "身份证"
    ],
    rtl: !0
  },
  {
    id: 1764,
    title: "护照",
    name: "passport-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "护照",
      "护照夹",
      "证件"
    ],
    rtl: !0
  },
  {
    id: 1765,
    title: "暂停",
    name: "pause",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "停止播放",
      "暂停",
      "播放中"
    ],
    rtl: !0
  },
  {
    id: 1766,
    title: "暂停",
    name: "pause-one",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "停止播放",
      "暂停",
      "播放中"
    ],
    rtl: !1
  },
  {
    id: 1767,
    title: "支付码",
    name: "pay-code",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "支付",
      "支付宝",
      "扫码",
      "支付",
      "花钱",
      "财产"
    ],
    rtl: !1
  },
  {
    id: 1768,
    title: "付款码",
    name: "pay-code-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "二维码",
      "扫码",
      "扫描",
      "识别",
      "支付"
    ],
    rtl: !0
  },
  {
    id: 1769,
    title: "支付码",
    name: "pay-code-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "条形码",
      "扫码",
      "识别",
      "支付"
    ],
    rtl: !1
  },
  {
    id: 1770,
    title: "币种兑换",
    name: "payment-method",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "支付",
      "钱",
      "兑换",
      "交易"
    ],
    rtl: !0
  },
  {
    id: 1771,
    title: "paypal",
    name: "paypal",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "支付",
      "转账",
      "logo",
      "paypal"
    ],
    rtl: !0
  },
  {
    id: 1772,
    title: "桃子",
    name: "peach",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水果"
    ],
    rtl: !0
  },
  {
    id: 1773,
    title: "梨子",
    name: "pear",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水果"
    ],
    rtl: !0
  },
  {
    id: 1774,
    title: "东方明珠",
    name: "pearl-of-the-orient",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "阁楼",
      "楼房",
      "大厦",
      "办公楼",
      "塔",
      "建筑"
    ],
    rtl: !1
  },
  {
    id: 1775,
    title: "豌豆角",
    name: "peas",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "豌豆角",
      "豆角",
      "蔬菜"
    ],
    rtl: !0
  },
  {
    id: 1776,
    title: "铅笔",
    name: "pencil",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1777,
    title: "三角旗",
    name: "pennant",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "三角旗",
      "旗帜"
    ],
    rtl: !0
  },
  {
    id: 1778,
    title: "五边形",
    name: "pentagon-one",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1779,
    title: "人员",
    name: "people",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "用户",
      "客户",
      "个人中心",
      "账户中心",
      "我的",
      "员工"
    ],
    rtl: !1
  },
  {
    id: 1780,
    title: "人员下",
    name: "people-bottom",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1781,
    title: "人像卡片下",
    name: "people-bottom-card",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1782,
    title: "删除用户",
    name: "people-delete",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "删除用户"
    ],
    rtl: !0
  },
  {
    id: 1783,
    title: "删除用户",
    name: "people-delete-one",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "删除用户"
    ],
    rtl: !0
  },
  {
    id: 1784,
    title: "用户下载",
    name: "people-download",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "用户下载"
    ],
    rtl: !0
  },
  {
    id: 1785,
    title: "人员左",
    name: "people-left",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1786,
    title: "减少人群",
    name: "people-minus",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "添加",
      "用户",
      "客户"
    ],
    rtl: !0
  },
  {
    id: 1787,
    title: "减少人群",
    name: "people-minus-one",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "添加",
      "用户",
      "客户"
    ],
    rtl: !0
  },
  {
    id: 1788,
    title: "添加人群",
    name: "people-plus",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "减少",
      "用户",
      "客户",
      "删除"
    ],
    rtl: !0
  },
  {
    id: 1789,
    title: "添加人群",
    name: "people-plus-one",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "减少",
      "用户",
      "客户",
      "删除"
    ],
    rtl: !0
  },
  {
    id: 1790,
    title: "人员右",
    name: "people-right",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1791,
    title: "人身安全",
    name: "people-safe",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1792,
    title: "人身安全1",
    name: "people-safe-one",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1793,
    title: "搜索用户",
    name: "people-search",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "搜索用户"
    ],
    rtl: !0
  },
  {
    id: 1794,
    title: "搜索用户",
    name: "people-search-one",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "搜索用户"
    ],
    rtl: !0
  },
  {
    id: 1795,
    title: "人员说话",
    name: "people-speak",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1796,
    title: "人员上",
    name: "people-top",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1797,
    title: "人像卡片上",
    name: "people-top-card",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1798,
    title: "人员屏蔽",
    name: "people-unknown",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1799,
    title: "用户上传",
    name: "people-upload",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "用户上传"
    ],
    rtl: !0
  },
  {
    id: 1800,
    title: "人群",
    name: "peoples",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [
      "用户",
      "客户",
      "员工",
      "多人"
    ],
    rtl: !0
  },
  {
    id: 1801,
    title: "人群",
    name: "peoples-two",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "人群",
      "好多人"
    ],
    rtl: !1
  },
  {
    id: 1802,
    title: "百分号",
    name: "percentage",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "符号",
      "算法",
      "比例",
      "占比",
      "百分比"
    ],
    rtl: !0
  },
  {
    id: 1803,
    title: "演出",
    name: "performance",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "演出",
      "音乐",
      "表演",
      "娱乐",
      "歌曲",
      "播放"
    ],
    rtl: !0
  },
  {
    id: 1804,
    title: "香水",
    name: "perfume",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "香水",
      "瓶子",
      "容器",
      "玻璃瓶"
    ],
    rtl: !0
  },
  {
    id: 1805,
    title: "香水瓶",
    name: "perfumer-bottle",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "瓶子"
    ],
    rtl: !1
  },
  {
    id: 1806,
    title: "经期",
    name: "period",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "女性",
      "生理期",
      "生殖"
    ],
    rtl: !1
  },
  {
    id: 1807,
    title: "权限",
    name: "permissions",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "限制",
      "身份",
      "角色",
      "账户",
      "个人中心"
    ],
    rtl: !0
  },
  {
    id: 1808,
    title: "收藏好友",
    name: "personal-collection",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1809,
    title: "个人隐私",
    name: "personal-privacy",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1810,
    title: "透视",
    name: "perspective",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "透视",
      "网格"
    ],
    rtl: !0
  },
  {
    id: 1811,
    title: "农药",
    name: "pesticide",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "药品",
      "毒药",
      "肥料",
      "药瓶",
      "医药",
      "牛奶"
    ],
    rtl: !0
  },
  {
    id: 1812,
    title: "汽油",
    name: "petrol",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "机油",
      "油"
    ],
    rtl: !1
  },
  {
    id: 1813,
    title: "手机",
    name: "phone",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "Phone",
      "电话",
      "通信",
      "手机"
    ],
    rtl: !1
  },
  {
    id: 1814,
    title: "电话亭",
    name: "phone-booth",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "公共电话",
      "单间"
    ],
    rtl: !0
  },
  {
    id: 1815,
    title: "电话呼叫",
    name: "phone-call",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "通话记录",
      "电话",
      "呼叫",
      "通话"
    ],
    rtl: !0
  },
  {
    id: 1816,
    title: "电话拨入",
    name: "phone-incoming",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "拨入",
      "呼叫",
      "电话",
      "通话"
    ],
    rtl: !0
  },
  {
    id: 1817,
    title: "电话拨入",
    name: "phone-incoming-one",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "拨入",
      "电话",
      "接收",
      "通话",
      "呼叫"
    ],
    rtl: !0
  },
  {
    id: 1818,
    title: "电话错过",
    name: "phone-missed",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "电话",
      "呼叫失败",
      "通话",
      "错过",
      "静音"
    ],
    rtl: !0
  },
  {
    id: 1819,
    title: "电话关闭",
    name: "phone-off",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "电话",
      "呼叫",
      "通话",
      "关闭通话",
      "关闭联系"
    ],
    rtl: !0
  },
  {
    id: 1820,
    title: "电话",
    name: "phone-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "通话",
      "拨号",
      "转接",
      "接通",
      "交流",
      "沟通",
      "会议",
      "语音",
      "求救",
      "报警"
    ],
    rtl: !0
  },
  {
    id: 1821,
    title: "电拨拨出",
    name: "phone-outgoing",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "拨出",
      "呼叫",
      "通话",
      "电话",
      "接收"
    ],
    rtl: !0
  },
  {
    id: 1822,
    title: "电拨拨出",
    name: "phone-outgoing-one",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "拨出",
      "电话",
      "呼叫",
      "通话"
    ],
    rtl: !0
  },
  {
    id: 1823,
    title: "电话",
    name: "phone-telephone",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "齐奉飞",
    tag: [
      "电话",
      "呼叫",
      "通话"
    ],
    rtl: !0
  },
  {
    id: 1824,
    title: "电话2",
    name: "phone-two",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "通话",
      "交流",
      "沟通",
      "社交",
      "logo",
      "电话"
    ],
    rtl: !0
  },
  {
    id: 1825,
    title: "视频电话",
    name: "phone-video-call",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "金磊",
    tag: [
      "视频电话",
      "通话"
    ],
    rtl: !0
  },
  {
    id: 1826,
    title: "留声机",
    name: "phonograph",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "音乐",
      "声音",
      "歌曲",
      "歌声",
      "歌曲"
    ],
    rtl: !0
  },
  {
    id: 1827,
    title: "旅行照",
    name: "photograph",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "照片",
      "风景照",
      "摄影",
      "拍照"
    ],
    rtl: !0
  },
  {
    id: 1828,
    title: "钢琴",
    name: "piano",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "键盘",
      "琴键",
      "音乐"
    ],
    rtl: !0
  },
  {
    id: 1829,
    title: "照片",
    name: "pic",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "图片",
      "画面",
      "图形"
    ],
    rtl: !0
  },
  {
    id: 1830,
    title: "图片1",
    name: "pic-one",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "李宁",
    tag: [
      "照片",
      "相册"
    ],
    rtl: !0
  },
  {
    id: 1831,
    title: "图片",
    name: "picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "图片",
      "图形",
      "图像",
      "影相"
    ],
    rtl: !0
  },
  {
    id: 1832,
    title: "相册",
    name: "picture-album",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1833,
    title: "图片",
    name: "picture-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "图片",
      "照片"
    ],
    rtl: !0
  },
  {
    id: 1834,
    title: "进度",
    name: "pie",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1835,
    title: "进度5",
    name: "pie-five",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1836,
    title: "进度4",
    name: "pie-four",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1837,
    title: "进度1",
    name: "pie-one",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1838,
    title: "进度7",
    name: "pie-seven",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1839,
    title: "进度6",
    name: "pie-six",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1840,
    title: "进度3",
    name: "pie-three",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1841,
    title: "进度2",
    name: "pie-two",
    category: "Charts",
    categoryCN: "数据图表",
    author: "白明泽",
    tag: [
      "进度",
      "百分比",
      "饼图",
      "划分"
    ],
    rtl: !0
  },
  {
    id: 1842,
    title: "猪",
    name: "pig",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1843,
    title: "生肖猪",
    name: "pig-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1844,
    title: "鸽子",
    name: "pigeon",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1845,
    title: "药丸2",
    name: "pill",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1846,
    title: "药丸",
    name: "pills",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "药",
      "生病",
      "吃药",
      "看医生"
    ],
    rtl: !0
  },
  {
    id: 1847,
    title: "大头钉",
    name: "pin",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "钉子"
    ],
    rtl: !0
  },
  {
    id: 1848,
    title: "菠萝",
    name: "pineapple",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "菠萝",
      "水果",
      "生鲜"
    ],
    rtl: !0
  },
  {
    id: 1849,
    title: "风车",
    name: "pinwheel",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "风车",
      "风轮",
      "旋风",
      "旋转"
    ],
    rtl: !0
  },
  {
    id: 1850,
    title: "双鱼座",
    name: "pisces",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1851,
    title: "数据透视表",
    name: "pivot-table",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据",
      "透视",
      "表格",
      "交互式表格"
    ],
    rtl: !0
  },
  {
    id: 1852,
    title: "计划",
    name: "plan",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "计划",
      "日期",
      "排期",
      "日历",
      "规划"
    ],
    rtl: !0
  },
  {
    id: 1853,
    title: "星球",
    name: "planet",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "星球",
      "地球",
      "环绕",
      "卫星",
      "宇宙",
      "浏览器"
    ],
    rtl: !0
  },
  {
    id: 1854,
    title: "整形科",
    name: "plastic-surgery",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "整容",
      "美容",
      "整容手术",
      "医疗美容",
      "女人",
      "女士",
      "女性",
      "美女",
      "女性用户"
    ],
    rtl: !0
  },
  {
    id: 1855,
    title: "调色盘",
    name: "platte",
    category: "Components",
    categoryCN: "界面组件",
    author: "金磊",
    tag: [
      "调色盘",
      "美术",
      "绘画",
      "颜色",
      "主题",
      "绘画"
    ],
    rtl: !0
  },
  {
    id: 1856,
    title: "播放",
    name: "play",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [
      "视频",
      "播放",
      "播放器",
      "媒体"
    ],
    rtl: !0
  },
  {
    id: 1857,
    title: "打篮球",
    name: "play-basketball",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "篮球",
      "球类",
      "球",
      "运动",
      "扣篮",
      "远投",
      "传球",
      "助攻",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 1858,
    title: "循环播放",
    name: "play-cycle",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "刷新",
      "循环",
      "播放",
      "单曲循环"
    ],
    rtl: !0
  },
  {
    id: 1859,
    title: "播放一次",
    name: "play-once",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "播放",
      "循环",
      "单次循环"
    ],
    rtl: !0
  },
  {
    id: 1860,
    title: "播放",
    name: "play-one",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [
      "视频",
      "播放",
      "播放器",
      "媒体"
    ],
    rtl: !0
  },
  {
    id: 1861,
    title: "播放器",
    name: "play-two",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "播放",
      "视频"
    ],
    rtl: !0
  },
  {
    id: 1862,
    title: "打排球",
    name: "play-volleyball",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "打排球",
      "排球",
      "运动",
      "体育",
      "拍",
      "打",
      "扣",
      "球类",
      "球"
    ],
    rtl: !0
  },
  {
    id: 1863,
    title: "播放出错",
    name: "play-wrong",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "播放",
      "终止",
      "出错"
    ],
    rtl: !0
  },
  {
    id: 1864,
    title: "播放进度",
    name: "playback-progress",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "播放进度",
      "视频",
      "屏幕"
    ],
    rtl: !0
  },
  {
    id: 1865,
    title: "插头",
    name: "plug",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "插头",
      "插座",
      "电力"
    ],
    rtl: !1
  },
  {
    id: 1866,
    title: "插电头",
    name: "plug-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电器",
      "电源",
      "充电器",
      "插排",
      "插座"
    ],
    rtl: !0
  },
  {
    id: 1867,
    title: "加",
    name: "plus",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "新建",
      "增加",
      "创建"
    ],
    rtl: !1
  },
  {
    id: 1868,
    title: "加号",
    name: "plus-cross",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "加号",
      "符号",
      "加法",
      "红十字",
      "医疗",
      "医院"
    ],
    rtl: !1
  },
  {
    id: 1869,
    title: "指向",
    name: "point",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "一",
      "手指",
      "食指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1870,
    title: "指出",
    name: "point-out",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "一",
      "手指",
      "食指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 1871,
    title: "精灵球1",
    name: "pokeball-one",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "求",
      "玩具",
      "精灵"
    ],
    rtl: !1
  },
  {
    id: 1872,
    title: "扑克",
    name: "poker",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "扑克",
      "赌博",
      "运气",
      "魔术"
    ],
    rtl: !0
  },
  {
    id: 1873,
    title: "爆米花",
    name: "popcorn",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "爆米花",
      "娱乐",
      "食物",
      "电影",
      "肥胖"
    ],
    rtl: !0
  },
  {
    id: 1874,
    title: "爆米花",
    name: "popcorn-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "玉米",
      "爆米花",
      "零食",
      "食物"
    ],
    rtl: !1
  },
  {
    id: 1875,
    title: "积极动态",
    name: "positive-dynamics",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "动态",
      "积极",
      "正向数据",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 1876,
    title: "铁锅",
    name: "pot",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "铁锅",
      "煎锅",
      "炒锅",
      "厨具"
    ],
    rtl: !0
  },
  {
    id: 1877,
    title: "电位器",
    name: "potentiometer",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "电"
    ],
    rtl: !0
  },
  {
    id: 1878,
    title: "井号",
    name: "pound",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "井号",
      "符号",
      "字符",
      "话题",
      "编辑",
      "裁切"
    ],
    rtl: !1
  },
  {
    id: 1879,
    title: "井号",
    name: "pound-sign",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "井号",
      "网格",
      "编辑"
    ],
    rtl: !0
  },
  {
    id: 1880,
    title: "愤怒",
    name: "pouting-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "愤怒",
      "表情",
      "生气"
    ],
    rtl: !1
  },
  {
    id: 1881,
    title: "搽粉",
    name: "powder",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "香薰",
      "瓶子"
    ],
    rtl: !1
  },
  {
    id: 1882,
    title: "开关",
    name: "power",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "关闭",
      "启动",
      "阀门",
      "switch",
      "退出",
      "注销"
    ],
    rtl: !1
  },
  {
    id: 1883,
    title: "插头2",
    name: "power-supply",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "电器",
      "通电",
      "断电",
      "插板",
      "插座",
      "插头",
      "转接头",
      "充电器"
    ],
    rtl: !0
  },
  {
    id: 1884,
    title: "插头1",
    name: "power-supply-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "电器",
      "通电",
      "断电",
      "插板",
      "插座",
      "插头",
      "转接头",
      "充电器"
    ],
    rtl: !0
  },
  {
    id: 1885,
    title: "幻灯片",
    name: "powerpoint",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "幻灯片"
    ],
    rtl: !0
  },
  {
    id: 1886,
    title: "幻灯片",
    name: "ppt",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "幻灯片",
      "播放",
      "延时",
      "投影"
    ],
    rtl: !0
  },
  {
    id: 1887,
    title: "孕妇",
    name: "pregnant-women",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "怀孕",
      "胎儿",
      "妈妈",
      "孕产期"
    ],
    rtl: !0
  },
  {
    id: 1888,
    title: "学前班",
    name: "preschool",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "教育",
      "算数",
      "计算",
      "知识"
    ],
    rtl: !1
  },
  {
    id: 1889,
    title: "处方",
    name: "prescription",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "药单",
      "看医生",
      "看病",
      "添加",
      "添加文件",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 1890,
    title: "点击",
    name: "press",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "按动",
      "触发",
      "轻点"
    ],
    rtl: !0
  },
  {
    id: 1891,
    title: "预览-关闭",
    name: "preview-close",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "隐藏",
      "不可见",
      "眼睛",
      "关闭"
    ],
    rtl: !1
  },
  {
    id: 1892,
    title: "预览-关闭",
    name: "preview-close-one",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "隐藏",
      "不可见",
      "眼睛",
      "关闭"
    ],
    rtl: !0
  },
  {
    id: 1893,
    title: "预览-打开",
    name: "preview-open",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "可见",
      "眼睛",
      "打开",
      "展现",
      "睁开"
    ],
    rtl: !1
  },
  {
    id: 1894,
    title: "打印机",
    name: "printer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "打印机",
      "打印",
      "设备",
      "纸张",
      "输出",
      "硬件"
    ],
    rtl: !1
  },
  {
    id: 1895,
    title: "打印机",
    name: "printer-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "打印",
      "印刷",
      "印制",
      "复制",
      "机器",
      "设备"
    ],
    rtl: !1
  },
  {
    id: 1896,
    title: "打印机",
    name: "printer-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "打印",
      "印刷",
      "印制",
      "复制",
      "机器",
      "设备"
    ],
    rtl: !0
  },
  {
    id: 1897,
    title: "监狱",
    name: "prison",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "囚禁",
      "牢房",
      "游戏",
      "建筑"
    ],
    rtl: !0
  },
  {
    id: 1898,
    title: "纹路",
    name: "process-line",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "纹路",
      "河流",
      "小溪",
      "雾气",
      "水汽"
    ],
    rtl: !0
  },
  {
    id: 1899,
    title: "投影仪",
    name: "projector",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "投影仪",
      "播放",
      "幻灯片",
      "演讲"
    ],
    rtl: !0
  },
  {
    id: 1900,
    title: "投影机",
    name: "projector-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "电影",
      "放映"
    ],
    rtl: !0
  },
  {
    id: 1901,
    title: "放映机",
    name: "projector-three",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "电影",
      "放映"
    ],
    rtl: !0
  },
  {
    id: 1902,
    title: "投影仪",
    name: "projector-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "投影仪",
      "设备",
      "投影",
      "投屏",
      "播放",
      "演示"
    ],
    rtl: !1
  },
  {
    id: 1903,
    title: "比例缩放",
    name: "proportional-scaling",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "三角",
      "层次",
      "比例缩放"
    ],
    rtl: !0
  },
  {
    id: 1904,
    title: "保护",
    name: "protect",
    category: "Safe",
    categoryCN: "安全防护",
    author: "白明泽",
    tag: [
      "安全",
      "防卫",
      "防护",
      "盾牌",
      "安全通过",
      "安保"
    ],
    rtl: !0
  },
  {
    id: 1905,
    title: "保护",
    name: "protection",
    category: "Safe",
    categoryCN: "安全防护",
    author: "常留留",
    tag: [
      "雨伞",
      "保护",
      "下雨",
      "庇护",
      "防护",
      "安全",
      "天气",
      "护盾"
    ],
    rtl: !0
  },
  {
    id: 1906,
    title: "卫生间",
    name: "public-toilet",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "厕所",
      "男女",
      "卫生间",
      "洗手间"
    ],
    rtl: !0
  },
  {
    id: 1907,
    title: "拉门",
    name: "pull-door",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "拉门",
      "开门",
      "打开",
      "出去",
      "立体",
      "透视"
    ],
    rtl: !0
  },
  {
    id: 1908,
    title: "推送请求",
    name: "pull-requests",
    category: "Connect",
    categoryCN: "链接",
    author: "齐奉飞",
    tag: [
      "推动",
      "消息",
      "Git"
    ],
    rtl: !0
  },
  {
    id: 1909,
    title: "南瓜",
    name: "pumpkin",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "蔬菜",
      "水果"
    ],
    rtl: !0
  },
  {
    id: 1910,
    title: "纯天然",
    name: "pure-natural",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "绿色",
      "天然",
      "无公害",
      "健康"
    ],
    rtl: !0
  },
  {
    id: 1911,
    title: "推门",
    name: "push-door",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "推门",
      "开门",
      "打开",
      "进入"
    ],
    rtl: !0
  },
  {
    id: 1912,
    title: "图钉",
    name: "pushpin",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1913,
    title: "拼图",
    name: "puzzle",
    category: "Game",
    categoryCN: "游戏",
    author: "齐奉飞",
    tag: [
      "拼图",
      "版图",
      "拼接",
      "组合",
      "游戏"
    ],
    rtl: !0
  },
  {
    id: 1914,
    title: "金字塔",
    name: "pyramid",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "山脉",
      "户外",
      "金字塔",
      "雪山"
    ],
    rtl: !0
  },
  {
    id: 1915,
    title: "金字塔",
    name: "pyramid-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "金字塔",
      "日出",
      "景点"
    ],
    rtl: !0
  },
  {
    id: 1916,
    title: "青鸟线索通",
    name: "qingniao-clue",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "商业化品牌",
      "品牌广告",
      "oceanengine",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1917,
    title: "企业号",
    name: "qiyehao",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "企业号",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 1918,
    title: "四棱锥",
    name: "quadrangular-pyramid",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "四棱锥",
      "立体",
      "钻石"
    ],
    rtl: !1
  },
  {
    id: 1919,
    title: "四边形",
    name: "quadrilateral",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1920,
    title: "引用",
    name: "quote",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "引号",
      "引用",
      "附言"
    ],
    rtl: !0
  },
  {
    id: 1921,
    title: "兔子",
    name: "rabbit",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1922,
    title: "生肖兔",
    name: "rabbit-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1923,
    title: "雷达",
    name: "radar",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "雷达",
      "瞄准",
      "聚焦",
      "关注",
      "锁定",
      "定位"
    ],
    rtl: !1
  },
  {
    id: 1924,
    title: "雷达图",
    name: "radar-chart",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "雷达图",
      "蜘蛛网",
      "雷达",
      "图谱"
    ],
    rtl: !1
  },
  {
    id: 1925,
    title: "雷达3",
    name: "radar-three",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 1926,
    title: "雷达",
    name: "radar-two",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "雷达",
      "转动",
      "扫描",
      "侦查"
    ],
    rtl: !0
  },
  {
    id: 1927,
    title: "辐射",
    name: "radiation",
    category: "Safe",
    categoryCN: "安全防护",
    author: "白明泽",
    tag: [
      "辐射",
      "有害",
      "毒害",
      "危险",
      "警示",
      "风扇"
    ],
    rtl: !1
  },
  {
    id: 1928,
    title: "收音机",
    name: "radio",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "新闻",
      "播报机",
      "播音",
      "音响",
      "广播",
      "通知",
      "喇叭",
      "声音",
      "乐器",
      "听音乐",
      "听书"
    ],
    rtl: !0
  },
  {
    id: 1929,
    title: "广播保姆",
    name: "radio-nanny",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "遥控器",
      "播放器",
      "广播"
    ],
    rtl: !0
  },
  {
    id: 1930,
    title: "收音机",
    name: "radio-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "播音",
      "音响",
      "广播",
      "通知",
      "喇叭",
      "声音",
      "乐器",
      "听音乐",
      "听书"
    ],
    rtl: !0
  },
  {
    id: 1931,
    title: "单选",
    name: "radio-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1932,
    title: "萝卜",
    name: "radish",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "蔬菜",
      "水果"
    ],
    rtl: !0
  },
  {
    id: 1933,
    title: "圆萝卜",
    name: "radish-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "圆萝卜",
      "萝卜",
      "蔬菜",
      "水萝卜"
    ],
    rtl: !0
  },
  {
    id: 1934,
    title: "铁路",
    name: "railway",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "铁路",
      "陆运",
      "运输"
    ],
    rtl: !0
  },
  {
    id: 1935,
    title: "排行榜",
    name: "ranking",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "排行榜",
      "柱状图",
      "奖牌",
      "排名",
      "热榜"
    ],
    rtl: !0
  },
  {
    id: 1936,
    title: "排行榜",
    name: "ranking-list",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "排行",
      "排名",
      "榜单"
    ],
    rtl: !0
  },
  {
    id: 1937,
    title: "拨浪鼓",
    name: "rattle",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "鼓",
      "玩具"
    ],
    rtl: !0
  },
  {
    id: 1938,
    title: "拨浪鼓1",
    name: "rattle-one",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "鼓",
      "玩具"
    ],
    rtl: !0
  },
  {
    id: 1939,
    title: "剃刀",
    name: "razor",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1940,
    title: "读书",
    name: "read-book",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 1941,
    title: "接收库",
    name: "receive",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "收纳",
      "容纳",
      "接收",
      "回收箱"
    ],
    rtl: !0
  },
  {
    id: 1942,
    title: "接收器",
    name: "receiver",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "信号",
      "接收",
      "卫星",
      "发现"
    ],
    rtl: !0
  },
  {
    id: 1943,
    title: "按最近浏览量排序",
    name: "recent-views-sort",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "排序",
      "浏览",
      "最近",
      "查看数据"
    ],
    rtl: !0
  },
  {
    id: 1944,
    title: "唱片集",
    name: "record",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 1945,
    title: "光盘",
    name: "record-disc",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "光盘",
      "音乐",
      "磁盘",
      "播放",
      "复古"
    ],
    rtl: !0
  },
  {
    id: 1946,
    title: "播放器",
    name: "record-player",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "播放",
      "音响",
      "广播",
      "通知",
      "喇叭",
      "声音",
      "乐器",
      "听音乐"
    ],
    rtl: !0
  },
  {
    id: 1947,
    title: "矩形",
    name: "rectangle",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1948,
    title: "矩形1",
    name: "rectangle-one",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1949,
    title: "小矩形",
    name: "rectangle-small",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 1950,
    title: "矩形撕裂",
    name: "rectangle-tear",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "矩形撕裂",
      "销毁",
      "扯开"
    ],
    rtl: !0
  },
  {
    id: 1951,
    title: "大X",
    name: "rectangle-x",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "大X",
      "抽象",
      "关闭",
      "错误"
    ],
    rtl: !1
  },
  {
    id: 1952,
    title: "图形连接",
    name: "rectangular-circular-connection",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "图形连接",
      "链接",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 1953,
    title: "图形分割",
    name: "rectangular-circular-separation",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "图形分割",
      "抽象",
      "分裂",
      "翘板",
      "平衡"
    ],
    rtl: !0
  },
  {
    id: 1954,
    title: "矩形椎体",
    name: "rectangular-vertebra",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "矩形椎体",
      "容器",
      "梯形"
    ],
    rtl: !1
  },
  {
    id: 1955,
    title: "回收站",
    name: "recycle-bin",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "常留留",
    tag: [
      "回收站",
      "回收",
      "垃圾桶",
      "恢复",
      "积累"
    ],
    rtl: !0
  },
  {
    id: 1956,
    title: "可回收",
    name: "recycling",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "组件",
      "循环",
      "可持续",
      "新能源",
      "环保"
    ],
    rtl: !0
  },
  {
    id: 1957,
    title: "回收池",
    name: "recycling-pool",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "聚合",
      "收拢",
      "回收",
      "沉淀"
    ],
    rtl: !0
  },
  {
    id: 1958,
    title: "红十字",
    name: "red-cross",
    category: "Health",
    categoryCN: "医疗健康",
    author: "金磊",
    tag: [
      "红十字",
      "医疗",
      "救援",
      "医院",
      "急救中心"
    ],
    rtl: !1
  },
  {
    id: 1959,
    title: "红包",
    name: "red-envelope",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱",
      "红包"
    ],
    rtl: !1
  },
  {
    id: 1960,
    title: "红包",
    name: "red-envelopes",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "红包",
      "钱"
    ],
    rtl: !1
  },
  {
    id: 1961,
    title: "重新",
    name: "redo",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "重做",
      "再做",
      "刷新",
      "旋转"
    ],
    rtl: !0
  },
  {
    id: 1962,
    title: "减少",
    name: "reduce",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "未全选",
      "复选框",
      "减去",
      "去除"
    ],
    rtl: !1
  },
  {
    id: 1963,
    title: "减少小数位",
    name: "reduce-decimal-places",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "小数位",
      "减少位数"
    ],
    rtl: !0
  },
  {
    id: 1964,
    title: "减少",
    name: "reduce-one",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "未全选",
      "减号",
      "不允许",
      "禁止"
    ],
    rtl: !1
  },
  {
    id: 1965,
    title: "收缩",
    name: "reduce-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "收缩",
      "游戏",
      "方向",
      "左右",
      "手柄"
    ],
    rtl: !1
  },
  {
    id: 1966,
    title: "减少用户",
    name: "reduce-user",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "减少",
      "精简",
      "用户",
      "人群",
      "我的",
      "个人中心",
      "人"
    ],
    rtl: !1
  },
  {
    id: 1967,
    title: "线轮",
    name: "reel",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "线",
      "轮",
      "绳"
    ],
    rtl: !1
  },
  {
    id: 1968,
    title: "三角形",
    name: "refraction",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "三菱镜",
      "多进少出",
      "抽象",
      "几何"
    ],
    rtl: !0
  },
  {
    id: 1969,
    title: "刷新",
    name: "refresh",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "刷新",
      "旋转",
      "切换",
      "重置",
      "更新"
    ],
    rtl: !0
  },
  {
    id: 1970,
    title: "刷新",
    name: "refresh-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "旋转",
      "刷新",
      "循环",
      "逆转",
      "转动"
    ],
    rtl: !0
  },
  {
    id: 1971,
    title: "冰箱",
    name: "refrigerator",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "冰箱",
      "电器",
      "厨房厨具",
      "电冰箱"
    ],
    rtl: !0
  },
  {
    id: 1972,
    title: "驳回",
    name: "reject",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "拒绝",
      "驳回",
      "拒绝",
      "不通过",
      "有问题"
    ],
    rtl: !0
  },
  {
    id: 1973,
    title: "关系链",
    name: "relational-graph",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "连接",
      "关系链",
      "发散",
      "跳跃"
    ],
    rtl: !0
  },
  {
    id: 1974,
    title: "笑眯眼",
    name: "relieved-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "笑眯眼",
      "表情",
      "羞涩"
    ],
    rtl: !1
  },
  {
    id: 1975,
    title: "重装",
    name: "reload",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "更新",
      "画圈",
      "转动",
      "指向"
    ],
    rtl: !0
  },
  {
    id: 1976,
    title: "提醒",
    name: "remind",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "提示",
      "消息",
      "警示",
      "警钟",
      "铃铛"
    ],
    rtl: !1
  },
  {
    id: 1977,
    title: "无效提醒",
    name: "remind-disable",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "闹钟",
      "提醒",
      "无效",
      "时间",
      "超时"
    ],
    rtl: !1
  },
  {
    id: 1978,
    title: "遥控器",
    name: "remote-control",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "控制",
      "遥控",
      "开关",
      "调节",
      "调整",
      "命令",
      "传感器",
      "感应器"
    ],
    rtl: !0
  },
  {
    id: 1979,
    title: "遥控器",
    name: "remote-control-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "控制",
      "遥控",
      "开关",
      "调节",
      "调整",
      "命令",
      "传感器",
      "感应器"
    ],
    rtl: !0
  },
  {
    id: 1980,
    title: "肾",
    name: "renal",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "泌尿科",
      "肾脏",
      "排泄",
      "代谢",
      "器官"
    ],
    rtl: !0
  },
  {
    id: 1981,
    title: "雷诺",
    name: "renault",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "四边形",
      "汽车",
      "logo",
      "标志",
      "标识"
    ],
    rtl: !1
  },
  {
    id: 1982,
    title: "编辑",
    name: "repair",
    category: "Edit",
    categoryCN: "编辑",
    author: "张蔓",
    tag: [
      "编辑",
      "代码",
      "文案",
      "写字",
      "输入"
    ],
    rtl: !0
  },
  {
    id: 1983,
    title: "播放5次",
    name: "replay-five",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "重播",
      "循环"
    ],
    rtl: !0
  },
  {
    id: 1984,
    title: "重新播放",
    name: "replay-music",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "循环",
      "重新",
      "重复"
    ],
    rtl: !0
  },
  {
    id: 1985,
    title: "举报",
    name: "report",
    category: "Safe",
    categoryCN: "安全防护",
    author: "白明泽",
    tag: [
      "举报",
      "检举",
      "告发",
      "报告",
      "警报",
      "灯",
      "警示",
      "灵感"
    ],
    rtl: !0
  },
  {
    id: 1986,
    title: "重新定位",
    name: "repositioning",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "定位",
      "位置",
      "刷新位置"
    ],
    rtl: !0
  },
  {
    id: 1987,
    title: "电阻器",
    name: "resistor",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "电阻"
    ],
    rtl: !1
  },
  {
    id: 1988,
    title: "抱拳",
    name: "respect",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "佩服",
      "膜拜",
      "崇拜",
      "恳求"
    ],
    rtl: !0
  },
  {
    id: 1989,
    title: "休闲",
    name: "resting",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "遮阳伞",
      "躺椅",
      "遮阳",
      "休息",
      "小憩"
    ],
    rtl: !0
  },
  {
    id: 1990,
    title: "复古包",
    name: "retro-bag",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "包包",
      "复古包",
      "皮包",
      "手提包",
      "小包"
    ],
    rtl: !1
  },
  {
    id: 1991,
    title: "返回",
    name: "return",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "重做",
      "返回",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1992,
    title: "镜头反转",
    name: "reverse-lens",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "相机",
      "镜头",
      "反转"
    ],
    rtl: !0
  },
  {
    id: 1993,
    title: "反转相机",
    name: "reverse-lens-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "镜头",
      "相机",
      "反转"
    ],
    rtl: !0
  },
  {
    id: 1994,
    title: "同向运行",
    name: "reverse-operation-in",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "同向运行",
      "汇集",
      "方向",
      "传递"
    ],
    rtl: !0
  },
  {
    id: 1995,
    title: "逆向运行",
    name: "reverse-operation-out",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "逆向运行",
      "反向",
      "散发",
      "左右",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 1996,
    title: "逆向旋转",
    name: "reverse-rotation",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "逆向",
      "逆时针",
      "逆时针旋转",
      "旋转",
      "转动",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 1997,
    title: "米饭",
    name: "rice",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "大米",
      "主食",
      "谷物",
      "农作物"
    ],
    rtl: !0
  },
  {
    id: 1998,
    title: "骑自行车",
    name: "riding",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "骑行",
      "运动",
      "比赛",
      "自行车",
      "冲刺",
      "两轮车",
      "轮胎",
      "速度",
      "健身",
      "力量",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 1999,
    title: "骑术",
    name: "riding-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "骑马",
      "游玩",
      "户外"
    ],
    rtl: !0
  },
  {
    id: 2e3,
    title: "右",
    name: "right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "下一个",
      "向右",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 2001,
    title: "直角形",
    name: "right-angle",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 2002,
    title: "右栏",
    name: "right-bar",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "右"
    ],
    rtl: !0
  },
  {
    id: 2003,
    title: "右分支",
    name: "right-branch",
    category: "Connect",
    categoryCN: "链接",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2004,
    title: "右分支1",
    name: "right-branch-one",
    category: "Connect",
    categoryCN: "链接",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2005,
    title: "右分支2",
    name: "right-branch-two",
    category: "Connect",
    categoryCN: "链接",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2006,
    title: "右-圆",
    name: "right-c",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "下一个",
      "箭头",
      "右",
      "圆圈箭头"
    ],
    rtl: !0
  },
  {
    id: 2007,
    title: "向右展开",
    name: "right-expand",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "展开",
      "收起",
      "右展开"
    ],
    rtl: !0
  },
  {
    id: 2008,
    title: "右1",
    name: "right-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "下一个",
      "向右",
      "箭头",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 2009,
    title: "右运行",
    name: "right-run",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "右运行",
      "右看齐",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 2010,
    title: "右-小",
    name: "right-small",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "向右",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 2011,
    title: "右下-小",
    name: "right-small-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "右下-小",
      "方向",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 2012,
    title: "右上-小",
    name: "right-small-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "右上-小",
      "方向",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 2013,
    title: "右箭头-方",
    name: "right-square",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "下一个",
      "箭头",
      "方形箭头",
      "右"
    ],
    rtl: !0
  },
  {
    id: 2014,
    title: "右1",
    name: "right-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "右",
      "指针",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 2015,
    title: "正确用户",
    name: "right-user",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "正确",
      "用户",
      "精准",
      "完成"
    ],
    rtl: !0
  },
  {
    id: 2016,
    title: "圆环",
    name: "ring",
    category: "Connect",
    categoryCN: "链接",
    author: "常留留",
    tag: [
      "循环",
      "环形",
      "连接",
      "开源库"
    ],
    rtl: !1
  },
  {
    id: 2017,
    title: "圆环",
    name: "ring-one",
    category: "Connect",
    categoryCN: "链接",
    author: "常留留",
    tag: [
      "循环",
      "环形",
      "连接",
      "合作"
    ],
    rtl: !1
  },
  {
    id: 2018,
    title: "吊环",
    name: "rings",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "训练",
      "舞蹈",
      "体操",
      "放松",
      "热身",
      "健身",
      "健壮",
      "健康",
      "力量",
      "运动",
      "拉伸",
      "吊起",
      "技术",
      "技巧",
      "体育"
    ],
    rtl: !1
  },
  {
    id: 2019,
    title: "波纹",
    name: "ripple",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "波纹"
    ],
    rtl: !0
  },
  {
    id: 2020,
    title: "道路",
    name: "road",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "道路",
      "交通",
      "运输"
    ],
    rtl: !1
  },
  {
    id: 2021,
    title: "路锥",
    name: "road-cone",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "道路",
      "警示",
      "安全",
      "交通"
    ],
    rtl: !1
  },
  {
    id: 2022,
    title: "马路1",
    name: "road-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2023,
    title: "方向标识",
    name: "road-sign",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "方向标识",
      "方向",
      "指示牌",
      "单方向",
      "交通"
    ],
    rtl: !0
  },
  {
    id: 2024,
    title: "方向标识",
    name: "road-sign-both",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "方向标识",
      "方向",
      "指示牌",
      "多方向",
      "渠道"
    ],
    rtl: !0
  },
  {
    id: 2025,
    title: "机器人2",
    name: "robot",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "控制",
      "遥控",
      "调整",
      "命令",
      "执行",
      "客服"
    ],
    rtl: !0
  },
  {
    id: 2026,
    title: "机器人1",
    name: "robot-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "控制",
      "遥控",
      "调整",
      "命令",
      "执行",
      "客服"
    ],
    rtl: !0
  },
  {
    id: 2027,
    title: "机器人2",
    name: "robot-two",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "智能",
      "机床",
      "机器"
    ],
    rtl: !1
  },
  {
    id: 2028,
    title: "摇滚指",
    name: "rock",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "弹手",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 2029,
    title: "摇滚手势",
    name: "rock-gesture",
    category: "Hands",
    categoryCN: "手势动作",
    author: "金磊",
    tag: [
      "摇滚手势",
      "爱你",
      "爱心",
      "摇滚",
      "手势",
      "姿势",
      "态度",
      "乐队"
    ],
    rtl: !0
  },
  {
    id: 2030,
    title: "火箭",
    name: "rocket",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "火箭",
      "发射",
      "上升",
      "速度"
    ],
    rtl: !1
  },
  {
    id: 2031,
    title: "火箭",
    name: "rocket-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "飞行器",
      "推动器",
      "发射器",
      "航天器",
      "宇宙飞船"
    ],
    rtl: !0
  },
  {
    id: 2032,
    title: "摇马",
    name: "rocking-horse",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "马"
    ],
    rtl: !0
  },
  {
    id: 2033,
    title: "溜冰鞋",
    name: "rollerskates",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "鞋子",
      "滑冰",
      "溜冰",
      "轮滑",
      "滑行",
      "滑走",
      "运动",
      "训练",
      "技术",
      "技巧",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 2034,
    title: "连体衣",
    name: "romper",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "衣服",
      "童装",
      "上衣"
    ],
    rtl: !1
  },
  {
    id: 2035,
    title: "跳绳",
    name: "rope-skipping",
    category: "Sports",
    categoryCN: "体育运动",
    author: "金磊",
    tag: [
      "跳绳",
      "绳子"
    ],
    rtl: !0
  },
  {
    id: 2036,
    title: "跳绳",
    name: "rope-skipping-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "",
    tag: [
      "绳子",
      "跳"
    ],
    rtl: !1
  },
  {
    id: 2037,
    title: "旋转",
    name: "rotate",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "旋转",
      "翻转",
      "90",
      "度旋转",
      "抛出",
      "移动"
    ],
    rtl: !0
  },
  {
    id: 2038,
    title: "旋转",
    name: "rotate-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "中心",
      "焦点",
      "雷达",
      "转动",
      "统计",
      "图表",
      "铃铛"
    ],
    rtl: !0
  },
  {
    id: 2039,
    title: "旋转添加",
    name: "rotating-add",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "旋转",
      "添加",
      "转动",
      "箭头",
      "加号"
    ],
    rtl: !0
  },
  {
    id: 2040,
    title: "正向旋转",
    name: "rotating-forward",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "正向",
      "顺时针",
      "顺时针旋转",
      "旋转",
      "转动",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 2041,
    title: "旋转",
    name: "rotation",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "加载",
      "圆",
      "旋转"
    ],
    rtl: !0
  },
  {
    id: 2042,
    title: "横向旋转",
    name: "rotation-horizontal",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "旋转",
      "横向",
      "水平旋转",
      "环绕"
    ],
    rtl: !0
  },
  {
    id: 2043,
    title: "角度",
    name: "rotation-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "角度",
      "90度",
      "数学",
      "测量"
    ],
    rtl: !0
  },
  {
    id: 2044,
    title: "纵向旋转",
    name: "rotation-vertical",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "旋转",
      "纵向",
      "旋转",
      "环绕"
    ],
    rtl: !0
  },
  {
    id: 2045,
    title: "圆形",
    name: "round",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 2046,
    title: "圆形卡钳",
    name: "round-caliper",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆形卡钳",
      "循环",
      "风扇",
      "螺丝帽"
    ],
    rtl: !1
  },
  {
    id: 2047,
    title: "圆形扭曲",
    name: "round-distortion",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆形扭曲",
      "风扇",
      "旋转",
      "循环"
    ],
    rtl: !1
  },
  {
    id: 2048,
    title: "圆形遮罩",
    name: "round-mask",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆形遮罩",
      "面积",
      "比例",
      "抽象"
    ],
    rtl: !1
  },
  {
    id: 2049,
    title: "圆形插座",
    name: "round-socket",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "圆形插座",
      "电源",
      "危险",
      "插件",
      "三角插口"
    ],
    rtl: !1
  },
  {
    id: 2050,
    title: "往返飞",
    name: "round-trip",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "往返",
      "往返旅行"
    ],
    rtl: !0
  },
  {
    id: 2051,
    title: "路由器",
    name: "router",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "路由器",
      "路由",
      "网络",
      "设备",
      "硬件",
      "存储",
      "信号"
    ],
    rtl: !0
  },
  {
    id: 2052,
    title: "路由器",
    name: "router-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "wifi",
      "信号",
      "发射器",
      "无线网",
      "流量",
      "接收器",
      "雷达"
    ],
    rtl: !0
  },
  {
    id: 2053,
    title: "行高度",
    name: "row-height",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "行高",
      "高度",
      "行间距"
    ],
    rtl: !0
  },
  {
    id: 2054,
    title: "划船",
    name: "rowing",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "滑动",
      "船",
      "滑行",
      "拨动",
      "前进",
      "划龙舟",
      "划水",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 2055,
    title: "RS",
    name: "rs-male",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "数据"
    ],
    rtl: !1
  },
  {
    id: 2056,
    title: "订阅",
    name: "rss",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "订阅",
      "关注",
      "标记",
      "便签",
      "标签"
    ],
    rtl: !1
  },
  {
    id: 2057,
    title: "橄榄球",
    name: "rugby",
    category: "Sports",
    categoryCN: "体育运动",
    author: "齐奉飞",
    tag: [
      "橄榄球",
      "运动",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 2058,
    title: "橄榄球1",
    name: "rugby-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "球类",
      "球",
      "运动",
      "橄榄球",
      "美式足球",
      "美式体育"
    ],
    rtl: !1
  },
  {
    id: 2059,
    title: "尺子2",
    name: "rule-two",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2060,
    title: "尺子",
    name: "ruler",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "金磊",
    tag: [
      "度量",
      "尺子",
      "距离",
      "长度",
      "刻度",
      "测量"
    ],
    rtl: !0
  },
  {
    id: 2061,
    title: "尺子1",
    name: "ruler-one",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "史晓彤",
    tag: [
      "尺子",
      "标尺",
      "拦截",
      "刻度",
      "测量"
    ],
    rtl: !0
  },
  {
    id: 2062,
    title: "左运行",
    name: "run-left",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "左运行",
      "左看齐",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 2063,
    title: "底部连接",
    name: "s-turn-down",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "底部连接",
      "流转",
      "传输",
      "串联"
    ],
    rtl: !0
  },
  {
    id: 2064,
    title: "左侧连接",
    name: "s-turn-left",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "左侧连接",
      "流转",
      "传输",
      "串联"
    ],
    rtl: !0
  },
  {
    id: 2065,
    title: "右侧连接",
    name: "s-turn-right",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "右侧连接",
      "流转",
      "传输",
      "串联"
    ],
    rtl: !0
  },
  {
    id: 2066,
    title: "顶部连接",
    name: "s-turn-up",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "上侧连接",
      "传输",
      "串联",
      "流转"
    ],
    rtl: !0
  },
  {
    id: 2067,
    title: "安全检索",
    name: "safe-retrieval",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2068,
    title: "射手座",
    name: "sagittarius",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2069,
    title: "帆船",
    name: "sailboat",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "船",
      "舰",
      "渔船",
      "港口",
      "航行",
      "旅游"
    ],
    rtl: !0
  },
  {
    id: 2070,
    title: "帆船1",
    name: "sailboat-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2071,
    title: "航行",
    name: "sailing",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "航行",
      "帆船",
      "船舶"
    ],
    rtl: !0
  },
  {
    id: 2072,
    title: "销售",
    name: "sales-report",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "销售",
      "售卖",
      "数据",
      "抽象",
      "六边形"
    ],
    rtl: !0
  },
  {
    id: 2073,
    title: "凉鞋",
    name: "sandals",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "拖鞋",
      "凉拖",
      "度假",
      "休闲",
      "人字拖"
    ],
    rtl: !0
  },
  {
    id: 2074,
    title: "沙尘暴",
    name: "sandstorm",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "沙尘暴",
      "浮尘",
      "大风",
      "坏天气"
    ],
    rtl: !0
  },
  {
    id: 2075,
    title: "三明治",
    name: "sandwich",
    category: "Foods",
    categoryCN: "食品",
    author: "史晓彤",
    tag: [
      "三明治",
      "早餐",
      "切角"
    ],
    rtl: !0
  },
  {
    id: 2076,
    title: "三明治",
    name: "sandwich-one",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "三明治",
      "热狗",
      "食品",
      "面包"
    ],
    rtl: !0
  },
  {
    id: 2077,
    title: "树苗",
    name: "sapling",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "节能",
      "环保",
      "新能源",
      "植物",
      "树木",
      "幼小",
      "苗木"
    ],
    rtl: !0
  },
  {
    id: 2078,
    title: "保存",
    name: "save",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "保存",
      "存储",
      "暂存",
      "草稿",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 2079,
    title: "保存硬盘",
    name: "save-one",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "保存",
      "存储",
      "暂存",
      "硬盘",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 2080,
    title: "等比缩放",
    name: "scale",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "等比缩放"
    ],
    rtl: !0
  },
  {
    id: 2081,
    title: "测量",
    name: "scale-one",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2082,
    title: "大葱",
    name: "scallion",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "大葱",
      "葱头",
      "葱蒜",
      "蔬菜"
    ],
    rtl: !0
  },
  {
    id: 2083,
    title: "扫描",
    name: "scan",
    category: "Edit",
    categoryCN: "编辑",
    author: "史晓彤",
    tag: [
      "识别",
      "扫描",
      "扫码",
      "聚焦",
      "添加"
    ],
    rtl: !1
  },
  {
    id: 2084,
    title: "扫码",
    name: "scan-code",
    category: "Money",
    categoryCN: "电商财产",
    author: "白明泽",
    tag: [
      "扫一扫",
      "登录",
      "扫码",
      "二维码",
      "扫描"
    ],
    rtl: !1
  },
  {
    id: 2085,
    title: "扫描设置",
    name: "scan-setting",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "设置",
      "扫描",
      "打印",
      "方向",
      "按键",
      "扫描"
    ],
    rtl: !1
  },
  {
    id: 2086,
    title: "扫描",
    name: "scanning",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "扫描",
      "聚焦",
      "识别",
      "扫码"
    ],
    rtl: !1
  },
  {
    id: 2087,
    title: "扫描",
    name: "scanning-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "扫描",
      "聚焦",
      "识别",
      "扫码"
    ],
    rtl: !1
  },
  {
    id: 2088,
    title: "分散对齐",
    name: "scatter-alignment",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文本对齐",
      "对齐方式",
      "排版方式",
      "分散"
    ],
    rtl: !0
  },
  {
    id: 2089,
    title: "日程表",
    name: "schedule",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "时间",
      "日历",
      "课程表",
      "日程",
      "记录",
      "牌子"
    ],
    rtl: !0
  },
  {
    id: 2090,
    title: "学校",
    name: "school",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "政府",
      "机构",
      "房子",
      "办公楼",
      "学校"
    ],
    rtl: !0
  },
  {
    id: 2091,
    title: "剪刀",
    name: "scissors",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "剪刀",
      "剪切",
      "裁剪"
    ],
    rtl: !0
  },
  {
    id: 2092,
    title: "比分牌",
    name: "scoreboard",
    category: "Sports",
    categoryCN: "体育运动",
    author: "",
    tag: [
      "比分",
      "统计牌"
    ],
    rtl: !0
  },
  {
    id: 2093,
    title: "天蝎座",
    name: "scorpio",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2094,
    title: "屏幕旋转",
    name: "screen-rotation",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "旋转",
      "屏幕",
      "转动",
      "竖转横"
    ],
    rtl: !0
  },
  {
    id: 2095,
    title: "截屏",
    name: "screenshot",
    category: "Edit",
    categoryCN: "编辑",
    author: "白明泽",
    tag: [
      "截屏",
      "录频",
      "裁剪",
      "截图",
      "剪刀"
    ],
    rtl: !1
  },
  {
    id: 2096,
    title: "截图",
    name: "screenshot-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "聚焦",
      "对准",
      "截图",
      "扩展",
      "扫描"
    ],
    rtl: !1
  },
  {
    id: 2097,
    title: "截屏",
    name: "screenshot-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "截屏",
      "录屏",
      "界面",
      "剪刀"
    ],
    rtl: !0
  },
  {
    id: 2098,
    title: "螺丝刀",
    name: "screwdriver",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2099,
    title: "SD卡",
    name: "sd",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "卡",
      "储存",
      "信号",
      "流量"
    ],
    rtl: !0
  },
  {
    id: 2100,
    title: "存储卡",
    name: "sd-card",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "SD",
      "secure",
      "digital",
      "memory",
      "card",
      "储存",
      "存储",
      "store",
      "card",
      "芯片"
    ],
    rtl: !0
  },
  {
    id: 2101,
    title: "印章",
    name: "seal",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "打印",
      "印制",
      "复印",
      "标记",
      "认证",
      "审批",
      "审核",
      "确认"
    ],
    rtl: !0
  },
  {
    id: 2102,
    title: "搜索",
    name: "search",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "搜索",
      "查找",
      "放大镜"
    ],
    rtl: !0
  },
  {
    id: 2103,
    title: "座位",
    name: "seat",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2104,
    title: "安全",
    name: "security",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "保护伞",
      "雨伞"
    ],
    rtl: !0
  },
  {
    id: 2105,
    title: "安全台",
    name: "security-stall",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "高台",
      "观景台",
      "裁判台",
      "电话亭"
    ],
    rtl: !1
  },
  {
    id: 2106,
    title: "幼苗",
    name: "seedling",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2107,
    title: "选中",
    name: "selected",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "选中",
      "命中",
      "缩放"
    ],
    rtl: !1
  },
  {
    id: 2108,
    title: "选中焦点",
    name: "selected-focus",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "选中焦点",
      "锚点",
      "图形"
    ],
    rtl: !1
  },
  {
    id: 2109,
    title: "自拍杆",
    name: "selfie",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "自拍",
      "自拍杆",
      "拍照",
      "拍摄",
      "摄影"
    ],
    rtl: !0
  },
  {
    id: 2110,
    title: "发送",
    name: "send",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "飞机",
      "发送",
      "飞书",
      "导航"
    ],
    rtl: !0
  },
  {
    id: 2111,
    title: "下层",
    name: "send-backward",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "下层",
      "底层",
      "向下"
    ],
    rtl: !1
  },
  {
    id: 2112,
    title: "发送邮件",
    name: "send-email",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "转发"
    ],
    rtl: !0
  },
  {
    id: 2113,
    title: "发送1",
    name: "send-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "飞机",
      "发送",
      "飞书",
      "导航"
    ],
    rtl: !0
  },
  {
    id: 2114,
    title: "移到后面",
    name: "send-to-back",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "置顶",
      "筛选",
      "分类",
      "分离",
      "移动"
    ],
    rtl: !0
  },
  {
    id: 2115,
    title: "最下层",
    name: "sent-to-back",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "最下层",
      "图层",
      "层级",
      "底层"
    ],
    rtl: !0
  },
  {
    id: 2116,
    title: "搜索引擎",
    name: "seo",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "搜索引擎",
      "seo",
      "组件"
    ],
    rtl: !0
  },
  {
    id: 2117,
    title: "文件夹",
    name: "seo-folder",
    category: "Office",
    categoryCN: "办公文档",
    author: "张蔓",
    tag: [
      "文件夹",
      "收藏",
      "整理",
      "收纳",
      "代码文件"
    ],
    rtl: !0
  },
  {
    id: 2118,
    title: "服务器",
    name: "server",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "服务器",
      "运算",
      "计算",
      "机房",
      "云计算"
    ],
    rtl: !0
  },
  {
    id: 2119,
    title: "出发",
    name: "set-off",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "出行",
      "下班",
      "出发",
      "动身"
    ],
    rtl: !0
  },
  {
    id: 2120,
    title: "设置",
    name: "setting",
    category: "Base",
    categoryCN: "基础",
    author: "刘心乐",
    tag: [
      "齿轮",
      "设置",
      "螺丝",
      "螺母",
      "配置",
      "工具"
    ],
    rtl: !1
  },
  {
    id: 2121,
    title: "计算机设置",
    name: "setting-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2122,
    title: "设置配置",
    name: "setting-config",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "调节",
      "音量调节",
      "设置调节",
      "音频"
    ],
    rtl: !0
  },
  {
    id: 2123,
    title: "笔记本电脑设置",
    name: "setting-laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2124,
    title: "设置",
    name: "setting-one",
    category: "Base",
    categoryCN: "基础",
    author: "刘心乐",
    tag: [
      "齿轮",
      "设置",
      "螺丝",
      "螺母",
      "配置",
      "工具"
    ],
    rtl: !1
  },
  {
    id: 2125,
    title: "设置",
    name: "setting-three",
    category: "Base",
    categoryCN: "基础",
    author: "金磊",
    tag: [
      "太阳能",
      "阳光",
      "设置",
      "配置"
    ],
    rtl: !1
  },
  {
    id: 2126,
    title: "设置",
    name: "setting-two",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "齿轮",
      "设置",
      "螺丝",
      "螺母",
      "配置",
      "工具"
    ],
    rtl: !1
  },
  {
    id: 2127,
    title: "网页设置",
    name: "setting-web",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2128,
    title: "按键七",
    name: "seven-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "七",
      "7",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 2129,
    title: "乘凉",
    name: "shade",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "雨伞",
      "保护",
      "休闲"
    ],
    rtl: !0
  },
  {
    id: 2130,
    title: "震动",
    name: "shake",
    category: "Others",
    categoryCN: "其它",
    author: "白明泽",
    tag: [
      "震动",
      "颤抖",
      "抖动",
      "摇摆"
    ],
    rtl: !1
  },
  {
    id: 2131,
    title: "分享",
    name: "share",
    category: "Base",
    categoryCN: "基础",
    author: "刘心乐",
    tag: [
      "分享",
      "转发",
      "跳转",
      "打开",
      "窗口",
      "外链"
    ],
    rtl: !0
  },
  {
    id: 2132,
    title: "分享",
    name: "share-one",
    category: "Connect",
    categoryCN: "链接",
    author: "刘心乐",
    tag: [
      "分享",
      "转发",
      "共享",
      "链接",
      "连接"
    ],
    rtl: !0
  },
  {
    id: 2133,
    title: "分享",
    name: "share-sys",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "分享",
      "信号",
      "播音",
      "投屏"
    ],
    rtl: !1
  },
  {
    id: 2134,
    title: "分享3",
    name: "share-three",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "分享",
      "跳转",
      "转发",
      "返回"
    ],
    rtl: !0
  },
  {
    id: 2135,
    title: "分享2",
    name: "share-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "分享",
      "跳转",
      "转发",
      "返回"
    ],
    rtl: !0
  },
  {
    id: 2136,
    title: "剃须刀",
    name: "shaver",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "电器",
      "男士用品",
      "刮胡刀",
      "剃胡刀"
    ],
    rtl: !0
  },
  {
    id: 2137,
    title: "剃须刀",
    name: "shaver-one",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "史晓彤",
    tag: [
      "标签",
      "书签",
      "贴纸",
      "剃须刀"
    ],
    rtl: !0
  },
  {
    id: 2138,
    title: "刮胡泡",
    name: "shaving",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "泡沫",
      "乳液"
    ],
    rtl: !0
  },
  {
    id: 2139,
    title: "生肖羊",
    name: "sheep-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2140,
    title: "安全",
    name: "shield",
    category: "Safe",
    categoryCN: "安全防护",
    author: "齐奉飞",
    tag: [
      "安全",
      "保护",
      "护盾",
      "防护",
      "安保"
    ],
    rtl: !1
  },
  {
    id: 2141,
    title: "安全增加",
    name: "shield-add",
    category: "Safe",
    categoryCN: "安全防护",
    author: "齐奉飞",
    tag: [
      "安全",
      "保护",
      "增加防护",
      "医疗",
      "安保"
    ],
    rtl: !1
  },
  {
    id: 2142,
    title: "船",
    name: "ship",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "船",
      "舰船",
      "出行",
      "海洋",
      "运输",
      "交通"
    ],
    rtl: !1
  },
  {
    id: 2143,
    title: "商店",
    name: "shop",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "商店",
      "购物",
      "商场",
      "门店"
    ],
    rtl: !0
  },
  {
    id: 2144,
    title: "购物车",
    name: "shopping",
    category: "Money",
    categoryCN: "电商财产",
    author: "刘心乐",
    tag: [
      "购物车",
      "买东西",
      "消费"
    ],
    rtl: !0
  },
  {
    id: 2145,
    title: "购物袋",
    name: "shopping-bag",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "购物袋",
      "快消品",
      "逛街",
      "包包",
      "手提袋",
      "购物车",
      "消费"
    ],
    rtl: !1
  },
  {
    id: 2146,
    title: "购物袋1",
    name: "shopping-bag-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2147,
    title: "购物车",
    name: "shopping-cart",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "购物",
      "买东西",
      "购物卡",
      "消费"
    ],
    rtl: !0
  },
  {
    id: 2148,
    title: "添加购物车",
    name: "shopping-cart-add",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "购物车",
      "添加",
      "买东西",
      "购物"
    ],
    rtl: !0
  },
  {
    id: 2149,
    title: "删除购物车",
    name: "shopping-cart-del",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "购物车",
      "退货",
      "删除",
      "移除"
    ],
    rtl: !0
  },
  {
    id: 2150,
    title: "购物车1",
    name: "shopping-cart-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "购物车",
      "消费",
      "买东西",
      "电商",
      "商超"
    ],
    rtl: !0
  },
  {
    id: 2151,
    title: "购物车2",
    name: "shopping-cart-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2152,
    title: "商圈",
    name: "shopping-mall",
    category: "Build",
    categoryCN: "建筑",
    author: "常留留",
    tag: [
      "购物",
      "商城",
      "购买",
      "城市",
      "楼房",
      "建筑"
    ],
    rtl: !0
  },
  {
    id: 2153,
    title: "短裙",
    name: "short-skirt",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "裙子",
      "舞蹈裙",
      "短裙"
    ],
    rtl: !0
  },
  {
    id: 2154,
    title: "短裤",
    name: "shorts",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "短裤",
      "运动裤",
      "训练裤"
    ],
    rtl: !1
  },
  {
    id: 2155,
    title: "单肩包",
    name: "shoulder-bag",
    category: "Money",
    categoryCN: "电商财产",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2156,
    title: "铁铲",
    name: "shovel",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "餐具",
      "工具",
      "铁铲",
      "锅铲"
    ],
    rtl: !1
  },
  {
    id: 2157,
    title: "铲子",
    name: "shovel-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "餐具",
      "工具",
      "铁铲",
      "锅铲"
    ],
    rtl: !1
  },
  {
    id: 2158,
    title: "淋浴喷头",
    name: "shower-head",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "淋浴喷头",
      "酒店",
      "洗澡"
    ],
    rtl: !0
  },
  {
    id: 2159,
    title: "大虾",
    name: "shrimp",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "大虾",
      "虾",
      "水产",
      "海鲜",
      "生鲜",
      "虾仁"
    ],
    rtl: !0
  },
  {
    id: 2160,
    title: "洗牌",
    name: "shuffle",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "混合",
      "回库",
      "交叉",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 2161,
    title: "洗牌",
    name: "shuffle-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "刷新",
      "混合",
      "回库",
      "交叉",
      "随机"
    ],
    rtl: !0
  },
  {
    id: 2162,
    title: "快门优先",
    name: "shutter-priority",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "相机",
      "快门",
      "照相"
    ],
    rtl: !0
  },
  {
    id: 2163,
    title: "病床",
    name: "sickbed",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2164,
    title: "信号",
    name: "signal",
    category: "Others",
    categoryCN: "其它",
    author: "齐奉飞",
    tag: [
      "信号源",
      "消息",
      "来信"
    ],
    rtl: !0
  },
  {
    id: 2165,
    title: "信号",
    name: "signal-one",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "信号源",
      "消息",
      "基站"
    ],
    rtl: !1
  },
  {
    id: 2166,
    title: "信号强度",
    name: "signal-strength",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "信号强度"
    ],
    rtl: !1
  },
  {
    id: 2167,
    title: "信号塔",
    name: "signal-tower",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "信号",
      "发射器",
      "接收器",
      "电子卫星",
      "检测器",
      "探测仪",
      "雷达",
      "防御",
      "干扰器"
    ],
    rtl: !0
  },
  {
    id: 2168,
    title: "信号塔",
    name: "signal-tower-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "电塔",
      "网络塔",
      "信号塔"
    ],
    rtl: !1
  },
  {
    id: 2169,
    title: "电话卡",
    name: "sim",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "电话卡",
      "sim",
      "卡",
      "5G",
      "卡"
    ],
    rtl: !0
  },
  {
    id: 2170,
    title: "储存卡",
    name: "sim-card",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "移动卡",
      "卡片",
      "手机卡",
      "流量卡",
      "电话卡",
      "芯片"
    ],
    rtl: !0
  },
  {
    id: 2171,
    title: "单人床",
    name: "single-bed",
    category: "Life",
    categoryCN: "生活",
    author: "金磊",
    tag: [
      "单人床",
      "睡觉",
      "酒店",
      "休息"
    ],
    rtl: !1
  },
  {
    id: 2172,
    title: "正弦曲线",
    name: "sinusoid",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "正玄曲线",
      "科学",
      "数学",
      "教育",
      "物理"
    ],
    rtl: !0
  },
  {
    id: 2173,
    title: "吸管杯",
    name: "sippy-cup",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "杯子",
      "吸管"
    ],
    rtl: !0
  },
  {
    id: 2174,
    title: "六",
    name: "six",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "六",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 2175,
    title: "圆形连接",
    name: "six-circular-connection",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆形连接",
      "原子",
      "抽象"
    ],
    rtl: !1
  },
  {
    id: 2176,
    title: "按键六",
    name: "six-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "六",
      "6",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 2177,
    title: "六个点",
    name: "six-points",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "六个点",
      "原子",
      "抽象"
    ],
    rtl: !1
  },
  {
    id: 2178,
    title: "滑板",
    name: "skate",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "板",
      "滑冰",
      "溜冰",
      "轮滑",
      "滑行",
      "滑走",
      "运动",
      "训练",
      "技术",
      "技巧",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 2179,
    title: "冰鞋",
    name: "skates",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "鞋子",
      "靴子",
      "滑冰鞋",
      "棉鞋"
    ],
    rtl: !0
  },
  {
    id: 2180,
    title: "溜冰鞋",
    name: "skating",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "鞋子",
      "滑冰",
      "溜冰",
      "轮滑",
      "滑行",
      "滑走",
      "运动",
      "训练",
      "技术",
      "技巧",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 2181,
    title: "sketch",
    name: "sketch",
    category: "Brand",
    categoryCN: "品牌",
    author: "",
    tag: [
      "sketch",
      "logo",
      "设计软件",
      "应用",
      "工具"
    ],
    rtl: !1
  },
  {
    id: 2182,
    title: "滑雪",
    name: "skiing-nordic",
    category: "Sports",
    categoryCN: "体育运动",
    author: "",
    tag: [
      "滑车"
    ],
    rtl: !0
  },
  {
    id: 2183,
    title: "骷髅",
    name: "skull",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "鼓楼",
      "恐怖",
      "危险",
      "骨头"
    ],
    rtl: !1
  },
  {
    id: 2184,
    title: "附件",
    name: "slave",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "数据",
      "传输",
      "链接"
    ],
    rtl: !0
  },
  {
    id: 2185,
    title: "树叶",
    name: "sleaves",
    category: "Others",
    categoryCN: "其它",
    author: "齐奉飞",
    tag: [
      "叶子",
      "树叶",
      "叶",
      "标本",
      "植物",
      "树木",
      "草"
    ],
    rtl: !0
  },
  {
    id: 2186,
    title: "睡眠",
    name: "sleep",
    category: "Base",
    categoryCN: "基础",
    author: "常留留",
    tag: [
      "睡眠",
      "夜晚",
      "打呼噜",
      "酣睡",
      "休息",
      "黑夜"
    ],
    rtl: !0
  },
  {
    id: 2187,
    title: "睡觉",
    name: "sleep-one",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "睡"
    ],
    rtl: !0
  },
  {
    id: 2188,
    title: "睡觉",
    name: "sleep-two",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2189,
    title: "幻灯片",
    name: "slide",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "数据看版",
      "销售提报",
      "文稿演示",
      "屏幕",
      "投屏"
    ],
    rtl: !0
  },
  {
    id: 2190,
    title: "幻灯片",
    name: "slide-two",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "幻灯片",
      "播放",
      "PPT",
      "投影"
    ],
    rtl: !1
  },
  {
    id: 2191,
    title: "水平拖动",
    name: "sliding-horizontal",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "水平拖动",
      "双方向",
      "方向",
      "箭头",
      "左右"
    ],
    rtl: !1
  },
  {
    id: 2192,
    title: "垂直拖动",
    name: "sliding-vertical",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "垂直拖动",
      "双方向",
      "方向",
      "箭头",
      "上下"
    ],
    rtl: !1
  },
  {
    id: 2193,
    title: "轻微沮丧",
    name: "slightly-frowning-face-whit-open-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "轻微沮丧",
      "表情",
      "痛苦",
      "纠结"
    ],
    rtl: !1
  },
  {
    id: 2194,
    title: "微笑",
    name: "slightly-smiling-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "微笑",
      "表情",
      "开心"
    ],
    rtl: !1
  },
  {
    id: 2195,
    title: "拖鞋",
    name: "slippers",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "鞋子",
      "凉鞋",
      "拖鞋"
    ],
    rtl: !0
  },
  {
    id: 2196,
    title: "拖鞋",
    name: "slippers-one",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "鞋子",
      "凉鞋",
      "拖鞋"
    ],
    rtl: !0
  },
  {
    id: 2197,
    title: "囧笑",
    name: "sly-face-whit-smile",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "囧笑",
      "表情",
      "尴尬"
    ],
    rtl: !1
  },
  {
    id: 2198,
    title: "智能优化",
    name: "smart-optimization",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "智能优化",
      "抽象",
      "圆环",
      "花形"
    ],
    rtl: !1
  },
  {
    id: 2199,
    title: "笑脸",
    name: "smiling-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "笑脸",
      "表情"
    ],
    rtl: !1
  },
  {
    id: 2200,
    title: "笑眯眼",
    name: "smiling-face-with-squinting-eyes",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "笑眯眼",
      "表情",
      "开心"
    ],
    rtl: !1
  },
  {
    id: 2201,
    title: "小食",
    name: "snacks",
    category: "Foods",
    categoryCN: "食品",
    author: "常留留",
    tag: [
      "小吃",
      "零食",
      "食物",
      "饮料",
      "咖啡",
      "奶茶",
      "果汁"
    ],
    rtl: !1
  },
  {
    id: 2202,
    title: "生肖蛇",
    name: "snake-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2203,
    title: "下雪",
    name: "snow",
    category: "Weather",
    categoryCN: "天气",
    author: "",
    tag: [
      "雪"
    ],
    rtl: !0
  },
  {
    id: 2204,
    title: "雪花",
    name: "snowflake",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "雪花",
      "下雪",
      "天气",
      "寒冷",
      "大雪"
    ],
    rtl: !1
  },
  {
    id: 2205,
    title: "雪人",
    name: "snowman",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2206,
    title: "泡泡",
    name: "soap-bubble",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "泡沫",
      "气泡"
    ],
    rtl: !0
  },
  {
    id: 2207,
    title: "足球",
    name: "soccer",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "踢足球",
      "足球",
      "运动",
      "体育",
      "运球",
      "打球",
      "踢",
      "跑动",
      "助攻"
    ],
    rtl: !1
  },
  {
    id: 2208,
    title: "足球1",
    name: "soccer-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "踢足球",
      "足球",
      "运动",
      "体育",
      "运球",
      "过人",
      "变向",
      "射门",
      "打球",
      "踢",
      "跑动",
      "助攻"
    ],
    rtl: !0
  },
  {
    id: 2209,
    title: "袜子",
    name: "socks",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "袜子",
      "服装",
      "儿童袜"
    ],
    rtl: !0
  },
  {
    id: 2210,
    title: "沙发",
    name: "sofa",
    category: "Life",
    categoryCN: "生活",
    author: "白明泽",
    tag: [
      "沙发",
      "家居",
      "家具",
      "装修"
    ],
    rtl: !1
  },
  {
    id: 2211,
    title: "沙发",
    name: "sofa-two",
    category: "Life",
    categoryCN: "生活",
    author: "常留留",
    tag: [
      "居家",
      "home",
      "家居",
      "家具",
      "装修",
      "家装"
    ],
    rtl: !1
  },
  {
    id: 2212,
    title: "垒球",
    name: "softball",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "棒球",
      "球类",
      "球",
      "弹性球",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 2213,
    title: "太阳能",
    name: "solar-energy",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "新能源",
      "蓄电池",
      "资源",
      "能量"
    ],
    rtl: !1
  },
  {
    id: 2214,
    title: "太阳能",
    name: "solar-energy-one",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "灯具"
    ],
    rtl: !1
  },
  {
    id: 2215,
    title: "固态硬盘",
    name: "solid-state-disk",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "储存",
      "存储",
      "硬盘",
      "store"
    ],
    rtl: !0
  },
  {
    id: 2216,
    title: "巫师帽",
    name: "sorcerer-hat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "尖角帽",
      "哈利波特",
      "魔法帽"
    ],
    rtl: !0
  },
  {
    id: 2217,
    title: "排序",
    name: "sort",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "排序",
      "上下",
      "顺序",
      "排列"
    ],
    rtl: !1
  },
  {
    id: 2218,
    title: "降序排序",
    name: "sort-amount-down",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "筛选",
      "排序",
      "降序",
      "顺序"
    ],
    rtl: !0
  },
  {
    id: 2219,
    title: "升序排序",
    name: "sort-amount-up",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "筛选",
      "排序",
      "升序",
      "顺序"
    ],
    rtl: !0
  },
  {
    id: 2220,
    title: "排序",
    name: "sort-four",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "序列",
      "排列",
      "调整顺序",
      "顺序",
      "箭头"
    ],
    rtl: !1
  },
  {
    id: 2221,
    title: "排序1",
    name: "sort-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "顺序",
      "排序",
      "排列"
    ],
    rtl: !0
  },
  {
    id: 2222,
    title: "排序3",
    name: "sort-three",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "排序",
      "上下",
      "顺序",
      "排列"
    ],
    rtl: !0
  },
  {
    id: 2223,
    title: "排序2",
    name: "sort-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "排序",
      "上下",
      "顺序",
      "排列"
    ],
    rtl: !0
  },
  {
    id: 2224,
    title: "音响",
    name: "sound",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "声音",
      "音乐",
      "乐器",
      "扩音器",
      "喇叭"
    ],
    rtl: !0
  },
  {
    id: 2225,
    title: "音响",
    name: "sound-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "声音",
      "音乐",
      "乐器",
      "扩音器",
      "喇叭"
    ],
    rtl: !0
  },
  {
    id: 2226,
    title: "音波",
    name: "sound-wave",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [
      "音频",
      "音量",
      "语音",
      "录音",
      "波纹",
      "声音"
    ],
    rtl: !1
  },
  {
    id: 2227,
    title: "网页代码",
    name: "source-code",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2228,
    title: "榨汁机",
    name: "soybean-milk-maker",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "榨汁机",
      "榨汁",
      "豆浆机",
      "厨房厨具"
    ],
    rtl: !0
  },
  {
    id: 2229,
    title: "蜡烛沐浴",
    name: "spa-candle",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "蜡烛",
      "烛光"
    ],
    rtl: !0
  },
  {
    id: 2230,
    title: "太空殖民地",
    name: "space-colony",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "房子",
      "办公楼",
      "建筑"
    ],
    rtl: !0
  },
  {
    id: 2231,
    title: "扳手",
    name: "spanner",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2232,
    title: "音响",
    name: "speaker",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "音乐",
      "音响",
      "设备",
      "声音",
      "家庭影院"
    ],
    rtl: !1
  },
  {
    id: 2233,
    title: "喇叭",
    name: "speaker-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "声音",
      "音乐",
      "乐器",
      "扩音器",
      "喇叭"
    ],
    rtl: !0
  },
  {
    id: 2234,
    title: "速度",
    name: "speed",
    category: "Time",
    categoryCN: "时间日期",
    author: "刘心乐",
    tag: [
      "速率",
      "速度表",
      "仪表盘"
    ],
    rtl: !0
  },
  {
    id: 2235,
    title: "速度",
    name: "speed-one",
    category: "Time",
    categoryCN: "时间日期",
    author: "刘心乐",
    tag: [
      "速率",
      "速度表",
      "仪表盘"
    ],
    rtl: !0
  },
  {
    id: 2236,
    title: "精子",
    name: "sperm",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "男科",
      "生殖",
      "繁衍"
    ],
    rtl: !0
  },
  {
    id: 2237,
    title: "圆球",
    name: "sphere",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "圆球",
      "球体",
      "地球",
      "纬度"
    ],
    rtl: !1
  },
  {
    id: 2238,
    title: "弹指",
    name: "spider-man",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "弹手",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 2239,
    title: "钉鞋",
    name: "spikedshoes",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "鞋子",
      "跑步",
      "运动",
      "训练",
      "技术",
      "技巧",
      "体育",
      "鞋"
    ],
    rtl: !0
  },
  {
    id: 2240,
    title: "陀螺",
    name: "spinning-top",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "旋转",
      "陀螺仪",
      "转动",
      "转",
      "平衡",
      "速度"
    ],
    rtl: !1
  },
  {
    id: 2241,
    title: "分裂",
    name: "split",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "图层",
      "双层",
      "上层"
    ],
    rtl: !0
  },
  {
    id: 2242,
    title: "分离",
    name: "split-branch",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "分离",
      "编辑",
      "对比",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 2243,
    title: "拆分单元格",
    name: "split-cells",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "拆分单元格",
      "表格",
      "操作"
    ],
    rtl: !1
  },
  {
    id: 2244,
    title: "左下分支",
    name: "split-turn-down-left",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "思维导图",
      "分支",
      "分散"
    ],
    rtl: !0
  },
  {
    id: 2245,
    title: "右下分支",
    name: "split-turn-down-right",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "思维导图",
      "分支",
      "分散"
    ],
    rtl: !0
  },
  {
    id: 2246,
    title: "铁勺",
    name: "spoon",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "餐具",
      "工具",
      "勺子",
      "铁勺"
    ],
    rtl: !1
  },
  {
    id: 2247,
    title: "运动",
    name: "sport",
    category: "Sports",
    categoryCN: "体育运动",
    author: "常留留",
    tag: [
      "跑步",
      "健康",
      "活力"
    ],
    rtl: !0
  },
  {
    id: 2248,
    title: "运动",
    name: "sporting",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2249,
    title: "方形",
    name: "square",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 2250,
    title: "小方形",
    name: "square-small",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 2251,
    title: "SSD",
    name: "ssd",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "储存器",
      "服务器",
      "管理器"
    ],
    rtl: !0
  },
  {
    id: 2252,
    title: "堆栈灯",
    name: "stack-light",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "提示灯",
      "导向灯"
    ],
    rtl: !0
  },
  {
    id: 2253,
    title: "邮票",
    name: "stamp",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "邮票"
    ],
    rtl: !1
  },
  {
    id: 2254,
    title: "站起来",
    name: "stand-up",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2255,
    title: "订书机",
    name: "stapler",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "工具",
      "打穿",
      "订书",
      "砌书"
    ],
    rtl: !0
  },
  {
    id: 2256,
    title: "星星",
    name: "star",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "收藏",
      "已收藏",
      "取消收藏",
      "评分",
      "评价",
      "打分",
      "星级",
      "五角星"
    ],
    rtl: !1
  },
  {
    id: 2257,
    title: "星星",
    name: "star-one",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "已收藏",
      "取消收藏",
      "评分",
      "评价",
      "打分",
      "星级",
      "qq空间"
    ],
    rtl: !0
  },
  {
    id: 2258,
    title: "按开始时间排序",
    name: "start-time-sort",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "排序",
      "序列",
      "按时间排序",
      "开始"
    ],
    rtl: !0
  },
  {
    id: 2259,
    title: "方向盘",
    name: "steering-wheel",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "方向盘",
      "汽车"
    ],
    rtl: !1
  },
  {
    id: 2260,
    title: "童车",
    name: "steoller",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "车子",
      "儿童车"
    ],
    rtl: !0
  },
  {
    id: 2261,
    title: "嵌套图形",
    name: "stereo-nesting",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "嵌套图形",
      "抽象",
      "标志",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2262,
    title: "立体声",
    name: "stereo-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "声音",
      "音乐",
      "乐器",
      "扩音器",
      "喇叭"
    ],
    rtl: !0
  },
  {
    id: 2263,
    title: "立体透视",
    name: "stereo-perspective",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "立体透视",
      "立方体",
      "容器",
      "方形"
    ],
    rtl: !0
  },
  {
    id: 2264,
    title: "听诊器",
    name: "stethoscope",
    category: "Health",
    categoryCN: "医疗健康",
    author: "金磊",
    tag: [
      "医疗",
      "医生",
      "治疗",
      "监测",
      "大夫",
      "护士",
      "药物"
    ],
    rtl: !0
  },
  {
    id: 2265,
    title: "贴纸",
    name: "stickers",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "贴画",
      "插图",
      "壁纸"
    ],
    rtl: !0
  },
  {
    id: 2266,
    title: "股市",
    name: "stock-market",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "阴线",
      "阳线",
      "股市图"
    ],
    rtl: !0
  },
  {
    id: 2267,
    title: "秒表",
    name: "stopwatch",
    category: "Time",
    categoryCN: "时间日期",
    author: "常留留",
    tag: [
      "倒计时",
      "时间",
      "描边"
    ],
    rtl: !0
  },
  {
    id: 2268,
    title: "计时器",
    name: "stopwatch-start",
    category: "Time",
    categoryCN: "时间日期",
    author: "白明泽",
    tag: [
      "计时器",
      "倒计时",
      "时间",
      "表"
    ],
    rtl: !0
  },
  {
    id: 2269,
    title: "储存卡1",
    name: "storage-card-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 2270,
    title: "储存卡2",
    name: "storage-card-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 2271,
    title: "直剃刀",
    name: "straight-razor",
    category: "Makeups",
    categoryCN: "化妆美妆",
    author: "齐奉飞",
    tag: [
      "刀"
    ],
    rtl: !0
  },
  {
    id: 2272,
    title: "草帽",
    name: "straw-hat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "道具",
      "草帽"
    ],
    rtl: !0
  },
  {
    id: 2273,
    title: "伸展",
    name: "stretching",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "拉伸",
      "扩展",
      "拖大",
      "放大"
    ],
    rtl: !0
  },
  {
    id: 2274,
    title: "拉伸",
    name: "stretching-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2275,
    title: "删除线",
    name: "strikethrough",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "删除",
      "线",
      "切断",
      "切割"
    ],
    rtl: !0
  },
  {
    id: 2276,
    title: "保险箱",
    name: "strongbox",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "保险",
      "箱子",
      "安全",
      "稳固"
    ],
    rtl: !1
  },
  {
    id: 2277,
    title: "减去下一层",
    name: "subtract-selection",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "双层",
      "减去上层",
      "排除"
    ],
    rtl: !0
  },
  {
    id: 2278,
    title: "减去上一层",
    name: "subtract-selection-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "双层",
      "减去上层",
      "排除"
    ],
    rtl: !0
  },
  {
    id: 2279,
    title: "地铁",
    name: "subway",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "交通",
      "火车",
      "运输",
      "货运",
      "电车",
      "公交车"
    ],
    rtl: !1
  },
  {
    id: 2280,
    title: "成功",
    name: "success",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "完成",
      "成功",
      "勋章",
      "胜利",
      "获胜"
    ],
    rtl: !0
  },
  {
    id: 2281,
    title: "图片成功",
    name: "success-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2282,
    title: "合并",
    name: "sum",
    category: "Edit",
    categoryCN: "编辑",
    author: "高亚栋",
    tag: [
      "并集",
      "合集",
      "加选",
      "融合"
    ],
    rtl: !0
  },
  {
    id: 2283,
    title: "太阳",
    name: "sun",
    category: "Weather",
    categoryCN: "天气",
    author: "常留留",
    tag: [
      "太阳",
      "晴朗",
      "阳光"
    ],
    rtl: !1
  },
  {
    id: 2284,
    title: "太阳帽",
    name: "sun-hat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "道具",
      "服装",
      "连衣裙"
    ],
    rtl: !0
  },
  {
    id: 2285,
    title: "太阳1",
    name: "sun-one",
    category: "Weather",
    categoryCN: "天气",
    author: "常留留",
    tag: [
      "阳光",
      "太阳",
      "晴朗"
    ],
    rtl: !1
  },
  {
    id: 2286,
    title: "日光浴",
    name: "sunbath",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "休闲",
      "休息",
      "躺椅",
      "日光浴",
      "度假",
      "放松"
    ],
    rtl: !0
  },
  {
    id: 2287,
    title: "晴天",
    name: "sunny",
    category: "Weather",
    categoryCN: "天气",
    author: "常留留",
    tag: [
      "天气",
      "晴朗",
      "好心情"
    ],
    rtl: !0
  },
  {
    id: 2288,
    title: "日出",
    name: "sunrise",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "日出",
      "风景"
    ],
    rtl: !0
  },
  {
    id: 2289,
    title: "落日",
    name: "sunset",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2290,
    title: "遮阳篷",
    name: "sunshade",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "遮阳伞",
      "度假",
      "休闲"
    ],
    rtl: !0
  },
  {
    id: 2291,
    title: "惊讶张嘴",
    name: "surprised-face-with-open-big-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "惊讶张嘴",
      "表情"
    ],
    rtl: !1
  },
  {
    id: 2292,
    title: "惊讶",
    name: "surprised-face-with-open-mouth",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "惊讶",
      "表情",
      "目瞪口呆"
    ],
    rtl: !1
  },
  {
    id: 2293,
    title: "监控摄像头",
    name: "surveillance-cameras",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "监控摄像头"
    ],
    rtl: !0
  },
  {
    id: 2294,
    title: "监控摄像头",
    name: "surveillance-cameras-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍"
    ],
    rtl: !0
  },
  {
    id: 2295,
    title: "监控摄像头",
    name: "surveillance-cameras-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "监控摄像头"
    ],
    rtl: !0
  },
  {
    id: 2296,
    title: "燕子",
    name: "swallow",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "鸟",
      "麻雀",
      "小鸟",
      "动物",
      "燕子",
      "燕窝"
    ],
    rtl: !0
  },
  {
    id: 2297,
    title: "毛衣",
    name: "sweater",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "毛绒",
      "上衣",
      "卫衣",
      "棉衣"
    ],
    rtl: !1
  },
  {
    id: 2298,
    title: "游泳池",
    name: "swimming-pool",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "水池",
      "游泳",
      "潜水",
      "下水",
      "泡水",
      "泡澡",
      "河",
      "水塘"
    ],
    rtl: !0
  },
  {
    id: 2299,
    title: "游泳圈",
    name: "swimming-ring",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "救生圈",
      "气球",
      "游泳",
      "下水",
      "安全",
      "救生",
      "圈"
    ],
    rtl: !1
  },
  {
    id: 2300,
    title: "泳装",
    name: "swimsuit",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "游泳",
      "泳裤",
      "泳衣"
    ],
    rtl: !1
  },
  {
    id: 2301,
    title: "招手",
    name: "swing",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "摇手",
      "再见",
      "鼓掌",
      "击掌"
    ],
    rtl: !0
  },
  {
    id: 2302,
    title: "刷卡",
    name: "swipe",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "刷卡",
      "支付",
      "识别"
    ],
    rtl: !0
  },
  {
    id: 2303,
    title: "切换",
    name: "switch",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "切换",
      "箭头",
      "左右箭头",
      "转换"
    ],
    rtl: !0
  },
  {
    id: 2304,
    title: "切换按钮",
    name: "switch-button",
    category: "Components",
    categoryCN: "界面组件",
    author: "金磊",
    tag: [
      "切换按钮",
      "开关",
      "切换",
      "组合"
    ],
    rtl: !0
  },
  {
    id: 2305,
    title: "切换对比",
    name: "switch-contrast",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "切换对比",
      "对称"
    ],
    rtl: !1
  },
  {
    id: 2306,
    title: "任天堂游戏",
    name: "switch-nintendo",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "手柄",
      "控制器",
      "游戏机",
      "操作器"
    ],
    rtl: !0
  },
  {
    id: 2307,
    title: "开关",
    name: "switch-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "开关",
      "控制器",
      "调节器"
    ],
    rtl: !0
  },
  {
    id: 2308,
    title: "切换主题",
    name: "switch-themes",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "切换",
      "更换",
      "主题",
      "上传文件"
    ],
    rtl: !0
  },
  {
    id: 2309,
    title: "切换轨道",
    name: "switch-track",
    category: "Operate",
    categoryCN: "美颜调整",
    author: "金磊",
    tag: [
      "切换轨道",
      "切换",
      "轨道",
      "线路"
    ],
    rtl: !0
  },
  {
    id: 2310,
    title: "切换完成",
    name: "switching-done",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "更换",
      "完成",
      "对勾"
    ],
    rtl: !0
  },
  {
    id: 2311,
    title: "符号",
    name: "symbol",
    category: "Character",
    categoryCN: "符号标识",
    author: "常留留",
    tag: [
      "标志性",
      "阿尔法",
      "符号"
    ],
    rtl: !1
  },
  {
    id: 2312,
    title: "双X符号",
    name: "symbol-double-x",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "双X符号",
      "抽象",
      "关闭",
      "道路",
      "十字路口"
    ],
    rtl: !1
  },
  {
    id: 2313,
    title: "对称",
    name: "symmetry",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "对称",
      "抽象"
    ],
    rtl: !1
  },
  {
    id: 2314,
    title: "同步",
    name: "sync",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "同步",
      "对齐",
      "复制",
      "十字"
    ],
    rtl: !0
  },
  {
    id: 2315,
    title: "系统",
    name: "system",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "系统",
      "更多",
      "四块"
    ],
    rtl: !0
  },
  {
    id: 2316,
    title: "T恤",
    name: "t-shirt",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "衣服",
      "上衣",
      "短袖"
    ],
    rtl: !1
  },
  {
    id: 2317,
    title: "表格",
    name: "table",
    category: "Office",
    categoryCN: "办公文档",
    author: "金磊",
    tag: [
      "表格",
      "笔记本",
      "纸张",
      "文件",
      "文本"
    ],
    rtl: !0
  },
  {
    id: 2318,
    title: "表格",
    name: "table-file",
    category: "Components",
    categoryCN: "界面组件",
    author: "白明泽",
    tag: [
      "表格",
      "数据",
      "列表"
    ],
    rtl: !1
  },
  {
    id: 2319,
    title: "台灯",
    name: "table-lamp",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "台灯",
      "灯光",
      "书桌",
      "电器",
      "家电"
    ],
    rtl: !0
  },
  {
    id: 2320,
    title: "报表",
    name: "table-report",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "常留留",
    tag: [
      "广告报表",
      "抽象",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 2321,
    title: "乒乓球",
    name: "tabletennis",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "乒乓球",
      "乒乓",
      "运动",
      "体育",
      "拍",
      "打",
      "扣",
      "球类",
      "球"
    ],
    rtl: !0
  },
  {
    id: 2322,
    title: "标签",
    name: "tag",
    category: "Base",
    categoryCN: "基础",
    author: "刘心乐",
    tag: [
      "标记",
      "便签",
      "标签",
      "不关注",
      "取消订阅"
    ],
    rtl: !1
  },
  {
    id: 2323,
    title: "标签",
    name: "tag-one",
    category: "Base",
    categoryCN: "基础",
    author: "刘心乐",
    tag: [
      "便签",
      "折扣",
      "标记",
      "价签"
    ],
    rtl: !0
  },
  {
    id: 2324,
    title: "裁剪",
    name: "tailoring",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "裁切",
      "编辑",
      "裁剪放大"
    ],
    rtl: !0
  },
  {
    id: 2325,
    title: "裁剪放大",
    name: "tailoring-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "裁切",
      "编辑",
      "裁剪放大"
    ],
    rtl: !0
  },
  {
    id: 2326,
    title: "泰姬陵",
    name: "taj-mahal",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "寺庙",
      "教堂",
      "办公楼"
    ],
    rtl: !1
  },
  {
    id: 2327,
    title: "飞机起飞",
    name: "take-off",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "飞行",
      "起飞",
      "航空",
      "航空航天",
      "飞机"
    ],
    rtl: !0
  },
  {
    id: 2328,
    title: "起飞",
    name: "take-off-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2329,
    title: "淘宝",
    name: "taobao",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "阿里巴巴",
      "电商",
      "购物",
      "手机购物",
      "淘宝",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2330,
    title: "磁带",
    name: "tape",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "齐奉飞",
    tag: [
      "磁带",
      "音乐",
      "复古",
      "收音机、"
    ],
    rtl: !1
  },
  {
    id: 2331,
    title: "卷尺",
    name: "tape-measure",
    category: "Industry",
    categoryCN: "工业",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2332,
    title: "靶子",
    name: "target",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "射击",
      "攻击",
      "目标"
    ],
    rtl: !0
  },
  {
    id: 2333,
    title: "靶标",
    name: "target-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "射击",
      "打靶",
      "训练",
      "射",
      "精准",
      "射箭",
      "比赛",
      "标靶",
      "准确",
      "枪战"
    ],
    rtl: !1
  },
  {
    id: 2334,
    title: "枪靶",
    name: "target-two",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "射击",
      "打靶",
      "训练",
      "射",
      "精准",
      "射箭",
      "比赛",
      "标靶",
      "准确",
      "枪战",
      "扫描"
    ],
    rtl: !1
  },
  {
    id: 2335,
    title: "金牛座",
    name: "taurus",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2336,
    title: "出租车",
    name: "taxi",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "白明泽",
    tag: [
      "出租车",
      "出行",
      "交通",
      "汽车",
      "付费"
    ],
    rtl: !1
  },
  {
    id: 2337,
    title: "茶",
    name: "tea",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "饮料",
      "茶饮",
      "热水",
      "咖啡",
      "热牛奶"
    ],
    rtl: !0
  },
  {
    id: 2338,
    title: "喝茶",
    name: "tea-drink",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "喝茶",
      "饮料",
      "餐饮",
      "下午茶",
      "咖啡",
      "热饮"
    ],
    rtl: !0
  },
  {
    id: 2339,
    title: "茶壶",
    name: "teapot",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "茶壶",
      "水壶",
      "热水壶",
      "泡茶"
    ],
    rtl: !0
  },
  {
    id: 2340,
    title: "牙齿",
    name: "teeth",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "口腔",
      "齿科",
      "牙齿",
      "医疗"
    ],
    rtl: !0
  },
  {
    id: 2341,
    title: "Telegram",
    name: "telegram",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "飞机",
      "logo",
      "通信软件",
      "聊天",
      "社交"
    ],
    rtl: !0
  },
  {
    id: 2342,
    title: "望远镜",
    name: "telescope",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "望远镜",
      "侦查",
      "观察",
      "监视",
      "工具"
    ],
    rtl: !1
  },
  {
    id: 2343,
    title: "QQ",
    name: "tencent-qq",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "企鹅",
      "logo",
      "qq",
      "通信软件",
      "聊天",
      "社交"
    ],
    rtl: !0
  },
  {
    id: 2344,
    title: "网球",
    name: "tennis",
    category: "Sports",
    categoryCN: "体育运动",
    author: "常留留",
    tag: [
      "运动",
      "球",
      "网球"
    ],
    rtl: !0
  },
  {
    id: 2345,
    title: "帐篷",
    name: "tent",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "帐篷",
      "户外",
      "露营",
      "居住",
      "家"
    ],
    rtl: !0
  },
  {
    id: 2346,
    title: "帐篷旗帜",
    name: "tent-banner",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "帐篷",
      "户外",
      "露营",
      "居住",
      "家"
    ],
    rtl: !0
  },
  {
    id: 2347,
    title: "终端",
    name: "terminal",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "技术",
      "终端",
      "命令行",
      "代码框",
      "程序"
    ],
    rtl: !0
  },
  {
    id: 2348,
    title: "终止文件",
    name: "termination-file",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "无效",
      "失效",
      "禁用"
    ],
    rtl: !0
  },
  {
    id: 2349,
    title: "阳台",
    name: "terrace",
    category: "Life",
    categoryCN: "生活",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2350,
    title: "试管",
    name: "test-tube",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "金磊",
    tag: [
      "试管",
      "试验",
      "化学",
      "科学",
      "容器"
    ],
    rtl: !1
  },
  {
    id: 2351,
    title: "文字",
    name: "text",
    category: "Edit",
    categoryCN: "编辑",
    author: "白明泽",
    tag: [
      "文字",
      "输入",
      "文本",
      "文案"
    ],
    rtl: !0
  },
  {
    id: 2352,
    title: "文字加粗",
    name: "text-bold",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "文字加粗"
    ],
    rtl: !0
  },
  {
    id: 2353,
    title: "文字斜体",
    name: "text-italic",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "文字倾斜",
      "斜体"
    ],
    rtl: !0
  },
  {
    id: 2354,
    title: "文字讯息",
    name: "text-message",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "音讯",
      "消息",
      "文字",
      "资讯"
    ],
    rtl: !0
  },
  {
    id: 2355,
    title: "文字识别",
    name: "text-recognition",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "识别",
      "文字",
      "字体"
    ],
    rtl: !1
  },
  {
    id: 2356,
    title: "文本旋转-下",
    name: "text-rotation-down",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文本",
      "编辑",
      "文字",
      "旋转",
      "向下"
    ],
    rtl: !0
  },
  {
    id: 2357,
    title: "文本旋转-左",
    name: "text-rotation-left",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文本",
      "编辑",
      "文字",
      "旋转",
      "向左"
    ],
    rtl: !0
  },
  {
    id: 2358,
    title: "文本旋转-无",
    name: "text-rotation-none",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文本",
      "编辑",
      "文字",
      "旋转",
      "向右"
    ],
    rtl: !0
  },
  {
    id: 2359,
    title: "文本旋转-上",
    name: "text-rotation-up",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文本",
      "编辑",
      "文字",
      "旋转",
      "向上"
    ],
    rtl: !0
  },
  {
    id: 2360,
    title: "文本样式",
    name: "text-style",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文字样式",
      "文本放大",
      "选中文字"
    ],
    rtl: !1
  },
  {
    id: 2361,
    title: "文本样式",
    name: "text-style-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文本",
      "编辑",
      "文字",
      "样式",
      "属性"
    ],
    rtl: !0
  },
  {
    id: 2362,
    title: "文字下划线",
    name: "text-underline",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "下划线",
      "文字"
    ],
    rtl: !0
  },
  {
    id: 2363,
    title: "文本换行-溢出",
    name: "text-wrap-overflow",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "超出",
      "溢出",
      "文本",
      "换行",
      "折行"
    ],
    rtl: !0
  },
  {
    id: 2364,
    title: "文本换行-截断",
    name: "text-wrap-truncation",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "截断",
      "省略",
      "文本省略",
      "换行"
    ],
    rtl: !0
  },
  {
    id: 2365,
    title: "文字域",
    name: "textarea",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "文字"
    ],
    rtl: !1
  },
  {
    id: 2366,
    title: "纹理",
    name: "texture",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "纹理",
      "面积",
      "阴影"
    ],
    rtl: !0
  },
  {
    id: 2367,
    title: "纹理",
    name: "texture-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "纹理",
      "底图",
      "图案",
      "抽象"
    ],
    rtl: !0
  },
  {
    id: 2368,
    title: "单肩包",
    name: "the-single-shoulder-bag",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "单肩包",
      "挎包",
      "小包"
    ],
    rtl: !1
  },
  {
    id: 2369,
    title: "影院",
    name: "theater",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "常留留",
    tag: [
      "看电影",
      "幕布",
      "电影",
      "IMAX"
    ],
    rtl: !1
  },
  {
    id: 2370,
    title: "主题",
    name: "theme",
    category: "Clothes",
    categoryCN: "服饰",
    author: "白明泽",
    tag: [
      "主题",
      "衣服",
      "服装"
    ],
    rtl: !1
  },
  {
    id: 2371,
    title: "温度计",
    name: "thermometer",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "齐奉飞",
    tag: [
      "温度计",
      "测量",
      "体温",
      "冷热"
    ],
    rtl: !1
  },
  {
    id: 2372,
    title: "温度计1",
    name: "thermometer-one",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2373,
    title: "保温杯",
    name: "thermos-cup",
    category: "Foods",
    categoryCN: "食品",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 2374,
    title: "瘦身",
    name: "thin",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "胸",
      "身材",
      "瘦",
      "女人",
      "妩媚",
      "性感"
    ],
    rtl: !1
  },
  {
    id: 2375,
    title: "思考问题",
    name: "thinking-problem",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "思考问题"
    ],
    rtl: !0
  },
  {
    id: 2376,
    title: "三",
    name: "three",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "三",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 2377,
    title: "3D眼镜",
    name: "three-d-glasses",
    category: "Clothes",
    categoryCN: "服饰",
    author: "常留留",
    tag: [
      "眼镜",
      "三维立体",
      "3d",
      "三维"
    ],
    rtl: !1
  },
  {
    id: 2378,
    title: "三个菱形",
    name: "three-hexagons",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "三个菱形",
      "形状拼接",
      "组合"
    ],
    rtl: !1
  },
  {
    id: 2379,
    title: "按键三",
    name: "three-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "三",
      "3",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 2380,
    title: "三斜杠",
    name: "three-slashes",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "三斜杠",
      "标志",
      "平行"
    ],
    rtl: !0
  },
  {
    id: 2381,
    title: "三",
    name: "three-three",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "三",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 2382,
    title: "三个三角",
    name: "three-triangles",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "三个三角",
      "三角拼接",
      "组合"
    ],
    rtl: !1
  },
  {
    id: 2383,
    title: "踩",
    name: "thumbs-down",
    category: "Hands",
    categoryCN: "手势动作",
    author: "刘心乐",
    tag: [
      "差评",
      "不赞",
      "错误"
    ],
    rtl: !0
  },
  {
    id: 2384,
    title: "赞",
    name: "thumbs-up",
    category: "Hands",
    categoryCN: "手势动作",
    author: "刘心乐",
    tag: [
      "好评",
      "点赞",
      "优秀"
    ],
    rtl: !0
  },
  {
    id: 2385,
    title: "霹雳接口",
    name: "thunderbolt",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "数据线",
      "闪电传输"
    ],
    rtl: !0
  },
  {
    id: 2386,
    title: "雷雨",
    name: "thunderstorm",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "雷雨",
      "打雷",
      "闪电",
      "下雨"
    ],
    rtl: !0
  },
  {
    id: 2387,
    title: "雷雨",
    name: "thunderstorm-one",
    category: "Weather",
    categoryCN: "天气",
    author: "齐奉飞",
    tag: [
      "雷雨",
      "打雷",
      "闪电",
      "下雨"
    ],
    rtl: !0
  },
  {
    id: 2388,
    title: "券",
    name: "ticket",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "饭票",
      "电影票",
      "活动票",
      "门票",
      "优惠券"
    ],
    rtl: !0
  },
  {
    id: 2389,
    title: "票",
    name: "ticket-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "饭票",
      "电影票",
      "活动票",
      "门票",
      "优惠券"
    ],
    rtl: !0
  },
  {
    id: 2390,
    title: "票务检查",
    name: "tickets-checked",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "检票",
      "值机",
      "票务",
      "票",
      "票据",
      "开票"
    ],
    rtl: !0
  },
  {
    id: 2391,
    title: "门票",
    name: "tickets-one",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "检票",
      "值机",
      "票务",
      "票",
      "票据",
      "机票",
      "票夹"
    ],
    rtl: !0
  },
  {
    id: 2392,
    title: "门票",
    name: "tickets-two",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "检票",
      "值机",
      "票务",
      "票",
      "票据",
      "机票",
      "发票",
      "收据"
    ],
    rtl: !0
  },
  {
    id: 2393,
    title: "生肖虎",
    name: "tiger-zodiac",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2394,
    title: "抖音",
    name: "tiktok",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "抖音",
      "短视频",
      "小视频",
      "TikTok",
      "logo",
      "字节跳动"
    ],
    rtl: !0
  },
  {
    id: 2395,
    title: "时间",
    name: "time",
    category: "Time",
    categoryCN: "时间日期",
    author: "齐奉飞",
    tag: [
      "钟表",
      "时间",
      "倒计时"
    ],
    rtl: !0
  },
  {
    id: 2396,
    title: "定时发送",
    name: "timed-mail",
    category: "Office",
    categoryCN: "办公文档",
    author: "齐奉飞",
    tag: [
      "邮件",
      "信件",
      "文件夹",
      "定时转发"
    ],
    rtl: !0
  },
  {
    id: 2397,
    title: "时间线",
    name: "timeline",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "时间线",
      "分析",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 2398,
    title: "计时器",
    name: "timer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "计时器",
      "手表",
      "时间",
      "智能手表",
      "机械表"
    ],
    rtl: !0
  },
  {
    id: 2399,
    title: "提示",
    name: "tips",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "灯泡",
      "创意",
      "灯光",
      "灵感"
    ],
    rtl: !1
  },
  {
    id: 2400,
    title: "提示",
    name: "tips-one",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "信息提示",
      "提示",
      "警示",
      "报错",
      "提示信息",
      "message"
    ],
    rtl: !0
  },
  {
    id: 2401,
    title: "溜溜球",
    name: "tire-swing",
    category: "Baby",
    categoryCN: "母婴儿童",
    author: "齐奉飞",
    tag: [
      "球",
      "旋转",
      "吊球"
    ],
    rtl: !0
  },
  {
    id: 2402,
    title: "标题级别",
    name: "title-level",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "字号",
      "级别",
      "文字尺寸",
      "文字大小"
    ],
    rtl: !0
  },
  {
    id: 2403,
    title: "去底部",
    name: "to-bottom",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "下",
      "底部",
      "下载",
      "箭头"
    ],
    rtl: !1
  },
  {
    id: 2404,
    title: "去底部1",
    name: "to-bottom-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "下",
      "底部"
    ],
    rtl: !1
  },
  {
    id: 2405,
    title: "去左侧",
    name: "to-left",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "左"
    ],
    rtl: !0
  },
  {
    id: 2406,
    title: "去右侧",
    name: "to-right",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "右"
    ],
    rtl: !0
  },
  {
    id: 2407,
    title: "去顶部",
    name: "to-top",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "上",
      "顶部",
      "上传",
      "箭头"
    ],
    rtl: !1
  },
  {
    id: 2408,
    title: "去顶部1",
    name: "to-top-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "上",
      "顶部"
    ],
    rtl: !1
  },
  {
    id: 2409,
    title: "马桶",
    name: "toilet",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "卫生间",
      "公共厕所"
    ],
    rtl: !1
  },
  {
    id: 2410,
    title: "番茄",
    name: "tomato",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水果",
      "蔬菜",
      "西红柿"
    ],
    rtl: !1
  },
  {
    id: 2411,
    title: "工具",
    name: "tool",
    category: "Base",
    categoryCN: "基础",
    author: "白明泽",
    tag: [
      "优化",
      "扳手",
      "设置",
      "工具",
      "维修"
    ],
    rtl: !0
  },
  {
    id: 2412,
    title: "工具箱",
    name: "toolkit",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2413,
    title: "顶栏",
    name: "top-bar",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "布局",
      "排版",
      "上"
    ],
    rtl: !1
  },
  {
    id: 2414,
    title: "topbuzz",
    name: "topbuzz",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "短视频",
      "小视频",
      "Topbuzz",
      "logo",
      "字体",
      "字节跳动"
    ],
    rtl: !0
  },
  {
    id: 2415,
    title: "话题",
    name: "topic",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "常留留",
    tag: [
      "话题",
      "辩论",
      "讨论",
      "提示",
      "气泡"
    ],
    rtl: !0
  },
  {
    id: 2416,
    title: "话题讨论",
    name: "topic-discussion",
    category: "Communicate",
    categoryCN: "交流沟通",
    author: "金磊",
    tag: [
      "话题讨论",
      "提示气泡"
    ],
    rtl: !0
  },
  {
    id: 2417,
    title: "火炬",
    name: "torch",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "奥运会",
      "火炬",
      "火",
      "传递",
      "点燃",
      "燃烧",
      "火焰",
      "火把",
      "照明",
      "圣火",
      "生火"
    ],
    rtl: !0
  },
  {
    id: 2418,
    title: "旅游巴士",
    name: "tour-bus",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "陆运",
      "巴士",
      "公交",
      "公交车",
      "大巴车",
      "旅行巴士",
      "旅游巴士"
    ],
    rtl: !0
  },
  {
    id: 2419,
    title: "毛巾",
    name: "towel",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "布",
      "布料",
      "浴巾",
      "毛巾",
      "手绢",
      "生活用品",
      "软",
      "擦",
      "洗"
    ],
    rtl: !0
  },
  {
    id: 2420,
    title: "塔楼",
    name: "tower",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "寺庙",
      "教堂",
      "办公楼"
    ],
    rtl: !1
  },
  {
    id: 2421,
    title: "风笛塔",
    name: "tower-of-babel",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "寺庙",
      "教堂",
      "办公楼"
    ],
    rtl: !0
  },
  {
    id: 2422,
    title: "比萨斜塔",
    name: "tower-of-pisa",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "城楼",
      "阁楼",
      "寺庙",
      "教堂",
      "办公楼"
    ],
    rtl: !0
  },
  {
    id: 2423,
    title: "毒素",
    name: "toxins",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "有毒害",
      "有害气体",
      "恐怖",
      "有害",
      "骷髅"
    ],
    rtl: !0
  },
  {
    id: 2424,
    title: "追踪",
    name: "trace",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "追踪",
      "查探",
      "目标",
      "命中"
    ],
    rtl: !0
  },
  {
    id: 2425,
    title: "商标符号",
    name: "trademark",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "商标符号",
      "标志"
    ],
    rtl: !0
  },
  {
    id: 2426,
    title: "中药",
    name: "traditional-chinese-medicine",
    category: "Health",
    categoryCN: "医疗健康",
    author: "齐奉飞",
    tag: [
      "中国",
      "药材",
      "中药",
      "饭",
      "碗"
    ],
    rtl: !0
  },
  {
    id: 2427,
    title: "火车",
    name: "train",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2428,
    title: "成交",
    name: "transaction",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "成交单"
    ],
    rtl: !0
  },
  {
    id: 2429,
    title: "交易清单",
    name: "transaction-order",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "交易列表"
    ],
    rtl: !0
  },
  {
    id: 2430,
    title: "转机",
    name: "transfer",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "转机",
      "换乘",
      "移动"
    ],
    rtl: !0
  },
  {
    id: 2431,
    title: "双向数据互传",
    name: "transfer-data",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "传输",
      "传送",
      "传出",
      "传入",
      "互传",
      "线"
    ],
    rtl: !0
  },
  {
    id: 2432,
    title: "转变",
    name: "transform",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "转化",
      "连接",
      "旋转",
      "回旋",
      "回传"
    ],
    rtl: !0
  },
  {
    id: 2433,
    title: "翻译",
    name: "translate",
    category: "Base",
    categoryCN: "基础",
    author: "金磊",
    tag: [
      "翻译",
      "多语言",
      "国际化",
      "中文",
      "英文"
    ],
    rtl: !0
  },
  {
    id: 2434,
    title: "翻译",
    name: "translation",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "文本编辑",
      "文字旋转",
      "翻译",
      "转码"
    ],
    rtl: !0
  },
  {
    id: 2435,
    title: "运送车",
    name: "transport",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "张文珠",
    tag: [
      "行李运输",
      "运送",
      "运送车",
      "搬运",
      "托运"
    ],
    rtl: !0
  },
  {
    id: 2436,
    title: "送货车",
    name: "transporter",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "快递车",
      "运输车"
    ],
    rtl: !0
  },
  {
    id: 2437,
    title: "梯形",
    name: "trapezoid",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 2438,
    title: "托盘",
    name: "tray",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "托盘",
      "盘子",
      "厨具"
    ],
    rtl: !0
  },
  {
    id: 2439,
    title: "跑步机",
    name: "treadmill",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "跑步",
      "器材",
      "工具",
      "跑",
      "智能",
      "电子",
      "设备"
    ],
    rtl: !0
  },
  {
    id: 2440,
    title: "跑步机1",
    name: "treadmill-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "跑步",
      "运动",
      "体育",
      "跑",
      "慢跑",
      "健身",
      "减脂",
      "瘦身",
      "训练"
    ],
    rtl: !0
  },
  {
    id: 2441,
    title: "跑步机",
    name: "treadmill-two",
    category: "Sports",
    categoryCN: "体育运动",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2442,
    title: "宝箱",
    name: "treasure-chest",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "宝箱",
      "箱子",
      "宝贝",
      "工具箱"
    ],
    rtl: !1
  },
  {
    id: 2443,
    title: "树",
    name: "tree",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "节能",
      "环保",
      "新能源",
      "植物",
      "树木"
    ],
    rtl: !0
  },
  {
    id: 2444,
    title: "树状图",
    name: "tree-diagram",
    category: "Connect",
    categoryCN: "链接",
    author: "张蔓",
    tag: [
      "整理",
      "树状图",
      "散发",
      "分支",
      "结构"
    ],
    rtl: !0
  },
  {
    id: 2445,
    title: "树结构",
    name: "tree-list",
    category: "Components",
    categoryCN: "界面组件",
    author: "金磊",
    tag: [
      "树结构",
      "结构",
      "树",
      "序列",
      "排序"
    ],
    rtl: !0
  },
  {
    id: 2446,
    title: "树1",
    name: "tree-one",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2447,
    title: "树",
    name: "tree-two",
    category: "Energy",
    categoryCN: "能源生命",
    author: "杨威",
    tag: [
      "节能",
      "环保",
      "新能源",
      "植物",
      "树木"
    ],
    rtl: !1
  },
  {
    id: 2448,
    title: "趋势",
    name: "trend",
    category: "Money",
    categoryCN: "电商财产",
    author: "白明泽",
    tag: [
      "上升",
      "升高",
      "上调",
      "调高",
      "涨幅"
    ],
    rtl: !0
  },
  {
    id: 2449,
    title: "趋势",
    name: "trend-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "趋势",
      "数据",
      "涨幅",
      "增长"
    ],
    rtl: !0
  },
  {
    id: 2450,
    title: "趋势下降",
    name: "trending-down",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "下降",
      "向下",
      "降低",
      "下跌",
      "趋势"
    ],
    rtl: !0
  },
  {
    id: 2451,
    title: "趋势上升",
    name: "trending-up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "上升",
      "向上",
      "提升",
      "趋势",
      "箭头"
    ],
    rtl: !0
  },
  {
    id: 2452,
    title: "三角形",
    name: "triangle",
    category: "Graphics",
    categoryCN: "几何图形",
    author: "齐奉飞",
    tag: [],
    rtl: !1
  },
  {
    id: 2453,
    title: "三角圆矩形",
    name: "triangle-round-rectangle",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "三角圆矩形",
      "形状拼接"
    ],
    rtl: !0
  },
  {
    id: 2454,
    title: "三角尺",
    name: "triangle-ruler",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "金磊",
    tag: [
      "三角尺",
      "长度",
      "测量",
      "刻度"
    ],
    rtl: !0
  },
  {
    id: 2455,
    title: "三棱锥",
    name: "triangular-pyramid",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "三棱锥",
      "容器"
    ],
    rtl: !1
  },
  {
    id: 2456,
    title: "奖杯",
    name: "trophy",
    category: "Game",
    categoryCN: "游戏",
    author: "白明泽",
    tag: [
      "奖杯",
      "冠军",
      "比赛",
      "胜利",
      "奖励",
      "荣誉"
    ],
    rtl: !1
  },
  {
    id: 2457,
    title: "喇叭裤",
    name: "trousers-bell-bottoms",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "裤子",
      "长裤",
      "7分裤",
      "九分裤",
      "阔腿裤"
    ],
    rtl: !1
  },
  {
    id: 2458,
    title: "货车",
    name: "truck",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "出行",
      "货车",
      "卡车",
      "皮卡",
      "硬件",
      "汽车",
      "设备",
      "交通",
      "运输"
    ],
    rtl: !0
  },
  {
    id: 2459,
    title: "喇叭",
    name: "trumpet",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "声音",
      "音乐",
      "乐器",
      "扩音器",
      "喇叭"
    ],
    rtl: !0
  },
  {
    id: 2460,
    title: "行李箱",
    name: "trunk",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "行李",
      "箱子",
      "皮箱"
    ],
    rtl: !1
  },
  {
    id: 2461,
    title: "浴缸",
    name: "tub",
    category: "Life",
    categoryCN: "生活",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2462,
    title: "图虫",
    name: "tuchong",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "图片",
      "创意",
      "摄影",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2463,
    title: "tumblr",
    name: "tumblr",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "图片",
      "动态",
      "社交",
      "logo",
      "tumblr"
    ],
    rtl: !0
  },
  {
    id: 2464,
    title: "火鸡",
    name: "turkey",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "鸡肉",
      "鸡腿",
      "烧鸡",
      "餐饮",
      "美食"
    ],
    rtl: !0
  },
  {
    id: 2465,
    title: "人员调动",
    name: "turn-around",
    category: "Peoples",
    categoryCN: "账户",
    author: "齐奉飞",
    tag: [],
    rtl: !0
  },
  {
    id: 2466,
    title: "关闭蓝牙",
    name: "turn-off-bluetooth",
    category: "Others",
    categoryCN: "其它",
    author: "常留留",
    tag: [
      "蓝牙",
      "设备",
      "无线连接",
      "关闭蓝牙"
    ],
    rtl: !0
  },
  {
    id: 2467,
    title: "打开",
    name: "turn-on",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "按动",
      "点击",
      "触发",
      "触动",
      "轻点"
    ],
    rtl: !0
  },
  {
    id: 2468,
    title: "电视",
    name: "tv",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "电视",
      "设备",
      "综艺",
      "屏幕",
      "大屏",
      "硬件"
    ],
    rtl: !0
  },
  {
    id: 2469,
    title: "电视",
    name: "tv-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "显示屏",
      "电影",
      "投影",
      "节目",
      "音乐"
    ],
    rtl: !0
  },
  {
    id: 2470,
    title: "推特",
    name: "twitter",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "小视频",
      "短视频",
      "logo",
      "新闻",
      "国际社交",
      "社交平台"
    ],
    rtl: !0
  },
  {
    id: 2471,
    title: "二",
    name: "two",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "二",
      "手指",
      "胜利"
    ],
    rtl: !0
  },
  {
    id: 2472,
    title: "二维码",
    name: "two-dimensional-code",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "扫描",
      "扫码",
      "扫一扫",
      "登录",
      "付款码",
      "付款方式"
    ],
    rtl: !0
  },
  {
    id: 2473,
    title: "二维码",
    name: "two-dimensional-code-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "扫描",
      "扫码",
      "扫一扫",
      "登录",
      "付款码",
      "付款方式"
    ],
    rtl: !0
  },
  {
    id: 2474,
    title: "二维码",
    name: "two-dimensional-code-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "扫描",
      "扫码",
      "扫一扫",
      "登录",
      "付款码",
      "付款方式"
    ],
    rtl: !0
  },
  {
    id: 2475,
    title: "两个椭圆",
    name: "two-ellipses",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "两个椭圆",
      "交叉",
      "几何",
      "环绕"
    ],
    rtl: !1
  },
  {
    id: 2476,
    title: "两个手指",
    name: "two-fingers",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 2477,
    title: "两只手",
    name: "two-hands",
    category: "Hands",
    categoryCN: "手势动作",
    author: "常留留",
    tag: [
      "手势",
      "手",
      "呵护",
      "保护"
    ],
    rtl: !0
  },
  {
    id: 2478,
    title: "按键二",
    name: "two-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "二",
      "2",
      "按键"
    ],
    rtl: !0
  },
  {
    id: 2479,
    title: "双半圆",
    name: "two-semicircles",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "双半圆",
      "抽象",
      "蘑菇"
    ],
    rtl: !1
  },
  {
    id: 2480,
    title: "星星",
    name: "two-triangles",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "星星",
      "太阳",
      "标记",
      "六星"
    ],
    rtl: !1
  },
  {
    id: 2481,
    title: "两个三角",
    name: "two-triangles-two",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "两个三角",
      "形状拼接"
    ],
    rtl: !1
  },
  {
    id: 2482,
    title: "二",
    name: "two-two",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "二",
      "手指",
      "手势"
    ],
    rtl: !0
  },
  {
    id: 2483,
    title: "磁带",
    name: "type-drive",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "音乐"
    ],
    rtl: !1
  },
  {
    id: 2484,
    title: "U盘",
    name: "u-disk",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "U盘",
      "硬盘",
      "储存",
      "硬件",
      "移动",
      "保存",
      "文件",
      "安全"
    ],
    rtl: !0
  },
  {
    id: 2485,
    title: "上回转",
    name: "u-turn-down",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "转向",
      "回转",
      "返回",
      "上回转"
    ],
    rtl: !0
  },
  {
    id: 2486,
    title: "右回转",
    name: "u-turn-left",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "转向",
      "回转",
      "返回",
      "右回转"
    ],
    rtl: !0
  },
  {
    id: 2487,
    title: "左回转",
    name: "u-turn-right",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "转向",
      "回转",
      "返回",
      "左回转"
    ],
    rtl: !0
  },
  {
    id: 2488,
    title: "下回转",
    name: "u-turn-up",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "下回转",
      "转向",
      "回转",
      "返回"
    ],
    rtl: !0
  },
  {
    id: 2489,
    title: "轻颜相机",
    name: "ulikecam",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "相机",
      "图片",
      "美颜",
      "化妆",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2490,
    title: "雨伞",
    name: "umbrella",
    category: "Safe",
    categoryCN: "安全防护",
    author: "常留留",
    tag: [
      "雨伞",
      "保护",
      "下雨",
      "庇护",
      "防护",
      "安全",
      "天气",
      "护盾"
    ],
    rtl: !0
  },
  {
    id: 2491,
    title: "雨伞",
    name: "umbrella-one",
    category: "Safe",
    categoryCN: "安全防护",
    author: "常留留",
    tag: [
      "雨伞",
      "保护",
      "下雨",
      "庇护",
      "防护",
      "安全",
      "天气",
      "护盾"
    ],
    rtl: !0
  },
  {
    id: 2492,
    title: "雨伞",
    name: "umbrella-two",
    category: "Safe",
    categoryCN: "安全防护",
    author: "史晓彤",
    tag: [
      "防潮",
      "雨伞",
      "保护",
      "下雨",
      "庇护",
      "防护",
      "安全",
      "天气",
      "护盾"
    ],
    rtl: !0
  },
  {
    id: 2493,
    title: "撤销",
    name: "undo",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "撤销",
      "返回",
      "驳回",
      "刷新",
      "旋转"
    ],
    rtl: !0
  },
  {
    id: 2494,
    title: "解组",
    name: "ungroup",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "组合",
      "解组"
    ],
    rtl: !0
  },
  {
    id: 2495,
    title: "单播",
    name: "unicast",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "点对点通信",
      "节点传输"
    ],
    rtl: !0
  },
  {
    id: 2496,
    title: "合并选择",
    name: "union-selection",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "合并",
      "并拢",
      "交集"
    ],
    rtl: !0
  },
  {
    id: 2497,
    title: "宇宙",
    name: "universal",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2498,
    title: "不喜欢",
    name: "unlike",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "取消关注",
      "取消收藏",
      "爱心"
    ],
    rtl: !0
  },
  {
    id: 2499,
    title: "链接断开",
    name: "unlink",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "链条",
      "锁链",
      "无效链接",
      "解绑"
    ],
    rtl: !0
  },
  {
    id: 2500,
    title: "解锁",
    name: "unlock",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "解锁",
      "开锁",
      "锁定",
      "打开",
      "开放"
    ],
    rtl: !0
  },
  {
    id: 2501,
    title: "开锁",
    name: "unlock-one",
    category: "Edit",
    categoryCN: "编辑",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2502,
    title: "无序列表",
    name: "unordered-list",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "无序",
      "列表",
      "序列"
    ],
    rtl: !0
  },
  {
    id: 2503,
    title: "上",
    name: "up",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向上",
      "箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 2504,
    title: "上下楼",
    name: "up-and-down",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "上下楼",
      "电梯",
      "楼梯",
      "步行梯",
      "台阶"
    ],
    rtl: !0
  },
  {
    id: 2505,
    title: "上-圆",
    name: "up-c",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向上",
      "箭头",
      "圆圈箭头"
    ],
    rtl: !1
  },
  {
    id: 2506,
    title: "上1",
    name: "up-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向上",
      "箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 2507,
    title: "上-小",
    name: "up-small",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "向上",
      "小箭头",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 2508,
    title: "上箭头-方",
    name: "up-square",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "向上",
      "箭头",
      "方形箭头"
    ],
    rtl: !1
  },
  {
    id: 2509,
    title: "上1",
    name: "up-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "齐奉飞",
    tag: [
      "箭头",
      "上",
      "指针",
      "方向"
    ],
    rtl: !1
  },
  {
    id: 2510,
    title: "更新",
    name: "update-rotation",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "更新",
      "旋转",
      "下载",
      "最新",
      "循环"
    ],
    rtl: !0
  },
  {
    id: 2511,
    title: "上传",
    name: "upload",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "向上",
      "上传",
      "箭头"
    ],
    rtl: !1
  },
  {
    id: 2512,
    title: "计算机上传",
    name: "upload-computer",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2513,
    title: "笔记本电脑上传",
    name: "upload-laptop",
    category: "Hardware",
    categoryCN: "硬件",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2514,
    title: "上传日志",
    name: "upload-logs",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "日志",
      "上传文档",
      "文件"
    ],
    rtl: !0
  },
  {
    id: 2515,
    title: "上传1",
    name: "upload-one",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "上传",
      "云上传",
      "载入"
    ],
    rtl: !0
  },
  {
    id: 2516,
    title: "图片上传",
    name: "upload-picture",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2517,
    title: "上传3",
    name: "upload-three",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "常留留",
    tag: [
      "向上",
      "载入",
      "上传"
    ],
    rtl: !1
  },
  {
    id: 2518,
    title: "上传2",
    name: "upload-two",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "刘心乐",
    tag: [
      "上传",
      "云上传"
    ],
    rtl: !0
  },
  {
    id: 2519,
    title: "网页上传",
    name: "upload-web",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2520,
    title: "翻转笑脸",
    name: "upside-down-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "翻转笑脸",
      "表情"
    ],
    rtl: !1
  },
  {
    id: 2521,
    title: "数据接口",
    name: "usb",
    category: "Hardware",
    categoryCN: "硬件",
    author: "白明泽",
    tag: [
      "USB",
      "设备",
      "存储",
      "插口",
      "接口"
    ],
    rtl: !0
  },
  {
    id: 2522,
    title: "U盘",
    name: "usb-memory-stick",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "usb信号",
      "储存",
      "储存"
    ],
    rtl: !1
  },
  {
    id: 2523,
    title: "微型USB1",
    name: "usb-micro-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "数据线"
    ],
    rtl: !1
  },
  {
    id: 2524,
    title: "微型USB2",
    name: "usb-micro-two",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "数据线"
    ],
    rtl: !1
  },
  {
    id: 2525,
    title: "数据接口",
    name: "usb-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "白明泽",
    tag: [
      "USB",
      "设备",
      "存储",
      "插口",
      "接口"
    ],
    rtl: !1
  },
  {
    id: 2526,
    title: "TypeC",
    name: "usb-type-c",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "接口",
      "数据线"
    ],
    rtl: !1
  },
  {
    id: 2527,
    title: "用户",
    name: "user",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "账户",
      "个人中心",
      "我的",
      "人群",
      "人"
    ],
    rtl: !1
  },
  {
    id: 2528,
    title: "商务用户",
    name: "user-business",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "用户",
      "账户",
      "人",
      "很多人",
      "商务",
      "领带"
    ],
    rtl: !1
  },
  {
    id: 2529,
    title: "用户定位",
    name: "user-positioning",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "定位",
      "用户",
      "个人中心",
      "我的",
      "人群",
      "人"
    ],
    rtl: !0
  },
  {
    id: 2530,
    title: "用户互传",
    name: "user-to-user-transmission",
    category: "Peoples",
    categoryCN: "账户",
    author: "常留留",
    tag: [
      "相互传输",
      "用户",
      "用户之间"
    ],
    rtl: !1
  },
  {
    id: 2531,
    title: "子宫",
    name: "uterus",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "女性",
      "生殖",
      "繁衍",
      "器官"
    ],
    rtl: !0
  },
  {
    id: 2532,
    title: "椰树",
    name: "vacation",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2533,
    title: "吸尘器",
    name: "vacuum-cleaner",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "卫生",
      "打扫",
      "清除",
      "干净",
      "垃圾",
      "清洗",
      "电器"
    ],
    rtl: !0
  },
  {
    id: 2534,
    title: "菜篮子",
    name: "vegetable-basket",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "菜篮子",
      "篮子",
      "蔬菜",
      "买菜"
    ],
    rtl: !0
  },
  {
    id: 2535,
    title: "青菜",
    name: "vegetables",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "青菜",
      "白菜",
      "蔬菜"
    ],
    rtl: !0
  },
  {
    id: 2536,
    title: "垂直间距",
    name: "vertical-spacing-between-items",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "垂直间距",
      "平行"
    ],
    rtl: !1
  },
  {
    id: 2537,
    title: "垂直整理",
    name: "vertical-tidy-up",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "垂直间距",
      "平行"
    ],
    rtl: !1
  },
  {
    id: 2538,
    title: "垂直时间线",
    name: "vertical-timeline",
    category: "Charts",
    categoryCN: "数据图表",
    author: "常留留",
    tag: [
      "时间线",
      "时间",
      "数据",
      "分析",
      "图表"
    ],
    rtl: !0
  },
  {
    id: 2539,
    title: "垂直居中对齐",
    name: "vertically-centered",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "垂直间距",
      "平行",
      "居中对齐"
    ],
    rtl: !1
  },
  {
    id: 2540,
    title: "背心",
    name: "vest",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "马甲",
      "衣服",
      "上衣"
    ],
    rtl: !1
  },
  {
    id: 2541,
    title: "试管",
    name: "vial",
    category: "Measurement",
    categoryCN: "测量试验",
    author: "白明泽",
    tag: [
      "试管",
      "试验",
      "量管",
      "测量",
      "测试"
    ],
    rtl: !1
  },
  {
    id: 2542,
    title: "蚕豆",
    name: "vicia-faba",
    category: "Foods",
    categoryCN: "食品",
    author: "胡玉娜",
    tag: [
      "蚕豆",
      "豆子",
      "蔬菜",
      "食品"
    ],
    rtl: !0
  },
  {
    id: 2543,
    title: "视频",
    name: "video",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "电影",
      "放映",
      "播放",
      "胶片"
    ],
    rtl: !0
  },
  {
    id: 2544,
    title: "视频会议",
    name: "video-conference",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2545,
    title: "视频文件",
    name: "video-file",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "影视",
      "影片",
      "录像",
      "资料"
    ],
    rtl: !0
  },
  {
    id: 2546,
    title: "视频",
    name: "video-one",
    category: "Office",
    categoryCN: "办公文档",
    author: "田婧",
    tag: [
      "摄像",
      "视频",
      "电影",
      "投影",
      "影像"
    ],
    rtl: !0
  },
  {
    id: 2547,
    title: "视频",
    name: "video-two",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "视频",
      "影视",
      "播放",
      "电影"
    ],
    rtl: !0
  },
  {
    id: 2548,
    title: "摄像机1",
    name: "videocamera",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍",
      "电影",
      "放映"
    ],
    rtl: !0
  },
  {
    id: 2549,
    title: "摄像机2",
    name: "videocamera-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "摄像",
      "拍摄",
      "记录",
      "录像",
      "录制",
      "检测",
      "探头",
      "抓拍",
      "偷拍",
      "电影",
      "放映"
    ],
    rtl: !0
  },
  {
    id: 2550,
    title: "维恩图",
    name: "viencharts",
    category: "Charts",
    categoryCN: "数据图表",
    author: "金磊",
    tag: [
      "数据",
      "维恩",
      "图表",
      "圆环交叉"
    ],
    rtl: !1
  },
  {
    id: 2551,
    title: "卡片查看模式",
    name: "view-grid-card",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "列表模式",
      "宫格",
      "应用",
      "网格视图"
    ],
    rtl: !1
  },
  {
    id: 2552,
    title: "详情查看模式",
    name: "view-grid-detail",
    category: "Edit",
    categoryCN: "编辑",
    author: "刘心乐",
    tag: [
      "列表模式",
      "排列方式",
      "排版"
    ],
    rtl: !0
  },
  {
    id: 2553,
    title: "列表查看模式",
    name: "view-grid-list",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "列表模式",
      "排列方式",
      "顺序",
      "排版",
      "左图右文"
    ],
    rtl: !0
  },
  {
    id: 2554,
    title: "详情列表",
    name: "view-list",
    category: "Office",
    categoryCN: "办公文档",
    author: "刘心乐",
    tag: [
      "list",
      "列表",
      "表格",
      "文件",
      "文本"
    ],
    rtl: !0
  },
  {
    id: 2555,
    title: "取景器",
    name: "viewfinder",
    category: "Edit",
    categoryCN: "编辑",
    author: "李宁",
    tag: [
      "相机",
      "照相",
      "拍照",
      "自动",
      "取景器"
    ],
    rtl: !1
  },
  {
    id: 2556,
    title: "火山小视频",
    name: "vigo",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "火山",
      "小视频",
      "短视频",
      "logo",
      "字节跳动"
    ],
    rtl: !0
  },
  {
    id: 2557,
    title: "VIP",
    name: "vip",
    category: "Character",
    categoryCN: "符号标识",
    author: "金磊",
    tag: [
      "VIP",
      "加V",
      "会员"
    ],
    rtl: !0
  },
  {
    id: 2558,
    title: "vip",
    name: "vip-one",
    category: "Others",
    categoryCN: "其它",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2559,
    title: "处女座",
    name: "virgo",
    category: "Constellation",
    categoryCN: "星座",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2560,
    title: "虚拟现实眼镜",
    name: "virtual-reality-glasses",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "VR",
      "虚拟现实",
      "眼睛",
      "AR",
      "增强现实",
      "游戏"
    ],
    rtl: !1
  },
  {
    id: 2561,
    title: "录音",
    name: "voice",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音量",
      "语音",
      "录音",
      "麦克风"
    ],
    rtl: !1
  },
  {
    id: 2562,
    title: "语音文字",
    name: "voice-input",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "语音文字",
      "语音转文字",
      "语音入法"
    ],
    rtl: !0
  },
  {
    id: 2563,
    title: "语音信息",
    name: "voice-message",
    category: "Others",
    categoryCN: "其它",
    author: "齐奉飞",
    tag: [
      "语音",
      "信息",
      "声音",
      "信号"
    ],
    rtl: !0
  },
  {
    id: 2564,
    title: "关闭录音",
    name: "voice-off",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "关闭音量",
      "关闭语音",
      "关闭录音",
      "关闭麦克风",
      "close"
    ],
    rtl: !0
  },
  {
    id: 2565,
    title: "声音",
    name: "voice-one",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音频",
      "音量",
      "语音",
      "录音",
      "声波",
      "voice"
    ],
    rtl: !1
  },
  {
    id: 2566,
    title: "语音信息",
    name: "voicemail",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "录音",
      "磁带",
      "语音",
      "语音短信"
    ],
    rtl: !1
  },
  {
    id: 2567,
    title: "大众",
    name: "volkswagen",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "汽车",
      "加工厂",
      "logo",
      "大众"
    ],
    rtl: !1
  },
  {
    id: 2568,
    title: "排球",
    name: "volleyball",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "球类",
      "球",
      "排球",
      "线球",
      "圆球",
      "轮子",
      "运动",
      "体育"
    ],
    rtl: !0
  },
  {
    id: 2569,
    title: "音量减小",
    name: "volume-down",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "音乐",
      "音量",
      "声音",
      "降低",
      "无声",
      "音乐"
    ],
    rtl: !0
  },
  {
    id: 2570,
    title: "静音",
    name: "volume-mute",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音量关闭",
      "静音",
      "声音",
      "音量",
      "喇叭",
      "广播"
    ],
    rtl: !0
  },
  {
    id: 2571,
    title: "声音-大",
    name: "volume-notice",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音量",
      "声音",
      "喇叭",
      "小声",
      "广播"
    ],
    rtl: !0
  },
  {
    id: 2572,
    title: "声音-小",
    name: "volume-small",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "常留留",
    tag: [
      "音量",
      "声音",
      "喇叭",
      "小声",
      "广播"
    ],
    rtl: !0
  },
  {
    id: 2573,
    title: "音量增大",
    name: "volume-up",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "金磊",
    tag: [
      "音乐",
      "音量",
      "声音",
      "增大",
      "最大音量",
      "音乐"
    ],
    rtl: !0
  },
  {
    id: 2574,
    title: "VR 眼镜",
    name: "vr-glasses",
    category: "Hardware",
    categoryCN: "硬件",
    author: "金磊",
    tag: [
      "VR",
      "眼镜",
      "眼镜",
      "虚拟现实",
      "设备",
      "游戏"
    ],
    rtl: !1
  },
  {
    id: 2575,
    title: "腰围",
    name: "waistline",
    category: "Health",
    categoryCN: "医疗健康",
    author: "杨威",
    tag: [],
    rtl: !1
  },
  {
    id: 2576,
    title: "钱包",
    name: "wallet",
    category: "Money",
    categoryCN: "电商财产",
    author: "刘心乐",
    tag: [
      "钱",
      "钱包",
      "资金",
      "金融",
      "充值"
    ],
    rtl: !0
  },
  {
    id: 2577,
    title: "钱包",
    name: "wallet-one",
    category: "Money",
    categoryCN: "电商财产",
    author: "史晓彤",
    tag: [
      "钱包",
      "消费",
      "卡包"
    ],
    rtl: !0
  },
  {
    id: 2578,
    title: "钱包3",
    name: "wallet-three",
    category: "Money",
    categoryCN: "电商财产",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2579,
    title: "钱包",
    name: "wallet-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "钱包",
      "金钱",
      "财富",
      "理财",
      "投资"
    ],
    rtl: !0
  },
  {
    id: 2580,
    title: "入库",
    name: "warehousing",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "张蔓",
    tag: [
      "入库",
      "进入",
      "输送",
      "方向"
    ],
    rtl: !0
  },
  {
    id: 2581,
    title: "洗衣机",
    name: "washing-machine",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "卫生",
      "打扫",
      "清除",
      "干净",
      "垃圾",
      "清洗",
      "洗衣服",
      "除污渍",
      "电器"
    ],
    rtl: !0
  },
  {
    id: 2582,
    title: "洗衣机1",
    name: "washing-machine-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "张晏",
    tag: [
      "卫生",
      "打扫",
      "清除",
      "干净",
      "垃圾",
      "清洗",
      "洗衣服",
      "除污渍",
      "电器"
    ],
    rtl: !0
  },
  {
    id: 2583,
    title: "手表",
    name: "watch",
    category: "Time",
    categoryCN: "时间日期",
    author: "金磊",
    tag: [
      "电子表",
      "时间",
      "时区",
      "指针",
      "计时",
      "手表"
    ],
    rtl: !0
  },
  {
    id: 2584,
    title: "手表",
    name: "watch-one",
    category: "Hardware",
    categoryCN: "硬件",
    author: "孟祥瑞",
    tag: [
      "计时器",
      "手表",
      "时间",
      "智能手表",
      "机械表"
    ],
    rtl: !0
  },
  {
    id: 2585,
    title: "水资源",
    name: "water",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "节能",
      "环保",
      "新能源",
      "水资源"
    ],
    rtl: !1
  },
  {
    id: 2586,
    title: "水位线",
    name: "water-level",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "水位线",
      "水滴"
    ],
    rtl: !0
  },
  {
    id: 2587,
    title: "水缺乏",
    name: "water-no",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "节能",
      "环保",
      "新能源",
      "水资源",
      "缺乏",
      "匮乏"
    ],
    rtl: !1
  },
  {
    id: 2588,
    title: "水费",
    name: "water-rate",
    category: "Money",
    categoryCN: "电商财产",
    author: "白明泽",
    tag: [
      "费用",
      "水费",
      "钱",
      "缴费",
      "交费"
    ],
    rtl: !1
  },
  {
    id: 2589,
    title: "水电费",
    name: "water-rate-two",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "水电费",
      "水滴"
    ],
    rtl: !1
  },
  {
    id: 2590,
    title: "瀑布流横向",
    name: "waterfalls-h",
    category: "Base",
    categoryCN: "基础",
    author: "白明泽",
    tag: [
      "瀑布",
      "流程",
      "布局",
      "排版",
      "界面",
      "顺序",
      "列表"
    ],
    rtl: !0
  },
  {
    id: 2591,
    title: "瀑布流纵向",
    name: "waterfalls-v",
    category: "Base",
    categoryCN: "基础",
    author: "白明泽",
    tag: [
      "瀑布",
      "流程",
      "布局",
      "排版",
      "界面",
      "顺序",
      "列表"
    ],
    rtl: !0
  },
  {
    id: 2592,
    title: "西瓜",
    name: "watermelon",
    category: "Foods",
    categoryCN: "食品",
    author: "金磊",
    tag: [
      "西瓜",
      "水果",
      "美食",
      "夏天"
    ],
    rtl: !1
  },
  {
    id: 2593,
    title: "西瓜",
    name: "watermelon-one",
    category: "Foods",
    categoryCN: "食品",
    author: "孔维佳",
    tag: [
      "水果",
      "瓜"
    ],
    rtl: !0
  },
  {
    id: 2594,
    title: "水球",
    name: "waterpolo",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "运动",
      "体育",
      "排球",
      "水",
      "训练"
    ],
    rtl: !0
  },
  {
    id: 2595,
    title: "水球1",
    name: "waterpolo-one",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "运动",
      "体育",
      "排球",
      "水",
      "训练"
    ],
    rtl: !0
  },
  {
    id: 2596,
    title: "电波",
    name: "waves",
    category: "Money",
    categoryCN: "电商财产",
    author: "常留留",
    tag: [
      "心跳",
      "脉搏",
      "趋势",
      "路径"
    ],
    rtl: !0
  },
  {
    id: 2597,
    title: "左音波",
    name: "waves-left",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "音频",
      "音量",
      "语音",
      "录音",
      "波纹",
      "声音"
    ],
    rtl: !0
  },
  {
    id: 2598,
    title: "右音波",
    name: "waves-right",
    category: "Music",
    categoryCN: "多媒体音乐",
    author: "林琳",
    tag: [
      "音频",
      "音量",
      "语音",
      "录音",
      "波纹",
      "声音"
    ],
    rtl: !0
  },
  {
    id: 2599,
    title: "沮丧",
    name: "weary-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "沮丧",
      "表情",
      "哭丧着脸"
    ],
    rtl: !1
  },
  {
    id: 2600,
    title: "网页",
    name: "web-page",
    category: "Office",
    categoryCN: "办公文档",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2601,
    title: "网络摄像头",
    name: "webcam",
    category: "Hardware",
    categoryCN: "硬件",
    author: "常留留",
    tag: [
      "摄像头",
      "拍摄",
      "摄像机",
      "镜头",
      "网络"
    ],
    rtl: !1
  },
  {
    id: 2602,
    title: "微信",
    name: "wechat",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "聊天",
      "社交",
      "沟通",
      "语音",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2603,
    title: "微博",
    name: "weibo",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "微博",
      "新浪微博",
      "logo",
      "资讯"
    ],
    rtl: !0
  },
  {
    id: 2604,
    title: "体重",
    name: "weight",
    category: "Health",
    categoryCN: "医疗健康",
    author: "常留留",
    tag: [
      "秤",
      "重量",
      "称量"
    ],
    rtl: !0
  },
  {
    id: 2605,
    title: "举重",
    name: "weightlifting",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "运动",
      "体育",
      "训练",
      "举重",
      "减脂",
      "重量",
      "负重",
      "力量",
      "比赛",
      "拉伸"
    ],
    rtl: !1
  },
  {
    id: 2606,
    title: "微信卡包",
    name: "weixin-cards-offers",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "卡券",
      "信用卡",
      "钱包",
      "优惠券"
    ],
    rtl: !0
  },
  {
    id: 2607,
    title: "微信收藏",
    name: "weixin-favorites",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "收藏",
      "喜欢",
      "保存",
      "存储"
    ],
    rtl: !1
  },
  {
    id: 2608,
    title: "微信游戏",
    name: "weixin-games",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "游戏",
      "玩",
      "娱乐"
    ],
    rtl: !1
  },
  {
    id: 2609,
    title: "微信电商",
    name: "weixin-market",
    category: "Money",
    categoryCN: "电商财产",
    author: "金磊",
    tag: [
      "商场",
      "商城",
      "电商",
      "卖东西",
      "生意",
      "入口"
    ],
    rtl: !1
  },
  {
    id: 2610,
    title: "微信小程序",
    name: "weixin-mini-app",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "小程序",
      "图标"
    ],
    rtl: !0
  },
  {
    id: 2611,
    title: "微信附近的人",
    name: "weixin-people-nearby",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "附近的人",
      "漂流瓶",
      "地理位置"
    ],
    rtl: !1
  },
  {
    id: 2612,
    title: "微信扫一扫",
    name: "weixin-scan",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "扫码",
      "二维码",
      "扫描",
      "扫一扫"
    ],
    rtl: !0
  },
  {
    id: 2613,
    title: "微信搜索",
    name: "weixin-search",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "搜索",
      "微信搜索"
    ],
    rtl: !0
  },
  {
    id: 2614,
    title: "微信摇一摇",
    name: "weixin-shake",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "摇一摇",
      "搜索",
      "互动",
      "交互"
    ],
    rtl: !0
  },
  {
    id: 2615,
    title: "微信看一看",
    name: "weixin-top-stories",
    category: "Others",
    categoryCN: "其它",
    author: "金磊",
    tag: [
      "文章",
      "看一看",
      "信息流"
    ],
    rtl: !1
  },
  {
    id: 2616,
    title: "鲸鱼",
    name: "whale",
    category: "Animals",
    categoryCN: "动物",
    author: "杨威",
    tag: [],
    rtl: !0
  },
  {
    id: 2617,
    title: "轮椅",
    name: "wheelchair",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "金磊",
    tag: [
      "轮椅",
      "残疾",
      "运动"
    ],
    rtl: !0
  },
  {
    id: 2618,
    title: "旋风",
    name: "whirlwind",
    category: "Abstract",
    categoryCN: "抽象图形",
    author: "金磊",
    tag: [
      "旋转",
      "旋风",
      "循环"
    ],
    rtl: !0
  },
  {
    id: 2619,
    title: "吹哨",
    name: "whistling",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "哨子",
      "吹哨",
      "比赛",
      "声音",
      "响声",
      "裁判",
      "犯规",
      "铃声",
      "音乐",
      "乐器"
    ],
    rtl: !0
  },
  {
    id: 2620,
    title: "站点加速",
    name: "whole-site-accelerator",
    category: "Connect",
    categoryCN: "链接",
    author: "高亚栋",
    tag: [
      "站点加速",
      "闪电",
      "连接"
    ],
    rtl: !0
  },
  {
    id: 2621,
    title: "无线网络",
    name: "wifi",
    category: "Others",
    categoryCN: "其它",
    author: "齐奉飞",
    tag: [
      "Wi-Fi",
      "无线网",
      "网络",
      "信号"
    ],
    rtl: !1
  },
  {
    id: 2622,
    title: "刮风",
    name: "wind",
    category: "Weather",
    categoryCN: "天气",
    author: "",
    tag: [
      "风"
    ],
    rtl: !0
  },
  {
    id: 2623,
    title: "风力发电机",
    name: "wind-turbine",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "风车",
      "发电机"
    ],
    rtl: !0
  },
  {
    id: 2624,
    title: "风车",
    name: "windmill",
    category: "Energy",
    categoryCN: "能源生命",
    author: "齐奉飞",
    tag: [
      "风车",
      "纸风车",
      "旋转",
      "快速",
      "环保"
    ],
    rtl: !0
  },
  {
    id: 2625,
    title: "风车",
    name: "windmill-one",
    category: "Build",
    categoryCN: "建筑",
    author: "王小犇",
    tag: [
      "车",
      "发电车",
      "风车"
    ],
    rtl: !0
  },
  {
    id: 2626,
    title: "风车",
    name: "windmill-two",
    category: "Energy",
    categoryCN: "能源生命",
    author: "金磊",
    tag: [
      "风车",
      "转动",
      "旋转",
      "风景",
      "发电",
      "动力"
    ],
    rtl: !0
  },
  {
    id: 2627,
    title: "微软视窗",
    name: "windows",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "微软",
      "操作系统",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2628,
    title: "翼装飞行",
    name: "wingsuit-flying",
    category: "Sports",
    categoryCN: "体育运动",
    author: "梁超",
    tag: [
      "飞行",
      "人",
      "体育",
      "运动",
      "比赛",
      "超人",
      "飞人"
    ],
    rtl: !1
  },
  {
    id: 2629,
    title: "眨眼睛",
    name: "winking-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "眨眼睛",
      "表情",
      "调皮"
    ],
    rtl: !0
  },
  {
    id: 2630,
    title: "眨一个眼睛",
    name: "winking-face-with-open-eyes",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "眨一个眼睛",
      "表情",
      "调皮"
    ],
    rtl: !0
  },
  {
    id: 2631,
    title: "女人",
    name: "woman",
    category: "Peoples",
    categoryCN: "账户",
    author: "常留留",
    tag: [
      "女生",
      "女士",
      "妈妈",
      "阿姨",
      "女性",
      "女",
      "女性用户"
    ],
    rtl: !0
  },
  {
    id: 2632,
    title: "女",
    name: "women",
    category: "Peoples",
    categoryCN: "账户",
    author: "杨威",
    tag: [
      "用户",
      "客户",
      "个人中心",
      "账户中心",
      "我的",
      "员工",
      "女"
    ],
    rtl: !0
  },
  {
    id: 2633,
    title: "女大衣",
    name: "women-coat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "大衣",
      "上衣",
      "衣服",
      "外套"
    ],
    rtl: !1
  },
  {
    id: 2634,
    title: "呢帽",
    name: "woolen-hat",
    category: "Clothes",
    categoryCN: "服饰",
    author: "马玉欣",
    tag: [
      "帽子",
      "顶帽",
      "道具",
      "针织帽"
    ],
    rtl: !0
  },
  {
    id: 2635,
    title: "文档",
    name: "word",
    category: "Edit",
    categoryCN: "编辑",
    author: "夏立诚",
    tag: [
      "文档",
      "文案",
      "文本"
    ],
    rtl: !1
  },
  {
    id: 2636,
    title: "工作台",
    name: "workbench",
    category: "Money",
    categoryCN: "电商财产",
    author: "齐奉飞",
    tag: [
      "电脑",
      "工作桌",
      "平台",
      "行情",
      "趋势"
    ],
    rtl: !0
  },
  {
    id: 2637,
    title: "工人",
    name: "worker",
    category: "Industry",
    categoryCN: "工业",
    author: "齐奉飞",
    tag: [
      "打工者",
      "劳动者",
      "打工人"
    ],
    rtl: !0
  },
  {
    id: 2638,
    title: "世界",
    name: "world",
    category: "Travel",
    categoryCN: "交通旅游",
    author: "常留留",
    tag: [
      "环球",
      "地球",
      "国际",
      "地图",
      "地图"
    ],
    rtl: !0
  },
  {
    id: 2639,
    title: "担心",
    name: "worried-face",
    category: "Emoji",
    categoryCN: "表情",
    author: "金磊",
    tag: [
      "表情",
      "失败",
      "哭脸",
      "不开心",
      "悲伤"
    ],
    rtl: !1
  },
  {
    id: 2640,
    title: "写作",
    name: "write",
    category: "Edit",
    categoryCN: "编辑",
    author: "齐奉飞",
    tag: [
      "协作",
      "写字",
      "编辑",
      "修改",
      "输入"
    ],
    rtl: !0
  },
  {
    id: 2641,
    title: "编辑撰写",
    name: "writing-fluently",
    category: "Edit",
    categoryCN: "编辑",
    author: "金磊",
    tag: [
      "编辑",
      "书写",
      "书法",
      "记录",
      "画图",
      "输入"
    ],
    rtl: !0
  },
  {
    id: 2642,
    title: "错误用户",
    name: "wrong-user",
    category: "Peoples",
    categoryCN: "账户",
    author: "金磊",
    tag: [
      "错误",
      "关闭",
      "关闭用户权限",
      "删除用户"
    ],
    rtl: !0
  },
  {
    id: 2643,
    title: "小度",
    name: "xiaodu",
    category: "Brand",
    categoryCN: "品牌",
    author: "金磊",
    tag: [
      "百度",
      "小度",
      "音响",
      "屏幕音响",
      "智能音响",
      "表情"
    ],
    rtl: !0
  },
  {
    id: 2644,
    title: "小度在家",
    name: "xiaodu-home",
    category: "Build",
    categoryCN: "建筑",
    author: "金磊",
    tag: [
      "百度",
      "小度",
      "音响",
      "屏幕音响",
      "智能音响",
      "音频"
    ],
    rtl: !1
  },
  {
    id: 2645,
    title: "西瓜视频",
    name: "xigua",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "西瓜",
      "视频",
      "短视频",
      "logo",
      "字节跳动"
    ],
    rtl: !0
  },
  {
    id: 2646,
    title: "幸福里",
    name: "xingfuli",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "装饰",
      "家装",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2647,
    title: "星图",
    name: "xingtu",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "星图",
      "达人",
      "撮合",
      "即合",
      "oceanengine"
    ],
    rtl: !0
  },
  {
    id: 2648,
    title: "胜利",
    name: "yep",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "二",
      "手指",
      "胜利"
    ],
    rtl: !0
  },
  {
    id: 2649,
    title: "油管",
    name: "youtobe",
    category: "Brand",
    categoryCN: "品牌",
    author: "齐奉飞",
    tag: [
      "视频",
      "创意",
      "短视频",
      "应用平台",
      "logo"
    ],
    rtl: !0
  },
  {
    id: 2650,
    title: "优兔",
    name: "youtube",
    category: "Brand",
    categoryCN: "品牌",
    author: "常留留",
    tag: [
      "小视频",
      "短视频",
      "logo",
      "社交",
      "社交平台"
    ],
    rtl: !0
  },
  {
    id: 2651,
    title: "按键零",
    name: "zero-key",
    category: "Hardware",
    categoryCN: "硬件",
    author: "齐奉飞",
    tag: [
      "零",
      "0",
      "按键"
    ],
    rtl: !1
  },
  {
    id: 2652,
    title: "资金运营平台",
    name: "zijinyunying",
    category: "Brand",
    categoryCN: "品牌",
    author: "",
    tag: [
      "logo",
      "资金运营平台"
    ],
    rtl: !1
  },
  {
    id: 2653,
    title: "压缩文件",
    name: "zip",
    category: "Edit",
    categoryCN: "编辑",
    author: "常留留",
    tag: [
      "文件",
      "压缩包",
      "ZIP"
    ],
    rtl: !0
  },
  {
    id: 2654,
    title: "放大",
    name: "zoom",
    category: "Hands",
    categoryCN: "手势动作",
    author: "陈子豪",
    tag: [
      "滑动",
      "侧滑"
    ],
    rtl: !0
  },
  {
    id: 2655,
    title: "放大",
    name: "zoom-in",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "搜索",
      "查找",
      "放大"
    ],
    rtl: !0
  },
  {
    id: 2656,
    title: "缩放",
    name: "zoom-internal",
    category: "Arrows",
    categoryCN: "箭头方向",
    author: "金磊",
    tag: [
      "缩放",
      "内缩放",
      "大小"
    ],
    rtl: !0
  },
  {
    id: 2657,
    title: "缩小",
    name: "zoom-out",
    category: "Base",
    categoryCN: "基础",
    author: "齐奉飞",
    tag: [
      "搜索",
      "查找",
      "缩小"
    ],
    rtl: !0
  }
], Mt = [
  {
    id: 1,
    title: "404_页面丢失",
    name: "404",
    tag: [
      "404",
      "页面",
      "丢失"
    ],
    colors: [
      "#DEEBFC",
      "#071F4D",
      "#C7DEFF",
      "#006EFF",
      "#00E4E5"
    ]
  },
  {
    id: 2,
    title: "503_网页无响应",
    name: "503",
    tag: [
      "503",
      "网页",
      "无响应"
    ],
    colors: [
      "#DEEBFC",
      "#071F4D",
      "#C7DEFF",
      "#006EFF",
      "#00E4E5",
      "#fff"
    ]
  },
  {
    id: 3,
    title: "保存成功",
    name: "save-success",
    tag: [
      "save",
      "success",
      "保存",
      "成功"
    ],
    colors: [
      "#fff",
      "#071F4D",
      "#C7DEFF",
      "#006EFF",
      "#00E4E5"
    ]
  },
  {
    id: 4,
    title: "开通服务成功",
    name: "service-success",
    tag: [
      "service",
      "success",
      "开通服务",
      "成功"
    ],
    colors: [
      "#fff",
      "#C7DEFF",
      "#071F4D",
      "#006EFF",
      "#00E4E5"
    ]
  },
  {
    id: 5,
    title: "创建成功",
    name: "create-success",
    tag: [
      "create",
      "success",
      "创建",
      "成功"
    ],
    colors: [
      "#fff",
      "#C7DEFF",
      "#071F4D",
      "#006EFF",
      "#00E4E5"
    ]
  },
  {
    id: 6,
    title: "认证成功",
    name: "auth-success",
    tag: [
      "auth",
      "success",
      "认证",
      "成功"
    ],
    colors: [
      "#071F4D",
      "#C7DEFF",
      "#fff",
      "#006EFF",
      "#00E4E5"
    ]
  },
  {
    id: 7,
    title: "上传成功",
    name: "upload-success",
    tag: [
      "upload",
      "success",
      "上传",
      "成功"
    ],
    colors: [
      "#fff",
      "#C7DEFF",
      "#071F4D",
      "#006EFF",
      "#00E4E5"
    ]
  },
  {
    id: 8,
    title: "审核通过",
    name: "audit-pass",
    tag: [
      "audit",
      "pass",
      "审核",
      "通过"
    ],
    colors: [
      "#fff",
      "#006EFF",
      "#071F4D",
      "#C7DEFF",
      "#00E4E5"
    ]
  }
], Ft = [
  {
    id: 1,
    title: "边框1",
    name: "border1.png",
    tag: [
      "边框1"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 154
  },
  {
    id: 2,
    title: "边框2",
    name: "border2.png",
    tag: [
      "边框2"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 146
  },
  {
    id: 3,
    title: "边框3",
    name: "border3.png",
    tag: [
      "边框3"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 164
  },
  {
    id: 4,
    title: "边框4",
    name: "border4.png",
    tag: [
      "边框4"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 178
  },
  {
    id: 5,
    title: "边框5",
    name: "border5.png",
    tag: [
      "边框5"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 136
  },
  {
    id: 6,
    title: "边框6",
    name: "border6.png",
    tag: [
      "边框6"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 186
  },
  {
    id: 7,
    title: "边框7",
    name: "border7.png",
    tag: [
      "边框7"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 124
  },
  {
    id: 8,
    title: "边框8",
    name: "border8.png",
    tag: [
      "边框8"
    ],
    category: "border",
    categoryCN: "边框",
    width: 240,
    height: 160
  },
  {
    id: 9,
    title: "标题1",
    name: "title1.png",
    tag: [
      "标题1"
    ],
    category: "title",
    categoryCN: "标题",
    width: 670,
    height: 36
  },
  {
    id: 10,
    title: "标题2",
    name: "title2.png",
    tag: [
      "标题2"
    ],
    category: "title",
    categoryCN: "标题",
    width: 574,
    height: 32
  },
  {
    id: 11,
    title: "标题3",
    name: "title3.png",
    tag: [
      "标题3"
    ],
    category: "title",
    categoryCN: "标题",
    width: 482,
    height: 32
  },
  {
    id: 12,
    title: "标题4",
    name: "title4.png",
    tag: [
      "标题4"
    ],
    category: "title",
    categoryCN: "标题",
    width: 632,
    height: 10
  },
  {
    id: 13,
    title: "标题5",
    name: "title5.png",
    tag: [
      "标题5"
    ],
    category: "title",
    categoryCN: "标题",
    width: 632,
    height: 44
  },
  {
    id: 14,
    title: "标题6",
    name: "title6.png",
    tag: [
      "标题6"
    ],
    category: "title",
    categoryCN: "标题",
    width: 652,
    height: 28
  },
  {
    id: 15,
    title: "底座1",
    name: "base1.png",
    tag: [
      "底座1"
    ],
    category: "base",
    categoryCN: "底座1",
    width: 202,
    height: 200
  },
  {
    id: 16,
    title: "底座2",
    name: "base2.png",
    tag: [
      "底座2"
    ],
    category: "base",
    categoryCN: "底座2",
    width: 202,
    height: 200
  },
  {
    id: 17,
    title: "底座3",
    name: "base3.png",
    tag: [
      "底座3"
    ],
    category: "base",
    categoryCN: "底座3",
    width: 218,
    height: 186
  },
  {
    id: 18,
    title: "底座4",
    name: "base4.png",
    tag: [
      "底座4"
    ],
    category: "base",
    categoryCN: "底座4",
    width: 230,
    height: 202
  },
  {
    id: 19,
    title: "底座5",
    name: "base5.png",
    tag: [
      "底座5"
    ],
    category: "base",
    categoryCN: "底座5",
    width: 266,
    height: 112
  },
  {
    id: 20,
    title: "底座6",
    name: "base6.png",
    tag: [
      "底座6"
    ],
    category: "base",
    categoryCN: "底座6",
    width: 242,
    height: 166
  },
  {
    id: 21,
    title: "底座7",
    name: "base7.png",
    tag: [
      "底座7"
    ],
    category: "base",
    categoryCN: "底座7",
    width: 200,
    height: 192
  },
  {
    id: 22,
    title: "底座8",
    name: "base8.png",
    tag: [
      "底座8"
    ],
    category: "base",
    categoryCN: "底座8",
    width: 294,
    height: 124
  },
  {
    id: 23,
    title: "底座9",
    name: "base9.png",
    tag: [
      "底座9"
    ],
    category: "base",
    categoryCN: "底座9",
    width: 180,
    height: 232
  },
  {
    id: 24,
    title: "底座10",
    name: "base1.png0",
    tag: [
      "底座10"
    ],
    category: "base",
    categoryCN: "底座10",
    width: 262,
    height: 220
  },
  {
    id: 25,
    title: "其他1",
    name: "other1.png",
    tag: [
      "其他1"
    ],
    category: "other",
    categoryCN: "其他1",
    width: 224,
    height: 220
  },
  {
    id: 26,
    title: "其他2",
    name: "other2.png",
    tag: [
      "其他2"
    ],
    category: "other",
    categoryCN: "其他2",
    width: 270,
    height: 226
  },
  {
    id: 27,
    title: "其他3",
    name: "other3.png",
    tag: [
      "其他3"
    ],
    category: "other",
    categoryCN: "其他3",
    width: 234,
    height: 234
  },
  {
    id: 28,
    title: "其他4",
    name: "other4.png",
    tag: [
      "其他4"
    ],
    category: "other",
    categoryCN: "其他4",
    width: 240,
    height: 240
  },
  {
    id: 29,
    title: "其他5",
    name: "other5.png",
    tag: [
      "其他5"
    ],
    category: "other",
    categoryCN: "其他5",
    width: 288,
    height: 240
  },
  {
    id: 30,
    title: "其他6",
    name: "other6.png",
    tag: [
      "其他6"
    ],
    category: "other",
    categoryCN: "其他6",
    width: 292,
    height: 286
  },
  {
    id: 31,
    title: "其他7",
    name: "other7.png",
    tag: [
      "其他7"
    ],
    category: "other",
    categoryCN: "其他7",
    width: 324,
    height: 324
  },
  {
    id: 32,
    title: "其他8",
    name: "other8.png",
    tag: [
      "其他8"
    ],
    category: "other",
    categoryCN: "其他8",
    width: 324,
    height: 184
  },
  {
    id: 33,
    title: "其他9",
    name: "other9.png",
    tag: [
      "其他9"
    ],
    category: "other",
    categoryCN: "其他9",
    width: 288,
    height: 278
  }
], xt = [
  {
    id: 1,
    title: "背景1",
    name: "bg1.jpg",
    tag: [
      "背景1"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  },
  {
    id: 2,
    title: "背景2",
    name: "bg2.jpg",
    tag: [
      "背景2"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  },
  {
    id: 3,
    title: "背景3",
    name: "bg3.jpg",
    tag: [
      "背景3"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  },
  {
    id: 4,
    title: "背景4",
    name: "bg4.jpg",
    tag: [
      "背景4"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  },
  {
    id: 5,
    title: "背景5",
    name: "bg5.jpg",
    tag: [
      "背景5"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  },
  {
    id: 6,
    title: "背景6",
    name: "bg6.jpg",
    tag: [
      "背景6"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  },
  {
    id: 7,
    title: "背景7",
    name: "bg7.jpg",
    tag: [
      "背景7"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  },
  {
    id: 8,
    title: "背景8",
    name: "bg8.jpg",
    tag: [
      "背景8"
    ],
    category: "bg",
    categoryCN: "背景",
    width: 256,
    height: 144
  }
], _t = [
  {
    id: 1,
    title: "地图1",
    name: "map1.png",
    tag: [
      "地图1"
    ],
    category: "chinaMap",
    categoryCN: "中国地图",
    width: 260,
    height: 192
  },
  {
    id: 2,
    title: "边框2",
    name: "map2.png",
    tag: [
      "边框2"
    ],
    category: "chinaMap",
    categoryCN: "中国地图",
    width: 240,
    height: 254
  },
  {
    id: 3,
    title: "边框3",
    name: "map3.png",
    tag: [
      "边框3"
    ],
    category: "chinaMap",
    categoryCN: "中国地图",
    width: 230,
    height: 200
  },
  {
    id: 4,
    title: "边框4",
    name: "map4.png",
    tag: [
      "边框4"
    ],
    category: "chinaMap",
    categoryCN: "中国地图",
    width: 308,
    height: 226
  },
  {
    id: 5,
    title: "边框5",
    name: "map5.png",
    tag: [
      "边框5"
    ],
    category: "chinaMap",
    categoryCN: "中国地图",
    width: 316,
    height: 210
  },
  {
    id: 6,
    title: "边框6",
    name: "map6.png",
    tag: [
      "边框6"
    ],
    category: "chinaMap",
    categoryCN: "中国地图",
    width: 268,
    height: 230
  }
], Tt = { class: "res-lib-drawer" }, St = { class: "res-lib-drawer-wrap" }, Dt = { class: "header" }, jt = { class: "types" }, Pt = ["onClick"], zt = { class: "icons-container" }, Gt = { class: "search-input-wrap" }, It = { class: "list-scroll-wrap" }, Lt = { class: "icon-list" }, Rt = ["id"], qt = { class: "category-name" }, Vt = ["title", "onDragstart", "onDblclick"], Ut = { class: "icons-container" }, Wt = { class: "search-input-wrap" }, Kt = { class: "list-scroll-wrap" }, $t = { class: "icon-section" }, Xt = ["title", "onDragstart", "onDblclick"], Jt = { class: "img-title" }, Yt = { class: "icons-container" }, Qt = { class: "search-input-wrap" }, Zt = { class: "types-button" }, te = ["onClick"], ee = { class: "list-scroll-wrap" }, ae = {
  key: 0,
  class: "icon-section"
}, re = ["title", "onDragstart", "onDblclick"], oe = {
  key: 1,
  class: "empty"
}, ge = { class: "icons-container" }, le = { class: "search-input-wrap" }, ie = { class: "types-button" }, ce = ["onClick"], ye = { class: "list-scroll-wrap" }, ue = {
  key: 0,
  class: "icon-section"
}, ne = ["title", "onDragstart", "onDblclick"], de = {
  key: 1,
  class: "empty"
}, he = { class: "icons-container" }, se = { class: "search-input-wrap" }, me = { class: "types-button" }, Ce = ["onClick"], Ne = { class: "list-scroll-wrap" }, fe = {
  key: 0,
  class: "icon-section"
}, pe = ["title", "onDragstart", "onDblclick"], we = {
  key: 1,
  class: "empty"
}, be = /* @__PURE__ */ bt({
  __name: "index",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(ve, { emit: Ee }) {
    const gt = mt(), lt = y(), R = y({}), H = y(""), q = () => {
      const a = {};
      Bt.forEach((t) => {
        (H.value === "" || t.name.indexOf(H.value) >= 0 || t.tag.indexOf(H.value) >= 0) && (a[t.category] ? a[t.category].list.push(t) : a[t.category] = {
          categoryCN: t.categoryCN,
          list: [t]
        });
      }), R.value = a;
    };
    q();
    const G = y(""), tt = y([]), V = () => {
      const a = [];
      Mt.forEach((t) => {
        (t.name.indexOf(G.value) >= 0 || t.tag.indexOf(G.value) >= 0) && a.push(t);
      }), tt.value = a;
    };
    V();
    const v = y("border"), it = y([{
      value: "border",
      label: "边框"
    }, {
      value: "title",
      label: "标题"
    }, {
      value: "base",
      label: "底座"
    }, {
      value: "other",
      label: "其他"
    }]), U = y({}), O = y(""), W = () => {
      const a = {};
      Ft.forEach((t) => {
        (O.value === "" || t.name.indexOf(O.value) >= 0 || t.tag.indexOf(O.value) >= 0) && (a[t.category] ? a[t.category].list.push(t) : a[t.category] = {
          categoryCN: t.categoryCN,
          list: [t]
        });
      }), U.value = a;
    };
    W();
    const I = y("bg"), ct = y([{
      value: "bg",
      label: "底图"
    }, {
      value: "other",
      label: "其他"
    }]), K = y({}), A = y(""), $ = () => {
      const a = {};
      xt.forEach((t) => {
        (A.value === "" || t.name.indexOf(A.value) >= 0 || t.tag.indexOf(A.value) >= 0) && (a[t.category] ? a[t.category].list.push(t) : a[t.category] = {
          categoryCN: t.categoryCN,
          list: [t]
        });
      }), K.value = a;
    };
    $();
    const L = y("chinaMap"), yt = y([{
      value: "chinaMap",
      label: "中国地图"
    }, {
      value: "worldMap",
      label: "世界地图"
    }]), X = y({}), B = y(""), J = () => {
      const a = {};
      _t.forEach((t) => {
        (B.value === "" || t.name.indexOf(B.value) >= 0 || t.tag.indexOf(B.value) >= 0) && (a[t.category] ? a[t.category].list.push(t) : a[t.category] = {
          categoryCN: t.categoryCN,
          list: [t]
        });
      }), X.value = a;
    };
    J();
    const M = (a, t, g) => {
      const d = ["ResIcon", "ResIllustration", "ResDecoration", "ResBackground", "ResMap"], s = ["ResIcons", "ResIllustrations", "ResDecorations", "ResBackgrounds", "ResMaps"], _ = ["资源库图标", "资源库插画", "资源库装饰", "资源库背景", "资源库地图"], n = {
        key: d[g],
        chartKey: "V" + d[g],
        conKey: "VC" + d[g],
        title: t.title,
        category: s[g],
        categoryName: _[g],
        categoryIcon: t.name,
        iconName: t.name,
        package: "Resource",
        chartFrame: "static",
        image: t.name
      };
      (g === 2 || g === 3 || g === 4) && (n.iconName = t.category, n.width = t.width, n.height = t.height), t.colors && (n.colors = t.colors), a.dataTransfer.setData(Nt.DRAG_KEY, ft(n)), E.setEditCanvas(at.IS_CREATE, !0);
    }, F = () => {
      E.setEditCanvas(at.IS_CREATE, !1);
    }, x = async (a, t) => {
      try {
        Ht();
        let g;
        const d = ["ResIcon", "ResIllustration", "ResDecoration", "ResBackground", "ResMap"], s = ["ResIcons", "ResIllustrations", "ResDecorations", "ResBackgrounds", "ResMaps"], _ = ["资源库图标", "资源库插画", "资源库装饰", "资源库背景", "资源库地图"], n = {
          key: d[t],
          chartKey: "V" + d[t],
          conKey: "VC" + d[t],
          title: a.title,
          category: s[t],
          categoryName: _[t],
          categoryIcon: a.name,
          iconName: a.name,
          package: "Resource",
          chartFrame: "static",
          image: a.name
        };
        (t === 2 || t === 3 || t === 4) && (n.iconName = a.category, n.width = a.width, n.height = a.height), a.colors && (n.colors = a.colors), g.attr.x = E.editCanvasConfig.width / 2 - g.attr.w / 2, g.attr.y = E.editCanvasConfig.height / 2 - g.attr.h / 2, E.addComponentList(g, !1, !0), E.setTargetSelectChart(g.id), Ot();
      } catch {
        At(), window.$message.warning("图表正在研发中, 敬请期待...");
      }
    }, Y = y();
    let Q = y("#icon_all");
    const p = y();
    function ut(a) {
      const t = a.wheelDelta || -a.deltaY * 40;
      p.value.setScrollLeft(p.value.wrapRef.scrollLeft - t);
    }
    const nt = (a) => {
      a.preventDefault();
    }, dt = () => {
      gt.setResource(!1);
    }, ht = (a) => {
      Q.value = a || "#icon_all", kt(() => {
        const t = document.getElementsByClassName("anchor-item");
        if (t)
          for (var g = 0; g < t.length; g++) {
            const d = t[g];
            if (d.className.indexOf("is-active") > -1) {
              let s = d.offsetLeft;
              s >= 300 ? (s - p.value.wrapRef.scrollLeft > 350 || s - p.value.wrapRef.scrollLeft <= 0) && p.value.setScrollLeft(s) : p.value.setScrollLeft(0);
            }
          }
      });
    }, w = y("icons"), st = [
      {
        label: "图标类",
        value: "icons"
      },
      {
        label: "插画类",
        value: "illustrations"
      },
      {
        label: "装饰类",
        value: "decoration"
      },
      {
        label: "背景类",
        value: "background"
      },
      {
        label: "地图类",
        value: "map"
      }
    ], E = Ct();
    return y(""), (a, t) => {
      const g = pt, d = k("el-input"), s = k("el-anchor-link"), _ = k("el-anchor"), n = k("el-scrollbar"), T = k("el-col"), S = k("el-row");
      return o(), u("div", Tt, [
        r("div", St, [
          r("div", Dt, [
            t[5] || (t[5] = r("div", { class: "header-title" }, "资源库", -1)),
            r("div", {
              class: "close-btn",
              onClick: dt
            }, [
              c(g, { "icon-class": "close" })
            ])
          ]),
          r("div", jt, [
            (o(), u(m, null, C(st, (e, l) => r("div", {
              key: l,
              class: b([{ active: w.value === e.value }, "item"]),
              onClick: (N) => w.value = e.value
            }, f(e.label), 11, Pt)), 64))
          ]),
          D(r("div", zt, [
            r("div", Gt, [
              c(d, {
                modelValue: H.value,
                "onUpdate:modelValue": t[0] || (t[0] = (e) => H.value = e),
                placeholder: "搜索图标",
                clearable: "",
                onKeyup: j(q, ["enter"]),
                onClear: q
              }, {
                prefix: i(() => [
                  c(g, { "icon-class": "search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            c(n, {
              ref_key: "scrollbarRef",
              ref: p,
              class: "icon-types-scroll",
              onWheel: vt(ut, ["prevent"])
            }, {
              default: i(() => [
                Y.value ? (o(), h(_, {
                  key: 0,
                  ref_key: "anchorRef",
                  ref: lt,
                  class: "icons-anchor",
                  container: Y.value.wrapRef,
                  direction: "horizontal",
                  onClick: nt,
                  onChange: ht
                }, {
                  default: i(() => [
                    c(s, {
                      class: b(["anchor-item", { "is-active": rt(Q) === "#icon_all" }]),
                      href: "#icon_all"
                    }, {
                      default: i(() => t[6] || (t[6] = [
                        ot(" 全部 ")
                      ])),
                      _: 1
                    }, 8, ["class"]),
                    (o(!0), u(m, null, C(R.value, (e, l) => (o(), h(s, {
                      key: l,
                      title: e.categoryCN,
                      class: b(["anchor-item", { "is-active": rt(Q) === "#icon_" + l }]),
                      href: `#icon_${l}`
                    }, {
                      default: i(() => [
                        ot(f(e.categoryCN), 1)
                      ]),
                      _: 2
                    }, 1032, ["title", "class", "href"]))), 128))
                  ]),
                  _: 1
                }, 8, ["container"])) : Et("", !0)
              ]),
              _: 1
            }, 512),
            r("div", It, [
              c(n, {
                ref_key: "scrollRef",
                ref: Y
              }, {
                default: i(() => [
                  r("div", Lt, [
                    t[7] || (t[7] = r("div", {
                      class: "icon-section",
                      id: "icon_all"
                    }, null, -1)),
                    (o(!0), u(m, null, C(R.value, (e, l) => (o(), u("div", {
                      class: "icon-section",
                      key: l,
                      id: `icon_${l}`
                    }, [
                      r("div", qt, f(e.categoryCN) + "（" + f(e.list.length) + "）", 1),
                      c(S, {
                        gutter: 16,
                        class: "icon-items"
                      }, {
                        default: i(() => [
                          (o(!0), u(m, null, C(e.list, (N) => (o(), h(T, {
                            key: N.name,
                            span: 4
                          }, {
                            default: i(() => [
                              r("div", {
                                class: "icon-item",
                                title: N.name,
                                onDragstart: (et) => M(et, N, 0),
                                onDragend: F,
                                onDblclick: (et) => x(N, 0),
                                draggable: !0
                              }, [
                                (o(), h(P("res-" + N.name), { size: 20 }))
                              ], 40, Vt)
                            ]),
                            _: 2
                          }, 1024))), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ], 8, Rt))), 128))
                  ])
                ]),
                _: 1
              }, 512)
            ])
          ], 512), [
            [z, w.value === "icons"]
          ]),
          D(r("div", Ut, [
            r("div", Wt, [
              c(d, {
                modelValue: G.value,
                "onUpdate:modelValue": t[1] || (t[1] = (e) => G.value = e),
                placeholder: "搜索插画",
                clearable: "",
                onKeyup: j(V, ["enter"]),
                onClear: V
              }, {
                prefix: i(() => [
                  c(g, { "icon-class": "search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            r("div", Kt, [
              c(n, null, {
                default: i(() => [
                  r("div", $t, [
                    c(S, {
                      gutter: 16,
                      class: "img-items"
                    }, {
                      default: i(() => [
                        (o(!0), u(m, null, C(tt.value, (e) => (o(), h(T, {
                          key: e.name,
                          span: 12
                        }, {
                          default: i(() => [
                            r("div", {
                              class: "img-item",
                              title: e.name,
                              onDragstart: (l) => M(l, e, 1),
                              onDragend: F,
                              onDblclick: (l) => x(e, 1),
                              draggable: !0
                            }, [
                              (o(), h(P("svg-res-" + e.name), {
                                width: 160,
                                height: 120,
                                colors: e.colors
                              }, null, 8, ["colors"])),
                              r("div", Jt, f(e.title), 1)
                            ], 40, Xt)
                          ]),
                          _: 2
                        }, 1024))), 128))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ])
          ], 512), [
            [z, w.value === "illustrations"]
          ]),
          D(r("div", Yt, [
            r("div", Qt, [
              c(d, {
                modelValue: O.value,
                "onUpdate:modelValue": t[2] || (t[2] = (e) => O.value = e),
                placeholder: "搜索装饰",
                clearable: "",
                onKeyup: j(W, ["enter"]),
                onClear: W
              }, {
                prefix: i(() => [
                  c(g, { "icon-class": "search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            r("div", Zt, [
              (o(!0), u(m, null, C(it.value, (e, l) => (o(), u("div", {
                class: b(["type-button", { active: e.value === v.value }]),
                key: l,
                onClick: (N) => v.value = e.value
              }, f(e.label), 11, te))), 128))
            ]),
            r("div", ee, [
              c(n, null, {
                default: i(() => [
                  U.value[v.value] ? (o(), u("div", ae, [
                    c(S, {
                      gutter: 16,
                      class: "img-items"
                    }, {
                      default: i(() => [
                        (o(!0), u(m, null, C(U.value[v.value].list, (e) => (o(), h(T, {
                          key: e.name,
                          span: v.value === "title" ? 24 : 12
                        }, {
                          default: i(() => [
                            r("div", {
                              class: b(["img-item dark", v.value]),
                              title: e.name,
                              onDragstart: (l) => M(l, e, 2),
                              onDragend: F,
                              onDblclick: (l) => x(e, 2),
                              draggable: !0
                            }, [
                              (o(), h(P("decoration-res"), {
                                width: e.width / 2,
                                height: e.height / 2,
                                src: "./static/images/decoration/" + e.name
                              }, null, 8, ["width", "height", "src"]))
                            ], 42, re)
                          ]),
                          _: 2
                        }, 1032, ["span"]))), 128))
                      ]),
                      _: 1
                    })
                  ])) : (o(), u("div", oe, t[8] || (t[8] = [
                    r("img", { src: Z }, null, -1),
                    r("div", { class: "tip" }, "资源正在开发中，敬请期待！", -1)
                  ])))
                ]),
                _: 1
              })
            ])
          ], 512), [
            [z, w.value === "decoration"]
          ]),
          D(r("div", ge, [
            r("div", le, [
              c(d, {
                modelValue: A.value,
                "onUpdate:modelValue": t[3] || (t[3] = (e) => A.value = e),
                placeholder: "搜索背景",
                clearable: "",
                onKeyup: j($, ["enter"]),
                onClear: $
              }, {
                prefix: i(() => [
                  c(g, { "icon-class": "search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            r("div", ie, [
              (o(!0), u(m, null, C(ct.value, (e, l) => (o(), u("div", {
                class: b(["type-button", { active: e.value === I.value }]),
                key: l,
                onClick: (N) => I.value = e.value
              }, f(e.label), 11, ce))), 128))
            ]),
            r("div", ye, [
              c(n, null, {
                default: i(() => [
                  K.value[I.value] ? (o(), u("div", ue, [
                    c(S, {
                      gutter: 16,
                      class: "img-items"
                    }, {
                      default: i(() => [
                        (o(!0), u(m, null, C(K.value[I.value].list, (e) => (o(), h(T, {
                          key: e.name,
                          span: 12
                        }, {
                          default: i(() => [
                            r("div", {
                              class: "img-item center",
                              title: e.name,
                              onDragstart: (l) => M(l, e, 3),
                              onDragend: F,
                              onDblclick: (l) => x(e, 3),
                              draggable: !0
                            }, [
                              (o(), h(P("background-res"), {
                                width: e.width / 2,
                                height: e.height / 2,
                                src: "./static/images/decoration/" + e.name
                              }, null, 8, ["width", "height", "src"]))
                            ], 40, ne)
                          ]),
                          _: 2
                        }, 1024))), 128))
                      ]),
                      _: 1
                    })
                  ])) : (o(), u("div", de, t[9] || (t[9] = [
                    r("img", { src: Z }, null, -1),
                    r("div", { class: "tip" }, "资源正在开发中，敬请期待！", -1)
                  ])))
                ]),
                _: 1
              })
            ])
          ], 512), [
            [z, w.value === "background"]
          ]),
          D(r("div", he, [
            r("div", se, [
              c(d, {
                modelValue: B.value,
                "onUpdate:modelValue": t[4] || (t[4] = (e) => B.value = e),
                placeholder: "搜索地图",
                clearable: "",
                onKeyup: j(J, ["enter"]),
                onClear: J
              }, {
                prefix: i(() => [
                  c(g, { "icon-class": "search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            r("div", me, [
              (o(!0), u(m, null, C(yt.value, (e, l) => (o(), u("div", {
                class: b(["type-button", { active: e.value === L.value }]),
                key: l,
                onClick: (N) => L.value = e.value
              }, f(e.label), 11, Ce))), 128))
            ]),
            r("div", Ne, [
              c(n, null, {
                default: i(() => [
                  X.value[L.value] ? (o(), u("div", fe, [
                    c(S, {
                      gutter: 16,
                      class: "img-items"
                    }, {
                      default: i(() => [
                        (o(!0), u(m, null, C(X.value[L.value].list, (e) => (o(), h(T, {
                          key: e.name,
                          span: 12
                        }, {
                          default: i(() => [
                            r("div", {
                              class: "img-item center",
                              title: e.name,
                              onDragstart: (l) => M(l, e, 4),
                              onDragend: F,
                              onDblclick: (l) => x(e, 4),
                              draggable: !0
                            }, [
                              (o(), h(P("map-res"), {
                                width: e.width / 2,
                                height: e.height / 2,
                                src: "./static/images/decoration/" + e.name
                              }, null, 8, ["width", "height", "src"]))
                            ], 40, pe)
                          ]),
                          _: 2
                        }, 1024))), 128))
                      ]),
                      _: 1
                    })
                  ])) : (o(), u("div", we, t[10] || (t[10] = [
                    r("img", { src: Z }, null, -1),
                    r("div", { class: "tip" }, "资源正在开发中，敬请期待！", -1)
                  ])))
                ]),
                _: 1
              })
            ])
          ], 512), [
            [z, w.value === "map"]
          ])
        ])
      ]);
    };
  }
});
const Fe = /* @__PURE__ */ wt(be, [["__scopeId", "data-v-93f0beeb"]]);
export {
  Fe as default
};
