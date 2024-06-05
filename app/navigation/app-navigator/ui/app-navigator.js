import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabsNavigator } from '../../tab-navigator'
import { RandomAnime } from '../../../../pages/random-anime'
import { Top100Anime } from '../../../../pages/top-100-anime'
import { AnimePage } from '../../../../pages/anime-page'
import { CustomDrawer } from '../../custom-navigator/'
import { Authorization } from '../../../../pages/authorization'
import { ProfileStack } from '../../profile-stack'
import { RegistrationStack } from '../../registration-stack'

const Drawer = createDrawerNavigator()

export const AppNavigator = () => {
   return (
      <NavigationContainer>
         <Drawer.Navigator
            initialRouteName='Tabs'
            drawerType='back'
            drawerPosition='right'
            screenOptions={{
               headerShown: false,
               drawerBackgroundColor: '#262A2C',
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
         >
            <Drawer.Screen
               name='Tabs'
               component={TabsNavigator}
               options={{
                  drawerPosition: 'right',
               }}
            />
            <Drawer.Screen
               name='AnimePage'
               component={AnimePage}
               options={{
                  drawerPosition: 'right',
               }}
            />
            <Drawer.Screen
               name='RandomAnime'
               component={RandomAnime}
               options={{
                  drawerPosition: 'right',
                  title: 'Рандомне аніме',
               }}
            />
            <Drawer.Screen
               name='Top100Anime'
               component={Top100Anime}
               options={{
                  drawerPosition: 'right',
                  title: 'Топ 100 аніме',
               }}
            />
            <Drawer.Screen
               name='Authorization'
               component={Authorization}
               options={{
                  drawerPosition: 'right',
                  title: 'Реєстрація',
               }}
            />
            <Drawer.Screen
               name='RegistrationStack'
               component={RegistrationStack}
               options={{
                  drawerPosition: 'right',
                  title: 'Реєстрація',
               }}
            />
            <Drawer.Screen
               name='ProfileStack'
               component={ProfileStack}
               options={{
                  drawerPosition: 'right',
                  title: 'Профіль',
               }}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}
