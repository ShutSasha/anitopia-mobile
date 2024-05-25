import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../app/http'

export const useComments = (id) => {
   const [commentInfo, setCommentInfo] = useState(null)

   useEffect(() => {
      const fetchCommentByAnimeID = async () => {
         try {
            const { data } = await axios.get(`${BASE_URL}/api/comments/anime/{id}`)
            setCommentInfo(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchCommentByAnimeID()
   }, [id])

   return commentInfo
}
