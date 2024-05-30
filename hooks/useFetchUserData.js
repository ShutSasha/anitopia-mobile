// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { BASE_URL } from '../app/http'
// import { useStore } from './useStore'

// export const useFetchUserData = () => {
//    const { store } = useStore()
//    const [userData, setUserData] = useState(null)

//    useEffect(() => {
//       const fetchUserByID = async () => {
//          try {
//             const response = await axios.get(`${BASE_URL}/api/users/${store.user.id}`)
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
