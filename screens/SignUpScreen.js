import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as firebase from 'firebase';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
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