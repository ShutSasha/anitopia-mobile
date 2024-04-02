
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { BASE_URL } from './app/http'
import { useFonts, BalooTamma2_800ExtraBold } from '@expo-google-fonts/baloo-tamma-2';
import { Raleway_800ExtraBold, Raleway_500Medium, Raleway_600SemiBold} from '@expo-google-fonts/raleway';
import Main from './pages/Main'
import { useEffect, useState } from 'react'
import axios from 'axios'

const animeList = {
   anime1 : {
      id: 1,
      name: 'Назва 1го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 21,
      studio: 'Назва студії'
   },

   anime2 : {
      id: 2,
      name: 'Назва 2го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 33,
      studio: 'Назва студії'
   },

   anime3 : {
      id: 3,
      name: 'Назва 3го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 21,
      studio: 'Назва студії'
   },

   anime4 : {
      id: 4,
      name: 'Назва 4го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 33,
      studio: 'Назва студії'
   },

   anime5 : {
      id: 5,
      name: 'Назва 5го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 21,
      studio: 'Назва студії'
   },

   anime6 : {
      id: 6,
      name: 'Назва 6го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 33,
      studio: 'Назва студії'
   },

   anime7 : {
      id: 7,
      name: 'Назва 7го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 21,
      studio: 'Назва студії'
   },

   anime8 : {
      id: 8,
      name: 'Назва 8го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 33,
      studio: 'Назва студії'
   },

   anime9 : {
      id: 9,
      name: 'Назва 9го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 21,
      studio: 'Назва студії'
   },

   anime10 : {
      id: 10,
      name: 'Назва 10го аніме',
      cover: require('./assets/avatar.jpg'),
      episode: 33,
      studio: 'Назва студії'
   },
}

export default function App() {
   let [fontsLoaded, fontError] = useFonts({
      BalooTamma2_800ExtraBold,
      Raleway_800ExtraBold,
      Raleway_500Medium,
      Raleway_600SemiBold
   });
   const [animeSeason, setAnimeSeason] = useState()

   useEffect(() =>{
      const fetchAnimeSeason = async () => {
         try {
            console.log(count);
            const res = await axios.get(`${BASE_URL}/api/anime/season-anime`);
            setAnimeSeason(res.data);
            console.log('success');
         }
         catch (error) {
            console.log(error);
         }
      };

      fetchAnimeSeason();

   });

   if (!fontsLoaded && !fontError) {
      return null;
   }

   return (
      <View style={styles.theWholePage}>
         <Main animeList = {animeList}/>
         {animeSeason && animeSeason.map(item => (
            <Text key={item.id}>
               {item.id}
            </Text>
         ))}
      </View>
   )
}

const styles = StyleSheet.create({
   theWholePage : {
      flex: 1
   }
});