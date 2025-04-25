<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">메인 페이지</h1>
      <div class="flex items-center">
        <span class="mr-2">환영합니다!</span>
        <LogoutButton />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <RouterLink to="/">
        <Button text="홈으로" bgColor="icy-blue" textColor="white" size="medium" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { RouterLink } from 'vue-router'
import Button from '../common/components/Button.vue'
import LogoutButton from '../components/LogoutButton.vue'
</script>

<style></style>
