import MobileLayout from '@/layouts/MobileLayout.vue'
import ChallengeView from '@/views/ChallengeView.vue'

export const challengeRoutes = [
  {
    path: '/challenge',
    name: 'challenge',
    component: ChallengeView,
    meta: {
      layout: MobileLayout,
    },
  },
]
