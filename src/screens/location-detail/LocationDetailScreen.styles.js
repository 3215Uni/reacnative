import { StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  textContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5
  },
  price: {
    fontSize: 20,
    color: '#808080',
    marginBottom: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    marginLeft: 8,
    color: COLORS.text,
    fontSize: FONT_SIZE.md
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10
  }
})