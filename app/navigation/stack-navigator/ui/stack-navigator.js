import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AnimePage } from '../../../../pages/anime-page'
import { AnimeSeason } from '../../../../widgets/anime-season'
import { Home } from '../../../../pages/home'

const Stack = createStackNavigator()

export const StackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Home' component={Home} />
         <Stack.Screen name='AnimeSeason' component={AnimeSeason} />
         <Stack.Screen name='AnimePage' component={AnimePage} />
      </Stack.Navigator>
   )
}
