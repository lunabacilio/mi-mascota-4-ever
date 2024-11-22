import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdoptFormRegistration3 = ({ navigation }) => {
  const [activityLevel, setActivityLevel] = useState('');
  const [petCharacterPreference, setPetCharacterPreference] = useState('');
  const [canAdoptSpecialNeeds, setCanAdoptSpecialNeeds] = useState('');
  const [adoptionReason, setAdoptionReason] = useState('');

  const handleFormRegistration3 = () => {
    // Handle registration logic here
    console.log('Activity Level:', activityLevel);
    console.log('Pet Character Preference:', petCharacterPreference);
    console.log('Can Adopt Special Needs:', canAdoptSpecialNeeds);
    console.log('Adoption Reason:', adoptionReason);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Formulario de Adoptantes</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Personalidad y Actividad</Text>
        <Picker
          selectedValue={activityLevel}
          style={styles.input}
          onValueChange={(itemValue) => setActivityLevel(itemValue)}
        >
          <Picker.Item label="Seleccione su nivel de actividad" value="" />
          <Picker.Item label="Bajo" value="low" />
          <Picker.Item label="Medio" value="medium" />
          <Picker.Item label="Alto" value="high" />
        </Picker>
        <Picker
          selectedValue={petCharacterPreference}
          style={styles.input}
          onValueChange={(itemValue) => setPetCharacterPreference(itemValue)}
        >
          <Picker.Item label="Seleccione la preferencia de carácter de mascota" value="" />
          <Picker.Item label="Tranquilo" value="calm" />
          <Picker.Item label="Juguetón" value="playful" />
          <Picker.Item label="Protector" value="protective" />
        </Picker>
        <Picker
          selectedValue={canAdoptSpecialNeeds}
          style={styles.input}
          onValueChange={(itemValue) => setCanAdoptSpecialNeeds(itemValue)}
        >
          <Picker.Item label="¿Puede adoptar mascota con necesidades especiales?" value="" />
          <Picker.Item label="Sí" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
        <Text style={styles.formTitle}>Motivo de Adopción</Text>
        <Picker
          selectedValue={adoptionReason}
          style={styles.input}
          onValueChange={(itemValue) => setAdoptionReason(itemValue)}
        >
          <Picker.Item label="Seleccione el motivo principal de adopción" value="" />
          <Picker.Item label="Compañía" value="companionship" />
          <Picker.Item label="Protección" value="protection" />
          <Picker.Item label="Ayuda emocional" value="emotional_support" />
          <Picker.Item label="Otro" value="other" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PetGallery')}>
          <Text style={styles.buttonText}>GUARDAR</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'work-sans',
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
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: '100%',
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