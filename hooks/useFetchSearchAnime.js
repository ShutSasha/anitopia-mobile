import axios from 'axios'
import { BASE_URL } from '../app/http'
import { useState } from 'react'

export const fetchSearchAnime = async (firstName, lastName, age, sex, country, about) => {
   try {
      const { data } = await axios.get(`${BASE_URL}/api/anime/search`, {
         params: { page: numberOfPage, limit: numberOfAnimes, query: userInput },
      })
      return data
   } catch (error) {
      console.log(error)
   }
}
