import React from 'react';
import {Text,ScrollView, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {AuthButton} from '../components/AuthButton';

class VaidateVideoScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Validate Video',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
      },
      headerTintColor:Colors.tintColor
    };
  };

  validateFeekBack = () => {
    const data = 'We have received your feedback, thanks!';
      alert(data);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Does this video fit your current mood?</Text>
        <AuthButton
          onPress={() => this.validateFeekBack()}>Yes
        </AuthButton>
        <AuthButton
          onPress={() => this.validateFeekBack()}>No
        </AuthButton>
        <AuthButton
          onPress={() => this.props.navigation.push('MoodeoHappy2Screen')}>Next video
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

export default VaidateVideoScreen;
