import { Image, Text, View } from 'react-native'

import { styles } from './styles'
import { ProductDTO } from '../../../../dtos/ProductDTO'
import { formatPrice } from '../../../../utils/formatPrice'

export function CardProductCarousel({
  name,
  image,
  description,
  category,
  price,
}: ProductDTO) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} alt="Latte" style={styles.imageCoffe} />
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>{category?.toUpperCase()}</Text>
      </View>

      <Text style={styles.coffeName}>{name}</Text>
      <Text style={styles.coffeDescription}>{description}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.priceSimbol}>R$</Text>
        <Text style={styles.priceNumber}>{formatPrice(price)}</Text>
      </View>
    </View>
  )
}
