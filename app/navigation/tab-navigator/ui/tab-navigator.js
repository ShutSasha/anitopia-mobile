import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Footer } from '../../../../widgets/footer'
import { Home } from '../../../../pages/home'
import { Catalog } from '../../../../pages/catalog'
import { Search } from '../../../../pages/search'
import { StackNavigator } from '../../stack-navigator'

const Tab = createBottomTabNavigator()

const TabScreens = [
   { name: 'Home', component: Home },
   { name: 'Catalog', component: Catalog },
   { name: 'Search', component: Search }
]

export const TabsNavigator = () => {
   return (
      <Tab.Navigator tabBar={() => <Footer />}>
         {TabScreens.map((screen, index) => (
            <Tab.Screen
               key={index}
               name={screen.name}
               component={screen.component}
               options={{ headerShown: false }}
            />
         ))}
      </Tab.Navigator>
   )
}