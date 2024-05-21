import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { MainTitle } from '../../../widgets/main-title'
import { CarouselAnitopia } from '../../../widgets/carousel'
import { UpdatedAnime } from '../../../widgets/updated-anime'

export const Home = ({ route }) => {
   const { sliderList, animeList, animeSeason} = route.params;

   const seasonAnimeTitle = <MainTitle nameOfTheBlock={'Аніме весняного сезону'} />
   const carouselAnitopia = <CarouselAnitopia sliderList={animeSeason}/>
   const updatedAnimeTitle = <MainTitle nameOfTheBlock={'Оновлене аніме'} topBorder={true}/>
   const updatedAnimeList = <UpdatedAnime animeList={animeList} />

   const widgets = [seasonAnimeTitle, carouselAnitopia, updatedAnimeTitle, updatedAnimeList]

   return (
      <View style={styles.theWholePage}>
         <Header />
         <FlatList
            data={widgets}
            renderItem={({ item }) => <View style={styles.container}>{item}</View>}
            keyExtractor={(item, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
