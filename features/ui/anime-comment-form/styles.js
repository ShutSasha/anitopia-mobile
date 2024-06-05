import { StyleSheet } from 'react-native'

export default StyleSheet.create({
   commentInput: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      padding: 10,
      marginTop: 20,
      marginHorizontal: 10,
      marginBottom: 30,
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      paddingRight: 100,
   },
   sendButton: {
      position: 'absolute',
      right: 10,
      backgroundColor: '#FF6666',
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      height: 50,
      width: '25%',
      justifyContent: 'center',
   },
   buttonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
   },
})
