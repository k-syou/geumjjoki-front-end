<template>
  <main class="px-5 w-full py-16 overflow-hidden">
    <!-- header -->
    <header class="w-full flex justify-center items-center mb-5 relative">
      <back-icon @click="goBack" color="black" class="absolute top-1/2 -translate-y-1/2 left-0" />
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
          @click="filteredChallengeData(menu)"
        >
          {{ menu.title }}
        </button>
      </nav>

      <!-- total count -->
      <div class="w-full flex justify-end h4 fw-black text-gray-600 pr-2.5 mb-3.5">
        <span class="block w-15 text-center">총 {{ beforeChallengeData.length }}개</span>
      </div>

      <!-- list -->
      <div class="h4 text-cocoa-600 flex flex-col gap-6 pb-20 h-[700px] scrollbar-hide overflow-y-scroll">
        <div
          v-for="data in beforeChallengeData"
          :key="data.user_challenge_id"
          @click="goDetail(data.challenge_id)"
          class="flex justify-between border-b-2 border-dashed border-gray-600 pb-1"
        >
          <div class="flex flex-col items-center gap-2">
            <div class="w-15 h-15 bg-gold-100 rounded-full"></div>
            <div class="h4 fw-black">{{ data.category ?? '카테고리명' }}</div>
          </div>
          <div class="flex flex-col gap-1 justify-center">
            <div class="h4">{{ data.title }}</div>
            <div class="caption fw-bold text-gray-600">{{ data.point ?? 200 }}P</div>
            <div class="caption fw-bold text-gray-600">
              {{ formatDate(data.start_date || '') }} - {{ formatDate(data.end_date || '') }}
            </div>
          </div>
          <div
            class="w-20 flex items-center justify-center py-1 px-2 rounded-full h-fit my-auto"
            :class="data.status === '성공' ? 'bg-minty-400' : 'bg-gray-400'"
          >
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
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import challengesService from '@/services/api/challenges'
import type { UserChallenge, Challenge } from '@/types/challenges'
import BackIcon from '@/components/common/icons/BackIcon.vue'

const router = useRouter()
const userStore = useUserStore()
const userData = computed(() => (userStore.user as any)?.data)

const challengeNavMenus = ref([
  { title: '전체', isActive: true },
  { title: '성공', isActive: false },
  { title: '실패', isActive: false },
])

const allChallengeData = ref<(UserChallenge & Partial<Challenge>)[]>([])
const beforeChallengeData = ref<(UserChallenge & Partial<Challenge>)[]>([])

onMounted(async () => {
  try {
    const userId = userData.value?.id || 1

    const success = await challengesService.fetchPersonalChallenges(1, userId)
    const failed = await challengesService.fetchPersonalChallenges(2, userId)
    const personal = [...success, ...failed]

    const challengeList = await challengesService.fetchChallengeList()

    // challenge_id 기준으로 Challenge 정보 병합
    allChallengeData.value = personal.map((uc) => {
      const ch = challengeList.find(c => Number(c.challenge_id) === Number(uc.challenge_id))
      return {
        ...uc,
        start_date: ch?.start_date ?? null,
        end_date: ch?.end_date ?? null,
        point: ch?.point ?? 200,
        category: ch?.category ?? '카테고리명',
      }
    })

    beforeChallengeData.value = [...allChallengeData.value]
  } catch (e) {
    console.error('챌린지 데이터 로딩 실패:', e)
  }
})

const filteredChallengeData = (menu: any) => {
  challengeNavMenus.value.forEach((c) => {
    c.isActive = c.title === menu.title
  })

  if (menu.title === '전체') {
    beforeChallengeData.value = [...allChallengeData.value]
  } else {
    beforeChallengeData.value = allChallengeData.value.filter(
      (item) => item.status === menu.title
    )
  }
}

const formatDate = (iso: string): string => {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return '-'
  const yy = d.getFullYear().toString().slice(2)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yy}.${mm}.${dd}`
}

const goBack = () => router.back()

const goDetail = (id: number) => {
  router.push({ name: 'challenge_detail', params: { id } })
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
