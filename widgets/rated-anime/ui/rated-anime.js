import React, { useEffect, useState } from 'react'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { RatedAnimeCard } from '../../../entities/rated-anime-card'
import { useStore } from '../../../hooks/useStore'
import { observer } from 'mobx-react-lite'
import axios from 'axios'
import { BASE_URL } from '../../../app/http'

export const RatedAnime = observer(() => {
   const { store } = useStore()
   const [ratedAnime, setRatedAnime] = useState([])

   useEffect(() => {
      const fetchUserByID = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/users/${store.user.id}`)

            setRatedAnime(data.animeRatings)
         } catch (error) {
            console.log(error)
         }
      }

      fetchUserByID()
   }, [store.user.id])

   // const userData = useFetchUserData()
   // const ratedAnime = userData.animeRatings

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
