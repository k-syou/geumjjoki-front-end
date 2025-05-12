import MobileLayout from '@/layouts/MobileLayout.vue'
import RewardPage from '@/views/RewardPage.vue'

export const rewardRoutes = [
  {
    path: '/reward',
    name: 'reward',
    component: RewardPage,
    meta: {
      layout: MobileLayout,
    },
  },
]
