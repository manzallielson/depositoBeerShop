import { useCart } from '../../hooks/useCart'
import * as S from './styles'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart.svg'
export const MyOrder = () => {
  const { cart } = useCart()

  return (
    <S.Container to={'cart'}>
      <span>Meu Pedido</span>
      <ShoppingCart />
      {cart.length !== 0 && <span> {cart.length}</span>}
    </S.Container>
  )
}
