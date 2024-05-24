import { useOwnFonts } from './hooks/useOwnFonts'
import {AppNavigator} from './app/navigation/app-navigator'

// const Tab = createBottomTabNavigator()

export default function App() {
   const [fontsLoaded, fontError] = useOwnFonts()

   if (!fontsLoaded && !fontError) {
      return null
   }

   return (
      <AppNavigator />
   )
}
