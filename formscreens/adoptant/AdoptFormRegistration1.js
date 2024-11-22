import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdoptFormRegistration1 = ({ navigation }) => {
  const [petType, setPetType] = useState('');
  const [preferredSize, setPreferredSize] = useState('');
  const [preferredAge, setPreferredAge] = useState('');
  const [preferredGender, setPreferredGender] = useState('');
  const [furType, setFurType] = useState('');

  const handleFormRegistration1 = () => {
    // Handle registration logic here
    console.log('Pet Type:', petType);
    console.log('Preferred Size:', preferredSize);
    console.log('Preferred Age:', preferredAge);
    console.log('Preferred Gender:', preferredGender);
    console.log('Fur Type:', furType);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Formulario de Adoptantes</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Preferencia de mascota</Text>
        <Picker
          selectedValue={petType}
          style={styles.input}
          onValueChange={(itemValue) => setPetType(itemValue)}
        >
          <Picker.Item label="Seleccione el tipo de mascota" value="" />
          <Picker.Item label="Perro" value="dog" />
          <Picker.Item label="Gato" value="cat" />
          <Picker.Item label="Ave" value="bird" />
          <Picker.Item label="Otro" value="other" />
        </Picker>
        <Picker
          selectedValue={preferredSize}
          style={styles.input}
          onValueChange={(itemValue) => setPreferredSize(itemValue)}
        >
          <Picker.Item label="Seleccione el tamaño preferido" value="" />
          <Picker.Item label="Pequeño" value="small" />
          <Picker.Item label="Mediano" value="medium" />
          <Picker.Item label="Grande" value="large" />
        </Picker>
        <Picker
          selectedValue={preferredAge}
          style={styles.input}
          onValueChange={(itemValue) => setPreferredAge(itemValue)}
        >
          <Picker.Item label="Seleccione la edad preferida" value="" />
          <Picker.Item label="Cachorro" value="puppy" />
          <Picker.Item label="Adulto" value="adult" />
          <Picker.Item label="Senior" value="senior" />
        </Picker>
        <Picker
          selectedValue={preferredGender}
          style={styles.input}
          onValueChange={(itemValue) => setPreferredGender(itemValue)}
        >
          <Picker.Item label="Seleccione el sexo preferido" value="" />
          <Picker.Item label="Macho" value="male" />
          <Picker.Item label="Hembra" value="female" />
        </Picker>
        <Picker
          selectedValue={furType}
          style={styles.input}
          onValueChange={(itemValue) => setFurType(itemValue)}
        >
          <Picker.Item label="Seleccione el tipo de pelaje" value="" />
          <Picker.Item label="Corto" value="short" />
          <Picker.Item label="Medio" value="medium" />
          <Picker.Item label="Largo" value="long" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormRegistration2')}>
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

export default AdoptFormRegistration1;