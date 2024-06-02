import React, { useEffect, useState } from 'react'
import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'
import { styles } from './styles'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import { useStore } from '../../../hooks/useStore'
import { UserTextInput } from '../../../shared/text-input'
import { TextAreaInput } from '../../../shared/text-area-input'
import { MainTitle } from '../../../widgets/main-title'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ChooseGender } from '../../../widgets/choose-gender'
import { CountrySelect } from '../../../entities/country-select'
import $api from '../../../app/http'
import { useNavigation } from '@react-navigation/native'

export const UserSettings = () => {
   const navigation = useNavigation()
   const { store } = useStore()

   const [firstName, setFirstName] = useState(store.user.firstName)
   const [lastName, setLastName] = useState(store.user.lastName)
   const [age, setAge] = useState(store.user.age.toString())
   const [sex, setSex] = useState(store.user.sex)
   const [country, setCountry] = useState(store.user.country)
   const [about, setAbout] = useState(store.about)
   const [error, setError] = useState(false)

   const handleFirstNameChange = (text) => {
      setFirstName(text)
   }
   const handleLastNameChange = (text) => {
      setLastName(text)
   }
   const handleAgeChange = (text) => {
      setAge(text)
   }
   const handleSexChange = (text) => {
      setSex(text)
   }
   const handleCountryChange = (text) => {
      setCountry(text)
   }
   const handleAboutChange = (text) => {
      setAbout(text)
   }
   const handleChangeData = async () => {
      console.log(store)
      try {
         const { data } = await $api.put(`/api/users/${store.user.id}/personal-data`, {
            firstName: firstName,
            lastName: lastName,
            country: country,
            sex: sex,
            age: age,
            about: about,
         })
         store.setUser({ id: data._id, ...data })
         console.log(store)
         store.setAbout(about)
         navigation.navigate('Profile')
      } catch (err) {
         console.error(err)
      }
   }

   return (
      <>
         <Header />
         <MainTitle nameOfTheBlock={'Редагування профілю'} topBorder={false} />
         <KeyboardAwareScrollView
            style={styles.container}
            enableOnAndroid={true}
            extraHeight={Platform.OS === 'ios' ? 80 : 0}
         >
            <View style={styles.inputWrapper}>
               <UserTextInput
                  inputTitle={"Ім'я:"}
                  userInput={firstName}
                  handleInput={handleFirstNameChange}
                  backgroundColour={'#FFFFFF'}
                  textColour={'#000000'}
               />
            </View>
            <View style={styles.inputWrapper}>
               <UserTextInput
                  inputTitle={'Прізвище:'}
                  userInput={lastName}
                  handleInput={handleLastNameChange}
                  backgroundColour={'#FFFFFF'}
                  textColour={'#000000'}
               />
            </View>
            <View style={styles.inputWrapper}>
               <UserTextInput
                  inputTitle={'Вік:'}
                  userInput={age}
                  handleInput={handleAgeChange}
                  backgroundColour={'#FFFFFF'}
                  textColour={'#000000'}
               />
               {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
            <View style={styles.inputWrapper}>
               <Text style={styles.title}>Стать:</Text>
               <ChooseGender gender={sex} handleGenderChange={handleSexChange} />
            </View>
            <View style={styles.inputWrapper}>
               <Text style={styles.title}>Країна:</Text>
               <CountrySelect country={country} handleCountryChange={handleCountryChange} />
            </View>
            <TextAreaInput inputName={'Про себе:'} userInput={about} handleInput={handleAboutChange} />
            <View style={styles.buttonWrapper}>
               <TouchableOpacity style={styles.applyButton} onPress={handleChangeData}>
                  <Text style={styles.applyButtonText}>Редагувати</Text>
               </TouchableOpacity>
            </View>
         </KeyboardAwareScrollView>
         <Footer />
      </>
   )
}
