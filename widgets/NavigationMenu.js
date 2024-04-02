import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainPageIcon from '../assets/main-page-icon.svg';
import Catalog from '../assets/catalog-icon.svg';
import Search from '../assets/search-icon.svg';
import Collections from '../assets/collection-icon.svg';
import Menu from '../assets/menu-icon.svg';
export default function NavigationMenu() {
   return (
      <SafeAreaView style={styles.container}>
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
   container: {
      width: '100%',
      height: Platform.OS === 'ios' ? 88 : 80,
      backgroundColor: '#343A40',
      marginTop: 'auto',
   },

   blockWithElements: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15
   },

   option: {
      paddingTop: 26,
      width: '20%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },

   optionText: {
      fontFamily: 'Raleway_500Medium',
      fontSize: 12,
      color: '#FFFFFF',
      paddingTop: 5
   }
});
