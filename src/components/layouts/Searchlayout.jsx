import { Text, View, TextInput, Image, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SearchImage } from '../../Services/api/Query';
import DetailSearch from './DetailSearch';
import MyMiniCard from '../fragment/MyMiniCard';
import PopularCard from '../fragment/PopularCard';
import { AntDesign } from '@expo/vector-icons';
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
          <ScrollView style={{ height: '100%' }}>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', marginTop: 10 }}>Popular Post</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{ flex: 1, flexDirection: 'row', gap: 20, marginTop: 30, paddingHorizontal: 20 }}>
                <MyMiniCard
                  img={
                    'https://images.unsplash.com/photo-1613294326794-e7c74fe886e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMGNyZWF0b3J8ZW58MHx8MHx8fDA%3D'
                  }
                />
                <MyMiniCard
                  img={
                    'https://plus.unsplash.com/premium_photo-1684107940538-5bf2629fe036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGVudCUyMGNyZWF0b3J8ZW58MHx8MHx8fDA%3D'
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
            <Text style={{ fontSize: 20, paddingHorizontal: 20 }}>Paling Sering Dicari</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20 }}>
              <PopularCard
                Url={
                  'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWJpJTIwYW5pbWV8ZW58MHx8MHx8fDA%3D'
                }
                title={'Anime'}
              />
              <PopularCard
                Url={
                  'https://media.istockphoto.com/id/524687027/photo/couple-shopping.webp?b=1&s=170667a&w=0&k=20&c=um6sQFJph_-lNRABIGdLrsRZi-jNra1SY__U2JiiCRs='
                }
                title={'Trend Fasion'}
              />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20 }}>
              <PopularCard
                Url={
                  'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
                }
                title={'Foods'}
              />
              <PopularCard
                Url={
                  'https://plus.unsplash.com/premium_photo-1674682034730-95dbc3cce1c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXIlMjA0a3xlbnwwfHwwfHx8MA%3D%3D'
                }
                title={'walpaper 4k'}
              />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20 }}>
              <PopularCard
                Url={
                  'https://plus.unsplash.com/premium_photo-1664109999695-71dd1df7ae3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzfGVufDB8fDB8fHww'
                }
                title={'Sports'}
              />
              <PopularCard
                Url={
                  'https://plus.unsplash.com/premium_photo-1665203579219-839a4827a806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFjYXRpb24lMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D'
                }
                title={'vacation'}
              />
            </View>
          </ScrollView>
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
          <AntDesign
            name="search1"
            size={24}
            color="black"
          />
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 15,
            }}
            placeholder="Cari Image..."
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
