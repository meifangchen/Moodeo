import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import firebase from '../Firebase';
import Colors from '../constants/Colors';

class BoardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Video List',
      headerTitleStyle: {
        paddingTop: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
      },
      headerTintColor:Colors.tintColor,
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'add-circle', style: { color: '#7d3f98', marginRight: 0, fontSize: 28 } }}
          onPress={() => { navigation.push('AddBoard') }}
        />
      ),
    };
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      boards: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards,
      isLoading: false,
   });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <List>
          {
            this.state.boards.map((item, i) => (
              <ListItem
                textStyle={{fontSize:30}}
                key={i}
                title={item.title}
                titleStyle={{fontSize:25}}
                leftIcon={{name: 'tag', type: 'font-awesome', color:'#7d3f98', size: 28}}
                onPress={() => {
                  this.props.navigation.navigate('BoardDetails', {
                    boardkey: `${JSON.stringify(item.key)}`,
                  });
                }}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BoardScreen;
