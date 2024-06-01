import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Profile } from '../../../../pages/profile'
import { AnimePage } from '../../../../pages/anime-page'
import { UserSettings } from '../../../../pages/user-settings'

const Stack = createStackNavigator()

export const ProfileStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Profile' component={Profile} />
         <Stack.Screen name='UserSettings' component={UserSettings} />
         <Stack.Screen name='AnimePage' component={AnimePage} />
      </Stack.Navigator>
   )
}
