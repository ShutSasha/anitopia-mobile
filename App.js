import { useOwnFonts } from './hooks/useOwnFonts'
import { useFetchAnimeSeason } from './hooks/useFetchAnimeSeason'
import { sliderList } from './consts/slider-list'
import { animeList } from './consts/anime-list'
import { Catalog } from './pages/catalog'
import { Home } from './pages/home'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Footer} from './widgets/footer'
const Tab = createBottomTabNavigator();

export default function App() {
   const [fontsLoaded, fontError] = useOwnFonts()
   const animeSeason = useFetchAnimeSeason()

   if (!fontsLoaded && !fontError) {
      return null;
   }

   return (
      <NavigationContainer>
         <Tab.Navigator tabBar={() => <Footer />}>
            <Tab.Screen
               name="Home"
               initialParams={{ sliderList: sliderList, animeList: animeList, animeSeason: animeSeason}}
               options={{ headerShown: false}}
            >
               {(props) => <Home {...props} />}
            </Tab.Screen>
            <Tab.Screen
               name="Catalog"
               initialParams={{ animeList: sliderList }}
               options={{ headerShown: false }}
            >
               {(props) => <Catalog {...props} />}
            </Tab.Screen>
         </Tab.Navigator>
      </NavigationContainer>
   )
}
