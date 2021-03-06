import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
