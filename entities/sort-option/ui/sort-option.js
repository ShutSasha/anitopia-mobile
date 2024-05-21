import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { RadioButton } from 'react-native-paper'
export const SortOption = ({value, text }) => {
   const [checked, setChecked] = useState(null)

   return (
      <View style={styles.container}>
         <RadioButton
            value={value}
            status={checked === value ? 'checked' : 'unchecked'}
            onPress={() => setChecked(value)}
         />
         <Text style={styles.label}>{text}</Text>
      </View>
   )
}
