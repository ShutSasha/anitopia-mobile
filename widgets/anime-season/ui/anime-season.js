import { CarouselAnitopia } from '../../Carousel'
import { Container } from '../../container'
import { MainTitle } from '../../main-title'

export const AnimeSeason = () => {
   return (
      <Container styles={{ width: '100%' }}>
         <MainTitle nameOfTheBlock={'Аніме весняного сезону'} />
         <CarouselAnitopia />
      </Container>
   )
}
