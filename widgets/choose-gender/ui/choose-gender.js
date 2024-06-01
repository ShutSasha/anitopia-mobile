import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { CustomRadiobutton } from '../../../shared/custom-radiobutton'

export const ChooseGender = ({ gender, handleGenderChange }) => {
   const genderOptions = ['Жіноча стать', 'Чоловіча стать', 'Не визначився']

   return (
      <View style={styles.container}>
         {genderOptions.map((genderOption) => (
            <CustomRadiobutton key={genderOption} selectedOption={gender} setSelectedOption={handleGenderChange}>
               {genderOption}
            </CustomRadiobutton>
         ))}
      </View>
   )
}
