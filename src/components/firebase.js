import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkXAbeILMHbLZ2gCBTJSswm45SbBUPDfE",
  authDomain: "clone-8ac12.firebaseapp.com",
  projectId: "clone-8ac12",
  storageBucket: "clone-8ac12.appspot.com",
  messagingSenderId: "753028185633",
  appId: "1:753028185633:web:dfa5ed3fe659068deb6d60",
  measurementId: "G-3YMPLWW5SR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
