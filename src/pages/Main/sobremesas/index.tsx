import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { useSnack } from '../../../hooks/useSnack'

export default function Sobremesas() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='iceCreams' description='Nossas melhores sobremesas' />
      <SnackTitle>iceCreams</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
