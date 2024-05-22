import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { AllAnimes } from '../../../widgets/all-animes'
import { SortAndFilter } from '../../../widgets/sort-and-filter'
import { SortOptions } from '../../../widgets/sort-options'
import { useState } from 'react'

export const Catalog = () => {
   const [sortModal, setSortModal] = useState(false)

   const handleSortModal = () => {
      setSortModal(!sortModal)
   }

   return (
      <View style={styles.theWholePage}>
         <SortOptions visible={sortModal} handleSortModal={handleSortModal} />
         <Header />
         <SortAndFilter handleSortModal={handleSortModal} />
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
