import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'

export const ValueRange = ({ header, checkTheNumberOfChars, from, to, handleChangeFrom, handleChangeTo }) => {
   const [localFrom, setLocalFrom] = useState(from)
   const [localTo, setLocalTo] = useState(to)

   useEffect(() => {
      setLocalFrom(from)
   }, [from])

   useEffect(() => {
      setLocalTo(to)
   }, [to])

   const onChangeFrom = (text) => {
      if (checkTheNumberOfChars) {
         if (/^(19|20)?\d{0,2}$/.test(text)) {
            setLocalFrom(text)
            handleChangeFrom(text)
         }
      } else {
         if (/^[0-9]*$/.test(text)) {
            setLocalFrom(text)
            handleChangeFrom(text)
         }
      }
   }
   const onChangeTo = (text) => {
      if (checkTheNumberOfChars) {
         if (/^(19|20)?\d{0,2}$/.test(text)) {
            setLocalTo(text)
            handleChangeTo(text)
         }
      } else {
         if (/^[0-9]*$/.test(text)) {
            setLocalTo(text)
            handleChangeTo(text)
         }
      }
   }

   return (
      <View>
         <Text style={styles.text}>{header}</Text>
         <View style={styles.inputWrapper}>
            <TextInput
               disabled={false}
               placeholder='Від'
               value={localFrom}
               onChangeText={onChangeFrom}
               maxLength={4}
               style={styles.textInput}
               mode='outlined'
               activeOutlineColor='#868E96'
               textColor='#868E96'
            />
            <TextInput
               placeholder='До'
               value={localTo}
               onChangeText={onChangeTo}
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
