import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'
import { transformResponseToAnime } from '../shared/lib/anime/anime-info'
import { useStore } from './useStore'

export const useFetchUserData = () => {
   const { store } = useStore()
   const [userData, setUserData] = useState(null)
   const userID = store.user.id

   useEffect(() => {
      const fetchUserByID = async () => {
         try {
            const response = await axios.get(`${BASE_URL}/api/users/${userID}`)
            console.log(response.data)
            setUserData(response.data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchUserByID()
   })

   return userData
}
