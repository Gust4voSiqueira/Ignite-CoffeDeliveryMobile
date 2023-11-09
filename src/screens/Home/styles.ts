import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    minHeight: '100%',
    backgroundColor: THEME.COLORS.GRAY_900,
  },
  carouselContainer: {
    position: 'relative',
    height: 230,
  },
  productsCarouselContainer: {
    position: 'absolute',
    top: -78,
    zIndex: 2,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCategory: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_XS,
    color: THEME.COLORS.GRAY_400,
    marginVertical: 20,
  },
  ourCoffesText: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_SM,
    color: THEME.COLORS.GRAY_300,
  },
  ourCoffesCardsContainer: {
    flexDirection: 'row',
  },
  ourCoffesCard: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  categoryCardText: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.FONT_SIZE.TAG,
    color: THEME.COLORS.PURPLE_DARK,
  },
})
