import apiClient from '@/plugins/axios'
import type { Challenge, UserChallenge, ChallengeDetail } from "@/types/challenges"

export const challengesService = {
  // 전체 챌린지 목록
  fetchChallengeList: async (): Promise<Challenge[]> => {
    const response = await apiClient.get('/challenges/?size=10000')
    return response.data.data as Challenge[]
  },

  // 사용자 개인 챌린지
  fetchPersonalChallenges: async (type: number, userId: number): Promise<UserChallenge[]> => {
    const response = await apiClient.get(`/challenges/personal?type=${type}&user=${userId}`)
    return response.data.data as UserChallenge[]
  },

  // 챌린지 상세 정보
  fetchChallengeDetail: async (id: number): Promise<ChallengeDetail> => {
    const response = await apiClient.get(`/challenges/${id}/`)
    return response.data.data as ChallengeDetail
  }
}

export default challengesService
