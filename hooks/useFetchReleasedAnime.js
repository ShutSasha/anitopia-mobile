import { useEffect, useState } from 'react'
import $api from '../app/http'

export const useFetchReleasedAnime = () => {
   const [releasedAnime, setReleasedAnime] = useState([])

   useEffect(() => {
      const fetchAnimeSeason = async () => {
         try {
            const { data } = await $api.get(`/api/anime/released`)
            setReleasedAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchAnimeSeason()
   }, [])

   return releasedAnime
}
