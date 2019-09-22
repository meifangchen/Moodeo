import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../Firebase';
import { AuthInput } from '../components/AuthInput';

class EditBoardScreen extends Component {
  static navigationOptions = {
    title: 'Edit Board',
    headerTitleStyle: {
      paddingTop: 0,
      alignSelf: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize:20
    }
  };
  constructor() {
    super();
    this.state = {
      key: '',
      isLoading: true,
      title: '',
      description: '',
      author: ''
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('boards').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          description: board.description,
          author: board.author,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

  updateBoard() {
    this.setState({
      isLoading: true,
    });
    const { navigation } = this.props;
    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        author: '',
        isLoading: false,
      });
      this.props.navigation.navigate('Board');
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      this.setState({
        isLoading: false,
      });
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
        <View style={styles.subContainer}>
          <TextInput
            style={{fontSize:18}}
            multiline={true}
            numberOfLines={4}
            placeholder={'Video Item Name'}
            value={this.state.title}
            onChangeText={(text) => this.updateTextInput(text, 'title')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={{fontSize:18}}
            multiline={true}
            numberOfLines={4}
            placeholder={'Notes'}
            value={this.state.author}
            onChangeText={(text) => this.updateTextInput(text, 'author')}
            />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={{fontSize:18}}
            placeholder={'View date'}
            value={this.state.description}
            onChangeText={(text) => this.updateTextInput(text, 'description')}
          />
        </View>
        <View style={styles.button}>
          <Button
            large
            leftIcon={{name: 'update'}}
            title='Update'
            backgroundColor={'#00aeef'}
            onPress={() => this.updateBoard()} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: '#CCCCCC',
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

export default EditBoardScreen;
