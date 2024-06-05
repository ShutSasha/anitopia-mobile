import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const CarouselCard = ({ slideItem, onCardPress }) => {
   const imagePath = `https://shikimori.one/system/animes/original/${slideItem.shikimori_id}.jpg`
   return (
      <View style={styles.card_container}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => onCardPress(slideItem)}>
            <Image source={{ uri: imagePath}} style={styles.poster} resizeMode='cover' />
            <View style={styles.text_container}>
               <Text style={styles.card_text} numberOfLines={1} ellipsizeMode='tail'>
                  {slideItem.title}
               </Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}
