import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AnimePage } from '../../../../pages/anime-page'
import { Search } from '../../../../pages/search'

const Stack = createStackNavigator()

export const SearchStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Search' component={Search} />
         <Stack.Screen name='AnimePage' component={AnimePage} />
      </Stack.Navigator>
   )
}
