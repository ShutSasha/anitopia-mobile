import { View } from 'react-native'
import { styles } from './styles'
import { useFetchRandomAnime } from '../../../hooks/useRandomAnime'
import { AnimePage } from '../../anime-page'

export const RandomAnime = () => {
   const randomAnime = useFetchRandomAnime()

   return (
      <View style={styles.wrapper}>
         <AnimePage route={{ params: { anime: randomAnime } }} />
      </View>
   )
}
