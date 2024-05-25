import { useNavigation } from '@react-navigation/native'
import { useFetchAnimeSeason } from '../../../hooks/useFetchAnimeSeason'
import { CarouselAnitopia } from '../../carousel'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'

export const AnimeSeason = () => {
   const navigation = useNavigation()
   const seasonAnime = useFetchAnimeSeason()

   const handleCardPress = (anime) => {
      navigation.navigate('AnimePage', { anime })
   }

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Аніме весняного сезону'} />
         <CarouselAnitopia carousel_data={seasonAnime} onCardPress={handleCardPress} />
      </Container>
   )
}
