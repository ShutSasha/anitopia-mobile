import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AnimePage } from '../../../../pages/anime-page'
import { Catalog } from '../../../../pages/catalog'

const Stack = createStackNavigator()

export const CatalogStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Catalog' component={Catalog} />
         <Stack.Screen name='AnimePage' component={AnimePage} />
      </Stack.Navigator>
   )
}
