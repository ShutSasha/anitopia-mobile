// import { useEffect, useState } from 'react'
// import $api from '../app/http'
// import { useStore } from './useStore'

// export const useFetchUserData = () => {
//    const { store } = useStore()
//    const [userData, setUserData] = useState(null)

//    useEffect(() => {
//       const fetchUserByID = async () => {
//          try {
//             const response = await $api.get(`/api/users/${store.user.id}`)
//             console.log(response)
//             setUserData(response.data)
//          } catch (error) {
//             console.log(error)
//          }
//       }

//       fetchUserByID()
//    }, [])

//    return userData
// }
