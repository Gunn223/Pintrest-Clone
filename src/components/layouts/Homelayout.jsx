import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import MyCard from '../fragment/MyCard';
import MyMiniCard from '../fragment/MyMiniCard';
import { ShowsRandomImage, ShowsRandomImagemini } from '../../Services/api/Query';
import ContentMainCard from '../fragment/ContentMainCard';

const Homelayout = () => {
  const [items, setItems] = useState([]);
  const [itemsmini, setItemsmini] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ShowsRandomImage((data) => {
      const dataArray = data.hits;
      if (dataArray && dataArray.length > 0) {
        setItems(dataArray);
      } else {
        setItems([]);
      }
    });
  }, []);
  useEffect(() => {
    ShowsRandomImagemini((data) => {
      const dataArray = data.hits;
      if (dataArray && dataArray.length > 0) {
        setItemsmini(dataArray);
      } else {
        setItemsmini([]);
      }
    });
  }, []);

  return (
    <>
      <Text style={styles.text}>Semua</Text>
      <ScrollView
        scrollEventThrottle={1}
        onScroll={(e) => {
          const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
          const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height;
        }}>
        <View style={styles.container}>
          <ContentMainCard>
            <View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
              <View style={{ flex: 1 }}>
                {items.length > 0 &&
                  items.map((e) => (
                    <MyCard
                      img={e.webformatURL}
                      key={e.id}
                      title={e.user}
                    />
                  ))}
              </View>
              <View style={{ flex: 1 }}>
                {itemsmini.length > 0 &&
                  itemsmini.map((e) => (
                    <MyMiniCard
                      img={e.webformatURL}
                      key={e.id}
                      title={e.user}
                    />
                  ))}
              </View>
            </View>
          </ContentMainCard>
        </View>
      </ScrollView>
    </>
  );
};

export default Homelayout;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 5,
  },
  text: {
    paddingTop: 35,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 6,
    fontWeight: 'bold',
    // zzz
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
