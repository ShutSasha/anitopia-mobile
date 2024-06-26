import React, { useEffect, useState, useCallback } from 'react'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { RatedAnimeCard } from '../../../entities/rated-anime-card'
import { useStore } from '../../../hooks/useStore'
import { observer } from 'mobx-react-lite'
import $api from '../../../app/http'

export const RatedAnime = observer(({ onFetchUserByID }) => {
   const { store } = useStore()
   const [ratedAnime, setRatedAnime] = useState([])

   const fetchUserByID = useCallback(async () => {
      try {
         const { data } = await $api.get(`/api/users/${store.user.id}`)
         setRatedAnime(data.animeRatings)
      } catch (error) {
         console.log(error)
      }
   }, [store.user.id])

   useEffect(() => {
      fetchUserByID()
   }, [fetchUserByID])

   useEffect(() => {
      onFetchUserByID(fetchUserByID)
   }, [fetchUserByID, onFetchUserByID])

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Оцінені аніме'} topBorder={true} />
         {ratedAnime &&
            ratedAnime.map((anime, index) => (
               <RatedAnimeCard
                  key={anime._id}
                  ratedAnime={anime}
                  userRating={anime.rating}
                  index={index}
                  count={ratedAnime.length}
               />
            ))}
      </Container>
   )
})
