import { useAuthStore } from "@/stores/auth";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore();

  // 인증이 필요한 페이지에 접근하고 인증이 안되어있으면 로그인 페이지로 리다이렉트
  // router에 정의된 route 중에서 meta의 requiresAuth가 true인 경우 인증이 필요한 페이지
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "login" }); // 로그인 페이지로 리다이렉트
  } else {
    next(); // 인증이 필요 없는 페이지는 그냥 접근
  }
}

export default authGuard;