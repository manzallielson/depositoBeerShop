import { Outlet } from 'react-router-dom'

import * as S from './styles'
import * as IMG from '../../assets/index'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'

export default function Main() {
  return (
    <>
      <S.Container>
        <Head title={'Carrinho'} />
        <OrderHeader />
      </S.Container>
    </>
  )
}
