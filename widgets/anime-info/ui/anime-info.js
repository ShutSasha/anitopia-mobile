import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { View, Text, Image } from 'react-native'
import Ratings from '../../../shared/lib/anime/ratings'
import styles from './styles'
import { getAnimeInfoProperties } from '../const/anime-info-properties'

export const AnimeInfo = ({ animeInfo }) => {
   const [animeInfoData, setAnimeInfo] = useState([])

   useEffect(() => {
      const animeInfoResponse = getAnimeInfoProperties(animeInfo)
      setAnimeInfo(animeInfoResponse)
   }, [animeInfo])

   return (
      <>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>{animeInfo.title || 'Назва невідома'}</Text>
         </View>
         <View style={styles.contentContainer}>
            <Image source={{ uri: animeInfo.posterURL || 'default_poster_uri' }} style={styles.poster} />
            <View style={styles.infoContainer}>
               <Ratings material_data={animeInfo.material_data} />
               {animeInfoData &&
                  animeInfoData.map((info, index) => (
                     <View key={index} style={styles.info}>
                        <Text style={styles.boldLabel}>{info.property}</Text>
                        <Text>{info.propertyValue}</Text>
                     </View>
                  ))}
            </View>
         </View>
         <Text style={styles.descriptionText}>
            <Text style={styles.boldLabel}>Опис:</Text> {animeInfo.description || 'відсутній'}
         </Text>
         <WebView
            source={{ uri: `https:${animeInfo.link}` }}
            style={{ width: '100%', height: 260, marginTop: 20 }}
            allowsFullscreenVideo
            allowsInlineMediaPlayback
         />
         <Text style={styles.screenshotsTitle}>Скріншоти аніме</Text>
         <View style={styles.screenshotsWrapper}>
            {animeInfo.screenshots && animeInfo.screenshots.length > 0 ? (
               animeInfo.screenshots.map((screenshot, index) => (
                  <Image key={index} source={{ uri: screenshot }} style={styles.screenshot} />
               ))
            ) : (
               <Text style={styles.info}>Відсутні</Text>
            )}
         </View>
      </>
   )
}
