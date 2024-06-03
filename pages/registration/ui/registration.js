import React, { useState } from 'react'
import { View, Text, SafeAreaView, Platform } from 'react-native'
import { styles } from './styles'
import { UserTextInput } from '../../../shared/text-input'
import { ButtonWithText } from '../../../shared/button-with-text'
import { ButtonWithImage } from '../../../shared/button-with-image'
import { CheckboxInput } from '../../../shared/checkbox-input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useStore } from '../../../hooks/useStore'
import { useNavigation } from '@react-navigation/native'

export const Registration = () => {
   const { store } = useStore()
   const navigation = useNavigation()

   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const [verifyPassword, setVerifyPassword] = useState('')
   const [email, setEmail] = useState('')
   const [isUserAgree, setUserAgree] = useState(false)

   const [userNameError, setUserNameError] = useState('')
   const [passwordError, setPasswordError] = useState('')
   const [verifyPasswordError, setVerifyPasswordError] = useState('')
   const [emailError, setEmailError] = useState('')
   const [agreementError, setAgreementError] = useState('')

   const handleUserName = (text) => {
      setUserName(text)
      setUserNameError('')
   }
   const handlePassword = (text) => {
      setPassword(text)
      setPasswordError('')
   }
   const handleVerifyPassword = (text) => {
      setVerifyPassword(text)
      setVerifyPasswordError('')
   }
   const handleEmail = (text) => {
      setEmail(text)
      setEmailError('')
   }
   const handleCheckBox = () => {
      setUserAgree(!isUserAgree)
      setAgreementError('')
   }

   const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
   }

   const handleSubmit = (event) => {
      event.preventDefault()

      let isValid = true

      if (userName === '') {
         setUserNameError('*Потрібно вказати ім’я користувача')
         isValid = false
      }

      if (password === '') {
         setPasswordError('*Необхідно ввести пароль')
         isValid = false
      }

      if (verifyPassword !== password) {
         setVerifyPasswordError('*Паролі не збігаються!')
         isValid = false
      }

      if (email === '') {
         setEmailError('*Необхідно вказати електронну пошту')
         isValid = false
      } else if (!validateEmail(email)) {
         setEmailError('*Недійсний формат електронної пошти')
         isValid = false
      }

      if (!isUserAgree) {
         setAgreementError('*Ви повинні погодитися з угодою користувача')
         isValid = false
      }

      if (!isValid) {
         return
      }

      store
         .registration(userName, password, email, null)
         .then((isLoggedIn) => {
            if (isLoggedIn) {
               navigation.navigate('VerifyAccount')
            }
         })
         .catch((err) => console.error(err))
   }

   return (
      <SafeAreaView style={styles.theWholePage}>
         <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            enableOnAndroid={true}
            extraHeight={Platform.OS === 'ios' ? 80 : 0}
         >
            <Text style={styles.title}>Anitopia</Text>
            <Text style={styles.nameOfPage}>Реєстрація</Text>
            <View style={userNameError ? styles.inputContainerWithError : styles.inputContainer}>
               <UserTextInput
                  typeOfInput={'userName'}
                  userInput={userName}
                  handleInput={handleUserName}
                  backgroundColour={'#FF6666'}
                  textColour={'#FFFFFF'}
                  inputTitle={"Ім'я користувача:"}
               />
               {userNameError ? <Text style={styles.errorText}>{userNameError}</Text> : null}
            </View>
            <View style={emailError ? styles.inputContainerWithError : styles.inputContainer}>
               <UserTextInput
                  typeOfInput={'email'}
                  userInput={email}
                  handleInput={handleEmail}
                  backgroundColour={'#FF6666'}
                  textColour={'#FFFFFF'}
                  inputTitle={'Електронна пошта:'}
               />
               {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            </View>
            <View style={passwordError ? styles.inputContainerWithError : styles.inputContainer}>
               <UserTextInput
                  typeOfInput={'password'}
                  userInput={password}
                  handleInput={handlePassword}
                  backgroundColour={'#FF6666'}
                  textColour={'#FFFFFF'}
                  inputTitle={'Пароль:'}
               />
               {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>
            <View style={verifyPasswordError ? styles.inputContainerWithError : styles.inputContainer}>
               <UserTextInput
                  typeOfInput={'verifyPassword'}
                  userInput={verifyPassword}
                  handleInput={handleVerifyPassword}
                  backgroundColour={'#FF6666'}
                  textColour={'#FFFFFF'}
                  inputTitle={'Підтвердження паролю:'}
               />
               {verifyPasswordError ? <Text style={styles.errorText}>{verifyPasswordError}</Text> : null}
            </View>
            <View style={verifyPasswordError ? styles.inputContainerWithError : styles.inputContainer}>
               <CheckboxInput checkBoxInput={isUserAgree} handleCheckBox={handleCheckBox} />
               {agreementError ? <Text style={styles.errorText}>{agreementError}</Text> : null}
            </View>
            <ButtonWithText text={'Зареєструватися'} onPress={handleSubmit} />
            <ButtonWithImage />
         </KeyboardAwareScrollView>
      </SafeAreaView>
   )
}
