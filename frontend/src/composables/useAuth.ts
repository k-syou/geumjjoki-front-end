import { authService } from "@/services/api/auth";

const useAuth = () => {
  const kakaoLogin = () => {
    authService.kakaoLogin();
  }
  return {
    kakaoLogin
  }
}


export default useAuth;
