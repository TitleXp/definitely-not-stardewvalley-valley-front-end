import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = ({target: {name, value}}) => {
        setUser(current => ({
            ...current,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(userObj => console.log(userObj))
            } else {
                res.json().then(errorObj => alert(errorObj.error))
            }
        })
        .catch(error => alert(error))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type="text" onChange={handleChange} value={user.email} name="email" />

            <label></label>
            <input type="password" onChange={handleChange} value={user.password} name="password" />

            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login;