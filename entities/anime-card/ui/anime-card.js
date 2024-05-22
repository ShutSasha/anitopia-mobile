import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const AnimeCard = ({ animeItem }) => {
   return (
      <View style={styles.mainBlock}>
         <TouchableOpacity activeOpacity={0.6}>
            <Image source={animeItem.cover} style={styles.cover} resizeMode='cover' />
            <Text style={styles.text}>{animeItem.name}</Text>
         </TouchableOpacity>
      </View>
   )
}