<template>
  <!-- ✨ 흐릿한 흰 배경 -->
  <div
    class="fixed inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <!-- 모달 박스 -->
    <div class="bg-gray-200 rounded-3xl w-90 h-170 px-10 pt-14.5 shadow-xl text-center">

      <!-- 이미지 영역 -->
      <div class="bg-gray-400 rounded-md w-full h-79.5 flex items-center justify-center border border-gray-600">
        <h3 class="h3 text-cocoa-500">제품 이미지</h3>
      </div>

      <!-- 상품명 / 가격 -->
      <div class="pt-5 pb-2">
        <div class="flex justify-between h-9">
          <h4 class="h4 text-cocoa-500">상품명</h4>
          <h4 class="h4 text-cocoa-500">1000P</h4>
        </div>

        <!-- 상품 설명 -->
        <div class="bg-gray-300 w-full h-28.25">
          <div class="w-15 h-9">
            <h4 class="h4 text-cocoa-500 text-left">상품설명</h4>
          </div>
          <container>
            <h4 class="h4 text-cocoa-500">상품설명을 적어주세요</h4>
          </container>
        </div>
      </div>
      <!-- 버튼 영역 -->
      <div class="h-17 flex gap-3 justify-between mx-auto">
        <button @click="$emit('close')" class="bg-gray-600 w-22 h-17 rounded-lg">
        <h3 class="h3 text-cocoa-500">닫기</h3>
        </button>

        <button class="bg-gold-400 w-45 h-17 rounded-lg" @click="goToPurchaseHistory">
        <h3 class="h3 text-cocoa-500">구매하기</h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goToPurchaseHistory() {
  router.push({ name: 'reward_02' })
}
</script>
