<template>
  <div class="w-full flex justify-start gap-6 my-7 pl-3">
    <div
      v-for="(menu, idx) in menus"
      :key="menu.name"
      @click="active = idx"
      class="cursor-pointer h3 fw-black"
      :class="active === idx 
        ? 'text-brown-600'
        : 'text-gray-600'"
    >
      {{ menu.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menus = [
    { name: '분석' },
    { name: '현황' },
]
const active = ref(0)
</script>
