import {
  ProductDTO,
  ProductToListDTO,
  ProductsListTypes,
} from '../dtos/ProductDTO'

import ExpressoTradicional from '../assets/Expresso.png'
import ExpressoAmericano from '../assets/Americano.png'
import ExpressoCremoso from '../assets/ExpressoCremoso.png'
import Latte from '../assets/Latte.png'
import ExpressoGelado from '../assets/CaféGelado.png'

import Capuccino from '../assets/Capuccino.png'
import Mocaccino from '../assets/Mochaccino.png'
import ChocolateQuente from '../assets/ChocolateQuente.png'

import Cubano from '../assets/Cubano.png'
import Havaiano from '../assets/Havaiano.png'
import Arabe from '../assets/Árabe.png'
import Irlandes from '../assets/Irlandês.png'

export const categories: Array<ProductsListTypes> = [
  'Tradicionais',
  'Doces',
  'Especiais',
]

export const productsCarousel: ProductDTO[] = [
  {
    id: 1,
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    image: Latte,
    price: 990,
    category: 'Tradicional',
  },
  {
    id: 2,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: Mocaccino,
    price: 990,
    category: 'Doce',
  },
]

export const productsList: ProductToListDTO[] = [
  {
    category: 'Tradicionais',
    products: [
      {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        image: ExpressoTradicional,
        price: 990,
      },
      {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        image: ExpressoAmericano,
        price: 990,
      },
      {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        image: ExpressoCremoso,
        price: 990,
      },
      {
        id: 4,
        name: 'Latte',
        description: 'Café expresso com o dobro de leite e espuma cremosa',
        image: Latte,
        price: 990,
      },
      {
        id: 5,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        image: ExpressoGelado,
        price: 990,
      },
    ],
  },
  {
    category: 'Doces',
    products: [
      {
        id: 6,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses de café, leite e espuma',
        image: Capuccino,
        price: 990,
      },
      {
        id: 7,
        name: 'Moccaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        image: Mocaccino,
        price: 990,
      },
      {
        id: 8,
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        image: ChocolateQuente,
        price: 990,
      },
    ],
  },
  {
    category: 'Especiais',
    products: [
      {
        id: 9,
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        image: Cubano,
        price: 990,
      },
      {
        id: 10,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        image: Havaiano,
        price: 990,
      },
      {
        id: 11,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        image: Arabe,
        price: 990,
      },
      {
        id: 12,
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        image: Irlandes,
        price: 990,
      },
    ],
  },
]
