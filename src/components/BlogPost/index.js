import React from 'react'
import Card from '../UI/Card';
import './style.css';


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    <div className="blogPostContainer">
      <Card style={{marginBottom: '20px', padding: '3px', boxSizing: 'border-box'}}>
        <div className="blogHeader">
          <span className="blogCategory">3-Paws-Up</span>
          <h1 className="postTitle">From a Dog's Point of View</h1>
          <span className="postedBy">posted on 15-6-20 by Sir Raidster Persplikidy</span>
        </div>  
      
        <div className="postImageContainer">
          <img src="../assests/images/poolDog.jpeg" alt="Post image (Featured)"/>
        </div>
        
        <div className="blogTextContainer">
          <article className="blogText">
            I have always enjoyed the company of my owners, but sometimes
            that should really back off. I am constantly being smothered 
            by them to the point that I'm beginning to develop a complex
            and seriously worry about their mental health. Codependency 
            amongst dogs and their respective owners has a been a long-
            standing problem far before anyone had ever heard of COVID-19.
          </article>
        </div>  

      </Card>

      <Card style={{marginBottom: '20px', padding: '3px', boxSizing: 'border-box'}}>
        <div className="blogHeader">
          <span className="blogCategory">Bark Column</span>
          <h1 className="postTitle">Too Cute for Comfort</h1>
          <span className="postedBy">posted on 13-6-20 by Squishles McGlaughlin</span>
        </div>  
      
        <div className="postImageContainer">
          <img src="../assests/images/postImage.jpeg" alt="Post image (Featured)"/>
        </div>
        
        <div className="blogTextContainer">
          <article className="blogText">
            All the French bulldogs have got to go. The Dog Council has spoken:
            <q className="blogQuote">The outrageously cute pooches have got to move on.</q> The council will take this to a 
            puppy-wide vote sometime next month.
          </article>
        </div>  

      </Card>

      <Card style={{marginBottom: '20px', padding: '3px', boxSizing: 'border-box'}}>
        <div className="blogHeader">
          <span className="blogCategory">Dogs Do Work</span>
          <h1 className="postTitle">An Absolute Disaster</h1>
          <span className="postedBy">posted on 9-6-20 by Sahiany Crumwiddy</span>
        </div>  
      
        <div className="postImageContainer">
          <img src="../assests/images/mess.jpeg" alt="Post image (Featured)"/>
        </div>
        
        <div className="blogTextContainer">
          <article className="blogText">
            Reports of shenannigans and bewitchings, messy desks and late 
            nite bafoonery; I should go to bed before another rediculous 
            photo is loaded to the web...     
          </article>
        </div>  

      </Card>
    </div>    
   )

 }

export default BlogPost