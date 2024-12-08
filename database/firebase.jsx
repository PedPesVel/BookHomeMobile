import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBhps5cf27W5FbacQYGciUVn4tWEVhMf9I",
  authDomain: "book-home-mobile.firebaseapp.com",
  projectId: "book-home-mobile",
  storageBucket: "book-home-mobile.firebasestorage.app",
  messagingSenderId: "710117250982",
  appId: "1:710117250982:web:e2881c45ae5b84c034e167",
  measurementId: "G-F1TX96W35C"
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export default{
    firebase,
    db,
};