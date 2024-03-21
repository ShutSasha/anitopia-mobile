import { SafeAreaView, StyleSheet, Image, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'


export default function Header() {
   return (
      <SafeAreaView style={styles.mainBlock}>
         <View style={styles.blockWithElements}>
            <TouchableHighlight>
               <Image source={require('../assets/notification-icon.png')} />
            </TouchableHighlight>
            <Text style={styles.name}>Anitopia</Text>
            <TouchableHighlight>
               <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
            </TouchableHighlight>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   mainBlock : {
      width: '100%',
      height: 110,
      backgroundColor: '#343A40',
      borderBottomWidth: 5,
      borderColor: '#FF6666'
   },

   blockWithElements : {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15
   },

   name : {
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


