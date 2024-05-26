import React from 'react'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useFetchReleasedAnime } from '../../../hooks/useFetchReleasedAnime'
import { ReleasedAnimeCard } from '../../../entities/released-anime-card'

import { useNavigation } from '@react-navigation/native'

export const ReleasedAnime = () => {
   const releasedAnime = useFetchReleasedAnime()
   const navigation = useNavigation()

   const handleCardPress = (anime) => {
      navigation.navigate('AnimePage', { anime: anime })
   }

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Нещодавно вийшли аніме'} topBorder={true} />
         {releasedAnime &&
            releasedAnime.map((anime, index) => (
               <ReleasedAnimeCard
                  key={anime._id}
                  releasedItem={anime}
                  onCardPress={handleCardPress}
                  index={index}
                  count={releasedAnime.length}
               />
            ))}
      </Container>
   )
}
