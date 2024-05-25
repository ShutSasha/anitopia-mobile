import { BASE_URL } from './../http/index'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import AuthService from '../services/AuthService'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Store {
   user = {}
   isAuth = false
   isLoading = false
   test = 'test'

   constructor() {
      makeAutoObservable(this)
      this.setLoading = this.setLoading.bind(this)
   }

   setAuth(bool) {
      this.isAuth = bool
   }

   setUser(user) {
      this.user = user
   }

   setLoading(bool) {
      this.isLoading = bool
   }

   async login(username, password) {
      try {
         const response = await AuthService.login(username, password)
         await AsyncStorage.setItem('token', response.data.accessToken)
         this.setAuth(true)
         this.setUser(response.data.user)
         return true
      } catch (error) {
         console.error(error)
         return false
      }
   }

   async registration(username, password, email, pictureLink) {
      try {
         const response = await AuthService.registration(username, password, email, pictureLink)

         await AsyncStorage.setItem('token', response.data.accessToken)
         this.setAuth(true)
         this.setUser(response.data.user)
         return true
      } catch (error) {
         console.error(error)
         return false
      }
   }

   async logout() {
      try {
         await AuthService.logout()
         await AsyncStorage.removeItem('token')
         this.setAuth(false)
         this.setUser({})
      } catch (error) {
         console.error(error)
      }
   }

   async checkAuth() {
      try {
         this.setLoading(true)
         const response = await axios.get(`${BASE_URL}/api/auth/refresh`, { withCredentials: true })
         await AsyncStorage.setItem('token', response.data.accessToken)
         this.setAuth(true)
         this.setUser(response.data.user)
      } catch (e) {
         console.error(e)
      } finally {
         this.setLoading(false)
      }
   }

   async findOrCreate(username, password, email, pictureLink) {
      try {
         const response = await AuthService.checkUser(username)
         if (!response.data) {
            const registrationResponse = await this.registration(username, password, email, pictureLink)
            if (!registrationResponse) {
               console.error('Registration failed')
               return false
            }
            return
         }
         const loginResponse = await this.login(username, password)
         if (!loginResponse) {
            // Handle login failure
            console.error('Login failed')
            return false
         }
         return true
      } catch (e) {
         console.error(e)
         return false
      }
   }
}
