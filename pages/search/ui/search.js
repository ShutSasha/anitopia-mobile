import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import {MultipleSelect} from '../../../entities/multi-select'

export const Search = () => {


   return (
      <View style={styles.theWholePage}>
         <MultipleSelect name={"     Оберіть жанр"}  searchText={"Шукати жанри..."}/>
      </View>
   )
}
