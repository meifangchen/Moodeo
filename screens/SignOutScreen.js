import React from 'react';
import { View, Text} from 'react-native';
export default class SignOutScreen extends React.Component {
    static navigationOptions = {
      title: 'Sign Out',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:20
      }
    };
  
    render() {
      return (
        <View>
          <Text>This is an authentication page</Text>
        </View>
      );
    }
}