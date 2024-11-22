import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('../../assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('../../assets/fonts/WorkSans.ttf'),
  });
};

const PetFormRegistration1 = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [furType, setFurType] = useState('');
  const [gender, setGender] = useState('');

  const [furTypeOpen, setFurTypeOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);

  const furTypeItems = [
    { label: 'Seleccione el tipo de pelaje', value: '' },
    { label: 'Corto', value: 'short' },
    { label: 'Medio', value: 'medium' },
    { label: 'Largo', value: 'long' },
  ];

  const genderItems = [
    { label: 'Seleccione el sexo', value: '' },
    { label: 'Macho', value: 'male' },
    { label: 'Hembra', value: 'female' },
  ];

  const handleFormRegistration1 = () => {
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Species:', species);
    console.log('Breed:', breed);
    console.log('Age:', age);
    console.log('Size:', size);
    console.log('Fur Type:', furType);
    console.log('Gender:', gender);
  };

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={require('../../assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.logo}
      />
      <Text style={styles.title}>Formulario para Registrar Mascota</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Información de la Mascota</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Especie"
          value={species}
          onChangeText={setSpecies}
        />
        <TextInput
          style={styles.input}
          placeholder="Raza"
          value={breed}
          onChangeText={setBreed}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Tamaño"
          value={size}
          onChangeText={setSize}
        />
        <DropDownPicker
          open={furTypeOpen}
          value={furType}
          items={furTypeItems}
          setOpen={setFurTypeOpen}
          setValue={setFurType}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el tipo de pelaje"
        />
        <DropDownPicker
          open={genderOpen}
          value={gender}
          items={genderItems}
          setOpen={setGenderOpen}
          setValue={setGender}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el sexo"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PetFormRegistration2')}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 20,
    marginTop: 30, // Ajusta este valor para mover el logo hacia abajo
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'young-serif',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#C48CB3',
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 42,
  },
  dropdown: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 42,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: 230,
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

export default PetFormRegistration1;