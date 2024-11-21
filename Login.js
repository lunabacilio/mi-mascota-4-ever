import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Landing')}>
          <Ionicons name="arrow-back" size={24} color="black"/>
      </TouchableOpacity>
      <Text style={styles.title}>Inicio de sesión</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.Loginbutton} onPress={() => navigation.navigate('ProfileSelection')}>
          <Text style={styles.LoginbuttonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
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
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#C48CB3',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  Loginbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: 256,
    height: 60,
    borderRadius: 40,
    marginTop: 80,
  },
  LoginbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Login;