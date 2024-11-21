import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Landing')}>
          <Ionicons name="arrow-back" size={24} color="black"/>
        </TouchableOpacity>
        <Text style={styles.title}>Le damos la bienvenida</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Ingrese sus datos</Text>
        <TextInput
          style={styles.input}
          placeholder="Escriba su nombre(s)"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Escriba su(s) apellido(s)"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
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
          placeholder="Número de Teléfono"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.Registerbutton} onPress={() => navigation.navigate('SuccessScreen')}>
          <Text style={styles.RegisterbuttonText}>REGISTRARSE</Text>
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  formContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#C48CB3',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'youngserif',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
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
  RegisterbuttonContainer: {
    alignItems: 'center',
    //justifyContent: 'center',
    //width: '80%',
    marginTop: 20,
  },
  Registerbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: 256,
    height: 60,
    borderRadius: 40,
  },
  RegisterbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
  },
});

export default Register;