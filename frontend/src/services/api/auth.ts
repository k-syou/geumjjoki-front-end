import apiClient from "@/plugins/axios";
import type { LoginRequest } from "@/types/user";
import { useAuthStore } from "@/stores/auth";

export const authService = {
  // login: async (data: LoginRequest) => {
  //   const response = await apiClient.post('/auth/login', data);
  //   return response.data;
  // },
  kakaoLogin: () => {
    // 카카오 로그인 요청 redirect url로 리다이렉트
    const redirectUrl = `${apiClient.getUri()}/auth/kakao-login/`;
    window.location.href = redirectUrl;
  }
};

