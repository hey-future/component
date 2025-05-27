# 大屏组件自定义开发说明文档

## 技术栈
Vue 3 + TypeScript + Vite

## 环境准备
工具包运行于Node环境，推荐使用最新的node版本，最低要求 Node >= 16 的版本，如果您没有安装NodeJS，可以进入NodeJS官网下载并安装。安装成功后，在命令行操作界面执行node -v和npm -v命令（Mac在terminal中执行，Windows可中可在git bash或powershell中执行），查看Node和npm版本。

如果本机已经存在Node且不想升级或降级，推荐安装nvm来管理多个Node版本管理
| 环境                 | 名称                                                     | 备注                                                         |
| -------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| **Node版本管理**         | NVM                                                       | [下载地址](https://github.com/coreybutler/nvm-windows/releases)           |
| **运行环境**         | Node 16+                                                     | [下载地址](http://nodejs.cn/download)


## 代码下载

git clone https://github.com/hey-future/component.git 

## 项目运行
```bash
# 安装依赖
cnpm install

# 启动运行
npm run dev

```
## 开发组件
### 1. 大屏设计器页面示例
引入设计器组件
```
import { Design } from '@/DmsDesign/index.js'
import '@/DmsDesign/style.css'
```
设计器组件props属性说明 设计器组件widgets属性结构
![Image text](/public/static/images/readme/1.png)

完整示例代码如下
```
<template>
  <div class="page">
    <Design :widgets="widgets" />
  </div>
</template>
<script setup lang="ts">
import { Design } from '@/DmsDesign/index.js'
import '@/DmsDesign/style.css'
const widgets = [
  {
    name: "图表",
    icon: 'chart',
    widgetPackage: 'Charts',
    childList: [
      {
        name: "柱状图",
        parentId: 1,
        category: "Bars",
        categoryName: "柱状图",
        categoryIcon: "icon-barchart",
        widgetPackage: "Charts",
        widgets: [
          {
            title: "柱状图",
            type: 1, // 组件类型 1本地组件 2 远程组件
            path: '', // 组件类型=2是有效
            key: 'BarCommon', // 组件唯一标识
            widgetKey: "BarCommon",
            chartKey: "VBarCommon", // 展示区组件的key
            conKey: "VCBarCommon", // 配置区域组件的key
            widgetPackage: "Charts", // 组件一级分类文件夹名 （基于src/packages目录下的层级）
            category: "Bars", // 组件二级分类文件夹名 基于src/packages目录下的层级）
            categoryName: "柱状图", // 组件二级分类名称
            chartFrame: "echarts", // 图表框架类型 echarts、 common 、static
            image: "barchart_x.png" // 组件封面缩略图地址 如果组件type=1的情况下,封面图片放在 public/static/images/widget 目录下  type=2的情况下,封面图片放在 组件配置的path属性目录下
          }
        ]
      }
    ]
  }
]
</script>
<style scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
```

### 2. 大屏预览页面示例
完整示例代码如下
```
<template>
  <div class="page">
    <Preview />
  </div>
</template>

<script setup lang="ts">
import { Preview } from '@/DmsDesign/index.js'
import '@/DmsDesign/style.css'
</script>
<style scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
```


### 3. 组件目录规范
所有的组件文件都放在src/packages/components目录下
每个组件必须包含以下文件
组件目录名按照在/src/views/index/index.vue 中配置的widgets属性数据中的层级结构目录创建

|  键名  | 键值说明说明  |
| --------- | :--- |
| widgetPackage | 一级文件夹名 |
| category | 二级文件夹名 |
| widgetKey | 三级文件夹名 |

|  文件名称  | 说明  |
| --------- | :--- |
|  index.ts   | 入口文件 |
|  index.vue  | 组件展示vue文件 |
|  config.vue | 组件配置vue文件 |
|  config.ts  | 组件属性配置文件 |

## 发布组件
### 1.组件打包
当组件开发完成后，需要将其打包后上传到gis组件管理上使用，执行以下命令开始打包组件
组件打包前需要根据开发的组件代码位置对应修改下pack.config.ts文件里的 entry【入库文件地址】 和 name【组件名称】属性
```
  outDir: 'lib/BarCommon', // 组件打包输出的文件目录
  lib: {
    // 开发的组件文件打包入口
    entry: pathResolve('src/packages/components/Charts/Bars/BarCommon/index.ts'),
    formats: ['iife'],
    // 组件名称
    name: 'BarCommon',
    fileName: () => 'index.js'
  }
```
运行打包命令
```
npm run pack
```