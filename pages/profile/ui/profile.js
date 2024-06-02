import React from 'react'
import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'
import { RatedAnime } from '../../../widgets/rated-anime'
import { FlatList } from 'react-native'
import { UserData } from '../../../widgets/user-data'
import { useStore } from '../../../hooks/useStore'

export const Profile = () => {
   const { store } = useStore()
   return (
      <>
         <Header />
         <FlatList
            data={[<UserData />, <RatedAnime />]}
            renderItem={({ item }) => item}
            keyExtractor={(_, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
         <Footer />
      </>
   )
}
