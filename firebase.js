import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyB-Vd1R-XLd653XTABwoV54IzTJL2HVznw",
  authDomain: "cnatureapp.firebaseapp.com",
  projectId: "cnatureapp",
  storageBucket: "cnatureapp.appspot.com",
  messagingSenderId: "528097178665",
  appId: "1:528097178665:web:e6dca83c492d96aa5b5838",
  measurementId: "G-J5ND5EZ9TX",
};
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();

export { firebase, db };
