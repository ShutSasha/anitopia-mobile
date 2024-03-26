import NavigationMenu from './widgets/NavigationMenu'
import Header from './widgets/Header'
import UpdatedAnime from './widgets/UpdatedAnime'
import { View, StyleSheet} from 'react-native'
import { useFonts, BalooTamma2_800ExtraBold } from '@expo-google-fonts/baloo-tamma-2';
import { Raleway_900Black, Raleway_500Medium} from '@expo-google-fonts/raleway';
export default function App() {
   let [fontsLoaded, fontError] = useFonts({
      BalooTamma2_800ExtraBold,
      Raleway_900Black,
      Raleway_500Medium
   });

   if (!fontsLoaded && !fontError) {
      return null;
   }
   return (
      <View style={styles.theWholePage}>
         <Header/>
         <UpdatedAnime />
         <NavigationMenu/>
      </View>

   )
}

const styles = StyleSheet.create({
   theWholePage : {
      flex: 1
   }
});


