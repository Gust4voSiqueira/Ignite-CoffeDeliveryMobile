import { StyleSheet } from 'react-native'
import { THEME } from '../../../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 36,
    borderTopRightRadius: 36,

    backgroundColor: THEME.COLORS.GRAY_800,
    paddingHorizontal: 20,
    height: 120,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  imageContainer: {
    width: '40%',
  },
  image: {
    position: 'absolute',
    top: -72,
    left: -10,
    width: 96,
    height: 96,
    objectFit: 'cover',
  },
  detailsProductContainer: {
    maxWidth: '60%',
  },
  productName: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_SM,
    color: THEME.COLORS.GRAY_200,
  },
  description: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_XS,
    color: THEME.COLORS.GRAY_400,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceSimbol: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    color: THEME.COLORS.YELLOW_DARK,
  },
  priceNumber: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_LG,
    color: THEME.COLORS.YELLOW_DARK,
  },
})
