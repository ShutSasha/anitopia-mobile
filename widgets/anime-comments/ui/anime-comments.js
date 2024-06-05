import React from 'react'
import { Text, View } from 'react-native'
import { useComments } from './useComments'
import { AnimeCommentForm } from '../../../features'
import { AnimeComment } from '../../../entities/anime-comment'
import styles from './styles'

export const AnimeComments = ({ animeID }) => {
   const { commentInfo, fetchCommentByAnimeID } = useComments(animeID)

   return (
      <View style={styles.commentsContainer}>
         <Text style={styles.commentsTitle}>Коментарі</Text>
         <AnimeCommentForm animeID={animeID} onCommentAdded={fetchCommentByAnimeID} />
         {commentInfo &&
            commentInfo.map((comment, index) => (
               <AnimeComment key={index} comment={comment} fetchCommentByAnimeID={fetchCommentByAnimeID} />
            ))}
      </View>
   )
}
