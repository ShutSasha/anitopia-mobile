import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { UpdatedAnimeCard } from '../../../entities/updated-anime-card'

export const UpdatedAnime = ({ animeList }) => {
   return (
      <View style={styles.container}>
         <View>
            {animeList &&
               animeList.map((anime, index) => (
                  <UpdatedAnimeCard key={anime.id} animeItem={anime} index={index} count={10} />
               ))}
         </View>
      </View>
   )
}
