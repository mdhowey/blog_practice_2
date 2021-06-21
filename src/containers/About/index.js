import React from 'react';
import AboutUs from '../../components/AboutUs';
import Sidebar from '../../components/Sidebar';
import './style.css';

/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <div className="container">
      <AboutUs />
      <Sidebar />
    </div>
   )

 }

export default About