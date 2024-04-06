import { BalooTamma2_800ExtraBold, useFonts } from '@expo-google-fonts/baloo-tamma-2'
import { Raleway_500Medium, Raleway_600SemiBold, Raleway_800ExtraBold } from '@expo-google-fonts/raleway'

export const useOwnFonts = () => {
   let [fontsLoaded, fontError] = useFonts({
      BalooTamma2_800ExtraBold,
      Raleway_800ExtraBold,
      Raleway_500Medium,
      Raleway_600SemiBold,
   })
   return [fontsLoaded, fontError]
}
