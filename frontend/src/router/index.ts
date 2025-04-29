import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import MobileLayout from '../layouts/MobileLayout.vue'
import LoginView from '../views/auth/Login.vue'
import KakaoCallbackView from '../views/auth/KakaoCallback.vue'
import EmailCallbackView from '../views/auth/EmailCallback.vue'
import SignupView from '../views/auth/Signup.vue'
import ExpenseMainPage from '../views/expense/ExpenseMainPage.vue'
import MyMainPage from '../views/mypage/MyMainPage.vue'
import RewardMainPage from '../views/reward/RewardMainPage.vue'
import ChallengeMainPage from '../views/challenge/ChallengeMainPage.vue'
import ArticleMainPage from '../views/article/ArticleMainPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: MobileLayout,
    },
  },
  {
    path: '/auth/login',
    name: 'login',
    component: LoginView,
    meta: {
      layout: MobileLayout,
    },
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      layout: MobileLayout,
    },
  },
  {
    path: '/auth/kakao/callback',
    name: 'kakaoCallback',
    component: KakaoCallbackView,
  },
  {
    path: '/auth/email/callback',
    name: 'emailCallback',
    component: EmailCallbackView,
  },
  {
    path: '/expense',
    name: 'expense',
    component: ExpenseMainPage,
    meta: {
      layout: MobileLayout,
    },
  },
  {
    path: '/my',
    name: 'my',
    component: MyMainPage,
    meta: {
      layout: MobileLayout,
    },
  },
  {
    path: '/reward',
    name: 'reward',
    component: RewardMainPage,
    meta: {
      layout: MobileLayout,
    },
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: ChallengeMainPage,
    meta: {
      layout: MobileLayout,
    },
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleMainPage,
    meta: {
      layout: MobileLayout,
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
