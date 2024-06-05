import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image, Alert } from 'react-native'
import Like from '../../../assets/thumbs-up-50px-icon.png'
import LikeHover from '../../../assets/thumbs-up-50px-icon-hover.png'
import { useStore } from '../../../hooks/useStore'
import $api from '../../../app/http'

export const LikeComment = ({ commentId, fetchCommentByAnimeID, isLiked, setIsLiked, isDisliked, setIsDisliked }) => {
   const { store } = useStore()
   const [likes, setLikes] = useState(0)

   const fetchLikes = async () => {
      try {
         const { data } = await $api.get(`/api/comments/like/${commentId}`)
         setLikes(data.likes)
      } catch (e) {
         console.error(e)
      }
   }

   const handleLike = async () => {
      if (!store.user || !store.user.id) {
         Alert.alert('Будь-ласка авторизуйтеся в системі для того, щоб поставити лайк')
         return
      }
      try {
         const { data } = await $api.patch(`/api/comments/like`, {
            commentId: commentId,
            userId: store.user.id,
         })
         setLikes(data.likes)
         setIsLiked(!isLiked)
         if (isDisliked) {
            setIsDisliked(false)
         }
         fetchCommentByAnimeID()
      } catch (e) {
         console.error(e)
      }
   }

   useEffect(() => {
      fetchLikes()
   }, [commentId])

   return (
      <TouchableOpacity onPress={handleLike}>
         <Image source={isLiked ? LikeHover : Like} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
   )
}
