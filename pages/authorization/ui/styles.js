import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   theWholePage: {
      flex: 1,
      backgroundColor: '#FF6666',
   },

   container: {
      width: '100%',
      alignItems: 'center',
      alignSelf: 'auto',
   },

   title: {
      fontSize: 48,
      color: '#FFFFFF',
      fontFamily: 'BalooTamma2_800ExtraBold',
      marginTop: 20,
      marginBottom: 10,
   },

   nameOfPage: {
      fontSize: 24,
      color: '#FFFFFF',
      fontFamily: 'BalooTamma2_800ExtraBold',
      marginBottom: 40,
   },

   registationText: {
      fontSize: 15,
      textDecorationLine: 'underline',
      color: '#FFFFFF',
      fontFamily: 'BalooTamma2_800ExtraBold',
      marginBottom: 30,
      marginTop: 5,
   },

   inputContainer: {
      marginBottom: 30,
   },

   errorText: {
      fontSize: 15,
      lineHeight: 15,
      color: 'red',
      paddingTop: 10,
      paddingHorizontal: 20,
   },
})
