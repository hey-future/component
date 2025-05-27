import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './router-guards'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
    meta: { title: '' }
  },
  {
    path: '/local/:id(.*)*',
    name: 'LocalPreview',
    component: () => import('@/views/preview/index.vue'),
    meta: { title: '本地预览' }
  },
  // {
  //   path: '/widgets',
  //   name: 'widgets',
  //   component: () => import('@/views/index/index.vue'),
  //   meta: { title: '' },
  //   props: {
  //     widgets: [{
  //       key: 'Custom',
  //       name: '我的',
  //       widgetPackage: "MyWidget",
  //       id: 123,
  //       childList: [{
  //         category: "My",
  //         categoryIcon: "my",
  //         categoryName: "我的",
  //         id: 38,
  //         name: "自定义组件",
  //         widgetPackage: "MyWidget",
  //         widgets: [{
  //           type: 2,
  //           key: 'RemoteAvatar',
  //           title: "远程头像组件",
  //           chartKey: 'VRemoteAvatar',
  //           conKey: 'VCRemoteAvatar',
  //           widgetKey: 'RemoteAvatar',
  //           widgetPackage: "MyWidget",
  //           category: "My",
  //           categoryIcon: "my",
  //           categoryName: "我的",
  //           image: 'index.png',
  //           chartFrame: 'common',
  //           path: '/RemoteAvatar'
  //         }]
  //       }]
  //     },{
  //       "id": 1,
  //       "name": "图表",
  //       "icon": 'chart',
  //       "widgetPackage": 'Charts',
  //       "childList": [
  //         {
  //           "id": 14,
  //           "name": "柱状图",
  //           "parentId": 1,
  //           "category": "Bars",
  //           "categoryName": "柱状图",
  //           "categoryIcon": "icon-barchart",
  //           "widgetPackage": "Charts",
  //           "childList": null,
  //           "widgets": [
  //             {
  //               "id": 101,
  //               "title": "柱状图",
  //               "status": 1,
  //               "version": null,
  //               "groupId": 14,
  //               "path": null,
  //               "photo": null,
  //               "preview": null,
  //               "picture": null,
  //               "icon": null,
  //               "visible": null,
  //               "uuid": null,
  //               "userId": 108,
  //               "userGroup": 1,
  //               "createDate": 1730103056,
  //               "modifyDate": 1730978420,
  //               "active": 1,
  //               "type": {
  //                 "value": 1
  //               },
  //               "widgetKey": "BarCommon",
  //               "chartKey": "VBarCommon",
  //               "conKey": "VCBarCommon",
  //               "category": "Bars",
  //               "categoryName": "柱状图",
  //               "categoryIcon": "icon-barchart",
  //               "widgetPackage": "Charts",
  //               "chartFrame": "echarts",
  //               "image": "barchart_x.png",
  //               "isTemplate": null
  //             },
  //             {
  //               "id": 102,
  //               "title": "柱状图-渐变色",
  //               "status": 1,
  //               "version": null,
  //               "groupId": 14,
  //               "path": null,
  //               "photo": null,
  //               "preview": null,
  //               "picture": null,
  //               "icon": null,
  //               "visible": null,
  //               "uuid": null,
  //               "userId": 108,
  //               "userGroup": 1,
  //               "createDate": 1730103056,
  //               "modifyDate": 1730978421,
  //               "active": 1,
  //               "type": {
  //                 "value": 1
  //               },
  //               "widgetKey": "BarGradients",
  //               "chartKey": "VBarGradients",
  //               "conKey": "VCBarGradients",
  //               "category": "Bars",
  //               "categoryName": "柱状图",
  //               "categoryIcon": "icon-barchart",
  //               "widgetPackage": "Charts",
  //               "chartFrame": "echarts",
  //               "image": "barchart_gradient.png",
  //               "isTemplate": null
  //             },
  //             {
  //               "id": 103,
  //               "title": "柱状图-堆叠图",
  //               "status": 1,
  //               "version": null,
  //               "groupId": 14,
  //               "path": null,
  //               "photo": null,
  //               "preview": null,
  //               "picture": null,
  //               "icon": null,
  //               "visible": null,
  //               "uuid": null,
  //               "userId": 108,
  //               "userGroup": 1,
  //               "createDate": 1730103056,
  //               "modifyDate": 1731374044,
  //               "active": 1,
  //               "type": {
  //                 "value": 1
  //               },
  //               "widgetKey": "BarStacking",
  //               "chartKey": "VBarStacking",
  //               "conKey": "VCBarStacking",
  //               "category": "Bars",
  //               "categoryName": "柱状图",
  //               "categoryIcon": "icon-barchart",
  //               "widgetPackage": "Charts",
  //               "chartFrame": "echarts",
  //               "image": "barchart_stacking.png",
  //               "isTemplate": null
  //             },
  //             {
  //               "id": 104,
  //               "title": "柱状图-对比图",
  //               "status": 1,
  //               "version": null,
  //               "groupId": 14,
  //               "path": null,
  //               "photo": null,
  //               "preview": null,
  //               "picture": null,
  //               "icon": null,
  //               "visible": null,
  //               "uuid": null,
  //               "userId": 108,
  //               "userGroup": 1,
  //               "createDate": 1730103056,
  //               "modifyDate": 1731374050,
  //               "active": 1,
  //               "type": {
  //                 "value": 1
  //               },
  //               "widgetKey": "BarComparison",
  //               "chartKey": "VBarComparison",
  //               "conKey": "VCBarComparison",
  //               "category": "Bars",
  //               "categoryName": "柱状图",
  //               "categoryIcon": "icon-barchart",
  //               "widgetPackage": "Charts",
  //               "chartFrame": "echarts",
  //               "image": "barchart_comparison.png",
  //               "isTemplate": null
  //             },
  //             {
  //               "id": 105,
  //               "title": "横向柱状图",
  //               "status": 1,
  //               "version": null,
  //               "groupId": 14,
  //               "path": null,
  //               "photo": null,
  //               "preview": null,
  //               "picture": null,
  //               "icon": null,
  //               "visible": null,
  //               "uuid": null,
  //               "userId": 108,
  //               "userGroup": 1,
  //               "createDate": 1730103056,
  //               "modifyDate": 1731374055,
  //               "active": 1,
  //               "type": {
  //                 "value": 1
  //               },
  //               "widgetKey": "BarCrossrange",
  //               "chartKey": "VBarCrossrange",
  //               "conKey": "VCBarCrossrange",
  //               "category": "Bars",
  //               "categoryName": "柱状图",
  //               "categoryIcon": "icon-barchart",
  //               "widgetPackage": "Charts",
  //               "chartFrame": "echarts",
  //               "image": "bar_y.png",
  //               "isTemplate": null
  //             },
  //             {
  //               "id": 106,
  //               "title": "柱状图-对称对比图",
  //               "status": 1,
  //               "version": null,
  //               "groupId": 14,
  //               "path": null,
  //               "photo": null,
  //               "preview": null,
  //               "picture": null,
  //               "icon": null,
  //               "visible": null,
  //               "uuid": null,
  //               "userId": 108,
  //               "userGroup": 1,
  //               "createDate": 1730103056,
  //               "modifyDate": 1731374066,
  //               "active": 1,
  //               "type": {
  //                 "value": 1
  //               },
  //               "widgetKey": "BarSymmetryComparison",
  //               "chartKey": "VBarSymmetryComparison",
  //               "conKey": "VCBarSymmetryComparison",
  //               "category": "Bars",
  //               "categoryName": "柱状图",
  //               "categoryIcon": "icon-barchart",
  //               "widgetPackage": "Charts",
  //               "chartFrame": "echarts",
  //               "image": "bar_symmetry_comparison.png",
  //               "isTemplate": null
  //             },
  //             {
  //               "id": 107,
  //               "title": "胶囊柱图",
  //               "status": 1,
  //               "version": null,
  //               "groupId": 14,
  //               "path": null,
  //               "photo": null,
  //               "preview": null,
  //               "picture": null,
  //               "icon": null,
  //               "visible": null,
  //               "uuid": null,
  //               "userId": 108,
  //               "userGroup": 1,
  //               "createDate": 1730103056,
  //               "modifyDate": 1731374067,
  //               "active": 1,
  //               "type": {
  //                 "value": 1
  //               },
  //               "widgetKey": "CapsuleChart",
  //               "chartKey": "VCapsuleChart",
  //               "conKey": "VCCapsuleChart",
  //               "category": "Bars",
  //               "categoryName": "柱状图",
  //               "categoryIcon": "icon-barchart",
  //               "widgetPackage": "Charts",
  //               "chartFrame": "common",
  //               "image": "capsule.png",
  //               "isTemplate": null
  //             }
  //           ]
  //         }
  //       ]
  //     }]
  //   }
  // },
  // {
  //   path: '/preview/:id(.*)*',
  //   name: 'Preview',
  //   component: () => import('@/views/preview/index.vue'),
  //   meta: { title: '预览' }
  // },
  // {
  //   path: '/local/:id(.*)*',
  //   name: 'LocalPreview',
  //   component: () => import('@/views/preview/index.vue'),
  //   meta: { title: '本地预览' }
  // },
  // {
  //   path: '/publish/:id(.*)*',
  //   name: 'PublishPreview',
  //   component: () => import('@/views/preview/index.vue'),
  //   meta: { title: '发布预览' }
  // }
]
export const asyncRoutes: Array<RouteRecordRaw> = [

]

const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})
export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router)
}
/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/" });
}
export default router