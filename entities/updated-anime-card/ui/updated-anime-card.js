import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export const UpdatedAnimeCard = ({ animeItem, index }) => {
   return (
      <View style={[styles.animeBlock, index === 0 && styles.firstItem, index === 9 && styles.lastItem]}>
         <View style={styles.animeCoverAndName}>
            <TouchableOpacity>
               <Image style={styles.animeCover} source={animeItem.cover} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(animeItem.id)}>
               <Text style={styles.animeName}>{animeItem.name}</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.additionalInfo}>
            <TouchableOpacity style={{ ...styles.text, paddingTop: 5 }}>
               <Text style={styles.additionalText}>{animeItem.episode}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.text}>
               <Text style={styles.additionalText}>{animeItem.studio}</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}
