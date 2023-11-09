import { Image, Text, View } from 'react-native'
import { ProductDTO } from '../../../../dtos/ProductDTO'
import { styles } from './styles'
import { formatPrice } from '../../../../utils/formatPrice'

export function ProductListCard({
  name,
  image,
  description,
  price,
}: ProductDTO) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} alt={name} style={styles.image} />
      </View>

      <View style={styles.detailsProductContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.priceSimbol}>R$</Text>
          <Text style={styles.priceNumber}>{formatPrice(price)}</Text>
        </View>
      </View>
    </View>
  )
}
