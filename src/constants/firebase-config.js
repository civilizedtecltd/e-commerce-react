// Import the functions you need from the SDKs you need



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzvHSi0kpxiFxCXmEbnWuaape_jWAhuDU",
  authDomain: "abookstore-d5215.firebaseapp.com",
  projectId: "abookstore-d5215",
  storageBucket: "abookstore-d5215.appspot.com",
  messagingSenderId: "591873202424",
  appId: "1:591873202424:web:c5faa8ddde0f95ca62830d",
  measurementId: "G-SPE09YV8D4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;