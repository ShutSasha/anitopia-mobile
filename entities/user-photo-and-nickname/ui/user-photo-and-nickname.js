import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export const UserPhotoAndNickname = ({ photo, nickname, userRoles, about }) => {
   const navigation = useNavigation()

   const handleSettings = (event) => {
      navigation.navigate('UserSettings')
   }

   return (
      <View style={styles.wrapper}>
         <View style={styles.rolesWrapper}>
            <Image source={{ uri: photo }} style={styles.image} />
            <View style={styles.nicknameAndRolesWrapper}>
               <Text style={styles.nickname}>{nickname}</Text>
               <View style={styles.rolesWrapper}>
                  {userRoles &&
                     userRoles.map((role, index) => (
                        <View key={index} style={styles.userRoleWrapper}>
                           <Text style={styles.userRoleText}>{role}</Text>
                        </View>
                     ))}
               </View>
            </View>
         </View>
         <TouchableOpacity onPress={handleSettings}>
            <Ionicons name='settings-outline' size={24} color='#343A40' />
         </TouchableOpacity>
      </View>
   )
}
