import React from 'react'
import { WebView } from 'react-native-webview'
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native'
import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'
import styles from './styles'
import { useFetchAnimeID } from '../../../hooks/useAnime'
import { TextInput } from 'react-native-paper'
import Ratings from '../../../shared/lib/anime/ratings'
import { useComments } from '../../../hooks/useComments'

const AnimeInfo = ({ animeInfo }) => {
   const {
      title,
      posterURL,
      status,
      airedEpisodes,
      totalEpisodes,
      type,
      minimalAge,
      genres,
      year,
      description,
      screenshots,
      link,
   } = animeInfo

   return (
      <>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>{title || 'Назва невідома'}</Text>
         </View>
         <View style={styles.contentContainer}>
            <Image source={{ uri: posterURL || 'default_poster_uri' }} style={styles.poster} />
            <View style={styles.infoContainer}>
               <Ratings material_data={animeInfo.material_data} />
               <Text style={styles.info}>
                  <Text style={styles.boldLabel}>Статус:</Text> {status || 'невідомий'}
               </Text>
               <Text style={styles.info}>
                  <Text style={styles.boldLabel}>Епізоди:</Text> {airedEpisodes || '0'}/{totalEpisodes || '?'}
               </Text>
               <Text style={styles.info}>
                  <Text style={styles.boldLabel}>Тип:</Text> {type || 'невідомий'}
               </Text>
               <Text style={styles.info}>
                  <Text style={styles.boldLabel}>Вікові обмеження:</Text> {minimalAge ? `${minimalAge}+` : 'відсутні'}
               </Text>
               <Text style={styles.info}>
                  <Text style={styles.boldLabel}>Жанри:</Text>{' '}
                  {genres && genres.length > 0 ? genres.join(', ') : 'не вказані'}
               </Text>
               <Text style={styles.info}>
                  <Text style={styles.boldLabel}>Рік випуску:</Text> {year || 'невідомий'}
               </Text>
            </View>
         </View>
         <Text style={styles.descriptionText}>
            <Text style={styles.boldLabel}>Опис:</Text> {description || 'відсутній'}
         </Text>
         <WebView
            source={{ uri: `https:${link}` }}
            style={{ width: '100%', height: 260, marginTop: 20 }}
            allowsFullscreenVideo
            allowsInlineMediaPlayback
         />
         <Text style={styles.screenshotsTitle}>Скріншоти аніме</Text>
         <View style={styles.screenshotsWrapper}>
            {screenshots && screenshots.length > 0 ? (
               screenshots.map((screenshot, index) => (
                  <Image key={index} source={{ uri: screenshot }} style={styles.screenshot} />
               ))
            ) : (
               <Text style={styles.info}>Відсутні</Text>
            )}
         </View>
      </>
   )
}

export const AnimePage = ({ route }) => {
   const { anime } = route.params
   const animeInfo = useFetchAnimeID(anime.id)
   const comments = useComments(anime.id)

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
         <Footer />
      </>
   )
}
