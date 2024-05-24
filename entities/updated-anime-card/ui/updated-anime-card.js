import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export const UpdatedAnimeCard = ({ animeItem, index, count }) => {
   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={[styles.animeBlock, index === 0 && styles.firstItem, index === count - 1 && styles.lastItem]}
         onPress={() => console.log(animeItem.name)}
      >
         <View style={styles.animeCoverAndName}>
            <Image style={styles.animeCover} source={{ uri: animeItem.poster_url }} />
            <Text style={styles.animeName}>{animeItem.title}</Text>
         </View>
         <View style={styles.additionalInfo}>
            <Text style={styles.additionalText}>{animeItem.last_episode}</Text>
         </View>
      </TouchableOpacity>
   )
}
