import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('../assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('../assets/fonts/WorkSans.ttf'),
  });
};

const AdoptantProfile = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <View style={[styles.profileButton, styles.pinkButton]}>
            <Image source={require('../assets/profiles/adopt.png')} style={styles.image} />
          </View>
        </View>
        <Text style={styles.title}>Eduardo</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('PetGallery')}>
            <Text style={styles.mainButtonText}>VER MASCOTAS EN</Text>
            <Text style={styles.mainButtonText}>ADOPCIÓN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>VER VETERINARIOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>VER SERVICIOS</Text>
            <Text style={styles.mainButtonText}>DONADOS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.divider} />
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="person-circle-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Editar Perfil</Text>
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="heart-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Mascotas Favoritas</Text>
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('AdoptantChat')}>
            <Ionicons name="chatbubble-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Mis Chats</Text>
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../assets/logo.png')} style={styles.menuLogo} />
          </TouchableOpacity>
          <Text style={styles.menuText}>Mis Adopciones</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5C9D7',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100, // Añadir espacio para el menú inferior
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
    marginBottom: 30,
    marginTop: 5, 
  },
  logo: {
    width: 40, // Mitad del tamaño original
    height: 40, // Mitad del tamaño original
    marginTop: 15, // Ajusta este valor para mover el logo hacia abajo
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    width: 160,
    height: 196,
  },
  pinkButton: {
    backgroundColor: '#C48CB3',
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 5, // Add margin to separate image from text
  },
  title: {
    fontSize: 24,
    marginBottom: 0,
    fontFamily: 'young-serif',
    textAlign: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  mainButton: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: '#0D1E4C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: 308,
    height: 59,
  },
  mainButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#C48CB3',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuButton: {
    width: 64,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 5,
  },
  menuLogo: {
    width: 30,
    height: 30,
  },
  menuText: {
    fontSize: 12,
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
});

export default AdoptantProfile;