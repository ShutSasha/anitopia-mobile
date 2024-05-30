import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      alignSelf: 'auto',
   },

   animeBlock: {
      height: 50,
      width: '100%',
      backgroundColor: 'white',
      borderBottomColor: 'black',
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
      width: '90%',
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
      fontSize: 18,
      paddingLeft: 15,
   },

   additionalInfo: {
      width: '5%',
      height: '100%',
      alignItems: 'center',
   },

   additionalText: {
      width: '100%',
      height: '100%',
      alignItems: 'flex-end',
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 14,
      paddingTop: 15,
   },
})
