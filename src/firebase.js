import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkpXbL1GHxmmL4CvW_FlxmjrJ5s9TWCS4",
  authDomain: "instagramfake-b88c9.firebaseapp.com",
  databaseURL: "https://instagramfake-b88c9.firebaseio.com",
  projectId: "instagramfake-b88c9",
  storageBucket: "instagramfake-b88c9.appspot.com",
  messagingSenderId: "998762603588",
  appId: "1:998762603588:web:fc6bf2b91aad90e684c811",
  measurementId: "G-DVYV8228W3"
      });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};