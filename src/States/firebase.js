import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEqGPyOiQciuyDB1tL87WbcaNBqClC2R8",
  authDomain: "envagle-beauty.firebaseapp.com",
  databaseURL: "https://envagle-beauty-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "envagle-beauty",
  storageBucket: "envagle-beauty.appspot.com",
  messagingSenderId: "352592925650",
  appId: "1:352592925650:web:9566102bd0ab4537ca6e0b",
  measurementId: "G-J9YG02FJJ3"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();


const auth = getAuth();
export { db, auth };