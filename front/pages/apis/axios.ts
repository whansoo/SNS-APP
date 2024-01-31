import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const getAxiosInstance = () => {
  const config: AxiosRequestConfig = { // 타입 지정
    baseURL: "http://localhost:3065",
    headers: {
      'Content-type': 'application/json',
    },
    withCredentials: true,
  }
  const instance = axios.create(config) // instance: AxiosInstance 로 타입 추론
  instance.defaults.timeout = 3000
//   instance.interceptors.request.use(
//     (request) => {
//       const token = getCookie('accessToken')
//       if (token) request.headers['Authorization'] = `Bearer ${token}`
//       return request
//     },
//     (error: AxiosError) => { // 에러타입 지정
//       console.log(error)
//       return Promise.reject(error)
//     }
//   )
  return instance
}

export const axiosInstance = getAxiosInstance()