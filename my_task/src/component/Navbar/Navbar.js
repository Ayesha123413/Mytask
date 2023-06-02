import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li className="nav_item">
          <a href="#about">About</a>
        </li>
        <li className="nav_item">
          <a href="#explore">Explore</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
