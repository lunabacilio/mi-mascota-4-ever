import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';
import petData from './pet.json';
import images from './Images';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('./assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('./assets/fonts/WorkSans.ttf'),
  });
};

const EditPetDetails = ({ route, navigation }) => {
  const { petId } = route.params;
  const pet = petData.find(p => p.id === petId);

  const [fontLoaded, setFontLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState({
    basicInfo: false,
    personality: false,
    health: false,
    care: false,
    history: false,
  });
  const [petDetails, setPetDetails] = useState({ ...pet });

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const [collapsedSections, setCollapsedSections] = useState({
    basicInfo: true,
    personality: true,
    health: true,
    care: true,
    history: true,
  });

  const toggleSection = (section) => {
    setCollapsedSections({
      ...collapsedSections,
      [section]: !collapsedSections[section],
    });
  };

  const toggleEdit = (section) => {
    setIsEditing({
      ...isEditing,
      [section]: !isEditing[section],
    });
  };

  const handleInputChange = (section, field, value) => {
    setPetDetails({
      ...petDetails,
      [field]: value,
    });
  };

  const handleSave = (section) => {
    // Aquí puedes agregar la lógica para guardar los cambios, por ejemplo, actualizar el estado global o enviar los datos a un servidor
    toggleEdit(section);
  };

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
          style={styles.logo}
        />
      </View>
      <Image source={images[pet.image]} style={styles.image} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{pet.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('basicInfo')}>
          <Ionicons name="create-outline" size={20} color="white" style={styles.editIcon} onPress={() => toggleEdit('basicInfo')} />
          <Text style={styles.detailsButtonText}>Información Básica</Text>
          <Ionicons name={collapsedSections.basicInfo ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedSections.basicInfo}>
          <View style={styles.section}>
            {isEditing.basicInfo ? (
              <>
                <TextInput
                  style={styles.input}
                  value={petDetails.species}
                  onChangeText={(value) => handleInputChange('basicInfo', 'species', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.breed}
                  onChangeText={(value) => handleInputChange('basicInfo', 'breed', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.age}
                  onChangeText={(value) => handleInputChange('basicInfo', 'age', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.size}
                  onChangeText={(value) => handleInputChange('basicInfo', 'size', value)}
                />
                <TouchableOpacity style={styles.saveButton} onPress={() => handleSave('basicInfo')}>
                  <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>Especie: {petDetails.species}</Text>
                <Text>Raza: {petDetails.breed}</Text>
                <Text>Edad: {petDetails.age}</Text>
                <Text>Tamaño: {petDetails.size}</Text>
              </>
            )}
          </View>
        </Collapsible>
        <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('personality')}>
          <Ionicons name="create-outline" size={20} color="white" style={styles.editIcon} onPress={() => toggleEdit('personality')} />
          <Text style={styles.detailsButtonText}>Personalidad y Comportamiento</Text>
          <Ionicons name={collapsedSections.personality ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedSections.personality}>
          <View style={styles.section}>
            {isEditing.personality ? (
              <>
                <TextInput
                  style={styles.input}
                  value={petDetails.generalCharacter}
                  onChangeText={(value) => handleInputChange('personality', 'generalCharacter', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.energyLevel}
                  onChangeText={(value) => handleInputChange('personality', 'energyLevel', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.socialBehavior}
                  onChangeText={(value) => handleInputChange('personality', 'socialBehavior', value)}
                />
                <TouchableOpacity style={styles.saveButton} onPress={() => handleSave('personality')}>
                  <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>Carácter General: {petDetails.generalCharacter}</Text>
                <Text>Nivel de Energía: {petDetails.energyLevel}</Text>
                <Text>Comportamiento Social: {petDetails.socialBehavior}</Text>
              </>
            )}
          </View>
        </Collapsible>
        <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('health')}>
          <Ionicons name="create-outline" size={20} color="white" style={styles.editIcon} onPress={() => toggleEdit('health')} />
          <Text style={styles.detailsButtonText}>Condiciones de Salud</Text>
          <Ionicons name={collapsedSections.health ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedSections.health}>
          <View style={styles.section}>
            {isEditing.health ? (
              <>
                <TextInput
                  style={styles.input}
                  value={petDetails.healthStatus}
                  onChangeText={(value) => handleInputChange('health', 'healthStatus', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.vaccinationStatus}
                  onChangeText={(value) => handleInputChange('health', 'vaccinationStatus', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.sterilizationStatus}
                  onChangeText={(value) => handleInputChange('health', 'sterilizationStatus', value)}
                />
                <TouchableOpacity style={styles.saveButton} onPress={() => handleSave('health')}>
                  <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>Estado General de Salud: {petDetails.healthStatus}</Text>
                <Text>Vacunas al Día: {petDetails.vaccinationStatus}</Text>
                <Text>Esterilización: {petDetails.sterilizationStatus}</Text>
              </>
            )}
          </View>
        </Collapsible>
        <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('care')}>
          <Ionicons name="create-outline" size={20} color="white" style={styles.editIcon} onPress={() => toggleEdit('care')} />
          <Text style={styles.detailsButtonText}>Requerimientos de Cuidados Específicos</Text>
          <Ionicons name={collapsedSections.care ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedSections.care}>
          <View style={styles.section}>
            {isEditing.care ? (
              <>
                <TextInput
                  style={styles.input}
                  value={petDetails.specialNeeds}
                  onChangeText={(value) => handleInputChange('care', 'specialNeeds', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.additionalCare}
                  onChangeText={(value) => handleInputChange('care', 'additionalCare', value)}
                />
                <TouchableOpacity style={styles.saveButton} onPress={() => handleSave('care')}>
                  <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>Necesidades Especiales: {petDetails.specialNeeds}</Text>
                <Text>Cuidado Especial Adicional: {petDetails.additionalCare}</Text>
              </>
            )}
          </View>
        </Collapsible>
        <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('history')}>
          <Ionicons name="create-outline" size={20} color="white" style={styles.editIcon} onPress={() => toggleEdit('history')} />
          <Text style={styles.detailsButtonText}>Historial y Adaptabilidad</Text>
          <Ionicons name={collapsedSections.history ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedSections.history}>
          <View style={styles.section}>
            {isEditing.history ? (
              <>
                <TextInput
                  style={styles.input}
                  value={petDetails.petHistory}
                  onChangeText={(value) => handleInputChange('history', 'petHistory', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.homePreference}
                  onChangeText={(value) => handleInputChange('history', 'homePreference', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.behaviorWithPeople}
                  onChangeText={(value) => handleInputChange('history', 'behaviorWithPeople', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.adaptability}
                  onChangeText={(value) => handleInputChange('history', 'adaptability', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.livesWithInfants}
                  onChangeText={(value) => handleInputChange('history', 'livesWithInfants', value)}
                />
                <TextInput
                  style={styles.input}
                  value={petDetails.livesWithOthers}
                  onChangeText={(value) => handleInputChange('history', 'livesWithOthers', value)}
                />
                <TouchableOpacity style={styles.saveButton} onPress={() => handleSave('history')}>
                  <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>Historial de Mascota: {petDetails.petHistory}</Text>
                <Text>Preferencia de Hogar: {petDetails.homePreference}</Text>
                <Text>Comportamiento con Personas: {petDetails.behaviorWithPeople}</Text>
                <Text>Capacidad de Adaptación: {petDetails.adaptability}</Text>
                <Text>Convive con Infantes: {petDetails.livesWithInfants}</Text>
                <Text>Convive con Otras Personas: {petDetails.livesWithOthers}</Text>
              </>
            )}
          </View>
        </Collapsible>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  logo: {
    width: 37.5, // Mitad del tamaño original
    height: 37.5, // Mitad del tamaño original
    marginTop: 15, // Ajusta este valor para mover el logo hacia abajo
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'young-serif',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0D1E4C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
  },
  editIcon: {
    marginRight: 10,
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
  },
  section: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  saveButton: {
    backgroundColor: '#0D1E4C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
  },
});

export default EditPetDetails;