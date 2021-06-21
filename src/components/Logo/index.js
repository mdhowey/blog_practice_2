import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logoContainer">
      <div className="logo">
        <NavLink to="/">Alizóngo le'Lóngo de Lóngo</NavLink>
      </div>
    </div>
   )

 }

export default Logo