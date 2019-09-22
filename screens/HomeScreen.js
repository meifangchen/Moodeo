import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  Button,
} from 'react-native';

import {AuthButton} from '../components/AuthButton';

export default class HomeScreen extends React.Component {
  state = {
    item: '',
    foodCategory:'',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Welcome to Moodeo',
      header: null,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        paddingTop: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:22
      }
    };
  };
  clickMe = () => {
    const data = this.state.foodCategory;
    if(data == '') {
      alert("Please pick one");
    } else {
      alert(data);
    }
  }
  recommendVideoByMood() {
    moodValue = this.state.foodCategory;
    if(moodValue == 'angry') {
      this.props.navigation.push('MoodeoAngry1Screen')
    } else if(moodValue == 'lonely') {
      this.props.navigation.push('MoodeoLonely1Screen')
    } else if(moodValue == 'sad') {
      this.props.navigation.push('MoodeoSad1Screen')
    } else {
      this.props.navigation.push('MoodeoHappy1Screen')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>How is your mood?</Text>
          <Picker
            selectedValue={this.state.foodCategory}
            style={{ height: 100, width: '100%',}} 
            itemStyle={{fontSize: 30, paddingBottom: 10,paddingTop:30}}
            onValueChange={(itemValue, itemIndex) =>this.setState({ foodCategory: itemValue })}>
            <Picker.Item
              label="Select a mood"
              value=""
              color="#00aeef"
            />
            <Picker.Item label="Angry" fontSize="20" value="angry" />
            <Picker.Item label="Happy" value="happy" />
            <Picker.Item label="Lonely" value="lonely" />
            <Picker.Item label="Sad" value="sad" />
          </Picker>
        </View>
        <View style={styles.buttonContainer} >
        <AuthButton
          onPress={() => this.recommendVideoByMood()}>Recommend a video
        </AuthButton>
        </View>
        <Text style={styles.getStartedText}>
          {this.state.item}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40
  },
  buttonContainer: {
    marginTop:450,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  welcomeImage: {
    width: '80%',
    height: 80,
    top: 5,
    paddingTop: 0,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 20,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    height: '50%',
    top: 100,
    left: 0,
    right: 0,
    alignContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#00aeef',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontWeight: 'bold',
    fontSize: 38,
    paddingTop: 0,
    color: 'black',
    textAlign: 'center',
  },
});
