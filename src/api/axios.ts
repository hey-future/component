/*
 * @Author: wangmanna
 * @Date: 2023-10-19 10:36:33
 * @LastEditors: wangmanna
 * @LastEditTime: 2025-05-19 17:03:52
 * @Description: 
 */

import axios from 'axios'
import type { AxiosResponse } from 'axios'
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  timeout: 600000,
  withCredentials: true
})
axiosInstance.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (repsonse: AxiosResponse) => {
    const { code } = repsonse.data
    if (code === undefined || code === null) return Promise.resolve(repsonse)
    return Promise.resolve(repsonse.data)
  },
  (err: AxiosResponse) => {
    return Promise.reject(err)
  }
)
export default axiosInstance
