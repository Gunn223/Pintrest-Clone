import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PopularCard = ({ title, Url }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: `${Url}`,
        }} // Ganti URL_GAMBAR dengan URL gambar yang ingin Anda tampilkan
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '50%',
    height: 120,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Tambahkan properti alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    marginBottom: 10,
    opacity: 0.6,
  },
  text: {
    fontSize: 22,
    opacity: 1,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    textAlign: 'center',
    bottom: 40,
    borderWidth: 1, // Lebar border
    borderColor: 'black', // Warna border
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default PopularCard;
