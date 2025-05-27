import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import requireTransform from 'vite-plugin-require-transform';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression'
// import monacoEditorPlugin from 'vite-plugin-monaco-editor';
 
import path from 'path'
const prefix = `monaco-editor/esm/vs`
function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}
const depChunkFileNames = ['element-plus','crypto-js','antv','lodash','naive-ui','echarts','wangeditor','watergis','mapbox','draggable','proj4','codemirror','three','screenfull','html2canvas','highlight','video','clipboard','wavesurfer','amap']
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
    vueJsx(),
    // monacoEditorPlugin({}),
    requireTransform({
      fileRegex: /\heycloud-vue3.js$/,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    visualizer({
      filename: './dist/stats.html',
      title: 'Bundle Visualizer'
    }),
    // 压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  server: {
    port: 3003,
    host: '0.0.0.0',
    proxy: {   
      '^/dev-api': {
        target: 'http://gis.heyfuture.com.cn/',
        // target: 'http://bi.heyfuture.com.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, ''),
        configure: (proxy) => {
          // proxy 是 'http-proxy' 的实例
          proxy.on('proxyRes', (proxyReq: any, req: any) => {
            // 由于vue中使用了body-parser 导致http中的body被序列化两次，从而使得配置代理后后端无法获取body中的数据
            const cookies = proxyReq.headers['set-cookie'];
            if (Array.isArray(cookies)) {
              const newCookies = cookies.map((cookie) => cookie.replace(/Path=\/dms/, 'Path='));
              proxyReq.headers['set-cookie'] = newCookies;
            }
            if (req.body) {
              const reg = new RegExp('application/json')
              if (reg.test(proxyReq.getHeader('Content-Type'))) {
                const bodyData = JSON.stringify(req.body)
                proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
                // stream the content
                proxyReq.write(bodyData)
              }
            }
          })
        }
      }
    }
  },
  build: {
    target: 'es2015',
    outDir: 'design',
    // minify: 'terser', // 如果需要用terser混淆，可打开这两行
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: pathResolve('index.html')    
      },
      output: {
        entryFileNames: 'static/js/[name]-entry.js',
        chunkFileNames: (chunkInfo: any) => {
          const { facadeModuleId, name, moduleIds } = chunkInfo
          if (facadeModuleId) {
            const facadeModuleIdArr = facadeModuleId.split("/")
            // 根据chunk的facadeModuleId（入口模块的相对路径）生成chunk的文件名
            if (facadeModuleIdArr.includes('packages')) {
              const fileName = facadeModuleIdArr.length>2?facadeModuleIdArr[facadeModuleIdArr.length - 2]+'/': "";
              return `js/packages/${fileName}[name].js`;
            }
          }
          if (depChunkFileNames.includes(name)) {
            return `js/deps/[name].js`
          }
          return `js/[name].[hash].js`;
        },
        assetFileNames: (chunkInfo: any) => {
          if (['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(path.extname(chunkInfo.name))) {
            return `static/images/[ext]/[name].[ext]`
          }
          if (['.eot', '.ttf', '.ttc', '.otf', '.woff'].includes(path.extname(chunkInfo.name))) {
            return `static/fonts/[name].[ext]`
          }
          return `static/[ext]/[name].[ext]`
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            for (let i=0; i<depChunkFileNames.length; i++) {
              if (id.includes(depChunkFileNames[i]))
                return depChunkFileNames[i]
            }
            return 'vendor'
          }
          if (id.includes('jsonWorker')) {
            return `${prefix}/language/json/json.worker`
          }
          if (id.includes('cssWorker')) {
            return `${prefix}/language/css/css.worker`
          }
          if (id.includes('htmlWorker')) {
            return `${prefix}/language/html/html.worker`
          }
          if (id.includes('tsWorker')) {
            return `${prefix}/language/typescript/ts.worker`
          }
          if (id.includes('editorWorker')) {
            return `${prefix}/language/editor/editor.worker`
          }
        },
        experimentalMinChunkSize: 10 * 1024, // 单位b, 合并较小模块
      }
    },
    reportCompressedSize: true, // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    chunkSizeWarningLimit: 2048 // chunk 警告大小
  }
})
