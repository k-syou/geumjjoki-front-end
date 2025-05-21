import apiClient from "@/plugins/axios";
import type { LoginRequest } from "@/types/user";

export const authService = {
  emailLogin: async (credential: LoginRequest) => {
    const response = await apiClient.post('/auth/email-login/', credential);
    return response.data;
  },
  kakaoLogin: () => {
    // 카카오 로그인 요청 redirect url로 리다이렉트
    const redirectUrl = `${apiClient.getUri()}/auth/kakao-login/`;
    window.location.href = redirectUrl;
  },
  emailDuplicationCheck: async () => {
    const response = await apiClient.get('/auth/email-check/')
    return response.data
  },
  naverLogin: () => {
    const redirectUrl = `${apiClient.getUri()}/auth/naver-login/`;
    window.location.href = redirectUrl;
  },
  logout: async () => {
    const response = await apiClient.post('/auth/logout/')
    return response.data
  }
};


