import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { UserTextInput } from '../../../shared/text-input'
import { ButtonWithText } from '../../../shared/button-with-text'
import { ButtonWithImage } from '../../../shared/button-with-image'
import { useStore } from '../../../hooks/useStore'
import { useNavigation } from '@react-navigation/native'

export const Authorization = () => {
   const navigation = useNavigation()

   const { store } = useStore()
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const [errorMessage, setErrorMessage] = useState('')

   const handleUserName = (text) => {
      setUserName(text)
   }
   const handlePassword = (text) => {
      setPassword(text)
   }

   const handleLogin = (event) => {
      event.preventDefault()

      store
         .login(userName, password)
         .then((isLoggedIn) => {
            if (isLoggedIn) {
               navigation.navigate('HomeStack')
            }
         })
         .catch((err) => {
            if (err.response && err.response.status === 400) {
               setErrorMessage('*Неправильне ім’я користувача або пароль')
            } else {
               setErrorMessage('*Щось пішло не так. Спробуйте ще раз.')
            }
         })
   }

   const handleChangePage = () => {
      navigation.navigate('Registration')
   }

   return (
      <SafeAreaView style={styles.theWholePage}>
         <View style={styles.container}>
            <Text style={styles.title}>Anitopia</Text>
            <Text style={styles.nameOfPage}>Авторизація</Text>
            <View style={styles.inputContainer}>
               <UserTextInput
                  typeOfInput={'userName'}
                  userInput={userName}
                  handleInput={handleUserName}
                  backgroundColour={'#FF6666'}
                  textColour={'#FFFFFF'}
                  inputTitle={"Ім'я користувача:"}
               />
            </View>
            <View style={styles.inputContainer}>
               <UserTextInput
                  typeOfInput={'password'}
                  userInput={password}
                  handleInput={handlePassword}
                  backgroundColour={'#FF6666'}
                  textColour={'#FFFFFF'}
                  inputTitle={'Пароль:'}
               />
            </View>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TouchableOpacity activeOpacity={0.6} onPress={handleChangePage}>
               <Text style={styles.registationText}>Зареєструватися</Text>
            </TouchableOpacity>
            <ButtonWithText onPress={handleLogin} text={'Увійти'} />
            <ButtonWithImage />
         </View>
      </SafeAreaView>
   )
}
