import MobileLayout from '@/layouts/MobileLayout.vue'
import ArticleView from '@/views/ArticleView.vue'
import Article_01 from '@/components/pages/article/Article_01.vue'
import Article_02 from '@/components/pages/article/Article_02.vue'
import DetailArticle from '@/components/pages/article/DetailArticle.vue'
export const articleRoutes = [
  {
    path: '/article',
    component: ArticleView,
    meta: {
      layout: MobileLayout,
      title: '게시판',
    },
    children: [
      {
        path: '',
        name: 'article',
        component: Article_01,
      },
      {
        path: '/create_article',
        name: 'create_article',
        component: Article_02,
      },
      {
        path: '/detail_article',
        name: 'detail_article',
        component: DetailArticle,
      }
    ],
  },
]
