import $api from '../app/http'

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
      const { data } = await $api.get(`/api/anime/list`, {
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
