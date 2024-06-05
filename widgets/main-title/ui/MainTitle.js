import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const MainTitle = ({ nameOfTheBlock, topBorder }) => {
   return (
      <View style={styles.container}>
         <View style={[styles.titleBackground, topBorder && styles.topBorder]}>
            <Text style={styles.title}>{nameOfTheBlock}</Text>
         </View>
      </View>
   )
}
