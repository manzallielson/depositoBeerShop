import * as S from './style'
import Menu from '../../assets/menu.svg'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import { useState } from 'react'

const images = [
  {
    img: <BurguerIcon />,
    span: 'Hambúrgueres',
  },
  {
    img: <PizzaIcon />,
    span: 'Pizza',
  },
  {
    img: <SodaPopIcon />,
    span: 'Bebidas',
  },
  {
    img: <IceCreamIcon />,
    span: 'Sorvetes',
  },
]

export function Sidebar() {
  const [active, setActive] = useState<number>()

  const SelectMenu = (index: number) => {
    console.log(index)
    setActive(index)
  }
  return (
    <S.Container>
      <button>
        <img src={Menu} alt='' />
      </button>
      <nav>
        <ul>
          {images.map((item, index) => {
            return (
              <li key={index} onClick={() => SelectMenu(index)}>
                <a href='#' className={index === active ? 'active' : ''}>
                  {item.img}
                  <span>{item.span}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </S.Container>
  )
}
