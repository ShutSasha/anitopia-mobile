import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export const CustomRadiobutton = ({ children, value, selectedOption, setSelectedOption, fontSize }) => {
   return (
      <View style={styles.rootContainer}>
         <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => {
               setSelectedOption(value, children)
            }}
         >
            <Ionicons
               name={selectedOption == children ? 'radio-button-on' : 'radio-button-off'}
               size={24}
               color='#FF6666'
            />
            <View style={styles.label}>
               <Text style={styles.text}>{children}</Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}
