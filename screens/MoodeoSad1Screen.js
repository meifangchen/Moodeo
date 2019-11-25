import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import {AuthButton} from '../components/AuthButton';
import Colors from '../constants/Colors';

export default class MoodeoSad1Screen extends React.Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    videoURL: this.getVideoURL()
  }
 
  getVideoURL() {  
    videoKeyList = ['mqSQvoinDE4','F8umfBRlwW8','RQOU5ZLlwcQ','PgD56JEUWFA','BuhrHclfW8o','cmo88SMAcu0','GFnLw6ileXQ'];
    RandomNumber = Math.floor(Math.random() * (videoKeyList.length-1)) + 0 ;
    videoKey = videoKeyList[RandomNumber];
    result = `<html><body><iframe width='970' height='1134' src=https://www.youtube.com/embed/${videoKey} frameborder='0' allowfullscreen></iframe></body></html>`;  
    return result
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Moodeo Sad 1',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
      },
      headerStyle: {
        borderBottomWidth: 0,
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
            onPress={() => {this.props.navigation.push('MoodeoSad2Screen');}}>Next video
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
    paddingLeft: 20,
    paddingRight: 20,
  },
});
