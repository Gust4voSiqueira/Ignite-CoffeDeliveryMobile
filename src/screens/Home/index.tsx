import { ScrollView, Text, View } from 'react-native'
import { Header } from './sections/Header'
import { CardProductCarousel } from './sections/CardProductCarousel'
import { styles } from './styles'

import { categories, productsCarousel, productsList } from '../../data/products'
import { ProductListCard } from './sections/ProductListCard'

export function Home() {
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.productsCarouselContainer}>
            {productsCarousel.map((product) => (
              <CardProductCarousel
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.ourCoffesText}>Nossos cafés</Text>

          <View style={styles.ourCoffesCardsContainer}>
            {categories.map((category) => (
              <View key={category} style={styles.ourCoffesCard}>
                <Text style={styles.categoryCardText}>{category}</Text>
              </View>
            ))}
          </View>
        </View>

        {productsList.map((product) => (
          <>
            <Text key={product.category} style={styles.textCategory}>
              {product.category}
            </Text>
            {product.products.map((productList) => (
              <ProductListCard
                key={productList.id}
                id={productList.id}
                name={productList.name}
                image={productList.image}
                category={productList.category}
                price={productList.price}
                description={productList.description}
              />
            ))}
          </>
        ))}
      </View>
    </ScrollView>
  )
}
