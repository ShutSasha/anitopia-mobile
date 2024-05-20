import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { AnimeCard } from '../../../entities/anime-card'

export const AllAnimes = ({animeList}) => {
   return (
      <View style={styles.theWholePage}>
         <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            initialNumToRender={animeList.length}
            data={animeList}
            renderItem={({ item }) => <AnimeCard animeItem={item} />}
            keyExtractor={(item) => item.id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
