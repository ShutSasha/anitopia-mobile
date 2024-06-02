import axios from 'axios'
import { BASE_URL } from '../app/http'
import { useStore } from './useStore'

export const fetchAnimeList = async (
   numberOfPage,
   numberOfAnimes,
   query,
   sortType,
   sortBy,
   genres,
   kinds,
   mpaa,
   year_start,
   year_end,
   episodes_start,
   episodes_end,
) => {
   try {
      const { data } = await axios.get(`${BASE_URL}/api/anime/list`, {
         params: {
            page: numberOfPage,
            limit: numberOfAnimes,
            query,
            sortType,
            sortBy,
            genres,
            kinds,
            mpaa,
            year_start,
            year_end,
            episodes_start,
            episodes_end,
         },
      })
      return data
   } catch (error) {
      console.log(error)
   }
}
