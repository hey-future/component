<!--
 * @Author: wangmanna
 * @Date: 2025-04-18 15:32:42
 * @LastEditors: wangmanna
 * @LastEditTime: 2025-05-19 18:17:15
 * @Description: 设计首页
-->
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
    key: 'Custom',
    name: '我的',
    widgetPackage: "MyWidget",
    id: 123,
    childList: [{
      category: "My",
      categoryIcon: "my",
      categoryName: "我的",
      id: 38,
      name: "自定义组件",
      widgetPackage: "MyWidget",
      widgets: [{
        type: 2,
        key: 'RemoteAvatar',
        title: "远程头像组件",
        chartKey: 'VRemoteAvatar',
        conKey: 'VCRemoteAvatar',
        widgetKey: 'RemoteAvatar',
        widgetPackage: "MyWidget",
        category: "My",
        categoryIcon: "my",
        categoryName: "我的",
        image: 'index.png',
        chartFrame: 'common',
        path: '/RemoteAvatar'
      }]
    }]
  },
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
