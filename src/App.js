import React from "react";
import {useEffect} from "react";
import "./App.css";
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { auth } from "./States/firebase";
import { useStateValue } from "../States/StateProvider";


function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <div className="app">
    <Header/>
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>
  </div>
);
}
export default App;