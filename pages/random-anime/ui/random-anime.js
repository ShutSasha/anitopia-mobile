import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useFetchRandomAnime } from '../../../hooks/useRandomAnime'
import { AnimePage } from '../../anime-page'
import { Footer } from '../../../widgets/footer'
import RefreshIcon from '../../../assets/refresh-icon.svg'

export const RandomAnime = ({ navigation }) => {
   const { randomAnime, fetchRandomAnime, loading } = useFetchRandomAnime()

   if (loading) {
      return <ActivityIndicator size='large' color='#0000ff' />
   }

   return (
      <View style={styles.wrapper}>
         {randomAnime ? <AnimePage route={{ params: { animeID: randomAnime._id } }} /> : null}
         <TouchableOpacity activeOpacity={0.8} style={styles.randomAnimeButton} onPress={fetchRandomAnime}>
            <Text style={styles.buttonText}>Нове рандомне аніме </Text>
            <RefreshIcon width={25} height={25} />
         </TouchableOpacity>
         <Footer />
      </View>
   )
}
