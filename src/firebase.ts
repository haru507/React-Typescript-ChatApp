import "firebase/auth"
import 'firebase/firebase-firestore'

import firebase from 'firebase'

const firebaseConfig = {
    
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth  = firebase.auth();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
