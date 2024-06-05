import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const UserInfo = ({ label, value }) => {
   return (
      <View style={styles.wrapper}>
         <Text style={styles.label}>{label}:</Text>
         <Text style={styles.value}>{value}</Text>
      </View>
   )
}
