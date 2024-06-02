import { useEffect, useState } from 'react'
import $api from '../app/http'

export const useFetchAnimeSeason = () => {
   const [animeSeason, setAnimeSeason] = useState([])

   useEffect(() => {
      const fetchAnimeSeason = async () => {
         try {
            const response = await $api.get(`/api/anime/season`)
            const data = response.data.map((item) => ({
               ...item,
               _id: item.id,
            }))
            setAnimeSeason(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchAnimeSeason()
   }, [])

   return animeSeason
}
