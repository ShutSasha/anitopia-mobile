import React from 'react'
import { NewsCard } from '../../../entities/news-card'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { useFetchReleasedAnime } from '../../../hooks/useFetchReleasedAnime'

export const ReleasedAnime = () => {
   const releasedAnime = useFetchReleasedAnime()

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Нещодавно вийшли аніме'} topBorder={true} />
         {releasedAnime &&
            releasedAnime.map((anime) => (
               <NewsCard
                  key={anime._id}
                  newsItem={anime}
                  index={releasedAnime.indexOf(anime)}
                  count={releasedAnime.length}
               />
            ))}
      </Container>
   )
}
