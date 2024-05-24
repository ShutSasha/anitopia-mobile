import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import MainPageIcon from '../../../assets/main-page-icon.svg'
import CatalogIcon from '../../../assets/catalog-icon.svg'
import SearchIcon from '../../../assets/search-icon.svg'
import CollectionsIcon from '../../../assets/collection-icon.svg'
import MenuIcon from '../../../assets/menu-icon.svg'
import { useNavigation } from '@react-navigation/native';
export const Footer = () => {
   const navigation = useNavigation();

   const footerOptions = [
      { label: 'Головна', onPress: () => navigation.navigate('Home'), Icon: MainPageIcon },
      { label: 'Каталог', onPress: () => navigation.navigate('Catalog'), Icon: CatalogIcon },
      { label: 'Пошук', onPress: () => navigation.navigate('Search'), Icon: SearchIcon },
      { label: 'Колекції', onPress: () => console.log('Колекції'), Icon: CollectionsIcon },
      { label: 'Меню', onPress: () => navigation.openDrawer(), Icon: MenuIcon },
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
