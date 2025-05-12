import MobileLayout from '@/layouts/MobileLayout.vue'
import RewardView from '@/views/RewardView.vue'

export const rewardRoutes = [
  {
    path: '/reward',
    name: 'reward',
    component: RewardView,
    meta: {
      layout: MobileLayout,
    },
  },
]
