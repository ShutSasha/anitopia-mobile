import { Platform, StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: Platform.OS === 'ios' ? 110 : StatusBar.currentHeight + 65,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: '#343A40',
      borderBottomWidth: 3,
      borderColor: '#FF6666',
      justifyContent: 'center',
   },

   blockWithElements: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },

   notificationIcon: {
      position: 'absolute',
      left: 15,
   },

   avatarContainer: {
      position: 'absolute',
      right: 15,
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
      resizeMode: 'cover',
   },
})
