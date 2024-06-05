import $api from '../app/http'

export const fetchSearchAnime = async (numberOfPage, numberOfAnimes, userInput) => {
   try {
      const { data } = await $api.get(`/api/anime/search`, {
         params: { page: numberOfPage, limit: numberOfAnimes, query: userInput },
      })
      return data
   } catch (error) {
      console.log(error)
   }
}
