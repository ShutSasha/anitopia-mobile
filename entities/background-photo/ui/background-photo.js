import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const BackgroundPhoto = ({ backgroundPicture }) => {
   return (
      <View style={styles.wrapper}>
         <Image source={backgroundPicture} style={styles.image} />
      </View>
   )
}
