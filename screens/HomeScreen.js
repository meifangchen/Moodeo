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
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
  state = {
    item: '',
    foodCategory:'',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mood',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: Colors.tintColor,
      headerTitleStyle: {
        paddingTop: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
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
    if(moodValue == 'relaxed') {
      this.props.navigation.push('MoodeoRelaxed1Screen')
    } else if(moodValue == 'lively') {
      this.props.navigation.push('MoodeoLively1Screen')
    } else if(moodValue == 'calm') {
      this.props.navigation.push('MoodeoCalm1Screen')
    } else if(moodValue == 'annoyed') {
      this.props.navigation.push('MoodeoAnnoyed1Screen')
    } else if(moodValue == 'sad') {
      this.props.navigation.push('MoodeoSad1Screen')
    } else if (moodValue == 'bored') {
      this.props.navigation.push('MoodeoBored1Screen')
    } else if (moodValue == 'nervous') {
      this.props.navigation.push('MoodeoNervous1Screen')
    } else {
      this.props.navigation.push('MoodeoHappy1Screen')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>How are you?</Text>
          <Picker
            selectedValue={this.state.foodCategory}
            itemTextStyle={{ fontSize: 18, color: 'white' }}
            style={{ height: 100, width: '100%', paddingTop: 50}} 
            itemStyle={{fontSize: 30, paddingBottom: 10,paddingTop:30, backgroundColor: 'lightgrey'}}
            onValueChange={(itemValue, itemIndex) =>this.setState({ foodCategory: itemValue })}>
            <Picker.Item
              label="Do not know"
              value=""
              color="#7d3f98"
            />
            <Picker.Item label="Happy" value="happy" color="#7d3f98"/>
            <Picker.Item label="Lively" value="lively" color="#7d3f98"/>
            <Picker.Item label="Calm" value="calm" color="#7d3f98"/>
            <Picker.Item label="Relaxed" value="relaxed" color="#7d3f98"/>
            <Picker.Item label="Nervous" value="nervous" color="#7d3f98"/>
            <Picker.Item label="Annoyed" value="annoyed" color="#7d3f98"/>
            <Picker.Item label="Bored" value="bored" color="#7d3f98"/>
            <Picker.Item label="Sad" value="sad" color="#7d3f98"/>
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
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40
  },
  buttonContainer: {
    marginTop:410,
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
    top: 40,
    left: 0,
    right: 0,
    alignContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#7d3f98',
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
    paddingVertical: 10,
  },
  tabBarInfoText: {
    fontWeight: 'bold',
    fontSize: 35,
    paddingTop: 0,
    color: '#7d3f98',
    textAlign: 'center',
  },
});
