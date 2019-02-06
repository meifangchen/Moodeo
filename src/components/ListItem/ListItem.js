import React from "react";
import  {View, Text, StyleSheet} from "react-native";

//declare a function component
const ListItem = () => (
    <View style={styles.ListItem}>
        <Text>This is a test for customized component</Text>
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

