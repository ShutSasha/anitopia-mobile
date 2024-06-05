import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export const UpdatedAnimeCard = ({ animeItem, onCardPress, index, count }) => {
   const trimmedTitle = animeItem.title.length > 30 ? animeItem.title.slice(0, 30) + '...' : animeItem.title

   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={[styles.animeBlock, index === 0 && styles.firstItem, index === count - 1 && styles.lastItem]}
         onPress={() => onCardPress(animeItem)}
      >
         <View style={styles.animeCoverAndName}>
            <Image style={styles.animeCover} source={{ uri: animeItem.poster_url }} />
            <Text style={styles.animeName}>{trimmedTitle}</Text>
         </View>
         <View style={styles.additionalInfo}>
            <Text style={styles.additionalText}>{animeItem.last_episode}</Text>
         </View>
      </TouchableOpacity>
   )
}
