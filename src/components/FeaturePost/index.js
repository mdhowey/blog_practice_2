import React from 'react'
import Card from '../UI/Card'
import './style.css'

/**
* @author
* @function Lead
**/

const FeaturePost = (props) => {
  return(
    <div className="featureContainer">
      <Card>
        <div className="featureHeader">
          <span className="featureCategory">Featured</span>
          <h1 className="featureTitle">A Daisy'll Do Ya</h1>
          <span className="postedBy">posted on 12-6-20 by Michael D. Howey</span>
        </div>

        <div className="postImageContainer">
          <img src="../assests/images/postImage.jpeg" alt="Post image (Featured)"/>
        </div>

        <div className="featureTextContainer">
          <article className="featureText">
            For the last several weeks, it's been rumored that a great dane has
            been urinating in the the old witches flowers. Strange as it may 
            sound that a witch would care about let alone care for flowers, this
            particular spell-caster is absolutely infatuate with her daisies. 
            The accused great dane, Spankey, was supposedly seen infront of the 
            the witches house at approximately midnight on Tuesday. The witch 
            claims the daisy to have been dry prior to the Spankey sighting. 
            The witch leaves all neighborhood miscreants with this chilling 
            message: 
            <p className="scaryMessage">"Stop peeing on my daisies!"</p>
            <p className="witchSig">-Witchy McWitcherson</p>

          </article>
        </div>  
      </Card>
    </div>
   )

 }

export default FeaturePost