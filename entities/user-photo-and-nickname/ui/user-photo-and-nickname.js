import React from 'react'
import { View, Text, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { styles } from './styles'

export const UserPhotoAndNickname = ({ photo, nickname, userRoles }) => {
   return (
      <View style={styles.wrapper}>
         {photo ? (
            <Image source={photo} style={styles.image} />
         ) : (
            <View style={styles.iconWrapper}>
               <FontAwesome5 name='user' size={35} color='#fff' />
            </View>
         )}
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
   )
}
