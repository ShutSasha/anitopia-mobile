import { useEffect, useState } from 'react'
import $api from '../../../app/http'

export const useComments = (id) => {
   const [commentInfo, setCommentInfo] = useState([])

   const fetchCommentByAnimeID = async () => {
      try {
         const { data: comments } = await $api.get(`/api/comments/anime/${id}`)
         setCommentInfo(comments)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchCommentByAnimeID()
   }, [id])

   return { commentInfo, fetchCommentByAnimeID }
}
