import HomeView from '@/views/HomeView.vue'
import MobileLayout from '@/layouts/MobileLayout.vue'

export const homeRoutes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      layout: MobileLayout,
      // requiresAuth: true,
      title: '홈',
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home_01,
      },
    ],
  },
]
