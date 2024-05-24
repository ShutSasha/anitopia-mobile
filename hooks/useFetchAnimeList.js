import axios from 'axios'
import { BASE_URL } from '../app/http'

export const fetchAnimeList = async (numberOfPage, numberOfAnimes) => {
   try {
      const { data } = await axios.get(`${BASE_URL}/api/anime/list`, { params: { numberOfPage, numberOfAnimes } })
      return data
   } catch (error) {
      console.log(error)
   }
}
