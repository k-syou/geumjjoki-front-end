<template>
  <div class="h-screen component-test mx-auto max-w-md">
    <nav class="flex justify-between items-center">
      <router-link to="/">홈</router-link>
      <router-link to="/main">메인</router-link>

      <router-link v-if="!isLoggedIn" to="/auth/login">로그인</router-link>
      <router-link v-if="!isLoggedIn" to="/auth/signup">회원가입</router-link>
      <LogoutButton v-if="isLoggedIn" @logout-success="handleLogout" />
    </nav>
    <slot />
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import LogoutButton from '../components/LogoutButton.vue';

const isLoggedIn = ref(false);
const route = useRoute();

// 토큰 유무에 따라 로그인 상태 설정
const checkLoggedIn = () => {
  const token = localStorage.getItem('access_token');
  isLoggedIn.value = !!token;
  console.log('로그인 상태 확인:', isLoggedIn.value, '토큰:', token ? '있음' : '없음');
};

// 로그아웃 성공 이벤트 핸들러
const handleLogout = () => {
  console.log('로그아웃 이벤트 감지');
  isLoggedIn.value = false;
};

// 사용자 인증 상태 변경 이벤트 핸들러
const handleAuthStateChanged = () => {
  console.log('인증 상태 변경 감지');
  checkLoggedIn();
};

// 라우트 변경 시마다 로그인 상태 확인
watch(() => route.fullPath, () => {
  checkLoggedIn();
});

// 페이지 로딩 시 최초 확인
onMounted(() => {
  checkLoggedIn();

  // 로컬 스토리지 변경 이벤트 리스너 추가
  window.addEventListener('storage', (e) => {
    if (e.key === 'access_token') {
      checkLoggedIn();
    }
  });

  // 전역 인증 상태 변경 이벤트 리스너 추가
  window.addEventListener('auth-state-changed', handleAuthStateChanged);
});

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onBeforeUnmount(() => {
  window.removeEventListener('auth-state-changed', handleAuthStateChanged);
});
</script>
<style>
</style>
