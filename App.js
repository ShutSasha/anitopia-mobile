import { useOwnFonts } from './hooks/useOwnFonts'
import { sliderList } from './consts/slider-list'
import { Home } from './pages/home'
import { Catalog } from './pages/catalog'
import { Search } from './pages/search'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Footer } from './widgets/footer'
import { Filter } from './pages/filter'

const Tab = createBottomTabNavigator()

export default function App() {
   const [fontsLoaded, fontError] = useOwnFonts()

   if (!fontsLoaded && !fontError) {
      return null
   }

   return (
      <NavigationContainer>
         <Tab.Navigator tabBar={() => <Footer />}>
            <Tab.Screen name='Home' options={{ headerShown: false }} component={Home}></Tab.Screen>
            <Tab.Screen name='Catalog' options={{ headerShown: false }} component={Catalog}></Tab.Screen>
            <Tab.Screen name='Search' component={Search} options={{ headerShown: false }}></Tab.Screen>
         </Tab.Navigator>
      </NavigationContainer>
   )
}
