<template>
  <div class="min-h-screen bg-[#fafafa] flex flex-col">

    <!-- 로고 -->
    <div id="logo" class="flex justify-center items-center w-[280px] h-[280px] mx-auto mt-4">
      <div class="flex flex-col items-center">
        <div class="w-[160px] h-[160px] bg-black"></div>
        <!-- <img src="@/assets/geumjjoki-logo.png" alt="GEUMJJOKI" class="w-[160px] h-[160px]" /> -->
        <div class="text-[#5a4411] text-4xl font-bold mt-2">GEUMJJOKI</div>
      </div>
    </div>

    <div class="flex flex-col px-6 mt-4">
      <!-- 이메일 로그인 폼 -->
      <form action="http://localhost:8000/api/v1/auth/email-login/" method="POST" class="w-full">
        <div class="mb-4">
          <div class="mb-1 text-base">아이디</div>
          <input
            name="email"
            type="email"
            placeholder="아이디"
            class="w-full p-3 border border-[#d9d9d9] rounded-lg mb-4 bg-white"
            required
          />

          <div class="mb-1 text-base">비밀번호</div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            class="w-full p-3 border border-[#d9d9d9] rounded-lg bg-white"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full p-3 bg-[#c4c4c4] text-black font-semibold rounded-[40px] mb-4 text-lg"
        >
          이메일로 로그인
        </button>
      </form>

      <div class="flex justify-between text-sm mb-4">
        <span>계정이 없으신가요? <router-link to="/auth/signup" class="text-icy-blue-500 font-bold">회원가입</router-link></span>
      </div>

      <!-- 소셜 로그인 버튼 -->
      <div class="mt-4">
        <button
          @click="kakaoLogin"
          class="w-full p-3 bg-[#FEE500] text-black font-semibold rounded-[40px] mb-4 flex items-center justify-center"
        >
          <div class="mr-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span class="text-[#FEE500] text-xs">K</span>
          </div>
          카카오 로그인
        </button>

        <button
          class="w-full p-3 bg-[#03C75A] text-white font-semibold rounded-[40px] flex items-center justify-center"
        >
          <div class="mr-2 text-white">N</div>
          네이버 로그인
        </button>
      </div>

      <p v-if="errorMessage" class="error-message mt-2">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/common/components/Button.vue';

const router = useRouter();
const errorMessage = ref(null);

const kakaoLogin = () => {
  errorMessage.value = null;
  // 백엔드의 카카오 로그인 URL로 리디렉션
  window.location.href = 'http://localhost:8000/api/v1/auth/kakao-login/';
};
</script>

<style>
.error-message {
  color: red;
}
</style>
