import userService from "@/services/api/userService";

// api 호출 작성

const useUser = () => {
  const getUser = async () => {
    // 로딩
    // 토큰이 정상적으로 존재하는지 등등
    const data = await userService.getUser();
    // 로딩 끝
    return data;
  }

  return { getUser };

}

