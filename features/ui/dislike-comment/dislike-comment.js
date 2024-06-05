import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image, Alert } from 'react-native'
import Dislike from '../../../assets/thumbs-down-50px-icon.png'
import DislikeHover from '../../../assets/thumbs-down-50px-icon-hover.png'
import { useStore } from '../../../hooks/useStore'
import $api from '../../../app/http'

export const DislikeComment = ({
   commentId,
   fetchCommentByAnimeID,
   isDisliked,
   setIsDisliked,
   isLiked,
   setIsLiked,
}) => {
   const { store } = useStore()
   const [dislikes, setDislikes] = useState(0)

   const fetchDislikes = async () => {
      try {
         const { data } = await $api.get(`/api/comments/dislike/${commentId}`)
         setDislikes(data.dislikes)
      } catch (e) {
         console.error(e)
      }
   }

   const handleDislike = async () => {
      if (!store.user || !store.user.id) {
         Alert.alert('Будь-ласка авторизуйтеся в системі для того, щоб поставити дизлайк')
         return
      }
      try {
         const { data } = await $api.patch(`/api/comments/dislike`, {
            commentId: commentId,
            userId: store.user.id,
         })
         setDislikes(data.dislikes)
         setIsDisliked(!isDisliked)
         if (isLiked) {
            setIsLiked(false)
         }
         fetchCommentByAnimeID()
      } catch (e) {
         console.error(e)
      }
   }

   useEffect(() => {
      fetchDislikes()
   }, [commentId])

   return (
      <TouchableOpacity onPress={handleDislike}>
         <Image source={isDisliked ? DislikeHover : Dislike} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
   )
}
