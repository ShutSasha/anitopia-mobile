import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const ButtonWithText = ({text}) => {

   return (
      <View style={styles.buttonWrapper}>
         <Text style={styles.text}>{text}</Text>
      </View>

   )
}
