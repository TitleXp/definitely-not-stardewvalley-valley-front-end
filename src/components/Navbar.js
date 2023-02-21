import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = ({currentUser}) => {

  const currentRole = currentUser.role

  // console.log(currentRole)

  if(currentRole==="farmer") {
    return(
      <nav>
        <div>
          Hi, {currentUser.username}, 
          You are currently {currentUser.role}
        </div>
        Nav Bar
        <NavLink to="/farms">Farms</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    )
  }

  if(currentRole==="buyer") {
      return (
          <nav>
            <div>
              Hi, {currentUser.username}, 
              You are currently {currentUser.role}
            </div>
              Nav Bar
              <NavLink to="/farms">Farms</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/purchases">Purchases</NavLink>
          </nav>
    )
  }
}

export default Navbar

// if(!currentUser) { 
//   // console.log("inside if statement")
//   return (
//   <>
//     {showLogin? <Login setCurrentUser={setCurrentUser} handleLogSign={handleLogSign}/> :
        
//         <SignUp setCurrentUser={setCurrentUser} handleLogSign={handleLogSign}/> }
//   </>
//   )
// }
