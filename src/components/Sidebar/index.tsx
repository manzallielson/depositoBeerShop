import * as S from './style'
import Menu from '../../assets/menu.svg'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const images = [
  {
    img: <BurguerIcon />,
    span: 'burgers',
  },
  {
    img: <PizzaIcon />,
    span: 'pizzas',
  },
  {
    img: <SodaPopIcon />,
    span: 'bebidas',
  },
  {
    img: <IceCreamIcon />,
    span: 'sobremesas',
  },
]

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const HandleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <S.Container isMenuOpen={menuOpen}>
      <button onClick={() => HandleToggleMenu()}>
        <img src={Menu} alt='' />
      </button>

      <nav>
        <ul>
          {images.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={`/${item.span}`}>
                  {item.img}
                  <span>{item.span}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </S.Container>
  )
}
