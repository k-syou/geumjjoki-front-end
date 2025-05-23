<template>
  <main class="px-5 w-full py-16 overflow-hidden">
    <!-- header -->
    <header class="w-full flex justify-center items-center mb-5 relative">
      <back-icon @click="goBack" color="black" class="absolute top-1/2 -translate-y-1/2 left-0"></back-icon>
      <span class="h3">챌린지 상세</span>
    </header>

    <!-- content -->
    <section class="w-full flex flex-col items-center">
      <!-- image -->
      <div class="w-53 h-53 bg-gray-600 rounded-full mx-auto mb-5"></div>

      <!-- title -->
      <div class="flex flex-col items-center mb-8">
        <div class="h4 fw-black text-gray-600">마감 1일전</div>
        <div class="h3 text-black">챌린지명을 입력하세요</div>
      </div>

      <!-- challenge button -->
      <button
        class="w-41 h-16  rounded-full mb-10"
        :class="challengeDetailData.status === '도전중' ? 'bg-gold-200':'bg-gold-400'"
        >
        <div class="h2 fw-bold">{{ challengeDetailData.status }}</div>
      </button>

      <!-- challenge detail -->
      <div class="w-full bg-white shadow-2xl rounded-4xl py-5.5 px-5">
        <div class="h3 fw-black mb-7">챌린지 안내</div>
        <div class="flex flex-col gap-4 h4 text-cocoa-600">
          <div v-for="key in keys" :key="key" class="flex justify-between">
            <div>{{ titleMapping[key] }}</div>
            <div>{{ detailData[key] }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import BackIcon from '@/components/common/icons/BackIcon.vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const goBack = () => {
  router.back()
}

// 키 타입 정의
type ChallengeKey = 'title' | 'goal' | 'howToParticipate' | 'point' | 'date';

const titleMapping = ref<Record<ChallengeKey, string>>({
  title: '챌린지명',
  goal: '목표',
  howToParticipate: '참여 방법',
  point: '보상',
  date: '진행 기간',
})

const keys = ['title', 'goal', 'howToParticipate', 'point', 'date'] as const;

// 상세 데이터 타입 정의
interface ChallengeDetail {
  title: string;
  goal: string;
  howToParticipate: string;
  point: number;
  startDate: string;
  endDate: string;
  status: string;
}

const challengeDetailData = ref<ChallengeDetail>({
  title: '배달음식 줄이기',
  goal: '1주일동안 배달음식 3회만 시켜먹기',
  howToParticipate: '식사 전 사진 인증',
  point: 300,
  startDate: '25.01.01',
  endDate: '25.01.28',
  status: '도전하기'
})

const detailData = computed<Record<ChallengeKey, string | number>>(() => {
  return {
    title: challengeDetailData.value.title,
    goal: challengeDetailData.value.goal,
    howToParticipate: challengeDetailData.value.howToParticipate,
    point: challengeDetailData.value.point + 'P',
    date: challengeDetailData.value.startDate + ' - ' + challengeDetailData.value.endDate
  }
})
</script>

<style scoped></style>