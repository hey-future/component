import * as Vue from 'vue'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import * as ElementPlus from 'element-plus'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { setupRouter } from '@/router'
import { createPinia } from 'pinia';
// 引入动画
import 'animate.css/animate.min.css'
import 'virtual:svg-icons-register'
// 引入iconfont字体
import '@/assets/iconfont/style.css'
import App from './App.vue'
const app = Vue.createApp(App)
const pinia = createPinia();
app.use(pinia);
// 挂载路由
setupRouter(app)
// 注册全局svg 图标组件
app.component('svg-icon', SvgIcon)
app.use(ElementPlus)
// 挂载到页面
app.mount('#app')
// 挂载到 window
window['$vue'] = app
window.Vue = Vue
window.ElementPlus = ElementPlus
// window['$message'] = ElementPlus.ElMessage
