import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { format } from 'date-fns'

export const ScheduleCard = ({ slideItem }) => {
   const formattedDate = format(new Date(slideItem.next_episode_date), "dd.MM 'о' HH:mm")

   return (
      <View style={styles.slideBlock}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => console.log(slideItem.name)}>
            <Image source={slideItem.poster_url} style={styles.slideCover} resizeMode='cover' />
            <View style={styles.slideNameBlock}>
               <Text style={styles.slideName}>{slideItem.title}</Text>
               <Text style={styles.slideLastEpisode}>{slideItem.last_episode} серія</Text>
               <Text style={styles.slideNextEpisodeDate}>&#x1F551; {formattedDate}</Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}
