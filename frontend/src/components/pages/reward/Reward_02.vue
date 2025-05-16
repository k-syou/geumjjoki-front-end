<template>
  <div class="pt-16 pb-40">
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
      <h3 class="h3 fw-black text-gray-600" @click="goToProductList">상품목록</h3>
      <h3 class="h3 fw-black text-brown-600">구매내역</h3>
    </div>

    <!-- 카테고리 탭 -->
    <div class="w-full gap-5 text-center justify-between flex mt-5 px-5 text-gray-600">
      <h4 class="h4 w-21 h-7 rounded-lg bg-cocoa-100 text-cocoa-600">1주일</h4>
      <h4 class="h4 w-21 h-7 rounded-lg bg-gray-400 text-cocoa-600">1개월</h4>
      <h4 class="h4 w-21 h-7 rounded-lg bg-gray-400 text-cocoa-600">6개월</h4>
      <h4 class="h4 w-21 h-7 rounded-lg bg-gray-400 text-cocoa-600">1년</h4>
    </div>

    <!-- 정렬 옵션 (이용완료) -->
    <div class="self-end flex justify-end items-center gap-1 px-4 mt-5 h-7 text-base text-gray-600">
      <sort />
      <h4 class="h4 w-15 text-gray-600">이용완료</h4>
    </div>


    <!-- 구매내역 리스트 -->
    <div class="mt-6 px-10 space-y-4">
      <div
        v-for="(item, index) in status_list"
        :key="index"
        class="flex justify-between items-center border-b-2 border-dashed border-gray-500 pb-4"
      >
        <!-- 왼쪽: 상태 + 정보 -->
        <div class="flex items-center gap-3">
          <!-- 상태 원형 뱃지 -->
          <div
            class="flex flex-col items-center justify-center text-xs font-semibold w-14 h-14 rounded-full border"
            :class="statusClass(item.status)"
          >
            <h4 class="h4 fw-black badge-text whitespace-pre-line">{{ item.statusLabel }}</h4>
          </div>

          <!-- 상품 정보 -->
          <div class="text-left">
            <p class="h4 font-semibold text-cocoa-600 pb-2">상품명</p>
            <p class="caption text-gray-600 pb-2">2024.11.30</p>
            <p class="caption text-gray-600 font-semibold">100P</p>
          </div>
        </div>

        <div>
          <!-- 우측 버튼 -->
          <button class="bg-minty-400 text-gray-100 rounded-full" @click="showModal = true">
            <h4 class="h4 w-25.5 h-8">내역보기</h4>
          </button>

          <!-- 모달 컴포넌트 -->
          <PayProductModal v-if="showModal" @close="showModal = false" />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import sort from '@/components/common/icons/sort.vue'
import BackIcon from '@/components/common/icons/BackIcon.vue'
import PayProductModal from '@/components/pages/reward/PayProductModal.vue'

const router = useRouter()

const list = [1,2,3,4,5]

const status_list = [
  { status: 'done', statusLabel: '이용\n완료' },
  { status: 'active', statusLabel: '사용중' },
  { status: 'unused', statusLabel: '미사용' },
  { status: 'done', statusLabel: '이용\n완료' },
  { status: 'done', statusLabel: '이용\n완료' },
]

const statusClass = (status: string) => {
  switch (status) {
    case 'done':
      return 'text-gray-600 border-gray-400 bg-gray-200'
    case 'active':
      return 'text-gold-400 border-gray-400 bg-gray-200'
    case 'unused':
      return 'text-gold-600 border-gray-400 bg-gray-200'
    default:
      return ''
  }
}

const showModal = ref(false)

const goToProductList = () => {
  router.push({ name: 'reward' })
}

</script>

<style>
</style>