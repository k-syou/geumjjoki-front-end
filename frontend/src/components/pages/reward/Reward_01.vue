<template>
  <div class="py-16">
    <!-- 상단 제목 -->
    <div class="w-full relative">
      <div class="relative flex items-center h-7 mx-6">
        <h3 class="h3 mx-auto text-cocoa-600">리워드</h3>
        <button class="absolute left-0 top-1/2 transform -translate-y-1/2">
          <BackIcon color="black" class="cursor-pointer" />
        </button>
      </div>
    </div>

    <!-- 탭 메뉴 -->
    <div class="w-full flex gap-4 px-6 mt-5 h-7 text-lg font-semibold">
      <h3 class="h3 fw-black text-brown-600">상품목록</h3>
      <h3 class="h3 fw-black text-gray-600" @click="goToPurchaseHistory">구매내역</h3>
    </div>

    <!-- 포인트 -->
    <div class="self-start flex items-center justify-between h-7 w-30 bg-gold-200 rounded-full px-2.5 py-1 ml-6 mt-5">
      <img src="@/assets/images/star.png" alt="별" class="w-4.5 h-4.5" />
      <h4 class="h4">1200P</h4>
    </div>

    <!-- 카테고리 탭 -->
    <div class="w-full text-center justify-between flex mt-5 px-7.5 text-gray-600">
      <h4 class="h4 w-15 h-7 bg-cocoa-100 text-brown-600 px-2.5 rounded-lg">ALL</h4>
      <h4 class="h4 w-20">상품권</h4>
      <h4 class="h4 w-20">금융상품</h4>
      <h4 class="h4 w-20">카페</h4>
      <h4 class="h4 w-20">음식</h4>
    </div>

    <!-- 정렬 옵션 -->
    <div class="self-end flex justify-end items-center gap-1 px-6 mt-5 h-7 text-base text-gray-600">
      <sort />
      <h4 class="h4 w-19.5">금액 높은 순</h4>
    </div>

    <!-- 스크롤 가능한 제품 목록 -->
    <div class="mt-8 px-7 max-h-[520px] overflow-y-auto pb-6 scrollbar-hide">
      <div class="grid grid-cols-2 gap-x-16 gap-y-4">
        <div
          v-for="item in list"
          :key="item"
          @click="selectedProduct = item"
          class="cursor-pointer"
        >
          <!-- 이미지 -->
          <div class="w-full h-29 mb-1.5 bg-gray-300 flex items-center justify-center rounded-md">
            <h4 class="h4">제품 {{ item }}</h4>
          </div>

          <!-- 텍스트 -->
          <div class="h-9.5">
            <p class="text-xs caption">카테고리</p>
            <p class="text-xs caption">이름</p>
            <p class="text-xs caption font-bold">1000P</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 모달 -->
  <ProductModal
    v-if="selectedProduct !== null"
    :product="selectedProduct"
    @close="selectedProduct = null"
  />
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import sort from '@/components/common/icons/sort.vue'
import BackIcon from '@/components/common/icons/BackIcon.vue'
import ProductModal from '@/components/pages/reward/ProductModal.vue'

const selectedProduct = ref<number | null>(null)
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const router = useRouter()
const goToPurchaseHistory = () => {
  router.push({ name: 'reward_02' })
}

</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>