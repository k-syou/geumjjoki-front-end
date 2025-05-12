import MobileLayout from '@/layouts/MobileLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import SignupView from '@/views/auth/SignupView.vue'
import KakaoCallbackView from '@/views/auth/KakaoCallbackView.vue'
import EmailCallbackView from '@/views/auth/EmailCallbackView.vue'

export const authRoutes = [
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
