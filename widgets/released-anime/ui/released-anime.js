import React from 'react'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useFetchReleasedAnime } from '../../../hooks/useFetchReleasedAnime'
import { ReleasedAnimeCard } from '../../../entities/released-anime-card'

export const ReleasedAnime = () => {
   const releasedAnime = useFetchReleasedAnime()

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Нещодавно вийшли аніме'} topBorder={true} />
         {releasedAnime &&
            releasedAnime.map((anime) => (
               <ReleasedAnimeCard
                  key={anime._id}
                  releasedItem={anime}
                  index={releasedAnime.indexOf(anime)}
                  count={releasedAnime.length}
               />
            ))}
      </Container>
   )
}
