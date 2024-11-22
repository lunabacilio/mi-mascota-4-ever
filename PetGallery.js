import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from './data.json';
import images from './Images';

const PetGallery = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={images[item.image]} style={styles.image} />
      <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('PetDetails', { pet: item })}>
        <Text style={styles.detailsButtonText}>Ver detalles</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Galería de Mascotas</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.galleryContainer}
        numColumns={2} // Set the number of columns to 2
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#E5C9D7',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'work-sans',
    textAlign: 'center',
  },
  galleryContainer: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#0D1E4C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'work-sans',
  },
});

export default PetGallery;