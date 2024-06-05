import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },

   container: {
      width: '100%',
      padding: 20,
      backgroundColor: '#ffffff',
      borderRadius: 10,
   },

   titleAndCloseIcon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 15,
   },

   title: {
      fontSize: 19,
      fontFamily: 'Inter_400Regular',
      lineHeight: 19,
      color: '#000000',
      paddingBottom: 15,
   },

   sortOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10,
   },

   line: {
      width: '100%',
      paddingHorizontal: 20,
      height: 2,
      backgroundColor: '#868E96',
      marginBottom: 30,
   },

   label: {
      fontSize: 19,
      fontFamily: 'Inter_400Regular',
      lineHeight: 19,
      color: '#000000',
   },

   unselected: {
      backgroundColor: '#000000',
      margin: 5,
   },

   selected: {
      backgroundColor: 'blue',
      margin: 6,
      padding: 10,
      borderRadius: 10,
   },
})
