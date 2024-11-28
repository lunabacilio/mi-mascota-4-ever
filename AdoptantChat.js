import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';
import chatData from './chat.json';

// Importar imágenes de manera estática
const images = {
  'monge.jpg': require('./assets/users/monge.jpg'),
  'silvia.jpg': require('./assets/users/silvia.jpg'),
};

const fetchFonts = () => {
  return Font.loadAsync({
    'young-serif': require('./assets/fonts/YoungSerif-Regular.ttf'),
    'work-sans': require('./assets/fonts/WorkSans.ttf'),
  });
};

const AdoptantChat = ({ navigation }) => {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('ChatDetails', { userId: item.id })}>
      <Image source={images[item.image]} style={styles.chatImage} />
      <View style={styles.chatTextContainer}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Mis Chats</Text>
        <FlatList
          data={chatData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.chatList}
        />
      </ScrollView>
      <View style={styles.divider} />
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="person-circle-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Editor Perfil</Text>
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="heart-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Mascotas Favoritas</Text>
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="chatbubble-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Mis Chats</Text>
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="paw-outline" size={30} color="black" />
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
    marginBottom: 10,
  },
  logo: {
    width: 37.5, // Mitad del tamaño original
    height: 37.5, // Mitad del tamaño original
    marginTop: 15, // Ajusta este valor para mover el logo hacia abajo
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'young-serif',
    textAlign: 'center',
  },
  chatList: {
    paddingBottom: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatTextContainer: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontFamily: 'work-sans',
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 14,
    fontFamily: 'work-sans',
    color: '#666',
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
  menuText: {
    fontSize: 12,
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
});

export default AdoptantChat;