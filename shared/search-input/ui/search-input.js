import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'
import { AllAnimes } from '../../../widgets/all-animes'

export const SearchInput = ({ search, handleSearch, handleDeleteSearch }) => {
   return (
      <SafeAreaView>
         <SearchBar
            placeholder="Введіть свій запит..."
            onChangeText={handleSearch}
            value={search}
            clearIcon={<AntDesign name="close" size={24} color="#343A40" onPress={handleDeleteSearch}/>}
            lightTheme
            platform={'ios'}
            searchIcon={<AntDesign name="search1" size={24} color="#343A40" />}
            showCancel
            round
            containerStyle={styles.wrapper}
            inputContainerStyle={styles.inputWrapper}
         />
         <FlatList
            data={[<AllAnimes />]}
            renderItem={({ item }) => <View style={styles.container}>{item}</View>}
            keyExtractor={(_, index) => index.toString()}
            bounces={true}
            overScrollMode='never'
         />
      </SafeAreaView>
   )
}
