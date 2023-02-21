import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Login = ({setCurrentUser, handleLogSign}) => {

    const history = useHistory()

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
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.status === 200){
                res.json().then(userObj => {
                    setCurrentUser(userObj)
                    history.push('/farms')
                })
            } else {
                res.json().then(errorObj => alert(errorObj.error))
            }
        })
        .catch(error => alert(error))
        setUser({
            email: "",
            password: ""
        })
    }


  return (
    <div>Login
        
        <form onSubmit={handleSubmit}>
            <button onClick={handleLogSign}>Sign Up</button>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="text" onChange={handleChange} value={user.email} name="email" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={handleChange} value={user.password} name="password" />
            </div>

            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login;