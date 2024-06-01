import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'

export const TextAreaInput = ({ inputName, userInput, handleInput }) => {
   return (
      <View style={styles.inputWrapper}>
         <Text style={styles.inputName}>{inputName}</Text>
         <TextInput
            multiline={true}
            numberOfLines={20}
            disabled={false}
            value={userInput}
            onChangeText={handleInput}
            style={styles.textInput}
            mode='outlined'
            activeOutlineColor='#555765'
            textColor='#000000'
         />
      </View>
   )
}
