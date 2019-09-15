import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import {AuthButton} from '../components/AuthButton';

export default class MoodeoHappy1Screen extends React.Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    videoURL: this.getVideoURL()
  }
 
  getVideoURL() {  
    videoKeyList = ['jySrwZc4sZo', 'RKU6x1n9Hak', 'RNXb6BvRyvg', '5Ypl6N4biH0', 'OoI57NeMwCc', 'eHl7jMIFDpU', 'GSLSwwkLRW0', 'hY7m5jjJ9mM', 'OuXuZU97Fy0', 'gRyPjRrjS34', 'nTasT5h0LEg', '5dsGWM5XGdg', '7na_-LfGfpE', '2aK8hy50fS4', 'yCYMBg4kkbs', 'MRKKGwE5N58', 'IytNBm8WA1c', 'DODLEX4zzLQ', 'PYOSKYWg-5E', 'xHuy4SeAuDM'];
    RandomNumber = Math.floor(Math.random() * (videoKeyList.length-1)) + 0 ;
    videoKey = videoKeyList[RandomNumber];
    result = `<html><body><iframe width='970' height='1134' src=https://www.youtube.com/embed/${videoKey} frameborder='0' allowfullscreen></iframe></body></html>`;  
    return result
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Moodeo Happy 1',
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
            onPress={() => {this.props.navigation.push('MoodeoHappy2Screen');}}>Next video
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
