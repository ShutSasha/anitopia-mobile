import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const CarouselCard = ({ slideItem, onCardPress }) => {
   return (
      <View style={styles.card_container}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => onCardPress(slideItem)}>
            <Image source={{ uri: slideItem.poster_url }} style={styles.poster} resizeMode='cover' />
            <View style={styles.text_container}>
               <Text style={styles.card_text} numberOfLines={1} ellipsizeMode='tail'>
                  {slideItem.title}
               </Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}
