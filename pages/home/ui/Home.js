import React from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../../widgets/header'
import { UpdatedAnime } from '../../../widgets/updated-anime'
import { News } from '../../../widgets/news'
import { AnimeSeason } from '../../../widgets/anime-season'
import { Footer } from '../../../widgets/footer'

export const Home = () => {
   return (
      <>
         <Header />
         <FlatList
            data={[<AnimeSeason />, <UpdatedAnime />, <News />]}
            renderItem={({ item }) => item}
            keyExtractor={(_, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </>
   )
}
