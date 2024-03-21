import NavigationMenu from './widgets/NavigationMenu'
import Header from './widgets/Header'
import * as Font from 'expo-font'
import { useEffect, useState, useCallback } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
// const loadFonts = async () => {
//    await Font.loadAsync({
//       'baloo-extraBold': require('./fonts/BalooTamma2-ExtraBold.ttf'),
//       // 'franklin-gothic-book': require('./fonts/FranklinGothikBook.ttf'),
//       // 'franklin-gothic-medium': require('./fonts/FranklinGothicMedium_2.ttf'),
//       // 'franklin-gothic-heavy': require('./fonts/FranklinGothicHeavy_2.ttf'),
//    });
// };


export default function App() {

   const [fontsLoaded, fontError] = useFonts({
      'baloo-extraBold': require('./fonts/BalooTamma2-ExtraBold.ttf')
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded, fontError]);

   if (!fontsLoaded && !fontError) {
      return null;
   }
   // const [fontsLoaded, setFontsLoaded] = useState(false);
   //
   // useEffect(() => {
   //    const loadAppFonts = async () => {
   //       await loadFonts();
   //       setFontsLoaded(true);
   //    };
   //
   //    loadAppFonts().then(r => console.log(r));
   // }, []);
   //
   // if (!fontsLoaded) {
   //    return null;
   // }

   return (
      <View style={styles.theWholePage}>
         <Header/>
         <NavigationMenu/>
      </View>

   )
}

const styles = StyleSheet.create({
   theWholePage : {
      flex: 1
   }
});


