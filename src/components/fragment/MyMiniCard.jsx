import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const MyMiniCard = ({ title, img }) => {
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

export default MyMiniCard;

const styles = StyleSheet.create({
  container: {
    width: 180,
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
    height: 180,
    width: '100%',
    borderRadius: 15,
  },
});
