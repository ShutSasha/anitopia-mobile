import React from 'react'
import { SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import NotificationIcon from '../../../assets/notification-icon.svg'

export const Header = () => {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.blockWithElements}>
            <TouchableOpacity>
               <NotificationIcon width={48} height={48} />
            </TouchableOpacity>
            <Text style={styles.name}>Anitopia</Text>
            <TouchableOpacity>
               <Image style={styles.avatar} source={require('../../../assets/avatar.jpg')} />
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}
