// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTXKEViA0-wWDTk0iCgyKQFQIPJ6pcuVE",
    authDomain: "challenge-f55b5.firebaseapp.com",
    databaseURL: "https://challenge-f55b5.firebaseio.com",
    projectId: "challenge-f55b5",
    storageBucket: "challenge-f55b5.appspot.com",
    messagingSenderId: "689941464434",
    appId: "1:689941464434:web:a2f3350a5b753925bd09eb",
    measurementId: "G-9CMG2WX07Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
