import { Context } from '../App'
import { useContext } from 'react'

export const useStore = () => {
   const context = useContext(Context)
   return context
}
