interface Window {
  ElementPlus: any,
  Vue: any,
  $currentUserInfo: any
  axiosInstance:any
  $components:any //大屏组件
  Base64:any
  // 语言
  $t: any
  $vue: any
  // 键盘按键记录
  $KeyboardActive?: { [T: string]: boolean }
  onKeySpacePressHold?: Function
  _AMapSecurityConfig: any
  AMap: any,
  AMapUI: any,
  // 编辑 JSON 的存储对象
  opener: any,
  heyCloudAccountId: string,
  tinymce: any,
  RouterMatching: any,
  APPID: number,
  isPublishRouter: any,
  [T: string]: any
}

declare type Recordable<T = any> = Record<string, T>
