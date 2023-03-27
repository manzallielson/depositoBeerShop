import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../hooks/useSnack'

export default function Pizzas() {
  const { pizzas } = useSnack()

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
