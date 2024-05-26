import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { AnimeCard } from '../../../entities/anime-card'
import { useFetchTop100Anime } from '../../../hooks/useFetchTop100Anime'
import { useNavigation } from '@react-navigation/native'

export const TopAnimes = ({}) => {
   const topAnimes = useFetchTop100Anime()
   const navigation = useNavigation()

   const handlePressAnime = (anime) => {
      navigation.navigate('AnimePage', { anime: { ...anime, id: anime._id } })
   }

   return (
      <View style={styles.theWholePage}>
         <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            initialNumToRender={topAnimes.length}
            data={topAnimes}
            renderItem={({ item }) => <AnimeCard animeItem={item} onPress={() => handlePressAnime(item)} />}
            keyExtractor={(item) => item._id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
