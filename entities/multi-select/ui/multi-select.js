import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import MultiSelect from 'react-native-multiple-select'
import { styles } from './styles'

export const MultipleSelect = ({ data, header, inputHeader, selectedData, handleChange }) => {
   const [selectedItems, setSelectedItems] = useState(selectedData)

   useEffect(() => {
      setSelectedItems(selectedData)
   }, [selectedData])

   const onSelectedItemsChange = (selectedItems) => {
      setSelectedItems(selectedItems)
      handleChange(selectedItems)
   }

   return (
      <View>
         <Text style={styles.header}>{header}</Text>
         <MultiSelect
            items={data.map((item, index) => ({ id: index.toString(), name: item }))}
            uniqueKey='id'
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            fontSize={17}
            itemFontSize={17}
            selectText={inputHeader}
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
