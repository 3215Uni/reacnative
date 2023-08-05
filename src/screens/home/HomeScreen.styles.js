import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../utils/theme'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    },
    categoria:{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    searchInput: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
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
    btn: {
      color: 'white',
      fontSize: 16,
      //backgroundColor: '#FC33BC', // Color del fondo del botón
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: 'gray',
      textAlign: 'center',
    },
})
  