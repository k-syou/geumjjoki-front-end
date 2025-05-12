import MobileLayout from '@/layouts/MobileLayout.vue'
import ArticleView from '@/views/ArticleView.vue'

export const articleRoutes = [
  {
    path: '/article',
    name: 'article',
    component: ArticleView,
    meta: {
      layout: MobileLayout,
    },
  },
]
