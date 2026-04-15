<template>
  <div class="baseBeverage" :style="baseStyle"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  base: any;
}>();

const selectedBase = computed(() => props.base);

const baseStyle = computed(() => ({
  backgroundColor: selectedBase.value?.color || "transparent"
}));
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>