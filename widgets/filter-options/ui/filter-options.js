import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MultipleSelect } from '../../../entities/multi-select';
import { ValueRange } from '../../../entities/value-range';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { useStore } from '../../../hooks/useStore';
import { GENRES } from '../../../consts/genres';
import { KINDS } from '../../../consts/kinds';
import { MPAA } from '../../../consts/mpaa';

export const FilterOptions = ({ visible, handleFilterModal }) => {
   const { store } = useStore();

   const handleChangeGenre = (values) => {
      store.animeCatalogStore.setGenres(values);
   };

   const handleChangeKind = (values) => {
      store.animeCatalogStore.setKind(values);
   };

   const handleChangeMPAA = (values) => {
      store.animeCatalogStore.setMPAA(values);
   };

   const handleChangeYearStart = (value) => {
      store.animeCatalogStore.setYearStart(value);
   };

   const handleChangeYearEnd = (value) => {
      store.animeCatalogStore.setYearEnd(value);
   };

   const handleChangeEpisodesStart = (value) => {
      store.animeCatalogStore.setEpisodesStart(value);
   };

   const handleChangeEpisodesEnd = (value) => {
      store.animeCatalogStore.setEpisodesEnd(value);
   };

   const combinedData = [
      {
         type: 'multipleSelect',
         data: GENRES,
         header: 'Обрати жанр аніме',
         inputHeader: 'Оберіть жанр',
         selectedData: store.animeCatalogStore.genres,
         handleChange: handleChangeGenre,
      },
      {
         type: 'multipleSelect',
         data: KINDS,
         header: 'Обрати тип аніме',
         inputHeader: 'Оберіть тип',
         selectedData: store.animeCatalogStore.kinds,
         handleChange: handleChangeKind,
      },
      {
         type: 'multipleSelect',
         data: MPAA,
         header: 'Віковий рейтинг',
         inputHeader: 'Оберіть віковий рейтинг',
         selectedData: store.animeCatalogStore.mpaa,
         handleChange: handleChangeMPAA,
      },
      {
         type: 'valueRange',
         header: 'Рік',
         checkTheNumberOfChars: true,
         from: store.animeCatalogStore.year_start,
         to: store.animeCatalogStore.year_end,
         handleChangeFrom: handleChangeYearStart,
         handleChangeTo: handleChangeYearEnd,
      },
      {
         type: 'valueRange',
         header: 'Кількість серій',
         checkTheNumberOfChars: false,
         from: store.animeCatalogStore.episodes_start,
         to: store.animeCatalogStore.episodes_end,
         handleChangeFrom: handleChangeEpisodesStart,
         handleChangeTo: handleChangeEpisodesEnd,
      },
   ];

   return (
      <Modal visible={visible} transparent={true}>
         <View style={styles.modalContainer}>
            <View style={styles.container}>
               <KeyboardAwareFlatList
                  data={combinedData}
                  renderItem={({ item }) => {
                     if (item.type === 'multipleSelect') {
                        return (
                           <MultipleSelect
                              data={item.data}
                              header={item.header}
                              inputHeader={item.inputHeader}
                              selectedData={item.selectedData}
                              handleChange={item.handleChange}
                           />
                        );
                     } else if (item.type === 'valueRange') {
                        return (
                           <ValueRange
                              header={item.header}
                              checkTheNumberOfChars={item.checkTheNumberOfChars}
                              from={item.from}
                              to={item.to}
                              handleChangeFrom={item.handleChangeFrom}
                              handleChangeTo={item.handleChangeTo}
                           />
                        );
                     }
                     return null;
                  }}
                  keyExtractor={(item, index) => index.toString()}
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
   );
};
