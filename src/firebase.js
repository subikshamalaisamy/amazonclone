
import firebase from 'firebase/compat/app'; import 'firebase/compat/auth'; import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyJsmVoYhg3fIf-5bpkMe1RlPERvzHcII",
  authDomain: "clone-9a628.firebaseapp.com",
  projectId: "clone-9a628",
  storageBucket: "clone-9a628.appspot.com",
  messagingSenderId: "487364638037",
  appId: "1:487364638037:web:7b904886f610f4d9456bdc",
  measurementId: "G-Y5CSBRX41J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };