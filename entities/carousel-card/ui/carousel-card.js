import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useFetchAnimeSeason } from '../../../hooks/useFetchAnimeSeason'

export const CarouselCard = ({ slideItem }) => {
   return (
      <View style={styles.slideBlock}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => console.log(slideItem.name)}>
            <Image source={slideItem.poster_url} style={styles.slideCover} resizeMode='cover' />
            <View style={styles.slideNameBlock}>
               <Text style={styles.slideName}>{slideItem.title}</Text>
            </View>
         </TouchableOpacity>
      </View>

   )
}
