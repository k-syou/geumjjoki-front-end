<template>
  <i :class="`fill-${props.color}`">
    <svg :width="props.width" :height="props.height" :viewBox="`0 0 ${props.width} ${props.height}`" fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0.351562 1.25V18.75H7.08461V9.99461L12.9437 18.75H19.6875V1.25H12.9437V9.99461L7.08461 1.25H0.351562Z"
        fill="inherit" />
    </svg>
  </i>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'inherit'
  },
  width: {
    type: String,
    default: '20'
  },
  height: {
    type: String,
    default: '20'
  }
})
</script>

<style scoped></style>
