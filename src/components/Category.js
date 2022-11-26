import React from 'react';

import {View, Text, Image} from 'react-native';

const Category = ({item}) => {
  return (
    <View style={{flex: 1, marginHorizontal: 20, marginTop: 20}}>
      <View
        style={{
          width: 70,
          height: 70,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#EBF0FF',
        }}>
        <Image source={item.url}></Image>
      </View>
      <Text
        style={{
          marginTop: 10,
          fontSize: 10,
          fontWeight: '400',
          alignSelf: 'center',
        }}>
        {item.name}
      </Text>
    </View>
  );
};

export default Category;
