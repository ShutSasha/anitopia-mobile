import * as React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { ScheduleCard } from '../../../entities/schedule-card'

export const Schedule = ({ scheduleList }) => {
   return (
      <View style={styles.theWholePage}>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={scheduleList.length}
            data={scheduleList}
            renderItem={({ item }) => <ScheduleCard slideItem={item} />}
            keyExtractor={(item) => item.id.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </View>
   )
}
