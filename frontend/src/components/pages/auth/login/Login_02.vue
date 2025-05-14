<template>
  <div class="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full">
    <img src="@/assets/images/geumjjoki_logo_with_text.png" alt="logo" class="w-60 h-60">
    <div class="flex flex-col items-start justify-start gap-1">
      <p class="h3 text-cocoa-600"><span class="text-gold-600">금</span>방 흘려버릴 돈</p>
      <p class="h3 text-cocoa-600"><span class="text-gold-600">쪼</span>개서 가치 있게</p>
      <p class="h3 text-cocoa-600"><span class="text-gold-600">기</span>분 좋은 소비</p>
    </div>
  </div>
</template>`

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

setTimeout(() => {
  router.push({ name: 'home'})
}, 2000)
</script>`

<style scoped>

</style>