import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import { styles } from './styles'
import { UserTextInput } from '../../../shared/text-input'
import { ButtonWithText } from '../../../shared/button-with-text'
import { ButtonWithImage } from '../../../shared/button-with-image'

export const Authorization = () => {

   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");

   const handleUserName = (text) => {
      setUserName(text);
   };
   const handlePassword = (text) => {
      setPassword(text);
   };

   return (
      <SafeAreaView style={styles.theWholePage}>
         <View style={styles.container}>
               <Text style={styles.title}>Anitopia</Text>
               <Text style={styles.nameOfPage}>Авторизація</Text>
               <UserTextInput
                  typeOfInput={"userName"}
                  userInput={userName}
                  handleInput={handleUserName}
               />
               <UserTextInput
                  typeOfInput={"password"}
                  userInput={password}
                  handleInput={handlePassword}
               />
               <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.registationText}>Зареєструватися</Text>
               </TouchableOpacity>
               <ButtonWithText text={"Увійти"}/>
               <ButtonWithImage />
         </View>
      </SafeAreaView>
   )
}
