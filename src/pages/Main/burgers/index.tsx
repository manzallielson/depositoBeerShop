import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { getBurgers } from '../../../services/api'

export default function Burgers() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    ;(async () => {
      const burgersRequest = await getBurgers()
      setBurgers(burgersRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Burgers' description='Nossos melhores Burges' />
      <SnackTitle>Burgers</SnackTitle>

      <Snacks snacks={burgers} />
    </>
  )
}
