import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Cart = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{marginBottom: 20}}>
        <View style={{padding: 20, flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Your Cart</Text>
        </View>
        <View
          style={{borderWidth: 1, borderColor: '#EBF0FF', height: 2}}></View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <View
            style={{
              height: 104,
              borderWidth: 1,
              borderColor: '#EBF0FF',
              marginBottom: 20,
            }}>
            <View style={{padding: 12, flexDirection: 'row'}}>
              <View
                style={{
                  width: 72,
                  height: 72,
                  backgroundColor: '#F6F6F6',
                  borderRadius: 5,
                }}>
                <Image
                  source={require('../assets/img/product1.png')}
                  style={{height: '100%', width: '100%'}}></Image>
              </View>
              <View style={{marginLeft: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: 158, marginRight: 30}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '700',
                        color: '#223263',
                      }}>
                      Nike Air Zoom Pegasus 36 Miami
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name="heart-outline" size={18}></Ionicons>
                    <MaterialCommunityIcons
                      name="delete-outline"
                      size={18}
                      style={{marginLeft: 10}}></MaterialCommunityIcons>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '700',
                        color: '#40BFFF',
                      }}>
                      $299,43
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 32,
                        height: 24,
                        borderWidth: 1,
                        borderRadius: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#EBF0FF',
                      }}>
                      <Text style={{fontSize: 10, fontWeight: '700'}}>-</Text>
                    </View>
                    <View
                      style={{
                        width: 32,
                        height: 24,
                        borderWidth: 1,
                        borderRadius: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#EBF0FF',
                        backgroundColor: '#EBF0FF',
                      }}>
                      <Text>1</Text>
                    </View>
                    <View
                      style={{
                        width: 32,
                        height: 24,
                        borderWidth: 1,
                        borderRadius: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#EBF0FF',
                      }}>
                      <Text>+</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 104,
              borderWidth: 1,
              borderColor: '#EBF0FF',
              marginBottom: 20,
            }}>
            <View style={{padding: 12, flexDirection: 'row'}}>
              <View
                style={{
                  width: 72,
                  height: 72,
                  backgroundColor: '#F6F6F6',
                  borderRadius: 5,
                }}>
                <Image
                  source={require('../assets/img/product1.png')}
                  style={{height: '100%', width: '100%'}}></Image>
              </View>
              <View style={{marginLeft: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: 158, marginRight: 30}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '700',
                        color: '#223263',
                      }}>
                      Nike Air Zoom Pegasus 36 Miami
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name="heart-outline" size={18}></Ionicons>
                    <MaterialCommunityIcons
                      name="delete-outline"
                      size={18}
                      style={{marginLeft: 10}}></MaterialCommunityIcons>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '700',
                        color: '#40BFFF',
                      }}>
                      $299,43
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 32,
                        height: 24,
                        borderWidth: 1,
                        borderRadius: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#EBF0FF',
                      }}>
                      <Text style={{fontSize: 10, fontWeight: '700'}}>-</Text>
                    </View>
                    <View
                      style={{
                        width: 32,
                        height: 24,
                        borderWidth: 1,
                        borderRadius: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#EBF0FF',
                        backgroundColor: '#EBF0FF',
                      }}>
                      <Text>1</Text>
                    </View>
                    <View
                      style={{
                        width: 32,
                        height: 24,
                        borderWidth: 1,
                        borderRadius: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#EBF0FF',
                      }}>
                      <Text>+</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                height: 56,
                borderWidth: 1,
                borderRadius: 1,
                borderColor: '#EBF0FF',
                width: 265,
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
                padding: 5,
              }}>
              <TextInput placeholder="Enter Cupon Code"></TextInput>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#40BFFF',
                  height: 56,
                  borderWidth: 1,
                  borderRadius: 1,
                  borderColor: '#EBF0FF',
                  width: 87,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Text style={{color: '#fff', fontSize: 12, fontWeight: '700'}}>
                  Apply
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 164,
              borderWidth: 1,
              marginTop: 20,
              borderColor: '#EBF0FF',
              borderRadius: 5,
              padding: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#9098B1'}}>
                Items (3)
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#223263'}}>
                $598.86
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#9098B1'}}>
                Shipping
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#223263'}}>
                $40.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#9098B1'}}>
                Import charges
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#223263'}}>
                $128.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 12, fontWeight: '700', color: '#223263'}}>
                Total
              </Text>
              <Text style={{fontSize: 12, fontWeight: '700', color: '#40BFFF'}}>
                $128.00
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <View
              style={{
                height: 57,
                backgroundColor: '#40BFFF',
                marginTop: 20,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, fontWeight: '700', color: '#FFFFFF'}}>
                Checkout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
