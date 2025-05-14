<template class = "px-3">
  <section class="bg-gold-100 w-full  rounded-2xl shadow-8 p-5">
    <h3 class="h3 fw-black"> 로고 GEUMJJOKI</h3>
    <h2 class="h2"> 님 반갑습니다</h2>
    <p>포인트</p>

    
  </section>


  <section class="w-full">
    <h1 class="text-xl font-bold mb-3">리워드를 교환하세요</h1>
    <!-- 캐러셀 컨테이너 -->
    <div class="overflow-hidden scroll-smooth snap-x snap-mandatory">
      <div class="flex gap-4 w-max">
        <!-- 각각의 카드 -->
        <div v-for="(reward,index) in rewards" :key="index"
          class="snap-start w-40 h-32 border-2 text-left content-center px-2 ">
          <p class="h4">이미지</p>
          <p class="h4">{{ reward.category }}</p>
          <p class="h4">{{ reward.name }}</p>
          <p class="h4">{{ reward.point }}</p>
        </div>
      </div>
    </div>


    <h1 class="h2 mb-3">챌린지에 도전하세요</h1>
    <!-- 캐러셀 컨테이너 -->
    <div class="overflow-hidden scroll-smooth snap-x snap-mandatory">
      <div class="flex gap-4 px-3 w-max">
        <div v-for="(chagllenge,index) in challenges" :key="index"
          class="snap-start w-43 h-30 border-2 text-left content-center text-2xl rounded-4xl px-2 mx-1">
          <p class="h4">{{ chagllenge.category }}</p>
          <p class="h4">{{ chagllenge.name }}</p>
          <p class="h4">{{ chagllenge.point }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let id = 0
const rewards = ref([
  {category: '카테고리 1', name: "상품명 1", point: '2000P' },
  {category: '카테고리 2', name: "상품명 2", point: '1000P' },
  {category: '카테고리 3', name: "상품명 3", point: '3000P' },
  {category: '카테고리 4', name: "상품명 4", point: '4000P' }
])

const challenges = ref([
  {category: '카테고리 1', name: "챌린지명 1", point: '2000P' },
  {category: '카테고리 2', name: "챌린지명 2", point: '1000P' },
  {category: '카테고리 3', name: "챌린지명 3", point: '3000P' },
  {category: '카테고리 4', name: "챌린지명 4", point: '4000P' }
])
</script>

<style scoped></style>
