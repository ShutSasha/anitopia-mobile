import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { AnimeCard } from '../../../entities/anime-card'
import { useFetchTop100Anime } from '../../../hooks/useFetchTop100Anime'

export const TopAnimes = ({}) => {

   const topAnimes = useFetchTop100Anime()

   return (
      <View style={styles.theWholePage}>
         <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            initialNumToRender={topAnimes.length}
            data={topAnimes}
            renderItem={({ item }) => <AnimeCard animeItem={item} />}
            keyExtractor={(item) => item._id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
