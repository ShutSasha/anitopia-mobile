import * as React from 'react'
import { View, FlatList, Text } from 'react-native'
import { styles } from './styles'
import { AnimeCard } from '../../../entities/anime-card'
import { useState, useEffect } from 'react'
import { fetchSearchAnime } from '../../../hooks/useFetchSearchAnime'

export const ResearchedAnimes = ({ userInput }) => {
   const [foundAnime, setFoundAnime] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [hasMore, setHasMore] = useState(true)
   const timerRef = React.useRef(null)

   const fetchMoreFoundAnime = async () => {
      if (!hasMore) return

      try {
         const { data } = await fetchSearchAnime(currentPage, 20, userInput)
         if (
            data.length === 0 ||
            (data.length > 0 && JSON.stringify(data) === JSON.stringify(foundAnime.slice(-data.length)))
         ) {
            console.log('no more data')
            setHasMore(false)
         } else {
            setFoundAnime((prevData) => [...prevData, ...data])
            setCurrentPage((prev) => prev + 1)
         }
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      if (timerRef.current) {
         clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
         setFoundAnime([])
         setCurrentPage(1)
         fetchSearchAnime(1, 20, userInput)
            .then((res) => setFoundAnime(res.data))
            .catch((err) => console.error(err))
      }, 500)

      return () => clearTimeout(timerRef.current)
   }, [userInput])

   if (userInput === '') {
      return (
         <View style={styles.theWholePage}>
            <Text>No search input provided.</Text>
         </View>
      )
   }

   if (!foundAnime) {
      return (
         <View style={styles.theWholePage}>
            <Text>Аніме не знайдено.</Text>
         </View>
      )
   }

   return (
      <View style={styles.theWholePage}>
         <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            initialNumToRender={foundAnime.length}
            data={foundAnime}
            renderItem={({ item }) => <AnimeCard animeItem={item} />}
            keyExtractor={(item) => item._id.toString()}
            onEndReached={fetchMoreFoundAnime}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
