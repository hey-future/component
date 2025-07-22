<template>
  <div>
    {{ chartConfig.option.name }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  chartConfig: {
    type: Object,
    required: true
  }
})
</script>