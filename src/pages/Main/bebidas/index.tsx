import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { getDrinks } from '../../../services/api'

export default function Bebidas() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    ;(async () => {
      const drinksRequest = await getDrinks()
      setDrinks(drinksRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title='Bebidas' description='Nossas melhores Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
