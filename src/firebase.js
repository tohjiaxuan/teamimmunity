import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBf7ECfyBtOV9_QDufUX3qOSpP1AZqnCp4",
    authDomain: "bt3103-cdec2.firebaseapp.com",
    databaseURL: "https://bt3103-cdec2.firebaseio.com",
    projectId: "bt3103-cdec2",
    storageBucket: "bt3103-cdec2.appspot.com",
    messagingSenderId: "745168736120",
    appId: "1:745168736120:web:5a3b829b247730f6d5c28d",
    measurementId: "G-JZ7JZSGBP1"
  };
  
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();

export default database;

