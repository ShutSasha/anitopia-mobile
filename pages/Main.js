import NavigationMenu from '../widgets/NavigationMenu'
import Header from '../widgets/Header'
import BlockListAnime from '../widgets/BlockListAnime'
import { View, StyleSheet, FlatList} from 'react-native'
import React from 'react'


export default function Main({ animeList }) {

   const widgets = [
      <BlockListAnime animeList={animeList} nameOfTheBlock={'Оновлене аніме'} />,
      <BlockListAnime animeList={animeList} nameOfTheBlock={'Нещодавно вийшли аніме'} />
   ]

   return (
      <View style={styles.theWholePage}>
         <Header/>
         <FlatList
            data = {widgets}
            renderItem={({ item }) => (
               <View style = {styles.container}>
                  {item}
               </View>
            )}
         />
         <NavigationMenu/>
      </View>

   )
}

const styles = StyleSheet.create({
   theWholePage : {
      flex: 1,
   },

   container: {
      width: '100%',
      alignItems: 'center',
      alignSelf: 'auto'
   }
});


