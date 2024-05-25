import axios from 'axios'
import { BASE_URL } from '../app/http'

export const fetchSearchAnime = async (numberOfPage, numberOfAnimes, userInput) => {
   try {
      const { data } = await axios.get(`${BASE_URL}/api/anime/search`, { params: {page:numberOfPage,limit:numberOfAnimes,query: userInput} })
      console.log(data)
      return data
   } catch (error) {
      console.log(error)
   }
}

