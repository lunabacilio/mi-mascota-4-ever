import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('./assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('./assets/fonts/WorkSans.ttf'),
  });
};

const ProfileSelection = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const handleProfileSelection = (profile) => {
    // Handle profile selection logic here
    console.log('Selected Profile:', profile);
    // Navigate to the next screen based on the selected profile
    // navigation.navigate('NextScreen', { profile });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Image
        source={require('./assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.logo}
      />
      <Text style={styles.title}>Seleccione su perfil</Text>
      <View style={styles.profilesContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.profileButton, styles.pinkButton]} onPress={() => navigation.navigate('AdoptFormRegistration1')}>
            <Image source={require('./assets/profiles/adopt.png')} style={styles.image} />
            <Text style={styles.profileButtonText}>Adoptante</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.profileButton, styles.blueButton]} onPress={() => handleProfileSelection('Donador')}>
            <Image source={require('./assets/profiles/vet.png')} style={styles.image} />
            <Text style={styles.profileButtonText}>Veterinario</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.profileButton, styles.blueButton]} onPress={() => navigation.navigate('PetFormRegistration1')}>
            <Image source={require('./assets/profiles/donor.png')} style={styles.image} />
            <Text style={styles.profileButtonText}>Donador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.profileButton, styles.pinkButton]} onPress={() => handleProfileSelection('Patrocinador')}>
            <Image source={require('./assets/profiles/pet.png')} style={styles.image} />
            <Text style={styles.profileButtonText}>Patrocinador</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'young-serif',
  },
  profilesContainer: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 20,
    marginTop: 30, // Ajusta este valor para mover el logo hacia abajo
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    //width: '40%',
    width: 160,
    height: 196,
  },
  pinkButton: {
    backgroundColor: '#C48CB3',
  },
  blueButton: {
    backgroundColor: '#0D1E4C',
  },
  profileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
    marginTop: 10, // Add margin to separate text from image
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 5, // Add margin to separate image from text
  },
});

export default ProfileSelection;