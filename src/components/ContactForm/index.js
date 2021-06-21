import React from 'react'
import Card from '../UI/Card'
import './style.css'

/**
* @author
* @function ContactForm
**/

const ContactForm = (props) => {
  return(
    <div className="contactFormContainer">
      <Card style={{marginBottom: '20px', padding: '3px', boxSizing: 'border-box'}}>
        <h1 className="contactFormTitle">We'd love to hear from you!</h1>
        <h2 className="contactFormTagline">Fill in your information below, and we'll get back to you ASAP!</h2>
        <form className="contactForm">
          <fieldset>
            <label>
              <p className="contactFormItem">Name</p>
              <input className="inputField" name="name" />
            </label>
            <label>
              <p className="contactFormItem">Email</p>
              <input className="inputField" name="email" />
            </label>
            <label>
              <p className="contactFormItem">City</p>
              <input className="inputField" name="city" />
            </label>
            <label>
              <p className="contactFormItem">Country</p>
              <input className="inputField" name="country" />
            </label>
            <label>
              <p className="contactFormItem">Message</p>
              <textarea className="inputField" />
            </label>
          </fieldset>
          <button className="submitBtn" type="submit">Submit</button>
        </form>
      </Card>    
    </div>
   )

 }

export default ContactForm