import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Login from './components/Login';
import Notification from './components/Notification';
import Navbar from './components/Navbar';
import Header from './components/Header';
// import FarmCard from './components/FarmCard';
import FarmContainer from './components/FarmContainer';
// import ProductCard from './components/ProductCard';
import ProductContainer from './components/ProductContainer';
import SignUp from './components/SignUp';
import Purchases from './components/Purchases';
import ProductFromFarmContainer from './components/ProductFromFarmContainer';


function App() {

  const history = useHistory()

  const [currentUser, setCurrentUser] = useState(null);
  const [message, setMessage] = useState("");
  const [farms, setFarms] = useState([])
  const [showLogin, setShowLogin] = useState(true)
  // const [newUser, setNewUser] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   role: ""

// })
  // console.log(currentUser)
  const handleLogSign = () => {
    setShowLogin(currentVal => !currentVal)
  }

  useEffect(() => { // fetch authorized user
    const fetchSetCurrentUser = async () => {
      try {
        const resp = await fetch("/authorized")
        const data = await resp.json()
        if(resp.ok){
        setCurrentUser(data)
        // history.push('/farm')
          }else{
            // think about what to put here incase user isn't authorized
        }
        
        // console.log(data)
        // console.log(currentUser)
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
            // history.push('/farm')
          } catch (error) {
            alert(error)
          }
        }
        if(currentUser) {
        fetchFarms()
        history.push('/farm')
      }
      }, [])

    const handleLogOut = (e) => { // delete session/logout
      fetch("/logout", {
         method: "DELETE", }
         ).then((r) => {
        if (r.ok) {
          setCurrentUser(null)
          history.push('/');
        } else {
          r.json()
          .then(err => alert(err))
        }
      });
    }

//  if(!currentUser) {
//    return ( 
//   <>
    {/* <Navbar />
      <Switch>
        <Route exact path="/"> */}
         {/* showLogin? <Login handleLogSign={handleLogSign} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <SignUp handleLogSign={handleLogSign} /> */}
        
        {/* </Route>
      </Switch>  */}
  {/* </>
     )
  }  */}

    if(!currentUser) { 
      // console.log("inside if statement")
      return (
      <>
        {showLogin? <Login setCurrentUser={setCurrentUser} handleLogSign={handleLogSign}/> :
            
            <SignUp setCurrentUser={setCurrentUser} handleLogSign={handleLogSign}/> }
      </>
      )
    }

    // console.log("after if statement")
    // console.log(currentUser)
  return (
    <div>
      {/* <Login />
      <SignUp  newUser={newUser} setNewUser={setNewUser}/> */}
      <Notification message={message} setMessage={setMessage} />
      <Navbar />
      <button onClick={handleLogOut}>Log Out</button>
      <Header />
      <Switch>

        
        <Route exact path="/farms">
          <FarmContainer farms={farms} setFarms={setFarms} />
        </Route>

        <Route exact path="/farms/:id">
          <ProductFromFarmContainer />
        </Route>

        <Route exact path="/products">
          < ProductContainer/>
        </Route>
        
        <Route exact path="/purchases">
          <Purchases />
        </Route>
        
       
      </Switch>
    </div>

  )

  ;
}

export default App;
