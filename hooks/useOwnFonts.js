import { BalooTamma2_800ExtraBold, useFonts } from '@expo-google-fonts/baloo-tamma-2'
import { Raleway_500Medium, Raleway_600SemiBold, Raleway_800ExtraBold } from '@expo-google-fonts/raleway'
import {Inter_400Regular} from '@expo-google-fonts/inter'
export const useOwnFonts = () => {
   let [fontsLoaded, fontError] = useFonts({
      BalooTamma2_800ExtraBold,
      Raleway_800ExtraBold,
      Raleway_500Medium,
      Raleway_600SemiBold,
      Inter_400Regular
   })
   return [fontsLoaded, fontError]
}
