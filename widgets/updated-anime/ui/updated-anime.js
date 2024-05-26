import React from 'react'
import { UpdatedAnimeCard } from '../../../entities/updated-anime-card'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useFetchUpdatedAnime } from '../../../hooks/useFetchUpdatedAnime'
import { useNavigation } from '@react-navigation/native'

export const UpdatedAnime = () => {
   const updatedAnime = useFetchUpdatedAnime()
   const navigation = useNavigation()

   const handleCardPress = (anime) => {
      navigation.navigate('AnimePage', { anime: anime })
   }

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Оновлене аніме'} topBorder={true} />
         {updatedAnime &&
            updatedAnime.map((anime) => (
               <UpdatedAnimeCard
                  key={anime._id}
                  animeItem={anime}
                  onCardPress={handleCardPress}
                  index={updatedAnime.indexOf(anime)}
                  count={updatedAnime.length}
               />
            ))}
      </Container>
   )
}
