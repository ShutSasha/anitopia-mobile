import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import MainPageIcon from '../../../assets/main-page-icon.svg'
import CatalogIcon from '../../../assets/catalog-icon.svg'
import SearchIcon from '../../../assets/search-icon.svg'
import MenuIcon from '../../../assets/menu-icon.svg'
import { useNavigation } from '@react-navigation/native'

export const Footer = () => {
   const navigation = useNavigation()

   const footerOptions = [
      { label: 'Головна', onPress: () => navigation.navigate('HomeStack'), Icon: MainPageIcon },
      { label: 'Каталог', onPress: () => navigation.navigate('CatalogStack'), Icon: CatalogIcon },
      { label: 'Пошук', onPress: () => navigation.navigate('SearchStack'), Icon: SearchIcon },
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
