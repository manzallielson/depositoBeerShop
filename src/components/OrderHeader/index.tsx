import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import * as S from './styles'
import { Logo2, shoppingCart } from '../../assets'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export const OrderHeader = () => {
  const { cart } = useCart()
  return (
    <S.Container>
      <Link to='/'>
        <img src={Logo2} alt='BeerShop' />
      </Link>

      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> lanche(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </S.Container>
  )
}
