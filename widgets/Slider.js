import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import BlockListAnimeItem from '../entities/BlockListAnimeItem'



export default function BlockListAnime(props) {
   const { animeList, nameOfTheBlock } = props;

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{nameOfTheBlock}</Text>
         <View>
            {Object.keys(animeList).map((animeKey, index) => (
               <BlockListAnimeItem key={animeKey} index={index} animeItem={animeList[animeKey]} />
            ))}
         </View>
      </View>

   )
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      alignItems: 'center',
      alignSelf: 'auto'
   },

   title: {
      fontFamily: 'Raleway_800ExtraBold',
      fontSize: 24,
      marginBottom: 20,
      marginTop: 30
   }
});


