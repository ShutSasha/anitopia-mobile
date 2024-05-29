import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { useFetchAnimeID } from '../../../hooks/useAnime'

export const RatedAnimeCard = ({ ratedItemId, userRating, onCardPress, index, count }) => {
   const ratedAnime = useFetchAnimeID(ratedItemId)

   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={[styles.animeBlock, index === 0 && styles.firstItem, index === count - 1 && styles.lastItem]}
         onPress={() => onCardPress(ratedItem)}
      >
         <View style={styles.animeCoverAndName}>
            <Image style={styles.animeCover} source={{ uri: ratedItem.poster_url }} />
            <Text style={styles.animeName}>{ratedItem.title}</Text>
         </View>
         <View style={styles.ratingsWrapper}>
            <View style={{ ...styles.ratingWrapper, marginRight: 10 }}>
               <AntDesign name='star' size={24} color='#FF6666' />
               <Text>{userRating}</Text>
            </View>
            <View style={styles.ratingWrapper}>
               <AntDesign name='star' size={24} color='#ED8A19' />
               <Text>{ratedAnime.imdb_rating}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}
