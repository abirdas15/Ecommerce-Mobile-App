import React from 'react';

import {View, Text, ImageBackground} from 'react-native';

const Slider = ({item}) => {
  return (
    <View style={{marginTop: 20, alignItems: 'center', marginHorizontal: 20}}>
      <ImageBackground
        source={item.url}
        style={{width: '100%', justifyContent: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
            fontSize: 24,
            fontWeight: '400',
            alignSelf: 'flex-start',
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 10,
          }}>
          Super Flash Sale
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
            fontSize: 24,
            fontWeight: '400',
            alignSelf: 'flex-start',
            marginLeft: 20,
          }}>
          50% Off
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              width: 42,
              height: 41,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: '#fff',
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              marginLeft: 20,
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>08</Text>
          </View>
          <View
            style={{
              width: 42,
              height: 41,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: '#fff',
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>34</Text>
          </View>
          <View
            style={{
              width: 42,
              height: 41,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: '#fff',
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>52</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Slider;
