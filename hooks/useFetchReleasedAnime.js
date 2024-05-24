import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useFetchReleasedAnime = () => {
   const [releasedAnime, setReleasedAnime] = useState([])

   useEffect(() => {
      const fetchAnimeSeason = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/anime/released`)
            setReleasedAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchAnimeSeason()
   }, [])

   return releasedAnime
}
