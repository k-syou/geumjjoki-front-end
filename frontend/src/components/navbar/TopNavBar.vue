<template>
  <div class="relative w-full h-7 flex justify-center items-center">
    <button class="absolute left-0 top-1/2 transform -translate-y-1/2">
      <BackIcon color="black" class="cursor-pointer" />
    </button>
    <h3 class="text-center h3">{{ title }}</h3>
  </div>
</template>

<script setup lang='ts'>
import {defineProps} from 'vue'
import BackIcon from '@/components/common/icons/BackIcon.vue';

const {title} = defineProps<{
    title: string
}>()

</script>

<style scoped>
</style>