<template>
  <main class="px-5 w-full py-16 overflow-hidden">
    <!-- header -->
    <header class="w-full flex justify-center items-center mb-5 relative">
      <back-icon @click="goBack" color="black" class="absolute top-1/2 -translate-y-1/2 left-0"></back-icon>
      <span class="h3">지난 챌린지</span>
    </header>
    <!-- content -->
    <section class="px-5">
      <!-- filtering navbar -->
      <nav class="flex gap-4 h3 fw-black">
        <button
          v-for="menu in challengeNavMenus"
          :key="menu.title"
          :class="menu.isActive ? 'text-brown-600' : 'text-gray-600'"
          class="w-12 text-center cursor-pointer"
          @click="filteredChllengeData(menu)"
          >
          {{ menu.title }}
        </button>
      </nav>
      <!-- total count block -->
      <div class="w-full flex justify-end h4 fw-black text-gray-600 pr-2.5 mb-3.5">
        <span class="block w-15 text-center">총 {{ beforeChallengeData.length }}개</span>
      </div>

      <!-- challenge data block -->
      <div class="h4 text-cocoa-600 flex flex-col gap-6 pb-20 h-[700px] scrollbar-hide overflow-y-scroll">
        <div v-for="data in beforeChallengeData" :key="data.id" @click="goDetail(data.id)"
          class="flex justify-between border-b-2 border-dashed border-gray-600 pb-1">
          <div class="flex flex-col items-center gap-2">
            <div class="w-15 h-15 bg-gold-100 rounded-full"></div>
            <div class="h4 fw-black">{{ data.category }}</div>
          </div>
          <div class="flex flex-col gap-1 justify-center">
            <div class="h4">{{ data.title }}</div>
            <div class="caption fw-bold text-gray-600">{{ data.point }}P</div>
            <div class="caption fw-bold text-gray-600">{{ data.startDate }} - {{ data.endDate }}</div>
          </div>
          <div
            class="w-20 flex items-center justify-center py-1 px-2 rounded-full h-fit my-auto"
            :class="data.status === '성공' ? 'bg-minty-400' : 'bg-gray-400'">
            <div :class="data.status === '성공' ? 'text-white' : 'text-black'">
              {{ data.status }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import BackIcon from '@/components/common/icons/BackIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const challengeNavMenus = ref([
  {
    title: '전체',
    query: 'all',
    isActive: true,
  },
  {
    title: '성공',
    query: 'success',
    isActive: false,
  },
  {
    title: '실패',
    query: 'failed',
    isActive: false,
  }
])

const beforeChallengeData = ref([
  {
    id: 1,
    title: '배달음식 5만원 줄이기',
    startDate: '25.01.01',
    endDate: '25.01.31',
    category: '카테고리명',
    image: '',
    status: '성공',
    point: 200,
  },
  {
    id: 2,
    title: '배달음식 5만원 줄이기',
    startDate: '25.01.01',
    endDate: '25.01.31',
    category: '카테고리명',
    image: '',
    status: '실패',
    point: 200,
  },
  {
    id: 3,
    title: '배달음식 5만원 줄이기',
    startDate: '25.01.01',
    endDate: '25.01.31',
    category: '카테고리명',
    image: '',
    status: '성공',
    point: 200,
  },
  {
    id: 4,
    title: '배달음식 5만원 줄이기',
    startDate: '25.01.01',
    endDate: '25.01.31',
    category: '카테고리명',
    image: '',
    status: '실패',
    point: 200,
  },
])

const filteredChllengeData = (menu: any) => {
  challengeNavMenus.value.forEach((cMenu) => {
    cMenu.isActive = menu.title === cMenu.title ? true : false
  })
  // filter 기능 구현 필요
}

const goBack = () => {
  router.back()
}

const goDetail = (id: number) => {
  router.push(
    {
      name: 'challenge_detail',
      params: {
        id: id
      }
    }
  )
}

</script>

<style scoped></style>