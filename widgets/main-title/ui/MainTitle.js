import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const MainTitle = ({ nameOfTheBlock }) => {
   return (
      <View style={styles.container}>
         <View style={styles.titleBackground}>
            <Text style={styles.title}>{nameOfTheBlock}</Text>
         </View>
      </View>
   )
}
