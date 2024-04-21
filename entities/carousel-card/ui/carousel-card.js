import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const CarouselCard = ({ slideItem }) => {
   return (
      <View style={styles.slideBlock}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => console.log(slideItem.name)}>
            <Image source={slideItem.cover} style={styles.slideCover} resizeMode='cover' />
            <View style={styles.slideNameBlock}>
               <Text style={styles.slideName}>{slideItem.name}</Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}
