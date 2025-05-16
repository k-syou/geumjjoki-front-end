export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
