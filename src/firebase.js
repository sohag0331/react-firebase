// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLev9PqUiX4WrvQw91UhksAcuiEc9mEqk",
    authDomain: "clone-51bf6.firebaseapp.com",
    databaseURL: "https://clone-51bf6.firebaseio.com",
    projectId: "clone-51bf6",
    storageBucket: "clone-51bf6.appspot.com",
    messagingSenderId: "680727148496",
    appId: "1:680727148496:web:d16802128adb88af8b2bd5",
    measurementId: "G-8N8BERH8T4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };