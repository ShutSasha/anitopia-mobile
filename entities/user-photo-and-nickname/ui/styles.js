import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 20,
   },
   image: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginRight: 15,
   },
   iconWrapper: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
   },
   nicknameAndRolesWrapper: {
      flexDirection: 'column',
   },
   rolesWrapper: {
      flexDirection: 'row',
   },
   nickname: {
      fontSize: 22,
      fontWeight: '700',
   },
   userRoleWrapper: {
      backgroundColor: '#FF6666',
      paddingVertical: 3,
      paddingHorizontal: 5,
      borderRadius: 5,
      alignSelf: 'flex-start',
      marginTop: 5,
      marginRight: 10,
   },
   userRoleText: {
      fontSize: 15,
      color: '#FFFFFF',
   },
})
