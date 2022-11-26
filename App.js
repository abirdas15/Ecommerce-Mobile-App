import React from 'react';

import OnBoarding from './src/screens/OnBoarding';
import Login from './src/screens/Login';
import Signup from './src/screens/Singup';
import Home from './src/screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from './src/screens/Explore';
import Cart from './src/screens/Cart';
import Offer from './src/screens/Offer';
import Account from './src/screens/Account';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import ProductSingle from './src/screens/ProductSingle';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home 2"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart-outline" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Offer"
        component={Offer}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="pricetag-outline"
              color={color}
              size={size}></Ionicons>
          ),
          Tab
        }}
      />
      <Tab.Screen name="Account" component={Account}   options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather
              name="user"
              color={color}
              size={size}></Feather>
          ),
        }}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={TabNavigation} options={{headerShown: false}} />
        <Stack.Screen name="ProductSingle" component={ProductSingle} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
