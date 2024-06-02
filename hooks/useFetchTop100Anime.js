import { useEffect, useState } from 'react'
import $api from '../app/http'

export const useFetchTop100Anime = () => {
   const [topAnime, setTopAnime] = useState([])
   useEffect(() => {
      const fetchTopAnime = async () => {
         try {
            const { data } = await $api.get(`/api/anime/top`)
            setTopAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchTopAnime()
   }, [])

   return topAnime
}
