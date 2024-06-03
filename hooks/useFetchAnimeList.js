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
            query: query,
            [sortType]: sortBy,
            anime_genres: genres,
            anime_kind: kinds,
            rating_mpaa: mpaa,
            year_start: year_start,
            year_end: year_end,
            episodes_start: episodes_start,
            episodes_end: episodes_end,
         },
      })
      console.log(data)
      return data
   } catch (error) {
      console.log(error)
   }
}
