import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../../widgets/header'
import { UpdatedAnime } from '../../../widgets/updated-anime'
import { ReleasedAnime } from '../../../widgets/released-anime'
import { AnimeSeason } from '../../../widgets/anime-season'
import { useStore } from '../../../hooks/useStore'
import { toJS } from 'mobx'

export const Home = () => {
   const { store } = useStore()
   useEffect(() => {
      console.log(toJS(store.user))
   }, [store.user])

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
