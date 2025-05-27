<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
<style lang="scss" scoped>
.el-config-provider {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>