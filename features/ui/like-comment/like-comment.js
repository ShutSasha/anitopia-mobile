/* import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import Like from '../../../assets/thumbs-up-50px-icon.png'
import $api from '../../../app/http'

export const LikeComment = ({ commentId }) => {
   const [likes, setLikes] = useState(0)
   const [isLiked, setIsLiked] = useState(false)

   const fetchLikes = async () => {
      try {
         const { data } = await $api.get(`/api/comments/like/${commentId}`)
         setLikes(data.likes)
         setIsLiked(data.isLiked)
      } catch (error) {
         console.log(error)
      }
   }

   const handleLike = async () => {
      try {
         const { data } = await $api.patch(`/api/comments/like`, { commentId })
         setLikes(data.likes)
         setIsLiked(!isLiked)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchLikes()
   }, [])

   return (
      <TouchableOpacity onPress={handleLike} style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Image source={Like} style={{ width: 20, height: 20 }} />
         <Text>{likes}</Text>
      </TouchableOpacity>
   )
}*/
