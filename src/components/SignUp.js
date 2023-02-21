import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const SignUp = ({ setCurrentUser, handleLogSign}) => {

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: ""

})
const history = useHistory()

const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault();
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (response.status === 201) {
        response.json().then(userObj => {
          setCurrentUser(userObj)
          history.push('/farms')
      })      } else {
        response.json().then((error) => {
          alert(error)
        })
      }
    })
    // .then((newUserObj) => {
    //   setNewUser((currentVal) => [...currentVal, newUser]);
    //   history.push('/farms');
    // })
    .catch((error) => alert(error));
};
      

  return (
    <div>SignUp
        <form onSubmit={handleSubmit}>
          <button onClick={handleLogSign}>Log In</button>
          <div>
            <input type="text" name="username" placeholder='UserName' onChange={handleChange} value={newUser.username} required />
          </div>

          <div>
            <input type="text" name="email" placeholder='Email' onChange={handleChange} value={newUser.email} required />
          </div>

          <div>
            <input type="password" name="password" placeholder='PassWord' onChange={handleChange} value={newUser.password} required />
          </div>

          {/* <div>  // this works 
            <input type="text" name="role" placeholder='Role' onChange={handleChange} value={newUser.role} required />
          </div> */}

          <select required name="role" value="" onChange={handleChange}>
          {/* <select required name="role" value="" onChange={handleChange}> */}
            <option value="">Please select your role</option>
            <option value="farmer" >Farmer</option>
            <option value="buyer" >Buyer</option>
          </select>

          <input type="submit" value="Create New User" />

        </form>
    </div>
  )
}

export default SignUp