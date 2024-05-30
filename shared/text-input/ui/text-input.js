import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'

const typesOfInput = ['userName', 'password', 'verifyPassword', 'email']

const placeholders = ["Введіть ім'я користувача:", 'Введіть пароль:', 'Підтвердіть пароль:', 'Введіть пошту:']

export const UserTextInput = ({ typeOfInput, userInput, handleInput }) => {
   const [placeHolder, setPlaceHolder] = useState('')

   useEffect(() => {
      if (typeOfInput === typesOfInput[0]) {
         setPlaceHolder(placeholders[0])
      } else if (typeOfInput === typesOfInput[1]) {
         setPlaceHolder(placeholders[1])
      } else if (typeOfInput === typesOfInput[2]) {
         setPlaceHolder(placeholders[2])
      } else if (typeOfInput === typesOfInput[3]) {
         setPlaceHolder(placeholders[3])
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
