import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { ScheduleCard } from '../../../entities/schedule-card'
// import scheduleList from '../../../consts/schedule-list'
// ! We need API for this, but we don't have it yet
export const Schedule = () => {
   console.log(scheduleList)
   return (
      <View style={styles.theWholePage}>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={10}
            data={scheduleList}
            renderItem={({ item }) => <ScheduleCard slideItem={item} />}
            keyExtractor={(item) => item.id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
