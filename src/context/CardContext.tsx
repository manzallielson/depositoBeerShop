import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveCartProps {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface cartProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  //   removeSnackFromCart: ({ id, snack }: RemoveCartProps) => void
  //   updateCart:({ id, snack, newQuantity }: UpdateCartProps) => void
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: cartProviderProps) => {
  const [cart, setCart] = useState<Snack[]>([])

  const addSnackIntoCart = (snack: SnackData): void => {
    const hasSnackCard = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    if (hasSnackCard) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity
          return { ...item, quantity, subtotal }
        }
        return item
      })
      console.log(newCart)

      setCart(newCart)
      return
    }

    hasSnackCard

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack]
    console.log(newCart)
    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
