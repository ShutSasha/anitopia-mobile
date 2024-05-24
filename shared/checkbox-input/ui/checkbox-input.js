import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
export const CheckBoxInput = ({checkBoxInput, handleCheckBox}) => {

   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={styles.inputWrapper}
         onPress={() => {handleCheckBox()}}
      >
         <View style={styles.checkBoxSquare}>
            {checkBoxInput && <FontAwesome5 name="check-square" size={24} color="#555765" />}
            {!checkBoxInput && <FontAwesome5 name="square" size={24} color="#555765" />}
         </View>
         <Text style={styles.textInput}>Я згоден з користувальницькою угодою</Text>
      </TouchableOpacity>

   )
}
