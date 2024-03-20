import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Image, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'


export default function Header() {
   return (
      <SafeAreaView style={styles.mainBlock}>
         <TouchableHighlight>
            <Image source={require('../assets/notification-icon.png')} />
         </TouchableHighlight>
         <Text style={styles.text}>Anitopia</Text>
         <TouchableHighlight>
            <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
         </TouchableHighlight>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   mainBlock : {
      width: '100%',
      height: 110,
      paddingLeft: '30px',
      paddingRight: '30px',
      backgroundColor: '#343A40',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },

   text : {
      color: '#FFFFFF',
      fontSize: 36,
      fontFamily: 'baloo-extraBold'
   },

   avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      resizeMode: 'contain',
      objectFit: 'cover'
   }
});
