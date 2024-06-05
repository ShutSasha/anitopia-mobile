import React, { useCallback, useRef } from 'react'
import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'
import { RatedAnime } from '../../../widgets/rated-anime'
import { FlatList } from 'react-native'
import { UserData } from '../../../widgets/user-data'
import { useStore } from '../../../hooks/useStore'
import { useFocusEffect } from '@react-navigation/native'

export const Profile = () => {
   const { store } = useStore()
   const fetchUserByIDRef = useRef(null)

   const onFetchUserByID = useCallback((fetchUserByID) => {
      fetchUserByIDRef.current = fetchUserByID
   }, [])

   useFocusEffect(
      useCallback(() => {
         if (fetchUserByIDRef.current) {
            fetchUserByIDRef.current()
         }
      }, []),
   )

   return (
      <>
         <Header />
         <FlatList
            data={[<UserData />, <RatedAnime onFetchUserByID={onFetchUserByID} />]}
            renderItem={({ item }) => item}
            keyExtractor={(_, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
         <Footer />
      </>
   )
}
