import React from 'react';
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    
    <div className="sideBarContainer">
      
      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
       
        <div className="cardHeader">
          <span>About Me</span>
        </div>

        <div className="profileImageContainer">
          <img src='../assests/images/profileImage.jpg' alt="cute dog and some guy"/>
        </div>
        
        <div className="cardBody">
          <p className="sideBarText">I'm Alí, and I want to be friend! My owners are 
                                     absolutely ridiculous and made me this blog... I know, I'm just a dog, but 
                                     pretty dang cute... and stinky.</p>
        </div>
      
      </Card>
      
      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          
          <div className="recentPost">
            <h3 className="recentPostTitle">Christmas in June</h3>
            <span>15-6-21</span>
          </div>

          <div className="profileImageContainer">
            <img src='../assests/images/watchDog.jpeg' alt="cute dog and some guy"/>
          </div>
          
          <div className="recentPost">
            <h3 className="recentPostTitle">Cats Sign Peace Treaty</h3>
            <span>15-6-21</span>
          </div>
          
          <div className="profileImageContainer">
            <img src='../assests/images/mess.jpeg' alt="cute dog and some guy"/>
          </div>

          <div className="recentPost">
            <h3 className="recentPostTitle">Parcels and Pastries</h3>
            <span>15-6-21</span>
          </div>

          <div className="profileImageContainer">
            <img src='../assests/images/foodVeg.jpeg' alt="cute dog and some guy"/>
          </div>

        </div>
      
      </Card>

      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        
        <div className="cardHeader">
          <span>Christmas Cutness</span>
        </div>

        <div className="profileImageContainer">
          <img src='../assests/images/cuteChristmas.jpeg' alt="cute dog and some guy"/>
        </div>

        <div className="sideBarBody">
          <p className="sideBarText">This is a throwback from Christmas 2020</p>
        </div>
      
      </Card>

      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        
        <div className="cardHeader">
          <span>Pro-Human</span>
        </div>

        <div className="profileImageContainer">
          <img src='../assests/images/slurpyTongue.jpeg' alt="cute dog and some guy"/>
        </div>

        <div className="sideBarBody">
          <p className="sideBarText">I might look scary sometimes, but don't worry. I
                                     only want to eat other dogs... you're safe!</p>
        </div>
      
      </Card>

    </div>
   )

 }

export default Sidebar