import { NavigationContainer } from '@react-navigation/native'
import { TabsNavigator } from '../../tab-navigator'
import { RandomAnime } from '../../../../pages/random-anime'
import { Top100Anime } from '../../../../pages/top-100-anime'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AnimePage } from '../../../../pages/anime-page'
import React from 'react'
import { CustomDrawer } from '../../custom-navigator/ui/custom-navigator'

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
                  title: 'Топ-100',
               }}
            />
            <Drawer.Screen
               name='Top100Anime'
               component={Top100Anime}
               options={{
                  drawerPosition: 'right',
                  title: 'Випадкове аніме',
               }}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}
