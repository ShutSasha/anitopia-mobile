import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import MainPage from '../../../assets/main-page-icon.svg'
import Catalog from '../../../assets/catalog-icon.svg'
import Search from '../../../assets/search-icon.svg'
import Collections from '../../../assets/collection-icon.svg'
import Menu from '../../../assets/menu-icon.svg'

export const Footer = () => {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.blockWithElements}>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Головна нажата')}>
               <MainPage width={30} height={30} />
               <Text style={styles.optionText}>Головна</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Каталог нажат')}>
               <Catalog width={30} height={30} />
               <Text style={styles.optionText}>Каталог</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Пошук нажат')}>
               <Search width={30} height={30} />
               <Text style={styles.optionText}>Пошук</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Колекції нажат')}>
               <Collections width={30} height={30} />
               <Text style={styles.optionText}>Колекції</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Меню нажат')}>
               <Menu width={30} height={30} />
               <Text style={styles.optionText}>Меню</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}
