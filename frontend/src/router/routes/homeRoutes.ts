import HomeView from '@/views/HomeView.vue'
import MobileLayout from '@/layouts/MobileLayout.vue'

export const homeRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: MobileLayout,
      // requiresAuth: true,
      title: '홈',
    },
  },
]
