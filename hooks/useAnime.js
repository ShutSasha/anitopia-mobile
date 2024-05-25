import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'
import { transformResponseToAnime } from '../shared/lib/anime/anime-info'

export const useFetchAnimeID = (id) => {
   const [animeInfo, setAnimeInfo] = useState(null)

   useEffect(() => {
      const fetchAnimeByID = async () => {
         try {
            const response = await axios.get(`${BASE_URL}/api/anime/${id}`)
            const transformedData = transformResponseToAnime(response)
            setAnimeInfo(transformedData)
         } catch (error) {
            console.log(error)
         }
      }

      fetchAnimeByID()
   }, [id])

   return animeInfo
}
