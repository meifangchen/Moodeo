import React from 'react';
import { ScrollView, Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import ShoppingItemInput from "../components/ShoppingItemInput";
import ShoppingItemList from "../components/ShoppingItemList";

export default class ShoppingListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Shopping List',
      headerRight: (
        <Button
          title="Add"
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
         // onPress={() => { navigation.push('AddBoard') }}
        />
      ),
    };
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
