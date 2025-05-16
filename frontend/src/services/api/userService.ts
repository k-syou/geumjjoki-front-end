import apiClient from "@/plugins/axios";
import type { UserResponse } from "@/types/user";
const userService = {
  getUser: async () => {
    const response = await apiClient.get('/auth/user/');
    console.log('getUser 호출', response.data);
    return response.data as UserResponse;
  },
};

export default userService;
