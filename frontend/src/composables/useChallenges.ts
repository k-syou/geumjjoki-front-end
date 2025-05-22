import { ref, onMounted, computed } from 'vue'
import challengesService from '@/services/api/challenges'
import { useUserStore } from '@/stores/userStore'
import type { Challenge, UserChallenge } from '@/types/challenges'

// Challenge + UserChallenge 통합 타입
type EnrichedUserChallenge = UserChallenge & Partial<Challenge>

export default function useChallenges() {
  const challenges = ref<Challenge[]>([])
  const ongoingChallenges = ref<UserChallenge[]>([])
  const successChallenges = ref<UserChallenge[]>([])
  const failedChallenges = ref<UserChallenge[]>([])

  const isLoading = ref(false)
  const error = ref<unknown>(null)

  const userStore = useUserStore()
  const userId = userStore.user?.id || 1

  // Challenge 정보 덧붙이기
  const enrichUserChallenges = (list: UserChallenge[]): EnrichedUserChallenge[] => {
    return list.map((uc) => {
      const matched = challenges.value.find(c => c.challenge_id === uc.challenge_id)
      return {
        ...uc,
        ...matched,
      }
    })
  }

  const enrichedOngoing = computed(() => enrichUserChallenges(ongoingChallenges.value))
  const enrichedSuccess = computed(() => enrichUserChallenges(successChallenges.value))
  const enrichedFailed = computed(() => enrichUserChallenges(failedChallenges.value))

  const getUserChallengeById = (challengeId: number): EnrichedUserChallenge | null => {
    const all = [...enrichedOngoing.value, ...enrichedSuccess.value, ...enrichedFailed.value]
    return all.find(item => item.challenge_id === challengeId) || null
  }

  const fetchChallenges = async () => {
    isLoading.value = true
    error.value = null
    try {
      challenges.value = await challengesService.fetchChallengeList()
      const [ongoing, success, failed] = await Promise.all([
        challengesService.fetchPersonalChallenges(0, userId),
        challengesService.fetchPersonalChallenges(1, userId),
        challengesService.fetchPersonalChallenges(2, userId),
      ])

      ongoingChallenges.value = ongoing
      successChallenges.value = success
      failedChallenges.value = failed
    } catch (err) {
      error.value = err
      console.error('챌린지 불러오기 실패:', err)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchChallenges)

  return {
    challenges,
    ongoingChallenges,
    successChallenges,
    failedChallenges,
    enrichedOngoing,
    enrichedSuccess,
    enrichedFailed,
    isLoading,
    error,
    fetchChallenges,
    getUserChallengeById,
  }
}
