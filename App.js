import { Home } from './pages/home'
import { useOwnFonts } from './hooks/useOwnFonts'
import { useFetchAnimeSeason } from './hooks/useFetchAnimeSeason'
import { animeList } from './consts/anime-list'
import { sliderList } from './consts/slider-list'

export default function App() {
   const [fontsLoaded, fontError] = useOwnFonts()
   const { animeSeason } = useFetchAnimeSeason()

   if (!fontsLoaded && !fontError) {
      return null
   }

   return (
      <>
         <Home sliderList={sliderList} animeList={animeList} />
      </>

      /*{animeSeason && animeSeason.map(item => (
         <Text key={item.id}>
            {item.id}
         </Text>
      ))}*/
   )
}
