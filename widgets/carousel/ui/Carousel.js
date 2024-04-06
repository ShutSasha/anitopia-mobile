import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { CarouselCard } from '../../../entities/carousel-card'

export const Carousel = ({ sliderList, nameOfTheBlock }) => {
   return (
      <View style={styles.container}>
         <View style={styles.titleBackground}>
            <Text style={styles.title}>{nameOfTheBlock}</Text>
         </View>
         <View style={styles.sliderRow}>
            {sliderList &&
               sliderList.map((slide, index) => <CarouselCard key={slide.id} index={index} slideItem={slide} />)}
         </View>
      </View>
   )
}
