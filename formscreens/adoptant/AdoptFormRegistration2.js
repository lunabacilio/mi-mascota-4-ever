import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('../../assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('../../assets/fonts/WorkSans.ttf'),
  });
};

const AdoptFormRegistration2 = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const [housingType, setHousingType] = useState('');
  const [availableSpace, setAvailableSpace] = useState('');
  const [otherAnimals, setOtherAnimals] = useState('');
  const [dedicatedHours, setDedicatedHours] = useState('');
  const [walkingFrequency, setWalkingFrequency] = useState('');

  const [housingTypeOpen, setHousingTypeOpen] = useState(false);
  const [availableSpaceOpen, setAvailableSpaceOpen] = useState(false);
  const [otherAnimalsOpen, setOtherAnimalsOpen] = useState(false);
  const [dedicatedHoursOpen, setDedicatedHoursOpen] = useState(false);
  const [walkingFrequencyOpen, setWalkingFrequencyOpen] = useState(false);

  const housingTypeItems = [
    { label: 'Tipo de vivienda', value: '' },
    { label: 'Casa', value: 'house' },
    { label: 'Apartamento', value: 'apartment' },
    { label: 'Otro', value: 'other' },
  ];

  const availableSpaceItems = [
    { label: 'Espacio disponible', value: '' },
    { label: 'Pequeño', value: 'small' },
    { label: 'Mediano', value: 'medium' },
    { label: 'Grande', value: 'large' },
  ];

  const otherAnimalsItems = [
    { label: 'Otros animales', value: '' },
    { label: 'Sí', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const dedicatedHoursItems = [
    { label: 'Horas dedicadas', value: '' },
    { label: 'Menos de 1 hora', value: 'less_than_1_hour' },
    { label: '1-2 horas', value: '1_2_hours' },
    { label: 'Más de 2 horas', value: 'more_than_2_hours' },
  ];

  const walkingFrequencyItems = [
    { label: 'Frecuencia de paseos', value: '' },
    { label: 'Diario', value: 'daily' },
    { label: 'Semanal', value: 'weekly' },
    { label: 'Mensual', value: 'monthly' },
  ];

  const handleFormRegistration2 = () => {
    // Handle registration logic here
    console.log('Housing Type:', housingType);
    console.log('Available Space:', availableSpace);
    console.log('Other Animals:', otherAnimals);
    console.log('Dedicated Hours:', dedicatedHours);
    console.log('Walking Frequency:', walkingFrequency);
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
        <Text style={styles.formTitle}>Información del hogar</Text>
        <DropDownPicker
          open={housingTypeOpen}
          value={housingType}
          items={housingTypeItems}
          setOpen={setHousingTypeOpen}
          setValue={setHousingType}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione el tipo de vivienda"
        />
        <DropDownPicker
          open={availableSpaceOpen}
          value={availableSpace}
          items={availableSpaceItems}
          setOpen={setAvailableSpaceOpen}
          setValue={setAvailableSpace}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione el espacio disponible"
        />
        <DropDownPicker
          open={otherAnimalsOpen}
          value={otherAnimals}
          items={otherAnimalsItems}
          setOpen={setOtherAnimalsOpen}
          setValue={setOtherAnimals}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione si tiene otros animales"
        />
        <DropDownPicker
          open={dedicatedHoursOpen}
          value={dedicatedHours}
          items={dedicatedHoursItems}
          setOpen={setDedicatedHoursOpen}
          setValue={setDedicatedHours}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione las horas dedicadas"
        />
        <DropDownPicker
          open={walkingFrequencyOpen}
          value={walkingFrequency}
          items={walkingFrequencyItems}
          setOpen={setWalkingFrequencyOpen}
          setValue={setWalkingFrequency}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione la frecuencia de paseos"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdoptFormRegistration3')}>
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

export default AdoptFormRegistration2;