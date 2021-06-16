import firebase from "firebase/app";
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/database';
  
  const fireConfig = {
    apiKey: "AIzaSyDeC_myvN6j15Jwda5dwC6QjIeTcEhSPDE",
    authDomain: "magus-skateinline.firebaseapp.com",
    databaseURL: "https://magus-skateinline-default-rtdb.firebaseio.com",
    projectId: "magus-skateinline",
    storageBucket: "magus-skateinline.appspot.com",
    messagingSenderId: "830089284352",
    appId: "1:830089284352:web:8ce8304e3f8cddf75741e5"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(fireConfig);
}

export { firebase };