import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import MainPageIcon from '../../../assets/main-page-icon.svg'
import CatalogIcon from '../../../assets/catalog-icon.svg'
import SearchIcon from '../../../assets/search-icon.svg'
import CollectionsIcon from '../../../assets/collection-icon.svg'
import MenuIcon from '../../../assets/menu-icon.svg'

export const Footer = () => {
   const footerOptions = [
      { label: 'Головна', onPress: () => console.log('Головна'), Icon: MainPageIcon },
      { label: 'Каталог', onPress: () => console.log('Каталог'), Icon: CatalogIcon },
      { label: 'Пошук', onPress: () => console.log('Пошук'), Icon: SearchIcon },
      { label: 'Колекції', onPress: () => console.log('Колекції'), Icon: CollectionsIcon },
      { label: 'Меню', onPress: () => console.log('Меню'), Icon: MenuIcon },
   ]

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.blockWithElements}>
            {footerOptions.map((option, index) => {
               const IconComponent = option.Icon
               return (
                  <TouchableOpacity key={index} style={styles.option} onPress={option.onPress}>
                     <IconComponent style={styles.footerIcon} />
                     <Text style={styles.optionText}>{option.label}</Text>
                  </TouchableOpacity>
               )
            })}
         </View>
      </SafeAreaView>
   )
}
