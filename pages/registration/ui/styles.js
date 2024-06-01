import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   theWholePage: {
      flex: 1,
      backgroundColor: '#FF6666',
   },

   container: {
      flex: 1,
      width: '100%',
      alignSelf: 'auto',
   },

   contentContainer: {
      alignItems: 'center',
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

   inputContainer: {
      marginBottom: 20,
   },
   inputContainerWithError: {
      marginBottom: 5,
   },
   errorText: {
      fontSize: 15,
      lineHeight: 15,
      color: 'red',
      paddingTop: 10,
      paddingHorizontal: 20,
   },
})
