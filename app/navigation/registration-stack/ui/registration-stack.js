import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { VerifyAccount } from '../../../../pages/verify-account'
import { Registration } from '../../../../pages/registration'

const Stack = createStackNavigator()

export const RegistrationStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Registration' component={Registration} />
         <Stack.Screen name='VerifyAccount' component={VerifyAccount} />
      </Stack.Navigator>
   )
}
