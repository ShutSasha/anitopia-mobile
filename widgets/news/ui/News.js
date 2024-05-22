import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { NewsCard } from '../../../entities/news-card'

export const News = ({ newsList }) => {
   return (
      <View style={styles.container}>
         <View>
            {newsList &&
               newsList.map((news, index) => <NewsCard key={news.id} newsItem={news} index={index} count={10} />)}
         </View>
      </View>
   )
}
