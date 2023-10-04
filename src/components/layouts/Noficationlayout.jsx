import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Noficationlayout = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Comming Soon</Text>
      </View>
    </View>
  );
};

export default Noficationlayout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
