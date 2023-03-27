import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../hooks/useSnack'

export default function Burgers() {
  const { burgers } = useSnack()
  return (
    <>
      <Head title='Burgers' description='Nossos melhores Burges' />
      <SnackTitle>Burgers</SnackTitle>

      <Snacks snacks={burgers} />
    </>
  )
}
