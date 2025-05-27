import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from 'path'
function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}
// https://vite.dev/config/
export default defineConfig({
  base: './',
   // 路径重定向
   resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: pathResolve('types')
      },
      {
        find: '@',
        replacement: pathResolve('src')
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', //解决i8n警告
      }
    ],
    dedupe: ['vue']
  },
  // 全局 css 注册
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "@/styles/mixins/mixins.scss";`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    outDir: 'lib/BarCommon',
    lib: {
      entry: pathResolve('src/packages/components/Charts/Bars/BarCommon/index.ts'),
      formats: ['iife'],
      name: 'BarCommon',
      fileName: () => 'index.js'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue','element-plus'],
      output: {
        exports: 'named', //要支持CDN引入必须设置此参数！！！
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})
