import React from 'react'
import { SafeAreaView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

export const SearchInput = ({ search, handleSearch, handleDeleteSearch }) => {
   return (
      <SafeAreaView>
         <SearchBar
            placeholder='Введіть свій запит...'
            onChangeText={handleSearch}
            value={search}
            clearIcon={<AntDesign name='close' size={24} color='#343A40' onPress={handleDeleteSearch} />}
            lightTheme
            platform={'ios'}
            searchIcon={<AntDesign name='search1' size={24} color='#343A40' />}
            showCancel
            round
            containerStyle={styles.wrapper}
            inputContainerStyle={styles.inputWrapper}
         />
      </SafeAreaView>
   )
}
