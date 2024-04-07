import { Platform, StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: Platform.OS === 'ios' ? 110 : StatusBar.currentHeight + 65,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: '#343A40',
      borderBottomWidth: 5,
      borderColor: '#FF6666',
   },

   blockWithElements: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 15,
   },

   name: {
      color: '#FFFFFF',
      fontSize: 36,
      fontFamily: 'BalooTamma2_800ExtraBold',
   },

   avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      resizeMode: 'contain',
      objectFit: 'cover',
   },
})
