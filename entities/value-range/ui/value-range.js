import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'

export const ValueRange = ({ item, checkTheNumberOfChars }) => {
   const [from, setFrom] = useState('')
   const [to, setTo] = useState('')

   const handleFromChangeWithCharsCheck = (text) => {
      if (/^(19|20)?\d{0,2}$/.test(text)) {
         setFrom(text)
      }
   }

   const handleToChangeWithCharsCheck = (text) => {
      if (/^(19|20)?\d{0,2}$/.test(text)) {
         setTo(text)
      }
   }

   const handleFromChange = (text) => {
      if (/^[0-9]*$/.test(text)) {
         setFrom(text)
      }
   }

   const handleToChange = (text) => {
      if (/^[0-9]*$/.test(text)) {
         setTo(text)
      }
   }

   return (
      <View>
         <Text style={styles.text}>{item.header}</Text>
         <View style={styles.inputWrapper}>
            <TextInput
               disabled={false}
               placeholder='Від'
               value={from}
               onChangeText={checkTheNumberOfChars ? handleFromChangeWithCharsCheck : handleFromChange}
               maxLength={4}
               style={styles.textInput}
               mode='outlined'
               activeOutlineColor='#868E96'
               textColor='#868E96'
            />
            <TextInput
               placeholder='До'
               value={to}
               onChangeText={checkTheNumberOfChars ? handleToChangeWithCharsCheck : handleToChange}
               maxLength={4}
               style={styles.textInput}
               mode='outlined'
               activeOutlineColor='#868E96'
               textColor='#868E96'
            />
         </View>
      </View>
   )
}
