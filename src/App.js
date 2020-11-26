import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"
import Payment from './Payment'
import Orders from './Orders'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51HrgBnCHlNhW787uDVgXwuov3xFLV7wyMgR1iriSMVqZGGNx8i3ctFkKMK6hSaRMrHT1BnLOgToWjnSEdos0JEo100A7h17xN8");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
