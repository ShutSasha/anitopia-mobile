import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { SearchInput } from '../../../shared/search-input'
import { Header } from '../../../widgets/header'
import { ResearchedAnimes } from '../../../widgets/searched-animes'

export const Search = () => {
   const [search, setSearch] = useState('')

   const handleSearch = (text) => {
      setSearch(text)
   }

   const handleDeleteSearch = () => {
      setSearch('')
   }

   return (
      <View style={styles.theWholePage}>
         <Header />
         <SearchInput search={search} handleSearch={handleSearch} handleDeleteSearch={handleDeleteSearch} />
         <ResearchedAnimes userInput={search} />
      </View>
   )
}
