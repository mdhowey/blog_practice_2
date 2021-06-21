import React from 'react';
import Card from '../UI/Card';
import './style.css'

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
  return(
    <div className="aboutUsContainer">
      <Card style={{marginBottom: '20px', padding: '3px', boxSizing: 'border-box'}}>
        <div className="missionHeader">
          <h1 className="missionCompany">JetBlue</h1>
          <h2 className="missionStatement">To inspire humanity — both in the air and on the ground.</h2>
          <article className="missionIdeas">
            JetBlue aimed wide with their mission statement, proving that not 
            all mission statements have to be tailored specifically to what a 
            company does. This inspirational statement focuses on their audience, 
            creating an immediate connection with readers, which isn’t surprising 
            considering their history of creative and personal marketing. JetBlue 
            promotes themselves as a group of service-oriented people dedicated to 
            “bringing humanity back to air travel,” so this mission statement works 
            well to reflect their branding and company personality.
          </article>
        </div>
      </Card>
      <Card style={{marginBottom: '20px', padding: '3px', boxSizing: 'border-box'}}>
        <div className="missionHeader">
          <h1 className="missionCompany">Tesla</h1>
          <h2 className="missionStatement">To accelerate the world’s transition to sustainable energy.</h2>
          <article className="missionIdeas">
            Tesla focuses on enhancing the use of sustainable energy 
            throughout the globe, so it’s no surprise that their mission 
            statement reflects this. Plus, we love their use of 
            “accelerate” right in the mission statement: it’s a great 
            play on words that reflects their industry. This mission statement 
            narrows the focus down to Tesla’s core purpose: to provide clean 
            energy electric vehicles to the public, while still acknowledging 
            the ongoing transition between fossil fuels and sustainable energy. 
            This self-awareness that their market is still relatively young 
            sets Tesla apart as having one of the best mission statements.
          </article>
        </div>
      </Card>
      <Card style={{marginBottom: '20px', padding: '3px', boxSizing: 'border-box'}}>
        <div className="missionHeader">
          <h1 className="missionCompany">TED</h1>
          <h2 className="missionStatement">Spread ideas.</h2>
          <article className="missionIdeas">
            TED’s mission statement is simple, which makes it stand out on 
            this list. While you might find it ironic that a media organization
            that hosts hours of content would stick to a two word mission 
            statement, it actually fits with their branding. TED exists to share 
            ideas online for free, and talks are usually limited to only 18 minutes. 
            This kind of rapid-fire idea sharing is what makes TED such a lasting 
            presence in American and global culture.
          </article>
        </div>
      </Card>
    </div>
   )

 }

export default AboutUs