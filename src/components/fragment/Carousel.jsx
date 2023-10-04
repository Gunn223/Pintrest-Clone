import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { AppRegistry } from 'react-native';

const Carousel = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {
   
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
AppRegistry.registerComponent('PintrestClone', () => Carousel);
