import { Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './styles'

import { ShoppingCart, MapPin } from 'phosphor-react-native'
import { THEME } from '../../../../styles/theme'

import GrainsCoffe from '../../../../assets/grainsCoffe.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <MapPin color={THEME.COLORS.PURPLE} size={18} weight="fill" />
          <Text style={styles.textCity}>Luziânia, GO</Text>
        </View>

        <Pressable>
          <ShoppingCart
            color={THEME.COLORS.YELLOW_DARK}
            size={18}
            weight="fill"
          />
        </Pressable>
      </View>

      <Text style={styles.textTitle}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <TextInput
        placeholder="Pesquisar"
        placeholderTextColor={THEME.COLORS.GRAY_400}
        style={styles.textInput}
      />

      <View style={styles.grainsImageContainer}>
        <GrainsCoffe />
      </View>
    </View>
  )
}
