import React from 'react';
import { StyleSheet, View, Button,Text } from 'react-native';

import * as firebase from 'firebase';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import Colors from '../constants/Colors';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
    headerTitleStyle: {
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize:25,
    },
    headerTintColor:Colors.tintColor
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      authenticating: false,
      user: null,
      error: '',
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <AuthInput
            placeholder='Enter your email...'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <AuthInput
            placeholder='Enter your password...'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <AuthButton onPress={() => { this.props.navigation.navigate('Home') }}>Confirm</AuthButton>
          <Text>{this.state.error}</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      flex: 1
    }
  });
export default SignUpScreen;