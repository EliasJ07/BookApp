import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [nombre, setNombre] = useState("");

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <CustomInput
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <CustomButton
        title="Mi Boton 1"
        onPress={() => {
          console.log("1");
          console.log(nombre);
        }}
      />

      <CustomButton
        title="Mi Boton 2"
        onPress={() => {
          console.log("2");
        }}
        variant="secondary"
      />

      <CustomButton
        title="Mi Boton 3 Prueba"
        onPress={() => {
          console.log("3");
        }}
        variant="tertiary"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});