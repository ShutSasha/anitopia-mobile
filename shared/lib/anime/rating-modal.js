import React from 'react'
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { RATE_STAR_LIST } from './rate-star-list'
import $api from '../../../app/http'
import { useStore } from '../../../hooks/useStore'

export const RatingModal = ({ visible, onClose, animeInfo, fetchAnimeInfo }) => {
   const { store } = useStore()
   console.log(fetchAnimeInfo)
   const rateAnime = async (rate) => {
      try {
         console.log(rate)
         console.log(animeInfo._id)
         console.log(store.user.id)
         console.log(animeInfo.shikimori_id)

         await $api.post('api/rate-anime', {
            rate: rate,
            anime_id: animeInfo._id,
            user_id: store.user.id,
            shikimori_id: animeInfo.shikimori_id,
         })
         /*fetchAnimeInfo()*/
         onClose()
      } catch (error) {
         console.error(error)
      }
   }

   return (
      <Modal visible={visible} transparent animationType='slide' onRequestClose={onClose}>
         <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
               <Text style={styles.modalTitle}>Оцініть аніме</Text>
               <View style={styles.rateList}>
                  {RATE_STAR_LIST.map((item, index) => (
                     <TouchableOpacity key={index} style={styles.rateItem} onPress={() => rateAnime(item.rate)}>
                        <Image source={item.icon} style={styles.rateIcon} />
                        <Text style={styles.rateText}>{item.rate + item.desc}</Text>
                     </TouchableOpacity>
                  ))}
               </View>
               <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Закрити</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   modalContent: {
      width: '80%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
   },
   modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
   },
   rateList: {
      marginBottom: 20,
   },
   rateItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
   },
   rateIcon: {
      width: 30,
      height: 30,
      marginRight: 10,
   },
   rateText: {
      fontSize: 16,
   },
   closeButton: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#2196F3',
      borderRadius: 5,
   },
   closeButtonText: {
      color: 'white',
      fontSize: 16,
   },
})
