import { axiosInstance } from "./axios";




// 회원가입
export const signup = async (user:any) => {
  const { data } = await axiosInstance.post<any>('/user', user);
  const response = data.data;
  return response;
};