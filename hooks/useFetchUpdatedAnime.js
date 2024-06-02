import { useEffect, useState } from 'react'
import $api from '../app/http'

export const useFetchUpdatedAnime = () => {
   const [updatedAnime, setUpdatedAnime] = useState([])

   useEffect(() => {
      const fetchUpdatedAnime = async () => {
         try {
            const { data } = await $api.get(`/api/anime/updated`)
            setUpdatedAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchUpdatedAnime()
   }, [])

   return updatedAnime
}
