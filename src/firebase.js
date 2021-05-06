
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
//your firebase api keys//
});

const db = firebaseApp.firestore();

export { db };
