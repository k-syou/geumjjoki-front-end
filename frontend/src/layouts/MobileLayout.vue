<template>
  <div class="min-h-screen mx-auto max-w-md relative">
    <slot />
    <MenuBar v-if="!isLoginPage" />
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MenuBar from '../components/menuBar/MenuBar.vue';

const route = useRoute();
const isLoginPage = computed(() => route.path === '/auth/login');
</script>
<style>
</style>
