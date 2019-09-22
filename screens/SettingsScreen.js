import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';

import firebase from '../Firebase';

class SettingsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:20
      }
    };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default SettingsScreen;
