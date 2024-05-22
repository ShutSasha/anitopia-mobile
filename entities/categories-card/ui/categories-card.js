import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useFetchAnimeSeason } from '../../../hooks/useFetchAnimeSeason'

export const CategoriesCard = ({ categoryItem }) => {
   return (
      <View style={styles.categoriesBlock}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => console.log(categoryItem.name)}>
            <Image source={categoryItem.poster_url} style={styles.categoriesCover} resizeMode='cover' />
            <View style={styles.categoriesNameBlock}>
               <Text style={styles.categoriesName}>{categoryItem.title}</Text>
               <Text style={styles.categoriesLastEpisode}>{categoryItem.last_episode} серія</Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}
