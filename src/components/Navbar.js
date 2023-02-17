import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        Nav Bar
        <NavLink to="/farms">Farms</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/purchases">Purchases</NavLink>

    </nav>
  )
}

export default Navbar