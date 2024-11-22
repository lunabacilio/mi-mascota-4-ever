import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('../../assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('../../assets/fonts/WorkSans.ttf'),
  });
};

const PetFormRegistration3 = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const [petHistory, setPetHistory] = useState('');
  const [homePreference, setHomePreference] = useState('');
  const [behaviorWithPeople, setBehaviorWithPeople] = useState('');
  const [adaptability, setAdaptability] = useState('');
  const [livesWithInfants, setLivesWithInfants] = useState('');
  const [livesWithOthers, setLivesWithOthers] = useState('');
  const [images, setImages] = useState([]);

  const [petHistoryOpen, setPetHistoryOpen] = useState(false);
  const [homePreferenceOpen, setHomePreferenceOpen] = useState(false);
  const [behaviorWithPeopleOpen, setBehaviorWithPeopleOpen] = useState(false);
  const [adaptabilityOpen, setAdaptabilityOpen] = useState(false);
  const [livesWithInfantsOpen, setLivesWithInfantsOpen] = useState(false);
  const [livesWithOthersOpen, setLivesWithOthersOpen] = useState(false);

  const petHistoryItems = [
    { label: 'Seleccione el historial de la mascota', value: '' },
    { label: 'Adoptado', value: 'adopted' },
    { label: 'Rescatado', value: 'rescued' },
    { label: 'Criado desde cachorro', value: 'raised_from_puppy' },
  ];

  const homePreferenceItems = [
    { label: 'Seleccione la preferencia de hogar', value: '' },
    { label: 'Casa con jardín', value: 'house_with_garden' },
    { label: 'Apartamento', value: 'apartment' },
    { label: 'Casa grande', value: 'large_house' },
  ];

  const behaviorWithPeopleItems = [
    { label: 'Seleccione el comportamiento con personas', value: '' },
    { label: 'Amigable', value: 'friendly' },
    { label: 'Tímido', value: 'shy' },
    { label: 'Agresivo', value: 'aggressive' },
  ];

  const adaptabilityItems = [
    { label: 'Seleccione la capacidad de adaptación', value: '' },
    { label: 'Alta', value: 'high' },
    { label: 'Media', value: 'medium' },
    { label: 'Baja', value: 'low' },
  ];

  const livesWithInfantsItems = [
    { label: 'Seleccione si convive con infantes', value: '' },
    { label: 'Sí', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const livesWithOthersItems = [
    { label: 'Seleccione si convive con otras personas', value: '' },
    { label: 'Sí', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const handleFormRegistration3 = () => {
    // Handle registration logic here
    console.log('Pet History:', petHistory);
    console.log('Home Preference:', homePreference);
    console.log('Behavior With People:', behaviorWithPeople);
    console.log('Adaptability:', adaptability);
    console.log('Lives With Infants:', livesWithInfants);
    console.log('Lives With Others:', livesWithOthers);
    console.log('Images:', images);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, ...result.selected]);
    }
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
        <Text style={styles.formTitle}>Historial y Adaptabilidad</Text>
        <DropDownPicker
          open={petHistoryOpen}
          value={petHistory}
          items={petHistoryItems}
          setOpen={setPetHistoryOpen}
          setValue={setPetHistory}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el historial de la mascota"
        />
        <DropDownPicker
          open={homePreferenceOpen}
          value={homePreference}
          items={homePreferenceItems}
          setOpen={setHomePreferenceOpen}
          setValue={setHomePreference}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione la preferencia de hogar"
        />
        <DropDownPicker
          open={behaviorWithPeopleOpen}
          value={behaviorWithPeople}
          items={behaviorWithPeopleItems}
          setOpen={setBehaviorWithPeopleOpen}
          setValue={setBehaviorWithPeople}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione el comportamiento con personas"
        />
        <DropDownPicker
          open={adaptabilityOpen}
          value={adaptability}
          items={adaptabilityItems}
          setOpen={setAdaptabilityOpen}
          setValue={setAdaptability}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione la capacidad de adaptación"
        />
        <DropDownPicker
          open={livesWithInfantsOpen}
          value={livesWithInfants}
          items={livesWithInfantsItems}
          setOpen={setLivesWithInfantsOpen}
          setValue={setLivesWithInfants}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione si convive con infantes"
        />
        <DropDownPicker
          open={livesWithOthersOpen}
          value={livesWithOthers}
          items={livesWithOthersItems}
          setOpen={setLivesWithOthersOpen}
          setValue={setLivesWithOthers}
          setItems={() => {}}
          style={styles.dropdown}
          placeholder="Seleccione si convive con otras personas"
        />
        <TouchableOpacity style={styles.insertarButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Insertar Imagenes</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image.uri }} style={styles.image} />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleFormRegistration3}>
        <Text style={styles.buttonText}>Enviar</Text>
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
    marginBottom: 0,
    marginTop: 35, // Ajusta este valor para mover el logo hacia abajo
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
    alignItems: 'center',
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
    width: '100%',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
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
  insertarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: 177.38,
    height: 55.3,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
  },
});

export default PetFormRegistration3;