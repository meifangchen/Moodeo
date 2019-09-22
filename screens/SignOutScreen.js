import React from 'react';
import { View, Text} from 'react-native';
import Colors from '../constants/Colors';
export default class SignOutScreen extends React.Component {
    static navigationOptions = {
      title: 'Sign Out',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:20
      },
      headerTintColor:Colors.tintColor
    };
  
    render() {
      return (
        <View>
          <Text>This is an authentication page</Text>
        </View>
      );
    }
}