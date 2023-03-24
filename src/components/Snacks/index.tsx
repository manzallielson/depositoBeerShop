import * as S from './styles'
import { FiPlus } from 'react-icons/fi'
interface SnacksProps {
  snacks: any[]
}
interface snack {
  id: number
  snack: string
  name: string
  description: string
  price: number
  image: string
}

export const Snacks = ({ snacks }: SnacksProps) => {
  return (
    <S.Container>
      {snacks?.map((snack: snack) => {
        return (
          <div key={snack.id} className='snack'>
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>
            <div>
              <strong>{snack.price}</strong>
              <button type='button'>
                <FiPlus />
              </button>
            </div>
          </div>
        )
      })}
    </S.Container>
  )
}
