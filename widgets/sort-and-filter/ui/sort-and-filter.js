import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { SortFilterOptions } from '../../../entities/sort-filter-options'
import SortIcon from '../../../assets/sort-icon.svg'
import FilterIcon from '../../../assets/filter-icon.svg'

export const SortAndFilter = () => {
   return (
      <View style={styles.mainBlock}>
         <SortFilterOptions image={SortIcon} text={"Сортування"}/>
         <SortFilterOptions image={FilterIcon} text={"Фільтри"}/>
      </View>
   )
}
