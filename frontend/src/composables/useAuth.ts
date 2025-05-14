import { authService } from "@/services/api/auth";

const useAuth = () => {
  const kakaoLogin = () => {
    authService.kakaoLogin();
  }
  return {
    kakaoLogin
  }
}

<<<<<<< HEAD
=======

>>>>>>> acc753253ef365e9bec332bdfa25d2e5e4605811
export default useAuth;
