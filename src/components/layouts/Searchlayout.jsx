import { StyleSheet, Text, View, TextInput, Image, Alert, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Carousel from '../fragment/Carousel';
import { SearchImage } from '../../Services/api/Query';
import Searchpage from '../../pages/Searchpage';
import DetailSearch from './DetailSearch';
import MyMiniCard from '../fragment/MyMiniCard';

const Searchlayout = () => {
  const [detailLayout, setDetailLayout] = useState(false);
  const [resData, setResdata] = useState([]);

  const handleOpenpopup = () => {
    setDetailLayout(true);
  };
  const handleClose = () => {
    setDetailLayout(false);
  };
  const handleData = (dt) => {
    setResdata(dt);
  };
  return (
    <>
      <View style={{ height: '100%' }}>
        {!detailLayout && (
          <Search
            closemodalpopup={handleOpenpopup}
            handleRes={handleData}
          />
        )}
        {detailLayout ? (
          <DetailSearch
            close={handleClose}
            res={resData}
          />
        ) : (
          <View style={{ flex: 1, height: '100%' }}>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', marginTop: 10 }}>
              ide dari Kreator
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{ flex: 1, flexDirection: 'row', gap: 20, marginTop: 30 }}>
                <MyMiniCard
                  img={
                    'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                  }
                />
                <MyMiniCard
                  img={
                    'https://images.unsplash.com/photo-1695653422694-4c422f9caddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                  }
                />
                <MyMiniCard
                  img={
                    'https://images.unsplash.com/photo-1695653422694-4c422f9caddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                  }
                />
                <MyMiniCard
                  img={
                    'https://plus.unsplash.com/premium_photo-1693166014362-e53614c8b474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                  }
                />
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </>
  );
};
export const Search = ({ closemodalpopup, handleRes }) => {
  const [inputValue, setInputValue] = useState('');
  const [data, setdata] = useState([]);
  const [closeModal, setCloseModal] = useState(true);

  handleRes(data);

  const handleSearch = () => {
    SearchImage(inputValue, (data) => {
      const items = data.hits;

      if (items && items.length > 0) {
        setdata(data.hits);
        closemodalpopup(closeModal);
      }
    });
    <Searchpage setDetailLayout={true} />;

    setInputValue('');
  };
  return (
    <>
      <View style={{ height: '40%' }}>
        <Image
          style={{ opacity: 0.6 }}
          height={'100%'}
          source={{
            uri: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 10,
            right: 10,
            borderColor: 'black',
            borderWidth: 0.5,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 20,
            paddingHorizontal: 20,
          }}>
          <Image
            height={20}
            width={20}
            source={{
              uri: 'https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones-thumbnail.png',
            }}
          />
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 15,
            }}
            placeholder="Cari Di Pintrest"
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
          />
          <Button
            onPress={handleSearch}
            title="Cari"
            disabled={inputValue == 0}
          />
        </View>
      </View>
    </>
  );
};
export default Searchlayout;
