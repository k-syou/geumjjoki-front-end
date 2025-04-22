<template>
  <div>
    <h1>Kakao Callback</h1>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  const code = route.query.code as string; // URL 에서 인가 코드 추출

  if (code) {
    try {
      // 백엔드로 인가 코드 전송
      const response = await axios.post('/api/auth/kakao/login/', { // 백엔드 API URL
        code: code, // 백엔드가 인가 코드를 받는 key 이름으로 전송
      });

      const jwtToken = response.data.token; // 백엔드 응답에서 JWT 추출

      if (jwtToken) {
        localStorage.setItem('accessToken', jwtToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
        router.push('/main'); // 로그인 성공 후 이동
      } else {
        // JWT 못 받은 경우 에러 처리
        console.error('JWT token not received');
        router.push('/login?error=jwt_missing');
      }
    } catch (error) {
      // 백엔드 통신 오류 처리
      console.error('Error sending code to backend:', error);
      router.push('/login?error=backend_comm_failed');
    }
  } else {
    // 인가 코드 없는 경우 에러 처리
    console.error('Authorization code not found in URL');
    const errorDesc = route.query.error_description || 'Unknown error';
    router.push(`/login?error=kakao_auth_failed&desc=${encodeURIComponent(errorDesc as string)}`);
  }
});
</script>

<style></style>