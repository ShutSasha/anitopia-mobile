import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { CategoriesCard } from '../../../entities/categories-card'

export const Categories = ({ categoriesList }) => {
   return (
      <View style={styles.theWholePage}>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={categoriesList.length}
            data={categoriesList}
            renderItem={({ item }) => <CategoriesCard categoryItem={item} />}
            keyExtractor={(item) => item.id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
