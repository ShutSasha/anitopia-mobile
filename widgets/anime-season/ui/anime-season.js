import { useFetchAnimeSeason } from '../../../hooks/useFetchAnimeSeason'
import { CarouselAnitopia } from '../../carousel'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'

export const AnimeSeason = () => {
   const seasonAnime = useFetchAnimeSeason()

   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Аніме весняного сезону'} />
         <CarouselAnitopia carousel_data={seasonAnime} />
      </Container>
   )
}
