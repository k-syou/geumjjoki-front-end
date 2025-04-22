<template>
  <div>
    <h2>로그인</h2>
    <Button text="카카오톡 로그인" bgColor="icy-blue" textColor="white" size="medium" @click="kakaoLogin" />
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 라우터 사용 시
import axios from 'axios'; // axios import
import Button from '../../common/components/Button.vue';

// Kakao 타입을 window 객체에 선언 (또는 @types/kakao-js-sdk 설치)
declare global {
  interface Window {
    Kakao: any;
  }
}

const router = useRouter(); // 라우터 인스턴스 가져오기 (리디렉션용)
const errorMessage = ref<string | null>(null); // 에러 메시지 상태

// 백엔드 카카오 로그인 API 엔드포인트 URL (실제 URL로 변경)
const KAKAO_LOGIN_API_URL = 'http://localhost:8080/api/auth/kakao/login/'; // 예시 URL

const kakaoLogin = () => {
  errorMessage.value = null; // 이전 에러 메시지 초기화
  console.log('Checking Kakao SDK status in kakaoLogin function...');
  console.log('window.Kakao:', window.Kakao);
  console.log('Is Initialized?:', window.Kakao?.isInitialized());

  if (!window.Kakao || !window.Kakao.isInitialized()) {
    errorMessage.value = '카카오 SDK가 로드되지 않았거나 초기화되지 않았습니다.';
    console.error('Kakao SDK not loaded or initialized');
    return;
  }

  console.log('window.Kakao.Auth object:', window.Kakao.Auth);

  window.Kakao.Auth.authorize({
    // *** 중요: Kakao Developers에 등록한 Redirect URI 와 동일해야 함 ***
    redirectUri: 'http://localhost:8000/accounts/kakao/login/callback/', // 예: 'http://localhost:5173/auth/kakao/callback'
    // 필요한 동의 항목(scope) 추가
    // scope: 'profile_nickname, account_email',
    // state: '원하는_상태값' // CSRF 방지 등을 위해 사용 가능 (선택 사항)
  });
};
</script>

<style></style>