import React from 'react'
import { SafeAreaView, Image, Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'

export const Header = () => {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.blockWithElements}>
            <TouchableHighlight>
               <Image source={require('../../../assets/notification-icon.png')} />
            </TouchableHighlight>
            <Text style={styles.name}>Anitopia</Text>
            <TouchableHighlight>
               <Image style={styles.avatar} source={require('../../../assets/avatar.jpg')} />
            </TouchableHighlight>
         </View>
      </SafeAreaView>
   )
}
