import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   slideBlock: {
      backgroundColor: 'black',
      width: Dimensions.get('window').width / 2,
      height: 300,
   },

   slideCover: {
      width: '100%',
      height: 260,
   },

   slideName: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 16,
   },

   slideNameBlock: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
   },
})
