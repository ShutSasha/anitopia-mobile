import * as React from 'react'
import { View, FlatList, Text } from 'react-native'
import { styles } from './styles'
import { AnimeCard } from '../../../entities/anime-card'
import { useState, useEffect } from 'react'
import { fetchSearchAnime } from '../../../hooks/useFetchSearchAnime'

export const ResearchedAnimes = ({userInput}) => {
   const [foundAnime, setFoundAnime] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const fetchMoreFoundAnime = async () => {
      try {
         const { data } = await fetchSearchAnime(currentPage, 20, userInput);
         setFoundAnime((prevData) => [...prevData, ...data]);
         setCurrentPage(currentPage + 1);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      if (userInput !== "") {
         fetchMoreFoundAnime();
      } else {
         setFoundAnime([]);
         setCurrentPage(1);
      }
   }, [userInput]);

   if (userInput === "") {
      return (
         <View style={styles.theWholePage}>
            <Text>No search input provided.</Text>
         </View>
      );
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
