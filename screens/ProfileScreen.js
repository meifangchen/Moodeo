import React from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View, Text } from 'react-native';
import { List, ListItem, CheckBox,Button, Icon } from 'react-native-elements';
import firebase from '../Firebase';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import Colors from '../constants/Colors';

export default class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'User Profile',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:20
      },
      headerTintColor:Colors.tintColor,
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'settings', style: { color: '#7d3f98', marginRight: 0, fontSize: 28 } }}
          onPress={() => { navigation.push('Settings') }}
        />
      ),
    };
  };

  state = {
    gender: '',
    hobby: '',
    language: '',
    age: '',
    femaleChecked: true,
    maleChecked: false,
    yesChecked: true,
    noChecked: false,
    movieshowChecked: false,
    musicChecked: false,
    comedyChecked: false,
    educationalChecked: false,
    productReviewChecked: false,
    vLogChecked: false,
    gamingChecked: false
  }

  onPressSave() {  
    const { gender, hobby, language, age } = this.state;
    alert("Your edited profile has been saved!");
  }
  onFCheckChange() {
      this.setState({
        maleChecked: false,
        femaleChecked: !this.state.femaleChecked,
      });
    } 

  onMCheckChange() {
      this.setState({
        femaleChecked: false,
        maleChecked: !this.state.maleChecked,
      });
  }
  onYesCheckChange() {
    this.setState({
      noChecked: false,
      yesChecked: !this.state.yesChecked,
    });
  }

  onNoCheckChange() {
    this.setState({
      yesChecked: false,
      noChecked: !this.state.noChecked,
    });
}

  onMovieshowCheckChange() {
    this.setState({
      movieshowChecked: !this.state.movieshowChecked,
    });
  }

  onMusicCheckChange() {
    this.setState({
      musicChecked: !this.state.musicChecked,
    });
  }

  onComedyCheckChange() {
    this.setState({
      comedyChecked: !this.state.comedyChecked,
    });
  }

  onEducationalCheckChange() {
    this.setState({
      educationalChecked: !this.state.educationalChecked,
    });
  }

  onProductReviewCheckChange() {
    this.setState({
      productReviewChecked: !this.state.productReviewChecked,
    });
  }

  onVLogCheckChange() {
    this.setState({
      vLogChecked: !this.state.vLogChecked,
    });
  }

  gamingCheckChange() {
    this.setState({
      gamingChecked: !this.state.gamingChecked,
    });
  }
  
  onPressCancel() {
    this.setState({
      gender: '',
      hobby: '',
      language: '',
      age: '',
      message: '',
      maleChecked: false,
      femaleChecked: false,
      yesChecked:false,
      noChecked:false,
      movieshowChecked: false,
      musicChecked: false,
      comedyChecked: false,
      educationalChecked: false,
      productReviewChecked: false,
      vLogChecked: false,
      gamingChecked: false
    });
  }

  renderCurrentState() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Gender</Text>
          <CheckBox 
            title='Female'
            checkedColor='#7d3f98'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress= {() => this.onFCheckChange()}
            checked={this.state.femaleChecked}
          />
        <CheckBox
          title='Male'
          checkedColor='#7d3f98'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.onMCheckChange()}
          checked={this.state.maleChecked}
        />
        <AuthInput
          placeholder=''
          label='Age:(In years)'
          onChangeText={age => this.setState({ age })}
          value={this.state.age}
        />
        <AuthInput
          placeholder=''
          label='What is your hobby?'
          onChangeText={hobby => this.setState({ hobby })}
          value={this.state.hobby}
        />
        <AuthInput
          placeholder=''
          label='What language do you speak?'
          onChangeText={language => this.setState({ language })}
          value={this.state.language}
        />
        <Text style={styles.labelText}>Do you like pets?</Text>
          <CheckBox 
            title='Yes'
            checkedColor='#7d3f98'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress= {() => this.onYesCheckChange()}
            checked={this.state.yesChecked}
            fontSize='20'
          />
          <CheckBox 
            title='No'
            checkedColor='#7d3f98'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress= {() => this.onNoCheckChange()}
            checked={this.state.noChecked}
          />
        <Text style={styles.labelText}>Video type preferences</Text>
          <CheckBox 
            title='Movie/Show'
            checkedColor='#7d3f98'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onMovieshowCheckChange()}
            checked={this.state.movieshowChecked}
            fontSize='20'
          />
          <CheckBox 
            title='Music'
            checkedColor='#7d3f98'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onMusicCheckChange()}
            checked={this.state.musicChecked}
          />
          <CheckBox 
            title='Comedy'
            checkedColor='#7d3f98'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onComedyCheckChange()}
            checked={this.state.comedyChecked}
          />
          <CheckBox 
            title='Educational'
            checkedColor='#7d3f98'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onEducationalCheckChange()}
            checked={this.state.educationalChecked}
          />
          <CheckBox 
            title='Product Review'
            checkedColor='#7d3f98'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onProductReviewCheckChange()}
            checked={this.state.productReviewChecked}
          />
          <CheckBox 
            title='VLog'
            checkedColor='#7d3f98'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onVLogCheckChange()}
            checked={this.state.vLogChecked}
          />
          <CheckBox 
            title='Gaming'
            checkedColor='#7d3f98'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.gamingCheckChange()}
            checked={this.state.gamingChecked}
          />
        <AuthButton onPress={() => this.onPressSave()}>Save</AuthButton>
        <AuthButton onPress={() => this.onPressCancel()}>Cancel</AuthButton>
      </View>
    )

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          {this.renderCurrentState()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },

  checkBox: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent:'space-between',
  },

  labelText: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

