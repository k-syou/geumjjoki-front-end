<template>
  <div class="min-h-screen mx-auto max-w-md relative">
    <slot />
    <MenuBar />
  </div>
</template>

<script setup lang="ts">
import MenuBar from '@/components/navbar/MenuBar.vue'
</script>

<style>
</style>
