import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AnimePage } from '../../../../pages/anime-page'
import { Home } from '../../../../pages/home'

const Stack = createStackNavigator()

export const HomeStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Home' component={Home} />
         <Stack.Screen name='AnimePage' component={AnimePage} />
      </Stack.Navigator>
   )
}
