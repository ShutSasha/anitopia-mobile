import { View } from 'react-native'
import { styles } from './styles'
import { useFetchRandomAnime } from '../../../hooks/useRandomAnime'
import { AnimePage } from '../../anime-page'
import { Footer } from '../../../widgets/footer'

export const RandomAnime = () => {
   const randomAnime = useFetchRandomAnime()

   return (
      <View style={styles.wrapper}>
         <AnimePage route={{ params: { animeID: randomAnime._id } }} />
         <Footer />
      </View>
   )
}
