import apiClient from "@/plugins/axios";

const userService = {
  getUser: async () => {
    const response = await apiClient.get('/user');
    return response.data;
  },
};

export default userService;
