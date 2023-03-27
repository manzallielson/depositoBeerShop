import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../hooks/useSnack'

export default function Bebidas() {
  const { drinks } = useSnack()
  return (
    <>
      <Head title='Bebidas' description='Nossas melhores Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
