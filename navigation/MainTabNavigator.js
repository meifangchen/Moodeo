import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MoodeoHappy1Screen from '../screens/MoodeoHappy1Screen';
import MoodeoHappy2Screen from '../screens/MoodeoHappy2Screen';
import MoodeoAngry1Screen from '../screens/MoodeoAngry1Screen';
import MoodeoAngry2Screen from '../screens/MoodeoAngry2Screen';
import MoodeoLonely1Screen from '../screens/MoodeoLonely1Screen';
import MoodeoLonely2Screen from '../screens/MoodeoLonely2Screen';
import MoodeoSad1Screen from '../screens/MoodeoSad1Screen';
import MoodeoSad2Screen from '../screens/MoodeoSad2Screen';
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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
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
  MoodeoAngry1Screen: MoodeoAngry1Screen,
  MoodeoAngry2Screen: MoodeoAngry2Screen,
  MoodeoLonely1Screen: MoodeoLonely1Screen,
  MoodeoLonely2Screen: MoodeoLonely2Screen,
  MoodeoSad1Screen: MoodeoSad1Screen,
  MoodeoSad2Screen: MoodeoSad2Screen
});

MoodeoStack.navigationOptions = {
  tabBarLabel: 'Moodeo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
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
  tabBarLabel: 'Video List',
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
