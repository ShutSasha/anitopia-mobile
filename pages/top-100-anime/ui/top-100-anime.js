import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'
import { TopAnimes } from '../../../widgets/top-animes/ui/top-animes'
import { MainTitle } from '../../../widgets/main-title'

export const Top100Anime = () => {
   return (
      <View style={styles.wrapper}>
         <Header />
         <MainTitle nameOfTheBlock={'Топ 100 аніме'} topBorder={false} />
         <TopAnimes />
         <Footer />
      </View>
   )
}
