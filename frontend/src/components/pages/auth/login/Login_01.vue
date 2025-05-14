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
<<<<<<< HEAD
      <button class="w-full relative bg-naver-green-100 hover:bg-naver-green-200 py-3 rounded-lg" @click="handleNaverLogin">
=======
      <button class="w-full relative bg-naver-green-100 hover:bg-naver-green-200 py-3 rounded-lg"
        @click="handleNaverLogin">
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
        <NaverLogo color="white" class="block absolute left-8 top-1/2 -translate-y-1/2" />
        <span class="text-white h3">네이버 로그인</span>
      </button>

      <!-- 이메일 로그인 폼 -->
      <div class="flex flex-col items-center justify-center gap-3.5 w-full overflow-hidden"
        :class="`${isEmailLogin ? 'h-auto opacity-100' : 'hidden opacity-0'}`">
<<<<<<< HEAD
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
=======
        <TopLabelInput class="w-full" labelFont="h4" label="이메일" name="email" placeholder="이메일"
          v-model="emailUserInfo.email" />
        <TopLabelInput class="w-full" labelFont="h4" type="password" label="비밀번호" name="password" placeholder="비밀번호"
          v-model="emailUserInfo.password" />
        <div v-if="errorMessage" class="caption text-red-600 self-start">
          {{ errorMessage }}
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
        </div>
      </div>
      <div v-if="isEmailLogin" class="h4 text-cocoa-600">
        계정이 없으신가요? <span class="underline cursor-pointer" @click="goSignup">회원가입</span>
      </div>

      <!-- 이메일 로그인 버튼 -->
      <button class="w-full relative bg-cocoa-100 hover:bg-cocoa-200 py-3 rounded-lg" @click="handleEmailLogin">
        <EmailIcon color="cocoa-600" class="block absolute left-7.5 top-1/2 -translate-y-1/2">
        </EmailIcon>
<<<<<<< HEAD
        <span class="text-cocoa-600 h3">이메일로 로그인</span>
=======
        <span class="text-cocoa-600 h3">이메일 로그인</span>
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
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
<<<<<<< HEAD

=======
import TopLabelInput from '@/components/input/TopLabelInput.vue';
import { validateEmail } from '@/utils/formatters';
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
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
<<<<<<< HEAD
  router.push({ name: 'login_02'})
=======
  router.push({ name: 'login_02' })
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
}

const router = useRouter();

const isEmailLogin = ref<boolean>(false);

const handleEmailLogin = () => {
  if (!isEmailLogin.value) {
    isEmailLogin.value = true;
    return
  }
<<<<<<< HEAD

=======
  console.log(emailUserInfo.value)
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
  if (!loginCheck()) {
    return
  }
  errorMessage.value = ''

  console.log('email login')
<<<<<<< HEAD
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
=======
  router.push({ name: 'login_02' })
}

const loginCheck = () => {
  // 입력한 이메일 형식 검사
  if (!validateEmail(emailUserInfo.value.email)) {
    errorMessage.value = '이메일을 형식에 맞게 입력해주세요.'
    return false
  }
  // 입력한 비밀번호 검사
  if (!emailUserInfo.value.password) {
    errorMessage.value = '비밀번호를 입력해주세요.'
    return false
  }

  // 이메일 주소 존재 여부 검사

  // 비밀번호 일치 검사

  return true
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
}

const goBack = () => {
  router.back()
};

const goSignup = () => {
  console.log('goSignup')
  // router.push('/auth/signup')
};
</script>

<<<<<<< HEAD
<style scoped></style>
=======
<style scoped></style>
>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
