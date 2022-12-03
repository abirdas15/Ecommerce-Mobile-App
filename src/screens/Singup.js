import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';
import axios from 'axios';

import {API_URL} from '../../config';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errors, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const Register = () => {
    const formData = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    setIsSubmitting(true);
    axios
      .post(`${API_URL}/auth/register`, formData)
      .then(response => {
        setIsSubmitting(false);
        const res = response.data;
        if (parseInt(res.status) === 200) {
          alert(res.msg);
          navigation.navigate('Login');
        } else {
          setError(res.error);
        }
      })
      .catch(error => {
        setIsSubmitting(false);
        console.log(error);
      });
  };

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
        <View style={{marginBottom: 10}}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#EBF0FF',
              borderWidth: 1,
              borderRadius: 5,
              marginTop: 20,
              paddingLeft: 10,
            }}>
            <IconFontAwesome
              name="user-o"
              size={25}
              style={{alignSelf: 'center', marginRight: 5}}></IconFontAwesome>
            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={text => setName(text)}></TextInput>
          </View>
          {errors != null && errors.name != undefined ? (
            <View>
              <Text style={{color: 'red', fontSize: 12}}>{errors.name[0]}</Text>
            </View>
          ) : null}
        </View>

        <View style={{marginBottom: 10}}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#EBF0FF',
              borderWidth: 1,
              borderRadius: 5,
              paddingLeft: 10,
            }}>
            <IconIonicons
              name="mail-outline"
              size={25}
              style={{alignSelf: 'center', marginRight: 5}}></IconIonicons>
            <TextInput
              placeholder="Your Email"
              value={email}
              onChangeText={text => setEmail(text)}></TextInput>
          </View>
          {errors != null && errors.email != undefined ? (
            <View>
              <Text style={{color: 'red', fontSize: 12}}>
                {errors.email[0]}
              </Text>
            </View>
          ) : null}
        </View>

        <View style={{marginBottom: 10}}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#EBF0FF',
              borderWidth: 1,
              borderRadius: 5,
              paddingLeft: 10,
            }}>
            <IconIonicons
              name="lock-closed-outline"
              size={25}
              style={{alignSelf: 'center', marginRight: 5}}></IconIonicons>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}></TextInput>
          </View>
          {errors != null && errors.password != undefined ? (
            <View>
              <Text style={{color: 'red', fontSize: 12}}>
                {errors.password[0]}
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#EBF0FF',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            marginBottom: 10,
          }}>
          <IconIonicons
            name="lock-closed-outline"
            size={25}
            style={{alignSelf: 'center', marginRight: 5}}></IconIonicons>
          <TextInput
            placeholder="Password Again"
            secureTextEntry={true}
            value={password_confirmation}
            onChangeText={text => setPasswordConfirmation(text)}></TextInput>
        </View>
        <TouchableOpacity disabled={ isSubmitting } onPress={() => Register()}>
          <View
            style={{
              backgroundColor: '#40BFFF',
              height: 50,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 15}}>have a account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: '#40BFFF',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
