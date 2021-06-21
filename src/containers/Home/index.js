import React from 'react';
import'./style.css';
import FeaturePost from '../../components/FeaturePost';
import Sidebar from '../../components/Sidebar';

/**
* @author
* @function Home
**/

const Home = props => {
  return(
    <div className="container">
      <Sidebar />
      <FeaturePost /> 
    </div>
  )
}

export default Home;