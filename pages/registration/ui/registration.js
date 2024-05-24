import React, { useState } from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import { styles } from './styles';
import { AuthorizationInput } from '../../../shared/authorization-input';
import { ButtonWithText } from '../../../shared/button-with-text';
import { ButtonWithImage } from '../../../shared/button-with-image';
import { CheckBoxInput } from '../../../shared/checkbox-input/ui/checkbox-input';
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
            <Text style={styles.nameOfPage}>Регістрація</Text>
            <AuthorizationInput
               typeOfInput={"userName"}
               userInput={userName}
               handleInput={handleUserName}
            />
            <AuthorizationInput
               typeOfInput={"email"}
               userInput={email}
               handleInput={handleEmail}
            />
            <AuthorizationInput
               typeOfInput={"password"}
               userInput={password}
               handleInput={handlePassword}
            />
            <AuthorizationInput
               typeOfInput={"verifyPassword"}
               userInput={verifyPassword}
               handleInput={handleVerifyPassword}
            />
            <CheckBoxInput checkBoxInput={checkBoxInput} handleCheckBox={handleCheckBox} />
            <ButtonWithText text={"Зарегіструватися"} />
            <ButtonWithImage />
         </KeyboardAwareScrollView>
      </SafeAreaView>
   );
};
