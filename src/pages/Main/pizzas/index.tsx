import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { getPizzas } from '../../../services/api'

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    ;(async () => {
      const pizzasRequest = await getPizzas()
      setPizzas(pizzasRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
