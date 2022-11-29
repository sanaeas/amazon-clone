import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51M8JyEDI382dDOcJ62L4dFaYsFFfN84RC8o5NlCM5blCxqfqafLz9cXo9pkZFMOQt4xD3iFXousDg6jX5CjKva0j00SDkZOfkr');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("The user is:", user);

      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
