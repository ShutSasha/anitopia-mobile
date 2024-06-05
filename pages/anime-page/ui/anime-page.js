import React from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { Header } from '../../../widgets/header'
import { useFetchAnimeID } from '../../../hooks/useAnime'
import { AnimeInfo } from '../../../widgets/anime-info'
import { AnimeComments } from '../../../widgets/anime-comments'
import styles from './styles'

export const AnimePage = ({ route }) => {
   const { animeID } = route.params
   const animeInfo = useFetchAnimeID(animeID)
   const fetchAnimeInfo = () => useFetchAnimeID(animeID)
   if (!animeInfo) {
      return <ActivityIndicator size='large' color='#0000ff' />
   }

   return (
      <>
         <Header />
         <ScrollView style={styles.mainContainer}>
            <AnimeInfo animeInfo={animeInfo} fetchAnimeInfo={fetchAnimeInfo} />
            <AnimeComments animeID={animeID} />
         </ScrollView>
      </>
   )
}
