import { ImageSourcePropType } from 'react-native/types'

export type ProductTypes = 'Tradicional' | 'Doce' | 'Especial'
export type ProductsListTypes = 'Tradicionais' | 'Doces' | 'Especiais'

export interface ProductDTO {
  id: number
  name: string
  description: string
  image: ImageSourcePropType
  price: number
  category?: ProductTypes
}

export interface ProductToListDTO {
  category: ProductsListTypes
  products: ProductDTO[]
}
