import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { FilterOptions } from '../../../widgets/filter-options'

export const Search = () => {

   return (
      <View style={styles.theWholePage}>
         <FilterOptions />
      </View>
   )
}
