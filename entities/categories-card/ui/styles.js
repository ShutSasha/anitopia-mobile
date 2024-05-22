import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   categoriesBlock: {
      backgroundColor: 'black',
      width: Dimensions.get('window').width / 2,
      height: 320,
   },

   categoriesCover: {
      width: '100%',
      height: 260,
   },

   categoriesName: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 16,
   },

   categoriesLastEpisode: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 16,
   },

   categoriesNameBlock: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
   },
})
