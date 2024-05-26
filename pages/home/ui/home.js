import React from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../../widgets/header'
import { UpdatedAnime } from '../../../widgets/updated-anime'
import { ReleasedAnime } from '../../../widgets/released-anime'
import { AnimeSeason } from '../../../widgets/anime-season'

export const Home = () => {
   return (
      <>
         <Header />
         <FlatList
            data={[<AnimeSeason />, <UpdatedAnime />, <ReleasedAnime />]}
            renderItem={({ item }) => item}
            keyExtractor={(_, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </>
   )
}
