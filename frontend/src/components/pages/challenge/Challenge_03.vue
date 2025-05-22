<template>
  <main class="px-5 w-full py-16 overflow-hidden">
    <!-- Header -->
    <header class="w-full flex justify-center items-center mb-5 relative">
      <back-icon @click="goBack" color="black" class="absolute top-1/2 -translate-y-1/2 left-0" />
      <span class="h3">챌린지 상세</span>
    </header>

    <section class="w-full flex flex-col items-center">
      <!-- 이미지 -->
      <div class="w-53 h-53 bg-gray-500 rounded-full mx-auto mb-5"></div>

      <!-- 제목 및 마감일 -->
      <div class="flex flex-col items-center mb-8">
        <div class="h4 fw-black text-gray-600">
          {{ challengeDetail ? getDday(challengeDetail.end_date) : '' }}
        </div>
        <div class="h3 text-black">
          {{ challengeDetail?.title || '챌린지명을 입력하세요' }}
        </div>
      </div>

      <!-- 버튼 -->
      <div
        v-if="userStatus"
        class="w-41 h-16 rounded-full mb-10 flex items-center justify-center"
        :class="{
          'bg-minty-400': userStatus === '성공',
          'bg-gray-600': userStatus === '실패',
          'bg-gray-400': userStatus === '종료'
        }"
      >
        <div
          class="h2 fw-bold"
          :class="{
            'text-cocoa-600': ['성공', '실패'].includes(userStatus),
            'text-black': userStatus === '종료'
          }"
        >
          {{ userStatus }}
        </div>
      </div>
      <button
        v-else
        class="w-41 h-16 rounded-full mb-10"
        :class="isChallenging ? 'bg-gold-200' : 'bg-gold-400'"
        @click="startChallenge"
      >
        <div class="h2 fw-bold">
          {{ isChallenging ? '도전중' : '도전하기' }}
        </div>
      </button>

      <!-- 상세 정보 -->
      <div class="w-full bg-white shadow-2xl rounded-4xl py-5.5 px-5">
        <div class="h3 fw-black mb-7">챌린지 안내</div>
        <div class="flex flex-col gap-4 h4 text-cocoa-600">
          <div v-for="(value, key) in detailData" :key="key" class="flex justify-between">
            <div>{{ key }}</div>
            <div>{{ value }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import challengesService from '@/services/api/challenges'
import BackIcon from '@/components/common/icons/BackIcon.vue'
import type { ChallengeDetail, UserChallenge } from '@/types/challenges'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const route = useRoute()
const challengeId = Number(route.params.id)

const userStore = useUserStore()
const userData = computed(() => (userStore.user as any)?.data)
const userId = userData.value?.id || 1

const challengeDetail = ref<ChallengeDetail | null>(null)
const userChallenges = ref<UserChallenge[]>([])
const isChallenging = ref(false)

const goBack = () => router.back()

const getDday = (end: string) => {
  if (userStatus.value === '성공' || userStatus.value === '실패') {
    return '종료됨'
  }
  const today = new Date()
  const deadline = new Date(end)
  const diff = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  return diff > 0 ? `마감 ${diff}일전` : '마감됨'
}

const formatDate = (iso: string) => {
  const d = new Date(iso)
  const yy = d.getFullYear().toString().slice(2)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yy}.${mm}.${dd}`
}

onMounted(async () => {
  try {
    const [detail, successList, failList] = await Promise.all([
      challengesService.fetchChallengeDetail(challengeId),
      challengesService.fetchPersonalChallenges(1, userId),
      challengesService.fetchPersonalChallenges(2, userId)
    ])
    challengeDetail.value = detail
    userChallenges.value = [...successList, ...failList]
  } catch (e) {
    console.error('챌린지 상세 조회 실패', e)
  }
})

const userStatus = computed(() => {
  const matched = userChallenges.value.find(
    (uc) => uc.challenge_id === challengeDetail.value?.challenge_id
  )
  if (matched?.status) return matched.status
  if (challengeDetail.value && new Date(challengeDetail.value.end_date) < new Date()) {
    return '종료'
  }
  return ''
})

const detailData = computed(() => {
  if (!challengeDetail.value) return {}
  const c = challengeDetail.value
  return {
    챌린지명: c.title,
    목표: c.content || '설정된 목표 없음',
    '참여 방법': c.howToParticipate || '미구현',
    보상: `${c.point || 0}P`,
    '진행 기간': `${formatDate(c.start_date)} - ${formatDate(c.end_date)}`
  }
})

const startChallenge = () => {
  alert('도전 기능은 아직 미구현입니다.')
}
</script>

<style scoped></style>
