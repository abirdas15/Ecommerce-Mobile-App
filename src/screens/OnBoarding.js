import React, { useEffect } from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const OnBoarding = ({navigation}) => {

  useEffect(() => {
    setTimeout(function() {
      navigation.navigate('Login');
    }, 5000);
  })

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40BFFF',
    flexDirection: 'column',
  },
});
export default OnBoarding;
