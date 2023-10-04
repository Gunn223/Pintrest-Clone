import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';

const Mybutton = ({ children, color, onpress }) => {
  return (
    <Button
      onPress={() => onpress}
      color={color}>
      <Text style={styles.text}>{children}</Text>
    </Button>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
  text: {
    fontWeight: 300,
    color: 'black',
  },
});
