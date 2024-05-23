import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from './styles'
import MultiSelect from 'react-native-multiple-select';

const items = [{
   id: '92iijs7yta',
   name: 'Ondo'
}, {
   id: 'a0s0a8ssbsd',
   name: 'Ogun'
}, {
   id: '16hbajsabsd',
   name: 'Calabar'
}, {
   id: 'nahs75a5sg',
   name: 'Lagos'
}, {
   id: '667atsas',
   name: 'Maiduguri'
}, {
   id: 'hsyasajs',
   name: 'Anambra'
}, {
   id: 'djsjudksjd',
   name: 'Benue'
}, {
   id: 'sdhyaysdj',
   name: 'Kaduna'
}, {
   id: 'suudydjsjd',
   name: 'Abuja'
}
];

export const MultipleSelect = ({name}) => {

   const[selectedItems, setSelectedItems] = useState([]);

   const onSelectedItemsChange = selectedItems => {
      setSelectedItems(selectedItems);
   };

   return (
      <MultiSelect
         items={items}
         uniqueKey="id"
         onSelectedItemsChange={onSelectedItemsChange}
         selectedItems={selectedItems}
         fontSize="17"
         itemFontSize="17"
         selectText={name}
         searchInputPlaceholderText="Шукати..."
         onChangeInput={(text) => console.log(text)}
         altFontFamily="ProximaNova-Light"
         tagRemoveIconColor="#868E96"
         tagBorderColor="#868E96"
         tagTextColor="#868E96"
         selectedItemTextColor="#868E96"
         selectedItemIconColor="#868E96"
         itemTextColor="#000000"
         displayKey="name"
         searchInputStyle={styles.searchInputStyle}
         submitButtonColor="#FF6666"
         submitButtonText="Підтвердити"
         inputStyle={styles.inputStyle}
         styleInputGroup={styles.styleInputGroup}
         styleMainWrapper={styles.styleMainWrapper}
      />
   )
}
