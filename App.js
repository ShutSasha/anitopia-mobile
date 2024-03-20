import Header from './widgets/Header'
import * as Font from 'expo-font'
import { useEffect, useState } from 'react'

const loadFonts = async () => {
   await Font.loadAsync({
      'baloo-extraBold': require('./fonts/BalooTamma2-ExtraBold.ttf')
   });
};

export default function App() {
   const [fontsLoaded, setFontsLoaded] = useState(false);

   useEffect(() => {
      const loadAppFonts = async () => {
         await loadFonts();
         setFontsLoaded(true);
      };

      loadAppFonts();
   }, []);

   if (!fontsLoaded) {
      return null;
   }

   return (
      <Header/>
   )
}


