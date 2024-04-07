import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: Platform.OS === 'ios' ? 88 : 80,
      backgroundColor: '#343A40',
      marginTop: 'auto',
   },

   blockWithElements: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 15,
   },

   option: {
      paddingTop: 26,
      width: '20%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },

   optionText: {
      fontFamily: 'Raleway_500Medium',
      fontSize: 12,
      color: '#FFFFFF',
      paddingTop: 5,
   },
})
