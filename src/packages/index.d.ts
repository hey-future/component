// 组件实例类
export interface PublicConfigType {
  id: string
  hasGrant: boolean // 是否有权限
  setAuth: boolean // 是否能够设置权限，开启后显示到组织架构分配权限设置界面
  isGroup: boolean
  innerGroup?: boolean // 是否在分组内
  isTemplate?: boolean
  isContainer: boolean
  // 判断组件关闭自动接口请求是否已经首次执行
  autoRequest?: boolean
  attr: { x: number; y: number; w: number; h: number; zIndex: number; offsetX: number; offsetY: number, openScroll?:boolean, overflow?: string, style?:any }
  styles: {
    [FilterEnum.FILTERS_SHOW]: boolean
    [FilterEnum.OPACITY]: number
    [FilterEnum.SATURATE]: number
    [FilterEnum.CONTRAST]: number
    [FilterEnum.HUE_ROTATE]: number
    [FilterEnum.BRIGHTNESS]: number
    [FilterEnum.ROTATE_Z]: number
    [FilterEnum.ROTATE_X]: number
    [FilterEnum.ROTATE_Y]: number
    [FilterEnum.SKEW_X]: number
    [FilterEnum.SKEW_Y]: number
    [FilterEnum.BLEND_MODE]: string
    // 动画
    animations: string[]
  }
  componentList?: [],
  groupList?:[],
  preview?: {
    // 预览超出隐藏
    overFlowHidden?: boolean
  }
  filter?: filterType[]
  status: StatusType
  interactActions?: InteractActionsType[],
  events: {
    baseEvent?: {
      [K in BaseEvent]?: any
    }
    advancedEvents?: {
      [K in EventLife]?: any
    },
    customEvents?: {
      [K in string]?: any
    },
    interactEvents?: {
      [InteractEvents.INTERACT_ON]: InteractEventOn | undefined
      [InteractEvents.INTERACT_COMPONENT_ID]: string | undefined
      [InteractEvents.INTERACT_FN]: { [name: string]: string },
      [T: string]: any
    }[]
  },
  callback?: {
    [T: string]: any
  },
  auth?: any,
  loginEvents?: {
    [T: string]: any
  }
}