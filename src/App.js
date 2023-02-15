import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Login from './components/Login';
import Notification from './components/Notification';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FarmCard from './components/FarmCard';
import FarmContainer from './components/FarmContainer';
import ProductCard from './components/ProductCard';
import ProductContainer from './components/ProductContainer';


function App() {

   const [message, setMessage] = useState("");
   const [farms, setFarms] = useState([])

  return (
   
    <div>
      <Notification message={message} setMessage={setMessage} />
      <Navbar />
      <Header />
      <Switch>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/farms">
          <FarmContainer />
        </Route>

        <Route exact path="/farms/:id">
          <FarmCard />
        </Route>

        <Route exact path="/products">
          < ProductContainer/>
        </Route>
       
      </Switch>
    </div>

  );
}

export default App;
