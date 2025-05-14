import MobileLayout from '@/layouts/MobileLayout.vue'
import ChallengeView from '@/views/ChallengeView.vue'
import Challenge_01 from '@/components/pages/challenge/Challenge_01.vue'

export const challengeRoutes = [
  {
    path: '/challenge',
    component: ChallengeView,
    meta: {
      layout: MobileLayout,
    },
    children: [
      {
        path: '',
        name: 'challenge',
        component: Challenge_01,
      },
    ],
  },
]
