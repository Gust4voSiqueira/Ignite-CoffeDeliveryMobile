import { StyleSheet } from 'react-native'
import { THEME } from '../../../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 380,
    backgroundColor: THEME.COLORS.GRAY_100,

    paddingVertical: 60,
    paddingHorizontal: 35,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCity: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    color: THEME.COLORS.GRAY_900,
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_MD,
    color: THEME.COLORS.WHITE,
    marginTop: 30,
  },
  textInput: {
    backgroundColor: THEME.COLORS.GRAY_200,
    padding: 12,
    borderRadius: 4,
    marginTop: 8,
  },
  grainsImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
