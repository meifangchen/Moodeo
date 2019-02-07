import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet, Button, Alert, Image} from 'react-native';
import { Constants } from 'expo';
import CheckBox from 'react-native-check-box';
import ListItem from "./src/components/ListItem/ListItem";

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  state = {
    name: '',
    email: '',
    shoppingItemName: "",
    shoppingItems: []
  };

  shoppingItemNameChangedHandler = val => {
    this.setState({
      shoppingItemName: val
    });
  };

  shoppingItemsubmitHandler = () => {
    if (this.state.shoppingItemName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        shoppingItems: prevState.shoppingItems.concat(prevState.shoppingItemName)
      };
    });
  };

  render() {
    const shoppingItemsOutput = this.state.shoppingItems.map((shoppingItem, i) => (
      <ListItem key={i} shoppingItemName={shoppingItem} />
    ));
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
          Hello, welcome to FoodManager!
          </Text>
        </View>
      
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="food item"
            value={this.state.shoppingItemName}
            onChangeText={this.shoppingItemNameChangedHandler}
            style={styles.shoppingItemInput}
          />
          <Button
            title="Add"
            style={styles.shoppingItemButton}
            onPress={this.shoppingItemsubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{shoppingItemsOutput}</View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Full Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          ref={ref => {this._emailInput = ref}}
          placeholder="email@example.com"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign Up"
            color="#336699"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign In"
            color="#336699"
          />
        </View>
        <CheckBox
            style={{flex: 1, padding: 20}}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            rightText={"I have read and agree to the terms and conditions and the privacy policy."}
        />
      </View>
    );
  }
  
  _next = () => {
    this._emailInput && this._emailInput.focus();
  };
  
  _submit = () => {
    alert(`Welcome, ${this.state.name}! Confirmation email has been sent to ${this.state.email}`);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 20 + Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'white'
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  shoppingItemInput: {
    margin: 20,
    width: "70%",
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  shoppingItemButton: {
    width: "30%"
  },
  listContainer: {
    width: "80%",
    margin: 20
  }
});
