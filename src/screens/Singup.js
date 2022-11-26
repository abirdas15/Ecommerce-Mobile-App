import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconIonicons, { Button } from 'react-native-vector-icons/dist/Ionicons';

const Signup = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 60}}>
          <Image source={require('../assets/img/logo1.png')}></Image>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
            Let’s Get Started
          </Text>
          <Text style={{fontSize: 12, marginTop: 5, alignSelf: 'center'}}>
            Create an new account
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#EBF0FF',
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 20,
            paddingLeft: 10,
            marginBottom: 10
          }}>
          <IconFontAwesome
            name="user-o"
            size={25}
            style={{alignSelf: 'center', marginRight: 5}}></IconFontAwesome>
          <TextInput placeholder="Full Name"></TextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#EBF0FF',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            marginBottom: 10
          }}>
          <IconIonicons
            name="mail-outline"
            size={25}
            style={{alignSelf: 'center', marginRight: 5}}></IconIonicons>
          <TextInput placeholder="Your Email"></TextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#EBF0FF',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            marginBottom: 10
          }}>
          <IconIonicons
            name="lock-closed-outline"
            size={25}
            style={{alignSelf: 'center', marginRight: 5}}></IconIonicons>
          <TextInput placeholder="Password" secureTextEntry={true}></TextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#EBF0FF',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            marginBottom: 10
          }}>
          <IconIonicons
            name="lock-closed-outline"
            size={25}
            style={{alignSelf: 'center', marginRight: 5}}></IconIonicons>
          <TextInput placeholder="Password Again" secureTextEntry={true}></TextInput>
        </View>
        <TouchableOpacity>
            <View style={{ backgroundColor: '#40BFFF', height: 50, borderRadius: 5, alignItems: 'center', justifyContent:'center' }}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Sign up</Text>
            </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15 }}>have a account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: '#40BFFF', fontSize: 15, fontWeight: 'bold', marginLeft: 5 }}>Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
