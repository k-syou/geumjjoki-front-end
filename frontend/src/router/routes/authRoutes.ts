import MobileLayout from '@/layouts/MobileLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import SignupView from '@/views/auth/Signup.vue'
import KakaoCallbackView from '@/views/auth/KakaoCallback.vue'
import EmailCallbackView from '@/views/auth/EmailCallback.vue'
import Login_01 from '@/components/pages/auth/login/Login_01.vue'
import Login_02 from '@/components/pages/auth/login/Login_02.vue'
import MobileAuthLayout from '@/layouts/MobileAuthLayout.vue'
import guestGuard from '@/middlewares/guards/guest.guard'

export const authRoutes = [
  {
    path: '/auth',
    component: LoginView,
    meta: {
      layout: MobileAuthLayout,
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login_01,
        beforeEnter: guestGuard,
      },
      {
        path: 'login/submit',
        name: 'login_submit',
        component: Login_02,
      },
    ],
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

