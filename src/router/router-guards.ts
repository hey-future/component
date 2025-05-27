/*
 * @Description: 
 * @Autor: wangmanna
 * @Date: 2023-10-23 22:41:04
 * @LastEditors: wangmanna
 * @LastEditTime: 2025-05-16 18:12:08
 */
import type { Router } from 'vue-router';
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// NProgress.configure({ showSpinner: false }) // NProgress Configuration
export function createRouterGuards(router: Router) {
  // 前置
  router.beforeEach(async (to, from, next) => {
    // http://localhost:3000/#/chart/preview/792622755697790976?t=123
    // 把外部动态参数放入window.route.params，后续API动态接口可以用window.route?.params?.t来拼接参数
    // @ts-ignore
    if (!window.route) window.route = { params: {} }
    // @ts-ignore
    Object.assign(window.route.params, to.query)
    // NProgress.start()
    // 未登录可以访问白名单页面
    next();
  })
  router.afterEach((to, _, failure) => {
    if(to.meta&&to.meta.title) {
      document.title = '应用设计-'+to.meta.title;
    } else {
      document.title = '应用设计';
    }
    // NProgress.done()
  })

  // 错误
  router.onError((error) => {
    console.log(error, '路由错误');
    // NProgress.done()
  });
}