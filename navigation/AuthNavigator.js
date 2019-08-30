import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});


export default AuthStack;

