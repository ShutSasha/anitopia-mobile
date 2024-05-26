import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { AnimeCard } from '../../../entities/anime-card'
import { fetchAnimeList } from '../../../hooks/useFetchAnimeList'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export const AllAnimes = ({}) => {
   const [animes, setAnimes] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [query, setQuery] = useState('')

   const fetchMore = async () => {
      try {
         const { data } = await fetchAnimeList(currentPage, 20, query)
         setAnimes((prevData) => [...prevData, ...data])
         setCurrentPage(currentPage + 1)
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      fetchMore()
   }, [])

   const navigation = useNavigation()

   const handlePressAnime = (anime) => {
      navigation.navigate('AnimePage', { anime: { ...anime, id: anime._id } })
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
            overScrollMode='never'
         />
      </View>
   )
}
