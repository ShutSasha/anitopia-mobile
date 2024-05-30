import React, { useState } from 'react'
import { View, Text, SafeAreaView, Platform } from 'react-native'
import { styles } from './styles'
import { UserTextInput } from '../../../shared/text-input'
import { ButtonWithText } from '../../../shared/button-with-text'
import { ButtonWithImage } from '../../../shared/button-with-image'
import { CheckboxInput } from '../../../shared/checkbox-input/ui/checkbox-input'
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
         setUserNameError('User name is required')
         isValid = false
      }

      if (password === '') {
         setPasswordError('Password is required')
         isValid = false
      }

      if (verifyPassword !== password) {
         setVerifyPasswordError('Passwords do not match!')
         isValid = false
      }

      if (email === '') {
         setEmailError('Email is required')
         isValid = false
      } else if (!validateEmail(email)) {
         setEmailError('Invalid email format')
         isValid = false
      }

      if (!isUserAgree) {
         setAgreementError('You must agree to the user agreement')
         isValid = false
      }

      if (!isValid) {
         return
      }

      store
         .registration(userName, password, email, null)
         .then((isLoggedIn) => {
            if (isLoggedIn) {
               navigation.navigate('HomeStack')
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
            <UserTextInput typeOfInput={'userName'} userInput={userName} handleInput={handleUserName} />
            {userNameError ? <Text style={styles.errorText}>{userNameError}</Text> : null}
            <UserTextInput typeOfInput={'email'} userInput={email} handleInput={handleEmail} />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <UserTextInput typeOfInput={'password'} userInput={password} handleInput={handlePassword} />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            <UserTextInput
               typeOfInput={'verifyPassword'}
               userInput={verifyPassword}
               handleInput={handleVerifyPassword}
            />
            {verifyPasswordError ? <Text style={styles.errorText}>{verifyPasswordError}</Text> : null}
            <CheckboxInput checkBoxInput={isUserAgree} handleCheckBox={handleCheckBox} />
            {agreementError ? <Text style={styles.errorText}>{agreementError}</Text> : null}
            <ButtonWithText text={'Зареєструватися'} onPress={handleSubmit} />
            <ButtonWithImage />
         </KeyboardAwareScrollView>
      </SafeAreaView>
   )
}
