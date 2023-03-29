import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { MyOrder } from '../../components/myOrder'
import * as S from './styles'
import * as IMG from '../../assets/index'

export default function Main() {
  return (
    <>
      <S.Container>
        <Sidebar />
        <MyOrder />
        <section>
          <S.Logo src={IMG.Logo2} alt='logo' />
          <Outlet />
        </section>
      </S.Container>
    </>
  )
}
