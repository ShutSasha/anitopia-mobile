import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   card_container: {
      backgroundColor: 'black',
      width: Dimensions.get('window').width / 2,
   },

   poster: {
      width: '100%',
      height: 260,
   },

   text_container: {
      backgroundColor: '#000',
      paddingHorizontal: 5,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
   },

   card_text: {
      width: '100%',
      maxWidth: Dimensions.get('window').width / 2,
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 16,
   },
})
