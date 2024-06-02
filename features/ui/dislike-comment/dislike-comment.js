/* import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import DisLike from '../../../assets/thumbs-down-50px-icon.png'
import $api from '../../../app/http'

export const DislikeComment = ({ commentId }) => {
   const [dislikes, setDislikes] = useState(0)
   const [isDisliked, setIsDisliked] = useState(false)

   const fetchLDislikes = async () => {
      try {
         const { data } = await $api.get(`/api/comments/dislike/${commentId}`)
         setDislikes(data.dislikes)
         setIsDisliked(data.isDisliked)
      } catch (error) {
         console.log(error)
      }
   }

   const handleDislike = async () => {
      try {
         const { data } = await $api.patch(`/api/comments/dislike`, { commentId })
         setDislikes(data.dislikes)
         setIsDisliked(!isDisliked)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchDislikes()
   }, [])

   return (
      <TouchableOpacity onPress={handleDislike} style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Image source={Dislike} style={{ width: 20, height: 20 }} />
         <Text>{dislikes}</Text>
      </TouchableOpacity>
   )
}*/
