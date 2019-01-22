import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet, Button, Alert} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  state = {
    name: '',
    email: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
          Hello, welcome to FoodManager!
          </Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Full Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          ref={ref => {this._emailInput = ref}}
          placeholder="email@example.com"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign Up"
            color="#336699"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign In"
            color="#336699"
          />
        </View>
      </View>
    );
  }
  
  _next = () => {
    this._emailInput && this._emailInput.focus();
  };
  
  _submit = () => {
    alert(`Welcome, ${this.state.name}! Confirmation email has been sent to ${this.state.email}`);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 20 + Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'white'
  }
});
