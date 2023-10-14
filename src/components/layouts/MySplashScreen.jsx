import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const MySplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 2000);
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default MySplashScreen;

const styles = StyleSheet.create({});
