import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { CarouselCard } from '../../../entities/carousel-card'

export const CarouselAnitopia = ({ carousel_data, onCardPress }) => {
   return (
      <View style={styles.theWholePage}>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={carousel_data.length}
            data={carousel_data}
            renderItem={({ item }) => <CarouselCard slideItem={item} onCardPress={onCardPress} />}
            keyExtractor={(item) => item.id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
