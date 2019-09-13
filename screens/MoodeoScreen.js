import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import {AuthButton} from '../components/AuthButton';

export default class MoodeoScreen extends React.Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    videoURL: this.getVideoURL()
  }
 
  getVideoURL() {  
    videoKey = 'gwOykqd0tv0';
    result = `<html><body><iframe width='970' height='1134' src=https://www.youtube.com/embed/${videoKey} frameborder='0' allowfullscreen></iframe></body></html>`;  
    return result
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Moodeo',
    };
  };

  render() {
    return (
      <View style={styles.container}>     
        <WebView 
          style={StyleSheet.container}
          javaScriptEnabled={true}
          source={{ html: this.state.videoURL }}
        />
        <View style={styles.buttoncontainer}>
          <AuthButton 
            onPress={() => {this.props.navigation.navigate('MoodeoNext');}}>Next video
          </AuthButton>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttoncontainer: {
    paddingBottom: 50,
  },
});
