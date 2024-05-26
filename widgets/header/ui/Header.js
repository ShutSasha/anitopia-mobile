import React, { useEffect } from 'react'
import { SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import NotificationIcon from '../../../assets/notification-icon.svg'
import { useStore } from '../../../hooks/useStore'
import { observer } from 'mobx-react-lite'

export const Header = observer(() => {
   const { store } = useStore()

   useEffect(() => {
      console.log(store.user)
   }, [])

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.blockWithElements}>
            <TouchableOpacity onPress={() => console.log('Повідомлення')}>
               <NotificationIcon width={48} height={48} />
            </TouchableOpacity>
            <Text style={styles.name}>Anitopia</Text>
            <TouchableOpacity onPress={() => console.log('Профіль')}>
               <Image
                  style={styles.avatar}
                  source={
                     store.user && store.user.avatarLink
                        ? { uri: store.user.avatarLink }
                        : require('../../../assets/avatar.jpg')
                  }
               />
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
})
