import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { Carousel } from '../../../widgets/carousel'
import { UpdatedAnime } from '../../../widgets/updated-anime'
import { Footer } from '../../../widgets/footer'

export const Home = ({ sliderList, animeList }) => {
   const widgets = [
      <Carousel sliderList={sliderList} nameOfTheBlock={'Аніме весняного сезону'} />,
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
         />
         <Footer />
      </View>
   )
}
