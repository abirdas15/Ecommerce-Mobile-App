import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

const FlashSale = ({item, navigation}) => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 20, marginBottom: 20}}>
      <View
        style={{
          width: 141,
          height: 238,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: '#EBF0FF',
          padding: 12,
        }}>
        <View
          style={{
            width: 109,
            height: 109,
            backgroundColor: '#F6F6F6',
            borderRadius: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductSingle')}>
            <Image source={item.url}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductSingle')}>
            <Text style={{marginTop: 10, fontSize: 12, fontWeight: '700'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              fontWeight: '700',
              color: '#40BFFF',
            }}>
            {item.price}
          </Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                color: '#9098B1',
                textDecorationLine: 'line-through',
                marginRight: 10,
              }}>
              {item.old_price}
            </Text>
            <Text style={{fontSize: 10, fontWeight: '700', color: '#FB7181'}}>
              {item.discount_value}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlashSale;
