import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { CustomRadiobutton } from '../../../shared/custom-radiobutton'
import { useStore } from '../../../hooks/useStore'

export const SORT_RADIO_BUTTONS = [
   { label: 'Кількістю оцінок', value: 'shikimori_votes' },
   { label: 'Кількістю епізодів', value: 'episodes_count' },
   { label: 'Роком', value: 'year' },
   { label: 'Не сортувати', value: 'none' },
]
export const ASC_DESC_RADIO_BUTTONS = [
   { label: 'За зростанням', value: 'asc' },
   { label: 'За спаданням', value: 'desc' },
]

const sortOptions = ['Кількістю оцінок', 'Кількістю епізодів', 'Роком', 'Не сортувати']
const sortOrderOptions = ['За зростанням', 'За спаданням']

export const SortOptions = ({ visible, handleSortModal }) => {
   const { store } = useStore()

   const [sortOption, setSortOption] = useState(store.animeCatalogStore.sortType)
   const [sortOrder, setSortOrder] = useState(store.animeCatalogStore.sortBy)

   const handleSortOptionChange = (value, label) => {
      setSortOption(label)
      store.animeCatalogStore.setSortType(value)
   }

   const handleSortOrderChange = (value, label) => {
      setSortOrder(label)
      store.animeCatalogStore.setSortBy(value)
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
               {SORT_RADIO_BUTTONS.map((item) => (
                  <CustomRadiobutton
                     key={item.label}
                     value={item.value}
                     selectedOption={sortOption}
                     setSelectedOption={handleSortOptionChange}
                  >
                     {item.label}
                  </CustomRadiobutton>
               ))}
               <View style={styles.line}></View>
               {ASC_DESC_RADIO_BUTTONS.map((item) => (
                  <CustomRadiobutton
                     key={item.label}
                     value={item.value}
                     selectedOption={sortOrder}
                     setSelectedOption={handleSortOrderChange}
                  >
                     {item.label}
                  </CustomRadiobutton>
               ))}
            </View>
         </View>
      </Modal>
   )
}
