import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'
import { transformResponseToAnime } from '../shared/lib/anime/anime-info'

export const useFetchAnimeID = (anime) => {
   const [animeInfo, setAnimeInfo] = useState(null)
   const animeID = anime._id || anime.id

   useEffect(() => {
      const fetchAnimeByID = async () => {
         try {
            const response = await axios.get(`${BASE_URL}/api/anime/${animeID}`)
            const transformedData = transformResponseToAnime(response)
            setAnimeInfo(transformedData)
         } catch (error) {
            console.log(error)
         }
      }

      if (animeID) {
         fetchAnimeByID()
      } else {
         console.log('No anime ID')
      }
   }, [animeID])

   return animeInfo
}
