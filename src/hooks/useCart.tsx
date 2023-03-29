import { useContext } from 'react'

import { CartContext } from '../context/CardContext'

export const useCart = () => {
  return useContext(CartContext)
}
