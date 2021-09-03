import "firebase/auth"
import 'firebase/firebase-firestore'

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAiCepbUY_yCc5GP5IDdJOL_qgLOU-C9aE",
    authDomain: "react-typescript-sample.firebaseapp.com",
    projectId: "react-typescript-sample",
    storageBucket: "react-typescript-sample.appspot.com",
    messagingSenderId: "143751660017",
    appId: "1:143751660017:web:ca3a9b67188f8c8a768450",
    measurementId: "G-1S0TE0FW6R"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth  = firebase.auth();
export const FirebaseTimestamp = firebase.firestore.Timestamp;