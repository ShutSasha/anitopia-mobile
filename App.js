import { useOwnFonts } from './hooks/useOwnFonts'
import { AppNavigator } from './app/navigation/app-navigator'
import Store from './app/store/store'
import { createContext } from 'react'

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
