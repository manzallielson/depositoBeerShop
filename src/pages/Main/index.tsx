import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'
import * as S from './styles'
import * as IMG from '../../assets/index'

export default function Main() {
  return (
    <>
      <S.Container>
        <Sidebar />
        <section>
          <img src={IMG.Logo} alt='logo' />
          <Outlet />
        </section>
      </S.Container>
    </>
  )
}
