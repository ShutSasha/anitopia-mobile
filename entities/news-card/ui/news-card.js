import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export const NewsCard = ({ newsItem, index, count }) => {
   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={[styles.animeBlock, index === 0 && styles.firstItem, index === count - 1 && styles.lastItem]}
         onPress={() => console.log(newsItem.name)}
      >
         <View style={styles.animeCoverAndName}>
            <Image style={styles.animeCover} source={newsItem.poster_url} />
            <Text style={styles.animeName}>{newsItem.title}</Text>
         </View>
         <View style={styles.additionalInfo}>
            <View style={{ ...styles.text, paddingTop: 5 }}>
               <Text style={styles.additionalText}>{newsItem.last_episode}</Text>
            </View>
            <View style={styles.text}>
               <Text style={styles.additionalText}>{newsItem.type}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}
