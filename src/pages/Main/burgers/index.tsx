import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'o artesanal tamanho familia com três carnes suculentas, queijo e bacon',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'criado para amantes de bacon, possui em todas as suas camadas bacon bem assado',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
    {
      id: 3,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'criado para amantes de bacon, possui em todas as suas camadas bacon bem assado',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
    {
      id: 4,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'criado para amantes de bacon, possui em todas as suas camadas bacon bem assado',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
    {
      id: 5,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'criado para amantes de bacon, possui em todas as suas camadas bacon bem assado',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
    {
      id: 6,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'criado para amantes de bacon, possui em todas as suas camadas bacon bem assado',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]

  return (
    <>
      <Head title='Burgers' description='Nossos melhores Burges' />
      <SnackTitle>Burgers</SnackTitle>

      <Snacks snacks={data} />
    </>
  )
}
