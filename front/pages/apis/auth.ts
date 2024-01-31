import User from "@/interfaces/user";
import { axiosInstance } from "./axios";
import axios from "axios";




// 회원가입
export const signup = async (user: User) => {
  const { data } = await axios.post<any>('http://localhost:3065/user', user);
  console.log(data)
  const response = data.data;
  return response;
};