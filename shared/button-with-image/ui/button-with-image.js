import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import GoogleIcon from '../../../assets/google-icon.svg'

export const ButtonWithImage = () => {
   return (
      <View style={styles.buttonWrapper}>
         <GoogleIcon style={styles.image} />
      </View>
   )
}
