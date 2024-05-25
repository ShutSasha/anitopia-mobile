import React, { useState } from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import { styles } from './styles';
import { UserTextInput } from '../../../shared/text-input'
import { ButtonWithText } from '../../../shared/button-with-text';
import { ButtonWithImage } from '../../../shared/button-with-image';
import { CheckboxInput } from '../../../shared/checkbox-input/ui/checkbox-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Registration = () => {

   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [verifyPassword, setVerifyPassword] = useState("");
   const [email, setEmail] = useState("");
   const [checkBoxInput, setCheckBoxInput] = useState(false);

   const handleUserName = (text) => {
      setUserName(text);
   };
   const handlePassword = (text) => {
      setPassword(text);
   };
   const handleVerifyPassword = (text) => {
      setVerifyPassword(text);
   };
   const handleEmail = (text) => {
      setEmail(text);
   };
   const handleCheckBox = () => {
      setCheckBoxInput(!checkBoxInput);
   };

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
            <UserTextInput
               typeOfInput={"userName"}
               userInput={userName}
               handleInput={handleUserName}
            />
            <UserTextInput
               typeOfInput={"email"}
               userInput={email}
               handleInput={handleEmail}
            />
            <UserTextInput
               typeOfInput={"password"}
               userInput={password}
               handleInput={handlePassword}
            />
            <UserTextInput
               typeOfInput={"verifyPassword"}
               userInput={verifyPassword}
               handleInput={handleVerifyPassword}
            />
            <CheckboxInput checkBoxInput={checkBoxInput} handleCheckBox={handleCheckBox} />
            <ButtonWithText text={"Зареєструватися"} />
            <ButtonWithImage />
         </KeyboardAwareScrollView>
      </SafeAreaView>
   );
};
