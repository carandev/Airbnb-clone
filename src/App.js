import React, { useState } from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import Login from './components/Login/Login'

function App() {
  const [show, setShow] = useState(false)

  const handleLogin = () => {
    setShow(lastState => !lastState) 
  }

  return (
    <React.Fragment>
      <Navbar handleLogin={handleLogin} />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
      {show && <Login handleLogin={handleLogin} /> }
    </React.Fragment>
  );
}

export default App;
