import { StyleSheet } from 'react-native'

export default StyleSheet.create({
   mainContainer: {
      flex: 1,
      padding: 10,
   },

   titleContainer: {
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 10,
   },

   title: {
      fontSize: 24,
      fontWeight: 'bold',
   },

   contentContainer: {
      flexDirection: 'row',
   },

   poster: {
      width: 180,
      height: 240,
      marginRight: 15,
   },

   infoContainer: {
      flexWrap: 'wrap',
      flex: 1,
   },

   info: {
      fontSize: 16,
      color: '#000000',
      paddingBottom: 5,
      flexWrap: 'wrap',
      width: '100%',
   },

   descriptionText: {
      paddingHorizontal: 5,
      marginTop: 15,
      fontSize: 15,
      color: '#000000',
      flexWrap: 'wrap',
      width: '100%',
   },

   screenshotsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
   },
   screenshotsWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 10,
   },
   screenshot: {
      width: '48%',
      height: 100,
      marginBottom: 10,
   },

   commentsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
   },

   commentInput: {
      borderWidth: 1,
      borderColor: '#000000',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      marginBottom: 20,
   },

   boldLabel: {
      fontWeight: 'bold',
   },
})
