import React, { useState, useRef } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import { format } from 'date-fns'
import Like from '../../../assets/thumbs-up-50px-icon.png'
import Dislike from '../../../assets/thumbs-down-50px-icon.png'
import MoreIcon from '../../../assets/more-icon.svg'
import { useStore } from '../../../hooks/useStore'
import $api from '../../../app/http'
import { LikeComment } from '../../../features'
import { DislikeComment } from '../../../features'

export const AnimeComment = ({ comment, fetchCommentByAnimeID }) => {
   const { user, timestamp, likes, dislikes, comment_text } = comment
   const { store } = useStore()
   const [isEditing, setEditing] = useState(false)
   const [isMenuVisible, setMenuVisible] = useState(false)
   const [editText, setEditText] = useState(comment_text)
   const formattedDate = format(new Date(timestamp), 'dd.MM.yyyy HH:mm:ss')
   const inputRef = useRef(null)

   const handleUpdateComment = async () => {
      const updateUrl = `/api/comments/${comment._id}`

      try {
         const res = await $api.patch(updateUrl, {
            commentText: editText,
         })

         if (res.status === 200) {
            console.log('Comment updated')
            setEditing(false)
            fetchCommentByAnimeID()
         } else {
            Alert.alert('Помилка', 'Не вдалося оновити коментар')
         }
      } catch (error) {
         console.error(error)
         Alert.alert('Помилка', 'Виникла помилка при оновленні коментаря')
      }
   }

   const handleDeleteComment = async () => {
      const deleteUrl = `/api/comments?commentId=${comment._id}&animeId=${comment.anime}`
      try {
         const res = await $api.delete(deleteUrl)

         if (res.status === 200) {
            console.log('Comment deleted')
            setMenuVisible(false)
            fetchCommentByAnimeID()
         } else {
            Alert.alert('Помилка', 'Неможливо видалити коментар')
         }
      } catch (error) {
         console.error(error)
         Alert.alert('Помилка', 'Виникла помилка при видаленні коментаря')
      }
   }

   const handleCancelEdit = () => {
      setEditText(comment_text)
      setEditing(false)
   }

   return (
      <View style={styles.commentContainer}>
         <Image source={{ uri: user.avatarLink }} style={styles.commentImage} />
         <View style={styles.commentContent}>
            <View style={styles.headerContainer}>
               <Text style={styles.commentUsername}>{user.username}</Text>
               <View style={styles.reactionsContainer}>
                  <View style={styles.likesContainer}>
                     <Image source={Like} style={styles.likeIcon} />
                     <Text>{likes}</Text>
                  </View>
                  <View style={styles.dislikesContainer}>
                     <Image source={Dislike} style={styles.dislikeIcon} />
                     <Text>{dislikes}</Text>
                  </View>
                  {store.user && store.user.id === user._id && !isEditing && (
                     <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.moreButton}
                        onPress={() => setMenuVisible(!isMenuVisible)}
                     >
                        <MoreIcon />
                     </TouchableOpacity>
                  )}
                  {isMenuVisible && (
                     <View style={styles.menuContainer}>
                        <TouchableOpacity
                           activeOpacity={0.7}
                           style={styles.menuOption}
                           onPress={() => {
                              setEditing(true)
                              setMenuVisible(false)
                           }}
                        >
                           <Text style={styles.menuOptionText}>Редагувати</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.menuOption} onPress={handleDeleteComment}>
                           <Text style={styles.menuOptionText}>Видалити</Text>
                        </TouchableOpacity>
                     </View>
                  )}
               </View>
            </View>
            <Text style={styles.commentTimestamp}>{formattedDate}</Text>
            {isEditing ? (
               <View>
                  <TextInput
                     ref={inputRef}
                     style={styles.commentInput}
                     value={editText}
                     onChangeText={(text) => setEditText(text)}
                  />
                  <View style={styles.editButtonsContainer}>
                     <TouchableOpacity activeOpacity={0.7} style={styles.changeButton} onPress={handleUpdateComment}>
                        <Text style={styles.buttonText}>Змінити</Text>
                     </TouchableOpacity>
                     <TouchableOpacity activeOpacity={0.7} style={styles.cancelButton} onPress={handleCancelEdit}>
                        <Text style={styles.buttonText}>Відмінити</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            ) : (
               <Text style={styles.commentText}>{comment_text}</Text>
            )}
         </View>
      </View>
   )
}
