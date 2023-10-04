import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Carousel from '../fragment/Carousel';

const Searchlayout = () => {
  return (
    <View style={styles.container}>
      <Text>Comming Soon</Text>
    </View>
  );
};

export default Searchlayout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
