import { useOwnFonts } from './hooks/useOwnFonts'
import { AppNavigator } from './app/navigation/app-navigator'
import Store from './app/store/store'
import { createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useStore } from './hooks/useStore'

// const Tab = createBottomTabNavigator()
const store = new Store()
export const Context = createContext({
   store,
})

export default function App() {
   const [fontsLoaded, fontError] = useOwnFonts()

   if (!fontsLoaded && !fontError) {
      return null
   }

   return (
      <Context.Provider value={{ store }}>
         <AppNavigator />
      </Context.Provider>
   )
}
