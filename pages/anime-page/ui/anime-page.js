import React from 'react'
import { ScrollView, ActivityIndicator, Text } from 'react-native'
import { Header } from '../../../widgets/header'
import { TextInput } from 'react-native-paper'
import { useFetchAnimeID } from '../../../hooks/useAnime'
import { useComments } from '../../../hooks/useComments'
import { AnimeInfo } from '../../../widgets/anime-info'
import styles from './styles'

export const AnimePage = ({ route }) => {
   const { animeID } = route.params
   const animeInfo = useFetchAnimeID(animeID)
   /*   const comments = useComments(animeID)*/

   if (!animeInfo) {
      return <ActivityIndicator size='large' color='#0000ff' />
   }

   return (
      <>
         <Header />
         <ScrollView style={styles.mainContainer}>
            <AnimeInfo animeInfo={animeInfo} />
            <Text style={styles.commentsTitle}>Коментарі</Text>
            <TextInput style={styles.commentInput} placeholder='Введіть ваш коментар...' />
         </ScrollView>
      </>
   )
}
