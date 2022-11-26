import React from 'react';

import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import {RadioButton} from 'react-native-paper';

const ProductSingle = ({navigation}) => {
  return (
    <ScrollView style={{padding: 20, flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginBottom: 50}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: 24}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={16}
                color="#9098B1"></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{width: 250}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>
              Nike Air Max 270 Rea...
            </Text>
          </View>
          <View style={{width: 24, alignItems: 'flex-end', marginRight: 20}}>
            <Ionicons size={16} name="search-outline"></Ionicons>
          </View>
          <View style={{width: 24, alignItems: 'flex-end'}}>
            <Feather size={16} name="more-vertical"></Feather>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Image
            style={{width: '100%', height: 200}}
            source={require('../assets/img/product1.png')}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: 275}}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              Nike Air Zoom Pegasus 36 Miami
            </Text>
          </View>
          <View>
            <Ionicons name="md-heart-outline" size={24}></Ionicons>
          </View>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Ionicons
            name="star"
            size={16}
            color="#FFC833"
            style={{marginRight: 5}}></Ionicons>
          <Ionicons
            name="star"
            size={16}
            color="#FFC833"
            style={{marginRight: 5}}></Ionicons>
          <Ionicons
            name="star"
            size={16}
            color="#FFC833"
            style={{marginRight: 5}}></Ionicons>
          <Ionicons
            name="star"
            size={16}
            color="#FFC833"
            style={{marginRight: 5}}></Ionicons>
          <Ionicons
            name="md-star-outline"
            size={16}
            color="#EBF0FF"
            style={{marginRight: 5}}></Ionicons>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#40BFFF'}}>
            $299,43
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#223263'}}>
            Select Size
          </Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>6</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>6.5</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>7</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>7.5</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>8</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>8.5</Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#223263'}}>
            Select Color
          </Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                backgroundColor: '#FFC833',
              }}></View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                backgroundColor: '#40BFFF',
              }}></View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                backgroundColor: '#FB7181',
              }}></View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                backgroundColor: '#53D1B6',
              }}></View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                backgroundColor: '#5C61F4',
              }}></View>
            <View
              style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#EBF0FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                backgroundColor: '#223263',
              }}></View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>Specification</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 12, fontWeight: '400'}}>Shown:</Text>
              <Text style={{fontWeight: '400', fontSize: 12}}>
                Laser Blue/Anthracite/Watermelon/White
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 12, fontWeight: '400'}}>Style:</Text>
              <Text style={{fontWeight: '400', fontSize: 12}}>CD0113-400</Text>
            </View>
            <Text style={{fontSize: 400, fontSize: 12, marginTop: 10}}>
              The Nike Air Max 270 React ENG combines a full-length React foam
              midsole with a 270 Max Air unit for unrivaled comfort and a
              striking visual experience.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>
              Review Product
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 14, fontWeight: '700', color: '#40BFFF'}}>
                See More
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Ionicons
              name="star"
              size={16}
              color="#FFC833"
              style={{marginRight: 5}}></Ionicons>
            <Ionicons
              name="star"
              size={16}
              color="#FFC833"
              style={{marginRight: 5}}></Ionicons>
            <Ionicons
              name="star"
              size={16}
              color="#FFC833"
              style={{marginRight: 5}}></Ionicons>
            <Ionicons
              name="star"
              size={16}
              color="#FFC833"
              style={{marginRight: 5}}></Ionicons>
            <Ionicons
              name="md-star-outline"
              size={16}
              color="#EBF0FF"
              style={{marginRight: 5}}></Ionicons>
            <Text style={{fontSize: 10, fontWeight: '700'}}>4.5</Text>
            <Text style={{fontSize: 10, fontWeight: '400', marginLeft: 5}}>
              (5 Review)
            </Text>
          </View>
        </View>
        <View
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              style={{width: 48, height: 48, borderRadius: 50}}
              source={require('../assets/img/profile.png')}></Image>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>James Lawson</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Ionicons
                name="star"
                size={16}
                color="#FFC833"
                style={{marginRight: 5}}></Ionicons>
              <Ionicons
                name="star"
                size={16}
                color="#FFC833"
                style={{marginRight: 5}}></Ionicons>
              <Ionicons
                name="star"
                size={16}
                color="#FFC833"
                style={{marginRight: 5}}></Ionicons>
              <Ionicons
                name="star"
                size={16}
                color="#FFC833"
                style={{marginRight: 5}}></Ionicons>
              <Ionicons
                name="md-star-outline"
                size={16}
                color="#EBF0FF"
                style={{marginRight: 5}}></Ionicons>
            </View>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              width: '100%',
              height: 50,
              backgroundColor: '#40BFFF',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 14, fontWeight: '700', color: '#FFFFFF'}}>
              Add To Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductSingle;
