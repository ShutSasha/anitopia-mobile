import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useFetchTop100Anime = () => {
   const [topAnime, setTopAnime] = useState([])
   console.log(topAnime)
   useEffect(() => {
      const fetchTopAnime = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/anime/top`)
            setTopAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchTopAnime()
   }, [])

   return topAnime
}
