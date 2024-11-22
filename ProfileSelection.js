import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ProfileSelection = ({ navigation }) => {
  const handleProfileSelection = (profile) => {
    // Handle profile selection logic here
    console.log('Selected Profile:', profile);
    // Navigate to the next screen based on the selected profile
    // navigation.navigate('NextScreen', { profile });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione su perfil</Text>
      <View style={styles.profilesContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.profileButton, styles.pinkButton]} onPress={() => navigation.navigate('FormRegistration1')}>
            <Image source={require('./assets/profiles/adopt.png')} style={styles.image} />
            <Text style={styles.profileButtonText}>Adoptante</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.profileButton, styles.blueButton]} onPress={() => handleProfileSelection('Donador')}>
            <Image source={require('./assets/profiles/vet.png')} style={styles.image} />
            <Text style={styles.profileButtonText}>Veterinario</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.profileButton, styles.blueButton]} onPress={() => handleProfileSelection('Veterinario')}>
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
    fontFamily: 'work-sans',
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