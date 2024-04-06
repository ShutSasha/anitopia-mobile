import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useFetchAnimeSeason = () => {
   const [animeSeason, setAnimeSeason] = useState()

   useEffect(() => {
      const fetchAnimeSeason = async () => {
         try {
            const res = await axios.get(`${BASE_URL}/api/anime/season-anime`)
            setAnimeSeason(res.data)
            console.log('success')
         } catch (error) {
            console.log(error)
         }
      }

      fetchAnimeSeason()
   }, [])

   return { animeSeason }
}
