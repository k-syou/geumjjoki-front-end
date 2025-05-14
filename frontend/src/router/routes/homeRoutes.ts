import HomeView from '@/views/HomeView.vue'
import MobileLayout from '@/layouts/MobileLayout.vue'
import Home_01 from '@/components/pages/home/Home_01.vue'

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
