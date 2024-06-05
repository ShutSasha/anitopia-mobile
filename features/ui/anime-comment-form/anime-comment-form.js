import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import { useStore } from '../../../hooks/useStore'
import $api from '../../../app/http'

export const AnimeCommentForm = ({ animeID, onCommentAdded }) => {
   const [commentText, setCommentText] = useState('')
   const { store } = useStore()

   const handleSendComment = async () => {
      if (!store.user || !store.user.id) {
         Alert.alert('Будь-ласка авторизуйтеся в системі для написання коментаря')
         return
      }
      try {
         const res = await $api.post(`/api/comments`, {
            animeId: animeID,
            userId: store.user.id,
            commentText: commentText,
         })

         if (res.status === 201) {
            setCommentText('')
            onCommentAdded && onCommentAdded()
         }
      } catch (error) {
         console.error(error)
      }
   }

   return (
      <View>
         <TextInput
            style={styles.commentInput}
            placeholder='Введіть ваш коментар...'
            value={commentText}
            onChangeText={(text) => setCommentText(text)}
         />
         <TouchableOpacity activeOpacity={0.7} style={styles.sendButton} onPress={handleSendComment}>
            <Text style={styles.buttonText}>Надіслати</Text>
         </TouchableOpacity>
      </View>
   )
}
