import React from "react";
import  {View, Text, StyleSheet} from "react-native";

//declare a function component
const ListItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.shoppingItemName}</Text>
    </View>
    
);

const styles = StyleSheet.create({
    ListItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee"
    }
});
export default ListItem;

