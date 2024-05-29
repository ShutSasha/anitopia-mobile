import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Switch, SafeAreaView } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import RandomIcon from '../../../../assets/random-icon.svg'
import Top100Icon from '../../../../assets/top-100-icon.svg'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
export const CustomDrawer = (props) => {
   return (
      <View style={{ flex: 1, backgroundColor: '#343A40' }}>
         <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
               paddingTop: 0,
            }}
         >
            <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Image alt='Не знайдено' source={require('../../../../assets/avatar.jpg')} style={styles.userAvatar} />
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
                  label='Топ-100 аніме'
                  onPress={() => props.navigation.navigate('Top100Anime')}
                  icon={() => <Top100Icon width={22} height={22} fill='#fff' />}
                  labelStyle={{ color: '#fff', fontSize: 17 }}
               />
               <DrawerItem
                  label='Рандомне аніме'
                  onPress={() => props.navigation.navigate('RandomAnime')}
                  icon={() => <RandomIcon width={22} height={22} fill='#fff' />}
                  labelStyle={{ color: '#fff', fontSize: 17 }}
               />
               <DrawerItem
                  label='Профіль'
                  onPress={() => props.navigation.navigate('ProfileStack')}
                  icon={() => <EvilIcons name='user' size={26} color='#fff' />}
                  labelStyle={{ color: '#fff', fontSize: 17 }}
               />
            </View>
         </DrawerContentScrollView>
         <View style={{ paddingTop: 25, paddingBottom: 15, borderTopWidth: 1, borderTopColor: '#ccc' }}>
            <DrawerItem
               label='Зареєструватися'
               onPress={() => props.navigation.navigate('Registration')}
               icon={() => <AntDesign name='adduser' size={22} color='#fff' />}
               labelStyle={{ color: '#fff', fontSize: 17 }}
            />
            <DrawerItem
               label='Авторизизуватися'
               onPress={() => props.navigation.navigate('Authorization')}
               icon={() => <AntDesign name='user' size={22} color='#fff' />}
               labelStyle={{ color: '#fff', fontSize: 17 }}
            />
            <DrawerItem
               label='Вийти'
               onPress={() => props.navigation.navigate('Tabs')}
               icon={() => <Ionicons name='exit-outline' size={22} color='#fff' />}
               labelStyle={{ color: '#fff', fontSize: 17 }}
            />
         </View>
      </View>
   )
}
