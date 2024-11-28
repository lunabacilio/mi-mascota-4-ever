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

const AdoptFormRegistration3 = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const [activityLevel, setActivityLevel] = useState('');
  const [petCharacterPreference, setPetCharacterPreference] = useState('');
  const [canAdoptSpecialNeeds, setCanAdoptSpecialNeeds] = useState('');
  const [adoptionReason, setAdoptionReason] = useState('');

  const [activityLevelOpen, setActivityLevelOpen] = useState(false);
  const [petCharacterPreferenceOpen, setPetCharacterPreferenceOpen] = useState(false);
  const [canAdoptSpecialNeedsOpen, setCanAdoptSpecialNeedsOpen] = useState(false);
  const [adoptionReasonOpen, setAdoptionReasonOpen] = useState(false);

  const activityLevelItems = [
    { label: 'Seleccione su nivel de actividad', value: '' },
    { label: 'Bajo', value: 'low' },
    { label: 'Medio', value: 'medium' },
    { label: 'Alto', value: 'high' },
  ];

  const petCharacterPreferenceItems = [
    { label: 'Seleccione la preferencia de carácter de mascota', value: '' },
    { label: 'Tranquilo', value: 'calm' },
    { label: 'Activo', value: 'active' },
    { label: 'Juguetón', value: 'playful' },
  ];

  const canAdoptSpecialNeedsItems = [
    { label: '¿Puede adoptar mascota con necesidades especiales?', value: '' },
    { label: 'Sí', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const adoptionReasonItems = [
    { label: 'Seleccione el motivo principal de adopción', value: '' },
    { label: 'Compañía', value: 'companionship' },
    { label: 'Protección', value: 'protection' },
    { label: 'Otro', value: 'other' },
  ];

  const handleFormRegistration3 = () => {
    // Handle registration logic here
    console.log('Activity Level:', activityLevel);
    console.log('Pet Character Preference:', petCharacterPreference);
    console.log('Can Adopt Special Needs:', canAdoptSpecialNeeds);
    console.log('Adoption Reason:', adoptionReason);
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
        <Text style={styles.formTitle}>Personalidad y Actividad</Text>
        <DropDownPicker
          open={activityLevelOpen}
          value={activityLevel}
          items={activityLevelItems}
          setOpen={setActivityLevelOpen}
          setValue={setActivityLevel}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Cual es tu nivel de actividad"
        />
        <DropDownPicker
          open={petCharacterPreferenceOpen}
          value={petCharacterPreference}
          items={petCharacterPreferenceItems}
          setOpen={setPetCharacterPreferenceOpen}
          setValue={setPetCharacterPreference}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Preferencia de caracter de mascota"
        />
        <DropDownPicker
          open={canAdoptSpecialNeedsOpen}
          value={canAdoptSpecialNeeds}
          items={canAdoptSpecialNeedsItems}
          setOpen={setCanAdoptSpecialNeedsOpen}
          setValue={setCanAdoptSpecialNeeds}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="¿Puede adoptar mascota con necesidades especiales?"
        />
        <Text style={styles.formTitle}>Motivo de Adopción</Text>
        <DropDownPicker
          open={adoptionReasonOpen}
          value={adoptionReason}
          items={adoptionReasonItems}
          setOpen={setAdoptionReasonOpen}
          setValue={setAdoptionReason}
          setItems={() => {}}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          placeholder="Seleccione el motivo principal de adopción"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdoptantProfile')}>
        <Text style={styles.buttonText}>GUARDAR</Text>
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

export default AdoptFormRegistration3;