import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const AnimeCard = ({ animeItem, onPress }) => {
   const trimmedTitle = animeItem.title.length > 20 ? animeItem.title.slice(0, 20) + '...' : animeItem.title
   const imagePath = `https://shikimori.one/system/animes/original/${animeItem.shikimori_id}.jpg`

   return (
      <View style={styles.mainBlock}>
         <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <Image source={{ uri: imagePath }} style={styles.cover} resizeMode='cover' />
            <Text style={styles.text}>{trimmedTitle}</Text>
         </TouchableOpacity>
      </View>
   )
}
