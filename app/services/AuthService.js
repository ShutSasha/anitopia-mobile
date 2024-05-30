import $api from '../http'

export default class AuthService {
   static async login(username, password) {
      return $api.post('/api/auth/login', { username, password })
   }

   static async registration(username, password, email, pictureLink) {
      return $api.post('/api/auth/registration', {
         username: username,
         password: password,
         email: email,
         pictureLink: pictureLink,
      })
   }

   static async logout() {
      return $api.post('/api/auth/logout')
   }

   static async checkUser(username) {
      return $api.post('/api/auth/check-user', { username })
   }
}
