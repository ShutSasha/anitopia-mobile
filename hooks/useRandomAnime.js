import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useFetchRandomAnime = () => {
   const [randomAnime, setRandomAnime] = useState([])

   useEffect(() => {
      const fetchRandomAnime = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/anime/random`)
            setRandomAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchRandomAnime()
   }, [])

   return randomAnime
}
