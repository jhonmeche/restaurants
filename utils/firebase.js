import firebase from 'firebase/app'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyBjz7dBxIpcAKDdXFYT4UOwZNYIIQyhmNQ",
    authDomain: "restaurants-89ca2.firebaseapp.com",
    projectId: "restaurants-89ca2",
    storageBucket: "restaurants-89ca2.appspot.com",
    messagingSenderId: "844308444523",
    appId: "1:844308444523:web:97484496d1da121638882e"
  };
  // Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig)