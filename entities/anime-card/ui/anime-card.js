import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const AnimeCard = ({ animeItem, onPress }) => {
   const trimmedTitle = animeItem.title.length > 20 ? animeItem.title.slice(0, 20) + '...' : animeItem.title
   return (
      <View style={styles.mainBlock}>
         <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <Image source={{ uri: animeItem.material_data.poster_url }} style={styles.cover} resizeMode='cover' />
            <Text style={styles.text}>{trimmedTitle}</Text>
         </TouchableOpacity>
      </View>
   )
}
