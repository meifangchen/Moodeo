import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Picker,
  Button
} from 'react-native';

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {AuthButton} from '../components/AuthButton';

export default class HomeScreen extends React.Component {
  state = {
    item: '',
    foodCategory:'',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Welcome to FoodManager',
    };
  };
  clickMe = () => {
    const data = this.state.foodCategory;
    if(data == '') {
      alert("Please pick one");
    } else {
      alert(data);
    }
  }
  onPressGenerateItem() { 
   
    const parseData = [{foodName:"apple", diabetesFriendly:"hi"},
    {foodName:"peach", diabetesFriendly:"world"}];
    
    result2 = "";

    parseData.forEach(function(foodItem){
     if(foodItem.foodName == "peach") {
        result2 = foodItem.diabetesFriendly;
    }
  });

    this.setState({
      item: result2
    });

   };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} >
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/welcomePic.png')
                  : require('../assets/images/welcomePic.png')
              }
              style={styles.welcomeImage}
            />
          </View>
        </View>
        
        <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Food type you are looking for</Text>
          <Picker
            selectedValue={this.state.foodCategory}
            style={{height: 200, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({foodCategory: itemValue})
            }>
            <Picker.Item 
            label="Please select an option" 
            value=""
            style={{color: 'red'}}
            />
            <Picker.Item label="All" value="all"/>
            <Picker.Item label="Dairy product" value="dairyProduct"/>
            <Picker.Item label="Meat" value="meat"/>
            <Picker.Item label="Vegetable" value="vegetable"/>
            <Picker.Item label="Whole grain" value="wholeGrain"/>
          </Picker>
          
        </View>
        <Button 
            onPress={this.clickMe}
            title='Confirm'>
          </Button>
          <AuthButton 
            onPress={() => this.onPressGenerateItem()}>Recommend Me
          </AuthButton>
          <Text style={styles.getStartedText}>
          {this.state.item}
          </Text>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  welcomeImage: {
    width: '80%',
    height: 80,
    top: 5,
    paddingTop: 0,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 20,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    height: '30%',
    top: 100,
    left: 0,
    right: 0,
    alignContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#00aeef',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 0,
    color: 'black',
    textAlign: 'center',
  },
});
