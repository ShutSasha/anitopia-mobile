import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { AllAnimes } from '../../../widgets/all-animes'
import {SortAndFilter} from '../../../widgets/sort-and-filter'
import {SortOptions} from '../../../widgets/sort-options'
import { useState } from 'react'
export const Catalog = ({ route }) => {
   const { animeList } = route.params;
   const [sortModal, setSortModal] = useState(false)
   const allAnimes = <AllAnimes animeList={animeList} />

   const widgets = [allAnimes]

   return (
      <View style={styles.theWholePage}>
         <SortOptions visible={sortModal}/>
         <Header />
         <SortAndFilter setSortModal={setSortModal} sortModal={sortModal}/>
         <FlatList
            data={widgets}
            renderItem={({ item }) => <View style={styles.container}>{item}</View>}
            keyExtractor={(item, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
