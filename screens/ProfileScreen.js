import React from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View, Text } from 'react-native';
import { List, ListItem, CheckBox,Button, Icon } from 'react-native-elements';
import firebase from '../Firebase';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';

export default class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'settings', style: { color: 'black', marginRight: 0, fontSize: 28 } }}
          onPress={() => { navigation.push('Settings') }}
        />
      ),
    };
  };

  state = {
    gender: '',
    height: '',
    weight: '',
    age: '',
    femaleChecked: true,
    maleChecked: false,
    yesChecked: true,
    noChecked: false,
    vegetableChecked: false,
    wholeGrainChecked: false,
    peanutChecked: false,
    eggsChecked: false
  }

  onPressSave() {  
    const { gender, height, weight, age } = this.state;
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

onVegetableCheckChange() {
  this.setState({
    vegetableChecked: !this.state.vegetableChecked,
  });
}

onWholeGrainCheckChange() {
  this.setState({
    wholeGrainChecked: !this.state.wholeGrainChecked,
  });
}

onPeanutCheckChange() {
  this.setState({
    peanutChecked: !this.state.peanutChecked,
  });
}

onEggCheckChange() {
  this.setState({
    eggsChecked: !this.state.eggsChecked,
  });
}
  onPressCancel() {
    this.setState({
      gender: '',
      height: '',
      weight: '',
      age: '',
      message: '',
      maleChecked: false,
      femaleChecked: false,
      yesChecked:false,
      noChecked:false,
      vegetableChecked: false,
      wholeGrainChecked: false,
      peanutChecked: false,
      eggsChecked: false
    });
  }

  renderCurrentState() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Gender</Text>
          <CheckBox 
            title='Female'
            checkedColor='#00aeef'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress= {() => this.onFCheckChange()}
            checked={this.state.femaleChecked}
          />
          <CheckBox 
            title='Male'
            checkedColor='#00aeef'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress= {() => this.onMCheckChange()}
            checked={this.state.maleChecked}
          />
        
        <AuthInput
          placeholder=''
          label='Height:(In inches)'
          onChangeText={height => this.setState({ height })}
          value={this.state.height}
        />
          <AuthInput
          placeholder=''
          label='Weight:(In lbs)'
          onChangeText={weight => this.setState({ weight })}
          value={this.state.weight}
        />
        <AuthInput
          placeholder=''
          label='Age:(In years)'
          onChangeText={age => this.setState({ age })}
          value={this.state.age}
        />
        <Text style={styles.labelText}>Do you have diabetes?</Text>
          <CheckBox 
            title='Yes'
            checkedColor='#00aeef'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress= {() => this.onYesCheckChange()}
            checked={this.state.yesChecked}
            fontSize='20'
          />
          <CheckBox 
            title='No'
            checkedColor='#00aeef'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress= {() => this.onNoCheckChange()}
            checked={this.state.noChecked}
          />
        <Text style={styles.labelText}>Food preferences</Text>
          <CheckBox 
            title='Vegetable'
            checkedColor='#00aeef'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onVegetableCheckChange()}
            checked={this.state.vegetableChecked}
            fontSize='20'
          />
          <CheckBox 
            title='Whole grain'
            checkedColor='#00aeef'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onWholeGrainCheckChange()}
            checked={this.state.wholeGrainChecked}
          />
        <Text style={styles.labelText}>Food allergies</Text>
          <CheckBox 
            title='Egg'
            checkedColor='#00aeef'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onEggCheckChange()}
            checked={this.state.eggsChecked}
            fontSize='20'
          />
          <CheckBox 
            title='Peanut'
            checkedColor='#00aeef'
            //checkedIcon='dot-circle-o'
            //uncheckedIcon='circle-o'
            onPress= {() => this.onPeanutCheckChange()}
            checked={this.state.peanutChecked}
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

