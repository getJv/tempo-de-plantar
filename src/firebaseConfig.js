// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgTL4UUd0_MGgp4sB6hUb2ajzIEbLE1YQ",
    authDomain: "general-api-d2532.firebaseapp.com",
    databaseURL: "https://general-api-d2532.firebaseio.com",
    projectId: "general-api-d2532",
    storageBucket: "general-api-d2532.appspot.com",
    messagingSenderId: "198831312639",
    appId: "1:198831312639:web:e335de54563205bf5846ca"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);