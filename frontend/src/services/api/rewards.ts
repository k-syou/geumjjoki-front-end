import apiClient from '@/plugins/axios'

export const rewardsService = {
  fetchRewardList: async () => {
    const response = await apiClient.get('/rewards/')
    const result = response.data.results
    if (!result || result.status !== 'success') {
      throw new Error('API 응답 실패')
    }
    return result.data
  }
}

export default rewardsService