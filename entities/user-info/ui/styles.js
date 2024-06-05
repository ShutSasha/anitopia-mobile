import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   wrapper: {
      flexDirection: 'row',
      marginLeft: 20,
      marginBottom: 20,
      alignItems: 'flex-start',
   },
   label: {
      fontWeight: 'bold',
      fontSize: 18,
      marginRight: 5,
   },
   value: {
      flexWrap: 'wrap',
      width: '75%',
      fontSize: 18,
   },
})
