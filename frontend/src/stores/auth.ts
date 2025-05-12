import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

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

  function logout(): void {
    token.value = null;
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
  }

  return {
    token,
    isLoading,
    isAuthenticated,
    setToken,
    logout
  };
});
