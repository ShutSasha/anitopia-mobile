import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      alignSelf: 'auto',
   },

   animeBlock: {
      height: 50,
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      paddingRight: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },

   firstItem: {
      borderTopWidth: 0,
   },

   lastItem: {
      borderBottomWidth: 0,
   },

   animeCoverAndName: {
      width: '75%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
   },

   animeCover: {
      width: 40,
      height: 40,
      borderRadius: 30,
      resizeMode: 'contain',
      objectFit: 'cover',
   },

   animeName: {
      fontFamily: 'Raleway_500Medium',
      fontSize: 20,
      paddingLeft: 15,
   },

   additionalInfo: {
      width: '25%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
   },

   additionalText: {
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 14,
   },

   text: {
      width: '100%',
      height: '50%',
      alignItems: 'flex-end',
   },
})
