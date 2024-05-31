import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from './styles'
import MultiSelect from 'react-native-multiple-select'

export const MultipleSelect = ({ data }) => {
   const [selectedItems, setSelectedItems] = useState([])

   const onSelectedItemsChange = (selectedItems) => {
      setSelectedItems(selectedItems)
   }
   const fontsize = 17

   const handleSelectedItemsChange = (items) => {
      // Выполняем проверку на допустимость выбранных элементов перед их установкой
      const validSelectedItems = items.filter((selectedItem) => data.items.some((item) => item.id === selectedItem))
      setSelectedItems(validSelectedItems)
   }

   return (
      <View>
         <Text style={styles.header}>{data.header}</Text>
         <MultiSelect
            items={data.items}
            uniqueKey='id'
            onSelectedItemsChange={handleSelectedItemsChange}
            selectedItems={selectedItems}
            fontSize={fontsize}
            itemFontSize={fontsize}
            selectText={data.inputHeader}
            searchInputPlaceholderText='Шукати...'
            onChangeInput={(text) => console.log(text)}
            altFontFamily='ProximaNova-Light'
            tagRemoveIconColor='#868E96'
            tagBorderColor='#868E96'
            tagTextColor='#868E96'
            selectedItemTextColor='#868E96'
            selectedItemIconColor='#868E96'
            itemTextColor='#000000'
            displayKey='name'
            searchInputStyle={styles.searchInputStyle}
            submitButtonColor='#FF6666'
            submitButtonText='Підтвердити'
            inputStyle={styles.inputStyle}
            styleInputGroup={styles.styleInputGroup}
            styleMainWrapper={styles.styleMainWrapper}
         />
      </View>
   )
}
