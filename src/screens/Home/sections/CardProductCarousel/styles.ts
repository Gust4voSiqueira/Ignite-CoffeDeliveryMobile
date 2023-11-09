import { StyleSheet } from 'react-native'
import { THEME } from '../../../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY_800,
    alignItems: 'center',
    width: 208,
    padding: 20,
    marginRight: 30,

    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 36,
    borderTopRightRadius: 36,

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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  imageCoffe: {
    position: 'absolute',
    width: 120,
    height: 120,
    objectFit: 'contain',
  },
  categoryContainer: {
    borderRadius: 100,
    backgroundColor: THEME.COLORS.PURPLE_LIGHT,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  categoryText: {
    color: THEME.COLORS.PURPLE_DARK,
    fontSize: THEME.FONT_SIZE.TAG,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
  },
  coffeName: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_MD,
    color: THEME.COLORS.GRAY_200,
    marginVertical: 2,
  },
  coffeDescription: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_XS,
    color: THEME.COLORS.GRAY_400,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
