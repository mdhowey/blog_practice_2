import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
      <ul className="headerMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>
    </header>   
  )

 }

export default Header