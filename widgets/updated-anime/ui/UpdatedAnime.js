import React from 'react'
import { UpdatedAnimeCard } from '../../../entities/updated-anime-card'
import { animeList } from '../../../consts/anime-list'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'

export const UpdatedAnime = () => {
   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Оновлене аніме'} topBorder={true} />
         {animeList &&
            animeList.map((anime, index) => (
               <UpdatedAnimeCard key={anime.id} animeItem={anime} index={index} count={10} />
            ))}
      </Container>
   )
}
