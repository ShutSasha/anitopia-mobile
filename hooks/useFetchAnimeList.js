import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useFetchAnimeList = () => {
   const [animeList, setAnimeList] = useState([])

   useEffect(() => {
      const fetchAnimeList = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/anime/list`)
            setAnimeList(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchAnimeList()
   }, [])

   return animeList
}
