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


export interface UserResponse {
  id: number;
  username: string;
  email: string;
  profileImage?: string;
  role: string;
  nickname: string;
  status: string;
  user_profile: UserProfileResponse;
}

export interface UserState {
  user: UserResponse | null;
  isLoading: boolean;
}

export interface UserProfileResponse {
  level: number;
  exp: number;
  mileage: number;
  averageIncome?: number;
}
