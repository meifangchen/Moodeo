import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { List, ListItem, Text, Card, Button } from 'react-native-elements';
import firebase from '../Firebase';
import Colors from '../constants/Colors';

class BoardDetailScreen extends Component {
  static navigationOptions = {
    title: 'Result Details',
    headerTitleStyle: {
      paddingTop: 0,
      alignSelf: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize:25
    },
    headerTintColor:Colors.tintColor
  };
  constructor() {
    super();
    this.state = {
      isLoading: true,
      board: {},
      key: ''
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('videoValidationResult').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  deleteBoard(key) {
    const { navigation } = this.props;
    this.setState({
      isLoading: true
    });
    firebase.firestore().collection('videoValidationResult').doc(key).delete().then(() => {
      console.log("Document successfully deleted!");
      this.setState({
        isLoading: false
      });
      navigation.navigate('Board');
    }).catch((error) => {
      console.error("Error removing document: ", error);
      this.setState({
        isLoading: false
      });
    });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text h2>Does this video fit your current mood?</Text>
              <Text style={styles.cardText}>Your answer: {this.state.board.isValid == true? 'Yes': 'No'}</Text>
            </View>
          </View>
         {/* <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#CCCCCC'}
              leftIcon={{name: 'edit'}}
              title='Edit'
              textStyle={{fontSize:28}}
              onPress={() => {
                this.props.navigation.navigate('EditBoard', {
                  boardkey: `${JSON.stringify(this.state.key)}`,
                });
              }} />
          </View>
          <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#7d3f98'}
              color={'#FFFFFF'}
              leftIcon={{name: 'delete'}}
              title='Delete'
              textStyle={{fontSize:28}}
              onPress={() => this.deleteBoard(this.state.key)} />
          </View> */}
        </Card>
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
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  cardText: {
    fontSize: 28,
    paddingTop:20
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailButton: {
    marginTop: 10
  }
})

export default BoardDetailScreen;
