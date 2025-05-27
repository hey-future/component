export const getUUID = (randomLength = 6) => {
  return 'dms_' + Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(32)
}
import { cloneDeep } from 'lodash'
import type { PublicConfigType } from './index.d'
// 图表初始配置(px)
export const chartInitConfig = {
  x: 0,
  y: 0,
  w: 500,
  h: 300,
  // 不建议动 offset
  offsetX: 0,
  offsetY: 0,
}
export enum BaseEvent {
  // 点击
  ON_CLICK = 'click',
  // 双击
  ON_DBL_CLICK = 'dblclick',
  // 移动
  ON_MOUSE_MOVE = 'mousemove',
  // 移入
  ON_MOUSE_ENTER = 'mouseenter',
  // 移出
  ON_MOUSE_LEAVE = 'mouseleave'
}
// vue3 生命周期事件
export enum EventLife {
  // 渲染之后
  VNODE_MOUNTED = 'vnodeMounted',
  // 渲染之前
  VNODE_BEFORE_MOUNT = 'vnodeBeforeMount'
}
export const events =  {
  baseEvent: {
    [BaseEvent.ON_CLICK]: {
      open: true,
      customFunction: undefined,
      linkComponents: [],
      arguments: {}, // 回调参数
      action: [] // 交互动作
    },
    [BaseEvent.ON_DBL_CLICK]: {
      open: false,
      customFunction: undefined,
      linkComponents: [],
      arguments: {}, // 回调参数
      action: [] // 交互动作
    },
    [BaseEvent.ON_MOUSE_MOVE]: {
      open: false,
      customFunction: undefined,
      linkComponents: [],
      arguments: {}, // 回调参数
      action: [] // 交互动作
    },
    [BaseEvent.ON_MOUSE_ENTER]: {
      open: false,
      customFunction: undefined,
      linkComponents: [],
      arguments: {}, // 回调参数
      action: [] // 交互动作
    },
    [BaseEvent.ON_MOUSE_LEAVE]: {
      open: false,
      customFunction: undefined,
      linkComponents: [],
      arguments: {}, // 回调参数
      action: [] // 交互动作
    }
  },
  advancedEvents: {
    [EventLife.VNODE_BEFORE_MOUNT]: {
      open: false,
      customFunction: undefined,
      arguments: {}, // 回调参数
      action: [] // 交互动作
    },
    [EventLife.VNODE_MOUNTED]: {
      open: false,
      customFunction: undefined,
      arguments: {}, // 回调参数
      action: [] // 交互动作
    }
  },
  interactEvents: []
}
// 请求基础属性
export const requestConfig = {
  dataFrom: 0, // 数据来源 0 数据接口 1 数据容器（数据集）
  fromIds: [], // 存放数据容器数据集ID
  requestDataType: 0,
  requestHttpType: 'get',
  requestUrl: '',
  firstAutoRequest: true,
  requestInterval: undefined,
  requestIntervalUnit: 'second',
  requestContentType: 0,
  requestParamsBodyType: 'none',
  requestSQLContent: {
    sql: 'select * from  where'
  },
  requestParams: {
    Body: {
      'form-data': [],
      'x-www-form-urlencoded': [],
      json: [],
      jsonStr: '',
      xml: ''
    },
    Header: [{
      key: '',
      value: '',
      valueType: 'custom'
    }],
    Params: {
      path: [], // 路径变量
      query: [{
        key: '',
        value: '',
        valueType: 'custom'
      }] // 参数
    }
  },
  isBackend: false
}
export class PublicConfigClass implements PublicConfigType {
  public id = getUUID()
  public setAuth = false
  public hasGrant = true
  public isGroup = false
  // 是否是容器组件
  public isContainer = false
  // 基本信息
  public attr = { ...chartInitConfig, zIndex: -1 }
  // 基本样式
  public styles = {
    // 使用滤镜
    filterShow: false,
    // 色相
    hueRotate: 0,
    // 饱和度
    saturate: 1,
    // 对比度
    contrast: 1,
    // 亮度
    brightness: 1,
    // 透明
    opacity: 1,
    // 旋转
    rotateZ: 0,
    rotateX: 0,
    rotateY: 0,
    // 倾斜
    skewX: 0,
    skewY: 0,
    // 混合模式
    blendMode: 'normal',
    // 动画
    animations: []
  }
  // 预览
  public preview = {
    overFlowHidden: false
  }
  // 状态
  public status = {
    lock: false,
    hide: false
  }
  // 请求
  public request = cloneDeep(requestConfig)
  // 接口数据回调
  public callback = {
    type: 'link', // link 链接地址 page 大屏id components 组件
    condition: [],
    url: '',
    pageId: '', //大屏id,
    componentId: '' // 大屏组件id
  }
  public auth = [] //权限控制显示隐藏
  // 数据过滤
  public filter = []
  // 事件
  public events = cloneDeep(events)
}