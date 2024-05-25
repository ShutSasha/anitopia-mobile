import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const BASE_URL = 'https://anitopia-272e22b911e8.herokuapp.com'

const $api = axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
})

$api.interceptors.request.use(async (config) => {
   const token = await AsyncStorage.getItem('token')
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }
   return config
})

$api.interceptors.response.use(
   (config) => {
      return config
   },
   async (error) => {
      const originalRequest = error.config
      if (error.response.status == 401 && error.config && !error.config._isRetry) {
         originalRequest._isRetry = true
         try {
            const response = await axios.get(`${BASE_URL}/api/auth/refresh`, { withCredentials: true })
            await AsyncStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
         } catch (error) {
            console.error('Не авторизирован')
         }
      }
      throw error
   },
)

export default $api
