import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'

interface SnackContextProps {
  pizzas: SnackData[]
  burgers: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export const SnackProvider = ({ children }: SnackProviderProps) => {
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const pizzasRequest = await getPizzas()
        const burgersRequest = await getBurgers()
        const drinksRequest = await getDrinks()
        const iceCreamsRequest = await getIceCreams()
        const requests = [pizzasRequest, burgersRequest, drinksRequest, iceCreamsRequest]
        const [
          { data: pizzaResponse },
          { data: burgerResponse },
          { data: drinkResponse },
          { data: iceCreamsResponse },
        ] = await Promise.all(requests)

        setPizzas(pizzaResponse)
        setBurgers(burgerResponse)
        setDrinks(drinkResponse)
        setIceCreams(iceCreamsResponse)
      } catch (error) {
        console.log('error')
      }
    })()
  }, [])
  return (
    <SnackContext.Provider value={{ pizzas, burgers, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
