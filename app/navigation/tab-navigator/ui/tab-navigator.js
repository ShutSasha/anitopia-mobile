import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Footer } from '../../../../widgets/footer'
import { HomeStack } from '../../home-stack'
import { CatalogStack } from '../../catalog-stack'
import { SearchStack } from '../../search-stack'

const Tab = createBottomTabNavigator()

const TabScreens = [
   { name: 'HomeStack', component: HomeStack },
   { name: 'CatalogStack', component: CatalogStack },
   { name: 'SearchStack', component: SearchStack }
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