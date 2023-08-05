import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.gris,
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#CE3197',
    textAlign: 'center'
  },
  input: {
    height: 40,
    backgroundColor:'#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  gradient: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

/*import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color:'#CE3197',
      textAlign: 'center'
    },
    input: {
      height: 40,
      backgroundColor:'#fff',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: 5
    },
    errorText: {
      color: 'red',
      marginBottom: 8
    },
    gradient: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginTop: 8,
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },
  })*/