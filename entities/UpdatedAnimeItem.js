import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function UpdatedAnime({animeItem}) {
   return (
      <View style={styles.animeBlock}>
         <View style={styles.animeCoverAndName}>
            <TouchableOpacity>
               <Image style={styles.animeCover} source={animeItem.cover} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(animeItem.id)}>
               <Text style={styles.animeName}>{animeItem.name}</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.additionalInfo}>
            <TouchableOpacity style={{...styles.text, paddingTop: 5}}>
               <Text style={styles.additionalText}>{animeItem.episode}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.text}>
               <Text style={styles.additionalText}>{animeItem.studio}</Text>
            </TouchableOpacity>
         </View>
      </View>

   )
}

const styles = StyleSheet.create({
   container: {
      alignSelf: 'auto'
   },

   animeBlock: {
      height: 50,
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderColor: '#000000',
      borderWidth: 1,
      borderStyle: 'solid',
      paddingRight: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
   },

   animeCoverAndName: {
      width: '75%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center'
   },

   animeCover: {
      width: 40,
      height: 40,
      borderRadius: 30,
      resizeMode: 'contain',
      objectFit: 'cover'
   },

   animeName: {
      fontFamily: 'Raleway_500Medium',
      fontSize: 20,
      paddingLeft: 15
   },

   additionalInfo: {
      width: '25%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center'
   },

   additionalText: {
      fontFamily: 'Raleway_500Medium',
      fontSize: 14
   },

   text: {
      width: '100%',
      height: '50%',
      alignItems: 'flex-end'
   }
});


