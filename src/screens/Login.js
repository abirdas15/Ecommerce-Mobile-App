import axios from 'axios';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {API_URL} from '../../config';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  SubmitLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    setLoading(true);
    axios
      .post(`${API_URL}/auth/login`, data)
      .then(response => {
        setLoading(false);
        const res = response.data;
        if (parseInt(res.status) === 200) {
          AsyncStorage.setItem('USER_INFO', JSON.stringify(res.data));
          AsyncStorage.setItem('ACCESS_TOKEN', res.token);
          navigation.navigate('Home');
        } else {
          setError(res.error);
        }
      })
      .catch(error => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 60}}>
          <Image source={require('../assets/img/logo1.png')} />
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
            Welcome to Lafyuu
          </Text>
          <Text style={{alignSelf: 'center', fontSize: 12, marginTop: 5}}>
            Sign in to continue
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
              paddingLeft: 15,
              borderRadius: 5,
              marginTop: 20,
            }}>
            <Icon
              name="mail-outline"
              size={25}
              style={{alignSelf: 'center', marginRight: 5}}></Icon>
            <TextInput
              placeholder="Your Email"
              value={email}
              onChangeText={text => setEmail(text)}></TextInput>
          </View>
          {error != null && error.email != undefined ? (
            <View>
              <Text style={{color: 'red', fontSize: 12}}>{error.email[0]}</Text>
            </View>
          ) : null}
        </View>
        <View style={{marginBottom: 10}}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#EBF0FF',
              borderWidth: 1,
              paddingLeft: 15,
              borderRadius: 5,
            }}>
            <Icon
              name="lock-closed-outline"
              size={25}
              style={{alignSelf: 'center', marginRight: 5}}></Icon>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}></TextInput>
          </View>
          {error != null && error.password != undefined ? (
            <View>
              <Text style={{color: 'red', fontSize: 12}}>
                {error.password[0]}
              </Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity disabled={loading} onPress={() => SubmitLogin()}>
          <View
            style={{
              backgroundColor: '#40BFFF',
              height: 50,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View>{loading && <ActivityIndicator color={'#fff'} />}</View>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '40%',
              height: 2,
              backgroundColor: '#EBF0FF',
            }}></View>
          <Text>OR</Text>
          <View
            style={{
              width: '40%',
              height: 2,
              backgroundColor: '#EBF0FF',
            }}></View>
        </View>
        <TouchableOpacity>
          <View
            style={{
              borderColor: '#EBF0FF',
              height: 70,
              flexDirection: 'row',
              borderRadius: 5,
              borderWidth: 2,
              marginTop: 20,
              padding: 20,
              alignItems: 'center',
            }}>
            <Icon name="logo-google" size={20}></Icon>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 15}}>
              Login with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderColor: '#EBF0FF',
              height: 70,
              flexDirection: 'row',
              borderRadius: 5,
              borderWidth: 2,
              marginTop: 10,
              padding: 20,
              alignItems: 'center',
            }}>
            <Icon name="logo-facebook" size={20}></Icon>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 15}}>
              Login with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: '#40BFFF', fontSize: 15, fontWeight: 'bold'}}>
              Forgot Password?
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 15}}>Don’t have a account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                color: '#40BFFF',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default Login;
