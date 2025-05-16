import axios from "axios"
import type { AxiosInstance } from "axios"

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
})

apiClient.interceptors.request.use(
  (config) => {
    if (config.skipAuth) {
      return config;
    }
    const token = localStorage.getItem('access_token');
    // console.log('현재 저장된 토큰:', token);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      // console.log('토큰 헤더 추가:', config.headers['Authorization']);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default apiClient