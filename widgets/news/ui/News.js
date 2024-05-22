import React from 'react'
import { NewsCard } from '../../../entities/news-card'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'
import { newsList } from '../../../consts/news-list'

export const News = () => {
   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Останні новини сайту'} topBorder={true} />
         {newsList &&
            newsList.map((news, index) => <NewsCard key={news.id} newsItem={news} index={index} count={10} />)}
      </Container>
   )
}
