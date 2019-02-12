import React from 'react';
import { ScrollView, View, StyleSheet, Button, Alert} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')                                                 
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign Up"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign In"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  buttonContainer: {
    margin: 20,
    backgroundColor: 'white'
  }
});
