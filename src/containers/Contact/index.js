import React from 'react';
import Sidebar from '../../components/Sidebar';
import ContactForm from '../../components/ContactForm';

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
  return(
    <div className="container">
      <ContactForm />
      <Sidebar />
    </div>
   )

 }

export default ContactUs