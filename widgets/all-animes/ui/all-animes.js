import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { AnimeCard } from '../../../entities/anime-card'
import { fetchAnimeList } from '../../../hooks/useFetchAnimeList'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useStore } from '../../../hooks/useStore'

export const AllAnimes = ({}) => {
   const { store } = useStore()
   const [animes, setAnimes] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [query, setQuery] = useState('')
   const {
      animeCatalogStore: { sortType, sortBy, genres, kinds, mpaa, year_start, year_end, episodes_start, episodes_end },
   } = store

   const fetchMore = async () => {
      try {
         const { data } = await fetchAnimeList(
            currentPage,
            20,
            query,
            store.animeCatalogStore.sortType,
            store.animeCatalogStore.sortBy,
            store.animeCatalogStore.genres.join(','),
            store.animeCatalogStore.kinds.join(','),
            store.animeCatalogStore.mpaa.join(','),
            store.animeCatalogStore.year_start,
            store.animeCatalogStore.year_end,
            store.animeCatalogStore.episodes_start,
            store.animeCatalogStore.episodes_end,
         )
         setAnimes((prevData) => [...prevData, ...data])
         setCurrentPage(currentPage + 1)
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      fetchMore()
   }, [sortType, sortBy, genres, kinds, mpaa, year_start, year_end, episodes_start, episodes_end])

   const navigation = useNavigation()

   const handlePressAnime = (anime) => {
      navigation.navigate('AnimePage', { animeID: anime._id })
   }

   return (
      <View style={styles.theWholePage}>
         <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            initialNumToRender={animes.length}
            data={animes}
            renderItem={({ item }) => <AnimeCard animeItem={item} onPress={() => handlePressAnime(item)} />}
            keyExtractor={(item) => item._id.toString()}
            onEndReached={fetchMore}
            bounces={true}
            overScrollMode="never"
         />
      </View>
   )
}
