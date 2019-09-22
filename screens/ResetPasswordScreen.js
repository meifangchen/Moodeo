import React from 'react';
import { View, Text} from 'react-native';
import Colors from '../constants/Colors';
export default class ResetPasswordScreen extends React.Component {
    static navigationOptions = {
      title: 'Reset Password',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
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