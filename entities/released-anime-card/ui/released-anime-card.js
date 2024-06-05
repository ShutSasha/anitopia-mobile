import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export const ReleasedAnimeCard = ({ releasedItem, onCardPress, index, count }) => {
   const trimmedTitle = releasedItem.title.length > 22 ? releasedItem.title.slice(0, 22) + '...' : releasedItem.title
   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={[styles.animeBlock, index === 0 && styles.firstItem, index === count - 1 && styles.lastItem]}
         onPress={() => onCardPress(releasedItem)}
      >
         <View style={styles.animeCoverAndName}>
            <Image style={styles.animeCover} source={{ uri: releasedItem.poster_url }} />
            <Text style={styles.animeName}>{trimmedTitle}</Text>
         </View>
         <View style={styles.additionalInfo}>
            <View style={{ ...styles.text, paddingTop: 5 }}>
               <Text style={styles.additionalText}>{releasedItem.last_episode}</Text>
            </View>
            <View style={styles.text}>
               <Text style={styles.additionalText}>{releasedItem.type}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}
