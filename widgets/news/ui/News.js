import React from 'react'
import { NewsCard } from '../../../entities/news-card'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { newsList } from '../../../consts/news-list'
import { useFetchReleasedAnime } from '../../../hooks/useFetchReleasedAnime'

export const News = () => {

   const releasedAnime = useFetchReleasedAnime()

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Нещодавно вийшли аніме'} topBorder={true} />
         {releasedAnime &&
            releasedAnime.map((news) => <NewsCard key={news.id} newsItem={news} index={releasedAnime.indexOf(news)} count={releasedAnime.length}/>)}
      </Container>
   )
}
