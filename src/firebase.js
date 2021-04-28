
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCxeBJHkkuf41WuU72tSW-yv4_TjRcDNt0",
  authDomain: "evernote-clone-271a5.firebaseapp.com",
  projectId: "evernote-clone-271a5",
  storageBucket: "evernote-clone-271a5.appspot.com",
  messagingSenderId: "116073152646",
  appId: "1:116073152646:web:ddd067ee82c086f3dc1107"
});

const db = firebaseApp.firestore();

export { db };