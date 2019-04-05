import React from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import firebase from '../Firebase';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';

export default class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'settings', style: { color: 'black', marginRight: 0, fontSize: 28 } }}
          onPress={() => { navigation.push('Settings') }}
        />
      ),
    };
  };

  state = {
    gender: '',
    height: 0,
    weight: 0,
    age: 0,
  }

  onPressSave() {  
    const { gender, height, weight, age } = this.state;
    alert("Your edited profile has been saved!");
  }

  onPressCancel() {
    this.setState({
      gender: '',
      height: 0,
      weight: 0,
      age: 0,
      message: ''
    });
  }

  renderCurrentState() {
    return (
      <View style={styles.container}>
        <AuthInput
          placeholder=''
          label='Gender:(F or M)'
          onChangeText={gender => this.setState({ gender })}
          value={this.state.gender}
        />
        <AuthInput
          placeholder=''
          label='Height(In inches)'
          secureTextEntry
          onChangeText={height => this.setState({ height })}
          value={this.state.height}
        />
          <AuthInput
          placeholder=''
          label='Weight:(In lbs)'
          onChangeText={weight => this.setState({ weight })}
          value={this.state.weight}
        />
        <AuthInput
          placeholder=''
          label='Age(In years)'
          secureTextEntry
          onChangeText={age => this.setState({ age })}
          value={this.state.age}
        />
        <AuthButton onPress={() => this.onPressSave()}>Save</AuthButton>
        <AuthButton onPress={() => this.onPressCancel()}>Cancel</AuthButton>
      </View>
    )

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          {this.renderCurrentState()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
});

