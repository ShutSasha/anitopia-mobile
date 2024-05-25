import { View} from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'
import { useFetchAnimeSeason } from '../../../hooks/useFetchRandomAnime'
import {AnimePage} from '../../anime-page'
export const RandomAnime = () => {

   const randomAnime = useFetchAnimeSeason()

   return (
      <View style={styles.wrapper}>
         <Header />
         <AnimePage route={randomAnime} />
         <Footer />
      </View>
   )
}
