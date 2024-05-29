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
      width: '65%',
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

   ratingsWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
   },

   ratingWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
   },
})
