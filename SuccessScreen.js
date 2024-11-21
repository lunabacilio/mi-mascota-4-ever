// SuccessScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro Exitoso</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E5C9D7',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'work-sans',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: 256,
    height: 60,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
  },
});

export default SuccessScreen;