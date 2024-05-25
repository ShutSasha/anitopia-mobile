import * as React from 'react'
import {
   Modal,
   View,
   Text,
   TouchableOpacity,
} from 'react-native'
import { styles } from './styles'
import { MultipleSelect } from '../../../entities/multi-select'
import { ValueRange } from '../../../entities/value-range'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import {multiSelectData} from '../../../consts/filter-options-list'
import {valueRangeData} from '../../../consts/value-range-list'

const combinedData = [...multiSelectData, ...valueRangeData];

export const FilterOptions = ({ visible, handleFilterModal }) => {
   return (
      <Modal visible={visible} transparent={true}>
         <View style={styles.modalContainer}>
            <View style={styles.container}>
               <KeyboardAwareFlatList
                  data={combinedData}
                  renderItem={({ item }) => {
                     if (item.type === 'multipleSelect') {
                        return <MultipleSelect data={item} />;
                     } else if (item.type === 'valueRange') {
                        return <ValueRange item={item} checkTheNumberOfChars={true}/>;
                     } else if(item.type === 'valueRangeWithoutCharsCheck'){
                        return <ValueRange item={item} checkTheNumberOfChars={false}/>;
                     }
                     return null;
                  }}
                  keyboardOpeningTime={0.25}
                  keyExtractor={(item) => item.id.toString()}
                  extraScrollHeight={20}
                  enableAutomaticScroll={true}
                  enableOnAndroid={true}
               />
               <View style={styles.buttonsWrapper}>
                  <TouchableOpacity style={styles.dropButton} onPress={handleFilterModal}>
                     <Text style={styles.dropButtonText}>Скинути</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.applyButton} onPress={handleFilterModal}>
                     <Text style={styles.applyButtonText}>Застосувати</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </Modal>
   )
}