<template>
  <div class="flex flex-col items-center px-6 w-full">
    <TopNavBar title="소비" class="mt-16" />
    <NavBar :menus="menus" />
    <!-- 총 지출 금액 -->
    <div class="w-full rounded-3xl bg-gold-200 text-cocoa-600 mb-7">
      <p class="font-bold pl-4 pt-2">총 지출 금액</p>
      <h1 class="h1 text-center fw-black mb-7.5">1,500,000원</h1>
    </div>

    <!-- 조회 조건 -->
    <div class="relative z-10 w-full">
      <div
        class="relative w-full rounded-xl bg-gold-200 text-cocoa-600 flex justify-between items-center pl-4 pr-6 z-50"
        :class="isFilterOpen ? 'bg-gold-300' : ''" @click="toggleFilter">
        <h3 class="text-xl font-bold">조회 조건</h3>
        <DownArrow />
      </div>

      <!-- 조회 조건 모달 -->
      <div v-show="isFilterOpen"
        class="absolute top-0 left-0 w-full z-30 shadow-[0px_8px_14px_2px_rgba(0,_0,_0,_0.35)] rounded-xl">
        <div class="w-full pt-12 rounded-xl bg-white text-cocoa-600 flex-row h-50">
          <p>카테고리별</p>
          <div>

          </div>
          <p>이용 기간</p>
          <div>

          </div>
        </div>
      </div>
    </div>
    <div v-show="isFilterOpen" class="fixed top-0 left-0 w-full h-screen bg-gray-300/70"></div>

    <!-- 구분선 -->
    <div class="w-full px-6 h-13 flex items-center">
      <div class="h-0.5 bg-gray-700 w-full"></div>
    </div>

    <!-- 조회 결과 -->
    <div class="w-full font-semibold">
      <div class="flex justify-between mb-9 px-6 font-black">
        <p>총 30건</p>
        <p>100,000원</p>
      </div>
      <div class="flex flex-col space-y-7">
        <div v-for="item in 5" :key="item" class="flex justify-between px-6 items-center">
          <div>
            <p>카테고리</p>
            <p>설명</p>
          </div>
          <div class="font-black">
            <p>100,000원</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-4 cursor-pointer">
      <span class="text-gray-700 font-black">더보기
      </span>
      <DownIcon />
    </div>
  </div>
</template>

<script setup lang='ts'>
import TopNavBar from '@/components/navbar/TopNavBar.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import DownArrow from '@/components/common/icons/DownArrow.vue'
import DownIcon from '@/components/common/icons/DownIcon.vue'
import { ref } from 'vue'

const menus = [
  { name: '분석', to: 'analysis' },
  { name: '현황', to: 'status' },
]

const categories = [
  "음식·유흥", "주거·통신", "생활·쇼핑", "뷰티·미용", "취미·여가", "교통·차량", "기타"
]

const isFilterOpen = ref(false)

const toggleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value
}

</script>

<style scoped></style>