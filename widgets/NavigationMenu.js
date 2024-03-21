import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import SvgUri from 'react-native-svg-uri';
import MainPageIcon from '../assets/main-page-icon.svg';
import Catalog from '../assets/catalog-icon.svg';
import Search from '../assets/search-icon.svg';
import Collections from '../assets/collection-icon.svg';
import Menu from '../assets/menu-icon.svg';
export default function NavigationMenu() {
   return (
      <SafeAreaView style={styles.mainBlock}>
         <View style={styles.blockWithElements}>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Головна нажата')}>
               <MainPageIcon width={30} height={30}/>
               <Text style={styles.optionText}>Головна</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Каталог нажат')}>
               <Catalog width={30} height={30}/>
               <Text style={styles.optionText}>Каталог</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Пошук нажат')}>
               <Search width={30} height={30}/>
               <Text style={styles.optionText}>Пошук</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Колекції нажат')}>
               <Collections width={30} height={30}/>
               <Text style={styles.optionText}>Колекції</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Меню нажат')}>
               <Menu width={30} height={30}/>
               <Text style={styles.optionText}>Меню</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   mainBlock: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 88,
      backgroundColor: '#343A40',
   },

   blockWithElements: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15
   },

   option: {
      paddingTop: 26,
      width: '20%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },

   optionText: {
      fontFamily: 'franklin-gothic-medium',
      fontSize: 12,
      color: '#FFFFFF'
   }
});
