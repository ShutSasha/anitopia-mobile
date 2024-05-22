import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import {CustomRadiobutton} from '../../../shared/custom-radiobutton'
export const SortOptions = ({visible}) => {
   const sortOptions = ["Рейтингом", "Кількістю оцінок", "Датою випуску"];
   const sortOrderOptions = ["За зростанням", "За спаданням"];

   const [checkedSortOption, setCheckedSortOption] = useState(sortOptions[0])
   const [checkedSortOrder, setCheckedSortOrder] = useState(sortOrderOptions[0])

   const [visisbility, setVisisbility] = useState(visible)

   return (
      <Modal visible={visisbility} transparent={true} style={styles.container}>
         <View style={styles.modalContainer}>
            <View style={styles.container}>
               <View style={styles.titleAndCloseIcon}>
                  <Text style={styles.title}>Сортувати за:</Text>
                  <TouchableOpacity>
                     <AntDesign name="close" size={22} color="black" onPress={()=> setVisisbility(false)}/>
                  </TouchableOpacity>
               </View>
               {sortOptions.map((singleOption) => (
                  <CustomRadiobutton
                     key={singleOption}
                     selectedOption={checkedSortOption}
                     setSelectedOption={setCheckedSortOption}
                  >
                     {singleOption}
                  </CustomRadiobutton>
               ))}
               <View style={styles.line}></View>
               {sortOrderOptions.map((singleOption) => (
                  <CustomRadiobutton
                     key={singleOption}
                     selectedOption={checkedSortOrder}
                     setSelectedOption={setCheckedSortOrder}
                  >
                     {singleOption}
                  </CustomRadiobutton>
               ))}
            </View>
         </View>
      </Modal>
   )
}

