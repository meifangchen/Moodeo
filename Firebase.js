import * as firebase from 'firebase';

//const settings = {timestampsInSnapshots: true};

const config = {
  
    apiKey: "AIzaSyCWhfnv5YGVh89Oxc26WilGu2kI9NET6ww",
    authDomain: "foodmanager-4af3d.firebaseapp.com",
    databaseURL: "https://foodmanager-4af3d.firebaseio.com",
    projectId: "foodmanager-4af3d",
    storageBucket: "foodmanager-4af3d.appspot.com",
    messagingSenderId: "41696452489"
};
firebase.initializeApp(config);



//export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
