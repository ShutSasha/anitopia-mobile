import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
   },

   container: {
      backgroundColor: '#FFFFFF',
      height: '75%',
      width: '100%',
      borderRadius: 10,
      paddingTop: 10,
   },

   buttonsWrapper:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 15
   },

   dropButton:{
      backgroundColor: "#FFFFFF",
      borderColor: "#868E96",
      borderWidth: 1,
      width: '45%',
      height: 45,
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center'
   },

   applyButton:{
      backgroundColor: "#FF6666",
      width: '45%',
      height: 45,
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center'
   },

   dropButtonText:{
      fontSize: 17,
      color: "#868E96",
   },

   applyButtonText:{
      fontSize: 17,
      color: '#FFFFFF'
   },

})
