import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { CarouselCard } from '../../../entities/carousel-card'

export const CarouselAnitopia = ({sliderList}) => {
   return (
      <View style={styles.theWholePage}>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={sliderList.length}
            data={sliderList}
            renderItem={({ item }) => <CarouselCard slideItem={item} />}
            keyExtractor={(item) => item.id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
