import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { getIceCreams } from '../../../services/api'

export default function Sobremesas() {
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    ;(async () => {
      const iceCreams = await getIceCreams()
      setIceCreams(iceCreams.data)
    })()
  }, [])

  return (
    <>
      <Head title='iceCreams' description='Nossas melhores sobremesas' />
      <SnackTitle>iceCreams</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
