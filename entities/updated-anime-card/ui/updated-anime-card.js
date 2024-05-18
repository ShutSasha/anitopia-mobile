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
            <Image style={styles.animeCover} source={animeItem.cover} />
            <Text style={styles.animeName}>{animeItem.name}</Text>
         </View>
         <View style={styles.additionalInfo}>
            <View style={{ ...styles.text, paddingTop: 5 }}>
               <Text style={styles.additionalText}>{animeItem.episode}</Text>
            </View>
            <View style={styles.text}>
               <Text style={styles.additionalText}>{animeItem.studio}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}