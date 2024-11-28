import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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

const PetDetails = ({ route, navigation }) => {
  const { petId } = route.params;
  const pet = petData.find(p => p.id === petId);

  const [fontLoaded, setFontLoaded] = useState(false);

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
      <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('basicInfo')}>
        <Text style={styles.detailsButtonText}>Información Básica</Text>
        <Ionicons name={collapsedSections.basicInfo ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedSections.basicInfo}>
        <View style={styles.section}>
          <Text>Especie: {pet.species}</Text>
          <Text>Raza: {pet.breed}</Text>
          <Text>Edad: {pet.age}</Text>
          <Text>Tamaño: {pet.size}</Text>
        </View>
      </Collapsible>
      <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('personality')}>
        <Text style={styles.detailsButtonText}>Personalidad y Comportamiento</Text>
        <Ionicons name={collapsedSections.personality ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedSections.personality}>
        <View style={styles.section}>
          <Text>Carácter General: {pet.generalCharacter}</Text>
          <Text>Nivel de Energía: {pet.energyLevel}</Text>
          <Text>Comportamiento Social: {pet.socialBehavior}</Text>
        </View>
      </Collapsible>
      <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('health')}>
        <Text style={styles.detailsButtonText}>Condiciones de Salud</Text>
        <Ionicons name={collapsedSections.health ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedSections.health}>
        <View style={styles.section}>
          <Text>Estado General de Salud: {pet.healthStatus}</Text>
          <Text>Vacunas al Día: {pet.vaccinationStatus}</Text>
          <Text>Esterilización: {pet.sterilizationStatus}</Text>
        </View>
      </Collapsible>
      <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('care')}>
        <Text style={styles.detailsButtonText}>Requerimientos de Cuidados Específicos</Text>
        <Ionicons name={collapsedSections.care ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedSections.care}>
        <View style={styles.section}>
          <Text>Necesidades Especiales: {pet.specialNeeds}</Text>
          <Text>Cuidado Especial Adicional: {pet.additionalCare}</Text>
        </View>
      </Collapsible>
      <TouchableOpacity style={styles.detailsButton} onPress={() => toggleSection('history')}>
        <Text style={styles.detailsButtonText}>Historial y Adaptabilidad</Text>
        <Ionicons name={collapsedSections.history ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={20} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedSections.history}>
        <View style={styles.section}>
          <Text>Historial de Mascota: {pet.petHistory}</Text>
          <Text>Preferencia de Hogar: {pet.homePreference}</Text>
          <Text>Comportamiento con Personas: {pet.behaviorWithPeople}</Text>
          <Text>Capacidad de Adaptación: {pet.adaptability}</Text>
          <Text>Convive con Infantes: {pet.livesWithInfants}</Text>
          <Text>Convive con Otras Personas: {pet.livesWithOthers}</Text>
        </View>
      </Collapsible>
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
    marginTop: 30, // Ajusta este valor para mover el logo hacia abajo
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#0D1E4C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '308',
    height: '59',
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
});

export default PetDetails;