import React from 'react';
import { ActivityIndicator,StyleSheet, View, Button,Text } from 'react-native';

import * as firebase from 'firebase';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import Colors from '../constants/Colors';

// class SignUpScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Sign Up',
//     headerTitleStyle: {
//       justifyContent: 'center',
//       fontWeight: 'bold',
//       fontSize:25,
//     },
//     headerTintColor:Colors.tintColor
//   };

//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//       authenticating: false,
//       user: null,
//       error: '',
//     };
//   }

//   render() {
//     return (
//         <View style={styles.container}>
//           <AuthInput
//             placeholder='Enter your email...'
//             label='Email'
//             onChangeText={email => this.setState({ email })}
//             value={this.state.email}
//           />
//           <AuthInput
//             placeholder='Enter your password...'
//             label='Password'
            
//             onChangeText={password => this.setState({ password })}
//             value={this.state.password}
//           />
//           <AuthButton onPress={() => { this.props.navigation.navigate('Home') }}>Confirm</AuthButton>
//           <Text>{this.state.error}</Text>
//         </View>
//       )
//     }
//   }

  class SignUpScreen extends React.Component {
    static navigationOptions = {
      title: 'Sign Up',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
      },
      headerTintColor:Colors.tintColor
    };
    
    state = {
      email: '',
      password: '',
      authenticating: false,
      user: null,
      error: '',
    }

    onPressSignIn() {
      this.setState({
        authenticating: true,
      });
    
      const { email, password } = this.state;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then( () => this.props.navigation.navigate('Home')
        )
        .catch(() => {
          // Login was not successful
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => this.setState({
              authenticating: false,
              user,
              error: '',
            }))
            .catch(() => this.setState({
              authenticating: false,
              user: null,
              error: 'Authentication Failure',

            }))
        })
    }

    onPressLogOut() {
      firebase.auth().signOut()
        .then(() => {
          this.setState({
            email: '',
            password: '',
            authenticating: false,
            user: null,
          })
        }, error => {
          console.error('Sign Out Error', error);
        });
    }
  
    renderCurrentState() {
      if (this.state.authenticating) {
        return (
          <View style={styles.form}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
  
      if (this.state.user !== null) {
        return (
          <View style={styles.form}>
            <Text>Successfully create a moodeo account!</Text>
            <AuthButton onPress={() => { this.props.navigation.navigate('SignIn')}}>Back to sign in</AuthButton>
          </View>
        )
      }
  
      return (
        <View style={styles.form}>
          <AuthInput
            placeholder='Enter your email'
            label='Email:'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <AuthInput
            placeholder='Enter your password'
            label='Password:'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <AuthButton onPress={() => this.onPressSignIn()}>Sign Up</AuthButton>
          
        
          <Text style={styles.errorText}
          
          >{this.state.error}</Text>
        </View>
      )
  
    }
  
    render() {
      return (
        <View style={styles.container}>
          {this.renderCurrentState()}
        </View>
      );
    }
}

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 20,
  //     alignItems: 'center',
  //     justifyContent: 'center'
  //   },
  //   form: {
  //     flex: 1
  //   }
  // });

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    paddingTop: 10
  },
  text: {
    fontSize: 18,
    paddingTop: 22,
    color: Colors.tintColor
  },
});
export default SignUpScreen;