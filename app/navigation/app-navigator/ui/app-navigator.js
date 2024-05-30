import { NavigationContainer } from '@react-navigation/native'
import { TabsNavigator } from '../../tab-navigator'
import { RandomAnime } from '../../../../pages/random-anime'
import { Top100Anime } from '../../../../pages/top-100-anime'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AnimePage } from '../../../../pages/anime-page'
import React from 'react'
import { CustomDrawer } from '../../custom-navigator/ui/custom-navigator'
import { Authorization } from '../../../../pages/authorization'
import { Registration } from '../../../../pages/registration'
import { Profile } from '../../../../pages/profile'
import { ProfileStack } from '../../profile-stack'
import { useStore } from '../../../../hooks/useStore'

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
               name='Registration'
               component={Registration}
               options={{
                  drawerPosition: 'right',
                  title: 'Реєстрація',
               }}
            />
            <Drawer.Screen
               name='Authorization'
               component={Authorization}
               options={{
                  drawerPosition: 'right',
                  title: 'Авторизація',
               }}
            />
            <Drawer.Screen
               name='ProfileStack'
               component={ProfileStack}
               options={{
                  drawerPosition: 'right',
                  title: 'Авторизація',
               }}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}
