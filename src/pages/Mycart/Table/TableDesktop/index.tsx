import { currencyFormat } from '../../../../Helpes/currencyFormat'
import { useCart } from '../../../../hooks/useCart'
import * as S from './styles'

export const TableDesktop = () => {
  const { cart } = useCart()
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>{item.quantity}</td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>Deletar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  )
}
