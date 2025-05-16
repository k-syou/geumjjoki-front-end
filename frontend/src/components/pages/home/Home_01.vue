<template>
  <!-- 노란 박스 부분 -->
  <section class="bg-gold-100 w-full rounded-3xl py-12.5 shadow-menu-bar">
    <!-- 타이틀 -->
    <div class="w-full h-12 h3 fw-black flex items-center justify-between pl-6 pr-11">
      <div class="flex items-center">
        <img src="@/assets/images/geumjjoki_logo.png" width="32px" height="32px" alt="">
        <h3 class="h3 fw-black text-gold-600">GEUMJJOKI</h3>
      </div>
      <div>
        <HambergerIcon @click = 'goHome2' class="cursor-pointer" />
      </div>
    </div>


    <!-- 프로필 부분 -->
    <div class="mx-auto w-fit flex flex-col gap-5">
      <h3 class="w-full h-12 h3"><span class="h2 fw-bold">금쪼기님</span> 반갑습니다.</h3>
      <div class="w-41 h-7 px-3 bg-gold-200 rounded-2xl flex items-center justify-between">
        <img src="@/assets/images/point.png" alt="point">
        <p class="block h4">1200P</p>
      </div>
      <!-- 카드 2개 -->
      <section class="w-90 h-31 flex gap-8">
        <div class="w-41 h-31 bg-gold-200 rounded-2xl py-[27px] px-5">
          <ExpenseIcon />
          <p class="caption fw-bold mt-2"> 5월 소비금액</p>
          <p class="h4 fw-black "> 1,500,000,000</p>
        </div>
        <div class="w-41 h-31 bg-gold-200 rounded-2xl py-[27px] px-5">
          <ChallengeIcon />
          <p class="caption fw-bold mt-2"> 5월 챌린지 현황</p>
          <p class="h4 fw-black "> 13건</p>
        </div>
      </section>
    </div>
  </section>

  <!-- 리워드, 챌린지 부분 -->
  <section class="w-full mt-5 ps-8 pe-4">
    <!-- 리워드 -->
    <div class="w-full h-6 mt-6 mb-3 flex items-center justify-between">
      <h1 class="h3">리워드를 교환하세요</h1>
      <div class="flex items-center ">
        <h4 class="cursor-pointer h4 fw-black text-gray-600"> 더보기 </h4>
        <RightArrow color = 'gray-600' width = '12' height = '12' />
      </div>
    </div>
    <!-- 캐러셀 -->
    <div class="w-fit items-center mt-3">
      <div class="flex gap-4">
        <div v-for="(reward, index) in rewards" :key="index" >
          <img :src="reward.image" alt="gifticon" class="w-36 h-25">
          <p class="caption fw-bold mt-1">{{ reward.category }}</p>
          <p class="caption fw-bold">{{ reward.name }}</p>
          <p class="caption fw-bold">{{ reward.point }}</p>
        </div>
      </div>
    </div>

    <!-- 챌린지 -->
    <div class="w-full h-6 mb-3 flex items-center justify-between mt-20">
      <h1 class="h3">챌린지를 도전하세요</h1>
      <div class="flex items-center ">
        <h4 @click = "goChallenge1" class="cursor-pointer h4 fw-black text-gray-600"> 더보기 </h4>
        <RightArrow color = 'gray-600' width = '12' height = '12' />
      </div>
    </div>
    <!-- 캐러셀 -->
    <div class="w-full overflow-x-hidden items-center mt-3">
      <div class="flex gap-4">
        <div v-for="(challenge, index) in challenges" :key="index">
          <div class="h-30 w-43 bg-gray-300 rounded-3xl px-5 py-4 flex-col gap-1">
            <p class="h4 fw-black">{{ challenge.category }}</p>
            <p class="h4">{{ challenge.name }}</p>
            <p class="h4">{{ challenge.point }}</p>
            <p class="h6">{{ challenge.valid }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- 사이드바 -->


<!-- drawer init and show -->
<div class="text-center">
   <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Show navigation
   </button>
</div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExpenseIcon from '@/components/common/icons/ExpenseIcon.vue'
import ChallengeIcon from '@/components/common/icons/ChallengeIcon.vue'
import HambergerIcon from '@/components/common/icons/HambergerIcon.vue'
import RightArrow from '@/components/common/icons/RightArrow.vue'
import Gifticon1 from '@/assets/images/gifticon1.png'
import Gifticon2 from '@/assets/images/Gifticon2.png'
import Gifticon3 from '@/assets/images/Gifticon3.png'
import Gifticon4 from '@/assets/images/Gifticon4.png'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome2 = () => {
  router.push({name:'home2'})
}

const goChallenge1 = () => {
  router.push({name:'challenge'})
}

const rewards = ref([
  { category: '카테고리 1', name: "상품명 1", point: '2000P', image: Gifticon1 },
  { category: '카테고리 2', name: "상품명 2", point: '1000P', image: Gifticon2 },
  { category: '카테고리 3', name: "상품명 3", point: '3000P', image: Gifticon3 },
  { category: '카테고리 4', name: "상품명 4", point: '4000P', image: Gifticon4 }
])

const challenges = ref([
  { category: '카테고리 1', name: "챌린지명 1", point: '2000P', valid: '25.01.01-25.01.31' },
  { category: '카테고리 2', name: "챌린지명 2", point: '1000P', valid: '25.01.01-25.01.31' },
  { category: '카테고리 3', name: "챌린지명 3", point: '3000P', valid: '25.01.01-25.01.31' },
  { category: '카테고리 4', name: "챌린지명 4", point: '4000P', valid: '25.01.01-25.01.31' },
])

</script>

<style scoped></style>
