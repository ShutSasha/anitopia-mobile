import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { UserTextInput } from '../../../shared/text-input'
import { ButtonWithText } from '../../../shared/button-with-text'
import { ButtonWithImage } from '../../../shared/button-with-image'
import { useStore } from '../../../hooks/useStore'
import { useNavigation } from '@react-navigation/native'

export const VerifyAccount = () => {
   const navigation = useNavigation()

   const handleChangePage = () => {
      navigation.navigate('Home')
   }

   return (
      <SafeAreaView style={styles.theWholePage}>
         <View style={styles.container}>
            <Text style={styles.text}>Для активації аккаунту, перейдіть по ссилці на пошті</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={handleChangePage}>
               <Text style={styles.registationText}>Перейти на головну сторінку</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}
