import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import { List, ListItem, Button, Icon, Card } from 'react-native-elements';
import firebase from '../Firebase';
import Colors from '../constants/Colors';

class BoardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Result',
      headerTitleStyle: {
        paddingTop: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25,
      },
      headerStyle: {
        borderBottomWidth: 0,
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
    this.state = {
      isLoading: true,
      boards: [],
      totalRecord: 0, //count total records of videoValidationResult table in firebase
      numOfValidRecord: 0,
      numOfInvalidRecord: 0
    };
    this.ref = firebase.firestore().collection('videoValidationResult');
  //   this.ref.get() //get all content from your node ref, it will return a promise
  //   .then(snap => { // then get the snapshot which contains an array of objects
  //     this.state.totalRecord = snap.size // will return the collection size
  //  });
    
    this.unsubscribe = null;
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    this.state.totalRecord = querySnapshot.size
    var countValidRec = 0 //Need to use this temperary variable to store the total records retrived from firebase database. Everytime when
    var countInvalidRec = 0 //the table(collection) is updated, it needs to be reset to 0 and retrieve the record
    querySnapshot.forEach((doc) => {
      const {isValid} = doc.data();
      if(isValid === true) {
        countValidRec = countValidRec + 1
        this.state.numOfValidRecord = countValidRec
      } 
      if(isValid === false) {
        countInvalidRec = countInvalidRec + 1
        this.state.numOfInvalidRecord = countInvalidRec
      }
      
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        isValid
      });
    });
    this.setState({
      boards,
      isLoading: false,
      numOfValidRecord:this.state.numOfValidRecord,
      numOfInvalidRecord: this.state.numOfInvalidRecord
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
        <Card style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>Total validated videos: {this.state.totalRecord}</Text>
            <Text style={styles.cardText}>Valid videos: {this.state.numOfValidRecord}</Text>
            <Text style={styles.cardText}>Invalid videos: {this.state.numOfInvalidRecord}</Text>
          </View>
        </Card>
        <Card style={styles.cardContainer}>
        <List>
          {
            this.state.boards.map((item, i) => (
              <ListItem
                textStyle={{fontSize:30}}
                key={i}
                title={JSON.stringify(item.key) !=="" ? 'Video '+(i+1):i}
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
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  cardContainer: {
    flex: 1,
    padding: 20
  },
  cardText: {
    fontSize: 25,
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
