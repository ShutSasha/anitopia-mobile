import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useFetchUpdatedAnime = () => {
   const [updatedAnime, setUpdatedAnime] = useState([])

   useEffect(() => {
      const fetchUpdatedAnime = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/anime/updated`)
            setUpdatedAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchUpdatedAnime()
   }, [])

   return updatedAnime
}
