import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import $api from '../../../app/http'

export const RatedAnimeCard = ({ ratedAnime, userRating, index, count }) => {
   const { animeId } = ratedAnime
   const [anime, setAnime] = useState()
   const navigation = useNavigation()
   const imagePath = `https://shikimori.one/system/animes/original/${ratedAnime.shikimori_id}.jpg`
   useEffect(() => {
      const findAnimeById = async () => {
         try {
            const { data } = await $api.get(`/api/anime/${animeId}`)
            setAnime(data)
         } catch (error) {
            console.log(error)
         }
      }

      findAnimeById()
   }, [])

   const handleCardPress = () => {
      navigation.navigate('AnimePage', { anime: anime })
   }

   const formatUserRating = (rating) => {
      return rating < 10 ? `${rating}  ` : rating.toString()
   }

   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={[styles.animeBlock, index === 0 && styles.firstItem, index === count - 1 && styles.lastItem]}
         onPress={handleCardPress}
      >
         <View style={styles.animeCoverAndName}>
            <Image style={styles.animeCover} source={{ uri: imagePath }} />
            <Text style={styles.animeName}>{ratedAnime.title}</Text>
         </View>
         <View style={styles.ratingsWrapper}>
            <View style={{ ...styles.ratingWrapper, marginRight: 10 }}>
               <AntDesign name='star' size={24} color='#FF6666' />
               <Text>{formatUserRating(userRating)}</Text>
            </View>
            <View style={styles.ratingWrapper}>
               <AntDesign name='star' size={24} color='#ED8A19' />
               {anime && <Text>{anime.material_data.shikimori_rating}</Text>}
            </View>
         </View>
      </TouchableOpacity>
   )
}
