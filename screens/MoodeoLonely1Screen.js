import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import {AuthButton} from '../components/AuthButton';
import Colors from '../constants/Colors';

export default class MoodeoLonely1Screen extends React.Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    videoURL: this.getVideoURL()
  }
 
  getVideoURL() {  
    videoKeyList = ['RQOU5ZLlwcQ','PgD56JEUWFA','BuhrHclfW8o','cmo88SMAcu0','GFnLw6ileXQ'];
    RandomNumber = Math.floor(Math.random() * (videoKeyList.length-1)) + 0 ;
    videoKey = videoKeyList[RandomNumber];
    result = `<html><body><iframe width='970' height='1134' src=https://www.youtube.com/embed/${videoKey} frameborder='0' allowfullscreen></iframe></body></html>`;  
    return result
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Moodeo Lonely 1',
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
      <View style={styles.container}>    
        <WebView
          useWebKit={true}
          style={StyleSheet.container}
          javaScriptEnabled={true}
          source={{ html: this.state.videoURL }}
        />
        <View style={styles.buttoncontainer}>
          <AuthButton 
            onPress={() => {this.props.navigation.push('MoodeoLonely2Screen');}}>Next video
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
