import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

import firebase from '../Firebase';
import {AuthButton} from '../components/AuthButton';

class SettingsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
      },
      headerTintColor:Colors.tintColor
    };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <AuthButton
          onPress={() => this.props.navigation.push('SignIn')}>Sign Out
        </AuthButton>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 195,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default SettingsScreen;
