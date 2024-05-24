import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'

export const ValueRange = ({item}) => {
   const [from, setFrom] = useState("");
   const [to, setTo] = useState("");

   const handleFromChange = (text) => {
      if (/^(19|20)?\d{0,2}$/.test(text)) {
         setFrom(text);
      }
   };

   const handleToChange = (text) => {
      if (/^(19|20)?\d{0,2}$/.test(text)) {
         setTo(text);
      }
   };

   return (
      <View>
         <Text style={styles.text}>{item.header}</Text>
         <View style={styles.inputWrapper}>
            <TextInput
               disabled={false}
               placeholder="Від"
               value={from}
               onChangeText={handleFromChange}
               maxLength={4}
               style={styles.textInput}
               mode="outlined"
               activeOutlineColor="#868E96"
               textColor="#868E96"
            />
            <TextInput
               placeholder="До"
               value={to}
               onChangeText={handleToChange}
               maxLength={4}
               style={styles.textInput}
               mode="outlined"
               activeOutlineColor="#868E96"
               textColor="#868E96"
            />
         </View>
      </View>

   )
}
