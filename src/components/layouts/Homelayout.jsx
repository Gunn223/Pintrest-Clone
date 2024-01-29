import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import MyCard from '../fragment/MyCard';
import MyMiniCard from '../fragment/MyMiniCard';
import { ShowsRandomImage, ShowsRandomImagemini, generateRandomWord } from '../../Services/api/Query';
import ContentMainCard from '../fragment/ContentMainCard';

const Homelayout = () => {
  const [items, setItems] = useState([]);
  const [itemsmini, setItemsmini] = useState([]);
  const [datacardMini, setDataCardMini] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const RandWord = generateRandomWord();
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
    ShowsRandomImagemini(RandWord, (data) => {
      const dataArray = data.hits;
      if (dataArray && dataArray.length > 0) {
        setItemsmini(dataArray);
        if (itemsmini.length > 0) {
          setDataCardMini(dataArray);
        }
      } else {
        setItemsmini([]);
      }
    });
  }, []);

  const fetchMoreData = async () => {
    if (isLoading) return;

    setIsLoading(true);
    // console.log(dataRand);
    // buat agar data diambil secara urut agar rand image berbeda output
    await ShowsRandomImage((data, i) => {
      const dataArray = data.hits;

      if (dataArray && dataArray.length > 0) {
        setItems((prevItems) => [...prevItems, ...dataArray]);
      }
    });

    await ShowsRandomImagemini(RandWord, (data) => {
      const dataArray = data.hits;

      if (dataArray && dataArray.length > 0) {
        setItemsmini((prevItems) => [...prevItems, ...dataArray]);
        setDataCardMini((prevItems) => [...prevItems, ...dataArray]);
      }
    });

    setIsLoading(false);
  };

  return (
    <>
      <Text style={styles.text}>Semua</Text>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => {
          const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
          const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50; // Meningkatkan threshold untuk lebih responsif
          if (isEndReached) {
            fetchMoreData();
          }
        }}
        onMomentumScrollEnd={(e) => {
          // Ini akan memastikan bahwa fungsi dipanggil saat pengguna berhenti menggulir
          const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
          const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;
          if (isEndReached) {
            fetchMoreData();
          }
        }}>
        <View style={styles.container}>
          <ContentMainCard>
            {items.length > 0 &&
              items.slice(1).map((e, index) => {
                const miniCardIndex = index + 1;
                return (
                  <View
                    key={`${e.id}-${index}`}
                    style={{
                      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                      justifyContent: 'space-around',
                      marginBottom: 10,
                    }}>
                    <MyCard
                      img={e.webformatURL}
                      title={e.user}
                      style={{ width: '48%' }}
                    />
                    <View>
                      {itemsmini[index] && (
                        <MyMiniCard
                          img={itemsmini[index].webformatURL}
                          title={itemsmini[index].user}
                          style={{ width: '48%' }}
                        />
                      )}
                      {datacardMini[miniCardIndex] && (
                        <MyMiniCard
                          img={datacardMini[miniCardIndex].webformatURL}
                          title={datacardMini[miniCardIndex].user}
                          style={{ width: '48%' }}
                        />
                      )}
                    </View>
                  </View>
                );
              })}
          </ContentMainCard>
          {isLoading && (
            <ActivityIndicator
              size="large"
              color="#0000ff"
            />
          )}
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
