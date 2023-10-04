import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContentMainCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ContentMainCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
