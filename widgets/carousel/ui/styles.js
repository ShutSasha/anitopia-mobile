import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      alignItems: 'center',
      alignSelf: 'auto',
   },

   titleBackground: {
      backgroundColor: '#343A40',
      paddingHorizontal: 10,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 3,
      borderColor: '#FF6666',
   },

   title: {
      fontFamily: 'Raleway_800ExtraBold',
      fontSize: 24,
      color: 'white',
      marginBottom: 20,
      marginTop: 20,
   },

   sliderRow: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      overflow: 'scroll',
   },
})
