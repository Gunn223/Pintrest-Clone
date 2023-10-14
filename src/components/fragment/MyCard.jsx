import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const MyCard = ({ title, img }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: img }}
      />
      <View style={styles.bodyCard}>
        <Text style={styles.titleCard}>{title}</Text>
        <View>
          <TouchableOpacity>
            <Text>...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  container: {
    width: 154,
    display: 'flex',
  },
  bodyCard: {
   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    alignItems: 'center',
  },
  titleCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  image: {
    height: 386,
    borderRadius: 15,
  },
});
