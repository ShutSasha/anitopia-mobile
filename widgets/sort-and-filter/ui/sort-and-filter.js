import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { SortFilterTitle } from '../../../entities/sort-filter-title'
import SortIcon from '../../../assets/sort-icon.svg'
import FilterIcon from '../../../assets/filter-icon.svg'

export const SortAndFilter = () => {
   return (
      <View style={styles.mainBlock}>
         <SortFilterTitle image={SortIcon} text={"Сортування"}/>
         <SortFilterTitle image={FilterIcon} text={"Фільтри"}/>
      </View>
   )
}
