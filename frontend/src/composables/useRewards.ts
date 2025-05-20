import rewardsService from "@/services/api/rewards"
import type { Reward } from "@/types/rewards"

const useRewardsComposable = () => {
    const fetchRewardList = async () => {
        const data = await rewardsService.fetchRewardList()
        return data as Reward[]
    }
    return { fetchRewardList }
}

export default useRewardsComposable