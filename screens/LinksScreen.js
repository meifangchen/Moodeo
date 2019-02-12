import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LinksView from "../components/LinksView";
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete LinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <LinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});