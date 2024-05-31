import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { AllAnimes } from '../../../widgets/all-animes'
import { SortAndFilter } from '../../../widgets/sort-and-filter'
import { SortOptions } from '../../../widgets/sort-options'
import { useState } from 'react'
import { FilterOptions } from '../../../widgets/filter-options'

export const Catalog = () => {
   const [sortModal, setSortModal] = useState(false)
   const [filterModal, setFilterModal] = useState(false)
   const handleSortModal = () => {
      setSortModal(!sortModal)
   }

   const handleFilterModal = () => {
      setFilterModal(!filterModal)
   }

   return (
      <View style={styles.theWholePage}>
         <Header />
         <SortAndFilter handleSortModal={handleSortModal} handleFilterModal={handleFilterModal} />
         <SortOptions visible={sortModal} handleSortModal={handleSortModal} />
         <FilterOptions visible={filterModal} handleFilterModal={handleFilterModal} />
         <FlatList
            data={[<AllAnimes />]}
            renderItem={({ item }) => <View style={styles.container}>{item}</View>}
            keyExtractor={(_, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
