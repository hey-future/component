<template>
  <div>
    <div>配置内容</div>
    <el-input v-model="optionData.name" placeholder="请输入内容" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  optionData: {
    type: Object,
    required: true
  },
  targetId: {
    type: String,
    required: false,
    default: ''
  }
})
</script>