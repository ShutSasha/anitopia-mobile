import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   slideBlock: {
      backgroundColor: 'black',
      width: Dimensions.get('window').width / 2,
      // height: 300,
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
      maxWidth: 100,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },

   slideNameBlock: {
      backgroundColor: 'red',
      paddingHorizontal: 5,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
   },
})
