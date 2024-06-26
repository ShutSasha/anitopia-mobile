import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const SortFilterTitle = ({ image: ImageComponent, text, handleModal }) => {
   return (
      <View style={styles.mainBlock}>
         <TouchableOpacity activeOpacity={0.6} style={styles.optionBlock} onPress={() => handleModal(true)}>
            <ImageComponent style={styles.image} />
            <Text style={styles.text}>{text}</Text>
         </TouchableOpacity>
      </View>
   )
}
