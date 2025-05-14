<template>
  <header class="flex items-center justify-start w-full px-6 mb-7">
    <BackArrow class="cursor-pointer block" @click="goBack" />
  </header>
  <section class="flex flex-col bg-inherit items-center justify-start w-70 gap-7">
    <img class="h-60 w-60" :src="logoPath" alt="logo" />

    <div class="flex flex-col items-center justify-center gap-5 w-full">
      <!-- 카카오 로그인 -->
      <button class="w-full relative bg-kakao-100 hover:bg-kakao-200 py-3 rounded-lg" @click="handleKakaoLogin">
        <KakaoLogo color="black" class="block absolute left-8 top-1/2 -translate-y-1/2">
        </KakaoLogo>
        <span class="block h3">카카오 로그인</span>
      </button>

      <!-- 네이버 로그인 -->
      <button class="w-full relative bg-naver-green-100 hover:bg-naver-green-200 py-3 rounded-lg" @click="handleNaverLogin">
        <NaverLogo color="white" class="block absolute left-8 top-1/2 -translate-y-1/2" />
        <span class="text-white h3">네이버 로그인</span>
      </button>

      <!-- 이메일 로그인 폼 -->
      <div class="flex flex-col items-center justify-center gap-3.5 w-full overflow-hidden"
        :class="`${isEmailLogin ? 'h-auto opacity-100' : 'hidden opacity-0'}`">
        <div class="flex flex-col items-start justify-center gap-2 w-full">
          <label for="email" class="text-cocoa-600 h4">이메일</label>
          <input type="email" id="email" v-model="emailUserInfo.email"
            class="w-full py-3 px-4 rounded-lg border border-cocoa-200 h4 bg-white focus:outline-none text-cocoa-600"
            placeholder="이메일" />
        </div>

        <div class="flex flex-col items-start justify-center gap-2 w-full">
          <label for="password" class="text-cocoa-600 h4">비밀번호</label>
          <input type="password" id="password" v-model="emailUserInfo.password"
            class="w-full py-3 px-4 rounded-lg border border-cocoa-200 h4 bg-white focus:outline-none text-cocoa-600"
            placeholder="비밀번호" />
          <div v-if="errorMessage" class="caption text-red-600">
            {{ errorMessage }}
          </div>
        </div>
      </div>
      <div v-if="isEmailLogin" class="h4 text-cocoa-600">
        계정이 없으신가요? <span class="underline cursor-pointer" @click="goSignup">회원가입</span>
      </div>

      <!-- 이메일 로그인 버튼 -->
      <button class="w-full relative bg-cocoa-100 hover:bg-cocoa-200 py-3 rounded-lg" @click="handleEmailLogin">
        <EmailIcon color="cocoa-600" class="block absolute left-7.5 top-1/2 -translate-y-1/2">
        </EmailIcon>
        <span class="text-cocoa-600 h3">이메일로 로그인</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import BackArrow from '@/components/common/icons/BackArrow.vue';
import { useRouter } from 'vue-router';
import NaverLogo from '@/components/common/icons/NaverLogo.vue';
import KakaoLogo from '@/components/common/icons/KakaoLogo.vue';
import EmailIcon from '@/components/common/icons/EmailIcon.vue';
import type { LoginRequest } from '@/types/user';
import { ref } from 'vue';
import logoPath from '@/assets/images/geumjjoki_logo_with_text.png';
import useAuth from '@/composables/useAuth';

const useAuth_ = useAuth();
const errorMessage = ref<string>('');
const emailUserInfo = ref<LoginRequest>({
  email: '',
  password: ''
});

const handleKakaoLogin = () => {
  useAuth_.kakaoLogin();
}

const handleNaverLogin = () => {
  console.log('naver login')
  router.push({ name: 'login_02'})
}

const router = useRouter();

const isEmailLogin = ref<boolean>(false);

const handleEmailLogin = () => {
  if (!isEmailLogin.value) {
    isEmailLogin.value = true;
    return
  }

  if (!loginCheck()) {
    return
  }
  errorMessage.value = ''

  console.log('email login')
  router.push({ name: 'login_02'})
}

const loginCheck = () => {
  // 추후 개선 필요
  if (!emailUserInfo.value.email) {
    errorMessage.value = '이메일을 형식에 맞게 입력해주세요.'
    return false
  } else if (!emailUserInfo.value.password) {
    errorMessage.value = '비밀번호를 입력해주세요.'
    return false
  } else {
    return true
  }
}

const goBack = () => {
  router.back()
};

const goSignup = () => {
  console.log('goSignup')
  // router.push('/auth/signup')
};
</script>

<style scoped></style>