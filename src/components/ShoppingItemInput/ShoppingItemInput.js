import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class ShoppingItemInput extends Component {
  state = {
    shoppingItemName: ""
  };

  shoppingItemNameChangedHandler = val => {
    this.setState({
      shoppingItemName: val
    });
  };

  shoppingItemSubmitHandler = () => {
    if (this.state.shoppingItemName.trim() === "") {
      return;
    }

    this.props.onshoppingItemAdded(this.state.shoppingItemName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.ShoppingItemInputContainer}>
        <TextInput
          placeholder="Please enter an food item"
          value={this.state.shoppingItemName}
          onChangeText={this.shoppingItemNameChangedHandler}
          style={styles.ShoppingItemField}
        />
        </View>
        <Button
          title="Add"
          style={styles.shoppingItemButton}
          onPress={this.shoppingItemSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },
  ShoppingItemInputContainer: {
    flex: 1,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 6
  },
  shoppingItemField: {
    width: "70%"
  },
  shoppingItemButton: {
    width: "30%"
    
  }
});

export default ShoppingItemInput;
