import { StyleSheet } from 'react-native'

export default StyleSheet.create({
   commentContainer: {
      flexDirection: 'row',
      padding: 10,
      margin: 5,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#e0e0e0',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
   },
   commentImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginRight: 15,
   },
   commentContent: {
      flex: 1,
   },
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   commentUsername: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#FF6666',
   },
   commentText: {
      fontSize: 14,
      marginVertical: 10,
      maxWidth: '100%',
   },
   commentTimestamp: {
      fontSize: 12,
   },
   reactionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   likeIcon: {
      width: 25,
      height: 25,
   },
   dislikeIcon: {
      width: 25,
      height: 25,
   },
   likesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
   },
   dislikesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   moreButton: {
      marginLeft: 10,
   },
   editButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 10,
   },
   changeButton: {
      backgroundColor: '#00a262',
      padding: 10,
      borderRadius: 5,
      marginRight: 10,
      width: '45%',
   },
   cancelButton: {
      backgroundColor: '#ff5050',
      padding: 10,
      borderRadius: 5,
      width: '45%',
   },
   buttonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
   },
   menuContainer: {
      position: 'absolute',
      top: 25,
      right: 0,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
      padding: 5,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
   },
   menuOption: {
      paddingVertical: 5,
      paddingHorizontal: 10,
   },
   menuOptionText: {
      color: '#000',
   },
   commentInput: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      padding: 10,
      marginVertical: 20,
      marginRight: 10,
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      paddingRight: 100,
   },
})
