import React, { useEffect } from 'react'
import { SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import NotificationIcon from '../../../assets/notification-icon.svg'
import { useStore } from '../../../hooks/useStore'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'

export const Header = observer(() => {
   const { store } = useStore()
   const navigation = useNavigation()

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.blockWithElements}>
            <TouchableOpacity style={styles.notificationIcon} onPress={() => console.log('Повідомлення')}>
               <NotificationIcon width={48} height={48} />
            </TouchableOpacity>
            <Text style={styles.name}>Anitopia</Text>
            {store.user && store.user.avatarLink && (
               <TouchableOpacity style={styles.avatarContainer} onPress={() => navigation.navigate('ProfileStack')}>
                  <Image style={styles.avatar} source={{ uri: store.user.avatarLink }} />
               </TouchableOpacity>
            )}
         </View>
      </SafeAreaView>
   )
})
