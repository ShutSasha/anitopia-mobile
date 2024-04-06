import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { UpdatedAnimeCard } from '../../../entities/updated-anime-card'

export const UpdatedAnime = ({ animeList, nameOfTheBlock }) => {
   return (
      <View style={styles.container}>
         <View style={styles.titleBackground}>
            <Text style={styles.title}>{nameOfTheBlock}</Text>
         </View>
         <View>
            {animeList &&
               animeList.map((anime, index) => <UpdatedAnimeCard key={anime.id} index={index} animeItem={anime} />)}
         </View>
      </View>
   )
}
