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

  const [currentUser, setCurrentUser] = useState(null);

  const [message, setMessage] = useState("");
  const [farms, setFarms] = useState([])

  useEffect(() => { // fetch authorized user
    const fetchSetCurrentUser = async () => {
      try {
        const resp = await fetch("/authorized")
        const data = await resp.json()
        setCurrentUser(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchSetCurrentUser()
  }, [])

    useEffect(() => { // fetch farms
        const fetchFarms = async () => {
          try {
            const resp = await fetch("/farms")
            const data = await resp.json()
            setFarms(data)
          } catch (error) {
            alert(error)
          }
        }
        fetchFarms()
      }, [])

 if(!currentUser) {
  // return(
    showLogin ? <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <SignUp />
  
  
 } 
  return (
   
    <div>
      <Notification message={message} setMessage={setMessage} />
      <Navbar />
      <Header />
      <Switch>

        

        <Route exact path="/farms">
          <FarmContainer farms={farms} setFarms={setFarms} />
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
