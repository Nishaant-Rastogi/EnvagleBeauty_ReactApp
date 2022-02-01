import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCEqGPyOiQciuyDB1tL87WbcaNBqClC2R8",
    authDomain: "envagle-beauty.firebaseapp.com",
    projectId: "envagle-beauty",
    storageBucket: "envagle-beauty.appspot.com",
    messagingSenderId: "352592925650",
    appId: "1:352592925650:web:32b01b1c8464df04ca6e0b",
    measurementId: "G-9Q58HM1FSY"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();


const auth = getAuth();

export { db, auth };