import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'
import { transformResponseToAnime } from '../shared/lib/anime/transform-anime-info-response'

export const useFetchAnimeID = (animeID) => {
   const [animeInfo, setAnimeInfo] = useState(null)

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
