import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const CarouselCard = ({ slideItem }) => {
   return (
      <View style={[styles.sliderBlock]}>
         <View style={styles.sliderCoverAndName}>
            <TouchableOpacity>
               <Image style={styles.sliderCover} source={slideItem.cover} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(slideItem.id)}>
               <Text style={styles.sliderName}>{slideItem.name}</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}
