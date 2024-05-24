import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabsNavigator } from '../../tab-navigator'
import {Catalog} from '../../../../pages/catalog'
import {Home} from '../../../../pages/home'
import React from 'react'
import { CustomDrawer } from '../../custom-navigator/ui/custom-navigator'
import { Authorization } from '../../../../pages/authorization'
import { Registration } from '../../../../pages/registration'


const Drawer = createDrawerNavigator()

export const AppNavigator = () => {
   return (
      <NavigationContainer>
         <Drawer.Navigator
            initialRouteName="Tabs"
            drawerType="back"
            drawerPosition="right"
            screenOptions={{
               headerShown: false,
               drawerBackgroundColor: "#262A2C"
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
         >
            <Drawer.Screen
               name="Tabs"
               component={TabsNavigator}
               options={{
                  drawerPosition: 'right',
               }}
            />
            <Drawer.Screen
               name="Authorization"
               component={Authorization}
               options={{
                  drawerPosition: 'right',
                  title: 'Топ-100',
               }}
            />
            <Drawer.Screen
               name="Registration"
               component={Registration}
               options={{
                  drawerPosition: 'right',
                  title: 'Випадкове аніме',
               }}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}