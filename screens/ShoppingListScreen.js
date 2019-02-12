import React from 'react';
import { ScrollView, Text, View, StyleSheet} from 'react-native';
import ShoppingItemInput from "../components/ShoppingItemInput";
import ShoppingItemList from "../components/ShoppingItemList";

export default class ShoppingListScreen extends React.Component {
  static navigationOptions = {
    title: 'ShoppingList',
  };

  state = {
    shoppingItems: []
  };

  shoppingItemAddedHandler = shoppingItemName => {
    this.setState(prevState => {
      return {
        shoppingItems: prevState.shoppingItems.concat(shoppingItemName)
      };
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <ShoppingItemInput onshoppingItemAdded={this.shoppingItemAddedHandler} />
      <ShoppingItemList shoppingItems={this.state.shoppingItems} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
