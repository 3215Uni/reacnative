import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 5
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10
    }
  });