import { useEffect, useState, useCallback } from 'react'
import $api from '../app/http'

export const useFetchRandomAnime = () => {
   const [randomAnime, setRandomAnime] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   const fetchRandomAnime = useCallback(async () => {
      setLoading(true)
      setError(null)
      try {
         const { data } = await $api.get(`/api/anime/random`)
         setRandomAnime(data)
      } catch (error) {
         setError(error)
      } finally {
         setLoading(false)
      }
   }, [])

   useEffect(() => {
      fetchRandomAnime()
   }, [fetchRandomAnime])

   return { randomAnime, fetchRandomAnime, loading, error }
}
