import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import {SortOptions} from '../../../widgets/sort-options'

export const Search = () => {


   return (
      <View style={styles.theWholePage}>
         <SortOptions/>
      </View>
   )
}
