import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      alignSelf: 'auto',
   },

   sliderBlock: {
      height: 200,
      width: '100%',
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
   },

   sliderCoverAndName: {
      width: '30%',
      height: 185,
      flexDirection: 'column',
      alignItems: 'center',
   },

   sliderCover: {
      width: 120,
      height: 160,
      borderRadius: 10,
   },

   sliderName: {
      fontFamily: 'Raleway_800ExtraBold',
      fontSize: 10,
      paddingTop: 5,
   },
})
