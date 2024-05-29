import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Profile } from '../../../../pages/profile'

const Stack = createStackNavigator()

export const ProfileStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
   )
}
