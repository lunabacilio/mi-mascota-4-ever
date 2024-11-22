import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('../../assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('../../assets/fonts/WorkSans.ttf'),
  });
};

const AdoptFormRegistration1 = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const [petType, setPetType] = useState('');
  const [preferredSize, setPreferredSize] = useState('');
  const [preferredAge, setPreferredAge] = useState('');
  const [preferredGender, setPreferredGender] = useState('');
  const [furType, setFurType] = useState('');

  const [petTypeOpen, setPetTypeOpen] = useState(false);
  const [preferredSizeOpen, setPreferredSizeOpen] = useState(false);
  const [preferredAgeOpen, setPreferredAgeOpen] = useState(false);
  const [preferredGenderOpen, setPreferredGenderOpen] = useState(false);
  const [furTypeOpen, setFurTypeOpen] = useState(false);

  const petTypeItems = [
    { label: 'Tipo de Mascota', value: '' },
    { label: 'Perro', value: 'dog' },
    { label: 'Gato', value: 'cat' },
    { label: 'Ave', value: 'bird' },
    { label: 'Otro', value: 'other' },
  ];

  const preferredSizeItems = [
    { label: 'Tamaño Preferido', value: '' },
    { label: 'Pequeño', value: 'small' },
    { label: 'Mediano', value: 'medium' },
    { label: 'Grande', value: 'large' },
  ];

  const preferredAgeItems = [
    { label: 'Edad preferida', value: '' },
    { label: 'Cachorro', value: 'puppy' },
    { label: 'Adulto', value: 'adult' },
    { label: 'Senior', value: 'senior' },
  ];

  const preferredGenderItems = [
    { label: 'Sexo preferido', value: '' },
    { label: 'Macho', value: 'male' },
    { label: 'Hembra', value: 'female' },
  ];

  const furTypeItems = [
    { label: 'Tipo de pelaje', value: '' },
    { label: 'Corto', value: 'short' },
    { label: 'Medio', value: 'medium' },
    { label: 'Largo', value: 'long' },
  ];

  const handleFormRegistration1 = () => {
    // Handle registration logic here
    console.log('Pet Type:', petType);
    console.log('Preferred Size:', preferredSize);
    console.log('Preferred Age:', preferredAge);
    console.log('Preferred Gender:', preferredGender);
    console.log('Fur Type:', furType);
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
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Image
        source={require('../../assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.logo}
      />
      <Text style={styles.title}>Formulario de Adoptantes</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Preferencia de mascota</Text>
        <DropDownPicker
          open={petTypeOpen}
          value={petType}
          items={petTypeItems}
          setOpen={setPetTypeOpen}
          setValue={setPetType}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione el tipo de mascota"
        />
        <DropDownPicker
          open={preferredSizeOpen}
          value={preferredSize}
          items={preferredSizeItems}
          setOpen={setPreferredSizeOpen}
          setValue={setPreferredSize}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione el tamaño preferido"
        />
        <DropDownPicker
          open={preferredAgeOpen}
          value={preferredAge}
          items={preferredAgeItems}
          setOpen={setPreferredAgeOpen}
          setValue={setPreferredAge}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione la edad preferida"
        />
        <DropDownPicker
          open={preferredGenderOpen}
          value={preferredGender}
          items={preferredGenderItems}
          setOpen={setPreferredGenderOpen}
          setValue={setPreferredGender}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione el sexo preferido"
        />
        <DropDownPicker
          open={furTypeOpen}
          value={furType}
          items={furTypeItems}
          setOpen={setFurTypeOpen}
          setValue={setFurType}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione el tipo de pelaje"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdoptFormRegistration2')}>
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
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#C48CB3',
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
  dropdown: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 15,
  },
  dropdownText: {
    fontFamily: 'work-sans',
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

export default AdoptFormRegistration1;