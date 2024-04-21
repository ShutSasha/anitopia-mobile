import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { MainTitle } from '../../../widgets/main-title'
import { CarouselAnitopia } from '../../../widgets/carousel'
import { UpdatedAnime } from '../../../widgets/updated-anime'
import { Footer } from '../../../widgets/footer'

export const Home = ({ animeList }) => {
   const seasonAnimeTitle = <MainTitle nameOfTheBlock={'Аніме весняного сезону'} />
   const carouselAnitopia = <CarouselAnitopia />
   const updatedAnimeTitle = <MainTitle nameOfTheBlock={'Оновлене аніме'} />
   const updatedAnimeList = <UpdatedAnime animeList={animeList} />

   const widgets = [seasonAnimeTitle, carouselAnitopia, updatedAnimeTitle, updatedAnimeList]

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
