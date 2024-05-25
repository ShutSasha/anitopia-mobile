import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { AuthorizationInput } from '../../../shared/authorization-input'
import { ButtonWithText } from '../../../shared/button-with-text'
import { ButtonWithImage } from '../../../shared/button-with-image'
import { useStore } from '../../../hooks/useStore'

export const Authorization = () => {
   const { store } = useStore()
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')

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
               console.log('success logged in')
            }
         })
         .catch((err) => console.error(err))
   }

   return (
      <SafeAreaView style={styles.theWholePage}>
         <View style={styles.container}>
            <Text style={styles.title}>Anitopia</Text>
            <Text style={styles.nameOfPage}>Авторизація</Text>
            <AuthorizationInput typeOfInput={'userName'} userInput={userName} handleInput={handleUserName} />
            <AuthorizationInput typeOfInput={'password'} userInput={password} handleInput={handlePassword} />
            <TouchableOpacity activeOpacity={0.6}>
               <Text style={styles.registationText}>Зарегіструватися</Text>
            </TouchableOpacity>
            <ButtonWithText onPress={handleLogin} text={'Увійти'} />
            <ButtonWithImage />
         </View>
      </SafeAreaView>
   )
}
