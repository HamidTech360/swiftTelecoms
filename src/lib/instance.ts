/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const { REACT_BASE_URL } = process.env

const instance = axios.create({
  baseURL: REACT_BASE_URL,
})

// request handler
const requestHandler = (request: InternalAxiosRequestConfig<any>) => {
  // get token
  const token = localStorage.getItem('token')
  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
}
// response handler
const responseHandler = (response: AxiosResponse<any, any>) => {
  if (response.status === 401) {
    window.location.href = '/login'
  }
  return response
}

// error handler
const errorHandler = (error: any) => Promise.reject(error)

// request interceptor
instance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
)
// response interceptor

instance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
)

export default instance
