<template>
  <main class="px-5 w-full py-16 overflow-hidden">

    <header class="w-full flex justify-between items-center mb-5">
      <div class="flex items-center gap-2">
        <BackIcon color="black" class="cursor-pointer" @click="goBack"/>
        <span class="h3">챌린지</span>
      </div>
      <div class="w-30 bg-gold-200 py-1 px-2.5 rounded-full flex justify-between items-center">
        <img :src="StarImg" alt="⭐" class="w-6 h-6">
        <div>
          {{ userData?.user_profile?.mileage ?? 0 }}P
        </div>
      </div>
    </header>

    <section class="flex flex-col gap-5 mb-8">
      <div class="flex justify-between items-center h4 fw-black text-gray-600">
        <div>진행중인 챌린지</div>
        <div @click="router.push({ name: 'challenge_before' })">지난 챌린지 &gt;</div>
      </div>

      <swiper
        :slides-per-view="3"
        :space-between="100"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :effect="'fade'"
        :grab-cursor="true"
        :centered-slides="true"
        class="w-md"
      >
        <swiper-slide
          v-for="item in ongoingUserChallenges"
          :key="item.user_challenge_id"
          @click="goDetail(item.challenge_id)"
        >
          <div class="px-5 py-4.5 bg-gold-100 rounded-4xl flex flex-col min-w-43 h4 text-cocoa-600">
            <div class="fw-black">음식</div>
            <div>{{ item.title }}</div>
            <div class="fw-black">300 P</div>
            <div class="caption fw-bold text-gray-600">{{ formatPeriod(item.challenge_id) }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <section class="bg-white rounded-4xl px-5 shadow-md relative">
      <div class="h4 text-gray-600 mb-2 sticky top-0 py-5 bg-white">도전 가능한 챌린지</div>
      <div class="h4 text-cocoa-600 flex flex-col gap-6 pb-20 h-[550px] scrollbar-hide overflow-y-scroll">
        <div
          v-for="item in availableChallenges"
          :key="item.challenge_id"
          @click="goDetail(item.challenge_id)"
          class="flex justify-between border-b-2 border-dashed border-gray-600 pb-1"
        >
          <div class="flex flex-col items-center gap-2">
            <div class="w-15 h-15 bg-gold-100 rounded-full"></div>
            <div class="h4 fw-black">카테고리명</div>
          </div>
          <div class="flex flex-col gap-1 justify-center">
            <div class="h4">{{ item.title }}</div>
            <div class="caption fw-bold text-gray-600">{{ getDday(item.end_date) }}</div>
          </div>
          <div class="flex items-center justify-center py-1 px-2 bg-gold-100 rounded-full h-fit my-auto">
            <img :src="StarImg" alt="⭐" class="w-5 h-5 mr-2">
            <div class="h4">200P</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import BackIcon from '@/components/common/icons/BackIcon.vue'
import StarImg from '@/assets/images/star.png'

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/userStore';
import challengesService from '@/services/api/challenges'
import type { Challenge, UserChallenge } from '@/types/challenges'

const router = useRouter()
const userStore = useUserStore()
const userData = computed(() => (userStore.user as any)?.data)

const challenges = ref<Challenge[]>([])
const ongoingUserChallenges = ref<UserChallenge[]>([])

onMounted(async () => {
  try {
    if (!userStore.user) {
      await userStore.fetchUser()
    }

    challenges.value = await challengesService.fetchChallengeList()

    const userId = (userStore.user as any)?.data?.id || 1
    ongoingUserChallenges.value = await challengesService.fetchPersonalChallenges(0, userId)
  } catch (e) {
    console.error('챌린지 불러오기 실패:', e)
  }
})

const availableChallenges = computed(() =>
  challenges.value.filter(c =>
    c.status === '예정' && new Date(c.end_date) > new Date()
  )
)

const getDday = (end: string) => {
  const today = new Date()
  const deadline = new Date(end)
  const diff = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  return diff > 0 ? `마감 ${diff}일전` : '마감됨'
}

const formatPeriod = (challengeId: number) => {
  const challenge = challenges.value.find(c => c.challenge_id === challengeId)
  if (!challenge) return ''

  const format = (dateStr: string) => {
    const d = new Date(dateStr)
    const yy = d.getFullYear().toString().slice(-2)
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return `${yy}.${mm}.${dd}`
  }

  return `${format(challenge.start_date)}-${format(challenge.end_date)}`
}

const goDetail = (id: number) => {
  router.push({ name: 'challenge_detail', params: { id } })
}

const goBack = () => router.back()

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
