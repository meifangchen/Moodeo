import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MoodeoHappy1Screen from '../screens/MoodeoHappy1Screen';
import MoodeoHappy2Screen from '../screens/MoodeoHappy2Screen';
import MoodeoRelaxed1Screen from '../screens/MoodeoRelaxed1Screen';
import MoodeoRelaxed2Screen from '../screens/MoodeoRelaxed2Screen';
import MoodeoLively1Screen from '../screens/MoodeoLively1Screen';
import MoodeoLively2Screen from '../screens/MoodeoLively2Screen';
import MoodeoCalm1Screen from '../screens/MoodeoCalm1Screen';
import MoodeoCalm2Screen from '../screens/MoodeoCalm2Screen';
import VaidateVideoScreen from '../screens/VaidateVideoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BoardScreen from '../screens/BoardScreen';
import BoardDetailScreen from '../screens/BoardDetailScreen';
import AddBoardScreen from '../screens/AddBoardScreen';
import EditBoardScreen from '../screens/EditBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#7d3f98',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 16,
    },
  },
};

const MoodeoStack = createStackNavigator({
  MoodeoHappy1Screen: MoodeoHappy1Screen,
  MoodeoHappy2Screen: MoodeoHappy2Screen,
  MoodeoRelaxed1Screen: MoodeoRelaxed1Screen,
  MoodeoRelaxed2Screen: MoodeoRelaxed2Screen,
  MoodeoLively1Screen: MoodeoLively1Screen,
  MoodeoLively2Screen: MoodeoLively2Screen,
  MoodeoCalm1Screen: MoodeoCalm1Screen,
  MoodeoCalm2Screen: MoodeoCalm2Screen,
  VaidateVideoScreen: VaidateVideoScreen,
  HomeScreen: HomeScreen
});

MoodeoStack.navigationOptions = {
  tabBarLabel: 'Moodeo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-videocam' : 'md-videocam'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#7d3f98',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 16,
    },
  },
  TabBarIcon: {
    backgroundColor: 'red'
  }
};

const ShoppingListStack = createStackNavigator({
  Board: BoardScreen,
  BoardDetails: BoardDetailScreen,
  AddBoard: AddBoardScreen,
  EditBoard: EditBoardScreen,
},
{
  initialRouteName: 'Board',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#777777',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: null,
  },
},
);

ShoppingListStack.navigationOptions = {
  tabBarLabel: 'Result',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#7d3f98',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 16,
    },
  },
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Settings: SettingsScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#7d3f98',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 16,
    },
  },
};

export default createBottomTabNavigator({
  HomeStack,
  MoodeoStack,
  ShoppingListStack,
  ProfileStack,
});
