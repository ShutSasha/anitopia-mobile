import * as React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import 'react-native-gesture-handler'
import { sliderList } from '../../../consts/slider-list'

export const CarouselAnitopia = () => {
   const COUNT = 2
   const PAGE_WIDTH = Dimensions.get('window').width
   const SLIDE_WIDTH = PAGE_WIDTH / COUNT

   const baseOptions = {
      vertical: false,
      width: SLIDE_WIDTH,
      height: 300,
      style: {
         width: PAGE_WIDTH,
      },
   }

   return (
      <View style={{ flex: 1 }}>
         <Carousel
            {...baseOptions}
            loop
            data={sliderList}
            scrollAnimationDuration={50}
            renderItem={({ item }) => (
               <View style={{ backgroundColor: 'black', height: 300 }}>
                  <Image source={item.cover} style={{ width: '100%', height: 260 }} resizeMode='cover' />
                  <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
                     <Text
                        style={{
                           color: 'white',
                           textAlign: 'center',
                           fontFamily: 'Raleway_600SemiBold',
                           fontSize: 14,
                        }}
                     >
                        {item.name}
                     </Text>
                  </View>
               </View>
            )}
         />
      </View>
   )
}
