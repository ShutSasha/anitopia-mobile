import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

export const ButtonWithText = ({ text, onPress }) => {
   return (
      <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
         <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
   )
}
