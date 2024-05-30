import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'

const typesOfInput = ['userName', 'password', 'verifyPassword', 'email']

const placeholders = ["Введіть ім'я користувача:", 'Введіть пароль:', 'Підтвердіть пароль:', 'Введіть пошту:']

export const UserTextInput = ({ typeOfInput, userInput, handleInput }) => {
   const [placeHolder, setPlaceHolder] = useState('')
   const [error, setError] = useState('')

   useEffect(() => {
      switch (typeOfInput) {
         case 'userName':
            setPlaceHolder(placeholders[0])
            break
         case 'password':
            setPlaceHolder(placeholders[1])
            break
         case 'verifyPassword':
            setPlaceHolder(placeholders[2])
            break
         case 'email':
            setPlaceHolder(placeholders[3])
            break
         default:
            setPlaceHolder('')
      }
   }, [typeOfInput])

   return (
      <View>
         <View style={styles.inputWrapper}>
            <TextInput
               disabled={false}
               placeholder={placeHolder}
               value={userInput}
               onChangeText={handleInput}
               style={styles.textInput}
               mode='outlined'
               placeholderTextColor='#FFFFFF'
               activeOutlineColor='#555765'
               textColor='#FFFFFF'
               secureTextEntry={typeOfInput === 'password' || typeOfInput === 'verifyPassword'}
            />
         </View>
      </View>
   )
}
