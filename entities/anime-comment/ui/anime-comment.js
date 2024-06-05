import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import { format } from 'date-fns'
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
   const [isLiked, setIsLiked] = useState(false)
   const [isDisliked, setIsDisliked] = useState(false)
   const formattedDate = format(new Date(timestamp), 'dd.MM.yyyy HH:mm:ss')
   const inputRef = useRef(null)

   useEffect(() => {
      const fetchReactionStatus = async () => {
         try {
            const res = await $api.get(`/api/comments/${comment._id}`)
            setIsLiked(res.data.likesBy.includes(store.user.id))
            setIsDisliked(res.data.dislikesBy.includes(store.user.id))
         } catch (e) {
            console.error(e)
         }
      }
      fetchReactionStatus()
   }, [comment._id, store.user.id])

   const handleUpdateComment = async () => {
      try {
         const res = await $api.patch(`/api/comments/`, {
            comment_id: comment._id,
            new_comment_text: editText,
         })

         if (res.status === 200) {
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
                     <LikeComment
                        commentId={comment._id}
                        fetchCommentByAnimeID={fetchCommentByAnimeID}
                        isLiked={isLiked}
                        setIsLiked={setIsLiked}
                        isDisliked={isDisliked}
                        setIsDisliked={setIsDisliked}
                     />
                     <Text>{likes}</Text>
                  </View>
                  <View style={styles.dislikesContainer}>
                     <DislikeComment
                        commentId={comment._id}
                        fetchCommentByAnimeID={fetchCommentByAnimeID}
                        isDisliked={isDisliked}
                        setIsDisliked={setIsDisliked}
                        isLiked={isLiked}
                        setIsLiked={setIsLiked}
                     />
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
