import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Colors from '../constants/Colors';
import {AuthButton} from '../components/AuthButton';
import firebase from '../Firebase';

class VaidateVideoScreen extends React.Component {

  state = {
    yesChecked: false,
    noChecked: false
  }

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

  constructor() {
    super();
    this.ref = firebase.firestore().collection('videoValidationResult');
    this.state = {
      isLoading: false,
      isValid: false
    };
  }

  validateFeekBack = () => {
    const data = 'We have received your feedback, thanks!';
      alert(data);

      this.setState({
        isLoading: true,
      });
      if(this.state.yesChecked){
        this.state.isValid =true
      } else if(this.state.noChecked){
        this.state.isValid=false
      }
      this.ref.add({
        isValid: this.state.isValid
      }).then((docRef) => {
        this.setState({
          isValid: false,
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this.setState({
          isLoading: false,
        });
      });
  }
  onPressYes(){
    this.setState({
      yesChecked: !this.state.yesChecked,
      noChecked: false
    });
  }
  onPressNo(){
    this.setState({
      noChecked: !this.state.noChecked,
      yesChecked:false
    });
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Does this video fit your current mood?</Text>
        <CheckBox
          title='Yes'
          textStyle={{fontSize: 25}}
          checkedColor='#7d3f98'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.onPressYes()}
          checked={this.state.yesChecked}
        />
        <CheckBox
          title='No'
          textStyle={{fontSize: 25}}
          checkedColor='#7d3f98'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.onPressNo()}
          checked={this.state.noChecked}
        />
        <AuthButton
          style={styles.authbutton}
          onPress={() => this.validateFeekBack()}>Submit
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
    backgroundColor: '#fff',
    padding: 20,
    paddingTop:30
  },
  text: {
    fontSize: 35,
    paddingBottom: 25,
    paddingLeft: 20
  }
});

export default VaidateVideoScreen;
