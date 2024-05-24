import {
   View,
   Text,
   ImageBackground,
   Image,
   TouchableOpacity,
   StyleSheet,
   Switch, SafeAreaView,
} from 'react-native'
import {
   DrawerContentScrollView, DrawerItem,
   DrawerItemList,
} from '@react-navigation/drawer'
import RandomIcon from '../../../../assets/random-icon.svg'
import Top100Icon from '../../../../assets/top-100-icon.svg'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
export const CustomDrawer = (props) => {
   return (
      <View style={{ flex: 1, backgroundColor: '#343A40' }}>
         <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
               paddingTop: 0,
            }}
         >
            <SafeAreaView
               style={{ flexDirection: 'row', alignItems: 'center'}}
            >
               <Image
                  alt="Not found"
                  source={require('../../../../assets/avatar.jpg')}
                  style={styles.userAvatar}
               />
               <Text
                  style={{
                     color: '#fff',
                     fontSize: 20,
                     fontFamily: 'BalooTamma2_800ExtraBold',
                  }}
               >
                  Username
               </Text>
            </SafeAreaView>
            <View style={{ flex: 1, paddingTop: 10 }}>
               <DrawerItem
                  label="Топ-100 аниме"
                  onPress={() => {}}
                  icon={() => (
                     <Top100Icon
                        width={22}
                        height={22}
                        fill="#fff"
                     />
                  )}
                  labelStyle={{ color: '#fff', fontSize: 17 }}
               />
               <DrawerItem
                  label="Рандомное аниме"
                  onPress={() => {}}
                  icon={() => (
                     <RandomIcon
                        width={22}
                        height={22}
                        fill="#fff"
                     />
                  )}
                  labelStyle={{ color: '#fff', fontSize: 17 }}
               />
               <DrawerItem
                  label="Налаштування"
                  onPress={() => props.navigation.navigate('Tabs')}
                  icon={() => (
                     <Ionicons
                        name="settings-outline"
                        size={22}
                        color="#fff"
                     />
                  )}
                  labelStyle={{ color: '#fff', fontSize: 17 }}
               />
            </View>
         </DrawerContentScrollView>
         <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
            <TouchableOpacity style={{ paddingVertical: 15 }}>
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="exit-outline" size={22} color="#fff" />
                  <Text
                     style={{
                        fontSize: 17,
                        marginLeft: 25,
                        color: '#fff'
                     }}
                  >
                     Sign Out
                  </Text>
               </View>
            </TouchableOpacity>
         </View>
      </View>
   )
}