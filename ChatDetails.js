import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, FlatList, TextInput } from 'react-native';
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

const ChatDetails = ({ route, navigation }) => {
  const { userId } = route.params;
  const user = chatData.find(u => u.id === userId);

  const [fontLoaded, setFontLoaded] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, ¿cómo estás?', senderId: 1 },
    { id: 2, text: 'Me interesa el perrito', senderId: 2 },
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, senderId: userId }]);
      setNewMessage('');
    }
  };

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({ item }) => {
    const sender = chatData.find(u => u.id === item.senderId);
    return (
      <View style={[styles.messageContainer, item.senderId === userId ? styles.myMessage : styles.theirMessage]}>
        <Image source={images[sender.image]} style={styles.messageImage} />
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
          style={styles.logo}
        />
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{user.name}</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.chatList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Escribe un mensaje..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
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
            <Image source={require('./assets/logo.png')} style={styles.menuLogo} />
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
  menuLogo: {
    width: 30,
    height: 30,
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
    width: 40, // Mitad del tamaño original
    height: 40, // Mitad del tamaño original
    marginTop: 40, // Ajusta este valor para mover el logo hacia abajo
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'young-serif',
    textAlign: 'center',
  },
  chatList: {
    paddingHorizontal: 16,
    paddingBottom: 80, // Añadir espacio para la sección de entrada de mensajes
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#C48CB3', // Cambiar a rosa
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
  },
  messageImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    fontFamily: 'work-sans',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#C48CB3',
    borderTopWidth: 1,
    borderColor: '#CCC',
    marginBottom: 75, // Añadir espacio para el menú inferior
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    marginRight: 10,
    fontFamily: 'work-sans',
    backgroundColor: '#E5C9D7',
  },
  sendButton: {
    backgroundColor: '#0D1E4C',
    padding: 10,
    borderRadius: 20,
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

export default ChatDetails;