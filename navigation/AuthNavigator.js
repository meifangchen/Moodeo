import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen 
});


export default AuthStack;

