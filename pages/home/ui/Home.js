import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { CarouselAnitopia } from '../../../widgets/carousel'
import { UpdatedAnime } from '../../../widgets/updated-anime'
import { Footer } from '../../../widgets/footer'

export const Home = ({ animeList }) => {
   const widgets = [
      <UpdatedAnime nameOfTheBlock={'Аніме весняного сезону'} />,
      <CarouselAnitopia />,
      <UpdatedAnime animeList={animeList} nameOfTheBlock={'Оновлене аніме'} />,
      <UpdatedAnime animeList={animeList} nameOfTheBlock={'Нещодавно вийшли аніме'} />,
   ]

   return (
      <View style={styles.theWholePage}>
         <Header />
         <FlatList
            data={widgets}
            renderItem={({ item }) => <View style={styles.container}>{item}</View>}
            keyExtractor={(item, index) => index.toString()}
            bounces={false}
            overScrollMode='never'
         />
         <Footer />
      </View>
   )
}
