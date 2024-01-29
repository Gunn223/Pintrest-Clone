import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Nav from './src/components/fragment/Navigation';
import React from 'react';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Nav.Navigation />
      </View>
    
    </NavigationContainer>
  );
}
export const NavStack = () => {
  return (
    <NavigationContainer>
      <Nav.Stacknavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
