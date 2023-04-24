import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './RegisterScreen.styles'

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    fetch('https://644597500431e885f000c153.mockapi.io/users', {
      
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Guardar el token de autenticación en AsyncStorage
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={setPassword} />
      <Button title="Registrarse" onPress={handleRegister} />
  
    </View>
  );
};
