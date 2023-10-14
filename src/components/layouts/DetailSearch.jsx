import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Search } from './Searchlayout';
import MyCard from '../fragment/MyCard';
import MyMiniCard from '../fragment/MyMiniCard';

const DetailSearch = ({ close, res }) => {
  const [closeModal, setCloseModal] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (res && res.length > 0) {
      setData(res);
    }
  }, [res]);

  const handleCloseModal = () => {
    close(closeModal);
  };

  return (
    <>
      <View>
        <Text style={{ marginTop: 20 }}>DetailSearch</Text>
        <Button
          title="Close"
          onPress={handleCloseModal}
        />
      </View>
      <ScrollView>
        {data.length > 0 &&
          data.map((e, index) => (
            // console.log(e)
            <View
              style={{
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                justifyContent: 'space-around',
                marginBottom: 10,
              }}>
              <MyCard
                img={e.webformatURL}
                title={e.user}
                style={{ width: '48%' }} // Anda bisa menyesuaikan ini
              />
              <View>
                {data[index] && (
                  <MyMiniCard
                    img={data[index].webformatURL}
                    title={data[index].user}
                    style={{ width: '48%' }} // Anda bisa menyesuaikan ini
                  />
                )}
                {data[index] && (
                  <MyMiniCard
                    img={data[index].webformatURL}
                    title={data[index].user}
                    style={{ width: '48%' }} // Anda bisa menyesuaikan ini
                  />
                )}
              </View>
            </View>
          ))}
      </ScrollView>
    </>
  );
};

export default DetailSearch;

const styles = StyleSheet.create({});
