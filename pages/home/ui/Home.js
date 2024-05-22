import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../widgets/header'
import { MainTitle } from '../../../widgets/main-title'
import { CarouselAnitopia } from '../../../widgets/carousel'
import { UpdatedAnime } from '../../../widgets/updated-anime'
import { Schedule } from '../../../widgets/schedule'
import { Categories } from '../../../widgets/categories'
import { News } from '../../../widgets/news'

export const Home = ({ route }) => {
   const { sliderList, animeList, scheduleList, categoriesList, newsList } = route.params

   const seasonAnimeTitle = <MainTitle nameOfTheBlock={'Аніме весняного сезону'} />
   const carouselSeason = <CarouselAnitopia sliderList={sliderList} />
   const updatedAnimeTitle = <MainTitle nameOfTheBlock={'Оновлене аніме'} topBorder={true} />
   const updatedAnimeList = <UpdatedAnime animeList={animeList} />
   const scheduleAnimeTitle = <MainTitle nameOfTheBlock={'Розклад аніме'} topBorder={true} />
   const carouselSchedule = <Schedule scheduleList={scheduleList} />
   const animeCategoriesTitle = <MainTitle nameOfTheBlock={'Аніме за категоріями'} topBorder={true} />
   const animeCategories = <Categories categoriesList={categoriesList} />
   const newsTitle = <MainTitle nameOfTheBlock={'Останні новини сайту'} topBorder={true} />
   const news = <News newsList={newsList} />

   const widgets = [
      seasonAnimeTitle,
      carouselSeason,
      updatedAnimeTitle,
      updatedAnimeList,
      scheduleAnimeTitle,
      carouselSchedule,
      animeCategoriesTitle,
      animeCategories,
      newsTitle,
      news,
   ]

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
