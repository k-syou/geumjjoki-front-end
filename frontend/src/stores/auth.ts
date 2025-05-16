import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from './userStore';


// 스토어 ID 설정 및 내보내기
export const useAuthStore = defineStore('auth', () => {
  // 상태
  const token = ref<string | null>(localStorage.getItem('access_token') || null);
  const isLoading = ref<boolean>(false);

  // 게터
  const isAuthenticated = computed<boolean>(() => !!token.value);

  // 액션
  function setToken(newToken: string | null): void {
    token.value = newToken;
    if (newToken) {
      localStorage.setItem('access_token', newToken);
    } else {
      localStorage.removeItem('access_token');
    }
  }

  // 로그인 액션 추가
  async function login(newToken: string): Promise<void> {
    setToken(newToken);
    // 필요한 추가 작업 수행 (예: 사용자 정보 로드 등)
    const userStore = useUserStore()
    await userStore.fetchUser()
  }

  // 토큰 새로고침 및 상태 동기화
  function refreshAuthState(): void {
    const storedToken = localStorage.getItem('access_token');
    if (storedToken && token.value !== storedToken) {
      token.value = storedToken;
    }
  }

  function logout(): void {
    token.value = null;
    const router = useRouter();
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    router.push({ name: 'login' });
  }

  return {
    token,
    isLoading,
    isAuthenticated,
    setToken,
    login,
    refreshAuthState,
    logout
  };
});
