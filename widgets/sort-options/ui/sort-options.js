import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { CustomRadiobutton } from '../../../shared/custom-radiobutton'
import { useStore } from '../../../hooks/useStore'

const sortOptions = ['Кількістю оцінок', 'Кількістю епізодів', 'Роком', 'Не сортувати']
const sortOrderOptions = ['asc', 'desc']

export const SortOptions = ({ visible, handleSortModal }) => {
   const { store } = useStore()

   const [sortOption, setSortOption] = useState(store.animeCatalogStore.sortType)
   const [sortOrder, setSortOrder] = useState(store.animeCatalogStore.sortBy)
   const handleSortOptionChange = (sortOption) => {
      setSortOption(sortOption)
      store.animeCatalogStore.setSortType(sortOption)
   }
   const handleSortOrderChange = (sortOrder) => {
      setSortOrder(sortOrder)
      store.animeCatalogStore.setSortBy(sortOrder)
   }
   return (
      <Modal visible={visible} transparent={true} style={styles.container}>
         <View style={styles.modalContainer}>
            <View style={styles.container}>
               <View style={styles.titleAndCloseIcon}>
                  <Text style={styles.title}>Сортувати за:</Text>
                  <TouchableOpacity>
                     <AntDesign name='close' size={22} color='black' onPress={handleSortModal} />
                  </TouchableOpacity>
               </View>
               {sortOptions.map((singleOption) => (
                  <CustomRadiobutton
                     key={singleOption}
                     selectedOption={sortOption}
                     setSelectedOption={handleSortOptionChange}
                  >
                     {singleOption}
                  </CustomRadiobutton>
               ))}
               <View style={styles.line}></View>
               {sortOrderOptions.map((singleOption) => (
                  <CustomRadiobutton
                     key={singleOption}
                     selectedOption={sortOrder}
                     setSelectedOption={handleSortOrderChange}
                  >
                     {singleOption}
                  </CustomRadiobutton>
               ))}
            </View>
         </View>
      </Modal>
   )
}
