import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useFetchAnimeSeason = () => {
   const [animeSeason, setAnimeSeason] = useState([])

   useEffect(() => {
      const fetchAnimeSeason = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/anime/season`)
            setAnimeSeason(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchAnimeSeason()
   }, [])

   return animeSeason
}
