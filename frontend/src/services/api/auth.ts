import apiClient from "@/plugins/axios";

const authService = {
  login: async (data: any) => {
    const response = await apiClient.post('/auth/login', data);
    return response.data;
  },
};

