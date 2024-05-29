import React from 'react'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useFetchReleasedAnime } from '../../../hooks/useFetchReleasedAnime'

import { useNavigation } from '@react-navigation/native'
import { RatedAnimeCard } from '../../../entities/rated-anime-card'
import { useFetchUserData } from '../../../hooks/useFetchUserData'

export const RatedAnime = () => {
   const userData = useFetchUserData()
   const ratedAnime = userData.animeRatings

   const navigation = useNavigation()

   const handleCardPress = (anime) => {
      navigation.navigate('AnimePage', { anime: anime })
   }

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Оцінені аніме'} topBorder={true} />
         {ratedAnime &&
            ratedAnime.map((anime, index) => (
               <RatedAnimeCard
                  key={anime._id}
                  ratedItemId={anime._id}
                  userRating={anime.rating}
                  onCardPress={handleCardPress}
                  index={index}
                  count={ratedAnime.length}
               />
            ))}
      </Container>
   )
}
