import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('./assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('./assets/fonts/WorkSans.ttf'),
  });
};

const LandingPage = ({ navigation }) => {
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
      <Image
        source={require('./assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.image}
      />
      <Text style={styles.title}>Bienvenido!</Text>
      <View style={styles.LoginbuttonContainer}>
        <TouchableOpacity style={styles.Loginbutton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.LoginbuttonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CreatebuttonContainer}>
        <TouchableOpacity style={styles.Createbutton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.CreatebuttonText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E5C9D7',
    paddingTop: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 30,
    width: 247,
    height: 247,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'young-serif',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 60,
    fontFamily: 'young-serif',
  },
  LoginbuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
    marginTop: 40,
  },
  Loginbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1E4C',
    width: 256,
    height: 60,
    borderRadius: 40,
  },
  LoginbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans', // Aplicar Work Sans a los botones
  },
  CreatebuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
  },
  Createbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C48CB3',
    width: 256,
    height: 60,
    borderRadius: 40,
  },
  CreatebuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans', // Aplicar Work Sans a los botones
  },
});

export default LandingPage;