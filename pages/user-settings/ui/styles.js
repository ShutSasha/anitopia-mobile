import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: 20,
      backgroundColor: '#E2E2E2',
   },
   inputWrapper: {
      marginBottom: 20,
   },
   title: {
      fontSize: 17,
      paddingHorizontal: 20,
      marginBottom: 10,
   },
   buttonWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
   },
   applyButton: {
      backgroundColor: '#FF6666',
      width: '45%',
      height: 45,
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,
   },
   applyButtonText: {
      fontSize: 17,
      color: '#FFFFFF',
   },
   errorText: {
      fontSize: 15,
      lineHeight: 15,
      color: 'red',
      paddingTop: 10,
      paddingHorizontal: 20,
   },
})
