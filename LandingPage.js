import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  const onLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.image}
      />
      <Text style={styles.title}>Bienvenido!</Text>
      <Text style={styles.description}>
        {'\n\n'}
        Mi Mascota 4 Ever es una aplicación que conecta adoptantes, donadores de mascotas, veterinarios y patrocinadores de servicios en un mismo espacio. Su objetivo es facilitar el proceso de adopción, logrando el "match" ideal entre cada mascota y el adoptante adecuado.
      </Text>
      <View style={styles.LoginbuttonContainer}>
        <TouchableOpacity style={styles.Loginbutton} onPress={() => onLogin()}>
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
  image: {
    width: 390,
    height: 294,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 60,
    fontFamily: 'work-sans',
  },
  LoginbuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
    //marginTop: 20,
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
    fontFamily: 'work-sans',
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
    fontFamily: 'work-sans',
  },
});

export default LandingPage;