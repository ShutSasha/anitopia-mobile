import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Profile } from '../../../../pages/profile'
import { AnimePage } from '../../../../pages/anime-page'
import { Settings } from '../../../../pages/settings'

const Stack = createStackNavigator()

export const ProfileStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Profile' component={Profile} />
         <Stack.Screen name='Settings' component={Settings} />
         <Stack.Screen name='AnimePage' component={AnimePage} />
      </Stack.Navigator>
   )
}
