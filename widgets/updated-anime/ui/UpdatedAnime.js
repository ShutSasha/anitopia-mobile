import React from 'react'
import { UpdatedAnimeCard } from '../../../entities/updated-anime-card'
import { animeList } from '../../../consts/anime-list'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useFetchUpdatedAnime } from '../../../hooks/useFetchUpdatedAnime'

export const UpdatedAnime = () => {

   const updatedAnime = useFetchUpdatedAnime()

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Оновлене аніме'} topBorder={true} />
         {updatedAnime &&
            updatedAnime.map((anime) => (
               <UpdatedAnimeCard key={anime.id} animeItem={anime} index={updatedAnime.indexOf(anime)} count={updatedAnime.length}/>
            ))}
      </Container>
   )
}
