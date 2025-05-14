import MobileLayout from '@/layouts/MobileLayout.vue'
import LoginView from '@/views/auth/Login.vue'
import SignupView from '@/views/auth/Signup.vue'
import KakaoCallbackView from '@/views/auth/KakaoCallback.vue'
import EmailCallbackView from '@/views/auth/EmailCallback.vue'

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
