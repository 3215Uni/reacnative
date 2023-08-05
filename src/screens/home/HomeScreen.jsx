import React, { useState } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity } from 'react-native'; // Asegúrate de tener la importación de TouchableOpacity
import { styles } from './HomeScreen.styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Importa LinearGradient desde expo-linear-gradient

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [cantidadPasajeros, setCantidadPasajeros] = useState(''); // Agregado
  const [tipoTransporte, setTipoTransporte] = useState(''); // Agregado

  const handleSearch = (text) => {
    setSearchText(text);
    // Aquí puedes implementar la lógica para buscar utilizando el texto ingresado.
    // Por ejemplo, puedes filtrar una lista de elementos con el texto ingresado.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoria}>
        <Ionicons name="heart-circle-sharp" size={33} color="black" />
        Planifica
      </Text>
      <Text style={styles.title}>
        <Ionicons name="location-sharp" size={24} color="black" />
        Elije Ubicación
      </Text>
      <TextInput
        style={styles.searchInput}
        placeholder="¿A dónde vamos?..."
        onChangeText={handleSearch}
        value={searchText}
      />
      <Text style={styles.title}>
        <Ionicons name="ios-car-sport-sharp" size={24} color="black" />
        Elije transporte
      </Text>
      <Picker
        selectedValue={tipoTransporte}
        onValueChange={(itemValue) => setTipoTransporte(itemValue)}
      >
        <Picker.Item label="Moto" value="moto" />
        <Picker.Item label="Auto" value="auto" />
        <Picker.Item label="Convis" value="convis" />
        <Picker.Item label="Autobús" value="autobus" />
        {/* Agrega más opciones de transporte si lo deseas */}
      </Picker>

      <Text style={styles.title}>
        <Ionicons name="person-add" size={24} color="black" />
        Cantidad de pasajeros
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cantidadPasajeros}
        onChangeText={(text) => setCantidadPasajeros(text)}
        placeholder="Ingresa la cantidad de pasajeros"
      />
      <TouchableOpacity onPress={() => console.log('Botón presionado')}>
        

         <LinearGradient
            colors={['#CE3197','#0951B6','#0983B6','#13BDC3']}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.gradient}>
            <Text style={styles.buttonText}>Entrar</Text>
          </LinearGradient>

      </TouchableOpacity>

      <br></br>

      <Text style={styles.categoria}><Ionicons name="people-sharp" size={33} color="black" />Viajes compartidos</Text>
      <Text>"El compartir multiplica la alegría y divide los gastos."</Text>
      <Text>Ahorra compartiendo el viaje con tu círculo de confianza :D!</Text>
    </View>
  );
};