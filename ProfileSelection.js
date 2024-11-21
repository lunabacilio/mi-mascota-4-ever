import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ProfileSelection = ({ navigation }) => {
  const handleProfileSelection = (profile) => {
    // Handle profile selection logic here
    console.log('Selected Profile:', profile);
    // Navigate to the next screen based on the selected profile
    navigation.navigate('NextScreen', { profile });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione su perfil</Text>
      <View style={styles.profilesContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => handleProfileSelection('Adoptante')}>
          <Text style={styles.profileButtonText}>Adoptante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton} onPress={() => handleProfileSelection('Donador')}>
          <Text style={styles.profileButtonText}>Donador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton} onPress={() => handleProfileSelection('Veterinario')}>
          <Text style={styles.profileButtonText}>Veterinario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => handleProfileSelection('Patrocinador')}>
          <Text style={styles.profileButtonText}>Patrocinador</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'work-sans',
  },
  profilesContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  topButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: '40%',
    height: 60,
    borderRadius: 40,
    marginVertical: 10,
  },
  bottomButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C48CB3',
    width: '40%',
    height: 60,
    borderRadius: 40,
    marginVertical: 10,
  },
  profileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
  },
});

export default ProfileSelection;