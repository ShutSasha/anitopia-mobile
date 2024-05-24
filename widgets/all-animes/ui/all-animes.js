import * as React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { AnimeCard } from '../../../entities/anime-card';
import { fetchAnimeList } from '../../../hooks/useFetchAnimeList';
import { useState } from 'react';

export const AllAnimes = () => {
   const [animes, setAnimes] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);

   const fetchMore = async () => {
      try {
         const newData = await fetchAnimeList(currentPage + 1, 20);
         setAnimes((prevData) => [...prevData, ...newData]);
         setCurrentPage((prevPage) => prevPage + 1);
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <View style={styles.theWholePage}>
         <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            initialNumToRender={animes.length}
            data={animes}
            renderItem={({ item }) => <AnimeCard animeItem={item} />}
            keyExtractor={(item) => item._id.toString()}
            onEndReached={fetchMore}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   );
};
