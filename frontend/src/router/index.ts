import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import MobileLayout from '../layouts/MobileLayout.vue'
import MainView from '../views/Main.vue'
import LoginView from '../views/auth/Login.vue'
import KakaoCallbackView from '../views/auth/KakaoCallback.vue'
import EmailCallbackView from '../views/auth/EmailCallback.vue'
import SignupView from '../views/auth/Signup.vue'

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
    path: '/main',
    name: 'main',
    component: MainView,
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
