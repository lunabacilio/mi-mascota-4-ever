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

const PetFormRegistration2 = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const [generalCharacter, setGeneralCharacter] = useState('');
  const [energyLevel, setEnergyLevel] = useState('');
  const [socialBehavior, setSocialBehavior] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [vaccinationStatus, setVaccinationStatus] = useState('');
  const [sterilizationStatus, setSterilizationStatus] = useState('');

  const [generalCharacterOpen, setGeneralCharacterOpen] = useState(false);
  const [energyLevelOpen, setEnergyLevelOpen] = useState(false);
  const [socialBehaviorOpen, setSocialBehaviorOpen] = useState(false);
  const [healthStatusOpen, setHealthStatusOpen] = useState(false);
  const [vaccinationStatusOpen, setVaccinationStatusOpen] = useState(false);
  const [sterilizationStatusOpen, setSterilizationStatusOpen] = useState(false);

  const generalCharacterItems = [
    { label: 'Seleccione el carácter general', value: '' },
    { label: 'Tranquilo', value: 'calm' },
    { label: 'Activo', value: 'active' },
    { label: 'Juguetón', value: 'playful' },
  ];

  const energyLevelItems = [
    { label: 'Seleccione el nivel de energía', value: '' },
    { label: 'Bajo', value: 'low' },
    { label: 'Medio', value: 'medium' },
    { label: 'Alto', value: 'high' },
  ];

  const socialBehaviorItems = [
    { label: 'Seleccione el comportamiento social', value: '' },
    { label: 'Sociable', value: 'sociable' },
    { label: 'Independiente', value: 'independent' },
    { label: 'Agresivo', value: 'aggressive' },
  ];

  const healthStatusItems = [
    { label: 'Seleccione el estado general de salud', value: '' },
    { label: 'Bueno', value: 'good' },
    { label: 'Regular', value: 'average' },
    { label: 'Malo', value: 'bad' },
  ];

  const vaccinationStatusItems = [
    { label: 'Seleccione si las vacunas están al día', value: '' },
    { label: 'Sí', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const sterilizationStatusItems = [
    { label: 'Seleccione si está esterilizado', value: '' },
    { label: 'Sí', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const handleFormRegistration2 = () => {
    // Handle registration logic here
    console.log('General Character:', generalCharacter);
    console.log('Energy Level:', energyLevel);
    console.log('Social Behavior:', socialBehavior);
    console.log('Health Status:', healthStatus);
    console.log('Vaccination Status:', vaccinationStatus);
    console.log('Sterilization Status:', sterilizationStatus);
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
        <Text style={styles.formTitle}>Personalidad</Text>
        <DropDownPicker
          open={generalCharacterOpen}
          value={generalCharacter}
          items={generalCharacterItems}
          setOpen={setGeneralCharacterOpen}
          setValue={setGeneralCharacter}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el carácter general"
        />
        <DropDownPicker
          open={energyLevelOpen}
          value={energyLevel}
          items={energyLevelItems}
          setOpen={setEnergyLevelOpen}
          setValue={setEnergyLevel}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el nivel de energía"
        />
        <DropDownPicker
          open={socialBehaviorOpen}
          value={socialBehavior}
          items={socialBehaviorItems}
          setOpen={setSocialBehaviorOpen}
          setValue={setSocialBehavior}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el comportamiento social"
        />
        <Text style={styles.formTitle}>Condiciones de salud</Text>
        <DropDownPicker
          open={healthStatusOpen}
          value={healthStatus}
          items={healthStatusItems}
          setOpen={setHealthStatusOpen}
          setValue={setHealthStatus}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el estado general de salud"
        />
        <DropDownPicker
          open={vaccinationStatusOpen}
          value={vaccinationStatus}
          items={vaccinationStatusItems}
          setOpen={setVaccinationStatusOpen}
          setValue={setVaccinationStatus}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione si las vacunas están al día"
        />
        <DropDownPicker
          open={sterilizationStatusOpen}
          value={sterilizationStatus}
          items={sterilizationStatusItems}
          setOpen={setSterilizationStatusOpen}
          setValue={setSterilizationStatus}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione si está esterilizado"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PetFormRegistration3')}>
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

export default PetFormRegistration2;