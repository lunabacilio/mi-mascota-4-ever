import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdoptFormRegistration2 = ({ navigation }) => {
  const [housingType, setHousingType] = useState('');
  const [availableSpace, setAvailableSpace] = useState('');
  const [otherAnimals, setOtherAnimals] = useState('');
  const [dedicatedHours, setDedicatedHours] = useState('');
  const [walkingFrequency, setWalkingFrequency] = useState('');

  const handleFormRegistration2 = () => {
    // Handle registration logic here
    console.log('Housing Type:', housingType);
    console.log('Available Space:', availableSpace);
    console.log('Other Animals:', otherAnimals);
    console.log('Dedicated Hours:', dedicatedHours);
    console.log('Walking Frequency:', walkingFrequency);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Formulario de Adoptantes</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Estilo de vida</Text>
        <Picker
          selectedValue={housingType}
          style={styles.input}
          onValueChange={(itemValue) => setHousingType(itemValue)}
        >
          <Picker.Item label="Seleccione el tipo de vivienda" value="" />
          <Picker.Item label="Casa" value="house" />
          <Picker.Item label="Apartamento" value="apartment" />
          <Picker.Item label="Otro" value="other" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Describe el espacio disponible"
          value={availableSpace}
          onChangeText={setAvailableSpace}
        />
        <TextInput
          style={styles.input}
          placeholder="Tienes otros animales?"
          value={otherAnimals}
          onChangeText={setOtherAnimals}
        />
        <TextInput
          style={styles.input}
          placeholder="Horas que puedes dedicarle"
          value={dedicatedHours}
          onChangeText={setDedicatedHours}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Frecuencia en que podrías pasear"
          value={walkingFrequency}
          onChangeText={setWalkingFrequency}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormRegistration3')}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
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

export default AdoptFormRegistration2;