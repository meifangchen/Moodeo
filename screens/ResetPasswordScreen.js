import React from 'react';
import { View, Text} from 'react-native';
export default class ResetPasswordScreen extends React.Component {
    static navigationOptions = {
      title: 'Reset Password',
    };
  
    render() {
      return (
        <View>
          <Text>This is an authentication page</Text>
        </View>
      );
    }
}