<template>
  <div class="flex flex-col items-center px-6 w-full">
    <TopNavBar title="소비" class="mt-16" />
    <NavBar :menus="menus" />
    <!-- 나의 지출 내역 개요 -->
    <div
      class="rounded-4xl shadow-[0px_8px_14px_2px_rgba(0,_0,_0,_0.35)] justify-items-center px-3 pt-0 pb-7.5 mb-4 w-full">
      <div class="">
        <h1 class="h1 text-center text-cocoa-600 fw-black my-7">1,500,000원</h1>
      </div>
      <div class="w-full rounded-3xl bg-gold-200 px-4.5 py-5 text-cocoa-600 h4">
        <p>나의 1월 소비는</p>
        <p>지난달 대비
          <span v-if="isIncrease" :class="{ 'text-red-600': isIncrease }">▲120,000원</span>
          <span v-else :class="{ 'text-naver-green-200': !isIncrease }">▼120,000원</span>
          <span v-if="isIncrease"> 늘었어요</span>
          <span v-else> 줄었어요</span>
        </p>
      </div>
    </div>

    <div class="flex items-center space-x-2 cursor-pointer">
      <span class="text-[#757575] font-black">나의 지출 내역 자세히 보기
      </span>
      <UpIcon />
    </div>

    <!-- 지출 카테고리 -->
    <div class="mb-8 w-full mt-4">
      <div class="w-full justify-start mb-2">
        <p class="h3 fw-black">금쪽이님</p>
        <p class="h4">이번달 나의 지출은?</p>
      </div>
      <div class="-mx-6 mt-6.5">
        <Swiper :modules="[FreeMode]" freeMode :slides-per-view="'auto'" :slides-offset-before="24"
          :slides-offset-after="0" :space-between="24" grabCursor class="px-4 py-2">
          <SwiperSlide v-for="item in categories" :key="item.id"
            class="!w-[160px] !h-[160px] rounded-4xl bg-gold-100 p-2">
            <p class="p-4 mb-3 font-black text-cocoa-600">{{ item.title }}</p>
            <h3 class="h3 text-center text-cocoa-600 fw-black">
              {{ item.amount.toLocaleString() }}원
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <!-- 카테고리 분류하기 -->
    <div class="w-full h4 text-cocoa-600">
      <p class="mb-2">분류가 안 된 항목이 있나요?</p>
      <div class="rounded-2xl bg-gold-200 p-4.5 py-3">
        <h4 class="font-bold">지출 항목을 카테고리별로 정리해보세요</h4>
        <h4 class="font-black">카테고리 분류하기</h4>
      </div>
    </div>
  </div>




</template>

<script setup lang='ts'>
import TopNavBar from '@/components/navbar/TopNavBar.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import UpIcon from '@/components/common/icons/UpIcon.vue'

import { ref } from 'vue'

const isIncrease = ref(false)

const categories = ref([
  { id: 1, title: '카테고리 1', amount: 100000 },
  { id: 2, title: '카테고리 2', amount: 200000 },
  { id: 3, title: '카테고리 3', amount: 300000 },
  { id: 4, title: '카테고리 4', amount: 300000 },
  { id: 5, title: '카테고리 5', amount: 300000 },
])

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const menus = [
  { name: '분석', to: 'analysis' },
  { name: '현황', to: 'status' },
]

</script>

<style scoped></style>