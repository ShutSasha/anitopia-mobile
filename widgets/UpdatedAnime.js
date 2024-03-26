import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import UpdatedAnimeItem from '../entities/UpdatedAnimeItem'

const animeList = {
   anime1 : {
      id: 1,
      name: 'Name of 1st anime',
      cover: require('../assets/avatar.jpg'),
      episode: 21,
      studio: 'Studio name'
   },

   anime2 : {
      id: 2,
      name: 'Name of 2nd anime',
      cover: require('../assets/avatar.jpg'),
      episode: 33,
      studio: 'Studio name'
   },

   anime3 : {
      id: 3,
      name: 'Name of 3rd anime',
      cover: require('../assets/avatar.jpg'),
      episode: 21,
      studio: 'Studio name'
   },

   anime4 : {
      id: 4,
      name: 'Name of 4th anime',
      cover: require('../assets/avatar.jpg'),
      episode: 33,
      studio: 'Studio name'
   },

   anime5 : {
      id: 5,
      name: 'Name of 5th anime',
      cover: require('../assets/avatar.jpg'),
      episode: 21,
      studio: 'Studio name'
   },

   anime6 : {
      id: 6,
      name: 'Name of 6th anime',
      cover: require('../assets/avatar.jpg'),
      episode: 33,
      studio: 'Studio name'
   },

   anime7 : {
      id: 7,
      name: 'Name of 7th anime',
      cover: require('../assets/avatar.jpg'),
      episode: 21,
      studio: 'Studio name'
   },

   anime8 : {
      id: 8,
      name: 'Name of 8th anime',
      cover: require('../assets/avatar.jpg'),
      episode: 33,
      studio: 'Studio name'
   },

   anime9 : {
      id: 9,
      name: 'Name of 9th anime',
      cover: require('../assets/avatar.jpg'),
      episode: 21,
      studio: 'Studio name'
   },

   anime10 : {
      id: 10,
      name: 'Name of 10th anime',
      cover: require('../assets/avatar.jpg'),
      episode: 33,
      studio: 'Studio name'
   },
}

export default function UpdatedAnime() {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Оновлене аніме</Text>
         <FlatList
            data = {Object.values(animeList)}
            renderItem = {({ item }) => (
               <UpdatedAnimeItem animeItem={item}/>
            )}
            keyExtractor={(item, index) => index.toString()}
         />
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
      fontFamily: 'Raleway_900Black',
      fontSize: 24,
      marginBottom: 20
   }
});


