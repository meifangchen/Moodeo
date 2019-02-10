import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const ShoppingItemList = props => {
    const ShoppingItemsInput = props.shoppingItems.map((shoppingItem, i) => (
        <ListItem key={i} shoppingItemName={shoppingItem} />
      ));
    return (
        <View style={styles.listContainer}>{ShoppingItemsInput}</View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "80%",
        margin: 20
      }
});

export default ShoppingItemList;