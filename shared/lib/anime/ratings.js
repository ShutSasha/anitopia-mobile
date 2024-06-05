import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const shikimoriLogo = require('../../../assets/shikimori_logo.png')
const imdbLogo = require('../../../assets/imdb_logo.png')
const kinopoiskLogo = require('../../../assets/kinopoisk_logo.png')

export const transformRatingsToArray = (material_data) => {
   const { imdb_rating, shikimori_rating, kinopoisk_rating } = material_data

   return [
      {
         rating: imdb_rating,
         logo: imdbLogo,
         style: styles.imdbLogo,
      },
      {
         rating: shikimori_rating,
         logo: shikimoriLogo,
         style: styles.shikimoriLogo,
      },
      {
         rating: kinopoisk_rating,
         logo: kinopoiskLogo,
         style: styles.kinopoiskLogo,
      },
   ]
}

const styles = StyleSheet.create({
   imdbLogo: {
      height: 20,
      width: 40,
   },
   shikimoriLogo: {
      height: 20,
      width: 20,
   },
   kinopoiskLogo: {
      height: 20,
      width: 20,
   },
})

const Ratings = ({ material_data }) => {
   const ratingsArray = transformRatingsToArray(material_data)

   return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         {ratingsArray.map((item, index) => (
            <View
               key={index}
               style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  marginRight: 10,
                  marginBottom: 5,
               }}
            >
               <Image source={item.logo} style={item.style} />
               <Text style={{ marginLeft: 3 }}>{item.rating || 'Н/Д'}</Text>
            </View>
         ))}
      </View>
   )
}

export default Ratings
