import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Mybutton from '../elemenets/Mybutton';
import { Feather } from '@expo/vector-icons';

const Profilelayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather
            name="bookmark"
            size={29}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="settings"
            size={29}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyProfile}>
          <Image
            width={150}
            height={150}
            source={{ uri: 'https://th.bing.com/th/id/OIP.dm60icYUjUUek0BIR4KnEQHaHa?w=190&h=191&c=7&r=0&o=5&pid=1.7' }}
          />
        </View>
        <Text style={styles.bodyprofiletext}>My Profile</Text>
        <Text style={styles.bodyprofilep}>@myprofile.gmail.com</Text>
        <View style={styles.bodytextpcontent}>
          <Text>0 Pengikut</Text>
          <Text>0 Mengikuti</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert('Comming Soon');
          }}>
          <Text style={styles.buttonText}> Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profilelayout;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  header: {
    gap: 15,
    marginTop: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  body: {
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 300,
  },
  bodyProfile: {
    width: 150,
    height: 150,
    borderRadius: 1000,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  bodyprofiletext: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bodyprofilep: {
    fontSize: 12,

    fontWeight: '200',
  },
  bodytextpcontent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 500,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
